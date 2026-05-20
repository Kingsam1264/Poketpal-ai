# Unit 6: LOGO Programming - Logic Oriented Graphics Oriented

**Fetena.net: Ethiopian No#1 Educational Resource**

## Unit 6: Logic Oriented Graphics Oriented (LOGO) Programming

### Unit Outcomes

At the end of this unit, students will be able to:
- describe the use of variable in writing procedure;
- create recurring procedure and
- write program using conditional statement;

### Overview

In Grade 7, you have learned about Logic Oriented Graphics Oriented (LOGO) language. You have already known that LOGO is one of the easiest and simplest computer languages. As you remember, LOGO uses to perform various functions such as drawing figures, typing text and performing calculations. In this unit, you will learn about using variables in writing LOGO procedures and creating recursive procedures in LOGO. LOGO 6.5b version was used in this textbook; which is available on the site "https://mswlogo.en.softonic.com/download".

### Brainstorming Activity

- Why do you learn the LOGO language?
- Write some of LOGO turtle commands you learned in grade 7?

---

## 6.1 LOGO Primitives

LOGO uses a triangle shaped turtle that moves on the MSW Microsoft Windows (MSW) LOGO screen. The LOGO turtle can draw and perform actions when you give a command. These commands are also known as primitives. Primitives are entered in the bar called command input box. The basic LOGO primitives are shown in Table 6.1.

**Table 6.1 LOGO Primitives**

| Primitives | Meaning | Action |
|------------|---------|--------|
| FD | Forward | to move the turtle forward |
| BK | Back | to move the turtle backwards |
| RT | Right | to move the turtle to the right |
| LT | Left | to move the turtle to the left |
| HT | Hide Turtle | to hide the turtle |
| ST | Show Turtle | to show the turtle |
| CS | Clear Screen | to clear the screen and send the turtle to the Home position |
| CT | Clear Text | to clear all the commands in the recall list box |
| HOME | Home | to bring the turtle to its Home position |
| PRINT | Print | to write |
| SUM | Sum | to add two numbers |
| DIFFERENCE | Difference | to subtract one number to another |
| PRODUCT | Product | to multiply two numbers |
| PU | Pen up | to move turtle without line |
| PD | Pen down | to put the pen down, and starts drawing again |
| Sqrt | Square Root | It takes a non-negative and returns its square root |
| Exp | Exponential | It bends an argument and compute e to this power, e is the natural number 2.718281828 |

---

## 6.2 Variables in LOGO

A variable is the name of a memory location which can contain a value. Variables are given names which are strings of letters. A variable name can contain alphabets, digits and underscore. Variables are like containers; they contain some "thing" inside. This topic discusses how to make your own variables, how to get at the "thing" inside. Every variable has a name and a value associated with it. A name is a word, just like the words you have used for the names of turtles. A variable is something that can vary.

To define a variable in MSW LOGO, use a statement in the form:

```logo
MAKE "variableName value
```

**Example:**
```logo
make "size 10
```

In this example, the variable called "size" will now have a value of ten (10).

If you want to make use of a variable in a procedure, you must refer to it by writing a colon (:) in front of the variable name. In the example above you would refer to the variable in the form `:size`. If you just write the word "size", without the colon, MSW LOGO will treat it as a text, rather than the value it contains.

**Example:**
```logo
make "size 60
print :size/2
```

There are several ways to give a value to a variable. An explicit way to do this is described below. An implicit way will be seen when we introduce procedures. A variable can be given a value with the make command, as shown below.

```logo
make "size 60
```

This command gives size to the value 60. Note that in this case, we have used `"size`, not `:size`. The reason is that `:size` is the value of the variable size, while `"size` is its name. We say that `"size` is the "quoted name" of size. LOGO tries to "evaluate" words as it reads them because some words are the names of procedures. We quote words to tell LOGO that they should not be evaluated. In LOGO variables do not have types, nor do they have to be declared before used.

```logo
make "size 60
print :size + 2
print :size - 2
print :size * 2
```

Now let us give the variable name a value which is the name of "Hello". Try executing the following commands in the command input box:

```logo
make "name "Hello
print :name
```

Note that we quote the name of the variable name in the make command but we use the colon version to obtain its value. "Hello" is quoted so it is recognized as string and not as a variable. Its output is:

```
Hello
```

---

## 6.3 Recursive Procedures

When you use LOGO, each time you type a command (or a set of commands), the turtle moves immediately. However, the turtle does not "remember" how to make the shape. To create the shape again, you need to type the commands again. A procedure is a way to make the turtle remember a set of commands.

Each procedure is given a name (e.g., SQUARE or HOUSE or BIG.RED.THING). The name may not include spaces. Creating the procedure is like teaching the LOGO turtle the meaning of a word. For example, we can teach the turtle that the word SQUARE means `REPEAT 4[FD 50 RT 90]`. Afterwards, every time we type the word SQUARE, the turtle will know what to do. Procedures are kept in memory as part of a LOGO workspace. The workspace is a collection of all the LOGO procedures currently in memory. These workspaces can be saved and loaded, just like other files.

### Creating a Procedure using TO

All LOGO procedures actually have the word 'TO' as part of the name (e.g., `TO SQUARE` or `TO HOUSE`). All versions of LOGO allow this method for creating procedures. To begin a procedure, type the word TO and a name for the procedure. For example, you could type `TO NAME` or `TO DRAW`.

### Creating a Procedure using EDIT

There is no space between the quote and the name of the procedure. There is no quote after the procedure name. Many LOGO commands follow this pattern.

You will probably see the following two lines in the editing window when you begin a new procedure:

```logo
TO SQUARE
END
```

You will be typing the commands between these two lines, so you may need to press Return/Enter to open up a space to type.

Finishing and saving a procedure using EDIT will depend on the version of LOGO you are using. There may be a menu item such as "Save and Exit". The simplest way is to attempt to close the editing window. The computer asks you if you want to save the changes.

**Example:** To display the output of a procedure in MSWLOGO:

1. Open MSW LOGO;
2. Go to MSWLOGO screen;
3. From the MSWLOGO screen menu, click on File then Edit;
4. Type "square" on Edit Procedure form then OK;
5. Then editor automatically displays form as follows:
6. `TO SQUARE`
7. `END`
8. Type the procedure between TO SQUARE and END;
9. Then click on File and then Save and Exit;
10. Then on the commander command input box, type `square`, click execute and you get the output.

**Fig 6.1: Editor Window Showing Procedure Creation**
The image shows the MSW LOGO editor interface with the procedure definition for a square. The editor window displays "TO SQUARE" at the top, followed by the commands "fd 100", "rt 90", "fd 100" on separate lines, and "END" at the bottom. The MSW LOGO screen shows the turtle drawing an L-shaped figure based on this procedure.

**Activity**

Create the following procedures and view their output:

a.
```logo
TO SQUARE
fd 100
rt 90
fd 100
rt 90
fd 100
END
```

b.
```logo
TO SQUARE
fd 100
rt 90
fd 100
rt 90
fd 100
rt 90
fd 100
rt 90
END
```

In a recursive procedure, there will be a call of the procedure within the procedure. First of all, just what is a procedure? Let us look at it this way. What procedures do you follow when you wake up in the morning? You get out of bed. Some people have a lot of trouble with that. You get cleaned up, put on your clothes, eat your breakfast, brush your teeth, and go to school or elsewhere. Procedures are how you do things, the steps you take to make something happen. LOGO procedures are things you teach LOGO to do. They include all the steps LOGO must take to make something happen.

When a procedure invokes a copy of itself, it is said to be recursive. The meaning of recursive procedures is obtained in exactly the same way as regular procedural invocation, namely, via the copy rule. An example of a recursive procedure is given below:

```logo
TO STAR
repeat 100 [fd 100 rt 144]
END
```

**Fig 6.2: Code and Output for Star Procedure**
The image shows the LOGO editor with the star procedure code: "TO STAR" followed by "repeat 100[fd 100 rt 144]" and "END". The output displays a star pattern drawn by the turtle on the graphics screen.

---

## 6.4 Conditional Statements

Conditional statements are statements that are used to decide whether or not the condition is true or false. Conditional statements always have an if part which tells the application what to do when the condition is true. Conditional statements also usually have an else part, which tells the app what to do when the condition is false. If you leave out the else part then your application will do nothing when the condition is false.

### Conditional Command: ifelse

**General form:**
```logo
ifelse [true/false condition] [action if true] [action if false]
```

**Example 1:**
```logo
make "variable1 23  // variable 1 is equal to 23
make "variable2 23  // variable 2 is equal to 23
ifelse :variable1 = :variable2 [print [It's TRUE]] [print [It's FALSE]]
```

In MSWLOGO editor the above Example 1 code is written as:

**Fig 6.3: Example 1 Code in LOGO Editor**
The image shows the LOGO editor window with the code for Example 1. The code displays two make commands assigning 23 to variable1 and variable2, followed by an ifelse command that compares the variables and prints "It's TRUE" or "It's FALSE".

The MSWLOGO displays the output for the above Example 1 code as:

**Fig 6.4: Output of Example 1**
The image shows the LOGO commander window displaying the output "It's TRUE" in response to the conditional statement execution.

**Example 2:**
```logo
make "variable1 23  // variable 1 is equal to 23
make "variable2 25  // variable 2 is equal to 25
ifelse :variable1 = :variable2 [print [It's TRUE]] [print [It's FALSE]]
```

In MSWLOGO editor the above Example 2 code is written in the following format.

**Fig 6.5: Example 2 Code in LOGO**
The image shows the LOGO editor with Example 2 code, similar to Example 1 but with variable2 assigned the value 25.

The MSWLOGO displays the output for the above figure as:

**Fig 6.6: Output of Example 2**
The image shows the LOGO commander window displaying the output "It's FALSE" since variable1 (23) does not equal variable2 (25).

### Conditional Command: Using until and while

**General form:**
```logo
until [condition] [action]
while [condition] [action]
```

**Example:**
```logo
make "count 1
until [:count > 5] [print :count make "count :count + 1]
```
**Output:** 1 2 3 4 5

```logo
make "count 5
while [:count < 10] [print :count make "count :count + 1]
```
**Output:** 5 6 7 8 9 10

### Conditional Command: do.until, do.while

do.until and do.while are effectively the same as until and while except that the `<action>` and `<condition>` are reversed.

**Using do.until and do.while**

**General form:**
```logo
do.until [action] [condition]
do.while [action] [condition]
```

**Example:**
```logo
make "count 1
do.until [print :count make "count :count + 1] [:count > 10]
```
**Output:** 1 2 3 4 5 6 7 8 9 10

```logo
make "count 1
do.while [print :count make "count :count + 1] [:count < 10]
```
**Output:** 1 2 3 4 5 6 7 8 9

---

## Activity

Find the output for the following LOGO programs:

1.
```logo
make "variable1 50
make "variable2 51
ifelse :variable1 = :variable2 [print [It's TRUE]] [print [It's FALSE]]
```

2.
```logo
make "count 12
until [:count > 20] [print :count make "count :count + 2]
```

3.
```logo
make "add 1
do.until [print :add make "add :add + 5] [:add > 15]
```

4.
```logo
TO SQUARE
REPEAT 4 [FD 100 RT 90]
END
REPEAT 20 [SQUARE RT 20]
```

---

## Summary

In this unit, you have learned about primitives, variables, procedure and conditional statements in LOGO:

- Primitives are commands in LOGO programming.
- Variable is the name of a memory location which can contain a value.
- Variables are given names which are strings of letters.
- Procedure is a way to make the turtle remember a set of commands.
- Creating the procedure is like teaching the LOGO turtle the meaning of a word.
- Recursive is a procedure that invokes its own copy.
- Conditional statements are statements that are used to decide whether or not the condition is true or false.

---

## Review Questions

### Part I: Say "True" if each of the following statements is correct and "False" if it is incorrect

1. After a variable, there is always a quote.
2. Colon is used to refer to the variable in LOGO programming.
3. A procedure is a way to make the turtle remember a set of commands.
4. Recursive procedures cannot be written in LOGO.
5. Recursive procedure is a call for the procedure within the procedure.

### Part II: Write the correct answer on the blank space

1. A _________________ is the name of memory location that contains a value.
2. A LOGO procedure is called ___________________ if it calls itself as a sub procedure.
3. The ______________ is used to clear all the commands in the recall list box.
4. _____________________ are entered in the bar called command input box.
5. All LOGO procedures have the word ___________________ as part of their name.

---