import geocoder
import numpy

loc = "xi'an china"

g = geocoder.arcgis(loc)
lat = g.current_result.lat
lng = g.current_result.lng

print(lat, lng)
