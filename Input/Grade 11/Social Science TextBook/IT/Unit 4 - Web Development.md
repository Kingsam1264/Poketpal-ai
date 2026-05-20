# Unit 4: Web Development

## Learning Outcomes

At the end of this unit, students will be able to:

- Define the Web
- Explain a website and its benefits
- Elaborate the purpose of web design
- Describe basic concepts of HTML and web development
- Create webpages with images, videos, links, tables, lists, and links

## Unit Overview

Web development is the process of creating websites for various purposes such as information sharing and facilitating online businesses. In this unit, the World Wide Web (WWW) and its foundations as well as the concept and uses of websites are discussed. In addition, different types of HTML (Hypertext Markup Language) elements are presented with examples of how they work.

## 4.1. World Wide Web

### Brainstorming 4.1

What are the ways of communicating about a product or a service to a target audience?

World Wide Web (www), commonly known as the Web, is one of the most important services of the Internet. The Internet is a network of networks that the Web runs on. The Web is just one of the services of the Internet, and the most popular one. There are also many other services that are provided over the Internet such as email, file transfer and communication services.

The Web is a collection of websites or webpages that are accessed over the Internet using a web browser. Tim Berners-Lee invented the Web in 1989 in the famous laboratory found in Switzerland known as CERN. When the Web was invented, it was formed out of four essential foundations: HTML, HTTP, a web server, and a web browser.

HTML, which stands for HyperText Markup Language, is the language that is used to create webpages. A web browser is a software used by users to view webpages. A web server, on the other hand, is a software that stores webpages and responds to user requests that come through web browsers. HTTP, which stands for HyperText Transfer Protocol, is the set of rules that web browsers and web servers use to communicate with each other.

**The basics of HTML are discussed in detail in Section 4.3**

A website is a publicly accessible collection of interrelated webpages. Hypertext is used to link a webpage with other resources like another webpage, videos, images, and the like.

Nowadays, websites are the most efficient and effective ways for organizations or individuals to present themselves to their target audiences. As a globally accessible platform, the web makes it possible for an organization to expand its reach to the entire world. A website that is physically placed in one part of the world can be accessed from any other part of the world. It is also how online transactions are conducted by e-commerce companies. Today, shoppers use websites to make orders of different types of products from their homes or workplaces. This avoids the need to physically go to shops, which reduces the cost of transportation and increases the efficient use of our limited time. Similarly, various government e-services are accessed through websites. For example, citizens do not need to go to the Immigration Nationality & Vital Events Agency office in person to make applications for passports. They can simply go to the website and make their requests online. Education is another example where websites are used to facilitate a lot of activities. For example, the Ethiopian Ministry of Education established a website to make educational resources accessible to students. Online learning has also become widespread in many parts of the world, especially following the outbreak of COVID-19.

### Activity 4.1

1. Explain what the Web is and how it is related to the Internet.
2. List and explain the foundations of the Web.
3. Describe some of the benefits of websites.
4. Discuss among your class mates on how you can benefit from using the Web for educational purposes.

## 4.2. Website Design

Website design is concerned with the plan and design of various aspects of a website, such as layout, navigation, appearance, and graphics. The goal of a website design is to create a website that is appealing to its target audience. The design should also make the search for information easy by providing a well-organized layout.

The following are some important guidelines to consider when a website is designed:

### Target Audience

A website should be designed with the target audience in mind. The look and feel, presentation, and all other aspects of the website should take the target audience of the website into consideration. For example, a website that is intended for children in educational settings should have a presentation different from one that is designed for adults in the business sector.

### Navigation

Webpages should be logically organized to allow easy navigation. A well-organized website with easy navigation helps users find what they seek fast. A website with poor navigation, on the other hand, confuses and drives away visitors.

**Figure 4.1: Navigation (Screenshot of part of the website of WHO)**  
The image shows a well-organized navigation menu from the World Health Organization website, with clearly labeled sections including Health Topics, Data, Media Center, and other main categories. The logical arrangement makes it easier for visitors to find information quickly.

### Consistency

The feel and look of webpages on a website should be similar. Better user experience is achieved with consistent use of backgrounds, colors, typefaces, and the like throughout the website.

### Simplicity

Simplicity in website design applies to various elements of a website, such as the use of colors, graphics, typefaces, and the like. For example, it is recommended not to overcrowd a page with too many graphics. It is rather more helpful to use graphics when required. It is also recommended to use a maximum of five different colors (plus or minus two) to ensure a better user experience.

### Accessibility

Designing a website with everyone in mind including people with disabilities is highly advised to make sure that no one is excluded.

Web development is the actual creation or building of websites while website design deals with defining the layout and overall look of the website. Websites can be developed using a WYSIWYG (What you see is what you get) software like Adobe Dreamweaver. Simple text editors such as Notepad are the other alternative software to develop websites. Though developing webpages using simple text editors is a little more difficult than WYSIWYG software, it is more effective in enabling the learner to master the concepts.

### Activity

1. Describe the purpose of website design.
2. Discuss with your classmates the guidelines for website design.
3. Take the website of UN Women (https://www.unwomen.org/) and evaluate the website in a group using the guidelines discussed above. Then, present the result of your evaluation including suggestions for areas of improvement for the website.
4. Design a website layout on paper for your school taking the guidelines given above into consideration.

## 4.3. HTML Basics

HTML is a markup language that is used to create webpages. The different elements of a webpage such as headings, tables, paragraphs, images, and others are defined using the predefined set of markup tags of HTML.

HTML has gone through multiple revisions since its invention in 1989. The current version of HTML is HTML5.

HTML documents can be prepared using simple text editor software such as Notepad. The documents are saved with a ".html" extension. For example, home.html is a valid file name for an HTML document or a webpage.

### 4.3.1 HTML Tags and Elements

HTML tags are a set of predefined names enclosed in angle brackets. Each HTML tag has its specific meaning, and web browsers are designed to interpret or render HTML tags according to their intended purposes. Sample HTML tags and their meanings are shown in Table 4.1.

**Table 4.1: Sample HTML tags**

| Tag | Meaning |
|-----|---------|
| `<b>` | Bold |
| `<p>` | Paragraph |
| `<i>` | Italic |
| `<h1>` | Heading |

**Link:** Visit the following webpage for the list of all html tags: https://www.w3schools.com/tags/default.asp

HTML elements are components of an HTML document and normally have a `<start tag>` followed by content and an `</end tag>`. HTML elements are the building blocks of a webpage. Figure 4.2 shows some examples of HTML elements and their outputs on the browser.

**Figure 4.2: HTML elements**  
The image displays HTML code on the left side and its corresponding browser output on the right. The code shows four elements: `<h1>This is a heading</h1>`, `<p>This is a paragraph</p>`, `<b>This is a bold text</b>`, and `<i>This is an italic text</i>`. The browser output shows the heading in large text, the paragraph below it, and the bold and italic texts displayed next to each other on the same line.

**Notes**  
In Figure 4.2 that while the heading and the paragraph elements are displayed on a separate line each, the bold and italic texts are displayed next to each other. This is because the browser inserts a new line every time it finds HTML elements like `<h1>` and `<p>`, but it doesn't insert new lines for `<b>` and `<i>` HTML elements.

#### Activity

- Write an HTML document that has two paragraphs.

Though a significant majority of HTML elements conform to the `<start tag>content </end tag>` format, there are some HTML elements that have a different format. These HTML elements are known as void elements. The following table shows the format of void elements and their meanings. Void elements do not have an end tag.

**Table 4.2: Void elements**

| HTML element | Meaning |
|--------------|---------|
| `<br>` | Inserts a newline |
| `<img>` | Inserts an image |
| `<hr>` | Inserts a horizontal line |

**Notes**  
Note that the `<img>` element needs an attribute that indicates the address of the image for the browser to insert the image into the webpage. An example of how to insert an image is given in Section 4.3.3.

**Figure: HTML Code and Output Example**  
The image shows HTML code with `<hr>` elements creating horizontal lines above and below a paragraph, and a `<br>` element creating a line break within the paragraph. The browser output displays two horizontal lines with the paragraph text between them, and the word "paragraph" appears on a new line due to the `<br>` tag.

**Notes**  
Note that the two horizontal lines placed above and below the paragraph are the result of the two `<hr>` elements. Also, note that the text "paragraph" is shown in a new line because the `<br>` element is inserted right before it, inside the `<p>` element.

#### Activity

Create a webpage that has three paragraphs enclosed by horizontal lines.

### 4.3.2 Structure of HTML Documents

All HTML documents or webpages have a common structure. What changes from one webpage to another is what goes inside the `<body>` and the `<head>` sections of HTML documents. Figure 4.4 shows what the structure of HTML documents looks like in general.

**Figure 4.4: Structure of an HTML document**  
The image displays the basic HTML document structure with the following elements:
- `<!DOCTYPE html>`: Indicates the document type
- `<html>...</html>`: Represents the entire document, divided into two major sections
- `<head>...</head>`: Contains information about the webpage such as the page title
- `<body>...</body>`: Contains the actual content displayed in the browser

**Notes**

- `<!DOCTYPE html>`: This element indicates the type of the document.
- `<html>...</html>`: Represents the entire document, and it is divided into two major sections: the head (`<head>...</head>`) and the body (`<body>...</body>`) sections.
- `<head>...</head>`: This part of the HTML document is used to keep all the information about the webpage such as the page title.
- `<body>...</body>`: Is the part of the HTML document where the content of the webpage is kept. Everything that is shown in the web browser, when the webpage is displayed, is what is contained in this part of the HTML document.

#### Activity

- Open a webpage from the Internet. Right-click on any area of the webpage and click on the "View page source" option. Then, after the complete HTML code is displayed, identify those tags that you are familiar with, and explore more about those that you do not know.

### 4.3.3 HTML Attributes

HTML attributes are used to define more properties to HTML elements. HTML paragraphs, for example, are left-aligned by default. However, if a paragraph is needed to be presented with the texts aligned to the right, the "align" attribute should be used. Attributes are written inside the start tag with attribute-value pairs (attribute=value). Figure 4.5 shows how the text of a paragraph is aligned to the right using the "align" attribute.

**Figure 4.5: HTML "align" attribute**  
The image shows HTML code with `<h1>This is a heading</h1>` and `<p align="right">This is a paragraph</p>`. The browser output displays the heading left-aligned as usual, but the paragraph text is right-aligned.

Attributes are normally optional to many of the HTML tags. However, there are some HTML elements that cannot function as intended without the use of some attributes. The `<img>` HTML element is one such example. The `<img>` element should have the "src" attribute, which refers to the name and location of the actual image that is required to be inserted into the webpage. See the following example.

**Figure 4.6: `<img>` HTML element**  
The image shows HTML code `<img src="derartu tulu.jpg">` and the browser output displaying the referenced image. The example assumes that the image file and the HTML file are located in the same folder.

**Notes**  
Note that the example in Figure 4.6 assumes that the image file and the HTML file are located in the same folder.

#### Activity 4.6

1. Write an HTML element that displays a heading with the text right-aligned.
2. Write an HTML document that has three images each placed in a separate line.

The other HTML element that uses the "src" attribute is the `<video>` element. `<video>` element is used to add a video to a webpage as shown in the following example.

**Figure 4.7: `<video>` HTML element**  
The image shows HTML code for a video element with width, height, controls, and src attributes. The browser output displays a video player interface with play, pause, and volume controls.

**Notes**  
The meaning of the attributes in the `<video>` element is given as follows:
- The controls attribute adds controls like play, pause, and volume. Note that no value is assigned to the controls attribute.
- The width and height attributes control the width and height of the video on the webpage depending on the value given.
- The src attribute is used to refer to the file name of the video.

#### Activity

1. Get a short MP4 video and put it inside a folder.
2. Create an HTML document in the same folder and add a `<video>` element in the HTML document to display the video that you just added to the folder.
3. Open the HTML document and see if the video appears.
4. Change the values of the height and width attributes and observe the differences on the webpage. Observe also the change on the video when the controls attribute is removed.

## 4.4. HTML Links

HTML links are used to navigate from one webpage to another or from one part of a webpage to another. The links could come in the form of text or images and are normally known as hyperlinks. Hyperlinks can easily be distinguished by the hand symbol that the mouse cursor is turned to when the mouse is hovering over the link.

### 4.4.1 Links to other Pages

The anchor tag (`<a>`) is used to create hyperlinks. An HTML element that is formed from an anchor tag has the following format:

**Figure 4.8: Format of HTML links**  
The image shows the anatomy of an anchor tag: `<a href="URL">clickable text</a>`. The diagram explains that:
- `<a>` is the anchor tag
- `href` is the attribute where the URL of the destination webpage is assigned
- URL stands for Uniform Resource Locator, referencing the address of web resources
- The clickable text is the part visible to users, which when clicked redirects to the given URL

The example in Figure 4.9 shows how a link to Google is created and what the hyperlink looks like when it is displayed on the web browser.

**Table: HTML Code and Output for Google Link**

| HTML Code | Output on the Web Browser |
|-----------|---------------------------|
| `<a href="https://www.google.com">Google</a>` | [Google] (displayed as a clickable blue link) |

**Figure 4.9: Defining a link to Google**  
The image shows the HTML code for creating a hyperlink to Google and the resulting browser output where "Google" appears as a clickable text link.

**Notes**  
Another important attribute of the anchor tag is the "target" attribute. The value of the "target" attribute determines where the linked document is displayed. See the following table for the meaning of each value of the "target" attribute.

**Table 4.3: The "target" attribute and its values**

| Value | Meaning |
|-------|---------|
| `_self` | The webpage is displayed in the same window/tab. (Default) |
| `_blank` | The webpage is displayed on a separate window/tab. |

#### Activity 4.8

1. Using Notepad, create an HTML document that has links to Ethiopian Airlines, ethio telecom, and Commercial Bank of Ethiopia using the following URLs:
   - https://www.ethiopianairlines.com
   - https://www.ethiotelecom.et
   - https://www.combanketh.et
2. Modify the HTML code you just created above so that the pages are displayed in a new tab.

In addition to texts, images also can be used as links that users can click on to go to a specified webpage. To use images as a link, simply embed the image element inside the anchor tag as shown in Figure 4.10.

**Figure 4.10: Image HTML link**  
The image shows HTML code where an `<img>` tag is nested inside an `<a>` anchor tag, creating a clickable image link. The browser output shows an image that, when clicked, would navigate to the specified URL. The example uses a relative URL "google.png" assuming the image is in the same folder as the webpage.

**Notes**  
Note that the image element is placed between `<a>` and `</a>`. Also note that a relative URL, as opposed to an absolute URL, is used to reference the "google.png" image. The assumption in the way the URL is given is that the image and the current webpage are found under the same folder.

- **Absolute URL**: is a URL that includes every element of a URL such as the protocol, the hostname, as well as path of the webpage. In other words, it will have a form such as this: `http://www.example.com/somefile.html`
- **Relative URL**: is a path given relative to the location of the current webpage. Example: `somedirectory/somefile.html`

#### Activity

- Redo the first question of Activity 4.8 using three images as links.

### 4.4.2 Links to Page Sections

Hyperlinks can be created not only to establish links to other pages, but also to different parts, or sections of the same page. This is especially useful in a webpage that has a large size content. Readers can easily go to different sections of the page without having to scroll up and down.

To create such types of links, the `<a>` tag is used in two different ways: in designating names to specific locations and in creating links to the locations from other places on the same page. While the "name" attribute is used to designate a name to a location, the "href" attribute is used to create links to the locations. See the following example:

**Example Code:**
```html
<a name="section1">Section One</a>
<a href="#section1">Go to section one</a>
```

The HTML element you see at the bottom of the above code creates the "Go to section one" link. If this link is clicked, the user is moved back to the top of the webpage. (Note that in order to see this effect the webpage should be long enough that the link and the top of the document cannot be seen on one screen).

**Notes**  
Note also that the way the value to the href attribute is given. The value is given as the # symbol followed by the name of the section.

#### Activity

1. Create three HTML documents in the same folder. Then create a link in each of the HTML documents to all the others so that one can access all the pages by simply opening only one of them.
2. Create a webpage that has a content that is grouped into at least three sections and then create:
   a. a link at the end of each section to the top of the document
   b. a link at the beginning of each section to the beginning of all the other sections. (Note that the top of the document will be the same as the beginning of section one)

## 4.5. HTML Tables

An HTML table is used to organize data in terms of rows and columns. Tables are one way of organizing contents or defining a layout for contents in a webpage. The major HTML tags used for creating tables and their meanings are presented in the following table.

**Table 4.4: HTML tags used for creating tables**

| HTML Tags | Meaning |
|-----------|---------|
| `<table>` | Used to define the tables |
| `<th>` | Used to define table headers |
| `<tr>` | Used to define table rows |
| `<td>` | Used to define data cells |

The number of rows of a table is determined by the number of `<tr>` elements that the `<table>` has while the number of columns is determined by the number of `<td>` elements that are found in each `<tr>`. The example in Figure 4.11 creates a table with 3 columns and 3 rows.

**Figure 4.11: HTML table**  
The image shows HTML code for creating a table with mountain information and the browser output displaying a bordered table with three columns (Mountain Name, Elevation, Location) and four rows of data about Ethiopian mountains (Ras Dashen, Tullu Dimtu, Guge, Amba Alagi).

**Notes**  
Note the following points from Figure 4.11:
- The table has a "border" attribute, which is assigned the value 1. This adds a border to the table when displayed on the web browser as shown in the example. If the border attribute is not used, the data will be displayed in the same way but without a border.
- The information in the table is about some of the mountains found in Ethiopia.

#### Activity

1. Design a table that should look like the following when displayed on the web browser:

| column 1 | column 2 | column 3 | column 4 |
|----------|----------|----------|----------|
| 1        | 2        | 3        | 4        |
| 2        | 4        | 6        | 8        |
| 3        | 6        | 9        | 12       |
| 4        | 8        | 12       | 16       |

2. Modify the table you designed in the first activity so that the output on the browser will look something like the one shown below:

|          | column 1 | column 2 | column 3 | column 4 |
|----------|----------|----------|----------|----------|
| row1     | 1        | 2        | 3        | 4        |
| row2     | 2        | 4        | 6        | 8        |
| row3     | 3        | 6        | 9        | 12       |
| row4     | 4        | 8        | 12       | 16       |

When the layout of the table needs the merging of multiple columns or rows, "colspan" and "rowspan" attributes can be used respectively. For example, the HTML code in Figure 4.12 shows how two columns are merged both for the "Cases" and "Deaths" data cells of the table.

**Figure 4.12: Merging columns in HTML tables**  
The image shows HTML code using colspan attributes to merge columns in a COVID-19 data table, and the browser output displaying a table where "Cases" and "Deaths" headers each span two sub-columns (Total and New). The table shows data for Date 07/29/21 with Cases: Total 279,629, New 3,592 and Deaths: Total 4,381, New 61.

**Notes**  
Note the following points from Figure 4.12:
- The first `<th>` of the first `<tr>` does not have data as shown in the output.
- As the value given to the "colspan" attribute of the second and third `<th>` of the first `<tr>` is 2, the "Cases" and "Deaths" columns span the two columns under them.
- The data shown in the table is adopted from World Health Organization and is about the spread of COVID-19 in Ethiopia.

The "colspan" and "rowspan" attributes can also be used to define the layout of an entire page. The following HTML code generates a typical page layout with Header, Sidebar, Content area, as well as Footer using an HTML table as shown in the output of Figure 4.13.

**Figure 4.13(a): HTML code for Page layout using tables**  
The image shows HTML code creating a page layout using a table structure with:
- A header row (colspan="2") containing "Website Logo"
- A second row with a sidebar (width="20%") and content area (width="80%")
- A footer row (colspan="2") containing "Footer"

**Figure 4.13(b): Page layout using tables**  
The browser output shows a visual layout with:
- A dark gray header band across the top with "Website Logo"
- A left sidebar (light gray, 20% width) with "Sidebar"
- A right content area (lighter gray, 80% width) with "Content"
- A dark gray footer band across the bottom with "Footer"

**Notes**  
Note the following points from Figure 4.13(a) and Figure 4.13(b):
- The "width" attribute is given the value 100% so that the table occupies the entire width of the page.
- "px" stands for pixel.
- The "width" of the first `<td>` of the second `<tr>` is assigned 20% so that the "Sidebar" occupies 20% of the width of the table. 80% of the width of the table is occupied by the second `<td>` of the second `<tr>`.
- "colspan" attribute is used to merge the top and bottom rows of the table.

#### Activity

Create a table that has the following layout:
- The table should occupy the entire width of the page.
- The width of each of the first and third data cells of the second row occupies 20% of the width of the page.

## 4.6. HTML Lists

HTML lists are used to present different types of lists. The types of lists are known as ordered lists, unordered lists, and description lists.

### 4.6.1 Ordered List

`<ol>` is the tag that is used to create ordered/numbered lists. The `<li>` tag, on the other hand, is used to insert individual items into the list. By default, Arabic numerals are used for ordering purposes in ordered lists. However, using the "type" attribute the ordering type can be changed to some other form such as the English alphabet. See Table 4.5 for the list of values that the "type" attribute can be assigned to and their meanings.

**Table 4.5: The "type" attribute and its values for the Ordered List**

| Value | Meaning |
|-------|---------|
| 1     | Arabic numeral (Default) |
| I     | Upper-case Roman number |
| i     | Lower-case Roman numeral |
| A     | Upper-case English alphabet |
| a     | Lower-case English alphabet |

The HTML code in Figure 4.15 shows an example of an ordered list, and what the output on the web browser looks like. (The data refers to the top 10 causes of death in Ethiopia. Source: World Health Organization 2018)

**Figure 4.15: HTML Ordered List**  
The image shows HTML code listing health conditions and the browser output displaying them as a numbered list from 1 to 10, including: Coronary heart disease, Influenza and pneumonia, Diarrheal diseases, Stroke, Tuberculosis, Road traffic accidents, Liver disease, Diabetes mellitus, HIV/AIDS, and Breast cancer.

#### Activity

1. Create an ordered list of the full names of your classmates.

### 4.6.2 Unordered List

`<ul>` is the tag that is used to create unordered/bulleted lists. The `<li>` tag and the "type" attribute are used similarly as they are used in ordered lists. The default bullet type is "disc". The "type" attribute is, therefore, used to change the default type to any of the other types. See Table 4.6 for the list of values that the "type" attribute can be assigned to and their meanings in unordered lists.

**Table 4.6: The "type" attribute and its values for Unordered List**

| Value | Meaning |
|-------|---------|
| disc  | ● (Default) |
| square| ■ |
| circle| ○ |

**Notes**  
As stated in Table 4.6, the default bullet type for unordered lists is "disc". In the example shown in Figure 4.16, however, the output shows the list using the "circle" bullet type. That is because the type is explicitly changed in the list as shown in the code.

**Figure 4.16: The "type" attribute in Unordered Lists**  
The image shows HTML code for an unordered list with `type="circle"` and the browser output displaying the list items with circle bullets: Save energy, Plant trees, Reduce water waste, Avoid plastic wherever possible.

#### Activity

- By changing the value of the "type" attribute, design different types of ordered and unordered lists.

Lists can be nested. Any type of list can be placed under any other type of list. The following example in Figure 4.17 shows how an ordered list can be nested inside an unordered list.

**Figure 4.17: Nested lists**  
The image shows HTML code where an `<ol>` ordered list is nested inside a `<li>` element of a `<ul>` unordered list. The browser output displays a main bullet point "Actions one can do to stop climate change" with a numbered sub-list below it: 1. Save energy, 2. Plant trees, 3. Reduce water waste, 4. Avoid plastic wherever possible.

**Notes**  
In the HTML code of Figure 4.17, observe where the `<li>` of the `<ul>` begins and ends. As you can see, the `<ol>` is embedded inside the `<li>` of the outer list.

#### Activity 4.15

Create the following list:

- Fruits:
  - Orange
  - Banana
  - Pineapple
- Vegetables:
  - Carrot
  - Cabbage
  - Onion

### 4.6.3 Description List

In a description list, the `<dl>` tag is used to define the whole description. The `<dt>` tag, on the other hand, is used to add the item that is to be described or defined. The description or definition is added using the `<dd>` tag. See the example given in Figure 4.18 to learn how the three tags are used together.

**Figure 4.18: HTML Description List**  
The image shows HTML code using `<dl>`, `<dt>`, and `<dd>` tags to define HTML list types, and the browser output displaying:
- ol - Ordered list
- ul - Unordered list
- dl - Description list

#### Activity 4.16

- Create a description list for the dictionary definition of three of your favorite English words.

## Unit Summary

In this unit, you have learnt about:

- What the Web is and its relationship with the Internet
- Foundations of the Web, such as HTTP, HTML, web browser, and web server
- What is meant by a website and its uses
- What is meant by website design
- Some guidelines for website design
- The difference between website design and website development
- What HTML is and the structure of an HTML document
- HTML tags and HTML elements and their differences
- How to insert basic elements like images, videos, paragraphs, headings, and the like on webpages
- HTML attributes and how they are used to control the properties of HTML elements
- How hyperlinks are created using the anchor tag (`<a>`)
- How to use images as a hyperlink
- The difference between absolute and relative URL
- How links are created to different parts of the same page using the anchor tag (`<a>`)
- How HTML tables are created to define the structure of data as well as the layout of webpages
- The three types of lists namely, ordered lists (`<ol>`), unordered lists (`<ul>`), and description lists (`<dl>`)
- How lists can be nested and how one type of list is embedded under another type

## Key Terms

**Absolute URL** is a URL that includes every element of a URL such as the protocol, the hostname, as well as path of the webpage.

**Description lists `<dl>`** are used to create description/definition lists.

**HTML attributes** are used to define more properties to HTML elements.

**HTML elements** are components of HTML documents that normally begin with a start tag and end with an end tag.

**HTML tags** are a set of predefined names enclosed in angle brackets.

**HTML** is a language that is used to develop webpages.

**HTTP** is a protocol that browser software and web server software used to communicate with each other.

**Hypertext** is a link that connects webpages.

**Ordered Lists `<ol>`** are used to create ordered/numbered lists.

**Relative URL** is a path given relative to the location of the current webpage.

**The Web** is one of the popular services of the Internet.

**Uniform Resource Locator (URL)** refers to the address of web resources.

**Unordered Lists `<ul>`** are used to create bulleted lists.

**Void elements** are HTML elements that do not have end tags.

**Web Browser** is a software that is used to view webpages.

**Web Server** is a software that is used to manage websites.

**Webpage** is a web document that can store text, images, videos, and the like.

**Website** is a collection of interrelated webpages.

## Review Questions

### Part I: Write True if the statement is correct and False if it is incorrect.

1. The Web and the Internet are the same things.
2. The `<head>` and the `<body>` sections are the two major sections of HTML documents.
3. "rowspan" is the attribute that is used to merge rows of a table.
4. "circle" is a valid value to the "type" attribute in ordered lists.
5. It is only texts that can be used as links.

### Part II: Match the items given under column B with associated items in column A

| A | B |
|---|---|
| 1. Internet service | a. Web Browser |
| 2. Section of an HTML document where actual content goes | b. The Web |
| 3. User or Client-side web software | c. `<body>` |
| 4. An HTML element used to create headings | d. `<h1>` |
| 5. Address of webpages | e. `<dd>` |
| | f. URL |
| | g. HTTP |
| | h. .html |
| | i. Internet |

### Part III: Choose the correct answer from the given alternatives.

1. Which of the following is the language used to develop webpages?
   - A. HTML
   - B. HTTP
   - C. Web server
   - D. Web browser

2. The building blocks of webpages are
   - A. HTML tags
   - B. HTML elements
   - C. Images
   - D. Headings

3. Which of the following is an example of void HTML elements?
   - A. `<h1>`
   - B. `<p>`
   - C. `<img>`
   - D. `<b>`

4. Which of the following is used to define additional properties to HTML elements?
   - A. HTML tags
   - B. HTML attributes
   - C. HTML documents
   - D. URL

5. Which of the following is used to define a header for HTML tables?
   - A. `<tr>`
   - B. `<td>`
   - C. `<th>`
   - D. "colspan" attribute

### Part IV: Fill in the blank spaces

1. A protocol that a web server and a web browser use to communicate with each other is __________________.
2. The extension used for file names in HTML documents is __________________.
3. A type of URL that doesn't contain information such as web protocol is called __________________.
4. The attribute of `<a>` that is used to give names to sections of a webpage is __________________.
5. A tag that is used to create horizontal line is __________________.

### Part V: Code Writing

1. The following data is about life expectancy in Ethiopia between 1960 and 2016. (Source: World Health Organization). Create an HTML table that displays the data as shown below:

| Year | Male | Female | All |
|------|------|--------|-----|
| 1960 | 37.3 | 40.2   | 38.7|
| 1970 | 41.5 | 44.5   | 43.0|
| 1980 | 43.3 | 46.3   | 44.8|
| 1990 | 46.1 | 49.1   | 47.5|
| 2000 | 49.3 | 53.1   | 51.2|
| 2010 | 60.1 | 63.6   | 61.8|
| 2016 | 63.7 | 67.3   | 65.5|

2. Create an Ordered List of the subjects you are currently taking in the order of your preference.

3. Create the following list:
   - Famous Ethiopian female athletes:
     - Derartu Tulu
     - Tirunesh Dibaba
     - Meseret Defar
   - Famous Ethiopian male athletes:
     - Abebe Bikila
     - Haile Gebrselassie
     - Kenenisa Bekele

4. Create the layout of a page using an HTML table according to the example shown below. The table has the following features:
   - The "width" attribute of the table is assigned to the value "100%" so that the table occupies the entire width of the page.
   - The "bgcolor" attribute of the data cell of the first row has the value "#666666".
   - The "bgcolor" attribute of the first data cell of the second row has the value "#dddddd", and its "width" attribute is assigned to the value "25%". This data cell also has hyperlinks to the three organizations shown in the example. Moreover, the content should be aligned to the top using the "valign" attribute.
   - The "bgcolor" attribute of the second data cell of the second row has the value "#eeeeee", and its "height" attribute has the value "200". The content should be aligned to the top using the "valign" attribute using the value "top".
   - The data cell of the last row has the same background as the first one and its text is centered.

**Example Layout:**
```
This is My Page Title
+-----------------------------------------------------------+
|                       Website Logo                        |
+---------------+-------------------------------------------+
|               |                                           |
| Links         |                                           |
| Ethiopian     |          My Contents                    |
| Air Lines     |                                           |
| Ethio telecom |                                           |
| CBE           |                                           |
+---------------+-------------------------------------------+
|           Copyright © 2021 Yourname.com                   |
+-----------------------------------------------------------+
```