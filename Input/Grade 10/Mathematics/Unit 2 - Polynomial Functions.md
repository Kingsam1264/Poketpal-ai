# Unit 2: Polynomial Functions

## Unit Outcomes

By the end of this unit, you will be able to:
- Define polynomial functions
- Perform the four fundamental operations on polynomials
- Apply theorems on polynomial functions to solve related problems
- Determine the rational and irrational zeros of polynomials
- Sketch the graphs of polynomial functions

## Introduction

In unit one of this textbook, you saw functions of the form y = b, y = ax + b, and ax² + bx + c. You also attempted to sketch their graphs. These functions are parts of a large class of functions called polynomial functions. Polynomial functions are functions that involve only one variable x, consisting of the sum of several terms; each term is a product of two factors: the first being a real number coefficient and the second being x raised to some non-negative integer power. In this unit, you will be looking at the different components of polynomial functions like degree, leading coefficient, zeros of a polynomial function, theorems on polynomial functions, and properties of graphs of polynomial functions. You will see how the leading coefficient and the degree of a polynomial function determine the end property of the graph of the function.

## 2.1 Definition of Polynomial Function

You are familiar with functions like constant functions, linear functions, and quadratic functions from unit one.

**Activity 2.1**

Classify the following functions as constant function, linear function, quadratic function, or none of these:
a. f(x) = 2x + 4
b. g(x) = 2/3 - x
c. f(x) = |x| = { x, if x ≥ 0; -x, if x < 0 }
d. h(x) = -x² + 5x + 9
e. f(x) = x⁴ + 2x - 5
f. k(x) = 5
g. h(x) = (x - 2)(x + 2)
h. f(x) = 6 + (9/5)x + 4x²
i. f(x) = √5x + √2
j. l(x) = 3√x + √3

A function f is a constant function if it can be written in the form f(x) = b, where b is a real number. The domain of f is the set of all real numbers and the range is the set containing only the number b.

A function f is a linear function if it can be written in the form f(x) = ax + b, where a and b are real numbers and a ≠ 0. The domain of f is the set of all real numbers and the range is also the set of all real numbers.

A function f is a quadratic function if it can be written in the form f(x) = ax² + bx + c, where a, b, and c are real numbers and a ≠ 0. The domain of f is the set of all real numbers and the range is not the set of all real numbers and it depends on the values of a, b, and c.

### Definition of Polynomial Function

**Definition 2.1**

Let n be a non-negative integer and let aₙ, aₙ₋₁, ..., a₂, a₁, a₀ be real numbers with aₙ ≠ 0. The function p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀ is called a polynomial function in one variable x of degree n.

In the above definition of polynomial function:
- aₙ, aₙ₋₁, ..., a₂, a₁, a₀ are called the coefficients of the polynomial function (or simply the polynomial)
- The number aₙ is called the leading coefficient of the polynomial and aₙxⁿ is the leading term
- The number n (the exponent of the highest power of x) is the degree of the polynomial
- The number a₀ is called the constant term of the polynomial

**Domain of Polynomial function**: The domain of a polynomial function is the set of all real numbers.

**Note**
- The constant function f(x) = b, b ≠ 0 is a polynomial function with degree zero
- The constant function f(x) = 0 is called the zero polynomial with no degree assigned to it

**Example 1**

Find the degree, leading coefficient, and constant term of the following polynomial functions:
a. f(x) = -2x + 5
b. f(x) = 3x² + x - 3
c. f(x) = 3x³ - 9x² + 5x + 3/2
d. h(x) = -5x⁴ + 8x³ + 2x² - 3x + 7
e. g(x) = -2 + 3x³ + 25x² - x⁴ + 4x⁵ + 5x
f. g(x) = 2(x⁴ + (1/2)x² - 2) + x + x⁴ + 1

**Solution:**
a. It is a polynomial function with degree 1, leading coefficient -2, and constant term 5
b. It is a polynomial function with degree 2, leading coefficient 3, and constant term -3
c. It is a polynomial function with degree 3, leading coefficient 3, and constant term 3/2
d. It is a polynomial function with degree 4, leading coefficient -5, and constant term 7
e. You can rearrange the polynomial function g as g(x) = 4x⁵ - x⁴ + 3x³ + (2/5)x² + 5x - 2, and it is a polynomial function with degree 5, leading coefficient 4, and constant term -2
f. g(x) = 2(x⁴ + (1/2)x² - 2) + x + x⁴ + 1 = 2x⁴ + x² - 4 + x + x⁴ + 1 = 3x⁴ + x² + x - 3. Therefore, the degree is 4, the leading coefficient is 3, and the constant term is -3

**Exercise 2.1**

Find the degree, leading coefficient, and constant term of the following polynomial functions:
a. f(x) = -x² + 3x + 9
b. f(x) = (1/2)x³ - 9x² + 3x + 4
c. h(x) = -7x⁵ + 5x³ - 10
d. g(x) = -4x² - x³ - 5 + 2x + 3x⁴
e. h(x) = -3x⁴ + x² + 3(2x² + 4x⁴ + 5x³ + 2/3)

**Note**

There are two ways to check whether a given function is not a polynomial function:
- Its domain is not all real numbers
- It does not take the form or unable to transform it to the form p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀, where n is a non-negative integer (0 or positive integers) and aₙ, aₙ₋₁, ..., a₂, a₁, a₀ are real numbers with aₙ ≠ 0

**Example 2**

Determine if the following are polynomial functions or not:
1. g(x) = 4x⁻² + 3x⁻¹ - 7
2. h(x) = 2ˣ

**Solution:**
1. g(x) = 4x⁻² + 3x⁻¹ - 7 is not a polynomial function because -2 and -1 are not positive integers
2. h(x) = 2ˣ is not a polynomial function because it can't take the form of the general polynomial function

**Example 3**

Which of the following are polynomial functions? For those which are polynomials, find the degree, leading coefficient, and constant term:
a. f(x) = 2x² - 9x³ + (2/5)x
b. g(x) = (2 - x)(2 + x)
c. h(x) = 5x⁻⁴ + 6x² + 3
d. k(y) = √y
e. f(x) = 2x^(1/3) + 5x^(1/2) - x + 5
f. f(x) = √2x³ + 5x² - √(2/7)

**Solution:**
a. You can rearrange it as f(x) = -9x³ + 2x² + (2/5)x, and it is a polynomial function with degree 3, leading coefficient -9, and constant term 0
b. g(x) = (2 - x)(2 + x) = 4 - x². It is a polynomial function with degree 2, leading coefficient -1, and constant term 4
c. h(x) = 5x⁻⁴ + 6x² + 3 is not a polynomial function because in the term 5x⁻⁴, n = -4 is not a positive integer
d. k(y) = √y is not a polynomial function because it cannot be written in the general form of polynomial function because the variable y is inside a radical sign
e. f(x) = 2x^(1/3) + 5x^(1/2) - x + 5 is not a polynomial function because 1/3 and 1/2 are not integers
f. It is a polynomial function with degree 3, leading coefficient √2, and constant term -√(2/7)

**Exercise 2.2**

Which of the following are polynomial functions? For those which are polynomials, find the degree, leading coefficient, and constant term:
a. f(x) = 3x⁵ + 2x³ + x - 5
b. k(x) = 4 - x + (3/8)x⁴ - 8x²
c. g(x) = 4x⁻³ - 7x⁻² + x⁻¹ - 8
d. h(t) = √2 t + √3
e. h(y) = √6 y² + √2 y + 5
f. f(x) = 1/x² + 1/x + 1
g. k(x) = 2x⁵ - 5x² + 2 - (2 - x² + 4x³ + x⁵)/3
h. f(x) = (x + 2)(x² + x - 1)
i. f(x) = √((x² + 5)⁴)
j. f(x) = Im(x²) + 7 Im(a)

**Definition 2.2**

A polynomial expression is an expression of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀ where n is a non-negative integer and aₙ ≠ 0. Each individual expression aₖxᵏ making up the polynomial is called a term.

**Example 4**

Consider the expression (8 - 3x³ + 4x⁴)/4 - 3x⁴ + 5x²
a. Is it a polynomial expression?
b. Find the degree, leading coefficient, and the constant term
c. What is the coefficient of x³?

**Solution:**

First, write (8 - 3x³ + 4x⁴)/4 - 3x⁴ + 5x² in the general form of a polynomial expression:

(8 - 3x³ + 4x⁴)/4 - 3x⁴ + 5x² = 2 - (3/4)x³ + x⁴ - 3x⁴ + 5x²
= 2 - (3/4)x³ + (x⁴ - 3x⁴) + 5x²
= 2 - (3/4)x³ - 2x⁴ + 5x²
= -2x⁴ - (3/4)x³ + 5x² + 2

a. Yes, it is a polynomial expression
b. The degree is 4, the leading coefficient is -2, and the constant term is 2
c. -3/4

**Exercise 2.3**

Consider the expression (6x³ - 2x² + 9)/3 + 3x³ - 2x
a. Is it a polynomial expression?
b. Find the degree, leading coefficient, and constant term
c. What is the coefficient of x²?

## 2.2 Operations on Polynomial Functions

Recall in algebra that we can combine two real numbers using the operations addition, subtraction, multiplication, and division to find another real number. You know the restriction we have to make when we use the operation division. Here, we will combine two or more polynomial functions using the operations addition, subtraction, multiplication, and division and discuss the results obtained by the combination. To combine polynomial functions, the knowledge of commutative, associative, and distributive laws and like and unlike terms is very important.

**Activity 2.2**

1. Which of the following pairs contain like terms?
a. 2x and 5x
b. 5a² and 6a²
c. x² and 2x³
d. 3x² and 2y²
e. 3 and y
f. x⁵ and 6x⁵

2. For any three real numbers a, b, and c, determine whether each of the following statements is true or false. Give reason for your answer:
a. a + b = b + a
b. a - b = b - a
c. (a + b) + c = a + (b + c)
d. (ab)c = a(bc)
e. a(b + c) = ab + ac
f. a - (b + c) = a - b + c
g. a - (b - c) = a - b + c
h. (a - b) + c = a + (-b + c)

### Addition of Polynomial Functions

**Definition 2.3**

The sum of two polynomial functions f and g is written as f + g and is defined as: (f + g)(x) = f(x) + g(x) for all real numbers x.

**Note:** The sum of two polynomial functions is found by adding the coefficients of like terms.

**Example 1**

In each of the following, find the sum of f(x) and g(x):
a. f(x) = 2x⁴ + 5x³ + x² + 9x + 4 and g(x) = -3x³ + 5x² - 5x - 9
b. f(x) = (1/2)x² + (4/3)x - 5 and g(x) = (3/2)x² - (2/3)x + 3

**Solution:**
a. f(x) + g(x) = (2x⁴ + 5x³ + x² + 9x + 4) + (-3x³ + 5x² - 5x - 9)
= 2x⁴ + (5x³ - 3x³) + (x² + 5x²) + (9x - 5x) + (4 - 9)
= 2x⁴ + 2x³ + 6x² + 4x - 5

b. f(x) + g(x) = [(1/2)x² + (4/3)x - 5] + [(3/2)x² - (2/3)x + 3]
= [(1/2)x² + (3/2)x²] + [(4/3)x - (2/3)x] + (-5 + 3)
= 2x² + (2/3)x - 2

**Observation:**
1. If f(x) and g(x) have different degrees, the degree of f(x) + g(x) is the same as the degree of f(x) or the degree of g(x), whichever has the highest degree
2. If f(x) and g(x) have the same degree, the degree of the sum may be lower than or equal to the common degree
3. The sum of two polynomial functions is a polynomial function

**Exercise 2.4**

Find the sum of the polynomial functions f(x) and g(x):
a. f(x) = 2x³ - 3x² - 2x + 5 and g(x) = 5x⁴ + 6x³ - 7x² + 4x + 3
b. f(x) = -x⁴ + 2x³ - 3x² - 3x + 2 and g(x) = 5 + 7x - 2x² - x³ + x⁴
c. f(x) = -2x⁵ + 2x⁴ - x³ + 2x² + 5x - 1 and g(x) = 2 + 4x - 5x⁵ - 3x⁴
d. f(x) = √2 x⁴ + 2x³ - 5x² + x - √3 and g(x) = √3 - 3x - x² + 2x³ - 2√2 x⁴

### Subtraction of Polynomial Functions

**Definition 2.4**

The difference of two polynomial functions f and g is written as f - g, and is defined as (f - g)(x) = f(x) - g(x) for all real numbers x.

**Example 2**

In each of the following, find f - g:
a. f(x) = -2x³ + 5x² + 3x + 2 and g(x) = -2x³ + 4x² + 8x - 7
b. f(x) = 6x⁵ + 5x⁴ + 2x³ - x² + 4x - 3 and g(x) = 5x⁴ + x³ + 4x² - 3x - 3

**Solution:**
a. f(x) - g(x) = (-2x³ + 5x² + 3x + 2) - (-2x³ + 4x² + 8x - 7)
= -2x³ + 5x² + 3x + 2 + 2x³ - 4x² - 8x + 7
= (-2x³ + 2x³) + (5x² - 4x²) + (3x - 8x) + (2 + 7)
= x² - 5x + 9

b. f(x) - g(x) = (6x⁵ + 5x⁴ + 2x³ - x² + 4x - 3) - (5x⁴ + x³ + 4x² - 3x - 3)
= 6x⁵ + (5x⁴ - 5x⁴) + (2x³ - x³) + (-x² - 4x²) + (4x + 3x) + (-3 + 3)
= 6x⁵ + x³ - 5x² + 7x

**Exercise 2.5**

1. In each of the following, find f(x) - g(x):
a. f(x) = -x³ - 5x² + 3x + 12 and g(x) = 9x³ - x² - 6x + 3
b. f(x) = -(1/3)x⁴ + 3x³ - 3x² - (3/5)x + 2 and g(x) = (1/3)x⁴ - x³ - 2x² + (7/5)x + 5
c. f(x) = -5x⁵ + 3x⁴ - x³ + 2x² + 5x + 1 and g(x) = 2 + 4x - 5x⁵ - 3x⁴
d. f(x) = 3√3 x⁴ + 2x³ - 5x² + x - 5√3 and g(x) = √3 - 3x - x² + 2x³ - 2√3 x⁴

2. The degree of f(x) - g(x) is equal to the degree of f(x) or the degree of g(x), whichever has the highest degree. (True/False)

3. Is there a possibility for the degree of f(x) - g(x) to be lower than the degree of f(x) or the degree of g(x)? When?

4. Is the difference of two polynomial functions a polynomial function?

### Multiplication of Polynomial Functions

**Definition 2.5**

The product of two polynomial functions f(x) and g(x) is written as f · g, and is defined as: (f · g)(x) = f(x) · g(x) for all real numbers x.

The product of two polynomials f(x) and g(x) is found by multiplying each term of one by every term of the other as shown in the following example.

**Example 3**

1. Find f(x) · g(x) where f(x) = 2x + 3 and g(x) = 3x² - 5x + 6

2. Let f(x) = x² - 2x + 2 and g(x) = 2x³ - 4x² - 5x + 1, then:
a. Find f(x) · g(x)
b. Find the degree of f, g, and f · g
c. Is the degree of f · g equal to the sum of the degrees of f and g?

**Solution:**
1. f(x) · g(x) = (2x + 3)(3x² - 5x + 6)
= 2x(3x² - 5x + 6) + 3(3x² - 5x + 6)
= 6x³ - 10x² + 12x + 9x² - 15x + 18
= 6x³ - x² - 3x + 18

2. a. f(x) · g(x) = (x² - 2x + 2)(2x³ - 4x² - 5x + 1)
= 2x⁵ - 8x⁴ + 7x³ + 3x² - 12x + 2

b. Degree of f is 2, degree of g is 3, and degree of f · g is 5
c. Yes

**Exercise 2.6**

1. In each of the following, find f(x) · g(x):
a. f(x) = 3x + 1 and g(x) = 2x² + 4x - 5
b. f(x) = x² + x - 2 and g(x) = 3x² - 6x + 1
c. f(x) = x³ + 3x and g(x) = 2x - x²

2. Let f(x) = 3x⁴ + 2x - 4, g(x) = x² - 2x³
a. Find f(x) · g(x)
b. Find the degree of f, g, and f · g
c. Is the degree of f · g equal to the sum of the degrees of f and g?

To find the product of two polynomial functions, we can also use a vertical arrangement for multiplication.

**Example 4**

Find f(x) · g(x), if f(x) = x⁵ + 2x⁴ - 3x² - x - 5, g(x) = 3x² - 4x + 2

**Solution:**
We arrange the polynomials in a vertical column and multiply each term of the second polynomial by each term of the first polynomial:

```
        x⁵ + 2x⁴ + 0x³ - 3x² - x - 5
      ×        3x² - 4x + 2
      ---------------------------------
        2x⁵ + 4x⁴ + 0x³ - 6x² - 2x - 10   (Multiplying by 2)
      -4x⁶ - 8x⁵ + 0x⁴ +12x³ + 4x² +20x    (Multiplying by -4x)
    3x⁷ + 6x⁶ + 0x⁵ - 9x⁴ - 3x³ -15x²     (Multiplying by 3x²)
    -----------------------------------------
    3x⁷ + 2x⁶ - 6x⁵ - 5x⁴ + 9x³ -17x² +18x -10
```

Thus, f(x) · g(x) = 3x⁷ + 2x⁶ - 6x⁵ - 5x⁴ + 9x³ - 17x² + 18x - 10

**Exercise 2.7**

Find the product of f(x) and g(x) using vertical arrangement:
a. f(x) = 2x² - 2x - 1 and g(x) = 3x + 5
b. f(x) = 3x³ - x² + x - 1 and g(x) = 5x - 2x²
c. f(x) = x³ + 2x² + x - 5 and g(x) = -2x² + 5x - 3

**Observation:**
1. For any two non-zero polynomial functions f and g, the degree of f · g is m + n if the degree of f is m and the degree of g is n
2. If either f or g is the zero polynomial, then f · g becomes the zero polynomial and has no degree
3. The product of two polynomial functions is a polynomial function

### Division of Polynomial Functions

A number that takes the form a/b, where a and b are integers and b ≠ 0, is called a rational number. If b is a positive integer, we can divide a by b to find two other integers q and r with 0 ≤ r < b such that a = qb + r. Here, a is called the dividend, b is called the divisor, q is called the quotient, and r is called the remainder.

For example, to find q and r when 50 is divided by 3, you usually use a process called long division as follows:

```
   16
3)50
  3
  --
  20
  18
  ---
   2
```

Hence, 50 ÷ 3 = 50/3 = 16 + 2/3. Here, 16 is the quotient and 2 is the remainder.

In almost a similar way, we can divide one polynomial by another polynomial.

**Activity 2.3**

For each of the following, divide the number a by the number b to find two numbers q (quotient) and r (remainder) with r < b such that a = qb + r:
i. a = 97 and b = 8
ii. a = 168 and b = 5
iii. a = 287 and b = 15
iv. a = 355 and b = 11

**Definition 2.6**

The division (Quotient) of two polynomial functions f and g is written as f ÷ g, and is defined as (f ÷ g)(x) = f(x) ÷ g(x) for all real numbers x and g(x) ≠ 0 (zero polynomial).

It is possible to divide one polynomial by another using a long division process. When you are asked to divide one polynomial function by another, stop the division process when you get a quotient and remainder that are polynomial functions and the degree of the remainder polynomial is less than the degree of the divisor polynomial.

**Example 5**

Find f(x) ÷ g(x), where f(x) = 4x³ + 4x² - x + 4 and g(x) = 2x - 1

**Solution:**
Using long division:

```
        2x² + 3x + 1
      ---------------
2x-1 ) 4x³ + 4x² - x + 4
       4x³ - 2x²
       ----------
           6x² - x
           6x² - 3x
           --------
               2x + 4
               2x - 1
               -------
                   5
```

So, dividing 4x³ + 4x² - x + 4 by 2x - 1 gives a quotient q(x) = 2x² + 3x + 1 and a remainder r(x) = 5

**Exercise 2.8**

In each of the following, find the quotient q(x) and the remainder r(x) when f(x) is divided by g(x):
a. f(x) = x³ + 4x² + x + 1 and g(x) = x + 2
b. f(x) = 4x³ + 6x² - 8x + 5 and g(x) = 2x - 1
c. f(x) = x³ - 3x² - 6 and g(x) = -x + 1

**Example 6**

Find f(x) ÷ g(x), where f(x) = x⁵ + 5x³ - 2x² + 7 and g(x) = x² + 2x + 1

**Solution:**
Using long division:

```
            x³ - 2x² + 8x - 16
          -----------------------
x²+2x+1 ) x⁵ + 0x⁴ + 5x³ - 2x² + 0x + 7
          x⁵ + 2x⁴ + x³
          -------------
             -2x⁴ + 4x³ - 2x²
             -2x⁴ - 4x³ - 2x²
             -----------------
                   8x³ + 0x² + 0x
                   8x³ +16x² + 8x
                   ---------------
                        -16x² - 8x + 7
                        -16x² -32x -16
                        ----------------
                               24x + 23
```

So, dividing x⁵ + 5x³ - 2x² + 7 by x² + 2x + 1 gives a quotient x³ - 2x² + 8x - 16 and a remainder 24x + 23

Therefore, (x⁵ + 5x³ - 2x² + 7)/(x² + 2x + 1) = x³ - 2x² + 8x - 16 + (24x + 23)/(x² + 2x + 1)

**Exercise 2.9**

In each of the following, find the quotient q(x) and the remainder r(x) when f(x) is divided by g(x) and write the result as:
f(x)/g(x) = q(x) + r(x)/g(x)

a. f(x) = x³ + 3x² + 6x + 5; g(x) = x² + x + 2
b. f(x) = x⁴ + x³ + x² - 6x + 7; g(x) = x² - 1
c. f(x) = 1 + 8x² - 5x³ + 5x⁴ + 2x⁵; g(x) = 2x³ - x² + 1

## 2.3 Theorems on Polynomials

### Polynomial Division Theorem

**Activity 2.4**

For each of the following, divide the number a by the number b to find two numbers q (quotient) and r (remainder) with r < b such that a = qb + r:
i. a = 88 and b = 5
ii. a = 305 and b = 6
iii. a = 354 and b = 17
iv. a = 444 and b = 111

**Theorem 2.1 (Polynomial Division Theorem)**

If f(x) and d(x) are polynomials such that d(x) ≠ 0, and the degree of d(x) is less than or equal to the degree of f(x), then there exist unique polynomials q(x) and r(x) such that:
f(x) = d(x)q(x) + r(x)
where r(x) = 0 or the degree of r(x) is less than the degree of d(x). If the remainder r(x) is zero, d(x) divides f(x) exactly.

**Proof:**

Existence of the polynomial q(x) and r(x):
Since f(x) and d(x) are polynomials, long division of f(x) by d(x) will give a quotient q(x) and remainder r(x), with degree of r(x) < degree of d(x) or r(x) = 0.

To show uniqueness of q(x) and r(x):
To prove that q(x) and r(x) are unique, suppose that q'(x) and r'(x) are polynomials satisfying:
f(x) = q'(x)d(x) + r'(x) and r'(x) = 0 or degree of r'(x) ≤ degree of d(x)

Then we would have:
q(x)d(x) + r(x) = f(x) = q'(x)d(x) + r'(x)
which implies:
d(x)(q(x) - q'(x)) = r'(x) - r(x) ...(*)

If q(x) - q'(x) ≠ 0, then the degree of the polynomial on the left-hand side of (*) is greater than or equal to the degree of d(x). But since the polynomials r'(x) and r(x) are either zero or have degree strictly less than that of d(x), the right-hand side of (*) must have degree strictly less than that of d(x). Thus, unless q(x) - q'(x) = 0, the degree of the two sides of (*) cannot be the same; that is, we have a contradiction.

Therefore, q(x) - q'(x) = 0 or q(x) = q'(x). This implies the left-hand side of (*) is zero. That is, 0 = r'(x) - r(x) or r'(x) = r(x). Thus, the polynomials q'(x) and r'(x) are unique.

**Note:** If the remainder r(x) is zero, then d(x) divides f(x) exactly and we say the division is exact.

**Example 1**

For each of the following pairs of polynomials, find polynomials q(x) and r(x) such that f(x) = d(x)q(x) + r(x):
a. f(x) = x³ - 1; d(x) = x - 1
b. f(x) = -2x³ + x² - 3x + 7; d(x) = x² - 1

**Solution:**
a. Using long division, we get q(x) = x² + x + 1 and r(x) = 0. Since r(x) = 0, we say that x³ - 1 is exactly divisible by x - 1 and x³ - 1 = (x² + x + 1)(x - 1)

b. The quotient is q(x) = -2x + 1 and the remainder is r(x) = -5x + 8 such that -2x³ + x² - 3x + 7 = (-2x + 1)(x² - 1) + (-5x + 8)

**Exercise 2.10**

For each of the following pairs of polynomials, find the quotient q(x) and the remainder r(x) that satisfy the polynomial division theorem:
a. f(x) = 6x² - 2x + 3; d(x) = x - 1
b. f(x) = x³ + 4x² + 8x + 6; d(x) = x² + 2x - 1
c. f(x) = x⁴ + 6x³ - 10x + 3; d(x) = x² - 1
d. f(x) = -x³ + 4x² - x - 6; d(x) = x² + x + 1
e. f(x) = -x⁴; d(x) = x + 2

### Remainder Theorem

**Activity 2.5**

Find the remainder when the polynomial f(x) is divided by the polynomial x - c for the given number c. Compare the result obtained with f(c):
a. f(x) = x² - x + 3; c = -2
b. f(x) = x³ + 2x² - x - 5; c = 1

**Theorem 2.2 (Remainder Theorem)**

Let f(x) be a polynomial of degree greater than or equal to 1 and let c be any real number. If f(x) is divided by the linear polynomial (x - c), then the remainder is f(c).

**Proof:**
When f(x) is divided by x - c, the remainder is always a constant because we continue to divide until the degree of the remainder is less than the degree of the divisor.

By the polynomial division theorem:
f(x) = (x - c)q(x) + k
where k is a constant. This equation holds for every real number x. Thus, it holds when x = c.

f(c) = (c - c)q(c) + k = 0·q(c) + k = 0 + k = k

That is, k = f(c). It follows that the value of the polynomial f(x) at x = c is the same as the remainder k obtained when you divide f(x) by x - c.

**Example 2**

In each of the following pairs of polynomials, use the remainder theorem to find the remainder when f(x) is divided by d(x):
a. f(x) = 2x³ + 5x² + 3x + 2; d(x) = x + 1
b. f(x) = x⁴ + 3; d(x) = x - 2
c. f(x) = x³⁵ + 5x²⁴ - x⁹ + 9; d(x) = x - 1
d. f(x) = 55x²⁰¹ + 100; d(x) = x + 1

**Solution:**
a. d(x) = x + 1 = x - (-1). Therefore, c = -1 and the remainder is f(c) = f(-1) = 2
b. d(x) = x - 2, therefore c = 2 and the remainder is f(c) = f(2) = 19
c. d(x) = x - 1, therefore c = 1 and the remainder is f(c) = f(1) = 1³⁵ + 5(1)²⁴ - 1⁹ + 9 = 14
d. d(x) = x + 1 = x - (-1), therefore c = -1 and the remainder is f(-1) = 55(-1)²⁰¹ + 100 = 45

**Exercise 2.11**

In each of the following, use the remainder theorem to find the remainder when f(x) is divided by d(x):
a. f(x) = x³ - 3x² + 4, d(x) = x - 1
b. f(x) = -2x³ + 4x² + 5x - 2, d(x) = x + 2
c. f(x) = x¹⁷ - 4x² + 7x - 32, d(x) = x - 1
d. f(x) = x¹⁶ + 8x³ + 99, d(x) = x + 1
e. f(x) = x³ - 2, d(x) = x - 12

**Example 3**

a. When 3x³ - 4x² + b - 5 is divided by x - 2, the remainder is 10. Find the value of b.
b. Find the value of a and b such that when x³ + ax² + bx - 9 is divided by x + 1 and x - 2, the remainder is 4 and -5 respectively.

**Solution:**
a. Let f(x) = 3x³ - 4x² + b - 5. By the remainder theorem, when f(x) is divided by x - 2, the remainder is f(2) = 3(2)³ - 4(2)² + b - 5 = b + 3. Since the remainder is given as 10, we have b + 3 = 10, and solving for b, we have b = 7.

b. Let f(x) = x³ + ax² + bx - 9. When f(x) is divided by x + 1, the remainder is f(-1) = (-1)³ + a(-1)² + b(-1) - 9 = a - b - 10. Since the remainder is 4, a - b - 10 = 4, which gives a - b = 14 ... (1)

When f(x) is divided by x - 2, the remainder is f(2) = (2)³ + a(2)² + b(2) - 9 = 4a + 2b - 1. Since the remainder is -5, 4a + 2b - 1 = -5, which gives 2a + b = -2 ... (2)

From (1) and (2), we have a = 4 and b = -10.

**Exercise 2.12**

1. When 5x³ - bx² + 8x - 1 is divided by x + 1, the remainder is 15. Find the value of b.
2. Find the values of a and b such that when ax³ - bx² + 5x - 2 is divided by x - 1 and x + 1, the remainder is 4 and 6, respectively.

### Factor Theorem

Remember that in the case of multiplication of polynomials, we multiply two or more polynomials to find another polynomial. For example, (x + 1)(2x - 1) = 2x² + x - 1.

The polynomial 2x² + x - 1 is called product or multiple and (x + 1) and (2x - 1) are called factors. Factoring a polynomial means writing it as the product of its polynomial factors. The following theorem is known as the factor theorem. It is very helpful to check whether a linear polynomial is a factor of a given polynomial or not.

**Activity 2.6**

Let f(x) = x³ + 4x² + x - 6
a. Find f(1)
b. Find the quotient q(x) and the remainder r(x) when f(x) is divided by x - 1
c. Express f(x) as f(x) = (x - 1)q(x) + r(x)
d. Is (x - 1) a factor of f(x)?

**Theorem 2.3 (Factor Theorem)**

Let f(x) be a polynomial of degree greater than or equal to one, and let c be any real number, then:
1. If f(c) = 0, then x - c is a factor of f(x)
2. If x - c is a factor of f(x), then f(c) = 0

**Proof:**
1. Suppose c is a real number and f(c) = 0, and consider the polynomial x - c. By the polynomial division theorem, when a polynomial f(x) is divided by x - c, there exist unique polynomials q(x) and r(x) such that:
f(x) = (x - c)q(x) + r(x)
where r(x) = 0 or the degree of r(x) is less than the degree of x - c = 1. But degree of r(x) < 1 means degree of r(x) = 0, that is, r(x) is a constant polynomial.

Let r(x) = k. Since f(c) = (c - c)q(c) + r(c) = 0, r(c) = 0 = k. Thus, r(x) = 0, and this implies f(x) = (x - c)q(x). Thus, x - c is a factor of f(x).

2. Suppose c is a real number and x - c is a factor of f(x), then there is a polynomial q(x) such that f(x) = (x - c)q(x). From this, f(c) = (c - c)q(x) = 0.

**Example 4**

a. Show that x + 2 is a factor of f(x) = x² + 5x + 6
b. Show that x + 1 and x - 2 are factors but x + 2 is not a factor of f(x) = x⁴ - x³ - x² - x - 2

**Solution:**
a. Since x + 2 = x - (-2) has the form x - c, the value of c = -2. Now f(c) = f(-2) = (-2)² + 5(-2) + 6 = 0, then by the factor theorem, x + 2 is a factor of x² + 5x + 6.

b. Since x + 1 = x - (-1) has the form x - c, the value of c = -1.
f(c) = f(-1) = (-1)⁴ - (-1)³ - (-1)² - (-1) - 2 = 0. Then by the factor theorem, x + 1 is a factor of f(x).

Since x - 2 has the form x - c, the value of c = 2.
f(c) = f(2) = (2)⁴ - (2)³ - (2)² - (2) - 2 = 0. Then by the factor theorem, x - 2 is a factor of f(x).

Since x + 2 = x - (-2) has the form x - c, the value of c = -2.
f(c) = f(-2) = (-2)⁴ - (-2)³ - (-2)² - (-2) - 2 = 20 ≠ 0. Then by the factor theorem, x + 2 is not a factor of f(x).

**Exercise 2.13**

1. Show that x - 2 is a factor of f(x) = x³ - x² - x - 6
2. Which of the following is a factor of f(x) = x³ + 4x² + x - 6?
   a. x - 1
   b. x - 3
   c. x + 1
   d. x + 2
3. In each of the following, determine whether x - c is a factor of f(x):
   a. f(x) = x³ - 6x² + 11x - 6; c = 1
   b. f(x) = 2x⁴ - x³ + 3x² - 4x - 3; c = -1/2
   c. f(x) = x³ - 3x² + 4x - 3; c = 2

**Example 5**

a. Find the number k such that x + 1 is a factor of f(x) = kx³ + 2x² - 3kx + 2
b. Find the values of a and b in the polynomial x³ + ax² + bx + 6 such that x + 1 and x - 2 are its factors.

**Solution:**
a. Let f(x) = kx³ + 2x² - 3kx + 2. Since x + 1 = x - (-1) is a factor of f, f(-1) = 0.
That is: k(-1)³ + 2(-1)² - 3k(-1) + 2 = 0
-k + 2 + 3k + 2 = 0
2k + 4 = 0
k = -2

b. Let f(x) = x³ + ax² + bx + 6.
Since x + 1 is a factor of f(x), f(-1) = 0.
f(-1) = (-1)³ + a(-1)² + b(-1) + 6 = a - b + 5
a - b + 5 = 0, so a - b = -5 ... (1)

Since x - 2 is a factor of f(x), f(2) = 0.
f(2) = (2)³ + a(2)² + b(2) + 6 = 4a + 2b + 14
Therefore, 4a + 2b + 14 = 0, which gives 2a + b = -7 ... (2)

From (1) and (2), we have a = -4 and b = 1.

**Exercise 2.14**

1. In each of the following, find a number k satisfying the given condition:
   a. x - 2 is a factor of 2x³ + kx² + 5x - 1
   b. x + 3 is a factor of x⁴ + 2kx³ - x² - 5kx + 6

2. Find the values of a and b in the polynomial ax⁴ + x³ - 2bx² - 11x + 6 such that x + 1 and x - 2 are its factors.

## 2.4 Zeros of a Polynomial Function

From your grade 9 mathematics lesson, you know how to find the solution or root of linear and quadratic equations.

**Activity 2.7**

Find the solution of the following equations:
a. 2x + 3 = -5 + 3x
b. (2/3)x + (5/4) = 2(x - 1/8)
c. (2x - 3)(4 + 2x) = 0
d. x² - 5x + 6 = 0
e. x² + 2x + 1 = 0
f. x² + 4 = 0

In activity 2.7, you have tried to find solutions or roots of the equations. For a polynomial function f(x), the root of the equation f(x) = 0 is called the zero of f(x).

**Definition 2.7**

For a polynomial function f(x) and a real number c, if f(c) = 0 then c is a zero of f.

**Note:**
1. If x - c is a factor of f(x), then c is the zero of f(x)
2. If c is the zero of f(x), then x - c is a factor of f(x)
3. If c is the zero of f(x), then c is the root or solution of the equation f(x) = 0

**Example 1**

a. Find the zeros of f(x) = (x - 2)(3x + 4)(1 - 4x)
b. Determine the zeros of f(x) = x⁴ - 13x² + 36
c. If x = 1 is one zero of f(x) = x³ - 6x² + 11x - 6, then find the rest of real zeros and rewrite f(x) as a product of its factors

**Solution:**
a. f(x) = 0 ⇒ (x - 2)(3x + 4)(1 - 4x) = 0
   x - 2 = 0 or 3x + 4 = 0 or 1 - 4x = 0
   x = 2 or x = -4/3 or x = 1/4
   Therefore, x = 2, x = -4/3, and x = 1/4 are the zeros of f(x)

b. f(x) = 0 ⇒ x⁴ - 13x² + 36 = 0
   (x²)² - 13x² + 36 = 0 (Let y = x²)
   y² - 13y + 36 = 0
   (y - 4)(y - 9) = 0
   (x² - 4)(x² - 9) = 0
   (x - 2)(x + 2)(x - 3)(x + 3) = 0
   x = 2 or x = -2 or x = 3 or x = -3
   Therefore, x = 2, x = -2, x = 3, and x = -3 are the zeros of f(x)

c. Since x = 1 is a zero of f(x), by the factor theorem, x - 1 is one factor of f(x). Using long division, the other factor is x² - 5x + 6. Further factoring the quadratic factor gives (x - 1)(x - 2)(x - 3). Hence, x³ - 6x² + 11x - 6 = 0 is the same as (x - 1)(x - 2)(x - 3) = 0. Therefore, x = 1, x = 2, and x = 3 are the zeros of f(x).

**Exercise 2.15**

Find the zeros of the following functions:
a. f(x) = (x - 1)(x + 5)(3x - 2)
b. f(x) = x⁴ - 5x² + 4
c. f(x) = x⁴ - x² - 2
d. f(x) = x³ - x² - 10x - 8
e. f(x) = 2x³ - 9x² - 5x

### Zeros of a Polynomial Function and Their Multiplicities

Consider f(x) = x³ + 2x² - x - 2 = (x - 1)(x + 1)(x + 2) and g(x) = x³ + 4x² - 3x - 18 = (x + 3)²(x - 2)

f(x) has three distinct factors (x - 1), (x + 1), and (x + 2). That is, it has three distinct zeros 1, -1, and -2. These are called simple zeros of f(x). While in g(x), the factor (x + 3) is repeated twice, that is, the zero -3 of g(x) is repeated twice and its other zero 2 appears only once. In this case, we say -3 is a repeated or a multiple zero of g(x).

**Definition 2.8**

If (x - c)ᵏ is a factor of a polynomial function f(x), but (x - c)ᵏ⁺¹ is not, then c is said to be a zero of multiplicity k of f(x).

**Example 2**

a. Given that x = -1 is a zero of f(x) = x³ - x² - 5x - 3, find its multiplicity.
b. Find a polynomial function f(x) of degree two whose zeros are 1, -2 and satisfying the condition f(3) = 30.

**Solution:**
a. By the factor theorem, x + 1 is a factor of f(x). To find the other factor, you can use long division giving f(x) = (x + 1)(x² - 2x - 3). Further factoring the quadratic factor gives (x + 1)(x + 1)(x - 3) = (x + 1)²(x - 3). Therefore, -1 is a zero of multiplicity 2 of f(x).

b. Let f(x) = k(x - 1)(x + 2) for some number k. Clearly, 1 and -2 are zeros of f(x). To find k, since f(3) = k(3 - 1)(3 + 2) = k(2)(5) = 10k = 30, implies k = 3. Therefore, the polynomial function of degree two is f(x) = 3(x - 1)(x + 2) = 3x² + 3x - 6.

**Exercise 2.16**

1. Given that x = 1 is a zero of f(x) = x³ - 4x² + 5x - 2, find the other zeros and their multiplicity.

2. For each of the following polynomials, list the zeros and state the multiplicity of each zero:
   a. k(t) = (t + 2/3)³t¹⁰
   b. g(x) = 5(x + √2)²(x + 2)³(1 + 3x)
   c. h(t) = 2t³ + 5t² + 4t + 1

3. a. Find a polynomial f(x) of degree two whose zeros are -2, 3 and satisfying the condition f(2) = 12.
   b. Find a polynomial function f(x) of degree three whose zeros are -1, 2, and 1 and satisfying the condition f(3) = 16.
   c. Find a polynomial function f(x) of degree 7 such that 2, -3, and 0 are the zeros of multiplicity 3, 2, and 2, respectively, and f(1) = 48.

### Location Theorem

Consider f(x) = x² - 3. -√3 and √3 are the zeros of f, and they are irrational numbers. The table of values of the given functions for -2 ≤ x ≤ 2 and x is an integer is the following:

| x | -2 | -1 | 0 | 1 | 2 |
|---|----|----|---|---|---|
| f(x) | 1 | -2 | -3 | -2 | 1 |

Since f(-2) = 1 > 0 and f(-1) = -2 < 0, we see that the value of f(x) changes sign from positive to negative between -2 and -1. And observe that one of the irrational roots -√3 ≈ -1.73 lies between these two numbers. We also see that the value of f(x) changes sign from negative to positive between 1 and 2. Similarly, observe that the second irrational root √3 ≈ 1.73 lies between these two numbers. The following theorem, which is called the location theorem, helps to locate the real zeros of a polynomial function.

**Theorem 2.4 (Location Theorem)**

Let a and b be real numbers such that a < b. If f is a polynomial function such that f(a) and f(b) have opposite signs, then there is at least one zero of f between the numbers a and b.

It is sometimes possible to estimate the zeros of a polynomial function from a table of values.

**Example 3**

Let f(x) = x⁴ - 2x³ - 4x² + 4x + 4. Construct a table of values and use the location theorem to locate the zeros of f for the integers x and -3 ≤ x ≤ 3

**Solution:**
Table of values:
| x | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
|---|----|----|----|---|---|---|---|
| f(x) | 91 | 12 | -1 | 4 | 3 | -4 | 7 |

Since f(-2) = 12 > 0 and f(-1) = -1 < 0, we see that the value of f(x) changes sign from positive to negative between -2 and -1. Hence, by the location theorem, there is a zero of f(x) between x = -2 and x = -1.

Since f(-1) = -1 < 0 and f(0) = 4 > 0, we see that the value of f(x) changes sign from negative to positive between -1 and 0. Hence, by the location theorem, there is a zero of f(x) between x = -1 and x = 0. Similarly, there are zeros of f(x) between x = 1 and x = 2 and between x = 2 and x = 3.

**Example 4**

Using the location theorem, show that the polynomial function f(x) = x⁶ - 2x⁵ - 4x² + 4x + 4 has a zero between x = 1 and x = 2.

**Solution:**
f(1) = (1)⁶ - 2(1)⁵ - 4(1)² + 4(1) + 4 = 3 > 0
f(2) = (2)⁶ - 2(2)⁵ - 4(2)² + 4(2) + 4 = -4 < 0

Hence, f(1) is positive and f(2) is negative, and by the location theorem, f(x) has a zero between x = 1 and x = 2.

**Exercise 2.17**

1. Use the location theorem to verify that f(x) has a zero between a and b:
   a. f(x) = -x⁴ + x³ + 1; a = -1, b = 1
   b. f(x) = 3x³ + 7x² + 3x + 7; a = -3, b = -2

2. In each of the following, use the Location Theorem to locate the real zero of f(x) between successive integers in the given intervals:
   a. f(x) = x³ - 9x² + 23x - 14; for 0 ≤ x ≤ 6
   b. f(x) = x⁴ + 2x³ - 4x² - 6x + 2; for -3 ≤ x ≤ 3

### Rational Zero Test

**Theorem 2.5 (Rational Zero Test)**

Suppose that all the coefficients of the polynomial function described by:
f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀

are integers with aₙ ≠ 0 and a₀ ≠ 0. If p/q (in lowest terms) is a zero of f(x), then p is a factor of a₀ and q is a factor of aₙ.

**Steps to find the rational zeros of a polynomial function f(x):**

1. Arrange the polynomial in descending order so that it takes the form:
   f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀

2. Write down all the factors of the constant term a₀. These are all the possible values of p

3. Write down all the factors of the leading coefficient aₙ. These are all the possible values of q

4. Write down all the possible values of p/q. Remember that since factors can be negative, both p/q and -p/q must be included. Simplify each value and cross out any duplicates

5. Identify those values of p/q for which f(p/q) = 0. These are all the rational zeros of f(x)

**Example 5**

In each of the following, find all the rational zeros of the polynomial:
a. f(x) = x² + x - 2
b. f(x) = x³ - x + 1
c. f(x) = 6x³ + 13x² + x - 2
d. f(x) = 12x³ + x² - (1/2)x - 1

**Solution:**
a. f(x) = x² + x - 2 has leading coefficient a₂ = 1 and constant term a₀ = -2.
   Possible values of p are factors of -2: ±1, ±2
   Possible values of q are factors of 1: ±1
   The possible rational zeros p/q are: ±1, ±2

   Since f(x) is a polynomial function of degree 2, it has at most 2 zeros, and from the four possible rational zeros, at most 2 can be the zeros of f.

   Checking:
   f(-2) = 0, f(1) = 0

   Therefore, the zeros of f(x) are -2 and 1.

b. f(x) = x³ - x + 1. The leading coefficient is 1 and the constant term is 1.
   Hence, the possible rational zeros are ±1.
   Check that f(1) = f(-1) = 1 ≠ 0. So, we can conclude that the given polynomial has no rational zero. Use the location theorem to show that f has a zero between -2 and -1.

c. The leading coefficient is a₃ = 6 and the constant term is a₀ = -2.
   Possible values of p are factors of -2: ±1, ±2
   Possible values of q are factors of 6: ±1, ±2, ±3, ±6
   The possible rational zeros p/q are: ±1, ±1/2, ±1/3, ±1/6, ±2, ±2/3

   Since f(x) is a polynomial function of degree 3, it has at most three zeros, and from the 12 possible rational zeros, at most 3 can be the zeros of f.

   Check that f(-1/2) = f(-2) = f(1/3) = 0.
   Using the factor theorem, we can factorize f(x) as f(x) = (3x - 1)(2x + 1)(x + 2) with -1/2, -2, and 1/3 as the only rational zeros of f.

d. f(x) = 12x³ + x² - (1/2)x - 1 = (1/2)(x³ + 2x² - x - 2) = (1/2)k(x)
   where k(x) = x³ + 2x² - x - 2 has integer coefficients and the same zeros as f(x).
   k(x) has a constant term -2 and leading coefficient 1.
   The possible rational zeros of k(x) are ±1 and ±2.
   You can check that k(1) = k(-1) = k(-2) = 0.
   Therefore, the zeros of f(x) are ±1 and -2.

**Exercise 2.18**

For each of the following polynomials, find all possible rational zeros:
a. f(x) = x² - 5x + 4
b. f(x) = -3x³ + x² - 3x + 1
c. f(x) = x³ - 3x² - x - 3
d. f(x) = 10x³ - 41x² + 2x + 8
e. f(x) = 4x⁴ + x³ - 8x² - 18x - 4
f. f(x) = -6x⁵ + 17x⁴ - 14x³ + 4x - 1

## 2.5 Graphs of Polynomial Functions

In unit 1, you discussed how to draw the graphs of the polynomial functions of degree zero, one, and two. You saw that the graph of a linear function is a straight line and the graph of a quadratic function is a parabola. In this section, you will learn about the properties of graphs of polynomial functions.

**Activity 2.9**

1. Use table of values to sketch the graphs of f(x) = 2x + 3 and g(x) = -2x + 3. Include the x-intercept and y-intercept when you make the table of values. Sketch the graphs on the same xy-plane.

2. Consider the linear function f(x) = ax + b, a ≠ 0, and give answers for each of the following:
   a. What is its degree? Is it odd or even?
   b. Find the intercepts.
   c. Write the behavior of the graph when a is positive and x is large (far to the right and far to the left).
   d. Write the behavior of the graph when a is negative and x is large (far to the right and far to the left).
   e. What is the shape of the graph of f?
   f. Find the domain and the range of f.

**Example 1**

For the function f(x) = x² + 2x - 3:
a. Find the intercepts.
b. Using completing the square method, rewrite f as f(x) = -4 + (x + 1)² and find the turning point.
c. Complete the table of values below:

| x | -4 | -3 | -2 | -1 | 0 | 1 | 2 |
|---|----|----|----|----|---|---|---|
| y = f(x) |   |   |   |   |   |   |   |

d. Sketch the graph of f, first by plotting the points (x, y) and then joining them by a smooth curve (a smooth curve is a curve that has no sharp corner).
e. Find the domain and range of f.

**Solution:**
f(x) = y = x² + 2x - 3 = (x + 3)(x - 1)

a. By making f(x) = y = 0 and solving the equation x² + 2x - 3 = (x + 3)(x - 1) = 0, we get x = -3 or x = 1. By making x = 0, we have y = -3. Thus, x = -3 and x = 1 are the x-intercepts and y = -3 is the y-intercept.

b. y = x² + 2x - 3 = (x² + 2x + 1) - 1 - 3 = (x + 1)² - 4 = -4 + (x + 1)²
   Since (x + 1)² ≥ 0 for all real numbers x, f(x) ≥ -4 for all values of x, and -4 is the minimum value of f. This minimum value of f is attained when x = -1. The point (-1, -4) is called turning point or vertex of the graph of f.

c. Table of values:
| x | -4 | -3 | -2 | -1 | 0 | 1 | 2 |
|---|----|----|----|----|---|---|---|
| y = f(x) | 5 | 0 | -3 | -4 | -3 | 0 | 5 |

d. **Figure 2.1** shows the graph of f(x) = x² + 2x - 3 with the turning point at (-1, -4) and x-intercepts at (-3, 0) and (1, 0).

e. The domain is the set of all real numbers and the range is the set of all real numbers greater than or equal to -4.

**Exercise 2.19**

For the function f(x) = x² + 4x + 3:
a. Find the intercepts.
b. Using completing the square method, rewrite f as f(x) = -1 + (x + 2)² and find the turning point.
c. Complete the table of values below:

| x | -5 | -4 | -3 | -2 | -1 | 0 | 1 |
|---|----|----|----|----|----|---|---|
| y = f(x) |   |   |   |   |   |   |   |

d. Sketch the graph of f, first by plotting the points (x, y) and then joining them by a smooth curve.
e. Find the domain and range of f.

**Example 2**

Let f(x) = -x² - 6x - 8
a. Find the intercepts.
b. Using completing the square method, rewrite f as f(x) = 1 - (x + 3)² and find the turning point.
c. Complete the table of values below:

| x | -4 | -3 | -2 | -1 | 0 |
|---|----|----|----|----|---|
| y = f(x) |   |   |   |   |   |

d. Sketch the graph of f, first by plotting the points (x, y) and then joining them by a smooth curve.
e. Find the domain and range of f.

**Solution:**
f(x) = y = -x² - 6x - 8 = (x + 2)(-x - 4)

a. By making f(x) = 0 and solving the equation -x² - 6x - 8 = (x + 2)(-x - 4) = 0, we get x = -2 or x = -4. By making x = 0, we have y = -8. Thus, x = -2 and x = -4 are the x-intercepts and y = -8 is the y-intercept.

b. y = -x² - 6x - 8 = -(x² + 6x) - 8 = -(x² + 6x + 9) + 9 - 8 = -(x + 3)² + 1 = 1 - (x + 3)²
   Since (x + 3)² ≥ 0, f(x) ≤ 1 for all values of x, and 1 is the maximum value of f. This maximum value of f is attained when x = -3. The point (-3, 1) is called the turning point for the graph of f.

c. Table of values:
| x | -4 | -3 | -2 | -1 | 0 |
|---|----|----|----|----|---|
| y = f(x) | 0 | 1 | 0 | -3 | -8 |

d. **Figure 2.2** shows the graph of f(x) = -x² - 6x - 8 with the turning point at (-3, 1) and x-intercepts at (-4, 0) and (-2, 0).

e. The domain is the set of all real numbers and the range is the set of all real numbers less than or equal to 1.

**Exercise 2.20**

1. For the function f(x) = -x² + 6x - 8:
   a. Find the intercepts.
   b. Using completing the square method, rewrite f as f(x) = 1 - (x - 3)² and find the turning point.
   c. Complete the table of values below:

| x | -1 | 0 | 1 | 2 | 3 | 4 | 5 |
|---|----|---|---|---|---|---|---|
| y = f(x) |   |   |   |   |   |   |   |

   d. Sketch the graph of f, first by plotting the points (x, y) and then joining them by a curve.
   e. Find the domain and range of f.

3. Consider the quadratic function f(x) = ax² + bx + c and give answers for each of the following:
   a. What is its degree? Is it even or odd?
   b. What is the maximum number of x-intercepts?
   c. What is the y-intercept?
   d. Write the behavior of the graph when a is positive and x is large (far to the right and far to the left).
   e. Write the behavior of the graph when a is negative and x is large (far to the right and far to the left).
   f. Is the graph smooth (has no sharp corner) and continuous (has no jump or hole)?
   g. What is the domain of f?
   h. Can the range of f be all real numbers? Why?

**Note:**
1. The graph of a polynomial function is a smooth curve (has no sharp corner).
2. Functions whose graphs are not continuous and have sharp corners are not polynomial functions.
   The absolute value function f(x) = |x| is not a polynomial function because it has a sharp corner at the point (0, 0) as shown by **Figure 2.3(a)**.
   The function shown in **Figure 2.3(c)** is not polynomial because it is not a continuous function. It has a hole and a jump.

To study more on the property of graphs of polynomials, we will now try to observe the graphs of polynomial functions of higher degree, that is, when the degree n ≥ 3.

**Example 3**

By sketching the graphs of f(x) = x³ - 1 and g(x) = -x³ + 1, describe the behavior of the graphs for large x.

**Solution:**
For f(x) = x³ - 1 = (x - 1)(x² + x + 1), the x-intercept is 1, the y-intercept is -1.

Table of values for f(x):
| x | -20 | -10 | -1 | 0 | 1 | 1.5 | 10 | 20 |
|---|-----|-----|----|---|---|-----|----|----|
| y | -8001 | -1001 | -2 | -1 | 0 | 2.375 | 999 | 7999 |

For g(x) = -x³ + 1 = (-x + 1)(x² + x + 1), the x-intercept is 1, the y-intercept is 1.

Table of values for g(x):
| x | -20 | -10 | -1 | 0 | 1 | 1.5 | 10 | 20 |
|---|-----|-----|----|---|---|-----|----|----|
| y | 8001 | 1001 | 2 | 1 | 0 | -2.375 | -999 | -7999 |

**Figure 2.4** shows the graphs of the two functions.

**Observation:**
1. The degree of f(x) is odd and its leading coefficient is positive. As shown in **Figure 2.4(a)**, when x is large positive, f(x) becomes large positive and the graph moves upwards, and when x is large negative, f(x) becomes large negative and the graph moves downwards.
2. The degree of g(x) is odd and its leading coefficient is negative. As shown in **Figure 2.4(b)**, when x is large positive, f(x) becomes large negative and the graph moves downwards, and when x is large negative, f(x) becomes large positive and the graph moves upwards.

**Exercise 2.21**

1. By sketching the graphs of f(x) = x³ and g(x) = -x³, describe the behavior of the graphs for large x.

2. For the third-degree polynomial f(x) = a₃x³ + a₂x² + a₁x + a₀:
   a. What is the maximum number of intersections which the graph of f makes with the x-axis?
   b. What is the minimum number of intersections which the graph of f makes with the x-axis?
   c. What is the number of intersections which the graph of f makes with the y-axis?
   d. What maximum number of turning points does the graph of f have?
   e. Write the behavior of the graph when a₃ is positive and x is large (far to the right and far to the left).
   f. Write the behavior of the graph when a₃ is negative and x is large (far to the right and far to the left).
   g. What is the domain of f?

**Note:** The following are examples of graphs of polynomial functions of degree four. The graphs are drawn using graph calculator software called GeoGebra.

**Figure 2.5** shows various fourth-degree polynomial functions:
- **Figure 2.5(a)**: f(x) = (x² - 1)(x² - 4)
- **Figure 2.5(b)**: f(x) = x⁴ + x³ - 8x² - 12x
- **Figure 2.5(c)**: f(x) = -x⁴ + 5x² + 2x - 1
- **Figure 2.5(d)**: f(x) = -x⁴ - x³ + 3x² + x - 1

In **Figures 2.5(a)** and **2.5(b)**, the leading coefficient of f(x) is positive and the degree is even. The values of f(x) become large positive and the graphs go upward both far to the right and far to the left as the values of x become large in absolute value.

In **Figures 2.5(c)** and **2.5(d)**, the leading coefficient of f(x) is negative and the degree is even. The values of f(x) become large negative and the graphs go downward both far to the right and far to the left as the values of x become large in absolute value.

From **Figure 2.5(b)**, it is seen that the maximum number of intersections that the graph of a fourth-degree polynomial makes with the x-axis is 4, and the maximum number of turning points is 3.

As shown in the figure, the graph of a polynomial function of degree 4 may not intersect the x-axis.

By applying the rational root test and the factor theorem, there is a possibility of finding the x-intercepts of a function. There is also a possibility of locating the real zeros using the location theorem.

With quadratic polynomials, we were able to algebraically find the maximum or minimum value of the function by finding the vertex (turning point). But for general polynomials, finding the turning points like A, B, and C in **Figure 2.5(d)**, is not possible without more advanced techniques from calculus (derivative of a function).

**Observation:**
The properties of the first-degree and the third-degree polynomial are also applicable for polynomial functions of odd degree. The properties of the second-degree and the fourth-degree polynomial are also applicable for polynomial functions of even degree.

**Exercise 2.22**

1. For the polynomial functions given from a to d, state the following properties of the graph of the functions without drawing their graphs:
   i. The behavior of the graph as x takes values far to the right.
   ii. The behavior of the graph as x takes values far to the left.
   iii. The number of intersections with the x-axis.

   a. f(x) = x² - 2x - 1
   b. f(x) = 2x² - x⁴
   c. f(x) = -x³ + 3x - 2
   d. f(x) = -2(1 - x)³(x + 1)²

2. Graphs of some polynomial functions are given below. In each case, identify the sign of the leading coefficient of the function. State whether the degree is even or odd.

## 2.6 Applications

Polynomials arise in the study of problems involving areas and volumes.

**Example 1**

A wire of length 56m is bent into the shape of a rectangle. Find the maximum area it can enclose and the dimensions of the rectangle of maximum area.

**Solution:**
Perimeter of the rectangle, p = 2x + 2y ... (i)
Area A of the rectangle, A = xy ... (ii)

Since the rectangle is made by bending 56 meters of wire, the perimeter of the rectangle is 56m:
2x + 2y = 56 ... (iii)

From (iii), solving for y (you can also solve for x):
y = 28 - x ... (iv)

Substituting the value of y from (iv) into (ii), we get:
A = x(28 - x) = -x² + 28x, and this is a quadratic polynomial.

Using completing the square method, we can rewrite A as:
A = -x² + 28x = -(x² - 28x) = -(x² - 28x + 196) + 196 = 196 - (x - 14)²

Thus, A = 196 - (x - 14)², and since (x - 14)² is always non-negative, we subtract a positive number or zero from 196. This means the maximum value of A is 196. This maximum value is attained when x is 14. Substituting x = 14 into equation (iv), we get y = 14.

Therefore, the maximum area that can be enclosed is 196 m², and the dimension of the rectangle of maximum area is x = 14m and y = 14m. That is, when the rectangle is a square of side length 14m.

**Exercise 2.23**

1. A farmer has 100 meters of fencing material to use to make a rectangular enclosure for sheep as shown. He will leave an opening of 2 meters for the gate.
   a. Show that the area of the enclosure is given by A = 51x - x²
   b. Find the value of x that will give maximum area.
   c. Calculate the maximum possible area.

2. A farmer has 100 meters of fencing material to make a rectangular enclosure for sheep. One side of the enclosure is closed by a wall as shown. He will leave an opening of 2 meters for the gate.
   a. Show that the area of the enclosure is given by A = 102x - 2x²
   b. Find the value of x that will give maximum area.
   c. Calculate the maximum possible area.

3. An open-topped box is to be made by removing squares from each corner of a rectangular piece of card and folding up the sides.
   a. Show that if the original rectangle of card measured 80cm by 50cm and the squares removed from the corners have sides x cm long, then the volume of the box is given by V = 4x³ - 260x² + 4000x.
   b. Find V when x = 20cm.
   c. Can the value of x be 30cm? Why?

**Example 2**

Find the two real numbers whose difference is 16 and whose product is the minimum.

**Solution:**
Let the two numbers be x and y. Then:
x - y = 16 ... (1)

If we denote the product of the two numbers by A, then:
A = xy ... (2)

To find the minimum value of A, first we solve for y from equation (1):
y = x - 16 ... (3)

Substituting this in equation (2) gives:
A = x(x - 16) = x² - 16x

A = x² - 16x = (x² - 16x + 64) - 64 = (x - 8)² - 64 = -64 + (x - 8)²

Since (x - 8)² ≥ 0, A = -64 + (x - 8)² ≥ -64.

Therefore, -64 is the minimum product, and this minimum product is obtained when the value of x = 8. And when x = 8, y = x - 16 = -8. That is, y = -8.

**Exercise 2.24**

1. Find the two real numbers whose difference is 10 and whose product is the minimum.
2. Find the two real numbers whose sum is 12 and whose product is the maximum.

## Summary

1. A linear function is given by f(x) = ax + b, a ≠ 0.
2. A quadratic function is given by f(x) = ax² + bx + c, a ≠ 0.
3. Let n be a non-negative integer and let aₙ, aₙ₋₁, ..., a₂, a₁, a₀ be real numbers with aₙ ≠ 0. The function p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀ is called a polynomial function in x of degree n.
4. A polynomial function is over integers if its coefficients are all integers.
5. A polynomial function is over rational numbers if its coefficients are all rational numbers.
6. A polynomial function is over real numbers if its coefficients are all real numbers.
7. Operations on polynomial functions:
   i. Sum: (f + g)(x) = f(x) + g(x)
   ii. Difference: (f - g)(x) = f(x) - g(x)
   iii. Product: (f · g)(x) = f(x) · g(x)
   iv. Quotient: (f ÷ g)(x) = f(x) ÷ g(x), if g(x) ≠ 0
8. If f(x) and d(x) are polynomials such that d(x) ≠ 0, and the degree of d(x) is less than or equal to the degree of f(x), then there exist unique polynomials q(x) and r(x) such that f(x) = q(x)d(x) + r(x), where r(x) = 0 or the degree of r(x) is less than the degree of d(x).
9. If a polynomial f(x) is divided by a first-degree polynomial of the form x - c, then the remainder is the number f(c).
10. Given the polynomial function p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀, if p(c) = 0, then c is a zero of p(x) or a root of the equation p(x) = 0.
11. For every polynomial function f and a real number c, if f(c) = 0, then x - c is a factor of the polynomial function f.
12. If (x - c)ᵏ is a factor of f(x), but (x - c)ᵏ⁺¹ is not, we say that c is a zero of multiplicity k of f(x).
13. If the rational number p/q (in its lowest term) is a zero of the polynomial f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₂x² + a₁x + a₀ with integer coefficients, then p must be an integer factor of a₀ and q must be an integer factor of aₙ.
14. Let a and b be real numbers such that a < b. If f(x) is a polynomial function such that f(a) and f(b) have opposite signs, then there is at least one zero of f(x) between a and b.
15. The graph of a polynomial function of degree n has at most n - 1 turning points and intersects the x-axis at most n times.
16. The graph of every polynomial function has no sharp corners; it is a smooth and continuous curve.

## Review Exercise

1. Identify whether the following functions are polynomial or not. For those which are polynomial, indicate the degree, leading coefficient, and constant term:
   a. f(x) = 5x² - (23x³)/3 - x - (4x³ + 9x² - 2x + 9)/3
   b. f(x) = 2(1/x)² + 3(1/x) - 6
   c. f(x) = 3(x²)³ - 4(x²)² + 2(x + 1)² + 5
   d. f(x) = -2(√x)³ + 5√x - 10
   e. f(x) = 3π² + 4

2. Given f(x) = 6 + 4x - 2x² + 3x³, g(x) = x⁴ - 5x² + x³ - 2, and h(x) = x + 2, find:
   a. hf + g
   b. f - hg
   c. fg
   d. g/h

3. If f and g are any two polynomials, then which of the following will always be a polynomial function?
   a. f + g
   b. f - g
   c. f · g
   d. f/g
   e. f² - g
   f. f + g/g - f
   g. 3f - 45g

4. In each of the following, find the quotient and the remainder when the first polynomial is divided by the second:
   a. f(x) = 3x³ + 5x² - 7x - 6; x + 1
   b. f(x) = 4x³ - 5x² + 4x - 17; x² - 1
   c. f(x) = 2x⁴ + 5x² - 6; x² - x + 1
   d. f(x) = x⁵ + 3x⁴ + 2x³ - x² + 2x - 7; x + 2
   e. f(x) = x⁵ + 2x⁴ - x³ + 5x² - x - 2; x³ + 1
   f. f(x) = 2x³ - x² + 2x - 1; 2x + 1

5. Prove that when a polynomial f(x) is divided by a first-degree polynomial ax + b, the remainder is f(-b/a).

6. Let f(x) = xⁿ + 1 be a polynomial function and n is an odd integer, then show that:
   a. The remainder when f is divided by x + 1 is zero.
   b. x + 1 is a factor of f.

7. Factorize fully:
   a. x³ - 4x² - 7x + 10
   b. 2x⁴ - x³ - 6x² + 7x - 2
   c. 2x⁵ + 2x⁴ - x³ - x² - x - 1

8. Find the value of k such that:
   a. When f(x) = 3x³ - 2x² + kx - 6 is divided by x - 3, it has a remainder of -3.
   b. x + 1 is a factor of x³ - kx² + 4x - 1.
   c. 2x - 3 is a factor of x³ + 3x² + kx - 10.

9. When the polynomial f(x) = a(2x + 1)² + b(x - 2)² is divided by x + 1, the remainder is -10, and f(1) = 10. Then find the values of a and b.

10. Find the values of p and q if x + 1 is a common factor of f(x) = 2x⁴ - px³ + qx² + 2 and g(x) = px⁵ + 8x³ - 4x² - qx.

11. Find numbers a and k so that x + 1 is a factor of f(x) = ax⁴ - 2kx³ + ax² - kx + 2 and f(1) = 2.

12. Find a polynomial function f of degree 3 such that f(2) = 48 and x + 1, x, and x + 2 are factors of the polynomial.

13. In each of the following, find a polynomial function f that has the given zeros satisfying the given condition:
    a. 2, -3, 5 and f(4) = 10
    b. 0, -2/3, 1/2, 3 and f(1) = 5/4

14. Find all rational zeros of:
    a. f(x) = 6x³ - 7x² - 9x - 2
    b. f(x) = 12x⁴ - 22x³ - 12x² + 33x - 9
    c. f(x) = -6x⁵ + 5x⁴ - 3x³ - 21x² - x + 6
    d. f(t) = t³ + (1/16)t² - (1/2)t - (1/3)

15. Sketch the graphs of:
    a. f(x) = -2x² + 5x - 2
    b. f(x) = x² + 2x + 2