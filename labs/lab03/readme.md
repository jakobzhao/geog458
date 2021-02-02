# Lab 3: Web Map Application

**Instructor:** Bo Zhao, 206.685.3846 or zhaobo@uw.edu

**Due:**  Feb 12th, by 11:59pm | **Points Available** = 50

In this lab, we will design an interactive web map of cell towers in Washington. When creating a web map, one of the critical components is styling your elements to provide proper symbolization for your data. This increases legibility for users and can give your map an appealing, custom design. Elements that can be customized to include thematic layers (i.e., points, lines, and polygons), base maps (as a leaflet `tileLayer`), interactive features (the components of the map that allow for user interaction), and legends and supplemental information (such as credits, etc.). To do that, the county boundaries are from [Washington Data & Research](https://www.ofm.wa.gov/washington-data-research/population-demographics/gis-data/census-geographic-files), and the spatial distribution of cell towers is from [Homeland Infrastructure Foundation-Level Data (HIFLD)](https://hifld-geoplatform.opendata.arcgis.com/datasets/0835ba2ed38f494196c14af8407454fb_0?geometry=-126.488%2C45.696%2C-112.612%2C48.318). Below is the web map you will make by walking through this lab handout.

![](img/final_map.png)

To get started, please synchronize the course material to the working space of your local computer. If you are working in the Digital Earth Lab, please synchronize your course material on the desktop directory.  The material for this lab is located at `[your_working_space]/geog458/labs/lab03`. Next, open the course material in Atom.

## 1. Set up our Map and Add Data

In your IDE (Atom), open `map1.html` to prepare for editing.

In this file, you will see a basic HTML page.

Inside the `head` tag, we include both the latest version of `leaflet.css` and `leaflet.js`. After the `leaflet.css` we add a `style` tag in order to include our customized CSS styling codes.

Inside the `body` tag, we put a `map` div tag for holding the map object. After that map `div` tag, we include a `script` tag to put the javascript codes.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Cell Towers in Washington (2010)</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"/>
    <style>

    </style>
    <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"></script>
</head>
<body>
<!-- Our web map and content will go here -->
<div id="map"></div>
<script>

</script>
</body>
</html>
```

**Full screen styling**

To expand the map to the full screen, we set the width and height of `html`, `body`, and `#map` as `100%`, and no margin, background color as white.

```css
html, body, #map { width: 100%; height: 100%; margin: 0; background: #fff; }
```

**The Script**

Inside the `script` tag,  we create a `mymap` variable to hold the leaflet map object. The first parameter of `L.map` object `'map'` is the `id` of the div to hold the map object.

Next, we add a `tileLayer` to add a base map to the `mymap` variable.

```js
// 1. Create a map object.
var mymap = L.map('map', {
    center: [47.7511, -120.7401],
    zoom: 7,
    maxZoom: 10,
    minZoom: 3,
    detectRetina: true // detect whether the sceen is high resolution or not.
});

// 2. Add a base map.
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(mymap);
```

If you are using Atom, please open up the atom live server, and then navigate to the map1.html. If you follow the default setting of Atom, the URL address of map1.html should be `https://localhost:3000/labs/lab03/map1.html`.

![](img/map1.png)

The base map (in the format of `tile layer`) is provided by CartoDB. The light color stands out the principal features. In addition to switch to other map providers, please refer to [Leaflet providers](http://leaflet-extras.github.io/leaflet-providers/preview/).

**Add the Cell Towers Data**

Next, we want to add the cell tower data set to the map. Firstly, we need to include another Javascript library [`leaflet.ajax`](https://github.com/calvinmetcalf/leaflet-ajax) in the `head` element. This library will be used to read `GeoJson` data asynchronously.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-ajax/2.1.0/leaflet.ajax.min.js"></script>
```

In the directory `assets`, you will find a geojson file - `celltowers.geojson`. Enter the following code snippet to add the cell towers to the map.

```js
// 3. Add cell towers GeoJSON Data
// Null variable that will hold cell tower data
var cellTowers = null;
// Get GeoJSON and put on it on the map when it loads
cellTowers= L.geoJson.ajax("assets/celltowers.geojson",{
    attribution: 'Cell Tower Data &copy; HIFLD | Washington counties &copy; Washington Data & Research | Base Map &copy; CartoDB | Made By Bo Zhao'
});
// Add the cellTowers to the map.
cellTowers.addTo(mymap);
```

The `cellTowers` object holds the GeoJSON data, and then it adds to the `mymap` object. Save and refresh your map. You should see the points populate. That is a lot of cell towers!

Besides, to append some credit information to the Leaflet link at the right bottom corner, we will assign the `attribute` option the credit information, as shown below.

```javascript
attribution: 'Cell Tower Data &copy; HIFLD | Washington counties &copy; Washington Data & Research | Base Map &copy; CartoDB | Made By Bo Zhao'
```

 Here, we add credit information about the data source and the map author's information. The map author should be your name.

 Then, please open `map2.html` to see how the map looks like at this stage.

![](img/map2.png)

## 2. Point Marker Visualization

Right now, each cell tower is visualized as the default blue marker. To differentiate the cell tower ownership by color, we will introduce how to apply a custom icon using **Font Awesome** and how to make a color scheme with **Chroma.js**.

### 2.1 Create the color scheme for markers

[**Font Awesome**](http://fontawesome.io/) allows you to add icons by CSS classes. To apply Font Awesome, you will need to include its CSS link in the `head` tag.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>
```

In addition, we will use another library `chroma.js` to colorize the icon and utilize `$` of `jQuery` to manipulate `html` elements. [Chroma.js](https://gka.github.io/chroma.js/) is a javascript library to manipulate colors. Therefore, we need to include both `chroma.js` and `jQuery` in the `head` tag.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chroma-js/1.3.4/chroma.min.js"></script>
```

Furthermore, we also need some predefined color ramp to symbolize geographic features. [ColorBrewer](http://colorbrewer2.org/) is an online tool designed to help people select good color schemes for maps and other graphics. It provides three types of palettes: sequential, diverging, and qualitative.

-   Sequential palettes are suited to ordered data that progress from low to high.
-   Diverging palettes are suited to centered data with extremes in either direction.
-   Qualitative palettes are suited to nominal or categorical data.

![](img/colorbrewer.jpg)

> **Note:** Color palettes from Color Brewer.

We need to create a set of random colors for representing cell towers of different companies. The color should follow the qualitative palettes because this palette can provide better visualization of the nominal data. Therefore, we select the `dark2` category (as shown in the figure above). Since there are nine cell tower types in Washington, we will create nine different colors. To apply these colors, we dynamically build classes and then embed these classes in `style` elements.  The style classes are from `marker-color-1` to `marker-color-12`. Each class includes a color `property`. Below is the code snippet.

```javascript
// 4. build up a set of colors from colorbrewer's dark2 category
var colors = chroma.scale('Set2').mode('lch').colors(13);

// 5. dynamically append style classes to this page. This style classes will be used for colorize the markers.
for (i = 0; i < 13; i++) {
    $('head').append($("<style> .marker-color-" + (i + 1).toString() + " { color: " + colors[i] + "; font-size: 15px; text-shadow: 0 0 3px #ffffff;} </style>"));
}
```

> **Note:**  Refer to the color palettes from color brewer, and try other palettes such as `Set1`, `Dark2` , etc.

### 2.2 Assign a style class to each company

Next, we will assign a style class to each type of cell tower company. The twelve wireless companies are `New Cingular`, `Verizon`, `Cello`, `AT&T`, etc.  We number the company name from 0 to 12 and then assign the style class (from `marker-color-1` to `marker-color-12`) to markers. If the value of `feature.property.LICENSEE` is equal to "New Cingular", we set `marker-color-1` class to it, and so on so forth.

Here we use `If.. Else` statement. To do this, we can put a conditional statement to see whether the value of the `feature.property.LICENSEE` variable is equal to a specific company name.  If it equals, we determine its id value, and if not, the else statement will run, setting other id value. Below is the code snippet.

```javascript
function (feature, latlng) {
    var id = 0;
    if (feature.properties.LICENSEE == "AT&T MOBILITY WIRELESS OPERATIONS HOLDINGS, INC.") { id = 0; }
    else if (feature.properties.LICENSEE == "EASTERN SUB-RSA LIMITED PARTNERSHIP")  { id = 1; }
    else if (feature.properties.LICENSEE == "MCDANIEL CELLULAR TELEPHONE COMPANY")  { id = 2; }
    else if (feature.properties.LICENSEE == "NEW CINGULAR WIRELESS PCS, LLC")  { id = 3; }
    else if (feature.properties.LICENSEE == "OREGON RSA #2, INC.")  { id = 4; }
    else if (feature.properties.LICENSEE == "RCC MINNESOTA, INC.")  { id = 5; }
    else if (feature.properties.LICENSEE == "SEATTLE SMSA LIMITED PARTNERSHIP")  { id = 6; }
    else if (feature.properties.LICENSEE == "USCOC OF RICHLAND, INC.")  { id = 7; }
    else if (feature.properties.LICENSEE == "USCOC OF WASHINGTON-4, INC.")  { id = 8; }
    else if (feature.properties.LICENSEE == "VERIZON WIRELESS (VAW), LLC")  { id = 9; }
    else if (feature.properties.LICENSEE == "WASHINGTON RSA #8 LIMITED PARTNERSHIP")  { id = 10; }
    else if (feature.properties.LICENSEE == "WESTERN SUB-RSA LIMITED PARTNERSHIP")  { id = 11; }
    else { id = 12;}
    return L.marker(latlng, {icon: L.divIcon({className: 'fa fa-signal marker-color-' + (id + 1).toString() })});
}
```

### 2.3. Apply an Icon

We apply an icon to each marker. To apply that, you will link the class with the marker. Notably, a javascript object or HTML element can carry multiple classes. In our case, a class `fa` informs that the font awesome will be applied, and another class `fa-signal` informs that an icon showing a signal will be added. And other classes `marker-color-1~12` deal with color, font-size, as well as text-shadow.

> **Note:** If you feel a little confused about the style properties of a class, please try to change the property value to some extreme numbers, and then see the differences. For example, you can change the font-size from 15 to 100, and then see what has been changed.

**Use `point to layer` option of `L.geoJson.ajax` to set the icon**

To set icons in a different color, we will use the `pointToLayer` option. `pointToLayer` runs a function when the geojson data is loaded. This option enables us to process each feature and return an `L.marker` object.

```js
pointToLayer: function (feature, latlng) {
    var id = 0;
    if (feature.properties.LICENSEE == "AT&T MOBILITY WIRELESS OPERATIONS HOLDINGS, INC.") { id = 0; }
    else if (feature.properties.LICENSEE == "EASTERN SUB-RSA LIMITED PARTNERSHIP")  { id = 1; }
    else if (feature.properties.LICENSEE == "MCDANIEL CELLULAR TELEPHONE COMPANY")  { id = 2; }
    else if (feature.properties.LICENSEE == "NEW CINGULAR WIRELESS PCS, LLC")  { id = 3; }
    else if (feature.properties.LICENSEE == "OREGON RSA #2, INC.")  { id = 4; }
    else if (feature.properties.LICENSEE == "RCC MINNESOTA, INC.")  { id = 5; }
    else if (feature.properties.LICENSEE == "SEATTLE SMSA LIMITED PARTNERSHIP")  { id = 6; }
    else if (feature.properties.LICENSEE == "USCOC OF RICHLAND, INC.")  { id = 7; }
    else if (feature.properties.LICENSEE == "USCOC OF WASHINGTON-4, INC.")  { id = 8; }
    else if (feature.properties.LICENSEE == "VERIZON WIRELESS (VAW), LLC")  { id = 9; }
    else if (feature.properties.LICENSEE == "WASHINGTON RSA #8 LIMITED PARTNERSHIP")  { id = 10; }
    else if (feature.properties.LICENSEE == "WESTERN SUB-RSA LIMITED PARTNERSHIP")  { id = 11; }
    else { id = 12;} // "Yakima MSA limited partnership"
    return L.marker(latlng, {icon: L.divIcon({className: 'fa fa-signal marker-color-' + (id + 1).toString() })});
}
```

> **Note:**  Two-equal signs (==)  is a very particular javascript operator. To read more, check out this documentation from `w3schools`.

**Options available for `L.geoJson.ajax` include**:

-   `pointToLayer`: Function that will be used for creating layers for GeoJSON points (if not specified, simple markers will be created).
-   `style`: Function that will be used to get style options for vector layers created for GeoJSON features.
-   `onEachFeature`: Function that will be called on for each created feature layer. Useful for attaching events and popups to features.
-   `filter`: Function that will be used to decide whether to show a feature or not.
-   `coordsToLatLng`: Function that will be used for converting GeoJSON coordinates to `LatLng` points (if not specified, coordinates will be assumed to be WGS84 — standard [longitude, latitude] values in degrees).

In addition to `pointToLayer`, we will use `onEachFeature` option to set the popup.

```js
// assign a function to the onEachFeature parameter of the cellTowers object.
// Then each (point) feature will bind a popup window.
// The content of the popup window is the value of `feature.properties.company`
onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.LOCCOUNTY);
},
```

 Please open **map3.html** to see how the map looks like. We have changed icon to cell tower!

![](img/map3.png)

## 3. Polygon Visualization

In the `assets` directory, you will see another dataset  `wacountydata.geojson`. This file stores all the counties of Washington. Each county contains the number of cell towers; this number is pre-calculated in QGIS. To add the data to the map, create another `L.geoJson.ajax` object. Enter the following code at the end of your script, staying within the `script` tag.

```js
// create the county layer
L.geoJson.ajax("assets/wacountydata.geojson").addTo(mymap);
```

Save and refresh your map. Counties of Washington will be displayed on the map, symbolized in a default blue.

![](img/map3-1.png)

Let us do something about that default blue and thematically style our data to these polygons useful by turning them into a choropleth layer. The `wacountydata.geojson` file contains numbers of cell towers in each county, calculated in QGIS.  To symbolize the counties by the number of counties, we will use the `style` option that contains styling properties.

### 3.1 Set a sequential color palette

The first step is to set up a function to create color classes.  One way to hard code the colors is to make the color scheme via QGIS or ArcGIS, selecting some classification rule like Jenk's Natural Breaks, and copy the break numbers as well as the color value. Alternatively, you can check out a color ramp from [colorbrewer2.org](<>). In this lab, you will use `chroma.js` to dynamically create an array of colors. Since the number of cell towers in each county is ordered data that progress from low to high, we will use a sequential color palette `YlOrRd` (meaning from Yellow, Orange to Red). Then, we develop a `setColor` function that returns the color value using the number of cell tower lying in a county. Add the following code snippet in the `script` tag.

```js
// 6. Set function for color ramp
colors = chroma.scale('YlOrRd').colors(5);

function setColor(density) {
    var id = 0;
    if (density > 61) { id = 4; }
    else if (density > 46 && density <= 60) { id = 3; }
    else if (density > 12 && density <= 45) { id = 2; }
    else if (density > 3 &&  density <= 11) { id = 1; }
    else  { id = 0; }
    return colors[id];
}
```

### 3.2 Apply the color palette

Next, develop a function that will set the style option of  `L.geoJson.ajax()` object. We name this function `style`, and it can accept a GeoJson feature. Having the feature loaded, this function sets the `fillColor` property with `setColor` function as well as an input value - `feature.properties.CTNUM / (features.properties.POP/100000)`. Here we want to find the number of cell towers per 100k residents. Then, we add the following code snippet in the `script` element.

```js
// 7. Set style function that sets fill color.md property equal to cell tower density
function style(feature) {
    return {
        fillColor: setColor(feature.properties.CTNUM / (feature.properties.POP/100000)),
        fillOpacity: 0.4,
        weight: 2,
        opacity: 1,
        color: '#b4b4b4',
        dashArray: '4'
    };
}

```

While `fillColor` and `fillOpacity` properties are for the fill; `weight`, `opacity`, `color`, and `dashArray` properties are for the border.

### 3.3 Set style option

The final step is to set the style option for the county layer. Below shows the code of adding the county polygons to the map, and also applying the style.

```js
// 8. Add county polygons
L.geoJson.ajax("assets/wacountydata.geojson", {
    style: style
}).addTo(mymap);
```

Save and refresh the html page. Open `map4.html`  to see our styled polygons!

![](img/map4.png)

## 4. Map Elements

Now we add a legend to help the audience to read this map. To do this, the main Leaflet object is the `Control` object, or `L.control`. It allows for adding various elements to your map.

### 4.1 Add a Legend

Adding a legend is easy, but requires quite a bit of code. The workflow to create a legend involves creating a Leaflet control, setting the control to populate with HTML that represents the legend components, and styling the HTML with CSS, so they appear correctly on our screen. I am going to throw a bit more code at you this time, and we will walk through what it is doing. Enter the following block of code to your `script`.

```js
// 9. Create Leaflet Control Object for Legend
var legend = L.control({position: 'topright'});

// 10. Function that runs when legend is added to map
legend.onAdd = function () {

    // Create Div Element and Populate it with HTML
    var div = L.DomUtil.create('div', 'legend');
    div.innerHTML += '<b># Cell Tower per 100k residents</b><br />';
    div.innerHTML += '<i style="background: ' + colors[4] + '; opacity: 0.5"></i><p> 61+ </p>';
    div.innerHTML += '<i style="background: ' + colors[3] + '; opacity: 0.5"></i><p> 46-60 </p>';
    div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p> 12-45 </p>';
    div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p> 3-11 </p>';
    div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p> 0-2 </p>';
    div.innerHTML += '<hr><b>Company<b><br />';
    div.innerHTML += '<i class="fa fa-signal marker-color-1"></i><p> AT&T </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-2"></i><p> Eastern Sub-RSA </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-3"></i><p> McDaniel </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-4"></i><p> New Cingular </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-5"></i><p> Oregon RSA </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-6"></i><p> RCC Minnesota </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-7"></i><p> Seattle SMSA </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-8"></i><p> US Cellular - Richland </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-9"></i><p> US Cellular -Washington </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-10"></i><p> Verizon </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-11"></i><p> Washington RSA </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-12"></i><p> Western Sub-RSA </p>';
    div.innerHTML += '<i class="fa fa-signal marker-color-13"></i><p> Yakima </p>';
    // Return the Legend div containing the HTML content
    return div;
};

// 11. Add a legend to map
legend.addTo(mymap);

```

Specifically, we created an instance of a  **Leaflet Control object**, calling it legend, and used the position option to tell it to locate in the top right of our map. Next, we used the `onAdd` method of the control to run a function when the legend is added. That function created a new div in the DOM, giving it a class of legend. This allowed the CSS to style everything using the legend element. In the newly created div, we are going to populate it with HTML by using a built-in JavaScript DOM method called innerHTML. Using innerHTML allows us to change the content of the HTML and add to the legend div. Using the plus-equal `+=` instead of equal `=` is the syntax for append. Every time this is used, code following is appended to the existing code. In this, we write the HTML we want to use in our legend. Note, the `i` tag represents our legend icons. Within the HTML, fill in the colors and ranges so that they match our data classification. After the HTML is appended, return the div element. Lastly, add the legend to the map.

> **Note:** Instead of using innerHTML, what in jQuery can we use to do the same task?

**Use CSS to Style**

If we save and refresh, the items you see will not make much sense. We need to use CSS to give them placement and organization on the page. The following CSS code will style our elements. Enter it between the style tags in the head of your HTML document. Like above, we will then walk through what it does.

```css
.legend {
    line-height: 16px;
    width: 180px;
    color: #333333;
    padding: 6px 8px;
    background: white;
    background: rgba(255,255,255,0.5);
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    border-radius: 5px;
}

.legend i {
    width: 16px;
    height: 16px;
    float: left;
    margin-right: 8px;
    opacity: 0.9;
}

.legend img {
    width: 16px;
    height: 16px;
    margin-right: 3px;
    float: left;
}

.legend p {
    font-size: 12px;
    line-height: 16px;
    margin: 0;
}
```

First, we set properties for the legend using `.legend` to style the legend class. We set a line height, color, font, padding, background, drop shadow, and border corner radius. Next, we set our icon (`i`) tag. This should be set to float: left; so that elements will align into columns, then we set properties for the image (`img`) tag, making them the same size and giving them the same float as the icons. Lastly, we style our paragraph tag (`p`), making sure line-height is consistent with the others. Save and refresh your map. You should see your styled legend applied to your map.

### 4.2 Add a Scale Bar

The Leaflet Control object allows you to add several elements, including attribution and zoom controls. To add a scale bar, please enter the following line to add a scale bar to your map.

```js
// 12. Add a scale bar to map
L.control.scale({position: 'bottomleft'}).addTo(mymap);
```

Save and refresh the html page. Open `map4.html`  to see the legend and scale bar.

### 4.3 Change the fonts

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

After you successfully deploy this cell tower map, you are expected to build another web map of airports in the United States. In the `assets` directory of this lab, you will see two geojson files: one is [`airports.geojson`](assets/airports.geojson), another is [`us-states.geojson`](assets/us-states.geojson).

`airports.geojson` contains all the airports in the United States. This data is converted from a shapefile, which was downloaded and unzipped from <https://catalog.data.gov/dataset/usgs-small-scale-dataset-airports-of-the-united-states-201207-shapefile>. For each airport feature, the field `CNTL_TWR` indicates whether the airport has an air traffic control tower or not. If there is a tower, the value of `CNTL_TWR` is 'Y', otherwise 'N'. You may need to find an appropriate icon on `font awesome`. **(7 points)**

`us-states.geojson` is a geojson data file containing all the states' boundaries of the United States. This data is acquired from [Mike Bostock](http://bost.ocks.org/mike) of [D3](http://d3js.org/). The `count` field indicates the number of airports within the boundary of the state under investigation. So please make a choropleth map based on the number of airports within each state.  **(7 points)**

-   an appropriate basemap;  **(7 points)**
-   some interactive elements, like a clickable marker; **(8 points)**
-   some map elements, such as legend, scale bar, credit;  **(8 points)**
-   write up a project description in the `readme.md` file. This file will introduce the project name, a brief introduction, the primary functions(especially the function which was not covered in the lectures), libraries, data sources, credit, acknowledgment, and other necessary information. **(8 points)**

-   you will need to synchronize this project to a GitHub repository. And make sure the web map is accessible from a URL link, which should be similar to `http://[your_github_username].github.io/[your_repository_name]/index.html`. (To do that, you may want to check out a previous lecture or lab handouts on how to host a repository on GitHub pages.); **(6 points)**

> **Note:** Please make sure the name of your repository is **NOT** `lab03` or similar, use a name that can describe the theme of the map you will make. Think about that, which one do you prefer? - showing your future employer or Ph.D. admission committee a lot of course work on GitHub or a list of professional projects.

-   please make sure the internal structure of the files in your project repository is well organized. For example, it may be similar to the file structure below. **(5 points)**

```powershell
[your_repository_name]
    │index.html
    │readme.md
    ├─assets
    │      airports.geojson
    │      us-states.geojson
    ├─css
    │      main.css
    ├─img
    │      xxx.jpg
    └─js
            main.js
```
- Finally, submit your repository URL under `Lab 3. An integrative web mapping` on Canvas.

#### Optional tasks:

-   Try to add on a feature of the leaflet which we have not discussed in class. The new features can be found on [the plugin page](https://leafletjs.com/plugins.html) of the leafet. **(5 points)**


## Acknowledgement

This lab was originally designed in the context of Oregon.  I appreciate Kevin Ko's assistance in upgrading the lab material.

## Reference

[1] Map Symbolization <http://duspviz.mit.edu/web-map-workshop/map-symbolization/>

[2] Data source: <https://hifld-geoplatform.opendata.arcgis.com/datasets/0835ba2ed38f494196c14af8407454fb_0?geometry=-126.488%2C45.696%2C-112.612%2C48.318>

[3] Boundary: <https://www.ofm.wa.gov/washington-data-research/population-demographics/gis-data/census-geographic-files>

[4] Add topojson instead of geojson <http://blog.webkid.io/maps-with-leaflet-and-topojson/>
