# Unit 4: Determinants and Their Properties

## Unit Outcomes
By the end of this unit, you will be able to:
- Know minor and cofactor of a matrix
- Evaluate determinant of a matrix.
- Understand properties of a determinant
- Apply principles of determinants to compute inverse of a matrix.
- Use Cramer's rule to solve system of linear equations.
- Apply determinant concepts to solve real-world situations.

## Unit Contents
- 4.1 Determinants of Matrices of Order 2
- 4.2 Minors and Cofactors of Elements of Matrices
- 4.3 Determinants of Matrices of Order 3
- 4.4 Properties of Determinants
- 4.5 Inverse of a Square Matrix of Order 2 and 3
- 4.6 Solutions of System of Linear Equations Using Cramer's Rule
- 4.7 Applications

## Key Words
- Adjoint
- cofactor
- Cramer's rule
- determinant
- inverse
- minor

## Introduction

Every square matrix can be associated with a number called its determinant. Determinants occur in many mathematical topics. The coefficients in system of linear equations are often represented by matrices and the determinant can be used to solve systems of linear equations, if the coefficient matrix is an invertible matrix. In this unit, determinant of a matrix; basic properties of determinant will be discussed and some applications of determinants in solving systems of linear equations will also be given.

## 4.1 Determinants of Matrices of Order 2

### Activity 4.1
Consider the square matrix A = [[a, b], [c, d]] of order 2. Suppose ad - bc ≠ 0. Then:

a. Show that A is invertible and find A⁻¹.

b. Solve the following system of linear equations:
   ax + by = e
   cx + dy = f

From Activity 4.1, you have found that:

a. A is invertible and its inverse is given by A⁻¹ = (1/(ad - bc)) × [[d, -b], [-c, a]]

b. The solution set of the system is x = (ed - bf)/(ad - bc), y = (af - ec)/(ad - bc)

In both cases, the number ad - bc is involved and ad - bc is called the determinant of A.

### Definition 4.1
Let A = [[a₁₁, a₁₂], [a₂₁, a₂₂]] be a square matrix of order 2. The determinant of A, denoted by det(A) or |A|, is the number defined by det(A) = a₁₁a₂₂ - a₁₂a₂₁.

### Example 1
Find the determinant of A = [[1, 2], [3, 4]].

**Solution:**
Using the definition, det(A) = 1(4) - 2(3) = 4 - 6 = -2.

### Example 2
Let A = [[1, 2], [x, x+1]]. If det(A) = 0, then find x.

**Solution:**
If det(A) = 0, then 1(x+1) - 2x = 0 ⇒ 1 - x = 0.
This implies x = 1.

### Example 3
Find the determinant of I₂ = [[1, 0], [0, 1]].

**Solution:**
The determinant of the identity matrix for multiplication is given as:
det(I₂) = 1(1) - 0(0) = 1 - 0 = 1.

### Exercise 4.1

1. Determine the determinant of each of the following matrices:
   ```
   a. A = [[5, 2], [3, 1]]
   b. B = [[0, 4], [2, 1]]
   c. C = [[3, 4], [1, 2]]
   d. D = [[1, 0], [0, -1]]
   ```

2. Determine the determinant of each of the following matrices:
   ```
   a. A = [[x, 2x], [x-1, x+1]]
   b. B = [[2x, x], [x, 2x]]
   ```
   If det(A) = 0 then determine the value(s) of x.

## 4.2 Minors and Cofactors of Elements of Matrices

### Minors of Elements of Matrices

#### Activity 4.2
Let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]. Then find:

a. Matrix B obtained by crossing-out the 2nd row and the 1st column from A

b. det(B)

c. Matrix C obtained by crossing-out the 1st row and the 2nd column from A

d. det(C)

From your responses for Activity 4.2, observe that:

(i) both B and C are 2×2 matrices

(ii) the determinant of B is called the minor of a₂₁, the element in the intersection of the second row and the first column of A

(iii) the determinant of C is called the minor of a₁₂, the element in the intersection of the first row and the second column of A.

**Note:** If A = (a) is a 1 × 1 matrix, then the determinant of A is defined by det(A) = a.

### Definition 4.2
Let n be a positive integer greater than or equal to 2 and A = (aᵢⱼ)ₙ×ₙ be a square matrix of order n. Suppose we know how to define the determinant of any (n-1) × (n-1) matrix. Let (i,j), for i = 1, ..., n and j = 1, ..., n, be an ordered pair of positive integers. Cross out the i-th row and j-th column of A and obtain an (n-1) × (n-1) matrix and this matrix is denoted by Aᵢⱼ. Then det(Aᵢⱼ) is called the **minor** of the entry aᵢⱼ of A, denoted by Mᵢⱼ.

### Example 1
Determine the minors of all the entries of matrix A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]].

**Solution:**
The minors of A are:
```
M₁₁ = det([[5, 6], [8, 9]]) = 5×9 - 6×8 = 45 - 48 = -3
M₁₂ = det([[4, 6], [7, 9]]) = 4×9 - 6×7 = 36 - 42 = -6
M₁₃ = det([[4, 5], [7, 8]]) = 4×8 - 5×7 = 32 - 35 = -3
M₂₁ = det([[2, 3], [8, 9]]) = 2×9 - 3×8 = 18 - 24 = -6
M₂₂ = det([[1, 3], [7, 9]]) = 1×9 - 3×7 = 9 - 21 = -12
M₂₃ = det([[1, 2], [7, 8]]) = 1×8 - 2×7 = 8 - 14 = -6
M₃₁ = det([[2, 3], [5, 6]]) = 2×6 - 3×5 = 12 - 15 = -3
M₃₂ = det([[1, 3], [4, 6]]) = 1×6 - 3×4 = 6 - 12 = -6
M₃₃ = det([[1, 2], [4, 5]]) = 1×5 - 2×4 = 5 - 8 = -3
```

### Cofactors of Elements of Matrices

#### Activity 4.3
Let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]. Then compute (-1)ⁱ⁺ʲ det(Aᵢⱼ) for every (i,j) pair of positive integers where i=1,2,3 and j=1,2,3.

From your responses in Activity 4.3, the values (-1)ⁱ⁺ʲ det(Aᵢⱼ) are called the **cofactors** of the entry aᵢⱼ for every pair (i,j) of positive integers.

### Definition 4.3
Let n be a positive integer greater than or equal to 2 and A = (aᵢⱼ)ₙ×ₙ be a square matrix of order n. Then Cᵢⱼ = (-1)ⁱ⁺ʲ det(Aᵢⱼ) is called the **cofactor** of aᵢⱼ, for every pair of positive integers (i,j) for 1 ≤ i ≤ n and 1 ≤ j ≤ n.

### Example 2
Determine the cofactors of all the entries of the matrix A = [[1, 2, 3], [0, 3, -1], [5, -2, 4]].

**Solution:**
From Example 1, the minors of all the entries of A are:
M₁₁ = -3, M₁₂ = 5, M₁₃ = 0
M₂₁ = 11, M₂₂ = 2, M₂₃ = -7
M₃₁ = -1, M₃₂ = 0, M₃₃ = 1

Then the cofactors of all the entries of A are:
```
C₁₁ = (-1)¹⁺¹ × (-3) = -3
C₁₂ = (-1)¹⁺² × 5 = -5
C₁₃ = (-1)¹⁺³ × 0 = 0
C₂₁ = (-1)²⁺¹ × 11 = -11
C₂₂ = (-1)²⁺² × 2 = 2
C₂₃ = (-1)²⁺³ × (-7) = 7
C₃₁ = (-1)³⁺¹ × (-1) = -1
C₃₂ = (-1)³⁺² × 0 = 0
C₃₃ = (-1)³⁺³ × 1 = 1
```

### Exercise 4.2
Find the minors and the cofactors of all the entries of the following matrices:
```
a. A = [[1, 1, 3], [2, 3, 1], [0, 2, -1]]
b. B = [[2, 0, 0], [0, -1, 0], [1, 2, 4]]
```

## 4.3 Determinants of Matrices of Order 3

### Activity 4.4
Let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]. Then determine:
a. a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃
b. a₂₁C₂₁ + a₂₂C₂₂ + a₂₃C₂₃

From your responses in Activity 4.3, observe that the answers for both questions are the same number and this number is called the determinant of A.

### Definition 4.4
Let A = (aᵢⱼ)₃×₃ be a square matrix of order 3. Then the determinant of A, det(A) or |A|, is the number defined by det(A) = a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃ and this sum is called the **cofactor expansion** of the determinant along the first row.

It is possible to express determinant of a matrix A as a cofactor expansion along a column of A and gives you the same result, but in this subunit, cofactor expansion of the determinant along a row only is considered.

### Example 1
Let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]. Then find the determinant of A using a cofactor expansion along the first row.

**Solution:**
First find the cofactors C₁₁, C₁₂ and C₁₃ as:
```
C₁₁ = (-1)² × det([[5, 6], [8, 9]]) = 1 × (45 - 48) = -3
C₁₂ = (-1)³ × det([[4, 6], [7, 9]]) = -1 × (36 - 42) = 6
C₁₃ = (-1)⁴ × det([[4, 5], [7, 8]]) = 1 × (32 - 35) = -3
```

Then the determinant of A is given by:
|A| = 1×(-3) + 2×6 + 3×(-3) = -3 + 12 - 9 = 0

That is, |A| = 0.

### Example 2
Find the determinant of I₃ = [[1, 0, 0], [0, 1, 0], [0, 0, 1]].

**Solution:**
Using a cofactor expansion along the first row, the determinant of I₃ is given by:
det(I₃) = 1 × det([[1, 0], [0, 1]]) + 0 + 0 = 1 × 1 = 1

Therefore, the determinant of I₃ is 1.

### Exercise 4.3

1. Let A = [[7, 2, 1], [1, 4, 2], [0, 1, 3]]. Then compute the determinant of A using a cofactor expansion along the first row.

2. Compute the determinant of the matrix B = [[2, 0, 0], [0, 1, 0], [0, 0, -1]].

### Cofactor Expansion of Determinant along Any Row

#### Activity 4.5
Let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]. Then evaluate each of the following:
a. a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃
b. a₂₁C₂₁ + a₂₂C₂₂ + a₂₃C₂₃
c. a₃₁C₃₁ + a₃₂C₃₂ + a₃₃C₃₃

In your responses in Activity 4.5, you have observed that the values in (a), (b) and (c) are the same and this number is the determinant of A.

The results in Activity 4.5 tell us that the determinant does not depend on the choice of the row as stated in Theorem 4.1.

### Theorem 4.1
Let A = (aᵢⱼ)₃×₃ be a square matrix of order 3. Then, the determinant of A, det(A), can be expressed as a cofactor expansion along any row of A. That is, det(A) = aᵢ₁Cᵢ₁ + aᵢ₂Cᵢ₂ + aᵢ₃Cᵢ₃ for each i = 1, 2, 3.

### Example 3
Let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]. Then, find the determinant of A using cofactor expansion along the three rows of A.

**Solution:**
In Example 1 of this section, you have seen that using cofactor expansion of the determinant along first row, |A| = a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃ = 0.

a. The determinant of A using the cofactor expansion along the second row is given by:
```
det(A) = 4×C₂₁ + 5×C₂₂ + 6×C₂₃
C₂₁ = (-1)³ × det([[2, 3], [8, 9]]) = -1 × (18 - 24) = 6
C₂₂ = (-1)⁴ × det([[1, 3], [7, 9]]) = 1 × (9 - 21) = -12
C₂₃ = (-1)⁵ × det([[1, 2], [7, 8]]) = -1 × (8 - 14) = 6
det(A) = 4×6 + 5×(-12) + 6×6 = 24 - 60 + 36 = 0
```

b. The determinant of A using a cofactor expansion along the third row is given by:
```
det(A) = 7×C₃₁ + 8×C₃₂ + 9×C₃₃
C₃₁ = (-1)⁴ × det([[2, 3], [5, 6]]) = 1 × (12 - 15) = -3
C₃₂ = (-1)⁵ × det([[1, 3], [4, 6]]) = -1 × (6 - 12) = 6
C₃₃ = (-1)⁶ × det([[1, 2], [4, 5]]) = 1 × (5 - 8) = -3
det(A) = 7×(-3) + 8×6 + 9×(-3) = -21 + 48 - 27 = 0
```

Thus, the determinant of A using the cofactor expansion along any of its three rows is the same: that is, |A| = 0.

### Note
Let A = (aᵢⱼ)ₙ×ₙ be a square matrix of order n.

a. The expression (-1)ⁱ⁺ʲ in the expansion of the determinant determines the algebraic sign in the position (i,j) of a square matrix of order n and these signs form a checkerboard pattern of "+" and "-" that has + in the (1,1) position. The patterns for n = 2 and 3 are given as follows:

For n=2:
```
+ -
- +
```

For n=3:
```
+ - +
- + -
+ - +
```

b. In determining the determinant of a square matrix by cofactor expansion along a row, the best strategy is to use a cofactor expansion along a row with large number of zeros.

### Example 4
Compute the determinant of the matrix A = [[1, 5, 0], [-2, 1, 1], [3, 0, 0]].

**Solution:**
As the third row has two zero entries, more zero entries than the other two rows, you can use a cofactor expansion along the third row:
```
det(A) = 3×C₃₁ + 0×C₃₂ + 0×C₃₃ = 3×C₃₁
C₃₁ = (-1)⁴ × det([[5, 0], [1, 1]]) = 1 × (5×1 - 0×1) = 5
```
Therefore, det(A) = 3×5 = 15.

**Note:** The original matrix in the PDF was corrupted due to OCR errors. This example has been reconstructed to demonstrate the described concept of expanding along a row with zero entries.

### Exercise 4.4

1. Let A = [[2, 3, 1], [0, 1, 2], [4, 0, 1]]. Then compute the determinant of A using a cofactor expansion along all the three rows.

2. Compute the determinant of each of the following matrices by using cofactor expansion:
   ```
   a. A = [[2, 0, 0], [0, 1, 0], [0, 0, -1]]
   b. B = [[1, 2, 3], [0, 1, 2], [0, 0, 3]]
   ```

3. Find the determinant of each of the following matrices:
   ```
   a. A = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
   b. B = [[2, 0, 0], [0, 3, 0], [0, 0, 4]]
   ```

## 4.4 Properties of Determinants

### Determinants of Triangular Matrices

#### Activity 4.6
Find the determinant of each of the following matrices:
```
A = [[1, 2, 3], [0, 4, 5], [0, 0, 6]]
B = [[1, 0, 0], [2, 3, 0], [4, 5, 6]]
```

From your responses in Activity 4.6, observe that matrices A and B are triangular matrices and:

a. the determinant of matrix A is the product of its diagonal entries
b. the determinant of matrix B is the product of its diagonal entries

These properties are true in general and are stated as follows:

### Theorem 4.2
Let n be a positive integer greater than or equal to 2 and A = (aᵢⱼ)ₙ×ₙ. If A is a triangular matrix, then the determinant of A is the product of its diagonal elements.

That is, if A is upper triangular:
```
| a₁₁ a₁₂ ... a₁ₙ |
|  0  a₂₂ ... a₂ₙ |
|  :   :  ...  :  |
|  0   0  ... aₙₙ |
```
then |A| = a₁₁ × a₂₂ × ... × aₙₙ.

Or if A is lower triangular:
```
| a₁₁  0  ...  0  |
| a₂₁ a₂₂ ...  0  |
|  :   :  ...  :  |
| aₙ₁ aₙ₂ ... aₙₙ |
```
then |A| = a₁₁ × a₂₂ × ... × aₙₙ.

**Note:**
1. If A is a diagonal matrix, then A is a triangular matrix and its determinant is the product of its diagonal entries.
2. For a positive integer n, the matrix Iₙ is the identity matrix for matrix multiplication and it is a diagonal matrix. Thus, |Iₙ| = 1 × 1 × ... × 1 = 1.

### Example 1
Compute the determinant of A = [[2, 3, 1], [0, -1, 2], [0, 0, 1]].

**Solution:**
Using the cofactor expansion along the first row:
```
det(A) = 2 × det([[-1, 2], [0, 1]]) = 2 × (-1) = -2
```

On the other hand, A is an upper triangular matrix.
Thus, det(A) = 2 × (-1) × 1 = -2, the product of the diagonal entries of A.

### Example 2
Find the determinant of each of the following matrices:
```
a. A = [[2, 5, 6], [0, 3, 7], [0, 0, 1]]
b. B = [[-1, 0, 0], [2, 2, 0], [1, 5, 1]]
c. C = [[4, 0, 0], [0, -1, 0], [0, 0, -2]]
```

**Solution:**
a. A is an upper triangular matrix and |A| = 2 × 3 × 1 = 6, which is the product of the diagonal entries of A.
b. B is a lower triangular matrix and |B| = -1 × 2 × 1 = -2, which is the product of the diagonal entries of B.
c. C is a diagonal matrix and hence |C| = 4 × (-1) × (-2) = 8, which is the product of the diagonal entries of C.

### Exercise 4.5
Determine the determinant of each of the following matrices:
```
a. A = [[1, 2, 3], [0, 2, 1], [0, 0, 3]]
b. B = [[-2, 0, 0], [0, 1, 0], [0, 0, 4]]
```

### Determinant and Elementary Row Operations

Let us consider the effects of the three elementary operations of matrices on determinants of matrices.

#### Activity 4.7
Let A = [[a, b], [c, d]]. Then find the determinant of each of the following matrices in terms of the determinant of A:
```
a. B = [[c, d], [a, b]] (rows swapped)
b. C = [[3a, 3b], [c, d]] (first row multiplied by 3)
c. D = [[a, b], [c-2a, d-2b]] (row operation: R₂ → R₂ - 2R₁)
```

From your responses in Activity 4.7, observe that:
a. |B| = -|A| (Interchanging two rows of a matrix changes the determinant by sign).
b. |C| = 3|A| (The determinant of a matrix obtained from A by multiplying a row of A by a scalar is the scalar times the determinant of A).
c. |D| = |A| (Adding a scalar multiple of a row of A onto another row does not change the determinant).

These three properties are the effects of elementary row operations on the determinant of A and these effects are true in general for any square matrix as stated in Theorem 4.3.

### Theorem 4.3
Let A be a square matrix of order n.

a. Interchanging two rows of the matrix changes the sign of the determinant;
   That is, if A → (Rᵢ ↔ Rⱼ) B for i ≠ j, then |B| = -|A|.

b. The determinant of a matrix obtained by multiplying one row of A by a constant gives you the same constant times the determinant of the given matrix.
   That is, if A → (kRᵢ) B and k is any constant, then |B| = k|A|.

c. Adding a scalar multiple of one row of A to another row of A does not change the determinant.
   That is, if A → (Rᵢ + kRⱼ) B for i ≠ j and k is any constant, then |B| = |A|.

**Note:** One consequence that follows from property (b) of Theorem 4.3 is if you multiply a square matrix of order n by a scalar k, then the determinant of the new matrix is kⁿ times the determinant of the given matrix.
That is, if A is a square matrix of order n and k is a scalar, then |kA| = kⁿ|A|.

### Example 3
Let A = [[a, b], [c, d]]. If det(A) = -2, then find the determinant of each the following matrices:
```
a. B = [[a, b], [2a+c, 2b+d]]
b. C = [[-2a, -2b], [c, d]]
c. D = [[3a, 3b], [3c, 3d]]
d. E = [[c, d], [a, b]]
```

**Solution:**
If det(A) = -2, then |A| = ad - bc = -2.

a. Matrix B is obtained by replacing the second row of A by 2 times the first row of A plus the second row of A. Thus, |B| = |A| = -2.

b. Matrix C is obtained by scaling the first row of A by -2. Thus, |C| = -2|A| = -2 × (-2) = 4.

c. D = 3A. Thus, |D| = 3²|A| = 9 × (-2) = -18.

d. Matrix E is obtained by swapping the first and the second rows of A. Thus, |E| = -|A| = -(-2) = 2.

### Example 4
Let A = [[a, b, c], [d, e, f], [g, h, k]]. If det(A) = 2, then find the determinant of each the following matrices:

a. B obtained by swapping R₁ and R₂

b. C obtained by R₃ → R₃ + 3R₁

c. D obtained by scaling R₂ by 5

d. E = 4A

**Solution:**
a. Matrix B is obtained by swapping the first and the second rows of A. Thus, det(B) = -det(A) = -2.

b. Matrix C is obtained by replacing the third row of A by 3 times the first row of A plus the third row of A. Thus, det(C) = det(A) = 2.

c. Matrix D is obtained by scaling the second row of A by 5. Thus, det(D) = 5 det(A) = 5 × 2 = 10.

d. A is a 3×3 and E = 4A. Thus, det(E) = det(4A) = 4³ det(A) = 64 × 2 = 128.

### Example 5
Determine the determinant of the following matrix after reducing it to a matrix in REF.
```
A = [[1, 2, 1], [2, 3, 1], [1, 1, 2]]
```

**Solution:**
First reduce A into an upper triangular matrix using appropriate elementary row operations as follows:
```
[1  2  1]    [1  2  1]    [1  2  1]
[2  3  1] → [0 -1 -1] → [0 -1 -1]
[1  1  2]    [0 -1  1]    [0  0  2]
```
The last matrix, B, is a triangular matrix and hence the determinant of B is the product of its diagonal entries:
|B| = 1 × (-1) × 2 = -2

Observe that matrix B is obtained from A by applying three successive elementary row operations. Each of these elementary row operations are of the same type; adding a scalar multiple of one row onto another row. Thus, all these elementary row operations do not make any change on the determinant of the matrix.

Therefore, the determinants of both A and B are the same and hence |A| = |B| = -2.

### Exercise 4.6

1. Let A = [[a, b], [c, d]] and det(A) = 2. Then find the determinant of each the following matrices:
   ```
   a. B = [[c, d], [a, b]]
   b. C = [[3a, 3b], [c, d]]
   c. D = [[a+2c, b+2d], [c, d]]
   ```

2. Let A = [[a, b, c], [d, e, f], [g, h, k]] and det(A) = 3. Then compute the determinant of each of the following matrices:
   ```
   a. B = [[d, e, f], [a, b, c], [g, h, k]]
   b. C obtained by R₃ → R₃ + 3R₁
   c. D obtained by scaling R₂ by 5
   ```

3. Let A = [[1, 2, 1], [2, 3, 1], [1, 1, 2]] and B is obtained by:
   ```
   A → R₂ → R₂ - 2R₁ → B
   A → R₃ → R₃ - R₁ → C
   B → R₃ → R₃ - R₂ → D
   ```
   Find the determinant of each.

### Determinant of Product of Matrices and Determinant of a Transpose

#### Activity 4.8
Let A = [[1, 1], [2, 3]] and B = [[2, 1], [0, 1]]. Then compute each of the following:
a. det(A) and det(B)
b. det(AB), det(Aᵀ) and det(Bᵀ)

In your responses in Activity 4.8, observe that:
a. det(A) = det(Aᵀ), that is, the determinant of A and its transpose are equal.
b. det(AB) = (det A)(det B); that is, the determinant of the product of A and B is equal to the product of the determinant of A and the determinant of B.

In general, we have the following results about the determinant of a transpose and the determinant of product of matrices.

### Theorem 4.4
Let A and B be two square matrices of order n. Then:
a. det(Aᵀ) = det(A)
b. det(AB) = det(A)det(B)

**Note:** Using Property (b) of Theorem 4.4 and the associative property of matrix multiplication, if A, B and C are square matrices of order n, then |ABC| = |A||B||C|.

### Example 6
Let A and B be square matrices of order 3 with |A| = 4 and |B| = 5. Then compute each of the following:
a. det(AB)
b. det(3A)
c. det(2ABᵀ)
d. det(A⁵)

**Solution:**
a. det(AB) = det(A)det(B) = 4 × 5 = 20

b. det(3A) = 3³ det(A) = 27 × 4 = 108

c. det(2ABᵀ) = 2³ det(ABᵀ), since ABᵀ is a square matrix of order 3.
   The matrix ABᵀ is the product of A and Bᵀ.
   This implies det(2ABᵀ) = 2³ det(A)det(Bᵀ) = 8 × 4 × 5 = 160

d. det(A⁵) = (det A)⁵ = 4⁵ = 1024

### Exercise 4.7
Let A and B be square matrices of order 3 with |A| = 2 and |B| = 3. Then compute each of the following:
a. det(AB)
b. det(2A)
c. det(3ABᵀ)
d. det(A⁴)

### Determinant of Inverse of an Invertible Matrix

Let A be a square matrix of order n. If A is invertible, then AA⁻¹ = Iₙ and det(Iₙ) = det(AA⁻¹) = [det(A)][det(A⁻¹)] = 1.

Therefore, det(A) ≠ 0, because the product of det(A) and det(A⁻¹) is different from zero and hence, det(A⁻¹) = 1/det(A).

Thus, the following theorem is proved.

### Theorem 4.5
If A is an invertible matrix of order n, then det(A) is not equal to zero and the determinant of A⁻¹ is given by det(A⁻¹) = 1/det(A).

### Example 7
Let A and B be two invertible matrices of order 3. Suppose det(A) = 4 and det(B) = 3. Then find:
a. det(A⁻¹)
b. det(A⁻¹B)

**Solution:**
a. Since A is invertible and det(A) = 4 ≠ 0, then det(A⁻¹) = 1/det(A) = 1/4.

b. det(A⁻¹B) = det(A⁻¹)det(B) = (1/4) × 3 = 3/4.

### Exercise 4.8
Let A and B be 3×3 matrices with det(A) = 2 and det(B) = 5. Then find:
a. det(A⁻¹)
b. det(A⁻¹B)
c. det(B⁻¹)
d. det(AB⁻¹)

## 4.5 Inverse of a Square Matrix of Order 2 and 3

There are different applications of determinants. One of these applications that is considered in this section is invertibility of a matrix.

### Adjoint of a Square Matrix

#### Activity 4.9
Let A = [[1, 2], [3, 4]]. Then find:
a. the cofactors of all the entries of A
b. matrix B defined by B = (Cᵢⱼ)ᵀ

The matrix B you have obtained in Activity 4.9 is called the **adjoint** of A and if A is invertible, then matrix B has a role in determining the inverse of A.

### Definition 4.5
Let A = (aᵢⱼ)ₙ×ₙ be a square matrix of order n and Cᵢⱼ = (-1)ⁱ⁺ʲ det(Aᵢⱼ) be the cofactor of the element aᵢⱼ for i = 1,...,n and j = 1,...,n. Then, the matrix Adj(A) = (Cᵢⱼ)ᵀ is called **adjoint** of A and it is denoted by Adj(A).

### Example 1
Determine the adjoint of A = [[1, 2], [3, 4]].

**Solution:**
A₁₁ = [[4]], A₁₂ = [[3]], A₂₁ = [[2]], A₂₂ = [[1]]

Thus, the cofactors of all the elements of A are:
```
C₁₁ = (-1)¹⁺¹ × det([[4]]) = 4
C₁₂ = (-1)¹⁺² × det([[3]]) = -3
C₂₁ = (-1)²⁺¹ × det([[2]]) = -2
C₂₂ = (-1)²⁺² × det([[1]]) = 1
```

Therefore, the adjoint of A is:
Adj(A) = [[4, -2], [-3, 1]]

### Example 2
Determine the adjoint of the matrix A = [[1, 2, 3], [0, 3, -1], [5, -2, 4]].

**Solution:**
The cofactors of all the entries of A are:
```
C₁₁ = (-1)² × det([[3, -1], [-2, 4]]) = 1 × (12 - 2) = 10
C₁₂ = (-1)³ × det([[0, -1], [5, 4]]) = -1 × (0 + 5) = -5
C₁₃ = (-1)⁴ × det([[0, 3], [5, -2]]) = 1 × (0 - 15) = -15
C₂₁ = (-1)³ × det([[2, 3], [-2, 4]]) = -1 × (8 + 6) = -14
C₂₂ = (-1)⁴ × det([[1, 3], [5, 4]]) = 1 × (4 - 15) = -11
C₂₃ = (-1)⁵ × det([[1, 2], [5, -2]]) = -1 × (-2 - 10) = 12
C₃₁ = (-1)⁴ × det([[2, 3], [3, -1]]) = 1 × (-2 - 9) = -11
C₃₂ = (-1)⁵ × det([[1, 3], [0, -1]]) = -1 × (-1 - 0) = 1
C₃₃ = (-1)⁶ × det([[1, 2], [0, 3]]) = 1 × (3 - 0) = 3
```

Therefore, the adjoint of A is:
Adj(A) = [[10, -14, -11], [-5, -11, 12], [-15, 1, 3]]

### Exercise 4.9

1. Determine the adjoint of A = [[-1, 2], [3, 1]]

2. Determine the adjoint of B = [[1, 0, 1], [0, 2, 0], [3, 0, 4]]

### Adjoint and Determinant

#### Activity 4.10
Let A = [[1, 2], [3, 4]]. Then find:
a. det(A)
b. Adj(A)
c. A(Adj(A))
d. (Adj(A))A

From your responses in Activity 4.10, observe that:
A(Adj(A)) = det(A)I₂ = (Adj(A))A

In general, given a square matrix of order n, A(Adj(A)) = det(A)Iₙ = (Adj(A))A.

If det(A) is not equal to zero, then:
A × (Adj(A)/det(A)) = Iₙ

This implies, A is invertible and its inverse is given by:
A⁻¹ = Adj(A)/det(A)

Thus, the following result is proved.

### Theorem 4.6
Let A be a square matrix of order n. Then, A(Adj(A)) = (Adj(A))A = det(A)Iₙ, and if the determinant of A is not zero, then A is invertible and its inverse is given by:
A⁻¹ = Adj(A)/det(A)

### Example 3
Find the inverse of A = [[1, 2], [3, 4]] (if it exists).

**Solution:**
From Example 1, Adj(A) = [[4, -2], [-3, 1]]
And det(A) = (1×4) - (2×3) = 4 - 6 = -2 ≠ 0

This implies, A is invertible and its inverse is given by:
A⁻¹ = Adj(A)/det(A) = (-1/2) × [[4, -2], [-3, 1]] = [[-2, 1], [1.5, -0.5]]

### Example 4
Find the inverse of A = [[1, 2, 3], [0, 3, -1], [5, -2, 4]] (if it exists).

**Solution:**
From Example 2, Adj(A) = [[10, -14, -11], [-5, -11, 12], [-15, 1, 3]]
And det(A) = 1×10 + 2×(-5) + 3×(-15) = 10 - 10 - 45 = -45

Therefore, A is invertible and its inverse is given by:
A⁻¹ = Adj(A)/det(A) = (-1/45) × [[10, -14, -11], [-5, -11, 12], [-15, 1, 3]]

### Exercise 4.10
Find the determinant, adjoint and inverse (if it exists) of each one the following matrices:
```
a. A = [[2, 1], [3, 4]]
b. B = [[1, 2, 0], [0, 1, 1], [1, 0, 2]]
```

## 4.6 Solutions of System of Linear Equations Using Cramer's Rule

We can use determinants to obtain another method, known as **Cramer's Rule**, to solve systems of n linear equations in n variables if the coefficient matrix of the system is invertible.

Consider a system of n linear equations AX = B, where A is a square matrix of order n. If A is invertible, then the system has a unique solution and this unique solution is given by X = A⁻¹B.

### Activity 4.11
Consider a system of two linear equations in two variables given by:
x + y = 1
x - y = 3

a. Solve the given system.

b. Compute det([[1, 1], [1, -1]]) and other relevant determinants.

From your responses in Activity 4.11, observe that:
The matrix [[1, 3], [1, -1]] is obtained by replacing the first column of the coefficient matrix of the given system by [1, 3]ᵀ.
The matrix [[1, 1], [1, 3]] is obtained by replacing the second column of the coefficient matrix of the given system by [1, 3]ᵀ.

This method is called **Cramer's Rule**.

### Theorem 4.7 (Cramer's Rule for Two Variables)
Given the system:
```
ax + by = e
cx + dy = f
```
in two variables x and y, if ad - bc ≠ 0, then the given system has a unique solution and it is given by:
```
x = |e  b| / |a  b|
    |f  d|   |c  d|

y = |a  e| / |a  b|
    |c  f|   |c  d|
```

### Example 1
Use Cramer's rule, if possible, and solve the following system of linear equations:
```
x + y = 1
2x + y = 5
```

**Solution:**
The given system in matrix form is:
```
[1  1][x] = [1]
[2  1][y]   [5]
```

The determinant of the coefficient matrix is:
```
|1  1| = 1×1 - 1×2 = -1 ≠ 0
|2  1|
```

Thus, the system has a unique solution that is given by:
```
x = |1  1| / -1 = (1×1 - 1×5)/-1 = (1-5)/-1 = 4
    |5  1|

y = |1  1| / -1 = (1×5 - 1×2)/-1 = (5-2)/-1 = -3
    |2  5|
```

Therefore, the solution set of the given system of linear equations is {(4, -3)}.

### Exercise 4.11
Use Cramer's rule, if possible, and solve each of the following system of linear equations:
```
a. x + y = 2
   2x + y = 9

b. 3x - 4y = 2
   x + 3y = 8

c. x - y = 2
   -x + 2y = 0

d. 2x - 3y = 4
   -2x + y = -1
```

### Theorem 4.8 (Cramer's Rule for Three Variables)
Given the system:
```
a₁₁x + a₁₂y + a₁₃z = b₁
a₂₁x + a₂₂y + a₂₃z = b₂
a₃₁x + a₃₂y + a₃₃z = b₃
```
in three variables x, y and z, if D = |aᵢⱼ| ≠ 0, then the given system has a unique solution and it is given by:
```
x = Dₓ/D, y = Dᵧ/D, z = D_z/D
```
where D is the determinant of the coefficient matrix, and Dₓ, Dᵧ, D_z are obtained by replacing the first, second, and third columns of the coefficient matrix by the column vector [b₁, b₂, b₃]ᵀ respectively.

### Example 2
Using Cramer's Rule (if possible) and solve the following system of linear equations:
```
2x + 3y - 5z = 1
x + y - z = 2
2y + z = 8
```

**Solution:**
The given system of linear equations is given in matrix form as:
```
[2  3 -5][x]   [1]
[1  1 -1][y] = [2]
[0  2  1][z]   [8]
```

The determinant of the coefficient matrix is:
```
|2  3 -5|
|1  1 -1| = 2(1×1 - (-1)×2) - 3(1×1 - (-1)×0) + (-5)(1×2 - 1×0)
|0  2  1|
= 2(1 + 2) - 3(1 - 0) - 5(2 - 0)
= 2(3) - 3(1) - 5(2)
= 6 - 3 - 10 = -7 ≠ 0
```

Thus, the system has a unique solution and by Cramer's Rule:
```
Dₓ = |1  3 -5|
     |2  1 -1| = 1(1×1 - (-1)×2) - 3(2×1 - (-1)×8) + (-5)(2×2 - 1×8)
     |8  2  1|
   = 1(1 + 2) - 3(2 + 8) - 5(4 - 8)
   = 1(3) - 3(10) - 5(-4)
   = 3 - 30 + 20 = -7

Dᵧ = |2  1 -5|
     |1  2 -1| = 2(2×1 - (-1)×8) - 1(1×1 - (-1)×0) + (-5)(1×8 - 2×0)
     |0  8  1|
   = 2(2 + 8) - 1(1 - 0) - 5(8 - 0)
   = 2(10) - 1(1) - 5(8)
   = 20 - 1 - 40 = -21

D_z = |2  3  1|
      |1  1  2| = 2(1×8 - 2×2) - 3(1×8 - 2×0) + 1(1×2 - 1×0)
      |0  2  8|
    = 2(8 - 4) - 3(8 - 0) + 1(2 - 0)
    = 2(4) - 3(8) + 1(2)
    = 8 - 24 + 2 = -14

Therefore:
x = Dₓ/D = -7/-7 = 1
y = Dᵧ/D = -21/-7 = 3
z = D_z/D = -14/-7 = 2
```

Therefore, the solution set of the given system of linear equations is {(1, 3, 2)}.

### Remark
It is worth mentioning that, in finding the solution set of a system of n linear equations in n variables using Cramer's Rule, we have to evaluate n+1 determinants. For systems with large number of equations, Gaussian Elimination Method is more efficient.

### Exercise 4.12
Use Cramer's rule, if possible, and solve each of the following system of linear equations:
```
a. x + y + z = 3
   x - y + z = 2
   2x + z = 4

b. x + y - z = 1
   2x + 2y + 2z = 5
   x - y + z = 2

c. x + y + z = 3
   2x + 2z = 3
   x + y + 2z = 4
```

### Systems of Linear Equations with no Solution or Infinitely Many Solutions

Given a system AX = B of n linear equations in n variables, where n is a positive integer, if |A| = 0, we cannot apply Cramer's rule to solve the system and further investigation is required.

If |A| = 0, then there are two possibilities: the system has no solution or the system has infinitely many solutions.

The cases of no solution or infinitely many solutions of a given system of linear equations are considered in the following two examples.

### Example 3
Solve the following system of linear equations (if possible):
```
-x + 2y = 3
3x - 6y = 0
```

**Solution:**
The coefficient matrix of the given system is:
```
[-1  2]
[ 3 -6]
```
and its determinant is (-1)(-6) - (2)(3) = 6 - 6 = 0.

This implies the system has no unique solution and we cannot use the Cramer's rule. The system has no solution or it has infinitely many solutions and we can use elimination method to determine.

The augmented matrix of the system is:
```
[-1  2 | 3]
[ 3 -6 | 0]

→ (R₂ → R₂ + 3R₁) →
[-1  2 | 3]
[ 0  0 | 9]
```

The last matrix is in REF. Thus, the given system is equivalent to the system:
```
-x + 2y = 3
0 = 9
```

The last equation, 0 = 9, is always false. Therefore, the system has no solution.

Graphing the lines represented by the two equations reveals that the two lines are parallel.

### Example 4
Solve the following system of linear equations:
```
x - 2y + 3z = 0
3x + y - 2z = 0
2x - 4y + 6z = 0
```

**Solution:**
Let us first determine the determinant of the coefficient matrix:
```
|1  -2  3|
|3   1 -2| = 1(1×6 - (-2)×(-4)) - (-2)(3×6 - (-2)×2) + 3(3×(-4) - 1×2)
|2  -4  6|
= 1(6 - 8) + 2(18 + 4) + 3(-12 - 2)
= 1(-2) + 2(22) + 3(-14)
= -2 + 44 - 42 = 0
```

This implies the system has no unique solution and we cannot use the Cramer's rule. The system has no solution or it has infinitely many solutions and we can use elimination method to determine.

The augmented matrix of the system is:
```
[1  -2  3 | 0]
[3   1 -2 | 0]
[2  -4  6 | 0]

→ (R₂ → R₂ - 3R₁, R₃ → R₃ - 2R₁) →
[1  -2  3 | 0]
[0   7 -11| 0]
[0   0  0 | 0]
```

The last matrix is in Row Echelon Form. Then, the given system of linear equations has the same solution as the system:
```
x - 2y + 3z = 0
7y - 11z = 0
```

From the last equation, 7y - 11z = 0 ⇒ y = (11/7)z, where z ∈ ℝ.

Substituting this value in the first equation gives us:
```
x = 2y - 3z = 2(11/7)z - 3z = (22/7)z - (21/7)z = (1/7)z
```

Therefore, the given system has infinitely many solutions given by:
```
{(x, y, z) | x = (1/7)z, y = (11/7)z, z ∈ ℝ}
```

### Exercise 4.13
Solve each of the following systems of linear equations, if possible:
```
a. x + y - 2z = 3
   2x - 2y + 4z = -6
   y - z = 5

b. x + y = 2
   2x + 2y = -4

c. x + y - z = 1
   2x + 2y + 2z = 5
   x - y + z = 2
```

## 4.7 Applications

### Polynomial Interpolation

In studying a set of data that relates two variables x and y, it may be the case that we can use a polynomial to "fit" to the data. If such a polynomial can be established, it can be used to estimate values of x and y which have not been provided.

### Example 1
Consider the data points (0,1), (1,2) and (2, 22). Find an interpolating polynomial p(x) of degree at most two, and estimate the value of p(3).

**Solution:**
The desired polynomial p(x) is given by p(x) = a + bx + cx².
Then, p(0) = 1 = a, p(1) = 2 = a + b + c, and p(2) = 22 = a + 2b + 4c.

This gives us a system of linear equations:
```
a = 1
a + b + c = 2
a + 2b + 4c = 22
```

and the coefficient matrix of the given system is:
```
[1 0 0]
[1 1 1]
[1 2 4]
```

The determinant is 1(1×4 - 1×2) - 0 + 0 = 1(4-2) = 2 ≠ 0.

Then, the given system of linear equations has a unique solution. We can solve the system using Cramer's rule as follows:

```
D = |1 0 0|
    |1 1 1| = 2
    |1 2 4|

Dₐ = |1 0 0|
     |2 1 1|
     |22 2 4| = 1(1×4 - 1×2) = 2

D_b = |1 1 0|
      |1 2 1|
      |1 22 4| = 1(2×4 - 1×22) - 1(1×4 - 1×1) = 1(8-22) - 1(4-1) = -14 - 3 = -17

D_c = |1 0 1|
      |1 1 2|
      |1 2 22| = 1(1×22 - 2×2) - 0 + 1(1×2 - 1×1) = 1(22-4) + 1(2-1) = 18 + 1 = 19

Therefore:
a = Dₐ/D = 2/2 = 1
b = D_b/D = -17/2 = -8.5
c = D_c/D = 19/2 = 9.5
```

Therefore, the required polynomial is:
p(x) = 1 - 8.5x + 9.5x² and p(3) = 1 - 8.5(3) + 9.5(9) = 1 - 25.5 + 85.5 = 61.

### Exercise 4.14
Consider data points (0,2), (1,5) and (2,25). Find an interpolating polynomial p(x) of at most degree two and estimate the values of p(-1) and p(3).

### Area of a Triangle in the xy-plane

Determinant can be used to find the area of a triangle whose three vertices are in the xy-plane.

The area of a triangle with vertices A(x₁, y₁), B(x₂, y₂) and C(x₃, y₃) in the plane is given by:
```
Area(ΔABC) = (1/2) × |det(M)|
```
where M = [[x₁, y₁, 1], [x₂, y₂, 1], [x₃, y₃, 1]].

If det(M) > 0, the orientation of the vertices is counterclockwise.
If det(M) < 0, the orientation of the vertices is clockwise.
Area(ΔABC) = (1/2) × |det(M)|.

### Example 2
Find the area of the triangle with vertices A(0,5), B(0,0) and C(5,0).

**Solution:**
Using the cofactor expansion along the second row:
```
|0  5  1|
|0  0  1| = 0 - 0 + 1(0×0 - 5×5) = -25
|5  0  1|
```

det(M) = -25 < 0.

Therefore, Area(ΔABC) = (1/2) × |-25| = 12.5 square units.

### Example 3
Find the area of the triangle with vertices P(1,1), Q(1,3) and R(4,5).

**Solution:**
Using the cofactor expansion along the first row:
```
|1  1  1|
|1  3  1| = 1(3×1 - 1×5) - 1(1×1 - 1×4) + 1(1×5 - 3×4)
|4  5  1|
= 1(3-5) - 1(1-4) + 1(5-12)
= 1(-2) - 1(-3) + 1(-7)
= -2 + 3 - 7 = -6 < 0
```

Therefore, Area(ΔPQR) = (1/2) × |-6| = 3 square units.

### Exercise 4.15
Find the area of the triangle with vertices the following three points:
```
a. (-2,0), (0,2) and (2,0)
b. (1,0), (2,1) and (2,3)
```

### Test for Collinear Points in the xy-plane

Three points in xy-plane are said to be collinear if all the three points lie on the same line. Determinant can be used to determine whether three points in the xy-plane are collinear or not.

Three points A(x₁, y₁), B(x₂, y₂) and C(x₃, y₃) in the xy-plane are collinear if and only if:
```
|x₁  y₁  1|
|x₂  y₂  1| = 0
|x₃  y₃  1|
```

### Example 4
Determine if the points A(1,1), B(2,2) and C(3,3) are collinear.

**Solution:**
```
|1  1  1|
|2  2  1| = 1(2×1 - 1×3) - 1(2×1 - 1×3) + 1(2×3 - 2×3)
|3  3  1|
= 1(2-3) - 1(2-3) + 1(6-6)
= -1 + 1 + 0 = 0
```

This implies the points A(1,1), B(2,2) and C(3,3) are collinear.

### Example 5
Determine if the points A(0,1), B(1,0) and C(0,0) in the xy-plane are collinear.

**Solution:**
```
|0  1  1|
|1  0  1| = 0(0×1 - 1×0) - 1(1×1 - 1×0) + 1(1×0 - 0×0)
|0  0  1|
= 0 - 1(1-0) + 1(0-0)
= -1 ≠ 0
```

This implies the points A(0,1), B(1,0) and C(0,0) are not collinear.

### Two Point Form of Equation of a Line in the xy-plane

We can use determinant to find equation of a line in xy-plane passing through two points. An equation of a line passing through two distinct points P(x₁, y₁) and Q(x₂, y₂) is given by:
```
|x   y   1|
|x₁  y₁  1| = 0
|x₂  y₂  1|
```
where (x, y) is a point on the line.

### Example 6
Find an equation of the line passing through the points P(2,0) and R(0,3).

**Solution:**
If (x, y) is a point on the line passing through P(2,0) and R(0,3), then:
```
|x   y   1|
|2   0   1| = 0
|0   3   1|
```

Expanding:
```
x(0×1 - 1×3) - y(2×1 - 1×0) + 1(2×3 - 0×0) = 0
x(0-3) - y(2-0) + 1(6-0) = 0
-3x - 2y + 6 = 0
```

Thus, the general equation of the line passing through the two points P(2,0) and R(0,3) is:
3x + 2y - 6 = 0.

### Exercise 4.16

1. Determine if the following set of points are collinear:
   ```
   a. (1,1), (3,2) and (4,3)
   b. (1,0), (2,1) and (3,2)
   ```

2. Find the general form of equation of the line passing through each of the following pairs of points:
   ```
   a. (1,1) and (3,2)
   b. (1,-1) and (-2,2)
   c. (-1,1) and (-4,2)
   ```

### Problem Solving

1. If the area of a triangle with vertices (2,0), (-2,0) and (0,k) is 8 sq.units, then determine the value(s) of k.

2. If the points (3,k), (k,1) and (6,-1) are collinear, then determine the value(s) of k.

## Summary

1. If A = [[a₁₁, a₁₂], [a₂₁, a₂₂]], then det(A) = a₁₁a₂₂ - a₁₂a₂₁.

2. If A = (aᵢⱼ)ₙ×ₙ, then the matrix obtained by crossing out the i-th row and j-th column of A is denoted by Aᵢⱼ.
   a. det(Aᵢⱼ) is called the **minor** of the element aᵢⱼ
   b. Cᵢⱼ = (-1)ⁱ⁺ʲ det(Aᵢⱼ) is called the **cofactor** of aᵢⱼ

3. If A = (aᵢⱼ)₃×₃, det(A) = a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃, expansion of the determinant along the first row.

4. If A is a triangular matrix, then det(A) = product of diagonal elements.

5. If A and B are two square matrices of order n, then:
   a. det(Aᵀ) = det(A)
   b. det(AB) = det(A)det(B)

6. If A is an invertible matrix of order n, then det(A) is not equal to zero and the determinant of A⁻¹ is given by det(A⁻¹) = 1/det(A).

7. Let A = (aᵢⱼ)ₙ×ₙ be a square matrix of order n and Cᵢⱼ = (-1)ⁱ⁺ʲ det(Aᵢⱼ) be the cofactor of the entry aᵢⱼ for i = 1,...,n and j = 1,...,n. Then matrix Adj(A) = (Cᵢⱼ)ᵀ is called **Adjoint** of A.

8. Let A be a square matrix of order n. Then A(Adj(A)) = (Adj(A))A = det(A)Iₙ and if the determinant of A is not zero, then A is invertible and its inverse is given by A⁻¹ = Adj(A)/det(A).

## Review Exercise

1. Find the minor and the cofactor of each entry of the following matrices:
   ```
   a. A = [[1, 1], [2, 3]]
   b. B = [[1, 1, 3], [2, 3, 1], [0, 2, -1]]
   ```

2. Find the determinant of each of the following matrices:
   ```
   a. A = [[2, 1], [3, 4]]
   b. B = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
   c. C = [[2, 0, 0], [0, 3, 0], [0, 0, 4]]
   ```

3. Let A and B be square matrices of order 3 and det(A) = 2 and det(B) = -3. Then find each of the following determinants:
   ```
   a. det(2AB)
   b. det(ABᵀ)
   c. det(A⁻¹B)
   ```

4. Determine the invertibility of each of the following matrices and find the inverse if it exists:
   ```
   a. A = [[2, 1], [4, 3]]
   b. B = [[1, 2], [2, 4]]
   c. C = [[1, 0, 1], [0, 2, 0], [1, 0, 1]]
   d. D = [[1, 2, 3], [0, 1, 2], [0, 0, 1]]
   ```

5. Use Cramer's rule to solve each of the following systems of linear equations:
   ```
   a. x + 2y = 4
      3x - y = 5

   b. x + y + z = 1
      2x + 3y + 2z = 7
      x - y + z = 2
   ```

6. Find the area of the triangle with vertices the following three set of points:
   ```
   a. (-3,0), (0,3) and (1,1)
   b. (1,-1), (1,2) and (3,2)
   ```

7. Find the general form of equation of the line passing through each of the following pairs of points:
   ```
   a. (1,1) and (-1,2)
   b. (1,2) and (-2,-3)
   c. (1,0) and (-4,4)
   ```

8. Determine if the following set of points are collinear:
   ```
   a. (1,1), (3,2) and (5,-2)
   b. (1,0), (2,2) and (3,3)
   ```