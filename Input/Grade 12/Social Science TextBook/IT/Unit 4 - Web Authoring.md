# UNIT 4: WEB AUTHORING

## Learning Outcomes

At the end of this unit, students will be able to:
* Explain how to use an extensible markup language (XML)
* Analyse an XML document
* Describe basic XML tags
* Apply the syntax rules of XML documents
* Create simple XML documents
* Compare and contrast hypertext markup language (HTML) vs. XML

## Unit Overview

In your Grade 11 IT course, you learned that HTML (HyperText Markup Language) is a standard markup language for creating web pages. HTML consists of a series of elements that are used to describe the structure of a web page, such as `<html>`, `<head>`, `<title>`, `<body>`, `<table>`, `<image>`, `<a>`, etc. These elements tell the browser how to structure and display the content. This means, the HTML elements label pieces of content such as "My Heading", "Paragraph starts here", "Link to about page", etc. You have learned the basics of HTML and web design in Web Authoring in Grade 11 IT subject.

This unit introduces another widely applicable markup language called XML. The unit covers an overview of XML, its structure, and the differences between XML and HTML. Finally, website publishing is discussed.

---

## 4.1 Introduction to XML

### Brainstorming

What comes to your mind when you hear the term 'markup language'?

The eXtensible Markup Language (XML) is a markup language like HTML. A markup language is a computer language that uses tags enclosed with less than (`<`) and greater than (`>`) symbols to define elements within a document. When the file is processed by a suitable application, the tags are used to control the structure or presentation of the data contained in the file. Any text that appears within one of these tags is considered part of the markup language. Markup files contain standard words, rather than typical programming syntax.

### Activity
* Describe one fact about markup language.

XML is a way of applying structure to a web page. XML provides a standard open format and mechanisms for structuring a document so that it can be exchanged and manipulated. XML complements your HTML knowledge by allowing you to structure your data by marking up the text and data to define the data content. XML is used for storing structured data, rather than formatting information on a page. While HTML documents use predefined tags (such as "<head>", "<title>"), XML files use custom tags to define data structure.

Microsoft Rich Text Format (RTF), Adobe Portable Document Format (PDF), and HTML are types of markup languages that provide presentational markup. They are powerful solutions to the problem of displaying information. Their common limitation is that they describe how the data looks, but they do not give any information about what it means.

Like HTML, XML uses tags to "mark-up" data content. Unlike HTML, in XML you define your own tags that meet the exact needs of your document. The custom tags make your data easier to organize and more searchable. For example, a student might describe the book she reads on vacation time like this:

```xml
<books>
    <book>
        <title>An Introduction to XML and Web Technologies</title>
        <author>by Anders Moller, Michael Schwartzbach</author>
        <type>Programming Languages</type>
    </book>
</books>
```

XML does not change the way your web pages looks; instead, it changes the way the documents are read and filed and stored. Therefore, XML is used to describe the structure of a document rather than the way it is displayed.

The two areas in which XML is useful are structuring data for storage, where a relational database (See Unit Three about database) is inappropriate, and the presentation of web pages. For example, a system is handling small quantities of data, or if the data lacks a relational structure, programmers usually prefer to create their own data formats.

### Activity 4.1
1. What tags are used by XML? How are they different from tags used in HTML?
2. Can HTML replace XML? Explain your answer.
3. Describe two areas where XML is useful.

---

## 4.1.1 Elements of XML Documents

XML document must contain one root element that is the parent of all other elements, for example `<people>` in Figure 4.1). The best way to learn what makes up an XML document is by starting from a simple example. The following is a complete XML document that lists the names of two known athletes.

**Figure 4.1: XML Document Structure (left) and Example (right)**  
The left side shows the hierarchical structure of an XML document with root element `people`, containing `person` elements, each with `name`, `first`, and `last` sub-elements. The right side shows the actual XML code implementing this structure with data for Haile Gebrselassie and Derartu Tulu.

The above XML lets you name parts of the document such as the first names and the last names of two of our legendary athletes. You can name anything that is relevant to the document you want to produce. All that matters is that you follow the basic rules for creating tags. The above markup does not follow the basic rules (predefined tags), rather you define your tags.

**Figure 4.2: Various Elements of the XML document**  
Shows a detailed view of an XML document with numbered annotations pointing to:
1. XML declaration
2. Document Type Declaration (DTD)
3. Internal DTD subset
4. XML information set/Content
5. Root element
6. Start tag
7. End tag
8. XML element
9. Data

The numbers shown in Figure 4.2 are interpreted as follows:

1. **XML declaration:** describes the general characteristics of the document, such as XML document, the version of the XML, and the encoding character it uses. XML documents usually begin with the XML declaration statement called the processing instructions which provide information on how the XML file should be processed. E.g. `<?XML version="1.0" encoding="UTF-8"?>` The processing instruction statement uses the encoding property to specify the encoding scheme used to create the XML file. Encoding is the process of converting Unicode character into their binary equivalent representation depending on the type of encoding ('UTF-8' or others).

2. **Document Type Declaration (DTD):** describes the structure of the document in terms of which elements it may contain, along with any restrictions it may have. In other words, it describes the root. The above example is about people. The document 'people' is described with five elements. These are described below. E.g. `<!DOCTYPE people [...]>`

3. **Internal DTD subset:** a DTD is internal if the elements are declared within the same XML file. In the following example, internal declarations that are local to the XML document are used:
   ```xml
   <!ELEMENT people (person+)>
   <!ELEMENT person (name)>
   <!ELEMENT name (first,last)>
   <!ELEMENT first(#PCDATA)>
   <!ELEMENT last(#PCDATA)>
   ```

**Notes:** PCDATA – stands for Parsed Character DATA. Character data is a text that is found between the start tag and the end tag of an XML element. E.g. Abebech in Figure 4.3.

4. **XML information set or Content:** this represents the XML document's content—the information that the document conveys. Content refers to the information that is represented by the elements of an XML document. See the example in Figure 4.3.

**Figure 4.3: XML document**  
Shows the XML code with data content: first names (Haile, Derartu) and last names (Gebrselassie, Tulu) within their respective tags.

5. **Root element:** This encloses all of the information. An XML document can have only one root element. Therefore, `<people>` is the root of this XML document.

6. **Start tag:** XML elements have a start and an end tag—the start tag provides the name of the XML element. E.g. `<first>`

7. **End tag:** The name of the end tag must exactly match the name of the start tag. E.g. `<people>` with `</people>`, `<person>` with `</person>`, `<first>` with `</first>`

8. **XML element:** The start and the end tags are collectively referred to as an XML elements. Elements are the basic units that are used to identify and describe the data in XML. They are the building blocks of an XML document. E.g. `<last>Kebede</last>`

9. **Data:** XML elements can contain data between the start and the end tags. An XML document represents information using a hierarchy. That means, it begins with a root element (e.g. people), which contains sub-elements (e.g. person) which in turn can contain other sub-elements (e.g. name), data (e.g. Kebede), or both. E.g. Abebech, Kebede, Jemal, and Ahmed are data.

Besides the above elements, attributes and comments are also part of XML syntax.

**Attribute:** Like HTML, XML elements can contain attributes. An attribute provides additional information about the elements for which it is declared. It consists of a name-value pair. In the following example, the attribute name is personid and the value is "101". The attribute value should be quoted: single or double quotes can be used. E.g. `<name personid="101">Ubang </name>`

**Comment:** This is a kind of note or statement that is used to describe the XML code. Comments can provide documentation information about the XML file or the application to which the file belongs. A comment is ignored by the XML parser (or a program that interprets XML instruction) during code execution.

The syntax for a comment is: `<!--This is a comment -->`

We can see the whole hierarchy of the above markup in an upside-down tree structure, as shown in Figure 4.4.

**Figure 4.4: Tree Structure of Person XML document**  
Shows a hierarchical tree diagram with "people" at the root, branching to two "person" nodes, each further branching to "name" nodes, which then branch to "first" and "last" leaf nodes containing the actual data values.

Although XML is designed so that people can read it, it is not intended to create a finished document. In other words, you cannot open up just any XML-tagged document in a browser and expect it to be formatted well. XML is meant to hold content so that when the document is combined with other resources, such as a style sheet which renders a web page, it becomes a finished document.

### Activity
1. Describe elements of XML documents and their functions.
2. Write XML that describes a food menu. Each type of food has a description which contains the name of the food and its price. Save it as menu.xml.

**Hint:** root – food_menu, DTD – it is about food, content – food description (name and price)

---

## 4.1.2 Creating XML Documents

There are a few ways of opening an XML file directly. You can open and edit XML files with any text editor, view them with any web browser, or use a website that lets you view, edit, and even convert them to other formats. You can also use applications such as "oxygen" or "XML Notepad" to see your files' structures. In this section, we use "XML Notepad" for our demonstration.

For example, after saving the XML code given above as an example with the *.xml extension in any text editor, when you open the file with XML Notepad, it looks as shown in Figure 4.5. It just does nothing because XML is just information wrapped in tags. A piece of program should be written to send, receive, store, or display it. When you view your XML document in a browser, most browsers display an XML document with color-coded elements (See Figure 4.5 below comparing the document in Mozilla and Internet Explorer browsers). Often a plus (+) or minus (-) sign to the left of the elements can be clicked to expand or collapse the element structure. To view XML source code, try to select "View Page Source" or "View Source" from the browser menu you use.

**Figure 4.5: XML Document on Browsers – Mozilla and Internet Explorer**  
Compares how the same XML file appears in two different browsers. Both show the XML structure with expandable/collapsible elements. The Mozilla browser view shows the XML declaration and root element with [+] signs to expand. The Internet Explorer view shows a similar structured display with [+] signs next to each element.

**Figure 4.6: XML document view on XML Notepad**  
Shows XML Notepad editor displaying the XML document in Tree View on the left pane, showing the hierarchical structure of people > person > name > first/last. The right pane shows the XSL Output view with the formatted XML code. The interface includes a menu bar with File, Edit, View, Insert, Window, Help options.

**Notes:** XSL is a style sheet for XML as CSS is a style sheet for HTML. XSL transforms and renders XML document (See Figure 4.6).

### Activity
1. Write the above XML on any text editor and save it as test.xml. Then open the test.xml using at least two browsers and note what you have observed.
2. Use the file created in Activity 4.3 Question 2 and open the test.xml using XML Notepad editor and see the result – in Tree View and XSL Output.

**Hint:** Don't forget to add XML declaration statement at the beginning. `<?xml version="1.0" encoding="UTF-8"?>`

### Syntax rules to be remembered while working on XML:

1. **You should have one root:** XML documents must contain one element that is the parent of all other elements.
   * A. `<A><X>...</X><Y>...</Y></A></X>` is wrong because the root tag starts with `<A>` and ends with a different tag `</X>`
   * B. `<A><X>...</X><Y>...</Y></A>` is correct because the root tag starts with `<A>` and ends with the same tag `</A>`

2. **XML elements are case sensitive**
   * A. `<name>Ibrahim</Name>` is wrong
   * B. `<NAME>Ibrahim</Name>` is wrong
   * C. `<Name>Ibrahim</Name>` is correct

3. **All elements should not overlap, and they must properly be nested within each other**
   * A. `<Name><Student>Almaz</Name></Student>` is wrong
   * B. `<Student><Name>Almaz</Student></Name>` is wrong
   * C. `<Student><Name>Almaz</Name></Student>` is correct

4. **XML attribute values must always be quoted.** The XML elements can have attributes in name-value pairs which are similar to HTML.
   ```xml
   <note date="12/11/2007">
       <to>Gebre</to>
       <from>Almaz</from>
   </note>
   ```

5. **Comments in XML:** The syntax for writing comments in XML is similar to that of HTML
   * E.g. `<!--This is a comment -->`

6. **XML does not truncate multiple white-spaces.** In HTML, multiple white-spaces are truncated to a single white-space.
   * **XML:** `<name>Motherland Ethiopia</name>` displays as "Motherland Ethiopia" (preserves all spaces)
   * **HTML:** `<p>Motherland Ethiopia</p>` displays as "Motherland Ethiopia" (truncates multiple spaces)

7. **Entity References:** In XML, some characters have special meaning. For example, a character like "<" inside an XML element will generate an error. This is because the XML parser interprets `<` as the start of a new XML element. See the example below:
   ```xml
   <Message>if salary < 1000 then</Message>
   ```
   This generates an XML error.

   To avoid this error, replace the "<" character with an entity reference as:
   ```xml
   <Message>if salary &lt; 1000 then</Message>
   ```
   This is correct.

   There are 5 pre-defined entity references in XML. See these references in Table 4.1 below.

**Table 4.1: Entity References in XML**

| Entity Reference | Character | Description |
| :--- | :--- | :--- |
| `&lt;` | `<` | less than |
| `&gt;` | `>` | greater than |
| `&amp;` | `&` | ampersand |
| `&apos;` | `'` | apostrophe |
| `&quot;` | `"` | quotation mark |

**Notes:** Only the characters "<" and "&" are strictly illegal in XML. The greater than character is legal, but it is a good habit to replace it. Therefore, XML documents that conform to the syntax rules above are said to be "Well Formed" XML documents.

### Activity 4.5

Examine the following XML code and rewrite it if the code is wrong.

| XML code to analyze | Corrected XML code |
| :--- | :--- |
| `<Name>Lucy</name>` | `<Name>Lucy</Name>` |
| `<Id>Edossa</iD>` | `<Id>Edossa</Id>` |
| `<date>Date of Birth</Date>` | `<date>Date of Birth</date>` |
| `<condition>10>5</condition>` | `<condition>10&gt;5</condition>` |
| `<Name>Robso Amanueal` | `<Name>Robso Amanueal</Name>` |

### Element Declarations

XML documents consist of three things: elements, entities, and control information. Elements are surrounded by tags like HTML. The content of the document has a structure imposed by the rules of XML although this structure is quite loose. Each document has a single root element that contains all of the other markups. You have already learned this point in HTML where all documents are enclosed inside `<html></html>` tags. The document is then composed of several sections, each of which is enclosed between tags. The sections themselves are also composed of tags.

An XML element is everything from the start tag to the end tag of the element. An element without content is said to be empty element. An empty element can be described in one of the following ways:
```xml
<element></element>
```
or
```xml
<element />
```

### Naming rules of XML elements:
* Element names are case-sensitive.
* Element names must start with a letter or underscore.
* Element names cannot start with the letters XML.
* Element names can contain letters, digits, hyphens, underscores, and periods.
* Element names cannot contain spaces.

Any name can be used, but no words are reserved (except 'xml' prefix).

**An element can contain:**

| Can contain | Example of XML |
| :--- | :--- |
| Text | `<title>Stories and Parables</title>` |
| Attributes | `<book isbn="12345">` |
| Other Elements | `<book><title>Kebede Michael</title><year>2007</year><price>Birr150.00</price></book>` |
| A mix of the above | `<book title="Ethiopian History"><author>Kebede</author><price currency="Birr">150</price></book>` |

**Figure 4.7: XML Elements vs. Examples**  
Shows an XML document structure with a root element `<bookstore>` containing `<book>` elements, which in turn contain `<title>`, `<author>`, `<year>`, and `<price>` elements. Demonstrates nested elements with text content.

In the Figure 4.7 above:
* `<title>`, `<author>`, `<year>`, and `<price>` have text content because they contain text. E.g. Kebede Michael.
* `<Bookstore>` and `<Book>` have element contents because they contain elements.
* `<Book>` has an attribute `isbn="001"`.

### Attribute Declarations

An XML element, like HTML, can have attributes. The element's attributes define data related to a specific element. Attributes provide additional information about the element. An attribute is defined as key-value pair: the key is the name (e.g. gender) and the attribute has values that must always be quoted (e.g. "female"). Either single quotation marks ('') or double quotation marks ("") can be used. For example, a person element's gender can be written like this:
```xml
<person gender="female">
```
or
```xml
<person gender='male'>
```

If the value of the attribute itself contains double quotation marks, use single quotation marks, as shown in this example:
```xml
<person name='Tilahun Gessesse "KomeLimerkish(ቆሜልመርቅሽ)"'>
```

**XML Elements vs. Attributes**

| Using Elements | Using Attributes |
| :--- | :--- |
| `<person><gender>female</gender><name>Anna Smith</name></person>` | `<person gender="female" name="Anna Smith"/>` |

In the first example of Figure 4.8, gender is an attribute. In the next example, gender is an element. Both examples provide the same information. There are no rules about when to use attributes or elements in XML.

### Entity Declarations

An entity is a declaration of a name that can be used in an XML in place of content or markup. Entities must be declared before they are used. All entities are declared with the "ENTITY" declaration. However, the exact format of the declaration distinguishes between internal, external, and parameter entities. The internal (parsed) entity declaration will be discussed for our purpose. The purpose of internal parsed entities is generally to refer to text. It refers to data that an XML processor has to parse.

**Figure 4.9: Entity Declaration**  
Shows the syntax for creating an entity declaration: `<!ENTITY publisher "Berhanena Selam Printing">`. This declares an entity named 'publisher' with the replacement content "Berhanena Selam Printing".

There are two parts to entities. The first is an entity declaration of a name that tie the replacement content. The above example declares an entity of the name 'publisher'. The name 'publisher' is associated with the content of "Berhanena Selam Printing". The second is using the name defined in the entity declaration subsequently in the XML as shown below. When the entity name is used in XML, it is called an entity reference.

```xml
<author>Addis Alemayehu</author>
<pubinfo>Published by &publisher;</pubinfo>
```

When the parser subsequently encounters an ampersand symbol (i.e. `&`) and semicolon (i.e. `;`) which identify a general entity reference, the parser looks up that name in an entity declaration table (See Figure 4.9). In our case, the reference, `&publisher;` is replaced by the content that it represents. Using the following (left column) XML, expanding the entity reference, and replacing the `&publisher;` with the "Berhanena Selam Printing" content gives the following expanded result.

**Figure 4.10: XML Document with DTD and Output on Browser**  
The left column shows XML code with internal DTD and entity declaration for 'publisher'. The right column shows the output displayed in a browser where `&publisher;` has been replaced with "Berhanena Selam Printing" in the final rendered content.

### Document Type Definition (DTD)

A Document Type Definition (DTD) defines the structure attributes of a document and the legal elements of an XML document. It can be used by an application to verify that XML data is valid. A DTD declared inside the XML file must be wrapped inside the `<!DOCTYPE>` definition. See Figure 4.11.

**Figure 4.11: Example of an XML document with internal DTD**  
Shows an XML document for an "album" with internal DTD that defines:
* `<!DOCTYPE album>` - defines the root element
* `<!ELEMENT album (singer, name, release, language)>` - defines album must contain four elements
* `<!ELEMENT singer (#PCDATA)>` etc. - defines each element type

The interpretation of the above DTD is:
* `!DOCTYPE album` - defines the root element of the document album
* `!ELEMENT album` - defines the album element which must contain four elements: "singer, name, release, language"
* `!ELEMENT singer` - defines singer element type "#PCDATA"
* `!ELEMENT name` - defines name element type "#PCDATA"
* `!ELEMENT release` - defines release element type "#PCDATA"
* `!ELEMENT language` - defines language element type "#PCDATA"
* **PCDATA** - means parsed character data. Think of character data as the text that is found between the start tag and the end tag of an XML element.

### Activity
* Write DTD for the following XML and test the output on a browser:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE textbook [
<!ENTITY author "Author: Addis Ababa">
<!ENTITY copyright "Copyright: Ministry of Education">
]>
<textbook>&author;&copyright;</textbook>
```

---

## 4.2 HTML vs. XML

### Brainstorming

Compare the features of HTML and XML.

HTML is the markup language that helps you to create and design web content. It has a variety of tags and attributes for defining the layout and structure of the web document. It is designed to display data in a formatted manner. An HTML document has the extension .htm or .html.

XML is a markup language that is designed to store data. It is popularly used for the transfer of data. It is case sensitive. XML offers you the ability to define markup elements and generate customized markup language. The basic unit in XML is known as an element, and the extension of an XML file is .xml.

### Table 4.2: Compares common features of HTML and XML

| Parameter | XML | HTML |
| :--- | :--- | :--- |
| Type of language | XML is a framework for specifying markup languages. | HTML is a predefined markup language. |
| Structural details | They are provided. | They are not provided. |
| Purpose | Transfer of data. | Display /Presentation of data |
| Nesting | It should be done appropriately. | It does not have any effect on the code. |
| Driven by | XML is content-driven. | HTML is format driven. |
| Size | Documents are mostly lengthy in size, especially when an element-centric approach is used in formatting. | The syntax is very brief and yields formatted text. |
| Learning curve | It is very hard as you need to learn technologies like XPath, XML Schema, DOM, etc. | It is a simple technology stack that is familiar to developers. |
| Coding Errors | No coding errors are allowed. | Small errors are ignored. |
| Extension | .xml (e.g. Page1.xml) | .html or .htm (e.g. Page1.html) |
| Whitespace Output | Whitespaces can be used in your code.<br>Example: `<name>Motherland Ethiopia</name>` displays as "Motherland Ethiopia" | White spaces cannot be used in your code.<br>Example: `<p>Motherland Ethiopia</p>` displays as "Motherland Ethiopia" |
| Language type | It is case sensitive.<br>Example: `<name>Lucy</name>` vs `<NAME>Lucy</Name>` are different | It is case insensitive.<br>Example: `<strong>Lucy<strong>` works the same as `<STRONG>Lucy</STRONG>` |
| Tag | Tags are defined as per the need of the programmer.<br>E.g. `<book><author><title>` | It has its own predefined tags.<br>E.g. `<body><b><i>` |
| End of tags | The closing tag is essential in a well-formed XML document.<br>E.g. `<Person><student><Name>Your name </Name></student></Person>` | The closing tag is not always required.<br>E.g. `<body><P> This is paragraph</body>` (P tag not closed) |
| Quotes | Quotation marks are required around XML attribute values.<br>E.g. `<Department><number type="int">101</number></Department>` | Quotation marks are not required for the values of attributes.<br>E.g. `<body bgcolor=#00ff00><p>This is paragraph</body>` |

### Activity
* Discuss the similarities and differences between HTML and XML with a partner.

---

## 4.2.1 Advantages and Disadvantages of XML

Some of the advantages and disadvantages of XML are listed below.

**Table 4.3: The Advantages and the Disadvantages of XML**

| Advantages of using XML | Disadvantages of using XML |
| :--- | :--- |
| XML makes documents transportable across systems and applications. With the help of XML, you can exchange data quickly between different platforms. It separates the data from HTML. It simplifies the platform exchange process. | XML requires a processing application. The XML syntax is very similar to other alternative 'text-based' data transmission formats which are sometimes confusing. No intrinsic data type support. The XML syntax is redundant. It does not allow users to create their tags (contradictory statement - should be: requires careful design). |

### Activity 4.8
Discuss the advantages and disadvantages of XML with a partner.

---

## 4.3 Publishing Website

### Brainstorming 4.3

What do you know about website publishing?

You have learned that the purpose of XML is for storing structured data, not formatting or styling a document. That is why you see on top of the browser "This XML file does not appear to have any style information associated with it" when you open your XML document (See Figure 4.5 above).

XML is just information wrapped in tags. So it is now time to write a piece of program to display our XML document. In the following discussion, you will learn how you put all of the XML document, web designing, and publishing concepts that you have learnt in Grade 11 together to develop further skills in website publishing.

### Step-by-Step design of XML document and publishing

So far, it has been discussed that HTML tags are not understood by XML coding. If that is the case, we can have our own customized tag names for the specific environment rather than predefined HTML tags. Let us take a 'college' environment and organize the contents of the college documents using an XML structure.

To start your coding, you should write an XML declaration statement at the beginning to indicate that it is an XML language by using `<?Xml version ="1.0" encoding="UTF-8"?>`, as shown in the example below.

Instead of `<html>`, we can start our root to be `<College>`. This shows that the initial data or root for our XML is going to be college.

**Figure 4.12: XML with custom tags**  
Shows the basic XML structure with declaration and root element `<College></College>` displayed in XML Notepad's Tree View.

Save the above document with your name.xml (such as yourname.xml) and keep updating the data and save your document after each change.

The next step is to organize the data of the college. Different colleges can have different structures or organizations for their data. Here we organize the college in terms of departments. The college can have several departments; in our case, it has three departments. We create again an element named `<Department>` as a sub-element of the `<College>`. The information may be organized as follows (See Figure 4.13).

**Figure 4.13: College structure with Departments**  
Shows the XML Notepad view with `<College>` root containing three `<Department>` sub-elements, each empty, showing the hierarchical structure.

The departments in the college can have detail information. This may include the department name and the department number (See Figure 4.14). Before proceeding to other sub-elements of the department, we can fill in the content for the department name and number. For further processing, you can attach data type to your elements. If you see the first department as an example, the attribute or data type for the department number is an integer value. Therefore, you have to think about your data types.

**Figure 4.14: College structure with Data Type Added**  
Shows XML Notepad view with a more detailed structure. Under `<College>`, there's a `<Department>` with `<Name>`ICT`</Name>` and `<Number type="int">101</Number>`. Two more departments (Physics, Biology) are also shown with their numbers, demonstrating how to add attributes for data types.

Not only the name and number of departments can be added but also details of students, teachers, and courses. Each of these can also be created as sub-elements of the department as shown below in Figure 4.15.

**Figure 4.15: College Structure with Teachers' and Students' Data Added**  
Shows a comprehensive XML structure in XML Notepad with:
- College root
- Department (ICT) with Name, Number
- Sub-elements: Course (with Name, Number, Code, Credithour), Teacher (with Name, IDNO)
- Multiple departments listed (ICT, Physics, Chemistry)
- Detailed course information (Web Design, Programming, Organic Chemistry, Inorganic Chemistry)
- Teacher details (Abebe, Ayele with ID numbers)

Also, you can add teachers and students' data by creating sub-elements such as name, sex, age, etc.

Once you have designed your website, the next step is to publish it.

---

Until this point, you have learnt website design. Once you have completed the design of your website, the next step involves publishing the website so that the website is accessible worldwide by users.

Website publishing is the process of publishing the website's original content onto the Internet, or specifically onto a remote server. The term sometimes refers to the whole process of website design and publishing. This includes building and uploading websites, updating the webpages, and posting content to these webpages online. Web publishing includes personal, business, and community websites. The content meant for web publishing can include text, videos, digital images, artwork, and other forms of media such as audio.

The most common thing about any website is that it is represented by a root directory. A root directory contains folders to organize images (.jpg, .gif), style files (.css), and script files (.js) that are used in the website, and its index file (See Figure 4.16).

1. **root:** this is the top level or root folder that represents the website itself. It contains all other files and folders of the website. For example, moe.gov.et.
2. **index.html:** contains the main homepages of the site which are written in HTML. Web servers are by default set up to return to the index.html file if no file name is specified. For example, if you write moe.gov.et, it returns to moe.gov.et/index.html.
3. **pages folder:** this subfolder contains web pages of the site. For example: about, contact us, etc. The name could be anything related to the site.
4. **images folder:** this is the subfolder that contains all the images that are used on the site.
5. **CSS folder:** CSS code used to style the site resides in this folder. It includes, for example setting text and background colors.
6. **scripts folder:** this subfolder contains all the JavaScript code used to add interactive functionality to the site (e.g. buttons that load data when clicked).

**Figure 4.16: Sample website - directory and files organization**  
Shows a directory structure diagram with root folder containing: index.html, images folder, CSS folder, scripts folder, and pages folder.

A website is published by uploading website content or files onto the remote server which is provided by the hosting company or web host. Hosting companies provide web hosting services, which means providing online space for the storage of websites. A website is made available via World Wide Web (WWW). Web hosts must possess a web server. The web server is the actual location where your website resides. A web server may host single or multiple sites depending on what hosting service you have paid for.

The process of publishing a website also involves registering a domain name. A domain name is the part of your internet address that comes after "www". For example, in http://www.moe.gov.et/, the domain name is moe.gov. A domain name becomes your online business address, so care should be taken when selecting a domain name. Your domain name should be easy to remember and easy to type. It must be unique. If the one you want to use is taken or not available, domain registration fails, and you need to find another name.

A domain extension is made up of three letters (for example, .gov in the above URL) at the end of the internet address which is known as a top-level domain names. The most common domain extensions include:
* .com for commercial sites.
* .edu for educational institution.
* .gov for government institutions.
* .org for a non-profit organization.
* .mil for military.
* .net for network organizations.

### Security options

To keep your site safe and secure, a secure URL is needed. Particularly, if the site visitors are providing their private information, HTTPS is required, not HTTP. HTTPS (Hypertext Transfer Protocol Secure) is a protocol that is used to provide security over the Internet. To enable HTTPS, your website needs an SSL. SSL stands for Secure Sockets Layer which provides a secure online connection, and your website needs an SSL Certificate. SSL is also another necessary site protocol. It ensures your site visitor's personal information transfers between the website and your database are secure. SSL encrypts information (send from you/receive from the server) to prevent others from accessing and reading it while in transit.

To check whether a website is secure or not, you can type the website name into a browser address bar (e.g. ethiopia.gov.et) and notice one of the two results as shown below. A secure site displays a locked keypad (See the image in the second column below). If the site is not secure, before the web address, you could see the information icon and 'Not secure' (see the image in the first column).

**Figure: Checking website security**  
Shows two browser address bar scenarios:
- **Not secure:** Address bar shows "Not secure | fruzenshtein.com" with an information icon
- **Secure:** Address bar shows "ethiopia.gov.et" with a locked padlock icon

---

## Activity 4.9
1. Based on the below website directory:
   a. What is the name of the website?
   b. Identify the root directory and sub-directory, image directory, style directory, home page, or index page.
2. Take the websites of five Ethiopian federal institutions and check if their websites are secured. Hint: moa.gov.et, mofed.gov.et, etc.
3. Review at least two web hosting companies in Ethiopia, with features provided.

---

## Unit Summary

In this unit, you have learnt about:
* The markup language XML.
* The definition of XML, its features, and purpose.
* Elements of XML.
* XML vs. HTML – similarities and differences.
* Advantages and disadvantages of XML.
* XML tags, root, XML declaration.
* Document Type Declaration (DTD), Attributes, Comments.
* Ways of opening XML file directly.
* Entity references and entity declarations.

---

## Key Terms

* **A markup language** is a type of computer language that uses tags such as "<" and ">" to define elements in a document.
* **XML** stands for Extensible Markup Language which is a way to apply structure to a web page. XML provides a standard open format and mechanisms for structuring a document so that it can be exchanged and manipulated.
* **An XML document** contains the following: XML declaration, Document Type Declaration (DTD), Internal DTD subset, XML information set /Content, Root element, Tags, Data, Attributes, and Comments.
* **Points to remember while you work on XML:**
  * You should have one root in an XML document.
  * XML elements are case-sensitive.
  * XML should not overlap or all elements must properly be nested within each other.
  * XML attribute values must always be in quotation marks.
  * Comments in XML follow the HTML comment structure.
  * XML does not truncate multiple whitespaces.
  * Special characters need entity references, otherwise, they create errors.
* **HTML and XML** are two different markup languages. HTML is the markup language to design and create web content, whereas XML is a markup language designed to store data. It is popularly used for the transfer of data. However, the two complement each other.
* **Entity References:** This refers to characters that have special meaning in XML. There are 5 pre-defined entity references in XML, such as `&lt;` (<), `&gt;` (>), `&amp;` (&), `&apos;` ('), and `&quot;` (").
* **You can open and edit XML** with any text editor, and view it with any web browser, or use a website that lets you view, edit, and even convert it to other formats.
* **In DTD** the `!DOCTYPE` defines the root element of the document.
* **PCDATA** in `<!ELEMENT releases (#PCDATA)>` means parsed character data.
* **Advantages of using XML:** It makes documents transportable, separates data from HTML, flexible platform change process.
* **Disadvantages of using XML:** It requires a processing application, syntax sometimes confusing, no intrinsic data type, and redundant syntax.
* **Website publishing** is the process of publishing the website's original content on the Internet, or specifically on a remote server.
* **Websites are published** by uploading website content/files onto the remote server which is provided by a hosting company or a web host.
* **SSL and HTTPS** are protocols that provide security options that keep your site safe and secure. HTTPS is secured and prevents interceptions and interruptions from occurring while the content is in transit. The website requires an SSL certificate to enable HTTPS.

---

## Review Questions

### Part I: Match the items given under column B with associated items in column A

| A | B |
| :--- | :--- |
| 1. XML declaration | A. `<body>` |
| 2. HTML tag | B. Extension of XML document |
| 3. *.xml | C. Secured website |
| 4. https://www.moa.gov.et | D. `<DOCTYPE … [ … ]>` |
| 5. XML attribute | E. `<?xml version ="1.0" encoding="UTF-8" ?>` |
| | F. html |
| | G. `<student id='101'></student>` |
| | H. `<element/>` |

### Part II: Choose the correct answer from the given alternatives

1. Which of the following statement is true about XML?
   * A. Elements are not case-sensitive.
   * B. Quoting attribute is optional.
   * C. Elements may nest but not overlap
   * D. All of the above.

2. If you want to start XML coding, what is the correct declaration syntax for the version of an XML document?
   * A. `</xml version="1.0"/>`
   * B. `<?xml version="1.0"?>`
   * C. `<xml version="1.0">`
   * D. `<!Element />`

3. What does DTD stand for?
   * A. Dynamic Type Definition
   * B. Document Type Definition
   * C. Do The Dance.
   * D. Direct Type Definition.

4. One of the following does not conform to element naming rule in XML
   * A. `<Note>`
   * B. `<h1>`
   * C. `<1dollar>`
   * D. `<NAME>`

5. Among the available mark-up languages, XML is a complement to
   * A. HTML
   * B. XHTML
   * C. XQuery
   * D. PDF

6. Which of the following is incorrect?
   * A. The objective of XML is to replace HTML.
   * B. Attribute of element should be in single or double quotation marks.
   * C. Entity declaration is declared in DTD.
   * D. All XML documents should begin with XML declaration.

7. Which of the following provides secured web access for a website?
   * A. HTTP
   * B. XML
   * C. SSL certificate
   * D. HTML

8. Which of the following XML documents is well-formed?
   * A. `<firstElement>some text <secondElement>another text </secondElement></firstElement>`
   * B. `<firstElement>some text</firstElement><secondElement>another text</secondElement>`
   * C. `<firstElement>some text<secondElement>another text</firstElement></secondElement>`
   * D. `</firstElement>some text</secondElement>another text<-firstElement>`

9. An XML document is a well-formed XML document, when
   * A. contains a root element.
   * B. contains an element.
   * C. contains attribute.
   * D. contain entity.

10. Which one of the following is not the advantage of XML compared to HTML?
    * A. Browser interfaces are simple to build.
    * B. You can exchange data quickly between different platforms.
    * C. You can use many tags to make a webpage.
    * D. It is not object-oriented.

### Part III: Code Writing

Take the environment where you are living and design the data structure for a specific organizational or environmental concept. For example, you may take animal kingdoms and structure their data, you may take Kebele residences and structure their data, or any other you feel appropriate.

**Project:** if you take, for instance Kebele residences, based on that:
* Try to find the structure of the documents in the kebele system
* Develop different pages/documents of the kebele system