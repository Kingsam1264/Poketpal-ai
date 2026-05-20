# Unit 6: Fundamentals of Programming

## Unit Outcomes

At the end of this unit, learners will be able to:

- Explain concepts of algorithms and programming  
- Describe the representation of algorithms using flowcharts and pseudocode  
- Discuss Integrated Development Environment (IDE)

---

## 6.1 Unit Overview

As defined and discussed in Grade 9, problem-solving steps are used to solve day-to-day problems and make strategies to handle different situations. One method of solving problems in computer science is using algorithms. In this unit, you will learn the basics of algorithms, their definition, characteristics, representation, and an introduction to Integrated Development Environments.

---

## 6.2 Basics of Algorithm

### Brainstorming

1. What do you recall by the term algorithm?  
2. How do you verify problem-solving concepts?

An **algorithm** is a step-by-step process of solving a well-defined computational problem. To solve complex real-life problems, we first define the problem and then design an algorithm to solve it. Algorithms simplify the structure of programs.

Computers are machines that do only what they are instructed to do. Programs are developed to solve problems using programming languages like Basic, C, C++, Java, and Python.

### Steps to Solve a Problem Using Computers

a. Analyze the problem thoroughly.  
b. Break the solution method into small tasks.  
c. Prepare an algorithm based on the analysis.  
d. Express the algorithm in precise notation.  
e. Design a computer program in a high-level language.  
f. Feed the program into the computer.  
g. Execute the instructions to get the expected output.

**Example:**  
Calculate the sum of two numbers, A and B, and store the result in C.  
**Figure 6.1:**  
*A, B → C = A + B*  
This shows input (A, B), process (addition), and output (C).

---

### Activity 6.1

1. Write the steps you may follow to do an everyday activity (e.g., riding a bike, making a sandwich, cooking "shiro wot").  
2. Discuss the steps with a friend.  
3. Can you provide a name for the steps you have written?

---

## 6.3 Definition of Algorithm

### Brainstorming

1. Explain the term algorithm.  
2. Can you state the benefits of using algorithms?

An **algorithm** is a precise method of solving a problem. It consists of a sequence of unambiguous, step-by-step instructions. A **program** is an algorithm converted into code that a computer can execute.

**Definitions:**

- A set of rules for carrying out calculations by hand or machine.  
- A finite step-by-step procedure to achieve a required result.  
- A sequence of computational steps that transform input into output.

**Example:**  
Cooking "doro wot" for the first time involves following a recipe step-by-step. Similarly, algorithms guide programming tasks to produce expected outputs. Algorithms are **language-independent** and can be implemented in any programming language.

---

## 6.4 Characteristics of Algorithm

**Figure 6.3:**  
*Characteristics of Algorithm: Finiteness, Well-defined outputs, Well-defined inputs, Feasible, Language Independent, Clear and unambiguous*

An algorithm must be:

- **Clear and unambiguous**  
- **Well-defined inputs and outputs**  
- **Finite** (must terminate)  
- **Feasible** (practical and executable)  
- **Language-independent**

---

### Activity

1. Form a group of three and choose a problem that can be solved stepwise.  
2. Relate the steps to the components of an algorithm.  
3. Discuss the characteristics of an algorithm.

---

### Advantages of Algorithms

- Easy to understand  
- Stepwise representation of a solution  
- Easier to convert into actual programs

### Disadvantages of Algorithms

- Time-consuming to write  
- Difficult to show branching and looping

---

### Examples of Algorithms

**Example 1: Sum of Two Numbers**

1. Take the first number (input)  
2. Take the second number (input)  
3. Add the two numbers (process)  
4. Display the sum (output)

**Example 2: Check if a Number is Positive, Negative, or Zero**

1. Take a number from the user  
2. If number < 0, display "negative"  
3. If number > 0, display "positive"  
4. Otherwise, display "zero"

**Example 3: Sum of First 10 Natural Numbers**

1. Initialize sum = 0, i = 1  
2. Take the ith number  
3. Add it to sum  
4. Increment i by 1  
5. If i ≤ 10, repeat step 3  
6. Otherwise, output the sum

---

## 6.5 Algorithm Representation

### Brainstorming

1. How do you think algorithms are represented?  
2. What is a flowchart?  
3. What are the benefits of using flowcharts?

Algorithms can be represented using:

- **Flowcharts** (graphical)  
- **Pseudocode** (textual)

---

## 6.5.1 Flowchart Method

A **flowchart** is a graphical representation of the major steps in a process. It uses symbols connected by arrows to show the flow of control and data.

### Basic Flowchart Symbols

- **Oval**: Start or end  
- **Parallelogram**: Input or output  
- **Rectangle**: Process  
- **Diamond**: Decision  
- **Arrow**: Flow direction  
- **Connector**: Connects parts of the flowchart

**Figure 6.4:**  
*Flowchart symbols with shapes and functions*

---

### Example 1: General Flowchart Technique

**Figure 6.5:**  
*Flowchart showing: Start → Input → Process → Decision → Procedure → Output → End*

---

### Example 2: Flowchart to Add Two Numbers

**Algorithm:**

a. Read A and B  
b. Add A and B → C  
c. Display C

**Figure 6.6:**  
*Flowchart: Start → Read A,B → C = A + B → Print C → End*

---

### Example 3: Flowchart to Check if a Number is Positive or Negative

**Algorithm:**

a. Read number x  
b. If x < 0 → print "negative"  
c. Else → print "positive"

**Figure 6.7:**  
*Flowchart: Start → Get Num → If Num > 0 → Print "Positive" / Else → Print "Negative" → End*

---

### Loops in Flowcharts

A **loop** repeats instructions until a condition is met. It includes:

- **Initialization**  
- **Computation**  
- **Test**  
- **Increment**

**Example: Sum of First 50 Natural Numbers**

**Algorithm:**

1. Initialize sum = 0, counter = 1  
2. If counter ≤ 50 → add to sum, increment counter  
3. Else → exit and print sum

**Figure 6.8:**  
*Flowchart: Start → Sum = 0, Counter = 1 → Loop until Counter > 50 → Print Sum → End*

---

### Activity

1. Discuss the use of a flowchart.  
2. List flowchart symbols and their descriptions.  
3. Describe the symbol used to indicate decision.

---

## 6.5.2 Pseudocode

**Pseudocode** is a textual representation of an algorithm using English-like statements. It helps express logic without syntax constraints.

**Example 1: Pseudocode to Add Two Numbers**

```
Begin  
  Numeric nNum1, nNum2, nSum  
  Display "Enter First Number:"  
  Accept nNum1  
  Display "Enter Second Number:"  
  Accept nNum2  
  Compute nSum = nNum1 + nNum2  
  Display "Sum of these numbers: nSum"  
End
```

**Figure 6.9:**  
*Pseudocode block for summing two numbers*

---

### Activity

1. Explain the benefits of using pseudocode.  
2. Write pseudocode for area and perimeter of a circle.  
3. Show how pseudocode relates to flowcharts.

---

## 6.6 Integrated Development Environment (IDE)

### Brainstorming

1. Can you explain what an IDE is?  
2. Describe the benefits of using an IDE.

An **IDE** is an application that facilitates software development by combining tools like a code editor, compiler, and debugger into one interface.

**Figure 6.10:**  
*IDEs for Java and Python: Eclipse, NetBeans, IntelliJ, IDLE, PyCharm, Atom, Anaconda, Jupyter, PyDev, Spyder*

---

## 6.6.1 Definition of an IDE

An **Integrated Development Environment (IDE)** is a software suite that consolidates the basic tools needed for programming. It includes:

- **Code editor**  
- **Compiler or interpreter**  
- **Debugger**  
- **Build automation tools**  
- **Class browser, object browser, class hierarchy diagram**

**Figure 6.11:**  
*IDE functionalities: Autocomplete, Syntax Highlighting, Interpreter, Debugging, Compiler*

**Figure 6.12:**  
*Code editors: VS Code, Sublime, Brackets, Atom*

**Figure 6.13:**  
*Text editors: Sublime Text, Notepad, etc.*

---

### Activity

1. Describe the need for an IDE.  
2. Name three code/text editors.  
3. Compare code editors and text editors.

---

## 6.6.2 Benefits of Using IDEs

- **Faster setup**  
- **Faster development tasks**  
- **Continual learning**  
- **Standardization**

---

## 6.6.3 Different Types of IDE

**Multi-language IDEs:**

- **Eclipse** – Java, C++, Python, PHP  
- **NetBeans** – Java, JavaScript, PHP, Python, Ruby, C/C++  
- **Komodo** – Multi-language support

**IDEs for Specific Applications:**

- **Mobile Development:** Android Studio, Visual Studio  
- **HTML Development:** HomeSite, DreamWeaver, FrontPage  
- **Cloud-based IDEs:** Nitrous (supports 40+ languages)

**Figure 6.14:**  
*IDE software: Microsoft Visual Studio, Apache NetBeans, IntelliJ IDEA, Xcode*

---

## 6.7 Unit Summary

- **Flowcharts, pseudocode, and algorithms** are essential for writing good programs.  
- They reduce errors, ease debugging, and clarify logic.  
- **IDEs** combine tools like editors, compilers, and debuggers to boost productivity.  
- Examples: Eclipse, NetBeans, Android Studio, etc.

---

## 6.8 Unit Review Exercise

### Part I: True or False

1. A sequence of instructions given to a computer is known as a program.  
2. Branching and looping structures are well described using an algorithm.  
3. An algorithm is a precise method of solving a problem.  
4. Flowchart method is a verbal description of an algorithm.  
5. NetBeans is a text editor.

---

### Part II: Multiple Choice

1. Which is **not** a characteristic of an algorithm?  
   A. Ambiguity  
   B. Simplicity  
   C. Correctness  
   D. Precision  

2. Which symbol indicates a decision in a flowchart?  
   A. Oval  
   B. Rectangle  
   C. Diamond  
   D. Parallelogram  

3. Which is **incorrect** about an algorithm?  
   A. It has well-defined steps  
   B. It must be unambiguous  
   C. It should terminate  
   D. It is dependent on a specific programming language  

4. A step-by-step method using English is called:  
   A. Program  
   B. Flowchart  
   C. Statement  
   D. Algorithm  

5. A set of statements executed based on a condition is:  
   A. Looping  
   B. Selective  
   C. Sequence  
   D. None  

6. Repeated execution based on a condition is:  
   A. Looping  
   B. Selective  
   C. Sequence  
   D. Conditional  

7. The graphical representation of an algorithm is:  
   A. Program  
   B. Flowchart  
   C. Statement  
   D. Algorithm  

8. All instructions executed one after another is:  
   A. Looping  
   B. Selective  
   C. Sequence  
   D. None  

9. Correct order of algorithm execution:  
   A. Input → Process → Output  
   B. Input → Output → Process  
   C. Output → Process → Input  
   D. Process → Input → Output  

10. Part of loop that describes processing:  
   A. Initialization  
   B. Computation  
   C. Testing  
   D. Increment  

11. IDE stands for:  
   A. Individually Determined Environment  
   B. Indented Development Entity  
   C. Integrated Development Environment  
   D. Integrated Dynamic Entity  

---

### Part III: Discussion Questions

1. Define the term algorithm.  
2. Discuss the use of a flowchart.  
3. Explain pseudocode.  
4. Summarize flowchart symbols.  
5. Write an algorithm and draw a flowchart for the sum of the first 10 natural numbers.  
6. Write an algorithm to find the greatest of three numbers.  
7. Write an algorithm to check if a number is prime.  
8. Draw a flowchart to find the roots of a quadratic equation ax² + bx + c = 0.  
9. Write an algorithm and draw a flowchart for:  
   **result = (u + v²) / w**  
   using inputs u, v, and w.

---