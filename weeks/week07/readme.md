## Creating an Online GeoNarrative

In this lecture, you will learn how to create a onbline Geo-Narrative. A GeoNarrative application, also being referred to as storymap, or map-based storytelling, is an visualization genre that primarily utilizes a series of maps or other types of geovisualizations to narrate a geographical event or phenomenon. In addition to geovisualiztion, there will be associated context that are offered by scripts, images, or videos. This lecture mainly provides an online geonarrative template which can help you to make your own geo-narrative applications. To review the geo-narrative template, please visit [this link](https://jakobzhao.github.io/weeks/week07).

![](img/cover.png)

A online geonarrative is organically integrated by several scenes. Each scene consists of a web map and a script. You can manipulate the map by zooming, panning, and even adding more thematic layers. This library embodies the concept responsive web design, meaning the geonarrative can be shown on either desktop or mobile devices.

## Prerequisite

To make the geo-narrative library robust and lightweight, we select as fewer prerequisite libraries as possible, and prioritize the use of open source or free libraries.

### Required Libraries

- jQuery: is a JavaScript library that greatly simplifies JavaScript programming.

- [Scrollama](https://github.com/russellgoldenberg/scrollama): is a modern & lightweight JavaScript library for scrollytelling using IntersectionObserver in favor of scroll events.

- Leaflet: provides a popular map framework. You can also use MapBox, ESRI javascript api, Cesium, other map/virtual globe frameworks.

- [Font Awesome 4.7](https://fontawesome.com/v4.7.0/icons/): offers a very large set of icons for multple usages.

- Google Fonts: provides customized web fonts which you can externally link from Google servers.

- `optional` Bootstrap 4: provides additional web components, such as navigation bar, footer, etc.

- `optional` Chroma: makes color ramps for automatically generating map color schema.

### Image and Video Resources:

[Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), and [Pixabay](https://pixabay.com/).

### Base Map Collections:

TBA

## Instructions

Belowe, we will walk through the major parts relevant to generating a geonarrative.

### Structure

A piece of geonarrative is organized as a sequence of scenes, and the scenes are associated with maps. Each map are mashed up by layers, and the layers can be any types of layers that leaflet.js or other geovisualizastion libraries support. Below shows the tree structure of this story map library.

```powershell
A GeoNarrative
│
├───Scene 1: Setup
│      │──── Script 1 (e.g., text, video, image, audio, etc.)
│      │──── Map 1
│             │
│             │──── Layer 1
│             │──── Layer 2
│             │──── Layer N
├───Scene 2: Confrontation
│... ... ... ... ... ... ...
│... ... ... ... ... ... ...
│... ... ... ... ... ... ...
├───Scene N: Resolution
│      │──── Content 5
│      │──── Map 5
│             │
│             │──── Layer 1
│             │──── Layer 2
│             │──── Layer N
```

### Setup and Libraries

First of all, create an empty repo to manage the geonarrative project, and then generate the the main folder like `js`, `css`, `assets`, `img` to manage relevant documents.


Moreover, create an empty html document `index.html` to start the coding. In the index.html document, please initialize the fundamental page struture as below.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
</head>
<body>

</body>
</html>

```

Then, in the head element, please include all the required stylesheets and javascripts. Please make sure to add stylesheets ahead of those javascript libraries.

```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;1,400;1,500&display=swap" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.css" />
  <link rel="stylesheet" href="css/main.css" />

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/scrollama/2.2.1/scrollama.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.js"></script>

```

If you want to apply any customized web components, like navigation bar, footer, you may also want to include Boostrap.

```html
<link rel="stylesheet" c href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min.js"></script>
```

As we introduced above, a geonarrative is made up by several scenes. In the html document, each scene is held by an `article` element, and all the scenes are under a `section` element. Also, a storyboard is defined and held by a `div` element. This storyboard element anchors to the browser view window and functions as the container for the map object as well as other main graphic objects.

Ahead of all the scenes, another `section` can be defined to hold a cover page or landing page, and to the end, a footer can be held by one more `section` can be used to hold the footer. Therefore, a basic geo-narrative html placeholder is:

```html
<section id="cover">
</section>

<section id="geonarrative">
  <div id="storyboard">
    <div id="map"></div>
  </div>

  <article class="scene" data-scene="0">
  </article>
  <article class="scene" data-scene="1">
  </article>
  <article class="scene" data-scene="2">
  </article>
  ... ... ... ...
  ... ... ... ...
  ... ... ... ...
  <article class="scene" data-scene="n">
  </article>
</section>

<section id="footer">
</section>

```

Associted with the main html document, the stylesheets are stored in the file `css/main.css`.

Above all, make the map occupies the full screen.

```css
html,
body,
#map {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: 'Fira Sans', sans-serif;
}
```

Also, the storyboard needs to stick to the main window of the browser.

```css
#storyboard {
  position: -webkit-sticky;
  position: sticky;
}
```

The following code block makes the footer extends to the left, right and bottom edge of the geonarrative.

```css
#footer {
  width: 100%;
  height: 30vh;
  color: white;
  background: #fff;
  background-color: rgba(0, 0, 0, 0.3);
}
```

> Notably, the cover and footer element are optional. It depends on whether the geonarrative needs such a component or not.


### Cover Page

#### Content on the page

the cover page will introduce the geonarrative to the online vistors. Usually, it will contains

- a title
- a subtitle
- a short description or an synopsis of the GeoNarrative,
- authors and their affilitions
- social media components that enable visitors to share it with others on facebook, twitter and etc, or
- footnotes.

For example, in the template, the structure of the cover page is like:

```html
<section id="cover">
  <div id="intro">
    <h1>A GeoNarrative Template</h1>
    <h5>This line is a place holder for subtitle</h5>
    <p>This section shows where active research is happening, and on what topics to communicate on-going nature of scientific learning. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>

    <div class="footnote">
      <span> This line is a place holder for copyright note or other footnotes.</span>
      <a target="_blank" href="https://www.uw.edu"> <img src="img/uw_logo.png" width="50px"></a>
    </div>
  </div>
</section>

```

First, make the cover page occupise the full screen.

```css
#cover {
  width: 100%;
  height: 100%;
  background: #fff;
  background-color: rgba(0, 0, 0, 0.3);
}
```

Specific style items relevant to the cover page content are defined.

```css

#intro {
  position: relative;
  top: 32%;
  left: 50%;
  transform: translateX(-50%) translateY(-32%);
  width: 50%;
  color: #fff;
  padding: 2rem;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  text-shadow: 0 0 3px rgba(0, 0, 0, .95);
}

#intro .footnote {
  text-align: right;
}

#intro .footnote a {
  margin-right: 0.5rem;
  vertical-align: top;
}

#intro .footnote span {
  position: relative;
  bottom: -0.5rem;
  color: #fff;
  text-shadow: 0 0 3px rgba(0, 0, 0, .95);
  font-style: italic;
  font-size: small;
}

```

#### Background

For modern cover pages, the above-listed items are usually shown on a background of video or images. Certainly you can generate a multimedia with your own smartphone or camera. As an alternative, you can also find some free resources online from [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), and [Pixabay](https://pixabay.com/).

![](img/prexels.png)

It is necessary for any online project to be cautious to the size of data being transferred from the server to their clients. On a normal internet environment, I recommend a) an image in a size around 1920*1080 or b) an video in a HD format (1280*720) for no more than 10 seconds. As my own preference, I put the image to the `img` folder whereas the video to the `assets` folder.

If the background is a video, please add a video element to the child of a the cover page element. the video is inluded as the value for the `src` property of the `source` element. Often, we need to make the video autoplay, mute its sound and play in a loop. So, such properties are defined in the `video` element as shown below.

```html
<section id="cover">
  <video class="fullscreen canvas-center" playsinline="" autoplay="" muted="" loop="">
    <source src="assets/intro.mp4" type="video/mp4">
  </video>
  <div id="intro">
      ... ... ... ...
      ... ... ... ...
      ... ... ... ...
  </div>
</section>

```

Associated with the `video` element, a few style items like fullscreen and canvas-center are defined too.

```css
.canvas-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fullscreen {
  position: fixed;
  min-height: 100%;
  min-width: 100%;
}
```

If the background is an image, you simply need to add a style item to the cover page elment as below. Please refer to this [link](http://jakobzhao.github.io/geog458/weeks/week07/image.html).

```css
  background: url('img/background.jpg') no-repeat center center;
```
