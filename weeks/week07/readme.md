## Create an Online GeoNarrative

**Learning Objectives**

- the fundamental concepts relevant to online GeoNarrative;
- Make a cover page with a fullscreen image or video;
- Make a customized footer using Bootstrap;
- Understand the data-attribute; and
- Apply a story using GeoNarrative.


In this lecture, you will learn how to create a online Geo-Narrative. A GeoNarrative application, also being referred to as storymap, or map-based storytelling, is an visualization genre that primarily utilizes a series of maps or other types of geovisualizations to narrate a geographical event or phenomenon. In addition to geovisualization, there will be other form of information like scripts, images, or videos. This lecture mainly provides an online GeoNarrative template which can help you to make your own geo-narrative applications. To review the geo-narrative template, please visit [this link](https://jakobzhao.github.io/geog458/weeks/week07).

![](img/cover.png)

An online GeoNarrative is organically integrated by several scenes. Each scene consists of a web map and a script. You can manipulate the map by zooming, panning, and even adding more thematic layers. This library embodies the concept responsive web design, meaning the GeoNarrative can be shown on either desktop or mobile devices.

## 1. Prerequisite

To make the geo-narrative library robust and lightweight, we select as fewer prerequisite libraries as possible, and prioritize the use of open source or free libraries.

### 1.1 Image and Video Resources

[Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), and [Pixabay](https://pixabay.com/).

### 1.2 Data and basemaps

## 2. Instructions

Below, we will walk through the major parts relevant to generating a GeoNarrative.

### 2.1 GeoNarrative Structure

A GeoNarrative application is organized as a sequence of scenes, and the scenes are associated with maps. Each map is mashed up by layers, and the layers can be any types of layers that Mapbox or other geovisualization libraries support. Below shows the tree structure of this story map library.

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

### 2.2 Setup and Libraries

First of all, create an empty repo to manage the GeoNarrative project, and then generate the main folders like `js`, `css`, `assets`, `img` to manage relevant documents.


Moreover, create an empty html document `index.html` to start the coding. In the index.html document, please initialize the fundamental page structure as below.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
</head>
<body>

</body>
</html>

```

Then, in the head element, please include all the required stylesheets and javascript. Please make sure to add stylesheets ahead of those javascript libraries.

```html
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;1,400;1,500&display=swap" />
  <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
  <link rel="stylesheet" href="css/main.css">
  <script src="https://unpkg.com/scrollama"></script>
  <script src="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.js"></script>
```

Instead of importing the css in the html, you can also import them in the main.css.

```css
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;1,400;1,500&display=swap');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css');
@import url('https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css');
```

As we introduced above, a GeoNarrative is made up by several scenes. In the html document, each scene is held by an `article` element, and all the scenes are under a `section` element. Also, a storyboard is defined and held by a `div` element. This storyboard element anchors to the browser view window and functions as the container for the map object as well as other main graphic objects.

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

Associated with the main html document, the stylesheets are stored in the file `css/main.css`.

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

The following code block makes the footer extends to the left, right and bottom edge of the GeoNarrative.

```css
#footer {
  width: 100%;
  height: 30vh;
  color: white;
  background: #fff;
  background-color: rgba(0, 0, 0, 0.3);
}
```

> Notably, the cover and footer element are optional. It depends on whether the GeoNarrative needs such a component or not.


### 2.3 Cover Page

#### 2.3.1 Content on the page

the cover page will introduce the GeoNarrative to the online visitors. Usually, it will contain

- a title
- a subtitle
- a short description or a synopsis of the GeoNarrative,
- authors and their affiliations
- social media components that enable visitors to share it with others on Facebook, twitter and etc, or
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

#### 2.3.2 Background

For modern cover pages, the above-listed items are usually shown on a background of video or images. Certainly, you can generate a multimedia with your own smartphone or camera. As an alternative, you can also find some free resources online from [Unsplash](https://unsplash.com/), [Pexels](https://www.pexels.com/), and [Pixabay](https://pixabay.com/).

![](img/prexels.png)

It is necessary for any online project to be cautious to the size of data being transferred from the server to their clients. On a normal internet environment, I recommend a) a png or jpg image in a size around 1920*1080 or b) an mp4 video in a HD resolution (1280*720) for no more than 10 seconds. As my own preference, I put the image to the `img` folder whereas the video to the `assets` folder.

**If the background is a video**, please add a video element to the child of the cover page element. the video is included as the value for the `src` property of the `source` element. Often, we need to make the video autoplay, mute its sound and play in a loop. So, such properties are defined in the `video` element as shown below.

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

Associated with the `video` element, a few style items like Fullscreen and canvas-center are defined too.

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

**If the background is an image,** you simply need to add two style properties (backgruond and background-size) to the cover page element as below. In the background, please link to the path of the background image. To see how the fullscreen background image works, please refer to this [link](http://jakobzhao.github.io/geog458/weeks/week07/image.html).

```css
  background: url('img/background.jpg') no-repeat center center;  background-size: cover;
```

### 2.4 Scene

For the content of a scene element, you need to put it in its corresponding html format within the `article` tag. The content could be pure text, image, iconic illustrator, and so on. Usually, most content will be shown in a scrollable script panel. This panel can be placed to different regions of the view window of a browser. Below is the basic structure of a scene.

```html
<article class="scene" data-scene="0">
  ... ... ... ...
</article>
```

Each scene is labeled with a `scene` class and assigned with an index that is stored in a data attribute "data-scene."

Below is the style items for class `scene`.

```css

.scene {
  position: relative;
  max-width: 40rem;
  /* margin: 0 auto 0 auto; */
  margin: 0 auto 0 4rem;
  padding: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.1);
}

.scene:first-child {
  margin-top: -30%;
}

.scene:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
}

.scene p {
  padding-left: 1rem;
  padding-right: 1rem;
  color: black;
  text-shadow: 0 0 6px white;
}
```

since each scene is indexed, you can capture a specific scene by its data-scene attribute using css-selector, for example, if we want to select the scene with data-scene equals 3, the selector should be `[data-scene="3"]`. Therefore, you can update the style items of each scene. Below are a few customized scene styles.

```css
[data-scene="4"] div {
  font-size: xxx-large;
}

[data-scene="5"] img {
  display: block;
  margin: 2rem auto 0 auto;
  width: 90%;
  border: 5px solid white;
}

[data-scene="6"] {
  background: url("../img/background.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0 auto 0 auto !important;
  height: 100vh !important;
}
```

> TIPS: For each scene, you can change the margin-left and/or margin-right to update location of the script panel relative to the view window of the browser, like to the left of the screen, or the middle, the right or even covering the whole screen.

### 2.5 Behaviors

the javascript behavior can be stored in a separate javascript file in the js subfolder or embedded in a `script` tag to the very end of the `body` tag.

Below is a general sequential procedure of a GeoNarrative.

```js
    // 1. Declare the maps, script panels, and different thematic layers.
    let map, scriptPanel = scrollama(), countiesLayer, cellTowersLayer;
    // 2. Initialize the layout.
    ... ... ...
    // 3. Define Generic window resize listener event
    function adjustStoryboardlSize() {
    }

    // 4. Initialize the mapbox
    ... ...
    // 5. define the asynchronous function to load geojson data and then performs the dependent actions.
    async function geojsonFetch() {
      // 6 wait till the data of washington counties and celltowers are fully loaded.
      ... ... ...
      // 7. Trigger operations inside of the the ()=> {} funciton while loading the map.
      map.on('load', () => {
        // 8. add map source and declare layers.
        ... ... ...
        // 9. Initialize the script panel
        scriptPanel
          .setup({
            step: ".scene", // all the scenes.
            offset: 0.33, // the location of the enter and exit trigger
            debug: false // toggler on or off the debug mode.
          })
          .onStepEnter(handleSceneEnter)
          .onStepExit(handleSceneExit);
        
        // 10. This function performs when a scene enters the storyboard
        function handleSceneEnter(response) { }

        // 11. This function performs when a scene exists the storyboard
        function handleSceneExit(response) { }
      });

    };

    // 5 call the data loading function.
    geojsonFetch();
```

When the script panel is scrolled, the scene will appear or disappear on a screen, and  the **Step Enter** and **Step Exit** events of scrollama will be activated. To handle these two events, two functions named `handleSceneEnter` and `handleSceneExit` defined, respectively. A variable will pass to these two functions when being triggered. This variable, in the format of a javascript object, contains items like the scrolling direction, displaying scene element, and index. Since it is capable to capture the index of the displaying scene, we can also trigger relevant map behaviors, such as relocating the map, changing base map/layer, adding or removing the thematic layers, and etc. As the example below.

```js
function handleSceneEnter(response) {
  var index = response.index; // capture the id of the current scene. 

  if (index === 0) { // When enter the first scene

    map.flyTo({
      center: [-121.93, 47.33],
      zoom: 8,
      pitch: 0,
      speed: 0.5
    }); // fly to a new location
    
    if (typeof (map.getSource('counties-src')) == 'undefined') { //if the map source 'counties-src' does not exist
      map.addSource('counties-src', {
        type: 'geojson',
        data: counties
      }); // reload the map source of 'counties-src'
    } else {
      map.getSource('counties-src').setData(counties); // if the map source does not exist, relaod the data counties to the pre-defined map source 'counties-src'.

    }

    if (!map.getLayer("counties-polygons")) { // if the map layer 'counties-polygons' does not exit
      map.addLayer(countiesLayer);
    }
    document.getElementById("cover").style.visibility = "hidden"; // Hide the cover page

  } else if (index === 1) { // When enter the second scene.
    ... ... ...
  } else if (index === 2) {
  } else if (index === 3) {
  } else if (index === 6) {
    ... ... ...

    });
  }
}

// 6. The function performs when a scene exits the storyboard
function handleSceneExit(response) {
  var index = response.index;

  if (index === 0) {
    if (map.getLayer("counties-polygons")) {
      map.removeLayer('counties-polygons');
    }
    if (response.direction == 'down') { 
      document.getElementById("cover").style.visibility = "hidden"; // when you scroll down, the cover page will be hided.
    } else {
      document.getElementById("cover").style.visibility = "visible"; // when you scroll up, the cover page will be shown.
    }
  } else if (index === 1) {
    ... ... ...
  } else if (index === 3) {
    //exit to Portland
    map.setStyle('mapbox://styles/mapbox/light-v10');
  } 
}

```

> TIPS: If a GeoNarrative is composed of Scene A, B and C. The Scene A comes first, and then B and C goes the last. When Scene B enters the screen in the normal order (B follows A entering the screen), both the Scene Exit event of Scene A and the Scene Enter event of Scene B will be triggered. When Scene B enters in the reversed order, both the Scene Exit event of Scene C and the Scene Enter event of Scene B will be triggered. So, to ensure the GeoNarrative can scroll both normally and reversely (this is what happens in the real-world scenario), you will need to define both the enter and exit handlers carefully, once the functions are coded, please debug it by scrolling the GeoNarrative in both ways. Otherwise, the behavior could be triggered in the wrong events. Based on my personal experience, I encourage you to follow the convention below.

- set the map view when a scene enters the screen, do not set map view when a scene exits.
- add map layers when a scene enters the screen, while this scene exits, remove the previously added layers.

### 2.6 Footer

If you are interested in adding a footer to the GeoNarrative like [this](https://jakobzhao.github.io/geog458/weeks/week07/incoperates-a-footer.html) (see the codes in the [footer.html](incoperates-a-footer.html)), you will need to include bootstrap framework to your header element. Then, you can apply different types of footer templates which are supported by Bootstrap.

![](img/footer.png)

Here is the code you need to include to the header:

```html
<link rel="stylesheet" c href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min.js"></script>
```

Here are some resources for free footer templates.

- https://www.mockplus.com/blog/post/bootstrap-4-footer-template
- https://freefrontend.com/bootstrap-footers/
- https://colorlib.com/wp/bootstrap-footer/

If you want to code your own footer, please refer to this [link](https://mdbootstrap.com/docs/standard/navigation/footer/).
