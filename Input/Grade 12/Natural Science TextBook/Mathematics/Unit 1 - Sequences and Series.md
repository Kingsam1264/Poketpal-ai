# Unit 1: Sequences and Series

## Unit Outcomes
By the end of this unit, you will be able to:
- Understand sequence and series
- Compute terms of a sequence from a given rule
- Use given terms to develop a formula that represents the sequence
- Identify different types of sequences and series
- Compute the partial and infinite sum of some sequences
- Apply your understanding the knowledge of sequences and series to real-life problems

## Unit Contents
1.1 Sequence
1.2 Arithmetic and Geometric Sequences
1.3 The Sigma Notation and Partial Sums
1.4 Infinite Series
1.5 Applications of Sequence and Series in Daily Life
Summary
Review Exercise Unit 1: Sequences and Series

**Key Words**
- arithmetic sequence
- finite sequence
- partial sums
- common difference
- general term
- sequence
- geometric sequence
- series
- common ratio
- infinite sequence
- terms of a sequence
- convergent series
- infinite series
- divergent series
- recursion formula

---

## Introduction
Mathematics has an enormous number of uses in our daily life. There is, in fact, no area of life that is not affected by mathematics. For instance, civil engineers use mathematics to determine how to best design new structures; economists use mathematics to describe and predict how the economy will react to certain changes; investors use mathematics to price certain types of shares or calculate how risky particular investments are; software developers use mathematics for many of the algorithms (such as Google searches and data security) that make programs useful. Mathematics is present everywhere from distance, time and money to art, design and music.

A sequence is an arrangement of numbers in a definite order according to some rule. Sequences and Series play an important role in various aspects of our lives. They help us to predict, evaluate and monitor the outcome of a situation or event and help us in decision making.

---

## 1.1 Sequences

### Activity 1.1
1. People want to plant trees in a certain pattern in the green area of a community like 20 plants in the first row, 34 plants in the second row and 48 plants in the third row, and so on. How many trees people will plant in the 5th and 6th row?
2. Find the next two terms of the following sequence:
   a. {50, 47, 44, 41, ...}
   b. {2, 12, 22, 32, ...}

### Definition 1.1
A **sequence** is a function whose domain is the collection of all integers greater than or equal to a given integer m (usually 0 or 1). A sequence is usually denoted by aₙ. The functional values: a₁, a₂, a₃, ..., aₙ, ... are called the **terms of a sequence**, and aₙ is called the **general term**, or the nth term of the sequence. There are two types of sequences depending on its last term.

**Finite Sequence:** A sequence that has a last term. The domain of a finite sequence is 1, 2, 3, ..., n.

**Infinite sequence:** A sequence that does not have a last term. The domain of an infinite sequence is the set of natural numbers (N).

### Example 1
List the first five terms of each of the sequences whose general terms are given below where n is a positive integer.

a. aₙ = 2n - 1  
b. aₙ = (-1/3)ⁿ  
c. aₙ = 1/n

**Solution**
a. aₙ = 2n - 1:  
   a₁ = 2(1) - 1 = 1, a₂ = 2(2) - 1 = 3, a₃ = 2(3) - 1 = 5,  
   a₄ = 2(4) - 1 = 7, a₅ = 2(5) - 1 = 9  
   Therefore, the first five terms are 1, 3, 5, 7 and 9

b. aₙ = (-1/3)ⁿ:  
   a₁ = (-1/3)¹ = -1/3, a₂ = (-1/3)² = 1/9, a₃ = (-1/3)³ = -1/27,  
   a₄ = (-1/3)⁴ = 1/81, a₅ = (-1/3)⁵ = -1/243  
   Therefore, the first five terms are -1/3, 1/9, -1/27, 1/81 and -1/243

c. aₙ = 1/n:  
   a₁ = 1/1, a₂ = 1/2, a₃ = 1/3, a₄ = 1/4, a₅ = 1/5  
   Therefore, the first five terms are 1, 1/2, 1/3, 1/4 and 1/5

### Example 2
Draw the graph of sequence aₙ = 2n + 1.

**Solution**
Make a table with n and aₙ as follows. Then plot each ordered pair (n, aₙ).

| n | aₙ |
|---|----|
| 1 | 3  |
| 2 | 5  |
| 3 | 7  |
| 4 | 9  |
| 5 | 11 |

**Figure 1.1: Graph of sequence aₙ = 2n + 1**  
The image shows a coordinate plane with points plotted at (1,3), (2,5), (3,7), (4,9), and (5,11). The points follow a linear pattern, forming a straight line when connected. The x-axis represents n and the y-axis represents aₙ.

**Note:** From the Figure 1.1, we can observe that the graph of the sequence follows the pattern of a linear equation.

### Exercise 1.1
1. List the first five terms of each of the sequences whose general terms are given below where n is a positive integer:
   a. aₙ = 2n  
   b. aₙ = (-1)ⁿ⁺¹  
   c. aₙ = n/(n+1)  
   d. aₙ = n²

2. Draw the graph of the following sequences and observe the pattern of the sequence:
   a. aₙ = 3n - 1, 1 ≤ n ≤ 5  
   b. aₙ = 1/n  
   c. aₙ = (-1)ⁿ

3. Bontu's uncle gave 130 Ethiopian birr to her in January, in the next month she saves money and has 210 Ethiopian birr and in the third month she has 290 Ethiopian birr. How much money will she have in the fourth, fifth, sixth and seventh month respectively?

---

## Fibonacci and Mulatu Sequences

### Activity 1.2
Two squares with a side length of 1 are arranged side by side. The rectangle made has a vertical length of 1 and a horizontal length of 2. Place a square with a side length of 2 next to it. Then, the rectangle made has vertical length is 3, horizontal length is 2. After this arrange a square with a side length of 3, a square with a length of 5, and a square with a length of 8 to make a large rectangle.

**Figure 1.2: Square arrangement pattern**  
The image shows a visual representation of squares arranged according to the Fibonacci sequence. Starting with two 1×1 squares, then adding a 2×2 square, a 3×3 square, a 5×5 square, and an 8×8 square. The squares are arranged in a spiral pattern forming a large rectangle.

Based on Figure 1.2 above, answer the following questions:
a. What is the sum of the area of all the inner squares?
b. What is the area of the outer rectangle?
c. What is the relation between your answer to parts a and b?

### Fibonacci's Sequence

**HISTORICAL NOTE**  
**Leonardo Fibonacci (circa 1170-1240)**  
Italian mathematician Leonardo Fibonacci made advances in number theory and algebra. Fibonacci, also called Leonardo of Pisa, produced numbers that have many interesting properties such as the birth rates of rabbits and the spiral growth of leaves on some trees. He is especially known for his work on series of numbers, including the Fibonacci series. Each number in a Fibonacci series is equal to the sum of the two numbers that came before it. Fibonacci sequence arose when he was trying to solve a problem of the following kind concerning the breeding of rabbits.

Suppose that rabbits live forever and that every month each pair produces a new pair which becomes productive at the age of two months. If we start with one new born pair, how many pairs of rabbits will we have in the nᵗʰ month?

Fibonacci sequence is defined as:
F₀ = 0 if n = 0  
F₁ = 1 if n = 1  
Fₙ = Fₙ₋₁ + Fₙ₋₂ if n ≥ 2

**Figure 1.3: Rabbit population growth**  
The image illustrates the Fibonacci rabbit problem, showing how rabbit pairs grow each month. Month 1: 1 pair, Month 2: 1 pair, Month 3: 2 pairs, Month 4: 3 pairs, Month 5: 5 pairs, with arrows showing the reproduction pattern.

### Example
List the first eight terms of the Fibonacci sequence and draw its graph.

**Solution**
Make a table with n and aₙ as follows. Then plot each ordered pair (n, Fₙ).

| n | Fₙ |
|---|----|
| 0 | 0  |
| 1 | 1  |
| 2 | 1  |
| 3 | 2  |
| 4 | 3  |
| 5 | 5  |
| 6 | 8  |
| 7 | 13 |

**Figure 1.4: Graph of Fibonacci sequence**  
The image shows a coordinate plane plotting points (0,0), (1,1), (2,1), (3,2), (4,3), (5,5), (6,8), and (7,13). The points are connected by line segments, showing an exponential growth pattern.

### Mulatu Sequence

**HISTORICAL NOTE**  
**Mulatu Lemma**  
Professor Mulatu Lemma is an Ethiopian Mathematician. He pursued an education through a university in Ethiopia, earning a Bachelor of Science in 1977 from Addis Ababa University. He continued his studies at the aforementioned university and obtained a Master of Science in applied mathematics in 1982. Following these accomplishments, he was enrolled at Kent State University, where he pursued a Master of Arts in pure mathematics in 1993. Prof. Mulatu completed his academic journey with a Doctor of Philosophy from Kent State University in 1994. In 2011, he introduced the Mulatu's Number (named after him) to the mathematical community and to the world.

Professor Mulatu introduced a sequence of the form:
M₀ = 3 if n = 0  
M₁ = 4 if n = 1  
Mₙ = Mₙ₋₁ + Mₙ₋₂ if n ≥ 2

### Recursive Sequence
A sequence that relates to the general term aₙ of a sequence where one or more of the terms that comes before it is said to be defined recursively. The domain of recursive sequence can be the set of whole numbers. For Example, Mulatu and Fibonacci sequences are some of the examples of recursion formula.

### Exercise 1.2
1. Find the 12th term of the Fibonacci's sequence {1, 1, 2, 3, 5, 8, ...}
2. List the first eight terms of Mulatu's sequence and draw its graph

---

## 1.2 Arithmetic and Geometric Sequences

### 1.2.1 Arithmetic Sequences

### Activity 1.3
Find the difference between consecutive terms for each of the following sequences.
a. 3, 7, 11, 15, ...  
b. 3, -1, -5, -9, ...  
c. 2/3, 1, 4/3, ...

### Definition 1.2
**Arithmetic sequence** or arithmetic progression is a sequence in which each term except the first is obtained by adding a fixed number (positive or negative) to the preceding term. The fixed number is called **common difference** of the sequence.

### Example 1
For the following arithmetic sequence 2, 5, 8, 11, 14, ..., what is the first term, third term and common difference? Find the 6th term.

**Solution**
```
+3  +3  +3  +3
2 → 5 → 8 → 11 → 14
```
First term: 2, Third term: 8  
The common difference is 3.  
6th term: 5th term + 3 = 14 + 3 = 17

### Example 2
Given that the 1st term of an arithmetic sequence is 10, and the common difference is -4, find the terms from 2nd to 5th term.

**Solution**
2nd term: 1st term + (-4) = 10 + (-4) = 6  
3rd term: 2nd term + (-4) = 6 + (-4) = 2  
4th term: 3rd term + (-4) = 2 + (-4) = -2  
5th term: 4th term + (-4) = -2 + (-4) = -6  
Therefore, the terms from 2nd to 5th term are 6, 2, -2, -6.

### Exercise 1.3
1. For the following arithmetic sequences, what are the first term, third term and common difference? Find the 6th term.
   a. {3, 5, 7, 9, 11, ...}
   b. {9, 6, 3, 0, -3, ...}

2. Find the terms from 2nd to 5th of an arithmetic sequence when the:
   a. 1st term is 1, and the common difference is 5
   b. 1st term is 2, and the common difference is 1/2

### General term of arithmetic sequence
From the Activity 1.3, (a), 3, 7, 11, 15, 19, ... the first term is 3, and the common difference is 4. Let the common difference be d, and let Aₙ be the nth term of the sequence, then,
A₁ = 3  
A₂ = 3 + 4 = A₁ + d  
A₃ = 3 + 4 + 4 = A₁ + 2d  
A₄ = 3 + 4 + 4 + 4 = A₁ + 3d  
...  
Aₙ = 3 + 4 + 4 + 4 + ... + 4 = A₁ + (n - 1)d

Suppose A₁, A₂, A₃, A₄, A₅, A₆, ... is an arithmetic sequence.
```
A₂ = A₁ + d
A₃ = A₂ + d = A₁ + d + d = A₁ + 2d
A₄ = A₃ + d = A₁ + 2d + d = A₁ + 3d
A₅ = A₄ + d = A₁ + 3d + d = A₁ + 4d
A₆ = A₅ + d = A₁ + 4d + d = A₁ + 5d
...
Aₙ = Aₙ₋₁ + d = A₁ + (n - 2)d + d = A₁ + (n - 1)d
```

Thus, the following formula is derived:

### Theorem 1.1
If Aₙ is an arithmetic sequence with the first term A₁ and a common difference d, then the nth term of the sequence is given by **Aₙ = A₁ + (n - 1)d**.

### Example 1
Find the general term of the sequence Aₙ when the first term is 5, and the common difference is 4.

**Solution**
The given sequence is arithmetic sequence with A₁ = 5 and d = 4  
From the theorem 1.1, we have the formula Aₙ = A₁ + (n - 1)d. So  
Aₙ = A₁ + (n - 1)d = 5 + (n - 1)(4) = 5 + 4n - 4 = 4n + 1

### Example 2
What is the 31st term of the sequence 1, 4, 7, 10, ...?

**Solution**
The given sequence is arithmetic sequence with A₁ = 1 and d = 3  
Aₙ = A₁ + (n - 1)d = 1 + 3(n - 1) = 3n - 2  
Then,  
A₃₁ = 3(31) - 2 = 93 - 2 = 91

### Exercise 1.4
1. Find the general term of the sequence Aₙ when:
   a. A₁ = 2, d = 3
   b. A₁ = 10, d = -5

2. What is the 10th term of the sequence, 10, 6, 2, -2, ...?

### Further on arithmetic sequences

### Example 1
When the third term is 10 and the sixth term is 1:
a. Find the general term of sequence Aₙ
b. Find A₈

**Solution**
a. Applying arithmetic sequence formula and substituting existing values yields:
```
A₃ = A₁ + 2d = 10
A₆ = A₁ + 5d = 1
```
Subtracting these two equations.  
3d = -9 ⇒ d = -3  
A₁ + 2d = 10, A₁ + 2(-3) = 10, A₁ = 10 + 6 = 16  
Therefore, the general term becomes  
Aₙ = A₁ + (n - 1)d = 16 + (n - 1)(-3) = 16 - 3n + 3 = 19 - 3n

b. Aₙ = 19 - 3n ⇒ A₈ = 19 - 3(8) = 19 - 24 = -5

### Example 2
Determine whether or not the sequences with the following general terms are arithmetic.
a. aₙ = 3n - 2  
b. aₙ = 3n² - 2

**Solution**
a. To solve such types of problem, we have to show the difference between successive terms is constant.
```
aₙ = 3n - 2
aₙ₊₁ = 3(n + 1) - 2 = 3n + 1
aₙ₊₁ - aₙ = 3n + 1 - (3n - 2) = 3
```
Since the difference between successive term is constant, it is arithmetic sequence

b. aₙ = 3n² - 2  
```
aₙ₊₁ = 3(n + 1)² - 2 = 3(n² + 2n + 1) - 2 = 3n² + 6n + 1
aₙ₊₁ - aₙ = 3n² + 6n + 1 - (3n² - 2) = 6n + 3
```
Since the difference between successive terms is not constant, it is not arithmetic sequence

### Exercise 1.5
1. Find the general term of the arithmetic sequence Aₙ when:
   a. A₃ = 15, A₅ = 27
   b. A₅ = 20, A₁₀ = 0

2. Given arithmetic sequence with A₃ = 3 and A₅ = 24. Find A₁ and A₉

3. Determine whether or not the sequences with the following general terms are arithmetic:
   a. aₙ = 7n - 3
   b. aₙ = 5n - 3
   c. aₙ = n² + n + 1
   d. aₙ = 3n

### Arithmetic mean between two numbers
The term(s) of arithmetic sequence that lie between two given terms are called the **arithmetic mean**.

### Example 1
Given that 1, x, 8 is an arithmetic sequence, find x.

**Solution**
Since it is arithmetic sequence, the difference between two consecutive terms is constant.
```
x - 1 = 8 - x
2x = 9
x = 9/2
```

### Example 2
The first and sixth terms of an arithmetic sequence are 4 and 29. Find the values of terms 2, 3, 4 and 5

**Solution**
Let the four terms be A₂, A₃, A₄, A₅  
So, 4, A₂, A₃, A₄, A₅, 29 form an arithmetic sequence. Then, Aₙ = A₁ + (n - 1)d
```
A₆ = A₁ + (6 - 1)d
29 = 4 + 5d
d = 5
```
Thus, Aₙ = 4 + (n - 1)5 = 5n - 1  
A₂ = 4 + 5 × 1 = 9  
A₃ = 4 + 5 × 2 = 14  
A₄ = 4 + 5 × 3 = 19  
A₅ = 4 + 5 × 4 = 24

### Exercise 1.6
1. Given that the sequence 3, x, 7 is an arithmetic sequence, find x
2. Given that the sequence 1/12, x, 1/6 is an arithmetic sequence, find x
3. Find the arithmetic mean of 4 and 14
4. Insert four arithmetic means between 4 and 14 to create an arithmetic sequence

---

### 1.2.2 Geometric Sequences

### Activity 1.4
Find the ratio between the consecutive terms of each of the following sequences.
a. 2, 6, 18, 54, ...  
b. 2, -2, 2, -2, ...  
c. 3, 3/2, 3/4, 3/8

### Definition 1.3
A **geometric sequence** or geometric progression is one in which the ratio between consecutive terms is a non-zero constant. This constant is called the **common ratio**.

{Gₙ} is geometric sequence if and only if r = Gₙ₊₁/Gₙ where r ∈ ℝ & r ≠ 0, where r is the common ratio

### Example 1
For the following geometric sequence 3, 6, 12, 24, 48, ..., find the common ratio, r, and the 6th term.

**Solution**
The common ratio:
```
r = G₂/G₁ = 6/3 = 2
r = G₃/G₂ = 12/6 = 2
r = G₄/G₃ = 24/12 = 2
r = G₅/G₄ = 48/24 = 2
```
Thus, r = 2  
The 6th term: G₆ = G₅ × r = 48 × 2 = 96

### Example 2
The 1st term of a geometric sequence is 1/2 and its common ratio is 2/2, find the 2nd, 3rd, 4th and 5th term.

**Solution**
We are given G₁ = 1/2 and r = 2 then
```
G₂ = G₁ × r = (1/2) × 2 = 1
G₃ = G₂ × r = 1 × 2 = 2
G₄ = G₃ × r = 2 × 2 = 4
G₅ = G₄ × r = 4 × 2 = 8
```

### Exercise 1.7
1. For the geometric sequence 1, 2, 4, 8, 16, ..., find the common ratio, r, and the 6th term.
2. Given that the 1st term of a geometric sequence is 1, and its common ratio is 3, find the 2nd, 3rd, 4th and 5th term.

### Determining the nth term of geometric sequence
From the activity 1.4, (a), we have the geometric sequence 2, 6, 18, 54, ... which has a common ratio of 3.
```
G₁ = 2
G₂ = 6 = 2 × 3 = G₁ × 3
G₃ = 18 = 6 × 3 = G₂ × 3 = G₁ × 3 × 3 = G₁ × 3²
G₄ = 54 = 18 × 3 = G₃ × 3 = G₁ × 3 × 3 × 3 = G₁ × 3³
...
Gₙ = G₁ × 3 × 3 × 3 × ... × 3 = G₁ × 3ⁿ⁻¹
```

From Definition 1.3,
```
G₂ = G₁ × r
G₃ = G₂ × r = G₁ × r × r = G₁ × r²
G₄ = G₃ × r = G₁ × r² × r = G₁ × r³
G₅ = G₄ × r = G₁ × r³ × r = G₁ × r⁴
...
Gₙ = G₁ × rⁿ⁻¹
```

Thus, the following theorem is deduced:

### Theorem 1.2
If {Gₙ} is a geometric sequence with the first term G₁ and common ratio r, then the nth term of the sequence is given by **Gₙ = G₁rⁿ⁻¹**

### Example 1
Find Gₙ when the first term is 3 and the common ratio is 2

**Solution**
Given G₁ = 3 and r = 2, then  
Gₙ = G₁rⁿ⁻¹ = 3 × 2ⁿ⁻¹

### Example 2
Find the nth term, Gₙ, of the sequence 1, -2, 4, -8, 16, ...

**Solution**
G₁ = 1, r = -2  
Applying the formula for the nth term of a geometric sequence, Gₙ = G₁rⁿ⁻¹  
Gₙ = (-2)ⁿ⁻¹

### Example 3
Find the 6th term of the geometric sequence whose first term is 1 and common ratio is 2.

**Solution**
Given G₁ = 1 and r = 2, then Gₙ = G₁rⁿ⁻¹ = 1 × 2ⁿ⁻¹ = 2ⁿ⁻¹  
Therefore, G₆ = 2⁶⁻¹ = 2⁵ or 32

### Exercise 1.8
1. For each of the following, find the nth term of the geometric sequence:
   a. G₁ = 2, r = 5
   b. G₁ = 1, r = -3
   c. G₁ = 2, r = -2
   d. G₁ = -3, r = 1/2

2. Find the nth term Gₙ of the following sequences:
   a. 3, 6, 12, 24, ...
   b. 27, 9, 3, 1, ...
   c. 3/2, 3/4, 3/8, 3/16, ...

3. Find the 5th term of the geometric sequence whose first term is -3 and common ratio is 1/2

### Geometric mean between two numbers
When a, m, and b are terms in a geometric sequence, then m is called the **geometric mean** between a and b. (a ≠ 0, b ≠ 0, m ≠ 0). In a geometric sequence, the ratio between consecutive terms is constant. Therefore:
```
m/a = b/m
m² = ab
m = ±√ab
```

### Example 1
When 2, x, 5, ... is a geometric sequence, find x (x ≠ 0)

**Solution**
As the ratio between the consecutive terms is the same:
```
x/2 = 5/x
x² = 10
x = ±√10
```

### Example 2
Find geometric mean between 2 and 8

**Solution**
Let the geometric mean be m(m ≠ 0), then
```
m/2 = 8/m
m² = 2 × 8
m = ±√16 = ±4
```
Therefore, the geometric mean between 2 and 8 is -4 or 4

### Example 3
Find the 8th term of the geometric sequence whose 1st term is 5 and 4th term is 25. (Express the answer in the form of exponent)

**Solution**
G₁ = 5 and G₄ = 25  
Then, 25 = 5r³ ⇒ r³ = 5 ⇒ r = 5^(1/3)  
Therefore, G₈ = G₁r⁷ = 5 × (5^(1/3))⁷ = 5 × 5^(7/3) = 5^(1 + 7/3) = 5^(10/3)

### Exercise 1.9
1. Find the geometric mean between 3 and 12
2. In a geometric sequence, the 2nd term is 12 and the 6th term is 192. Find the 11th term.
3. If x, 4x + 3, 7x + 6 are consecutive terms of a geometric sequence, find the value(s) of x, x ≠ 0
4. Find three consecutive terms of a geometric sequence, such that their sum is 35 and their product is 1000. Let the terms be a/r, a, ar (a ≠ 0, r ≠ 0)

---

## 1.3 The Sigma Notation and Partial Sums

In the previous sections, you learned about the individual terms of a sequence. In this section, you will learn how to add the terms of a sequence, i.e., find the sum of the terms.

### Partial sums
Given the sequence aₙ:
- S₁ = a₁, S₁ is the first term of the sequence
- S₂ = a₁ + a₂, S₂ is the sum of the first two terms of the sequence
- S₃ = a₁ + a₂ + a₃, S₃ is the sum of the first three terms of the sequence
- S₄ = a₁ + a₂ + a₃ + a₄, S₄ is the sum of the first four terms of the sequence, and so on.
- Sₙ = a₁ + a₂ + a₃ + a₄ + ... + aₙ, Sₙ is the sum of the first n terms of the sequence called the **partial sum**.

### Definition 1.4
Let {aₖ}ₖ₌₁^∞ be a sequence. The sum of the first n terms of the sequence, denoted by Sₙ, is called the **partial sum** of the sequence. Such summation is denoted as follows:
```
Sₙ = Σₖ₌₁ⁿ aₖ = a₁ + a₂ + a₃ + a₄ + ... + aₙ
```
where k is the index of the summation, 1 is the lower limit of summation, n is the upper limit of the summation and Σ is the **sigma notation** or the **summation notation**.

### Example 1
Find the sum of the first five even natural numbers.

**Solution**
a₁ = 2, a₂ = 4, a₃ = 6, a₄ = 8, a₅ = 10. Then,
```
S₅ = a₁ + a₂ + a₃ + a₄ + a₅
   = 2 + 4 + 6 + 8 + 10
   = 30
```

### Example 2
Let aₙ = 3n + 1, find S₆

**Solution**
aₙ = 3n + 1  
a₁ = 4, a₂ = 7, a₃ = 10, a₄ = 13, a₅ = 16, a₆ = 19  
```
S₆ = a₁ + a₂ + a₃ + a₄ + a₅ + a₆
   = 4 + 7 + 10 + 13 + 16 + 19
   = 69
```

### Example 3
Given the general term aₙ = 1/[n(n+1)], find the sum of the first:
a. 99 terms  
b. n terms

**Solution**
By using partial fraction decomposition:
```
1/[n(n+1)] = A/n + B/(n+1)
```
Solving for A and B gives A = 1 and B = -1

Therefore:
```
1/[n(n+1)] = 1/n - 1/(n+1)
```

a. S₉₉ = (1/1 - 1/2) + (1/2 - 1/3) + ... + (1/99 - 1/100) = 1 - 1/100 = 99/100

b. Sₙ = (1/1 - 1/2) + (1/2 - 1/3) + ... + (1/n - 1/(n+1)) = 1 - 1/(n+1) = n/(n+1)

**Note:** Such a sequence is said to be **telescoping sequence**.

### Exercise 1.10
1. Find the sum of:
   a. the first five odd natural numbers
   b. the first ten odd natural numbers

2. Find the sums of the following sequences to the term given:
   a. aₙ = 4n - 3, S₅
   b. aₙ = 3 - 5n, S₈
   c. aₙ = n² + 1, S₆

3. Given the general term aₙ = 2/(n² + 5n + 6), find the sum of the first n terms.

### Sigma notation
Sigma notation is a method used to write out a long sum in a concise way. We use sigma notation for writing finite and infinite numbers of terms in a sequence. The sum is denoted by the sigma notation using the Greek letter Σ (sigma)

### Example 1
Express the following sigma notation in the form of the sum:
a. Σₖ₌₂⁶ k²  
b. Σₖ₌₁⁸ 3k  
c. Σₖ₌₁⁴ 2ᵏ⁻¹

**Solution**
a. Σₖ₌₂⁶ k² = 4 + 9 + 16 + 25 + 36 = 90
b. Σₖ₌₁⁸ 3k = 3 + 6 + 9 + 12 + 15 + 18 + 21 + 24 = 108
c. Σₖ₌₁⁴ 2ᵏ⁻¹ = 1 + 2 + 4 + 8 = 15

### Example 2
Which one of the following express the sum, 3² + 4² + 5² + 6² + 7²?
a. Σₖ₌₃⁷ (k)²  
b. Σₖ₌₁⁵ (k + 2)²

**Solution**
All of them express the given sum.

### Exercise 1.11
1. Express the following sigma notations in the form of a sum:
   a. Σₖ₌₅⁹ k  
   b. Σₖ₌₃⁸ 2k  
   c. Σₖ₌₁⁶ (k² + 2)

2. Express the following using the sigma notation:
   a. 2² + 4² + 6² + 8² + 10² + 12²
   b. 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15

---

### 1.3.1 Sigma Notation - Properties of sigma notation

The sequence {aₖ}, where all the terms are c, the sum of the first nth term is:
```
Sₙ = Σₖ₌₁ⁿ c = c + c + c + ... + c = nc
```
That is, Σₖ₌₁ⁿ c = nc

In particular, Σₖ₌₁ⁿ 1 = n(1) = n

**Properties of Sigma Notation**
1. Σₖ₌₁ⁿ caₖ = cΣₖ₌₁ⁿ aₖ, c is a constant
2. Σₖ₌₁ⁿ (aₖ + bₖ) = Σₖ₌₁ⁿ aₖ + Σₖ₌₁ⁿ bₖ
3. Σₖ₌₁ⁿ (aₖ - bₖ) = Σₖ₌₁ⁿ aₖ - Σₖ₌₁ⁿ bₖ
4. Σₖ₌₁ⁿ aₖ = Σₖ₌₁ᵐ aₖ + Σₖ₌ₘ₊₁ⁿ aₖ, 1 ≤ m ≤ n

### Example
Evaluate each of the following sigma notations:
a. Σₖ₌₁³ 4k  
b. Σₖ₌₁⁵ (3k - 2)  
c. Σₖ₌₁⁶ 2ᵏ⁻¹

**Solution**
a. Σₖ₌₁³ 4k = 4 + 8 + 12 = 24  
Using the above property (1), you can also calculate:
```
Σₖ₌₁³ 4k = 4(1 + 2 + 3) = 4(6) = 24
```

b. Σₖ₌₁⁵ (3k - 2) = 1 + 4 + 7 + 10 + 13 = 35  
Using property (1) and (3), you can also calculate:
```
Σₖ₌₁⁵ (3k - 2) = 3Σₖ₌₁⁵ k - Σₖ₌₁⁵ 2
= 3(1 + 2 + 3 + 4 + 5) - (2 + 2 + 2 + 2 + 2)
= 3(15) - 2(5)
= 35
```

c. Σₖ₌₁⁶ 2ᵏ⁻¹ = 2⁰ + 2¹ + 2² + 2³ + 2⁴ + 2⁵ = 1 + 2 + 4 + 8 + 16 + 32 = 63  
Using the above property (4), you can also calculate:
```
Σₖ₌₁⁶ 2ᵏ⁻¹ = (2⁰ + 2¹ + 2²) + (2³ + 2⁴ + 2⁵) = 7 + 56 = 63
```

### Exercise 1.12
Evaluate each of the following sigma notations:
a. Σₖ₌₁⁵ (4k - 1)  
b. Σₖ₌₁⁴ (k² + 2k² - 3k + 5)

---

### 1.3.2 Sum of Arithmetic Sequences

### Activity 1.5
Find the sum of the first ten terms of the sequence 5, 15, 25, 35, ...

**HISTORICAL NOTE**  
**Carl Friedrich Gauss (1777-1855)**  
A teacher of Gauss, at his elementary school, asked him to add all the integers from 1 to 100. When Gauss returned with the correct answer after only a few moments, the teacher could only look at him in astounded silence. This is what Gauss did:
```
1 + 2 + 3 + ... + 100
100 + 99 + 98 + ... + 1
101 + 101 + 101 + ... + 101

100 × 101 ÷ 2 = 5050
```
To find the sum of the first 100 natural numbers, Gauss worked as follows. Writing the sum forward and backward then adding them together yields:
```
S₁₀₀ = 1 + 2 + 3 + ... + 98 + 99 + 100
S₁₀₀ = 100 + 99 + 98 + ... + 3 + 2 + 1
2S₁₀₀ = 101 + 101 + 101 + ... + 101 + 101 + 101
2S₁₀₀ = 100 × 101
```
Therefore, S₁₀₀ = ½ × 100 × 101 = 5050

The sum of the first n natural numbers can also be calculated as follows:
```
Sₙ = 1 + 2 + 3 + ... + (n - 2) + (n - 1) + n
Sₙ = n + (n - 1) + (n - 2) + ... + 3 + 2 + 1
2Sₙ = (n + 1) + (n + 1) + ... + (n + 1) + (n + 1)
```
Therefore, 2Sₙ = n(n + 1)  
The sum of the first n consecutive natural numbers is Sₙ = n(n + 1)/2

### Example
Find the sum of the first:
a. 40 natural numbers  
b. 150 natural numbers

**Solution**
a. Using the formula Sₙ = n(n + 1)/2, S₄₀ = ½(40 + 1) = 20(41) = 820

b. Using the formula Sₙ = n(n + 1)/2, S₁₅₀ = ½(150 + 1) = 75(151) = 11,325

### Exercise 1.13
1. Find the sum of the first:
   a. 30 natural numbers
   b. 99 natural numbers
   c. 200 natural numbers

2. If the sum of the first n natural numbers is 3240, what is the value of n?

### Derivation of sum of arithmetic sequence
Let {Aₖ}ₖ₌₁ⁿ be an arithmetic sequence.
```
Sₙ = A₁ + A₂ + A₃ + ... + Aₙ, where Aₙ = A₁ + (n - 1)d
Sₙ = A₁ + (A₁ + d) + (A₁ + 2d) + (A₁ + 3d) + ... + [A₁ + (n - 1)d]
```
By collecting all the A₁ terms (there are n of them) we get:
```
Sₙ = nA₁ + [d + 2d + 3d + ... + (n - 1)d]
```
Now factoring out d from within the brackets:
```
Sₙ = nA₁ + d[1 + 2 + 3 + ... + (n - 1)]
```
Inside the brackets you have the sum of the first (n - 1) positive integers. Thus by using the formula, Sₙ₋₁ = (n - 1)n/2
```
Sₙ = nA₁ + d[(n - 1)n/2] = n/2[2A₁ + (n - 1)d]
```
This formula can be written as:
```
Sₙ = n/2[A₁ + {A₁ + (n - 1)d}] = n/2(A₁ + Aₙ)
```
Hence, the following theorem is derived:

### Theorem 1.3
The sum Sₙ of the first n terms of an arithmetic sequence with first term A₁ and common difference d is:
```
Sₙ = Σₖ₌₁ⁿ Aₖ = n/2[2A₁ + (n - 1)d]
```
This formula can also be written as:
```
Sₙ = n(A₁ + Aₙ)/2
```
where Aₙ is the nth term. This alternative formula is useful when the first and the last terms are known.

### Example 1
Find the sum of the first 35 terms of the sequence whose general term is Aₙ = 5n

**Solution**
From the general term, we get A₁ = 5, A₂ = 10, A₃ = 15, ..., this shows that the given sequence is an arithmetic sequence. So, A₃₅ = 5(35) = 175  
Since we can easily identify the first and the 35th terms, we use the formula:
```
Sₙ = n(A₁ + Aₙ)/2
```
Thus, substituting A₁ = 5, and A₃₅ = 175:
```
S₃₅ = 35(5 + 175)/2 = 35(180)/2 = 35(90) = 3,150
```

### Example 2
If the 1st term of arithmetic sequence is 4, common difference is 5, then find the sum of the first 40 terms.

**Solution**
Given A₁ = 4, d = 5:
```
S₄₀ = 40/2[2(4) + (40 - 1)(5)] = 20(8 + 195) = 20(203) = 4060
```

### Exercise 1.14
1. Find the partial sum of the following arithmetic sequences:
   a. A₁ = 2, and last term A₂₀ = 21
   b. A₁ = 40, and last term A₁₅ = 0

2. Find the sum of the following arithmetic sequences:
   a. A₁ = 2, d = 3, n = 10
   b. A₁ = 30, d = -5, n = 12

### Further on sum of arithmetic sequence

### Example 1
Find the sum Sₙ of the arithmetic sequence whose 4th term is 2 and 7th term is 17.

**Solution**
Applying the formula Aₙ = A₁ + (n - 1)d:
```
A₄ = A₁ + 3d = 2
A₇ = A₁ + 6d = 17
```
Subtracting the first equation from the second equation:
```
3d = 17 - 2
d = 5
```
Thus:
```
A₁ = A₄ - 3d
A₁ = 2 - 3 × 5 = -13
```
A₇ = 17
```
S₇ = 7(A₁ + A₇)/2 = 7(-13 + 17)/2 = 7(4)/2 = 14
```

### Example 2
For a given arithmetic sequence the sum S₁₀ = 165 and A₁ = 3, find A₁₀

**Solution**
Since the first term and the sum are given, applying the formula gives:
```
Sₙ = n(A₁ + Aₙ)/2
S₁₀ = 10(3 + A₁₀)/2 = 165
165 = 5(3 + A₁₀)
A₁₀ = 33 - 3 = 30
```

### Example 3
Find the sum of integers from 1 to 100 that are divisible by 10

**Solution**
The number of such integer is 100/10 = 10  
The 1st term is 10, and the last term is 100. Then:
```
S₁₀ = 10(10 + 100)/2 = 10(110)/2 = 550
```

### Exercise 1.15
1. Find S₇ of the arithmetic sequence whose 3rd term is 5 and 5th term is 11.
2. Given the sum of an arithmetic sequence is Sₙ = 120 and A₁ = 1, find Aₙ and A₂₀
3. Find the sum of the integers from 1 to 100 that are divisible by 2 or 5
4. Find the sum of odd integers from 1 to 2001

---

### 1.3.2 Sum of Geometric Sequences

### Activity 1.6
Find the sum of the following geometric sequences:
a. {2, 4, 8, 16, 32}  
b. {2/3, 4/9, 8/27, 16/81}

Find the sum of the first 5 terms of the sequence:
c. 1, 3, 9, 27, 81, ...

In order to answer such types of problems, consider the following:
Let {Gₖ}ₖ₌₁ⁿ be a geometric sequence, then its associated geometric sum, Sₙ, is:
```
Sₙ = G₁ + G₂ + G₃ + ... + Gₙ₋₁ + Gₙ, where Gₙ = G₁rⁿ⁻¹
Sₙ = G₁ + rG₁ + r²G₁ + ... + rⁿ⁻²G₁ + rⁿ⁻¹G₁
```
Factorizing out G₁:
```
Sₙ = G₁(1 + r + r² + ... + rⁿ⁻² + rⁿ⁻¹)      (1)
```
Multiplying both sides of equation (1) by r:
```
rSₙ = G₁(r + r² + r³ + ... + rⁿ⁻¹ + rⁿ)       (2)
```
Subtracting the equation (2) from equation (1):
```
Sₙ - rSₙ = G₁(1 + r + r² + r³ + ... + rⁿ⁻² + rⁿ⁻¹) - G₁(r + r² + r³ + ... + rⁿ⁻¹ + rⁿ)
(1 - r)Sₙ = G₁(1 - rⁿ)
Sₙ = G₁(1 - rⁿ)/(1 - r) for r ≠ 1
```

Thus, the following theorem is inferred:

### Theorem 1.4
Let {Gₖ}ₖ₌₁ⁿ be a geometric sequence with common ratio r. Then the sum of the first n terms Sₙ is given by:
```
Sₙ = nG₁ if r = 1
Sₙ = G₁(1 - rⁿ)/(1 - r) if r ≠ 1
```

### Example
Find the sum of the sequences in activity 1.6 using this theorem, and confirm the results.

**Solution**
a. G₁ = 2, r = 2 and n = 5:
```
S₅ = 2(1 - 2⁵)/(1 - 2) = 2(1 - 32)/(-1) = 62
```

b. G₁ = 2/3, r = 2/3 and n = 4:
```
S₄ = (2/3)[1 - (2/3)⁴]/[1 - (2/3)] = (2/3)[1 - 16/81]/[1/3] = 2[1 - 16/81] = 130/81
```

### Exercise 1.16
1. Find the sum of the from 1st to nth n' of the following geometric sequences:
   a. G₁ = 3, r = 2
   b. G₁ = 1, r = 1/2

2. Given the geometric sequence: 1, 3, 9, 27, ... find S₁₀

### Further on the sum of geometric sequences

### Example
The sum of the first three terms of a geometric sequence is 7, and the sum from 4th to 6th terms is 56. Find the first term and the common ratio.

**Solution**
Let the first term be G₁ and common ratio r. Then,
```
G₁ + G₁r + G₁r² = 7          (1)
G₁r³ + G₁r⁴ + G₁r⁵ = 56      (2)
```
From (2):
```
r³(G₁ + G₁r + G₁r²) = 56
```
Substituting (1):
```
7r³ = 56
r³ = 8
r = 2
```
Then,
```
G₁ + 2G₁ + 4G₁ = 7
7G₁ = 7
G₁ = 1
```
Therefore, the common ratio is 2, and the 1st term is 1

### Exercise 1.17
1. The sum of the first three terms of a geometric sequence is 9, and the sum from the 4th to 6th term is -18. Find the first term and common ratio.
2. How many terms of the sequence: 3, 3/2, 3/4, 3/8, ... are needed to give the sum 3069/512?
3. Find the sum to indicated number of terms in each of the geometric sequence in questions a to d:
   a. 0.15, 0.015, 0.0015, ... n terms
   b. 1, -a, a², -a³, ... n terms (if a ≠ -1)
   c. √7, √21, 3√7, ... n terms
   d. x¹, x³, x⁵, ... n terms (if x ≠ ±1)

---

## 1.4 Infinite Series

### Activity 1.7
Supposing that a tree grows by half its height in a year. It then grows half of the amount of the previous year. What would be the height of the tree be if it continues to grow at the same rate?

**Figure 1.5: Tree growth pattern**  
The image shows a tree diagram illustrating infinite geometric series. The first year growth is represented as a large segment, second year as half of that, third year as quarter, and so on, showing diminishing returns.

Suppose we have the sequence: G₁, G₂, G₃, ..., Gₙ, ...  
An infinite sum of the form: a₁ + a₂ + a₃ + ... + aₙ + ... is called an **infinite series** and using summation, we can write as:
```
a₁ + a₂ + a₃ + ... + aₙ + ... = Σₖ₌₁^∞ aₖ
```

### 1.4.1. Divergence and Convergence of Infinite Sequence

### Activity 1.8
For each of the sequences i-v:
a. Write the formula for the nth term
b. Find the sum where the sequence converges

i. 1, 2, 3, 4, ...  
ii. 1/2, 1/4, 1/8, 1/16, ...  
iii. -1, 1, -1, 1, ...  
iv. 1, 1.5, 2.25, 3.375, ...  
v. 0.12, 0.0012, 0.000012, 0.00000012, ...

For an infinite sequence, there are cases of convergence and divergence, when n approaches to infinity, as follows:

**Convergence**
a. Sequence aₙ converges to a: n → ∞, aₙ → a

**Divergence**
b. Sequence aₙ diverges to positive infinity: n → ∞, aₙ → ∞
c. Sequence aₙ diverges to negative infinity: n → ∞, aₙ → -∞
d. Sequence aₙ vibrates: aₙ has no limit, i.e., the value oscillate or vibrate back and forth between numbers

### Divergence/convergence of infinite geometric sequence
Considering infinite geometric sequence Gₙ = rⁿ⁻¹, where G₁ = 1 and the common ratio is r, there are cases of convergence and divergence, when n approaches to infinity, as follows:
```
i) r > 1: When n → ∞, then Gₙ → ∞ (diverge)
ii) r = 1: When n → ∞, then Gₙ → 1 (converge)
iii) |r| < 1: When n → ∞, then Gₙ → 0 (converge)
iv) r ≤ -1: When n → ∞, then Gₙ vibrates (no limit, diverge)
```

### Example
Find whether the given geometric sequences diverge, converge or vibrate as n approaches to infinity.
a. Gₙ = (√2)ⁿ⁻¹  
b. Gₙ = (1/2)ⁿ⁻¹  
c. Gₙ = (-3)ⁿ⁻¹

**Solution**
a. Gₙ = (√2)ⁿ⁻¹  
   As √2 > 1, when n → ∞, then Gₙ → ∞, it diverges.

b. Gₙ = (1/2)ⁿ⁻¹  
   As |1/2| < 1, when n → ∞, then Gₙ → 0, it converges

c. Gₙ = (-3)ⁿ⁻¹  
   As -3 ≤ -1, when n → ∞, then Gₙ vibrates

### Exercise 1.18
Find whether the given geometric sequences diverge, converge or vibrates as n approaches infinity.
a. Gₙ = (√3)ⁿ⁻¹  
b. Gₙ = (4)ⁿ⁻¹  
c. Gₙ = (1/5)ⁿ⁻¹

### Infinite series

### Definition 1.5
Let {aₖ}ₖ₌₁^∞ be a sequence and Sₙ be the nth partial sum such that, as n gets larger and larger, Sₙ tends to s, where s is a real number, then we say the infinite series Σₖ₌₁^∞ aₖ converges and is written as Σₖ₌₁^∞ aₖ = s

However, if such an s does not exist or is infinite, we say the infinite series Σₖ₌₁^∞ aₖ diverges

Let us consider the geometric sequence 1, 1/3, 1/9, 1/27, ...  
We have G₁ = 1 and r = 1/3  
partial sum:
```
Sₙ = G₁(1 - rⁿ)/(1 - r) = 1(1 - (1/3)ⁿ)/(1 - 1/3) = (3/2)(1 - (1/3)ⁿ)
```
Let us study the behavior of (1/3)ⁿ as n becomes larger and larger, approaching to infinity.

| n | (1/3)ⁿ |
|---|--------|
| 5 | 0.0041 |
| 10 | 0.0000169 |
| 20 | 0.0000000003 |

We observe that as n becomes larger and larger (1/3)ⁿ becomes closer and closer to zero. Mathematically, we say that as n becomes increasingly large (1/3)ⁿ becomes increasingly small. In other words, as n → ∞, (1/3)ⁿ → 0. Consequently, we find set on the line below the sum of infinitely many terms of the sequence above is S = 3/2

Thus, for an infinite geometric sequence G₁, G₁r, G₁r², ..., if numerical value of the common ratio r is between -1 and 1 (|r| < 1), then Sₙ = G₁(1 - rⁿ)/(1 - r). In this case, rⁿ → 0 as n → ∞ since |r| < 1 and then G₁rⁿ → 0. Therefore, as n → ∞, S → G₁/(1 - r). Symbolically, the sum to infinity of an infinite geometric series is denoted by S. Thus, we have **S = G₁/(1 - r)**

### Note
Recall that if {Gₖ}ₖ₌₁^∞ = G₁ + G₁r + G₁r² + ... is a geometric series with first term G₁ and common ratio r, then:
```
Sₙ = G₁(1 - rⁿ)/(1 - r)
```

(i) If |r| < 1, as n → ∞, rⁿ → 0 so that S → G₁/(1 - r). The series converges.

(ii) If r ≥ 1, then the series diverges or vibrates as follows:
   - If r = 1, then ΣGₖ = nG₁ when n → ∞
   - If r ≠ 1, then Sₙ = G₁(1 - rⁿ)/(1 - r)
   - If r ≤ -1, when n → ∞, then ΣGₖ vibrates
   - If r > 1, when n → ∞, then ΣGₖ diverges to ∞ (G₁ > 0) or -∞ (G₁ < 0)

### Example 1
Determine whether the series Σₙ₌₁^∞ 3ⁿ converges or diverges.

**Solution**
The series Σₙ₌₁^∞ 3ⁿ = 3 + 9 + 27 + ... + ... is a geometric series with first term G₁ = 3 and common ratio r = 3.  
Hence, the partial sum is given by Sₙ = G₁(1 - rⁿ)/(1 - r) = 3(1 - 3ⁿ)/(1 - 3) = 3(1 - 3ⁿ)/(-2)

Thus, as n → ∞, Sₙ → ∞. Therefore, the series diverges

### Example 2
Find the sum of the geometric series: 5 + 10/3 + 20/9 + 40/27 + ...

**Solution**
The geometric series has the first term G₁ = 5 and the common ratio r = (10/3)/5 = 2/3  
Since |r| < 1 then the series converges and its sum is given by:
```
S = G₁/(1 - r) = 5/(1 - 2/3) = 5/(1/3) = 15
```

### Exercise 1.19
Find the sum for each of the following, if it exists, assuming the patterns continue as in the first few terms.
a. 3 + 1 + 1/3 + 1/9 + 1/27 + ...  
b. 27 + 9 + 3 + 1 + ...  
c. 8 + 4 + 2 + 1 + ...  
d. 10 + 20/3 + 40/9 + 80/27 + ...  
e. 0.3 + 0.03 + 0.003 + 0.0003 + ...

### Further on infinite series

### Example 1
Find the sum Σₖ₌₁^∞ (5³⁻ᵏ)

**Solution**
```
Σₖ₌₁^∞ (5³⁻ᵏ) = 5²(1/5⁰) + 5²(1/5¹) + 5²(1/5²) + 5²(1/5³) + ...
```
It is a geometric series whose first term G₁ = 25 and the common ratio r = 1/5  
Therefore, the sum becomes:
```
S = G₁/(1 - r) = 25/(1 - 1/5) = 25/(4/5) = 125/4 = 31.25
```

### Example 2
Find the sum Σₖ₌₁^∞ (-1)^(k+1)(2/3)ᵏ

**Solution**
```
Σₖ₌₁^∞ (-1)^(k+1)(2/3)ᵏ = (-1)²(2/3)¹ + (-1)³(2/3)² + (-1)⁴(2/3)³ + ...
= (2/3) - (4/9) + (8/27) - ...
```
It is a geometric series whose first term G₁ = 2/3 and the common ratio r = -2/3  
Therefore, the sum becomes:
```
S = G₁/(1 - r) = (2/3)/(1 + 2/3) = (2/3)/(5/3) = 2/5 = 0.4
```

### Exercise 1.20
Find the sums for each of these geometric series:
a. Σₖ₌₁^∞ (1/2)ᵏ  
b. Σₖ₌₁^∞ (3/4)ᵏ⁻¹  
c. Σₖ₌₁^∞ (0.1)ᵏ

---

### 1.4.2. Recurring Decimals
Recurring or repeating decimals are rational numbers (fractions) whose representations as a decimal contain a pattern of digits that repeats indefinitely after decimal point. The decimal that start their recurring cycle immediately after the decimal point are called **purely recurring decimals**.

Purely recurring decimals are converted to an irreducible fraction whose prime factors in the denominator can only be the prime numbers other than 2 or 5, i.e., the prime numbers from the sequence {3, 7, 11, 13, 17, 19, ...}. The decimals that have some extra digits before the repeating the sequence of digits are called the **mixed recurring decimals**.

The repeating sequence may consist of just one digit or of any finite number of digits. The number of digits in the repeating pattern is called the **period**. Mixed recurring decimals are converted to an irreducible fraction whose denominator is a product of 2's and/or 5's besides the prime numbers from the sequence 3, 7, 11, 13, 17, 19, ...

All recurring decimals are infinite decimals

### Converting purely recurring decimals to fraction

### Example 1
Convert the recurring decimal 0.\overline{3} to a fraction

**Solution**
We can write the given decimal as the sum of the infinite converging geometric series as follows:
```
0.\overline{3} = 0.333333... = 0.3 + 0.03 + 0.003 + ...
= 3/10 + 3/100 + 3/1000 + ...
```
This is the infinite geometric series, where G₁ = 3/10 and r = 1/10  
Since |r| < 1 then:
```
S = G₁/(1 - r) = (3/10)/(1 - 1/10) = (3/10)/(9/10) = 3/9 = 1/3
```

### Example 2
Convert the recurring decimal 0.\overline{47} to a fraction

**Solution**
We can write the given recurring decimal as the sum of the infinite converging geometric series as follows:
```
0.\overline{47} = 0.474747... = 0.47 + 0.0047 + 0.000047 + ...
= 47/100 + 47/10000 + 47/1000000 + ...
```
Since |r| < 1 then:
```
S = G₁/(1 - r)
```
G₁ = 47/100 and r = 1/100  
Therefore, by substituting into the formula:
```
S = (47/100)/(1 - 1/100) = (47/100)/(99/100) = 47/99
```

**Notice** that when converting a recurring decimal that is less than one to a fraction, we write the repeating digits to the numerator and in the denominator of the equivalent fraction write as many 9's as is the number of digits in the repeating pattern.

### Exercise 1.21
Convert the following recurring decimals to fractions:
a. 0.\overline{4}
b. 3.\overline{7}
c. 0.\overline{56}

---

## 1.5 Applications of Sequence and Series in Daily Life

This section is devoted to the application of arithmetic and geometric progressions or geometric series that are associated with real-life situations.

### Activity 1.9
1. A man accepts a position with an initial salary of 5200 ETB per month. It is understood that he will receive an automatic increase of 320 ETB in the very next month and each month thereafter.
   a. Find his salary for the tenth month
   b. What are his total earnings during the first year?

2. A carpenter was hired to build 192 window frames. The first day he/she made five frames and each day, thereafter he/she made two more frames than he/she made the day before. How many days did it take him/her to finish the job?

Here are some examples followed by exercises. They illustrate some useful applications.

### Example 1
Observe the pattern in Figure 1.5:
a. If the pattern continues, find the number of letters in the column containing the letter M.
b. If the total number of letters in the pattern is 361, which letter will be in the last column?

**Figure 1.5: Letter pattern arrangement**  
The image shows a triangular arrangement of letters (A, B, C, D) forming rows. The first row has 1 letter, second row has 3 letters, third row has 5 letters, showing an arithmetic pattern.

**Solution**
a. If you observe the structure of the letters in figure 1.5, it is of the form: 1, 3, 5, 7, 9, ...  
This is an arithmetic series with first term A₁ = 1 and common difference d = 2. Therefore, the nth term of the arithmetic sequence is given by:
```
Aₙ = A₁ + (n - 1)d
```
For the letter M: n = 13  
A₁₃ = 1 + (13 - 1)(2) = 1 + (12)(2) = 25

b. The sum formula is:
```
Sₙ = n/2[2A₁ + (n - 1)d] = n/2[2(1) + (n - 1)(2)]
361 = n[1 + n - 1]
361 = n²
n = ±19 (as n > 0)
∴ n = 19
```
So, the letter "S" will be in the last column.

### Example 2
A theatre is filling up at a rate of 4 people in the first minute, 6 people in the second minute and 8 people in the third minute and so on. After 6 minutes, the theatre is half full. After how many minutes will the theatre be full?

**Solution**
The structure of the problem has an infinite arithmetic series of the form: 4 + 6 + 8 + ...  
So, the common difference of the problem is calculated as:
```
d = A₂ - A₁ = A₃ - A₂ = 2
```
Therefore, the sum of arithmetic series whose first term A₁ = 4 and common difference d = 2, is written as:
```
S₆ = 6/2[2(4) + (6 - 1)(2)] = 3(18) = 54 (theatre half full)
```
Therefore, the capacity of the theatre is 2 × 54 = 108
```
Sₙ = n/2[2A₁ + (n - 1)d]
108 = n/2[2(4) + (n - 1)(2)]
216 = n[8 + 2n - 2]
2n² + 6n - 216 = 0
n² + 3n - 108 = 0
(n + 12)(n - 9) = 0
∴ n = -12 or n = 9, where n must be a positive integer.
```
Therefore, n = 9. It takes 9 minutes for the theatre to be full.

### Example 3
A job applicant finds that a firm offers a starting annual salary of Birr 32,500 with a guaranteed raise of Birr 1,400 per year.
a. What would the annual salary be in the tenth year?
b. How much would be earned at the firm over the first 10 years?

**Solution**
a. The annual salary at the firm forms the arithmetic sequence 32,500, 33,900, 35,300, ... with first term A₁ = 32,500 and common difference d = 1,400. Thus, Aₙ = A₁ + (n - 1)d, substituting the values we obtain:
```
A₁₀ = 32,500 + (10 - 1)(1,400) = Birr 45,100
```

b. To determine the amount that would be earned over the first 10 years, we need to add the first 10 annual salaries:
```
S₁₀ = A₁ + A₂ + A₃ + ... + A₁₀ = 10(A₁ + A₁₀)/2
     = 10(32,500 + 45,100)/2
     = 5(77,600) = Birr 388,000
```
Therefore, a total of Birr 388,000 would be earned at the firm over the first 10 years.

### Exercise 1.22
1. A person is scheduled to get a raise of Birr 250 every 6 months during his/her first 5 years on the job. If their starting salary is Birr 25,250 per year, what will his/her annual salary be at the end of the 3rd year?
2. Bontu begins a saving program in which she will save Birr 1,000 the first year. Each subsequent year, she will save 200 more than she did the previous year. How much will she save during the eighth year?

### Example 4
A woman deposits Birr 3,500 in a bank account paying an annual interest at a rate of 6%. Show that whether the amounts she has in the account at the end of each year form a geometric sequence.

**Solution**
Let G₁ = 3,500. Then,
```
G₂ = G₁(1 + 0.06) = G₁(1.06)
G₃ = G₂(1 + 0.06) = G₁(1.06)(1.06) = G₁(1.06)²
G₄ = G₃(1 + 0.06) = G₁(1.06)²(1.06) = G₁(1.06)³
...
Gₙ = G₁(1.06)ⁿ⁻¹
```
Since the ratio of any two consecutive terms is a constant, which is 1.06, this sequence is a geometric sequence.

### Example 5
Suppose a radioactive substance loses half of its mass per year. If we start with 100 grams of a radioactive substance, how much will be left after 10 years?

**Solution**
Let us record the amount of the radioactive substance left after each year starting with G₁ = 100. Note that each term is half of the previous term and hence,
```
G₁ = 100
G₂ = 100/2 = 50
G₃ = 50/2 = 25
G₄ = 25/2 = 12.5
...
```
If you continue in this way, you see that the ratio of any two consecutive terms is a constant, which is 1/2, and hence this sequence is a geometric sequence. Therefore, after ten years, the amount of the substance left is given by:
```
G₁₁ = G₁ × (1/2)¹⁰ = 100 × (1/1024) = 0.09765625 g
```

### Exercise 1.23
1. A certain item loses one-tenth of its value each year. If the item is worth Birr 28,000 today, how much will it worth 4 years from now?
2. A boat is now worth Birr 34,000 and loses 12% of its value each year. What will it worth after 5 years?
3. The population of a certain town is increasing at a rate of 2.5% per year. If the population is currently 100,000, what will the population be 10 years from now?
4. Sofia deposits Birr 3,500 in a bank account paying an annual interest rate of 6%. Find the amount she has at the end of the:
   a. first year
   b. second year
   c. third year
   d. fourth year
   e. nth year
   f. Do the amounts she has at the end of each year form a geometric sequence? Explain.

### Example 6
A man was injured in an accident at work. He receives a disability grant of 4800 ETB in the first year. This grant increases by a fixed amount each year.
a. What is the annual rate of increase if he received a total of 143,500 ETB over 20 years?
b. His initial annual expenses are 2600 ETB, which increases at a rate of 400 ETB per year. After how many years will his expenses exceed his income?

**Solution**
a. Since the grant increases with a fixed amount each year, the problem is infinite arithmetic series and the sum is given as:
```
4800 + (4800 + d) + (4800 + 2d) + ...
```
This is an arithmetic series with first term A₁ = 4800 and the common difference d. So, the sum of the arithmetic series is given by:
```
Sₙ = n/2[2A₁ + (n - 1)d]
```
Therefore, the sum over 20 years is given by:
```
S₂₀ = 20/2[2(4800) + (20 - 1)d] = 143,500
143,500 = 10[9600 + 19d]
14,350 = 9600 + 19d
19d = 4750
d = 250
```
Therefore, the annual increase if he received a total of 143,500 ETB over 20 years is 250 ETB.

b. The structure of the series is given by:
```
2600 + 3000 + 3400 + ...
```
This is an arithmetic series whose first term A₁ = 2600 and common difference d = 400.  
Income: S_income = n/2[2(4800) + (n - 1)(250)] = n/2[9600 + 250n - 250] = n/2[9350 + 250n]  
Expenses: S_expenses = n/2[2(2600) + (n - 1)(400)] = n/2[5200 + 400n - 400] = n/2[4800 + 400n]

Let S_expenses > S_income:
```
n/2[4800 + 400n] > n/2[9350 + 250n]
4800 + 400n > 9350 + 250n
150n > 4550
n > 30.333...
```
Therefore, his expenses will exceed his income after 31 years.

### Exercise 1.24
1. A job applicant finds that a firm A offers a starting salary of Birr 31,100 with a guaranteed raise of Birr 1,200 per year, whereas firm B offers a higher starting salary of Birr 35,100 but will guarantee a yearly raise of only Birr 900.
   a. What would the annual salary be in the 11th year at firm A?
   b. What would the annual salary be in the 11th year at firm B?
   c. Over the first 11 years, how much would be earned at firm A?
   d. Over the first 11 years, how much would be earned at firm B?
   e. Compare the amount earned in 11 years in firms A and B

2. A contest offers a total of 18 prizes. The first prize is worth Birr 10,000, and each consecutive prize is worth Birr 500 less than the next higher prize. Find the value of the eighteenth prize and the total value of the prizes.

3. A contest offers 10 prizes with a total value of Birr 13,250. If the difference in value between consecutive prizes is Birr 250, what is the value of the first prize?

### Example 7
A flower 110 cm high is planted in a garden. At the end of the first year, the flower is 120 cm tall. Thereafter the growth of the flower each year is half of its growth in the previous year. Show that the height of the flower will never exceed 130 cm. Draw a graph of the relationship between time and growth.

**Solution**
The annual growth of the flower: 10, 5, 5/2, 5/4, ... and the sum of the growth:
```
10 + 5 + 5/2 + 5/4 + ...
```
This is a geometric series with the first term G₁ = 10 and common ratio r = 1/2
```
S = G₁/(1 - r) = 10/(1 - 1/2) = 10/(1/2) = 20
```

**Figure 1.6: Flower growth over time**  
The image shows a graph with time (in years) on the x-axis and growth (in cm) on the y-axis. The curve shows diminishing growth approaching 20 cm as an asymptote. Starting at (1,10), then (2,5), (3,2.5), etc., approaching y=20 but never reaching it. The note indicates we may join the points because the growth is continuous.

Therefore the growth of the flower is limited to 20 cm, and the maximum height of the shrub is therefore 110 cm + 20 cm = 130 cm.

### Example 8
Given a square with side length a. The side of the second square is half its diagonal. The side of the third square is half of the diagonal of the second square and so on as shown in the figure below. Find the sum of the areas of all these squares.

**Solution**
Let the side of square be a, and diagonal d = a√2  
Area of first square = a²  
Side of second square = a√2/2  
Area of second square = (a√2/2)² = a²/2  
Side of third square = (a√2/2)√2/2 = a/2  
Area of third square = (a/2)² = a²/4  
...
Sum of areas = a² + a²/2 + a²/4 + a²/8 + ...

Since r < 1, then S = a²/(1 - 1/2) = 2a²

### Exercise 1.25
1. Suppose a ball is dropped from a height of h m and always rebounds to r% of the height from which it falls. Show that the total vertical distance that could be covered by the ball is h[(1 + r)/(1 - r)] + h meters. Assume that the ball will never stop bouncing.

2. Given an equilateral triangle with side length a, its height is the side of another equilateral triangle. The height of this triangle is then the side of the third equilateral triangle and so on, as shown in the diagram. Find the sum of the areas of all these triangles.

---

## Summary and Review Exercise

### Summary
1. **Sequence**
   - A sequence {aₙ} is a function whose domain is the set of positive integers or a subset of consecutive integers starting with 1.
   - The sequence {a₁, a₂, a₃, ...} is denoted by {aₙ} or {aₙ}ₙ₌₁^∞
   - A sequence that has a last term is called a finite sequence. Otherwise it is called infinite sequence
   - Recursion formula is a formula that relates the general term aₙ of a sequence to one or more of the terms that come before it

2. **Arithmetic and geometric progression**
   - An arithmetic sequence is one in which the difference between consecutive terms is a constant, and this constant is called the common difference
   - If {Aₙ} is an arithmetic progression with the first term A₁ and the common difference d, then the nth term is given by: **Aₙ = A₁ + (n - 1)d**
   - A geometric progression is one in which the ratio between consecutive terms is a constant, and this constant is called the common ratio
   - If {Gₙ} is a geometric progression with the first term G₁ and a common ratio r, then the nth term is given by: **Gₙ = G₁rⁿ⁻¹**

3. **Partial sums:**
   - The sum of the first n terms of the sequence {aₖ}ₖ₌₁^∞, denoted by Sₙ, is called the partial sum of the sequence
   - The sum Sₙ of the first n terms of an arithmetic sequence with first term A₁ and common difference d is:
     ```
     Sₙ = Σₖ₌₁ⁿ Aₖ = n/2[2A₁ + (n - 1)d] or Sₙ = n(A₁ + Aₙ)/2
     ```
   - In a geometric sequence, {Gₖ}ₖ₌₁^∞, with common ratio r, the sum of the first n terms Sₙ is given by:
     ```
     Sₙ = nG₁ if r = 1
     Sₙ = G₁(1 - rⁿ)/(1 - r) if r ≠ 1
     ```

4. **Convergent series and divergent series**
   - In a sequence if {aₖ}ₖ₌₁^∞, Sₙ is the nth partial sum such that, as n → ∞, Sₙ → s where s is a real number, we say the infinite series Σaₖ converges to s, otherwise the series diverges

### Review Exercise
1. List the first five terms of each of the sequences whose general terms are given below where n is a positive integer:
   a. aₙ = n²/n!
   b. aₙ = (-1)ⁿ⁺¹ + (-1)ⁿ sin(nπ)
   c. aₙ = Sgn(3 - n)

2. List the first five terms of each of the sequences whose general terms are given below where n is a positive integer:
   a. aₙ = 3ⁿ(-1)ⁿ
   b. aₙ = n/e^(n-1)
   c. aₙ = (-2)ⁿ + 6/n!
   d. aₙ = cos(nπ/2)
   e. aₙ = (n - 1)!

3. Determine whether the sequences with the following general terms are arithmetic:
   a. aₙ = (n² + 5n + 6)/(n + 2)
   b. aₙ = √(4n + 1)

4. Find the arithmetic mean between 1 and 9

5. Find the 10th and nth terms of the geometric progression 5, 25, 125, ...

6. Find three numbers in geometric progression such that their sum is 13/6 and the sum of their squares is 91/36

7. Find the sum of:
   a. Σₖ₌₁ⁿ (k² + 2k² - 3k + 5)
   b. Σₖ₌₁ⁿ 2/(k² + 5k + 6)

8. Given: Σₓ₌₁³ x² = 303, Σᵧ₌₁³ y² = 127, Σₓ₌₁³ x = 50 and Σᵧ₌₁³ y = 105, find the values of:
   a. Σ(2xₖ + 3yₖ)
   b. Σ(2xₖ - 3yₖ)
   c. Σ(2xₖ - 5yₖ + 3)

9. Find the sum of all the natural numbers between 100 and 1000 which are multiples of 5.

10. In an arithmetic progression the 1st term is 2 and the sum of the 1st five terms is one-quarter of the next five terms. Show that the 20th term is -112.

11. How many terms of the arithmetic progression -6, -11/2, -5, ... are needed to give the sum -25?

12. The sum of a certain number of terms of the arithmetic progression 25, 22, 19, ... is 116. Find the last term.

13. If the sum of n terms of an arithmetic progression is (pn + qn²), where p and q are constants, find the common difference.

14. If the nth partial sum of an arithmetic sequence {Aₙ} is 4n², find A₂₀ and A₅₀

15. Convert this mixed recurring decimal 0.31\overline{7} to fraction

16. Convert the mixed recurring decimal to fraction:
    a. 0.3\overline{7}
    b. 3.2\overline{354}

17. The first three terms of a convergent geometric series are: x + 1; x - 1; 2x - 5.
    a. Find the values of x (x ≠ 1 or -1)
    b. Find sum to infinity of the series.

18. Find Σₖ₌₁ⁿ (2⁴⁻³ᵏ)

19. Find the product 4 × 4² × 4³ × ... × 4^(2ⁿ)

20. If Σₖ₌₁ⁿ 2⁴ᵏ = 5, find the values of n.

21. If the product 5^(2x) × 5^(3x) × 5^(5x) ... = 5, find k

22. Evaluate Σₖ₌₁ⁿ (2 + 3ᵏ⁻¹)

23. The sum of the first three terms of a geometric progression is 39/10 and their product is 1. Find the common ratio and the three terms.

24. How many terms of geometric progression 3, 3², 3³, ... are needed to give the sum 120?

25. The sum of first three terms of a geometric progression is 16 and the sum of the next three terms is 128. Determine the first term, the common ratio and the sum of n terms of the geometric progression.

26. Given a geometric progression with a₆ = 729 and 7th term 64, determine S₇

27. If the 4th, 10th and 16th terms of a geometric progression are x, y and z respectively. Prove that x, y, z are in geometric progression.

28. Find the sum to n terms of the sequence 8, 88, 888, 8888, ...

29. Show that the products of the corresponding terms of the sequences a, ar, ar², ... arⁿ⁻¹ and A, AR, AR², ... ARⁿ⁻¹ form a geometric progression, and find the common ratio.

30. If the pth, qth and rth terms of a geometric progression are a, b and c, respectively. Prove that a^q⁻ʳ b^r⁻ᵖ c^p⁻q = 1

31. If the first and the nth term of a geometric progression are a and b, respectively, and if P is the product of n terms, prove that P = (ab)^(n/2)

32. If a, b, c and d are in geometric progression. Show that (a² + b² + c²)(b² + c² + d²) = (ab + bc + cd)²

33. Insert two numbers between 3 and 81 so that the resulting sequence is geometric progression.

34. The sum of two numbers is 6 times their geometric mean, show that numbers are in the ratio (3 + 2√2) : (3 - 2√2)

35. If A and G are an arithmetic mean and geometric mean, respectively between two positive numbers, prove that the numbers are A ± √((A + G)(A - G))

36. 150 workers were hired to finish a job in a certain number of days. 4 workers dropped out on second day, four more workers dropped out on third day and so on. It took eight more days to finish the work. Find the number of days in which the work was completed.