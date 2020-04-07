# GEOGRAPHY 458: Advanced Digital Geographies

test

**Meeting:** Tuesdays and Thursdays 8:30 to 10:20 AM PST on [Zoom #: 785830819](https://washington.zoom.us/j/785830819)

**Instructor:** Bo Zhao, 206.685.3846 or zhaobo@uw.edu, jakobzhao `wechat/skype`

**Office Hour:** Tuesdays 1:00 to 3:00 PM PST or by appointment on [Zoom #: 181944813](https://washington.zoom.us/j/181944813)

**Class Discussion Board:** [geog458-workspace.slack.com](https://geog458-workspace.slack.com)

> _This web page is the syllabus - There is no printed version, please refer here instead. Make sure refer to this page as often as possible. Also, Feel free to ask the instructor for clarifications whenever needed._
>
> **Course Updates (4/7/2020):**
>
> -   **No final projects**.
> -   Students work together as groups for the in-class discussion.
> -   Students should use **GitHub Issues** as the primary place to submit your questions about the course material, lectures, and/or labs. If you cannot get a proper answer from GitHub issue, then we can talk through slack, email, skype, or wechat.
> -   For each student, the activity of issue response is expected. Moreover, if you have an comparative more number of issue replies, you will receive extra credits.

As digital technologies have radically transformed human life, this course tries to engage students in this digitally mediated and data-intensive geographic world, and also train them the timely technical skills which are demanding in emerging job markets. This course will provide a unique opportunity to explore emerging digital methods, to build a holistic solution to real-world problems, and to critically analyze their social implications. Rather than focusing exclusively on one or two specific topics, this course covers a full range of theoretical perspectives and practical exercises. The course begins with teaching students on geospatial project management using GitHub, and then a series of geospatial data operations and analyses are covered in detail, such as online data (e.g., geotagged tweets) acquisition, geocoding, spatial and placial analyses. With these preparations, this course switches to online geovisualization. After a brief introduction to web programming basics (e.g., JavaScript, Html, and CSS), students will learn how to visualize and narrate geographic phenomena in an online environment. A few state-of-the-art approaches and applications in digital geographies will be practiced, such as collecting aerial imagery and point clouds using an unmanned aerial vehicle (UAV, commonly known as drone) or LiDAR, as well as storing real-time data from an environmental sensor. Throughout, students will be empowered not only with defined skills that will be important to many emerging jobs, but also with critical intellectual vision. This course is very “hands-on” and interactive! Most of our time will be spent in a hybrid lecture/lab where students will be working together. Although there will be some individual written reflections and analyses, no formal written final exam will be set up. The final project enables students to work collaboratively to figure out a holistic solution to researching a real-world problem. With the completion of this course, each student can share the course work at a self-made website which can be publicly viewed by classmates, open-source community as well as future industrial recruiters. Along the way, the readings will include both applied and theoretical selections. Students will learn not only how people have been programming and visualizing, but also about how critical social theorists have identified assumptions, ideologies, and rigidities in existing practices that can help students to make effective, inclusive and empathetic decisions in today’s data-intensive geographic world.

## :flags: Learning Objectives

-   To identify when and how the methods, sociology, and objects of geographical inquiry can be transformed through computational and networked approaches.

-   To learn to find, evaluate, use, extend, and combine various methods and tools of digital geography as needed for a given task. Recently, examples of such tools have included: GitHub, QGIS, Python, JavaScript, and Mapbox.

-   To practice and reflect theoretically upon emerging born-digital, multi-modal, narrative, and interactive approaches to cartography and scholarly communication.

-   To reflect on the iterative and social dimensions to one’s own learning process.

## :calendar: Weekly Schedule

### _Preperation_

-   [**Gear up the working environment**](assets/gearup.md) :computer:  :beer:
-   **Canvas Survey:** Through a survey, students will team up as group of 5 ~ 6 people according to the profeciency of technical skills and interests. `Due: March 31st, 2020, by 11:59pm`
-   **Groups:** Based on the Survey, we have 8 groups (check [here](assets/groups.md)), and I have assigned an group coordinator to each group. Please start meeting your gourp members, along the quarter, you will work together on the collaborative project and the in-class discussion.

### Week 1: Intro to digital geographies

We walk through the syllabus and repond to students' inquiries. Each student is expected to read the paper by Ash et al (2018). This week's lecture and lab will prepare you both the theortical and techinical foundation. After compeleting the lab 01, you can clone/synchronize the course material, set up a personal website, and more importantly, feel comfortable of using github to manage your digital geographies projects.

-   **Lecture Notes:** [Syllabus](readme.md), [Intro to the Web](weeks/week01/intro-web)
-   **Readings:** a) [Digital turn, digital geographies?](https://drive.google.com/open?id=14HybNKsIik6oqefSpd-wAsKBF5lScwT_), b) [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).
-   **Lab 1:** [Project management using GitHub](labs/lab01) `Due: April 9th, by 11:59pm`

-   **Extending Readings:** <https://www.ft.com/content/19d90308-6858-11ea-a3c9-1fe6fedcca75?from=timeline&isappinstalled=0>

### Week 2: Prorgamming fundamentals

We focuses on preparing you the fudamental skill set for web prorgamming. This week will begin with the system architecture of digital geographies project, and then guide yuo through some of the necessary front-end fudamentals, including internet basics, html, javascript, and css. This week requires a lot of self-learning. Please be preprared.

-   **Lecture Notes:** [System architecture](weeks/week02/architecture), [intro-to-html, css](weeks/week02/html-css) and [javascript](weeks/week02/javascript), and [Jquery](weeks/week02/jquery).
-   **Readings:** [W3School Tutorials on Html, javascript, css and jquery](weeks/week02/readings.md).

### Week 3: Geospatial data

This week's topic is around processing geospatial data for digital geographies projects. We will begin with introduce the structure of geojson format, adn then how to collect,convert and visualize geojson on web or a desktop environment like QGIS. After completing lab 2, each students will learn how to collect geo-tagged tweets of a specific topic (e.g., seattle, homeless, COVID-19, etc.), and then visualize the data for further uses.

-   **Lecture Notes:** [Geospatial data for digital geographies](week03/readme.md)
-   **Readings:** a) [Can social media clear the air? A case study of the air pollution problem in Chinese cities](https://drive.google.com/open?id=1C0MTPaPnVALVemeYEfiDChUKRZfcMjz3), b) [More than you ever wanted to know about GeoJSON](week03/assets/geojson.pdf).
-   **Lab 2:** [Geo-tagged tweet collection and visualization](labs/lab02) `Due: April 23rd, by 11:59pm`, `under development`
-   **In-class Discussion:** Discussion on the weekly paper led by `Group 2` on  `Tuesday`.

### Week 4: Web mapping

You will make your first web map in this week using a popular web mapping library - Leaflet. In the lecture, you will work with me to get familiar with the basics, and then we will give you an very detailed introduction to the lab 3.

-   **Readings:** [Leaflet Basics](weeks/week04/leaflet), [Map Events](weeks/week04/mapevent)
-   **Lab 3:** [An integrative web mapping](labs/lab03) `Due: May 3rd, by 11:59pm`, `under development`
-   **In-class Discussion:** a) Web Map A by `Group 3` on  `Tuesday` , b) Web Map B by `Group 4` on `Thursday`.

### Week 5: Map design

-   **Lecture Notes:** [Mapbox Studio](https://docs.mapbox.com/studio-manual/overview/)
-   **Readings:** a) [The Guide to Map Design](weeks/week05/mapbox-design.pdf), b) [Mapbox Studio How-to Videos](weeks/week05/readme.md)
-   **Lab 4:** [Generating Map Tiles](labs/lab04) `Due: May 10th, by 11:59pm`
-   **Online Mid-term:** `April 30th 9:30 - 10:20 AM`

### Week 6: Smart dashboards

-   **Lecture Notes:** interface design, color, typography, icons, animation
-   **Readings:** [The praxis and politics of building urban dashboards](https://drive.google.com/file/d/1l3V1drqXMxn9rib7nTuDtxJC5YcWL0pY/view?usp=sharing), [Boostrap](weeks/week06/boostrap.md) chroma.js, boostrap, c3.js
-   **In-class Discussion:** Discussion on the weekly paper and sharing any intersting Dashboard led by `Group 5` on `Thursday`.
-   **Examples:** [COVID-19 Dashboard](https://hgis.uw.edu/virus)

### Week 7: Geo-Narratives

-   **Lecture Notes:** Multimedia, Full Page, Icon, and other resources
-   **Readings:** [Map-based visual Storytelling: An Assessment of emerging genres and tropes `Chapter 1,2 and 5`.](https://drive.google.com/file/d/133s4dxoRaT1A7OckBapS6e9Yxh_wQc9d/view?usp=sharing)
-   **Lab 05:** [An integrative project on digital geographies](labs/lab05) `Due: May 24th, by 11:59pm`
-   **In-class Discussion:** a) Storymap A led by `Group 6` on `Tuesday`, b) Storymap B led by `Group 8` on `Thursday`.
-   **Examples:** [#Stand with StandingRock](https://jakobzhao.github.io/standwithstandingrock/)

### Week 8: Emerging topics

This week will focus on two emerging topics related to digital geographies, including cloud point visualization and real-time environment data collection.

-   **Lecture Notes:** [Point Cloud visualization](https://jakobzhao.github.io/sfm/index.html) and [Real-time environmental data visualization](weeks/week08/rpi-iot).
-   **Readings:** [Real-time GIS](https://drive.google.com/file/d/1COD2OYBxEJThG5Lfx7-nzV0EGtGedndT/view?usp=sharing) and [Panopticon](https://drive.google.com/file/d/156fk11L9JFzsyV_9TRi9_c15MSIPCiL6/view?usp=sharing)
-   **In-class Discussion:** a) Point Cloud Visulization led by `Group 1` on `Tuesday`, b) Discussion on the paper about Panopticon led by `Group 7` on `Thursday`.

### Week 9 & 10: Project studio

During these two weeks, each group will focusing on their final projects. The instructors are avaiable during the office hour, the normal lecture period to help with each group on their final projects.

### Week 11: Final collaborative Project Presentations

Durint the last two meeting sessions, each group will present their final projects.

## :bell: Course Requirement

**Student Tech Support:**

The Student Tech Loan Program is expanding as quickly as possible. We announced this to undergrads as soon as it hit the airwaves, in hopes some of them who need hardware can reserve for spring quarter. They expect new/additional machines to arrive in April. STLP Website: <https://stlp.uw.edu/> (check the [Spring Announcement](https://drive.google.com/file/d/1qlbUBPdQFJt_jXS2fAOtORwNrBVtZqCb/view)).

**GitHub:** This course material will be hosted on GitHub instead of UW Canvas. On this dedicated GitHub repository, you can find most of the course material, participate in group discussions by submitting GitHub issues, and creating new GitHub repositories to turn in the lab deliverables. By the end of this quarter, you will be more proficient in operating a cloud-based coding environment and able to host your work online as a way to gain public and peer attentions.

**In-class discussion leadership:** You and your group mates will take at least  one in-class discussion. Please work together to prepare some activities and guiding questions that will inspire and structure our discussion of the material.

**Labs:** You need to finish all five labs by the due days. In order to help you work on each lab, we will walk through most of the labs in class.

**Participation in in-class discussion:** Complete all assigned readings and get familiar with the lab instructions before class meetings, and participating in critical discussions of those readings.

**Final Collaborative Project:** During the quarter, you will work with your group members to work on a collaborative project. During the final week, you will present your final project in class. The requriement for the final project will be published soon.

**Essay:** Each student will complete an essay that engages with the readings and the course themes, along with additional readings that you bring into conversation with the assigned course readings. You are aiming for 10 pages (double-spaced) coalescing around ideas and readings from this quarter. Writing projects is due no later than the end of **Week 10**.

## :two_men_holding_hands: Targeted Audience

This course targets students who have a background in fundamental geographic information science or equivalent computational or programming skills. This course is designed for students who are willing to learn defined GIS skills that will be important to many emerging jobs in location-based services, autonomous driving, web mapping, geographic data collection (using drone or LiDAR) and analyses. This course is also suitable for students who are interested in learning and critically reflecting upon cutting-edge geospatial techniques.

## :heavy_check_mark: Grading

| Grading items                      | %   |
| ---------------------------------- | --- |
| Constructive contribution to class | 10% |
| Lab Assignments                    | 30% |
| Mid-term                           | 30% |
| Final collaborative project        | 20% |
| Essay                              | 10% |

## :book: Copyright

Through this course, I would like to cultiviate the open source culture. The course materials are apprently open source for students and open source community to access.

Notably, **each student is not allow to videotape or audio-tape (record) my class in any form, and sharing recordings outside of class without the written consent of each student in the class is not permitted by [FERPA](https://registrar.washington.edu/students/ferpa/).** However, I will try to record most of the classes via Zoom and share them via Canvas. Even so, I still encourage each of you attending the lectures instead of watching the recorded videos afterwards. Your in-class participation is a key factor to yield the best learning outcome.

 instructor determines if their class can and cannot be recorded. This decision should be clearly communicated by the instructor at the beginning and throughout the quarter. In Zoom, the recording feature can be controlled by the instructor, as the meeting host.

## :love_letter: Accommodations

We welcome the opportunity to work with any students with disabilities in this class to ensure equal access to the course. If you have a letter from Disability Resources for Students (DRS) outlining your academic accommodations, please present the letter to me (or email us, to confirm, if the letter is electronic) as soon as possible so that we can discuss the accommodations you may need for this class. Any discussions between student and professor need to occur as early as possible in order for adequate arrangements to be made. If you do not yet have a letter from DRS, but would like to request academic accommodations due to a disability, please contact DRS [here (Links to an external site.)](https://depts.washington.edu/uwdrs/), or in-person at 011 Mary Gates Hall, or at 206-543-8924 (Voice & Relay), <mailto:uwdrs@uw.edu>.

<a href="https://hgis.uw.edu"><img src="assets/logo.png" align="right" width="230px" target="_blank" /></a> Washington state law requires that UW develop a policy for accommodation of student absences or significant hardship due to reasons of faith or conscience, or for organized religious activities. The UW’s policy, including more information about how to request an accommodation, is available at [Religious Accommodations Policy](https://registrar.washington.edu/staffandfaculty/religious-accommodations-policy/). Accommodations must be requested within the first two weeks of this course using the [Religious Accommodations Request form](https://https:/registrar.washington.edu/students/religious-accommodations-request/).
