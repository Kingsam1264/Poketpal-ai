# Unit 3: Exponential and Logarithmic Functions

## Unit Outcomes

By the end of this unit, you will be able to:
- Apply the laws of exponents for real exponents
- Define exponential and logarithmic functions
- Identify domain and range of exponential and logarithmic functions
- Solve mathematical problems involving exponents and logarithms

## Unit Contents

3.1 Exponents and Logarithms
3.2 The Exponential Functions and Their Graphs
3.3 The Logarithmic Functions and Their Graphs
3.4 Relation between Exponential and Logarithmic Functions
3.5 Applications
Summary
Review Exercise

**Keywords:** exponential equation, mantissa, logarithm of a number, logarithmic equation, base, natural logarithm, characteristics, exponential function, power, common logarithm, logarithmic equation, asymptote, exponent, logarithmic function, antilogarithm

## 3.1 Exponents and Logarithms

### Introduction

Two of the most important functions that occur in mathematics and its applications are the exponential function $f(x)=a^x$ and its inverse function, the logarithmic function $g(x)=\log_a x$. Such functions arise in many applications and are powerful mathematical tools for solving real life problems such as analyzing population growth, decay of radioactive substances, calculating compound interest in accounting, etc.

In this unit, we will investigate their various properties and learn how they can be used in solving real life problems.

### 3.1.1 Exponents

Whenever we use expressions like $7^3$ or $2^5$, we are using exponents. The symbol $2^5$ means $2 \times 2 \times 2 \times 2 \times 2$ (5 factors). This symbol is read as "the 5th power of 2" or "2 raised to 5". The expression $2^5$ is just a shorthand way of writing the product of five twos. The number 2 is called the base, and 5 is called the exponent.

Similarly, if $a$ is any real number, then $a^4$ stands for $a \times a \times a \times a$. Here $a$ is the base, and 4 is the exponent.

#### Activity 3.1

1. Identify the base and the exponent of each of the following:
   a) $3^4$
   b) $(-3)^4$
   c) $\left(\frac{3}{5}\right)^5$
   d) $(-1)^9$

2. Find the values of each of the following:
   a) $(-1)^1$
   b) $(-1)^4$
   c) $\left(\frac{3}{5}\right)^1$
   d) $(-2)^7$
   e) $-2^4$
   f) $(-2)^4$
   g) $\left(-\frac{2}{3}\right)^4$

#### Definition 3.1

For a natural number $n$ and a real number $a$, the symbol $a^n$, read as "the $n^{th}$ power of $a$" or "$a$ raised to $n$", is defined as follows:

$$a^n = \underbrace{a \times a \times \ldots \times a}_{n \text{ factors}}$$

In $a^n$, $a$ is called the base and $n$ is called the exponent.

Special names are used when the exponent is 2 or 3. The expression $b^2$ is usually read as "$b$ squared", and the expression $b^3$ as "$b$ cubed". Thus, "two cubed" means $2^3 = 2 \times 2 \times 2 = 8$.

Note that in $(-a)^n$ the base is $-a$ but in $-a^n$ the base is only $a$.

For example:
- $(-3)^2 = (-3) \times (-3) = 9$ but $-3^2 = -(3 \times 3) = -9$
- $(3a)^3 = 3a \times 3a \times 3a = 27a^3$ but $3a^3 = 3 \times a \times a \times a = 3a^3$

#### Example 1

Evaluate the following:
a. $2^3$
b. $-2^3$
c. $(-2)^3$
d. $-(-2)^3$
e. $(-4t)^3$

**Solution:**
a. $2^3 = 2 \times 2 \times 2 = 8$
b. $-2^3 = -(2 \times 2 \times 2) = -8$
c. $(-2)^3 = (-2) \times (-2) \times (-2) = -8$
d. $-(-2)^3 = -[(-2) \times (-2) \times (-2)] = -(-8) = 8$
e. $(-4t)^3 = -4t \times -4t \times -4t = -64t^3$

### Laws of Exponents

If $a$ is any real number and $n$ is a positive integer, then $a^n$ means $a \times a \times \ldots \times a$ ($n$ factors). The laws for the behaviors of exponents follow naturally from this meaning of $a^n$ for a natural number $n$.

If $a$ is a real number and $m$ and $n$ are natural numbers, then:

**Law 1.** $a^m \times a^n = a^{m+n}$, where $a$ is a real number and $m$ and $n$ are natural numbers. That is, to multiply two numbers in exponential form (with the same base), we add their exponents.

**Example 2:**
$$2^3 \times 2^4 = (2 \times 2 \times 2) \times (2 \times 2 \times 2 \times 2) = \underbrace{2 \times 2 \times 2 \times 2 \times 2 \times 2 \times 2}_{7 \text{ factors}} = 2^7$$

**Law 2.** $\frac{a^n}{a^m} = a^{n-m}$, where $a$ is a real number different from zero and $m$ and $n$ are natural numbers.

**Example 3:**
$$\frac{3^6}{3^3} = \frac{3 \times 3 \times 3 \times 3 \times 3 \times 3}{3 \times 3 \times 3} = \frac{3 \times 3 \times 3 \times (3 \times 3 \times 3)}{3 \times 3 \times 3} = 3 \times 3 \times 3 = 3^3 = 3^{6-3}$$

**Law 3.** $(a^m)^n = a^{m \times n}$, where $a$ is a real number and $m$ and $n$ are natural numbers.

**Example 4:**
$$(3^2)^3 = (3 \times 3) \times (3 \times 3) \times (3 \times 3) = 3^6 = 3^{2 \times 3}$$

**Law 4.** $(ab)^n = a^n b^n$, where $a$ and $b$ are real numbers and $n$ is a natural number.

**Example 5:**
$$(2 \times 3)^3 = (2 \times 3) \times (2 \times 3) \times (2 \times 3) = (2 \times 2 \times 2) \times (3 \times 3 \times 3) = 2^3 \times 3^3$$

**Law 5.** $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$, where $a$ and $b$ are real numbers, $b \neq 0$, and $n$ is a natural number.

**Example 6:**
$$\left(\frac{2}{3}\right)^4 = \frac{2}{3} \times \frac{2}{3} \times \frac{2}{3} \times \frac{2}{3} = \frac{2 \times 2 \times 2 \times 2}{3 \times 3 \times 3 \times 3} = \frac{2^4}{3^4}$$

#### Exercise 3.1

1. Evaluate the following:
   a) $4^2$
   b) $-4^2$
   c) $(-4)^2$
   d) $-(−3)^3$

2. Simplify the exponential expressions:
   a) $a^3 \times a^2$
   b) $\frac{a^5}{a^2}$
   c) $(a^2)^3$
   d) $(2a)^4$
   e) $\left(\frac{a}{2}\right)^2$

### Zero and Negative Exponents

#### Activity 3.2

Evaluate each of the following using the law $\frac{a^m}{a^n} = a^{m-n}$:

a) $\frac{3^2}{3^2}$; what is the value of $3^0$?
b) $\frac{(-3)^2}{(-3)^2}$; what is the value of $(-3)^0$?
c) $\frac{(0.1)^2}{(0.1)^2}$; what is the value of $(0.1)^0$?

Let us begin by extending $a^n$ to include an exponent equal to 0 ($n=0$). We want to make sense of the expression $a^0$ in such a way that Laws 1, 2, and 3 hold. What happens to law 2 when $m=n$? Law 2 gives:

$$\frac{a^n}{a^n} = a^{n-n} = a^0$$

It doesn't make sense to talk about a number being multiplied by itself 0 times. However, if we want law 2 to continue to be valid when $n=m$, then we must define the expression $a^0$ to mean the number 1.

If $a \neq 0$, then we define $a^0$ to be equal to 1. We do not attempt to give any meaning to the expression $0^0$. It remains undefined.

Using this definition, we can check laws 1 and 2 also remain valid:
- $a^m \times a^0 = a^m \times 1 = a^m = a^{m+0}$
- $\frac{a^n}{a^0} = \frac{a^n}{1} = a^n = a^{n-0}$

Now, what if $n < m$? For example, let us try $n=2$ and $m=3$:

$$\frac{a^2}{a^3} = a^{2-3} = a^{-1}$$

But:

$$\frac{a^2}{a^3} = \frac{a \times a}{a \times a \times a} = \frac{1}{a}$$

Therefore, $\frac{1}{a} = a^{-1}$.

Similarly, for $a \neq 0$, $\frac{a^5}{a^8} = a^{-3}$ implies $\frac{1}{a^3} = a^{-3}$, and $\frac{a^8}{a^{20}} = a^{-12}$ implies $\frac{1}{a^{12}} = a^{-12}$.

#### Definition 3.2 Zero and Negative Exponents

If $n$ is a positive integer and $a \neq 0$, then:
1. $a^0 = 1$ and $0^0$ is undefined.
2. $a^{-n} = \frac{1}{a^n}$.

#### Example 7

Evaluate the following:
a) $1^0$
b) $(-10)^0$
c) $\left(\frac{1}{2}\right)^0$
d) $(0.123)^0$

**Solution:**
a) $1^0 = 1$
b) $(-10)^0 = 1$
c) $\left(\frac{1}{2}\right)^0 = 1$
d) $(0.123)^0 = 1$

#### Example 8

Evaluate the following:
a) $3^{-2}$
b) $\left(\frac{2}{3}\right)^{-3}$
c) $\left(\frac{1}{2}\right)^{-2}$

**Solution:**
a) $3^{-2} = \frac{1}{3^2} = \frac{1}{9}$
b) $\left(\frac{2}{3}\right)^{-3} = \frac{1}{\left(\frac{2}{3}\right)^3} = \frac{3^3}{2^3} = \left(\frac{3}{2}\right)^3 = \frac{27}{8}$
c) $\left(\frac{1}{2}\right)^{-2} = \frac{1}{\left(\frac{1}{2}\right)^2} = \frac{2^2}{1^2} = 2^2 = 4$

#### Exercise 3.2

Evaluate the following:
a) $4^0$
b) $(-11)^0$
c) $\left(\frac{22}{55}\right)^0$
d) $2^{-3}$
e) $10^{-2}$
f) $\left(\frac{3}{4}\right)^{-3}$
g) $\left(\frac{1}{2}\right)^{-5}$

### Laws for Integer Exponents

For real numbers $a$ and $b$ and integers $m$ and $n$, the following laws of exponents hold true:

1. $a^m \times a^n = a^{m+n}$ ... law of multiplication of powers of the same base
2. $\frac{a^m}{a^n} = a^{m-n}$ ... law of division of powers of the same base
3. $(a^m)^n = a^{mn}$ ... law of power of a power
4. $(a \times b)^n = a^n \times b^n$ ... law of a power of a product
5. $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$ ... law of a power of a quotient

#### Example 9

Simplify each of the following:
a) $a^{-2} \times a^5$
b) $(3a)^4 \times (3a)^{-2}$
c) $\frac{5^4}{5^6}$
d) $(a^2)^{-3}$
e) $x^2 \times x^{-3} \times x^4$
f) $\left(\frac{3a}{16}\right)^2$
g) $(81)^t \times 9^{2t}$
h) $(-5x \times 3y)^2$

**Solution:**
a) $a^{-2} \times a^5 = a^{-2+5} = a^3$
b) $(3a)^4 \times (3a)^{-2} = (3a)^{4+(-2)} = (3a)^2 = 3^2 a^2 = 9a^2$
c) $\frac{5^4}{5^6} = 5^{4-6} = 5^{-2} = \frac{1}{25}$
d) $(a^2)^{-3} = a^{2 \times (-3)} = a^{-6} = \frac{1}{a^6}$
e) $x^2 \times x^{-3} \times x^4 = (x^2 \times x^{-3}) \times x^4 = x^{-1} \times x^4 = x^{-1+4} = x^3$
f) $\left(\frac{3a}{16}\right)^2 = \frac{3^2 \times a^2}{16^2} = \frac{9a^2}{256}$
g) $(81)^t \times 9^{2t} = 3^{4t} \times (3^2)^{2t} = 3^{4t} \times 3^{4t} = 3^{4t+4t} = 3^{8t}$
h) $(-5x \times 3y)^2 = (-5x)^2 \times (3y)^2 = (-5)^2 x^2 \times 3^2 y^2 = 25x^2 \times 9y^2 = 225x^2 y^2$

#### Exercise 3.3

Simplify the exponential expressions using laws of exponents:
a) $x^{-3} \times x^4$
b) $\frac{2^5}{2^7}$
c) $\frac{3^{-5}}{3^{-3}}$
d) $(-2x \times 4y)^2$
e) $x^{-3} \times x^{-2}$
f) $(4y)^2 \times (8y)^{-3}$
g) $2^t \times 2^{3t} \times 2^{2t}$
h) $\frac{(2x)^2}{(2x)^4}$
i) $\frac{(-3x)^2}{(-3x)^4}$
j) $(3^2)^{2n}$
k) $(a^y)^{-1}$
l) $(a^{3x})^4$
m) $(2a^{-3} \times b^2)^{-2}$
n) $\frac{(a^2)^{-3} \times (a^3)^4}{a^{10}}$
o) $\left(\frac{m^{-5}n^2}{n^{-2}m^6}\right)^{-2}$

### The Rational Exponent

Extend the definition of exponents even further to include rational numbers. For example, to define powers like $a^{\frac{1}{2}}$, consider $9^{\frac{1}{2}}$.

Applying law 3 and taking the square of $9^{\frac{1}{2}}$, we get:
$$\left(9^{\frac{1}{2}}\right)^2 = 9^{\left(\frac{1}{2}\right) \cdot 2} = 9^1 = 9$$

Thus, $9^{\frac{1}{2}}$ is a number that yields 9 when squared. There are two numbers whose square is 9: they are 3 and -3. We define $9^{\frac{1}{2}}$ to be the positive square root of 9, that is, 3. To avoid ambiguity, we define $a^{\frac{1}{2}}$ as the non-negative number that yields $a$ when squared. Thus, $9^{\frac{1}{2}} = 3$.

In general, $a^{\frac{1}{2}}$ is defined to be the positive square root of $a$, which can also be written as $\sqrt{a}$. So $a^{\frac{1}{2}} = \sqrt{a}$. Of course, $a$ must be positive if $a^{\frac{1}{2}}$ is meaningful because if we take any real number and multiply it by itself, then we get a positive number.

We can arrive at the definition of $a^{\frac{1}{3}}$ in the same way as we did for $a^{\frac{1}{2}}$. For example, if we cube $8^{\frac{1}{3}}$, we get:
$$\left(8^{\frac{1}{3}}\right)^3 = 8^{\left(\frac{1}{3} \times 3\right)} = 8$$

Thus, $8^{\frac{1}{3}}$ is the number that yields 8 when cubed. This time we have no trouble giving a meaning to $(-27)^{\frac{1}{3}}$ even though $-27 < 0$. There is a number when multiplied by itself 3 times gives -27, namely -3, so $(-27)^{\frac{1}{3}} = -3$.

Thus, we define $a^{\frac{1}{3}}$ (called the cube root of $a$) as the quantity that yields $a$ when cubed.

#### Definition 3.3 The Rational Exponent $a^{\frac{1}{n}}$

If $a$ is positive, then $a^{\frac{1}{n}}$ is defined to be a positive number whose $n^{th}$ power is equal to $a$. This number is called the $n^{th}$ root of $a$ and sometimes written as $\sqrt[n]{a}$. If $n$ is even and $a$ is negative, $a^{\frac{1}{n}}$ cannot be defined because raising any number to an even power results in a positive number. If $n$ is odd and $a$ is negative, $a^{\frac{1}{n}}$ can be defined. It is a negative number whose $n^{th}$ power is equal to $a$.

#### Example 10

Express in the form $a^{\frac{1}{n}}$ and evaluate the following:
a) $\sqrt[4]{16}$
b) $\sqrt[3]{8}$
c) $\sqrt[3]{-8}$
d) $\sqrt[4]{-16}$

**Solution:**
a) Since $2^4 = 16$, $\sqrt[4]{16} = (16)^{\frac{1}{4}} = 2$
b) Since $2^3 = 8$, $\sqrt[3]{8} = (8)^{\frac{1}{3}} = 2$
c) Since $(-2)^3 = -8$, $\sqrt[3]{-8} = (-8)^{\frac{1}{3}} = -2$
d) $\sqrt[4]{-16} = (-16)^{\frac{1}{4}}$ is not a real number because there is no real number $a$ such that $a^4 = -16$

#### Exercise 3.4

Express in the form $a^{\frac{1}{n}}$ and evaluate the following:
a) $\sqrt[4]{81}$
b) $\sqrt[5]{32}$
c) $\sqrt[3]{125}$
d) $\sqrt[3]{-27}$
e) $-\sqrt[3]{-1000}$
f) $\sqrt[4]{-10000}$

#### Activity 3.3

Simplify the following expressions:
a) $2^{\frac{1}{2}} \times 2^{\frac{1}{2}}$
b) $\sqrt{2} \times \sqrt{2}$
c) $2^{\frac{1}{2}} \times 2^{\frac{1}{2}} \times 2^{\frac{1}{2}}$
d) $\sqrt{2} \times \sqrt{2} \times \sqrt{2}$

So far, we have defined $a^{\frac{1}{n}}$, where $n$ is a natural number. With the help of the third law for exponents, we can notice that:

$$a^{\frac{m}{n}} = \left(a^{\frac{1}{n}}\right)^m$$

So, if law 3 is to hold, then we can define the expression $a^{\frac{m}{n}}$, where $m$ and $n$ are natural numbers and $\frac{m}{n}$ is reduced to lowest terms, as in definition 3.4.

#### Definition 3.4 The Rational Exponent $a^{\frac{m}{n}}$

If $a^{\frac{1}{n}}$ is a real number, then $a^{\frac{m}{n}} = \left(a^{\frac{1}{n}}\right)^m$ (that is, the $n^{th}$ root of $a$ raised to the $m^{th}$ power).

We can also define negative rational exponents:
$$a^{-\frac{m}{n}} = \frac{1}{a^{\frac{m}{n}}} \quad (a \neq 0)$$

The laws of exponents discussed earlier for integral exponents hold true for rational exponents.

#### Example 11

Evaluate the following expressions:
a) $4^{\frac{1}{3}} \times 16^{\frac{1}{3}}$
b) $\frac{3^{\frac{1}{2}}}{27^{\frac{3}{2}}}$
c) $27^{\frac{2}{3}}$
d) $\left(3m^{\frac{1}{2}} \times 4n^{\frac{3}{2}}\right)^2$
e) $(-32)^{-\frac{3}{5}}$

**Solution:**
a) $4^{\frac{1}{3}} \times 16^{\frac{1}{3}} = (2^2)^{\frac{1}{3}} \times (2^4)^{\frac{1}{3}} = 2^{\frac{2}{3}} \times 2^{\frac{4}{3}} = 2^{\frac{2}{3} + \frac{4}{3}} = 2^2 = 4$

b) $\frac{3^{\frac{1}{2}}}{27^{\frac{3}{2}}} = \frac{3^{\frac{1}{2}}}{3^{\frac{9}{2}}} = 3^{\frac{1}{2} - \frac{9}{2}} = 3^{-\frac{8}{2}} = 3^{-4} = \frac{1}{3^4} = \frac{1}{81}$

c) $27^{\frac{2}{3}} = \left(27^{\frac{1}{3}}\right)^2 = 3^2 = 9$

d) $\left(3m^{\frac{1}{2}} \times 4n^{\frac{3}{2}}\right)^2 = \left(3m^{\frac{1}{2}}\right)^2 \times \left(4n^{\frac{3}{2}}\right)^2 = 9m \times 16n^3 = 144mn^3$

e) $(-32)^{-\frac{3}{5}} = \frac{1}{(-32)^{\frac{3}{5}}} = \frac{1}{\left((-32)^{\frac{1}{5}}\right)^3} = \frac{1}{(-2)^3} = -\frac{1}{8}$

#### Exercise 3.5

Simplify each of the following expressions:
a) $2^{\frac{1}{3}} \times 4^{\frac{4}{3}}$
b) $\frac{16^{\frac{2}{5}}}{8^{\frac{6}{5}}}$
c) $100^{\frac{3}{2}}$
d) $\left(a^{\frac{1}{4}} \times 3b^{\frac{5}{2}}\right)^4$
e) $(-27)^{-\frac{2}{3}}$
f) $\left(\frac{x^{\frac{2}{3}}}{y^{-\frac{1}{2}}}\right)^{-6}$
g) $\frac{(a^2)^{-\frac{1}{4}} \times (a^3)^{\frac{2}{9}}}{a^{\frac{1}{2}}}$
h) $\left(m^{\frac{1}{8}} n^{-\frac{1}{3}} \times n^{\frac{2}{3}} m^{\frac{1}{4}}\right)^4$

### Radical Notation

Radical notation is an alternative way of writing an expression with rational exponents.

#### Definition 3.5 The $n^{th}$ Root

If $a^{\frac{1}{n}}$ is a real number and $m$ an integer, then:
$$a^{\frac{m}{n}} = (a^m)^{\frac{1}{n}} = \sqrt[n]{a^m}$$
or
$$a^{\frac{m}{n}} = \left(a^{\frac{1}{n}}\right)^m = \left(\sqrt[n]{a}\right)^m$$

#### Example 12

Express in the form $a^{\frac{m}{n}}$, with $a$ being a prime number:
a) $\sqrt[3]{4}$
b) $\sqrt[5]{27}$
c) $\frac{\sqrt[3]{8}}{\sqrt[3]{4}}$
d) $(\sqrt[3]{625})^2$
e) $\sqrt{\sqrt[3]{64}}$

**Solution:**
a) $\sqrt[3]{4} = 4^{\frac{1}{3}} = (2^2)^{\frac{1}{3}} = 2^{\frac{2}{3}}$
b) $\sqrt[5]{27} = (27)^{\frac{1}{5}} = (3^3)^{\frac{1}{5}} = 3^{\frac{3}{5}}$
c) $\frac{\sqrt[3]{8}}{\sqrt[3]{4}} = \frac{(2^3)^{\frac{1}{3}}}{(2^2)^{\frac{1}{3}}} = \frac{2^1}{2^{\frac{2}{3}}} = 2^{1 - \frac{2}{3}} = 2^{\frac{1}{3}}$
d) $(\sqrt[3]{625})^2 = \left((5^4)^{\frac{1}{3}}\right)^2 = 5^{\frac{8}{3}}$
e) $\sqrt{\sqrt[3]{64}} = \sqrt{(64)^{\frac{1}{3}}} = \sqrt{4} = 2$

#### Exercise 3.6

Express in the form $a^{\frac{m}{n}}$, with $a$ being a prime number:
a) $\sqrt[3]{81}$
b) $\sqrt[4]{32}$
c) $\frac{\sqrt[3]{25}}{\sqrt[3]{5}}$
d) $\frac{\sqrt[5]{40}}{\sqrt[5]{5}}$
e) $(\sqrt[4]{27})^6$
f) $(\sqrt[3]{121})^2$
g) $\sqrt{\sqrt[3]{1000000}}$

### Irrational Exponents

The expressions $3^{\sqrt{2}}$, $2^{2\sqrt{3}}$, $5^\pi$ are powers with irrational exponents.

What is the value of $3^{\sqrt{2}}$?

Using a calculator, the value of $\sqrt{2} \approx 1.41421356\ldots$

Therefore, $3^{\sqrt{2}} \approx 3^{1.41421356\ldots}$

It is not possible to calculate $3^{\sqrt{2}} = 3^{1.41421356\ldots}$ exactly because $1.41421356\ldots$ has infinite decimals. But one can approximate the value as follows:

To approximate $3^{1.41421356\ldots}$:
- $3^1 = 3$
- $3^{1.4} = 3^{\frac{14}{10}} = 4.65553672$ (to eight decimal places)
- $3^{1.41} = 3^{\frac{141}{100}} = 4.70696500$
- $3^{1.414} = 3^{\frac{1414}{1000}} = 4.72769503$
- $3^{1.4142} = 4.72873393$
- $3^{1.41421} = 4.72878588$
- $3^{1.4142135} = 4.72880406$
- $3^{1.41421356} = 4.72880437$

As we can see from the above list, the values of $3^1, 3^{1.4}, 3^{1.41}, 3^{1.414}, 3^{1.4142}, 3^{1.41421}, 3^{1.4142135}, 3^{1.41421356}$ are approaching some number. For example, the first six decimals of the values of $3^{1.4142135}$ and $3^{1.41421356}$ are the same, that is 4.728804.

By continuing the approximation of $3^{\sqrt{2}}$ like above, we can say $3^{\sqrt{2}} \approx 4.72880437$ to eight decimal places.

Now, if we define $3^x$, then $3^{\sqrt{2}}$ is the real number that $3^x$ approaches when $x$ gets closer and closer to $\sqrt{2}$.

In general, if we define $a^x$ and $b$ is an irrational number, then $a^b$ is a real number that $a^x$ approaches when $x$ gets closer and closer to $b$.

The above statement about irrational exponents suggests that the expression $a^x$ is defined not only for integral and rational exponents but also for irrational exponents. The laws of exponents discussed earlier for integral and rational exponents continue to hold true for irrational exponents.

#### Example 13

Simplify each of the following:
a) $3^{\sqrt{2}} \times 3^{\sqrt{2}}$
b) $\left(4^{\sqrt{2}}\right)^3$
c) $\left(3^{\sqrt{2}}\right)^{\sqrt{2}}$
d) $\frac{2^{\sqrt{3}+2}}{2^{\sqrt{3}-3}}$
e) $5^{\sqrt{2}} \times 5^{\sqrt{3}}$
f) $\left(5^{\sqrt{2}}\right)^{\sqrt{3}}$

**Solution:**
a) $3^{\sqrt{2}} \times 3^{\sqrt{2}} = 3^{\sqrt{2} + \sqrt{2}} = 3^{2\sqrt{2}} = (3^2)^{\sqrt{2}} = 9^{\sqrt{2}}$
b) $\left(4^{\sqrt{2}}\right)^3 = 4^{3\sqrt{2}} = (4^3)^{\sqrt{2}} = 64^{\sqrt{2}}$
c) $\left(3^{\sqrt{2}}\right)^{\sqrt{2}} = 3^{\sqrt{2} \times \sqrt{2}} = 3^2 = 9$
d) $\frac{2^{\sqrt{3}+2}}{2^{\sqrt{3}-3}} = 2^{(\sqrt{3}+2) - (\sqrt{3}-3)} = 2^5 = 32$
e) $5^{\sqrt{2}} \times 5^{\sqrt{3}} = 5^{\sqrt{2} + \sqrt{3}}$
f) $\left(5^{\sqrt{2}}\right)^{\sqrt{3}} = 5^{\sqrt{2} \times \sqrt{3}} = 5^{\sqrt{6}}$

#### Exercise 3.7

Simplify each of the following:
a) $2^{\sqrt{3}} \times 2^{\sqrt{3}}$
b) $\left(5^{\sqrt{2}}\right)^2$
c) $(\sqrt{8})^{-2}$
d) $\sqrt{3}^{\sqrt{2}} \times \sqrt{3}^{\sqrt{8}}$
e) $\frac{3^{\sqrt{2}+3}}{3^{\sqrt{2}-1}}$
f) $(2^{\sqrt{3}})^{\sqrt{27}}$
g) $\frac{3^{\sqrt{2}} \times 9^{\sqrt{8}}}{27^{\sqrt{18}}}$
h) $\frac{(5^{\sqrt{3}})^2 \times 5^{-\sqrt{12}} \times 25^{\sqrt{3}}}{5^{\sqrt{27}}}$

## 3.1.2 Logarithms

In the exponential equation $2^3 = 8$, the base is 2 and the exponent is 3. We write this equation in logarithm form as $\log_2 8 = 3$. We read this as "the logarithm of 8 to the base 2 is 3".

The logarithm to base $a$ of a number $x > 0$ (written $\log_a x$) is that power to which $a$ must be raised to obtain the number $x$.

For example:
- $\log_3 9 = 2$ because $3^2 = 9$
- $\log_3 \left(\frac{1}{9}\right) = -2$ because $3^{-2} = \frac{1}{9}$
- $\log_5 1 = 0$ because $5^0 = 1$

#### Definition 3.6

For $a > 0$, $a \neq 1$, and $c > 0$: $\log_a c = b$ if and only if $a^b = c$.

#### Example 1

Convert each of the following to logarithmic statement:
a) $2^5 = 32$
b) $3^4 = 81$
c) $4^{\frac{1}{2}} = 2$

**Solution:**
a) From $2^5 = 32$, we have $\log_2 32 = 5$
b) From $3^4 = 81$, we have $\log_3 81 = 4$
c) From $4^{\frac{1}{2}} = 2$, we have $\log_4 2 = \frac{1}{2}$

#### Example 2

Convert each of the following to exponential statement:
a) $\log_2 128 = 7$
b) $\log_3 \left(\frac{1}{27}\right) = -3$
c) $\log_{10} \sqrt[3]{10} = \frac{1}{3}$

**Solution:**
a) From $\log_2 128 = 7$, we have $2^7 = 128$
b) From $\log_3 \left(\frac{1}{27}\right) = -3$, we have $3^{-3} = \frac{1}{27}$
c) From $\log_{10} \sqrt[3]{10} = \frac{1}{3}$, we have $10^{\frac{1}{3}} = \sqrt[3]{10}$

#### Example 3

Find the value of each of the following logarithms:
a) $\log_2 64$
b) $\log_3 \left(\frac{1}{81}\right)$
c) $\log_{10} 100$
d) $\log_{10} 0.01$

**Solution:**
a) Since $64 = 2^6$, the exponent to which we raise 2 to get 64 is 6. So, $\log_2 64 = 6$.
b) Since $\frac{1}{81} = \frac{1}{3^4} = 3^{-4}$, the exponent to which we raise 3 to get $\frac{1}{81}$ is -4. Hence, $\log_3 \left(\frac{1}{81}\right) = -4$.
c) The exponent to which we raise 10 to get 100 is 2 as $10^2 = 100$. Therefore, $\log_{10} 100 = 2$.
d) Since $0.01 = \frac{1}{100} = \frac{1}{10^2} = 10^{-2}$, the exponent to which we raise 10 to get 0.01 is -2. Thus, $\log_{10} 0.01 = -2$.

#### Exercise 3.8

1. Write the equivalent logarithmic statement for the following equations:
   a) $2^{10} = 1,024$
   b) $2^{-6} = \frac{1}{64}$
   c) $\sqrt[3]{125} = 5$
   d) $27^{-\frac{2}{3}} = \frac{1}{9}$

2. Write the equivalent exponential statement for the following equations:
   a) $\log_{10} 1000 = 3$
   b) $\log_8 \sqrt{64} = 1$
   c) $\log_{10} 0.001 = -3$
   d) $\log_3 \frac{1}{27} = -3$

3. Find the values of the following logarithms:
   a) $\log_3 27$
   b) $\log_4 16$
   c) $\log_{100} 0.001$
   d) $\log_{\sqrt{7}} 7$

### Properties of Logarithms

The following properties follow directly from the definition of the logarithm with base $a > 0$ and $a \neq 1$:

#### Properties of Logarithms

1. $\log_a 1 = 0$ because $a^0 = 1$
2. $\log_a a = 1$ because $a^1 = a$
3. $\log_a a^p = p$ and $a^{\log_a p} = p$ ... Inverse property
4. If $\log_a M = \log_a N$, then $M = N$ ... One-to-One property

#### Example 4

Use properties of logarithms to answer the following questions:
a) Find $p$ such that $\log_2 p = \log_2 5$
b) Simplify $\log_2 2^p$
c) Find $p$ such that $\log_3 3 = p$
d) Simplify $5^{\log_5 p}$

**Solution:**
a) Using property 4, we can see that $p = 5$.
b) Using property 3, it follows that $\log_2 2^p = p$.
c) Using property 2, we can conclude that $p = 1$.
d) Using property 3, it follows that $5^{\log_5 p} = p$.

#### Exercise 3.9

Using properties of logarithms, give answer for the following questions:
a) Find $p$ such that $\log_3 p = \log_3 7$
b) Simplify $\log_5 25^p$
c) Find $p$ such that $\log_6 6 = p$
d) Simplify $2^{\log_2 3p}$

### Laws of Logarithms

We now establish laws of logarithms. The laws are represented by theorems and we prove the theorems based on the corresponding laws of exponents.

#### Theorem 3.1 Logarithms of Products

For any positive numbers $M$, $N$, and $a > 0$ and $a \neq 1$:

$$\log_a (MN) = \log_a M + \log_a N$$

(The logarithm of a product is the sum of the logarithms of the factors.)

**Proof:**
Let $\log_a M = p$ and $\log_a N = q$.
Converting to exponential equations, we get: $a^p = M$ and $a^q = N$.
Now, $MN = a^p \cdot a^q = a^{p+q}$.
Converting back to a logarithmic equation, we obtain $\log_a (MN) = p + q$.
But $p = \log_a M$ and $q = \log_a N$.
Therefore, $\log_a (MN) = p + q = \log_a M + \log_a N$.

#### Example 5

Express $\log_2 (4 \times 8)$ as a sum of logarithms.

**Solution:**
We have $\log_2 (4 \times 8) = \log_2 4 + \log_2 8$ ... using the product law

#### Example 6

Express $\log_3 5 + \log_3 8$ as a single logarithm.

**Solution:**
We have $\log_3 5 + \log_3 8 = \log_3 (5 \times 8) = \log_3 40$ ... using the product law

#### Theorem 3.2 Logarithms of Powers

For any positive number $M$, any real number $r$, and $a > 0$ and $a \neq 1$:

$$\log_a (M)^r = r \log_a M$$

(The logarithm of a power of $x$ is the exponent times the logarithm of $x$.)

**Proof:**
Let $p = \log_a M$.
Converting to exponential equations, we get $a^p = M$.
Now, $(a^p)^r = a^{pr} = M^r$.
Converting back to a logarithmic equation, we obtain: $\log_a M^r = \log_a a^{pr} = pr$.
But $p = \log_a M$.
Therefore, $\log_a (M)^r = r \log_a M$.

#### Example 7

Use laws of logarithms to evaluate the following:
a) $\log_2 \sqrt{8}$
b) $\log_3 81$
c) $\log_{10} \sqrt[3]{0.01}$
d) $\log_4 8 + \log_4 2$
e) $\log_{\frac{1}{2}} \left(\frac{1}{4}\right)$

**Solution:**
a) $\log_2 \sqrt{8} = \log_2 8^{\frac{1}{2}} = \frac{1}{2} \log_2 2^3 = \frac{1}{2} (3 \log_2 2) = \frac{1}{2} \times 3 \times 1 = \frac{3}{2}$

b) $\log_3 81 = \log_3 3^4 = 4 \log_3 3 = 4 \times 1 = 4$

c) $\log_{10} \sqrt[3]{0.01} = \log_{10} (0.01)^{\frac{1}{3}} = \frac{1}{3} \log_{10} 0.01 = \frac{1}{3} \log_{10} 10^{-2} = \frac{1}{3} (-2 \log_{10} 10) = -\frac{2}{3}$

d) $\log_4 8 + \log_4 2 = \log_4 (8 \times 2) = \log_4 16 = \log_4 4^2 = 2 \log_4 4 = 2 \times 1 = 2$

e) $\log_{\frac{1}{2}} \left(\frac{1}{4}\right) = \log_{\frac{1}{2}} \left(\frac{1}{2}\right)^2 = 2 \log_{\frac{1}{2}} \left(\frac{1}{2}\right) = 2 \times 1 = 2$

#### Exercise 3.10

Use laws of logarithm to find the values of:
a) $\log_3 \sqrt{3}$
b) $\log_6 36$
c) $\log_2 \left(\frac{1}{4}\right)$
d) $\log_{\frac{1}{3}} \left(\frac{1}{81}\right)$
e) $\log_{10} \sqrt[3]{\frac{1}{1000}}$
f) $\log_8 32 + \log_8 2$
g) $\log_2 6 + \log_2 \left(\frac{1}{12}\right)$
h) $\log_3 10 + \log_3 \left(\frac{6}{5}\right) + \log_3 \left(\frac{9}{4}\right)$
i) $\frac{1}{2} \log_4 8 + \log_4 \sqrt{2}$

#### Theorem 3.3 Logarithms of Quotients

For any positive numbers $M$, $N$, and $a > 0$ and $a \neq 1$:

$$\log_a \left(\frac{M}{N}\right) = \log_a M - \log_a N$$

(The logarithm of a quotient is the logarithm of the numerator minus the logarithm of the denominator.)

**Proof:**
The proof follows from the product law and the power law.
$$\log_a \left(\frac{M}{N}\right) = \log_a (M N^{-1}) = \log_a M + \log_a N^{-1} = \log_a M + (-1) \log_a N = \log_a M - \log_a N$$

#### Example 8

Use laws of logarithms to evaluate the following:
a) $\log_3 54 - \log_3 2$
b) $\log_{10} \sqrt{2000} - \log_{10} \sqrt{20}$
c) $\log_5 30 + \log_5 15 - \log_5 2$

**Solution:**
a) $\log_3 54 - \log_3 2 = \log_3 \left(\frac{54}{2}\right) = \log_3 27 = \log_3 3^3 = 3 \log_3 3 = 3 \times 1 = 3$

b) $\log_{10} \sqrt{2000} - \log_{10} \sqrt{20} = \log_{10} \left(\frac{\sqrt{2000}}{\sqrt{20}}\right) = \log_{10} \sqrt{100} = \log_{10} 10 = 1$

c) $\log_5 30 + \log_5 15 - \log_5 2 = (\log_5 30 + \log_5 15) - \log_5 2 = \log_5 (30 \times 15) - \log_5 2 = \log_5 450 - \log_5 2 = \log_5 \left(\frac{450}{2}\right) = \log_5 225 = \log_5 5^3 = 3 \log_5 5 = 3 \times 1 = 3$

#### Exercise 3.11

Use laws of logarithms to find the values of:
a) $\log_5 50 - \log_5 2$
b) $\log_3 4 - \log_3 108$
c) $\log_{10} \sqrt{2000} - \log_{10} \sqrt{2}$
d) $\log_5 2 + \log_5 50 - \log_5 4$
e) $\log_6 9 - \log_6 15 + \log_6 10$
f) $\log_{10} 24 - 2 \log_{10} 6 + \log_{10} 15$

#### Theorem 3.4 Change of Base

For any positive real number $M$, $a > 0$, $b > 0$, $a \neq 1$ and $b \neq 1$:

$$\log_a M = \frac{\log_b M}{\log_b a}$$

**Proof:**
Let $p = \log_a M$. Then $a^p = a^{\log_a M} = M$.
Taking logarithm to the base $b$ of both sides: $\log_b a^p = \log_b M$.
Using power law: $p \log_b a = \log_b M$.
Therefore, $p = \frac{\log_b M}{\log_b a}$.
Thus, $\log_a M = \frac{\log_b M}{\log_b a}$.

#### Example 9

Use laws of logarithms to find:
a) $\log_{\sqrt{2}} 4$
b) $\log_{0.1} 100$

**Solution:**
a) $\log_{\sqrt{2}} 4 = \frac{\log_2 4}{\log_2 \sqrt{2}} = \frac{\log_2 2^2}{\log_2 2^{\frac{1}{2}}} = \frac{2 \log_2 2}{\frac{1}{2} \log_2 2} = \frac{2}{\frac{1}{2}} = 4$

b) $\log_{0.1} 100 = \frac{\log_{10} 100}{\log_{10} 0.1} = \frac{\log_{10} 10^2}{\log_{10} 10^{-1}} = \frac{2}{-1} = -2$

#### Exercise 3.12

Use the law $\log_a x = \frac{\log_b x}{\log_b a}$ to find the value of the following expressions:
a) $\log_{\sqrt{3}} 9$
b) $\log_{\sqrt{2}} 128$
c) $\log_{\frac{1}{3}} 243$
d) $\log_{100} 0.1$
e) $\log_4 \left(\frac{1}{2}\right)$

### Important Reminders

1. $\log_a (MN) \neq (\log_a M)(\log_a N)$ ... The logarithm of a product is not the product of the logarithms.
2. $\log_a (M + N) \neq \log_a M + \log_a N$ ... The logarithm of a sum is not the sum of the logarithms.
3. $\log_a \left(\frac{M}{N}\right) \neq \frac{\log_a M}{\log_a N}$ ... The logarithm of a quotient is not the quotient of the logarithms.
4. $(\log_a M)^r \neq r \log_a M$ ... The power of a logarithm is not the exponent times the logarithm.

### Logarithms to Base 10 (Common Logarithms)

For a general number $M$, $\log_{10} M$ is equal to that power to which 10 must be raised to obtain the number $M$.

#### Activity 3.4

Find the value of the following common logarithms:
a) $\log_{10} 10$
b) $\log_{10} 1000$
c) $\log_{10} 1$
d) $\log_{10} 0.1$

#### Definition 3.7

The logarithm to the base 10 is called common logarithm or decadic logarithm and written as $\log_{10} M$.

A common logarithm is usually written without indicating its base. For example, $\log_{10} M$ is simply denoted by $\log M$.

#### Example 1

Find the value of each of the common logarithms:
a) $\log_{10} \sqrt[3]{10}$
b) $\log 0.0001$
c) $\log 200 - \log 2$
d) $\log \left(\frac{0.1}{\sqrt{100}}\right)$

**Solution:**
a) $\log_{10} \sqrt[3]{10} = \log_{10} 10^{\frac{1}{3}} = \frac{1}{3} \log_{10} 10 = \frac{1}{3} \times 1 = \frac{1}{3}$
b) $\log 0.0001 = \log \left(\frac{1}{10000}\right) = \log \left(\frac{1}{10^4}\right) = \log 10^{-4} = -4 \log 10 = -4$
c) $\log 200 - \log 2 = \log \left(\frac{200}{2}\right) = \log 100 = \log 10^2 = 2 \log 10 = 2 \times 1 = 2$
d) $\log \left(\frac{0.1}{\sqrt{100}}\right) = \log \left(\frac{10^{-1}}{10}\right) = \log 10^{-2} = -2$

#### Exercise 3.13

Find the values of the following common logarithms:
a) $\log \sqrt[3]{0.1}$
b) $\log 10(10\sqrt{10})$
c) $\log \left(\frac{0.01}{\sqrt{1000}}\right)$
d) $\log \left(\frac{1}{\sqrt[5]{10}}\right)$
e) $\log \left(\frac{10^m}{10^n}\right)$

Suppose $p$ can be written as $p = m \times 10^c$, $1 \leq m < 10$, then the logarithm of $p$ can be read from the common logarithm table (a table that contains the common logarithm value of a number $m$ such that $1 \leq m < 10$) which is attached at the last page of the book.

So, $\log p = \log (m \times 10^c) = \log m + \log 10^c = \log m + c$.

That is, $\log p = \log m + c$.

The common logarithm of $m$, $\log m$, is called the mantissa (fractional part) of the common logarithm of $p$, and $c$ is called the characteristic of the logarithm.

The common logarithm of any two decimal place number between 1.00 and 9.99 can be read directly from the common logarithm table.

#### Example 2

Using the table of logarithm, calculate:
a) $\log 1.23$
b) $\log 3.57$
c) $\log 2.478$
d) $\log 6,920$

**Solution:**
a) We read the number at the intersection of row 1.2 and column 3 to find 0.0899. So, $\log 1.23 = 0.0899$.

b) Reading the number in row 3.5 under column 7 from the common logarithm table gives 0.5527. So, $\log 3.57 = 0.5527$.

c) 2.478 in $\log 2.478$ has three numbers after decimal. To read the value of $\log 2.478$ from the logarithm table, the steps are as follows:
   - Step 1. Separate the number 2.478 in $\log 2.478$ as 2.4, 7, and 8.
   - Step 2. Read the number at the intersection of row 2.4 and column 7; this gives 0.3927.
   - Step 3. From the mean difference part of the common logarithm table, read the number at the intersection of row 2.4 and column 8; this gives 14. We write this as 0.0014.
   - Step 4. Add the values obtained in steps 2 and 3 to get $0.3927 + 0.0014 = 0.3941$. Therefore, $\log 2.478 = 0.3941$.

d) We have $6,920 = 6.92 \times 10^3$. So, $\log 6,920 = \log (6.92 \times 10^3) = \log 6.92 + \log 10^3 = \log 6.92 + 3$. But $\log 6.92 = 0.8401$ (reading from the table of common logarithm at the intersection of row 6.9 and column 2). Therefore, $\log 6,920 = \log 6.92 + 3 = 3.8401$.

#### Example 3

Identify the mantissa and characteristic of each of the common logarithms:
a) $\log 0.00123$
b) $\log 345$
c) $\log 0.01$

**Solution:**
a) $0.00123 = 1.23 \times 10^{-3}$ and $\log 0.00123 = \log (1.23 \times 10^{-3}) = \log 1.23 + \log 10^{-3} = \log 1.23 + (-3)$. The mantissa is $\log 1.23 = 0.0899$. The characteristic is $-3$.

b) $345 = 3.45 \times 10^2$. So, the mantissa is $\log 3.45 = 0.5378$ and the characteristic is 2.

c) We have $0.01 = 1.00 \times 10^{-2}$. Therefore, the mantissa is $\log 1.00 = 0$ and the characteristic is -2.

#### Exercise 3.14

1. Using the table of logarithm, find the values of the following:
   a) $\log 2.13$
   b) $\log 2.99$
   c) $\log 6.3$
   d) $\log 6.345$
   e) $\log 0.28$
   f) $\log 9.99$
   g) $\log 0.00008$
   h) $\log 400$

2. Identify the characteristic and mantissa of the logarithm of each of the following:
   a) 0.00503
   b) 0.25
   c) 302
   d) 18
   e) 4.4
   f) 9
   g) 3280
   h) 53.814

### Antilogarithms

Suppose $\log M = 0.8175$. What is the value of $M$?

If $\log M = N$, then $M$ is the antilogarithm (antilog) of $N$ and write $\text{antilog}(N) = M$. When asked to find the antilog of a given number $N$, we find a number $M$ such that $\log M = N$.

We can use the antilogarithm table attached at the end of the textbook to read the antilog of a number.

In general, $\text{antilog}(\log M) = M$.

For example, given $\log M = 0.8175$, to read the value of $M = \text{antilog}(0.8175)$ from the antilogarithm table, we follow these steps:

1. Separate the number 0.8175 as 0.81, 7, and 5.
2. From the antilogarithm part, read the number at the intersection of row 0.81 and column 7; this gives 6.561.
3. From the mean difference part, read the number at the intersection of row 0.81 and column 5; this gives 8. We write this as 0.008.
4. Add the values obtained in steps 2 and 3 to get $M = \text{antilog}(0.8175) = 6.561 + 0.008 = 6.569$.

Therefore, $\log 6.569 = 0.8175$.

#### Example 1

Find the antilog of the following numbers:
a) 0.9335
b) 3.0913
c) -2.1202

**Solution:**
a) To find $\text{antilog}(0.9335)$:
   - Step 1. Separate the number 0.9335 as 0.93, 3, and 5.
   - Step 2. From the antilogarithm part, read the number at the intersection of row 0.93 and column 3; this gives 8.570.
   - Step 3. From the mean difference part, read the number at the intersection of row 0.93 and column 5; this gives 10. We write this as 0.010.
   - Step 4. Add the values obtained in steps 2 and 3 to get $8.570 + 0.010 = 8.580$.
   - Therefore, $\text{antilog}(0.9335) = 8.580$.

b) In 3.0913, the characteristic is 3. Therefore, after finding the antilog of 0.0913, we multiply it by $10^3$.
   - To find $\text{antilog}(0.0913)$:
     - Step 1. Separate the number 0.0913 into 0.09, 1, and 3.
     - Step 2. From the antilogarithm part, read the number at the intersection of row 0.09 and column 1; this gives 1.233.
     - Step 3. From the mean difference part, read the number at the intersection of row 0.09 and column 3; this gives 1. We write this as 0.001.
     - Step 4. Add the values obtained in steps 2 and 3 to get $1.233 + 0.001 = 1.234$.
     - Step 5. $1.234 \times 10^3 = 1,234.00$.
   - Therefore, $\text{antilog}(3.0913) = 1,234.00$.

c) To find the antilog of negative numbers like $-2.1202$, we rewrite it as:
   $$-2.1202 = -2 - 0.1202 + (1 - 1) = (-2 - 1) + (1 - 0.1202) = -3 + 0.8798$$

Then, after finding the antilog of 0.8798, we multiply it by $10^{-3}$ to get the antilog(-2.1202).

Now, to find $\text{antilog}(0.8798)$:
   - Step 1. Separate the number 0.8798 into 0.87, 9, and 8.
   - Step 2. From the antilogarithm part, read the number at the intersection of row 0.87 and column 9; this gives 7.568.
   - Step 3. From the mean difference part, read the number at the intersection of row 0.87 and column 8; this gives 14. We write this as 0.014.
   - Step 4. Add the values obtained in steps 2 and 3 to get $7.568 + 0.014 = 7.582$.
   - Step 5. $7.582 \times 10^{-3} = 0.007582$.

Therefore, $\text{antilog}(-2.1202) = 0.007582$.

#### Exercise 3.15

Find:
a) $\text{antilog } 0.7412$
b) $\text{antilog } 0.9330$
c) $\text{antilog } 0.9996$
d) $\text{antilog } 0.7$
e) $\text{antilog } 1.3010$
f) $\text{antilog } 0.9953$
g) $\text{antilog } 5.721$
h) $\text{antilog } (-0.2)$

### Computation with Logarithms

In this section, you will see how logarithms are used for computations of numbers like $\frac{267 \times 325^2}{403}$, $\sqrt[5]{254}$, etc. Especially common logarithms are used in mathematical computations.

In order to compute a given number $M$, you can perform the following steps:
1. Find $\log M$, using the laws of logarithms.
2. Find the antilogarithm of $\log M$.

#### Example 2

Approximate the values of the following using logarithms:
a) $\frac{267 \times 325^2}{403}$
b) $\sqrt[5]{254}$

**Solution:**
a) Let $M = \frac{267 \times 325^2}{403}$

$\log M = \log \left(\frac{267 \times 325^2}{403}\right) = \log 267 + \log 325^2 - \log 403$
$= \log 267 + 2\log 325 - \log 403$
$= (2 + \log 2.67) + (2 \times (3 + \log 3.25)) - (2 + \log 4.03)$
$= 3 + \log 2.67 + \log 3.25 - \log 4.03$
$= 3 + 0.4265 + 0.5122 - 0.6053 = 3.3334$

$\log M = 3.3334$
$M = \text{antilog}(3.3334) = 2,155$

b) Let $M = \sqrt[5]{254}$

$\log M = \log \sqrt[5]{254} = \frac{1}{5} \log 254 = \frac{1}{5} (2 + \log 2.54) = \frac{1}{5} (2 + 0.4048) = \frac{2.4048}{5} = 0.48096$

$M = \text{antilog}(0.48096) = 3.024$

#### Exercise 3.16

Compute using logarithms:
a) $4.26 \times 5.73$
b) $\sqrt[5]{25}$
c) $(4.2)^{1.3}$
d) $\sqrt{4.88}$
e) $\sqrt[5]{0.0461}$

---

## 3.2 The Exponential Functions and Their Graphs

### 3.2.1 Exponential Functions

#### Activity 3.5

Consider a single bacterium which divides every hour:
a) Find the number of bacteria after one hour, two hours, three hours, four hours, and $t$ hours.
b) Complete the following table:

| Time in hour (t) | 0 | 1 | 2 | 3 | 4 | ... | t |
|------------------|---|---|---|---|---|-----|---|
| Number of bacteria | 1 |   |   |   |   |     |   |

c) Write a formula to calculate the number of bacteria after $t$ hours.

#### Definition 3.8

The exponential function $f$ with base $a$ is denoted by $f(x) = a^x$ where $a > 0$, $a \neq 1$, and $x$ is any real number.

#### Example 1

Given $f(x) = 3^x$. Evaluate the following:
a) $f(2)$
b) $f(0)$
c) $f(-1)$

**Solution:**
a) $f(2) = 3^2 = 9$
b) $f(0) = 3^0 = 1$
c) $f(-1) = 3^{-1} = \frac{1}{3}$

#### Example 2

Write each of the following functions in the form $f(x) = 2^{kx}$ or $f(x) = 3^{kx}$ for a suitable constant $k$:
a) $f(x) = 4^x$
b) $f(x) = \sqrt{2}^x$
c) $f(x) = \left(\frac{1}{9}\right)^x$

**Solution:**
a) $f(x) = 4^x = (2^2)^x = 2^{2x}$
b) $f(x) = \sqrt{2}^x = (2^{\frac{1}{2}})^x = 2^{\frac{1}{2}x}$
c) $f(x) = \left(\frac{1}{9}\right)^x = \left(\frac{1}{3^2}\right)^x = (3^{-2})^x = 3^{-2x}$

#### Note

1. In the definition of exponential function, $a \neq 1$ because if $a = 1$, $f(x) = 1^x = 1$ is a constant function.
2. The exponential function $f(x) = a^x$, where $a > 0$, $a \neq 1$ is different from all the functions studied in previous chapters because the variable $x$ is an exponent.
3. A distinct characteristic of an exponential function $f(x) = a^x$ is showing a rapid increase as $x$ increases for $a > 1$ and showing a rapid decrease as $x$ increases for $a < 1$.
4. Many real-life phenomena with patterns of rapid growth (or decline) can be modeled by exponential functions.

#### Exercise 3.17

1. Given $f(x) = \left(\frac{1}{4}\right)^x$. Find the values of:
   a) $f(2)$
   b) $f(-2)$
   c) $f\left(\frac{1}{2}\right)$
   d) $f\left(-\frac{1}{2}\right)$

2. Write each of the following functions in the form $f(x) = 2^{kx}$ or $f(x) = 3^{kx}$ for a suitable constant $k$:
   a) $f(x) = 8^x$
   b) $f(x) = \sqrt{3}^x$
   c) $f(x) = \left(\frac{1}{81}\right)^x$
   d) $f(x) = \sqrt[5]{2}^x$
   e) $f(x) = \left(\frac{1}{27}\right)^{\frac{x}{3}}$
   f) $f(x) = \left(\frac{1}{16}\right)^{-x}$

### 3.2.2 Graph of Exponential Functions

Graphs of exponential functions can be drawn by plotting points on the xy-plane.

#### Example 1

Draw the graph of the exponential function $f(x) = 2^x$.

**Solution:**
First, we calculate values of $f(x)$ for some integer values of $x$ and prepare a table:

| $x$ | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
|-----|----|----|----|---|---|---|---|
| $f(x) = 2^x$ | $\frac{1}{8}$ | $\frac{1}{4}$ | $\frac{1}{2}$ | 1 | 2 | 4 | 8 |

Then we plot the points on the xy-plane and join them by a smooth curve.

**Note:**
- The function $f(x) = 2^x$ is positive for all values of $x$.
- As $x$ increases, the value of the function gets larger and larger.
- As $x$ decreases, the value of the function gets smaller and smaller, approaching zero.

**Figure 3.1: Graph of $f(x) = 2^x$**

The graph shows an increasing exponential curve passing through points $(-3, \frac{1}{8})$, $(-2, \frac{1}{4})$, $(-1, \frac{1}{2})$, $(0, 1)$, $(1, 2)$, $(2, 4)$, and $(3, 8)$. The curve approaches the x-axis as $x$ decreases but never touches it.

Since the domain of a function $y = f(x)$ is the set of all values of $x$ for which the function $f$ is defined and its range is the set of all values of $y$, the domain of $f(x) = 2^x$ is the set of all real numbers and its range is the set of positive real numbers.

#### Activity 3.6

1. For which values of $x$ is $f(x) = 2^x > 1$?
2. For which values of $x$ is $f(x) = 2^x < 1$?
3. Does $f(x) = 2^x$ increase as $x$ increases?
4. What happens to the graph of $f(x) = 2^x$ as $x$ gets larger and larger without bound?
5. What happens to the graph of $f(x) = 2^x$ when $x$ is negative and $|x|$ is very large?
6. Is there a line that the graph of $f(x) = 2^x$ approaches but never touches when $x$ is negative and $|x|$ is very large? What is that line?

#### Exercise 3.18

For the function $f(x) = 3^x$:
a) Complete the table of values below:

| $x$ | -2 | -1 | 0 | 1 | 2 |
|-----|----|----|---|---|---|
| $y = f(x)$ |    |    |   |   |   |

b) Find the intercepts.
c) Sketch the graph of $f$, first by plotting the points $(x,y)$ and then joining them by a smooth curve.
d) Find the domain and range of $f$.

#### Example 2

Draw the graph of the exponential function $f(x) = \left(\frac{1}{2}\right)^x$.

**Solution:**
First, we calculate values of $f(x)$ for some integer $x$ and prepare a table:

| $x$ | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
|-----|----|----|----|---|---|---|---|
| $f(x) = \left(\frac{1}{2}\right)^x$ | 8 | 4 | 2 | 1 | $\frac{1}{2}$ | $\frac{1}{4}$ | $\frac{1}{8}$ |

**Note:**
- The function $f(x) = \left(\frac{1}{2}\right)^x$ is positive for all values of $x$.
- As $x$ increases, the value of the function gets smaller and smaller, approaching zero.
- As $x$ decreases, the value of the function gets larger and larger.

**Figure 3.2: Graph of $f(x) = \left(\frac{1}{2}\right)^x$**

The graph shows a decreasing exponential curve passing through points $(-3, 8)$, $(-2, 4)$, $(-1, 2)$, $(0, 1)$, $(1, \frac{1}{2})$, $(2, \frac{1}{4})$, and $(3, \frac{1}{8})$. The curve approaches the x-axis as $x$ increases but never touches it.

#### Exercise 3.19

For the function $f(x) = \left(\frac{1}{3}\right)^x$:
a) Complete the table of values below:

| $x$ | -3 | -2 | -1 | 0 | 1 | 2 |
|-----|----|----|----|---|---|---|
| $y = f(x)$ |    |    |    |   |   |   |

b) Find the intercepts.
c) Sketch the graph of $f$, first by plotting the points $(x,y)$ and then joining them by a smooth curve.
d) Find the domain and range of $f$.

The exponential function $f(x) = a^x$, $a > 0$ and $a \neq 1$ has domain of the set of all real numbers and range of the set of all positive real numbers. The x-axis (the line $y = 0$) is a horizontal asymptote of $f$. The graph of $f$ has one of the following shapes:

**Figure 3.3: Graphs of Exponential Functions**

The figure shows two exponential curves:
- **(a)** $f(x) = a^x$ where $a > 1$: Increasing exponential passing through $(0,1)$ and $(1,a)$, approaching the x-axis as $x \to -\infty$.
- **(b)** $f(x) = a^x$ where $0 < a < 1$: Decreasing exponential passing through $(0,1)$ and $(1,a)$, approaching the x-axis as $x \to \infty$.

The basic characteristics of the exponential function are summarized below:

**Characteristics of Graph of $f(x) = a^x$, $a > 1$:**
a) Domain: $\mathbb{R}$ = The set of all real numbers
b) Range: $\mathbb{R}^+$ = The set of all positive real numbers
c) y-intercept: The point $(0, 1)$
d) Has no x-intercept
e) It is increasing on $\mathbb{R} = (-\infty, \infty)$
f) The graph goes upward without bound as $x$ gets larger and positive
g) The graph gets closer to the negative x-axis when $x$ is negative and $|x|$ is large
h) Horizontal asymptote: The x-axis (the line $y = 0$) is a horizontal asymptote

**Characteristics of Graph of $f(x) = a^x$, $0 < a < 1$:**
a) Domain: $\mathbb{R}$ = The set of all real numbers
b) Range: $\mathbb{R}^+$ = The set of all positive real numbers
c) y-intercept: The point $(0, 1)$
d) Has no x-intercept
e) It is decreasing function. The value of $f$ decreases whenever the value of $x$ increases
f) The graph goes upward without bound when $x$ is negative and $|x|$ is large
g) The graph gets closer to the positive x-axis when $x$ gets larger and positive
h) Horizontal asymptote: The x-axis (the line $y = 0$) is a horizontal asymptote

#### Example 3

Find the exponential function $f(x) = a^x$ whose graph is given by figure 3.4.

**Figure 3.4: Graph of an exponential function passing through point (2, 16)**

**Solution:**
If $f(2) = a^2 = 16$, then $a = 4$. So, $f(x) = 4^x$ is the required function.

#### Exercise 3.20

1. Find the exponential function $f(x) = a^x$ whose graph is given by figure 3.5.

**Figure 3.5: Graph of an exponential function passing through point (-1, 5)**

2. Using the same coordinate system, draw the graphs of:
   a) $f(x) = 3^x$ and $g(x) = \left(\frac{1}{3}\right)^x$
   b) $f(x) = 4^x$ and $g(x) = \left(\frac{1}{4}\right)^x$

### The Natural Exponential Function

Any positive number can be used as the base for an exponential function, but the number denoted by the letter $e$ and 10 are used more frequently. The number $e$ is the most important base and convenient for certain applications.

The number $e$ is defined as the value that $\left(1 + \frac{1}{n}\right)^n$ approaches as $n$ becomes large.

The table below shows the values of the expression $\left(1 + \frac{1}{n}\right)^n$ for increasingly large values of $n$:

| $n$ | $\left(1 + \frac{1}{n}\right)^n$ |
|-----|----------------------------------|
| 1   | 2.00000                          |
| 2   | 2.25000                          |
| 5   | 2.48832                          |
| 10  | 2.59374                          |
| 100 | 2.70481                          |
| 1000| 2.71692                          |
| 10,000 | 2.71815                       |
| 100,000 | 2.71827                      |
| 1,000,000 | 2.71828                    |

The approximate value to 20 decimal places is $e \approx 2.71828182845904523536$.

#### Definition 3.9

The natural exponential function is the exponential function $f(x) = e^x$ with base $e$.

**Figure 3.6: Graph of $y = e^x$**

The graph shows the natural exponential function $y = e^x$ as an increasing curve passing through $(0,1)$, lying between the graphs of $g(x) = 2^x$ and $h(x) = 3^x$.

Since $2 < e < 3$, the graph of the natural exponential function lies between the graphs of $g(x) = 2^x$ and $h(x) = 3^x$ as shown in figure 3.6.

#### Example 1

Use a scientific calculator to evaluate each expression correct to five decimal places:
a) $e^2$
b) $e^{-1}$
c) $e^{3.5}$

**Solution:**
a) $e^2 \approx 7.38906$
b) $e^{-1} \approx 0.36788$
c) $e^{3.5} \approx 33.11545$

#### Example 2

Construct a table of values for some integer values of $x$, sketch the graph, find the x-intercept and y-intercept, find the asymptote, and give the domain and range of $y = -e^x$.

**Table:**
| $x$ | -2 | -1 | 0 | 1 | 2 |
|-----|----|----|---|---|---|
| $y = -e^x$ | -0.14 | -0.37 | -1 | -2.72 | -7.39 |

**Figure 3.7: Graph of $y = -e^x$**

The graph shows a decreasing exponential curve passing through $(0, -1)$ and approaching the x-axis as $x \to -\infty$.

- No x-intercept
- The y-intercept is $(0, -1)$
- The asymptote is the line $y = 0$ (x-axis)
- The domain is the set of all real numbers
- The range is the set of negative real numbers

#### Exercise 3.21

Construct a table of values for some integer values of $x$, sketch the graphs, find the x-intercept and y-intercept, find the asymptote, and give the domain and range of the following functions:
a) $y = e^{-x}$
b) $y = -e^{-x}$
c) $y = 1 + e^x$

---

## 3.3 The Logarithmic Functions and Their Graphs

### 3.3.1 The Logarithmic Functions

Every exponential function $f(x) = a^x$ with $a > 0$ and $a \neq 1$ is a one-to-one function and hence it has an inverse function. The inverse function $f^{-1}$ is called the logarithmic function with base $a$ and is denoted by $g(x) = \log_a x$ where $g = f^{-1}$. This leads to the following definition of the logarithmic function.

Let $a > 0$ and $a \neq 1$. The logarithmic function with base $a$ denoted by $y = \log_a x$ is defined by:
$$y = \log_a x \quad \text{if and only if} \quad x = a^y$$

When evaluating logarithms, remember that a logarithm is an exponent. That is, $\log_a x$ is the exponent to which $a$ must be raised to obtain $x$.

#### Example 1

Use the definition of logarithmic function to evaluate each logarithm function at the indicated value of $x$:
a) $f(x) = \log_2 x$, $x = 4$
b) $f(x) = \log_4 x$, $x = 1$
c) $f(x) = \log_3 x$, $x = 27$
d) $f(x) = \log_{10} x$, $x = \frac{1}{10}$

**Solution:**
a) $f(4) = \log_2 4 = 2$ because $2^2 = 4$
b) $f(1) = \log_4 1 = 0$ because $4^0 = 1$
c) $f(27) = \log_3 27 = 3$ because $3^3 = 27$
d) $f\left(\frac{1}{10}\right) = \log_{10} \left(\frac{1}{10}\right) = -1$ because $10^{-1} = \frac{1}{10}$

#### Example 2

Write each of the following functions in the form $f(x) = k \log_2 x$ or $f(x) = k \log_3 x$ for a suitable constant $k$:
a) $f(x) = \log_4 x$
b) $f(x) = \log_9 x$
c) $f(x) = \log_{\frac{1}{4}} x$
d) $f(x) = \log_{\sqrt{3}} x$

**Solution:**
a) $f(x) = \log_4 x = \frac{\log_2 x}{\log_2 4} = \frac{\log_2 x}{\log_2 2^2} = \frac{\log_2 x}{2} = \frac{1}{2} \log_2 x$
b) $f(x) = \log_9 x = \frac{\log_3 x}{\log_3 9} = \frac{\log_3 x}{\log_3 3^2} = \frac{\log_3 x}{2} = \frac{1}{2} \log_3 x$
c) $f(x) = \log_{\frac{1}{4}} x = \frac{\log_2 x}{\log_2 \frac{1}{4}} = \frac{\log_2 x}{-2} = -\frac{1}{2} \log_2 x$
d) $f(x) = \log_{\sqrt{3}} x = \frac{\log_3 x}{\log_3 \sqrt{3}} = \frac{\log_3 x}{\frac{1}{2}} = 2 \log_3 x$

#### Example 3

Write each of the following functions in the form $f(x) = c \log_2 kx$ or $f(x) = c \log_5 kx$ for suitable constants $c$ and $k$:
a) $f(x) = \log_{\frac{1}{8}} \left(-\frac{x}{2}\right)$
b) $f(x) = \log_{\frac{1}{25}} \left(\frac{x}{5}\right)$

**Solution:**
a) $f(x) = \log_{\frac{1}{8}} \left(-\frac{x}{2}\right) = \frac{\log_2 \left(-\frac{x}{2}\right)}{\log_2 \frac{1}{8}} = \frac{\log_2 \left(-\frac{x}{2}\right)}{-3} = -\frac{1}{3} \log_2 \left(-\frac{1}{2}x\right)$

b) $f(x) = \log_{\frac{1}{25}} \left(\frac{x}{5}\right) = \frac{\log_5 \left(\frac{x}{5}\right)}{\log_5 \frac{1}{25}} = \frac{\log_5 \left(\frac{x}{5}\right)}{-2} = -\frac{1}{2} \log_5 \left(\frac{1}{5}x\right)$

#### Exercise 3.22

1. Given $f(x) = \log_{\frac{1}{4}} x$. Find the values of:
   a) $f(2)$
   b) $f(-2)$
   c) $f\left(\frac{1}{16}\right)$
   d) $f(\sqrt{2})$

2. Write each of the following functions in the form $f(x) = k \log_2 x$ or $f(x) = k \log_3 x$ for a suitable constant $k$:
   a) $f(x) = \log_{16} x$
   b) $f(x) = \log_{\sqrt{27}} x$
   c) $f(x) = \log_{\frac{1}{9}} x$
   d) $f(x) = \log_{\frac{\sqrt{2}}{3}} x$

3. Write each of the following functions in the form $f(x) = c \log_2 kx$ or $f(x) = c \log_3 kx$ for suitable constants $c$ and $k$:
   a) $f(x) = \log_{\frac{1}{32}} \left(-\frac{x}{2}\right)$
   b) $f(x) = \log_{\frac{1}{27}} \left(\frac{x}{3}\right)$

### 3.3.2 Graphs of Logarithmic Functions

If a one-to-one function $f$ has domain $A$ and range $B$, then its inverse function $f^{-1}$ has domain $B$ and range $A$. Since the exponential function $f(x) = a^x$ with $a > 0$ and $a \neq 1$ has domain $\mathbb{R}$ and range $(0, \infty)$, we see that its inverse function $g(x) = \log_a x$ has domain $(0, \infty)$ and range $\mathbb{R}$. Note that $g(x) = f^{-1}(x)$.

#### Example 1

Draw the graph of the logarithmic function $f(x) = \log_2 x$.

**Solution:**
First, we calculate values of $f(x)$ for some values of $x$ which are powers of 2 so that we can find their logarithms:

$f(8) = \log_2 8 = 3$, $f(4) = \log_2 4 = 2$, $f(2) = \log_2 2 = 1$, $f(1) = \log_2 1 = 0$,
$f\left(\frac{1}{2}\right) = \log_2 \frac{1}{2} = -1$, $f\left(\frac{1}{4}\right) = \log_2 \frac{1}{4} = -2$, $f\left(\frac{1}{8}\right) = \log_2 \frac{1}{8} = -3$

**Table:**
| $x$ | $\frac{1}{8}$ | $\frac{1}{4}$ | $\frac{1}{2}$ | 1 | 2 | 4 | 8 |
|-----|---------------|---------------|---------------|---|---|---|---|
| $f(x) = \log_2 x$ | -3 | -2 | -1 | 0 | 1 | 2 | 3 |

**Figure 3.8: Graph of $f(x) = \log_2 x$**

The graph shows an increasing logarithmic curve passing through points $(\frac{1}{8}, -3)$, $(\frac{1}{4}, -2)$, $(\frac{1}{2}, -1)$, $(1, 0)$, $(2, 1)$, $(4, 2)$, and $(8, 3)$. The curve approaches the y-axis as $x$ approaches 0 from the right but never touches it.

#### Exercise 3.23

For the function $f(x) = \log_3 x$:
a) Complete the table of values below:

| $x$ | $\frac{1}{27}$ | $\frac{1}{9}$ | $\frac{1}{3}$ | 1 | 3 | 9 | 27 |
|-----|----------------|---------------|---------------|---|---|---|----|
| $y = f(x)$ |                |               |               |   |   |   |    |

b) Find the intercepts.
c) Sketch the graph of $f$, first by plotting the points $(x,y)$ and then joining them by a smooth curve.
d) Find the domain and range of $f$.

**Basic Characteristics of the Graph of $f(x) = \log_a x$, $a > 1$:**

1. Domain: $\mathbb{R}^+$ = The set of all positive real numbers
2. Range: $\mathbb{R}$ = The set of all real numbers
3. x-intercept: $(1, 0)$
4. It has no y-intercept. It does not intersect the y-axis.
5. It is increasing function. The value of $f$ increases whenever the value of $x$ increases.
6. The graph goes upward as $x$ gets larger and positive.
7. The graph gets closer to the negative y-axis when $x$ gets closer to 0 from the right.

**Figure 3.9: Graph of $f(x) = \log_a x$, $a > 1$**

The graph shows an increasing logarithmic curve with vertical asymptote at $x=0$, passing through $(1,0)$ and $(a,1)$.

#### Example 2

Draw the graph of the logarithmic function $f(x) = \log_{\frac{1}{2}} x$.

**Solution:**
First, we calculate values of $f(x)$ for some values of $x$ which are powers of $\frac{1}{2}$:

$f(8) = \log_{\frac{1}{2}} 8 = -3$, $f(4) = \log_{\frac{1}{2}} 4 = -2$, $f(2) = \log_{\frac{1}{2}} 2 = -1$,
$f(1) = \log_{\frac{1}{2}} 1 = 0$,
$f\left(\frac{1}{2}\right) = \log_{\frac{1}{2}} \frac{1}{2} = 1$,
$f\left(\frac{1}{4}\right) = \log_{\frac{1}{2}} \frac{1}{4} = 2$,
$f\left(\frac{1}{8}\right) = \log_{\frac{1}{2}} \frac{1}{8} = 3$

**Table:**
| $x$ | 8 | 4 | 2 | 1 | $\frac{1}{2}$ | $\frac{1}{4}$ | $\frac{1}{8}$ |
|-----|---|---|---|---|---------------|---------------|---------------|
| $f(x) = \log_{\frac{1}{2}} x$ | -3 | -2 | -1 | 0 | 1 | 2 | 3 |

**Figure 3.10: Graph of $f(x) = \log_{\frac{1}{2}} x$**

The graph shows a decreasing logarithmic curve passing through $(8, -3)$, $(4, -2)$, $(2, -1)$, $(1, 0)$, $(\frac{1}{2}, 1)$, $(\frac{1}{4}, 2)$, and $(\frac{1}{8}, 3)$. The curve approaches the y-axis as $x$ approaches 0 from the right.

#### Exercise 3.24

For the function $f(x) = \log_{\frac{1}{3}} x$:
a) Complete the table of values below:

| $x$ | $\frac{1}{27}$ | $\frac{1}{9}$ | $\frac{1}{3}$ | 1 | 3 | 9 | 27 |
|-----|----------------|---------------|---------------|---|---|---|----|
| $y = f(x)$ |                |               |               |   |   |   |    |

b) Find the intercepts.
c) Sketch the graph of $f$, first by plotting the points $(x,y)$ and then joining them by a smooth curve.
d) Find the domain and range of $f$.

**Basic Characteristics of the Graph of $f(x) = \log_a x$, $0 < a < 1$:**

1. Domain: $\mathbb{R}^+$ = The set of all positive real numbers
2. Range: $\mathbb{R}$ = The set of all real numbers
3. x-intercept: $(1, 0)$
4. It has no y-intercept. It does not intersect the y-axis.
5. It is decreasing function. The value of $f$ decreases whenever the value of $x$ increases.
6. The graph goes downward as $x$ gets larger and positive.
7. The graph gets closer to the positive y-axis when $x$ gets closer to 0 from the right.

**Figure 3.11: Graph of $f(x) = \log_a x$, $0 < a < 1$**

The graph shows a decreasing logarithmic curve with vertical asymptote at $x=0$, passing through $(1,0)$ and $(a,1)$.

#### Note

For the logarithmic function $f(x) = \log_a x$:
- The graph of $-f(x)$ is the reflection of the graph of $f(x)$ along the x-axis.
- The graph of $f(-x)$ is the reflection of the graph of $f(x)$ along the y-axis.

#### Example 1

Sketch the graph of the following logarithmic functions by reflecting the graph of $f(x) = \log_2 x$ either along the x-axis or along the y-axis:
a) $g(x) = -\log_2 x$
b) $h(x) = \log_2 (-x)$

**Solution:**
Let $f(x) = \log_2 x$

**Figure 3.12: Graph of $f(x) = \log_2 x$ and $g(x) = -\log_2 x$**

a) Since $g(x) = -\log_2 x = -f(x)$, the graph of $g(x)$ is a reflection of the graph of $f(x)$ along the x-axis.

**Figure 3.13: Graph of $f(x) = \log_2 x$ and $h(x) = \log_2 (-x)$**

b) Since $h(x) = \log_2 (-x) = f(-x)$, the graph of $h(x)$ is a reflection of the graph of $f(x)$ along the y-axis.

#### Exercise 3.25

Sketch the graph of the following logarithmic functions by reflecting the graph of $f(x) = \log_{\frac{1}{2}} x$ either along the x-axis or along the y-axis:
a) $g(x) = -\log_{\frac{1}{2}} x$
b) $h(x) = \log_{\frac{1}{2}} (-x)$

### 3.3.3 Natural Logarithms

#### Definition 3.10

The logarithm of a number to the base $e$ is called natural logarithm and it is written as:
$$\log_e x = \ln x$$

#### Example 1

Find the value of each of the following natural logarithms:
a) $\ln 1$
b) $\ln e$
c) $\ln e^3$
d) $\ln \sqrt[3]{e^2}$
e) $\ln \frac{1}{e}$

**Solution:**
a) $\ln 1 = \log_e 1 = 0$
b) $\ln e = \log_e e = 1$
c) $\ln e^3 = 3 \ln e = 3$
d) $\ln \sqrt[3]{e^2} = \ln e^{\frac{2}{3}} = \frac{2}{3} \ln e = \frac{2}{3}$
e) $\ln \frac{1}{e} = \ln e^{-1} = -\ln e = -1$

The graphs of $y = e^x$, $y = \ln x$, and the line $y = x$ are shown in figure 3.14.

**Figure 3.14: Graph of $y = e^x$, $y = x$, and $y = \ln x$**

The graph shows the natural exponential function $y = e^x$, the line $y = x$, and the natural logarithmic function $y = \ln x$, demonstrating their inverse relationship.

#### Exercise 3.26

Find the values of:
a) $\ln \sqrt[3]{e^5}$
b) $\ln \left(\frac{1}{e^3}\right)$
c) $e^{\ln 5}$
d) $\ln \sqrt{e^2}$
e) $\ln (e \times e^2)$
f) $\ln (e^x \cdot e^y)$
g) $\ln \left(\frac{e^x}{e^y}\right)$

---

## 3.4 Solving Exponential and Logarithmic Equations

### 3.4.1 Solving Exponential Equations

An equation in which the variable occurs in the exponent is called an exponential equation. For instance, $2^x = 16$ and $3^{5x} = 81$ are exponential equations.

To solve exponential equations, we follow the following 3-step procedure:
1. Isolate the exponential expression on one side of the equation.
2. Take the logarithm of both sides, then use the laws of logarithms (power law of logarithms) to "bring down the exponent."
3. Solve for the variable.

Moreover, we use the following property:

#### Base-Exponent Property

For any real numbers $x$, $y$, $a > 0$, $a \neq 1$: $a^x = a^y$ if and only if $x = y$.

#### Example 1

Solve $2^{2x-1} = 8$.

**Solution:**
Since $8 = 2^3$, we have:
$$2^{2x-1} = 2^3$$
$$2x - 1 = 3$$
$$x = 2$$

So, the solution is $x = 2$.

**Figure 3.15: Graphs of $y = 2^{2x-1}$ and $y = 8$**

The graph shows the intersection point at $x = 2$, confirming the solution.

#### Example 2

Solve $2^{x^2 - 3x} = 16$.

**Solution:**
Since $16 = 2^4$, we have:
$$2^{x^2 - 3x} = 2^4$$
$$x^2 - 3x = 4$$
$$x^2 - 3x - 4 = 0$$
$$(x + 1)(x - 4) = 0$$

So, the solutions are $x = -1$ and $x = 4$.

#### Exercise 3.27

Solve for $x$:
a) $5^x = 125$
b) $3^{3-x} = 81$
c) $4^{2x-5} = 2^{3x+6}$
d) $\frac{1}{8} = \left(\frac{1}{4}\right)^x$
e) $2^{-x} = 512$
f) $3^{x^2 - 2} = 9$
g) $7^{x^2 + x} = 49$
h) $3^{3(x+2)} = 9^{x+2}$
i) $\left(\frac{27}{8}\right)^{\frac{2}{3}} = 2\left(\frac{32}{243}\right)^{2x}$

#### Example 3

Using logarithm, find $x$ if $2^x = 20$.

**Solution:**
Taking the common logarithm on both sides:
$$\log 2^x = \log 20$$
$$x \log 2 = \log (2 \times 10) = \log 2 + \log 10$$
$$x = \frac{\log 2 + 1}{\log 2}$$

But from the common logarithm table, $\log 2 \approx 0.3010$.

Hence, $x \approx \frac{0.3010 + 1}{0.3010} \approx \frac{1.3010}{0.3010} \approx 4.32226$

**Figure 3.16: Graphs of $y = 2^x$ and $y = 20$**

The graph shows the intersection point at $x \approx 4.32226$, confirming the solution.

#### Exercise 3.28

Solve for $x$ by taking the common logarithm of each side:
a) $3^x = 15$
b) $10^x = 13.4$
c) $10^{2x+1} = 92$
d) $6^{3x} = 5$
e) $4^{2x} = 61$
f) $(1.05)^x = 2$
g) $10^{5x-2} = 348$
h) $3^x = 0.283$
i) $2^x = 0.283$

### 3.4.2 Solving Logarithmic Equations

A logarithmic equation is an equation that involves the logarithm of an expression containing a variable. For instance, $\log_2 (x+3) = 4$ is a logarithmic equation.

Since the logarithm of non-positive numbers does not exist, before trying to find the solution of $\log_2 (x+3) = 4$, you have to restrict $x$ such that $x+3 > 0$. That is, $x > -3$. The set of all numbers greater than $-3$ is called the universal set or simply the universe of the equation $\log_2 (x+3) = 4$.

We use the following property to solve logarithmic equations:
For any positive real numbers $x$, $y$, $a > 0$ and $a \neq 1$: $\log_a x = \log_a y$ if and only if $x = y$.

We use the following procedures to solve logarithmic equations:
1. State the universe.
2. Collect the logarithmic term on one side of the equation.
3. Write the equation in exponential form.
4. Solve for the variable.

#### Example 1

Solve the logarithmic equation $\log_2 (x+3) = 4$.

**Solution:**
If $x + 3 > 0$, then the universe is $x > -3$.

$$\log_2 (x+3) = 4$$
$$x + 3 = 2^4 = 16$$
$$x = 13 > -3$$

So, the solution is $x = 13$.

**Figure 3.17: Graph of $y = \log_2 (x+3)$ and $y = 4$**

The graph shows the intersection point at $x = 13$, confirming the solution.

#### Example 2

Solve $\log_3 (5x-2) = 2 - \log_3 4$.

**Solution:**
If $5x - 2 > 0$, then $x > \frac{2}{5}$.

$$\log_3 (5x-2) = 2 - \log_3 4$$
$$\log_3 (5x-2) + \log_3 4 = 2$$
$$\log_3 4(5x-2) = 2 \quad \text{(Product law)}$$
$$\log_3 (20x-8) = 2$$
$$20x - 8 = 3^2 = 9$$
$$x = \frac{17}{20} > \frac{2}{5}$$

Thus, $x = \frac{17}{20}$ is the solution.

#### Exercise 3.29

State the universe and solve for $x$:
a) $\log_2 (3x-1) = 5$
b) $\log_{\sqrt{2}} x = 6$
c) $\log_2 (x^2 - 3x) = 4$
d) $\log_2 (x-1) + \log_2 3 = 3$
e) $\log (x^2 - 121) - \log (x+11) = 1$
f) $\log_x (x+6) = 2$
g) $\log x - \log 3 = \log 4 - \log (x+4)$
h) $\log_2 \left(1 + \frac{1}{x}\right) = 3$
i) $2 + \log_2 (x+2) - \log_2 (3x-5) = 3$

#### Example 1

Using logarithm, find $x$ if $3^{x+4} = 2^{-x}$.

**Solution:**
Taking the common logarithm on both sides:
$$\log 3^{x+4} = \log 2^{-x}$$
$$(x+4) \log 3 = -x \log 2$$
$$x \log 3 + 4 \log 3 = -x \log 2$$
$$x \log 3 + x \log 2 = -4 \log 3$$
$$x(\log 3 + \log 2) = -4 \log 3$$
$$x = \frac{-4 \log 3}{\log 3 + \log 2}$$

From the common logarithm table, we have $\log 2 \approx 0.3010$ and $\log 3 \approx 0.4771$.

Hence, $x \approx \frac{-4(0.4771)}{0.4771 + 0.3010} \approx -2.45264$

**Figure 3.18: Graphs of $y = 3^{x+4}$ and $y = 2^{-x}$**

The graph shows the intersection point at $x \approx -2.45$, confirming the solution.

#### Exercise 3.30

Using logarithm, find $x$ if:
a) $3^{x-1} = 2^x$
b) $9^x = 8^{x-1}$

---

## 3.5 Relation Between Exponential and Logarithmic Functions

Consider the tables of values for the exponential function $y = 2^x$ and logarithmic function $y = \log_2 x$ having the same base 2:

**Table for $y = 2^x$:**
| $x$ | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
|-----|----|----|----|---|---|---|---|
| $y = 2^x$ | $\frac{1}{8}$ | $\frac{1}{4}$ | $\frac{1}{2}$ | 1 | 2 | 4 | 8 |

**Table for $y = \log_2 x$:**
| $x$ | $\frac{1}{8}$ | $\frac{1}{4}$ | $\frac{1}{2}$ | 1 | 2 | 4 | 8 |
|-----|---------------|---------------|---------------|---|---|---|---|
| $y = \log_2 x$ | -3 | -2 | -1 | 0 | 1 | 2 | 3 |

We see that the values of $x$ and $y$ are interchanged in the functions $y = 2^x$ and $y = \log_2 x$. That is, the domain of $y = 2^x$ is the range of $y = \log_2 x$, the range of $y = 2^x$ is the domain of $y = \log_2 x$, and vice versa.

**Figure 3.19: Graph of $y = \log_2 x$ and $y = 2^x$**

The graph shows both functions plotted on the same coordinate system, demonstrating their inverse relationship. Observe that the graph of $y = \log_2 x$ is the reflection of the graph of $y = 2^x$ along the line $y = x$.

Generally, the functions $y = a^x$ and $y = \log_a x$, $a > 1$ are inverses of each other. The relation between the functions $y = a^x$ and $y = \log_a x$, $a > 1$ is shown graphically in figure 3.20.

**Figure 3.20: Graph of $y = \log_a x$ and $y = a^x$ for $a > 1$**

From the graphs above, observe that:
1. The domain of $y = a^x$ is the set of all real numbers, that is, the range of $y = \log_a x$.
2. The range of $y = a^x$ is the set of all positive real numbers, that is, the domain of $y = \log_a x$.
3. The x-axis is the horizontal asymptote of the graph of $y = a^x$; the y-axis is a vertical asymptote of the graph of $y = \log_a x$.
4. The point $(0, 1)$ is the y-intercept of the graph of $y = a^x$; the point $(1, 0)$ is the x-intercept of the graph of $y = \log_a x$.

**Figure 3.21: Family of Logarithmic Functions**

The graph shows logarithmic functions with bases 2, 3, 4, 5, and 10. These graphs can be drawn by reflecting the graphs of $y = 2^x$, $y = 3^x$, $y = 4^x$, $y = 5^x$, and $y = 10^x$ along the line $y = x$.

#### Example 1

For the exponential function $y = \left(\frac{1}{2}\right)^x$ and the logarithmic function $y = \log_{\frac{1}{2}} x$:

a) Complete the table of values below:

| $x$ | -3 | -2 | -1 | 0 | 1 | 2 | 3 |
|-----|----|----|----|---|---|---|---|
| $f(x) = \left(\frac{1}{2}\right)^x$ |    |    |    |   |   |   |   |

| $x$ | 8 | 4 | 2 | 1 | $\frac{1}{2}$ | $\frac{1}{4}$ | $\frac{1}{8}$ |
|-----|---|---|---|---|---------------|---------------|---------------|
| $g(x) = \log_{\frac{1}{2}} x$ |    |    |    |   |   |   |   |

b) Sketch their graphs on the same coordinate plane.
c) Find the domain and range of $f(x)$.
d) Find the domain and range of $g(x)$.
e) State the relation between the domain and range of $f(x)$ and $g(x)$.

**Solution:**
a) 
- For $f(x) = \left(\frac{1}{2}\right)^x$: $8, 4, 2, 1, \frac{1}{2}, \frac{1}{4}, \frac{1}{8}$
- For $g(x) = \log_{\frac{1}{2}} x$: $-3, -2, -1, 0, 1, 2, 3$

c) Domain of $f(x)$ is $\mathbb{R}$, range is $(0, \infty)$
d) Domain of $g(x)$ is $(0, \infty)$, range is $\mathbb{R}$
e) Domain of $f(x)$ = Range of $g(x)$ and Range of $f(x)$ = Domain of $g(x)$

#### Exercise 3.31

Let $f(x) = \left(\frac{1}{3}\right)^x$ and $g(x) = \log_{\frac{1}{3}} x$.

1. Sketch the graphs of $f(x)$ and $g(x)$ on the same xy-plane.
2. Find the domain and range of $f(x)$.
3. Find the domain and range of $g(x)$.
4. Compare the domain of $f(x)$ with the range of $g(x)$.
5. Compare the range of $f(x)$ with the domain of $g(x)$.

---

## 3.6 Applications

### 3.6.1 Compound Interest

Exponential functions occur in evaluating compound interest. Suppose an amount of money $P$, called the principal, is invested at an annual interest rate $r$, compounded once a year. Then after a year the interest is $Pr$. If the interest is added to the principal at the end of the year, the new amount $A(1)$ of money is:
$$A(1) = P + Pr = P(1 + r)$$

If the interest is reinvested, then the new principal is $A(1) = P(1 + r)$, and after another year the interest is $rA(1)$. Then the amount after the end of the second year, $A(2)$, is:
$$A(2) = A(1) + rA(1) = A(1)(1 + r) = P(1 + r)(1 + r) = P(1 + r)^2$$

Similarly, at the end of the third year, the amount $A(3)$ is $A(3) = P(1 + r)^3$. Generally, after the end of $t$ years, the amount $A(t)$ is:
$$A(t) = P(1 + r)^t$$

Observe that this is an exponential function with base $1 + r$.

Let $n$ be the number of compounding per year and $t$ be the number of years. Then the product $nt$ represents the total number of times the interest will be compounded and the interest rate per compounding period is $\frac{r}{n}$. This leads to the following formula:

#### Theorem 3.5 Compound Interest

Compound interest is calculated by the formula:
$$A(t) = P \left(1 + \frac{r}{n}\right)^{nt}$$

where:
- $A(t)$ = amount after $t$ years
- $P$ = principal
- $r$ = interest rate per year
- $n$ = number of times interest is compounded per year
- $t$ = number of years

#### Example 1

A total of Birr 20,000 is invested at an interest rate of 7% per year. Find the amounts in the account after 5 years if the interest is compounded:
a) annually
b) semi-annually
c) quarterly
d) monthly
e) daily

**Solution:**
a) Here we have $P = 20,000$, $r = 7\% = 0.07$, $n = 1$, and $t = 5$.
$$A(5) = 20,000 \left(1 + \frac{0.07}{1}\right)^{1 \times 5} = 20,000(1.07)^5 \approx 28,051.03$$

b) For semi-annual compounding, $n = 2$:
$$A(5) = 20,000 \left(1 + \frac{0.07}{2}\right)^{2 \times 5} = 20,000(1.035)^{10} \approx 28,211.98$$

c) For quarterly compounding, $n = 4$:
$$A(5) = 20,000 \left(1 + \frac{0.07}{4}\right)^{4 \times 5} = 20,000(1.0175)^{20} \approx 28,295.56$$

d) For monthly compounding, $n = 12$:
$$A(5) = 20,000 \left(1 + \frac{0.07}{12}\right)^{12 \times 5} = 20,000(1.00583)^{60} \approx 28,352.51$$

e) For daily compounding, $n = 365$:
$$A(5) = 20,000 \left(1 + \frac{0.07}{365}\right)^{365 \times 5} = 20,000(1.00019)^{1825} \approx 28,380.40$$

**Note:** The interest paid increases as the number of compounding periods $n$ increases.

#### Exercise 3.32

Suppose that Birr 10,000 is invested at 7% interest compounded annually.
a) Find the function (formula) for the amount to which the investment grows after $t$ years.
b) Find the amount of money in the account at $t = 1, 5, 10, 15$, and 20 years.
c) Find the time $t$ at which the investment is doubled.

Let us see what happens as $n$ gets larger and larger without bound.

If we let $m = \frac{n}{r}$, then:
$$A(t) = P \left(1 + \frac{r}{n}\right)^{nt} = P \left(1 + \frac{1}{m}\right)^{mrt} = P \left[\left(1 + \frac{1}{m}\right)^m\right]^{rt}$$

But as $m$ becomes larger and larger, the quantity $\left(1 + \frac{1}{m}\right)^m$ approaches the irrational number $e$.

Therefore, the amount $A$ approaches:
$$A = Pe^{rt}$$

This expression gives the amount when the interest is continuously compounded.

**Continuously Compound Interest** is calculated by the formula:
$$A(t) = Pe^{rt}$$

where:
- $A(t)$ = amount after $t$ years
- $P$ = principal
- $r$ = interest rate per year
- $t$ = number of years

#### Example 2

A total of Birr 100 is invested at an interest rate of 7% per year. Find the amount in the account after 5 years if the interest is compounded continuously.

**Solution:**
$$A(5) = 100(e^{0.07 \times 5}) = 100(e^{0.35}) = 100(1.41906) \approx 141.91$$

The amount in the account after 5 years is Birr 141.91.

**Figure 3.23: Graph of $A(t) = 100e^{0.07t}$**

The graph shows the exponential growth of the investment, reaching approximately 141.91 at $t = 5$.

#### Exercise 3.33

1) If Birr 40,000 is invested in an account for which interest is compounded continuously, find the amount of the investment at the end of 10 years for the following interest rates:
   a) 6%
   b) 7%
   c) 6.5%
   d) 7.5%

2) Suppose you are offered a job that lasts one month, and you are to be very well paid. Which of the following methods of payment is more profitable for you?
   a) Birr one million at the end of the month.
   b) Two cents on the first day of the month, four cents on the second day, eight cents on the third day, and, in general, $2^n$ cents on the $n^{th}$ day.

### 3.6.2 Population Growth

The exponential function:
$$P(t) = P_0 e^{kt}, \quad k > 0$$

is a mathematical model of many kinds of population growth. In this function, $P_0$ is the population at initial time $t_0$, $P(t)$ is the population after time $t$, and $k$ is called the exponential growth rate. The graph of such an equation is shown in figure 3.24.

**Figure 3.24: Graph of $P(t) = P_0 e^{kt}$**

The graph shows exponential population growth starting from $P_0$ and increasing rapidly over time.

#### Example 3

In 2013 E.C., the population of a country was 110 million, and the exponential growth rate was 2.3% per year.

a) Find the exponential growth function.
b) Estimate the population in 2018 E.C.
c) How many years will it take for the population to be doubled?

**Solution:**
a) Here $P_0 = 110$ million (population in year 2013, $t = 0$) and growth rate $k = 2.3\% = 0.023$. The exponential growth function is:
$$P(t) = 110,000,000 e^{0.023t}$$

b) In the year 2018, $t = 5$. To find the population:
$$P(5) = 110,000,000 e^{0.023 \times 5} = 110,000,000 e^{0.115} \approx 123,406,078$$
Therefore, the population will be 123,406,078 in 2018.

c) We find $t$ for which $P(t) = 2P_0 = 2(110,000,000) = 220,000,000$.

$$220,000,000 = 110,000,000 e^{0.023t}$$
$$2 = e^{0.023t}$$
Taking natural logarithm of both sides:
$$\ln 2 = \ln e^{0.023t}$$
$$\ln 2 = 0.023t$$
$$t = \frac{\ln 2}{0.023} \approx \frac{0.69315}{0.023} \approx 30.14$$

Hence, it takes approximately 30 years for the population of the country to be doubled.

**Figure 3.25: Population Growth Graph**

The graph shows the intersection of $y = 110,000,000 e^{0.023t}$ and $y = 220,000,000$ at $t \approx 30.14$.

#### Exercise 3.34

A culture contains 10,000 bacteria initially. After an hour, the bacteria count is 25,000.

a) Find the doubling period.
b) Find the number of bacteria after 5 hours.

### 3.6.3 The pH Scale

Chemists measured the acidity of a solution by giving its hydrogen ion concentration until Soren Peter Lauritz Sorensen, in 1909, proposed a more convenient measure. He defined:
$$pH = -\log[H^+]$$

where $[H^+]$ is the concentration of hydrogen ions measured in moles per liter (M). Solutions with $pH = 7$ are defined neutral, those with $pH < 7$ are acidic, and those with $pH > 7$ are basic.

#### Example 4

The hydrogen ion concentration of a sample of human blood was measured to be $[H^+] = 4.53 \times 10^{-8} M$. Find the pH and determine whether the blood is acidic or basic.

**Solution:**
$$pH = -\log[H^+] = -\log(4.53 \times 10^{-8}) = -[\log(4.53) + \log(10^{-8})] = -[0.6561 - 8] = 7.344$$

Since $pH = 7.344 > 7$, the blood is basic.

#### Example 5

The most acidic rainfall ever measured occurred in Scotland in 1974 and its pH was 2.4. Find the hydrogen ion concentration.

**Solution:**
$$pH = -\log[H^+]$$
$$2.4 = -\log[H^+]$$
$$\log[H^+] = -2.4$$
$$\log[H^+] = (3 - 2.4) - 3 = 0.6 + (-3)$$
$$\text{antilog}(\log[H^+]) = \text{antilog}(0.6 + (-3))$$
$$[H^+] = 3.981 \times 10^{-3}$$

So, the hydrogen ion concentration of the rainfall was about $3.98 \times 10^{-3} M$.

#### Exercise 3.35

1. The hydrogen ion concentration of a sample of each substance is given. Calculate the pH of the substance and determine whether it is acidic or basic.
   a) Lemon juice: $[H^+] = 5 \times 10^{-3} M$
   b) Tomato juice: $[H^+] = 3.2 \times 10^{-4} M$
   c) Seawater: $[H^+] = 5 \times 10^{-9} M$

2. The pH reading of a sample of each substance is given. Calculate the hydrogen ion concentration of the substance.
   a) Vinegar: $pH = 3$
   b) Milk: $pH = 6.5$

---

## Summary

1. For a natural number $n$ and a real number $a$, the power $a^n$, read "the $n^{th}$ power of $a$" or "$a$ raised to $n$", is defined as:
   $$a^n = \underbrace{a \times a \times \ldots \times a}_{n \text{ factors}}$$
   In $a^n$, $a$ is called the base and $n$ is called the exponent.

2. **Laws of Exponents:** For a real number $a$ and natural numbers $m$ and $n$:
   a) $a^m \times a^n = a^{m+n}$
   b) $\frac{a^n}{a^m} = a^{n-m}$, $a \neq 0$
   c) $(a^m)^n = a^{mn}$
   d) $(a \times b)^n = a^n \times b^n$
   e) $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$, $b \neq 0$

3. $a^0 = 1$, $a \neq 0$.

4. **Laws/Properties of Logarithms:** For any positive numbers $x$ and $y$ and $a > 0$, $a \neq 1$:
   a) $\log_a (xy) = \log_a x + \log_a y$
   b) $\log_a \left(\frac{x}{y}\right) = \log_a x - \log_a y$
   c) $\log_a x^r = r \log_a x$
   d) $\log_a x = \frac{\log_b x}{\log_b a}$
   e) $\log_a a = 1$
   f) $\log_a 1 = 0$
   g) $a^{\log_a x} = x$

5. The exponential function $f$ with base $a$ is denoted by $f(x) = a^x$ where $a > 0$, $a \neq 1$, and $x$ is any real number.

6. The natural exponential function is $f(x) = e^x$, where $e \approx 2.718281828\ldots$ Its graph has the same basic characteristics as the graph of $f(x) = a^x$.

7. The graphs of exponential functions $f(x) = a^x$ and $f(x) = a^{-x}$ have one y-intercept $(0,1)$, one horizontal asymptote (the x-axis), and are continuous.

8. For $x > 0$, $a > 0$, and $a \neq 1$, $y = \log_a x$ if and only if $x = a^y$. The function $f(x) = \log_a x$ is called the logarithmic function with base $a$.

9. The graph of the logarithmic function $f(x) = \log_a x$ where $a > 1$ is the graph of the inverse of $f(x) = a^x$.

10. For $x > 0$, $y = \ln x$ if and only if $x = e^y$. The function given by $f(x) = \log_e x = \ln x$ is called the natural logarithmic function. Its graph has the same basic characteristics as the graph of $f(x) = \log_a x$. They have the same x-intercept $(1,0)$, the same vertical asymptote (the y-axis), and are continuous.

---

## Review Exercise

1. $5^3 = 125$, so $\log_5 125 = \boxed{3}$.

2. $\log_5 25 = 2$, so $5^2 = \boxed{25}$.

3. Let $f(x) = \log_4 x$. Then find $f(4)$, $f(1)$, $f\left(\frac{1}{4}\right)$, $f(16)$, and $f(2)$.

4. Find the values of the given logarithms:
   a) $\log_3 3$
   b) $\log_3 1$
   c) $\log_3 34$
   d) $\log_{\frac{1}{27}} 3$
   e) $\log_{\sqrt{2}} 16$
   f) $\log_4 \left(\frac{1}{4}\right)$
   g) $\log_{\frac{1}{5}} 5$
   h) $\log_{\frac{1}{16}} 64$
   i) $\log_{\frac{1}{3}} C$
   j) $\log_5 0.2$
   k) $\log_{0.001} 0.1$
   l) $\log_{10} \sqrt{10}$
   m) $\log_5 20 + \log_5 \left(\frac{125}{4}\right) - \log_5 \left(\frac{1}{25}\right)$

5. Fill in the table by finding the appropriate logarithmic or exponential form:

| Logarithmic form | Exponential form |
|------------------|------------------|
| $\log_7 7 = 1$   |                  |
| $\log_8 64 = 2$  |                  |
|                  | $8 = 4^2$        |
|                  | $8 = 512$        |
| $\log_8 \left(\frac{1}{8}\right) = -1$ | |
|                  | $\frac{1}{8^{-2}} = 4$ |

6. Fill in the table:

| Logarithmic form | Exponential form |
|------------------|------------------|
|                  | $4 = 64$         |
| $\log_4 2 = \frac{1}{2}$ | |
|                  | $3^4 = 8$        |
| $\log_4 \left(\frac{1}{16}\right) = -2$ | |
| $\log_4 \frac{1}{2} = -\frac{1}{2}$ | |
|                  | $4^{-5} = \frac{1}{32}$ |

7. Express the logarithmic statement in exponential form:
   a) $\log_5 125 = 3$
   b) $\log_5 1 = 0$
   c) $\log_{10} 0.1 = -1$
   d) $\log_8 512 = 3$
   e) $\log_8 2 = \frac{1}{3}$
   f) $\log_9 3 = \frac{1}{2}$
   g) $\log_3 81 = 4$
   h) $\log_2 \frac{1}{8} = -3$

8. Express the exponential statement in logarithmic form:
   a) $3^3 = 27$
   b) $10^{-3} = 0.001$
   c) $10^3 = 1000$
   d) $81^{\frac{1}{2}} = 9$
   e) $8^{-1} = \frac{1}{8}$
   f) $2^{-3} = \frac{1}{8}$
   g) $4^{-3} = \frac{1}{64}$
   h) $10^{-3} = 0.001$

9. Use the definition of logarithmic function to find $x$:
   a) $\log_{\sqrt{2}} x = 6$
   b) $\log_2 32 = x$
   c) $\log_5 x = 4$
   d) $\log_{10} 0.1 = x$
   e) $\log_{\frac{1}{2}} 2 = x$
   f) $\log_4 x = 2$
   g) $\log_x 6 = \frac{1}{2}$
   h) $\log_x 3 = \frac{1}{3}$

10. Given $\log_{10} 2 = 0.3010$ and $\log_{10} 3 = 0.4771$, then find:
    a) $\log_2 \sqrt{3}$
    b) $\log_2 0.3$
    c) $\log_3 0.6$
    d) $\log_2 108$
    e) $\log_3 5$
    f) $\log_4 75$

11. Match the function with its graph:
    a) $f(x) = 4^x$
    b) $f(x) = \left(\frac{1}{4}\right)^x$
    c) $g(x) = \log_4 x$
    d) $f(x) = \log_{\frac{1}{4}} x$

12. In each of the following, tell which is greater:
    a) $\sqrt[8]{5}$ or $\sqrt[4]{2}$
    b) $\left(\frac{1}{3}\right)^{\sqrt{3}}$ or $\left(\frac{1}{3}\right)^3$
    c) $(\sqrt{0.2})^{-3.5}$ or $1$
    d) $\log_{\frac{1}{2}} 20$ or $\log_{\frac{1}{2}} 55$
    e) $\log(5 + \sqrt{7})$ or $\log 5 + \log \sqrt{7}$
    f) $2^{-11}$ or $2^{-10}$

13. Solve each of the following equations:
    a) $\left(\frac{1}{4}\right)^{x-1} = 4^{2-3x}$
    b) $2^x \times 5^x = 0.1 \times (10^{(x-1)})^5$
    c) $\left(\frac{1}{4}\right)^{3x} - \left(\frac{1}{8}\right)^{x-1} = 128$
    d) $2^{2x+2} = 9(2^x) - 2$
    e) $9^{x+1} + 3^{x+2} - 18 = 0$
    f) $28 - 2\log_2 \sqrt{2} = 4 \times 3^{2x+5} - 3^{4x+8}$
    g) $\frac{81^{5-2x} \times 243^{x-2}}{9^{5x-1}} = \frac{1}{3}$
    h) $9^{1 + \log_3 x} - 3^{1 + \log_3 x} - 210 = 0$

14. State the universe and solve each of the following equations:
    a) $\log_2 (x+2) + \log_2 (x-1) = 2$
    b) $\log_3 (x^2 - 8x) = 2$
    c) $\frac{\log x}{\log (5x-3)} = 1$
    d) $\frac{2 + \log x}{3 - \log x} = 5$
    e) $\log(3x^2 + 1) - \log(3 + x) = \log(3x - 2)$
    f) $\frac{\log(x^2 + 13)}{\log(x+5)} = 2$
    g) $\log(3x-1) - \log(3x+1) = \log 16$
    h) $3\sqrt{\log x} + 2\log \sqrt{x^{-1}} = 2$
    i) $\log[1 + \log_3 (2^x - 7)] = 1$
    j) $\log_4 (x+12) \cdot \log_x 2 = 1$

15. For the function given below, find the x-intercept, y-intercept, asymptote, domain, range, and sketch its graph:
    a) $f(x) = -2 + 2^x$
    b) $h(x) = -2 + 2^{-x}$
    c) $f(x) = \log_2 (x+2)$
    d) $g(x) = \log_{\frac{1}{2}} (x-1)$

16. The initial size of a culture of bacteria is 1,000. After an hour, the bacteria count is 8,000.
    a) Find a function that models the population after $t$ hours.
    b) Find the population after 1.5 hours.
    c) When will the population reach 15,000?
    d) Sketch the graph of the population function.

17. Suppose that Birr 10,000 is invested in a savings account paying 7% interest per year.
    a) Write the formula for the amount in the account after $t$ years if interest is compounded monthly.
    b) Find the amount in the account after 5 years if interest is compounded daily.
    c) How long will it take for the amount in the account to grow to 25,000 if interest is compounded semiannually?