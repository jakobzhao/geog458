# Gearing Up the Working Environment


## 1. Equipment

For a comfortable web development environment, I recommend the following equipment:

### A solid, up-to-date computer
Macintosh, Windows, or Linux is fine, so use whatever you have and are comfortable with. Creative departments in professional web development companies tend to be Mac-based. For backend work, Linux and Windows are popular. Although it is nice to have a super-fast machine, the files that make up web pages are very small and tend not to be too taxing on computers. Unless you’re getting into sound and video editing, don’t worry if your current setup is not the very latest and greatest.

### A large monitor

Although not a requirement, a large monitor makes life easier. The more monitor real estate you have, the more windows and control panels you can have open at the same time. You can also see more of your page to make design decisions. If you’re using a large monitor, just make sure you design for users with smaller monitors and devices in mind.

### A second computer for testing

Many designers and developers find it useful to have a test computer running a different platform than the computer they use for development (i.e., if you design on a Mac, test on a PC). Because browsers work differently on Macs than on Windows machines, it’s critical to test your pages in as many environments as possible, and particularly on the current Windows operating system. If you are a hobbyist web designer working at home, you could check your pages on a friend’s machine. Mac users should check out the “Run Windows on Your Mac” sidebar.

### Mobile devices for testing

The web has gone mobile! That means it is absolutely critical that you test the appearance and performance of your site on browsers on smartphones and tablet devices.

## 2. Desktop software

There’s no shortage of software available for creating web pages. In the early days, we just made do with tools originally designed for print. Today, there are wonderful tools created specifically with web design in mind that make the process more efficient. It is a delicate business listing software in a book such as this because a) there are so many programs, b) everyone has their personal favorite, and c) new tools come along so rapidly that there are surely newer, cooler options that you have access to that didn’t exist as I wrote this.

### Command Prompt and Terminal

The command line is the ultimate seat of power on your computer. Using the command line, you can perform amazing feats of wizardry and speed, taming your computer and getting it to do precisely what you want. Unfortunately, the price of this power is complexity: nobody ever said that ruling your computer would be easy.

The command line is, at its heart, simply a place where you type commands to the computer. The computer is your obedient servant, and will attempt to carry out any command that it understands. Unfortunately, the computer does not speak English, or any other language spoken by humans (although it has recognizable elements). In order to give it commands, we must first start learning the language of the computer.

> **Note:** The command line, as with all power, has its risks. You have the capability to instruct the computer to do anything it has the capability of doing. If you instruct the computer to erase all of your data, it will cheerfully proceed to do so. Do not run a command just to see what it does. Make sure you understand what the command is supposed to do first, especially if the command involves changing or removing files.

#### Command Prompt for Windows

Command Prompt, also known as cmd.exe or cmd (after its executable file name), is the command-line interpreter on Windows NT, Windows CE, OS/2 and eComStation operating systems. It is the counterpart of COMMAND.COM in DOS and Windows 9x systems (where it is also called "MS-DOS Prompt"), and analogous to the Unix shells used on Unix-like systems.

Command Prompt interacts with the user through a command-line interface. In Windows, this interface is implemented through Win32 console. Command Prompt may take advantage of features available to native programs of its own platform. For example, in OS/2, it can use real pipes in command pipelines, allowing both sides of the pipeline to run concurrently. As a result, it is possible to redirect the standard error stream. (COMMAND.COM uses temporary files, and runs the two sides serially, one after the other.)

In DOS, many standard system commands were provided for common tasks such as listing files on a disk or moving files. Some commands were built into the command interpreter, others existed as external commands on disk. Over the several generations of DOS, commands were added for the additional functions of the operating system. In the current Microsoft Windows operating system, a text-mode command prompt window, cmd.exe, can still be used.

A partial list of the most common commands for MS-DOS follows below.

**CD and CHDIR**
The CHDIR (or the alternative name CD) command either displays or changes the current working directory.

**CLS**

The CLS or CLRSCR command clears the terminal screen.

- `cd [folder]`	Change directory e.g. cd Documents
- `cd`	Home directory
- `cd ~`	Home directory
- `cd /`	Root of drive
- `cd -`	Previous directory


**DIR**

The DIR command displays the contents of a directory. The contents comprise the disk's volume label and serial number; one directory or filename per line, including the filename extension, the file size in bytes, and the date and time the file was last modified; and the total number of files listed, their cumulative size, and the free space (in bytes) remaining on the disk. The command is one of the few commands that exist from the first versions of DOS. The command can display files in subdirectories. The resulting directory listing can be sorted by various criteria and filenames can be displayed in a chosen format.

**MD or MKDIR**

Makes a new directory. The parent of the directory specified will be created if it does not already exist.

**RD or RMDIR**

Remove a directory (delete a directory); by default the directories must be empty of files for the command to succeed. The deltree command in some versions of MS-DOS and all versions of Windows 9x removes non-empty directories.

**TREE**

It is an external command, graphically displays the path of each directory and sub-directories on the specified drive.

**HELP**

Gives help about DOS commands.


#### Terminal for Mac OSX

Terminal (Terminal.app) is the terminal emulator included in the macOS operating system by Apple. Terminal originated in NeXTSTEP and OPENSTEP, the predecessor operating systems of macOS.

As a terminal emulator, the application provides text-based access to the operating system, in contrast to the mostly graphical nature of the user experience of macOS, by providing a command line interface to the operating system when used in conjunction with a Unix shell, such as bash (the default shell in Mac OS X Jaguar and later). The user can choose other shells available with macOS, such as the Korn shell, tcsh, and zsh.

The preferences dialog for Terminal.app in OS X 10.8 (Mountain Lion) and later offers choices for values of the TERM environment variable. Available options are ansi, dtterm, nsterm, rxvt, vt52, vt100, vt102, xterm, xterm-16color and xterm-256color, which differ from the OS X 10.5 (Leopard) choices by dropping the xterm-color and adding xterm-16color and xterm-256color. These settings do not alter the operation of Terminal, and the xterm settings do not match the behavior of xterm.


The Terminal app is in the Utilities folder in Applications. To open it, either open your Applications folder, then open Utilities and double-click on Terminal, or press Command - spacebar to launch Spotlight and type "Terminal," then double-click the search result.

You’ll see a small window with a white background open on your desktop. In the title bar are your username, the word "bash" and the dimensions of the window in pixels. Bash stands for "Bourne again shell". There are a number of different shells that can run Unix commands, and on the Mac Bash is the one used by Terminal.

If you want to make the window bigger, click on the bottom right corner and drag it outwards. If you don’t like the black text on a white background, go to the Shell menu, choose New Window and select from the options in the list.


Terminal (officially called Terminal.app) is, strictly speaking, an emulator and works off most typical UNIX commands (OS X is a UNIX-based system, as opposed to Windows, which is NT-based). Unlike OS X, which has a graphical user interface (shortened to GUI), Terminal works off a text-based interface and all commands have to be typed in - this may be the reason why some people are scared off by it!

We won't go into massive detail on how Terminal works but it's best to learn the following three commands before we start this tutorial:

- ls - list the contents of a particular directory
- cd - change to another directory (as in DOS)
- sudo - authenticate yourself a superuser to gain extra security privileges
- clear -  clears the terminal screen.

> **Tip:** Be extra careful when using the sudo command. You will usually have to enter your OS X system password and any mistakes can permanently mess up your system for good. When in doubt, leave it out!


**Reference:**

[1] https://en.wikipedia.org/wiki/Cmd.exe

[2] https://en.wikipedia.org/wiki/Terminal_(macOS)

[3] https://www.davidbaumgold.com/tutorials/command-line/

[4] https://computers.tutsplus.com/tutorials/10-terminal-commands-that-every-mac-user-should-know--mac-4825

### VS Code

Visual Studio Code is a code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.

[Visual Studio Code](https://code.visualstudio.com) combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle. It provides comprehensive code editing, navigation, and understanding support along with lightweight debugging, a rich extensibility model, and lightweight integration with existing tools.


### Google Chrome

Google Chrome browser is an open source program for accessing the World Wide Web and running Web-based applications.

The Google Chrome Web browser is based on the open source Chromium project. Google released Chrome in 2008 and issues several updates a year. It is available for Windows, Mac OS X, Linux, Android and iOS operating systems. The Google Chrome browser takes a sandboxing-based approach to Web security. Each open website runs as its own process, which helps prevent malicious code on one page from affecting others (or the computer operating system at large). The browser also supports Web standards such as HTML5 and cascading style sheets (CSS).


Google CEO Eric Schmidt opposed the development of an independent web browser for six years. He stated that "at the time, Google was a small company," and he did not want to go through "bruising browser wars." After co-founders Sergey Brin and Larry Page hired several Mozilla Firefox developers and built a demonstration of Chrome, Schmidt admitted that "It was so good that it essentially forced me to change my mind." In September 2004, rumors of Google building a web browser first appeared. Online journals and U.S. newspapers stated at the time that Google was hiring former Microsoft web developers among others. It also came shortly after the final 1.0 release of Mozilla Firefox, which was surging in popularity and taking market share from Internet Explorer, which was suffering from major security problems.

Google based the look of Chrome OS, its operating system for Web-based applications, on the Chrome Web browser. Chrome was the first major Web browser to combine the search box and the address bar, a feature that most competitors have since adopted. It also allows users to sign in with their Google accounts, which enables them to sync bookmarks and open Web pages across multiple devices. In 2010, Google launched the Chrome Web Store, an online marketplace where users can buy and install Web-based applications to run inside the browser. These apps are available as either browser extensions or links to websites.


#### Chrome DevTools

Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. DevTools can help you edit pages on-the-fly and diagnose problems quickly, which ultimately helps you build better websites, faster.


With DevTools you can view and change any page. Even the Google homepage, as the video demonstrates.


Chrome DevTools are a developer’s best friend. With the explosion of Javascript frameworks, it’s more important than ever that you have the ability to work with your code live in the browser. Though DevTools are incredibly powerful we’re, only going to cover a small subset of their abilities in this post.

The DevTools panel allows you to interact with the HTML, CSS, and Javascript running on just about any page on the internet. They’re great for messing around, but their real purpose is to save developers time and mental anguish. DevTools save you time by allowing you to manipulate your code in the browser, allowing you to quickly debug styling issues and play with different ideas.

In order to use DevTools, you’ll need to right click somewhere on the page and select “inspect element”. This will bring up an entirely new pane in your browser showing all the assets used on that page.

*When you open dev tools, if the pane shows up on the bottom half of the screen, click the button to the left of the “X” in the top right to move the panel to the right side of the screen.

#### Incognito mode

The private browsing feature called Incognito mode prevents the browser from permanently storing any history information, cookies, site data, or form inputs. Downloaded files and bookmarks will be stored. In addition, user activity is not hidden from visited websites or the Internet service provider.

Incognito mode is similar to the private browsing feature in other web browsers. It doesn't prevent saving in all windows: "You can switch between an incognito window and any regular windows you have open. You'll only be in incognito mode when you're using the incognito window".


**Reference**

[1] https://developers.google.com/web/tools/chrome-devtools/

[2] https://blog.galvanize.com/how-to-use-chrome-devtools-for-the-absolute-beginner/


### QGIS

QGIS (previously known as Quantum GIS) is a free and open-source cross-platform desktop geographic information system (GIS) application that supports viewing, editing, and analysis of geospatial data.

QGIS functions as geographic information system (GIS) software, allowing users to analyze and edit spatial information, in addition to composing and exporting graphical maps. QGIS supports both raster and vector layers; vector data is stored as either point, line, or polygon features. Multiple formats of raster images are supported, and the software can georeference images.

QGIS supports shapefiles, coverages, personal geodatabases, dxf, MapInfo, PostGIS, and other formats. Web services, including Web Map Service and Web Feature Service, are also supported to allow use of data from external sources.

QGIS integrates with other open-source GIS packages, including PostGIS, GRASS GIS, and MapServer. Plugins written in Python or C++ extend QGIS's capabilities. Plugins can geocode using the Google Geocoding API, perform geoprocessing functions similar to those of the standard tools found in ArcGIS, and interface with PostgreSQL/PostGIS, SpatiaLite and MySQL databases.

**Reference**

[1] https://en.wikipedia.org/wiki/QGIS

### Git

Git is an open source distributed version control system (DVCS), mainly used for source code management (SCM), with an emphasis on speed. Git was initially designed and created by Linus Torvalds for Linux kernel development. Git operates on a decentralized architecture, so every Git working directory is a full-fledged repository with a complete history and full revision-tracking capabilities, and is not dependent upon network access or a central server.


Unlike popular non-distributed predecessors, such as Subversion and CVS, Git only needs a central server for one thing: publishing changes to users of that server. You can equally share changes directly with other people without the need to consult a central hub.

Also unlike the monolithic design of Subversion and CVS, Git follows the typical Unix philosophy with a great many small components that do single atomic tasks. Of course, only a few of the dozens of separate commands are often used. Most commands are for specialized actions, and a good portion are designed to be called by shell scripts rather than users.


Git was created by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development.

Torvalds quipped about the name git (which means unpleasant person in British English slang): "I'm an egotistical bastard, and I name all my projects after myself. First 'Linux', now 'git'." The man page describes Git as "the stupid content tracker". The readme file of the source code elaborates further:

```
The name "git" was given by Linus Torvalds when he wrote the very
first version. He described the tool as "the stupid content tracker"
and the name as (depending on your way):

 - random three-letter combination that is pronounceable, and not
   actually used by any common UNIX command.  The fact that it is a
   mispronunciation of "get" may or may not be relevant.
 - stupid. contemptible and despicable. simple. Take your pick from the
   dictionary of slang.
 - "global information tracker": you're in a good mood, and it actually
   works for you. Angels sing, and a light suddenly fills the room.
 - "goddamn idiotic truckload of sh*t": when it breaks
```


#### What’s a version control system?
A version control system, or VCS, tracks the history of changes as people and teams collaborate on projects together. As the project evolves, teams can run tests, fix bugs, and contribute new code with the confidence that any version can be recovered at any time. Developers can review project history to find out:

- Which changes were made?
- Who made the changes?
- When were the changes made?
- Why were changes needed?

#### What’s a distributed version control system?

Git is an example of a distributed version control system (DVCS) commonly used for open source and commercial software development. DVCSs allow full access to every file, branch, and iteration of a project, and allows every user access to a full and self-contained history of all changes. Unlike once popular centralized version control systems, DVCSs like Git don’t need a constant connection to a central repository. Developers can work anywhere and collaborate asynchronously from any time zone.

Without version control, team members are subject to redundant tasks, slower timelines, and multiple copies of a single project. To eliminate unnecessary work, Git and other VCSs give each contributor a unified and consistent view of a project, surfacing work that’s already in progress. Seeing a transparent history of changes, who made them, and how they contribute to the development of a project helps team members stay aligned while working independently.

#### Why Git?

According to the latest Stack Overflow developer survey, more than 70 percent of developers use Git, making it the most-used VCS in the world. Git is commonly used for both open source and commercial software development, with significant benefits for individuals, teams and businesses.

Git lets developers see the entire timeline of their changes, decisions, and progression of any project in one place. From the moment they access the history of a project, the developer has all the context they need to understand it and start contributing.

Developers work in every time zone. With a DVCS like Git, collaboration can happen any time while maintaining source code integrity. Using branches, developers can safely propose changes to production code.

Businesses using Git can break down communication barriers between teams and keep them focused on doing their best work. Plus, Git makes it possible to align experts across a business to collaborate on major projects.

#### What’s a repository?

A repository, or Git project, encompasses the entire collection of files and folders associated with a project, along with each file’s revision history. The file history appears as snapshots in time called commits, and the commits exist as a linked-list relationship, and can be organized into multiple lines of development called branches. Because Git is a DVCS, repositories are self-contained units and anyone who owns a copy of the repository can access the entire codebase and its history. Using the command line or other ease-of-use interfaces, a git repository also allows for: interaction with the history, cloning, creating branches, committing, merging, comparing changes across versions of code, and more.

Working in repositories keeps development projects organized and protected. Developers are encouraged to fix bugs, or create fresh features, without fear of derailing mainline development efforts. Git facilitates this through the use of topic branches: lightweight pointers to commits in history that can be easily created and deprecated when no longer needed.

Through platforms like GitHub, Git also provides more opportunities for project transparency and collaboration. Public repositories help teams work together to build the best possible final product.


#### Basic Git commands

To use Git, developers use specific commands to copy, create, change, and combine code. These commands can be executed directly from the command line or by using an application like GitHub Desktop or Git Kraken. Here are some common commands for using Git:

- `git init` initializes a brand new Git repository and begins tracking an existing directory. It adds a hidden subfolder within the existing directory that houses the internal data structure required for version control.

- `git clone` creates a local copy of a project that already exists remotely. The clone includes all the project’s files, history, and branches.

- `git add` stages a change. Git tracks changes to a developer’s codebase, but it’s necessary to stage and take a snapshot of the changes to include them in the project’s history. This command performs staging, the first part of that two-step process. Any changes that are staged will become a part of the next snapshot and a part of the project’s history. Staging and committing separately gives developers complete control over the history of their project without changing how they code and work.

- `git commit` saves the snapshot to the project history and completes the change-tracking process. In short, a commit functions like taking a photo. Anything that’s been staged with git add will become a part of the snapshot with git commit.

- git status shows the status of changes as untracked, modified, or staged.

- git branch shows the branches being worked on locally.

- `git merge` merges lines of development together. This command is typically used to combine changes made on two distinct branches. For example, a developer would merge when they want to combine changes from a feature branch into the master branch for deployment.

- `git pull` updates the local line of development with updates from its remote counterpart. Developers use this command if a teammate has made commits to a branch on a remote, and they would like to reflect those changes in their local environment.

- `git push` updates the remote repository with any commits made locally to a branch.

Learn more from [a full reference guide to Git commands](https://git-scm.com/docs).

#### The GitHub flow
The GitHub flow is a lightweight, branch-based workflow built around core Git commands used by teams around the globe—including ours.

The GitHub flow has six steps, each with distinct benefits when implemented:

1. Create a branch: Topic branches created from the canonical deployment branch (usually master) allow teams to contribute to many parallel efforts. Short-lived topic branches, in particular, keep teams focused and results in quick ships.
2. Add commits: Snapshots of development efforts within a branch create safe, revertible points in the project’s history.
3. Open a pull request: Pull requests publicize a project’s ongoing efforts and set the tone for a transparent development process.
4. Discuss and review code: Teams participate in code reviews by commenting, testing, and reviewing open pull requests. Code review is at the core of an open and participatory culture.
5. Merge: Upon clicking merge, GitHub automatically performs the equivalent of a local ‘git merge’ operation. GitHub also keeps the entire branch development history on the merged pull request.
6. Deploy: Teams can choose the best release cycles or incorporate continuous integration tools and operate with the assurance that code on the deployment branch has gone through a robust workflow.

**Reference**

[1] A Github tutorial https://guides.github.com/activities/hello-world/

[2] Introduction to GitHub https://lab.github.com/githubtraining/introduction-to-github

[3] Git Handbook https://guides.github.com/introduction/git-handbook/


## 3. Web Services

### GitHub

GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. It provides developers with tools to ship better code through command line features, issues (threaded discussions), pull requests, code review, or the use of a collection of free and for-purchase apps in the GitHub Marketplace. With collaboration layers like the GitHub flow, a community of 15 million developers, and an ecosystem with hundreds of integrations, GitHub changes the way software is built.

#### GitHub page

GitHub Pages are public webpages hosted for free through GitHub. GitHub users can create and host both personal websites (one allowed per user) and websites related to specific GitHub projects. Pages lets you do the same things as GitHub, but if the repository is named a certain way and files inside it are HTML or Markdown, you can view the file like any other website. GitHub Pages is the self-aware version of GitHub. Pages also comes with a powerful static site generator called Jekyll, which we'll learn more about later on.

**Reference:**

[2] Github page http://jmcglone.com/guides/github-pages/


### MapBox

Mapbox is a large provider of custom online maps for websites and applications such as Foursquare, Lonely Planet, Facebook, the Financial Times, The Weather Channel and Snapchat. Since 2010, it has rapidly expanded the niche of custom maps, as a response to the limited choice offered by map providers such as Google Maps. Mapbox is the creator of, or a significant contributor to some open source mapping libraries and applications, including the MBTiles specification, the TileMill cartography IDE, the Leaflet JavaScript library, and the CartoCSS map styling language and parser.


The data are taken both from open data sources, such as OpenStreetMap and NASA, and from proprietary data sources, such as DigitalGlobe.The technology is based on Node.js, Mapnik, GDAL, and Leaflet.

Mapbox uses data from tracks of its clients' users, such as Strava and RunKeeper, to identify likely missing data in OpenStreetMap with automatic methods, then manually applies the fixes or reports the issue to OSM contributors.
