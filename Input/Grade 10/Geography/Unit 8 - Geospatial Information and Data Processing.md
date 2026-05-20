# Unit 8: Geospatial Information and Data Processing

## INTRODUCTION

In this unit, you will study how geographic data are gathered, compiled, and used. However, before the output reaches the end user a lot of steps, tools and processes are involved. Hence, the overall process of geospatial information and data processing depends on geographic data. The sources of the data could be from direct and remotely sensed sources. There are different types of tools or hardware that help us to collect data. The two most important tools include a global positioning system (GPS) and remote sensing.

The geographic data gathered through the methods and tools mentioned above helps us to answer basic geographic questions such as 'what is where?', and 'why is it there?' Answering these questions helps us to identify risk areas and solve critical problems.

The result or the output of geographic data analysis can be a representation of data in numeric values, displayed on maps, graphs, charts, and diagrams.

## Unit Outcomes

After completing this unit, you will be able to:
- recognize ways of presenting geographic information;
- explain the concepts of geospatial information;
- identify sources and tools of geographic data;
- describe ways of geographic data representations; and
- produce graphs, charts and diagrams from raw data.

## Main Contents

8.1 Basic Concepts of Geospatial Information
8.2 Sources and Tools of Geographic Data
8.3 Geographic Data Representations
8.4 Advances in Mapmaking and the Birth of Geographic Information System
8.5 Making and Interpretation of Graphs, Charts and Diagrams

---

# 8.1 BASIC CONCEPTS OF GEOSPATIAL INFORMATION

At the end of this section, you will be able to:
- describe the main concepts of geospatial information.

## KEY TERMS

- Attribute
- Attribute information
- Continuous data
- Data
- Discrete objects
- Geographical data
- Geospatial data
- Information
- Location information
- Observations
- Qualitative variable
- Quantitative variable
- Temporal information
- Visualization

## 8.1.1 The Similarity and Difference between Information and Data

Although data and information are often used interchangeably, they are not the same. They both have specific characteristics.

### I. Data

Data refer to different observations which are collected and stored as numbers, characters, images, facts and symbols. They describe a feature, idea, status, or situation that we want to focus on or are interested in. Therefore, data are sets of values of qualitative or quantitative variables about one or more persons or objects. Data can be meaningful when it is further processed by human interpretations or input into a computer and the results obtained can be shown as an output.

Data has important lifecycles. It begins with data collection. At this stage, we may collect new data (primary data) from a study area or existing secondary data obtained from different offices (e.g., Central Statistical Agency). The second stage in the data lifecycle is data processing. This stage involves checking for data quality such as quality assurance (QA) and quality control (QC), merging duplicate variables, and appending new information into the data. The third stage involves the analysis of data. Here different statistical analyses can be used to identify meaningful relationships between or amongst variables, and then the results can be displayed in tables, charts, and graphs for interpretation.

The final stage is the dissemination of results. This stage involves sharing results with the general public through conferences, workshops, and publishing the results in known journals, and archiving the results so that they can be accessible for future use.

**Figure: The Data Cycle**
The figure shows a circular diagram illustrating the data lifecycle with stages: Collect new data/Assess QA/QC existing datasets → Merge → Append → Collect → Process → Disseminate → Analyze → Share → Statistical Analysis → Archive → Publish → Visualization. The cycle emphasizes continuous iteration.

### II. Information

Information is the result of processing, manipulating, and organizing data in a way that adds to the knowledge of a receiver. In other words, it is the context in which data is interpreted.

**Table 8.1: Some Differences between Data and Information**

| Data | Information |
| :--- | :--- |
| Data is used as an input for the computer system. | Information is the output of a computer system. |
| Data is unprocessed facts or figures. | Information is processed data. |
| Data does not depend on information. | Information depends on data. |
| Data is a single unit. | Information is a group of data. |
| Data does not carry meaning. | Information carries meaning. |

## 8.1.2 Basic Concepts of Geospatial Data

Geospatial data is data about objects, events or phenomena that have location information of the surface of the earth they represent. Geospatial data typically combines location information (usually coordinates on the earth) and attribute information (the characteristics of the object, event or phenomena concerned) with temporal information (the time at which the location and attributes exist).

Geographical data links place, time, and attributes. Geographical data is at the heart of map making. Without geographical data, events, or phenomena of an area of our interest (AOI) cannot be visualized and analyzed.

### A. Place

Place or location is essential in the collection of geographical data. Locations are the basis for mapping an area of our interest. Based on the location we can link different kinds of information to it, and measure distances and areas. Without locations, data are said to be "aspatial" or non-spatial, and have no value at all.

### B. Time

Time is an optional element. Many aspects of the earth's surface are slow to change and can be thought of as unchanging. For example, height above sea level changes slowly because of erosion and movements of the earth's crust, but these processes operate on scales of hundreds or thousands of years and for most applications (except geophysics) we can safely omit time from the representation of elevation. On the other hand, temperature changes daily and dramatic changes sometimes occur in minutes with the passage of a cold front or thunderstorm, so time is very important.

### C. Attributes

Attributes refer to descriptive information about the objects, events or phenomena that we try to map. There is a lot of attribute information an area may have. Some attributes are physical or environmental (e.g., temperature or elevation), while others are social or economic (e.g., number of populations, or income).

## 8.1.3 Visualizing Geographic Data

There are two fundamental ways of visualizing geographic data. It can be visualized as a discrete object or as continuous data.

### A. Discrete objects

Discrete objects represent an area as objects with well-defined boundaries in open space. Hence, a discrete object has known and definable boundaries. It is easy to define precisely where the object begins and where it ends. For example, a lake is a discrete object within the surrounding landscape.

**Figure: An Example of Discrete Object - Lake**
The figure shows a lake as a discrete object with clear boundaries within a surrounding landscape.

### B. Continuous data

Continuous data represents areas or phenomena that progressively vary across a surface or a location. The values of a measure of variables may vary from point to point. Continuous data is also referred to as field, non-discrete, or surface data.

An example of continuous data is elevation. The starting point being sea level, the elevation of an area varies across the landscape.

**Figure: An example of Continuous Data – Altitude**
The figure shows a topographic representation of elevation varying continuously across a surface, with different altitude levels represented by varying shades or contours.

---

# 8.2 SOURCES AND TOOLS OF GEOGRAPHIC DATA

At the end of this section, you will be able to:
- acquire and present spatial data using geo-spatial technologies.

## KEY TERMS

- Base map
- Data collection
- Data format
- Digitizer
- Field survey
- Global Positioning System (GPS)
- Primary sources
- Remote sensing
- Secondary sources
- Sources of data

## 8.2.1 Sources of Geographic Data

Geographic data are collected from a variety of sources and in different formats. The data can be collected using instruments that measure natural phenomena (e.g., temperature, rainfall, humidity, etc.) as well as by advanced satellites (e.g., remote sensing). Therefore, geographic data come from two important sources:
a) Directly Collected
b) Remotely Sensed

### A. Directly collected data

Directly collected data are generated at the source of the phenomena being measured. Examples of directly collected data include measurements such as temperature readings at specific weather stations and elevations recorded by visiting the location of interest. Data can also be obtained through surveys (e.g., the census and sample surveys) or observation (e.g., counting the number of trees in a forest).

### B. Remotely sensed data

Remotely sensed data are measured from remote distances without any direct contact with the phenomena or a need to visit the locations of interest. Satellite images are examples of remotely sensed data.

### Focus: Sources of Geographic Data

The most common general sources for geographic data are:
- hard copy maps (analogue maps);
- aerial photographs;
- remotely-sensed imagery;
- point data samples from surveys; and
- existing digital data

## 8.2.2 Tools for Geographic Data Collection

Data collection is the process of gathering and measuring information on variables of our interest. It is usually carried out systematically so that it enables us to appropriately map the area of our interest. Therefore, the first step in making a map is to complete a field survey. Surveyors observe, measure, and record what they see in the specific area.

### Activity

1. What is the purpose of geographic data collection?

Geographic data is collected to create a base map of an area. Then other information about the layers which are going to overlap on the map will be collected. The data needed for the base map belong in a category named "primary sources" because these spatial and location data are received for direct use in making the map. The other category of data is called "secondary sources" and refers to data of general interest gathered for many reasons which can further be used by end users, based on their specific needs.

Hard copy maps (analogue maps) can be used as a secondary source. The information on these sources can be used by enlargement of a map of the area of our interest on paper or by digitizing on a computer in a digital format. However, whenever we use data from secondary sources, we should be very careful and check if the data are right and up-to-date. Otherwise, our final result will be wrong and misleading.

Today, most mapping is done by remote sensing—the gathering of geographic information from a distance by an instrument which is not physically in contact with the mapping site. These data are gathered primarily by aerial photography or satellites. The data gathered includes information such as elevation, differences in land cover, and variations in temperature. This information is recorded and converted to a digital format. Cartographers or mapmakers then use these data and computer software to make maps.

There are different types of tools or hardware that help us in data collection. The tools include: global positioning system (GPS) and digitizers.

### I. Global Positioning System (GPS)

A global positioning system is a satellite network that is used to determine the exact location of a place. It communicates with GPS receivers accessed by individual users on the surface of the Earth. The GPS receiver needs to connect with four or more satellites orbiting the Earth, as a reference to calculate the precise location of the user within a few meters.

**Figure: Global Positioning System**
The figure shows a schematic diagram of GPS satellites orbiting the Earth and communicating with a GPS receiver on the ground.

**Figure: GPS Receiver**
The figure shows a handheld GPS receiver device.

GPS receivers are widely used in cars and smartphones to provide directions to specific locations. The GPS receiver is very valuable for documenting information about a place. It provides latitudinal and longitudinal coordinate values of an area and the elevation value of the location.

### II. Digitizers

A digitizer is a tool used to change images on an analogue form or paper into a digital form on a computer. Therefore, digitization is the process of converting information into a digital (i.e., computer-readable) format. The result is the representation of an object or image in a digital format. Instruments that are used in digitization include: table digitizer, scanner and smartphones. Data generated by digitizer provides georeferenced information of an area. Whereas images generated by scanners and smartphones should be geo-referenced. Georeferencing means that the internal coordinate system of a map or aerial photo image can be related to a geographic coordinate system of an area being mapped.

**Figure: Table Digitizer**
The figure shows a professional table digitizer device used for converting paper maps to digital format.

---

# 8.3 GEOGRAPHIC DATA REPRESENTATIONS

At the end of this section, you will be able to:
- describe and explain how to present geographic information.

## KEY TERMS

- Analogue format
- Data representation
- Digital format
- Geographic data structure
- Grid-cell data
- Node

Geographic data representation involves graphical visualization of the data or producing a map of an area. Maps are used in order to gain better insight and understanding of the area of our interest. There are two main forms of geographic data representations. These are hardcopy also known as analogue format and digital format.

The digital format is becoming increasingly important in the world today. The digital representation of geographical data has enormous advantages over paper maps. It can be used in digital devices such as personal computer (PC), and information providers such as the internet, or mass storage devices for many purposes. Digital data are also easy to copy and transmit at very high speeds. Moreover, digital data can be stored at high density in very small spaces, and it is less subject to the physical deterioration that affects paper format. Finally, data in digital form are easy to transform, process and analyze.

### Activity 8.2

1. Describe the advantages of digital data formats and storage facilities over hardcopy, or analogue format?

A map is composed of different geographic features represented either as points, lines, and/or areas. Each feature is defined both by its location in space (with reference to a coordinate system), and by its characteristics (typically referred to as attributes). Therefore, a map is a model of the real world where all geographic features on the earth's surface can be characterized and defined as one of the three basic features – point, line or area.

**Figure: Geographic Data Structure**
The figure shows a comparison between the "Paper Map World" and "GIS Map World". In the paper world, features are drawn as points, lines, and areas. In the GIS world, these are stored as:
- Points: as individual X,Y coordinates (Vector) or COL,ROW entries in a Matrix (Raster)
- Lines: as a set of connected X,Y coordinates (Vector) or as a set of connected cells (Raster)
- Areas: as a set of connected coordinates defining the boundary (Vector) or as contiguous cells defining the interior (Raster)

- Point data exists when a feature is associated with a single location in space. Examples of point features include a telephone network tower, water well and a weather station.
- Line data exists when a feature's location is described by a string of spatial coordinates. Examples of linear data include rivers, roads, pipelines, etc.
- Area data exists when a feature is described by a closed string of spatial coordinates. An area feature is commonly referred to as a polygon. Examples of polygonal data include forest stands, soil classification areas, administrative boundaries, and climate zones. Most polygon data are considered to be homogeneous, and thus they are consistent.

Meanwhile, in the digital format, the same geographic features outlined above are stored and displayed in three basic types of spatial data models:
- Vector
- Raster
- Image

The following diagram reflects the two primary spatial data storage techniques in the computer. These are vector and raster. Whereas, images reflect pictures or photographs of the landscape.

**Figure: Digital forms of digital data representation**
The figure shows three overlapping circles representing Raster/Image, Vector, and Real World, indicating how different data models represent reality.

### Activity

Determine whether the following statement is correct or incorrect:
1. Whatever we can draw on a paper map using point, line, or polygon can also be drawn by vector and raster models in a computer.

## 1. Vector Data Models

Vector storage implies the use of vectors (directional lines) to represent a geographic feature. Vector data is characterized by the use of sequential points or vertices to define a linear segment. Each vertex consists of an X coordinate and a Y coordinate or latitudinal and longitudinal values. Hence, a point feature is defined by one coordinate pair of X and Y. Vector lines are also referred to as arcs and consist of a string of vertices terminated by a node. A node is defined as a vertex that starts or ends an arc segment. Polygonal (area) features are defined by a set of closed coordinate pairs.

**Figure: Vector Representation of the Real-World Features**
The figure shows how real-world features are encoded in vector format:
- Points: stored as individual X,Y coordinates
- Lines: stored as a set of connected X,Y coordinates with vertices and nodes
- Polygons: stored as a set of closed X,Y coordinates
- Multiparts: complex features stored as multiple coordinate sets

## 2. Raster data models

Raster data models incorporate the use of a grid-cell data structure where the geographic area is divided into cells identified by row and column. This data structure is commonly called a raster. The size of cells in a tessellated (characterized by a pattern of repeated shapes, especially polygons, that fit together closely without gaps or overlaps) data structure is selected based on the data accuracy and the resolution needed by the user. Since geographic data is rarely distinguished by regularly spaced shapes, cells are classified based on the most common attribute of the cell.

Therefore, raster data represent points by a single cell, lines by sequences of neighboring cells, and areas by collections of contiguous cells.

**Figure: Representation of Point, Line and Area Features (Raster versus Vector)**
The figure compares how point, line, and area features are represented in both raster and vector formats, showing the grid cell structure of raster versus the coordinate-based structure of vector.

---

# 8.4 ADVANCES IN MAPMAKING AND THE BIRTH OF GEOGRAPHIC INFORMATION SYSTEM

At the end of this section, you will be able to:
- describe the developments in map making.

## KEY TERMS

- Components of GIS
- Data analysis
- Data interpretation
- Data storing
- Data visualization
- Geographic Information System (GIS)
- Mapmaking

## 8.4.1 Historical Development of Mapmaking

Mapmaking has been an integral part of human history for thousands of years. It is believed that the human activity of graphically representing one's perception of the world is a universally acquired skill and one that pre-dates virtually all other forms of written communication. From cave paintings to ancient maps of Babylon, Greece, and Asia, right into the 21st century, people have created and used maps as an essential tool to help them define, explain and navigate their way through the world.

Mapping represented a significant step forward in the intellectual development of human beings and it serves as a record of the advancement of knowledge of the human race, which could be passed from members of one generation to those that follow in the development of civilization.

Early maps were a garbled or distorted mass of land that bear no resemblance to the actual world. As the centuries passed, maps became larger, more detailed and more accurate.

Several technical advances since the 18th Century helped mapmakers to accurately draw the general outline of the continents and locate their precise positions. The advances in mathematics and astronomy and dividing the Earth into lines of longitude and latitude were among the most notable developments.

There has been an ever increasing demand for maps and greater reliability on maps in the 21st Century. Specially, improvements in printing and photography, the mass production of maps and the ability to make accurate reproductions from more accurate data, as well as, the availability of airplanes and satellites made it possible to photograph and provide images of large areas at a time. In particular, the role of satellites is very important. Satellites perform continuous scans to provide detailed up-to-date maps of nearly the entire globe.

### Activity

1. "There is an ever-increasing demand for maps and greater reliability on it." Why do you think the demand for maps and its reliability are highly increased?

## 8.4.2 Geographic Information System (GIS)

It is interesting that during the last few decades more sophisticated mapping systems appeared. It was mainly due to the advancement of geographic information system (GIS). The geographic information system is a computer-based system that enables us to store, visualize, analyze, and interpret geographic data.

**Figure: Components of GIS**
The figure shows five essential components of GIS arranged in a circular diagram: Hardware, Software, Data, People, and Methods.

## 8.4.3 The Components of GIS

### 1. Hardware

The hardware is the computer and other devices (printers, plotters, scanners, etc.) attached with it. The hardware helps the GIS to function properly.

### 2. Software

GIS software provides the functions and tools users need to store, analyze and display geographical information. The key software components are:
- GIS software;
- database software;
- operating system (OS) software; and
- network software

### 3. People

GIS technology is clearly of limited value without people to manage the system and to develop plans for applying it. Users of GIS range from highly qualified technical specialists to planners, foresters, etc. to help with everyday decision making. Categories include:
- Administrators
- Managers
- GIS technicians
- Application experts
- End users
- Consumers

### 4. Methods

Methods are well-designed plans and application specific procedures and rules describing how the technology is applied. This includes the following:
- guidelines;
- standards; and
- specifications;
- procedures.

### 5. Data

Geographic data (also called spatial, or geospatial data) identifies the geographic location of features. One of the most important components of GIS is the data. It is very important that data must be accurate. There are different types of data:
- vector data;
- raster data;
- image data; and
- attribute data.

### Focus: Some basic GIS data can be obtained from the following web sources:
- https://africaopendata.org/dataset/ethiopia-shapefiles
- https://maps.google.com/
- https://earth.google.com

## 8.4.4 Creating a Local Administrative Map with ArcMap

### Step 1: Starting ArcMap, and adding data layers

To start ArcMap choose Start → All Programs → ArcGIS → ArcMap

**Note:** The data to produce an administrative map can be obtained from different sources. One of the sources is from the internet using the following link (https://africaopendata.org/dataset/ethiopia-shapefiles). Then download the data and extract the file in a folder. It is very important to create a folder and save the data on a hard drive of a computer. From the folder using the following steps it is possible to create an administrative map of area of our interest.

For example, to create an administrative map of Oromia National Regional State, we follow the following steps:

**Figure: ArcMap Program Menu**
The figure shows the Windows Start menu with ArcGIS folder expanded, showing ArcMap 10.8 among other ArcGIS applications.

### Step 2: Click the connect to folder icon

This allows you to access a folder where the Ethio-GIS data is stored.

**Figure: ArcMap Add Data Dialog**
The figure shows the ArcMap interface with the "Add Data" dialog box open, displaying a folder structure containing various shapefiles (.shp) and data files.

### Step 3: By clicking on the admin folder, select etbound01co and etregio01co. Then, click on the add button.

Once the selected shapefiles are added, it is important to remove the background shade of the files by clicking on the small squares, then choosing hollow from symbol selector and click on ok.

**Figure: ArcMap Layer Properties**
The figure shows the ArcMap Table of Contents with two layers added (etbound01co and etregio01co polygon layers) and the Symbol Selector dialog open with "Hollow" option selected.

**Figure: ArcMap Interface with Layers**
The figure shows the main ArcMap window displaying the map view with the two polygon layers rendered without fill color, showing only boundaries.

### Step 4: To select the area of your interest (Oromia National Regional State)

Right click on etregio01co layer → open attribute table → click on the left margin of the table where Oromia is found in the list of tables, then check that Oromia is selected and close.

**Figure: ArcMap Attribute Table Selection**
The figure shows the attribute table for etregio01co with a row selected (Oromia region) and the corresponding feature highlighted on the map.

### Step 5: Export the selected data

Then right click on etregio01co layer and click on Data → Export Data and save in a folder. It will prompt you to add the data in your project, click Yes.

**Figure: Layer Context Menu**
The figure shows the context menu for a layer with options including "Data" and "Export Data" visible.

### Step 6: Rename and finalize the map

Now the map of the region appears as follows, after being renamed to its proper name, and unticking the other layers we do not want for the final map.

**Figure: Final Map Table of Contents**
The figure shows the Table of Contents with "Oromia National Regional State" as the active layer, with other layers turned off.

### Step 7: Add marginal information

Finally, by clicking on a layout view we should include the necessary marginal information such as:
- legend;
- scale bar;
- north arrow;
- coordinate information;
- gridlines; and
- date of map compilation.

**Figure: Final Administrative Map Layout**
The figure shows the completed map layout of Oromia National Regional State with all marginal information including legend, scale bar, north arrow, coordinate system (WGS 1984 UTM Zone 37N), and date (4/14/2022).

---

**Match items under column A with its appropriate descriptions under column B**

| Column A | Column B |
| :--- | :--- |
| 1. Vector data | D. Uses sequential points or vertices to define a line segment |
| 2. Raster data | B. Uses of grid-cell |
| 3. Image data | C. Not a geo-referenced data |
| 4. Attribute data | A. Characteristic feature of a data |

---

# 8.5 MAKING AND INTERPRETATION OF GRAPHS, CHARTS AND DIAGRAMS

Many studies, researches and textbooks use data and numbers. Hence, presentations using charts, graphs, and diagrams can help the presenter draw and keep the attention of the listeners. Presentation using graphs, charts and diagrams also helps the presenter to have a profound evidence-based work. People will also understand and memorize at least the main points from the presentation. Moreover, they are very important in describing trends, making a comparison, or showing relationships between two or more items.

Computer programs such as Microsoft Excel, Microsoft Word and other spreadsheets like SPSS (statistical package for social sciences) are widely used for making graphs, charts and diagrams. There are so many types of graphs, charts and diagrams that can be produced on a computer. Therefore, the main task of the user is to choose the right one. Here are some common types out of which the user can make his or her choice. Bar graph, line graph and pie chart can be prepared in Microsoft Excel. Meanwhile, diagrams can be drawn in Microsoft Word using the steps indicated below.

## 1. Bar Graph

Bar graph is used to show relationships between different data series that are independent of each other. In this case, the height or length of the bar indicates the measured value or frequency. Below, you can see the example of a bar graph which is the most widespread visual for presenting rainfall data at Gore Town.

**Steps to Create a Bar Graph in Excel:**
1. Insert the data in rows & columns
2. Select the data
3. Click INSERT menu
4. Choose the bar chart type
5. Format as needed

**Raw Data and Final Output**

| Months | Rainfall (mm) |
| :--- | :--- |
| January | 25 |
| February | 28 |
| March | 65 |
| April | 90 |
| May | 115 |
| June | 168 |
| July | 180 |
| August | 187 |
| September | 155 |
| October | 125 |
| November | 88 |
| December | 28 |

**Figure: Annual Rainfall Distribution of Gore Town**
The bar graph shows monthly rainfall amounts in millimeters, with months on the x-axis and rainfall (mm) on the y-axis ranging from 0 to 200. July and August have the highest bars (180-187mm), while January, February and December have the lowest (25-28mm).

## 2. Line Graph

Line graph represents how data has changed over time. This type of chart is especially useful when we want to demonstrate trends or numbers that are connected. For example, how temperature varies within one year.

**Steps to Create a Line Graph in Excel:**
1. Insert the data in rows & columns
2. Select the data
3. Click INSERT menu
4. Choose the line graph type
5. Format as needed

**Raw Data and Final Output**

| Months | Temp. (℃) |
| :--- | :--- |
| January | 29 |
| February | 27 |
| March | 25 |
| April | 25 |
| May | 29 |
| June | 24 |
| July | 22 |
| August | 20 |
| September | 24 |
| October | 27 |
| November | 28 |
| December | 29 |

**Figure: Annual Average Temperature of Gore Town**
The line graph shows temperature trends throughout the year, with months on the x-axis and temperature (℃) on the y-axis. Temperatures range from 20℃ in August to 29℃ in January, May, and December, showing a dip during mid-year months.

## 3. Pie Chart

Pie chart is designed to visualize how a whole is divided into various parts. Each segment of the pie is a particular category within the total data set. In this way, it represents a percentage distribution of the variables under study.

**Steps to Create a Pie Chart in Excel:**
1. Type the data in rows & columns
2. Select the data
3. Click INSERT menu
4. Choose pie chart (3-D Pie)
5. Right click inside the circle & click on "Format data labels"

**Raw Data and Final Output**

| Country | Industry | Service | Agriculture |
| :--- | :--- | :--- | :--- |
| Ethiopia | 23.72 | 38.76 | 37.52 |

**Figure: Major Economic Activities of Ethiopia**
The pie chart shows three sectors: Agriculture (37%), Industry (24%), and Service (39%). Each sector is represented by a different color segment of the pie chart.

## 4. Diagram

Diagram is a plan, drawing or outline created to illustrate how separate parts work and overlap at the connecting points. For example, here is how we can draw the components of sustainable development in Microsoft Word.

**Steps to Create a Diagram in Word:**
1. Click on INSERT menu
2. From shapes, choose "oval"
3. Draw 3 overlapping circles
4. To change the color of each circle, right click & select colors from 'outline'
5. Insert text inside each circle

**Figure: Components of Sustainable Development**
The figure shows three overlapping circles representing the three pillars of sustainable development: Social (Bearable), Economic (Viable), and Environmental. The overlapping areas show the intersections between these components.

Note also that you can insert texts that describe the contents you wanted to show. In the example above, each word is written inside the circles as shown in the steps above.

---

# Glossary of basic terms used in the chapter

The following terms are commonly used in this unit and you need to understand their meanings:

- **Variable**: Data item that can take more than one value. For example, in qualitative data, a variable could be color (e.g., black, red, etc.) whereas in quantitative data it could be real numbers (e.g., number of students in a class can be 27 Male and 23 Female).
- **Field survey**: Collection and gathering of information at the local level by conducting primary surveys. These are an essential component of geographic enquiry and are carried out through observation, interviews, sketching, measurement, etc.
- **Data**: Facts and statistics collected together for reference or analysis.
- **Information**: Facts provided or learned about something or someone. It is associated with data. Data represents values attributed to parameters, whereas, information is data in context and with meaning attached.
- **Base map**: The graphic representation at a specified scale of selected fundamental map information; used as a framework upon which additional data of a specialized nature may be compiled.
- **Area of our interest**: The geographic extent of the job we want to do (e.g., area we want to map, study, survey, etc.) This helps us to confine the unit of work to a geographic area. It also helps us to continuously edit.
- **Primary source**: A document, first-hand account, or other sources that constitute direct evidence of an object of study.
- **Secondary source**: A book, article, or other source that provides information about an object of study but does not constitute direct, first-hand evidence.
- **End user**: A person who uses the final output of a map or research.
- **Hard copy map**: A map which is printed on physical material, such as on a paper, book or textbook.
- **Enlargement of a map**: Making a new, proportionally larger map, out of the original map.
- **Reduction of a map**: A reduction gives the same map that is proportionally smaller than the original.
- **Digital map**: The process of collection, compiling and formatting of data into a virtual image. The primary function of this technology is to produce maps that give accurate representations of a particular area, detailing major road networks and other points of interest.

---

# UNIT SUMMARY

In unit eight, we examined geospatial information and data processing. Such a process is very important to analyze and understand socioeconomic and environmental problems. The solutions to these problems require spatial thinking and geographic data analysis. Therefore, geographical data is the basis to provide answers to the problems.

Data can represent all types of information and may consist of numbers, text, images and many other formats. A wide variety of data sources exist for both spatial and attribute data. Some geographic phenomenon is well placed in discrete object while other phenomenon is well placed in continuous field.

Spatial data is collected in many different ways. The oldest method is the ground survey. The dimensions of geographic features are measured, such as length, size and direction by surveying equipment. These days, those surveying equipment have been increasingly replaced with GPS. Other methods are remote sensing. Remote sensing allows for collecting spatial data without direct contact with the object of our interest.

Digital technology has driven the need for putting reality into the computer. In other words, human conceptualization or representation of geographic data largely depend on digital format. Hence, data structure can be seen as the digital representation of an area of our interest which the computer can understand. For example, lines are stored as a set of points where points have x,y coordinates. Areas or polygons by connected lines. The shapes could appear in a vector or raster formats.

Moreover, geographic representation in a digital form is becoming increasingly important in our world today. Digital representations have enormous advantages over paper maps, written reports, or spoken accounts. As a result of this and other advances in technology during the last few decades more sophisticated mapping systems came into existence. Particularly, the advancement of geographic information system (GIS) played a great role in the improvements of mapping. The geographic information system is a computer-based system that enables us to store, visualize, analyze, and interpret geographic data.

Developing technical skills such as making graphs, charts and diagrams are very important. Because, many studies, researches and textbooks use data and numbers. Hence, presentations using these tools can help the presenter draw and keep the attention of the listeners. Presentation using graphs, charts and diagrams also helps the presenter to have a profound evidence-based work.

---

# REVIEW QUESTIONS

## PART I: TRUE OR FALSE ITEMS

**Direction**: Write "True" if the statement is correct and "False" if it is incorrect.

1. Data is an output of a computer system whereas information is an input to the system.
2. Attributes data refer to descriptive information of physical and socio-economic objects and subjects that we try to map.
3. The vector data model represents features' shape accurately than the raster data model.
4. The analogue representation of geographical data is becoming increasingly important in the world today than the digital method.
5. Bar graph is used to show relationships between different data series that are independent of each other.

## PART II: MATCHING ITEMS

**Direction**: Match the Items Under Column "A" with the Items Under Column "B"

### Column "A"

6. An area feature described by a closed string of spatial coordinate
7. Provides the functions and tools users need to store, analyze and display geographical information
8. Observations collected and stored as numbers, characters and images
9. A well-designed plans and procedure
10. Objects that can be seen and counted
11. A tool used to change images on an analogue form or on a paper into a digital form
12. System managers and developers of the plan
13. Tools that help us in data collection and run functions of GIS
14. A processed, manipulated and organized data.
15. Basic characteristics of an area of our interest

### Column "B"

A. Hardware
B. Methods
C. Data
D. People
E. Observation
F. Attributes
G. Information
H. Software
I. Polygon
J. Digitizer

## PART III: PROJECT WORK

16. Collect the sex and age data of students in your class and work on the following:
    a) Draw a pie chart showing the sex distribution of students in your class
    b) Draw a bar graph showing the age distribution of students in your class