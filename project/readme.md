# Final Project Guideline

The final project is a major component of this course. Each group is expected to develop a digital-geographies related project. It can be a web map, a smart dashboard, a geo-narrative, or a project that has been approved by the instructor. To have a better idea of the course expectations, you can refer to the examples below:

-  Mapping the Black Lives Matter Movement: https://protestmap.raceandpolicing.com
-  COVID Care Map: https://www.covidcaremap.org/maps/us-healthcare-system-capacity
-  Marikina City: https://comet.dlsu.edu.ph/riesgo-vis
-  Mutual Aid Network: https://www.mutualaidhub.org/
-  Map of direct-to-consumer brands based in NYC: https://air.inc/blog/supportnycdtc
-  Connectivity Disparity Across Schools in Kazakhstan: https://unicef.github.io/mapbox_analysis/story/map
-  Restaurant Complaints in NYC: https://labs.mapbox.com/bites/00304/
-  Flow Map: https://flowmap.blue/


## Requirement

All the final projects are expected to be published online, and the codes are expected to be shared on GitHub in order to contribute to both the open-source community and academia. The final project must satisfy the following items:

- Host your project on github. By doing so, your project can be visited via a url link such as `[username].github.io/[repo_name]`.

- In addition to the main feature of the digital-geographies (e.g. web map, smart dashboard, or geo-narrative), you should also show the project title, a short description, legend, data sources, and acknowledgment at easily found places on the web page.

- A `readme.md` describes your project, including, but not limited to,
    - Project title
    - The url to visit the project. It should be in the format of `[username].github.io/[repo_name]`. `the repository name should be in lowercase.`
    - Team members
    - Project description
    - One or two screenshots to illustrate the project's functions.
    - Project goal (such as, what is the message you want to deliver through your project?)
    - Data sources
    - Applied libraries (e.g., Mapbox, D3, C3) and Web Services in use (e.g., github, basemap).
    - Other things that are necessary to inform the audience.
    - Acknowledgment

- You are **strongly recommended to share the final project on Twitter and Facebook**. In the post, feel free to acknowledge contributions or to call for attention by tagging someone's account names. Those people or organizations may include but not limited to your group mates, TAs, instructor, UW, Mapbox, and etc.

- You need to **create an about page or about window** to describe your project, to introduce your group mates and their contributions. Also, feel free to introduce your TAs and Instructor as well. Take a look at this [about page](https://jakobzhao.github.io/slr/about.html) for ideas.

**Geospatial data sources that you may find helpful**

- [Data.gov](https://catalog.data.gov/dataset)
- [Washington State Geospatial Open Data Portal](https://geo.wa.gov/)
- [King County GIS Open Data](https://gis-kingcounty.opendata.arcgis.com/)
- [Seattle GeoData](https://data-seattlecitygis.opendata.arcgis.com/)
- [GIS Data Websites provided by UW Libraries](https://guides.lib.uw.edu/c.php?g=341497&p=8904038)

## Timeline

#### Week 4: Brainstorm

#### Week 5: [Draft project proposal, data sources, and other multimedia](https://canvas.uw.edu/courses/1612951/discussion_topics/7773115) `Due: Feb. 5th 11:59pm`

Please share your final project proposal on this discussion board.  A proposal only needs to be shared once by one of your group members. In the proposal, please indicate what you want to make by the end of this quarter, the targeting audience,  the available datasets, the required multimedia (e.g., texts, images, videos, etc), and the functions. It would be great if you can find one or two digital geographies-related projects that you can learn from. It will give the instructor and TAs a better idea of how to help you. The proposal needs to have **at least 300 words** and one or two screenshots of the available projects that you want to learn from. Once a project proposal is shared, I welcome any suggestions if you have, the TAs and the instructor will participate in the discussion too.

#### Week 6: [Design project prototype & data preparation](https://canvas.uw.edu/courses/1612951/assignments/7978349)  `Due: Feb. 12th, by 11:59pm`

Please share your project prototype on this discussion board. A prototype is a sketch of your expected graphic user interface (GUI) of the project. Usually, it will contain a few GUIs of the proposed project. When designing the prototype, you are expected to first 1) determine what types of projects your group plan to work on: a generic web map project, a storymap, or a dashboard; and then for each interface, you are expected to 2) appropriately illustrate each component (e.g., map view, title, legend, side panel, etc.) in its right size to its position on a web page. Please make sure 3) to balance the information richness and the legibility of the design. In other words, it should not be too complicated, even though, it can still illustrate adequate information about the project. You are encouraged to create the prototype by drawing on paper or designing on [Figma](https://www.figma.com) if you prefer.

#### Week 7: [Proposal revision and pilot study](https://canvas.uw.edu/courses/1612951/assignments/7978348)   `Due: Feb. 20th, by 11:59pm`

This week, you are required to revise your proposal based on the feedback from the TAs and the instructor. In the meantime, please conduct pilot studies in order to 1) test and/or fine-tune your proposed idea to a practical level and 2) detail specific project components. Once done, please share your revised proposal onto the discussion board. This deliverable should **not be less than 300 words**. Your revised proposal should have the following components. 

- project idea
- project significance and broader impacts
 - please think critically, could your project generate any negative impact once done? how would you avoid that?
 - primary functions and major data sources
 - targeted audience
 - multimedia (e.g., external links, texts, images, youtube videos, and etc.)
 - project format
   - **Option one**: Generic digital geographies project
       - map projection, map zoom levels, center.
       - description of the base map you plan to use.
       - description of the thematic layers you will make.
           - i. the used visual strategies: choropleth, proportional symbols, etc.
           - ii. the supporting data sets for each thematic map layer.
           - iii. vector or raster layer. If it is a vector, which data attribute to use? If a raster, which zoom level and presumed boundingbox to use?
       - proposed interactive functions
   - **Option two**: Smart dashboard
       - respond to all the items listed in the option one
       - How to arrange all the components on the graphical user interface (GUI)?
       - What are the coordinated charts you plan to make?
           -  i. javascript that supports the making of a chart.
           -  ii. type of chart (e.g., line, bar, pie, etc.)
           -  iii. data attributes to be visualized.
   - **Option three**: Geo-narrative/Storymap
       - respond to all the items listed in the option one
       - draft the storyline
       - for each scene/action, describe the following items in detail:
           - i. the map you plan to draw
           - ii. the associated script
           - iii. the multimedia (e.g., image, video, chart, external links, etc)
       - how would you transit from one scene/action to another one? like, fly from one location to another, zoom in or zoom out?

In the meantime, you should initiate your final project by completing the following items:

- create a github repository
- add all your team members as contributors to this final project repo
- create the `img` and `assets` folders, and then upload multimedia and/or ***processed and cleaned*** geospatial data to those folders.
  - Data processing is always an important step for creating GIS applications. Based on past experiences, students may find themselves spending significant amount of time on processing the spatial dataset before they could use it in the proposed project. Therefore, by the end of week 7, we expect you to have your dataset properly cleaned and processed, so that you could spend the rest of the time working on the coding part of the project. Besides providing the cleaned data, you should also write a few sentences to describe how you cleaned the data and why the data processing steps you take are necessary or beneficial to your final project. Include the paragraph as a `readme.md` file directly under the folder where you save your data (typicaly `assets`)

- start drafting the project description page onto the `readme.md`. You can move a lot of items from your revised proposal to the readme.md.

#### Week 8: [Project development and identified issues](https://canvas.uw.edu/courses/1612951/assignments/7978347) `Due: Feb. 26th, by 11:59pm`

This week, you are expected to work on your final project. We do not expect huge progress by the end of this week, but we do want to see that you have coded, tried out different approaches, and visualized geospatial data. So, please submit a project progress report to the discussion board. In this report, please present your progress in the following three aspects:

- Visualizations: we did not expect that you complete all the web maps this week. But we do want to see whether you are able to visualize the collected geospatial data in the planned visual strategies. So, if your final project consists of a few maps, we would like to review a few html pages named after `map1.html` to `mapN.html`, each of them will contain a base map and the planned thematic layers (choropleth, proportional symbols, dot density, etc). If you plan to make a smart dashboard, we would like to see a few standalone html page visualizing the charts. In your report, please describe each map or chart, and followed by a corresponding github url that enables us to access the visualizations.

- Template：Please create an `index.html` file which includes the template of your final project. It can be a html template for a generic web map project, a smart dashboard, or a geo-narrative. Also, you can create folders like `css`, `js`, `img`, `assets` in the github repository if needed. Please also include the github url of this `index.html` page that enables us to easily access its visualization.

- Identified issues: please list a few issues that you come across during the project development. The TAs will get back to your issues in a follow-up message or in the planned group meetings in Week 9.

#### Week 9-10: Project development and group meeting with TA

There is no deliverable in these two weeks, but you are required to concentrate on developing your final project. In the meantime, **each group will need to meet your TA at least once during the lab session in Week 9. So, please participate in the lab sessions!** Also, in Week 9 to 10, the instructor will be available for virtual meetings during the normal lecture sessions and office hour sessions. You can make an appoint with the instructor via this [link](https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUZvU2gxXzVlZnZpfGRlZmF1bHR8NzM4ODA5MzUyNjAxZDU2Y2ViNTZiMzk2ZmM0N2VmNzI). If the time does not work for you, please reach out to schedule a commonly available time slot.

#### Final project submission

To submit your final project, you will need to share the url link of your final project's GitHub repository to a dedicated final project submission tab on Canvas by `March 6th 11:59pm`. This first submission will be mainly used by the instruction team to provide you with necessary feedback on improving your project. After receving feedback, you can continue crafting your project until presentation day (Mar. 10th). The final grade for the project will be based on the work done by the end of March 10th.

#### Final project presentation

Academics often attend conferences where they share their discoveries and browse the work of others to gain new ideas and offer feedback. We will hold a final presentation meeting on in SMI 401 **Mar 10th, 1:30 PM to 3:20 PM**, each group is expected to present the final project in 8 minutes, and plus another 2 minute for a Q&A session.

>  **Note:** The requirements to the project may be slightly changed according the progress of this course. The final requirements are subject to the instructor's notification.
