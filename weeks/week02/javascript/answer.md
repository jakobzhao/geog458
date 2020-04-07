## Ungraded questions's Answers

Here's the answers and explainations for the questions. You can always vist [w3school](https://www.w3schools.com/js/default.asp) to learn more deatiled javascript knowledge. 

**Question 1.** Inside which HTML element do we put the JavaScript? (5 points)

> A. ```<javascript>```
>
> B. ```<js>```
>
> C. ```<script>```
>
> D. ```<scripting>```

**Answer:** C. ```<script>```


**Question 2.** What is the correct JavaScript syntax to change the content of the HTML element below? (5 points)

```<p id="demo">This is a demonstration.</p>```

> A. #demo.innerHTML = "Hello World!";
>
> B. document.getElementByName("p").innerHTML = "Hello World!";
>
> C. document.getElement("p").innerHTML = "Hello World!";
>
> D. document.getElementById("demo").innerHTML = "Hello World!";

**Answer:** D. document.getElementById("demo").innerHTML = "Hello World!";

**Explaination:** If you want to use tag name "p" to select the element, you should use document.getElementByTagName("p")

**Question 3.** What is the correct syntax for referring to an external script called "xxx.js"? (5 points)

> A. ```<script href="xxx.js">```
>
> B. ```<script src="xxx.js">```
>
> C. ```<script name="xxx.js">```

**Answer:** B. ```<script src="xxx.js">```

**Question 4.** How do you create a function in JavaScript? (5 points)

> A. function = myFunction()
>
> B. function myFunction()
>
> C. function:myFunction()

**Answer:** B. function myFunction()

**Explanation:** In JavaScript, function is defined as ‘function x()’.

**Question 5.** How to write an IF statement for executing some code if "i" is NOT equal to 5? (5 points)

> A. if i =! 5 then
>
> B. if (i != 5)
>
> C. if (i <> 5)
>
> D.if i <> 5

**Answer:** B. if (i != 5)

**Question 6.** How does a FOR loop start? (5 points)

> A. for i = 1 to 5
>
> B. for (i = 0; i <= 5)
>
> C. for (i <= 5; i++)
>
> D. for (i = 0; i <= 5; i++)

**Answer:** D. for (i = 0; i <= 5; i++)

**Explaination:** You can visit https://www.w3schools.com/js/js_loop_for.asp to learn more about jacascript forloop.

**Question 7.** What is the correct way to write a JavaScript array? (5 points)

> A. var colors = ["red", "green", "blue"]
>
> B. var colors = "red", "green", "blue"
>
> C. var colors = (1:"red", 2:"green", 3:"blue")
>
> D. var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")

**Answer:** A. var colors = ["red", "green", "blue"]

**Explaination:** You can visit https://www.w3schools.com/js/js_arrays.asp to learn more about jacascript array.

**Question 8.** Which event occurs when the user clicks on an HTML element? (5 points)

> A. onmouseclick
>
> B. onmouseover
>
> C. onclick
>
> D. onchange

**Answer:** C. onclick

**Explaination:** The onclick event occurs when the user clicks on an element. For more information about onclick you can vivist the w3school page https://www.w3schools.com/jsref/event_onclick.asp.

**Question 9.** How do you declare a JavaScript variable? (5 points)

> A. v carName;
>
> B. var carName;
>
> C. js carName;
>
> D. object carName;

**Answer:** B. var carName;

**Question 10.** Which value does the statement `1 == 2` return?

> A. true;
>
> B. 1;
>
> C. false;
>
> D. 2;

**Answer:** C. false;

**Explanation:** = is used for assigning values to a variable in JavaScript. == is used for comparison between two variables irrespective of the datatype of variable. === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.

**Question 11.** Please briefly describe how to launch the atom live server to port 5000 on localhost (127.0.0.1).  --  1 POINTS

**Answer:** 1)press "control + alt + l" 2) Slect "Packages", find "atom-live-server" then click "start server"

**Question 12.** Please list two ways to activate the inspector of Google Chrome.  -- 1 POINTS

**Answer:** 1）"opion + command + i(or j)" on ios system, "Control + Shift + i(or j)" on windows system. 2）Click the three dot option icon at the top-right corner of chrome window and select "More tools", then select chrome "Developer tools". 3)Press F12 in Chrome 4)right click on the page you want to inspect then select "inspect"

**Question 13.** Assume a repository of course material has already been cloned to your local computer. In the class, you have annotated some markdown files in the local repository as a convenient way to take notes. Do you think it is an appropriate way to do that? Please describe the reasons why. If it is not an appropriate, please list your suggestion. -- 3 POINTS

**Answer:** It's ok to annotated some markdown files as long as you don't push it to the origin repository. However, if you accidently push the modified file to the repositroy, it will has a large effect to other students and professor. A better way to do this will be fork the repository to your own github count then cloned it to local computer.

## Reference

[1] Foster M. (2015) JavaScript: An Introduction, retrieved January 1, 2017 from http://duspviz.mit.edu/web-map-workshop/javascript-an-introduction/
