# UNIT 2: INTRODUCTION TO CALCULUS

## Unit Outcomes

By the end of this unit, you will be able to:
- Deduce rate of change of different quantities.
- Calculate rate of change of different quantities.
- Understand gradient of functions at a point.
- Analyze the geometrical and mechanical meaning of derivative.
- Find the derivative of simple functions using gradient method.
- Find area of a region bounded by a function and x-axis on a given interval.
- Understand definite integral.
- Value the real world contributions of having skills of derivatives and integrations.
- Apply the knowledge of integral calculus to solve real life mathematical problems.
- Apply the concept of derivatives to solve basic problems in business, economics, and road taxation.

## Key Words

**Absolute maximum** - **Differentiation** - **Partial sums** - **Absolute minimum** - **Rate of change** - **Extreme values** - **Anti-derivative** - **First derivative test** - **Relative maximum** - **Fundamental theorem** - **Relative minimum** - **Area** - **Critical number** - **Gradient** - **Secant** - **Tangent** - **Definite integral** - **Indefinite integral** - **Partial fraction** - **Derivative** - **Volume**

## Introduction

In our daily life, we come across things that change according to some well recognizable rules. Many physical phenomena involve changing quantities such as the speed of a rocket, the inflation of currency, the number of bacteria in a culture, the shock intensity of an earthquake, the AC voltage of an electric signal, and so on. Calculus is one of the components of mathematics that is concerned with change and motion; it deals with quantities that approach other quantities. Thus, the knowledge of calculus is essential, especially when dealing with quantities that change at a variable rate; you need to understand the concept of a derivative, which is the mathematical tool that is used to study the rates at which physical quantities change.

The derivative is the exact rate at which one quantity changes with respect to another. Geometrically, the derivative is the slope of a curve at a point on the curve, defined as the slope of the tangent to the curve at the same point. The process of finding the derivative is called differentiation. This process is central to the branch of mathematics called differential calculus. In this unit, you are going to study the meaning and techniques of differentiation, applications of derivatives, and integration.

### Historical Notes

Calculus, known in its early history as infinitesimal calculus, is a mathematical discipline focused on limits, continuity, derivatives, integrals, and infinite series. Isaac Newton and Gottfried Wilhelm Leibniz independently developed the theory of infinitesimal calculus in the late 17th century. Newton was only 22 at the time.

## 2.1 Introduction to Derivatives

### 2.1.1 Understanding Rates of Change

#### Activity 2.1

Consider a square of length of side 4 cm.
a. If the length of the side of the square increases by 1 cm, find the change in the perimeter of the square.
b. If the length of the side of the square increases by 1 cm/s find the perimeter of the square when t = 1s, 2s, 3s.
c. What is the time rate of change of the perimeter of the square when its length of side increases by 2 cm/s?

What does a rate of change mean?

The fundamental philosophical truth is that everything changes. In physics, the change in position is known as displacement, in economics, the price change is known as inflation, in business, the change in costs is sometimes known as a trend, in mathematics, the change in values of a function is known as the derivative. But, to understand the derivatives, which measure instantaneous change, we need to understand the concepts of change and average change over intervals.

**Definition 2.1**

A rate of change is a rate that describes how one quantity changes in relation to another quantity. The units on a rate of change are output units per input units.

For Example: Cost per minute, plants per hectare, kilometers per liter of benzene, salary per month, population per square kilometer, etc.

Rates of change can be positive or negative or even zero. When a quantity does not change over time, it has zero rates of change.

1. **A positive rate of change** is the case when the values of the two quantities (say x and y) increase at the same time and the graph slopes upward (See Figure 2.1).

**Figure 2.1** - *Description: A graph showing an upward sloping line indicating a positive rate of change.*

2. **Negative rate of change** is the case when the value of one quantity (say x) increases and the value of the other quantity (say y) decreases. The graph slopes downward (See Figure 2.2).

**Figure 2.2** - *Description: A graph showing a downward sloping line indicating a negative rate of change.*

3. **Zero rate of change** is the case when the value of one quantity (say x) increases, the value of the other quantity (say y) remains constant. The graph is a horizontal line.

**Figure 2.3** - *Description: A graph showing a horizontal line indicating zero rate of change.*

**Example**

Calculate the rate of change for the following pairs of numbers:
a. (1,2) and (3,4)
b. (2,3) and (3,1)
c. (0,2) and (2,2)
d. (2,0) and (2,2)

**Solution**

a. Rate of change = (change in y)/(change in x) = (y₂ - y₁)/(x₂ - x₁) = (4-2)/(3-1) = 2/2 = 1. Thus, the rate of change is positive.

b. Rate of change = (1-3)/(3-2) = -2/1 = -2. Thus, the rate of change is negative.

c. Rate of change = (2-2)/(2-0) = 0/2 = 0. Thus, the rate of change is zero.

d. Rate of change = (2-0)/(2-2) = 2/0 = undefined. Thus, the rate of change is undefined.

**Remark**

A function is increasing where its rate of change is positive and decreasing where its rate of change is negative.

**Exercise 2.1**

Calculate the rate of change for the following pairs of numbers:
a. (4,6) and (5,9)
b. (4,7) and (5,6)
c. (1,2) and (3,-4)
d. (-2,4) and (3,-6)
e. (0,9) and (9,9)
f. (8,0) and (8,8)
g. (3,-1) and (1,-1)

**Note**

The two kinds of rate of change are average rate of change and instantaneous rate of change.

#### Average rate of change

**Definition 2.2**

If y = f(x) is a function, then the average rate of change of y with respect to x on the interval [a, b] is given by the expression:

Average rate of change = (change in y)/(change in x) = (f(b)-f(a))/(b-a) = Δy/Δx

**Example 1**

Find the average rate of change of a function f(x) = 2x - 9 between x₁ = 3 and x₂ = 6.

**Solution**

Step 1: Write the formula for the average rate of change over the interval x₁ ≤ x ≤ x₂

(f(x₂) - f(x₁))/(x₂ - x₁)

Step 2: Solve for f(x₁) and f(x₂).

f(x₂) = f(6) = 2(6) - 9 = 12 - 9 = 3
f(x₁) = f(3) = 2(3) - 9 = 6 - 9 = -3

Step 3: Substitute the known values into the formula and simplify

(f(6) - f(3))/(6-3) = (3 - (-3))/3 = 6/3 = 2

**Example 2**

Examine the motion of a car that travels along a straight road and assume that we can measure the distance traveled by the car (in meter) at t-second intervals as in the following chart:

| T(s) | 0 | 1 | 2 | 3 | 4 | 5 |
|------|---|---|---|---|---|---|
| S(m) | 0 | 2 | 10 | 25 | 43 | 78 |

a. Find the average velocity during the time interval 2 ≤ t ≤ 4
b. Find the average velocity during the time interval 2 ≤ t ≤ 3

**Solution**

a. Step 1: Write the formula for the average rate of change over the interval a ≤ x ≤ b

Average rate of change = (f(b) - f(a))/(b - a)

Step 2: Identify the two points corresponding to the interval
(a, f(a)) = (2, 10) and (b, f(b)) = (4, 43)

Step 3: Substitute the values into the formula and simplify

Average rate of change = (43 - 10)/(4 - 2) = 33/2 = 16.5 m/s

b. Similarly, Average velocity = (25 - 10)/(3 - 2) = 15/1 = 15 m/s

**Example 3**

The accompanying figure shows the graph of a function f. Find the average rate of change of the function f over the interval 0 ≤ x ≤ 9.

**Figure 2.4** - *Description: Graph of function f showing points (0, -7) and (9, 3).*

**Solution**

Step 1: Write the formula for the average rate of change over the interval 0 ≤ x ≤ 9

(f(x₂) - f(x₁))/(x₂ - x₁) where x₁ = 0 and x₂ = 9

Step 2: Observe from the graph the value of f(0) and f(9). We can see from the graph that f(0) = -7 and f(9) = 3

Step 3: Substitute the known values into the formula

Average rate of change = (f(9) - f(0))/(9 - 0) = (3 - (-7))/9 = 10/9

**Note:** The average rate of change is a measure of how much the function changed per unit, on average, over the interval. Geometrically, the average rate of change of a function y = f(x) on the interval [a,b] is the slope of the secant line through (a, f(a)) and (b, f(b)).

**Figure 2.5** - *Description: Graph showing secant line through points (a, f(a)) and (b, f(b)).*

**Exercise 2.2**

1. Compute the average rate of change of:
a. f(x) = 3x - 2 over the interval 0 ≤ x ≤ 2
b. f(x) = x² - 3x over the interval 1 ≤ x ≤ 6
c. f(x) = 3x² - 2 on the interval [1,5]
d. f(x) = x² + 3x + 1 on the interval [0,k]

2. In the following table, the average cost in Birr of a gallon of gasoline for the years 2005-2013 is illustrated. Using the data in the table, find the average rate of change of the price of gasoline between 2007 and 2009.

| X      | 2005 | 2006 | 2007 | 2008 | 2009 | 2010 | 2011 | 2012 | 2013 |
|--------|------|------|------|------|------|------|------|------|------|
| c(x)   | 2.31 | 2.62 | 2.84 | 3.30 | 2.41 | 3.58 | 3.68 | 4.21 | -    |

3. A candle has a starting length of 10 cm. Thirty minutes after lighting it, the length became 7 cm. Determine the rate of change in the length of the candle as it burns. Determine how long the candle takes to completely burn out.

#### Instantaneous Rate of Change

For many of the functions such as polynomial, trigonometric, exponential, logarithmic, and rational functions, it is possible to find their instantaneous rate of change for values of x in their domain.

**Activity 2.2**

Let y = x².
i. Find the average rate of change of the given function on the following intervals:
a. x = 1 and x = 1.1
b. x = 1 and x = 1.001
c. x = 1 and x = 1 + Δx
ii. Determine what happens as Δx approaches 0.

**Definition 2.3**

The instantaneous rate of change is the change at that particular moment.
Instantaneous rate of change = (y₂ - y₁)/(x₂ - x₁), where Δx gets closer and closer to zero.

**Note**

Average rate of change is the rate of change over the entire period. The instantaneous rate of change is the change at a certain period of time.

Therefore, when h gets closer and closer to zero, the instantaneous rate of change of a function f at x = x₀ is:
(f(x + h) - f(x))/h = Δy/Δx

**Example 1**

Evaluate the instantaneous rate of change of f(x) = 2x² + 9 at x = -3.

**Solution**

The instantaneous rate of change of a function f at x = x₀ is:
(f(x₀ + h) - f(x₀))/h

For the given function f(x) = 2x² + 9 at x = -3, the instantaneous rate of change is:
(f(-3 + h) - f(-3))/h
= (2(-3 + h)² + 9 - (2(-3)² + 9))/h
= (2(h² - 6h + 9) + 9 - (18 + 9))/h
= (2h² - 12h + 18 + 9 - (18 + 9))/h
= (2h² - 12h)/h
= 2h - 12, as h gets closer and closer to zero
= -12

Thus, the instantaneous rate of change is -12.

**Example 2**

Find the instantaneous rate of change of f(x) = √x at x = x₀ > 0.

**Solution**

Recall that the instantaneous rate of change of a function f(x) when x = x₀ is:
(f(x₀ + h) - f(x₀))/h

= (√(x₀ + h) - √x₀)/h
= (√(x₀ + h) - √x₀) × (√(x₀ + h) + √x₀)/(h × (√(x₀ + h) + √x₀))
= (x₀ + h - x₀)/(h(√(x₀ + h) + √x₀))
= 1/(√(x₀ + h) + √x₀)

As h gets closer and closer to zero, this quantity approaches 1/(2√x₀).

Instantaneous rates of change have many real-world applications; for example, the velocity of a moving body at a particular time is the instantaneous rate of change of the displacement at that time. In the final example, we will consider a real-world problem and determine the instantaneous rate of change at a particular time for a polynomial function representing the biomass of a bacterial culture.

**Example 3**

The biomass of a bacterial culture in milligrams as a function of time in minutes is given by f(t) = 71t² + 63. What is the instantaneous rate of growth of the culture when t = 2 minutes?

**Solution**

In this example, we want to determine the instantaneous rate of change of a cubic function representing the biomass of a bacterial culture.

Recall that the instantaneous rate of change of a function f(t) when t = t₀ is:
(f(2 + h) - f(2))/h

= (71(2 + h)² + 63 - (71 × 2² + 63))/h
= (71(h² + 4h + 4) + 63 - (284 + 63))/h
= (71h² + 284h + 284 + 63 - 347)/h
= (71h² + 284h)/h
= 71h + 284, as h gets closer and closer to zero
= 284

Since the rate of change is positive, it is equivalent to the rate of growth. Hence, the rate of growth of the biomass of a bacterial culture when t = 2 minutes is 284 mg/min.

The instantaneous rate of change is also related to the derivative, at an arbitrary point x. In particular, the instantaneous rate of change at x = x₀ of a function is the derivative of a function evaluated at x = x₀.

**Exercise 2.3**

1. Evaluate the instantaneous rate of change of f(x) = 6x² - 3 at x = 1.
2. Find the instantaneous rate of change of f(x) = 2√x at x = x₀ > 0.
3. The biomass of a bacterial culture in milligrams as a function of time in minutes is given by f(t) = 81t² + 90. What is the instantaneous rate of growth of the culture when t = 3 minutes?

### 2.1.2 Gradient of Curves and Rate of Changes

**Activity 2.3**

1. What is a secant line to a curve? What is a tangent line to a curve?
2. What is slope of a line? How can we calculate the slope of a line?

**Definition 2.4**

A tangent line to a curve or a graph of a function y = f(x) is a line that touches the curve exactly at one point, but does not cross the curve. The point where the tangent line touches the graph is said to be the point of tangency.

Gradient (slope) is a number that describes steepness and direction of a line:
- If slope is positive, then the line is increasing, which means it goes up as we move from left to right.
- If slope is negative then the line is decreasing, which means it goes down when we move from left to right.
- If the slope is zero then the line is horizontal.

**Figure 2.6** - *Description: Graph showing three lines with positive, negative, and zero slope.*

**Note:** If we are given two points A(x₀, y₀) and B(x₁, y₁) on the graph of y = f(x), then using definition 2.2 and understanding that 'change' is the difference between the two values we get the general formula for the slope of a secant line through the two points, which is given as:

Slope = (vertical change)/(horizontal change) = (change in y)/(change in x) = Δy/Δx = (y₁ - y₀)/(x₁ - x₀)

From this formula, we can see that the gradient of the secant line to the curve of a function is equal to the average rate of change.

**The slope of a secant line = average rate of change**

**Example 1**

Find the slope of a line passing through the given two points.
a. (-5,7) and (0,0)
b. (3,-5) and (-2,9)

**Solution**

a. Slope = Δy/Δx = (0 - 7)/(0 - (-5)) = -7/5

b. Slope = Δy/Δx = (9 - (-5))/(-2 - 3) = 14/(-5) = -14/5

**Example 2**

Find the slope of a secant line to the graph of the function f(x) = 2x³ + 3x - 5 over the interval [1,3].

**Solution**

Given f(x) = 2x³ + 3x - 5

Step 1: Write the formula for the slope of a secant line over the interval 1 ≤ x ≤ 3

Average rate of change = (f(3) - f(1))/(3 - 1)

Step 2: Solve for f(3) and f(1)

f(3) = 2(3)³ + 3(3) - 5 = 58
f(1) = 2(1)³ + 3(1) - 5 = 0

Step 3: Substitute the known values into the formula and simplify

Average rate of change = (58 - 0)/2 = 58/2 = 29

Therefore, the slope of a secant line to the graph of f(x) = 2x³ + 3x - 5 with respect to x over the interval [1,3] is 29.

**Exercise 2.4**

1. Find the slope of a line passing through the two given points:
a. (-3,-5) and (3,11)
b. (4,-9) and (5,-7)

2. For each of the following functions, find the slope of a secant line to the graph of the functions over the given intervals.
a. f(x) = x² + 1; [-1,3]
b. g(x) = x³ - 4x + 6; [1,2]

### 2.1.3 Gradient at a Point on a Curve

**Activity 2.4**

1. Let f(x) = x². Compute and simplify the algebraic expression (f(x) - f(x₀))/(x - x₀) and (f(x + h) - f(x))/h.
2. Let y = x³.
i. Find the slope of the secant line to the curve of the function between:
a. x = 1 and x = 1.1
b. x = 1 and x = 1.001
c. x = 1 and x = 1 + h
ii. Determine what happens as h approaches 0.

Suppose you are given some curve, and a point P on the curve as shown below in figures 2.7a and 2.7b.

**Figure 2.7a** - *Description: Curve with point P and secant line PQ₁ at a distance.*
**Figure 2.7b** - *Description: Curve with point P and multiple secant lines approaching the tangent line.*

- The line L passing through the point P is called a tangent line.
- Given another point Q₁ on the curve, let L₁ be the line passing through the points P and Q₁.
- L₁ is a secant line and is sometimes written as PQ₁.

Pick a point Q₂ closer to P. Notice that the slope of the secant line L₂ is closer to the slope of L compared to the slope of L₁.

As we pick points closer and closer to P, the slope of the associated secant lines will get closer and closer to the slope of the tangent line L.

Let P(a, f(a)) be any point on the graph of a function f. Another point on the graph may be denoted by Q(a + h, f(a + h)), where h is the difference between the x-coordinates of Q and P (see Figure 2.8a). By definition the slope m of the secant line through P and Q is:

mₚQ = m_secant = (f(a + h) - f(a))/h

**Figure 2.8a** - *Description: Graph showing points P(a, f(a)) and Q(a+h, f(a+h)) with secant line.*
**Figure 2.8b** - *Description: Graph showing point P with tangent line as h approaches 0.*

If f is a given function, then we can make Q approach P by letting h approach 0 (see figure 2.8b) and we get the slope of the tangent line to the curve. It is natural therefore, to define m as follows:

**Definition 2.5**

If f is a function defined on an open interval containing a, then as h gets closer and closer to zero, the slope m of the tangent line to the graph of y = f(x) at the point P(a, f(a)) is given by:

m = (f(a + h) - f(a))/h

**Note:**
1. If we allow the quantity h to get smaller and smaller, the point (a + h, f(a + h)) is getting closer to (a, f(a)), which in turn means that the slope of the secant line through (a + h, f(a + h)) is getting closer to the slope of the tangent line at (a, f(a)). Hence, the slope of the graph of a function at a point is the same as the slope of the tangent line at that point.
2. The slope of a tangent line represents the instantaneous rate of change of the function at that one point. That is:
   **The slope of a tangent line = instantaneous rate of change**

**Procedure to find gradient of a curve at a point**

To find the gradient of a curve y = f(x) at x = a use the following procedure:

Step 1: Write the quotient difference (f(x) - f(a))/(x - a) of f at x = a.
Step 2: Compute the algebraic expression in step 1 and simplify.
Step 3: Find the value of the result obtained in step 2 as the value of x approaches a.

The final result is the gradient of the tangent line to the curve y = f(x) at x = a.

**Example 1**

Find the gradient (slope) of the functions f(x) = x² at x = 2.

**Solution**

Slope = (f(x) - f(2))/(x - 2) = (x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2) = x + 2

Therefore, the slope of the function at x = 2 becomes:
x + 2 evaluated at x = 2 = 2 + 2 = 4

**Example 2**

If f(x) = x² find the gradient of the tangent line to the graph of f(x) at the point P(a, a²).

**Solution**

Given y = f(x) = x², using the above procedure, we have:
(f(x) - f(a))/(x - a) = (x² - a²)/(x - a) = (x - a)(x + a)/(x - a) = x + a

As x approaches a, the expression or the quantity x + a approaches 2a.

Therefore, the gradient of the tangent line to the curve y = f(x) = x² at the point P(a, a²) is m_tan = 2a, where m_tan denotes the slope of the tangent line to the graph of the function at the specified point of tangency.

This means that the instantaneous rate of change of the function at the point P is 2a and that the gradient of the tangent to the graph of the curve f(x) = x² at any point is found by doubling the x-coordinate. For example, the gradient of the function f(x) = x² at the point P(4,16) is equal to m_tan = 2(4) = 8, at P(-5,25) is m_tan = -10, at the origin P(0,0) is m_tan = 0.

**Figure 2.9** - *Description: Graph of f(x) = x² showing various points with their tangent lines and slopes.*

To clarify this idea consider the following table:

| x      | -5 | -2 | 0 | 3 | 4 |
|--------|----|----|---|---|---|
| f(x) = x² | 25 | 4  | 0 | 9 | 16 |
| Gradient (m) | -10 | -4 | 0 | 6 | 8 |

**Exercise 2.5**

1. Find the gradients of the tangent lines to the graph of the following function at specified points.
a. f(x) = x² at x = -1 and x = 4
b. f(x) = 3x² - 5x + 4 at x = 2 and x = -√2
c. g(x) = √x at x = 4
d. f(x) = 1/x at the point (2, 1/2)

2. If f(x) = x³, find the gradient of the tangent line to the graph of f(x) at the point P(a, a³).

### 2.1.4 Definition of Derivative

The slope concept usually pertains to straight lines. When a function is non-linear, its slope may vary from one point to the next. We must therefore introduce the notion of derivative which allows us to obtain the slope at all points of these non-linear functions.

#### 2.1.4.1 Derivative of function at a point

**Activity 2.5**

Let f(x) = x². Then:
a. Simplify (f(x) - f(1))/(x - 1)
b. Simplify (f(x + h) - f(x))/h

**Definition 2.6 (Derivatives of functions at a point)**

The derivative of a function f(x) at a number "a" in the domain of f, denoted by f'(a), is the gradient of the tangent line to the graph of y = f(x) at (a, f(a)). That is, as h gets closer and closer to zero from both directions, (f(a + h) - f(a))/h becomes closer to f'(a).

**Note:**
- f'(a) is the slope of the line tangent to the graph of f at the point (a, f(a)).
- If y = f'(x) is defined, then we say that f has a derivative at a or f is differentiable at a.

**Example**

Use definition 2.6, to find the derivatives of the following functions at the given value of a.
a. f(x) = 5x - 3; a = -2
b. f(x) = x² + 3; a = 5
c. f(x) = √(2x + 4); a = 6

**Solution**

Using the definition, as h gets closer and closer to zero f'(a) = (f(a + h) - f(a))/h and we have the following results:

a. f'(-2) = (f(-2 + h) - f(-2))/h
= ([5(-2 + h) - 3] - (-13))/h
= (-10 + 5h - 3 + 13)/h
= 5h/h = 5

b. f'(5) = (f(5 + h) - f(5))/h
= ([(5 + h)² + 3] - (25 + 3))/h
= (25 + 10h + h² + 3 - 28)/h
= (h² + 10h)/h = h + 10 = 10 as h approaches 0

c. f'(6) = (√(2(6 + h) + 4) - √(2(6) + 4))/h
= (√(2h + 16) - 4)/h
Rationalizing the numerator: (√(2h + 16) - 4)(√(2h + 16) + 4)/(h(√(2h + 16) + 4))
= (2h + 16 - 16)/(h(√(2h + 16) + 4))
= 2/(√(2h + 16) + 4)

As h approaches to 0, this approaches 2/(4 + 4) = 2/8 = 1/4

**Exercise 2.6**

Use definition 2.6, to find the derivatives of the following functions at the given value.
a. f(x) = x² - 1, a = 2
b. f(x) = 9x - 7, a = 2
c. f(x) = x² + 2x, a = 3
d. f(x) = √(3x - 6), a = 3

#### 2.1.4.2 The derivative as a function

**Activity 2.6**

For each of the following functions, find the set of values of x₀ such that f'(x₀) is defined and is unique.
a. f(x) = x²
b. f(x) = |x|
c. f(x) = 1/x

From Activity 2.6, you have observed that there are functions that are differentiable at all numbers in their domains and there are also functions that are not differentiable at some numbers in their domain. We are now ready to define derivatives.

**Definition 2.7**

The function f' whose domain consists of those values of x at which f is differentiable and whose value at any such number as h gets closer and closer to zero is given by:

f'(x) = (f(x + h) - f(x))/h

Here, we represent the derivative of a function by a prime symbol. For example, writing f'(x) represents the derivative of the function f evaluated at a point x.

Similarly, writing (5x² + 2x + 3)' indicates we are carrying out the derivative of the function 5x² + 2x + 3. The prime symbol disappears as soon as the derivative has been calculated.

If we let t = x + h, as h gets closer and closer to zero, t approaches x and the definition above can be re-written as:

f'(x) = (f(t) - f(x))/(t - x) as t gets very close to x.

**Note**

The derivative is the exact rate at which one quantity changes with respect to another.

**The different notations for the derivative**

The following are some of the other notations for derivatives. If y = f(x), then f'(x) is denoted by either of the following notations:
- f'(x)
- Df(x)
- Df
- dy/dx
- d/dx f(x)

**Example**

Find the derivative of the following functions:
a. f(x) = k, k be any constant
b. f(x) = x²
c. f(x) = √x

**Solution**

Use the definition and let h get closer and closer to 0.

From f'(x) = (f(x + h) - f(x))/h, we obtain:

a. For f(x) = k, k be any constant, the quotient (f(x + h) - f(x))/h = (k - k)/h = 0/h = 0.

Thus, by definition 2.6 f'(x) = 0 or d/dx(k) = 0.

b. When f(x) = x², the quotient difference:
(f(x + h) - f(x))/h = ((x + h)² - x²)/h
= (x² + 2xh + h² - x²)/h
= (2xh + h²)/h = 2x + h.

As h gets closer and closer to 0, the quantity 2x + h gets closer to 2x. Therefore, by definition 2.6:
f'(x) = 2x or d/dx(x²) = 2x.

c. For f(x) = √x, the quotient:
(f(x + h) - f(x))/h = (√(x + h) - √x)/h
Using rationalization:
= (√(x + h) - √x) × (√(x + h) + √x)/(h(√(x + h) + √x))
= (x + h - x)/(h(√(x + h) + √x))
= 1/(√(x + h) + √x)

As h tends to 0, this quantity approaches 1/(2√x).

Hence, by definition 2.7:
f'(x) = (√x)' = 1/(2√x).

**Exercise 2.7**

Use definition 2.7, find the derivative of the function with respect to x.
a. f(x) = x³
b. f(x) = x⁴
c. f(x) = 1/x
d. f(x) = 2√x

#### 2.1.4.3 Derivatives of various functions

##### i. Differentiation of power functions

**Activity 2.7**

Using definition 2.7, find the derivative of each of the following power functions:
a. f(x) = x
b. f(x) = x²
c. f(x) = x⁻²

2. What is the derivative of f(x) = xⁿ?

**Theorem 2.1**

Let f(x) = xⁿ, where n is a positive integer. Then f'(x) = nxⁿ⁻¹

**Proof**

Let f(x) = xⁿ. The quotient difference:
(f(t) - f(x))/(t - x) = (tⁿ - xⁿ)/(t - x)
= (t - x)(tⁿ⁻¹ + xtⁿ⁻² + x²tⁿ⁻³ + ... + xⁿ⁻²t + xⁿ⁻¹)/(t - x)
= tⁿ⁻¹ + xtⁿ⁻² + ... + txⁿ⁻² + xⁿ⁻¹, t ≠ x

Thus, by definition of the derivatives as t gets very close to x:
f'(x) = xⁿ⁻¹ + xⁿ⁻¹ + ... + xⁿ⁻¹ = nxⁿ⁻¹ (n times)

**Note:** By long division, we have:
tⁿ - xⁿ = (t - x)(tⁿ⁻¹ + xtⁿ⁻² + x²tⁿ⁻³ + ... + xⁿ⁻²t + xⁿ⁻¹)

**Example 1**

Find the derivatives of each of the following functions.
a. f(x) = x¹⁵
b. f(x) = x²⁴

**Solution:**
a. f'(x) = 15x¹⁴
b. f'(x) = 24x²³

**Corollary 2.1**

If f(x) = x⁻ⁿ, where n is a positive integer, then f'(x) = -nx⁻⁽ⁿ⁺¹⁾

**Example 2**

Find the derivatives of each of the following functions:
a. f(x) = x⁻⁵
b. f(x) = x⁻¹⁷

**Solution:**
a. f'(x) = -5x⁻⁶
b. f'(x) = -17x⁻¹⁸

**Example 3**

Let f(x) = x⁻⁶, find:
a. f'(1)
b. f'(3)
c. f'(k), k ≠ 0

**Solution:**
f'(x) = -6x⁻⁷
a. f'(1) = -6(1)⁻⁷ = -6
b. f'(3) = -6(3)⁻⁷ = -6/3⁷
c. f'(k) = -6(k)⁻⁷ = -6k⁻⁷

**Corollary 2.2**

Let f(x) = kxⁿ, then f'(x) = knxⁿ⁻¹, where n is any non-zero integer and k is a constant number.

**Example 4**

Find the derivative of each of the following functions.
a. f(x) = -2x¹¹
b. f(x) = 4x²⁰
c. f(x) = 3/x¹⁵
d. f(x) = 5/x⁷

**Solution:**
Using corollary 2.2, we obtain:
a. f'(x) = -2(11)x¹⁰ = -22x¹⁰
b. f'(x) = 4(20)x¹⁹ = 80x¹⁹
c. f'(x) = 3(-15)x⁻¹⁶ = -45x⁻¹⁶ = -45/x¹⁶
d. f'(x) = 5(-7)x⁻⁸ = -35x⁻⁸ = -35/x⁸

**Exercise 2.8**

Find the derivative of each of the following functions.
a. f(x) = x⁸
b. f(x) = x²⁷
c. f(x) = 2x⁴
d. f(x) = 10x¹⁵
e. f(x) = 4x⁻⁷
f. f(x) = 3x⁻²⁰
g. f(x) = 4x²·²
h. f(x) = -10x⁰·⁵

2. Let f(x) = x⁻⁹, find:
a. f'(1)
b. f'(3)
c. f'(k), k ≠ 0

3. Based on Theorem 2.1, show the proof of corollary 2.1 and corollary 2.2.

##### ii. Derivatives of combinations of functions

###### a. Derivatives of a sum and difference of functions

**Activity 2.8**

Given the functions f(x) = x², and g(x) = x² + 2x, then find:
a. f'(x) + g'(x)
b. (f + g)'(x)
c. f'(x) - g'(x)
d. (f - g)'(x)

**Theorem 2.2**

If f and g are differentiable functions at a, then f + g and f - g are also differentiable at a and are given by:
(f + g)'(a) = f'(a) + g'(a)
(f - g)'(a) = f'(a) - g'(a)

**Proof**

From the definition of derivative, we have:
(f + g)(x) - (f + g)(a) = f(x) + g(x) - f(a) - g(a)
= (f(x) - f(a)) + (g(x) - g(a))

Dividing by (x - a):
[(f + g)(x) - (f + g)(a)]/(x - a) = [f(x) - f(a)]/(x - a) + [g(x) - g(a)]/(x - a)

By definition of derivatives, as x gets close to a:
(f + g)'(a) = f'(a) + g'(a)

This theorem implies for all x at which both f and g are differentiable:
(f + g)'(x) = f'(x) + g'(x)

**Corollary 2.3**

If f₁, f₂, f₃, ..., fₙ are differentiable at a number a, then:
(f₁ + f₂ + f₃ + ... + fₙ)'(a) = f₁'(a) + f₂'(a) + f₃'(a) + ... + fₙ'(a)
and
(f₁ - f₂ - f₃ - ... - fₙ)'(a) = f₁'(a) - f₂'(a) - f₃'(a) - ... - fₙ'(a)

**Example 1**

If f(x) = x³ + 3x², find a formula for f'(x) and compute f'(2).

**Solution**
f'(x) = 3x² + 6x
f'(2) = 3(2)² + 6(2) = 12 + 12 = 24

**Example 2**

Find the derivative of the function f(x) = 3x⁴ - 2x² + 10x + √x + 1/x

**Solution**
f'(x) = 12x³ - 4x + 10 + 1/(2√x) - 1/x²

**Exercise 2.9**

1. If f(x) = x⁴ - 3x² + 2, find a formula for f'(x) and compute f'(3).

2. Find the derivative of each of the following functions:
a. f(x) = 5x⁴ + √x
b. f(x) = x + 1/x
c. f(x) = (2x - 4)/x²
d. f(x) = √x - 1/x
e. f(x) = x¹⁰ + 1/x + 6x³
f. f(x) = 6x³ - 1/(3x³)

3. Based on the proof of the sum rule of derivative, show the proof of the difference rule.

###### Derivative of a constant multiple of a function

**Activity 2.9**

Given the function f(x) = x², find:
a. (3f)'(x)
b. 3(f'(x))

**Theorem 2.3**

If f is differentiable at a, then for any constant number k, the function kf is differentiable at a and (kf)'(a) = k(f'(a))

**Proof**

By definition of the derivative as x → a:
(kf)'(a) = [(kf)(x) - (kf)(a)]/(x - a) = k[f(x) - f(a)]/(x - a) = k[f(x) - f(a)]/(x - a) = kf'(a)

Thus, for all x at which f is differentiable:
(kf)'(x) = kf'(x)

**Example 1**

Let f(x) = 6√x, find the formula for f'(x) and compute f'(4).

**Solution**
f'(x) = (6√x)' = 6/(2√x) = 3/√x
f'(4) = 3/√4 = 3/2

**Derivative of polynomial functions**

If f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + aₙ₋₂xⁿ⁻² + ... + a₁x + a₀, then:
f'(x) = naₙxⁿ⁻¹ + (n-1)aₙ₋₁xⁿ⁻² + (n-2)aₙ₋₂xⁿ⁻³ + ... + a₁

**Example 2**

Given y = 3x⁵ - √2x + 20x + 1, compute dy/dx at x = -1.

**Solution**
Using differentiation rules:
dy/dx = 15x⁴ - √2 + 20

Then, we evaluate the derivative at x = -1:
dy/dx|_{x=-1} = 15(-1)⁴ - √2 + 20 = 15 - √2 + 20 = 35 - √2

**Exercise 2.10**

1. Find the derivatives of the following functions.
a. f(x) = 10/x
b. f(x) = 3x³·¹⁰
c. f(x) = √(3x³)
d. f(x) = x⁴ - 2x³ + 3x - 2

2. Find the derivatives of the following functions, and compute the indicated values:
a. y = 2√x, evaluate dy/dx at x=1 and dy/dx at x=4
b. y = 1/x, evaluate dy/dx at x=1 and dy/dx at x=3
c. y = x¹⁰, evaluate dy/dx at x=1 and dy/dx at x=2

###### c. Derivative of a product

**Activity 2.10**

Given the functions f(x) = x² and g(x) = x³, find:
a. (fg)'(x)
b. f'(x)g(x) + f(x)g'(x)

**Theorem 2.4**

If f and g are differentiable at a, then fg is also differentiable at a, and:
(fg)'(a) = f'(a)g(a) + f(a)g'(a)

**Proof**

By definition of the derivative as x gets very close to a:
(fg)(a) = [(fg)(x) - (fg)(a)]/(x - a)
= [f(x)g(x) - f(a)g(a)]/(x - a)
= [f(x)g(x) - f(a)g(x) + f(a)g(x) - f(a)g(a)]/(x - a)
= g(x)[f(x) - f(a)]/(x - a) + f(a)[g(x) - g(a)]/(x - a)

As x → a, the expression [f(x) - f(a)]/(x - a) = f'(a) and [g(x) - g(a)]/(x - a) = g'(a). Thus:
(fg)'(a) = f'(a)g(a) + f(a)g'(a)

From this theorem, we generalize that, for all x at which both f and g are differentiable:
(fg)'(x) = f'(x)g(x) + f(x)g'(x)

**Example**

1. Find the derivative of the following functions:
a. g(x) = (x + 6)(x² + 4)
b. f(x) = x²(√x + 2x)

**Solution**
a. Using product property:
g'(x) = (x + 6)'(x² + 4) + (x + 6)(x² + 4)' = (x² + 4) + 2x(x + 6) = 3x² + 12x + 4

b. Using product property:
f'(x) = (x²)'(√x + 2x) + x²(√x + 2x)'
= 2x(√x + 2x) + x²(1/(2√x) + 2)
= 2x√x + 4x² + x²/(2√x) + 2x²
= 6x² + (5/2)x√x

**Exercise 2.11**

Find f'(x) of the following functions using product rule:
a. f(x) = (2x + 1)(x² + x - 5)
b. f(x) = (x² - 2)(x³ + 4x)
c. f(x) = x(x² + √x)
d. f(x) = (x + 2√x)(x² - 2)

###### d. Derivative of a quotient

**Theorem 2.5**

If f and g are differentiable at a, and g(a) ≠ 0, then f/g is differentiable at a and:
(f/g)'(a) = [f'(a)g(a) - f(a)g'(a)]/(g(a))²

**Proof**

By definition of derivative as x gets very close to a:
(f/g)'(a) = [(f/g)(x) - (f/g)(a)]/(x - a)
= [f(x)/g(x) - f(a)/g(a)]/(x - a)
= [g(a)f(x) - f(a)g(x)]/[g(x)g(a)(x - a)]

As x → a, the quantity [f(x) - f(a)]/(x - a) = f'(a) and [g(x) - g(a)]/(x - a) = g'(a). Thus:
(f/g)'(a) = [f'(a)g(a) - f(a)g'(a)]/(g(a))²

From this theorem, we see that, for all x at which both f and g are differentiable:
(f/g)'(x) = [f'(x)g(x) - f(x)g'(x)]/(g(x))²

**Example**

Find f'(x):
a. f(x) = (x² + 3x - 1)/x
b. f(x) = 8x³/(x² + 2x)

**Solution**
Using quotient rule:
a. f'(x) = [(2x + 3)x - (x² + 3x - 1)(1)]/x² = [2x² + 3x - x² - 3x + 1]/x² = (x² + 1)/x²

b. f'(x) = [24x²(x² + 2x) - 8x³(2x + 2)]/(x² + 2x)²
= [24x⁴ + 48x³ - 16x⁴ - 16x³]/(x² + 2x)²
= (8x⁴ + 32x³)/(x² + 2x)²

**Exercise 2.12**

Find the derivative of each of the following functions.
a. f(x) = 1/(x² + 1)
b. f(x) = (2x² + 3)/(x - 5)
c. f(x) = x²/(x² + 3x)
d. f(x) = 2x/√x

##### 2.1.4.4 The chain rule

**Activity 2.11**

1. Let f(x) = 2x + 3 and g(x) = x² - 1. Find each of the following functions:
a. f'(x)
b. f(g(x))
c. f(g(x))
d. f'(g(x))·g'(x)

2. Find the derivatives of the following functions:
a. f(x) = (3x² + 2x)⁵
b. f(x) = (√x)² + 2x - 7

**Theorem 2.6**

Let g be differentiable at a, and f be differentiable at g(a). Then f∘g is differentiable at a, and (f∘g)'(a) = f'(g(a))·g'(a).

The Chain rule can be interpreted as saying that (f∘g)'(x) = f'(g(x))g'(x) for all x such that g is differentiable at x and f is differentiable at g(x).

**Proof**

For g(x) - g(a) ≠ 0:
[f(g(x)) - f(g(a))]/(x - a) = [f(g(x)) - f(g(a))]/[g(x) - g(a)] × [g(x) - g(a)]/(x - a)

By definition of derivative as x gets very close to a:
(f∘g)'(a) = f'(g(a))·g'(a)

**Example 1**

For each of the following functions find a formula for f'(x).
a. f(x) = √(x⁴ + 3x² - 5)
b. f(x) = (5x + 4)²¹

**Solution**
Using the Chain rule:
a. f is the composition of two simple functions g(x) = √x and h(x) = x⁴ + 3x² - 5. That is, f(x) = g(h(x)).

By the chain rule, f'(x) = g'(h(x))·h'(x)
But g'(x) = 1/(2√x) and h'(x) = 4x³ + 6x

Thus, f'(x) = g'(h(x))·h'(x) = (1/(2√(x⁴ + 3x² - 5))) × (4x³ + 6x) = (2x³ + 3x)/√(x⁴ + 3x² - 5)

b. f'(x) = 21(5x + 4)²⁰ × 5 = 105(5x + 4)²⁰

**Example 2**

Let y = √(4 + x⁵). Find a formula for dy/dx and compute dy/dx at x = 1.

**Solution**
dy/dx = (5x⁴)/(2√(4 + x⁵))
At x = 1: dy/dx = 5/(2√5)

**Exercise 2.13**

Find the derivative of the following functions using the chain rule:
a. f(x) = (2x + 1)⁴⁰
b. f(x) = (x³ + 2x)²⁵
c. f(x) = √(x² + 3x - 1)
d. f(x) = (3x + 2)²/(3x - 5)
e. f(x) = √(x² + 3x)

### 2.1.5 Maximum and Minimum Points

The differentiation of various functions renders great services in solving the problems concerned with finding out the maximum and minimum values of quantities. In the various fields of engineering and technology, we have to find the maximum or minimum values of one quantity with respect to another quantity. For example, in finding the radius and height of a cylinder that is to be manufactured with the metal sheet of a given surface area, so that the capacity of cylinder is maximum. Sometimes it is necessary to find the least cost for the transmission of given horsepower. We can find the dimensions of a plot of a given perimeter so that its area is maximum and so on.

#### 2.1.5.1 Increasing and Decreasing Functions

**Activity 2.12**

Find the real zeros of each of the following functions:
a. f(x) = 4x - 8
b. f(x) = x² - x - 12
c. f(x) = (1 - √x)/(x - 2)²

Consider the graph of the following function.

**Figure 2.10** - *Description: Graph of a function showing intervals where it is increasing and decreasing.*

a. Identify the intervals in which the graph is rising and falling as you move from left to right starting at a.
b. Identify the intervals in which the graph is neither rising nor falling.

3. Solve each of the following inequalities using sign chart method:
a. 2x² + 3x - 2 ≥ 0
b. x² + 3x - 4 < 0

**Definition 2.8**

Let f be a function on an interval I. If x₁ and x₂ are in I:
- For x₁ < x₂, if f(x₁) ≤ f(x₂), then f is said to be **increasing** on I.
- For x₁ < x₂, if f(x₁) ≥ f(x₂), then f is said to be **decreasing** on I.
- For x₁ < x₂, if f(x₁) < f(x₂), then f is **strictly increasing** on I.
- For x₁ < x₂, if f(x₁) > f(x₂), then f is **strictly decreasing** on I.

Geometrically, a function is increasing if its graph rises and decreases if its graph falls while x moves to the right.

**Increasing and decreasing test**

Suppose that f(x₁) ≥ f(x₂), f is differentiable in the interior of an interval I.
a. If f'(x) ≥ 0 for all x in the interior of I, then f is increasing on I.
b. If f'(x) ≤ 0 for all x in the interior of I, then f is decreasing on I.
c. If f'(x) > 0 and f(x) = 0 on I, then f is strictly increasing on I.
d. If f'(x) < 0 and f(x) = 0 on I, then f is strictly decreasing on I.

**Note:** A function that is either increasing or decreasing is known as a monotonic function.

**Definition 2.9**

A number c in the domain of a function f is said to be a **critical number** of f if and only if either f'(c) = 0 or f has no derivative at c.

**Example 1**

Find the critical numbers of the given functions:
a. f(x) = 4x³ - 5x² - 8x + 20
b. f(x) = 2√x(6 - x)

**Solution**
a. f'(x) = 12x² - 10x - 8 = 2(6x² - 5x - 4) = 2(2x + 1)(3x - 4)
f'(x) = 0 ⇒ x = -1/2 or x = 4/3

b. Applying the product rule of derivatives:
f'(x) = (1/√x)(6 - x) - 2√x = [6 - x - 2x]/√x = (6 - 3x)/√x
f'(x) = 0 ⇒ x = 2
and f'(x) does not exist when x = 0.

Hence, the critical numbers of f are x = 0 and x = 2.

**Example 2**

Find the interval on which the function f(x) = 3x⁴ - 4x³ - 12x + 5 is increasing and decreasing.

**Solution**
f'(x) = 12x³ - 12x² - 24x = 12x(x² - x - 2) = 12x(x - 2)(x + 1)

Hence, the critical numbers are x = -1, 0, 2.

**Sign Chart:**
```
      -1      0      2
12x   ---  +++  +++  +++
x+1   ---  +++  +++  +++
x-2   ---  ---  ---  +++
f'(x) = 12x(x-2)(x+1)
      ---  +++  ---  +++
```

From the sign chart above:
f'(x) ≥ 0 on [-1,0] ∪ [2,∞) and f'(x) ≤ 0 on (-∞,-1] ∪ [0,2]

Therefore, the function is increasing on an interval [-1,0] ∪ [2,∞) and decreasing on (-∞,-1] ∪ [0,2].

**Exercise 2.14**

1. Find all the critical numbers of the following functions:
a. f(x) = x³ + 6x²
b. f(x) = 2x²/(1 - x²)
c. f(x) = 2x³ + 9x² - 24x
d. f(x) = 8x√(1 - x²)

2. Find the interval on which the following functions are increasing and decreasing.
a. f(x) = x³ + 6x²
b. f(x) = 2x² + 6x - 10
c. f(x) = -2x³ + 3x² + 12x + 6
d. f(x) = x - 6√(x - 1)
e. f(x) = (x + 3)²(x - 1)²

#### 2.1.5.2 Minimum and maximum values of a function

**Activity 2.13**

Consider the graph of the following function.

**Figure 2.12** - *Description: Graph showing local and absolute maximum and minimum points.*

a. Where does the function attain maximum value and a minimum value?
b. What happens to the gradient at a maximum point and at a minimum point?

**Definition 2.10**

If there exists an open interval (a,b) containing c such that f(x) < f(c) for all x in (a,b) other than c in the interval, then f(c) is a **relative (local) maximum** value of f and a point (c, f(c)) is called relative maximum point.

If f(x) > f(c) for all x in (a,b) other than c, then f(c) is a **relative (local) minimum** value of f and the point (c, f(c)) is known as relative (local) minimum point (See Figure 2.13 below). Functions may have any number of relative extrema.

**Figure 2.13** - *Description: Graph showing local maximum and minimum points with tangent lines.*

**Definition 2.11**

If c is in the domain of f and for all x in the domain of the function, f(x) ≤ f(c), then (c, f(c)) is an **absolute maximum point** of the function f. If for all x in the domain f(x) ≥ f(c) then (c, f(c)) is an **absolute minimum point** of the function f. (See Figure 2.14). The absolute maximum and minimum values of f are called **absolute extreme values**.

**Note:** Absolute extrema are not necessarily unique. At either local maximum or local minimum point the gradient is zero.

**Figure 2.14** - *Description: Graph showing absolute maximum, relative maximum, absolute minimum, and relative minimum points.*

**Procedure to find absolute extreme values on closed intervals**

We can find the absolute maximum and minimum values of a function f on a closed interval [a, b] by the following steps:

Step 1: Find all the critical numbers of a function f.
Step 2: Evaluate f at all critical numbers and at the endpoints a and b.
Step 3: Choose the largest and the smallest values obtained in step 2. These values are the maximum and the minimum of a function f on [a,b].

**Example**

Find the absolute maximum and minimum values of the function f(x) = x² - 2x on [-1,2].

**Solution**
f'(x) = 2x - 2 = 2(x - 1)
f'(x) = 0 ⇒ x = 1

Thus, the critical number of f is x = 1.

Thus, to determine the extreme value of the function we need to evaluate the value of the function at the boundary and critical number:
f(-1) = 1 + 2 = 3
f(1) = 1 - 2 = -1
f(2) = 4 - 4 = 0

Therefore, the absolute maximum value is f(-1) = 3 and the absolute minimum value is f(1) = -1. Thus, (-1,3) is the maximum point and (1,-1) is the minimum point of f.

**Exercise 2.15**

Find the absolute maximum and minimum values of the following functions on a given interval.
a. f(x) = x² + 2x + 3, [-2,2]
b. f(x) = x³ + 3x² - 9x + 5, [-2,2]
c. f(x) = 3x⁴ - 26x³ - 60x² - 11 on [1,5]
d. f(x) = (x² - 2x + 4)/(x - 2), [-3,1]

**The first derivative test**

Let c be a critical number of a function f on an open interval I containing c.
a. If the sign of f' changes from negative to positive at c, then f has a relative minimum at c.
b. If the sign of f' changes from positive to negative at c, then f has a relative maximum at c.
c. If the sign of f' does not change at c, then f has no relative maximum or minimum at c.

**Procedure to find relative extreme value**

To determine relative extreme value of a function using the first derivative test one can follow the following steps:

Step 1: Find all the critical numbers of f.
Step 2: Form the sign chart for f'(x) using the critical number as poles.
Step 3: Apply first derivative test and decide the extreme values if any.

**Example 1**

Find the relative maximum and minimum values of:
a. f(x) = 2x³ + 3x² - 12x - 3
b. f(x) = (x - 1)²(x - 3)

**Solution**
a. f'(x) = 6x² + 6x - 12 = 6(x² + x - 2) = 6(x + 2)(x - 1)
Hence, the critical numbers are x = -2, 1.

**Sign Chart:**
```
      -2      1
6(x+2) --- +++ +++
x-1    --- --- +++
f'(x)  +++ --- +++
```

From the sign chart above we see that f' changes its sign from positive to negative at x = -2 and changes from negative to positive at x = 1. Therefore, the function has a local maximum value at x = -2 and a local minimum value at x = 1. This implies the point (-2, f(-2)) = (-2, 17) is a relative maximum and (1, f(1)) = (1, -10) is a relative minimum point of the function.

b. f'(x) = 2(x - 1)(x - 3)² + 2(x - 1)²(x - 3)
= 2(x - 1)(x - 3)[(x - 3) + (x - 1)]
= 2(x - 1)(x - 3)(2x - 4)
= 4(x - 1)(x - 2)(x - 3)

Hence, the critical numbers are x = 1, 2, 3.

**Sign Chart:**
```
      1      2      3
4(x-1) --- +++ +++ +++
x-2    --- --- +++ +++
x-3    --- --- --- +++
f'(x)  +++ --- +++ ---
```

From the sign chart, we see that f' changes its sign from negative to positive at x = 1 and x = 3, and changes from positive to negative at x = 2. Therefore, (1, f(1)) = (1,0) and (3, f(3)) = (3,0) are relative minimum points, and (2, f(2)) = (2,1) is the relative maximum point of the function.

**Example 2**

If f(x) = ax³ + bx - 5 has a relative minimum value of -6 at x = -4/3, find a and b.

**Solution**
Given f(-4/3) = -6:
a(-4/3)³ + b(-4/3) - 5 = -6
-64a/27 - 4b/3 = -1 ...(i)

Given f'(x) = 3ax² + b:
f'(-4/3) = 0 ⇒ 3a(16/9) + b = 0 ⇒ 16a/3 + b = 0 ...(ii)

Solving (i) and (ii):
From (ii): b = -16a/3
Substituting into (i): -64a/27 - 4(-16a/3)/3 = -1
-64a/27 + 64a/9 = -1
-64a/27 + 192a/27 = -1
128a/27 = -1 ⇒ a = -27/128

Then b = -16(-27/128)/3 = 432/384 = 9/8

**Exercise 2.16**

1. Find the relative extreme value of the following functions (if any):
a. f(x) = 2x³ - 9x² - 24
b. f(x) = (x + 1)/(x² + 1)
c. f(x) = (13 - 3x)/(x² - x + 1)

2. If f(x) = x² + ax + b has a relative minimum value of 4 at x = 2, find a and b.

### 2.1.6 Equation of Tangents and Normal Lines to Curves

**Activity 2.14**

1. Find the equation of a line containing the points (1,3) and (-2,3).
2. Find the equation of a line perpendicular to the line found in question 1 above containing the point (1,3).
3. Write the equation of a tangent line to a curve if its slope is 3 at the point (-2,5).
4. What is the relationship between the slopes of a tangent line and a normal line to a curve at a point of tangency?
5. Is there any relationship between the first derivative of a function at a point of tangency and the slope of a tangent line to the curve of the function?

We have seen in section 2.1.5 that the first derivative of a function at a given point is interpreted as the slope of the tangent line at that point. This implies f' is the slope of the line tangent to the graph of f at a point (a, f(a)). Thus, the equation of the tangent line to the curve y = f(x) at x = a is given by:

y = f'(a)(x - a) + f(a)

A line that is perpendicular to the tangent line at the point of tangency is known as the **normal line** to the curve. Since the product of the slope of two non-vertical perpendicular lines is -1, the slope of the normal line at the point of tangency is -1/f'(a) and its equation is given by:

y = [-1/f'(a)](x - a) + f(a)

**Note:**
- If the first derivative of f at x = a is zero, then f has a horizontal tangent line with equation y = f(a) and vertical normal line given by x = a.
- If the first derivative of f at x = a is undefined, then f has a vertical tangent line with equation x = a and a horizontal normal line given by y = f(a).

**Example 1**

Find the equation of the line tangent and the normal line to the graph of the following functions at the given point.
a. f(x) = x³ - 2x; (1, -1)
b. f(x) = √(20 - x²); (2, 4)
c. f(x) = { x² if x > 3; x² - 6 if x ≤ 3 } at (1, -5)
d. f(x) = x√(x² + 16); (0, 0)

**Solution**
a. f'(x) = 3x² - 2 ⇒ f'(1) = 1

i. The equation of the tangent line to the graph of f at (1, -1) is:
y = f'(1)(x - 1) + f(1) = 1(x - 1) - 1 = x - 2

ii. The equation of the normal line to the graph of f at (1, -1) is:
y = [-1/f'(1)](x - 1) + f(1) = -1(x - 1) - 1 = -x

b. f'(x) = -x/√(20 - x²) ⇒ f'(2) = -2/4 = -1/2

i. The equation of the tangent line to the graph of f at (2, 4) is:
y = f'(2)(x - 2) + f(2) = (-1/2)(x - 2) + 4 = -x/2 + 5

ii. Since the slope of a normal line is negative reciprocal of that of the tangent line, the slope of the normal line in this problem is 2. Hence, the equation of the normal line to the graph of f at (2, 4) is:
y = 2(x - 2) + 4 = 2x

c. f'(x) = 2x for x > 3 and f'(x) = 2x for x ≤ 3
f'(1) = 2

The equation of the tangent line to the graph of f at (1, -5) is:
y = f'(1)(x - 1) + f(1) = 2(x - 1) - 5 = 2x - 7

The equation of the normal line to the graph of f at (1, -5) is:
y = [-1/f'(1)](x - 1) + f(1) = (-1/2)(x - 1) - 5 = -x/2 - 9/2

d. f'(x) = √(x² + 16) + x²/√(x² + 16) ⇒ f'(0) = 4

i. The equation of the tangent line to the graph of f at (0, 0) is:
y = f'(0)(x - 0) + f(0) = 4x

ii. The equation of the normal line to the graph of f at (0, 0) is:
y = [-1/f'(0)](x - 0) + f(0) = -x/4

**Example 2**

Find all points at where f(x) = √(x² - 6x) has vertical tangent line.

**Solution**
The function will have a vertical tangent line where its first derivative is undefined in its domain and f'(x) = (2x - 6)/(2√(x² - 6x)) is undefined at the points where x(x - 6) = 0 ⇒ x = 0 or x = 6.

Hence, f(x) has a vertical tangent line at (6, 0) and (0, 0).

**Exercise 2.17**

1. Find the equation of the line tangent and the normal line to the graph of the following functions at the given point.
a. f(x) = x² + x + 2; (0, 2)
b. f(x) = (1 - x²)√(x + 2); (-1, 2)

2. Find all points at where the following functions has vertical tangent line:
a. f(x) = √(x² - x)
b. f(x) = 2√x

3. If f(x) = x² + ax + b and g(x) = x² - c have the same tangent line at (1,2), find the values of the constants a, b, and c and the equation of their normal lines.

## 2.2 Application of Derivative

**Activity 2.15**

1. Given a set S = {3,4,5,6,7} and f(x) = 3x + 2:
a. Find K = {f(x) | x ∈ S}
b. What is the smallest element of K?
c. What is the largest element of K?

2. Given a set S on an open interval (3,7) and f(x) = 3x + 2:
a. Find T = {f(x) | x ∈ S}
b. Can you list all the elements of T?
c. Can you guess the smallest element of T?
d. Can you guess the largest element of T?

3. Given a set S as a closed interval [3,7] and f(x) = 3x + 2:
a. Find H = {f(x) | x ∈ S}
b. Can you list all the elements of H?
c. Can you guess the smallest element of H?
d. Can you guess the largest element of H?

Applications of derivatives are varied not only in mathematics but also in real life. To give an example, derivatives have various important applications in mathematics such as finding the rate of change of a quantity, finding the approximate value, finding the equation of the tangent line and the normal line to a curve, and finding the minimum and maximum values of algebraic expressions. Derivatives also has a wide range of applications in real-life usage. For instance, in business, derivatives are used to find profit and loss for the future of the investment using graphs. It is used to calculate the rate of change of distance of a moving body with respect to time. Derivatives can have different interpretations in each of the sciences. For instance, chemists who study a chemical reaction may be interested in the rate of change in the concentration of a reactant with respect to time (the rate of reaction). A biologist is interested in the rate of change of the population of a colony of bacteria with respect to time.

In section 2.1, you have studied derivatives and have developed methods to find derivatives of various functions. Once you have developed the properties of the mathematical concepts once and for all, you can then turn around and apply these results to all of the sciences. You have already investigated some of the applications of derivatives, but now that you know the differentiation rules, you are in a better position to pursue the applications of differentiation in a greater depth.

In this section, you will study problems involving variables that are changing with respect to time. If two or more such variables are related to each other, then their rates of change with respect to time are also related.

### 2.2.1 Applications of Derivatives in Finding Rate of Change

**Example 1**

If the radius of a circle is increasing at a rate of 1.5 cm/sec, find the rate at which the area is increasing at the instant when the diameter is 12 cm.

**Solution**
We know that area of a circle with radius r is given by A = πr² and we are given dr/dt = 1.5 cm/sec, to find dA/dt at diameter d = 12 cm.

dA/dt = d(πr²)/dt = 2πr(dr/dt)

When diameter d = 12 cm, r = 6 cm.

dA/dt|_{r=6} = 2π(6)(1.5) = 18π cm²/sec

**Example 2**

An object is moving along the path 3y = x³. If the x-coordinate of the object is increasing at a rate of 2 ft/min at the instant when x = 6, find the rate at which the y-coordinate is increasing.

**Solution**
Given 3y = x³ and dx/dt = 2 ft/min
Differentiating: 3(dy/dt) = 3x²(dx/dt) ⇒ dy/dt = x²(dx/dt)

At x = 6: dy/dt = (6)²(2) = 72 ft/min

**Example 3**

Suppose the side of an equilateral triangle is increasing at a rate of 2 cm/sec. Find the rate at which the area is increasing at the instant when the side is 4 cm.

**Solution**
The area of an equilateral triangle having one side of length s is given by A = (√3/4)s².
We are given ds/dt = 2 cm/sec.

To find dA/dt when s = 4 cm:
dA/dt = (√3/2)s(ds/dt) = (√3/2)(4)(2) = 4√3 cm²/sec

**Example 4**

Air is being pumped into a spherical balloon at the rate of 4 cm³/min. Find the rate of change of the radius when the radius is 2 cm.

**Solution**
Let r be the radius of the sphere. The volume V of the sphere is given by V = (4/3)πr³.

dV/dt = 4 cm³/min
dV/dt = 4πr²(dr/dt)

At r = 2 cm: 4 = 4π(2)²(dr/dt) ⇒ dr/dt = 1/(4π) cm/min

**Example 5**

The displacement of a particle at any time t is given by S = t³ - 3t² + 5t + 7. Find its velocity and acceleration at the end of 2 hrs, where S is in kilometers and t is in hrs.

**Solution**
Given S = t³ - 3t² + 5t + 7
Velocity v = dS/dt = 3t² - 6t + 5
Acceleration a = dv/dt = 6t - 6

Hence, the velocity at the end of 2 hrs is:
v(2) = 3(2)² - 6(2) + 5 = 12 - 12 + 5 = 5 km/hr

Acceleration at the end of 2 hrs is:
a(2) = 6(2) - 6 = 6 km/hr²

**Exercise 2.18**

1. A circular plate of metal is being expanded by heating. The radius of plate increases at the rate of 0.3 cm per second. Find the rate of increase of area when its radius becomes 15 cm.

2. The volume of a sphere is increasing at the rate of 0.2π cm³/sec. Find the rate of increase of radius when the radius is 10 cm.

3. A square plate is being expanded by heating. If its side is increasing at the rate of 0.2 cm per second, then at what rate is the area increasing when the side is 20 cm?

4. A man 2 m tall walks at a uniform speed of 8 m/minute from a lamppost 6 m high. Find the rate at which the length of his shadow increases.

5. A varying force is applied on a body of unit mass and if the force increases at the rate of 2 N/sec, then find the rate at which the acceleration in the body is changing.

### 2.2.2 Applications of Derivatives in Business and Economics

**Activity 2.16**

1. Where do you think we use the concept of derivative other than in mathematics?
2. Is the concept of derivative vital in the study of economics, road taxation and traffic education?

From this activity, one can see the development of multiple strategies, into which companies incorporate derivatives. Companies, both in and out of the financial industry have begun to use derivatives as a method of speculating and generating income.

**Example 1**

The profit function of a company can be represented by P(x) = x - 0.00001x², where x represents units sold. Find the optimal sales volume and the amount of profit to be expected at that volume.

**Solution**
Marginal profit: MP = dP/dx = 1 - 0.00002x

To get maximum profit now we put marginal profit equals to zero:
1 - 0.00002x = 0 ⇒ x = 50,000 units

Now, to check whether this value is maximum or minimum we can use the first derivative test.

**Sign Chart:**
```
      50000
P'(x) = 1 - 0.00002x
      +++ ---
```

From this sign chart the sign of P'(x) changes from positive to negative at x = 50,000. Thus, by the first derivative test, we get maximum profit when the company sold x = 50,000 units of production.

Now, by putting the value of x in the profit function we get maximum profit:
P = f(50,000) = 50,000 - 0.00001(50,000)²
= 50,000 - 25,000 = 25,000

The optimum output for the company will be 50,000 units of x and the maximum profit at that volume will be 25,000 birr.

**Example 2**

The demand equation for a certain product is P = 6 - x/2, where x represents the amount of product. Find the level of production which results in maximum revenue.

**Solution**
The revenue function is R(x) = x·P = x(6 - x/2) = 6x - x²/2

The marginal revenue is given by R'(x) = 6 - x

The graph of R(x) is a parabola that opens downward. It has a horizontal tangent precisely at that x for which R'(x) = 0, that is, for that x at which marginal revenue is 0. The only such value of x is x = 6. The corresponding value of revenue is R(6) = 6(6) - (6)²/2 = 18 birr.

**Sign Chart:**
```
      6
R'(x) = 6 - x
      +++ ---
```

Thus, by the first derivative test, the rate of production resulting in maximum revenue is x = 6, which results in total revenue of 18 birr.

**Example 3**

Promoters of international fund-raising concerts must walk a fine line between profit and loss, especially when determining the price to charge for admission to closed-circuit TV showings in local theatres. By keeping records, a theatre determines that at an admission price of 26 birrs, it averages 1000 people in attendance. For every drop in price of 1 birr, it gains 50 customers. Each customer spends an average of 4 birrs on concessions. What admission price should the theatre charge to maximize total revenue?

**Solution**

Let x be the number of birr by which the price of 26 Birr should be decreased. (If x is negative, the price is increased.) We first express the total revenue R as a function of x. Note that the increase in ticket sales is 50x when the price drops x Birr.

R(x) = (revenue from tickets) + (revenue from concessions)
= (number of people)·(Ticket price) + (number of people)·4
= (1000 + 50x)(26 - x) + (1000 + 50x)·4
= 26,000 - 1000x + 1300x - 50x² + 4000 + 200x
= -50x² + 500x + 30,000

To find x such that R(x) is a maximum, we first find R'(x):
R'(x) = -100x + 500

This derivative exists for all real numbers x. Thus, the only critical values are where R'(x) = 0; so we solve that equation:
-100x + 500 = 0 ⇒ x = 5

This corresponds to lowering the price by 5 Birr. To determine whether R(x) has a maximum value or not at this critical point we use the first derivative test.

**Sign Chart:**
```
      5
R'(x) = 500 - 100x
      +++ ---
```

Since the sign chart changes from positive to negative at x = 5, by first derivative test, in order to maximize revenue, the theatre should charge 26 Birr - 5 Birr or 21 Birr per ticket.

**Example 4**

For a company, the total revenue R and the total cost C for yard maintenance of x homes are given by R(x) = 1000x - x², and C(x) = 3000 + 20x.

Suppose that the company is adding 10 homes per day at the moment when the 400th customer is signed. At that moment, what is the rate of change of:
a. total revenue?
b. total cost?
c. total profit?

**Solution**
a. dR/dt = (dR/dx)(dx/dt) = (1000 - 2x)(dx/dt)
At x = 400, dx/dt = 10:
dR/dt = (1000 - 800)(10) = 2000 birr per day

b. dC/dt = (dC/dx)(dx/dt) = 20 × 10 = 200 birr per day

c. Since p(x) = R(x) - C(x), we have:
dp/dt = dR/dt - dC/dt = 2000 - 200 = 1800 birr per day.

**Exercise 2.19**

Given C(x) = 0.62x² + 27,500 and R(x) = x³ - 12x² + 40x + 10 where C(x) and R(x) represent, respectively, the total cost and revenue from the production and sale of x items. Find each of the following:

a. Total profit, P(x).
b. Total cost, revenue, and profit from the production and sale of 50 units of the product.
c. The marginal cost, revenue, and profit when 50 units are produced and sold.

### 2.2.3 Application of Derivative in Road Taxation

**Example**

A motorist has to pay an annual road tax of 50 birrs and 110 birrs for insurance. His car does 30 miles to the gallon which costs 75 pence (per gallon). The car is serviced every 3000 miles for 20 birrs, and depreciation is calculated in pence by multiplying the square of the mileage by 0.001. Obtain an expression for the total annual cost of running the car. Hence find an expression for the average total cost per mile and calculate the annual mileage which will minimize the average cost per mile.

**Solution**

Suppose he covers x miles in a year.
Tax per annum = 50 birrs; Insurance per annum = 110 birrs;
Cost of petrol = 0.75x/30; service charge = 20x/3000; depreciation = 0.001x²/100 (0.001 is in pence and is divided by 100 to get the amount in birr).

Total cost (TC): C = 50 + 110 + 0.75x/30 + 20x/3000 + 0.00001x²

Average total cost (AC) per mile: A = C/x = 160/x + 0.75/30 + 20/3000 + 0.00001x
= 160/x + 0.025 + 0.00667 + 0.00001x

dA/dx = -160/x² + 0.00001 = 0
0.00001x² = 160
x² = 16,000,000
x = ±4,000

Now, to check whether this critical number (x = 4000) gives a maximum or minimum cost, we can use a sign chart and apply the first derivative test.

**Sign Chart:**
```
      4000
x² - 16,000,000
      --- +++
```

From the sign chart, we see that the sign of the derivative changes from negative to positive at x = 4000. So, the motorist can cover 4000 miles in a year to minimize the average cost per mile.

**Exercise 2.20**

1. A rectangular area of 3200 ft² is to be fenced off. Two opposite sides will use fencing costing 1 dollar per foot and the remaining sides will use fencing costing 2 dollars per foot. Find the dimensions of the rectangle of the least cost.

2. A manufacturer wants to design an open box that has a square base and a surface area of 48 square units. What dimensions will produce a box with maximum volume?

3. A closed cylindrical can having a volume of 128π cm³ is to be formed. Find the dimensions (the radius and height) of the cylinder that will minimize the amount of material to be used?

## 2.3 Introduction to Integration

**Activity 2.17**

1. Is it possible to determine the distance a vehicle has traveled if we know its velocity function?
2. Can we determine a company's total profit if we know its marginal-profit function?
3. An object moves with a velocity of v(t) = 2t + 1, where t is in minutes and v is in feet per minute.
a) How far does the object travel during the first 30 min?
b) How far does the object travel between the first hour and the second hour?
4. Find the areas of the region below y = 2x and above the x-axis shown in the figure 2.16(a) below.
5. Find the area of the region below the line y = 2x shown in fig 2.16(b).
6. Find the area of the region just below the line y = 2x over the interval [0,6].
7. Compare the values of 4 up to 6 above.

### 2.3.1 Areas of Regions

Integral calculus is primarily concerned with the area below the graph of a function (specifically, the area between the graph of a function and the x-axis). In this section, we assume that all functions are non-negative; that is, f(x) ≥ 0.

**Example 1**

A vehicle travels 50 mi/hr for 2 hr. How far has the vehicle traveled?

**Solution**
The answer is 100 miles. We treat the vehicle's velocity as a function, v(x) = 50. We graph this function, sketch a vertical line at x = 2, and obtain a rectangle. This rectangle measures 2 units horizontally and 50 units vertically. Its area is the distance the vehicle has traveled: Distance = 2 × 50 = 100 miles.

**Figure 2.17** - *Description: Graph of constant velocity function v(t) = 50 showing rectangle area representing distance.*

**Example 2**

Green Leaf Skateboards determines that for the first 50 skateboards produced, its cost is 40 birr per skateboard. What is the total cost to produce 50 skateboards?

**Solution**
The marginal-cost function is C'(x) = 40, 0 ≤ x ≤ 50. Its graph is a horizontal line. If we mark off 50 units along the x-axis, we get a rectangle. The area of this rectangle is 40 × 50 = 2000. Therefore, the total cost to produce 50 skateboards is 2000 birr.

**Figure 2.18** - *Description: Graph of marginal cost function C'(x) = 40 showing rectangle area representing total cost.*

**Example 3**

The velocity of a moving object is given by the function v(x) = 3x, where x is in hours and v is in miles per hour. Use geometry to find the area under the graph which is the distance the object has traveled during the first 3 hours (0 ≤ x ≤ 3).

**Solution**
The graph of the velocity function is shown above. We see the region corresponding to the time interval 0 ≤ x ≤ 3 is a triangle with base 3 and height 9 (since v(3) = 9).

**Figure 2.19** - *Description: Graph of velocity function v(x) = 3x showing triangular area representing distance traveled.*

Therefore, the area of this region is A = (1/2)(3)(9) = 27/2 = 13.5

The object traveled 13.5 miles during the first 3 hours.

**Exercise 2.21**

1. The velocity of a moving object is given by the function v(x) = 3x, where x is in hours and v is in miles per hour. Use geometry to find the area under the graph, which is the distance the object has traveled between the third hour and the fifth hour (3 ≤ x ≤ 5).

2. A company has a marginal profit function modeled by the linear function P'(x) = 0.15x, where x is in months and P' is in thousands of dollars per month. Sketch this graph and use it to determine the total profit earned by the company in a year (0 ≤ x ≤ 12).

#### Riemann Summation

**Activity 2.18**

Examples 1 through 3 in this section suggest a pattern:
1. If f(x) = k, where k is a non-negative constant, its graph is a horizontal line of height k. The region under this graph over the interval [0, x] is a rectangle, and its area is A = k·x (height times base).
2. If f(x) = mx, its graph is a line of slope m ≥ 0, passing through the origin. The region under this graph over an interval [0, x] is a triangle, and its area is A = (1/2)(x)(mx) = mx²/2.

**Figure 2.20** - *Description: Graph of constant function f(x) = k showing rectangular area.*
**Figure 2.21** - *Description: Graph of linear function f(x) = mx showing triangular area.*

In these two cases, the area function is an anti-derivative of the function that generated the graph.

a. Is this always true?
b. Is the formula for the area under the graph of any function that function's anti-derivative?
c. How do we handle curved graphs for which area formulas may not be known?

Write summation notation for:
i) 5 + 10 + 15 + 20 + 25
ii) g(x₁)Δx + g(x₂)Δx + ... + g(x₈)Δx

**Example 1**

A Skateboard has the following marginal-cost function for producing skateboards:
For up to 50 skateboards, the cost is 40 ETB per skateboard.
For quantities from 51 through 125 skateboards, the cost drops to 30 ETB per skateboard.
After 125 skateboards, it drops to 25 ETB per skateboard.

If x represents the number of skateboards produced, the marginal cost function C' is:
C'(x) = 40, for 0 ≤ x ≤ 50
C'(x) = 30, for 50 < x ≤ 125
C'(x) = 25, for 125 < x ≤ 150

Find the total cost to produce 150 skateboards.

**Solution**
We are extending Example 2. We calculate the areas of the rectangles formed by the horizontal lines of the graph of the marginal-cost function:

**Figure 2.22** - *Description: Graph of piecewise constant marginal cost function showing three rectangles.*

The total cost to produce 150 skateboards is found by summing those areas:
Total cost = (40)(50) + (30)(75) + (25)(25) = 2000 + 2250 + 625 = 4875 Birr

Example 1 illustrates the first steps of a Riemann summation, a method that allows us to determine the area under a curved graph. We use rectangles to approximate the area under a curve given by y = f(x), a continuous function, over an interval [a,b].

Riemann summation is accomplished with the use of summation notation, introduced below. In Figure 2.23, [a,b] is divided into four subintervals, each having width Δx = (b - a)/4.

**Figure 2.23** - *Description: Graph showing four rectangles approximating area under curve.*

The heights of the rectangles shown are f(x₀), f(x₁), f(x₂), and f(x₃).

The area of the region under the curve is approximately the sum of the areas of the rectangles:
f(x₀)Δx + f(x₁)Δx + f(x₂)Δx + f(x₃)Δx

We can denote this sum with summation notation, or sigma notation, which uses the Greek capital letter sigma, ∑:
∑_{i=0}^{3} f(x_i)Δx

This is read "the sum of the product f(x_i)Δx from i = 0 to i = 3."

Before we continue, let's consider some examples involving summation notation.

**Example 2**

Find the sum of expression: ∑_{k=1}^{4} 3^k

**Solution**
∑_{k=1}^{4} 3^k = 3^1 + 3^2 + 3^3 + 3^4 = 3 + 9 + 27 + 81 = 120

**Example 3**

Express ∑_{j=1}^{30} h(x_j)Δx without using summation notation.

**Solution**
∑_{j=1}^{30} h(x_j)Δx = h(x₁)Δx + h(x₂)Δx + ... + h(x₃₀)Δx

Approximation of area by rectangles becomes more accurate as we use smaller subintervals and hence more rectangles, as shown in the following figures.

**Figure 2.24a** - *Description: Graph showing area approximation with 8 subintervals.*
**Figure 2.24b** - *Description: Graph showing area approximation with 24 subintervals.*

In general, suppose that the interval [a,b] is divided into n equally sized subintervals, each of width Δx = (b - a)/n, and we then construct rectangles with heights f(x₁), f(x₂), ..., f(xₙ).

**Figure 2.25** - *Description: Graph showing general Riemann sum with n rectangles.*

The width of each rectangle is Δx, so the first rectangle has an area of f(x₁)Δx, the second rectangle has an area of f(x₂)Δx, and so on. The area of the region under the curve is approximated by the sum of the areas of the rectangles A:
Area(A) = ∑_{i=1}^{n} f(x_i)Δx

**Definition 2.12**

Let P = {x₀, x₁, x₂, ..., xₙ} be any partition on [a, b] of a given function f. For each k between 1 and n, let t_k be an arbitrary number in [x_{k-1}, x_k]. Then the sum:
f(t₁)Δx + f(t₂)Δx + f(t₃)Δx + ... + f(tₙ)Δx
is called a **Riemann sum** for f on [a, b] and is denoted:
∑_{k=1}^{n} f(t_k)Δx_k

Thus:
∑_{k=1}^{n} f(t_k)Δx_k = f(t₁)Δx₁ + f(t₂)Δx₂ + f(t₃)Δx₃ + ... + f(tₙ)Δxₙ

**Note:** Riemann sum (pronounced "Ree-mahn") was developed by the great German mathematician G.F. Bernhard Riemann (1826-1866). Riemann sums can be calculated using any x-value within each subinterval. For simplicity, in this text, we will always use the left endpoint of each subinterval.

**Steps for the Process of Riemann Summation**

1. Draw the graph of f(x).
2. Subdivide the interval [a,b] into n subintervals of equal width. Calculate the width of each rectangle by using the formula Δx = (b - a)/n.
3. Construct rectangles above the subintervals such that the top left corner of each rectangle touches the graph.
4. Determine the area of each rectangle: A_i = f(x_i)·Δx.
5. Sum these areas to arrive at an approximation for the total area under the curve.

**Exercise 2.22**

1. Find the approximate area of the region enclosed by the graph of function f(x) = x² + 1, the x-axis, x = 1 and x = 5.

a. Use the following steps to find it.

**Step 1:** Interval [1, 5] is divided into four subintervals, each having width Δx = (5 - 1)/4 = 1.

**Figure 2.26** - *Description: Graph of f(x) = x² + 1 showing four rectangles from x = 1 to x = 5.*

**Step 2:** Find the values of f(x₁), f(x₂), f(x₃) and f(x₄), when x₁ = 1, x₂ = 2, x₃ = 3 and x₄ = 4.

**Step 3:** Since the area of the region is approximately the sum of the areas of four rectangles A₁, A₂, A₃ and A₄, calculate A₁ + A₂ + A₃ + A₄ = ∑_{i=1}^{4} f(x_i)Δx.

b. Find the approximate area of the same region in the same way as a, when the interval [1, 5] is divided into eight subintervals, each having width Δx = (5 - 1)/8 = 0.5.

2. Express ∑_{j=1}^{5} (2 + j) without using summation notation.

### 2.3.2 Definite Integrals

**Activity 2.19**

Let f(x) = 3x² defined on the interval [0,5]. Then, find the Riemann sum of f on [0,5]:
a. By dividing the interval [0,5] into 5 sub-intervals of equal width
b. By dividing the interval [0,5] into 10 sub-intervals of equal width

The key concept developed in this section is that the more subintervals we use, the more accurate the approximation of area becomes. As the number of subdivisions increases, the width of each rectangle Δx decreases. If n is allowed to approach infinity, then Δx approaches 0; these are limits, and the approximations of the area become closer and closer to the true area under the graph. The exact area underneath the graph of a continuous function y = f(x) over an interval [a,b] is, by definition, given by a definite integral.

**Definition 2.13**

Let a given piecewise continuous function y = f(x) be non-negative, f(x) ≥ 0, over an interval [a,b]. A **definite integral** is the Riemann sum of the areas of the rectangles under the graph of the function y = f(x) over the interval [a,b] as the value of n increases indefinitely (equivalently, as Δx = (b-a)/n approaches very close to 0). That is:

Exact area = lim_{n→∞} ∑_{i=1}^{n} f(x_i)Δx = ∫_{a}^{b} f(x)dx, as Δx gets very close to 0.

Notice that the summation symbol becomes an integral sign (the elongated "s" is Leibniz notation representing "sum") and Δx becomes dx. If f(x) ≥ 0 over an interval [a,b], the definite integral represents the area.

**Example**

Determine the value of ∫_{0}^{2} (3x + 2)dx

**Solution**
This definite integral is a command to calculate the exact area underneath the graph of the function f(x) = 3x + 2 over the interval [0,2].

**Figure 2.27** - *Description: Graph of f(x) = 3x + 2 showing trapezoidal area from x = 0 to x = 2.*

We sketch the graph and note that the region is a trapezoid. Thus, we can use geometry to determine this area (a Riemann sum is not needed here).

∫_{0}^{2} (3x + 2)dx = [(3x + 2)²/6]_{0}^{2} = 10

We find that the area is 10. Therefore, ∫_{0}^{2} (3x + 2)dx = 10.

We can make a partial check by counting the squares and parts of squares shaded on the graph in Figure 2.29.

**Exercise 2.23**

Determine the values of the following definite integrals:
a. ∫_{0}^{3} (x + 2)dx
b. ∫_{-1}^{2} (3x² + 2x)dx
c. ∫_{0}^{1} (2x + 1)dx
d. ∫_{2}^{3} (0.002x³ - 0.3x² + 4x - 7)dx

### 2.3.3 Area and Definite Integrals

In Sections 2.3.1 and 2.3.2, we considered the area under the graph of a function f. We have yet to establish the general rule to find the exact area under the graph of f. As we will see, we can use the anti-derivative of a function to determine the exact area under the graph of the function. This process is called integration.

**Definition 2.15**

Let f be a given function over the interval [a,b] and F be any anti-derivative of f. Then the definite integral of f from a to b is:
∫_{a}^{b} f(x)dx = F(b) - F(a)

Evaluating definite integrals is called integration. The numbers a and b are known as the limits of integration.

**Theorem 2.7 (The Fundamental Theorem of Calculus)**

Let f be a given non-negative function over an interval [0,b], and let A(x) be the area between the graph of f and the x-axis over the interval [0,x], with 0 < x < b. Then A(x) is a differentiable function of x and A'(x) = f(x).

**Note:** To find the area under the graph of a non-negative function f over the interval [a,b]:
1. Find any anti-derivative F(x) of f(x). Let C = 0 for simplicity.
2. Evaluate F(x) at x = b and x = a, and compute F(b) - F(a).
The result is the area under the graph over the interval [a,b].

**Figure 2.28** - *Description: Graph showing area under curve represented by definite integral.*

**Example 1**

Find the area under the graph of y = x² + 1 over the interval [-1,2].

**Solution**
In this case, f(x) = x² + 1, with a = -1 and b = 2.

1. Find any anti-derivative of f(x). We choose the simplest one:
F(x) = x³/3 + x

2. Substitute 2 and -1, and find the difference F(2) - F(-1):
F(2) - F(-1) = (8/3 + 2) - (-1/3 - 1) = (8/3 + 2) + (1/3 + 1) = 9/3 + 3 = 3 + 3 = 6

**Figure 2.29** - *Description: Graph of y = x² + 1 with shaded area from x = -1 to x = 2.*

We can make a partial check by counting the squares and parts of squares shaded on the graph in Figure 2.29.

**Exercise 2.26**

1. Refer to the function and graph in Example 1:
a. Calculate the area over the interval [0,5].
b. Calculate the area over the interval [-2,2].
c. Can you suggest a shortcut for part (b)?

2. Evaluate each of these integrals:
a. ∫_{0}^{4} (3x² + 2x)dx
b. ∫_{-1}^{2} (x³ - 3x + 1)dx
c. ∫_{1}^{3} (0.002x³ - 0.3x² + 4x - 7)dx

**Example 2**

Let y = x³ represent the number of kilowatts (kW) generated by a new power plant each day, x days after going online. Find the area under the graph of y = x³ over the interval [0,5] and interpret the significance of the area.

**Solution**
In this case, f(x) = x³, a = 0, and b = 5.

1. Find any anti-derivative F(x) of f(x). We choose the simplest one:
F(x) = x⁴/4

2. Substitute 5 and 0, and find the difference F(5) - F(0):
F(5) - F(0) = 5⁴/4 - 0 = 625/4 = 156.25

**Figure 2.30** - *Description: Graph of y = x³ showing area from x = 0 to x = 5.*

The area represents the total number of kilowatts generated during the first 5 days.

The difference F(b) - F(a) has the same value for all anti-derivatives F of a function f(x) whether the function is non-negative or not. It is called the definite integral of f(x) from a to b.

**Properties of definite integrals**

If f and g are given functions on [a,b], k ∈ ℝ, and c ∈ [a,b], then:
a. ∫_{a}^{a} f(x)dx = 0
b. ∫_{a}^{b} f(x)dx = ∫_{a}^{c} f(x)dx + ∫_{c}^{b} f(x)dx
c. ∫_{a}^{b} kf(x)dx = k∫_{a}^{b} f(x)dx
d. ∫_{a}^{b} (f(x) ± g(x))dx = ∫_{a}^{b} f(x)dx ± ∫_{a}^{b} g(x)dx

**Example 3**

Evaluate ∫_{-2}^{3} x³dx

**Solution**
Using the anti-derivative F(x) = x⁴/4, we have:
∫_{-2}^{3} x³dx = [x⁴/4]_{-2}^{3} = (81/4) - (16/4) = 65/4

**Example 4**

Evaluate ∫_{-1}^{2} (x² - x)dx

**Solution**
∫_{-1}^{2} (x² - x)dx = [x³/3 - x²/2]_{-1}^{2}
= (8/3 - 2) - (-1/3 - 1/2)
= (8/3 - 6/3) - (-2/6 - 3/6)
= (2/3) - (-5/6) = 2/3 + 5/6 = 4/6 + 5/6 = 9/6 = 3/2

**Exercise 2.27**

Evaluate the following definite integrals:
a. ∫_{-1}^{4} (-3x² + 4x - 5)dx
b. ∫_{-2}^{3} (x³ - 2x + 8)dx

### 2.3.4 More on Area

When we evaluate the definite integral of a non-negative function, we get the area under the graph over an interval.

**Activity 2.21**

Find the areas of a region bounded by the function f(x) and the interval [a,b], where:
a. f(x) = k, k > 0
b. f(x) = x
c. f(x) = x²

**Example 1**

Find the area under y = 1/x² over the interval [1,b].

**Figure 2.31** - *Description: Graph of y = 1/x² showing area from x = 1 to x = b.*

**Solution**
∫_{1}^{b} (1/x²)dx = [-1/x]_{1}^{b} = -1/b - (-1/1) = 1 - 1/b

The definite integral of a continuous function over an interval is the sum of the areas above the x-axis minus the sum of the areas below the x-axis.

**Example 2**

Compare the definite integrals of the functions y = x³ and y = -x³.

**Solution**
∫_{-1}^{1} x³dx = [x⁴/4]_{-1}^{1} = (1/4) - (1/4) = 0
∫_{-1}^{1} (-x³)dx = [-x⁴/4]_{-1}^{1} = (-1/4) - (-1/4) = 0

The graphs of the functions y = x³ and y = -x³ are reflections of each other across the x-axis. Thus, the shaded areas are the same.

**Figure 2.32a** - *Description: Graph of y = x³ showing equal areas above and below x-axis.*
**Figure 2.32b** - *Description: Graph of y = -x³ showing equal areas above and below x-axis.*

The evaluation procedure for y = -x³ gave us 0. This illustrates that for negative-valued functions, the definite integral gives us the opposite of the area between the curve and the x-axis.

When f(x) ≥ 0 in the interval [a,b], the area S which is enclosed by the graph of f(x), the two straight lines x = a, x = b and the x-axis is:
S = ∫_{a}^{b} f(x)dx

**Figure 2.33** - *Description: Graph showing area under non-negative function.*

When f(x) ≤ 0 in the interval [a,b], the area S which is enclosed by the graph of f(x), the two straight lines x = a, x = b, and the x-axis is:
S = -∫_{a}^{b} f(x)dx

**Figure 2.34** - *Description: Graph showing area above negative function.*

**Example 3**

Find the area S which is enclosed by the graph of f(x) and the x-axis:
a. f(x) = -x² + 1
b. f(x) = x² - 1

**Solution**
a. From the figure, the area S is:
S = ∫_{-1}^{1} (-x² + 1)dx = [-x³/3 + x]_{-1}^{1} = (-1/3 + 1) - (1/3 - 1) = 4/3

**Figure 2.35** - *Description: Graph of f(x) = -x² + 1 showing area between curve and x-axis.*

b. From the figure, the area S is:
S = -∫_{-1}^{1} (x² - 1)dx = -[x³/3 - x]_{-1}^{1} = -[(1/3 - 1) - (-1/3 + 1)] = 4/3

**Figure 2.36** - *Description: Graph of f(x) = x² - 1 showing area between curve and x-axis.*

When the area S is divided into the upper side and the lower side of the x-axis, the upper area and the lower side area are obtained respectively and added them.

**Figure 2.37** - *Description: Graph showing area with portions above and below x-axis.*

In the interval [a,b], f(x) ≤ 0. In the interval [b,c], f(x) ≥ 0. So, we can find the area S:
S = -∫_{a}^{b} f(x)dx + ∫_{b}^{c} f(x)dx

**Example 4**

Find the area S of the region enclosed between the graph of f(x) = x² - 1, the x-axis and the y-axis in the interval [0,2].

**Solution**
Note that 1 is the x-intercept of the function f(x) = x² - 1 in [0,2].

**Figure 2.38** - *Description: Graph of f(x) = x² - 1 showing area from x = 0 to x = 2.*

S = ∫_{0}^{1} (1 - x²)dx + ∫_{1}^{2} (x² - 1)dx
= [x - x³/3]_{0}^{1} + [x³/3 - x]_{1}^{2}
= (1 - 1/3) + (8/3 - 2 - (1/3 - 1))
= 2/3 + (8/3 - 2 - 1/3 + 1)
= 2/3 + (7/3 - 1) = 2/3 + 4/3 = 2

This shows that the area above the x-axis exceeds the area below the x-axis by 2 units. So, the area of the region is 2 units.

**Exercise 2.28**

1. Find the area S which is enclosed by the graph of f(x) and the x-axis:
a. f(x) = x² - 4
b. f(x) = -x² + 4
c. f(x) = x² - 2x
d. f(x) = -x² - 2x

2. Find the area S which is enclosed by the graph of f(x), the two straight lines and the x-axis:
a. f(x) = x², the two straight lines x = 0 and x = 4
b. f(x) = x² + 3, the two straight lines x = -1 and x = 3

3. Find the area S which is enclosed between the graph of f(x) = x(x + 2)(x - 1) and the x-axis.

### 2.3.5 Application of Integration

**Activity 2.22**

Do you think that integration has any other applications than finding the area under the curve of the function? Write down what you think these applications might be.

In this section, we will look at some applications of integrals. Integration is used in different fields of study such as business, physical sciences, economics, etc.

**Example 1**

A certain Airlines determines that the marginal profit resulting from the sale of x seats on a plane traveling from Addis Ababa to New York City, in hundreds of dollars, is given by P'(x) = √x - 6.

Find the total profit when 60 seats are sold.

**Solution**
We integrate to find P(60):
∫_{0}^{60} (√x - 6)dx = [2x^{3/2}/3 - 6x]_{0}^{60}
= [2(60)^{3/2}/3 - 360] - [0 - 0]
= [2(60√60)/3 - 360]
= [40√60 - 360] ≈ [40(7.746) - 360] ≈ 309.84 - 360 = -50.16

When 60 seats are sold, the airline's profit is -$5016.13. That is, the airline will lose $5016.13 on the flight.

**Example 2**

Suppose that the velocity function of a car is v(t) = 5t and that the displacement at t = 0 is s(0) = 9. Find s(t). Assume that s(t) is in meters and v(t) is in meters per second.

**Solution**
First s(t) = ∫v(t)dt = ∫5t dt = 5t²/2 + C

Next, we determine C by using the initial condition s(0) = 9, which is the displacement of the car at time t = 0:
s(0) = 0 + C = 9 ⇒ C = 9

Thus, s(t) = 5t²/2 + 9

**Example 3**

The driver of a vehicle traveling at 40 mi/hr (58.67 ft/sec) applies the brakes, softly at first, then harder, coming to a complete stop after 7 seconds. The velocity as a function of time is modeled by v(t) = -1.197t² + 58.67, where v is in feet per second, t is in seconds, and 0 ≤ t ≤ 7. How far did the vehicle travel while the driver was braking?

**Solution**
The distance traveled s(t) is given by the definite integral of v(t):
∫_{0}^{7} (-1.197t² + 58.67)dt = [-1.197t³/3 + 58.67t]_{0}^{7}
= [-0.399(343) + 410.69] - [0 + 0]
= -136.86 + 410.69 ≈ 273.83 ft

**Exercise 2.29**

1. Pure Water Enterprises finds that the marginal profit, in dollars, from drilling a well that is x feet deep is given by P'(t) = x. Find the profit when a well 250 ft deep is drilled.

2. A company estimates that its sales will grow continuously at a rate given by the function S'(t) = 20e^t, where S'(t) is the rate at which sales are increasing, in dollars per day, on day t.
a. Find the accumulated sales for the first 5 days.
b. Find the sales from the 2nd day through the 5th day.

## Summary and Review Exercise

### Summary

**Rate of change, gradient, and derivative of functions**
- A rate of change is a rate that describes how one quantity changes in relation to another quantity.
- If y = f(x) then the average rate of change of y with respect to x on the interval [a, b] is (f(b) - f(a))/(b - a) = Δy/Δx.
- A secant line is a line that intersects the graph of the function y = f(x) at exactly two points.
- A tangent line to a curve or a graph of a function y = f(x) is a line that touches the curve exactly at one point. The point where the tangent line touches the graph is said to be the point of tangency.
- A gradient is a measure of steepness and direction of a line.
- Gradient = (vertical change)/(horizontal change) = Δy/Δx = (y₁ - y₀)/(x₁ - x₀).
- The derivative of a function f(x) at a number "a" in the domain of f, denoted by f'(a), is the gradient of the tangent line to the graph of y = f(x) at (a, f(a)). That is, as h gets very close to zero from both sides, f'(a) = (f(a + h) - f(a))/h.

**The derivatives of some functions**
1. If f(x) = k, then f'(x) = 0.
2. If f(x) = xⁿ, then f'(x) = nxⁿ⁻¹.
3. If f(x) = √x, then f'(x) = 1/(2√x).

**Derivatives of combinations of functions**
If f and g are differentiable functions, then f + g, kf, fg and f/g are also differentiable and are given as follows:
i. (f + g)'(x) = f'(x) + g'(x)
ii. (kf)'(x) = kf'(x), where k is a constant number.
iii. (fg)'(x) = f'(x)g(x) + f(x)g'(x).
iv. (f/g)'(x) = [f'(x)g(x) - f(x)g'(x)]/(g(x))².

**Differentiations of the composition of functions**
- Let g be differentiable at x, and f be differentiable at g(x). Then f∘g is differentiable at x, and (f∘g)'(x) = f'(g(x))·g'(x) for all x such that g is differentiable at x and f is differentiable at g(x).
- If y is a function of u, and u is a function of x, then dy/dx = (dy/du)·(du/dx).

**Equation of tangent line and normal line to a curve**
- The equation of the tangent line to the curve y = f(x) at x = a is given by: y = f'(a)(x - a) + f(a).
- The equation of the normal line to the curve y = f(x) at x = a and f'(x) ≠ 0 is given by: y = [-1/f'(a)](x - a) + f(a).

A critical value of a function f is any number c in the domain of f for which the tangent line at (c, f(c)) is horizontal or for which the derivative does not exist. That is, c is a critical value if f(c) exists and f'(c) = 0 or f'(c) does not exist.

Let I be the domain of f. f(c) is a relative minimum if there exists within an open interval I₁ containing c such that f(c) ≤ f(x), for all x in I₁, and is a relative maximum if there exists within I an open interval I₂ containing c such that f(c) ≥ f(x), for all x in I₂.

**The First-Derivative Test for Relative Extrema**

Let f be a function that is differentiable on an interval I. Then:
- If f' changes sign from positive to negative at c then f has a local maximum value at c for some critical value c.
- If f' changes sign from negative to positive at c then f has a local minimum value at c for some critical value c.

The anti-derivative of f(x) is the set of functions F(x) + C such that d/dx(F(x) + C) = f(x), where the constant C is called the constant of integration.

Let f be continuous on [a,b], and let P = {x₀, x₁, x₂, ..., xₙ} be any partition of [a,b]. Then the sum ∑_{k=1}^{n} f(tₖ)Δxₖ = f(t₁)Δx₁ + f(t₂)Δx₂ + ... + f(tₙ)Δxₙ is called a Riemann sum for f on [a,b].

**Fundamental Theorem of Calculus**
If f(x) = F'(x), then ∫_{a}^{b} f(x)dx = F(b) - F(a).

If a function has areas both below and above the x-axis, the definite integral gives the net total area or the difference between the sum of the areas above the x-axis and the sum of the areas below the x-axis.

**Properties of definite integrals**
If f and g are given functions on [a,b], k ∈ ℝ, and c ∈ [a,b], then:
- ∫_{a}^{a} f(x)dx = 0
- ∫_{a}^{b} f(x)dx = ∫_{a}^{c} f(x)dx + ∫_{c}^{b} f(x)dx
- ∫_{a}^{b} kf(x)dx = k∫_{a}^{b} f(x)dx
- ∫_{a}^{b} (f(x) ± g(x))dx = ∫_{a}^{b} f(x)dx ± ∫_{a}^{b} g(x)dx

### Review Exercise

1. Find the derivative of each of the following functions at the given number:
a. f(x) = (x² + 3x)/5 at x = 2
b. f(x) = 4√x/(x² + 2) at x = -4
c. f(x) = x⁴/(4√x) at x = 2
d. f(x) = (2x + 1)/(x² + 2) at x = 4

2. The diagram in Figure 2.40 shows the graph of the function y = f(x) between x = 0 and x = 4.
**Figure 2.40** - *Description: Graph of function f(x) between x = 0 and x = 4.*
a. Find the slope of the secant line between:
   i. x = 3 and x = 3.1
   ii. x = 3 and x = 3.01
   iii. x = 3 and x = 3.001
b. Find a formula for the slope of the secant line between (3, f(3)) and (3 + Δx, f(3 + Δx)) for a function f.
c. Determine what happens when Δx approaches 0.

3. If an object is dropped from an 80 m high window, its height y above the ground at the time t seconds is given by the formula y = f(t) = 80 - 4.9t² (neglect air resistance).
a. Find the average velocity of the falling object between:
   i. t = 1 sec and t = 1.1 sec
   ii. t = 1 sec and t = 1.01 sec
   iii. t = 1 sec and t = 1.001 sec
b. Find a simple formula for the average velocity of the falling object between t = 1 sec and t = (1 + Δt) sec.
c. Determine what happens to this average velocity as Δt approaches 0.

4. Let y = f(t) = t² where t is the time in seconds and y is the distance in meters that an object falls on a certain airless planet. Draw a graph of this function between t = 0 and t = 3.
a. Make a table of the average speed of the falling object between:
   i. t = 2 sec and t = 3 sec
   ii. t = 2 sec and t = 2.1 sec
   iii. t = 2 sec and t = 2.01 sec
b. Find a simple formula for the average speed between time t = 2 sec and t = (2 + Δt) sec.
c. In your formula for average speed determine what happens as Δt approaches zero.
d. Draw the straight line through the point (2,4) whose slope is the instantaneous velocity you just computed.

5. Find the equation of the tangent and the normal lines f(x) = (1 - x²)√x + 2.

6. Find the derivative of each of the following functions:
a. f(x) = x²(2x + 5)
b. f(x) = (x² + x)/(x² - x + 2)
c. f(x)² = (x² + 1)/(x + 1)
d. f(x) = x²(1 - √x)(x² - x)

7. Consider the function f(x) = 6x³ - 50x² - 120
a. Find the interval on which f is increasing.
b. Find the interval on which f is decreasing.
c. Find all values of x for which f has a relative maximum.
d. Find all values of x for which f has a relative minimum.

8. A particle moves along the curve 2y = x³ + 4. Find the point(s) on the curve at which the y-coordinate changes 4 times as fast as the x-coordinate.

9. Let f(x) = x² + px + q. Find the values of p and q such that f(1) = 3 is an extreme value of f on the interval [0,2]. Is this value maximum or minimum?

10. Find the value of a, b, c, d so that h(x) = ax³ + bx² + cx + d will have extreme values at (1,2) and (2,3).

11. Find the absolute maximum and the minimum values of the following function on the interval [0,2]:
f(x) = { x²/3 for 0 ≤ x ≤ 1; x² + x - 4/3 for 1 < x ≤ 2 }

12. A board 5 ft long slides down a wall. At the instant when the bottom end is 4 ft from the wall, the other end is moving down at a rate of 2 ft/s. At that moment:
a. How fast is the bottom end sliding along the ground?
b. How fast is the area of the region between the board, the ground, and the wall changing?

13. A farmer has 240 m of fencing material and wants to fence a rectangular field that borders a straight river. (No fence is needed along the river). What are the dimensions of the field that has the largest area?

14. The radius of the balloon is increasing at the rate of 0.5 cm/sec. At what rate is the surface area of the balloon increasing when the radius is 4 cm?

15. A cyclist decelerates at a constant rate from 30 km/hr to a standstill in 45 sec.
a. How fast is the bicyclist traveling after 20 sec?
b. How far has the bicyclist traveled after 45 sec?

16. A factory is polluting a lake in such a way that the rate of pollutants entering the lake at time t, in months, is given by N'(t) = 280t², where N is the total number of pounds of pollutants in the lake at time t.
**Figure 2.41** - *Description: Graph of pollutant rate function N'(t) = 280t².*
a. How many pounds of pollutants enter the lake in 16 months?
b. An environmental board tells the factory that it must begin cleanup procedures after 50,000 pounds of pollutants has entered the lake. After what length of time will this occur?