# Unit 3: Database Management

## Learning Outcomes

At the end of this unit, students will be able to:

- Define database
- Explain data models
- Describe data management approaches
- Recognize database entities, attributes and relationships
- Develop data models with Entity Relationship Diagram (ERD)
- Create and manage databases using Microsoft Access

## Unit Overview

Database management is a method used to organize data in a more effective way for easy management and use of data. In this unit you will learn the basics of database modelling and management. The unit covers concept of database, file-based and database approaches, relational data models, relational database, and database management with Microsoft Access.

## 3.1. Data Management Approaches

### Brainstorming

Discuss the types of data schools capture and how they manage it to run their day-to-day activities.

Data management is an integral part of our daily lives. Traditionally, data used to be managed manually using physical papers. As the size of data that organizations manage become larger and larger, computers have become instrumental for efficient management of data (see Figure 3.1).

**Figure 3.1: Paper-based vs Computerized systems**  
The image shows a comparison between paper-based and computerized systems. On the left side labeled "Unmanageable Data Paper-based system" showing scattered papers. On the right side labeled "Efficient Data Management Computerized system" showing a computer.

The first computer-based data management is a file-based data management approach. The database approach was introduced later and addressed the inherent weaknesses of the file-based approach.

### 3.1.1 File based data management

File-based data management is an approach in which data is stored in separate files without explicit relationships (see Figure 3.2). Data in different files is managed by different application programs. Any change to data requires modification of the program that uses the data. Changes made on the program may also require change in the file structure. In file-based data management approach, each department creates and processes its own files separately. For example, procurement and finance departments create and manage their own files.

**Figure 3.2: Architecture of the file-based data management**  
The image shows three applications (Application 1, Application 2, Application 3) each connected to separate files (File1, File2, File3) with arrows indicating data flow.

The file-based data management approach creates problems of data duplication and data inconsistency. For example, let us say employee data is stored both in human resource and finance departments. When human resource department modifies the employee records upon hiring new employees, it may not communicate the information to the finance department. As a result, different information about employees would be found in one organization. Such types of contradictions are caused by the fact that data in one file is not linked to data in other files of the same organization in the file-based approach. The isolation of data also makes retrieval of data of the entire organization a very difficult task. These problems led to the development of the database approach.

**Figure 3.3: Data redundancy in different departments**  
The image shows Finance Department and Human Resource Department both with separate "Employee Data" files, illustrating redundancy.

**Activity 3.1:**
1. Discuss the file-based data management approach
2. Discuss the main limitations of the file-based approach to management of data in an organization

### 3.1.2 Database approach to data management

In the database approach to data management, data is managed by a database using a database management system (DBMS) software. A database is a collection of logically-related data. It stores all organization's data in one repository. A database is created to address the data requirements of different user groups and application programs in an organization.

Database is an essential resource to every organization. It is used to maintain internal records of organizations such as student records for schools, customer records and daily sales records for supermarkets, patient database for hospitals and the like (see Figure 3.4). Data in the database are used to generate different information that are used in the daily business activities. For example, the salesman in a supermarket uses database to generate daily or monthly sales reports. Hospitals may generate report that shows the most frequent disease types in the last year.

**Figure 3.4: Databases for different organizations**  
The image shows icons for different organizations and their databases: School (Student Database), Supermarket (Shopper Database), Hospital (Patient Database), and Bank (Customer Database).

DBMS is software that manages databases. DBMS is used to add new data, modify data and delete data in the database. It is also used to retrieve data from the database. DBMS essentially serves as an interface between the database and end users or application programs. It ensures that data is easily accessed by potential users.

The database management process has three main components (see Figure 3.5). At the bottom is the database which stores the actual data. In the middle is a DBMS which manages the database. At the top of the DBMS are application programs that use the database. The application programs submit database query to the DBMS. Then, the DBMS retrieves data that matches the queries and replies retrieved data to the application programs.

**Figure 3.5: Database Architecture**  
The image shows a three-tier architecture: Application1, Application2 with Users (User1, User2, User3) at the top, DBMS in the middle, and Database at the bottom with arrows showing data flow.

The database approach to data management provides many advantages to the organization. Some of the advantages are:

- **Data independence:** A database is created to store all organization data and support all users of the organization. Each user or department does not need to manage its own isolated data.
- **Data sharing:** All organization's data is stored in one central database. DBMS allows this central database to be accessed by different users.
- **Avoiding data redundancy:** Isolated departmental files are stored in one central database. The DBMS can retrieve data from multiple tables so as to meet the requirement of different database users or application programs.
- **Improved data security:** Data in the database is accessed only by authorized users. Only users who are given data access right can access and modify data in the database.

**Activity 3.2:**
1. What are the benefits of a database as compared to file-based data management approach?
2. Why do organizations need to store data in the database?
3. What is the purpose of the DBMS?

## 3.2. Data Model

Data model of a database is the blueprint of the database. It is used as a guide to store data in a database. It shows database entities, attributes and the relationships between the entities. It also specifies what data to store in the database. For example, a school database stores data about students and teachers. It does not need to store data about patients or traffic accidents. These data do not have relevance to the school's day-to-day activities. Likewise, hospitals store data about patients and diseases.

### 3.2.1 Basic Concepts in Data Modelling

The basic concepts of entity, relationship and attribute are discussed below:

- **Entities** are basically people, places or events about which you want to store data. For example, banks may keep data about customers and bank account entities. Similarly, a library may have entities like book, loan and borrower. Entities are equivalent to tables when implemented in the database.
- **Attributes** are properties of an entity that are used to differentiate one entity from other entity. For example, customer entity may have customer id, name, sex and address as its attributes. On the other hand, book entity may have author name, book title and publication year as its attributes. The two entities have different attributes because they are different entities.
- A **relationship** is an association between entities. For example, customer has account in a bank. The verb 'has' indicates the relationship between customer and bank account entities.

The relationship between entities can take different forms:

- **One-to-one relationship:** An instance of an entity has only one instance in the other entity with which it is associated (see Figure 3.7). For example, a country and a capital city. A country is associated with one capital city, and a capital city is associated with only one country.

**Figure 3.7: One-to-one relationship type**  
The image shows two rectangles labeled "Country" and "Capital City" connected by a line labeled "has" with "1" and "1" cardinality notation.

**Note:** Instance of an entity refers to a single occurrence of an entity. For example, "Addis Ababa" is an instance of the entity Capital City.

- **One-to-many relation:** An instance in one entity is associated with many instances in the other related entity (see Figure 3.8). For example, a department called 'Computer Science' is associated with multiple students.

**Figure 3.8: One-to-many relationship type**  
The image shows two rectangles labeled "Department" and "Student" connected by a line labeled "has" with "1 n" cardinality notation.

- **Many-to-many relationship:** Instances on both sides of the relationship are associated with multiple instances of the other entity (see Figure 3.9). For example, an employee may work in multiple projects. At the same time, a project may have multiple employees assigned to it.

**Figure 3.9: Many-to-many relationship type**  
The image shows two rectangles labeled "Employee" and "Project" connected by a line labeled "works" with "n m" cardinality notation.

**Activity 3.3:**
Explain the differences between entities, attributes, and relationships.

### 3.2.2 Entity Relationship Diagram

One of the popular representation tools for data model is Entity Relationship Diagram (ERD). ERD is used to visually represent a data model. It has three main components discussed in Section 3.2.1, namely entity, attribute and relationship.

Entities are represented as a rectangle and relationships as a line to show the association between entities. Attributes are represented as ellipses. The names of entities and attributes are placed inside the rectangle and the ellipse respectively. The names of relationships, on the other hand, are placed right on top of the line.

**Figure 3.10: Entity Relationship Diagram**  
The image shows an ERD with two entities: "Student" (with attributes student_id, name, age, address represented as ellipses) and "Book" (with attributes book_id, book_title, publication_year represented as ellipses). They are connected by a "borrows" relationship line.

As Figure 3.10 shows, student entity has student_id, name, age and address attributes. On the other hand, book entity has book_id, book_title, publication_year attributes. The two entities are related by 'borrows' relationship.

**Activity 3.4:**
1. Describe the purpose of ERD.
2. Assume that teachers are assigned to a class schedule in your school. The Teacher entity has teacher_id, name, sex, and specialization attributes. The Schedule entity has schedule_id, room, period, and section attributes. Construct an ERD based on the description given.

### 3.2.3 Relational Data Model

The relational data model represents data in terms of two-dimensional tables called relations. A relation is nothing but a table of rows and columns. Each row, also called a record or tuple, contains a unique instance of data. These rows in the relation denote a real-world entity. The columns in a relation, also known as attributes or fields, are used to describe the properties of relations. Figure 3.11 shows an example of a student relation.

**Figure 3.11: Student relation**  
A table showing Student relation with columns: Student ID, Name, Sex, Grade, Address and rows of data:
- ST001 | Brook Assefa | M | 12 | Kebel 05
- ST002 | Chaltu Bayissa | F | 11 | Kebele 01
- ST003 | Ali Mohammed | M | 10 | Kebel 03
- ST004 | Tsion Gabissa | F | 10 | Kebele 01

The relational data model provides conceptual tools to represent a data model of a relational database. A relational data model captures a collection of relations, their attributes, and their relationships. See Figure 3.12.

**Figure 3.12: Relational data model**  
The image shows three tables: Book_Loan table (with book_id → student_id, loan_date), Student table (student_id, sex, grade, address), and Book table (book_id, book_title, publication_year). Arrows show relationships via student_id and book_id.

**Note:** Figure 3.12 shows that student relation has student_id, sex, grade and address attributes. On the other hand, Book_Loan relation has book_id, student_id and loan_date attributes. Student and Book_Loan relations are related via the student_id attribute that is placed in the Book_Loan relation. In the same way, Book relation is related with Book_Loan relation via the book_id attribute placed in the Book_Loan relation.

### 3.2.4 Relational Database

Relational database is a type of database that contains logically related set of tables. The rows in a table are called records, and the columns are called fields or attributes. Relational database is implemented using relational database management system (RDMS) software. The following three tables are used to show implementation of a relational database (see Figure 3.13).

**Figure 3.13: Relational database**  
Three tables are shown:

**Student table (Primary key: Student ID)**
| Student ID | Name | Sex | Grade | Address |
|------------|------|-----|-------|---------|
| ST001 | Brook Assefa | M | 12 | Kebele 05 |
| ST002 | Chaltu Bayissa | F | 11 | Kebele 13 |
| ST003 | Ali Mohammed | M | 10 | Kebele 05 |
| ST004 | Tsion Gabissa | F | 10 | Kebele 08 |

**Book loan table (Primary key: Book_Loan_No, Foreign keys: Book ID, Student ID)**
| Book_Loan_No | Book ID | Student ID | Loandate |
|--------------|---------|------------|----------|
| BL0001 | B001 | ST001 | 12/5/2021 |
| BL0002 | B002 | ST002 | 10/6/2021 |
| BL0003 | B003 | ST001 | 3/12/2021 |

**Book table (Primary key: Book ID)**
| Book ID | Author | Title of book | Year |
|---------|--------|---------------|------|
| B001 | Hana Bekle | Introduction to Physics | 2004 |
| B002 | Dania Kedir | Organic Chemistry | 2015 |
| B003 | Kebede Yohannes | Java Programming | 2020 |

**Note:** The above three tables in Figure 3.13 have a primary key. A Primary Key is a field which has a unique value for each record. For example, student_ID serves as a primary key for the Student table because no two students can have the same ID.

- The relational database uses Foreign Keys as a navigational link to retrieve data from related tables. A foreign key is an attribute in a table that matches the primary key of another related table. Student_ID and Book_ID in Book_Loan_Table are foreign keys. They are used to link Student table and Book table respectively to the Book_Loan table.

**Activity 3.5:**
Two tables are provided:

**Table 1:**
| Code | Country | Population | Area (Km²) |
|------|---------|------------|------------|
| ET | Ethiopia | 114,963,588 | 1,000,000 |
| EG | Egypt | 102,334,404 | 995,450 |
| TN | Tanzania | 59,734,218 | 885,800 |
| KY | Kenya | 53,771,296 | 569,140 |
| UG | Uganda | 45,741,007 | 199,810 |
| SD | Sudan | 43,849,260 | 1,765,048 |

**Table 2:**
| City | Population | Code |
|------|------------|------|
| Addis Ababa | 2,757,729 | ET |
| Omdurman | 1,200,000 | SD |
| Cairo | 7,734,614 | EG |
| Gondar | 153,914 | ET |
| Bahir Dar | 128,306 | ET |
| Kisumu | 216,479 | KY |
| Khartum | 1,974,647 | SD |
| Mombasa | 799,668 | KY |
| Nairobi | 2,750,547 | KY |

Answer the following questions based on the tables given:

1. What are the entities in the above tables? Give a name for each table that represents the content of the data.
2. What is the attribute that is used to link the two tables?
3. How many fields does the first table have?
4. List the cities that are found in Kenya.
5. Create a new table that contains country name, city name and city population attributes.
6. Create an ERD diagram with the relationship.

## 3.3. Creating Relational Database in Microsoft Access

This section explains how to create and manage a database on Microsoft (MS) Access. Relations or entities are represented as database tables. Attributes are represented as table fields. Figure 3.14 shows the required transformation between relations in the relational data model and MS Access database tables.

**Figure 3.14: Transformation of entity into Microsoft Access database table**  
The image shows a transformation from "Student entity" to "Student table" with mapping:
- Attribute name → Field name
- student_id → student_id (Text)
- student_name → student_name (Text)
- Sex → sex (Text)
- Grade → grade (Number)
- Address → address (Text)

The data type column indicates the type of data to be stored for the respective field. For example, student name field, as shown in Figure 3.14, has Text data type while grade is assigned Number as its data type.

### 3.3.1 Creating Microsoft Access Database

When you work on Microsoft Access, creating a database is the first step. In MS Access, a database is a container of database objects such as tables, forms, queries and reports. There are different versions of MS Access software to create and manage databases. In this textbook, you will learn how to create and manage database objects using MS Access 2010.

In order to create a database, follow the following steps:

1. Open MS Access Software
2. In the main Window, click on Blank database
3. Enter the database name in the File Name input box. (When giving a name to the database, it is highly recommended to use names that properly describe the data stored in the database.)
4. Click on the Create button.

After the database is created, another MS Access window is opened where database objects can be created. Before other database objects are created, a table object must be created. A table is a set of fields that store data about a certain entity.

We use the following tables in Figure 3.15 for the following practical activities in MS Access:

**Figure 3.15: Sample Tables**

**Student table**
| Student_ID | Sname | Sex | Age | Grade_level |
|------------|-------|-----|-----|-------------|
| ST0001 | Brook Assefa | M | 17 | 11 |
| ST0002 | Chaltu Bayissa | F | 18 | 12 |
| ST0003 | Giday Hagos | M | 15 | 9 |
| ST0004 | Nejat Mohammed | F | 17 | 11 |
| ST0005 | Hailu Mekonnen | M | 16 | 9 |
| ST0006 | Kedir Ali | M | 18 | 12 |

**Teacher table**
| Teacher_ID | tname | sex | age | specialization |
|------------|-------|-----|-----|----------------|
| T0001 | Oljira Kuma | M | 42 | Biology |
| T0002 | Hagos Kiros | F | 35 | Chemistry |
| T0003 | Rediet Assefa | F | 28 | Mathematics |
| T0004 | Ahmed Yusuf | M | 27 | Physics |
| T0005 | Delebo Nurye | M | 26 | IT |

**Grade table**
| Student ID | Teacher_ID | subject | grade |
|------------|------------|---------|-------|
| ST0001 | T0001 | Biology | 75 |
| ST0001 | T0002 | Chemistry | 86 |
| ST0002 | T0002 | Chemistry | 70 |
| ST0001 | T0003 | Mathematics | 95 |
| ST0001 | T0004 | Physics | 65 |
| ST0003 | T0002 | Chemistry | 82 |
| ST0002 | T0003 | Mathematics | 78 |
| ST0001 | T0005 | IT | 90 |
| ST0002 | T0001 | Biology | 67 |

### 3.3.2 Creating Table in Microsoft Access

When you create a new table, Microsoft Access asks you to define table fields. Table fields are entity attributes. One or more tables can be created in one database. Each table name must be unique. The tables must also have two or more fields. Field names must be unique in a table.

Follow the following steps to create a table in MS Access:

1. Open a database file.
2. Click on Table Design button from the Create menu.
3. Enter field names for the new table such as Student ID, Sname, Sex, Age and Grade_level (see Figure 3.15).
4. Specify the data type of the field. The data type can be text, number, date/time, currency, etc. depending on the type of data that the field is used to store.
5. When you finish, click on the Save button.
6. In the popup that is displayed, enter the table name and click on the OK button.

**Note:** When you want to create a new table or add data into or modify an existing table, you must first open the database in which you want to store your database objects. This is important because there can be more than one database in a single computer.

- When you define a field to a table, you must specify the appropriate data type for a Field name. The data type could be text, number, date and currency. Data types are one form of validation mechanisms that ensure the correctness of data in the database. If you set the data type as Text, it will not accept its data as Number or any other type. Only text is a valid value to store.

- To set the field as primary key, go to the table design view, select the field and click on Primary Key (🔑) button in the Toolbar.

Follow the following steps in order to enter data into a database table:

1. Open a database if it is not already opened
2. Click on the table name and select Datasheet View from View in the toolbar. For example, open student table.
3. Enter appropriate values for each field.
4. Enter all the records of the Student table shown in Figure 3.15. (See Figure 3.16)

**Figure 3.16: Adding records to a table**  
The image shows a Microsoft Access datasheet view with fields: Student_ID, Sname, Sex, Age, Grade_level and sample data rows.

**Activity 3.6:**
1. Create a database by your school's name.
2. Create the three tables shown in Figure 3.15 in the new database you created.

### 3.3.3 Creating Query in Microsoft Access

Query is a database object that provides a custom view of data from one or more tables. It is a way of searching for and compiling data from one or more tables. In MS Access, data is retrieved through query by creating graphical query or writing Structured Query Language (SQL) statements. In this section, you will learn how to retrieve data using graphical query. A query is used to define specific search conditions to find exactly the data you need.

Follow the following steps in order to create a query in Microsoft Access:

1. Open a database where your database tables are stored
2. Click on Create menu button. Then, you get the following MS Access toolbar

**Figure 3.17: MS Access toolbar**  
The image shows the MS Access ribbon with tabs: File, Home, Create, External Data, Database Tools. Under the Create tab, there are sections for Tables, Queries, Forms, Reports with various buttons like Table Design, Query Design, Form Design, Report Design.

You can create query using Query Wizard or Query Design. Let us see how to create a query using Query Design.

3. Click on Query Design button from Microsoft Access toolbar
4. Select a table or tables from Show Table box from which you want to select records for your query (See Figure 3.18), and click on OK button. You then get the following Query Design Window

**Figure 3.18: Query Design Window**  
The image shows the Query Design interface with a Show Table dialog box listing available tables (student, grade, teacher). Below is the query design grid with Field, Table, Sort, Show, and Criteria rows.

5. Select the fields in the Field row. For example, if you want to select only sname and sex field, select sname in the first column and sex in the second column of the Field row.
6. Select Datasheet View from the toolbar to see your query results (see Figure 3.19). If you do it correctly, you get the following results

**Figure 3.19: Query Results**  
The image shows query results displaying fname (student names) and sex columns with data: Brook Assefa M, Chaltu Bayissa F, Kedir Ali M, Giday Hagos M, Nejat Mohammed F, Hailu Mekonnen M.

**Activity 3.7:**
1. Create a query that displays teacher name and specialization from the teacher table (Figure 3.15). Save your query as Teacher_Specialization.
2. Create a query that displays student name and grade level from student table (Figure 3.15). Save your query by an appropriate name.

### 3.3.4 Adding Criteria to Query Design

By adding additional criteria to a query design, it is possible to retrieve specific data from a table.

Follow the following steps in order to add criteria to a query:

1. Open the Query Design Window.
2. Add a table to query design window.
3. Select fields to be displayed in Query Result Window.
4. In the Criteria row, enter query selection criteria. For example, if you want to display only Male students, under Sex column, enter M as your query selection criteria (See Figure 3.20)

**Figure 3.20: Query Design with a Criteria**  
The image shows the Query Design grid with fname and sex fields selected. In the Criteria row under sex column, "M" is entered.

**Note:** The criteria you enter in the criteria row must be exactly the same with the data stored in the table. For example, if sex data is kept in the table using a single character (for example m), you cannot get the required result if you enter Male.

### 3.3.5 Selecting Data from Multiple Tables

The power of a relational database is that it allows you to retrieve data from two or more tables.

Follow the following steps in order to select data from multiple tables:

1. Open the Query Design window.
2. Add a table to the Query Design window. If Show Table window is not displayed, click on Show Table button from the Toolbar. You will have a list of tables in the Show Table Box.
3. Select a table and click on Add button to add the table into Query Design Window.
4. Repeat step 3 to add more tables.
5. Establish a relationship between the tables by dragging the primary key field in the Parent table to the Child Table (See Figure 3.21)

**Figure 3.21: Query Design with Multiple Tables**  
The image shows the Query Design window with three tables (student, grade, teacher) displayed with relationship lines connecting them. The student_ID field from student table is linked to Student ID in grade table, and teacher_ID field from teacher table is linked to Teacher ID in grade table.

6. Select the fields to be displayed in Query Datasheet View. For example, we want to select student name (fname) from student table, subject and grade from grade table, and teacher name (tname) from teacher table.
7. Choose the Save button from the File menu to save your query.
8. Enter a file name for the new Query, and click on the OK button.
9. Click on the View button in the Toolbar to see the query results (see Figure 3.22)

**Figure 3.22: Query Results from Multiple Tables**  
The image shows a query results table with columns: fname (Brook Assefa, Chaltu Bayissa, Nejat Mohammed...), subject (Biology, Chemistry, Mathematics...), grade (75, 86, 95...), and fanme (Olgira Kuma, Hagos Kiros, Rediet Assefa...).

**Activity 3.8:**
1. Create a query in the student database that lists female students. Save the query as Female_Students.
2. Create a query that selects data from student and grade table. Display only student name from student table, and subject and grade from grade table. Save the query as Student_Grades.
3. Create a query that lists students who scored above 85 in all subjects.

## Unit Summary

In this unit, you have learnt about:

- What is meant by Emerging Technologies
- What is meant by a database
- File based data management
- Database approach for data management
- What is meant by database management system (DBMS) software
- The different benefits of the database approach for data management
- What is meant by data models
- The structure of relational data model
- ERD as a data model representation tool
- What is meant by entity, attribute, and relationship
- The different types of relationships between entities
- Implementation of relational database on Microsoft Access
- Creation of Tables in Microsoft Access
- Creation of Query in Microsoft Access
- Selection of data from two or more tables using Microsoft Access Query

## Key Terms

**Attributes** are properties of entities that are used to describe the entities. Attributes are also called fields.

**Data model** is a blueprint of the database.

**Database** is a shared collection of logically related data.

**DBMS** which stands for database management system is a software which is used to create and manage databases.

**Entities** are people, places, or things about which you want to keep information in a database.

**Entity Relationship Diagram (ERD)** is a visual representation tool for data models.

**Field** refers to a column of a table in the database table. It is similar to an attribute in the logical data model.

**File based data management** is a system of data management based on a single file.

**Foreign key** is an attribute in a table that matches the primary key of another related table.

**Microsoft Access** is relational DBMS software. It is used to manage databases.

**Primary Key** is a field which has a unique value for each record in a table.

**Record** is a row in a database table. It stores data about one real-world object represented in a table.

**Relational data model** is a type of data model that represents data in terms of two-dimensional tables called relations.

**Relational database** is a type of database that contains a logically related set of tables.

**Relationship** is an association between entities.

## Review Questions

### Part I: Write True if the statement is correct and False if it is incorrect

1. A database is a collection of related data.
2. A database approach improves data sharing.
3. ERD is a visual representation of data model.
4. There is only one type of relationship between entities in the ER model.
5. Attributes are used to describe the characteristics of an entity.
6. Relational database stores data in one file.
7. A Primary key is an attribute that has duplicate values for different records in a table.
8. Tables are used to store data in Microsoft Access.

### Part II: Choose the correct answer from the given alternatives

1. _____ is used to store a logically related data.
   - A. file
   - B. database
   - C. data model
   - D. DBMS

2. The element of ERD that represents real-world things such as people, places, or events about which we want to store data is called:
   - A. attributes
   - B. database
   - C. relationship
   - D. entities

3. The properties of entities that are used to differentiate one entity from the other entity is called:
   - A. attributes
   - B. database
   - C. relationship
   - D. entity

4. _____________ is considered as a blueprint of a database.
   - A. attributes
   - B. database
   - C. data model
   - D. entities

5. In a relational data model, entities are represented as:
   - A. attributes
   - B. relations
   - C. data models
   - D. databases

6. ____ is a container of database objects in Microsoft Access.
   - A. field
   - B. database
   - C. table
   - D. form

7. A field which has a unique value for each record of a table is called:
   - A. foreign key
   - B. attribute
   - C. data type
   - D. primary key

8. One of the following is not a valid data type name for a field in Microsoft Access.
   - A. text or string
   - B. number
   - C. entity
   - D. date

9. A Query in Microsoft Access is used to:
   - A. store data for future use
   - B. select records from the underlying table that meet some search criteria
   - C. create a form to facilitate data entry
   - D. None

10. In order to retrieve data from two or more tables through query, we must establish a _____ between tables.
    - A. field
    - B. primary key
    - C. relationship
    - D. criteria

### Part III: Write short answers to the following questions

1. What is a database?
2. What are the basic elements of ERD?
3. What is a relational data model?
4. What is a one-to-many relationship? Give examples.
5. What is the use of table object in Microsoft Access?
6. What is the use of query in Microsoft Access?

### Part IV: Discussion questions

Answer the following case study questions in groups.

1. XY manufacturing company produces different types of products. The products are described by: product ID, product name, quantity, and price. The products are sold to different customers. The company also keeps track of its customers' information as customer ID, customer name, customer address. The customer makes orders to buy products from the company at different times. It is also necessary to keep order information, which includes order ID, product ID, customer ID, order quantity, and order date. Identify the entities, attributes, and relationships for the XY manufacturing company database and construct an ERD for the data model of XY manufacturing company.