# Unit 6: LOGO Programming

*Grade 7 - Fetena.net: Ethiopian No#1 Educational Resource*

## Unit Outcomes

At the end of this unit, students will be able to:

- describe graphical elements of LOGO
- write procedures on LOGO environment

## Overview

This unit will introduce students to programming in LOGO and describes the basic elements of LOGO environment. LOGO is a text-based programming language where children type commands that are then drawn on screen. This unit also introduces the basic LOGO commands where the students use their knowledge of LOGO commands to read and write a code.

## 6.1 Programming Language

### Brainstorming Activity

Do you know what programming languages are? If so? Is it different from human languages like English?

### What is a Programming Language?

A computer programming language is an artificial language designed to instruct a computer what to do. There are different types of computer programming languages such as C++, Python, Java, and LOGO. In this unit, LOGO programming language is discussed.

LOGO is a programming language specifically designed for its ease of use and graphics capabilities. It was originally designed to introduce children to programming concepts.

LOGO's graphics language is called turtle graphics which allows complex graphics images to be created with a minimum of coding. LOGO is a programming language that is very simple and easy to learn. It is used for teaching students and children how to program a computer.

### Why Should We Learn LOGO Programming Language?

- Because it is lots of fun
- It enhances the logical sense of the children
- It develops programming skills

To write programs using LOGO programming language, first we need to have the software installed in our computer. MSW Logo is the most commonly used software to write programs in LOGO programming language.

**Figure 6.1: MS Logo software icon**  
The image shows the MSW Logo application icon as it appears on a computer desktop or programs menu.

### Steps to Open MSW Logo

To open the MSW Logo, you can open by clicking on the icon as shown in Figure 6.2 directly from the desktop, or you can use the following steps:

- Click on the start button
- Click on programs
- Then click on Microsoft Windows Logo

**Figure 6.2: Steps to open MSW LOGO**  
The image demonstrates the step-by-step process of opening MSW Logo through the Windows Start menu, showing the Programs folder and Microsoft Windows Logo application selection.

Once you have opened the MSW Logo application, you can run the demonstration by clicking on Help menu and then click on...

### Activity

- Discuss in group and write the differences between programming language and natural language
- What is the purpose of using computer programming language?

## 6.2 Graphical Elements of MSW Logo

As illustrated in Figure 6.3, the MSW Logo screen has two parts:

- **Main screen**: is also known as the graphic screen. It is the place to draw pictures or figures.
- **Commander window**: is the place to give commands to the turtle.

**Figure 6.3: The two main parts of MSW Logo**  
The image shows the MSW Logo interface divided into two primary sections: the main graphics screen (turtle playground) at the top and the commander window at the bottom.

The MSW Logo screen elements are shown in Figure 6.4, and the detail descriptions of each of the screen elements are given below:

- **Title bar**: Contains the name of the program (MSW Logo)
- **Menu bar**: Contains various options for handling, editing and formatting file. Menu titles contain various sub-options which appear when these menu titles are clicked
- **Button bar**: Provides additional shortcuts for LOGO commands. To execute a button command, position the mouse cursor on the button and press the left mouse button
- **Listener window**: The area where the commands are executed
- **Turtle**: The triangle shape in the center of the graphic screen is called turtle. The turtle moves on the screen according to the commands you give
- **Command input box**: It is where you type commands in and execute them by clicking on the Execute button or by pressing the Enter key on the keyboard. The command input box is located in the bottom left portion of the commander window
- **Output or command-recall list box**: Displays and records all the commands that are executed and any messages which are outputs of these commands. Output or command-recall list box is located above the Command Input Box

**Figure 6.4: MSW Logo screen elements**  
The image provides a detailed labeled diagram of the MSW Logo interface, showing the title bar, menu bar, button bar, turtle playground with the triangle-shaped turtle, commander window, input box, command box, and command buttons including Halt, Trace, Pause, Status, NoYield, Reset, and Execute.

## 6.3 Basic MSW LOGO Drawing Commands

The MSW Logo consists of four basic drawing commands:

- Move the turtle forward
- Move the turtle backward
- Turn the turtle right
- Turn the turtle left

LOGO drawing command understands only the LOGO commands. The center of the MSW LOGO screen is the home of the turtle. We can use the abbreviations of the basic commands where the abbreviations of these commands are given as:
- `fd` – forward
- `bk` – backward
- `rt` – right
- `lt` – left

Each of these commands must be followed by one value called argument. The arguments for `fd` and `bk` are units; `rt` and `lt` are angles that can be any number.

**For example:**
- `forward 10` or `fd 10` means go forward 10 steps
- `right 90` or `rt 90` means right turn 90 degrees
- `left 90` or `lt 90` means left turn 90 degrees
- `back 10` or `bk 10` means go back 10 steps

In addition to the above four basic drawing commands, clear screen (`cs`) is the other commonly used MSW Logo command that helps to erase all drawings and set the turtle at the home position.

### Activity

- In a group, discuss and report the four major MSW LOGO screen elements to the class
- Write the MSW LOGO drawing commands that move the turtle 20 steps forward, then turn 50 degrees left and move 20 steps forward. Draw the shape created by this command on a sheet of paper

## 6.4 Procedures

A procedure is a set of instructions that is given a name that describes it. It helps us to organize a large project into smaller parts that work together to achieve a goal. The MSW Logo commands described in section 6.3 such as FORWARD and BACK are called primitive procedures. They are words that LOGO has already known. We can also add new words to the language and then use them as if they were built-in. The details on how to create new words are usually called procedures.

Usually it is much easier to type a one-word procedure name than to type all of the instructions that would do the same thing. For example, we would type `SQUARE` or `REPEAT 4[FORWARD 100 RIGHT 90]` every time we want a square. Defining a procedure is so simple that we will often do that before even typing out a long sequence of commands. A procedure's name is one word that should describe what the procedure does so that you can easily remember what it is for.

We have to always define the procedure before using it; otherwise we will receive a message like "your procedure is not in LOGO's vocabulary yet" as illustrated in Figure 6.5.

**Figure 6.5: Message in the Listener window of MSW LOGO**  
The image shows the listener window displaying an error message: "SQUARE is neither a procedure nor a name" when attempting to run an undefined procedure.

### 6.4.1 Defining a Procedure

To write a LOGO procedure we can use either of the following options:

- The TO command
- The Editor window

#### Steps to write a PROCEDURE using TO commands:

**STEP 1**: Click in the Command Input Box  
**STEP 2**: Type `TO` followed by a name for the procedure, for example: `TO SQUARE`  
**STEP 3**: Now, press the `Enter` key  
**STEP 4**: After pressing the `Enter` key, the To Mode Input box appears as shown in Figure 6.6.  
**STEP 5**: Click inside the box  
**STEP 6**: Enter the commands one after the other, pressing the `Enter` key after each command  
**STEP 7**: Type `END` to mark the end of the procedure

**Figure 6.6: To Mode Input box**  
The image shows a dialog box titled "To Mode [Cancel to End]" with an input field and OK/Cancel buttons, used for entering procedure commands line by line.

#### Steps to write a PROCEDURE using Editor window:

Alternately, we can write a LOGO PROCEDURE using an EDITOR WINDOW:

**STEP 1**: Click in the Command Input box and type `Edit "Square"` and press the `Enter` key. Square is the name of a new procedure. The Editor Window appears as shown in Figure 6.7.

**Figure 6.7: Editor Window of MSW Logo**  
The image shows the MSW Logo Editor window with a blank workspace for writing procedures, featuring a menu bar with File, Edit, Search, Set, Test, and Help options.

**STEP 2**: Insert a blank line after the line containing `TO SQUARE` by pressing `Enter` key.  
**STEP 3**: Type the commands that you want to be included in the procedure as shown in Figure 6.8  
**STEP 4**: Click on `File` in the Menu bar of the Editor window.  
**STEP 5**: Click on `Save and Exit` option in the Dropdown menu.

**Figure 6.8: Commands in editor window on MSW LOGO**  
The image shows the Editor window containing the following code for a square procedure:
```
TO SQUARE
CS
FD 40
RT 90
FD 40
RT 90
FD 40
RT 90
FD 40
END
```

The instructions/commands you type in the commands input box or editor window are remembered for later - not run immediately.

### 6.4.2 Running A Procedure

Running a procedure means executing the set of commands typed and saved in the procedure. A defined procedure can be called any time by simply typing the name of the procedure in the command input box. You can run a procedure by typing the name of the procedure, for example, `SQUARE` in the command input box and then pressing the `Enter` key. For example, a SQUARE picture in Figure 6.9 is a sample output for the procedure defined in Figure 6.8.

**Figure 6.9: Sample output of a procedure defined in fig**  
The image shows the main graphics screen with a square drawn by the turtle, demonstrating the output of the SQUARE procedure.

### Activity

- Define a procedure and give an example of a procedure that draws a 10 by 5 unit rectangle

## Summary

- LOGO stands for Logic Oriented Graphics Oriented
- MSW LOGO screen is divided in two parts: graphics window and listener window
- `CS` command clears the graphics screen
- A procedure is a set of instructions, which is given a name that describes it
- We can write a procedure in two ways: using the "Input Box" or using the "Editor window"
- Procedures are small programs that can be called on again and again through one word without typing them all out
- Running a procedure means executing the set of commands typed and saved in the procedure
- The file saved in LOGO will have an extension of `.LGO`

## Review Questions

### Part I. Write TRUE if the statement is correct, and FALSE if it is incorrect.

1. Command input box is one of the graphics elements of MSW LOGO.
2. MSW LOGO can only be used to draw figures.
3. FD 50 command makes the turtle take a half turn.

### Part II. Choose the best answer among the given alternatives.

1. Which one of the following is not a programing language?
   - A. LOGO
   - B. English
   - C. C++
   - D. Java

2. Which one of the following turns the turtle 10 degree to the left?
   - A. fd 10
   - B. rt 10
   - C. lt 10
   - D. lf 10

3. The triangle shape at the center of the main screen is_____
   - A. Listener Window
   - B. Turtle
   - C. Command Input Box
   - D. Button bar

4. Which one of the following is the extension for files saved in LOGO?
   - A. .LG
   - B. .LOG
   - C. .LOGO
   - D. .GO

5. Which one of the following is the characteristic of LOGO programming?
   - A. LOGO is fun
   - B. LOGO enhances the logical sense of the learner
   - C. LOGO is easy to learn
   - D. All

### Part III. Write the correct answer in each of the spaces

1. LOGO is an acronym for___________________?
2. The shape of a turtle in MSW LOGO is like__________?
3. The two main parts of MSW LOGO windows are___________

### Part IV. Discussion questions

1. What is another name of LOGO commands?
2. Where do we type the commands?
3. Which command is given to make the turtle take a half turn?
4. Why do we define a procedure?
5. How can we make the turtle reappear on the screen?
6. Which command does bring the turtle back to the center of the screen?
7. Write a procedure to draw the following diagrams:

**Figures a) and b):**  
The images show two geometric diagrams to be drawn using LOGO procedures (specific shapes not described in text, but appear to be basic geometric figures for students to replicate).