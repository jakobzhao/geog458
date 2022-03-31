#  Introduction to the Web


**Learning Objectives**

- Understand the basic concepts related to Internet and the Web;
- IP and ports;
- the three major options for visualization on the web;
- The structure of a URL;
- graphcis on Web

## 1 Internet

The internet is an international network of connected computers. No company owns the internet; it is a cooperative effort governed by a system of standards and rules. The purpose of connecting computers together, of course, is to share information. There are many ways information can be passed between computers, including email (POP3/IMAP/SMTP), file transfer (FTP), secure shell (SSH), HyperText Transfer Protocol(HTTP), and many more specialized modes upon which the internet is built. These standardized methods for transferring data or documents over a network are known as protocols.

### Comparison with the Web

The web is a subset of the internet. It is just one of many ways information can be transferred over networked computers.

The web (originally called the World Wide Web, thus the “www” in site addresses) is just one of the ways information can be shared over the internet. It is unique in that it allows documents to be linked to one another via hypertext links—thus forming a huge “web” of connected information. The web uses a protocol called HTTP (HyperText Transfer Protocol). That acronym should look familiar because it is the first four letters of nearly all website addresses, as we’ll discuss in an upcoming section.

World Wide Web browser software, such as Microsoft's Internet Explorer/Edge, Mozilla Firefox, Opera, Apple's Safari, and Google Chrome, lets users navigate from one web page to another via hyperlinks embedded in the documents. These documents may also contain any combination of computer data, including graphics, sounds, text, video, multimedia and interactive content that runs while the user is interacting with the page. Client-side software can include animations, games, office applications and scientific demonstrations. Through keyword-driven Internet research using search engines like Yahoo!, Bing and Google, users worldwide have easy, instant access to a vast and diverse amount of online information. Compared to printed media, books, encyclopedias and traditional libraries, the World Wide Web has enabled the decentralization of information on a large scale.


> **Note:** The web was born in a particle physics laboratory (CERN) in Geneva, Switzerland, in 1989. There a computer specialist named Tim Berners-Lee first proposed a system of information management that used a “hypertext” process to link related documents over a network. He and his partner, Robert Cailliau, created a prototype and released it for review. For the first several years, web pages were text-only. It’s difficult to believe that in 1992, the world had only about 50 web servers, total. The real boost to the web’s popularity came in 1992 when the first graphical browser (NCSA Mosaic) was introduced, and the web broke out of the realm of scientific research into mass media. The ongoing development of web technologies is overseen by the World Wide Web Consortium (W3C).

## 2 IP Addresses and Ports

### IP addresses

IP Address is a unique address assigned to a computing devices such as computers, tablets and smartphones to communicate with other devices within the Internet. No device can connect to the Internet without a public IP address, and a public IP address is assigned to you by the Internet Service Provider (ISP) you are subscribing from.

An Internet Protocol address (IP address) is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. An IP address serves two principal functions: host or network interface identification and location addressing. There are two versions of IP in use today, **IPv4 (32-bit)** and **IPv6 (128-bit)**. There are two types of IP addresses: public and private. To use the Internet, you'll need a public IP address. To connect to a local area network such as your home or work network, a private IP address is suffice.

Internet Protocol version 4 (IPv4) defines an IP address as a 32-bit number. However, because of the growth of the Internet and the depletion of available IPv4 addresses, a new version of IP (IPv6), using 128 bits for the IP address, was developed in 1995, and standardized in December 1998. In July 2017, a final definition of the protocol was published. IPv6 deployment has been ongoing since the mid-2000s.

IP addresses are usually written and displayed in human-readable notations, such as `172.16.254.1` in IPv4, and `2001:db8:0:1234:0:567:8:1` in IPv6. The size of the routing prefix of the address is designated in CIDR notation by suffixing the address with the number of significant bits, e.g., 192.168.1.15/24, which is equivalent to the historically used subnet mask 255.255.255.0.


> **Note:** The IP address space is managed globally by the Internet Assigned Numbers Authority (IANA), and by five regional Internet registries (RIRs) responsible in their designated territories for assignment to end users and local Internet registries, such as Internet service providers. IPv4 addresses have been distributed by IANA to the RIRs in blocks of approximately 16.8 million addresses each. Each ISP or private network administrator assigns an IP address to each device connected to its network. Such assignments may be on a static (fixed or permanent) or dynamic basis, depending on its software and practices.


> **IP Geolocation:** is the mapping of an IP address to the geographic location of the internet from the connected device. By geographically mapping the IP address, it provides you with location information such as the country, state, city, zip code, latitude/longitude, ISP, area code, and other information.
>
>Your IP Location can be found using our IP Lookup tool. No IP Lookup tool is 100% accurate due to many different factors. Some of those factors include where the owner of the IP has it registered, where the agency that controls the IP is located, proxies, cellular IPs, etc. If you are in the US and the controlling agency of the IP is located in Canada, chances are the IP address lookup results will show as Canada. Showing a Canadian IP while in the northern US is very common among mobile users on the Verizon network.

> Geolocation finder websites: https://www.iplocation.net/ or https://tools.keycdn.com/geo.

### Ports

A computer port is a type of electronic, software- or programming-related docking point through which information flows from a program on your computer or to your computer from the Internet or another computer in a network.

Ports are numbered for consistency and programming. The most commonly used and best known ports are those numbered 0 to 1023 dedicated for Internet use, but they can extend far higher for specialized purposes. Each port set or range is assigned specialized jobs or functions, and that's generally all they do. Usually, all identical system services or functions use the same port numbers on the receiving servers.

For example, all computers accessing or requesting Quote of the Day will always use port 17, because that port is officially reserved for that purpose, and only requests for that service use port 17. Outgoing information is channeled through a different or private port, keeping the "incoming line" open for others. Email received on a local computer generally uses a TCP port 25. File Transport Protocol or FTP uses port 21, to name only a few port assignments.

#### Range Groups

`0 to 1023` - Well known port numbers. Only special companies like Apple QuickTime, MSN, SQL Services, Gopher Services and other prominent services have these port numbers.

`1024 to 49151` - Registered ports; meaning they can be registered to specific protocols by software corporations.

`49152 to 65536` - Dynamic or private ports; meaning that they can be used by just about anybody.

## 3 Protocols:

#### HTTP(S)

**The Hypertext Transfer Protocol (HTTP)** is an application protocol for distributed, collaborative, hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web, where hypertext documents include hyperlinks to other resources that the user can easily access, for example by a mouse click or by tapping the screen. HTTP was developed to facilitate hypertext and the World Wide Web.

**Hypertext Transfer Protocol Secure (HTTPS)** is an extension of the Hypertext Transfer Protocol (HTTP) for secure communication over a computer network, and is widely used on the Internet. In HTTPS, the communication protocol is encrypted using Transport Layer Security (TLS), or, formerly, its predecessor, Secure Sockets Layer (SSL). The protocol is therefore also often referred to as HTTP over TLS, or HTTP over SSL.

The principal motivation for HTTPS is authentication of the accessed website and protection of the privacy and integrity of the exchanged data while in transit. It protects against man-in-the-middle attacks. The bidirectional encryption of communications between a client and server protects against eavesdropping and tampering of the communication. In practice, this provides a reasonable assurance that one is communicating without interference by attackers with the website that one intended to communicate with, as opposed to an impostor.

Historically, HTTPS connections were primarily used for payment transactions on the World Wide Web, e-mail and for sensitive transactions in corporate information systems.Since 2018, HTTPS is used more often by web users than the original non-secure HTTP, primarily to protect page authenticity on all types of websites; secure accounts; and keep user communications, identity, and web browsing private.

> **Note:** As of April 2018, 33.2% of Alexa top 1,000,000 websites use HTTPS as default, 57.1% of the Internet's 137,971 most popular websites have a secure implementation of HTTPS, and 70% of page loads (measured by Firefox Telemetry) use HTTPS.


#### FTP

The File Transfer Protocol (FTP) is a standard network protocol used for the transfer of computer files between a client and server on a computer network.

FTP is built on a client-server model architecture using separate control and data connections between the client and the server. FTP users may authenticate themselves with a clear-text sign-in protocol, normally in the form of a username and password, but can connect anonymously if the server is configured to allow it. For secure transmission that protects the username and password, and encrypts the content, FTP is often secured with SSL/TLS (FTPS) or replaced with SSH File Transfer Protocol (SFTP).

#### SSH

Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network. Typical applications include remote command-line login and remote command execution, but any network service can be secured with SSH.

SSH provides a secure channel over an unsecured network in a client–server architecture, connecting an SSH client application with an SSH server. The protocol specification distinguishes between two major versions, referred to as SSH-1 and SSH-2. The standard TCP port for SSH is 22. SSH is generally used to access Unix-like operating systems, but it can also be used on Windows. Windows 10 uses OpenSSH as its default SSH client.

## 4 Browsers

A web browser (commonly referred to as a browser) is a software application for accessing information on the World Wide Web. Each individual web page, image, and video is identified by a distinct URL, enabling browsers to retrieve and display them on the user's device.

A web browser is not the same thing as a search engine, though the two are often confused. For a user, a search engine is just a website, such as google.com, that stores searchable data about other websites. But to connect to and display websites on their device, a user needs to have a web browser installed

The most popular web browsers are Chrome, Firefox, Safari, Internet Explorer, and Edge.

### Functions

The purpose of a web browser is to fetch information resources and display them on a user's device.

This process begins when the user inputs a URL, such as https://en.wikipedia.org/, into the browser. Virtually all URLs on the Web start with either http: or https: which means the browser will retrieve them with the Hypertext Transfer Protocol. In the case of https: the communication between the browser and the web server is encrypted for the purposes of security and privacy. Another URL prefix is file: which is used to display local files already stored on the user's device.

Once a web page has been retrieved, the browser's rendering engine displays it on the user's device. This includes image and video formats supported by the browser.

Web pages usually contain hyperlinks to other pages and resources. Each link contains a URL, and when it is clicked, the browser navigates to the new resource. Thus the process of bringing content to the user begins again.

To implement all of this, modern browsers are a combination of numerous software components.

### Features

All major browsers allow the user to open multiple pages at the same time, either in different browser windows or in different tabs of the same window. They also support the use of extensions to add to or modify browser operation in a variety of ways.

Common user interface features of browsers:

- Back and forward buttons to go back to the previous - page visited or forward to the next one.
- A refresh or reload button to reload the current page.
- A stop button to cancel loading the page. (In some browsers, the stop button is merged with the reload button.)
- A home button to return to the user's home page.
- An address bar to input the URL of a page and display it.
- A search bar to input terms into a search engine. (In some browsers, the search bar is merged with the address bar.)

## 5 URL of a web page

A Uniform Resource Locator (URL), colloquially termed a web address, is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it. A URL is a specific type of Uniform Resource Identifier (URI), although many people use the two terms interchangeably. URLs occur most commonly to reference web pages (http), but are also used for file transfer (ftp), email (mailto), database access (JDBC), and many other applications.

Most web browsers display the URL of a web page above the page in an address bar. A typical URL could have the form http://www.example.com/index.html, which indicates a protocol (http), a hostname (www.example.com), and a file name (index.html).

Opening a local file on your computer is as simple as double-clicking it, but to open files on remote computers, like web servers, we must use URLs so that our web browser knows where to look. For example, opening the HTML file that represents the web page explained below, is done by entering it into the navigation bar at the top of the browser you're using.

Uniform Resource Locators are most commonly abbreviated as URLs but they're also called website addresses when they refer to URLs that use the HTTP or HTTPS protocol.

### Structure of a URL

A URL can be broken down into different sections, each piece serving a specific purpose when accessing a remote file.

HTTP and FTP URLs are structured the same, as protocol://hostname/fileinfo. For example, accessing an FTP file with its URL might look something like this:

```URL
FTP://servername/folder/otherfolder/programdetails.docx
```

Which, aside from having FTP instead of HTTP, looks like any other URL you might encounter out there on the web.

Let's use the following URL, which is Google's announcement of a CPU flaw, as an example of an HTTP address and identify each part:
```URL
https://security.googleblog.com/2018/01/todays-cpu-vulnerability-what-you-need.html
```

- **https** is the protocol (like FTP is a protocol) that defines the type of server that you're communicating with.
- **security** is the hostname used to access this specific website.
- **googleblog** is the domain name.
- **com** is what's referred to as the top-level domain (TLD), some others of which include .net, .org, .co.uk, etc.
- **/2018/01/** represents the directories used to organize the webpage or file. On the web server that's holding the website files, these would be the actual folders that you'd click through to find the file that this URL is specifying.
- **todays-cpu-vulnerability-what-you-need.html** is the actual file that the URL is pointing to. If you were trying to load an image, audio file, or another file type instead of an HTML file, then the URL would end in that file extension (like a PNG or MP3).
- **security.googleblog.com** as a group is called the Fully Qualified Domain Name (FQDN).

### URL syntax rules

Only numbers, letters, and the following characters are allowed in a URL: ()!$-'_*+.

Other characters must be encoded (translated to programming code) in order to be accepted in a URL.

Some URLs have parameters that split the URL away from additional variables. For example, when you do a Google search for lifewire:

```URL
https://www.google.com/search?q=lifewire
```

The question mark you see is telling a certain script, hosted on Google's server, that you want to send a specific command to it in order to get custom results.

The specific script that Google uses to execute searches knows that whatever follows the ?q= part of the URL should be identified as the search term, so whatever is typed at that point in the URL is used to search on Google's search engine.

You can see similar behavior in the URL in this YouTube search for best cat videos:

```URL
https://www.youtube.com/results?search_query=best+cat+videos
```
>**Note:** Although spaces are not allowed in a URL, some websites use a + sign, which you can see in both the Google and YouTube examples. Others use the encoded equivalent of a space, which is %20.

URLs that use multiple variables use one or more ampersands after the question mark. You can see the example here for an Amazon.com search for Windows 10:

```URLs
https://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=windows+10
```

The first variable, url, is preceded by the question mark but the next variable, field-keywords, is preceded by an ampersand. Additional variables would also be preceded by an ampersand.

Parts of a URL are case sensitive — specifically, everything after the domain name (the directories and file name). You can see this for yourself if you capitalize the word "tools" in the example URL from my site that we deconstructed above, making the end of the URL read /free-driver-updater-Tools.htm. Try to open that page here and you can see that it doesn't load because that specific file doesn't exist on the server.​

### More on URLs

If a URL points you to a file that your web browser can display, like a JPG image, then you don't have to actually download the file to your computer in order to see it. However, for files that aren't normally displayed in the browser, like PDF and DOCX files, and especially EXE files (and many other file types), you'll be prompted to download the file to your computer in order to use it.

URLs provide an easy way for us to access a server's IP address without needing to know what the actual address is. They're like easy-to-remember names for our favorite websites. This translation from a URL to an IP address is what DNS servers are used for.

Some URLs are really long and complex and are best used if you click it as a link or copy/paste it into the browser's address bar. A mistake in a URL could generate a 400-series HTTP status code error, the most common type being a 404 error.

One example can be seen at 1and1.com. If you try to access a page that doesn't exist on their server (like this one), you'll get a 404 error. These types of errors are so common that you'll often find custom, often humorous, versions of them on some websites.

If you're having trouble accessing a website or online file that you think should be loading normally, see How to Troubleshoot an Error in a URL for some helpful ideas on what to do next.

Most URLs don't require the port name to be given. Opening google.com, for example, can be done by specifying it's port number at the end like http://www.google.com:80 but it isn't necessary. If the website were operating on port 8080 instead, you could replace the port and access the page that way.

By default, FTP sites use port 21, but others may be set up on port 22 or something different. If the FTP site isn't using port 21, you have to specify which one it's using in order to access the server correctly. The same concept applies to any URL that uses a different port than what the program used to access assumes by default that it's using.

**Reference:**

[1] https://en.wikipedia.org/wiki/URL

[2] https://www.lifewire.com/what-is-a-url-2626035

## 6 The anatomy of a web page

A web page (also written as webpage) is a document that is suitable for the World Wide Web and web browsers. A web browser displays a web page on a monitor or mobile device.

Each web page (also known as webpage) represents various types of information presented to the visitor in an aesthetic and readable manner. Most of the web pages are available on the World Wide Web, which makes them widely accessible to the Internet public. Others may be also available online but only restricted to a certain private network, such as a corporate intranet. The information in all those web pages is located on remote web servers in the form of text, image, or script files. A smaller amount of web pages are intended for home or test use and are located on local computers, which do not need Internet connection to display them.

### How do web pages work?

The information on a web page is displayed online with the help of a web browser, which connects with the server where the website's contents are hosted through the Hypertext Transfer Protocol (HTTP). For instance, if you look at the URL of the web page you are on at the moment, you could notice the prefix 'http://', which tells the browser what protocol to use to execute the particular URL request.

Each web page's contents are usually presented in HTML or XHTML format, which allows for the information to be easily structured and then quickly read by the client's web browser. With the help of CSS (Cascading Style Sheets), designers can precisely control the web page's look and feel, as far as layout, typographic elements, color scheme and navigation are concerned. CSS instructions can be either embedded within the HTML web page (valid for that particular page) or can be included in a separate external file (valid for the whole site).

**An example of How to Create a Simple Web Page**

```html
<html>
  <head>
    <title>Your title goes here</title>
    <link href="/style.css" rel="stylesheet" type="text/css" />
  </head>
  <body bgcolor="white" text="red">
    <h1>My first Web page</h1>
    This is my first web page!
  </body>
</html>
```

### Web Page content

There are multiple types of information that could be presented on web pages, which could be divided into two main groups - perceived information (visible to the website visitor) and hidden information (hidden from the visitor's eye).

Depending on the purpose and target audience of a website, its perceived information could be textual, non-textual and interactive.

The non-textual information includes static images (e.g. GIF, JPEG, PNG or TIFF), animated images (e.g. animated GIF, Flash, Shockwave, Java Applet), vector formats (e.g. Flash, SVG), audio file formats (MIDI, WAV, MP3, Java Applets), video files (WMV, RM , FLV, MPG, MOV). Interactive content on web pages could be displayed via DHTML, interactive illustrations, script orchestration or DHTML based buttons. For interaction between the content on separate pages developers use hyperlinks and forms.

The hidden information on web pages includes comments, metadata, charset details, CSS visual specifications, scripts (e.g. the interactivity focused JavaScript, Ajax).

Depending on the type of information, a web page could be qualified as being static and dynamic. Static web pages contain static text files that are displayed on the screen the way they are stored on the web server. Dynamic web pages, in turn, are retrieved by the browser in accordance with the interactivity instructions set for the particular web page.

**Reference:**

[1] https://en.wikipedia.org/wiki/Web_page

[2] https://www.ntchosting.com/encyclopedia/internet/web-page/


## 7 Graphics on the Web

Websites and applications often need to present graphics. Static images can easily be displayed using the `<img>` element, or by setting the background of HTML elements using the background-image property. You can also construct graphics on-the-fly, or manipulate images after the fact. These articles provide insight into how you can accomplish this.

At some point in your wild-tech-y life, you had to use an animation. According to the complexity of it, you would end up using simple CSS or JS animations either complex SVG or CANVAS animations. A decision has been made, was it the right one? Well, let’s see.

First of all, if you want a simple yet a bit complex animation, the performance of SVG or CANVAS is not that relevant, therefore, it’s a matter of preference.

### Canvas

Canvas was added in the glorious HTML5. As we know, Canvas is restricted as it only can be manipulated through JS.

It can be used to literally draw shapes and graphs, make ridiculously complex photo compositions, obviously, you can create animations and the best out of best you can develop live video processing and rendering.

As Thor has his hammer, canvas has WebGL. WebGL (web graphic library) is a powerful JS API which can be used for rendering interactive 3D and 2D graphics and elements. The canvas element is used by the API to draw/create hardware-accelerated graphics.

#### Basic example

This simple example draws a green rectangle onto a canvas.

**HTML**

```html
<canvas id="canvas"></canvas>
```

**Javascript**

```Javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
```

The output will be a green box. Easy.

Canvas provides a high-performance element best suited to rendering raster graphics for interactive embeds or games such as sprites, image editing and applications that require per-pixel manipulation abilities. Unfortunately, the performance of canvas apps degrades as resolutions increase and wouldn’t be recommended for use in full-screen user interfaces.

### SVG

The Scalable Vector Graphics (SVG) lets you use lines, curves, and other geometric shapes to render graphics. With vectors, you can create images that scale cleanly to any size.

SVG(scalable vector graphics) is used as a tool to define graphics for the Web. The SVG element has its own viewport and coordinate system. The SVG only permites specific content elements such as: `<a>, <altGlyphDef>, <clipPath>, <color-profile>, <cursor>, <filter>, <font>, <font-face>, <foreignObject>, <image>, <marker>, <mask>, <pattern>, <script>, <style>, <switch>, <text>, <view> and its graphic elements <animate>, <animateColor>, <animateMotion>, <animateTransform>, <discard>, <mpath>, <set>, <circle>, <ellipse>, <line>, <polygon>, <polyline>, <rect>`.

SVG is resolution-independent, thereby the word vector, making it ideal for rendering cross-platform UI /UX components, animations and applications where each element needs to be accessible via the DOM.

SVG is truly powerful in-browser, as it is vector based which provides a high-quality experience but it can also be paired with other multimedia elements, audio tags and video.

The viewBox attribute establishes a logical coordinate system which the SVG picture’s coordinates are relative to. In this case, our picture is laid out in a 100 by 100 viewport.

The preserveAspectRatio attribute specifies that the aspect ratio must be preserved by centring the picture in the available size, sizing to the maximum of the height or width and then cutting off any overflow.

#### Basic example

The syntax is easy-to-read as well:

```SVG
<svg id="SearchIcon" viewBox="0 0 3000.29 592.05" xmlns="http://www.w3.org/2000/svg">
  <path d="M2409,211.5c0,116.25,94.24,210.5,210.5,210.5a209.45,209.45,0,0,0,115.68-34.66c.55.62,1,1.31,1.55,1.9L2848,500.47A42.79,42.79,0,1,0,2908.47,440L2797.24,328.73c-.59-.59-1.28-1-1.9-1.55A209.46,209.46,0,0,0,2830,211.5C2830,95.24,2735.75,1,2619.5,1S2409,95.24,2409,211.5M2482,211.5A137.53,137.53,0,1,1,2619.5,349,137.53,137.53,0,0,1,2482,211.5">
  </path>
</svg>
  ```
The output is gonna be a search-icon like [this](data/search.svg).


### WebGL

WebGL (Web Graphics Library) is a JavaScript API for rendering interactive 3D and 2D graphics within any compatible web browser without the use of plug-ins. WebGL elements can be mixed with other HTML elements and composited with other parts of the page or page background. WebGL does so by introducing an API that closely conforms to OpenGL ES 2.0 that can be used in HTML5 `<canvas>` elements.

WebGL is widely supported in modern browsers. However its availability is dependent on other factors like the GPU supporting it. The official WebGL website offers a simple test page. More detailed information (like what renderer the browser uses, and what extensions are available) is provided at third-party websites.

The `<canvas>` element is also used by the Canvas API to do 2D graphics on web pages.

>**History of WebGL:** WebGL evolved out of the Canvas 3D experiments started by Vladimir Vukićević at Mozilla. Vukićević first demonstrated a Canvas 3D prototype in 2006. By the end of 2007, both Mozilla and Opera had made their own separate implementations.
>
>In early 2009, the non-profit technology consortium Khronos Group started the WebGL Working Group, with initial participation from Apple, Google, Mozilla, Opera, and others. Version 1.0 of the WebGL specification was released March 2011. As of March 2012, the chair of the working group is Ken Russell.
>
>Early applications of WebGL include Zygote Body. In November 2012 Autodesk announced that they ported most of their applications to the cloud running on local WebGL clients. These applications included Fusion 360 and AutoCAD 360.
>
>Development of the WebGL 2 specification started in 2013 with final in January 2017. This specification is based on OpenGL ES 3.0.First implementations are in Firefox 51, Chrome 56 and Opera 43.

### Comparison

**Canvas**

- Resolution dependent
- No support for event handlers
- Poor text rendering capabilities
- You can save the resulting image as .png or .jpg
- Well suited for graphic-intensive games

**SVG**

- Resolution independent
- Support for event handlers
- Best suited for applications with large rendering areas (Google Maps)
- Slow rendering if complex (anything that uses the DOM a lot will be slow)
- Not suited for game application

**SVG Is Vector-based, Canvas Manipulates Pixels**

What's the difference, you ask? Remember those old vector video games like asteroids and Tempest. No? OK, I'm getting up there! Anyway, those were based on bright line drawings. One of the reasons for their popularity was that they looked quite different from typical games at the time. With regards to SVG and Canvas, the differences are a lot less dramatic visually, as you can load bitmaps in SVG, and you can draw lines using the canvas API. However, creating the image may be easier using one technology over the other, depending on whether your graphic is mainly line-based or more image-like.

**SVG Relies on Files, Canvas Uses Pure Scripting**

SVG images are defined in XML. As a result, every SVG element is appended to the Document Object Model (DOM) and can be manipulated using a combination of JavaScript and CSS. Moreover, you can attach an event handlers to a SVG element or update its properties based on another document event. Canvas, on the other hand, is a simple graphics API. It draws pixels (extremely well I might add) and nothing more. Hence, there's no way to alter existing drawings or react to events. If you want to update the Canvas image, you have to redraw it.

**Other Considerations**

SVGs are considered to be more accessible because they support text. In the event that the browser does not support SVG, text content will still be displayed. The Canvas is dependent on JavaScript, so there can be an issue if the user has disabled JavaScript or uses an assistive device such as a reader that cannot interpret the JavaScript output. However, that can be remedied by including the <NOSCRIPT> tag. If you want to present the best user experience for those with JavaScript turned off, SVG would be your best choice.

For front-end designers, there's no question that SVG would be easier to configure, due to XML's high readability. This is the same reason that Frameworks like Spring have been so popular these last few years; pretty much anyone can use them. Canvas images are created programmatically and require some programming expertise that is more suited to a developer.


So, SVG is probably better for applications and apps with few items. And Canvas is better for thousands of objects and careful manipulation, but a lot more code (or a library) is needed to get it off the ground

### Graphics (e.g., SVG, canvas, webgl) Tools

**General:**

- Fabric.js
- Two.js

**Canvas:**

- EaselJS
- Paper.js

**SVG:**

- d3
- GraphicsJS
- Raphaël
- Snap.svg
- svg.js

**WebGL**

- pixi.js
- three.js

**Reference:**

[1] https://www.yworks.com/blog/svg-canvas-webgl

[2] https://developer.mozilla.org/en-US/docs/Web/Guide/Graphics

[3] https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

[4] https://medium.com/@benisinca/svg-vs-canvas-92938aff799a
