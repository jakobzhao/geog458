# Fonts

## Popular Font Alternatives

In this section, I listed the google web font alternative to the commonly used commerical fonts.

| Commonly Used Commercial Fonts | Google Web Fonts |
| ------------------------------ | ---------------- |
| Helvetica                      | Sans Source Pro  |
| Century Gothic                 | Questrial        |
| Calibri                        | Droid Sans       |
| Garamond                       | Merriweather     |
| Avenir Next Rounded            | Nunito           |
| Frutiger                       | Istok Web        |
| Adobe Caslon Pro               | Lusitana         |
| Futura Condensed               | Oswald           |
| Rockwell                       | Arvo             |
| Impact                         | Anton            |

## Commonly used font combinations

**Serif Fonts**

-   Georgia, serif

-   "Palatino Linotype", "Book Antiqua", Palatino, serif

-   "Times New Roman", Times, serif

**Sans-Serif Fonts**

-   Arial, Helvetica, sans-serif

-   "Arial Black", Gadget, sans-serif

-   "Comic Sans MS", cursive, sans-serif

-   Impact, Charcoal, sans-serif

-   "Lucida Sans Unicode", "Lucida Grande", sans-serif

-   Tahoma, Geneva, sans-serif

-   "Trebuchet MS", Helvetica, sans-serif

-   Verdana, Geneva, sans-serif

**Monospace Fonts**

-   "Courier New", Courier, monospace

-   "Lucida Console", Monaco, monospace

## Use a Google Web Font

To use a google font in your web application, you should include the font link in the head element as shown below:

```html
    <link href='//fonts.googleapis.com/css?family=Sofia' rel='stylesheet'>
```

Apply a google font for a specific div. For example, the code below applies the sofia font to all the texts inside of the body div.

```css
 <style>
        body {
            font-family: 'Sofia';font-size: 22px;
        }
    </style>
```

## Font Template

Look for the font families on [Google Web Fonts](https://fonts.google.com/), and generate the font css for the following html elements, including `html`, `body`, `h1` to `h6`, and other elements you think is necessary.

> **Note:** regarding the header elements, perhaps your project will not use al the six headers, please only list those are important.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Font Template Page</title>
    <link href='//fonts.googleapis.com/css?family=Sofia' rel='stylesheet'>
    <style>
        body {
            font-family: 'Sofia';font-size: 22px;
        }
    </style>
</head>
<body>

<h1>Sofia</h1>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
<p>123456790</p>
<p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
<p>abcdefghijklmnopqrstuvwxyz</p>

</body>
</html>
```
