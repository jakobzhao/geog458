# Web Programming Basics III: JQuery

**Learning Objectives**

- Understand how to program in Atom and debug by Chrome through the Instructor's demostration;
- Get to know the basic concepts (especially the selectors) of JQuery.

In this lecture, the instructor will help you deal with these common problems. And we will also talk about JQuery which is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. More importantly, JQuery can boost the efficiency of both Leaflet (web mapping framework) and Bootstrap (web design framework).

**Introduction**

JQuery is free, open-source software using the permissive MIT License. Web analysis indicates that it is the most widely deployed JavaScript library by a large margin. JQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications. JQuery also provides capabilities for developers to create plug-ins on top of the JavaScript library. This enables developers to create abstractions for low-level interaction and animation, advanced effects and high-level, theme-able widgets. The modular approach to the JQuery library allows the creation of powerful dynamic web pages and Web applications.


## 1\. Include Javascript Library

The jQuery library is a single JavaScript file containing all of its common DOM, event, effects, and Ajax functions. It can be included within a Web page by linking to a local copy or to one of the many copies available from public servers. jQuery has a content delivery network (CDN) hosted by MaxCDN. Google and Microsoft host it as well.

```html
<script src="jquery.js"></script>
```

It is also possible to include jQuery directly from a CDN:

```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

> **Note:** A content delivery network or content distribution network (CDN) is a geographically distributed network of proxy servers and their data centers. The goal is to distribute service spatially relative to end-users to provide high availability and high performance. CDNs serve a large portion of the Internet content today, including web objects (text, graphics and scripts), downloadable objects (media files, software, documents), applications (e-commerce, portals), live streaming media, on-demand streaming media, and social networks.

## 2\. What is $ ?

At JQuery's highest level is the `$()` function which is also an alias for `JQuery()`, both function exactly the same, however you will most commonly see the shorthand version used. The JQuery function provides an easy way to select DOM elements using any valid CSS selector and perform a myriad of operations on them. Along with providing solid cross browser DOM traversal the JQuery object itself contains various methods. For example, you can refer to the `$.support` property for information on what the current browser environment supports, and you use the `$.ajax` method to make an AJAX request.

> **Note:** It is a common practice to prepend JQuery objects with "$"

Both of the following examples are equivalent and will select all `<li></li>` elements on the page.

```javascript
  var $listItems = jquery('li');
  var $listItems = $('li');
```


## 3\. Selectors

One of JQuery's main strengths is the ability to select and traverse nodes within the DOM by using any valid CSS selector, it does this via the [Sizzle](https://sizzlejs.com/) selector engine. Sizzle introduces many other selectors that are not part of any CSS spec (yet), for example, `:not()`. Sizzle also provides the cross browser support that JQuery is known for, normalizing many (I believe all?) CSS3 selectors which are not entirely supported across all browsers.

JQuery's ability to chain methods, due to each of them returning the current object `this`, allows for easy traversal and filtering of the currently wrapped set of selectors. This chaining gives you the ability to further narrow down your selection, or perform actions in a sequential order i.e. `show().hide().remove()`. Chaining becomes imperative if there is limited access to the formatting of the markup.


The jQuery syntax is tailor-made for selecting HTML elements and performing some action on the element(s).

**Basic syntax is: $(selector).action()**

A `$` sign to define/access jQuery
A (selector) to "query (or find)" HTML elements
A jQuery action() to be performed on the element(s)
Examples:

`$(this).hide()` - hides the current element.

`$("p").hide()` - hides all `<p>` elements.

`$(".test").hide()` - hides all elements with `class="test"`.

`$("#test").hide()` - hides the element with `id="test"`.

Let us try [the JQuery selector test](https://www.w3schools.com/jquery/trysel.asp) on class.


## 4\. Events

All the different visitor's actions that a web page can respond to are called events. An event represents the precise moment when something happens. Such as moving a mouse over an element, selecting a radio button, clicking on an element. The term "fires/fired" is often used with events. Example: "The keypress event is fired, the moment you press a key".

Here are some common DOM events:


| Mouse Events | Keyboard Events | Form Events | Document/Window Events |
| :----------: | :-------------: | :---------: | :--------------------: |
|    click     |    keypress     |   submit    |          load          |
|   dblclick   |     keydown     |   change    |         resize         |
|  mouseenter  |      keyup      |    focus    |         scroll         |
|  mouseleave  |                 |    blur     |         unload         |


In jQuery, most DOM events have an equivalent jQuery method.

To assign a click event to all paragraphs on a page, you can do this:

```javascript
$("p").click();
```


The next step is to define what should happen when the event fires. You must pass a function to the event:

```javascript
$("p").click(function(){
  // action goes here!!
  alert("You entered p1!");
  $(this).hide();
});
```

### 4.1 The `on()` Method
The `on()` method attaches one or more event handlers for the selected elements.

Attach a click event to a `<p>` element:
```javascript
$("p").on("click", function(){
    $(this).hide();
});
```

Attach multiple event handlers to a `<p>` element:

```javascript
$("p").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    },
    click: function(){
        $(this).css("background-color", "yellow");
    }
});
```

### 4.2 `$(document).ready()`

Before you can safely use JQuery to do anything to your page, you need to ensure that the page is in a state where it's ready to be manipulated. With JQuery, we accomplish this by putting our code in a function, and then passing that function to `$(document).ready()`. As you can see here, the function we pass can just be anonymous.

Alternatively you can use this short hand version which will be interpreted the same way as the above example. `$(function() {})`

>  **Note:** although there are no performance implications with having multiple $(function() {}) calls, it is a common practice to attach only one call to the document.

```javascript
$( document ).ready(function() {
  alert( 'ready!' );
});
```

In this lecture, the instructor has  introduced some fundamental concepts about JQuery. If you are interested in a deeper understanding of JQuery, you can try out its tutorial on W3Schools. Though JQuery touches upon a wide range of operations, the concepts listed above, especially the selectors, mouse event, and the `.on()` methods  will be frequently used in your labs, final projects and future works..
