# Unit 3: Matrices

## Unit Outcomes

By the end of this unit, you will be able to:
- Know basic concepts about matrices
- Perform operations on matrices
- Differentiate types of a matrix
- Know specific ideas, methods and principles concerning matrices
- Formulate elementary row/column operations
- Define inverse of an invertible matrix
- Use elementary row operations to find inverse of square matrices of order 2 and 3
- Define system of linear equations
- Solve linear system of equations by using elementary row operations
- Apply matrix concepts to model, solve and analyze real-world situations

## Key Words

- Augmented matrix
- Column matrix
- Consistent system
- Diagonal matrix
- Inconsistent system
- Elementary row operations
- Non-singular matrix
- Reduced-echelon form
- Inverse matrix
- Row echelon form
- Row matrix
- Scalar matrix
- Symmetric matrix
- Singular matrix
- Skew-symmetric matrix
- Triangular matrix
- Transpose of a matrix
- Zero matrix

## Introduction

Systems of linear equations occur in many areas such as in Geometry, Engineering, Business, Economics, Biology, etc. Solving such systems of linear equations is one of the most important applications of mathematics to other fields.

In Unit 3 of Grade 9, you have learned how to solve systems of linear equations in two variables. In this unit, you will learn how to solve systems of linear equations in a more systematic way.

Consider the following two linear equations in the variables x and y:
x - y = 1 and 2x + y = 7

A common solution for these two equations can be found by working only on the numbers involved in the two equations. These numbers form a rectangular array of numbers as follows:

```
[1  -1  1]
[2   1  7]
```

Such array of numbers is called a matrix. Matrices (plural form of a matrix) are involved in different applications of mathematics.

---

## 3.1 The Concepts of a Matrix

### Activity 3.1

Consider the seats in your classroom.
a. How many rows of seats are there in your classroom?
b. How many columns of seats are there in your classroom?
c. For each of the students in your class, identify the row and column that the student is found.

Consider the following table, which gives the sections and the numbers of male and female students in each section of Grade 11 students of a certain school.

| Section | Female | Male |
|---------|--------|------|
| Section 1 | 25 | 26 |
| Section 2 | 28 | 24 |
| Section 3 | 30 | 20 |
| Section 4 | 35 | 15 |

Find the number of female students in Sections 1, 2, 3 and 4.
Find the number of male students in Sections 1, 2, 3 and 4.

In most classrooms, seats are arranged in rows and columns. In such arrangements one can assign an ordered pair of numbers to each seat which indicates the position of the row and the position of the column that the seat is found.

The information in Activity 3.1(2), can be displayed as an array of numbers as follows:

```
[25  26]
[28  24]
[30  20]
[35  15]
```

This array of numbers is a matrix and a formal definition of matrices is given below.

### Definition 3.1

Let m and n be positive integers. A rectangular array of numbers A in R that is written as:

```
[a₁₁  a₁₂  ...  a₁ₙ]
[a₂₁  a₂₂  ...  a₂ₙ]
[ .    .        . ]
[ .    .        . ]
[ .    .        . ]
[aₘ₁  aₘ₂  ...  aₘₙ]
```

is called an m by n matrix (or m×n matrix) in R.

In Definition 3.1:
a. The number m is the number of rows, n is the number of columns and m×n is called the size of the matrix and it is read as "m by n"
b. The number aᵢⱼ is called the ij-entry or ij-element of A. That is, numbers in the given array are called elements or entries of A. The ij-entry is an element appearing in the i-th row and the j-th column of the matrix.
c. Matrices can be abbreviated by writing them as (aᵢⱼ)ₘₓₙ
d. Matrices are usually denoted by capital letters like A, B, C etc. and entries of matrices by small letters like a, b, c etc.

### Example 1

Find the size and determine its elements/entries for each of the following matrices:

a. A = 
```
[1  2]
[3  4]
```

b. B = 
```
[-2  10]
[ 3  -1]
[ 0   5]
```

**Solution**

a. A has two rows and two columns. Therefore, A is a 2 × 2 matrix.
The entries of A are:
- a₁₁ = 1 is the entry found in the first row and in the first column of A
- a₁₂ = 2 is the entry found in the first row and in the second column of A
- a₂₁ = 3 is the entry found in the second row and in the first column of A
- a₂₂ = 4 is the entry found in the second row and in the second column of A

b. B has three rows and two columns. Therefore, B is a 3×2 matrix.
The entries of B are:
- b₁₁ = -2 is the entry found in the first row and in the first column of B
- b₁₂ = 10 is the entry found in the first row and in the second column of B
- b₂₁ = 3 is the entry found in the second row and in the first column of B
- b₂₂ = -1 is the entry found in the second row and in the second column of B
- b₃₁ = 0 is the entry found in the third row and in the first column of B
- b₃₂ = 5 is the entry found in the third row and in the second column of B

### Example 2

Find the size of the matrix and determine its elements/entries for each of the following matrices:

a. C = 
```
[ 1 ]
[ 0 ]
[-2 ]
[ ½ ]
```

b. D = [2  1  3  0  -1  ½]

c. E = (-4)

**Solution**

a. Matrix C has four rows and one column. Therefore, C is a 4×1 matrix.
The entries of C are:
- c₁₁ = 1 is the entry found in the first row and in the first column of C
- c₂₁ = 0 is the entry found in the second row and in the first column of C
- c₃₁ = -2 is the entry found in the third row and in the first column of C
- c₄₁ = ½ is the entry found in the fourth row and in the first column of C

b. Matrix D has one row and six columns. Therefore, D is a 1×6 matrix.
The entries of D are:
- d₁₁ = 2 is the entry found in the first row and in the first column of D
- d₁₂ = 1 is the entry found in the first row and in the second column of D
- d₁₃ = 3 is the entry found in the first row and in the third column of D
- d₁₄ = 0 is the entry found in the first row and in the fourth column of D
- d₁₅ = -1 is the entry found in the first row and in the fifth column of D
- d₁₆ = ½ is the entry found in the first row and in the sixth column of D

c. Matrix E has one row and one column. Therefore, E is a 1×1 matrix.
The entry of E is e₁₁ = -4, the entry found in the first row and in the first column of E.

### Exercise 3.1

1. Let 
```
A = [ 1   2  -4 ]
    [ 0  -1   3 ]
    [ 5  -2   0 ]
    [ 3  -1   2 ]
```
Then determine each of the following entries (if it exists):
a. a₃₂
b. a₂₃
c. a₄₁
d. a₁₄

2. Determine the size and the elements/entries of each of the following matrices:
a. 
```
[ 1  2  3 ]
[ 0  1 -1 ]
```
b. [3  5]
c. C = [1  2  1  3]
d. 
```
[ 2  5  1 ]
[ 3  0  2 ]
[ 1  1  4 ]
```
e. E = (5)

3. Let A = (aᵢⱼ)₂ₓ₃ and aᵢⱼ = j - i. Then determine A.

---

## 3.2 Operations on Matrices

Applications of matrices involve different operations on matrices and some of these operations are addition, subtraction and multiplication of matrices by scalars and matrix multiplications. These operations will be considered in this section.

### 3.2.1 Equality of Matrices

#### Activity 3.2

Consider the matrices A = [1 2; 3 4] and C = (cᵢⱼ)₂ₓ₂, where cᵢⱼ = i for i = 1,2 and j = 1,2.
a. Compare each of the corresponding entries of A and B.
b. Compare each of the corresponding entries of A and C.

From your responses in Activity 3.2, you have observed that matrices A and C have the same size and the corresponding entries of A and C are equal and such matrices are called equal matrices.

For most operations on matrices, equality of two matrices is required and it is defined as follows.

#### Definition 3.2

Two matrices A = (aᵢⱼ) and B = (bᵢⱼ) with the same size are said to be equal, written as A = B, if their corresponding entries are equal. That is, A = B, if aᵢⱼ = bᵢⱼ for i = 1,2,...,m and j = 1,2,...,n.

Let A = [a b; c d] and B = [e f; g h]. If A = B, then a = e, b = f, c = g, and d = h.

#### Example 3

Find the values of the unknowns in each of the following, if A = B.

a. A = [a b] and B = [4 2]
b. A = [a+b  a-b] and B = [3 1]
c. A = 
```
[a+b  a-b  c]
[d    e    3]
```
and B = 
```
[1  3  9]
[0  7  3]
```

**Solution**

a. If A = B, then the corresponding entries of the two matrices are equal. That is, a = 4 and b = 2.

b. If A = B, then the corresponding entries of the two matrices are equal. That is, a + b = 3 and a - b = 1. Adding the two equations gives you 2a = 4 ⇒ a = 2. Then solving for b gives you b = 3 - 2 = 1.

c. If A = B, then the corresponding entries of the two matrices are equal. This implies a + b = 1, a - b = 3, c = 9, d = 0 and e = 7. Then let us solve the two equations:
a + b = 1
a - b = 3
Adding the two equations gives 2a = 4 which implies a = 2. Then substituting a = 2 in either of the equations a + b = 1 or a - b = 3 and solving for b gives us b = -1.
Therefore, if A = B, then a = 2, b = -1, c = 9, d = 0 and e = 7.

**Note:** Equality of matrices are defined only when the two matrices have the same size.

#### Exercise 3.2

1. Let A = [a b; c d] and B = [3 0; 1 4]. If A = B, then determine the values of a, b, c, d, e and f.

2. Let A = [2 a+b; 1 x-b] and B = [2 4; 1 2]. If A = B, then determine the values of a and b.

3. Let A = [a+b  2; 3  b+c] and B = [3 2; 4 5]. If A = B, then determine the values of a, b, c and d.

---

### 3.2.2 Additions of Matrices

#### Activity 3.3

The following two tables give the numbers of child and adult shoes of both sexes, male and female, of a certain company in two different shops: Shop A and Shop B.

**Number of Shoes in Shop A**
- Female Child: 42
- Male Child: 21
- Female Adult: 65
- Male Adult: 15

**Number of Shoes in Shop B**
- Female Child: 111
- Male Child: 154
- Female Adult: 19
- Male Adult: 28

Find the number of child and adult shoes of both sexes that the company has in both shops and present your solutions in a table form.

The following table gives the number of shoes of each type the company sells in a particular week from Shop A. Find the number of shoes of each type remaining in Shop A at the end of the week.

**Shop A Sales:**
- Female Child: 33
- Male Child: 20
- Female Adult: 90
- Male Adult: 120

In Activity 3.3, observe that:
a. To obtain the number of shoes of each type in both shops, you have added the corresponding entries in the two tables.
b. To obtain the number of shoes of each type in Shop A after a sell in the given week, you have subtracted the corresponding entries in the two tables in the proper order.

This leads us to define the first operation on matrices, addition of matrices.

Addition of two matrices is defined provided that the two matrices have the same size. Thus, the sum of the two matrices is a matrix of the same size as the two given matrices and its entries are obtained by adding the corresponding entries of the two matrices.

#### Definition 3.3

Let m and n be positive integers and A = (aᵢⱼ)ₘₓₙ and B = (bᵢⱼ)ₘₓₙ be matrices in R. Then:
a. The sum of A and B, denoted by A + B, is an m×n matrix obtained by adding the corresponding entries of A and B. That is, A + B = (aᵢⱼ + bᵢⱼ)ₘₓₙ
b. The subtraction of B from A, denoted by A - B, is an m×n matrix obtained by subtracting the entries of B from the corresponding entries of A. That is, A - B = (aᵢⱼ - bᵢⱼ)ₘₓₙ

Let A = [a b; c d] and B = [e f; g h]. Then:
i. A + B = [a+e  b+f; c+g  d+h]
ii. A - B = [a-e  b-f; c-g  d-h]

#### Example 1

Let A = [1 2; 3 4] and B = [0 -1; 1 2]. Then, compute A+B and A - B.

**Solution**

Both A and B are 2×2 matrices and hence both A+B and A-B are defined. Thus:

A + B = [1+0  2-1; 3+1  4+2] = [1  1; 4  6]

A - B = [1-0  2-(-1); 3-1  4-2] = [1  3; 2  2]

#### Example 2

Let 
```
A = [-1  2  5]
    [ 0  3  4]
    [ 1 -4  0]
```
and 
```
B = [ 2 -5 -1]
    [ 1  0  0]
    [ 2  3 -7]
```
Then compute A+B and A-B.

**Solution**

Both A and B are 3×3 matrices and hence both A+B and A-B are defined. Thus:

A + B = 
```
[-1+2   2-5   5-1]
[ 0+1   3+0   4+0]
[ 1+2  -4+3   0-7]
```
= 
```
[ 1  -3  4]
[ 1   3  4]
[ 3  -1 -7]
```

A - B = 
```
[-1-2   2-(-5)   5-(-1)]
[ 0-1   3-0       4-0   ]
[ 1-2  -4-3       0-(-7)]
```
= 
```
[-3   7   6]
[-1   3   4]
[-1  -7   7]
```

#### Activity 3.4

Let 
```
A = [1 2; 3 4], 
B = [2 0 1; 1 2 0],
O₂ₓ₂ = [0 0; 0 0],
O₂ₓ₃ = [0 0 0; 0 0 0]
```
Then find:
a. A + O₂ₓ₂
b. O₂ₓ₂ + A
c. B + O₂ₓ₃
d. O₂ₓ₃ + B

From Activity 3.4, observe that:
(i) A + O₂ₓ₂ = A = O₂ₓ₂ + A
(ii) B + O₂ₓ₃ = B = O₂ₓ₃ + B

Thus, matrices O₂ₓ₂ and O₂ₓ₃ are called the zero matrices of their respective order and do not change matrices on matrix addition.

#### Definition 3.4

Let m and n be positive integers. Consider the m×n matrix whose all entries are zero and we denote this matrix by Oₘₓₙ or simply by O if the order is clear. That is:

```
Oₘₓₙ = [0  0  ...  0]
        [0  0  ...  0]
        [ .  .       . ]
        [ .  .       . ]
        [ .  .       . ]
        [0  0  ...  0]ₘₓₙ
```

and it is called the zero matrix.

Observe that, for any m×n matrix A = (aᵢⱼ)ₘₓₙ, if O denotes the m×n zero matrix, then:
A + O = (aᵢⱼ + 0) = (aᵢⱼ) = (0 + aᵢⱼ) = O + A = A

Therefore, the zero matrix is the identity matrix for matrix addition.

#### Exercise 3.3

1. Let 
```
A = [1  2  1]
    [0  3 -1],
B = [1  0  3]
    [2  1  4],
C = [0  1 -3]
    [2  1  0]
```
Compute each of the following matrices:
a. A + B
b. A + C
c. A - B
d. A - C

2. Let 
```
A = [1  2]
    [0 -1],
B = [3  1]
    [-2 4]
```
Compute each of the following matrices:
a. A + B
b. A - B
c. B - A
d. A + O
e. O + B

---

### 3.2.3 Properties of Matrix Addition

#### Activity 3.5

Let 
```
A = [1 2; 3 4],
B = [-2 0; 1 3],
C = [3 1; 0 2]
```
Then find:
a. A + B
b. B + A
c. A + (B + C)
d. (A + B) + C

From Activity 3.5, you observed that:
i. A + B = B + A; that is, addition of the two given matrices is commutative.
ii. A + (B + C) = (A + B) + C; that is, addition of the given three matrices is associative.

In general, addition of matrices is both commutative and associative.

#### Commutative and Associative Properties of Matrix Addition

Let m and n be positive integers and A, B and C be m×n matrices in R. Then:
a. A + B = B + A (Addition of Matrices is Commutative)
b. A + (B + C) = (A + B) + C (Addition of Matrices is Associative)

#### Example

Let 
```
A = [1 2; 3 4],
B = [-2 0; 1 3],
C = [3 1; 0 2]
```
Then determine:
a. A + B
b. B + A
c. A + (B + C)
d. (A + B) + C

**Solution**

a. A + B = [1-2  2+0; 3+1  4+3] = [-1  2; 4  7]
b. B + A = [-2+1  0+2; 1+3  3+4] = [-1  2; 4  7]
c. B + C = [-2+3  0+1; 1+0  3+2] = [1  1; 1  5]
   A + (B + C) = [1+1  2+1; 3+1  4+5] = [2  3; 4  9]
d. (A + B) + C = [-1+3  2+1; 4+0  7+2] = [2  3; 4  9]

From (a) and (b), observe that A + B = B + A and from (c) and (d) observe also that A + (B + C) = (A + B) + C.

#### Exercise 3.4

Determine each of the following:
Let 
```
A = [1 2; 3 4],
B = [-2 0; 1 3],
C = [0 1; 2 5]
```
Compute:
a. A + B
b. B + A
c. (A + B) + C
d. A + (B + C)

---

### 3.2.4 Scalar Multiplication of Matrices

#### Activity 3.6

The following table gives the marks of Nigisti and Tadesse out of 50 in three subjects: English, Mathematics and Biology.

| Student | English | Mathematics | Biology |
|---------|---------|-------------|---------|
| Nigisti | 36 | 42 | 38 |
| Tadesse | 34 | 40 | 39 |

a. Convert the mark of each subject of the two students out of 100.
b. Convert the mark of each subject of the two students in the three subjects out of 25.

In Activity 3.6, to obtain the marks of both students in the three subjects, you have to multiply:
a. each mark of both students by 2 for the first question
b. each mark of both students by ½ for the second question

In the following definition, multiplying a matrix by a number or scalar is defined.

#### Definition 3.5

Let A = (aᵢⱼ)ₘₓₙ be a matrix in R and k ∈ R. The scalar multiple of A by k, denoted by kA, is the m×n matrix defined by:

```
kA = [ka₁₁  ka₁₂  ...  ka₁ₙ]
     [ka₂₁  ka₂₂  ...  ka₂ₙ]
     [ .     .        .   ]
     [ .     .        .   ]
     [ .     .        .   ]
     [kaₘ₁  kaₘ₂  ...  kaₘₙ]
```

That is, the entries of kA are obtained by multiplying each entry of A by k.

If A = [a b; c d] and k is a scalar, then kA = [ka  kb; kc  kd].

#### Example

Let A = [1 0; -3 2] and B = [-2 ½; 1 -3]. Then find 3A and -2B.

**Solution**

```
      [3×1   3×0]   [ 3   0]
3A = [3×-3  3×2] = [-9   6]

          [-2×-2   -2×½ ]   [ 4   -1]
-2B = [-2×1   -2×-3] = [-2    6]
```

#### Activity 3.7

Let 
```
A = [1 2; 3 4], 
B = [5 -1; 0 2],
O₂ₓ₂ = [0 0; 0 0]
```
Then find:
a. 3(A + B)
b. 3A + 3B
c. 2(3A)
d. (2×3)A
e. (2+3)A
f. 2A + 3A
g. 1A

From your solutions in Activity 3.7, observe that:
a. 3(A + B) = 3A + 3B
b. 2(3A) = (2×3)A
c. (2+3)A = 2A + 3A
d. 1A = A

These properties are true for any two matrices A and B of the same size and for any two scalars r and s.

#### Properties of Scalar Multiplication of Matrices

Let m and n be positive integers, A and B be m×n matrices and r, s ∈ R. Then:
a. r(A + B) = rA + rB (Scalar multiplication is distributive over additions of matrices)
b. (r + s)A = rA + sA (Scalar multiplications are distributive over additions of numbers)
c. (rs)A = r(sA)
d. 1A = A

#### Scalar Multiplication of Matrices and Subtraction of Matrices

If A and B are m×n matrices, then:
i. (-1)A = -A and A + (-A) = Oₘₓₙ = (-A) + A. This implies -A is additive inverse of A.
ii. The subtraction of two matrices A and B, A - B, is given by A - B = A + (-1)B.

#### Exercise 3.5

1. Let 
```
A = [1  2]
    [3 -1],
B = [4 -5]
    [0  2]
```
Then determine each of the following:
a. 4A
b. -3B
c. 2A + 3B
d. matrix C such that A + 2C = B

2. Let 
```
A = [ 2 -5]
    [ 3  1],
B = [-1  4]
    [ 2  0]
```
Then find:
a. 3A
b. -2B
c. 3A + 2B
d. matrix C such that A - 2C = B

3. Let 
```
A = [1 2 3],
B = [0  1]
    [-2 4],
C = [3 1]
```
Then determine 2A + (-3)B + ½C.

---

### 3.2.5 Multiplication of Matrices

#### Activity 3.8

Consider the following two matrices A and B, where A shows the type and quantity of certain types of food items that Paulos (P) and Meti (M) want to buy and matrix B shows the cost of the items in two supermarkets X and Y.

```
A = [2  4  5]   (P)
    [1  3  2]   (M)

B = [120  110]  (Cereal Packets)
    [ 55   60]  (Loaves of Bread)
    [ 73   35]  (Potatoes (Kg))
```

where C = Cereal Packets, L = Loaves of Bread and Po = Potatoes (Kg)

a. Calculate the shopping bill for items in each supermarket.
b. Where should they buy, in terms of shopping bill, at X or Y?

In Activity 3.8, to determine the shopping bill for items in each supermarket, you have to add the products of the respective entries of rows of matrix A with the columns of matrix B.

Using this idea, multiplications of matrices are defined as follows.

#### Definition 3.6

Let A = (aᵢⱼ)ₘₓₚ and B = (bₖⱼ)ₚₓₙ be matrices in R, where m, n and p are positive integers. The product of A and B, denoted by AB, is the m×n matrix AB = (cᵢⱼ)ₘₓₙ, where cᵢⱼ = aᵢ₁b₁ⱼ + aᵢ₂b₂ⱼ + ... + aᵢₚbₚⱼ, for i = 1,...,m and j = 1,...,n.

That is, the ij-th entry of the product AB is the sum of the product of the corresponding entries of the i-th row of A with the j-th column of B.

**Observations:**
1. If A = [a b] and B = [c; d], then AB = ac + bd, a real number.
2. If A = [a b; c d] and B = [e f; g h], then AB = [ae+bg  af+bh; ce+dg  cf+dh].
3. If A = [a b; c d] and B = [e f g; h i j], then AB = [ae+bh  af+bi  af+bj; ce+dh  cf+di  cf+dj].

Observe that, if A is an m×n matrix and B is an s×t matrix, then AB is defined only when n = s and the product will be an m×t matrix. That is, the product AB is defined only when the number of columns of the first matrix, A, is equal to the number of rows of the second matrix, B. In this case, we say that the two matrices are compatible for matrix multiplication.

#### Example 1

Determine AB for each of the following:
a. A = [1 2] and B = [3; 4]
b. A = [3; 4] and B = [1 2]
c. A = [1 2; 3 4] and B = [5 7; 6 8]
d. A = [1 3; 2 7] and B = [0 1 -2; 4 9 3]

**Solution**

a. A is a 1×2 matrix and B is a 2×1 matrix, then the product AB is a 1×1 matrix or a real number. That is, AB = [1 2][3; 4] = (1×3) + (2×4) = 3 + 8 = 11.

b. A is a 2×1 matrix and B is a 1×2 matrix, then the product AB is a 2×2. That is AB = [3; 4][1 2] = [3×1  3×2; 4×1  4×2] = [3 6; 4 8].

c. A is a 2×2 matrix and B is a 2×2 matrix, then the product AB is a 2×2. That is:
```
AB = [1 2; 3 4][5 7; 6 8] 
    = [1(5)+2(6)  1(7)+2(8); 
       3(5)+4(6)  3(7)+4(8)]
    = [17  23; 39  53]
```

d. A is a 2×2 matrix and B is a 2×3 matrix, then the product AB is defined and it is a 2×3 matrix, given by:
```
AB = [1 3; 2 7][0 1 -2; 4 9 3]
    = [1(0)+3(4)  1(1)+3(9)  1(-2)+3(3);
       2(0)+7(4)  2(1)+7(9)  2(-2)+7(3)]
    = [12  28  7; 28  65  17]
```

Note that, for matrices A and B in (d) of Example 1, the product BA is not defined because B is a 2×3 matrix and A is 2×2 matrix. That is, the number of columns of B is not equal to the number of rows of A.

#### Example 2

Consider the following two matrices A = [1 1] and B = [2; -1]. Then, AB = [1 1][2; -1] = [1(2)+1(-1)] = [1] and BA = [2; -1][1 1] = [2 2; -1 -1]. This implies both AB and BA are defined, but AB ≠ BA.

The example illustrates that, in general, multiplication of matrices is not commutative.

#### Example 3

Let A = (aᵢⱼ)₃ₓ₂ and B = (bᵢⱼ)ₘₓₙ. Find numbers m and n such that:
a. AB is defined
b. BA is defined
c. both AB and BA are defined

**Solution**

It is given that A is a 3 by 2 matrix.
a. The product AB is defined, if m = 2 and n can be any positive integer.
b. The product BA is defined, if n = 3 and m can be any positive integer.
c. Both products AB and BA are defined only when m = 2 and n = 3.

#### Exercise 3.6

Compute the product AB for each of the following cases:
1. a. A = [1 2] and B = [3; 4]
   b. A = [3; 4] and B = [1 2]
2. Let A = [1 2; 3 4] and B = [0 -1; 1 2]. Then compute AB.

---

### Properties of Multiplication of Matrices

#### Definition 3.7

Let A = (aᵢⱼ)ₘₓₙ be a matrix. Then A is said to be a square matrix, if the number of rows and the number of columns of A are equal, m = n. In this case, A is called a square matrix of order n.

#### Example 4

```
A = [1  2]
    [3  4] is a square matrix of order 2.

B = [1  0  2]
    [3 -1  0]
    [5  4  2] is a square matrix of order 3.
```

#### Activity 3.9

Let A = [1 2; 0 3] and B = [2 1 0; 4 1 2]. Then compute:
a. AI₂ and I₂A
b. BI₃ and I₃B

In Activity 3.9, you have observed that AI₂ = A = I₂A and BI₃ = B = I₃B. That is:
a. I₂ is the identity matrix for multiplication of matrices of order 2
b. I₃ is the identity matrix for multiplication of matrices of order 3

#### Definition 3.8

The square matrix of order n defined by:

```
Iₙ = [1 0 0 ... 0]
     [0 1 0 ... 0]
     [0 0 1 ... 0]
     [ .  .  .    .]
     [ .  .  .    .]
     [ .  .  .    .]
     [0 0 0 ... 1]ₙₓₙ
```

with 1 on the main diagonal and 0 otherwise is called identity matrix for multiplication. That is, for any square matrix A of order n, AIₙ = A = IₙA.

The identity matrix of order 2 is given by I₂ = [1 0; 0 1]. The identity matrix of order 3 is I₃ = [1 0 0; 0 1 0; 0 0 1] and so on.

#### Activity 3.10

Let 
```
A = [1 2; 3 4],
B = [2 0; 1 3],
C = [-1 2; 0 5]
```
Then compute:
a. A(B + C) and AB + AC
b. (B + C)A and BA + CA
c. A(BC) and (AB)C
d. 2(AB), A(2B) and (2A)B

In your responses in Activity 3.10, you have observed the following properties of matrix multiplication:
a. A(B + C) = AB + AC and (B + C)A = BA + CA (multiplication of matrices is distributive over addition of matrices)
b. A(BC) = (AB)C (matrix multiplication is associative)
c. 2(AB) = A(2B) = (2A)B

These properties are summarized as follows.

#### Properties of Matrix Multiplication

Let A, B and C be matrices in R and k ∈ R. Assume that the indicated operations on matrices are defined. Then:
a. A(B + C) = AB + AC (Multiplication of matrices is left distributive over addition)
b. (A + B)C = AC + BC (Multiplication of matrices is right distributive over addition)
c. A(BC) = (AB)C (Multiplication of matrices is associative)
d. k(AB) = (kA)B = A(kB)
e. If O is the zero matrix of appropriate size, then OA = O and AO = O

From your knowledge in the set of real numbers, recall that:
(i) If a and b are real numbers such that ab = 0, then either a = 0 or b = 0 (zero product rule)
(ii) If a, b and c are real numbers such that ab = ac and a ≠ 0, then b = c. That is, cancellation of multiplication works on the set of real numbers.

However, these properties are not true for multiplications of matrices in general as it can be seen in the following examples.

#### Example 5

If A = [1 2; 0 0] and B = [2 2; -1 -1], then find AB.

**Solution**

```
AB = [1×2+2×(-1)  1×2+2×(-1); 
      0×2+0×(-1)  0×2+0×(-1)]
   = [0  0; 0  0]
```

Observe that neither A nor B are the zero matrix, but AB = O.

#### Example 6

Let A = [1 1; 1 1], B = [1 2; 3 4] and C = [-1 -2; 3 4]. Then find both AB and AC.

**Solution**

AB = [4 6; 4 6] and AC = [2 2; 2 2]

Then observe that AB = AC, but B ≠ C.

#### Exercise 3.7

1. Let A = [1 2; 3 4], B = [-1 0; 2 3] and C = [0 1; 2 -1]. Then find:
a. AB
b. BA
c. (AB)C
d. A(BC)
e. I₂A
f. BI₂

2. Let A be a 2×3 matrix and B be an m×n matrix. Find m and n so that:
a. AB is defined
b. BA is defined
c. both AB and BA are defined

3. Let A = [-1 2; 3 -2] and B = [2 0; 1 4]. Then determine AB.

4. Let A = [1 1; 1 1], B = [2 1; 1 2]. Determine AB and AC.

---

### 3.2.6 Transpose of a Matrix and Its Properties

#### Activity 3.11

Let A = [1 2 3; 0 1 2] and B = [1 0; 2 1; 3 2]. Can you mention how B is obtained from A?

From your responses in Activity 3.11, you have observed that the rows of A are columns of B and the columns of A are rows of B. That is, B is obtained from A by changing rows of A to columns of B and columns of A to rows of B and this process is called transposing a matrix.

#### Definition 3.9

Let A = (aᵢⱼ)ₘₓₙ be an m×n matrix. Then the matrix B = (bⱼᵢ) where bⱼᵢ = aᵢⱼ for 1 ≤ j ≤ n and 1 ≤ i ≤ m is called the transpose of A and denoted by Aᵗ.

That is, if A = 
```
[a₁₁  a₁₂  ...  a₁ₙ]
[a₂₁  a₂₂  ...  a₂ₙ]
[ .    .        . ]
[ .    .        . ]
[ .    .        . ]
[aₘ₁  aₘ₂  ...  aₘₙ]
```

then Aᵗ = 
```
[a₁₁  a₂₁  ...  aₘ₁]
[a₁₂  a₂₂  ...  aₘ₂]
[ .    .        . ]
[ .    .        . ]
[ .    .        . ]
[a₁ₙ  a₂ₙ  ...  aₘₙ]
```

#### Example 1

Find the transpose of each of the following matrices.

a. A = [1 2; 3 1]
b. B = 
```
[1  0  2]
[-1 3  1]
```

**Solution**

a. Aᵗ = [1 3; 2 1]
b. Bᵗ = [1 -1; 0 3; 2 1]

#### Activity 3.12

Let 
```
A = [1 2; 3 0],
B = [-1 2; 4 5],
C = [0 -2; 1 3]
```
Then find:
a. (A + B)ᵗ and Aᵗ + Bᵗ
b. (3A)ᵗ and 3Aᵗ
c. (AB)ᵗ and BᵗAᵗ
d. (Aᵗ)ᵗ

From your response in Activity 3.12, observe that:
a. (A + B)ᵗ = Aᵗ + Bᵗ
b. (3A)ᵗ = 3Aᵗ
c. (AB)ᵗ = BᵗAᵗ
d. (Aᵗ)ᵗ = A

These properties of transposes of matrices are true in general and they are given as follows.

#### Properties of Transposes of Matrices

Let A and B be matrices such that the given operations are defined and k ∈ R. Then:
a. (A + B)ᵗ = Aᵗ + Bᵗ
b. (kA)ᵗ = kAᵗ
c. (AB)ᵗ = BᵗAᵗ
d. (Aᵗ)ᵗ = A

#### Example 2

Let A = [1 2; 3 1] and B = [0 1; 2 4]. Then, compute (A + B)ᵗ, 5Aᵗ, (AB)ᵗ and (Bᵗ)ᵗ.

**Solution**

Aᵗ = [1 3; 2 1] and Bᵗ = [0 2; 1 4]

a. (A + B)ᵗ = Aᵗ + Bᵗ = [1+0  3+2; 2+1  1+4] = [1 5; 3 5]

b. 5Aᵗ = [5×1  5×3; 5×2  5×1] = [5 15; 10 5]

c. (AB)ᵗ = BᵗAᵗ = [0 2; 1 4][1 3; 2 1] = [4 2; 9 7]

d. (Bᵗ)ᵗ = B = [0 1; 2 4]

#### Exercise 3.8

1. Let A = [2 1; 4 3] and B = [0 1; -1 2]. Then find:
a. Aᵗ
b. Bᵗ
c. (A + B)ᵗ
d. (AB)ᵗ
e. (Bᵗ)ᵗ
f. (4AB)ᵗ

2. Let A = [1 2 3] and B = 
```
[0  1]
[-1 2]
[ 4 5]
```
Then find:
a. Aᵗ
b. (A + B)ᵗ
c. Bᵗ
d. (AB)ᵗ
e. (Bᵗ)ᵗ
f. (2AB)ᵗ

---

## 3.3 Special Types of Matrices

### 3.3.1 Symmetric and Skew-Symmetric Matrices

#### Activity 3.13

Let A = [1 2; 2 5] and B = [0 -3; 3 0]. Find:
a. Aᵗ
b. Bᵗ
c. B + Bᵗ

From your responses in Activity 3.13, observe that:
a. Aᵗ = A
b. Bᵗ = -B
c. B + Bᵗ = O

#### Definition 3.10

Let A = (aᵢⱼ)ₙₓₙ be a square matrix of order n. Then A is said to be:
a. a symmetric matrix, if A = Aᵗ. That is, A is a symmetric matrix, if aᵢⱼ = aⱼᵢ for 1 ≤ i,j ≤ n.
b. a skew-symmetric matrix, if A = -Aᵗ. That is, A is a skew symmetric matrix if A + Aᵗ = Oₙₓₙ. Equivalently A is skew symmetric matrix if aᵢⱼ = -aⱼᵢ for 1 ≤ i,j ≤ n.

**Note:** If matrix A = (aᵢⱼ)ₙₓₙ is skew symmetric matrix, then aᵢᵢ = 0 for i = 1,2,...,n.

#### Example 1

Identify the following matrices as symmetric, skew-symmetric or neither.

a. Iₙ, for a positive integer n, A = [2 3; 3 5] and B = [0 -3 0; 3 0 4; 0 -4 0], C = [1 -2 1; 2 3 4]

**Solution**

a. Iₙᵗ = Iₙ and hence Iₙ is a symmetric matrix.

b. A = [2 3; 3 5] and Aᵗ = [2 3; 3 5], hence A is a symmetric matrix.

c. B = 
```
[ 0 -3  0]
[ 3  0  4]
[ 0 -4  0]
```
and Bᵗ = 
```
[ 0  3  0]
[-3  0 -4]
[ 0  4  0]
```
= -B. This implies B is a skew-symmetric matrix.

d. C = [1 -2 1; 2 3 4]. This implies C ≠ Cᵗ and C ≠ -C, hence C is neither a symmetric matrix nor a skew-symmetric matrix.

#### Example 2

Consider the matrix A = 
```
[2  8  10]
[4  5  6]
[7  8  9]
```
Then find:
a. matrix B = ½(A + Aᵗ)
b. matrix C = ½(A - Aᵗ)
c. B + C

**Solution**

The transpose of A is Aᵗ = 
```
[2  4  7]
[8  5  8]
[10 6  9]
```

a. matrix B = ½(A + Aᵗ) = 
```
[2  6  8.5]
[6  5  7]
[8.5 7  9]
```
is a symmetric matrix.

b. matrix C = ½(A - Aᵗ) = 
```
[ 0   2   1.5]
[-2   0  -1]
[-1.5 1   0]
```
is a skew-symmetric matrix.

Observe that B + C = ½(A + Aᵗ) + ½(A - Aᵗ) = A, hence A is written as sum of a symmetric matrix and a skew-symmetric matrix.

#### Exercise 3.9

1. Identify each of the following matrices as symmetric, skew-symmetric or neither:
a. [1 2; 3 4]
b. [0 -1; 1 0]
c. [2 0; 0 2]
d. [1 0 2; 0 3 1; 2 1 4]
e. [0 -1 2; 1 0 -3; -2 3 0]

2. Let A = [2 5; 4 3]. Find a symmetric matrix B and a skew-symmetric matrix C such that A = B + C.

3. Let A = [a b c; 0 d e; 0 0 f]. Find the values a, b, c so that A is a symmetric matrix.

---

### 3.3.2 Diagonal Matrices and Triangular Matrices

#### Definition 3.11

Let A = (aᵢⱼ)ₙₓₙ be a square matrix of order n.
a. The elements a₁₁, a₂₂, ..., aₙₙ are called diagonal elements of A.
b. The sum of the diagonal elements of A is called the trace of A and denoted by tr(A). That is, tr(A) = a₁₁ + a₂₂ + ... + aₙₙ.
c. A is called a diagonal matrix if aᵢⱼ = 0 for all i ≠ j. That is, A is a diagonal matrix, if:
```
A = [a₁₁   0   ...   0]
    [ 0   a₂₂ ...   0]
    [ .    .       . ]
    [ .    .       . ]
    [ .    .       . ]
    [ 0    0   ... aₙₙ]
```

d. A is called a scalar matrix if A is a diagonal matrix and aᵢᵢ = α for some α ∈ R and for i = 1,2,...,n. That is, A is scalar matrix, if:
```
A = [α 0 ... 0]
    [0 α ... 0]
    [ . .    .]
    [ . .    .]
    [ . .    .]
    [0 0 ... α] for some α ∈ R.
```

#### Definition 3.12

Let A = (aᵢⱼ)ₙₓₙ be a square matrix of order n.

a. If aᵢⱼ = 0 for all i > j, then A is called an upper triangular matrix. That is, A is said to be an upper triangular matrix if:
```
A = [a₁₁ a₁₂ ... a₁ₙ]
    [ 0  a₂₂ ... a₂ₙ]
    [ .   .       . ]
    [ .   .       . ]
    [ .   .       . ]
    [ 0   0  ... aₙₙ]
```

b. A is called a strictly upper triangular matrix if aᵢⱼ = 0 for all i ≥ j. That is, A is said to be a strictly upper triangular matrix if:
```
A = [0 a₁₂ ... a₁ₙ]
    [0  0  ... a₂ₙ]
    [ .  .       . ]
    [ .  .       . ]
    [ .  .       . ]
    [0  0  ...  0 ]
```

c. A is called a lower triangular matrix if aᵢⱼ = 0 for all i < j. That is, A is said to be a lower triangular matrix if:
```
A = [a₁₁   0  ...  0 ]
    [a₂₁  a₂₂ ...  0 ]
    [ .    .       . ]
    [ .    .       . ]
    [ .    .       . ]
    [aₙ₁  aₙ₂ ... aₙₙ]
```

d. A is called a strictly lower triangular matrix if aᵢⱼ = 0 for all i ≤ j. That is, A is said to be a strictly lower triangular matrix if:
```
A = [ 0    0  ...  0 ]
    [a₂₁   0  ...  0 ]
    [ .    .       . ]
    [ .    .       . ]
    [ .    .       . ]
    [aₙ₁  aₙ₂ ...  0 ]
```

#### Example

Identify each of the following matrices as diagonal, scalar or triangular matrices.

a. A = 
```
[1  2  5]
[0  1 -2]
[0  0  3]
```
b. B = 
```
[0  0]
[1  0]
```
c. C = 
```
[-2  0  0]
[ 0 -2  0]
[ 0  0 -2]
```

**Solution**

a. A is an upper triangular matrix, because all the entries below the main diagonal are 0.

b. B is a strictly lower triangular matrix, because all the entries below the main diagonal and on the main diagonal are 0.

c. C is both a scalar and a diagonal matrix, because all the entries below and above the main diagonals are 0 and the entries in the main diagonal are all -2.

#### Exercise 3.10

1. Identify each of the following matrices as diagonal, scalar or triangular matrices:
a. [1 0; 2 3]
b. [2 0 0; 0 2 0; 0 0 2]
c. [1 2 3; 0 1 4; 0 0 1]
d. [0 0 0; 1 0 0; 2 3 0]

2. Find a, b, c such that A is an upper triangular matrix where:
```
A = [a  b  c]
    [0  2  1]
    [0  0  3]
```

---

## 3.4 Elementary Row Operations on Matrices

### Activity 3.14

Consider the system:
x + y = 1
x - 2y = -11

a. Multiply the first equation by 2 and add the result to the second equation.
b. Multiply the result in (a) by -1/2 and solve for x.

The operations you have performed in Activity 3.14 are operations on the rows of the matrix of the given system:

```
[1   1   1]
[1  -2 -11]
```

A familiar method of solving a set of linear equations is by elimination of the unknowns. We shall systematize this method by working only on the numbers involved in the given set of linear equations.

### Definition 3.13

Let m and n be positive integers and A be an m×n matrix with entries in R. An elementary row operation on A is any one of the following operations:

**Swapping:** Interchanging two rows of matrix A. Swapping of the i-th row and the j-th row of A is denoted by Rᵢ ↔ Rⱼ.

**Scaling:** Multiplying a row of A by a non-zero constant. Multiplying the i-th row by a non-zero scalar k is denoted by Rᵢ → kRᵢ.

**Pivoting:** Adding a non-zero constant multiple of one row of A onto another row of A. Adding k times the i-th row of A onto the j-th row is denoted by Rⱼ → Rⱼ + kRᵢ.

#### Example 1

Let 
```
A = [1  4]
    [2  5]
```
Apply each of the following elementary row operations one after the other on A and obtain a new matrix:
a. R₁ ↔ R₂
b. R₂ → R₂ - 4R₁
c. R₂ → (1/5)R₂

**Solution**

a. A₁ = [2  5; 1  4] (Interchanging R₁ by R₂)
b. A₂ = [2  5; 1-4(2)  4-4(5)] = [2  5; -7  -16] (Replacing R₂ by R₂ - 4R₁)
c. A₃ = [2  5; -7/5  -16/5] (Multiplying R₂ by 1/5)

The matrix A₃ is an upper triangular matrix.

#### Example 2

Let 
```
A = [1  3  2]
    [4  6  5]
    [2  4  3]
```
Apply appropriate elementary row operations to change A into an upper triangular matrix.

**Solution**

```
[1   3   2]
[4   6   5]  R₂ → R₂ - 4R₁
[2   4   3]  R₃ → R₃ - 2R₁

= [1   3   2]
  [0  -6  -3]
  [0  -2  -1]

  R₃ → R₃ + (-1/3)R₂

= [1   3   2]
  [0  -6  -3]
  [0   0   0]
```

#### Definition 3.14

The inverse operation of an elementary row operation is an elementary row operation of the same type. That is:
- The inverse of the elementary row operation Rᵢ ↔ Rⱼ is Rⱼ ↔ Rᵢ, which is again an elementary row operation.
- For a non-zero real number k, the inverse of the elementary row operation Rᵢ → kRᵢ is Rᵢ → (1/k)Rᵢ, which is again an elementary row operation.
- For a scalar k, the inverse of the elementary row operation Rⱼ → Rⱼ + kRᵢ is Rⱼ → Rⱼ - kRᵢ, which is also an elementary row operation.

#### Example 3

Let A = [1 2; 3 4]. Then, find the inverse of the following elementary row operations:
a. R₁ ↔ R₂
b. R₂ → R₂ - R₁
c. R₂ → (1/3)R₂

**Solution**

Let us apply the inverse elementary row operations on the matrix:
a. R₂ ↔ R₁ is the inverse of R₁ ↔ R₂
b. R₂ → R₂ + R₁ is the inverse of R₂ → R₂ - R₁
c. R₂ → 3R₂ is the inverse of R₂ → (1/3)R₂

**Elementary Column Operations**

There are also column operations on matrices:
- Swapping: Interchanging two columns of a matrix
- Scaling: Multiplying a column of a matrix by a non-zero constant
- Pivoting: Adding a constant multiple of one column of a matrix onto another column

However, in this textbook, we use only elementary row operations in solving system of linear equations.

#### Exercise 3.11

1. Let A = [1 3 2; 2 1 4]. Find the matrix obtained from A by applying the following elementary row operations:
a. R₁ ↔ R₂
b. R₂ → R₂ - 4R₁
c. R₁ → (1/2)R₁

2. Let B = [1 2; 3 4]. Determine the inverse of each of the following elementary row operations on B:
a. R₁ ↔ R₂
b. R₂ → R₂ + 2R₁
c. R₁ → 4R₂

---

### Row Echelon Form (REF) of a Matrix

#### Definition 3.15

Given two matrices A and B of the same size, A and B are said to be row-equivalent if one of the matrices is obtained from the other by successive applications of a finite number of elementary row operations and this relation is denoted by A ≅ B.

#### Example 4

Let A = [1 3; 2 1]. Find three matrices that are row equivalent to A.

**Solution**

```
A₁ = [2 1; 1 3] (R₁ ↔ R₂)
A₂ = [1 3; 0 -5] (R₂ → R₂ - 2R₁)
A₃ = [1 3; 0 1] (R₂ → (-1/5)R₂)
```

Then the matrices A₁, A₂, and A₃ are all row equivalent to matrix A.

**Note:** Row equivalence of matrices helps us to transform a given matrix to a matrix with greater number of zeros than the original matrix and this simplifies operations on matrices.

#### Definition 3.16 (Row Echelon Form (REF))

An m×n matrix A is said to be in its Row Echelon Form (REF) if it satisfies the following:
a. All rows consisting entirely zeros, if any, are at the bottom of the matrix.
b. If Rᵢ and Rᵢ₊₁ are any two successive non-zero rows of A, the number of zeros preceding the leading element of the (i+1)-th row is greater than the number of such zeros in the i-th row.

**Note:** By a zero row we mean that a row in which all the entries of the row are zero.

The matrix A = [1 2 -3 4; 0 3 1 4; 0 0 2 5] is in Row Echelon Form.

#### Example 5

Determine if each of the following matrices are in Row Echelon Form:

a. 
```
[1  2  3]
[0  1 -2]
[0  0  5]
```
b. 
```
[2  0  3]
[0  0  0]
[0  1 -4]
```
c. 
```
[1  2  3]
[0  0  0]
[0  0  1]
```
d. 
```
[1  2  3]
[0  0  1]
[0  1  0]
```

**Solution**

a. The matrix is in Row Echelon Form.
b. The matrix is not in Row Echelon Form, because it has a zero row (the second row), but this zero row is not at the bottom as the third row is not a zero row.
c. The matrix is not in Row Echelon Form, because the leading entry of the third row is not to the right of the leading entry of the second row.
d. The matrix is not in Row Echelon Form, because the number of zeros preceding the leading entry in the third row is one, which is less than the number of zeros preceding the leading entry in the second row (which is two).

#### Exercise 3.12

Determine if each of the following matrices is in Row Echelon Form:
1. [1 2; 0 3]
2. [0 1 2; 0 0 1; 1 0 0]
3. [1 2 3 4; 0 0 1 2; 0 0 0 0]
4. [2 0 1; 0 3 2; 0 0 4]

---

### Reduced Row Echelon Form (RREF) of a Matrix

#### Activity 3.15

Consider the matrices:
```
A = [1 2 3; 0 0 0; 0 0 1]
B = [1 0 0; 0 1 0; 1 1 1]
```

Give your reason why matrices A and B are not in Row Echelon Form.
Apply the elementary row operation R₁ → R₃ on A and obtain matrix C.
Apply the elementary row operations R₃ → R₃ - R₁ and R₃ → R₃ - 2R₂ respectively on matrix B and obtain matrix D.
What is the relationship between matrices C and D in (b) and (c) above respectively?

The matrices you have obtained in your responses in Activity 3.15 are matrices in Row Echelon Form. Thus, any matrix is row equivalent to a matrix in Row Echelon Form.

#### Example 6

Reduce the matrix A = [1 1; -2 -4] into a matrix in Row Echelon Form.

**Solution**

A is not in REF, because the number of zeros preceding the first non-zero element in the second row is zero which is the same as the number of zeros preceding the first non-zero element in the first row.

Therefore, to reduce A into a matrix in REF, choose appropriate elementary row operations.

```
[1   1]  R₂ → R₂ + 2R₁
[-2 -4]

= [1  1]
  [0 -2]
```

The matrix B = [1 1; 0 -2] is in Row Echelon Form (REF), obtained from A by applying the elementary row operation R₂ → R₂ + 2R₁.

#### Definition 3.17

Given positive integers m and n, an m×n matrix A is said to be in Reduced Row Echelon Form (RREF) if A is in Row Echelon Form (REF) and the leading element in each non-zero row is 1 and it is the only non-zero number in its column.

#### Example 7

Determine which of the following matrices are in Reduced Row Echelon Form:

a. 
```
[1  2  0]
[0  0  1]
[0  0  0]
```
b. 
```
[1  0  0]
[0  1  0]
[0  0  1]
```
c. 
```
[0  1  0]
[1  0  0]
[0  0  1]
```
d. 
```
[1  0  5]
[0  1  2]
```

**Solution**

The matrices I₃, B and D are in RREF, because all three matrices satisfy the requirements of the definition of a matrix in RREF.

a. Matrix A is not in RREF, because the leading element of the third row of A (which is 1) is not the only non-zero element in its column (there is a 2 above it).

b. Matrix C is not in RREF, because the number of zeros preceding the leading element of the second row is one, and the number of zeros preceding the leading element of the third row is also one.

#### Activity 3.16

Consider the matrices A = [1 0 2; 0 1 0] and C = [1 0 0; 0 1 0].

Apply the elementary row operation R₁ → R₁ - 2R₃ on matrix A.
Apply the elementary row operation R₃ → R₃ - R₁ on matrix C.

In your responses for (a) and (b) of Activity 3.16, observe that the matrices obtained after the proposed elementary operations are in Reduced Row Echelon Form (RREF).

#### Example 8

Reduce the matrix A = [1 2 3; 0 0 2; 0 0 1] into a matrix in Reduced Row Echelon Form.

**Solution**

A is not in RREF, because:
a. the first non-zero element in the third row is 1, which is good, but it's not the only non-zero element in its column (there's a 2 above it in row 1)
b. the second row has a leading 2 that should be normalized to 1

Therefore, to reduce A into a matrix in RREF, choose appropriate elementary row operations.

```
[1  2  3]  R₂ → (1/2)R₂
[0  0  2]
[0  0  1]

= [1  2  3]
  [0  0  1]
  [0  0  1]

  R₁ → R₁ - 3R₂
  R₃ → R₃ - R₂

= [1  2  0]
  [0  0  1]
  [0  0  0]
```

The last matrix, B = [1 2 0; 0 0 1; 0 0 0] is in RREF.

#### Exercise 3.13

1. Reduce each of the following matrices into Row Echelon Form:
a. [1 2; 3 4]
b. [1 2 3; 2 4 6; 1 1 1]
c. [0 1 2; 1 2 3; 2 3 4]

2. Reduce each of the following matrices into Reduced Row Echelon Form:
a. [1 2; 3 4]
b. [1 2 3; 2 4 6; 1 1 1]
c. [1 2 3 4; 2 3 4 5; 3 4 5 6]

---

## 3.5 Systems of Linear Equations with Two or Three Variables

One of the main reasons of studying matrices is to solve systems of linear equations. In this section, you will learn techniques or methods of solving systems of linear equations.

### Activity 3.17

The sum of two natural numbers is 30 and the second number is 4 more than the first number. Find the numbers.

In your responses in Activity 3.17, if you let the first number be x and the second number be y, then you need to find a common solution to the two equations x + y = 30 and y = x + 4.

The two equations x + y = 30 and y = x + 4 are called linear equations and the two equations together form a set of linear equations called a system of linear equations.

### Definition 3.18

An equation of the form a₁x₁ + a₂x₂ + ... + aₙxₙ = b, where a₁, a₂, ..., aₙ, b are real numbers, is called a linear equation in the n variables x₁, x₂, ..., xₙ. The variables x₁, x₂, ..., xₙ are also called unknowns.

#### Example 1

a. The equation 2x - y = 5 is a linear equation in two variables, x and y.
b. The equation 2x + 3y + 4z = 5 is a linear equation in three variables, x, y and z.
c. The equation x₁ + πx₂ + 4x₃ + x₄ + x₅ = 0 is a linear equation in five variables, x₁, x₂, x₃, x₄ and x₅.

**Remark:** A linear equation does not involve product of variables, quotient of variables or roots of variables and all the variables that occur in the equation are only to power one.

#### Example 2

Give your reasons why each of the following equations is not a linear equation:
a. 3x² + 5y = 7
b. xy - 2z + w = 1
c. x - √y + 4z = 0

**Solution**

a. The equation 3x² + 5y = 7 is not a linear equation, because it involves x².
b. The equation xy - 2z + w = 1 is not a linear equation, because it involves xy.
c. The equation x - √y + 4z = 0 is not a linear equation, because it involves √y.

### Activity 3.18

Consider the equation x - y = 5.
a. Substitute x = 2 and y = 3 and determine the result.
b. Substitute x = 6 and y = 1 and determine the result.

In your responses in Activity 3.18:
a. The ordered pair (2, 3) gives you a false statement.
b. The ordered pair (6, 1) gives you a true statement.

Thus, the ordered pair (6, 1) is a solution to the given equation, whereas the ordered pair (2, 3) is not a solution.

### Definition 3.19

An n-tuple of numbers (c₁, c₂, ..., cₙ) is said to be a solution to a linear equation a₁x₁ + a₂x₂ + ... + aₙxₙ = b if the equation is satisfied when we substitute x₁ = c₁, x₂ = c₂, ..., xₙ = cₙ in the equation, that is, if a₁c₁ + a₂c₂ + ... + aₙcₙ = b.

The set of all possible solutions of a given linear equation is called the solution set or the general solution set of the given linear equation.

#### Example 3

Consider the linear equation 2x + y = 4.
a. Which of the ordered pairs (2, 0), (0, 2) and (1, 2) are solutions of the given linear equation?
b. Find the solution set of the given linear equation.

**Solution**

a. For x = 2 and y = 0, we have (2×2) + 0 = 4 + 0 = 4. This implies, the ordered pair (2, 0) is a solution to the given linear equation.
   For x = 0 and y = 2, we have (2×0) + 2 = 0 + 2 ≠ 4. This implies, the ordered pair (0, 2) is not a solution to the given linear equation.
   For x = 1 and y = 2, you have (2×1) + 2 = 2 + 2 = 4. This implies, the ordered pair (1, 2) is a solution to the given linear equation.

b. From the given equation if you solve for y in terms of x gives you 2x + y = 4 ⇒ y = -2x + 4. This implies, the solution set of the given linear equation is the set of all ordered pairs of numbers (x, y) such that 2x + y = 4 and y = 4 - 2x.

Therefore, the solution set of the given equation is {(x, 4 - 2x): x ∈ R}

#### Exercise 3.14

1. Give your reasons why each of the following equations is not a linear equation:
   a. x + 5y² = 7
   b. xyz + w = 0
   c. x - √y + 4z = 0

2. Consider the linear equation x - 3y = 5.
   a. Which of the ordered pairs (1, 1), (2, -1) and (5, 0) are solutions of the given linear equation?
   b. Find the solution set of the given linear equation.

---

### Augmented Matrix of a System of Linear Equations

The main objective of this section is to find the set of all common solutions of a finite number of linear equations having the same variables.

### Definition 3.20

Let aᵢⱼ, bᵢ ∈ R, for i = 1, 2, ..., m and j = 1, 2, ..., n. A finite set of linear equations:
a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ = b₁
a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ = b₂
...
aₘ₁x₁ + aₘ₂x₂ + ... + aₘₙxₙ = bₘ

is called a system of m linear equations in n variables; x₁, x₂, ..., xₙ.

### Activity 3.19

Let A = [1 2; 3 4] and B = [x; y]. Find AX.
Find the values of x and y such that AX = B.

In Activity 3.19 part (b), to find the values of x and y, you have to find a solution for the system:
x + 2y = 1
3x + 4y = -4

which is a system of two linear equations in two variables. Then, the expression AX = B is called a matrix form of the system.

**Remark:** Consider the following system of linear equations:
a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ = b₁
a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ = b₂
...
aₘ₁x₁ + aₘ₂x₂ + ... + aₘₙxₙ = bₘ

The system can be written in matrix form as AX = B, where:
A = [a₁₁ a₁₂ ... a₁ₙ; a₂₁ a₂₂ ... a₂ₙ; ...; aₘ₁ aₘ₂ ... aₘₙ] is called the coefficient matrix of the system
X = [x₁; x₂; ...; xₙ]
B = [b₁; b₂; ...; bₘ]

The matrix (A|B) = 
```
[a₁₁ a₁₂ ... a₁ₙ | b₁]
[a₂₁ a₂₂ ... a₂ₙ | b₂]
[ .   .       .  | . ]
[ .   .       .  | . ]
[ .   .       .  | . ]
[aₘ₁ aₘ₂ ... aₘₙ | bₘ]
```
obtained by adjoining B to A is called the augmented matrix of the system. The coefficient matrix and the augmented matrix of a given system play important roles in determining the solution set of the given system.

#### Example 4

Find the coefficient and the augmented matrix of the system:
x + y + z = 8
x + 2y = 5
y + 3z = 9

**Solution**

The system can be rewritten in matrix form as:
```
[1 1 1][x]   [8]
[1 2 0][y] = [5]
[0 1 3][z]   [9]
```

The matrix [1 1 1; 1 2 0; 0 1 3] is the coefficient matrix of the system and the matrix:
```
[1 1 1 | 8]
[1 2 0 | 5]
[0 1 3 | 9]
```
is the augmented matrix of the given system.

#### Exercise 3.15

Find the coefficient matrix and the augmented matrix of each of the following systems of linear equations:

1. 
```
x + y + z = 1
2x + y = 5
```
2. 
```
x - y - z = 0
x - 2y + 3z = 1
2x + y - z = 2
```

---

### Solution Set of a System of Linear Equations (1)

### Definition 3.21

Consider a system AX = B of m linear equations in n variables. An ordered n-tuple of numbers C = (c₁, c₂, ..., cₙ) is a solution to the system AX = B if AC = B. The set of all solutions of AX = B is called the solution set of the given system.

#### Example 5

Solve the following system of linear equations:
x + 2y = 1
y + 3z = 0

**Solution**

Solving for y in terms of z from the second equation gives us y = -3z.
Substituting y = -3z in the first equation, x + 2y = 1, and solving for x in terms of z gives us x = 1 - 2y = 1 - 2(-3z) = 1 + 6z.

Therefore, the solution set of the given system is {(1 + 6z, -3z, z): z ∈ R}.

If we let z = 0, then x = 1 + 6(0) = 1 and y = -3(0) = 0.
Therefore, (1, 0, 0) is a particular solution to the given system.

### Activity 3.20

Consider the system:
x - y = 1
-2x + 2y = 0

Multiply the first equation by -2, add the two equations and obtain the result.

In your responses to the question in Activity 3.20, you have obtained the expression 0 = -2, which is false and hence the given system does not have a solution.

### Definition 3.22

A system of linear equations that has at least one solution is called a consistent system and a system that does not have a solution is called an inconsistent system.

#### Example 6

Determine if the following system of linear equations is consistent:
x - 2y = 1
-x + 3y = 0

**Solution**

Adding the two equations gives us y = 1.
Then, from the first equation, x - 2(1) = 1 ⇒ x = 3.

This implies (3, 1) is a solution to the given system, hence the given system is a consistent system.

#### Example 7

Determine if the following system of linear equations is consistent:
x - y = 1
-2x + 2y = 0

**Solution**

Multiplying the first equation by 2 and adding the two equations gives us 0 = 2, which is always false. Therefore, the given system has no solution and hence the system is an inconsistent system.

#### Exercise 3.16

Determine if each of the following systems of linear equations is consistent or inconsistent:

1. 
```
x + y = 1
2x - y = 2
```
2. 
```
-x + 2y = 5
2x - 4y = -4
```

---

### Solution Set of a System of Linear Equations (2)

### Activity 3.21

Find the point(s) of intersections of each of the following pairs of lines (if there is any):

a. l₁: x + y = 2 and l₂: x - y = 0
b. s₁: x - y = 2 and s₂: -2x + 2y = 6
c. t₁: x - y = 1 and t₂: -2x + 2y = -2

From your responses in Activity 3.21, observe that:
a. l₁ and l₂ intersect exactly at one point
b. s₁ and s₂ do not intersect and they are two parallel lines
c. t₁ and t₂ are identical lines

To find out all the possibilities regarding the solutions of systems of linear equations, consider the case when you have a system of two linear equations in two variables.

Consider a general system of two linear equations in two variables:
a₁x + b₁y = c₁ (a₁, b₁ not both zero)
a₂x + b₂y = c₂ (a₂, b₂ not both zero)

These are equations of two lines, say l₁: a₁x + b₁y = c₁ and l₂: a₂x + b₂y = c₂.

There are only three possibilities about the intersection points of these two lines:

a. The lines l₁ and l₂ intersect exactly at one point and this point of intersection is the only solution of the given system of linear equations.

b. l₁ and l₂ are two parallel lines and they do not intersect. In this case the given system of linear equations has no solution.

c. The lines l₁ and l₂ coincide (or are identical). In this case, all the ordered pairs of numbers satisfying one of the two equations of the given system on one of the two lines are solutions of the given system and hence the system has infinitely many solutions.

Thus, a given system of linear equations has either:
- One solution (unique solution)
- No solution (inconsistent)
- Infinitely many solutions

A consistent system has either only one solution or infinitely many solutions.

#### Example 8

Determine if each one of the following systems of linear equations has only one solution, no solution or infinitely many solutions:

1. 
```
x + 2y = 3
x - y = 0
```

2. 
```
x + y = 1
2x + 2y = 4
```

3. 
```
x - y = 3
-2x + 2y = 6
```

**Solution**

1. Adding the two equations gives us 2x = 3 ⇒ x = 1.5. Then, solving for y from the equation x - y = 0 ⇒ y = x = 1.5. Therefore, (1.5, 1.5) is the only solution of the given system.

2. Multiplying the first equation by 2 and subtracting it from the second equation gives us 0 = 2. This implies, the two equations are inconsistent and the system has no solution.

3. Multiplying the first equation by -2 and adding to the second equation gives 0 = 0. This implies the two equations are identical and the system has infinitely many solutions.

#### Exercise 3.17

Determine if each one of the following systems of linear equations has unique solution, no solution or infinitely many solutions:

1. 
```
x - 2y = 1
x + y = 1
```
2. 
```
-2x + 4y = -2
x + y = 5
```

---

### Homogeneous Systems of Linear Equations

### Activity 3.22

Consider the system:
x + y = 0
x - 2y = 0

Write the given system in matrix form, AX = B.
What type of matrix is B?

The matrix B in your responses of Activity 3.22 is the zero matrix and the system is called a homogeneous system.

### Definition 3.23

Consider a system of linear equations:
a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ = b₁
a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ = b₂
...
aₘ₁x₁ + aₘ₂x₂ + ... + aₘₙxₙ = bₘ

If b₁ = b₂ = ... = bₘ = 0, then the system is called homogeneous, otherwise, it is called a non-homogeneous system.

**Note:** A homogeneous system is a system of the form AX = O.

#### Example 9

Write the following system in matrix form:
x + y + z = 0
2y + z = 0
x + 3z = 0

**Solution**

The system in matrix form is:
```
[1 1 1][x]   [0]
[0 2 1][y] = [0]
[1 0 3][z]   [0]
```

and the system is a homogeneous system.

**Remark:** Consider a homogeneous system of linear equations:
a₁₁x₁ + a₁₂x₂ + ... + a₁ₙxₙ = 0
a₂₁x₁ + a₂₂x₂ + ... + a₂ₙxₙ = 0
...
aₘ₁x₁ + aₘ₂x₂ + ... + aₘₙxₙ = 0

a. The given system has always a solution; namely, x₁ = x₂ = ... = xₙ = 0. This solution is called the trivial solution of the homogeneous system.
b. A solution (x₁, x₂, ..., xₙ)ᵗ of the given system for which xᵢ ≠ 0, for some i = 1,2,...,n, is called a non-trivial solution of the given homogeneous system.

#### Example 10

Determine the coefficient matrix and the augmented matrix of the following system of linear equations:
x + 2y + z = 0
y + z = 0
x + y = 0

**Solution**

The given system in matrix form is:
```
[1 2 1][x]   [0]
[0 1 1][y] = [0]
[1 1 0][z]   [0]
```

The coefficient matrix of the system is:
```
A = [1 2 1]
    [0 1 1]
    [1 1 0]
```

and the augmented matrix of the system is:
```
[1 2 1 | 0]
[0 1 1 | 0]
[1 1 0 | 0]
```

#### Exercise 3.18

Find the coefficient matrix and the augmented matrix of each of the following systems of linear equations:

1. 
```
x + y - z = 0
x - y + z = 0
```
2. 
```
2x + 3y - z = 0
2x - 3y = 0
x + y - z = 0
```

---

## 3.6 Solutions of Systems of Linear Equations

In this section, you will learn how to solve systems of linear equations that were introduced in Section 3.5, using the concept of elementary row operations.

### Activity 3.23

Solve each of the following systems of Linear Equations:
a. x + y = 1, y = 2
b. -x + y = 3, x + y = 1

From your solutions in Activity 3.23, observe that the two systems have the same solution and such systems are called equivalent systems.

### Definition 3.24

Two systems of linear equations over R, the set of real numbers, with the same number of unknowns are said to be equivalent if every solution of one system is a solution of the other system.

#### Example 1

Solve the following system of linear equations:
x + y = 1
x - y = 3

**Solution**

The augmented matrix of the system is [1 1 | 1; 1 -1 | 3].

Then, reduce this matrix into a matrix in Row Echelon Form using appropriate elementary row operations as follows:

```
[1  1 | 1]  R₂ → R₂ - R₁
[1 -1 | 3]

= [1  1 | 1]
  [0 -2 | 2]
```

Thus, the system with augmented matrix [1 1 | 1; 0 -2 | 2] has the same solution set as the original system.

Then, solve the system:
x + y = 1
-2y = 2

From the second equation, we get y = -1 and substituting this in the first equation gives us that x = 1 - (-1) = 2.

Therefore, the solution set of the given system is {(2, -1)}.

**Note:** A system of linear equations that is equivalent to a given system AX = B can be obtained by applying appropriate elementary row operations on the augmented matrix (A|B).

Consider a system AX = B:
a. If the matrices (A|B) and (C|D) are row equivalent augmented matrices of two systems, then the systems AX = B and CX = D have the same solutions.
b. The method of solving the system AX = B by reducing (A|B) into Row Echelon Form (REF) is called Gaussian Elimination Method.
c. The method of solving the system AX = B by reducing (A|B) into Reduced Row Echelon Form (RREF) is called Gauss-Jordan Reduction Method.

#### Example 2

Solve the following system of linear equations using Gaussian Elimination Method:
x + y + z = 1
x - y - z = 5
x + y - z = 3

**Solution**

The augmented matrix of the system is:
```
[1  1  1 | 1]
[1 -1 -1 | 5]
[1  1 -1 | 3]
```

Reduce this matrix into a matrix in Row Echelon Form using appropriate elementary row operations as follows:

```
[1  1  1 | 1]  R₂ → R₂ - R₁, R₃ → R₃ - R₁
[1 -1 -1 | 5]
[1  1 -1 | 3]

= [1   1   1 | 1]
  [0  -2  -2 | 4]
  [0   0  -2 | 2]
```

Thus, the system with augmented matrix:
```
[1   1   1 | 1]
[0  -2  -2 | 4]
[0   0  -2 | 2]
```
has the same solution set as the original system.

The system is equivalent to:
x + y + z = 1
-2y - 2z = 4
-2z = 2

From the last equation, -2z = 2, we have z = -1.
Consider the second equation, -2y - 2z = 4, with z = -1 and solving for y gives us y = -1.
Use the first equation, x + y + z = 1 and y = -1, z = -1 to solve for x: x = 3.

Therefore, the solution set of the given system is {(3, -1, -1)}.

#### Example 3

Solve the following system of linear equations:
x + 2y - z = 0
2x + y - z = 3

**Solution**

The augmented matrix of the system is [1 2 -1 | 0; 2 1 -1 | 3].

Then reduce the augmented matrix using appropriate elementary row operations as follows:

```
[1  2 -1 | 0]  R₂ → R₂ - 2R₁
[2  1 -1 | 3]

= [1   2  -1 | 0]
  [0  -3   1 | 3]
```

Therefore, the given system is equivalent to the system with augmented matrix [1 2 -1 | 0; 0 -3 1 | 3], that is:
x + 2y - z = 0
-3y + z = 3

From the second equation, solving for z in terms of y, you get z = 3y + 3.
From the first equation, x = -2y + z = -2y + 3y + 3 = y + 3.

Therefore, the system has infinitely many solutions and the solution set is given by {(y + 3, y, 3y + 3): y ∈ R}.

#### Exercise 3.19

Solve each of the following systems of linear equations using Gaussian Elimination Method:

1. 
```
x + y + z = 3
x - y - z = 0
x - 2y + 3z = 1
```
2. 
```
x - 2y = -4
2x + y + 2z = 3
```

---

## 3.7 Inverse of a Square Matrix

### Activity 3.24

Let A = [2 1; 1 1] and B = [1 -1; -1 2]. Then find both AB and BA.

In your responses in Activity 3.24, you have observed that AB = I₂ = BA. Then matrix B is called an inverse for matrix A.

### Definition 3.25

Let A be a square matrix of order n. Then A is said to be invertible (or has an inverse), if there exists a square matrix B of order n such that AB = Iₙ = BA. If such matrix B exists, then it is called an inverse of A.

Let A be an invertible matrix of order n. If B and C are inverses of A, then BA = Iₙ = AC. Using the associativity property of matrix multiplication, we have:
B = B Iₙ = B(AC) = (BA)C = IₙC = C

This implies B = C. Thus, if A is an invertible matrix, then its inverse is unique.

**Notation:** If a square matrix A is invertible, then its inverse is unique and it is denoted by A⁻¹.

#### Example 1

Let A = [2 1; 1 1]. Find the inverse of A (if it exists).

**Solution**

If A has an inverse, say A⁻¹ = [a b; c d], then we have AA⁻¹ = I₂.

This implies:
```
[2a + c  2b + d]   [1 0]
[ a  + c   b + d ] = [0 1]
```

Then, by the equality of matrices:
2a + c = 1
a + c = 0
2b + d = 0
b + d = 1

Solving: from a + c = 0 ⇒ c = -a
Substituting into 2a + c = 1 ⇒ 2a - a = 1 ⇒ a = 1, c = -1

From b + d = 1 ⇒ d = 1 - b
Substituting into 2b + d = 0 ⇒ 2b + 1 - b = 0 ⇒ b = -1, d = 2

Therefore, A is invertible and A⁻¹ = [1 -1; -1 2].

#### Example 2

Let A = [1 2; 2 4]. Find its inverse if A is invertible.

**Solution**

If A has an inverse, say A⁻¹ = [a b; c d], then we have AA⁻¹ = I₂.

This gives us two systems of linear equations:
a + 2c = 1
2a + 4c = 0

and
b + 2d = 0
2b + 4d = 1

But each one of these two linear systems has no solution. Therefore, matrix A has no inverse.

#### Exercise 3.20

Find the inverse of each of the following matrices, if it exists:

1. [3 5; 1 2]
2. [2 1; 4 2]
3. [0 1; 1 0]

---

### Properties of Inverses of Matrices

#### Activity 3.25

Let A = [2 1; 1 1] and B = [1 1; 0 1]. Then find:
a. A⁻¹, (A⁻¹)⁻¹ and B⁻¹
b. (AB)⁻¹ and B⁻¹A⁻¹
c. (Aᵗ)⁻¹ and (A⁻¹)ᵗ

In your responses in Activity 3.25, you have observed that (A⁻¹)⁻¹ = A, (AB)⁻¹ = B⁻¹A⁻¹ and (Aᵗ)⁻¹ = (A⁻¹)ᵗ.

These properties are the following properties of invertible matrices.

#### Properties of Invertible Matrices

Let A and B be invertible matrices of the same size. Then:
a. A⁻¹ is invertible and (A⁻¹)⁻¹ = A
b. Aᵗ is invertible and (Aᵗ)⁻¹ = (A⁻¹)ᵗ
c. AB is invertible and (AB)⁻¹ = B⁻¹A⁻¹

#### Example 3

Let A and B be two square matrices of order 2 such that A⁻¹ = [2 1; 1 1] and B⁻¹ = [1 0; 1 2]. Then, find the inverses of the matrices A⁻¹, AB and Aᵗ.

**Solution**

a. Given that A is an invertible matrix, A⁻¹ is invertible and (A⁻¹)⁻¹ = A and we get A = [1 -1; -1 2] by computing the inverse.

b. Since A and B are invertible matrices, AB is invertible and (AB)⁻¹ = B⁻¹A⁻¹ = [1 0; 1 2][2 1; 1 1] = [2 1; 4 3].

c. Because it is given that A is invertible, Aᵗ is invertible and (Aᵗ)⁻¹ = (A⁻¹)ᵗ = [2 1; 1 1]ᵗ = [2 1; 1 1].

#### Definition 3.26

An invertible matrix is also called a non-singular matrix and a matrix that is not invertible is called a singular matrix.

#### Exercise 3.21

Let A = [2 1; 1 1] and B = [1 1; 0 1]. Then determine:
a. (A⁻¹)ᵗ
b. (Aᵗ)⁻¹
c. (A⁻¹)⁻¹
d. B⁻¹A⁻¹
e. (AB)⁻¹

---

### Invertibility of a Matrix and Elementary Row Operations

#### Activity 3.26

Consider the matrix A = [2 1; 1 1].
a. Find the matrix obtained by applying the elementary row operation R₂ → R₂ - ½R₁ on A.
b. Let B be a matrix obtained by applying the elementary row operation R₂ → R₂ - ½R₁ on I₂.
c. Find the products AB and BA.

From your solution of (c) in Activity 3.26, observe that B is the inverse of A and B is obtained from A by applying the same elementary row operation that transforms A to I₂.

#### Procedures on How to Determine Invertibility of a Matrix Using Elementary Row Operations

Let A be a square matrix of size n.

**Step 1:** Augment A with Iₙ to form the n×2n matrix (A|Iₙ).

**Step 2:** Apply appropriate elementary row operations and reduce the matrix (A|Iₙ) to a matrix in Row Echelon Form, say (B|C).

**Step 3:** If B = Iₙ in Step 2, then A is invertible and A⁻¹ = C, otherwise A is not invertible.

#### Example 4

Using elementary row operations, determine the invertibility of each of the following matrices:

a. A = [2 1; 1 1]
b. B = [1 2; 2 4]
c. C = [1 2 0; 0 1 0; 2 3 1]

**Solution**

a. First augment A with I₂ and obtain (A|I₂) = [2 1 | 1 0; 1 1 | 0 1].

Then, reduce this matrix to a matrix in Row Echelon Form using appropriate elementary row operations as follows:

```
[2  1 | 1  0]  R₂ → R₂ - ½R₁
[1  1 | 0  1]

= [2   1 |  1   0]
  [0  ½ | -½   1]

  R₁ → R₁ - 2R₂

= [2  0 |  2  -2]
  [0 ½ | -½   1]

  R₁ → ½R₁, R₂ → 2R₂

= [1  0 |  1  -1]
  [0  1 | -1   2]
```

The last matrix is in Reduced Row Echelon Form and A is reduced to I₂.

Therefore, A is invertible with its inverse given by:
A⁻¹ = [1 -1; -1 2].

b. Augment B with I₂ and obtain (B|I₂) = [1 2 | 1 0; 2 4 | 0 1].

Then, reduce it to a matrix in Row Echelon Form using appropriate elementary row operations as follows:

```
[1  2 | 1  0]  R₂ → R₂ - 2R₁
[2  4 | 0  1]

= [1  2 | 1  0]
  [0  0 | -2 1]
```

The last matrix is in Row Echelon Form, but B is not reduced to I₂.

Hence, B is not invertible.

c. Augment C with I₃ and obtain (C|I₃) = [1 2 0 | 1 0 0; 0 1 0 | 0 1 0; 2 3 1 | 0 0 1].

Reduce it using elementary row operations:
```
[1  2  0 | 1  0  0]  R₃ → R₃ - 2R₁
[0  1  0 | 0  1  0]
[2  3  1 | 0  0  1]

= [1  2  0 |  1  0  0]
  [0  1  0 |  0  1  0]
  [0 -1  1 | -2  0  1]

  R₃ → R₃ + R₂

= [1  2  0 |  1  0  0]
  [0  1  0 |  0  1  0]
  [0  0  1 | -2  1  1]

  R₁ → R₁ - 2R₂

= [1  0  0 |  1 -2  0]
  [0  1  0 |  0  1  0]
  [0  0  1 | -2  1  1]
```

The last matrix is in Reduced Row Echelon Form and C is reduced to I₃.

Hence, C is invertible and:
```
C⁻¹ = [ 1 -2  0]
      [ 0  1  0]
      [-2  1  1]
```

#### Exercise 3.22

Using appropriate elementary row operations determine the invertibility of each of the following matrices and for those that are invertible, find their inverses.

1. A = [3 5; 1 2]
2. B = [2 1; 4 -2]
3. C = [1 0 1; 2 1 0; 0 1 3]

---

## 3.8 Applications

In this section, different applications of matrices will be considered.

### Example 1

In a triangle, the smallest angle measures 10° more than half of the largest angle. The middle angle measures 12° more than the smallest angle. Find the measure of each angle of the triangle.

**Solution**

Let x be the measure of the smallest angle, y be the measure of the middle angle and z be the measure of the largest angle of the triangle.

Then, from the given information and the sum of the measures of the three angles of a triangle is 180°, you have the following system of linear equations:
```
x + y + z = 180
x = ½z + 10
y = 12 + x
```

The system can be written as:
```
x + y + z = 180
x - ½z = 10
-x + y = 12
```

and the augmented matrix of the system is:
```
[1  1   1 | 180]
[1  0 -½ |  10]
[-1 1   0 |  12]
```

Apply appropriate elementary row operations to reduce the augmented matrix into REF as follows:

```
[1  1   1 | 180]  R₂ → R₂ - R₁, R₃ → R₃ + R₁
[1  0 -½ |  10]
[-1 1   0 |  12]

= [1   1    1 | 180]
  [0  -1  -3/2 | -170]
  [0   2    1 | 192]

  R₃ → R₃ + 2R₂

= [1   1    1 | 180]
  [0  -1  -3/2 | -170]
  [0   0   -2 | -148]

  R₃ → (-½)R₃

= [1   1    1 | 180]
  [0  -1  -3/2 | -170]
  [0   0    1 |  74]
```

The matrix is in Row Echelon Form. Thus, the given system is equivalent to the system:
```
x + y + z = 180
-y - 3/2z = -170
z = 74
```

From the last equation, z = 74.
From the second equation: -y - 3/2(74) = -170 ⇒ -y = -170 + 111 = -59 ⇒ y = 59.
Then, from the last equation, x + y + z = 180 ⇒ x = 180 - (59 + 74) = 47.

Therefore, the three angles of the given triangle are 47°, 59° and 74°.

### Example 2

The perimeter of a given triangle is 30 cm. The shortest side is 4 cm shorter than the longest side of the given triangle. The longest side is 6 cm less than the sum of the other two sides of the given triangle. Find the length of each side of the triangle.

**Solution**

Let a, b and c be the shortest, the middle and the longest sides of the given triangle respectively.

Then, from the given information, you have the following system of linear equations:
```
a + b + c = 30
c = a + 4
c + 6 = a + b
```

The given set of linear equations is equivalent to the following system of linear equations:
```
a + b + c = 30
a - c = -4
a + b - c = 6
```

and the augmented matrix of the given system is:
```
[1  1  1 | 30]
[1  0 -1 | -4]
[1  1 -1 |  6]
```

Use appropriate elementary row operation to reduce the augmented matrix to a matrix in REF as follows:

```
[1  1  1 | 30]  R₂ → R₂ - R₁, R₃ → R₃ - R₁
[1  0 -1 | -4]
[1  1 -1 |  6]

= [1  1   1 | 30]
  [0 -1  -2 | -34]
  [0  0  -2 | -24]
```

The last matrix is in REF and the given system has the same solution as the system:
```
a + b + c = 30
-b - 2c = -34
-2c = -24
```

From the last equation, -2c = -24 ⇒ c = 12.
From the second equation, b = 34 - 2c = 34 - 2(12) = 34 - 24 = 10.
Then, from the first equation a = 30 - (b + c) = 30 - 22 = 8.

Therefore, the sides of the triangle are 8 cm, 10 cm and 12 cm.

### Example 3

If a 30% salt solution is to be mixed with a 20% salt to form a mixture of a 25% salt solution of 50 liters, how much of each is needed?

**Solution**

Let x represent the amount of 30% salt solution needed and y be the amount of 20% salt solution needed.

The total amount of the mixture must be 50 liters:
x + y = 50

The amount of salt in the end result is 25% of 50 liters, which is 0.25 × 50 = 12.5.

That is: 0.3x + 0.2y = 12.5

Then, we have the following system of linear equations:
```
x + y = 50
0.3x + 0.2y = 12.5
```

The augmented matrix of the system is:
```
[1   1 | 50]
[0.3 0.2 | 12.5]
```

Apply elementary row operations:
```
[1   1 | 50]  R₂ → R₂ - 0.3R₁
[0.3 0.2 | 12.5]

= [1    1 | 50]
  [0 -0.1 | -2.5]
```

This implies the given system is equivalent to:
x + y = 50
-0.1y = -2.5

Thus, -0.1y = -2.5 ⇒ y = 25 and x = 50 - y = 50 - 25 = 25.

### Exercise 3.23

1. In a triangle, the smallest angle measures 10° less than half of the largest angles. The middle angle measures 20° more than the smallest angle. Find the measure of each angle of the triangle.

2. The perimeter of a triangle is 55 cm. The measure of the shortest side is 8 cm less than the middle side. The measure of the longest side is 1 cm less than the sum of the other two sides. Find the lengths of the sides.

3. A chemist has 6% salt solution and 12% salt solution. How much of the 6% salt solution and 12% salt solution must be added to get a 300g of 10% salt solution?

---

### Problem Solving

## Problem Solving

1. **The perimeter of a triangle is 50 m.** The longest side of the triangle measures 20 m more than the shortest side. The middle side is 3 times the measure of the shortest side. Find the lengths of the three sides of the triangle.

**Solution:**
Let a be the shortest side, b the middle side, and c the longest side.

From the given information:
- a + b + c = 50 (perimeter)
- c = a + 20 (longest side is 20m more than shortest)
- b = 3a (middle side is 3 times the shortest)

Substituting the second and third equations into the first:
a + 3a + (a + 20) = 50
5a + 20 = 50
5a = 30
a = 6 m

Therefore:
b = 3 × 6 = 18 m
c = 6 + 20 = 26 m

**The three sides are 6 m, 18 m, and 26 m.**

---

2. **A train travels 700 kilometers** in the same time that a truck travels 500 kilometers. Find the speed of each vehicle if the train's average speed is 10 kilometers per hour faster than the truck's speed.

**Solution:**
Let t be the truck's speed in km/h.
Then the train's speed is (t + 10) km/h.

Since time = distance/speed and the times are equal:
700/(t + 10) = 500/t

Cross-multiplying:
700t = 500(t + 10)
700t = 500t + 5000
200t = 5000
t = 25 km/h (truck speed)

Therefore, the train's speed is 25 + 10 = **35 km/h**.

Verification:
- Train time = 700/35 = 20 hours
- Truck time = 500/25 = 20 hours ✓

---

3. **Almaz, Birkti, and Chaltu** work in a boutique. One day the three had combined sales of Birr 14800. Almaz sold Birr 1200 more than Birkti. Birkti and Chaltu combined sold Birr 2800 more than Almaz. How much did each person sell on that particular day?

**Solution:**
Let:
- A = Almaz's sales (Birr)
- B = Birkti's sales (Birr)
- C = Chaltu's sales (Birr)

From the problem:
- A + B + C = 14800 (combined sales)
- A = B + 1200 (Almaz sold 1200 more than Birkti)
- B + C = A + 2800 (Birkti and Chaltu sold 2800 more than Almaz)

From equation (3):
B + C = (B + 1200) + 2800
B + C = B + 4000
C = 4000

Substituting C = 4000 into equation (1):
A + B + 4000 = 14800
A + B = 10800

From equation (2), A = B + 1200:
(B + 1200) + B = 10800
2B = 9600
B = 4800

Therefore:
A = 4800 + 1200 = **6000 Birr**
B = **4800 Birr**
C = **4000 Birr**

Verification:
- Total: 6000 + 4800 + 4000 = 14800 ✓
- Almaz vs Birkti: 6000 - 4800 = 1200 ✓
- (Birkti + Chaltu) vs Almaz: (4800 + 4000) - 6000 = 8800 - 6000 = 2800 ✓

# Summary and Review Exercise

## Summary

1. A rectangular array of numbers arranged in rows and columns is called a matrix.
2. A matrix with only one column is called a column matrix.
3. A matrix with only one row is called a row matrix.
4. A matrix with equal number of rows and columns is called a square matrix.
5. A matrix with all entries 0 is called a zero matrix.
6. A square matrix that has zeros everywhere except possibly along the main diagonal is called diagonal matrix.
7. A diagonal matrix where all elements of the diagonal are equal is called a scalar matrix.
8. The diagonal matrix where all the elements of the diagonal are 1 is called the identity matrix.
9. A square matrix whose elements below the main diagonal are all zero is called an upper triangular matrix.
10. A square matrix whose elements above the main diagonal are all zero is called a lower triangular matrix.
11. Let A = (aᵢⱼ)ₘₓₙ and B = (bᵢⱼ)ₘₓₙ be two matrices and k be a real number. Then:
    a. The sum of A and B is given by, A + B = (aᵢⱼ + bᵢⱼ)ₘₓₙ
    b. The difference A and B is given by, A - B = (aᵢⱼ - bᵢⱼ)ₘₓₙ
    c. The scalar multiple of A by k is defined by, kA = (kaᵢⱼ)ₘₓₙ
12. Let A = (aᵢⱼ)ₘₓₚ and B = (bₖⱼ)ₚₓₙ be matrices, where m, n and p are positive integers. The product of A and B, denoted by AB, is the m×n matrix AB = (cᵢⱼ)ₘₓₙ where, cᵢⱼ = aᵢ₁b₁ⱼ + aᵢ₂b₂ⱼ + ... + aᵢₚbₚⱼ, for i = 1,...,m and j = 1,...,n.
13. Given a matrix A, the matrix obtained by interchanging the rows of A to columns and the columns of A to rows is called the transpose of A and it is denoted by Aᵗ.
14. The following operations are called Elementary Row operations:
    I. Swapping: Interchanging two rows of a matrix
    II. Scaling: Multiplying a row of a matrix by a non-zero constant.
    III. Pivoting: Adding a constant multiple of one row of a matrix on another row.
15. A given matrix is said to be in Row Echelon Form, if the following are satisfied:
    a. If there are any rows with no leading entries (rows having zeros entirely) they are at the bottom.
    b. The leading entry (the first non-zero entry) in each row after the first is to the right of the leading entry in the previous row.
16. A is said to be in Reduced Row Echelon Form (RREF) if A is in Row Echelon Form (REF) and the leading element in each non-zero row is 1 and it is the only non-zero number in its column.

---

## Review Exercise

1. **Find the size of each of the following matrices:**
   a. A = [1 2 -3; 0 1 2]
   b. B = [2 5; 3 0; 1 1]
   c. C = [1 2 1 3]
   d. D = [2 5 1; 3 0 2; 1 1 4]
   e. E = (0 1 -3 -1)

2. **Let A = [1 2; 3 4], B = [0 -1; 1 3], C = [1 0; 2 5] and D = [3 1; 0 2]. Then find each of the following matrices:**
   a. A - 3C
   b. AB - CD
   c. 2B + 3D
   d. BᵗC + DᵗA

3. **Identify each of the following matrices as symmetric, skew-symmetric, diagonal, scalar, upper triangular or lower triangular matrices:**
   a. [2 0; 0 -1]
   b. [0 -2; 2 0]
   c. [1 0 0; 0 1 0; 0 0 1]
   d. [1 2 3; 0 1 4; 0 0 1]
   e. [1 0 0; 2 3 0; 4 5 6]
   f. [3 0 0; 0 3 0; 0 0 3]

4. **Find the reduced row echelon form of each of the following matrices:**
   a. [1 2; 3 4]
   b. [1 2 1; 2 3 1; 3 4 1]
   c. [1 2 3; 2 4 6; 1 1 0]
   d. [2 1 3; 4 2 6; 6 3 9]

5. **Solve each of the following systems of linear equations using Gaussian Elimination Method:**
   a. 
   ```
   x - y = 1
   2x + y = 2
   ```
   b. 
   ```
   x + y + z = 1
   x - 2y + 3z = -5
   2x + y - z = 2
   ```

6. **Determine the inverse of each of the following matrices, if it exists:**
   a. [1 2; 3 4]
   b. [2 1; 4 2]
   c. [1 0 1; 2 1 0; 0 1 3]
   d. [1 2 3; 0 1 2; 0 0 1]

7. **A farmer has two types of milk**, one that is 20% butterfat and another which is 15% butterfat. How much of each should he use to end up with 50 gallons of 20% butterfat?

---