# created on Dec 24, 2020
# @author:          Bo Zhao (zhaobo@uw.edu), Angel Lin(lint32@uw.edu)
# @website:         https://hgis.uw.edu
# @organization:    Department of Geography, University of Washington, Seattle
# @description:     The python codes to get pressure, temperature, and humidity data through RPI
#                   and store the data into a csv file

from sense_hat import SenseHat

from datetime import datetime
now = datetime.now() # current date and time
timestamp = datetime.timestamp(now)

sense = SenseHat()
sense.clear()

pressure = sense.get_pressure()
temperature = sense.get_temperature()
humidity = sense.get_humidity()


print("pressure: %.2f, temperature: %.2f, humidity: %.2f" % (pressure, temperature, humidity))

with open("assets/env.csv", "a", encoding="utf8") as fp:
    fp.write("%d, %.2f, %.2f, %.2f \n" % (timestamp, pressure, temperature, humidity))

print("finished!")
