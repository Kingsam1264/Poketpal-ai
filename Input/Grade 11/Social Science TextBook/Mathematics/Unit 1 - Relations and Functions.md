# Unit 1: Relations and Functions

## Unit Outcomes

By the end of this unit, you will be able to:
- Generalize patterns using explicitly defined and recursively defined functions
- Know the inverse of a given relation
- Know types of functions
- Recognize real-valued functions
- Know how to find compositions of functions
- Recognize inverse of a function
- Sketch the graph of the inverse function
- Understand how to apply relation and function in real life situations

## Key Words

- composition of functions
- domain
- function
- greatest integer (floor) function
- identity function
- inverse function
- power function
- modulus
- range
- vertical line test
- relation
- signum (sgn) function

## Introduction

In your daily life, you come across many patterns that characterize relationships between individuals such as brother and sister, father and daughter or son, teacher and student, etc. In mathematics also you come across many relationships such as a line l is perpendicular to line m; a number a is less than a number b; a number c is a factor of a number d, etc.

In this unit, the concepts about relations and functions that you have learned in Unit 1 of Grade 10 will be revised and some special types of functions such as power functions, absolute value functions, signum functions and the greatest integer functions and their properties will be discussed. Furthermore, some applications of relations and functions will also be considered.

---

## 1.1 Relations

### Relation: Domain and Range

In this section, we will revise about the concept of a relation and determine domain and range of relations. Graphs of relations that are defined using numbers in the coordinate plane will also be considered.

**Activity 1.1**

1. Mention at least five different relationships between family members of a certain family.
2. Let A = {1, 2} and B = {a, b}.
   - a. Find all subsets of A × B
   - b. Find the set of the first and the set of the second coordinates of all members of the sets in (a).

From your responses in Activity 1.1, observe that relationships between individuals form a set of ordered pairs of individuals and all the nonempty subsets of A × B are sets of ordered pairs.

**Note:** Any set of ordered pairs is a relation.

**Definition 1.1**

Given two sets A and B, any set R of ordered pairs (x, y), where x ∈ A and y ∈ B, is called a relation from A to B and for (x, y) ∈ R, x is called the first component or coordinate and y is called the second component or coordinate of (x, y).

**Given a relation R from A to B:**

- The set of all the first components or coordinates of the elements of R is called the domain of R and it is denoted by Dom(R). That is, Dom(R) = {x ∈ A | (x, y) ∈ R for some y ∈ B}
- The set of all the second components or coordinates of the elements of R is called the range of R, denoted by Ran(R). That is, Ran(R) = {y ∈ B | (x, y) ∈ R for some x ∈ A}

**Example 1**

Find the domain and range of the relation R = {(45, 65), (48, 68), (41, 62), (46, 66), (50, 70)}.

**Solution**

Dom(R) = {41, 45, 46, 48, 50}, the set of all the first coordinates
Ran(R) = {62, 65, 66, 68, 70}, the set of all the second coordinates

**Note:**

- For an ordered pair (x, y), x is called the first component or the first coordinate of the given ordered pair and y is called the second component or the second coordinate of the ordered pair (x, y).
- For an ordered pair (x, y), order is important; that is, (x, y) = (y, x) only when x = y.
- For two ordered pairs (a, b) and (c, d); (a, b) = (c, d) if and only if a = c and b = d.

**Example 2**

In a certain school, there are four sections of Grade 11 and each section is related with the number of students in the given section as in Table 1 below.

**Table 1**
| Sections | Number of Students |
|----------|-------------------|
| Section 1 | 49 |
| Section 2 | 51 |
| Section 3 | 48 |
| Section 4 | 50 |

a. Find the relation R defined by Table 1
b. Find the domain and range of the relation defined by Table 1.

**Solution**

a. The information given in Table 1 can be represented as a set of ordered pairs. In this case, the first component represents the section and the second component represents the number of students in the given section. The ordered pairs (Section 1, 49), (Section 2, 51), (Section 3, 48) and (Section 4, 50) define a relation between a section and the number of students in the given section. This information is given as a set of ordered pairs by:
R = {(Section 1, 49), (Section 2, 51), (Section 3, 48), (Section 4, 50)}

b. Domain of R is given by Dom(R) = {Section 1, Section 2, Section 3, Section 4}, which is the set of all the first components or coordinates of the elements of R and the range of R is given by Ran(R) = {49, 51, 48, 50}, which is the set of all second components or coordinates of the elements of R.

**Example 3**

Given a relation R = {(x, y) : y = x² and x ∈ {-2, -1, 0, 1, 2}}.

a. List all the elements of R
b. Find the domain and range of R

**Solution**

a. When x = -2, y = (-2)² = 4; when x = -1, y = (-1)² = 1; when x = 0, y = 0² = 0; when x = 1, y = 1² = 1; and when x = 2, y = 2² = 4.

Thus, R = {(-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)}

b. Dom(R) = {-2, -1, 0, 1, 2}, the set of all the first coordinates of the elements of R and Ran(R) = {0, 1, 4}, the set of all the second coordinates of the elements of R.

**Exercise 1.1**

1. Let R = {(1, 1), (2, -2), (10, 20), (5, 25), (10, 100)}. Find the domain and range of R.
2. Table 2 gives the marks of a certain student in four subjects out of 100.

**Table 2**
| Subjects | Marks (out of 100) |
|----------|-------------------|
| English | 89 |
| Mathematics | 91 |
| Physics | 88 |
| Chemistry | 90 |

a. List all the elements of a relation R defined by Table 2
b. Find the domain and range of R in (a).

3. Let R be a relation defined by R = {(x, y) : y = x - 2 and x ∈ {0, 1, 2, 3, 4, 5}}
a. List all the elements of R
b. Find the domain and range of R.

### Representations of Relations (1)

A relation may consist of a finite set of ordered pairs or an infinite set of ordered pairs. Furthermore, a relation may be defined by several different methods, such as:
- a set of ordered pairs
- a correspondence between domain and range
- a graph
- an equation
- an inequality or a combination of these, and so on.

**Example 4**

Given R = {(1, 2), (3, 4), (4, 4), (5, 6)}. Find the domain and range of R.

**Solution**

R is defined by a finite set of ordered pairs.
Dom(R) = {1, 3, 4, 5}, the set of all the first coordinates of the elements of R and Ran(R) = {2, 4, 6}, the set of all the second coordinates of the elements of R.

**Example 5**

A relation R is defined by a diagram in Figure 1.1 below. Find the domain and range of R.

**Figure 1.1:** A diagram showing arrows from numbers {1, -2, 3} to letters {a, b, c, -4, 4}

**Solution**

R, as a set of ordered pairs, is given by R = {(1, 2), (1, 4), (1, -4), (-2, 4), (3, 4)}.

Then:
a. Dom(R) = {-2, 1, 3}, the set of all the first coordinates of elements of R
b. Ran(R) = {-4, 2, 4}, the set of all the second coordinates of elements of R

**Example 6**

Find the domain and range of the relation R defined by the graph given in Figure 1.2.

**Figure 1.2:** A graph showing plotted points at (-2, 4), (1, -4), (1, 2), (1, 4), and (3, 4)

**Solution**

R as a set of ordered pairs is given by R = {(-2, 4), (1, -4), (1, 2), (1, 4), (3, 4)}. Then:
a. Dom(R) = {-2, 1, 3}, the set of all the first coordinates of elements of R
b. Ran(R) = {-4, 2, 4}, the set of all the second coordinates of elements of R

**Exercise 1.2**

1. Find the domain and range of the relation R = {(-2, -5), (-1, -3), (0, -1), (1, 1), (2, 3)}.
2. List all the elements of the relation R defined by Figure 1.3 and find its domain and range.

**Figure 1.3:** A diagram showing arrows from numbers {1, 2, 3, 4, 5} to letters {a, b, c, d, e}

3. Find the domain and range of the relation R given in Figure 1.4.

**Figure 1.4:** A graph showing plotted points at (-1, -2), (0, -1), (1, 0), (2, 1), (3, 2), and (4, 3)

4. Find the domain and range of the relation, R = {(x, y) : x, y ∈ ℝ and y = x²}.

### Representations of Relations (2)

**Example 7**

A relation R is defined by R = {(x, y) : x ∈ ℝ, y ∈ ℝ and y = 2x}. Find the domain and range of R.

**Solution**

R is defined as an infinite set of ordered pairs. From the definition of R, the first coordinate which is in the domain of R can be any real number and also the second coordinate which is in the range of R can be any real number because for any y ∈ ℝ, you have x = y/2.

Thus:
a. The domain of R is the set of all real numbers, ℝ
b. The range of R is the set of all real numbers, ℝ

**Figure 1.5** shows the graph of y = 2x, a straight line passing through the origin with slope 2.

**Example 8**

Draw the graph of the relation R given by R = {(x, y) | x, y ∈ ℝ, y ≤ x + 1 and y + x ≤ 2}. and find the domain and range of R.

**Solution**

First draw the lines y = x + 1 and y + x = 2 in the coordinate plane. Here, you can use a table of values. Then, the two lines divide the coordinate plane into four regions and by taking a point on each of the four regions, we can determine the region(s) that represents the graph of R as given in Figure 1.6.

**Figure 1.6:** A graph showing two intersecting lines y = x + 1 and y + x = 2, with the region satisfying both inequalities shaded.

From the graph:
a. Dom(R) = ℝ
b. Ran(R) = ℝ

**Exercise 1.3**

1. Find domain and range of the relation R = {(x, y) : x, y ∈ ℝ and y = x²}
2. Draw the graph of the relation R given by R = {(x, y) : x, y ∈ ℝ, y ≤ x - 1 and y + x ≥ 3} and find the domain and range of R.

---

## 1.2 Inverse of Relations and Their Graphs

### Inverse of Relations

**Activity 1.2**

Consider the relations R = {(a, 1), (b, 2), (c, 3), (d, 4)} and S = {(1, a), (2, b), (3, c), (4, d)}.
a. Interchange the order of the first and the second components of the ordered pairs in R and obtain a new relation.
b. Interchange the order of the first and the second components of the ordered pairs in S and obtain a new relation.

From Activity 1.2, observe that from a given relation you can form another relation by interchanging the order of the first and the second components of the ordered pairs in the given relation and these two relations are called inverse relations of each other.

**Definition 1.2**

The inverse of a relation is a relation formed by interchanging the order components of each of the ordered pairs in the given relation.

That is, if R = {(x, y) : (x, y) ∈ R} is a relation, then the inverse of R, denoted by R⁻¹, is the relation defined by R⁻¹ = {(y, x) : (x, y) ∈ R}

**Example 1**

Let R = {(1, 3), (2, 5), (3, 7), (4, 11), (5, 23)}. Then, find R⁻¹.

**Solution**

The elements of R⁻¹ are given by interchanging the order of the components of the elements of R. That is, R⁻¹ = {(3, 1), (5, 2), (7, 3), (11, 4), (23, 5)}

**Example 2**

Table 3 below gives a relation R between a person's age and the person's maximum recommended heart rate. Find R⁻¹.

**Table 3**
| Age (years) x | Maximum Recommended Heart Rate (Beats per Minute) y |
|---------------|-----------------------------------------------------|
| 20 | 200 |
| 30 | 190 |
| 40 | 180 |
| 50 | 170 |
| 60 | 160 |

**Solution**

The relation R is given as a set of ordered pairs by:
R = {(20, 200), (30, 190), (40, 180), (50, 170), (60, 160)}

Then, the inverse of R is given by interchanging the order of the first and the second coordinates of ordered pairs of R, that is:
R⁻¹ = {(200, 20), (190, 30), (180, 40), (170, 50), (160, 60)}

**Example 3**

For the relation R defined by the diagram in Figure 1.7, find R⁻¹.

**Figure 1.7:** A diagram showing arrows from numbers {1, 2, 3, 4} to letters {a, b, c}

**Solution**

The relation R is defined by a diagram and from the diagram in Figure 1.7, R is given by R = {(1, a), (1, c), (2, a), (2, b), (3, c), (4, a)}.

Then, R⁻¹ = {(a, 1), (c, 1), (a, 2), (b, 2), (c, 3), (a, 4)}. It is obtained by interchanging the order of the first and the second components of all the ordered pairs in R.

**Example 4**

Let R = {(x, y) : x, y ∈ ℝ and y = 3x - 5}. Find R⁻¹.

**Solution**

R⁻¹ = {(x, y) : x, y ∈ ℝ and x = 3y - 5} = {(x, y) : x, y ∈ ℝ and y = (x + 5)/3}

**Exercise 1.4**

Find the inverse of each of the following relations:
1. R = {(1, 1), (2, 4), (3, 9), (4, 16), (5, 25)}
2. R is defined by the diagram given in Figure 1.8
3. R = {(x, y) : x, y ∈ ℝ and y = 4x + 2}

**Figure 1.8:** A diagram showing arrows from numbers {1, 2, 3, 4} to letters {a, b, c}

### Domain and Range of Inverse Relations

**Activity 1.3**

Consider R = {(2, 20), (3, 19), (4, 18), (5, 17), (6, 16)}.
a. Find R⁻¹
b. Find the domain and range of R
c. Find the domain and range of R⁻¹

From Activity 1.3, observe the following results for the given relation R:
a. Domain of R⁻¹ = Range of R
b. Range of R⁻¹ = Domain of R

As relations are often specified by expressions involving first component, say x, and a second component, say y, it is natural for us that we want to work with the concept of the inverse relation in that setting. The inverse relation can be formed by interchanging the roles of x and y in the defining expression.

That is, given a relation R = {(x, y) | (x, y) ∈ R}, we have two ways of defining R⁻¹:
a. Interchanging x and y in the ordered pair (x, y) and keep the relation; that is, R⁻¹ = {(y, x) : (x, y) ∈ R}
b. Keep the ordered pair (x, y) as it is and interchange the roles of x and y in the relation; that is, R⁻¹ = {(x, y) : (y, x) ∈ R}

**Example 5**

Let R = {(-3, 2), (-2, 3), (-1, 4), (0, 5), (1, 6), (2, 7), (3, 8)}. Then find the domain and the range of R⁻¹.

**Solution**

R⁻¹ is obtained by interchanging the order of the components of each of the ordered points in R. That is, R⁻¹ = {(2, -3), (3, -2), (4, -1), (5, 0), (6, 1), (7, 2), (8, 3)} and then:
- The domain of R⁻¹ is Dom(R⁻¹) = {2, 3, 4, 5, 6, 7, 8}
- The range of R⁻¹ is Ran(R⁻¹) = {-3, -2, -1, 0, 1, 2, 3}

**Example 6**

Given R = {(x, y) | x, y ∈ ℝ and y = 3x + 6}
a. Find the inverse of R.
b. Find the domain and range of R⁻¹.

**Solution**

a. First interchange variables x and y in the equation y = 3x + 6 to obtain x = 3y + 6. Then solving for y in terms of x gives you y = (x - 6)/3.

Thus, R⁻¹ = {(x, y) | x, y ∈ ℝ and y = (x - 6)/3}.

R⁻¹ can also be written as R⁻¹ = {(y, x) | x, y ∈ ℝ and y = 3x + 6}.

Observe that the two expressions of R⁻¹ define the same relation.

b. Dom(R) = ℝ = Ran(R⁻¹) and Ran(R) = ℝ = Dom(R⁻¹)

**Example 7**

Find the inverse of R = {(x, y) | x, y ∈ ℝ, y ≥ x - 3 and y ≤ x + 5}

**Solution**

R⁻¹ = {(x, y) | x, y ∈ ℝ, x ≥ y - 3 and x ≤ y + 5}
= {(x, y) | x, y ∈ ℝ, -y ≥ -x - 3 and -y ≤ -x + 5} (Solving for y in terms of x)
= {(x, y) | x, y ∈ ℝ, y ≤ x + 3 and y ≥ x - 5}

That is, R⁻¹ = {(x, y) | x, y ∈ ℝ, y ≤ x + 3 and y ≥ x - 5}

**Exercise 1.5**

Find the inverse and also the domain and range of the inverse of each of the following relations:
a. R = {(1, 3), (2, 4), (3, 9)}
b. S = {(x, y) | x, y ∈ ℝ and y = 2x - 4}
c. T = {(x, y) | x, y ∈ ℝ, y ≥ 2x + 1 and y ≤ x - 2}

### Graphs of Inverse Relations

**Activity 1.4**

Consider the ordered pairs (1, 2), (-3, 1), (-2, -4) and (2, -3)
1. Plot the given points on the coordinate plane
2. Find the image of each of the ordered pairs given with reflection of the coordinate plane on the line y = x

From your responses in Activity 1.4, observe that the image of any given ordered pair (a, b) with respect to the reflection of the coordinate plane on the line y = x is (b, a).

The graphs of relations and their inverses are related in an interesting way. First, note that, in the coordinate system ordered pairs (a, b) and (b, a) are the images of each other with respect to the reflection of the coordinate plane on the line y = x.

**Figure 1.9:** Image of (a, b) with respect to the reflection on the line y = x, showing (a, b) and (b, a) as mirror images across the line y = x.

Therefore, the graph of the inverse of a given relation is the image of the graph of R with respect to the reflection of the coordinate plane on the line y = x.

**Example 8**

Given R = {(0, 0), (1, 2), (2, 4), (3, 6)}, plot the graphs of R and R⁻¹ on the same coordinate plane.

**Solution**

First let us find R⁻¹ by interchanging the order of the components of the ordered pairs of R and obtain R⁻¹ = {(0, 0), (2, 1), (4, 2), (6, 3)}.

Then, plotting each of the ordered pairs in both R and R⁻¹ gives us the following figure.

**Figure 1.10:** Graphs of R and R⁻¹, showing points A(0,0), B(1,2), C(2,4), D(3,6) and their reflected images E(0,0), F(2,1), G(4,2), H(6,3) across the line y = x.

In Figure 1.10, the points E, F, G and H are images of the points A, B, C and D after they are reflected with respect to the line y = x.

**Example 9**

Draw the graph of the inverse of the relation, R = {(x, y) | x, y ∈ ℝ and y = 3x + 6} in the coordinate plane.

**Solution**

First R⁻¹ = {(x, y) | x, y ∈ ℝ and x = 3y + 6} and solving for y in terms of x gives you:
R⁻¹ = {(x, y) | x, y ∈ ℝ and y = (x - 6)/3}

First, draw the graph of R and reflect it with respect to the line y = x and obtain the graph of R⁻¹ as in Figure 1.11.

**Figure 1.11:** Graphs of y = 3x + 6 and y = (x - 6)/3, showing them as reflections across the line y = x.

**Example 10**

Graph R = {(x, y) | x, y ∈ ℝ and y = x - 4} and its inverse in the same coordinate plane.

**Solution**

First, let us find R⁻¹. Thus, R⁻¹ = {(x, y) | x, y ∈ ℝ and x = y - 4} = {(x, y) | x, y ∈ ℝ and y = x + 4}. Then, we draw the graph of R in the coordinate plane and reflect it with respect to the line y = x to obtain the graph of R⁻¹ as in Figure 1.12.

**Figure 1.12:** Graphs of y = x + 4 and y = x - 4, showing them as reflections across the line y = x.

**Exercise 1.6**

Draw the graph of the given relation and its inverse on the same coordinate plane for each of the following relations:
a. R = {(2, 4), (3, 9), (4, 16)}
b. S = {(x, y) | x, y ∈ ℝ and y = 2x - 2}
c. T = {(x, y) | x, y ∈ ℝ and y = x + 5}

---

## 1.3 Types of Functions

In this section, you will be introduced with special types of relations called functions. Some special types of functions: power functions, absolute value functions, signum functions and the greatest integer function will be considered.

### Functions

**Activity 1.5**

What differences do you observe between the relations R₁ and R₂ given in Figure 1.13?

**Figure 1.13:** Two relation diagrams. R₁ shows arrows from domain elements to multiple range elements (not a function). R₂ shows each domain element mapping to exactly one range element (a function).

From your responses in Activity 1.5, observe that:
i. There are relations in which one first component is related to two or more different second components
ii. There are relations in which every first component is related to only one corresponding second coordinate

Relations of the second type are called functions of which its formal definition is given as follows.

**Definition 1.3**

A relation in which each object from the set of the first components of ordered pairs of the relation is related with exactly one object from the set of second components of the ordered pairs of the relation is called a function.

**Example 1**

Determine if R = {(-1, 0), (0, -3), (2, -3), (3, 0), (4, 5)} is a function.

**Solution**

From the ordered pairs in R, you can see that every first component is related to exactly one second component; that is, -1 is related with 0 only, 0 is related with -3 only, 2 is related with only -3, 3 is related with 0 only and 4 is related with only 5. Therefore, R is a function.

**Example 2**

Determine if R = {(6, 1), (7, 3), (0, 2), (6, 4)} is a function.

**Solution**

Dom(R) = {6, 7, 0} and Ran(R) = {1, 2, 3, 4}

From the set of first components, you can see that the relation has two ordered pairs with 6 as a first component: (6, 1) and (6, 4), but 1 ≠ 4. Therefore, the relation R is not a function.

**Example 3**

Show that the relation R = {(x, y) : y = x + 1} is a function.

**Solution**

For any given variable x, there is only one variable y = x + 1. That is, if (x, y) and (x, z) are in R, then y = x + 1 and z = x + 1. This implies, y = z.

**Example 4**

Let R = {(x, y) : x, y ∈ ℝ and x² - y² = 0}. Show that R is not a function.

**Solution**

(1, -1) and (1, 1) are both in R, because 1² - (-1)² = 1 - 1 = 0 and 1² - 1² = 1 - 1 = 0, but -1 ≠ 1. Thus, R is not a function.

**Exercise 1.7**

Which of the following relations are functions?
a. R₁ = {(1, 0), (1, 3), (4, 5), (6, 6)}
b. R₂ = {(1, 1), (2, 3), (3, 4), (5, 5)}
c. R₃ = {(x, y) : x, y ∈ ℝ and y = x + 3}
d. R₄ = {(x, y) : x, y ∈ ℝ and x² + y² = 1}

### Vertical Line Test

**Notation**

If f is a function from A to B, then we denote it by f : A → B or A → B and:
a. Dom(f) = A
b. Range of f is a subset of B
c. If (x, y) ∈ f, then we write y = f(x) and f(x) is read as "f of x".

**Note**

For any given relation R, to determine whether it is a function or not, check whether the relation gives two different second coordinates for the same first coordinate. In other words, given a relation R, if (x, y) ∈ R and (x, z) ∈ R implies y = z for any x, y and z, then R is a function. Otherwise, R is not a function.

**Example 5**

Let R = {(x, y) : x, y ∈ ℝ and y = 2x + 1}. Then, show that R is a function.

**Solution**

Suppose (x, y) ∈ R and (x, z) ∈ R. Then y = 2x + 1 and z = 2x + 1. This implies y = 2x + 1 = z and hence R is a function.

**Note: The Vertical Line Test**

A set of points in the coordinate plane represents a function if and only if no two points of the given set are on the same vertical line.

**Example 6**

Use the Vertical Line Test to determine if each one of the relations in the following graphs is a function.

**Figure 1.14:** Graph of a relation R showing a curve that fails the vertical line test (a vertical line intersects it at multiple points)

**Figure 1.15:** Graph of a relation S showing a curve that passes the vertical line test (any vertical line intersects it at exactly one point)

**Solution**

a. You can see from the graph of R that it is possible to find a vertical line intersecting the graph more than once as it can be seen in Figure 1.16. Hence, R does not represent a function.

b. Any vertical line intersects the graph of S exactly once as shown in Figure 1.17. Hence, S is a function.

**Exercise 1.8**

1. Determine if the following relations are functions:
   a. R₁ = {(x, y) | x, y ∈ ℝ and y = 3x + 1}
   b. R₂ = {(x, y) : x, y ∈ ℝ and x² + y² = 9}
2. Which of the following graphs represent graph(s) of a function?
   - Figure 1.18: A graph that passes the vertical line test
   - Figure 1.19: A graph that fails the vertical line test

### 1.3.1 Power Functions with Their Graphs

#### Basic Properties of Power Functions (1)

**Activity 1.6**

a. A square is cut out of a cardboard, with each side having length x. Find the area of the square in terms of its side length x.
b. Find the volume of a cube with each edge having length t.
c. Find the area of a circle of radius r.

From your responses in Activity 1.6, observe that:
a. The area of the square is given as a function of x, which is a power of x.
b. The volume of the cube is given as a function of t, which is a power of t.
c. The area of the circle is given as a function of r, which is a constant multiple of power of r.

These three functions are examples of power functions; that means, they are functions that are some constant times a power of the given variable.

**Definition 1.4**

A function of the form f(x) = axʳ for some nonzero real number a and a real number r is called a power function.

**Example 1**

Which of the following functions are power functions?
a. f(x) = 3x²
b. g(x) = 5x³
c. h(x) = 2ˣ
d. l(x) = x³
e. m(x) = log₃x
f. n(x) = -4x⁻³

**Solution**

The functions f(x), g(x), l(x) and n(x) are power functions whereas h(x) and m(x) are not a power functions; h(x) is an exponential function and m(x) is a logarithmic function.

Next, you will learn the behaviors of power functions and these will be done by considering different examples of power functions and generalize the behavior of these power functions.

**Example 2**

Find the domain and range of each of the following functions and draw their graphs:
a. f(x) = x²
b. g(x) = x⁴

**Solution**

a. Dom(f) = ℝ and Ran(f) = [0, ∞)
b. Dom(g) = ℝ and Ran(g) = [0, ∞)

To draw the graphs of both f and g, use the table of values given below:

| x | f(x) = x² | g(x) = x⁴ |
|---|-----------|-----------|
| -2 | 4 | 16 |
| -1 | 1 | 1 |
| 0 | 0 | 0 |
| 1 | 1 | 1 |
| 2 | 4 | 16 |

Then, using the values in the table, we draw the graphs of f and g as in Figure 1.20.

**Figure 1.20:** Graphs of f(x) = x² and g(x) = x⁴, showing both as upward-opening curves with the quartic being steeper.

Using f and g in Example 2, we can generalize the properties of power functions of the form f(x) = xⁿ for an even natural number n as follows:

**I. Functions of the form f(x) = xⁿ for an even natural number n have similar properties and some of these common properties are given as follows:**
a. Domain of the function is ℝ
b. Range of the function is [0, ∞)
c. The graph of the function is a curve that is similar to the curves in Figure 1.21

**Figure 1.21:** Graph of f(x) = xⁿ for a positive even integer n, showing a symmetric upward-opening curve.

**Example 3**

Find the domain and range of each of the following functions and draw their graphs:
a. f(x) = x³
b. g(x) = x⁵

**Solution**

a. Dom(f) = ℝ and Ran(f) = ℝ
b. Dom(g) = ℝ and Ran(g) = ℝ

To draw the graphs of both f and g, use the table of values given below:

| x | f(x) = x³ | g(x) = x⁵ |
|---|-----------|-----------|
| -2 | -8 | -32 |
| -1 | -1 | -1 |
| 0 | 0 | 0 |
| 1 | 1 | 1 |
| 2 | 8 | 32 |

Then, using the values in the table, we draw the graphs of f and g as in Figure 1.22.

**Figure 1.22:** Graphs of f(x) = x³ and g(x) = x⁵, showing both as increasing curves passing through the origin.

**II. Functions of the form f(x) = xⁿ for an odd natural number n have similar properties and some of these common properties are given as follows:**
a. Domain of the function is ℝ
b. Range of the function is ℝ
c. The graph of the function is a curve that has the same shape as the curves in Figure 1.23.

**Figure 1.23:** Graph of f(x) = xⁿ for a positive odd integer n, showing an increasing curve through the origin.

**Exercise 1.9**

For each of the following functions, find the domain, range and sketch the graph:
a. f(x) = x⁶
b. g(x) = x⁸
c. h(x) = x⁷
d. l(x) = x⁹

#### Basic Properties of Power Functions (2)

**Example 4**

Find the domain and range of each of the following functions and draw their graphs:
a. f(x) = x^(1/2)
b. g(x) = x^(1/4)

**Solution**

a. Dom(f) = [0, ∞) and Ran(f) = [0, ∞)
b. Dom(g) = [0, ∞) and Ran(g) = [0, ∞)

To draw the graphs of both functions f and g, use the table given below:

| x | f(x) = √x | g(x) = x^(1/4) |
|---|-----------|----------------|
| 0 | 0 | 0 |
| 1 | 1 | 1 |
| 4 | 2 | √2 ≈ 1.414 |
| 16 | 4 | 2 |

Then, using the values in the table, the graphs of f and g are given in Figure 1.24.

**Figure 1.24:** Graphs of f(x) = √x and g(x) = x^(1/4), showing both as increasing curves starting at the origin.

**III. Functions of the form f(x) = x^(1/n) for an even natural number n have similar properties and some of these common properties are:**
a. Domain of the function is [0, ∞)
b. Range of the function is [0, ∞)
c. The graph of the function is a curve that is similar to the curves in Figure 1.25.

**Figure 1.25:** Graph of f(x) = x^(1/n), where n is an even natural number.

**Example 5**

Find the domain and range of each of the following functions and draw their graphs:
a. f(x) = x^(1/3)
b. g(x) = x^(1/5)

**Solution**

a. Dom(f) = ℝ and Ran(f) = ℝ
b. Dom(g) = ℝ and Ran(g) = ℝ

To draw the graphs of both functions f and g, use the tables given below:

| x | f(x) = x^(1/3) | g(x) = x^(1/5) |
|---|----------------|----------------|
| -32 | -2 | -2 |
| -8 | -2 | -1.516 |
| -1 | -1 | -1 |
| 0 | 0 | 0 |
| 1 | 1 | 1 |
| 8 | 2 | 1.516 |
| 32 | 2 | 2 |

Then, using the values in the table, the graphs of f and g are given in Figure 1.26.

**Figure 1.26:** Graphs of f(x) = x^(1/3) and g(x) = x^(1/5), showing both as increasing curves through the origin.

**IV. Functions of the form f(x) = x^(1/n) for an odd natural number n have similar properties and some of these common properties are:**
a. Domain of the function is ℝ
b. Range of the function is ℝ
c. The graph of the function is a curve that has the same shape as the curve in Figure 1.27.

**Figure 1.27:** Graph of f(x) = x^(1/n), where n is an odd natural number.

**Exercise 1.10**

For each of the following functions, find the domain, range and sketch the graph:
a. f(x) = x^(1/6)
b. g(x) = x^(1/8)
c. h(x) = x^(1/7)
d. l(x) = x^(1/9)

#### Basic Properties of Power Functions (3)

**Example 6**

Find the domain and range of each of the following functions and sketch their graphs:
a. f(x) = x^(2/3)
b. g(x) = x^(3/4)

**Solution**

a. Dom(f) = [0, ∞) and Ran(f) = [0, ∞)
b. Dom(g) = [0, ∞) and Ran(g) = [0, ∞)

To draw the graphs of both functions f and g, use the table given below:

| x | f(x) = x^(2/3) | g(x) = x^(3/4) |
|---|----------------|----------------|
| 0 | 0 | 0 |
| 1 | 1 | 1 |
| 4 | 4^(2/3) ≈ 2.52 | 4^(3/4) ≈ 2.83 |
| 16 | 16^(2/3) = 6.35 | 16^(3/4) = 8 |

Then, using the values in the table, the graphs of f and g are given in Figure 1.28.

**Figure 1.28:** Graphs of f(x) = x^(2/3) and g(x) = x^(3/4).

**V. Functions of the form f(x) = x^(m/n) for an odd natural number m and an even natural number n have similar properties and some of these common properties are:**
a. Domain of the function is [0, ∞)
b. Range of the function is [0, ∞)
c. The graph of the function is a curve that has the same shape as the curves in Figure 1.29.

**Figure 1.29:** Graph of f(x) = x^(m/n), where m and n are odd and even natural numbers respectively.

**Example 7**

Find the domain and range of each of the following functions and sketch their graphs:
a. f(x) = x^(2/5)
b. g(x) = x^(4/3)

**Solution**

a. Dom(f) = ℝ and Ran(f) = [0, ∞)
b. Dom(g) = ℝ and Ran(g) = [0, ∞)

To draw the graphs of both functions f and g, use the table given below:

| x | f(x) = x^(2/5) | g(x) = x^(4/3) |
|---|----------------|----------------|
| -32 | 32^(2/5) ≈ 4 | 32^(4/3) ≈ 32 |
| -8 | 8^(2/5) ≈ 2.3 | 8^(4/3) ≈ 16 |
| -1 | 1 | 1 |
| 0 | 0 | 0 |
| 1 | 1 | 1 |
| 8 | 2.3 | 16 |
| 32 | 4 | 32 |

Then, using the values in the table, the graphs of f and g are given in Figure 1.30.

**Figure 1.30:** Graphs of f(x) = x^(2/5) and g(x) = x^(4/3).

**VI. Functions of the form f(x) = x^(m/n) for an even natural number m and an odd natural number n have similar properties and some of these common properties are:**
a. Domain of the function is ℝ
b. Range of the function is [0, ∞)
c. The graph of the function is a curve that has the same shape as the curves in Figure 1.31.

**Figure 1.31:** Graph of f(x) = x^(m/n) for an even natural number m and an odd natural number n.

**Exercise 1.11**

For each of the following functions, find the domain, range and sketch the graph:
a. f(x) = x^(1/6)
b. g(x) = x^(1/8)
c. h(x) = x^(1/5)
d. l(x) = x^(1/7)

#### Basic Properties of Power Functions (4)

**Example 8**

Find the domain and range of each of the following functions and sketch their graphs:
a. f(x) = x^(-1/2)
b. g(x) = x^(-1/4)

**Solution**

a. Dom(f) = (0, ∞) and Ran(f) = (0, ∞)
b. Dom(g) = (0, ∞) and Ran(g) = (0, ∞)

To draw the graphs of both functions f and g, use the table given below:

| x | f(x) = x^(-1/2) | g(x) = x^(-1/4) |
|---|-----------------|-----------------|
| 0.25 | 2 | 1.414 |
| 0.5 | 1.414 | 1.189 |
| 1 | 1 | 1 |
| 4 | 0.5 | 0.707 |

Then, using the values in the table, the graphs of f and g are given in Figure 1.32.

**Figure 1.32:** Graphs of f(x) = x^(-1/2) and g(x) = x^(-1/4), showing decreasing curves in the first quadrant.

**VII. Functions of the form f(x) = x^(-n) for an even natural number n have similar properties and some of these common properties are:**
a. Domain of the function is (0, ∞)
b. Range of the function is (0, ∞)
c. The graph of the function is a curve that has the same shape as the curves in Figure 1.33.

**Figure 1.33:** Graph of f(x) = x^(-n), where n is an even natural number.

**Example 9**

Find the domain and range of each of the following functions and sketch their graphs:
a. f(x) = x^(-3)
b. g(x) = x^(-5)

**Solution**

a. Domain of f is ℝ \ {0} and Range of f is ℝ \ {0}
b. Domain of g is ℝ \ {0} and Range of g is ℝ \ {0}

To draw the graphs of both functions f and g, use the table given below:

| x | f(x) = x^(-3) | g(x) = x^(-5) |
|---|---------------|---------------|
| -3 | -1/27 ≈ -0.037 | -1/243 ≈ -0.004 |
| -2 | -1/8 = -0.125 | -1/32 ≈ -0.031 |
| -1 | -1 | -1 |
| -0.5 | -8 | -32 |
| 0.5 | 8 | 32 |
| 1 | 1 | 1 |
| 2 | 0.125 | 0.031 |
| 3 | 0.037 | 0.004 |

Then, using the values in the table, the graphs of f and g are given in Figure 1.34.

**Figure 1.34:** Graphs of f(x) = x^(-3) and g(x) = x^(-5), showing hyperbolic curves in quadrants I and III.

**VIII. Functions of the form f(x) = x^(-n) for an odd natural number n have similar properties and some of these common properties are:**
a. Domain of the function is ℝ \ {0}
b. Range of the function is ℝ \ {0}
c. The graph of the function is a curve that has the same shape as the curves in Figure 1.35.

**Figure 1.35:** Graph of f(x) = x^(-n), where n is an odd natural number.

**Exercise 1.12**

For each of the following functions, find the domain, range and sketch the graph:
a. f(x) = x^(-6)
c. h(x) = x^(-7)
d. l(x) = x^(-9)
b. g(x) = x^(-8)

#### Basic Properties of Power Functions (5)

**Example 10**

Find the domain and range of each of the following functions and sketch their graphs:
a. f(x) = x^(-1/2)
b. g(x) = x^(-3)

**Solution**

a. Dom(f) = (0, ∞) and Ran(f) = (0, ∞)
b. Dom(g) = ℝ \ {0} and Ran(g) = (0, ∞)

To draw the graphs of both functions f and g, use the tables given below:

| x | f(x) = x^(-1/2) |
|---|-----------------|
| 0.25 | 2 |
| 0.5 | 1.414 |
| 1 | 1 |
| 4 | 0.5 |

| x | g(x) = x^(-3) |
|---|---------------|
| -2 | -1/8 = -0.125 |
| -1 | -1 |
| -0.5 | -8 |
| 0.5 | 8 |
| 1 | 1 |
| 2 | 0.125 |

Then, using the values in the table, the graphs of f and g are given in Figure 1.36 and Figure 1.37.

**Figure 1.36:** Graph of f(x) = x^(-1/2)
**Figure 1.37:** Graph of g(x) = x^(-3)

**IX. Functions of the form f(x) = x^(-m/n) for an odd natural number m and an even natural number n have similar properties and some of these common properties are:**
a. Domain of the function is (0, ∞)
b. Range of the function is (0, ∞)
c. The graph of the function is a curve that has the same shape as the curves in Figure 1.38.

**Figure 1.38:** Graph of f(x) = x^(-m/n), where m is odd and n is even natural numbers.

**X. Functions of the form f(x) = x^(-m/n) for an even natural number m and an odd natural number n have similar properties and some of these common properties are:**
a. Domain of the function is {x ∈ ℝ : x ≠ 0}
b. Range of the function is (0, ∞)
c. The graph of the function is given in Figure 1.39.

**Figure 1.39:** Graph of f(x) = x^(-m/n), where m is even and n is odd.

**Exercise 1.13**

For each of the following functions, find the domain, range and sketch the graph:
c. h(x) = x^(-6)
a. f(x) = x^(-3)
b. g(x) = x^(-5)
d. l(x) = x^(-7)

### 1.3.2 Modulus (Absolute Value) Function

#### Revision of Absolute Values

**Activity 1.7**

Find the distance from the origin to the point represented by -3 on the number line.
Find the distance from the origin to the point represented by 3 on the number line.
Find the distance from the origin to the point represented by 0 on the number line.

From your response in Activity 1.7, observe that points represented by -3 and 3 on a number line are both 3 units from the origin, as in Figure 1.40 and the distance from the origin to itself is 0.

**Figure 1.40:** Number line showing -3 and 3 both 3 units from origin.

Distance on a number line is defined using the concept of absolute value.

**Definition 1.5**

Given a real number a, the absolute value (modulus) of a, denoted by |a|, is the nonnegative real number defined by:
```
|a| = a if a > 0
|a| = 0 if a = 0
|a| = -a if a < 0
```

**Example 1**

Find the absolute value of each of the following numbers:
a. 6
b. 0
c. -5

**Solution**

a. |6| = 6, because 6 > 0.
b. |0| = 0, by the definition of absolute value.
c. |-5| = -(-5) = 5, because -5 < 0.

#### Properties of Absolute Value

**Activity 1.8**

Find the absolute value of each of the numbers 4 and -4.
Compare the two results in (a).

From your responses in Activity 1.8, observe that |4| = |-4|.

**Thus we have the following general property of absolute value:**

**Property I**
For any real number a, |a| = |-a|

**Activity 1.9**

1. If a = 3 and b = 4, then:
   a. Find both |ab| and |a||b| and compare |ab| and |a||b|
   b. Find both |a + b| and |a| + |b| and compare |a + b| and |a| + |b|
   c. Find both |a/b| and |a|/|b| and compare |a/b| and |a|/|b|

2. If a = -3 and b = -4, then:
   d. Find both |ab| and |a||b| and compare |ab| and |a||b|
   e. Find both |a + b| and |a| + |b| and compare |a + b| and |a| + |b|
   f. Find both |a/b| and |a|/|b| and compare |a/b| and |a|/|b|

3. If a = 3 and b = -4, then:
   g. Find both |ab| and |a||b| and compare |ab| and |a||b|
   h. Find both |a + b| and |a| + |b| and compare |a + b| and |a| + |b|
   i. Find both |a/b| and |a|/|b| and compare |a/b| and |a|/|b|

From Activity 1.9, you have observed the following properties of absolute values.

**Property II**
For any two real numbers a and b:
i. |ab| = |a||b|
ii. |a/b| = |a|/|b| for b ≠ 0
iii. |a + b| ≤ |a| + |b| (Triangular Inequality)

**Activity 1.10**

Let a = -3 and b = -3. Then:
a. Find both |a| and |b|.
b. Compare |a| with both a and -a.
c. Compare b with 3 and -3.
d. Find both -a and -b.

From your responses in Activity 1.10, observe that |-3| ≥ -3 and |-3| ≥ 3 and also -3 ≥ 3 and -3 ≥ -3.

**Thus, we have the following properties of absolute value:**

**Property III**
For any real number a, |a| ≥ a and |a| ≥ -a.

**Additional Notes:**
a. For any given positive real number a, |a| = a and |-a| = -(-a) = a.
b. Thus, |x| = a if and only if x = a or x = -a.
c. For any real number x, |x| can never be negative, as it is the distance from the origin to the point represented by x on the number line. Thus, |x| ≥ 0.

**Example 2**

Solve each of the following equations:
a. |x| = 7
b. |x| = 0
c. |x| = -3
d. |2x + 6| = 10

**Solution**

a. If |x| = 7, then x = 7 or x = -7
b. If |x| = 0, then x = 0.
c. If |x| = -3, then there is no number for x that is a solution for this equation.
d. If |2x + 6| = 10, then 2x + 6 = 10 or 2x + 6 = -10
   This implies 2x = 10 - 6 ⇒ 2x = 4 ⇒ x = 2 or
   2x + 6 = -10 ⇒ 2x = -10 - 6 ⇒ 2x = -16 ⇒ x = -8
   Thus, the values of x that make the statement |2x + 6| = 10 true are 2 and -8.

**Exercise 1.14**

1. Find the absolute value of each of the following numbers:
   a. 7.5
   b. -12.3
   c. 0

2. Compare the absolute values of each of the following pairs of numbers:
   a. -4.5 and 3.75
   b. |-5/12| and |7/12|

3. Solve each of the following equations:
   a. |x| = 5
   b. |x - 1| = 0
   c. |3x + 6| = 9
   d. |x + 1| = -2

#### Modulus Functions

**Definition 1.6**

The function f: ℝ → ℝ defined by f(x) = |x| is called the absolute value (or modulus) function.

**Example 3**

Given f(x) = |x|, determine the values of each of the following:
f(-1), f(0) and f(1)

**Solution**

a. f(-1) = |-1| = -(-1) = 1
b. f(0) = |0| = 0
c. f(1) = |1| = 1

**Note**

For any real number x, |x| is defined and |x| ≥ 0. Thus:
a. The domain of f(x) = |x| is ℝ.
b. The range of f(x) = |x| is [0, ∞).

**Example 4**

Draw the graph of the function f(x) = |x|

**Solution**

Consider the following table of values of f:

| x | f(x) = \|x\| |
|---|--------------|
| -3 | 3 |
| -2 | 2 |
| -1 | 1 |
| 0 | 0 |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |

Then using the table, you can draw the graph of the absolute value function f(x) = |x| on the coordinate plane, as in Figure 1.41.

Observe that:
```
f(x) = |x| = { x if x ≥ 0
             { -x if x < 0
```

**Figure 1.41:** Graph of f(x) = |x|, showing a V-shaped curve with vertex at (0,0).

Observe that the graph of the absolute function f(x) = |x|:
a. Is a continuous curve; that is, it has no break
b. Passes through (0, 0) and has a sharp corner at (0, 0)
c. Is symmetric with respect to y-axis; that is, the part of the graph of the function for x > 0 is the image of the reflection of the graph of the function for x < 0 with respect to the y-axis.

**Example 5**

Find the domain, range and sketch the graph of the function f(x) = -|x|

**Solution**

As f(x) = -|x| is defined for all x ∈ ℝ and -|x| ≤ 0 for all x ∈ ℝ:
a. Dom(f) = ℝ
b. Ran(f) = (-∞, 0]

To draw the graph of f consider the following table of values of the function:

| x | f(x) = -|x| |
|---|--------------|
| -3 | -3 |
| -2 | -2 |
| -1 | -1 |
| 0 | 0 |
| 1 | -1 |
| 2 | -2 |
| 3 | -3 |

Then, plotting the points given in the table and joining these points with proper curves gives us the graph of f, Figure 1.42.

Observe that:
```
f(x) = -|x| = { -x if x ≥ 0
             { x if x < 0
```

**Figure 1.42:** Graph of f(x) = -|x|, showing an inverted V-shaped curve with vertex at (0,0).

**Example 6**

Find the domain, range and sketch the graph of the function f(x) = |x - 1|

**Solution**

As f(x) = |x - 1| is defined for all x ∈ ℝ and |x - 1| ≥ 0 for all x ∈ ℝ:
a. Dom(f) = ℝ
b. Ran(f) = [0, ∞)

To draw the graph of f consider the following table of values of the function:

| x | f(x) = \|x - 1\| |
|---|-----------------|
| -3 | 4 |
| -2 | 3 |
| -1 | 2 |
| 0 | 1 |
| 1 | 0 |
| 2 | 1 |
| 3 | 2 |

Then, plotting the points given in the table and joining these points with proper curves gives us the graph of f, Figure 1.43.

Observe that:
```
f(x) = |x - 1| = { x - 1, when x ≥ 1
                 { -x + 1, when x < 1
```

**Figure 1.43:** Graph of f(x) = |x - 1|, showing a V-shaped curve with vertex at (1,0).

**Example 7**

Find the domain, range and then sketch the graph of the function f(x) = |x| + 1

**Solution**

As f(x) = |x| + 1 is defined for all x ∈ ℝ and |x| + 1 ≥ 1 for all x ∈ ℝ:
a. Dom(f) = ℝ
b. Ran(f) = [1, ∞)

To draw the graph of f consider the following table of values of the function:

| x | f(x) = \|x\| + 1 |
|---|-----------------|
| -3 | 4 |
| -2 | 3 |
| -1 | 2 |
| 0 | 1 |
| 1 | 2 |
| 2 | 3 |
| 3 | 4 |

Then, plotting the points given in the table and joining these points with proper curves gives you the graph of f, Figure 1.44.

Observe that when x ≥ 0, f(x) = x + 1 and when x < 0, f(x) = -x + 1.

**Figure 1.44:** Graph of f(x) = |x| + 1, showing a V-shaped curve shifted up by 1 unit with vertex at (0,1).

**Example 8**

Find the domain, range and sketch the graph of the function f(x) = |2x|

**Solution**

As f(x) = |2x| is defined for all x ∈ ℝ and |2x| ≥ 0 for all x ∈ ℝ:
a. Dom(f) = ℝ
b. Ran(f) = [0, ∞)

To draw the graph of f consider the following table of values of the function:

| x | f(x) = \|2x\| |
|---|--------------|
| -3 | 6 |
| -2 | 4 |
| -1 | 2 |
| 0 | 0 |
| 1 | 2 |
| 2 | 4 |
| 3 | 6 |

Then, plotting the points given in the table and joining these points with proper curves gives you the graph of f, Figure 1.45.

Observe that when x ≥ 0, f(x) = 2x and when x < 0, f(x) = -2x.

**Figure 1.45:** Graph of f(x) = |2x|, showing a V-shaped curve steeper than the basic |x| function.

**Exercise 1.15**

Find the domain, range and sketch the graph of each of the following functions:
a. f(x) = |x + 1|
b. g(x) = |x - 1|
c. h(x) = 2 - |x|
d. h(x) = |5x|

### 1.3.3 Signum Function

**Activity 1.11**

Consider the function f(x) = 2 for all x ∈ (-∞, 0] and g(x) = 3 for all x ∈ (0, ∞).
1. Find the domains and ranges of both f and g.
2. Let h(x) = f(x) for all x ∈ (-∞, 0] and h(x) = g(x) for all x ∈ (0, ∞). Find the domain and range of h.
3. Sketch the graphs of f, g and h.

From your responses in Activity 1.11, you have observed that the functions f and g are constant functions and the function h is defined piecewise, one value for x ≤ 0 and another value for x > 0.

One of the common piecewise functions is the signum function and its definition is given below.

**Definition 1.7**

The function defined by:
```
sgn(x) = { 1 for x > 0
          { 0 for x = 0
          { -1 for x < 0
```
is called the signum function denoted by sgn x and read as "signum x".

**Note**

The function sgn x has the following properties:
a. Its domain is ℝ
b. Its range is the set {-1, 0, 1}
c. For any real number x:
   ```
   sgn(x) = { 1 for x > 0
            { undefined for x = 0
            { -1 for x < 0
   ```
d. Therefore, we can define the signum function using absolute value as:
   ```
   sgn(x) = { |x|/x for x ≠ 0
            { 0 for x = 0
   ```

Now we draw the graph of the signum function using the table given below:

| x | sgn(x) |
|---|--------|
| -4 | -1 |
| -3 | -1 |
| -2 | -1 |
| -1 | -1 |
| 0 | 0 |
| 1 | 1 |
| 2 | 1 |
| 3 | 1 |
| 4 | 1 |

**Figure 1.46:** Graph of f(x) = sgn x, showing three horizontal line segments at y = -1 for x < 0, y = 0 at x = 0, and y = 1 for x > 0.

**Example 1**

Determine the domain and range of the function f(x) = sgn x + 2 and sketch its graph.

**Solution**

From the definition of the signum function:
```
f(x) = sgn x + 2 = { 1 + 2 = 3 for x > 0
                   { 0 + 2 = 2 for x = 0
                   { -1 + 2 = 1 for x < 0
```

Then the domain of f is ℝ and its range is the set {1, 2, 3}.

| x | f(x) = sgn x + 2 |
|---|-----------------|
| -4 | 1 |
| -3 | 1 |
| -2 | 1 |
| -1 | 1 |
| 0 | 2 |
| 1 | 3 |
| 2 | 3 |
| 3 | 3 |
| 4 | 3 |

Then, using the table, the graph of f is sketched in Figure 1.47.

**Figure 1.47:** Graph of f(x) = 2 + sgn x, showing three horizontal line segments at y = 1 for x < 0, y = 2 at x = 0, and y = 3 for x > 0.

**Example 2**

Determine the domain and range of the function f(x) = 4 sgn x and sketch its graph.

**Solution**

From the definition of the signum function:
```
f(x) = 4 sgn x = { 4 × 1 = 4 for x > 0
                 { 4 × 0 = 0 for x = 0
                 { 4 × (-1) = -4 for x < 0
```

Then, the domain of f is ℝ and its range is the set {-4, 0, 4}.

| x | f(x) = 4 sgn x |
|---|----------------|
| -4 | -4 |
| -3 | -4 |
| -2 | -4 |
| -1 | -4 |
| 0 | 0 |
| 1 | 4 |
| 2 | 4 |
| 3 | 4 |
| 4 | 4 |

Then, using the table, the graph of f is sketched in Figure 1.48.

**Figure 1.48:** Graph of f(x) = 4 sgn x, showing three horizontal line segments at y = -4 for x < 0, y = 0 at x = 0, and y = 4 for x > 0.

**Exercise 1.16**

Find the domain and range of each of the following functions and sketch its graph:
a. f(x) = 2 sgn x
b. g(x) = -3 sgn x
c. h(x) = 1 + sgn x
d. l(x) = 3 - sgn x

### 1.3.4 The Greatest Integer (Floor or Step) Function

#### Greatest Integer Function

**Activity 1.12**

For each of the following numbers, find the greatest integer that is less than or equal to the given number:
a. 3.7
b. -1.9
c. 6
d. -4

From Activity 1.12, you have observed that you can find the greatest integer that is less than or equal to a given number. For example, the greatest integer less than or equal to -1.9 is -2.

**Definition 1.8**

The function defined by f(x) = the greatest integer that is less than or equal to x, denoted by f(x) = ⌊x⌋, is called the Greatest Integer (Floor or Step) Function.

**Example 1**

Evaluate the following:
a. ⌊10.7⌋
b. ⌊-12.4⌋
c. ⌊-18⌋

**Solution**

a. The greatest integer that is less than or equal to 10.7 is 10, that is ⌊10.7⌋ = 10.
b. The greatest integer that is less than or equal to -12.4 is -13, that is ⌊-12.4⌋ = -13.
c. The greatest integer that is less than or equal to -18 is -18, that is ⌊-18⌋ = -18.

**Exercise 1.17**

Evaluate each of the following:
a. ⌊π⌋
b. ⌊5/2⌋
c. ⌊√2⌋
d. ⌊-π⌋
e. ⌊-5/2⌋
f. ⌊-√2⌋

#### Graph of the Greatest Integer Function

Given the function f(x) = ⌊x⌋:
a. Dom(f) is the set of all real numbers
b. Ran(f) is the set of all integers.

To understand the behavior of this function in terms of a graph, let us construct a table of values as in the following table:

| x | y = ⌊x⌋ |
|---|---------|
| -3 ≤ x < -2 | -3 |
| -2 ≤ x < -1 | -2 |
| -1 ≤ x < 0 | -1 |
| 0 ≤ x < 1 | 0 |
| 1 ≤ x < 2 | 1 |
| 2 ≤ x < 3 | 2 |

The table shows us that the function increases to the next higher integer any time the x-value becomes an integer and the graph of the function y = ⌊x⌋ is given in Figure 1.49.

**Figure 1.49:** Graph of f(x) = ⌊x⌋, showing a step function with jumps at each integer value.

**Example 2**

Find the domain, range and sketch the graph of f(x) = ⌊2x⌋.

**Solution**

The function f(x) = ⌊2x⌋ is defined for all real numbers and the set of its functional values is the set of integers. Therefore:
a. Dom(f) is the set of all real numbers
b. Ran(f) is the set of all integers

| x | y = ⌊2x⌋ |
|---|----------|
| -1 ≤ x < -0.5 | -2 |
| -0.5 ≤ x < 0 | -1 |
| 0 ≤ x < 0.5 | 0 |
| 0.5 ≤ x < 1 | 1 |
| 1 ≤ x < 1.5 | 2 |

Using the points in the table, the graph of the function f(x) = ⌊2x⌋ is sketched in Figure 1.50.

**Figure 1.50:** Graph of f(x) = ⌊2x⌋, showing a step function with jumps at half-integer values.

**Example 3**

Find the domain, range and then sketch the graph of f(x) = ⌊x + 1⌋.

**Solution**

The function f(x) = ⌊x + 1⌋ is defined for all real numbers and the set of its functional values is the set of integers. Therefore:
a. Dom(f) is the set of all real numbers
b. Ran(f) is the set of all integers

| x | y = ⌊x + 1⌋ |
|---|-------------|
| -2 ≤ x < -1 | -1 |
| -1 ≤ x < 0 | 0 |
| 0 ≤ x < 1 | 1 |
| 1 ≤ x < 2 | 2 |
| 2 ≤ x < 3 | 3 |

Using the points in the above table, the graph of the function f(x) = ⌊x + 1⌋ is sketched in Figure 1.51.

**Figure 1.51:** Graph of f(x) = ⌊x + 1⌋, showing a step function shifted left by 1 unit.

**Example 4**

Find the domain, range and sketch the graph of f(x) = 3⌊x⌋.

**Solution**

The function f(x) = 3⌊x⌋ is defined for all real numbers and the set of its functional values is the set of all integer multiples of 3. Therefore:
a. Dom(f) is the set of all real numbers
b. Ran(f) is the set of all integer multiples of 3

| x | y = 3⌊x⌋ |
|---|----------|
| -2 ≤ x < -1 | -6 |
| -1 ≤ x < 0 | -3 |
| 0 ≤ x < 1 | 0 |
| 1 ≤ x < 2 | 3 |
| 2 ≤ x < 3 | 6 |

Using the points in the table, the graph of the function f(x) = 3⌊x⌋ is sketched in Figure 1.52.

**Figure 1.52:** Graph of f(x) = 3⌊x⌋, showing a step function with step height of 3 units.

**Exercise 1.18**

Sketch the graph of each of the following functions:
a. f(x) = ⌊4x⌋
b. g(x) = 2⌊x⌋
c. h(x) = ⌊x + 3⌋

#### Equations involving the Greatest Integer Function

When working with equations that involve the greatest integer function, we use the following formula: ⌊x⌋ = m, where m is an integer if and only if m ≤ x < m + 1.

For example, ⌊x⌋ = 6 if and only if 6 ≤ x < 7.

**Example 5**

Solve the equation ⌊x + 3⌋ = 10.

**Solution**

First, rewrite the equation using the inequalities: 10 ≤ x + 3 < 11
Then, solve the inequalities: 10 ≤ x + 3 < 11 ⇒ 10 - 3 ≤ x < 11 - 3 ⇒ 7 ≤ x < 8
Therefore, the solution set is the interval [7, 8)

**Example 6**

Solve the equation |1 + ⌊x⌋| = 5.

**Solution**

First let us replace ⌊x⌋ with z. This is called a "change of variable" and it will make the equation easier to work with.
|1 + ⌊x⌋| = 5 ⇒ |1 + z| = 5

Then, let us solve the equation: 1 + z = 5 or 1 + z = -5
Replace the given equation with the inequalities: 5 ≤ 1 + z < 6
Solve the inequality: 5 ≤ 1 + z < 6 ⇒ 4 ≤ z < 5 ⇒ 4 ≤ ⌊x⌋ < 5

Since ⌊x⌋ is an integer, the only way to satisfy the above inequalities is for ⌊x⌋ = 4.

Let us determine the value of x. Again, using the inequalities, we know 4 ≤ x < 5.

Therefore, the solution set of the given equation is the interval [4, 5).

**Exercise 1.19**

Solve each of the following equations:
a. ⌊x + 4⌋ = 6
b. 3 + ⌊x⌋ = 5

---

## 1.4 Composition of Functions

**Activity 1.13**

Consider the functions f(x) = x + 3 and g(x) = x². What result will you have if:
1. You substitute x + 3 to x in g(x)?
2. You substitute x² to x in f(x)?

From your responses in Activity 1.13, observe that:
a. You get g(x + 3) = (x + 3)²
b. You get f(x²) = x² + 3

g(x + 3) = (x + 3)² is the result of substituting f(x) = x + 3 into g(x). That is, g(x + 3) = g(f(x)), which is called the composition g by f.

Similarly, f(x²) = x² + 3 is the result of substituting g(x) = x² into f(x). That is, f(x²) = f(g(x)), which is called the composition f by g.

Note that, g(f(x)) is denoted by (g ∘ f)(x) and f(g(x)) is denoted by (f ∘ g)(x).

**Definition 1.9**

Let f: A → B and g: B → C be functions. Then the function h defined by h(x) = g(f(x)) for all x ∈ A and f(x) is in the domain of g, is called the composition of g by f, denoted by g ∘ f. That is, (g ∘ f)(x) = g(f(x)), for all x ∈ A and f(x) is in the domain of g.

**Example 1**

Let f = {(-1, 1), (0, 2), (1, -1), (2, 5)} and g = {(-1, 2), (0, 0), (1, 3), (2, 1), (3, 4), (4, 2), (5, 5)}. Then, find g ∘ f and f ∘ g.

**Solution**

(g ∘ f)(-1) = g(f(-1)) = g(1) = 3
(g ∘ f)(0) = g(f(0)) = g(2) = 1
(g ∘ f)(1) = g(f(1)) = g(-1) = 2
(g ∘ f)(2) = g(f(2)) = g(5) = 5

Therefore, g ∘ f = {(-1, 3), (0, 1), (1, 2), (2, 5)}

(f ∘ g)(-1) = f(g(-1)) = f(2) = 5
(f ∘ g)(0) = f(g(0)) = f(0) = 2
(f ∘ g)(2) = f(g(2)) = f(1) = -1
(f ∘ g)(4) = f(g(4)) = f(2) = 5

Therefore, f ∘ g = {(-1, 5), (0, 2), (2, -1), (4, 5)}

Observe that, (f ∘ g)(1) is not defined, because g(1) = 3 and 3 is not in the domain of f.

**Example 2**

Consider functions f and g given in the following diagram.

**Diagram:** Shows domain {1, 2, 3, 4} mapping via f to {a, b, c, d}, then via g to {h, e, g, f}

Then, determine g ∘ f.

**Solution**

First observe that f = {(1, a), (2, d), (3, b), (4, c)} and g = {(a, h), (b, e), (c, f), (d, g)}.

Thus:
(g ∘ f)(1) = g(f(1)) = g(a) = h
(g ∘ f)(2) = g(f(2)) = g(d) = g
(g ∘ f)(3) = g(f(3)) = g(b) = e
(g ∘ f)(4) = g(f(4)) = g(c) = f

Therefore, g ∘ f = {(1, h), (2, g), (3, e), (4, f)}

**Example 3**

Let f(x) = x + 1 and g(x) = x² - 2. Then find f ∘ g and g ∘ f.

**Solution**

a. (f ∘ g)(x) = f(g(x)) = f(x² - 2) = (x² - 2) + 1 = x² - 1
b. (g ∘ f)(x) = g(f(x)) = g(x + 1) = (x + 1)² - 2 = x² + 2x - 1

**Example 4**

Let f(x) = x² + 1 and g(x) = √x. Then find:
a. (g ∘ f)(2)
b. (g ∘ f)(x)

**Solution**

a. (g ∘ f)(2) = g(f(2)) = g(5) = √5
b. (g ∘ f)(x) = g(f(x)) = g(x² + 1) = √(x² + 1)

**Note**

For two functions f and g, the domain of g ∘ f is the set of all x in the domain of f, such that (g ∘ f)(x) = g(f(x)) is defined.

**Exercise 1.20**

1. Let f(x) = x² + 2x and g(x) = 3x - 5. Then find:
   a. (f ∘ g)(3)
   b. (g ∘ f)(3)
   c. (g ∘ f)(0)
   d. (f ∘ g)(0)

2. Let f(x) = √x and g(x) = 2x - 5. Then determine:
   a. (g ∘ f)(x)
   b. (f ∘ g)(x)
   c. Domain of g ∘ f
   d. Domain of f ∘ g

---

## 1.5 Inverse Functions and Their Graphs

In Section 1.1, you have learned about inverses of relations. In this section, you will learn about the inverses of functions. As functions are special types of relations, the idea of inverse of a function is a continuation of the idea of inverse of a relation, but the only problem here is that the inverse of a function may not be a function.

### Inverse Function

**Activity 1.14**

Find the inverse of each of the following functions:
a. f = {(1, 2), (2, 3), (3, 4), (4, 5)}
b. g = {(-1, a), (0, b), (3, 4), (4, 5)}
c. h = {(x, y) | x, y ∈ ℝ, y = x + 1}
d. l = {(x, y) | x, y ∈ ℝ, y = 2x + 1}

From (1) above, which inverses are functions and which are not? (Give your reasons)

From your responses in Activity 1.14, you have observed that the inverse of a function may or may not be a function.

**Note**

Given a function f, if its inverse is also a function, then we say that f is invertible and we denote its inverse by f⁻¹.

Given a function y = f(x), if f is invertible then to find its inverse:
I. Interchange x and y in the expression y = f(x), that is, x = f(y)
II. Solve y in terms of x (if possible)
III. Write f⁻¹ as y = f⁻¹(x)

**Example 1**

Find the inverse of each of the following functions:
a. f(x) = 3x + 2
b. g(x) = 6 - 2x
c. h(x) = (2x - 4)/(x + 3), x ≠ -3

**Solution**

a. y = f(x) = 3x + 2
   Interchange y and x and obtain x = 3y + 2
   Solve y for x and obtain y = (x - 2)/3
   Therefore, f⁻¹(x) = (x - 2)/3

b. y = g(x) = 6 - 2x
   Interchange y and x and obtain x = 6 - 2y
   Solve for y in terms of x and obtain y = (6 - x)/2 = 3 - x/2
   Therefore, g⁻¹(x) = 3 - x/2

c. y = h(x) = (2x - 4)/(x + 3), x ≠ -3
   Interchange y and x in the formula and obtain x = (2y - 4)/(y + 3)
   Solve for y in terms of x: x(y + 3) = 2y - 4 ⇒ xy + 3x = 2y - 4 ⇒ xy - 2y = -3x - 4 ⇒ y(x - 2) = -3x - 4 ⇒ y = (-3x - 4)/(x - 2) = (3x + 4)/(2 - x)
   Therefore, h⁻¹(x) = (3x + 4)/(2 - x), for x ≠ 2

**Note**

There are functions whose inverses are not functions.

**Example 2**

Show that the inverse of the function f(x) = x³ - x + 1 is not a function.

**Solution**

f(-1) = (-1)³ - (-1) + 1 = -1 + 1 + 1 = 1 and f(1) = 1³ - 1 + 1 = 1
This implies that f(-1) = f(1)
Thus (1, -1) and (1, 1) are elements of the inverse of f, but -1 ≠ 1
Thus, the inverse of f is not a function.

**Exercise 1.21**

Find the inverses of each of the following functions:
a. f(x) = 2x + 3
b. f(x) = -3x + 2
c. f(x) = (x + 5)/(3x - 4), for x ≠ 4/3

### Identity Function

**Definition 1.10**

Given a set A, if f : A → A is a function given by f(x) = x for all x ∈ A, then f is called the identity function on A and denoted by I.

**Activity 1.15**

Let f = {(1, 2), (2, 3), (3, 4), (4, 1)} a function defined on a set A = {1, 2, 3, 4} and I be the identity on A as, I = {(1, 1), (2, 2), (3, 3), (4, 4)}. Then determine:
a. I ∘ f
b. f ∘ I
c. Compare I ∘ f and f ∘ I

In Activity 1.15, the two compositions, f ∘ I and I ∘ f, are equal and both are equal to f.

**Example 3**

Let f(x) = 2x - 3 and I(x) = x. Then:
(I ∘ f)(x) = I(f(x)) = I(2x - 3) = 2x - 3 = f(x) and
(f ∘ I)(x) = f(I(x)) = f(x) = 2x - 3

This implies I ∘ f = f = f ∘ I.

**Note**

In general, if f is a function and I is the identity function, then I ∘ f = f = f ∘ I.

**Activity 1.16**

Consider the function f = {(1, 2), (2, 3), (3, 4), (4, 5)} from A = {1, 2, 3, 4} to B = {2, 3, 4, 5}. Then find:
a. f⁻¹
b. f⁻¹ ∘ f
c. f ∘ f⁻¹

In Activity 1.16, you can observe that f⁻¹ ∘ f is the identity on A and f ∘ f⁻¹ is the identity on B.

**Note**

Given a function f, a function g is the inverse of f if and only if g ∘ f = I and f ∘ g = I.

**Example 4**

Let f(x) = 3x - 1, then f⁻¹(x) = (x + 1)/3.

(f ∘ f⁻¹)(x) = f(f⁻¹(x)) = f((x + 1)/3) = 3((x + 1)/3) - 1 = x + 1 - 1 = x = I(x) and
(f⁻¹ ∘ f)(x) = f⁻¹(f(x)) = f⁻¹(3x - 1) = ((3x - 1) + 1)/3 = 3x/3 = x = I(x)

This implies, f ∘ f⁻¹ = I = f⁻¹ ∘ f.

**Example 5**

Determine if each of the following pairs of functions are inverses of each other:
a. f(x) = 2x - 5 and g(x) = -2x + 5
b. f(x) = (x + 2)/(x - 1), x ≠ 1 and g(x) = (2x + 2)/(x - 2), x ≠ 2

**Solution**

Let us use the idea of composition to determine if f and g are inverses of each other.

a. (f ∘ g)(x) = f(g(x)) = f(-2x + 5) = 2(-2x + 5) - 5 = -4x + 10 - 5 = -4x + 5 and
(g ∘ f)(x) = g(f(x)) = g(2x - 5) = -2(2x - 5) + 5 = -4x + 10 + 5 = -4x + 15

This implies g ∘ f ≠ I and f ∘ g ≠ I. Thus g is not the inverse of f.

From this example, observe that g(x) = -f(x) and hence f⁻¹ ≠ -f. The inverse of f is f⁻¹(x) = (x + 5)/2.

b. Using your knowledge in finding the inverses of functions, you can find that:
   (g ∘ f)(x) = g(f(x)) = x = I(x) and similarly you can show that (f ∘ g)(x) = x = I(x)
   Hence, g is an inverse for f, that is, f⁻¹(x) = g(x).

**Exercise 1.22**

1. Let f(x) = 3x - 1 and I(x) = x. Determine I ∘ f and f ∘ I.
2. Let f(x) = 2x + 4 and I(x) = x
   a. Determine f⁻¹(x)
   b. Show that (f⁻¹ ∘ f)(x) = I(x)
   c. Show that (f ∘ f⁻¹)(x) = I(x)

### Graphs of Inverse Functions

As functions are relations, from our discussions on graphs of inverse relations, recall that the graph of the inverse of a given function can be obtained by reflecting the graph of the function with respect to the line y = x.

**Example 6**

Draw the graph of the inverse of each of the following functions:
a. f = {(1, 3), (2, 1), (3, 2), (4, 4)}
b. g(x) = 2x + 1

**Solution**

a. f⁻¹ = {(3, 1), (1, 2), (2, 3), (4, 4)} and the graph of f⁻¹ is obtained by reflecting the graph of f with respect to the line y = x, as given in Figure 1.53.

**Figure 1.53:** Graph of f and f⁻¹, showing points and their reflections.

b. Let y = 2x + 1. Then, interchanging x and y in the given equation gives us x = 2y + 1. Solving for y in terms of x gives you y = (x - 1)/2, that is g⁻¹(x) = (x - 1)/2.

Therefore, the graph of g⁻¹ is obtained by reflecting the graph of g with respect to the line y = x as given in Figure 1.54.

**Figure 1.54:** Graphs of g(x) = 2x + 1 and g⁻¹(x) = (x - 1)/2, showing them as reflections across y = x.

**Exercise 1.23**

Use compositions of functions to determine if each pair of functions are inverses of each other:
1. f(x) = 8x and g(x) = x/8
2. f(x) = (x + 2)/5 and g(x) = 5x + 3
3. f(x) = 5x - 7 and g(x) = (x + 7)/5
4. f(x) = 2x/(1 - x) and g(x) = x/(2 + x)

Sketch the graphs of the functions and its inverse on the same coordinate plane for each of the following functions:
a. f(x) = x - 2
b. g(x) = 5x - 6

---

## 1.6 Applications of Relations and Functions

In this section, different applications of relations and functions are given.

**Example 1**

Let p + 3q = 30 be an equation involving two variables p (price) and q (quantity). Indicate the meaningful domain and range of this function when:
a. The price is considered as an independent variable
b. The quantity is considered as an independent variable

**Solution**

a. When price (p) is taken as an independent variable, you have q(p) = (30 - p)/3.
   Domain: 0 ≤ p ≤ 30
   Range: 0 ≤ q ≤ 10

b. When quantity (q) is taken as an independent variable, you have p(q) = 30 - 3q
   Domain: 0 ≤ q ≤ 10
   Range: 0 ≤ p ≤ 30

**Example 2**

A car rental company charges an initial fee, which is also called a flat fee of Birr 300 and an additional Birr 15 per kilometer to rent a van.
a. Write a function that approximates the cost y (in Birr) in terms of x, the number of kilometers driven.
b. How much would an 80 kilometer trip cost?

**Solution**

a. The total cost of renting a van is equal to the rate per kilometer times the number of kilometers driven plus the cost for the flat fee.
   That is, y = 15x + 300.

b. To calculate the cost of an 80 kilometer trip, substitute 80 for x in the equation y = 15x + 300.
   Thus, y(80) = (15 × 80) + 300 = 1200 + 300 = 1500.
   Therefore, the cost of 80 kilometers trip is 1500 Birr.

**Example 3**

A man that buys and sells newspapers buys newspapers for price of Birr 6 per newspaper and sells newspapers at price of Birr 10 per newspaper. The unsold newspapers at the end of the day can be sold at 4 Birr per newspaper to a wastepaper dealer. If the man bought 300 newspapers, sold 200 newspapers and another 50 newspapers to a wastepaper dealer, what is the profit of the man in that day?

**Solution**

The overall profit to the man depends on the number of newspapers that he sells in relation to the number of newspapers he bought at the beginning of the day.

Purchase: 300 × 6 Birr = 1800 Birr
Sale: (200 × 10 Birr) + (50 × 4 Birr) = 2000 Birr + 200 Birr = 2200 Birr
Profit: Sale - Purchase = 2200 Birr - 1800 Birr = 400 Birr

Therefore, the profit of the man on that particular day is 400 Birr.

**Example 4**

Assume that for a closed economy, E = C + I + G, where E is total expenditure, C is expenditure on consumption of goods, I is expenditure on investment on goods and G is Government spending.

For equilibrium, we must have E = Y, where Y is the total income received.

For a certain economy, it is given that C = 15 + 0.90Y, I = 20 + 0.05Y and G = 25.

a. Find the equilibrium values of Y, C and I
b. How will these change if there is no Government spending?

**Solution**

Given that E = C + I + G and E = Y. Thus, we have:
a. Y = C + I + G = (15 + 0.90Y) + (20 + 0.05Y) + 25 = 60 + 0.95Y
   This implies Y(1 - 0.95) = 60 ⇒ Y = 60/0.05 = 1200

   For this value of Y, we have:
   C = 15 + 0.90Y = 15 + 0.90 × 1200 = 15 + 1080 = 1095
   I = 20 + 0.05Y = 20 + 0.05 × 1200 = 20 + 60 = 80

b. If there is no government spending, that is, G = 0, then closed economy equation becomes:
   Y = C + I = (15 + 0.90Y) + (20 + 0.05Y) = 35 + 0.95Y
   or Y(1 - 0.95) = 35, that is, Y = 35/0.05 = 700

   For this value of Y, we have:
   C = 15 + 0.90Y = 15 + 0.90 × 700 = 15 + 630 = 645
   I = 20 + 0.05Y = 20 + 0.05 × 700 = 20 + 35 = 55

**Exercise 1.24**

1. An electrician charges a base fee of Birr 70 plus Birr 150 for each hour of work.
   a. Create a table that shows the amount that the electrician charges for 1, 2, 3 and 4 hours of work.
   b. Let x represent the number of hours and y represent the amount charged for x hours. Is this relation a function?

2. A firm produces an item whose production cost function is C(x) = 200 + 60x, where x is the number of items produced.
   a. If entire stock is sold at a price of each item which is Birr 800, then determine the revenue function.
   b. If the total number of items produced was 1000 and entire stock is sold at a price of each item which is Birr 800, find the profit of the firm.

### Problem Solving

1. A company producing dry cells introduces production bonus for its employees which increases the cost of production. The daily cost of production C(x) for x number of cells is Birr (3.5x + 12,000).
   a. If each cell is sold for Birr 6, determine the number of cells that should be produced to ensure no loss.
   b. If the selling price is increased by 50 percent, what would be the break-even point?
   c. If at least 6000 cells can be sold daily, what price the company should charge per cell to guarantee no loss?

2. The force applied to a spring varies directly with the distance that the spring is stretched. When 30 N of force is applied, the spring stretches 3 m.
   a. Write a variation model using k as the constant of variation.
   b. Find k.
   c. How many meters will the spring stretch when 5N force pressure is applied?

---

## Summary

1. A relation is any set of ordered pairs.
2. Given two sets A and B, a relation from A to B is any subset of A × B.
3. Given a relation R, the inverse of R is given by R⁻¹ = {(y, x) : (x, y) ∈ R}.
4. If R is a relation, then Domain of R⁻¹ = Range of R and Range of R⁻¹ = Domain of R.
5. The graph of the inverse of a given relation can be obtained by reflecting the graph of the relation with respect to the line y = x.
6. A function is a special type of a relation in which no two of the ordered pairs in it have the same first element.
7. A function of the form f(x) = axʳ, where a is a nonzero real number and r is a real number is called power function.
8. The function defined by f(x) = |x|, where |x| = { x if x ≥ 0; -x if x < 0 } is called the absolute value function.
9. The function defined by f(x) = sgn(x), where sgn(x) = { 1 if x > 0; 0 if x = 0; -1 if x < 0 } is called the signum function.
10. The function defined by f(x) = ⌊x⌋, where ⌊x⌋ is the greatest integer less than or equal to x is called the floor function or the greatest integer function.
11. If f is a function from A into B and g is a function from B into C, then the composition of f by g is the function defined by (f ∘ g)(x) = f(g(x)).
12. For two functions f and g, g and f are inverse functions of each other if and only if g(f(x)) = x and f(g(x)) = x.

---

## Review Exercise

1. Find the domain and range of each of the following relations:
   a. R₁ = {(1, 0), (2, 2), (3, 2), (4, 5)}
   b. R₂ = {(-1, -2), (0, 1), (1, 2), (2, 5)}
   c. R₃ = {(x, y) | x, y ∈ ℝ and y = x - 1}
   d. R₄ = {(x, y) | x, y ∈ ℝ and y = x² + 1}

2. Find inverse, domain and range of the inverses of each of the relations in Question Number 1 above.

3. Find the inverse of each of the following functions:
   a. f(x) = 3x - 2
   b. g(x) = x² + 5
   c. h(x) = (2x + 3)/(4x - 5)

4. Find the domain and range of each of the following functions:
   a. f(x) = 3|x|
   b. g(x) = -2|x|
   c. h(x) = x^(-5)

5. Given f(x) = 3 + 2|x|:
   a. Evaluate f at each of the following numbers:
      i. -5
      ii. 0
      iii. -1/2
      iv. 3
   b. Find the domain and range of f
   c. Sketch the graph of f

6. Given f(x) = 2 - 3 sgn x:
   a. Evaluate f at each of the following numbers:
      i. -3
      ii. 0
      iii. 1/2
      iv. 4
   b. Find the domain and range of f
   c. Sketch the graph of f

7. Let f(x) = ⌊x - 3⌋. Then:
   a. Evaluate f at each of the following numbers:
      i. -2
      ii. 0
      iii. 1/2
      iv. 5
   b. Find the domain and range of f
   c. Sketch the graph of f

8. Determine if each pair of the following functions are inverses of each other:
   a. f(x) = x - 1 and g(x) = x + 1
   b. f(x) = (2x + 3)/(x - 1) and g(x) = (3x + 2)/(x - 2)
   c. f(x) = 2x - 3 and g(x) = 3 - 2x

9. The area A of a square is directly proportional to the square of the length s of its sides.
   a. Write a general model of the proportionality with k as the constant of proportion.
   b. If the length of the sides is doubled, what effect will that have on the area?
   c. If the length of the sides is tripled, what effect will that have on the area?