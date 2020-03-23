# created on Dec 24, 2020
# @author:          Bo Zhao
# @email:           zhaobo@uw.edu
# @website:         https://hgis.uw.edu
# @organization:    Department of Geography, University of Washington, Seattle
# @description:     Search geo-tagged tweets within the U.S. This script is modified from https://github.com/shawn-terryah/Twitter_Geolocation

import tweepy, json, time, sqlite3

class StreamListener(tweepy.StreamListener):
    """tweepy.StreamListener is a class provided by tweepy used to access
    the Twitter Streaming API to collect tweets in real-time.
    """
    def __init__(self, time_limit=60, dbfile=""):
        """class initialization"""
        self.start_time = time.time()
        self.limit = time_limit
        self.dbfile = dbfile
        super(StreamListener, self).__init__()

    def on_data(self, data):
        """This is called when data are streamed in."""

        conn = sqlite3.connect(self.dbfile)
        cursor = conn.cursor()

        if (time.time() - self.start_time) < self.limit:
            datajson = json.loads(data)
            print (datajson)
            id = datajson['id']
            username = datajson['user']['screen_name']
            created_at = datajson['created_at']
            text = datajson['text'].strip().replace("\n", "").replace('"', '\"').replace("'", "\"")

            # process the geo-tags
            if datajson['coordinates'] == None:
                bbox = datajson['place']['bounding_box']['coordinates'][0]
                lng = (bbox[0][0] + bbox[2][0]) / 2.0
                lat = (bbox[0][1] + bbox[1][1]) / 2.0
            else:
                lng = datajson['coordinates']['coordinates'][0]
                lat = datajson['coordinates']['coordinates'][1]

            insert_record_sql = "INSERT OR REPLACE INTO geotweets (id, username, created_at, lng, lat, text) VALUES (%d, '%s', '%s', %f, %f, '%s')" % (id, username, created_at, lng, lat, text)
            cursor.execute(insert_record_sql)
            conn.commit()

            record = (id, username, created_at, lng, lat, text)
            print (record)
        else:
            conn.close()
            print ("finished.")
            return False

if __name__ == "__main__":
    # These are provided to you through the Twitter API after you create a account
    # register a Twitter App to get the keys and access tokens.

    dbname = 'assets/tweets.db'

    # Apply for your own Twitter API keys at https://developer.twitter.com/en/apply-for-access
    consumer_key = "your_consumer_key"
    consumer_secret = "your_consumer_secret"
    access_token = "your_access_token"
    access_token_secret = "your_access_token_secret"

    myauth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    myauth.set_access_token(access_token, access_token_secret)

    # LOCATIONS are the longitude, latitude coordinate corners for a box that restricts the
    # geographic area from which you will stream tweets. The first two define the southwest
    # corner of the box and the second two define the northeast corner of the box.
    LOCATIONS = [-124.7771694, 24.520833, -66.947028, 49.384472,  # Contiguous US
                 -164.639405, 58.806859, -144.152365, 71.76871,  # Alaska
                 -160.161542, 18.776344, -154.641396, 22.878623]  # Hawaii

    stream_listener = StreamListener(time_limit=180, dbfile=dbname)
    stream = tweepy.Stream(auth=myauth, listener=stream_listener)
    stream.filter(locations=LOCATIONS)
