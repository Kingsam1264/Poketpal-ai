# UNIT 3: DATABASE MANAGEMENT SYSTEM

## Learning Outcomes

At the end of this unit, students will be able to:
* Describe relational database management system
* Explain fields and records
* Apply SQL data definition language (DDL) to create tables in a database
* Differentiate between SQL data definition language (DDL), data manipulation language (DML), and data query language
* Apply SQL DML to manipulate records in tables
* Apply SQL DQL to query records of tables

## Unit Overview

In today's world, almost all information is stored in databases. In Grade 11, you learned that databases are an important part of organizations to manage their data. You also learned how to design a database. A database has a data model that determines the manner in which data can be stored, organized, and manipulated in the database. The focus of this unit is on the creation of a database. Technologies, knowledge, and skills needed to design the database are also discussed. The unit also shows how SQL (Structured Query Language) allows you to manipulate records of a database.

---

## 3.1 Overview of Relational Database Management System

### Brainstorming 3.1

What is a relational database management system?

The term Relational Database Management System (RDBMS) usually refers to various types of software systems developed in order to manage databases. RDBMS is used to create, maintain, and provide controlled access to a relational database.

A relational database is based on a relational data model. Data are stored in a two-dimensional table, which contains columns or fields and rows or records. Each column of a table represents an attribute or data value, and each row in a table represents a tuple or record.

A database contains one or more tables that maintain records. Attributes are the set of properties to describe the instances of the entity. For example, a student can be an entity. The attributes of a student can be described in terms of student id, name, age, grade level and sex. The table shown in Figure 3.1 below has five attributes (or pieces of data). A record is a row or a tuple in the table. It contains a single data value in each column.

**Figure 3.1: Example table with fields and records**  
The figure shows a sample table with columns labeled as fields (attributes) and rows labeled as records (tuples). Each record contains data values for each field, demonstrating the tabular structure of a relational database.

Each field in a table has to be given a name and data type. A data type is the type of data value you want to store in the field. For example, to populate this database you would use residence id to populate the residence id field. Here, we know that a residence id is mentioned as a four-digit number. The second field, first name, is used to store the first name. Name is an attribute stated in text form.

In the database, the data type best describes the fields in the table. For example, referring to Table 3.2, age can be input by an integer data type, price by float or real number, etc. (See Table 3.1).

**Table 3.1: Sample fields with appropriate data types and data values**

| Fields | Data type | Data values (Example) |
| :--- | :--- | :--- |
| Age | Integer | 19 |
| Name | Text | Abdu |
| Price | Real or currency | 32.5 |
| Date of Birth | Date | 10/12/2008 |
| Height | Integer or real | 175 or 165.6 |
| Grade level | Integer | 11 or 12 |
| Telephone number | Text | +251 900 00 00 00 |

All Database Management System (DBMS) provide data types from which to select and use to define the data type for fields of a table. For example, in MS Access, when you create a new database table, you specify what type of data is to be stored in each field. The data types include text, integer, real numbers, dates, currency and yes or no fields (See Figure 3.2).

**Figure 3.2: Sample data type in MS Access**  
The figure shows the MS Access table design view with fields listed and their corresponding data types (such as Text, Integer, Date/Time, Currency, etc.) that can be selected for each field.

The database in Figure 3.3 below has five tables: Students, MarkList, Subject, SubjectAssigned and Teachers. For example, the 'Students' table contains three fields: Sid, SName and FName. These are attributes that describe the student entity. The Students table has four records of which the first record has data value of S001, Chaltu, and Gemeda. In the Students table, the field Sid is a primary key. The data value of Sid is unique, meaning that a record with Sid S001 cannot be duplicated. In relational database, each table that has a key field (primary key) uniquely identifies each record. This key field can be used to create relationship and link one table of data to another. The Students table is linked with MarkList through the Sid field. This table, MarkList, consists of students' marks for the enrolled courses. A student who took four courses could have four mark records with same Sid (e.g. S004 in MarkList). Therefore, Sid in the table MarkList is not a unique key or primary key. The Sid in MarkList is referred to as a foreign-key. This key is used to create a relationship with the Students table which contains Sid as primary key.

Relational databases are the most popular databases and have been widely used for more than four decades. Examples of popular RDBMs include Microsoft Access, Oracle, Microsoft SQL Server, MySQL, SQLite, IBM DB2, and PostgreSQL.

**Figure 3.3: Relational Database model with sample data**  
The figure displays a relational database schema showing five interconnected tables: Students, MarkList, Subject, SubjectAssigned, and Teachers. Lines connecting the tables indicate relationships between primary and foreign keys, demonstrating how data is linked across tables.

### Activity 3.2
1. Describe the main features of RDBMs.
2. What is field in a table? Or give an example.
3. What is record in a table? Give an example.

### Activity

1. Give sample data value based on the data type described in the following table:

| Fields | Data type | Example |
| :--- | :--- | :--- |
| Book Title | Text |  |
| Email | Text |  |
| Sales Date | Date |  |
| Body temperature | Integer or real |  |
| Weight | Integer or real |  |
| Cost of material | Real or currency |  |
| Expire date | Date |  |
| Opening hour | Time |  |

2. Given a patient table, write three fields and their data types to describe a patient.

---

## 3.2 Database Manipulation Using SQL

### Brainstorming 3.2

What are the similarities and differences between SQL and other programming languages?

SQL (Structured Query Language) is a standard language for accessing and manipulating a database. SQL is a special-purpose query language meant for interacting with relational databases such as Microsoft Access. Understanding how SQL works can help create better queries and make it easier to understand how to fix a query that is returning unwanted results.

SQL consists of a number of commands with further options to allow you to carry out your operations with a database. Based on their purposes, three categories of SQL commands are presented:

* **Data Definition Language (DDL):** DDL contains commands that allow you to create or modify tables and establish relationship between tables in your database structure.
* **Data Manipulation Language (DML):** DML contains commands that are used to manage the database by performing operations such as inserting, updating, deleting, and navigating through data.
* **Data Query Language (DQL):** is used for querying or selecting all or subsets of data from a database.

In addition to the above SQL commands, the DBMS may give you other sets of commands to provide extra features. However, the three categories of commands are common and applicable in all DBMS.

### Activity

1. What SQL command can be used to:
   * create a table?
   * modify a table?
   * delete a table?
   * add a record to a table?
   * modify a record in a table?
   * remove a record in a table?

2. Categorize commands in question 1 under DDL, DML and DQL.

---

## 3.2.1 Using SQL in Microsoft Access

### Brainstorming

What applications are included in Microsoft Office package?

Microsoft Access is the default relational database program installed with the Microsoft Office package. It offers the functionality of a database, and the programming capabilities to create databases easily and navigate records. SQL command in Microsoft Access can be used to implement and manipulate data.

**Notes:** Check Microsoft Access is installed and its version. From Windows start button, click 'Windows' icon --> then 'All apps' icon --> from the list find and click on 'Microsoft Office'. You will see 'Access' followed by year (version) in the list if it is installed.

### Create a database

Launch Access from the Start menu just by typing access in the Search box as indicated in Figure 3.4. After starting Access, you are asked to write a name for your database.

**Figure 3.4: Launch Access from start menu**  
The figure shows the Windows Start menu search box with "access" typed in, displaying "Best match: Access" and "Access 2016" as a search result.

There are two ways of creating a database in Microsoft Access:
1. Create a Database from Template
2. Create a blank database

Select the second option to create a database from scratch.

### How to Create Table

The first step, after creating your database in Microsoft Access, is creating a Table for your data. Here are three ways of creating database tables in Access:
1. Create a Table from Design View
2. Create a Table from Datasheet View
3. Create table from SQL

**Figure 3.5: Start a Query in MS Access**  
The figure shows the MS Access ribbon interface with the "Create" tab selected, highlighting the "Query Design" button in the Queries group.

From the three ways of creating database tables, the third is discussed in this unit.

### How to write a query

In order to start writing a query, first you click on the Create tab, then click on the Query Design button (See Figure 3.5).

**Notes:** Close the Show Table dialog box that appears when you click the Query Design in the previous step.

Next, click on the Dropdown of the SQL View that appears on the left corner on the Windows and from the options displayed, select the SQL View (as shown in Figure 3.6). This opens the query writing windows. On this window, you can write your SQL commands (CREATE, SELECT, UPDATE, INSERT, etc.).

**Figure 3.6: SQL View in MS Access**  
The figure shows the Query Tools Design tab in MS Access with the "View" dropdown menu expanded, showing options including "Design View", "SQL View", "Datasheet View", etc., with SQL View highlighted.

### How to Run SQL Commands

After writing your query using SQL commands, you can save or run your query to see the results of the query. If there are errors in your query, Access shows you a pop-up window based on the error type. There are alternatives to run your SQL query:

**Alternative 1:** On the Design tab, in the Results group, click on the Run option (See Figure 3.7).

**Figure 3.7: Run view in MS Access**  
Shows the Query Tools Design tab with the "Run" button (red exclamation mark) highlighted in the Results group.

**Alternative 2:** Double-click the query you want to run. This works if you have already saved your query. For example, clicking on "Male Students" in Figure 3.8 runs the query that retrieves list of male students from the table.

**Figure 3.8: Queries view in MS Access**  
Shows the Access navigation pane with saved queries listed, including "Male Students", "Female Teachers with Salary more than...", etc. Double-clicking a query runs it.

### Activity 3.4
* Perform the following using Access:
  * Open MS Access
  * Create a blank database, name it Student_Info
  * Create a new query and save as 'student query'

---

## 3.2.2 Data Definition Language (DDL)

DDL is part of SQL that is used to create and restructure a database. Some of the most fundamental DDL commands include CREATE TABLE, ALTER TABLE, and DROP TABLE.

### CREATE TABLE Command

The CREATE TABLE command is used to create a new table in a database. The CREATE TABLE command provides various options to create a table. Table 3.2 illustrates the general syntax that is used to create a table.

**Table 3.2: SQL syntax for CREATE TABLE command**

| CREATE TABLE table_name (Column1 datatype [Primary Key], [Column2 datatype][REFERENCES table_name2(Column1)], [Column3 datatype], [Column4 datatype]...) |
| :--- |
| Where: |
| 1. CREATE TABLE is SQL command to create a table. |
| 2. table_name is a name for the table. E.g. Farmer |
| 3. Column1, Column2, Column3 are fields of the table. E.g. name, age, subject, etc. |
| 4. Optional [Primary Key] is a command to set unique identifier. |
| 5. datatype describes the type of data a field can store. E.g. CHAR, INT, etc. |

**Notes:** Each column in a table is required to define a name and a data type. Various DBMS might use different data type names. In some case, the name could be the same but different in their size and other details. Therefore, you need to always check their documentation.

Some of the more specialized data types that are used in SQL statement in Access are listed in Table 3.3.

**Table 3.3: Common data types used in MS Access**

| MS Access SQL data types | Description | Allowable data value or size |
| :--- | :--- | :--- |
| CHAR | This is used for text or combinations of text and numbers, including numbers which do not require calculating (e.g. phone numbers). If field size is ignored (e.g. Id CHAR), the field Id stores up to 255 characters. Alternatively, you can limit the size like Id CHAR(20). In this case the Id can store a maximum of 20 characters. Space is counted as one character. | Up to 255 characters. |
| TEXT | This is used for lengthy text or combinations of text and numbers. E.g. name TEXT or name TEXT(20). The later data type limit the size of characters that can be stored to be 20. | Up to 63,999 characters. |
| INTEGER or INT | This data type allows to store long integer data. E.g. populationSize INTEGER or populationSize INT. This data type does not allow users to specify or limit size | -2,147,483,648 to 2,147,483,647 |
| DATETIME | This is used to store Date and time values for the years 100 through 9999. E.g. DoB DATETIME. The date can be described in 'dd-mm-yyyy' or 'yyyy-mm-dd' form. Both date and month should be described with two digits, whereas year should be described with four digits. E.g. '10-12-2020' or '2020-12-10' where 10 describes date, 12 describes month and 2020 describes year. The Time value can be described in 'hh:mm' or 'hh:mm:ss' form. E.g. '10:20' or '10:20:10'. | DATE from 01-01-100 to 31-12-9999 and TIME from 01:00:00 to 23:59:59 |
| CURRENCY | This is used for currency or monetary value. Currency value and numeric data are used in mathematical calculations. | 8 bytes |
| COUNTER | This is a unique sequential (incremented by 1) number or random number that is assigned by Microsoft Access whenever a new record is added to a table. | 4 bytes |
| Yes/No | Yes and No values and fields which consist of only one of two values (Yes/No, True/False, or On/Off). | 1 bit. |

**Create tables DEPARTMENT and COURSE** (See Figure 3.9). The DEPARTMENT table is created with three attributes namely, D_Name, D_Number and D_Location, where D_Number is the primary key. The COURSE table has five attributes: Contact_Hr, C_Name, C_Description, C_Department, and C_Code. The primary key for the COURSE table is C_Code.

Do not forget to make the data type of the C_DEPARTMENT to be similar with D_Number as these attributes are used for creating relationship between the two tables (i.e. C_DEPARTMENT TEXT(10) REFERENCES DEPARTMENT(D_Number). They refer to the same thing but named differently in the two tables.

**Notes:** Figure 3.9 demonstrates CREATE TABLE COURSE with primary key (C_Code) and FOREIGN KEY (C_Department). The C_Department in the COURSE table and the D_Number in the DEPARTMENT table have the same data type. To create a relationship, the C_Department should be followed by the keyword REFERENCES. Then write the DEPARTMENT, which defines the D_Number as PRIMARY KEY. Enclose the D_Number with parenthesis - C_Department TEXT(10) REFERENCES DEPARTMENT(D_Number).

If you create a relationship, as seen in earlier example, do not add data to the table until a relationship is set up. Otherwise, it generates error if the requirement is not met.

**Figure 3.9: Query view in MS Access to write SQL Statements to create DEPARTMENT (upper) and COURSE (lower) tables**  
The figure shows two SQL query windows in MS Access. The top window displays the CREATE TABLE statement for DEPARTMENT with D_Number as PRIMARY KEY, D_Name TEXT, and D_Location TEXT. The bottom window shows the CREATE TABLE statement for COURSE with multiple fields including Contact_Hr INT, C_Name TEXT, C_Description TEXT, C_Department CHAR(10) REFERENCES DEPARTMENT(D_Number), and C_Code CHAR(10) PRIMARY KEY. Both query windows show the resulting table structures generated after running the commands.

**Notes:** While using the CREATE TABLE command, the table name should be followed by opening parenthesis, and at the end there should be a closing parenthesis. The definition of each field should be separated by a comma. Each column should specify appropriate data type. When you specify character size (e.g. C_Name TEXT (20)) make sure that the data value of the field cannot exceed the size specified. Otherwise, the data value after the size specified is ignored. For example, if your data value is 'Introduction to Civics and Ethical Education' only the first 20 characters will be stored in C_Name (i.e. 'Introduction to Civi'). Space is counted as one character.

### Activity
1. Create the following three tables using SQL commands in Access:
   * **Student table** with attributes – student id (CHAR(10)), name (CHAR(20)), sex (CHAR(1)), age (INTEGER), grade level (INTEGER). Set the Student id as primary key.
   * **Teacher table** with attributes – teacher id (CHAR(10)), name (CHAR(20)), sex (CHAR(1)), age (INTEGER), specialization (CHAR(15)). Set the Teacher id as primary key.
   * **Grade table** with attributes – student id (CHAR(10)), teacher id (CHAR(10), course code (CHAR(20)), mark (INTEGER). Use course code as a FOREIGN KEY to create a relationship with the COURSE table created in Figure 3.9.

2. Run the SQL command and see the resulting tables created (student, teacher, and grade).

3. The following CREATE statement has a problem (i.e. has syntax error). Trace the problem and rewrite the statement to fix the error:
   * CREATE TABLE Patient (pid INTEGER, P_Name TEXT P_Age INT)
   * CREATE Physician (id CHAR, name TEXT, DoB DATETIME, PRIMARY KEY(id))
   * CREATE TABLE Treatment (ptid INTEGER REFERENCES Patient pid, drId CHAR REFERENCE id)

4. Write the CREATE table SQL statement with appropriate data type and size based on the records in the following Physician table.

**Hint:** whenever you specify data size, use the value with the maximum character length.

**Physician Table Data**

| employee id | Name | position | bank account | bank |
| :--- | :--- | :--- | :--- | :--- |
| 1000010150198 | Herpesa Mekonnen | Internist | 7555666111 | Wegagen |
| 1022405505500 | Yohanna Abrha | Pharmacist | 23567434566 | CBE |
| 66688979045 | Abdela Kibomo | Neuro Surgeon | 4509008755 | Awash |
| 1080880880880 | Selamawit Kassu | Head of Clinic | 6667890456 | Dashen |
| 4509008755 | Jemila Zeynu | Surgical Physician | 7555666111 | COOP |
| 1022405505500 | Sirage Aliyu | Psychiatrist | 23567434566 | Abyssinia |

---

### ALTER TABLE command

Once a table is created, it can be modified using the ALTER TABLE command. Using the ALTER command, you can add column(s), drop column(s), and change column definitions. It is also used to establish relationship between tables.

If in Figure 3.9, the datatype for D_Number is CHAR(10) and C_Department is CHAR(15), this generates an error while you create relationship between the two tables. Thus, modify the field C_Department in the COURSE table with CHAR(10). To do this, write:

```sql
ALTER TABLE COURSE ALTER COLUMN C_Department CHAR(10)
```

Or drop the field C_Department and recreate it:

```sql
ALTER TABLE COURSE DROP COLUMN C_Department;
```

Then, add C_Department again like this:

```sql
ALTER TABLE COURSE ADD COLUMN C_Department CHAR(10);
```

If you have missed setting a primary key while creating a table, the ALTER command can be used to modify the column as primary key. Assume you have not set a primary key for the TEACHER table. Modify the teacher_id and set it as primary key as follows:

```sql
ALTER TABLE TEACHER ADD PRIMARY KEY (teacher_id)
```

#### ALTER command to create relationship

The following ALTER command modifies the COURSE table to create a relationship with DEPARTMENT table through D_Number which is the primary key in DEPARTMENT:

```sql
ALTER TABLE COURSE ADD FOREIGN KEY (C_Department)
REFERENCES DEPARTMENT (D_Number);
```

#### Activity
1. Modify the Physician table in question 4 of Activity 3.5 based on the following descriptions using ALTER command:
   * Modify 'employee id' datatype to CHAR of size 20
   * Modify 'employee id' as PRIMARY KEY
   * Add a new column for date of hire of the physician with DATETIME data type

2. Modify the Student and Teacher tables in question 1 to create the following relationship using the ALTER command:
   * Add student_id for the Student table as foreign key of table grade, and
   * Add teacher_id for the Teacher table as foreign key of table grade

---

### DROP TABLE command

Dropping a table is actually one of the easiest things to do. Sometimes you might create a table that you do not want, or you want to remove after creation. Use the DROP TABLE command to delete the table already created. For example, if you want to delete COURSE table, use the following SQL statement:

```sql
DROP TABLE COURSE
```

**Caution** – Remember that if you delete a table with records, you cannot get it back.

#### Activity
* Create a table with two columns and write an SQL statement to drop the table

---

### Create Relationship Visually using 'DATABASE TOOL' tab in MS Access

Previously you saw how to use SQL ALTER command to create a relationship between tables. Alternatively, you can create a relationship using graphical database tool in MS Access. A relationship in MS Access helps you combine data from two or more different tables. Each relationship consists of fields in two tables with corresponding data. The relationship can be one-to-one, one-to-many, or many-to-many.

**Figure 3.10: Start Relationships in MS Access**  
The figure shows the MS Access ribbon with the "Database Tools" tab selected, highlighting the "Relationships" button in the Relationships group. The tooltip reads "Define how the data in tables is related, such as ID fields or name fields in different tables that should match."

**Steps to create Relationship**
* On the 'Database Tools' tab, in the 'Relationships' group, click 'Relationships'.
* On the pop-up 'Show Table', select one or more tables or queries and then click 'Add'. After you have finished adding tables and queries to the Relationships document tab, click 'Close'.
* Drag a field (typically the primary key) from one table to the common field (the foreign key) in the other table. To drag multiple fields, press the CTRL key, click each field, and then drag the Primary key over the foreign key.

**Figure 3.11: Relationship in relational database model**  
The figure shows a complex relationship diagram with multiple tables: Student, Teacher, DEPARTMENT, Course, Offer_Course, and Take_Course. Lines connect the tables showing relationships. The infinity symbol (∞) and '1' indicate one-to-many relationships. For example, D_NUMBER in DEPARTMENT is a primary key that connects to foreign keys in Student, Teacher, and Course tables (T_DEPARTMENT, S_DEPARTMENT, C_DEPARTMENT). Similarly, T_IDNO and C_Code serve as primary/foreign keys in other relationships.

**Notes:** The infinity symbol (∞) and 1 in Figure 3.11 describe the relationship between the tables indicated. ∞ is used to describe the many side whereas the one side is described by '1'. For example, the relationship between Department and Teacher is one-to-many. That means, one record in the DEPARTMENT table is linked to many records in the Teacher table. Thus, the many side is indicated with infinity symbol and one side is indicated by '1'.

An example of a relational database model is shown in Figure 3.12. Note that all related tables have a common data item (key field) that enables information stored in one table to be linked with information stored in another.

**Figure 3.12: Records in Relational Database**  
The figure displays actual data records from a school database showing populated tables with sample data. It shows the DEPARTMENT table with D_NUMBER, D_NAME, D_LOCATION. The Teacher table shows teacher records with T_IDNO, names, sex, DoB, T_DEPARTMENT, and T_Salary. The Student table shows S_IDNO, student names, and other details. The visual demonstrates how primary keys in parent tables relate to foreign keys in child tables with actual data values.

#### Activity
Open the database you have created in question 1 of Activity 3.5.
* Click on 'DATABASE TOOLS' tab, then Relationships. Do you see any relationship diagram? Discuss the relationships that have been created?
* Delete the relationship by selecting the line that connect the Student table with grade table, and grade table with the teacher table. Then create the relationship again by clicking Create.

---

## 3.2.3 Data Manipulation Language

### Brainstorming

What is data manipulation?

Data Manipulation Language (DML) consists of commands that allow you to manage the database by performing operations such as inserting, updating, deleting, and navigating through data. The DML commands include INSERT, UPDATE and DELETE.

### INSERT command

INSERT command helps to insert new records to a table. The INSERT command can be used in one of the two options shown in the table below. Option 1 is used when the values of all fields are to be replaced by new values, whereas Option 2 is used when only selected fields are to be replaced.

**Notes:** Did you know that while using the INSERT INTO command, the column value should match the column data type of the table (e.g., you cannot insert a text value into a numerical field). All string values to be inserted in a table should be quoted with single or double quotation marks (e.g. 'Chemistry' or "Chemistry"). But if the field is defined as numeric, like Age INT, the value to be inserted does not need quotation marks (e.g. 20).

**Option 1:**
```sql
INSERT INTO table_name VALUES (value1, value2, value3...)
```

**Option 2:**
```sql
INSERT INTO table_name (column1, column2...) VALUES (value1, value2...)
```

#### Example 1: Insert into a COURSE table
```sql
INSERT INTO COURSE VALUES (3, 'Chemistry', 'Organic chemistry', '105', 'NS1421');
```

The above example inserts a record into a COURSE table. The COURSE table (See Figure 3.12) has five attributes: credit hours, course name, course description, department, and course code. Accordingly, each value listed in the INSERT command is inserted into the corresponding column in the COURSE table. Except for the column credit hours (INT datatype), all fields in the COURSE table are string data type. Therefore, the data value '105' is considered a string rather than a numeric value.

#### Example 2: Insert into a DEPARTMENT table
```sql
INSERT INTO DEPARTMENT (D_Number, D_Name, D_Location)
VALUES ('D101', 'Biology', 'NBR First Floor');
```

Example 2 demonstrates inserting a record into the DEPARTMENT table using option 2 INSERT command syntax. Thus, next to the table name – DEPARTMENT, columns' names are listed being separated by commas and enclosed by parenthesis. The VALUES part is similar to the demonstration given in example 1. All fields that are not mentioned on the INSERT statement are left blank, or default value is recorded. For example:
```sql
INSERT INTO COURSE (Contact_Hr, C_Name, C_Department, C_Code)
VALUES (4, 'Biology', '102', 'NS2323');
```

In the above INSERT statement, the value of C_DESCRIPTION is not mentioned on the query. As a result of this, while you run the query, the value of the course description for Biology is left blank in the table (See Figure 3.13).

**Figure 3.13: Course Table after Inserting Records**  
The figure shows the COURSE table in datasheet view displaying several records. Notable is the Biology record (C_Code NS2323) where the C_DESCRIPTION field is blank, demonstrating what happens when a field is omitted in an INSERT statement.

#### Activity

1. Insert the following records in the Student, Teacher and Grade tables you have created in Activity 3.5.

**Student table records:**
| student_id | name | sex | age | grade_level |
| :--- | :--- | :--- | :--- | :--- |
| 1001/2015 | Halima Mohammed | F | 19 | 12 |
| 1002/2015 | Kebede Mulugeta | M | 19 | 12 |
| 1010/2015 | Dejen Tasew | M | 18 | 11 |
| 1011/2015 | Hana Girma | F | 18 | 11 |

**Teacher table records:**
| Teacher_id | Name | Sex | Age | Specialization |
| :--- | :--- | :--- | :--- | :--- |
| 2001/2010 | Roman Nesibu | F | 31 | Physics |
| 2002/2010 | Helen Alemu | F | 30 | ICT |
| 2010/2010 | Belay Getaneh | M | 30 | Geography |
| 2011/2010 | Demeke Mulat | M | 31 | Mathematics |

**Grade table records:**
| Student_id | Teacher_id | Subject | Mark |
| :--- | :--- | :--- | :--- |
| 1001/2013 | 2001/2010 | Physics | 80 |
| 1002/2013 | 2002/2010 | ICT | 85 |
| 1010/2013 | 2010/2010 | Geography | 79 |
| 1011/2013 | 2011/2010 | Mathematics | 90 |

2. What is the problem with the following INSERT statement? Rewrite the INSERT statement to fix the problem.
   * `INSERT IN TO GRADE VALUES('1012/13','2023/2010','English')`
   * `INSERT INTO TEACHER VALUES('teacher_id','Sex','Age')`
   * `INSERT INTO STUDENT (Student_id,Name,Sex)VALUES('1015/13','Yared')`

3. Write INSERT statements to insert the following:
   * Student id, name and age for three students (1001/2014, Meymuna, 20), (1002/2014, Alehegne, 20), and (1003/2013, Bogale, 19)

---

### UPDATE command

The UPDATE command does not add new records to a table, nor does it remove records. It simply updates existing records in the table. The UPDATE command is used to change a value of one or more fields in an existing table row or number of rows. The general syntax of an UPDATE command is given below:

```sql
UPDATE table_name SET column1 = value1, column2 = value2... WHERE condition;
```

**Notes:** Before you attempt to update any records you need to know that you are modifying the content of one or more records of a table.

**Figure 3.14: Teacher's Table before Update**  
The figure shows the Teacher table in datasheet view with columns for TFirst_Name, TMiddle_Name, TLast_Name, TSex, TDoB, T_Department, and T_Salary. One teacher named Zemikael O'rero Samuel has a salary of $7,000 which is less than $10,000.

#### Example:
If you execute the following UPDATE statement, then teachers with salary less than 10,000 are updated to 15,000 in T_Salary column. See Zemikael's salary in Figure 3.14 and Figure 3.15.

```sql
UPDATE Teacher SET T_Salary = 15000 WHERE T_Salary < 10000;
```

**Figure 3.15: Teacher's Table after Update**  
Shows the same Teacher table after the UPDATE command has been executed. Zemikael O'rero Samuel's salary has been changed from $7,000 to $15,000.

#### Activity
* UPDATE the following records in the Student and Teacher tables (See Activity 3.10):
  * Modify student name, Halima Mohammed where student_id is 1001/2015
  * Modify specialization, Economics where teacher_id is 2010/2010

The UPDATE command can also be used to update multiple rows at the same time. This is done by selecting many rows using the WHERE clause. It is the WHERE clause that determines how many records are updated. For instance, the following query updates all female salary to $20,000:

```sql
UPDATE Teacher SET T_Salary = 20000 WHERE T_sex = 'female';
```

If you ignore the WHERE clause in the above statement, the query changes the salary of all teachers to $15,000 (See Figure 3.16).

**Example:**
```sql
UPDATE Teacher SET Teacher.T_Salary = 15000;
```

**Figure 3.16: SQL Update to Modify Values of Salary of Records of Teacher's Table**  
Shows the Teacher table where all records have been updated to $15,000 in the T_Salary column because the UPDATE statement lacked a WHERE clause, demonstrating the importance of using WHERE to limit updates.

#### Activity
* Write SQL to update all students' grade_level value to 12

---

### DELETE command

The DELETE command is used to delete a record or multiple records from the database. DELETE command does not remove the table structure, rather it only deletes the data that is currently being held by the table structure.

DELETE command provides the option to mention which records you want to delete based on a condition or delete all records. However, it cannot delete certain fields of a record using the Delete statement. The general syntax of the DELETE statement is given below:

```sql
DELETE FROM table_name WHERE condition;
```

**Be careful** while you use the DELETE command to remove records from tables that are in a one-to-many relationship with another table. For example, if you want to delete one department (one side) already related to other tables, first you have to delete all records in other related tables i.e. in Students, Teacher, and Course Tables (all in the many sides of the relationship). However, deleting a table where the primary key migrates as the foreign key does not have an impact on the Parent table. Therefore, you can delete from the Students table, Course table, and Teacher table if the primary key records are not further related to other tables (See Figure 3.11).

#### Example:
Assume the Teacher named Zemikael does not work anymore in the school. If the teacher is assigned to a course that course should be transferred using the Update statement to another teacher. If not, you can delete the teacher Zemikael only because he is not assigned to offer courses.

```sql
DELETE FROM Teacher WHERE T_IDNO = 'Teach/2312/91';
```

**Notes:** When you use the DELETE statement, do not forget to refer to the record by primary key; this is because other fields can have similar values repeated, and you may lose a lot of data.

#### Deleting Multiple Rows

While putting a conditional clause in the DELETE is optional, it is almost always used – simply because not using it would cause all the records to be deleted from a table, which is a rarely valid need. To delete all records from a table, you can use one of the following commands:

```sql
DELETE FROM table_name;
```
or
```sql
DELETE * FROM table_name;
```

#### Activity 3.11
1. Write SQL command to delete a record from Student table where student_id is 1010/2015
2. Write SQL statement to delete all records in the Grade table

---

## 3.2.4 Data Query Language – SELECT Command

### Brainstorming

Have you ever queried Google.com for some information?

Data Query Language (DQL) is a data query language for relational DBMSs. It provides a SELECT command for querying all or subset of records from one or more tables of a database. The SELECT command provides options for filtering and getting more meaningful results from the database. The level of flexibility that is given by SQL is one of the reasons it has succeeded as a query language in relational database systems.

A SELECT command is used to write the SQL statement that contains a complete description of a set of data that you want to obtain from a database. This includes the following:
* What type of data does a table contains?
* How are data from different sources related?
* Which fields or calculations will produce the data?
* Criteria that data must match to be included.
* Whether or not and how to sort the results.

Like a sentence, a SQL statement has clauses. Each clause performs a function for the SQL statement. Some clauses are required in a SELECT statement. The following table lists the most common SQL clauses.

**Table 3.4: Description of SQL SELECT command clauses**

| SQL clause | What it does | Required |
| :--- | :--- | :--- |
| SELECT | Lists the fields that contain data of interest. | Yes |
| FROM | Lists the tables that contain the fields listed in the SELECT clause. | Yes |
| WHERE | Specifies field criteria that must be met by each record to be included in the results. | Optional |
| ORDER BY | Specifies how to sort the results. | Optional |

### Basic SQL Clauses: SELECT, FROM, and WHERE

This part deals with queries that run on a single table. You can run a SELECT operation on multiple tables in a single statement, too. The syntax to retrieve all records from a table is:

```sql
SELECT * FROM table_name;
```

The above statement is read as "Select all records from a table". When the keyword SELECT is followed by the asterisk symbol (*), it means all columns in the table. The asterisk is equivalent to listing all fields in the table. Then write the keyword FROM which should be followed by table name. For example, to select all records of the COURSE table, you write the SELECT statement as:

#### Example:
```sql
SELECT * FROM COURSE;
```

**Figure 3.17: SQL Select Statement Result**  
Shows the result of running the SELECT * FROM COURSE query, displaying all columns (Contact_Hr, C_NAME, C_DESCRIPTION, C_DEPARTMENT, C_CODE) and all records from the COURSE table in a datasheet view.

**Notes:** The asterisk (*) in the above SELECT statement can be replaced with all fields in the list and be rewritten as:
```sql
SELECT CONTACT_HR, C_NAME, C_DESCRIPTION, C_DEPARTMENT, C_CODE FROM COURSE
```
The output is the same as the one in Figure 3.17. When the table contains many fields, listing all the fields of a table is not important, so it is good practice to use * to specify all columns in the table.

Field name in the SELECT statement should be exactly the same as field name described in the table. Incorrectly spelled field name does not provide the expected output.

#### Activity 3.13
1. Select all records from the Grade table
2. Select all records from the Student table
3. What is the meaning of (*) in the SELECT statement?

### Selecting a Limited Number of Columns

Most of the time, selecting and displaying all fields of a table may not be your interest; you may want to display a limited set of columns of a table in the output. You can do this by naming the fields explicitly as a comma-separated list (See the syntax below). You can also provide criteria in the WHERE clause if you want to filter records in the output.

A SELECT SQL statement takes the general form as follows:
```sql
SELECT field1, [field2] FROM table [WHERE criterion];
```

**Notes:** [WHERE criterion] is an optional clause. It can be used to filter the output that is returned by the FROM clause. The keyword WHERE is followed by an expression that can evaluate to TRUE, FALSE, or UNKNOWN. The expression can be tested using standard mathematical comparison operators (e.g. =, >, >=, <, <=, !=), Boolean operators (e.g. !, AND, OR), or special operators.

String literal (e.g. male) is a sequence of characters enclosed in single quotation marks ('male'). Sometime you may probably find using double quotation marks to enclose string, but the SQL Standard defined to use is single quotation marks.

#### Example:
The following SELECT query retrieves full name of male students with their sexes from the STUDENT table:
```sql
SELECT S_Fname, S_MName, S_LName, S_sex FROM STUDENT WHERE s_sex = 'male';
```

**Figure 3.18: SQL SELECT with Limited fields - Results from STUDENT Table**  
Shows a query result table with columns S_Fname, S_MName, S_LName, and S_sex, displaying only records where S_sex = 'male', with two male student records visible.

#### Example: WHERE clause - using comparison in DATETIME

To retrieve records where the values are greater than or equal to the comparison value, retrieve all sales from March 15, 2020 to the present, including sales on that date.

As can be seen in Figure 3.19 below (all records in the SALES table is shown in the left, and sales made on and after March 15, 2020 is shown in the right):

```sql
SELECT * FROM SALES
SELECT CustomerId, SalesDate, Amount
FROM SALES
WHERE SalesDate >= '15-03-2020'
```

**Figure 3.19: SALES table with all records (left) and Filtered SALES records (right)**  
The left side shows the complete SALES table with CustomerId, SalesDate, and Amount columns. The right side shows the filtered result containing only records where SalesDate is on or after March 15, 2020.

**Notes:** Comparison in DATETIME determines whether the first value in the expression (i.e. SalesDate) is earlier (if it is <) or later (if it is >) than the second value in the expression. For example, the expression '10-02-2020' < '15-03-2020' asks "Is February 10, 2020, earlier than March 15, 2020?" Use >= to consider date values greater than or equal to the comparison value, and <= to consider date values less than or equal to the comparison value. Note also that dates and times are evaluated in their chronological order.

#### Filter records on multiple criteria

So far, examples of single value comparison has been used to filter records of a table. However, it is common to filter the output of a table based on multiple criteria. In the following example, you see how to combine multiple criteria using AND and OR.

#### Example: Select records of a table with multiple criteria using AND and OR

If you want to select all sales which are made after May 01, 2020 and its amount is larger than 12000, see Figure 3.20. Figure 3.20 presents additional examples that show the SQL SELECT statement and the output based on SALES table in Figure 3.19.

**Figure 3.20: Examples of SELECT statement and the output of running the queries**  
Shows three query examples with their SQL code and resulting outputs:
1. Query using AND: `SELECT CustomerId, SalesDate, Amount FROM SALES WHERE SalesDate >= '01-05-2020' AND Amount > 12000;` shows only one record meeting both criteria.
2. Query using BETWEEN: `SELECT CustomerId, SalesDate FROM SALES WHERE SalesDate BETWEEN '01-01-2020' AND '30-02-2020';` shows records within the date range.
3. Query using OR: `SELECT CustomerId, SalesDate, Amount FROM SALES WHERE Amount < 1000 OR Amount > 15000;` shows four rows meeting either condition.

**Notes:** The second example in the above figure (BETWEEN ...AND) is an example of a range condition, which tests the given value (i.e. SalesDate) against range of values defined by two other values in the expressions (i.e. '01-01-2020' AND '30-02-2020'). The BETWEEN ...AND defines the range by using the second value in the expression as the start point (i.e. '01-01-2020') and the third value in the expression as the end point ('30-02-2020'). Therefore, both start point and end point are part of the range. Accordingly, a record is included in the output only if the expression of the first value in the expression (i.e. SalesDate) falls within the range specified.

#### Activity 3.14

Please refer to the Student and the Teacher tables that are used in Activity 3.10.

1. Select all students whose marks are above 50. [Hint: marks > 50]
2. Select all female teachers. [Hint: sex = 'F']
3. Select names of students who are grade 12. [Hint: grade = 12]

---

### SELECT Command ORDER BY Clause

#### Example: SELECT with ORDER BY clause

```sql
SELECT column1, [column2],...
FROM table_name
ORDER BY [column] [ASC] [DESC]
```

You can select records of a table to be ordered in specific field's category. You can order using alphabetical or numerical order. In the syntax above the ORDER BY clause is used to order the output in ascending or descending. The keyword ORDER BY is followed by the field's name i.e., [column], which can be used to order the records in ascending (i.e., if ASC is mentioned or left empty) or descending (if DESC is mentioned). ASC stands for ascending and DESC stands for descending. Ascending is the default order.

**Example:**
The query in Figure 3.21 retrieves the full names of the teachers with their salary in ascending order (See Figure 3.21). T_Salary is followed by nothing, and the output is that salary is in ascending order (See table result in Figure 3.22).

**Figure 3.21: SELECT with ORDER BY on the Teachers table – SQL statement and Output**  
Shows the SQL statement: `SELECT T_First_Name, T_Middle_Name, T_Sex, T_Salary FROM Teacher ORDER BY T_Salary` and the resulting output with teachers listed in ascending order of salary.

To get salary in descending order, use the ORDER BY T_Salary DESC as follows:

**Figure 3.22: Teachers table records ordered by salary in descending order**  
Shows the same query but with DESC keyword added: `ORDER BY T_Salary DESC`, resulting in teachers listed from highest to lowest salary.

**Notes:** Did you know that the order of records and columns within a table has no importance in database? However, you can use the ORDER BY clause to order the output in ascending or descending order.

#### Activity

1. Select all teachers who are specialized in Mathematics and order them by their salary.
2. Select all records in the Teacher table and order them by sex. Then order them by salary either in descending or ascending order.
3. Perform the following activities based on the table below:
   * Select patients and order by Temperature in descending order.
   * Select patients and order by VisitDate in ascending order.

**Patient Table:**
| PatientId | VisitDate | Physician | Temperature | BodyPressure |
| :--- | :--- | :--- | :--- | :--- |
| 89101 | 10-06-2021 | Amare | 38 | 120/70 |
| 89009 | 13-02-2022 | Negesti | 37.5 | 120/70 |
| 89203 | 15-02-2021 | Murad | 39 | 150/60 |
| 90555 | 04-10-2021 | Azeb | 38.5 | 130/80 |
| 89777 | 29-01-2022 | Chala | 39 | 160/70 |

---

### Selecting records from Two Tables

The SELECT command can be used to select records from two tables. While selecting records from two tables, the records in the two tables must have some link; otherwise, the resulting set does not provide relevant information. The general syntax of the SELECT statement that is to select records from two tables is given below:

```sql
SELECT table1.column1, [table1.column2], table2.column1, [table2.column2]
FROM table1, table2
WHERE table1.column1 = table2.column1
```

**Notes:** Unlike the earlier syntax, the column is described along with table that contains the field. For example, table1.column1, refers to column1 in table1. Describing column name along with their table is important when you are selecting records from two tables. This practice avoids naming conflict among similar column name found in two tables.

#### Example:
Your school director wants to get courses offered in the first semester. We know that the course table maintains course details with Course id as a primary key. This table alone cannot provide the information that is requested by the director. Because courses offered in a semester is maintained in another table (CourseOffering). The Course id (a primary key in the COURSE table) is a foreign key in the CourseOffering table. This key is used to link the two tables. Therefore, to provide full information that is requested by the school director, part of the information can be extracted from Course as well as CourseOffering tables.

```sql
SELECT COURSE.Course_id, COURSE.Course_name, COURSE.Grade, CourseOffering.Semester
FROM COURSE, CourseOffering
WHERE COURSE.Course_id = CourseOffering.Course_code;
```

**Table 3.5: Selecting records from two tables - Course and CourseOffering**

| Course table | | | | CourseOffering table | | | | | |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Course_id | Course_name | Grade | Contact_Hr | Teacher_id | Sec-tion | Semes-ter | code | | |
| NS103 | Physics | 11 | 4 | 2010/2010 | A | I | | | |
| NS104 | Biology | 11 | 4 | 2010/2020 | B | I | | | |
| NS102 | Biology | 10 | 4 | 2015/2011 | A | II | | | |
| NS105 | English | 11 | 5 | 2002/2020 | A | I | | | |
| NS101 | Chemistry | 9 | 4 | 2010/2010 | C | II | | | |

**The output of the query:**
| Course_id | Course_name | Grade | Semester |
| :--- | :--- | :--- | :--- |
| NS103 | Physics | 11 | II |
| NS104 | Biology | 11 | I |
| NS104 | Biology | 11 | I |
| NS102 | Biology | 10 | II |
| NS105 | English | 11 | I |

Example 2: The output in Table 3.5 can be further filtered by adding the criterion "Semester='I'" as follows:

```sql
SELECT COURSE.Course_id, COURSE.Course_name, COURSE.Grade, CourseOffering.Semester
FROM COURSE, CourseOffering
WHERE COURSE.Course_id = CourseOffering.Course_code AND Semester = 'I';
```

**Table 3.6: Example query statement with multiple criteria**

| Course_id | Course_name | Grade | Semester |
| :--- | :--- | :--- | :--- |
| NS104 | Biology | 11 | I |
| NS104 | Biology | 11 | I |
| NS105 | English | 11 | I |

---

## Unit Summary

In this unit, you have learnt about:
* Concepts of Database Management Systems (DBMS)
* Relational Database Management Systems
* Structured Query Language (SQL)
* DDL, DML and DQL

---

## Key Terms

There are many advantages of having databases, some of the major ones are sharing, security, less data redundancy, and data integrity.

* **DBMS** is a computerized system that enables users to create and maintain a database. The DBMS is a general-purpose software system that facilitates the processes of defining, constructing, manipulating, and sharing databases among various users and applications.
* **Databases** are composed of many objects, but the major objects that exist in MS Access are tables, queries, forms, and reports.
* **SQL** is a special purpose query language meant for interacting with relational databases. Understanding how SQL works can help you create better queries, and make it easier for you to understand how to fix a query that is not returning the results that you expect.
* **SQL** is a language for interacting with databases. It consists of a number of commands with further options to allow you to carry out your operations with a database.
* **All RDBMS commands** are written using the SQL language.
* **Data Definition Language (DDL)** which includes CREATE, ALTER and DROP. These commands allow you to create or modify your database structure.
* **Data Manipulation Language (DML)** contains INSERT, UPDATE, and DELETE. These commands are used to manipulate data stored inside your database.
* **Data Query Language (DQL)** includes SELECT that is used for querying or selecting a subset of data from a database.

---

## Review Questions

### Part I: Choose the correct answer from the given alternatives

1. Which one of the following is generally used for performing tasks like creating the structure of the relations?
   * A. Query
   * B. Relational Schema
   * C. DML (Data Manipulation Language)
   * D. DDL (Data Definition Language)

2. Which one of the following provides the ability to insert tuples into, delete tuples from, and modify tuples in the database?
   * A. Query
   * B. Relational Schema
   * C. DML (Data Manipulation Language)
   * D. DDL (Data Definition Language)

3. A Database Management System is a type of _______
   * A. system
   * B. application
   * C. general
   * D. Both A and C

4. Which one of the following is a type of Data Manipulation Command?
   * A. CREATE
   * B. DELETE
   * C. ALTER
   * D. All of the above

5. Which of the following command is a type of Data Definition language command?
   * A. CREATE
   * B. UPDATE
   * C. DELETE
   * D. MERGE

6. Which one of the following commands is used to remove the existing row in a table
   * A. DELETE
   * B. UPDATE
   * C. INSERT
   * D. None of the above

7. Which language is used by most DBMS for helping its users access data?
   * A. HLL
   * B. Query language
   * C. SQL
   * D. 4GL

8. Microsoft Access is
   * A. Network Database Model
   * B. RDBMS
   * C. ORDBMS
   * D. OODBMS

Based on the following table, answer the questions that follow:

| NAME | PASSWORD | EMAIL |
| :--- | :--- | :--- |
| Almaz_bekana | Pass@MY123 | almaz@mymail.com |
| Asnakech worku | MYPass@123 | asnak@yours.com |
| Diriba Dilnesa | PassMY@123 | dili@school.com |
| Sofonias Alebel | MY@123pass | sof@gmial.com |
| Muna Mussa | Pass@123MY | muna@mail.com |

9. Based on the given table and the datatype on the data filled, which query creates the above table?
   * A. CREATE TABLE ACCOUNT (NAME char (30), PASSWORD int, EMAIL char (30));
   * B. CREATE TABLE ACCOUNT (NAME char (10), PASSWORD char (10), EMAIL char (10));
   * C. CREATE TABLE ACCOUNT (NAME char (30), PASSWORD char (15), EMAIL char (30));
   * D. Create ACCOUNT (NAME char (30), PASSWORD char (15), EMAIL char (10));

10. Which of the following is a correct INSERT statement?
    * A. INSERT ACCOUNT values ('Abebe','mypassword',abebe@mymail.com)
    * B. INSERT INTO ACCOUNT (Name,Password)values ('Abebe','mypassword')
    * C. INSERT INTO ACCOUNT values ('Abebe','abebe@mymail.com')
    * D. Insert values to the ACCOUNT table ('Abebe','mypassword')

11. Which of the following is the correct UPDATE statement?
    * A. Update ACCOUNT password='mypassword@123';
    * B. Update ACCOUNT set password='mypassword@123';
    * C. Update table ACCOUNT set password='mypassword@123';
    * D. None of the above

12. Which of the following is the correct DELETE statement?
    * A. Delete from ACCOUNT
    * B. Delete Hailemariam Mamo from ACCOUNT
    * C. Delete from ACCOUNT where name ='Hailemariam Mamo';
    * D. Delete record 'Hailemariam Mamo' from ACCOUNT;

13. Which one of the following commands does not enable you to select data from the table ACCOUNT given above?
    * A. SELECT * from ACCOUNT
    * B. SELECT name,password from ACCOUNT where password ='MY@123pass'
    * C. SELECT * from ACCOUNT where Password like '*123'
    * D. SELECT All from Account

---

## Part II: Code Writing

Identify a data management problem which can be addressed by designing a database.

**Hints:** You may work on a patient record management system, a farmer record management system, a school's record management system, a business customer management system, a library management system, a hotel management system or any other problem in your surrounding that can be addressed through the design and implementation of database systems.

### Instructions:

**A. Analyze the problem you want to work on and identify three to five objects or entities about which you want to maintain information.**

*Hint: Patient, Physician, Treatment, etc. if you work on patient management system in Clinic; Guest, BedRooms, CheckIn, etc. if you work on hotel management system, etc.*

**B. Design the database**

*Hint: Develop the ERD (Entity Relationship Diagram), identify attributes, and create link (when necessary)*

**C. Create the database and tables in Access**

*Hint: You may find informative name for your database from the problem you considered. E.g. 'PatientRecordDatabase', etc.*

**D. Review your tables and modify tables, fields, data type, or table link with other tables if needed.**

*Hint: Use ALTER command*

**E. Add three to five records in each table that have been created so far**

*Hint: Use INSERT INTO command to add new records in a table*

**F. Update at least two records in one of your tables**

*Hint: Use UPDATE command to update records in a table*

**G. Write five queries based on the following:**
* Select all records (e.g. select all patients, or doctors).
* Select records based on a single criterion

  *Hint: WHERE patientAdmitedDate earlier than January 1, 2022*

* Select records based on multiple criteria

  *Hint: WHERE physicianAge < 45 AND Salary = 7000*