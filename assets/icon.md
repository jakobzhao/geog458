# Icongraphy

Here are three main icon collectioins for web development, including Google material design, font awesome, and Bootstrap Glyphicon.

## Google Material Design

Website: [https://material.io/icons/](https://material.io/icons/)

A Usage Guide: [http://zavoloklom.github.io/material-design-iconic-font/](http://zavoloklom.github.io/material-design-iconic-font/)

**Usage**

1\. Include the following line in the html header

```html
<link rel="stylesheet" href="path/to/material-design-iconic-font/css/material-design-iconic-font.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
```

2\. use an icon

```html
<i class="material-icons">face</i>
```

## Bootstrap Glyphicon

website: https://getbootstrap.com/docs/3.3/components/

**Usage**


1\. Include Boostrap
To call a Glyphicon, you will need to include the Bootstrap library and css in the header.


```html
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
```


2\. use an icon

```html
<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
```

## Font Awesome

**Usage**

website: http://fontawesome.io/

1\. Include Font Awesome

```html
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

2\. use an icon

```html
<i class="fa fa-bath" aria-hidden="true"></i>
```

If you are interested in more about icons, please read [https://www.w3schools.com/icons/default.asp](https://www.w3schools.com/icons/default.asp).

## Map Icon

website: http://map-icons.com/

Map Icons extends the Google Maps Marker Object to enable either an image or SVG marker to be used with the icon placed on top as a label.

Include the fonts in the dist/font directory as well as the dist/css/map-icons.css stylesheet to use icons in markup as an icon font.

To use the icons with Google Maps include dist/js/map-icons.js

Icon class names are to be used with the map-icon class prefix.

<span class="map-icon map-icon-point-of-interest"></span>
