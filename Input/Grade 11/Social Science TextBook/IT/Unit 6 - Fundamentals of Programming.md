# Unit 6: Fundamentals of Programming

## Learning Outcomes

At the end of this unit, students will be able to:
- Define computer programs
- State and describe types of programming languages
- Explain syntax and semantics of programming languages
- Explain variables and data types
- Differentiate the concept of statements and expressions in Python
- Analyze simple programs written in Python
- Write simple programs with input and output

## Unit Overview

A computer program is a set of instructions that commands a computer what to do. Computers do whatever task they do by simply following the instructions stated in programs. This unit covers topics related to computer programs including programming languages, syntax, and semantics. The high-level programming language known as Python is used to demonstrate the basic concepts of programming.

## 6.1 Types of Programming Languages

### Brainstorming

How do computers do the types of tasks we observe them doing?

Programming languages are computer languages that are used to write different types of computer programs. They are generally grouped into machine language, assembly language, and high-level languages.

### 6.1.1 Types of Programming Languages

#### Machine Language

Machine language is a low-level computer language. It is a language in which everything including instructions, numbers, and memory locations are represented in 1s and 0s – binary system. Machine language is the language that computers understand directly without any need for translation. That is why it is very fast and uses memory efficiently. However, writing programs in machine language is very difficult.

#### Assembly Language

Assembly language is also a low-level computer language but, instead of 1s and 0s, it uses symbols known as mnemonics. Though it is easier than using a binary system, assembly language is still difficult to learn and use. Since computers do not directly understand any program outside the machine language, programs that are written in assembly language require a special type of software. This software is known as Assembler, and it is used to translate assembly language instructions into machine language.

#### High-Level Language

High-level languages are closer to human languages compared to both assembly and machine languages. This type of language allows programmers to focus more on the problem they want to solve than on the programming language. Examples of high-level programming languages include C, C++, Java, C#, Python, Perl, and others.

Just like assembly language programs, high-level language programs also cannot be directly executed by the computer. The programs have to be first translated into a machine language using translator software. Depending on the programming language, the translator software can be either a Compiler or an Interpreter.

Compilers translate high-level language written programs all at once into machine language. The machine language is then executed by the computer. Examples of programming languages that use compilers are C, C++, Java, and others.

Interpreters, on the other hand, translate and execute programs a statement at a time. They don't translate the whole program together as do compilers. Examples of programming languages that use interpreters include Python, Perl, and others.

### 6.1.2 Syntax and Semantics

Like any human language, all programming languages have syntax and semantics. Syntax refers to the rules of the programming language. It defines the structure or grammar of the language that programs should strictly follow. The semantics of a programming language, on the other hand, is related to the meaning of elements of a program and what they accomplish.

A program must be written with the correct syntax dictated by the programming language for the program to be executed by the computer. If a program violates any of the syntax rules of a language, the compiler or the interpreter produces an error message. Such type of error is known as a syntax error.

A program can have no syntax error and get executed properly but can still behave in a way different from what it is intended to. This kind of error is known as logic error and is associated with the semantics of a language. Since compilers or interpreters do not catch logic errors, they are far more difficult to identify and fix than syntax errors.

**Figure 6.4: Running a script file** (referenced in text)

**Figure 6.5: Logic error** (referenced in text) - Shows a Python script that calculates area incorrectly using `area=PI*radius*2` instead of `area=PI*radius**2`, producing output 18.84 instead of the correct 28.26.

#### Activity 6.1

1. Compare and contrast the three types of programming languages.
2. Why are logic errors more difficult to fix than syntax errors?

## 6.2 Basics of Python

Python is one of the popular high-level programming languages in use today. It is widely considered a much easier language to learn. This is one of the main reasons why it is a widely chosen language for teaching programming to those who are new to programming.

Python has a free integrated development environment known as IDLE. IDLE stands for Integrated Development and Learning Environment. To write Python codes, the interactive interpreter or the text editor of the IDLE can be used. The interactive interpreter is used to write one line of Python code at a time and is less convenient to write and execute a large number of codes. Using the text editor, however, any number of codes can be written and get executed with a single command.

### 6.2.1 Using the Interactive Interpreter

The Interactive Interpreter contains a Python shell, which is a textual user interface used to work with the Python language. The Interactive Interpreter is displayed when the IDLE is opened.

**Figure 6.1: IDLE Interactive Interpreter** - Shows the Python shell interface with menu options (File, Edit, Shell, Debug, Options, Window, Help) and the Python version information. The prompt `>>>` appears where codes are written.

The `>>>` is where codes are written and is called the prompt. After a user writes a code and presses the enter key, the prompt (`>>>`) reappears for the user to write the next line.

The following example demonstrates what the Interactive Interpreter does when the enter key is pressed after a simple expression is entered:

```python
>>> 5+6
11
```

5+6 is a syntactically valid expression that evaluates to 11. Therefore, the Python interpreter evaluated the expression and displayed 11. If, for example, a syntactically invalid expression like `5+` is given, the interpreter generates the following syntax error:

```python
>>> 5 +
SyntaxError: invalid syntax
```

To display something on the screen, the `print()` function is used in Python. The following example shows how a string is displayed using the `print()` function:

```python
>>> print("Hello World")
Hello World
```

Note that the IDLE uses different types of colors for the different elements of a Python code to make them easily distinguishable. By default, outputs are displayed in blue color; functions are displayed in purple color, and strings are displayed in green color. A string is a sequence of characters placed under quotation marks such as "Hello World" as can be seen in the above example.

#### Activity 6.2

- Use the `print()` function and display your full name on the screen using the interactive interpreter.

### 6.2.2 Using the Text Editor

Python codes can be written in a file using the text editor of Python's IDLE. The code that is kept in such files is known as a script. A file that keeps Python scripts is saved with the `.py` extension and is called a script file.

**Figure 6.2: Opening a Text Editor** - Shows the IDLE menu with "New File" option under the File menu (Ctrl+N) to create a new script file.

A script file can be easily created by selecting "New File" from the "File" menu in the IDLE's interactive interpreter as shown in Figure 6.2. Then the text editor is opened in a separate window, and it looks something like what is shown in Figure 6.3.

**Figure 6.3: Python IDLE's Text Editor** - Shows a text editor window for writing Python scripts with menu options (File, Edit, Format, Run, Options, Window, Help).

Note that the prompt (`>>>`) is not shown in the text editor. The `>>>` appears only when code is written in the interactive interpreter, not in the text editor. While only one line of code is written and executed in the interactive interpreter, as many lines of code as required can be written in the text editor.

The example shown in Figure 6.4 is a script that calculates and displays the area of a circle for a given radius value of 3. Before the script is run/executed, the script has to be saved with the `.py` extension by selecting the "save" option from the "file" menu in the text editor. To execute the script, the "Run Module" option from the "Run" Menu should be selected. After the script is executed, the output is displayed in the IDLE shell/interactive interpreter.

| Python Script | Output on the IDLE Shell |
|---------------|--------------------------|
| ```python<br>PI=3.14<br>radius=3<br>area=PI*radius**2<br>print(area)<br>``` | ```<br>RESTART: C:/Users/...<br>28.26<br>>>><br>``` |

Note the following points from the script shown above:
- There are four statements in the script. However, the script is executed with a single command.
- There is no prompt (`>>>`) in the script. The prompt is shown only in the interactive interpreter.
- Though there are four statements in the script, only one output is shown in the IDLE shell. This is because it is only the last statement that produces an output.
- The output of a script written in the text editor is shown in the IDLE shell or the interactive interpreter.

The `*` is multiplication operator in Python and `**` is exponentiation operator.

The example in Figure 6.5 demonstrates a logic error that is related to the semantics of programming languages.

| Python Script | Output on the IDLE Shell |
|---------------|--------------------------|
| ```python<br>PI=3.14<br>radius=3<br>area=PI*radius*2<br>print(area)<br>``` | ```<br>RESTART: C:/Users/...<br>18.84<br>>>><br>``` |

Note that the area of a circle in the above example is incorrectly calculated as `area=PI*radius*2`. The correct formula for the area of a circle is `area=PI*radius**2`. However, the interpreter did not generate any error and simply displayed the incorrect output. This is a logic error: even though the program does not have any syntax error, it does not produce the intended correct output.

#### Activity 6.3

1. What is the difference between Python's interactive interpreter and text editor?
2. Use the `print()` function to display your full name on the screen using the text editor.

## 6.3 Variables and Data Types

### 6.3.1 Variables

Variables are computer memory locations. They are the means to store data in computer memory. A variable is used every time user data or intermediary data is needed to be kept.

In Python, a variable is created along with its value. Values are assigned to variables using the assignment (=) operator, which has two operands. The operand to the left of the operator is always a variable while the operand to the right of the operator is either a literal value or any other type of expression. The following example demonstrates how a variable named `X` is created with the value 5 in the interactive interpreter:

```python
>>> X = 5
```

The example that follows shows how a variable named `y` is created and assigned to the result of an expression. The value of `y` would be the sum of 5 and 9, which is 14.

```python
>>> y = 5 + 9
```

To see the current value of a variable, you can simply type the name of the variable and press the enter key in the interactive interpreter. The value will then be displayed as shown in the following example:

```python
>>> y = 5 + 20
>>> y
25
```

The value 25 that is shown in blue color is the value of the variable y. Moreover, a variable can be assigned to another value than the one it was previously assigned to. The following example shows how the value of `y` is changed from 25 to 30.

```python
>>> y = 25
>>> y = y + 5
>>> y
30
```

### 6.3.2 Identifier

The name that is given to variables is called an identifier. Identifiers are a string of one or more characters and have to conform to some rules in Python to be considered valid. The rules of identifiers are:
- The first character should be either a letter or an underscore (_).
- If the identifier is made up of more than one character, the characters after the first one should be a letter, number, or underscore.
- An identifier cannot be the same as any of the keywords in Python.
- Identifiers are case-sensitive. (For instance, x and X are considered as different identifiers in Python)

**Figure 6.6: Keywords in Python**

| and | del | from | not | while |
| as | elif | global | or | with |
| assert | else | if | pass | yield |
| break | except | import | print | |
| class | exec | in | raise | |
| continue | finally | is | return | |
| def | for | lambda | try | |

Keywords are reserved words that have predefined meanings in a programming language.

According to the above rule, the following are valid identifiers:
- `X`
- `area`
- `area_5`
- `x5`

The identifiers given below, on the other hand, are not valid identifiers as they violate the rules stated above:
- `5x` (begins with a number)
- `while` (uses a keyword)
- `X-5` (contains an invalid character)
- `X y` (contains a space)

Although meeting the above requirements suffices to define a valid identifier, it is always recommended to use identifiers that are self-descriptive. Self-descriptive identifiers are names that express what they are intended to be used for. Using such types of identifiers makes programs more understandable and readable.

#### Activity 6.4

- Identify the valid identifiers and explain why they are valid/invalid:
  a. `x`
  b. `1x`
  c. `_x`
  d. `x*y`

### 6.3.3 Data Types

A data type is a classification that specifies the type of values a variable can have, and the type of operations defined on the values. Integer (int), floating-point number (float), string (str), and Boolean (bool) are some of the major built-in data types in Python.

Built-in data types are data types that are built into the Python language.

The data type of variables in Python is set when values are assigned to the variables. If an integer number is assigned to a variable, the variable will be of type int. If a string is assigned to a variable, the variable then will be of type str. The following example in the interactive interpreter shows how data types are set to variables based on the value assigned to them:

```python
>>> x = 54
>>> y = "This is Python"
>>> type(x)
<class 'int'>
>>> type(y)
<class 'str'>
```

As you can see in the above example, string values should be placed in quotation marks. To learn the data type of a particular variable, the `type()` function can be used. Simply write `type(variable_name)` and press enter. The interactive interpreter displays the data type of the variable as shown above. In the above example, the data type of the variable x is int while the data type of the variable y is str.

The four major built-in data types in Python and their descriptions are given in Table 6.1. The table also contains the various types of operators that apply to the respective data types with examples of how the operators are used.

#### Table 6.1: Data Types

| Data Type | Meanings and sample values | Associated operators | Sample expressions |
|-----------|---------------------------|---------------------|-------------------|
| **int** | Integer numbers<br>Example: 34, 4, 56, 10 | Arithmetic operators:<br>• Addition (+)<br>• Subtraction (-)<br>• Division (/)<br>• Floor Division (//)<br>• Multiplication (*)<br>• Modulus (%)<br>• Exponentiation (**) | `>>> 5+3`<br>`8`<br>`>>> 6-2`<br>`4`<br>`>>> 9/2`<br>`4.5`<br>`>>> 9//2`<br>`4`<br>`>>> 2*3`<br>`6`<br>`>>> 5%2`<br>`1`<br>`>>> 2**3`<br>`8` |
| **float** | Floating-point numbers<br>Example: 4.5, 10.6, 100.0 | Arithmetic operators:<br>• Addition (+)<br>• Subtraction (-)<br>• Division (/)<br>• Multiplication (*)<br>• Exponentiation (**) | `>>> 2.5+3.2`<br>`5.7`<br>`>>> 5.5-3.1`<br>`2.4`<br>`>>> 5.5/2`<br>`2.75`<br>`>>> 4*2.2`<br>`8.8`<br>`>>> 2.5**2`<br>`6.25` |
| **str** | A sequence of characters enclosed in double quotes<br>Example: "Hello world" | Concatenation (+) | `>>> "Hello " + "World"`<br>`'Hello World'` |
| **bool** | True or False values<br>Example: True, False | Boolean operators:<br>• and<br>• or<br>• not | `>>> True or True`<br>`True`<br>`>>> True and True`<br>`True`<br>`>>> True or False`<br>`True`<br>`>>> False and False`<br>`False`<br>`>>> not True`<br>`False`<br>`>>> not False`<br>`True` |

Note the following points on some of the operators listed in Table 6.1:
- The `+` operator behaves differently depending on the type of the operand. When the operands are integer or floating-point numbers, the operator serves as a normal addition operator known in mathematics. But when the operands are strings, the operator serves as a concatenation operator, which combines the strings given to it into one.
- The modulus (`%`) operator returns the remainder of the division of the left operand by the right one.
- The floor division also known as integer division (`//`) operator divides and returns only the integer value of the quotient. The division (`/`) operator, however, generates the exact division result including the fraction part if any.
- The exponentiation (`**`) operator raises the left operand to the power of the right operand.

Variables can be assigned to values of a different data type than the one they were previously assigned to. Therefore, the value of a variable, as well as its type, can be changed to something different from what it was first set to in Python. As you can see in the following example, the variable `X` is first assigned to a floating-point number. Then it is assigned to a string value "Hello". The second assignment results in a change not only in the value but also in the data type of the variable.

```python
>>> x = 5.5
>>> type(x)
<class 'float'>
>>> x = "Hello"
>>> type(x)
<class 'str'>
```

#### Activity 6.5

Write the results of the following expressions:
- a. `10 % 2` = ________________
- b. `2.5 ** 3` = ________________
- c. `11 // 3` = ________________

### 6.3.4 Data Type Conversion

Type conversion is the process of converting the value of one data type to another. Type conversion is of two types in Python: implicit conversion and explicit conversion.

**Implicit conversion** is a type of conversion in which Python does the conversion without the involvement of the programmer. This is usually done to avoid loss of data. See the following example:

```python
>>> x = 4
>>> type(x)
<class 'int'>
>>> y = 5.5
>>> type(y)
<class 'float'>
>>> z = x + y
>>> z
9.5
>>> type(z)
<class 'float'>
```

Note the following points from the above example:
- The data types of x and y are int and float respectively as shown in the example.
- The variable z is assigned to the value of x+y, and its data type is automatically set to float. This is because Python always converts smaller data types (int in this case) to larger data types (float in this case) to avoid data loss. If the data type of z is set as int, the value that will be stored in it will not be the correct value.

**Explicit conversion** is a type of conversion of one data type to another that is done by the programmer. The predefined functions associated with the different kinds of data types such as `int()`, `float()`, and `str()` are used for explicit conversion.

The syntax for conversion is given as follows:
```python
<required_dataType>([value])
```

The following example demonstrates how Python responds to an attempt to add string and integer values:

```python
>>> x = 4
>>> type(x)
<class 'int'>
>>> y = "5"
>>> type(y)
<class 'str'>
>>> z = x + y
Traceback (most recent call last):
  File "<pyshell#6>", line 1, in <module>
    z = x + y
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

As shown in the above example, Python does not allow adding an integer number with a string. If the numbers stored in the integer and the string variables are to be added up, an explicit type conversion has to be used. See the following example to learn how the above error is avoided using explicit type conversion:

```python
>>> x = 4
>>> type(x)
<class 'int'>
>>> y = "5"
>>> type(y)
<class 'str'>
>>> z = x + int(y)
>>> z
9
>>> type(z)
<class 'int'>
```

As shown in the above example, the code did not generate any error this time. This is because explicit type conversion is used to convert the value of y to int type before it is added with the value of x.

#### Activity 6.6

Write the expressions used to convert the value 1.5 into integer as well as string values?

## 6.4 Statements and Expressions

### Statements

A statement is an instruction that the Python interpreter executes. As discussed in the introduction section, instructions are the orders or commands that the computer follows to do something. Assignment and `print()` statements are the two types of statements that are in some ways mentioned in the previous sections. An assignment statement, for instance, assigns value to a variable while a `print()` statement displays the value that is given to it. There are several other types of statements in Python including the "if" statement, "while" statement, and "for" statement, which are covered in the 12th Grade IT textbook.

The example in Figure 6.7 demonstrates the use of assignment and `print()` statements in Python:

**Figure 6.7: Assignment and print() statements**

| Python Script | Output on the IDLE Shell |
|---------------|--------------------------|
| ```python<br>x = 5<br>y = 10<br>print(x + y)<br>``` | ```<br>RESTART: C:/Users/...<br>15<br>>>><br>``` |

As you can see in the output, it is only the print statement that produces an output. The two assignment statements simply assign values to the variables and do not produce any output.

### Expressions

Expressions are what the Python interpreter evaluates to produce some value. An expression could be a simple literal value, a variable, or something more complex which is a combination of literals, variables, and operators.

Table 6.2 shows the three types of expressions, and how they are used in assignment and `print()` statements.

#### Table 6.2: Types of expressions

| Literal value expressions | Variable expressions | Complex expressions |
|---------------------------|----------------------|---------------------|
| `x = 5` | `x = y` | `x = 4 * (y - 5)` |
| `print(10)` | `print(y)` | `print(x + 5)` |

Using the `print()` and assignment statements, Figure 6.8 further shows the differences and relationships between statements and expressions in Python.

**Figure 6.8: Statements and Expressions** - Shows that an expression like `x = "This is Python programming"` is part of a statement, and how `print(x)` is a statement that contains an expression.

If an expression is typed into the interactive interpreter, the Python interpreter evaluates and displays the value as shown in the following example:

```python
>>> x = 5
>>> x
5
>>> x + 5
10
>>> 5
5
>>> "Hello"
'Hello'
```

However, if any expression is written in the text editor, it will not be displayed unless it is put inside the parenthesis of a `print()` statement. Therefore, to see the value of expressions on the screen while using the text editor, the `print()` function has to be used.

#### Activity 6.7

1. What is the difference between statements and expressions in Python?
2. Identify the statements from the following list that produce outputs:
   - `x = 4 * 3`
   - `y = "Programming in Python is fun"`
   - `print(y)`
   - `z = x / 2`
   - `print(z)`
   - `y = 10`
   - `print(type(x))`
3. When the code given in activity #2 is executed, what would be the output on the screen?

## 6.5 Writing a Simple Program

Programs normally accept input and process the input to produce an output. As shown in the preceding sections, the `print()` function is used to produce output on the IDLE shell. The `print()` function has the following syntax:
```python
print([value])
```

A function is a piece of code that performs some task and is called by its name. It can be passed data as input to operate on, and can optionally return data as output. `print()`, `input()` and `type()` are examples of functions.

In the above syntax, the name of the function is print. The value that is given to the `print()` function as input can be any type of expression that evaluates to some value.

See the example in Figure 6.9 for the different types of values that the `print()` function can take as input.

**Figure 6.9: Inputs of the print() function**

| Python script | Output on the IDLE Shell |
|---------------|--------------------------|
| ```python<br>x = 6.5<br>print(5)<br>print(x)<br>print(x * 5)<br>print("This is a string")<br>``` | ```<br>5<br>6.5<br>32.5<br>This is a string<br>>>><br>``` |

To accept input from the keyboard, the `input()` function is used. The `input()` function has the following syntax:
```python
variable_name = input([prompt])
```

The following points are important to understand how the `input()` function works:
- The prompt that is given as input to the `input()` function is a string that tells the user what kind of value the user is expected to enter. Example: "Enter an integer number"
- After the user enters a value and presses the enter key, the `input()` function returns the value the user entered as str type. This means that irrespective of the type of value that the user enters, the value that the `input()` function returns is of str type. Therefore, if the value that is required is of another type, the str type should be converted to the required type.
- The value the `input()` function returns should be assigned to a variable. This indicates that when the `input()` function is used, it is used as an expression in an assignment statement.

Example:
```python
x = input("Enter an integer number")
x = int(x)
```

#### Activity 6.8

Write a program in the text editor that has the following elements:
- Accept the name, age, and Body Mass Index (BMI) of a person from the keyboard using the `input()` function,
- Convert the values to their appropriate data type, and
- Display the values using the `print()` function.

The following example demonstrates how the `input()` and the `print()` functions are used in a program. It shows how the `input()` function is used to accept data from the keyboard, and how the `print()` function is used to display the result on the screen. The program simply accepts the radius of a circle from the user and displays the area and circumference of the circle.

**Figure 6.10: Using input() and print() functions**

| Python Script | Output on the IDLE Shell |
|---------------|--------------------------|
| ```python<br>PI = 3.14<br>x = input("Enter the radius: ")<br>radius = float(x)<br>area = PI * radius**2<br>circumference = 2 * PI * radius<br>print("The area of the circle is:")<br>print(area)<br>print("The circumference of the circle is:")<br>print(circumference)<br>``` | ```<br>Enter the radius: 6<br>The area of the circle is:<br>113.04<br>The circumference of the circle is:<br>37.68<br>>>><br>``` |

The following points are important to note regarding the program shown in Figure 6.10:
- The prompt given to the `input()` function should be written in a manner that helps the user clearly understand what to do.
- The data type of the value that is returned by the `input()` function is changed to float, which is the right data type for values like the radius of a circle.
- `print()` function displays its outputs in separate lines. Therefore, the strings and the values are displayed each on a separate line.

In the example shown in Figure 6.10, a `print()` function is used to display each output separately. However, if multiple values are required to be displayed in one line, the values should be given to the `print()` function with comma separation. See Figure 6.11 for the modified version of the program.

**Figure 6.11: Displaying multiple values in one line**

| Python Script | Output on the IDLE Shell |
|---------------|--------------------------|
| ```python<br>PI = 3.14<br>x = input("Enter the radius: ")<br>radius = float(x)<br>area = PI * radius**2<br>circumference = 2 * PI * radius<br>print("The area of the circle is:", area)<br>print("The circumference of the circle is:", circumference)<br>``` | ```<br>Enter the radius: 6<br>The area of the circle is: 113.04<br>The circumference of the circle is: 37.68<br>>>><br>``` |

As shown in Figure 6.11, the string literal values and the variables are given to the `print()` function with comma separation. As a result, the results are displayed in one line.

#### Activity 6.9

1. Write a program that accepts two numbers from the user and displays the product on the screen.
2. Write a program that displays the BMI of a person by accepting the weight and height from the user.

## Unit Summary

In this unit, you have learnt about:
- What is meant by a computer program
- The three types of programming languages, namely, machine language, assembly language, and high-level language
- Translation software, such as Assembler, Compiler, and Interpreter
- The difference between compilers and interpreters
- The concept of syntax and semantics in programming languages, and the associated error types
- What the high-level programming language called Python is
- How to write Python scripts using the interactive interpreter and the text editor
- How to save Python script files and how to run the scripts
- The concept of variables and data types in Python
- Valid and invalid identifiers
- The basic built-in data types
- Assigning values to variables using an assignment operator
- Operators, such as arithmetic operators (+, -, /, //, %, *, **), Boolean operators (and, or, not) and assignment operator (=)
- Conversion of values from one data type to another using explicit and implicit type conversion methods
- The concept of statements and expressions in Python
- The differences and relationships between statements and expressions
- How to write a simple program by reading data from the keyboard using the `input()` function and displaying results using the `print()` function

## Key Terms

**Assembler** - A software used to translate programs written in assembly language into machine language.

**Assembly Language** - A low-level programming language that uses symbols/mnemonics instead of binary.

**Assignment Operator (=)** - An operator used to assign values to variables.

**Binary System** - A system in which everything is represented in terms of 1s and 0s.

**bool** - A data type that represents True or False values.

**Data type** - Specifies the type of values a variable can have and the operations defined on the values.

**Explicit type conversion** - A data type conversion done by the programmer using built-in functions.

**Expression** - What the Python interpreter evaluates to a certain value.

**float** - A data type for floating-point numbers.

**Floating Point Number** - A number with a decimal point that represents real numbers.

**Function** - A piece of code that performs some task.

**High-level Language** - A programming language closer to human language than machine language.

**Identifier** - The name of a variable.

**IDLE** - Stands for Integrated Development and Learning Environment.

**IDLE shell** - The same as the interactive interpreter.

**Implicit type conversion** - A data type conversion done by Python without the involvement of the programmer.

**int** - A data type for integer numbers.

**Keywords** - Reserved words that have predefined meanings in a programming language.

**Machine Language** - A low-level programming language that the computer understands directly.

**Program** - A set of instructions that commands the computer what to do.

**Programmer** - A professional who writes computer programs.

**Programming Languages** - Computer languages used to write computer programs.

**Python** - A popular high-level programming language.

**Python's Interactive Interpreter** - Contains Python shell to write and execute Python codes one line at a time.

**Python's Text Editor** - A text editor to write unlimited lines of Python codes that can be executed.

**Script** - Codes found in a file saved with .py extension.

**Script file** - A file with Python scripts.

**Semantics** - Related to the meaning of elements of a program and what they accomplish.

**Statement** - An instruction executed by the Python interpreter.

**str** - A data type for strings enclosed with double/single quotes.

**Syntax** - The grammatical rules of a programming language.

**Type conversion** - The process of converting values from one data type to another.

**Variable** - A computer memory location used to store data.

## Review Questions

### Part I: Write True if the statement is correct and False if it is incorrect

1. A program written in assembly language can be directly understood by the computer.
2. It is only high-level programming languages that have syntax and semantics.
3. Syntax errors are easier to fix than logic errors.
4. Python's interactive interpreter can be used to execute multiple lines of codes at a time.
5. When Python's text editor is opened, the prompt (>>>) immediately appears.
6. Once a variable is set to a specific data type, its type cannot be changed.
7. The results of the two expressions 5/2 and 5//2 are not the same.
8. In implicit type conversion, the programmer has to use built-in functions to convert values from one type to another.
9. The data type "bool" has only two possible values.
10. Expressions and statements are the same things in Python.

### Part II: Match the items given under column B with associated items in column A

| Column A | Column B |
|----------|----------|
| 1. Rules of a language | a. Interpreter |
| 2. A keyword such as str | b. Compiler |
| 3. Name of variables | c. Machine Language |
| 4. That which is evaluated to some value | d. Assembly Language |
| 5. Meanings of elements of a language | e. Statement |
| 6. 1s and 0s | f. Syntax |
| 7. Interface to work with Python language | g. Operator |
| 8. Mnemonics | h. Semantics |
| 9. Translating the whole program | i. IDLE shell |
| 10. Translating one line at a time | j. Identifier |
| | k. Type conversion |
| | l. Data type |
| | m. Expression |

### Part III: Choose the correct answer from the given alternatives

1. Which of the following programming languages is the one that is directly understood by the computer?
   - A. Assembly Language
   - B. High-level language
   - C. Machine language
   - D. Python

2. Which of the following is not an example of high-level programming languages?
   - A. C++
   - B. Java
   - C. Python
   - D. None of the above

3. The operand on the left side of the assignment operator (=) is always:
   - A. A variable
   - B. String value
   - C. Integer value
   - D. An expression

4. Which of the following is a valid identifier?
   - A. `&_x`
   - B. `_xs`
   - C. `123`
   - D. `print`

5. Identify the function that is not used for type conversion purposes.
   - A. `int()`
   - B. `type()`
   - C. `str()`
   - D. `float()`

### Part IV: Fill in the blank spaces

1. A programming language that is an example of those that use compilers is ________________

2. A special type of software used to translate assembly language programs into machine language is known as ________________

3. A type of error related to violating the rules of a programming language is known as ________________

4. A type of error related to the semantics of a programming language is known as ________________

5. The extension with which Python script files are saved is ________________

### Part V: Code Writing

1. Using the `print()` function, write a program in the text editor that displays all of the subjects you are taking in the current semester each on a new line.

2. Write a program in the text editor that does the following:
   - a. Creates three variables with integer, floating-point number, and string values.
   - b. Displays their values and data types. (hint: use the `type()` function to know the data types)

3. Write a program in the text editor that does the following:
   - a. Creates a variable with one type of value.
   - b. Reassigns the variable to a different type of value.
   - c. Displays the data type of the variable before and after the reassignment.

4. Write a program in the text editor that converts the following two string values into floating-point numbers and displays their product on the screen:
   - "4.5"
   - "30.2"

5. Write a program that accepts two numbers from the user and displays the following:
   - a. The sum
   - b. The product
   - c. The average value