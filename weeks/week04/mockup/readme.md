# Project Mock-up

**Learning Objectives**

- Understand the design proces and the importance of mock-up;
- Use Figma to make a mock-up for a web mapping application; and
- export and present the mock-up.

Mockups are essential for the design process at the early stage of a project as they give viewers an idea of how the final product will appear, and the implementation of interactive elements like buttons and icons also hints at the function. With a well-made sample in front of their eyes, stakeholders don’t have to rely so much on their imaginations. So, we are going to learn how to use one of the most famous browser-based UI and UX design applications Figma to create mockups for a project.

## 1. Introduction

The project we are designing the mockup for is called [**Damron Guide: Seattle**](https://hgis.uw.edu/damron/seattle.html), it is a website utilizing online maps to visually explore the [Damron’s Travel Guide](https://damron.com/about-us) which specifies the spatial pattern and temporal changes of the LGBT related places. Especially, The evolving space of LGBTQ life in Seattle in the past five decades. For more information, you could visit this web site.

![](img/website.png)
> the figure above illustrrates the web GUI of the web map application _Damron Guide: Seattle_

In this mockup, we will walk through the whole design process of the main GUI including the basemap, venues,  layer switcher, timeline and info panel. Then, we will add in some hover over functions, and finally give a brief intro to how to design user interfaces other than the desktop GUI, such as the mobile GUI.

## 2. Preparation

### 2.1 Registration

In this section, we will guide you to use your email to sign up and log into the figma website.

1. Head to Figma.com and click **Sign up** in the top right corner. Or, follow this [link](https://www.figma.com/signup) directly.

2. Enter your **Email address** and a unique **Password** in the field provided, then click the **Sign up** button to complete the process. You will be logged into your new Figma account immediately. Or if you have a Google account, you can sign up using Google's Single Sign-On (SSO) process.

3. Figma will send you an email to verify your account. Open the email, and click the **Verification** button to complete the process and log into your new Figma account.

4. Figma will provide an introduction to some basic functions.

### 2.2 Relevant Resources

This section will introduce some relevant resources you probably will need when designing your own mockup. Please make sure to download the Charts plugin, System design kits and Google Map UI design kits ahead as we will use them in the next design mockup section.

**Base maps**

- [Google maps](https://www.google.com/maps/)

- [Mapbox](https://www.mapbox.com/)

- [Leaflet preview](https://leaflet-extras.github.io/leaflet-providers/preview/)

**Charts**

- [Charts plugin](https://www.figma.com/community/plugin/731451122947612104/Charts)

**Design kits: integrative frameworks/solutions to the design components**

- [System design](https://www.figma.com/@materialdesign)

- [Google Map UI](https://www.figma.com/community/file/775789656970237137)

**Dummy text: placeholder for narratives**

- [Lipsum](https://www.lipsum.com/)

## 3. Design Mockup

### 3.1 Main GUI

In this section, we will design the main user interface. We will need to firstly create a new page, then, add in the base map, venues inside the page. Finally, we could incorporate some other map features into the page such as the zoom button, map layer selection, timeline, heatmap toggle, and info panel.

### New file

In this part, we will create a new file with the common desktop screen size presets.

1. Click the **Plus** sign at the top right of the page to create a new file.

2. In the template window, under **Blank Presets**, check **Desktop** with default size of **1440 x 1024** as it is one of the most common screen sizes today.

![](img/0.png)

3.Click the **Create File** button at the bottom of the window to create the file.

![](img/1.png)

### Base Map

In this part, we will add the base map we chose to our page and enable the horizontal and vertical scrolling to it.

1. Download this map we provided down below or go to one of the **Map Resources** we provided above, take a screenshot of the map image you want to use.

![](img/2.png)

2. **Cmd + Shift + K (Mac) / Ctrl + Shift + K (Windows)**  to open the import image window.

![](img/3.png)

3. Select the map image you downloaded earlier from your computer in the window.


4. Click **Open** to open the image.


5. Click anywhere inside the new blank page to place it in the page.


6. At the left side of your screen, under **Layers**, click the **name of the image** you just imported to select it

![](img/4.png)

7. **Cmd + R (Mac) / Ctrl + R (Windows)** to rename it to **"Map"**.

8. Inside the design bar at the right side of your screen, change the **W (Width)** of the map to **2500** to make the image large enough to cover the whole page.

![](img/5.png)

9. At the top of the design bar, click **the second and fifth icon** from left to right to make the map align horizontally and vertically center inside the page.

![](img/a.png) ![](img/b.png)

10. At the left side of your screen, under **Layers**, click **Desktop - 1** to select the frame.

![](img/6.png)

11. At the right side of your screen, select **Prototype** at the top row.

![](img/7.png)

12. Under the **Overflow behavior**, the default should be Vertical scrolling, click the **drop down arrow** to switch it to **Horizontal and vertical scrolling**. This will enable the user to scroll the map both horizontally and vertically inside the page.

![](img/8.png)

### Venues

In this part, we will add the venues to the map. In the urban LGBTQ+ space, there are many types of venues with different ways to categorize them. For this part, we will only separate the venues into two categories: men (blue) or women (purple) related places. We will add more info later in the hover over functions.

1. At the right side of your screen, select **Design** at the top row.

2. Uncheck the **Clip Content** option to view part of the map that is outside the page.

![](img/9.png)

3. Hit **O** on your keyboard, then click anywhere inside the map to create an ellipse.

4. At the right side of your screen under **Design**, change the **W (Width)** and the **H (Height)** to **10** to make the ellipse smaller.

![](img/10.png)

5. Under **Fill**, change the color to **Blue (2F35CA)**.

![](img/11.png)

6. Click the **Plus** sign right beside **Effects** to add a new effects.

7. The default new effect should be **Drop shadow**. Click the **sun icon ☀️** to open a window with more detailed effecting settings.

![](img/12.png)

8. In the drop shadow setting window, set **X** to **0**, **Y** to **0**, **Blur** to **10**, **Spread** to **7**, and **color** to **Blue (2F35CA) 25%**.

![](img/13.png)

9. **Cmd + C (Mac) / Ctrl + C (Windows)** to copy this ellipse, then **Cmd + V (Mac) / Ctrl + V (Windows)** to paste it. The copy should be generated at the exact location of your original ellipse. Use your mouse to **select and drag** it anywhere else in the map.

![](img/14.png)

10. At the right side of your screen under **Fill**, change the new ellipse's color to **Purple (CA2FC4)**.

![](img/15.png)

11. Click the **sun icon ☀** to open a window with more detailed settings.

12. In the drop shadow setting window, set the **color** to **Purple (CA2FC4) 25%**.

![](img/16.png)

13. Using the same process, you could create as many ellipses as you want with different colors inside the map.

![](img/17.png)

14. At the left side of your screen, under **Layers**, (!!! If any ellipse is outside the Desktop - 1 frame, you need to drag them down inside the Desktop - 1 frame) hold **Cmd (Mac) / Ctrl (Windows)** and click all the ellipses you just created to select them.

![](img/18.png)

15. **Cmd + G (Mac) / Ctrl + G (Windows)** to make them into a group.

16. **Cmd + R (Mac) / Ctrl + R (Windows)** to rename the group to **"Venues"**.

![](img/19.png)

! Remember to keep the Venues group above the map layer or the venues will be covered by the map.

### Zoom Button

In this part, we will add the zoom button to the top right of the page.

1. At the left side of your screen, under **Layers**, select frame **Desktop - 1**.

2. At the right side of your screen under **Design**, check the **Clip Content** option to only view the part of objects that is inside the page.

![](img/20.png)

3. Open the **[Google Map UI](https://www.figma.com/file/CDdpPaVCN2VKZVkYSW04VO/Google-Maps-UI-Kit-(Community))** in another window.

4. At the left side of your screen, select **Google Maps** under **Pages**.

![](img/21.png)

5. Select **Controls / Zoom Controls**, then **copy** it.

![](img/22.png)

6. **Paste** the button we just copied and **drag** it to the upper right corner inside our page.

![](img/23.png)

7. At the right side of your screen under **Constraints**, check **Fix position when scrolling** to make it position fixed.

![](img/24.png)

8. Under **Layer**, change **Passing Through** value to **80** to make it look translucent.

![](img/25.png)

### Map layer selection

In this part, we will add the map layer selection panel right below the zoon button in our page. It should allow the user to choose between different kinds of base map, and filter different kinds of venues.

1. Hit **R** on your keyboard, then click anywhere inside the page to create a rectangle.

2. Inside the **Design** at the right side of your screen, change **W (Width)** of the rectangle to **125**, **H (Height)** of the rectangle to **200**, **Corner Radius** to **2**.

3. Under **Fill**, change the new ellipse's color to **White (FFFFFF)**.

![](img/26.png)

4. Click the **Plus** sign right beside **Effects** to add new effects.


5. The default new effect should be Drop shadow. Click the **sun icon ☀️** to open a window with more detailed settings.

6. In the drop shadow setting window, set **X** to **0**, **Y** to **1**, **Blur** to **3**, **Spread** to **0**, and **color** to **000000 20%**.

![](img/27.png)

7. At the left side of your screen, under **Layers**, click the **name of the rectangle** you just created to select it.


8. **Cmd + R (Mac) / Ctrl + R (Windows)** to rename it to **"Background"**.


9. Hit **T** on your keyboard, then click anywhere inside the background to create a text box.


10. Type different map choices, e.g. **Greyscale \n\n Streets \n\n Satellite**.


11. Hit **T** on your keyboard, then click anywhere inside the background to create another text box.


12. Type different data filters, e.g. **Men \n\n Women \n\n Place Names**.

![](img/28.png)

13. Open the **[System Design](https://www.figma.com/file/MwkxeoAHrJshXK2xRyGQES/Material-Baseline-Design-Kit-(Community)?node-id=4%3A0)** in another window.

14. Find and copy **Radio Checked button, Radio Unchecked button, Checkbox Selected button, Checkbox Unselected button** in the Stickersheet.

![](img/29.png)

15. **Paste** the buttons we just copied inside the background.

16. Change **W (Width)** of the buttons to **20**, **H (Height)** of buttons to **20**.

17. Select **Radio Checked buttons** and **Checkbox Selected buttons**. At the right side of your screen, under **Selection colors**, change the color of the button to **Blue 1**.

18. Align them with the corresponding texts inside the background.

![](img/30.png)

19. At the left side of your screen, under **Layers**, hold **Cmd (Mac) / Ctrl (Windows)** and click all the objects you just created inside the background and the background to select them all.

20. **Cmd + G (Mac) / Ctrl + G (Windows)** to make them into a group.

21. **Cmd + R (Mac) / Ctrl + R (Windows)** to rename the group to **"Map selection and filters"**.

22. At the right side of your screen under **Constraints**, check **Fix position when scrolling** to make it position fixed.

23. Under **Layer**, change **Passing Through** value to **80** to make it look translucent.

![](img/31.png)

### Timeline

In this part, we will add the timeline feature to the top left of our page, which shows trends clearly and helps to make predictions about the results of data not yet recorded.

1. Hit **T** on your keyboard, then click the left corner of the page to open a text box.

2. At the right side of your screen, under **Text**, change the font size to **48**.

3. Type **"2012"** in the textbox.

![](img/32.png)

4. Click the **menu button** at the top left of your screen, inside **Plugins**, click **Charts**.

![](img/33.png)

5. Choose the **Area chart**, under **Configure**, Change **No of series** to **2**, **No of data points** to **7**, **Data range start** to **0**, **Data range end** to **20**, select **Hide grid** and **Use local styles colors**, and click **Add chart** at the bottom right of the window.

6. At the right side of your screen, under **Selection colors**, change the colors to **Blue (2F35CA)** and **Purple (CA2FC4)**.

7. At the left side of your screen, under **Layers**, click the **name of the line chart** you just imported to select it.

8. **Cmd + R (Mac) / Ctrl + R (Windows)** to rename it to **"Line Chart"**.

9. Inside the design bar at the right side of your screen, change the **W (Width)** of the map to **650**, **H (Height)** to **100**.

10. **Drag** the line chart you just created to align it with the 2012 textbox.

![](img/34.png)

11. At the left side of your screen, under **Layers**, click the textbox and the line chart you just created to select them.

12. **Cmd + G (Mac) / Ctrl + G (Windows)** to make them into a group.

13. **Cmd + R (Mac) / Ctrl + R (Windows)** to rename the group to **"Year title and Line chart"**.

14. At the right side of your screen under **Constraints**, check **Fix position when scrolling** to make it position fixed.

15. Under **Layer**, change **Passing Through** value to 80 to make it look translucent.

### Heatmap toggle

In the part, we will add a heatmap toggle right under the timeline feature in our page.

1. Hit **T** on your keyboard, then click the left corner of the page to open a text box.

2. At the right side of your screen, under **Text**, change the font size to **18**.

3. Type **"Heatmap"** in the textbox.

4. Drag the textbox and align right below the year title.

5. Open **[System Design](https://www.figma.com/@materialdesign)** in another window.

6. Find and copy the **toggle button**.

![](img/35.png)

7. **Paste** the buttons we just copied and place it right beside the heatmap text.

8. At the left side of your screen, under **Layers**, hold **Cmd (Mac) / Ctrl (Windows)** and click all the objects you just created inside the background and the background to select them all.

9. **Cmd + G (Mac) / Ctrl + G (Windows)** to make them into a group.

10. **Cmd + R (Mac) / Ctrl + R (Windows)** to rename the group to **"Heatmap Toggle"**.

11. At the right side of your screen under **Constraints**, check **Fix position when scrolling** to make it position fixed.

12. Under **Layer**, change **Passing Through** value to **80** to make it look translucent.

### Info Panel

In this part, we will add an info panel at the left bottom corner of our page. It should include a seattle logo, a paragraph with some background information about this project, and some data visualizations to help the users to find patterns and gain insights.

1. Hit **R** on your keyboard, then click the lower right corner inside the page to create a rectangle.

2. Inside the **Design** at the right side of your screen, change **W (Width)** of the rectangle to **450**, **H (Height)** of the rectangle to **500**, **Corner Radius** to **2**.

3. Under **Fill**, change the color to **white (FFFFFF)**.

4. Click the **Plus** sign right beside **Effects** to add new effects.

5. The default new effect should be Drop shadow. Click the **sun icon ☀** to open a window with more detailed settings.

6. In the drop shadow setting window, set **X** to **0**, **Y** to **1**, **Blur** to **3**, **Spread** to **0**, and **color** to **000000 20%**.

7. At the left side of your screen, under **Layers**, click the **name of the rectangle** you just created to select it.

8. **Cmd + R (Mac) / Ctrl + R (Windows)** to rename it to **"Background"**.

![](img/36.png)

9. Hit **T** on your keyboard, then click anywhere inside the background to create a text box.

10. At the right side of your screen, under **Text**, change the font size to **24**.

11. Type **"Seattle"** inside the textbox and place it at the top of the background.

12. Download the image down below to your computer.

![](img/c.png)

13. In your figma page, **Cmd + Shift + K (Mac) / Ctrl + Shift + K (Windows)** to open the import image window.

14. Select the image you just downloaded earlier from your computer in the window.

15. Click **Open** to open it.

16. Click anywhere outside the page to place it. Align it right below the "Seattle" text.

17. At the right side of your screen, change the **W (Width)** of the image to **100**.

18. Hit **T** on your keyboard, then click anywhere inside the background to create another text box.

19. At the right side of your screen, under **Text**, change the font size to **14**.

20. Paste some **dummy text** into the textbox and drag it right beside the image.

![](img/37.png)

21. Click the **menu button** at the top left of your screen, inside **Plugins**, click **Charts**.

![](img/38.png)

22. Choose the **Bar chart**, under **Configure**, Change **No of series** to **2**, **No of data points** to **5**, **Data range start** to **0**, **Data range end** to **20**, select **Hide grid** and **Use local styles colors**, and click **Add chart** at the bottom right of the window.

![](img/39.png)

23. At the right side of your screen, under **Selection colors**, change the colors to **Blue (2F35CA)** and **Purple (CA2FC4)**.


24. At the left side of your screen, under **Layers**, click the **name of the chart** you just imported to select it.

25. **Cmd  + R (Mac) / Ctrl + R (Windows)** to rename it to **"Bar Chart"**.

26. Inside the design bar at the right side of your screen, change the **W (Width)** of the map to **450**, **H (Height)** to **150**.

27. Click the **menu button** at the top left of your screen, inside **Plugins**, click **Charts** to create another chart.

28. Choose the **Pie / Doughnut chart**, under **Configure**, Change **No of Segments** to **2**, **Inner radius** to **0**, **Outer radius** to **70**, and select **Hide grid**, and click **Add chart** at the bottom right of the window.

![](img/40.png)

29. Change the segments colors to **Blue (2F35CA)** and **Purple (CA2FC4)**.

30. At the left side of your screen, under **Layers**, click the **name of the chart** you just imported to select it.

31. **Cmd + R (Mac) / Ctrl + R (Windows)** to rename it to **"Pie Chart"**.

32. Drag and align the two charts inside the background.

33. At the left side of your screen, under **Layers**, hold **Cmd (Mac) / Ctrl (Windows)** and click all the objects you just created inside the background and the background to select them all.

34. **Cmd + G (Mac) / Ctrl + G (Windows)** to make them into a group.

35. **Cmd + G (Mac) / Ctrl + R (Windows)** to rename the group to **"Info Panel"**.

36. At the right side of your screen under **Constraints**, check **Fix position when scrolling** to make it position fixed.

37. Under **Layer**, change **Passing Through** value to **80** to make it look translucent.

![](img/41.png)

### 3.2 Hover Over

In this section, we will make a copy of the page we are working on, and shows what the users will see when they hover over one of the venues in the new page.

1. At the left of your screen, under **Layers**, select **Desktop - 1 frame**, use **Ctrl +C (Mac) / Cmd + C (Windows)**, then **Ctrl + V (Mac) / Cmd + V (Windows)** to make a copy of it.

![](img/42.png)

2. Hit **R**, then click anywhere in the new **Desktop - 2** to create a new rectangle.

3. At the right of your screen, under **Design**, change the **W (Width)** to **150**, and **H (Height)** to **50**.

4. Under **Fill**, change the color to **white (FFFFFF)**.

5. Click the **Plus** sign right beside **Effects** to add new effects.

6. The default new effect should be Drop shadow. Click the **sun icon ☀** to open a window with more detailed settings.

7. In the drop shadow setting window, set **X** to **0**, **Y** to **1**, **Blur** to **3**, **Spread** to **0**, and **color** to **000000 20%**.

8. At the left side of your screen, under **Layers**, click the **name of the rectangle** you just created to select it.

9. **Cmd + R (Mac) / Ctrl + R (Windows)** to rename the rectangle to **"Background"**.

10. Drag to align it right beside one of the venues.

11. Hit **T** on your keyboard, then click anywhere inside the background to create a text box.

12. At the right side of your screen, under **Text**, change the font size to **14**.

13. Paste some **Dummy text** into the textbox.

14. At the left side of your screen, under **Layers**, hold **Cmd (Mac) / Ctrl (Windows)** and click all the objects you just created inside the background and the background to select them all.

15. **Cmd + G (Mac) / Ctrl + G (Windows)** to make them into a group.

16. **Cmd + G (Mac) / Ctrl + R (Windows)** to rename the group to **"Hover Over"**.

17. At the right side of your screen, under **Layer**, change **Passing Through** value to **80** to make it look translucent.

![](img/43.png)

### 3.3 GUI for mobile device

You could also create mockups for other devices with different screen sizes in Figma. In this section, we will take the mobile version for an illustration.

1. Click the **Plus** sign at the top right of the page to create a new file.

2. In the template window, under **Blank Presets**, check the middle one and select the version of the phone you want.

![](img/44.png)

3. Click the **Create File** button at the bottom of the window to create the file.

4. Everything should be the same afterwards, you just need to adjust the size for each object to make them fit in the page.

## 4. Present and export

To present the mockups we just created:

1. Click the **play button** in the upper right corner of your screen, a present version of your mock up should be opened in the new tab.

![](img/45.png)

To export the mockup we just created as the format we want:

1. Select the Desktop - 1 frame, At the right side of you screen, click the **Plus** sign right beside **Export to export the frame**.

2. Choose the format of the export file you want.

3. Click the **Export button** to export it.

![](img/46.png)

## 5. Summary

Overall, We learned how to use the Figma application with some map resources to create a mockup for the Damron Guide: Seattle project. The mockup project can be found [here](https://www.figma.com/file/USVi3eiJjhaUoHEcl3ryiR/Damron-Seattle-mockup). Even though some functions or buttons may not actually work, as long as your mockup can give the user a sense how it will work, it is good enough. Remember that mockups are only supposed to be static, realistic renderings of what a product or feature will look like and how it will be used. The project actually has a website that has already been deployed. You could check it **[here](https://hgis.uw.edu/damron/seattle.html)** to compare it with the mockup you made.

## Acknowledgement

This mockup project was funded by **a NSF awarded project HEGS: Examining Shifting Geographies of Historically Underrepresented Groups (Award ID: 1951072)**. The idea is driven by some initial discussion between Bo Zhao and Zhiyuan Jiao, and majority of this work is done by Zhiyuan Jiao.

## References:

[1] Mockup definition
https://en.wikipedia.org/wiki/Mockup

[2] Sign up for Figma
https://www.figma.com/signup

[3] Damron project
https://damron.com/about-us

[4] Damron Guide: Seattle
https://hgis.uw.edu/damron/seattle.html
