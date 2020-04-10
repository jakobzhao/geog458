# Lab 2: Geo-tagged tweet collection and visualization

**Instructor:** Bo Zhao, 206.685.3846 or zhaobo@uw.edu

**Due:**  April 23rd, by 5:00pm | **Points Available** = 50

In this practical exercise, we will introduce how to collect Geo-tagged Twitter data using an API-based crawler and visualize them on a map using a mapping tool `QGIS`. A web crawler is a purposely designed bot for online data collection. In most cases, online data can be acquired through a dedicated API maintained by the data provider. This lab exercise focuses on visualizing the spatial distribution of twitter data, which reflects the public perception of a specific topic. As you go through this tutorial, think about how you can apply this technique to your final project. Below, we will go over in detail the process of developing an API-based crawler and using QGIS to visualize collected data onto a map. Okay, let us get started!

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/jakobzhao/geog458.git/master)

## 1. Using Jupyter Notebook

In this lab exercise and many of the upcoming lab exercise, we will use python to write our code.

**Python:** is an interpreted, high-level, general-purpose programming language. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. While there are many python IDE (Integrated development environment) for python, we will use `Jupyter Notebook` to avoid any inconvenience upon environment setup.

**Jupyter Notebook:** is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text. Uses include data cleaning and transformation, numerical simulation, statistical modeling, data visualization, machine learning, and much more. Jupyter Notebook files have a file extension of `.ipynb`.

Instead of running Jupyter Notebook on local machines, we will be using `Binder` to interact with our notebooks on a server in a live environment. In order to launch a binder, click on [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/jakobzhao/geog458.git/master) that is located on top of each lab page. It will take a while to launch the server, and you will be brought to a page that looks like below:

![](img/jup_home.png)

You can access all the files that are under the geog458 repository. When you open one of the `ipynb` files, you will see a page like below.

![](img/jup_example.png)

Here, you can make your own edit to the file and run each block of code separately. For further information about the user interface of Jupyter Notebook, refer to the official documentation [here](https://jupyter-notebook.readthedocs.io/en/stable/).

## 2. Harvest geo-tagged tweets using a API-based Crawler

> Note: Most of the codes are already written for you in `geosearch.ipynb` except for some parameters to change. Your essential task here is to understand what each piece of code is doing and be able to utilize it later in this assignment.

In this section, we will make a Twitter crawler to collect geotagged tweets. This crawler is based on `Tweepy` - a python based library which wraps the Twitter API. Tweepy provides a series of data crawling strategies - Harvesting geotagged tweets is just one of them. If you are interested in composing a more complicated data collection strategy, please refer to its documentation at <https://tweepy.readthedocs.io/en/latest/index.html>.

We usually need to install libraries like tweepy using command prompt (if a windows user) or terminal (if a Mac or Linux user). However, since we are working in Jupyter Notebook, we run the following code, as shown in the script below, to install a library.

```Python
!python -m pip install tweepy
```

To use the tweepy library, you need to register a Twitter developer account [here](https://developer.twitter.com/en).

![](img/twitter_dev.png)

Once you finish registering your account, you can apply for a Twitter app. It is located on the top right corner of the page. Click on `Apps`.

![](img/dev_acc.png)

Then, you will see a page with a list of apps that you've created for getting Twitter API, but for now, the list should be empty. In order to register for Twitter API, click on `Create an app`.

You will be prompted to fill in the app details. You are required to fill in: `App name`, `Application description`, `Website URLs`, and `'Tell us how this app will be used'`. If you are not sure what to put for the website URLs, you may enter your SNS profile URLs, such as your Facebook page, LinkedIn page, etc.

![](img/app_details.png)

After you fill in all the required fields, you may click on `Create`. Twitter takes some time to process your information to validate your access to the Twitter API.

Once you are registered, you can finally get your own keys and tokens. Go to the `App Detail` of the app you just created. Click on the tab `Keys and tokens`, and you should be able to see all the keys and tokens required to use the Twitter API.

Copy and paste the keys and tokens you received into corresponding parameters in the code below:

```Python
consumer_key = "your_consumer_key"
consumer_secret = "your_consumer_secret"
access_token = "your_access_token"
access_token_secret = "your_access_token_secret"
```

This script `geosearch.ipynb` was programmed using a `class` structure instead of a run-down script structure. A `StreamListener` is defined for later use, the main procedure will be executed after the line `if __name__ == "__main__":`. This piece of code was programmed with reference to <https://github.com/shawn-terryah/Twitter_Geolocation>. So, let us start with the main procedure and then switch to the stream listener.

```Python
class StreamListener(tweepy.StreamListener):
    """tweepy.StreamListener is a class provided by tweepy used to access
    the Twitter Streaming API to collect tweets in real-time.
    """

    def __init__(self, time_limit=60, file=""):
        """class initialization"""

    def on_data(self, data):
        """This is called when data are streamed in."""


if __name__ == "__main__":
    ....
```

Once we acquire the consumer key and access token, we can create a variable to handle the twitter authentication.

```Python
myauth = tweepy.OAuthHandler(consumer_key, consumer_secret)
myauth.set_access_token(access_token, access_token_secret)
```

To retrieve geo-tagged tweets, three bounding boxes are defined. After initializing the stream listener, a stream object is created out of `tweepy.Stream object`. Then, the LOCATION array is passed to the stream filter method. By doing so, the geo-tagged are filtered and collected.

```Python
LOCATIONS = [-124.7771694, 24.520833, -66.947028, 49.384472,  # Contiguous US
               -164.639405, 58.806859, -144.152365, 71.76871,  # Alaska
               -160.161542, 18.776344, -154.641396, 22.878623]  # Hawaii
stream_listener = StreamListener(time_limit=60, file=output_file)
stream = tweepy.Stream(auth=myauth, listener=stream_listener)
stream.filter(locations=LOCATIONS)
```

Notably, the filter not only acquires geotagged tweets but also other kinds of tweets according to the input filter strategy.
tweepy allows you to filter tweets through a keyword. By choosing a keyword related to the timely topic like "coronavirus", you can obtain data that gives you an insight into the public perception of the topic.

```python
stream.filter(track=['coronavirus'], is_async=True)
```

Additionally, to use filters to stream tweets by a specific user. The following parameter is an array of IDs. For example, the Twitter ID for the white house is `822215673812119553`, and you can collect tweets from this specific account. We will not be changing this parameter in this lab exercise, but consider how you can utilize this function if this is something that you would like to link to your final project.

```python
stream.filter(follow=["2211149702"])
```

However, these different filtering parameter returns different data structures, and they store different information about the tweets. For this reason, keyword filtering does not return plenty of geotagged tweets. If you are changing the keyword parameter, you should run this crawler for a longer duration. To do so, simply change the `time_limit` parameter. For example, if you want to run this crawler for 5 minutes, set it to 300. If you are trying to use a less common keyword, the chance is you will not have a sufficient amount of data. In that case, consider running this crawler for even longer.

```python
stream_listener = StreamListener(time_limit=60, file=output_file)
```

The `on_data` function will handle data processing and output. In general, this function terminated after `self.limit` second. To process each record `data`, the captured `data` is converted to a JSON variable `datajson`. We will mainly output six variables, in terms of id, username, created_at, lng, lat, and text. Notably, If the geotag is a single point, the lat and lng will be captured directly from the `coordinates`. If the geotag is a place, the lat and lng will capture the centroid of the bounding box. Similarity, a new CSV file named `tweets.csv` is created under [the assets folder](assets/).

In a lot of actual work environments, it is common to use a database to store information. We are using CSV files as data storage to simplify our tasks. If you would like to know more about using a database to store information, you can learn more [here](https://github.com/jakobzhao/geog458/blob/master/labs/lab02/database/pe.md).

```Python
def on_data(self, data):
    """This is called when data are streamed in."""
    if (time.time() - self.start_time) < self.limit:
        datajson = json.loads(data)
        print (datajson)
        id = datajson['id']
        username = datajson['user']['screen_name']
        created_at = datajson['created_at']
        text = datajson['text'].strip().replace("\n", "")

        # process the geo-tags
        if datajson['coordinates'] == None:
            bbox = datajson['place']['bounding_box']['coordinates'][0]
            lng = (bbox[0][0] + bbox[2][0]) / 2.0
            lat = (bbox[0][1] + bbox[1][1]) / 2.0
        else:
            lng = datajson['coordinates']['coordinates'][0]
            lat = datajson['coordinates']['coordinates'][1]

        record = '%d, %s, %s, %f, %f, %s \n' % (id, username, created_at, lng, lat, text)
        print (record)
        self.f.write(record)
    else:
        self.f.close()
        print ("finished.")
        return False
```

Now, you should have a general idea of what the script does and how to change the parameters based on your geographical area of interest. In this section, there are **3 main tasks** here for you to complete:

1.  Register your own Twitter developer account to claim API keys and access tokens. Copy and paste them onto the corresponding parameter in `geosearch.ipynb` located under this lab.

2.  Change either the location parameter or the keyword parameter to filter specific tweets based on your interest. The location could be anywhere on this earth, but try to choose locations that are large enough to collect a sufficient amount of data. (If you are interested in Twitter data that are geo-tagged in the US, you do not need to change this parameter). If you are changing the keyword parameter, think carefully about how long you should run the crawler.

3.  Run each block of code in `geosearch.ipynb`. Your collected data will be stored in `tweets.csv` under `assets` folder.

## 3. Visualizing geo-tagged data using QGIS

In the previous section, we developed a crawler for geotagged tweets. In this section, we will visualize the collected geotagged tweets data in the previous section using a GIS application `QGIS`. QGIS is a free and open-source cross-platform desktop geographic information system application that supports viewing, editing, and analysis of geospatial data. If you have not downloaded QGIS yet, please download the latest version [here](https://qgis.org/en/site/forusers/download.html).

Under `lab02` repository, you should have a CSV file named `tweets.csv` filled with harvested data like below:

![](img/gathered_data.png)

A CSV file is a delimited text file that uses a comma to separate values. Each line of the file is a data record. Each record consists of one or more fields, separated by commas. Download this file by clicking `File -> Download`. Store it somewhere that you can find and access easily.

Now, let's open up your QGIS Desktop. When you first open GQIS, it should look like below. To create a new project, either click on the blank paper icon on the top left or press the shortcut key (Ctrl+N).

![](img/q_interface.png)

The first step of mapping our data is to add a base map. A base map is a layer with geographic information that serves as a background. A base map provides context for additional layers that are overlaid on top of the base map. We first need to download a plugin that provides different base maps. After you open a new project in QGIS, navigate yourself to `Plugins > Manage and Install Plugins`. It will open a window like this:

![](img/plugin_install.png)

In the search bar, type in `QuickMapServices` and install the plugin. After installing it, close the plugins window. Navigate yourself to `Web > QuickMapServices > Settings`. You should see a page like this:

![](img/QWS_setting.png)

Click on the `More Services` tab and click on `Get contributed pack`. This will download all the base maps that are provided by different plugin authors. Then, close the page and navigate yourself again to `Web > QuickMapServices`. This time, you will see a list of contributors and base maps that they provide. Feel free to try adding different base maps, but for our exercise, let's use a base map called `Dark Matter (retina)` under `CartoDB`.

After adding the base map, it should look like this:

![](img/basemap.png)

Now let us project the data we collected to this base map. Click on `Layer > Add Layer`. You will see different ways of adding a layer. In our case, we would like to add data stored in a CSV file, which is a delimited text file. Therefore, choose  `Add Delimited Text Layer`. In the file name section, choose the file we just downloaded from Jupyter Notebook named. Choose CSV as the file format. Expand `Geometry Definition` tab, set the X field as `lng`, and set the Y field as `lat`. Additionally, set Geometry CRS as `Default CRS: EPSG:4326 - WGS 84` and leave everything else as default. Now, go ahead and `add` this layer. All the layers you add to a map can be edited and managed in the `layer` section on bottom-left corner of QGIS interface.

![](img/layer_section.png)

After adding the layer, close your data source manager. Zoom in to wherever you chose your target geographical area. Your map should look something similar to this:

![](img/layer_added.png)

You can also change the symbology (size, color, etc.) of data points. Left-click on the `tweets` layer and click on `Properties -> Symbology`. Here, not only can you choose the color and size of each data point, you can also edit what shape/symbol to represent each data point. Feel free to change the color/size/symbol here appropriately so that it looks aesthetically pleasing to your audience.

We can now see geocoded locations where tweets were made, and distribution of the tweets tells us in which geographic areas Twitter is most frequently used. Such a trend gives us further insight when compared with other data. For example, this trend might be a result of the increasing population in the west and east coast.

Finally, save your map as a `qgz` file. To do so, click on `Project -> Save as` and change the file type to qgz format.

> What is QGZ file? QGZ file is a Quantum GIS Compressed Project. Quantum GIS (QGIS) is a cross-platform free and open-source desktop geographic information systems (GIS) application that provides data viewing, editing, and analysis capabilities.

![](img/save_as.png)

Additionally, export this map as an image. To do so, `Project -> Import/Export -> Export Map to Image...`.

![](img/image_export.png)

You will insert your qgz file and this exported image to your repository later.

In this section, you have **3 main tasks** to complete:

1.  Download the CSV file with Twitter data to your computer.

2.  Download `QGIS` and plot the data onto a map.

3.  Make any appropriate visual edits to this map. Save it as `qgz` file and export the map as an image.

## 4. Deliverable

You are expected to walk through this instruction, execute python script in `geosearch.ipynb` to develop your own crawler to collect geotagged tweets, and additionally, visualize your harvested geotagged data using QGIS. Then, you are asked to write a short narrative of your map, analyzing the data you gathered in a markdown file.

To submit your deliverable, please create a new GitHub repository, and submit the URL of the GitHub to the **Canvas Dropbox** of this practical exercise. The file structure of this GitHub repository should look similar to below.

```powershell
[your_repository]
    │ [your_crawler].ipynb
    │readme.md
    ├─assets
    │      tweets.csv
    │      [your_dataset].csv
    |      [your_map].qgz
    ├─img
    |      [screenshot_of_map].png
```

Here are the grading criteria:

1.  Complete the main tasks in **section 2**. Export and save the `tweets.csv` file to the `assets` folder under your own repository. (POINT 15)

2.  Complete the main tasks in **section 3**. Export and save both your `qgz` file and an exported image of the map to the corresponding folder in your repository. (POINT 15)

3.  In the `readme.md` file, write a short narrative for your generated map, making any meaningful analysis on the distribution of collected data. (POINT 20)

**Note:** Lab assignments are required to be submitted electronically to Canvas unless stated otherwise. Efforts will be made to have them graded and returned within one week after they are submitted. Lab assignments are expected to be completed by the due date. **_A late penalty of at least ten percentage units will be taken off each day after the due date._** If you have a genuine reason(known medical condition, a pile-up of due assignments on other courses, ROTC, athletics teams, job interview, religious obligations, etc.) for being unable to complete work on time, then some flexibility is possible. However, if in my judgment you could reasonably have let me know beforehand that there would likely be a delay, and then a late penalty will still be imposed if I do not hear from you until after the deadline has passed. For unforeseeable problems, I can be more flexible. If there are ongoing medical, personal, or other issues that are likely to affect your work all semester, then please arrange to see me to discuss the situation. There will be NO make-up exams except for circumstances like those above.
