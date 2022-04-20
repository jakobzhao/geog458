# Lab 3: Web Map Application

**Instructor:** Bo Zhao, 206.685.3846 or zhaobo@uw.edu; **Points Available** = 50

In this lab, we will design a web map application. This application is a proportional symbol map of earthquakes near Japan. When creating a web map, one of the critical components is styling your elements to provide proper symbolization for your data. This increases legibility for users and can give your map an appealing, custom design. Elements that can be customized to include thematic layers (i.e., choropleth, proportional symbols, dot density, etc), base maps, interactive features (the components of the map that allow for user interaction), and legends and supplemental information (such as credits, etc.). The earthquake data is from USGS earthquake catalog. Below is the web map you will make by walking through this lab handout.

![](img/final_map.png)

To get started, please synchronize the course material to the working space of your local computer. The material for this lab is located at `[your_working_space]/geog458/labs/lab03`. Next, open the course material in VS Code.

## 1. Display the map and load geospatial data

In your IDE (VS Code, or any other alternatives you are familiar), open `1_basic.html` to prepare for editing.

In this file, you will see the structure of a basic HTML page.

Inside the `head` tag, we include both the latest version of `mapbox-gl-js.css` and `mapbox-gl-js.js`. After the `mapbox-gl-js.css` we add a `style` tag in order to include our customized CSS styling codes.

Inside the `body` tag, we put a `map` div tag for holding the map object. After that map `div` tag, we include a `script` tag to put the javascript codes.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Earthquakes in Japan</title>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css" rel="stylesheet">
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.js"></script>
    <style>
    </style>
</head>

<body>
    <div id="map"></div>
    <script>
    </script>

</body>

</html>
```


**The Script**

Inside the `script` tag,  we create a `map` as a variable to hold the mapboxgl map object. The first parameter `container` will anchor to the map element placeholder in the body element.

In the style parameter, we can also add a basemap style. Mapbox dark style (mapbox://styles/mapbox/dark-v10) is selected.

```js
mapboxgl.accessToken =
    'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
let map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 4 // starting zoom
});
```


**Make the map full screen**

To expand the map to the full screen, we set no margin and padding of the body element, and the map element will anchor to both the top and bottom. The width of the map will occupy the whole screen. 

```css
body {
    margin: 0;
    padding: 0;
}

#map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
```


If you are using VS code, please open up the live server, and then navigate to 1_basic.html. If you follow the default setting of VS Code, the URL address of map1.html should be `http://127.0.0.1:5500/labs/lab03/1_basic.html`.

![](img/map1.png)

The dark color base map will enable the thematic year stands out. In addition to switch to other map style, please refer to [map style collection](https://www.mapbox.com/gallery/).

**Asynchrous geospatial data loading**

Next, we want to add the earthquake data set to the map. 
```

In the directory `assets`, you will find a geojson file - `earthquakes.geojson`. Enter the following code snippet to add it to the map.

```javascript
map.on('load', () => { 
    // when loading a geojson, there are two steps
    // add a source of the data and then add the layer out of the source
    map.addSource('earthquakes', {
        type: 'geojson',
        data: 'assets/earthquakes.geojson'
    });

    map.addLayer({
        'id': 'earthquakes-layer',
        'type': 'circle',
        'source': 'earthquakes',
        'paint': {
            'circle-radius': 8,
            'circle-stroke-width': 2,
            'circle-color': 'red',
            'circle-stroke-color': 'white'
        }
    });

});

```

The map object will create a new data source `earthquakes`, and it then imports to the new `earthquakes-layer`. We set the default style of each earthquake as a black dot. But they will be refreshed into new styles after applying the proportional symbol strategies.

Then, please open `map2.html` to see how the map looks like at this stage.

![](img/map2.png)

## 2. Proportional symbol visualization

First we need to define the grades of all magnitudes, the corresponding color radius.


```javascript
const grades = [4, 5, 6],
    colors = ['rgb(208,209,230)', 'rgb(103,169,207)', 'rgb(1,108,89)'],
    radius = [5, 15, 20];
```

Then, I will apply these grades, colors and radius to symbolize each dot.

```javascript
'paint': {
    // increase the radius of the circle as the zoom level and dbh value increases
    'circle-radius': {
        'property': 'mag',
        'stops': [
            [{
                zoom: 5,
                value: grades[0]
            }, radius[0]],
            [{
                zoom: 5,
                value: grades[1]
            }, radius[1]],
            [{
                zoom: 5,
                value: grades[2]
            }, radius[2]]
        ]
    },
    'circle-color': {
        'property': 'mag',
        'stops': [
            [grades[0], colors[0]],
            [grades[1], colors[1]],
            [grades[2], colors[2]]
        ]
    },
    'circle-stroke-color': 'white',
    'circle-stroke-width': 1,
    'circle-opacity': {
        'stops': [
            [3, 0],
            [10, 1]
        ]
    }
}
```

When determining the colors, I need some predefined color ramp to symbolize geographic features. [ColorBrewer](http://colorbrewer2.org/) is an online tool designed to help people select good color schemes for maps and other graphics. It provides three types of palettes: sequential, diverging, and qualitative.

-   Sequential palettes are suited to ordered data that progress from low to high.
-   Diverging palettes are suited to centered data with extremes in either direction.
-   Qualitative palettes are suited to nominal or categorical data.

![](img/colorbrewer.jpg)

> **Note:** Color palettes from Color Brewer.



## 3 Add a Legend

Adding a legend is easy, but requires quite a bit of code. The workflow to create a legend involves creating a Leaflet control, setting the control to populate with HTML that represents the legend components, and styling the HTML with CSS, so they appear correctly on our screen. I am going to throw a bit more code at you this time, and we will walk through what it is doing. Enter the following block of code to your `script`.

```js
// create legend
const legend = document.getElementById('legend');

//set up legend grades and labels
var labels = ['<strong>Size</strong>'], from, to;
//iterate through grades and create a scaled circle and label for each
for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];
    dot_radius = 2 * radius[i];
    labels.push(
        '<p class="break"><i class="dot" style="background:' + colors[i] + '; width: ' + dot_radius +
        'px; height: ' +
        dot_radius + 'px; "></i> <span class="dot-label" style="top: ' + dot_radius / 2 + 'px;">' + from +
        '</span></p>');

}
const source =
    '<p style="text-align: right; font-size:10pt">Source: <a href="https://earthquake.usgs.gov/earthquakes/">USGS</a></p>';

legend.innerHTML = labels.join('') + source;
};

```


**Use CSS to Style**

If we save and refresh, the items you see will not make much sense. We need to use CSS to give them placement and organization on the page. The following CSS code will style our elements. Enter it between the style tags in the head of your HTML document. Like above, we will then walk through what it does.

```css

/* the layout of the legend panel */
#legend {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #fff;
    margin-right: 20px;
    border-radius: 3px;
    padding: 10px;
    text-align: center;
    margin-bottom: 40px;
    width: 100px;
}

/* each line for a break */
.break {
    position: relative;
    margin: 0px;
    padding: 0px;
}

/* basic style for a dot/circle */
.dot {
    display: inline-block;
    margin-top: 5px;
    border-radius: 50%;
    opacity: 0.6;
}

/* the label for the dot */
.dot-label {
    position: absolute;
    top: 0;
    right: 0;
    font-style: italic;
}

/* the text color of a hyper link */
a {
    color: black
}
```

First, we set properties for the legend using `.legend` to style the legend class. We set a line height, color, font, padding, background, drop shadow, and border corner radius. Next, we set our icon (`i`) tag. This should be set to float: left; so that elements will align into columns, then we set properties for the image (`img`) tag, making them the same size and giving them the same float as the icons. Lastly, we style our paragraph tag (`p`), making sure line-height is consistent with the others. Save and refresh your map. You should see your styled legend applied to your map.

### 4 Change the fonts

Choosing fonts is an essential part of cartography, and an often overlooked one. Right now, our map uses the default Browser font, usually Times New Roman. To edit fonts, we want to style CSS. In CSS, there are many options for fonts; for more reading, check out the [w3schools font documentation](http://www.w3schools.com/css/css_font.asp).

Traditionally, the font is loaded into your page only if you have it on your computer. This presents a problem though, if someone does not have the font, it will change the page to use secondary or default fonts. In order to ensure that every visitor's computer displays the same, you can link to online font libraries. A standard, useful online font library is Google Fonts. Google fonts can be added to any site, and since you link to the style, you do not have to worry about the user not having the font installed on their computer. Check out the Google Font library and explore their options. Let us link a standard web font called `Open Sans` to our document so we can use it. To link it to our document, enter the following line of code into the head section of your document. It should go right after your stylesheets.

```html
<head>...
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
...</head>
```

Next, to style all text in our document with the `Open Sans` font, modify the `.legend` tag in the CSS (the code between the style tags). Modify the body CSS properties to look like the following, adding a font-family property after margin.

```html
.legend {
    ...
    font-family: 'Open Sans', sans-serif;
    ...
}
```

Save and refresh your map. Or open `map5.html`.  `Open Sans` will now be your preferred font for legend panel!

![](img/map5.png)

## 5. Deliverable

After you successfully deploy this earthquake map, you are expected to build another thematic map of COVID-19 cases and rates in the United States.

Whenever we are working with data, it’s very important that we understand the nature of the data and the intellectual context within which it operates. In the `assets` directory of this lab, you will see a zipped file named after `us-covid-2020.zip`. after you unzipped it, you will find two set of shapefiles files: us-covid-2020-rates and us-covid-2020-counts. The COVID-19 case/death data you will be using are originally from [The New York Times](https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv). The data include all the cases in 2020. The population data used for calculating the case rates are from the [2018 ACS 5 year estimates](https://data.census.gov/cedsci/table?g=0100000US.050000&d=ACS%205-Year%20Estimates%20Data%20Profiles&tid=ACSDP5Y2018.DP05&hidePreview=true). Both data are at the county level. The U.S. county boundary shapefile was downloaded from [the U.S. Census Bureau](https://www.census.gov/geographies/mapping-files/time-series/geo/carto-boundary-file.html). The data have been processed by us in order to suit the purpose of this lab. The case rate is calculated as cases per thousand residents. When you go further into GIS, you will find that, for most of the time, you will need to process the data by yourself before actually mapping it.

For your lab deliverable, you need to create a github repository to host two thematic maps, one is a choropleth map of the covid-19 rates and the other is a proportional symbols map of covid-19 cases. If you have taken the course "Web and Mobile GIS", you must be very familiar with choropleth map making, but if you are not familiar with it, you can walk through this [step-by-step lab tutorial](https://github.com/jakobzhao/geog495/tree/main/labs/lab04) before making the choropleth map. The choropleth map should be compiled in the `map1.html` page, while the proportional symbols map should be in `map2.html`.  You are expected to submit the url of the GitHub repository to the Canvas Dropbox of this course. This url should be in the format of `https://www.github.com/[your_github_username]/[your_repository_name]`. Please make sure the name of your repository is **NOT** `lab03` or similar, use a name that can describe the theme of the map you will make.

We expect the followings for your deliverable:

- the shapefiles have been properly converted to geojson data. We expect the geojson has the right projection, the unused attributes has been deleted, the geometric shapes has been simplified (e.g., using [mapshaper](https://mapshaper.org/)). **(4 points)**

- for each map:
  -   an appropriate basemap for each map;  **(2 points per map)**

  -   a fully-functioning thematic layer for each map;  **(4 points for map)**

  -   a legend for each map;  **(4 points for map)**

  -   some interactive elements, like a clickable dot; **(4 points for map)**

  -   supplementary information, like the map title, map description, users, the data sources; **(2 points per map)**

-   write up a project description in the `readme.md` file. This file will introduce the project name, a brief introduction, links to the map, screenshots, the primary functions(especially the function which was not covered in the lectures), libraries in use, data sources, credit, acknowledgment, and other necessary information. **(6 points)**

-   synchronize this project to a GitHub repository. Make sure both maps can be properly visualized using the url `https://[your_github_username].github.io/[your_repository_name]/map1.html` or `map2.html`. (To do that, you may want to check out a previous lecture or lab handouts on how to host a repository on GitHub pages.); **(4 points)**



-   please make sure the internal structure of the files in your project repository is well organized. For example, it may be similar to the file structure below. **(4 points)**

```powershell
[your_repository_name]
    │map1.html
    │map2.html
    │readme.md
    ├─assets
    │      us-covid-2020-counts.geojson
    │      us-covid-2020-rates.geojson
    ├─css
    │      main.css
    ├─img
    │      xxx.jpg
    └─js
            main.js
```
- Finally, submit your repository URL under `Lab 3` on Canvas.



## Acknowledgement

The data has bee processed by Steven Bao, I appreciate Steven's assistance in creating the labe data.