# UNIT-6: FUNDAMENTALS OF PROGRAMMING

## Learning Outcomes

At the end of this unit, students will be able to:
- Explain program flow controls
- Describe conditionals program flow control
- Describe iteration program flow control
- Construct program statements using control statements
- Appreciate Python interpreter using Integrated Development Environment (IDE)
- Analyze program statements in debugging mode

## Unit Overview

A software program is written using a programming language. More than a hundred programming languages have been introduced since the introduction of the computer. Programming languages are designed with a specific purpose. Like human languages, programming languages have their own specific set of rules called syntax, which define how to write instructions in that language. Python relies on indentation to define scope and uses new lines to complete a command. The semantics of a Python program refers to the meaning of the set of rules. In Grade 11, you were introduced to programming language and its generation, basic syntax in Python, and program development.

In this unit, additional language constructs and concepts that can help you develop a program in Python are introduced. First, Python for program flow controls, conditionals, and loop statements are discussed followed by comments, which enable you to provide some text description about your program. Finally, interpreter and debugging the Python program are covered.

## 6.1 Program Flow Controls and Syntax in Python

### Brainstorming

In what order do instructions in a Python program execute?

A program flow control is the order in which the program's code executes. In Python, the flow control of the program is regulated by the implementation of three types of programming language constructs or program logic, namely sequential, branching, and loop. The sequential flow control consists of a simple list of statements that are to be executed in the order given. Everything you learnt about declaring variables, printing output, and reading input from the keyboard in Grade 11 are sequential statements. In this unit, the implementation of the remaining two language constructs: conditional and loop flow controls are discussed.

### Activity

- Discuss the three types of programming language constructs and connect them with real-world scenarios.

## 6.1.1 Conditionals Program Flow Controls

### Brainstorming

"If it rains, then I will take an umbrella." – what type of statement is this?

In some cases, you may need a program to choose one out of two or more alternatives, depending on the input given. For example, suppose you design a program that determines whether the given number is even or odd. An even number is a number divisible by two without a remainder, whereas an odd number is divisible by two with a reminder. We can describe the problem with the following mathematical equation which is called expression in programming:

- `num % 2 == 0` → num is Even, for num any integer number.
- `num % 2 != 0` → num is Odd, for num any integer number.

A given integer number is either even or odd (i.e. two possible options), but this can be decided based on the remainder after dividing the number by two. Python provides conditional or branching statement to implement such solutions. Before starting conditional statements, it is important to learn conditional expressions in Python.

### Conditional Expression

Conditional expressions are statements that use Boolean operators (such as AND, OR, NOT) or comparison operators (such as >, <, !=). Like in mathematics, comparisons of two values in Python are described with comparison signs used in mathematics. Table 6.1 below presents comparison expressions in Python and Mathematics.

**Table 6.1: Conditional Expression**

| Description | Comparisons in Python | Comparisons in Mathematics |
|:------------|:----------------------|:---------------------------|
| Equals | `a == b` | `a = b` |
| Not Equals or inequality | `a != b` | `a ≠ b` |
| Less than | `a < b` | `a < b` |
| Greater than | `a > b` | `a > b` |
| Less than or equal to | `a <= b` | `a ≤ b` |
| Greater than or equal to | `a >= b` | `a ≥ b` |

The comparisons in Table 6.1 are also called conditional expressions that correspond to the Boolean values - true or false. For example, `3 == 4` results in false (as 3 is not equal to 4). Note that operators used in Python's expressions are slightly different from operators used in Mathematics (e.g., `==` vs. `=`, `!=` vs. ≠). Python conditionals can be used in several ways, most commonly in 'if statements' and loop statements.

### Activity 6.2 Work in group

1. Write the Python equivalent expression for the following mathematical equation and determine its output.
   a. `21 ≠ 21`
   b. `97 ≥ 99`
   c. `Price = 135`

2. Write a Python expression to describe the following statement.
   a. Age is less than 12.
   b. Student mark is equal to 95.
   c. Weight less than or equal to 45.5.

3. What is the output of the following expressions (use Python IDE to confirm your answer)?
   a. `19 != 20`
   b. `age = 22`
      `age == 22`
   c. `'zenash' == 'zehara'`

4. What is the difference between `height = 2.5` and `height == 2.5` in Python?

### Conditional or Branching Statements

Conditionals are statements in a program in which the program decides at runtime whether some parts of the code should or should not be executed. From the earlier even/odd example, a given integer number can be even or odd, but this can be decided based on the remainder after dividing the number by two. Therefore, first:

1. Decide whether `(num % 2 == 0)` is or is not true.
2. If it is true, then the number is even.
3. If it is not, then the number is odd.

The evaluation of the conditions (i.e., `num % 2 == 0`) is a test that can be checked to see if it is true or false; as a result, executing one thing when the condition is true, or something else when the condition is false.

In Python, a conditional statement is written using the `if` keyword. Like many other programming languages, Python provides various versions of branching statements that can be implemented using the if clause: simple if statement, if..else statement, and if..elif..else statement.

**Simple if statement:** This is the simplest implementation of a conditional statement that decides only one part of the program to be executed if the condition is satisfied or ignored if the condition fails. The condition is an expression that is either true or false. If the condition (expression) is true, then do the indented statement(s). If the condition is not true, then skip the indented statements.

**Fig 6.1: Syntax for if...statement –** The figure shows a flowchart representation where evaluation of the expression is either true or false. If it is true, then the indented statement(s) is or are executed, otherwise skip the indented statements. The group of statements is called a block.

**Example – Simple if statement**

```python
age = int(input("How old are you?"))
if age > 0:
    print("You are", age, "years old")
    print("Thank you, nice to meet you.")
```

If your input is 1, the expression `age > 0` (i.e., `1 > 0`) is true. Therefore, the two indented statements are executed, and they display their contents on the screen. However, if the input is -1, the expression `age > 0` (i.e., `-1 > 0`) is false. Therefore, the program ignores the indented statement.

| Notes |
|:------|
| The expression (`if age > 0:`) must end with colon (:). Missing colon at the end of expression is a syntax error. |

### Activity

Based on the example presented under the simple if statement above:
a. What is the output if you write age 15?
b. What is the output if you write age 0? Discuss in pair.
c. What is the output of if the second print statement is unindented? Discuss in class.

You can have any statement before or after the 'if statement' which is not considered as part of the 'if statement' and is executed as normal. However, the 'if expression' must follow at least one statement to be executed, otherwise it is a syntax error. See Figure 6.2 for syntactically correct and incorrect if statements.

**Table: Example code and Output description**

| Example code | Output description |
|:-------------|:-------------------|
| `if(10 < 0): print("Invalid input")` | No error, empty output |
| `if(10 < 11): print("Invalid input")` | No error, output "Invalid input" |
| `if(10 < 11):` | Error, if clause must have at least one statement |
| `if(10 < 11): print("Invalid input") print("Try again")` | No error; the last statement is not part of 'if statement', so execute as normal |

**Fig 6.2: Syntax error in if statement –** The table illustrates various syntax scenarios in Python if statements.

### Activity

1. Modify age in the example above to check if the age is greater than 18, and then print 'You are Adult'
2. The following code has an error. Which part of the code does cause the error?
   ```python
   print("Hello student")
   age = int(input("How old are you?"))
   if (age > 0):
       print("You are", age, "years old")
       print("Thank you, nice to meet you.")
   ```
3. If you type -1 and 1, what is the output of the following program? What do you noticed about the first and the last statements?
   ```python
   print("Hello student")
   age = int(input("How old are you?"))
   if(age < 0):
       print("Invalid input")
   print("Thank you, good bay.")
   ```

**if...else statement:** The 'if...else statement' provides two alternative statements or blocks: one following the 'if expression' and another following the 'else clause'. 'if...else' allows us to specify two options: one which is executed if a condition is true (satisfied), and another which is executed if the condition is false (not satisfied).

**Fig 6.3: Syntax for if...else statement –** The figure shows the syntax structure where if the expression evaluates to true, all the yes statements under expression are executed, and if expression evaluates to false, all the no statements under else clause are executed.

Now let us see an example that makes use of the above if...else syntax. Predict what the following program outputs.

As the value of age is 18, the program outputs the first print statement (See in the example below that error: reference source not found).

**Fig 6.4: Implementation of If Else Statement –** The figure shows code on the left and output on the right. The code shows: `age = 18`, `if(age > 19): print("You are adolescent")`, `else: print("You are children")`. The output shows "You are children".

The 'if...else statement' can make a choice between two alternative actions. Thus, the even/odd problem discussed earlier can be accomplished with the following Python statement:

```python
num = int(input("Input integer number"))
if num % 2 == 0:
    print(num, "is Even number")
else:
    print(num, "is Odd number")
```

In the above program, first the expression `num % 2 == 0` is evaluated (checked). If `num % 2 == 0` is true (condition satisfied), then the statement following (print `num, "is Even number"`) is executed. Otherwise, which means the condition `num % 2 == 0` has not satisfied (or false), then the statement following else (print `num, "is Odd number"`) is executed. Now it is time to learn additional syntax rules in Python.

Syntax in a Python program is a set of rules that defines how a Python program is written and interpreted. For instance, the expression of an 'if statement' must be followed by a colon (:). Some programming languages require expressions to be enclosed in parenthesis, but in Python it is optional. So in Python, `if num % 2 == 0:` or `if (num % 2 == 0):` this complies to Python's syntax rule.

Another important syntax in Python is indentation. In Figure 6.3, it is noted that the 'yes_statements' and 'no_statements' must be indented. Indentation refers to the spaces at the beginning of a code line. While in other programming languages the indentation in code is only for readability, the indentation in Python is very important.

Python uses indentation to indicate a block of code. For example, if you ignore the indentation in the example 'if statement' above, and begin the yes_statements or the no_statements without indentation, the code generates an error. Of course, the number of spaces is up to you as a programmer, but it has to be at least one.

| Notes |
|:------|
| Use the same number of spaces in the same block of code; otherwise, Python gives you an error (See Figure 6.5, the last if statement). These are important concepts when you write control statements. |

**Table: Illustrate Syntax rules in Python 'if statement'**

| Code | Error/Output |
|:-----|:-------------|
| `if (10 >5) print("Ten is greater than five", 10>5)` | It has error, missing colon(:) at the end of expression |
| `if (10 >5): print("Ten is greater than five", 10>5)` | It has no error, runs correctly. Enclosing expression with parenthesis is optional. |
| `if 10>5: print("Ten is greater than five", 10>5)` | It has no error; it is a properly indented block. |
| `>>> if 10>5: print("Ten is greater than five", 10>5)` | SyntaxError: expected an indented block |
| `>>> if 10>5: print("Ten is greater than five", 10>5) print("Five is less than ten!", 5<10)` | SyntaxError: unexpected indent |

**Fig 6.5: Illustrate Syntax rules in Python 'if statement' –** The table demonstrates various syntax scenarios and their outcomes.

### Activity 6.5

1. Based on the code in Figure 6.4,
   a. What is the output if the age is 20?
   b. What if the number 0 is stored in age?
   c. When do you get the output "You are children"?

2. A group activity. Write a Python program that reads two numbers from the keyboard and compute division of the first number by the second. Apply appropriate if statement to check that the second number is different from zero, otherwise print "division by zero is not allowed". Do in pair.

**if...elif...else statement:** Assume a problem that could have many options to choose from or require several conditions. For example, you want to develop a program that will print 'Excellent, Very Good, Good, Satisfactory, or Fail' based on the student mark. In such situations, Python allows you to add any number of alternatives using an elif clause after an if and before an else clause.

The `elif` is a keyword in Python to say "if the previous condition(s) are not true, then try this condition". The else keyword catches anything that is not caught by all the preceding conditions. The general syntax for `if...elif...else` is given in Figure 6.6.

**Fig 6.6: If...elif...else Syntax in Python –** The figure shows the syntax structure with multiple elif clauses between if and else.

The interpretation of the above syntax is that first, each expression is evaluated one after the other, and if the expression is found to be true, all statements in that specific block are executed. Otherwise, if none of the expressions before the last 'else' statements are true, the statements under 'else' are executed.

The program in Figure 6.7 contains a series of conditions using `if...elif...else` to determine the status of the age (child, adolescent, adult, and senior adult). Since the age is 80, it does not match all conditions. Therefore, the statement under 'else' is executed (See the output in Figure 6.7 under the 'Output' column).

**Fig 6.7: Conditional with if...elif...else statement –** The table shows code on the left and output on the right. The code demonstrates age classification with multiple elif conditions.

Another example in Figure 6.8 below demonstrates the application of a series of conditions using the `if...elif...else` statement to get the type of a variable. `type()` which is a function that returns the type of the argument, in our case price. What is the type of price? It is a floating number. See the output in the right side of Figure 6.8 below.

**Fig 6.8: Implementation of If...elif...else Statement –** The table shows code that checks the type of a variable and output showing "The variable is type Float".

### Activity 6.6

1. Replace price = 49.5 by the message = "Hello Student", and the variable price in all expressions by the message in Figure 6.8 above. Then, discuss the output of the code.

2. Use appropriate conditional statements to write a Python program that gives the following:
   - The program should prompt the user to enter her/his average mark in the last or the current semester and then print excellent, very good, good, satisfactory, or fail level.
   - What necessary to write the program code?

3. Write a Python program that calculates the four arithmetic operations (i.e., +, *, -, and /).

   - The program asks the user to enter one of the four arithmetic symbols. Then:
   - It asks the user to enter two integer numbers.
   - Based on the operator and numbers entered by the user, calculate and display the result.

**Using 'and' and 'or' with if...statement:** The 'and' and 'or' keywords are also used with 'if...statement' in Python. The 'and' and 'or' keywords are logical operators and are used to combine conditional statements.

### 'and' operator in if...statement:

```python
# Create two boolean variables
isBodyTempreatureHigh = True
isCoughing = True

if isBodyTempreatureHigh and isCoughing:
    print('Advice to test Covid 19')
else:
    print('You are healthy')
```

**Fig 6.9: and operator in 'if statement' –** The table shows code on the left and output "Advice to test Covid 19" on the right.

| Notes |
|:------|
| Any statement that is preceded by the hash symbol (#) is a comment and ignored by the Python interpreter. You will learn comments in Section 6.2. |

In Figure 6.9 above, the evaluation of 'isBodyTemperatureHigh' and 'isCoughing' (i.e., True and True) is True. Therefore, the indented statement following the 'if' is executed.

### Activity 6.7

1. Discuss the evaluation of the expression 'isBodyTemperatureHigh' and 'isCoughing', if the value is True and False (See Figure 6.9).
2. Test your response by substituting the value in the code.
3. Replace the 'and' operator by 'or' and discuss the output.

**Using 'or' operator with if...statement:** The 'or' operator in Figure 6.10 is used to combine conditional statements. The three conditional statements compare the value of mySubject with 'Physics', 'Chemistry', and 'Geography'. The evaluation of the 'if' expression is True if one of these three conditions is satisfied. Otherwise, the expression evaluates to False, and in that case, it executes the statement under the else clause.

```python
mySubject = 'IT'
subject = ['Physics', 'Chemistry', 'Geography', 'Economics']

# The use of or operator with if statement
if mySubject == 'Physics' or mySubject == 'Chemistry' or mySubject == 'Geography':
    print(mySubject + ' subject is in the list.')
else:
    print(mySubject + ' subject is not in the list.')
```

**Fig 6.10: Illustrates the use of 'or' Operator in if...Statement –** The figure shows the code implementation with the or operator.

| Notes |
|:------|
| The 'subject' in Figure 6.10 is declared as array of string. An array is a variable used to store multiple values in one single variable. In the example, 'subject' stores four subject names or values. |

### Activity

- What is the output of the program in Figure 6.10?

## 6.1.2 Loops or Iteration Program Flow Controls

### Brainstorming

How do you represent 1 to 10 by repeating some pattern?

Most of real-world problems include some action that is repeated several number of times. For example, consider the program you designed in (Activity 6.6 Question 2) that determines the student's mark as "Excellent", "Very Good", etc. If you have 50 students in a class, then a more complete program would repeat this status determination 50 times (i.e., once for each student in the class). A program is often used to automate such repetitive tasks. A portion of program code that repeats a statement or group of statements in programming is called iteration.

Loops are set of statements that run repeatedly for a fixed number of times, or until a condition is satisfied. Loop statements control a block of code to be executed iteratively or until a certain condition fails. Loops are a useful and frequently used feature in all modern programming languages. Python provides several language features to make iteration/looping easier. There are two types of loops that are built into Python: for loops and while loops. In the following section, implementation of 'for loop' is discussed and then followed by 'while loop' in subsequent sections.

**for loops:** The for loop in Python is used to iterate over a sequence. For loop in combination with the Python's range() function is used for counting in all kinds of ways (See for loop with range function at the end of this section). The for loop in Python differs a bit from other languages like C or Pascal. In Python, for loop is used to iterate over the items of any sequence including the Python list, string, tuple, dictionary, etc. It is also used to access elements from a container (e.g., list, string, tuple) using a built-in function range(). The general syntax of for loop is as follows:

**Syntax:** `for variable_name in sequence:`

**Fig 6.11: For Loop Syntax in Python –** The figure shows the syntax structure with statement block.

The description of the above for loop syntax is:

| Name | Description |
|:-----|:------------|
| variable_name | This represents a temporary variable that sets a new value for each iteration of the loop. |
| Sequence | Sequences are values that can be assigned to a temporary variable (i.e., variable_name). Values are provided using a list or a string or from the built-in function range(). |
| Statement_1, Statement_2 [...] | These represent a block of program statements. Python's syntax requires this to be indented. |

**for loop with range() function:** The range() function returns a list of consecutive integers. The sequence of numbers starts from 0 by default, and counts by incrementing 1 (by default), and ends at a specified number. It is widely used in count controlled loops.

| Notes |
|:------|
| In the syntax below, the range() function takes one, two, or three parameters. The last two parameters are optional. |

**Fig 6.12: Range Function Syntax with One, Two, and Three Parameters –** The table shows range() variations.

- **range(x):** generates a sequence of numbers from 0 to x, excluding x, incrementing by 1. Figure 6.13 demonstrates a simple counter program using range(5).

**Fig 6.13: Implementation of for Loop with Range –** The figure shows code on the left: `for x in range(5): print(x)` and output on the right showing numbers 0 through 4.

### Activity

1. The above program output is 0 to 4, not 5 (See Figure 6.13). Discuss what the reason is with a partner.
2. Write a program that prompts the user to enter an integer number from the keyboard and generate a sequence of numbers from 0 to user input.
   - Hint: use input statement to accept user input, convert the number to a numeric type, and give as a parameter for the range function.

**range(x, y):** This generates a sequence of numbers from x to y excluding y, incrementing by 1. The program in Figure 6.14 uses range to generate a sequence of numbers from 5 to 9.

**Fig 6.14: Implementation of For Loop with Range Function –** The figure shows code and asks "What is the output?"

### Activity

1. Write the output of the above program (in Figure 6.14) in the space provided.
2. Write a for loop that counts from 51 to 60.

**range(x, y, z):** This generates a sequence of numbers from x to y excluding y, incrementing by z. This is different from the above range function in that the increment is set by the z value (See Figure 6.15).

**Fig 6.15: Implementation of For Loop with Range Function with Three Parameters –** The figure shows code on the left and output on the right.

### Activity 6.11

1. Write a program that generates a sequence of numbers from 10 to 100, incrementing by 10.
2. Write a for loop to generate 1, 4, 7, 10, 13, 16, 19, and 22.

**for loop in iterable object:** Now let us see an example of a for loop in an iterable object. Unlike the earlier example, the loop iterates while something is true. This type of loop is called a condition controlled loop.

**Fig 6.16: Implementation of For Loop –** The figure shows code on the left and IDLE Shell output on the right displaying regional states.

The for loop program in Figure 6.16 is condition controlled. The 'regionalState' is a sequence that contains a list of regional states. When the for loop is executed, the first item (i.e., Afar) is assigned to the 'region'. The 'region' is a temporary variable that actually represents an element in the list. After this, the print statement executes, and the process continues until we reach the end of the list (i.e., Sidama), or while there is an element in the list. See the output in Figure 6.16 above on the right hand side.

### Activity

Write a for loop statement that displays the following list of fruits:
- `fruits = ["Mango", "Orange", "Banana", "Pineapple", "Papaya"];`

**Syntax: for variable_name in string**

for loop can iterate through string. The string is an iterable object in Python because it contains a sequence of characters. Thus, applying for loop in a string allows us to access the content character by character.

**Fig 6.17: for Loop in a String –** The figure shows code: `for letter in "Renaissance Dam" : print(letter)` and output showing each character on a new line.

In the above program, in each iteration, one character is accessed from the string value and stored in the letter variable, and printed on the screen. The iteration continues until the last character (i.e., m) is accessed and printed on the screen.

### Activity

Write for loop to get your name from the keyboard and print character by character.
- Hint: use input statement to read your name from the keyboard.

**break Statement with for:** The term break is a keyword in Python. With the break statement, you can stop the loop before it has looped through all the items:

```python
programming_language = ["Java", "Python", "C++", "C Sharp", "Java Script"]
for language in programming_language:
    print(language)
    if language == "Python":
        break
```

**Fig 6.18: Implementation of for Loop with break Statement –** The table shows code on the left and output on the right showing "Java" and "Python".

### Activity

1. Modify the program in Figure 6.17 (for loop in string) above to stop the loop if the value of letter is a space.
   - Hint: use 'if statement' to check if `letter == ' '`
2. What is the output of Figure 6.18 if you replace the 'if statement' by `if language == "HTML"`?

**continue keyword with for loop:** The term continue is a keyword in Python. With the continue statement, you can stop the current iteration of the loop, and it continues with the next.

```python
programming_language = ["Java", "Python", "C++", "C Sharp", "Java Script"]
for language in programming_language:
    if language == "C++":
        continue
    print(language)
```

**Fig 6.19: Implementation of for Loop with continue Statement –** The table shows code on the left and output on the right showing all languages except "C++".

### Activity

- Modify the above statement to escape "Java" and "C++" using continue.
- Hint: use the operator to combine the condition `if language == "Java" or language == "C++"`

**while Statement:** The while statement in Python supports repeated execution of a statement or block of statements that is controlled by a conditional expression. The general syntax for the while statement is:

**Syntax:**
```python
while expression:
    Statement_1
    Statement_2
    [...]
```

**Fig 6.20: while loop syntax –** The figure shows the syntax structure.

The while loop runs as long as the condition (expression) evaluates to True and executes the program block (statement_1, statement_2...). The expression is checked every time at the beginning of the loop and the first time when the expression evaluates to False, the loop stops without executing any remaining statements.

```python
count = 1
while count < 5:
    print(count)
    count += 1
```

**Fig 6.21: Implementation of While Loop –** The figure shows code on the left and output showing numbers 1 through 4.

The while loop above prints the value of count as long as the count is less than 5. The last statement (`count += 1`) is important to increment the value of count at every iteration and eventually terminate the loop.

| Notes |
|:------|
| Don't forget to increment count (i.e., `count += 1` in Figure 6.21); otherwise, the loop continues forever. |

### Activity 6.16

- Rewrite the problem described in Activity 6.11 using a 'while' statement.
- Hint: Set the count to 10, and increments count by 10.

**break and continue keywords with while loop:** With the break statement, you can stop the loop even if the while condition is true. It causes the loop to quit even before reaching the last iteration. The loop in the program below terminates when the value of count is 5 (in the 5th iteration).

```python
count = 1
while count < 10:
    print(count)
    if count == 5:
        break
    count += 1
```

**Fig 6.22: Implementation of While Loop with break Statement –** The table shows code on the left and output showing numbers 1 through 5.

As you have learned in for loop above, the continue statement causes the current iteration to stop, and continues with the next.

```python
#read input from the user
escape = int(input("Enter iteration to escape"))
count = 1
while count < 10:
    count += 1
    if count == escape:
        continue
    print(count)
```

**Fig 6.23: Implementation of While Loop with continue Statement –** The table shows code on the left and output on the right showing numbers 2-10 except 7.

The above program is supposed to iterate 9 times but prints 8 values by escaping print when the value of count is equal to escape.

### Activity 6.17

- If the user input is 8, what is the output of the above (in Figure 6.23) program?

## 6.2 Comments in Python

### Brainstorming 6.4

Have you ever noticed a comment in a program so far? What is its purpose?

Comments are descriptive texts that exist in program source code and are ignored by a compiler and interpreter. Comments are not executable statements or part of the program. Using comments, a program can make code more readable for other developers as it provides some information or explanation about what each part of a program is doing. Depending on the purpose of your program, comments can serve as notes to yourself or reminders.

In Python, comments are denoted by the hash symbol (#). Anything after the # symbol is ignored by the interpreter (See the above example program code with the # symbol). Comments can be given in a single line or may take multiple lines. In any case, all comment lines should start with the special character (#). In general, you can use comments to describe your program code, to make the code more readable, or to prevent the execution of some parts of the code while testing the code. Examples of each are given below.

**Creating comment:** In Python, comments start with a hash symbol (#), and the Python interpreter ignores them.

```python
# This is my first comment
print("Hello, Ethiopians!!!")
pi = 3.14  # this is inline comment initialize pi
```

**Fig 6.24: Illustration of Comments in Python Script –** The figure shows code with comments.

In the above example, the two comments (i.e., ones that start with #) are ignored while executing the program.

**Commenting part of the code:** Comments can also be used to comment out parts of the code that you do not want to execute while compiling or running a program. The program in the following example has two fragments of code. The second fragment of code (next to line `pi = 3.14`) is commented out to prevent that part of the code from execution. IDLE provides features to comment out (uncomment) parts of code in your source program.

```python
# This is my first comment
print("Hello, Ethiopians!!!")
pi = 3.14  # this is inline comment initialize pi
### read input from the user
##escape = int(input("Enter iteration to escape"))
##count = 1
##while count < 10:
##    count += 1
##    if count == escape:
##        continue
##    print(count)
```

**Fig 6.25: Illustration of Commenting out Part of Code –** The figure shows commented out code.

**Commenting in IDLE:** In IDLE, commenting features are found under the 'Format' menu. Select part of the code you want to comment out, then click on the 'Format' menu, and from the list, select 'Comment Out Region', or you can use the shortcut key 'Alt+3'. In order to uncomment, select the part of code you want to uncomment. Then click on 'Format' menu, and from the list, select 'Uncomment Region', or you can use shortcut key 'Alt+4'.

**Fig 6.26: Illustrate Commenting Tool in IDLE –** The figure shows the Format menu with Comment Out Region option.
**Fig 6.27: Illustrates the First Part of the Code Commented out –** The figure shows code with comments.

### Activity

1. Comment on the second part of the program in the above figure and run the program. Then, write the output.
2. Uncomment the first part of the program in the above figure and run the program. Then write the output.
3. Add comment that describes the second part of the code.

When you experience errors after writing new lines of code, then you might comment on a few of them to see if you can troubleshoot the precise problem.

## 6.3 Python Interpreter

### Brainstorming

"Describe the python program writing process"

In this section, program writing and running are discussed in more detail. Python is an interpreted programming language, not a compiled one although compilation is a step in Python interpreter processes. Compilation is simply a translation that generates bytecode that you will learn more in the next paragraph. The interpreter is the program that is responsible for executing each line of statements sequentially and runs the Python code or script which refers to a simple program stored in a plain text file. You can think of the interpreter as a layer of a program that works between your program and your computer hardware to get your code running. Python has a wide range of interpreters including IDLE, CPython, Jython, PyPy, and IronPython and online Python editors. Your Python source code is always run by one of these interpreters depending on the Python installation you use. Therefore, first, make sure that you have correctly installed one of these interpreters on your computer.

### Links

Read your Grade 11 IT Textbook for more on Python IDE

### Steps in the Python Interpreter Process

Given that you write and save your Python code with the extension .py, first your source code (.py file) compiles into a format called bytecode. Compilation is a simple translation process that generates a bytecode. In Python, a compiled code is usually stored in a file with the extension of .pyc, which can update when necessary. Then, the bytecode (.pyc file) is loaded into the Python runtime and interpreted by a Python Virtual Machine (PVM). The PVM is the Python runtime powerhouse. The PVM is a piece of program that reads each instruction in the bytecode one by one and executes whatever operation is indicated. Bytecode interpretation is automatic, and the PVM is just part of the Python system that you have installed on your machine. The PVM is the component that truly runs your scripts. Running your program is just the last step of what is called the Python interpreter process.

### Activity 6.19

- Describe the steps involved in the Python interpreter process.

## 6.4 Testing and Debugging Programs

### Brainstorming 6.6

Why do we need to test a program?

Once you write your program source code, you save the file and run the code to test whether the desired or expected output is generated. The program sometimes fails to run correctly because of a bug. A bug is an unexpected problem in your program. Bugs can appear in many forms, and some are more difficult to fix than others. Some bugs are tricky enough that you will not be able to catch them by just reading through your program. Luckily, Python IDLE provides some basic tools that help you debug your programs with ease. Debugging means having complete control over the program execution.

### Getting Started Interpreter DEBUG Mode

If you want to run your code with the built-in debugger in Python IDLE, you need to turn to debug mode feature. To do so, select Debug → Debugger from the Python IDLE menu bar. In the interpreter, you should see [DEBUG ON] appear just before the prompt (>>>), which means the interpreter is ready and waiting (See Figure 6.29 below).

When you run your Python file, the debugger window appears (See Figure 6.29 below):

**Fig 6.29: Debug Control Window When Debug Mode On –** The figure shows the Debug Control window with Stack, Source, Locals, and Globals sections.

In this window, you can inspect the values of your variables as your code executes. This gives insight into how your data is being manipulated as your code runs.

Click the following buttons to move through your code:

- **Go:** Press Go to advance execution as normal until a breakpoint is encountered (or input is required).
- **Step:** Press Step to see all the internal commands that Python uses to execute the current line and go to the next line.
- **Over:** Press the Over option to see line-by-line execution of the program.

For our purposes, we can use 'Go' and 'Step' to trace and fix the bug in the following program. Before running the program, set a breakpoint on a statement that causes an error in your code.

A breakpoint is a line of code that you have selected as a place where the interpreter should pause while running your code. To set a breakpoint, right-click on the line of code that you wish to pause (See Figure 6.30). This highlights the line of code in yellow as a visual indication that a breakpoint is set. You can set as many breakpoints in your program code as you like. To undo a breakpoint, right-click the same line again and select Clear Breakpoint.

**Fig 6.30: A breakpoint set to code in the program –** The figure shows code with a yellow highlighted line indicating a breakpoint.

Now run the program. Then from the DEBUG control (shown on the left) press 'Go'. This prompts you to type values for num1 and num2. Enter the numbers from the keyboard and press enter. As shown below.

Now press 'Step' from Debug Control to execute line by line. This displays for1.py:4: TypeError (highlighted in yellow). Go to the source code to fix the problem by casting the input to integer. Then repeat the above steps to check the bug is fixed.

**Fig 6.31: Debug Control Window showing error –** The figure shows the Debug Control window with error details and variable values.

### Activity

The following code could generate error if the value for num2 is zero. Trace and debug the error using Python DEBUG mode.

```python
num1 = int(input("Enter the first number to add: "))
num2 = int(input("Enter the second number to add: "))
print("Division:", num1/num2)
```

## Unit Summary

In this unit, you have learnt about:
- Program flow control
- The special purpose of indentation in Python
- Types of flow controls in Python
- Conditional or branching statements in Python – if, if...else, if...elif...else, if with and/or
- Looping or iteration statements in Python – for...loop, while...loop, for loop with range(), break, and continue
- The purpose of comment in program source code
- Using IDLE commenting features
- Steps in the Python interpreter process
- Testing and debugging program code – Debug Control and breakpoint

## Key Terms

**Program flow controls** - A program flow control refers to the order of execution of the program's code. Python implements the flow control of the program through the sequential statements, conditional statements, and loop statements.

**Syntax in a Python program** - Is a set of rules that define how a Python program is written and interpreted.

**Indentation** - Indentation refers to the spaces at the beginning of a code line. Unlike other programming languages, Python uses indentation to indicate a block of code. The number of spaces is up to you as a programmer, but it has to be at least one.

**Conditional statements** - Are statements in a program where the program decides at runtime whether some parts of the code should or should not be executed.

**Iteration** - This is a programming logic to automate repetitive tasks. Repeated execution of a set of statements is called iteration. Python provides various versions of for statements and while statements to implement iteration.

**Break** - Is a keyword which is used with for loop. With the break statement, you can stop the loop before it has looped through all the items.

**Continue** - Is a keyword which is used with for loop. With the continue statement, you can stop the current iteration of the loop, and continue with the next.

**Comments** - Are descriptive texts in program source code that are ignored by compilers and interpreters. Using comments, programs can make code more readable for humans as it provides some information or explanation about what each part of a program is doing.

**Interpreter** - Is a special program that executes instructions written in a programming language. It can either execute the source code directly or translate the source code in a first step into a more efficient representation, and execute this code.

**A bug** - Is an unexpected problem in your program. Bugs can appear in many forms, and some are more difficult to fix than others.

**A breakpoint** - Is a line of code that you have identified as a place where the interpreter should pause while running your code.

## Review Questions

### Part I: Write True if the statement is correct and False if it is incorrect

1. There are three program logics: sequential, conditional (branching), and iterative (looping).
2. Indentation in Python is used for code readability only.
3. In Python, looping can be implemented using for and while statement.
4. The order in which the program code execution is determined is referred as flow control.
5. In Python, we can apply different indentations in a program.
6. Condition (expression) in the conditional statement must evaluate to either true or false.
7. In while statement, the loop continues as long as the condition is satisfied.
8. A comment is an executable statement.
9. Interpreter can either execute the source code directly or translate the source code in a first step into a more efficient representation and execute this code.
10. A bug is a syntax error in your program.

### Part II: Match the items given under column B with associated items in column A

| A | B |
|:---|:---|
| 1. Program flow control | G. Order of code execution |
| 2. Bytecode (.pyc file) | J. Python Virtual Machine (PVM) |
| 3. Breakpoint | L. Line interpreter pauses while running |
| 4. Indentation | H. Indicates block of code |
| 5. Branching statement | A. if, if...else |
| 6. Nested loop | F. Loop inside another loop |
| 7. Condition (expression) | C. a > b, a == b |
| 8. IDE | D. writes, compiles, tests and runs a program |
| 9. Read-Eval-Print Loop (REPL) | B. interactive interpreter |
| 10. Comment | I. Any line preceded by the hash (#) |

### Part III: Choose the correct answer from the given

1. All are a program flow controls
   - A. sequential statement
   - B. branching statement
   - C. looping
   - D. comment

2. The statement range(9) generates a sequence of numbers
   - A. 0 to 9
   - B. 0 to 8
   - C. 1 to 9
   - D. 1 to 8

3. One of the following cannot be the condition (expression) of 'if statement':
   - A. `a = b`
   - B. `a != b`
   - C. `a >= b`
   - D. `a == b`

4. Which of the following indentation is not valid in Python?
   - A. `if 5: print('five')`
   - B. `if a > b: print('greater than')`
   - C. `if 4 > 5: print('false')`
   - D. `if a: print('yes')`

5. Compiled source code is stored in_____.
   - A. .pyc file
   - B. .py file
   - C. Pvm file
   - D. Compiler

### Part IV: Code Writing

1. Use branching statement to write a program that reads student mark, and determine pass if the mark is greater or equal to 50; otherwise, print fail.

2. Given `letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"`:
   a. Write a for loop statement to print a character per line in each iteration.
   b. Repeat the for loop but the character should print in a single line.

3. Write a program based on the following requirements.
   a. Prompt the user to input an integer number from the keyboard.
   b. Then print all sequences of numbers from 1 to the input number.
   c. Display the data type of the variable before and after the reassignment.

4. Write a program that performs the arithmetic operation (+, -, *, /).

   Hint: Ask the user to enter the operation to perform (1 for addition, 2 for subtraction, 3 for multiplication, and 4 for division; Otherwise, print invalid input.