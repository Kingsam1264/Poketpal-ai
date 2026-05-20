# Unit 8: Probability

## Unit Outcomes

By the end of this unit, you will be able to:
- Distinguish certain and uncertain events
- Know principles of counting
- Explain the concept of probability
- Understand Binomial Theorem
- Calculate the probability of an event
- Calculate the probability of a compound event
- Apply facts and principles in computation of probability
- Represent probabilities as fractions, decimals and percentages
- Interpret probabilities as fractions, decimals and percentages
- Represent the probability of an event as fraction or decimal between 0 and 1 or as a percentage
- Use probability concept to solve real life problems

## Unit Contents

8.1 Introduction
8.2 Fundamental Principle of Counting
8.3 Permutations and Combinations
8.4 Binomial Theorem
8.5 Random Experiments and Their Outcomes
8.6 Events
8.7 Probability of an Event
8.8 Real-life Application of Probability

### Key Words

- combination
- dependent events
- exhaustive events
- fundamental counting principles
- permutation
- independent events
- probability of an event

## 8.1 Introduction

From the time you awake until you go to bed, you make decisions regarding the possible events that are governed at least in part by chance. For example, should you carry an umbrella to school today? Should you accept that new homework? Thus probability can be defined as the chance of an event occurring. Many people are familiar with probability from observing or playing games of chance, such as card games, slot machines, or lotteries. In addition to being used in games of chance, it is used in the fields of insurance, investments, and weather forecasting and in various other areas. Finally, probability is the basis of inferential statistics. For example, predictions are based on probability and hypotheses are tested by using probability.

**Blaise Pascal (1623 - 1662)** suffered the most appalling ill-health throughout his short life. He is best known with Fermat on probability. This followed correspondence with a gentleman gambler who was puzzled as to why he lost so much in betting on the basis of appearance of a throw of dice. Pascal's work on probability became of enormous importance and showed for the first time that absolute certainty is not a necessity in mathematics and science. He also studied physics, but his last years were spent in religious meditation and illness.

### Revision about Probability

You will revise some terms before you proceed to the next section as discussed in grade 9.

1. An experiment is an activity (measurement or observation) that generates well-defined results (Outcomes)
2. An outcome (Sample point) is the result of a single trial of an experiment
3. A sample space (S) is a set that contains all possible outcomes of an experiment
4. An Event is any subset of a sample space

#### Example 1

If a fair die is rolled once the possible results are either 1, 2, 3, 4, 5 or 6, then from this:
a. Give the sample space
b. Give the event of obtaining odd numbers
c. Give the event of obtaining even numbers
d. Give the event of obtaining number seven

**Solution**
a. sample space(S) is {1, 2, 3, 4, 5, 6}
b. the event of obtaining odd numbers is {1, 3, 5}
c. the event of obtaining even numbers is {2, 4, 6}
d. the event of obtaining number seven is ∅; which is an impossible event

#### Example 2

When a "fair" coin is tossed, the possible results are either head (H) or tail (T). Consider an experiment of tossing a fair coin three times:
a. What are the possible outcomes?
b. Give the sample space
c. Give the event of H appearing on the second throw
d. Give the event of at least one T appearing

**Solution**
a. HHH, HHT, HTH, THH, TTH, THT, HTT, TTT
b. S = {HHH, HHT, HTH, THH, TTH, THT, HTT, TTT}
c. A = {HHH, HHT, THH, THT}
d. B = {HHT, HTH, THH, TTH, THT, HTT, TTT}

**Note**: Events which have the same chance of occurring are equally likely events

### Exercise 8.1

1. A fair die is rolled once:
   a. Give the event of obtaining a number equal to or greater than 4
   b. Give the event of obtaining number zero

2. A fair coin is tossed twice:
   a. What are possible outcomes?
   b. Give the sample space
   c. Give the event of at least one H appearing

## 8.2 Fundamental Principle of Counting

### Activity 8.1

Consider that six students leave the class; re-enter one by one and take a seat. In how many ways can you seat these students?

Consider students observing car plate numbers. The first digit is from 26 English alphabet, the other five digits are a number from 0 to 9. Discuss in how many different ways a car plate number is written.

From Activity 8.1, in order to calculate probabilities, you have to know the number of elements of an event and the number of elements of the sample space. Thus, if the experiment is leaving and re-entering of 6 students into the class, what is the total number of possible outcomes? If an event E is defined by number of ways the students can seat, similarly if the experiment is car plate number, what is the total number of possible outcomes? If an event E is defined by "6 English alphabet and 6-digit number", then how do you find n(E)? From this, you can observe that counting plays a very important role in finding probabilities of events.

Thus, when the number of possible outcomes is very large, it will be difficult to find the number of possible outcomes by listing. One may use fundamental principle of counting which helps us to find the number of ways of occurrence (selections) of events in a given order such as the multiplication and the addition principle.

### 8.2.1 Multiplication Principle

Consider the following example before stating the multiplication principle

#### Example 1

Consider that Girma goes to the nearest snack to have breakfast. He can take tea, coffee, or milk with bread, cake, or sandwich. How many possibilities does he have?

**Solution**
As shown below, use a tree diagram to show the number of events.

- Bread
  - Tea
  - Coffee
  - Milk
- Cake
  - Tea
  - Coffee
  - Milk
- Sandwich
  - Tea
  - Coffee
  - Milk

There are 3 × 3 = 9 possibilities.

From these possible choices, Girma can take tea with bread, tea with cake, tea with sandwich or coffee with bread, coffee with cake, coffee with sandwich or milk with bread, milk with cake, milk with sandwich.

The above example, therefore, illustrates the multiplication principle of counting.

**Multiplication Principle**: If an event can occur in m different ways, and for every such choice another event can occur in n different ways, then both the events can occur in the given order in m × n different ways. That is, the number of ways in which a series of successive things can occur is found by multiplying the number of ways each thing can occur.

#### Example 2

Suppose there are 6 seats arranged in a row. In how many different ways can six people be seated on them?

**Solution**
The first man has 6 choices, the 2nd man has 5 choices, the 3rd man has 4 choices, the 4th has 3 choices, the 5th man has 2 choices and the sixth man only one choice.

Therefore, the total number of possible seating arrangements is:
6 × 5 × 4 × 3 × 2 × 1 = 720

#### Example 3

A coin is tossed and a die is rolled. Find the number of outcomes for the sequence of events.

**Solution**
For a coin, 2 possible outcomes: H and T
For a die, 6 possible outcomes: 1, 2, 3, 4, 5 and 6
Now when coin is tossed and a die is rolled simultaneously, (2 × 6) = 12 possible outcomes.

### Exercise 8.2

1. Abebech has got only clean clothes of 3 t-shirts and 5 pairs of jeans. How many different combinations can Abebech choose?

2. Suppose that a man has 5 coats, 10 shirts and 8 different trousers. In how many different ways can a man dress?

3. A paint manufacturer wishes to manufacture several different paints. The categories include:

**Table 8.1**
| Category | Options |
|----------|---------|
| Colour | Red, blue, white, black, brown, green, yellow |
| Type | Latex, oil |
| Texture | Flat, semigloss, high gloss |
| Use | Outdoor, indoor |

How many different kinds of paint can be made if you can select one colour, one type, one texture, and one use?

4. There are 16 microcomputers in a computer center. Each microcomputer has 21 ports. How many different ports to a microcomputer in the center are there?

### 8.2.2 Addition Principle

Before stating the addition principle, let us see the following examples:

#### Example 1

Suppose that you want to buy a computer from one of two makes A and A2. Suppose also that those makes have 12 and 18 different models, respectively. How many models are there altogether to choose from?

**Solution**
Since you can choose one of 12 models of make A or one of 18 of A2, there are altogether 12 + 18 = 30 models to choose from a given model.

Choosing one from given models of the either make is an event and the choices for either event is the outcomes of the event. Thus, the event "selecting one from make A", for example, has 12 outcomes. This shows the Addition Principle of Counting.

**Addition Principle**: If A and B are mutually exclusive events (i.e., the occurrence of one excludes that of the other) where an event A can occur in m ways and another event B can happen in n ways, respectively, then the total number of outcomes for the event A or B is n + m ways.

**Note**: Two events are said to be mutually exclusive, if both cannot occur simultaneously.

#### Example 2

If 4 red and 6 green marbles are placed in a bag. How many marbles are there to choose from?

**Solution**
Since the red and green marbles cannot be chosen together or at the same time, the number of outcomes is added together. So, there are 4 + 6 = 10 marbles to choose from.

#### Example 3

A question paper has two parts where one part contains 10 questions and the other 6 questions. If a student has to choose only one question from either part, in how many ways can the student do it?

**Solution**
The student can choose one question in 10 + 6 = 16 ways.

#### Example 4

Suppose that either a member of the Mathematics faculty or a student who is Mathematics major is chosen as a representative to a university committee. How many different choices are there for this representative if there are 37 members of the Mathematics faculty and 83 Mathematics majors and no one is both a faculty member and a student?

**Solution**
There are 37 ways to choose a member of the Mathematics faculty and there are 83 ways to choose a student who is Mathematics major. Choosing a member of the Mathematics faculty is never the same as choosing a student who is Mathematics major because no one is both a faculty member and a student. By addition principle it follows that there are 37 + 83 = 120 possible ways to pick this representative.

#### Example 5

Tigist is selecting an outfit. She has 5 different pairs of pants, 4 different skirts and 12 different T-shirts. How many outfits are possible?

**Solution**
Tigist cannot wear a pair of pants and a skirt at the same time. So, she can wear either "pants and T-shirt" or "skirt and T-shirt".

When she wears a pair of pants and a T-shirt, possible outfits are: 5 × 12 = 60

When she wears a skirt and a T-shirt, possible outfits are: 4 × 12 = 48

Therefore, total possible outfits are: 5 × 12 + 4 × 12 = (5 + 4) × 12 = 108

### Exercise 8.3

1. Suppose there are 5 chicken dishes and 8 beef dishes. How many selections does a customer have?

2. There are 5 vegetarian entree options and 7 meat entree options on a dinner menu. What is the total number of entree options?

3. Consider the following road system from P to Q. In how many different ways could one travel from P to Q?

4. A star will draw one card from a standard deck of playing cards. How many ways can she choose:
   a. an even number?
   b. a king or a queen?
   c. a heart, a diamond or a club?
   d. a king or a black?

## 8.3 Permutations and Combinations

### Factorial

#### Activity 8.2

1. What knowledge do you have about factorial of a number?
2. Compute:
   a. 5!
   b. 9!

**Definition 8.1**: Factorial of a number denoted by n! is the product of all positive integers less than or equal to n:
n! = n × (n-1) × (n-2) × (n-3)... × 3 × 2 × 1 and 0! = 1, 1! = 1

#### Example 1

Compute:
a. 4!
b. 7!
c. 10!/8!
d. 45!/42!
e. 8!/(5!2!)

**Solution**
According to the definition 8.1 above:
a. 4! = 4 × 3 × 2 × 1 = 24
b. 7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
c. 10!/8! = (10 × 9 × 8!)/8! = 90
d. 45!/42! = (45 × 44 × 43 × 42!)/42! = 85,140
e. 8!/(5!2!) = (8 × 7 × 6 × 5!)/(5! × 2) = 168

### 8.3.1 Permutation

#### Permutations (1)

##### Activity 8.3

1. Compute the following:
   a. 7!/(7-5)!
   b. 11!/(11-3)!
   c. 9!/(9-2)!

2. Consider a business owner who has a choice of 5 locations in which to establish her business. She decides to rank each location according to certain criteria, such as price of the store and parking facilities. Discuss the number of different ways she can rank the 5 locations.

From Activity 8.3, you can define permutation formally as follows.

**Definition 8.2**: The arrangement of n objects in a specific order using r objects at a time is called a permutation of n objects taking r objects at a time. It is written as P(n,r) or nPr, and the formula is:
nPr = n!/(n-r)! where 0 < r ≤ n.

This formula can be derived this way. Suppose there are five balls of different colours. You want to pick up three of them and line them up. How many different ways will you have to arrange the three balls? This answer is denoted as 5P3. Let's calculate this. You pick up the first ball. You will have 5 choices. Then for second ball, you will have 4 balls to choose from. Similarly, for the third ball, you will have 3 remaining balls to choose from. Then the number of all possible ways is calculated as:
5P3 = 5 × 4 × 3 = 60

This is in fact the same as:
5P3 = (5 × 4 × 3 × 2 × 1)/(2 × 1) = 5!/(5-3)!

This was the case where n = 5 and r = 3. From this you can generalize that:
nPr = n!/(n-r)!

**Note**: The number of permutations of a set of n objects taken all together is denoted by P(n,n) or nPn and is equal to n!. Thus, P(n,n) = n!

#### Example 2

Compute the following permutation:
a. P(7,4)
b. P(9,6)
c. P(14,4)

**Solution**
a. P(7,4) = 7!/(7-4)! = 840
b. P(9,6) = 9!/(9-6)! = 60,480
c. P(14,4) = 14!/(14-4)! = 24,024

### Exercise 8.4

1. Find the factorial of each of the following numbers:
   a. 5!
   b. 8!
   c. 13!

2. Compute the following permutation:
   a. P(5,1)
   b. P(5,2)
   c. P(5,3)
   d. P(5,5)

#### Permutation (2)

#### Example 3

Five students are contesting an election for 5 places in the executive committee of environmental protection club in their school. In how many ways can their names be listed on the ballot paper?

**Solution**
You have to arrange 5 names in 5 places. Therefore, the number of ways of listing their names on the ballot paper, P(5,5) = 5! = 120

#### Example 4

Suppose you have letters A, B, C, and D:
a) How many permutations are there taking all the four?
b) How many permutations are there taking two letters at a time?

**Solution**
a. Here, n = 4, i.e., there are four distinct objects. There are 4! = 24 permutations
b. Here, n = 4, r = 2. There are 4P2 = 4!/(4-2)! = 12 permutations

### Exercise 8.5

1. A mathematics debating team consists of 4 speakers:
   a. In how many ways can all 4 speakers be arranged in a row for a photo?
   b. How many ways can the leader and vice-leader be chosen?

2. 3 different statistics books, 5 different mathematics books, and 3 different physics books are arranged on a shelf. How many different arrangements are possible if:
   a. The books in each particular subject must all stand together
   b. Only the statistics books must stand together

3. R, S, T, U, V and W are six students. In how many ways can they be seated in a row if:
   a. there are no restrictions on the seating
   b. R and S must sit beside each other
   c. U, V and W must sit beside each other
   d. R and W must sit at the end of each row

#### Permutations with Repetition

When you arrange four letters, A, B, C, and D, you will have 4P4 = 4 × 3 × 2 × 1 = 24 different ways of arrangements. However, if you have four letters of A, B, C and C, how many different ways of arrangements will you have?

Suppose you can differentiate two C's as C1 and C2. Then, the total number of ways of arrangements is 24. In this calculation, ABC1C2 and ABC2C1 are different arrangements, but in fact you cannot differentiate those two permutations: ABCC and ABCC are the same arrangement. Similarly, BC1AC2 and BC2AC are the same arrangement, BCAC. Thus, when there are two C's, the total number of permutations, 24, indicates duplications. For instance, you have counted ABCC twice as ABC1C2 and ABC2C1. Since C1 and C2 can be arranged in 2! = 2 ways (C1C2 and C2C1), the total number of 24 should be divided by 2 to obtain the correct total number of arrangements, which is 12.

When there are some same objects included in the objects, the total number of arrangements of the objects should be counted avoiding duplications.

**Definition 8.3**: The number of arrangements of n objects in which n1 are alike, n2 are alike, ..., nr alike objects of the r' type is n!/(n1! × n2! × ... × nr!) where n1 + n2 + ... + nr = n and 0 < r ≤ n.

#### Example 5

How many different permutations can be made from the letters in the word "ADDIS"?

**Solution**
Here n = 5 of which there are two D's. So, 1 is A, 2 are D, 1 is I and 1 is S. So, n1 = 1, n2 = 2, n3 = 1, n4 = 1.

Using definition 8.3, there are:
5!/(1! × 2! × 1! × 1!) = (5 × 4 × 3 × 2 × 1)/(2 × 1) = 60 permutations.

#### Example 6

How many different permutations can be made from the letters in the word "ADDIS" if the rearrange letters which start from S?

**Solution**
If you fix the first letter to be S, then you have four remaining letters, A, D, D, and I to arrange. You have to think of the permutations of them. Since there are 2 D's, using definition 8.3, you have:
4!/(1! × 2! × 1!) = (4 × 3 × 2 × 1)/(2 × 1) = 12 permutations:

They are:
SDADI, SIADD, SADDI, SDAID, SADID, SIDAD, SAIDD, SDDAI, SIDDA, SDDIA, SDIAD, SDIDA

### Exercise 8.6

1. Determine how many different permutations are possible using the word ABABA

2. Find how many ways you can rearrange the letters of BANANA; if:
   a. there is no restriction
   b. the rearranged letters start with N

3. How many different permutations can be made from the letters in the word "MATHEMATICS"?

4. How many different permutations can be formed from the letters of the word MATHEMATICS which start from C?

5. How many permutations can be made from the letters in the word MATHEMATICS which start with M?

#### Circular Permutations

##### Activity 8.4

Discuss the difference between arrangements of objects in a straight line and around a circle.

Suppose you have three students named A, B, and C. You have already determined that they can be seated in a straight line in 3! or 6 ways. Your next problem is to see in how many ways these students can be seated in a circle. You draw a diagram:

It happens that there are only two ways we can seat three students in a circle, relative to each other's positions. This kind of permutation is called a circular permutation which depends on the relative positions of the students after you fix the position of one student. In such cases, no matter where the first student sits, the permutation is not affected. Each student can shift as many places as they like, and the permutation will not be changed. You are interested in the position of each student in relation to the others. Thus, in circular permutations, the first student is considered a place holder, and where he/she sits does not matter.

**Definition 8.4**: The number of permutations of n elements in a circle is (n - 1)!.

#### Example 7

In how many different ways can five people be seated at a round table?

**Solution**
The number of ways will be (5 - 1)! or 24.

#### Example 8

In how many ways can 6 boys and 5 girls dine at a round circular table, if no two girls are to sit together.

**Solution**
First let us allot the seats to boys. Now 6 boys can have (6 - 1)! circular permutation, i.e., the number of permutations in which boys can take their seats is 5! = 120. Next the 5 girls occupy seats marked (G). There are 6 spaces between the boys, which can be occupied by 5 girls in 6P5 = 720 ways. Hence total number of ways is 5! × 6P5 = 120 × 720 = 86,400.

#### Example 9

Find the number of ways in which 5 people A, B, C, D, and E can be seated at a round table, such that:
a. A and B always sit together
b. C and D never sit together

**Solution**
a. If you wish to make seat A and B together in all arrangements, you can consider these two as one unit, along with 3 others. So, effectively you have to arrange 4 people in a circle, the number of ways being (4 - 1)! or 6. Let's take a look at these arrangements: But in each of these arrangements, A and B can themselves interchange places in 2 ways as shown in the figures below. Therefore, the total number of ways will be 6 × 2 or 12.

b. The number of ways in this case would be obtained by removing all those cases (from the total possible) in which C and D are together. The total number of ways will be (5 - 1)! or 24. Similar to (a) above, the number of cases in which C and D are seated together, will be 12. Therefore, the required number of ways will be 24 - 12 or 12.

### Exercise 8.7

1. Calculate circular permutation of 4 persons sitting around a round table.

2. In how many ways can four couples be seated at a round table if the men and women want to sit alternately?

3. In how many ways can 8 boys and 3 girls sit around a circular table, so that no two girls sit together?

### 8.3.2 Combination

#### Combinations (1)

##### Activity 8.5

1. Compute the following:
   a. P(14,7)/3!
   b. P(7,3)/P(n,n)
   c. P(n,r)/P(n,r)

2. Suppose a dress designer wishes to select two colours of material to design a new dress, and he has on hand four colours. Discuss how many different possibilities can there be in this situation?

From Activity 8.5, you have observed that combination can be obtained by dividing permutation by factorial of r objects selected from n objects.

#### Example 1

Given the letters A, B, C, and D, list the permutations and combinations for selecting two letters.

**Solution**
The permutations are:
AB, BA, CA, DA, AC, BC, CB, DB, AD, BD, CD, DC

In permutations, AB is different from BA. But in combinations, AB is the same as BA since the order of the objects does not matter in combinations. Therefore, if duplicates are removed from a list of permutations, what is left is a list of combinations, as shown:
AB, AC, AD, BC, BD, CD

Hence, the combinations of A, B, C, and D are AB, AC, AD, BC, BD, and CD.

This example leads us to the definition of combinations.

**Definition 8.5**: The number of combinations of r objects selected from n objects without considering the order of selection, is denoted by C(n, r) = nCr = (n choose r) = nCr and defined by:
C(n, r) = n!/[(n-r)! × r!] where 0 < r ≤ n.

To arrive at a formula for nCr, observe that the r objects in nPr can be arranged among themselves in r! ways.

Thus, C(n, r) = nPr/r! = n!/[(n-r)! × r!]

Hence, the number of possible combinations of n objects taken r at a time is given by the formula:
C(n, r) = n!/[(n-r)! × r!] where 0 < r ≤ n.

From this, you can see that the number of ways that a committee of three members can be selected from four individuals is given by:
C(4, 3) = 4!/[1! × 3!] = 4 ways.

#### Example 2

Compute the following:
a. C(7,3)
b. C(11,5)
c. C(13,10)

**Solution**
a. C(7,3) = 7!/[(7-3)! × 3!] = 35
b. C(11,5) = 11!/[(11-5)! × 5!] = 462
c. C(13,10) = 13!/[(13-10)! × 10!] = 286

### Exercise 8.8

1. Compute each of the following:
   a. C(5, 2)
   b. C(5, 3)
   c. C(9, 1)
   d. C(11, 9)
   e. C(n,n)

2. C(5, 2) = C(5, 3). Explain in words why this happens.

3. If C(n,3) = C(n,4), find n.

#### Combinations (2)

#### Example 3

In an examination paper, there are 10 questions. In how many different ways can a student choose six questions in all?

**Solution**
The student is to choose 6 questions from the 10 questions. Their order does not matter. Hence, he/she can do it in C(10,6) ways. This means, C(10,6) = 10!/(10-6)!6! = 210.

#### Example 4

In HIV/AIDS club there are 7 women and 5 men. A committee of 3 women and 2 men is to be chosen. How many different possibilities are there?

**Solution**
Here, you must select 3 women from 7 women, which can be done in C(7,3) or 35 ways. Next, 2 men must be selected from 5 men, which can be done in 5C2, or 10 ways.

Finally, by the fundamental counting rule, the total number of different ways is 35 × 10 = 350, since you are choosing both men and women separately.

Using the formula gives:
C(7,3) × C(5,2) = 350

#### Example 5

In how many ways can Bekele invite at least one of his friends out of 6 friends to an art exhibition?

**Solution**
At least one means that he can invite either one, two, three, four, five or all 6. Therefore, the total number of ways in which he can invite at least one of his friends is given by (Addition principle):
C(6,1) + C(6,2) + C(6,3) + C(6,4) + C(6,5) + C(6,6) = 6 + 15 + 20 + 15 + 6 + 1 = 63

### Exercise 8.9

1. Select 5 students from a class of 25 to write solutions to a homework problem on the board. If it doesn't matter who does which question, how many ways can these 5 students be picked?

2. A newspaper editor has received 8 books to review. He decides that he can use 3 reviews in his newspaper. How many different ways can these 3 reviews be selected?

3. A committee of 5 students has to be formed from 8 boys and 4 girls. In how many ways can this be done when the committee consists of:
   a. exactly 3 girls?
   b. at least 3 boys?
   c. at most 3 girls?

4. There are 7 women and 5 men in mathematics department:
   a. In how many ways can a committee of 4 people be selected?
   b. In how many ways can this committee be selected if there must be 2 men and 2 women on the committee?
   c. In how many ways can this committee be selected if there must be at least 2 women on the committee?

## 8.4 Binomial Theorem

### Pascal's Triangle

#### Activity 8.6

1. Expand (a + b)⁰, (a + b)¹ and (a + b)². Discuss the pattern in the expansions and its corresponding coefficients?
2. What is the coefficient of a²b² after expanding (2a + b)²?

From Activity 8.6, imagine the pattern in the expansions and its corresponding coefficients. Again, the expansion form of (a + b)ⁿ where n = 0, 1, 2 is:
(a + b)⁰ = 1
(a + b)¹ = a + b
(a + b)² = a² + 2ab + b²

In these expansions, you observe that the total number of terms in the expansion is one more than the index. For example, in the expansion of (a + b)² number of terms is 3 whereas the index of (a + b) is 2. Powers of the first quantity 'a' go on decreasing by 1 whereas the powers of the second quantity 'b' increases by 1, in the successive terms. In each term of the expansion, the sum of the indices of a and b is the same and is equal to the index of a + b.

Thus, arranging the coefficients in these expansions in the form of triangle defines Pascal's Triangle.

**Definition 8.6**: Pascal's triangle is a triangular arrangement of numbers that gives the coefficients in the expansion of any binomial expression, such as (a + b)ⁿ for n = 0, 1,..., n

**Note**: Pascal's triangle can be used to visualize many properties of the binomial coefficient and the binomial theorem.

### Exercise 8.10

Using the Pascal's triangle, find the coefficients in the expansion of (a + b)ⁿ:
a. when n = 5
b. when n = 6

### Binomial theorem

For any positive integer n, the binomial expansion of (a + b)ⁿ is given by:
(a + b)ⁿ = (n choose 0)aⁿ + (n choose 1)aⁿ⁻¹b + (n choose 2)aⁿ⁻²b² + ... + (n choose r)aⁿ⁻ʳbʳ + ... + (n choose n)bⁿ

#### Example 1

Expand (a + b)⁴
(a + b)⁴ = (4 choose 0)a⁴ + (4 choose 1)a³b + (4 choose 2)a²b² + (4 choose 3)ab³ + (4 choose 4)b⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴

#### Example 2

Find the coefficient of a²b² in the expansion of (a + b)⁵
(a + b)⁵ = (5 choose 0)a⁵ + (5 choose 1)a⁴b + (5 choose 2)a³b² + (5 choose 3)a²b³ + (5 choose 4)ab⁴ + (5 choose 5)b⁵
Thus, the coefficient of a²b² = (5 choose 2) = 10

#### Example 3

Expand (a - 2b)⁴ using Pascal's triangle

**Solution**
Using Pascal's triangle coefficients: 1, 4, 6, 4, 1
Hence, (a - 2b)⁴ = a⁴ + 4(a³)(-2b) + 6a²(-2b)² + 4(a)(-2b)³ + (-2b)⁴ = a⁴ - 8a³b + 24a²b² - 32ab³ + 16b⁴

### Exercise 8.11

1. Expand each of the following using the Binomial Theorem:
   a. (a + b)⁶
   c. (a - 3b)⁸

2. Without writing all the expanded terms, answer the following:
   a. What is the coefficient of a²b⁴ in the expansion of (a + b)⁶?
   b. What is the coefficient of a⁴b⁴ in the expansion of (a + b)⁸?
   c. What is the coefficient of the term containing a³b⁴ in (2a + b)⁷?

3. Expand (x - 3)⁶ using Pascal's triangle

## 8.5 Random Experiments and Their Outcomes

### Random Experiments (1)

#### Activity 8.7

Find the sample spaces for each of the following random experiments:
1. Tossing a coin
2. Tossing a pair of coins
3. Rolling a die

From Activity 8.7, you have observed that if the experiment is repeated under identical conditions, it does not necessarily produce the same results every time but the outcome in a trial is one of the several possible outcomes which can be defined as random experiment or probability experiment.

**Definition 8.7**: A random experiment is any well-defined procedure that produces an observable outcome that could not be perfectly predicted in advance.

#### Example 1

1. Tossing a fair coin is a random experiment
2. Rolling of a die is a random experiment
3. Drawing a card from a pack of cards is a random experiment

**Definition 8.8**: Sample space is the set of all possible outcomes of a random experiment associated with it and denoted by S.

#### Example 2

Find the sample spaces for drawing one card from an ordinary deck of cards

**Solution**
There are 4 suits (hearts, clubs, diamonds, and spades) and 13 cards for each suit (ace through King). Thus, there are 52 outcomes in the sample space as shown below.

#### Example 3

Find the possible outcomes of selecting a 4-digit PIN from 0,1,2,3,4,5,6,7,8, and 9.

**Solution**
There are 10 possible values for each digit of the PIN.
So, 10 × 10 × 10 × 10 = 10⁴ = 10,000

#### Example 4

A box contains 24 different balls. Find the number of possible outcomes when you select three balls from the box.

**Solution**
There are C(24, 3) = 2,024 number of possible outcomes

### Exercise 8.12

1. Find the sample space for the gender of the children if a family has four children.

2. A fair die is thrown. How many favourable outcomes are there for getting an even number

3. Find the sample space for drawing one card from an ordinary deck of cards.

4. Find the possible outcomes of the football match between St. George and Ethiopia Coffee (for each team, draw, loss or win).

### Random Experiments (2)

#### Example 5

Each of 5 cards has one of the letters A, B, C, D and E on them. The cards are shuffled. Find number of different arrangements (possible outcomes)

**Solution**
Number of different arrangements = 5! = 5 × 4 × 3 × 2 × 1

**Note**: Outcomes of a random experiment are said to be equally likely when each element has equal chance of being chosen.

#### Example 6

In tossing coin, any one of the outcomes H or T, has an equal chance of appearing at the top. Thus, they are considered as equally likely.

**Note**: In a random experiment, the outcomes which ensure the occurrence of a particular result is called favourable outcomes to that particular result.

#### Example 7

a. There are four blue marbles and one red marble in a jar. You pick up one marble from the jar. What is the number of favourable outcomes to get a red marble only.
b. If you draw one slip from a box that contains 12 slips of paper numbered 1 to 12, how many favourable outcomes are there for choosing a slip with an even number on it?
c. In picking a playing card from a pack of 52 cards, what is the number of favourable outcomes to get a picture card?

**Solution**
a. There is 1 favourable outcome. This is red marble
b. There are 6 favourable outcomes. These are 2, 4, 6, 8, 10 and 12
c. There are 12 favourable outcomes. These are 4 Jacks, 4 Queens and 4 Kings.

### Exercise 8.13

1. What is meant by equally likely?

2. Two balls are to be selected with replacement from a bag that contains one red, one blue, one green and one orange ball. Use the counting principle to determine the number of favourable outcomes to get blue.

3. Each of 5 cards has one of the letters A, B, C, D, and D on them. The cards are shuffled. What is the number of favourable outcomes that the letters A and B are together?

4. In a certain state's lottery, 48 balls numbered 1 through 48 are placed in a machine and six of them are drawn at random. If the six numbers drawn match the numbers that a player had chosen, the player wins 1,000,000 birrs. In this lottery, the order the numbers are drawn in doesn't matter. Find the number of favorable outcomes of the lottery drawn that you win one-million-birr prize if you purchase a single lottery ticket.

## 8.6 Events

### Events and Sample Space

#### Activity 8.8

1. What does an event mean?
2. List some events of the following experiments:
   a. Tossing a coin three times
   b. Selecting a number at random from rolling a die
   c. Drawing a ball from a bag containing 4 red and 6 white balls

For Activity 8.8, remember that a subset of the sample space associated with a random experiment is called an event. It is denoted by E or other uppercase letters.

#### Example 1

The four faces of a regular tetrahedron are numbered 1, 2, 3 and 4. If it is thrown and the number on the bottom face (on which it stands) is registered, then list all the possible events of this experiment.

**Solution**
The sample space = {1, 2, 3, 4}

#### Example 2

Suppose our experiment is tossing a fair coin. The sample space for this experiment is S = {H, T}. This sample space has a total of four possible events: a head is thrown ({H}), a tail is thrown ({T}), a head and a tail is thrown ({H} ∩ {T} = ∅ because this event is impossible) and a head or a tail is thrown ({H} ∪ {T} = {H, T} = S because this always happens).

Thus, the list of the possible events is ∅, {H}, {T}, and {H, T}

**Note**: We can determine the possible number of events that can be associated with an experiment whose sample space is S. As events are subsets of a sample space and any set with m elements has 2ᵐ subsets, the number of events associated with a sample space with m elements is 2ᵐ.

#### Example 3

Suppose our experiment is recording the gender of three children of three families. Where B and G standing for boy and girl. List events of the first result is a boy.

**Solution**
The sample space is S = {BBB, BBG, BGB, BGG, GBB, GBG, GGB, GGG}
E = {BBB, BBG, BGB, BGG} is an event

#### Example 4

Consider the random experiment of throwing a die. List an event of getting a number(s) which is(are) less than 3.

**Solution**
The sample space = {1, 2, 3, 4, 5, 6}
The possible events = {1, 2}

#### Example 5

A committee of 5 people is to be selected from a group of 5 men and 6 women. What is the number of an event that the committee contains 2 men and 3 women?

**Solution**
Number of possible committee compositions = C(11,5) = 462
Number of an event that the committee contains 2 men and 3 women is C(5,2) × C(6,3) = 200

### Exercise 8.14

1. Suppose you throw a fair die once. List an event of getting an odd number

2. Suppose you throw a fair die twice and record the numbers. List an event of getting an odd number twice.

3. Three students are to be chosen from a class of 8 girls and 10 boys. What is the number of an event that the three selected students are two girls and one boy?

### 8.6.1 Types of Events

#### Various Events (1)

##### Activity 8.9

What do you know about types of events?

**Definition 8.9**

1. **Simple Event (Elementary Event)** is an event containing only one sample element.

**Example 1**: Suppose you randomly select one student from your class and observe whether the student selected each time is a man or a woman. The occurrence of man is a simple event.

2. **Compound Event**: An event that contains more than one sample element is called a compound event.

**Example 2**: When a die is rolled, if you are interested in the event of "getting an odd number" then the event will be a compound event, i.e., {1, 3, 5}

3. **Impossible event**: An event that cannot happen is called an impossible event.

**Example 3**: If a die is thrown, then S = {1, 2, 3, 4, 5, 6}. Let E be the event of getting number 8, then E is an impossible event and denoted by E = ∅

4. **Certain or sure Event**: You know that every set is subset of itself. Thus, sample space (S) is a subset of itself and hence S is an event. This is called a Sure or certain event.

**Example 4**: If a die is thrown, then S = {1, 2, 3, 4, 5, 6}. Let E be the event of getting a number ≤ 6, then E = {1, 2, 3, 4, 5, 6} is a sure or certain event.

5. **Occurrence or Non-occurrence of an event**: An event is said to occur if the outcome is associated to the event's sample space. Otherwise, it is a non-occurrence event.

**Example 5**: If a die is thrown, then S = {1, 2, 3, 4, 5, 6}. Let E be the event of getting an even number, then E = {2, 4, 6}. When you throw the die, if the outcome is 4, as 4 ∈ E, then you say that E has occurred. If in another trial, the outcome is 3, then as 3 ∉ E you say that E has not occurred (not E).

### Exercise 8.15

You draw a card from a pack of 52 playing cards:
a. How many possible events are there?
b. Is the event that you draw 9 of spade a simple event or a compound event?
c. Is the event that you draw any card of spade a simple event or a compound event?
d. How do you call the event of drawing the card of 0 of heart?

#### Various Events (2)

6. **Algebra of events**: In a random experiment, let S be sample space, and let E and E' be the events in S.

a. **Complement of an Event E**: denoted by E' (not E) consists of all events in the sample space that are not in E.

**Example 6**: In drawing a marble from a jar containing 6 red, 4 blue and 2 green marbles, let E be the event of green marble. Give the complement of the event.

**Solution**: Not E = E' = 6 red and 4 blue marbles.

**Example 7**: Let a die be rolled once. Let E be the event of a prime number appearing at the top; i.e., E = {2, 3, 5}. Give the complement of the event.

**Solution**: E' = {1, 4, 6}.

**Note**: E' = S - E = {a: a ∈ S and a ∉ E}

b. **Event E or E₂**: E₁ ∪ E₂ is an event that occurs when either one of E or E₂ or both occur.

**Example 8**: In tossing 3 coins, let E₁ = having exactly one Head; i.e., {TTH, THT, HTT} and E₂ = having exactly one tail; i.e., {HHT, HTH, THH}, list events of E₁ ∪ E₂.

**Solution**: E₁ ∪ E₂ = exactly one Head or exactly one tail = {TTH, THT, HTT, HHT, HTH, THH}

c. **Event E and E₂**: E₁ ∩ E₂ is an event that occurs only when both E₁ and E₂ occur.

**Example 9**: In throwing two dice. Let E₁ = first die has 5 = {(5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (5, 6)}. E₂ = sum on both dice is 6 = {(1, 5), (2, 4), (3, 3), (4, 2), (5, 1)}. List events of E₁ ∩ E₂.

**Solution**: Events of E₁ ∩ E₂ = {(5,1)}

7. **Exhaustive Events**: A set of events is said to be exhaustive events if the performance of the experiment always results in the occurrence of at least one of them. Thus, if a set of events E₁, E₂, ..., Eₙ are subsets of a sample space, S, they are said to be exhaustive if E₁ ∪ E₂ ∪ ... ∪ Eₙ = S.

**Example 10**: If a die is thrown, give instances of exhaustive events.

**Solution**: The sample space is S = {1, 2, 3, 4, 5, 6}. From this, the events E₁ = {2, 4}, E₂ = {2, 4, 6}, E₃ = {1, 3, 5} are exhaustive events. Since E₁ ∪ E₂ ∪ E₃ = {2, 4} ∪ {2, 4, 6} ∪ {1, 3, 5} = {1, 2, 3, 4, 5, 6} = S.

8. **Mutually Exclusive Events**: Two events E₁ and E₂ are said to be mutually exclusive events if the occurrence of any one of them excludes the occurrence of the other event. Thus, they cannot occur simultaneously.

**Example 11**: Say whether or not the following are mutually exclusive events:
a. When a coin is tossed once, the events {H} and {T}
b. When a die is thrown, E₁ = getting an even number, E₂ = getting 1 and 3.
c. When a die is rolled, E₁ = getting an odd number, E₂ = getting a prime number.
d. When a card is drawn, the events of Kings and Aces.

**Solution**:
a. Either you get head or tail but we cannot get both at the same time. Thus, {H} and {T} are mutually exclusive events. Since E₁ ∩ E₂ = ∅.
b. E₁ and E₂ are mutually exclusive because E₁ ∩ E₂ = {2, 4, 6} ∩ {1, 3} = ∅.
c. E₁ and E₂ are not mutually exclusive because 5 is odd and prime at the same time.
d. Kings and Aces are mutually exclusive events.

9. **Exhaustive and Mutually Exclusive Events**: If S is a sample space associated with a random experiment and if E₁, E₂, ..., Eₙ are subsets of S such that:
   a. Eᵢ ∩ Eⱼ = ∅ for i ≠ j and
   b. E₁ ∪ E₂ ∪ ... ∪ Eₙ = S
   then the collection of the events E₁, E₂, ..., Eₙ forms a mutually exclusive and exhaustive set of events.

**Example 12**: If a die is thrown, the events {2, 4, 6} and {1, 3, 5} are mutually exclusive and exhaustive events. But, the events {1, 2}, {2, 3}, {4, 5, 6} are not because {1, 2} ∩ {2, 3} = {2} ≠ ∅.

10. **Independent Events**: Events are said to be independent, if the occurrence or non-occurrence of one does not affect the occurrence or non-occurrence of the other.

**Example 13**: In a simultaneous throw of two coins, the event of getting a tail on the first coin and the event of getting a tail on the second coin are independent.

**Example 14**:
a. Landing on heads after tossing a coin and rolling a 5 on a single 6-sided die.
b. Choosing a marble from a jar and landing on heads after tossing a coin.
c. Choosing a 3 from a deck of cards, replacing it, and then choosing an ace as the second card.
d. Rolling a 4 on a single 6-sided die, and then rolling a 1 on a second roll of the die.

11. **Dependent Events**: Events are said to be dependent, if the occurrence or non-occurrence of one event affects the occurrence or non-occurrence of the other.

**Example 15**: If a card is drawn from a well shuffled a pack of cards and the card is not replaced then the result of drawing a second card is dependent on the first draw.

### Exercise 8.16

When two dice thrown, consider following events:
E₁ = getting an even number
E₂ = getting a prime number

a. List E₁ and E₂
b. Are E₁ and E₂ exhaustive events?
c. Are E₁ and E₂ mutually exclusive events?

## 8.7 Probability of an Event

### 8.7.1 Revision on Probability

In this unit, you will revise the classical and the experimental approach of an event before you proceed to the next section as discussed in grade 9 such as:
1. Classical (mathematical) approach, and
2. Empirical (relative frequency) approach before you proceed to the next section.

#### Classical (Mathematical) Approach (1): Simple cases

**Definition 8.10**: In the classical approach to probability, the probability of an event occurring E is defined as the number of elements of the sample space included in the event, divided by the total number of elements in the sample space, when all outcomes of a random experiment are equally likely and mutually exclusive.

i.e., P(E) = Number of outcomes favourable to E / Total number of outcomes = n(E)/n(S)

##### Example 1

A fair die is tossed once. Find the probability of getting:
a. Number 5
b. a number greater than or equal to 4
c. number 7

**Solution**
First identify the sample space, say S
S = {1, 2, 3, 4, 5, 6}, n(S) = 6

a. Let E be the event of number 5
E = {5}, n(E) = 1
Thus, P(E) = n(E)/n(S) = 1/6

b. Let E be the events of a number greater than or equal to 4
E = {4, 5, 6}, n(E) = 3
Thus, P(E) = n(E)/n(S) = 3/6 = 0.5

c. Let E be the events of number 7
E = ∅, n(E) = 0
Thus, P(E) = n(E)/n(S) = 0/6 = 0

### Exercise 8.17

1. If a die is rolled once, find the probability of getting an even number.

2. If a die is rolled twice, then find the following probabilities:
   a. The probability of getting the sum 2
   b. The probability of getting the sum greater than 6
   c. The probability of getting the sum greater than 9 or an odd number

#### Classical (Mathematical) Approach (2): Cases using Permutations and Combinations

There are cases in which permutations and combinations are needed to calculate the number of outcomes.

##### Example 2

There are 4 blue balls and 3 red balls in a bag. You pick up 3 balls at random. Find the probability of getting 2 blue balls and 1 red ball.

**Solution**
First, calculate the total number of possible outcomes. You pick up 3 balls from 7 balls (their order does not matter), so the number of possible outcomes is given by:
C(7,3) = 7!/(7-3)! × 3! = 35

Second, calculate the number of possible outcomes where 2 blue balls and 1 red ball are chosen. Since you select 2 blue balls from 4 (their order does not matter), there are C(4,2) possible outcomes for blue balls. For red balls, there are C(3,1) possible outcomes. Since picking up blue balls and picking up red balls are independent, the number of possible outcomes of picking up 2 blue balls and 1 red ball is given by:
C(4,2) × C(3,1) = 6 × 3 = 18

Therefore, the probability is given by:
P = (C(4,2) × C(3,1))/C(7,3) = 18/35

### Exercise 8.18

1. A box of 10 candles consists of 3 defective and 7 non-defective candles. If 5 of these candles are selected at random, what is the probability in which:
   a. 3 will be defective?
   b. 4 will be non-defective?
   c. all will be non-defective?

2. If 3 books are picked at random from a shelf containing 4 math books, 3 books of chemistry, and a dictionary, what is the probability that:
   a. the dictionary is selected?
   b. 2 math and 1 book of chemistry are selected?

3. Three cars are chosen at random from a certain car station containing 8 defective and 12 non-defective cars. What is the probability that:
   a. all are defective?
   b. all are non-defective?
   c. two are defective and the other is non-defective?

#### Empirical (relative frequency) approach

This approach is based on the observations obtained from random experiment. The empirical frequency of an event E is the relative frequency of event E.

Thus, P(E) = frequency of E / total number of observations = f(E)/n

##### Example 3

A travel agent determines that in every 70 reservations she makes 14 will be for a cruise. What is the probability that the next reservation she makes will be for a cruise?

**Solution**
Let E be the event of cruise
P(E) = 14/70 = 0.20

##### Example 4

If records show that 30 out of 50,000 bulbs produced are defective, find the probability of a newly produced bulb to be defective.

**Solution**
Let E be the event that the newly produced bulb is defective
P(E) = 30/50,000 = 0.0006

### Exercise 8.19

1. In a sample of 50 people, 21 had type O blood, 22 had type A blood, 5 had type B blood, and 2 had type AB blood. Find the following probabilities:
   a. A person has type O blood
   b. A person has type A or type B blood
   c. A person has neither type A nor type O blood
   d. A person does not have type AB blood

2. Ten of the 500 randomly selected cars manufactured at a certain auto factory are found to be lemons (defective). Assuming that the lemons are manufactured randomly, what is the probability that the next car manufactured at this auto factory is a lemon?

### 8.7.2 The Axiomatic Approach of Probability

This approach includes both the classical and empirical definitions of probability.

Let A be a random experiment and S be a sample space associated with A. With each event E a real number called the probability of E, denoted by P(E), that satisfies the following properties called axioms of probability or postulates of probability:
1. P(E) ≥ 0
2. P(S) = 1, if E = S (the sure or certain event)
3. P(E₁ ∪ E₂) = P(E₁) + P(E₂) If E₁ and E₂ are mutually exclusive events
4. 0 ≤ P(E) ≤ 1; i.e., the probability of an event is always between 0 and 1
5. P(∅) = 0 if E = ∅ (the impossible event)
6. If E₁ ∪ E₁' = S then P(E₁ ∪ E₁') = P(S) = 1, and P(E₁') = 1 - P(E) where E' = S - E (not E); i.e., the sum of the probability of occurrence event (E) and non-occurrence event (E) is 1, (P(E) + P(E') = 1).

**Note**: Probability(P) is a function whose domain is the set of subsets of S (Sample space) and whose range is the set of real numbers between 0 and 1 (both inclusive).

#### Example 1

A box contains 8 white balls. One ball is drawn at random. Find the probability of getting:
a. white ball
b. red ball

**Solution**
a. The box contains all white balls. Hence, we are sure that white will occur. Then, the probability of getting a white ball is one.
n(w) = 8
Thus, P(w) = n(w)/n(s) = 8/8 = 1

b. The box contains no red balls. It is impossible to get a red ball and the probability is zero.
n(R) = 0
Hence, P(R) = n(R)/n(S) = 0/8 = 0

#### Example 2

A bag contains 5 red, 7 black, and 6 white marbles. One marble is drawn at random. What is the probability that the marble is:
a. black
b. not black

**Solution**
a. P(black) = 7/(5 + 7 + 6) = 7/18
b. P(not black) = 1 - P(black) = 1 - 7/18 = 11/18

Thus, P(black) + P(not black) = 7/18 + 11/18 = 1

#### Example 3

If one card is drawn from a deck, find the probability of picking these results:
a. King
b. Not king
c. King and Queen
d. King or Queen

**Solution**
Number of ways king can happen, n(king) = 4 (there are 4 kings)
Number of ways Queen can happen, n(Queen) = 4 (there are 4 Queens)
Total number of outcomes, n(S) = 52 (there are 52 cards in total)

a. P(king) = n(king)/n(S) = 4/52 = 1/13

b. P(Not king) = 1 - P(king) = 1 - 1/13 = 12/13

c. A card cannot be a king and a Queen at the same time. The chance of picking a King and a Queen at the same time is zero (or none). Hence, P(a king and a Queen) = 0/52 = 0

d. P(a king or a Queen) = P(a king) + P(a Queen) = 1/13 + 1/13 = 2/13

#### Example 4

Which of the following cannot be valid assignments of probabilities for outcomes of sample space S = {α₁, α₂, α₃, α₄, α₅, α₆, α₇}?

| α₁ | α₂ | α₃ | α₄ | α₅ | α₆ | α₇ | Sum |
|----|----|----|----|----|----|----|-----|
| 0.2 | 0.001 | 0.09 | 0.03 | 0.01 | 0.008 | 0.3 | 0.639 |
| 1/6 | 1/6 | 1/6 | 1/6 | 1/6 | 1/6 | 1/6 | 7/6 > 1 |
| 0.1 | 0.3 | 0.4 | 0.3 | - | - | - | 1.1 > 1 |
| -0.7 | 0.007 | 0.2 | 0.1 | 1 | 2 | 3 | - |
| 1/13 | 1/13 | 1/13 | 1/13 | 1/13 | 1/13 | 1/13 | 7/13 < 1 |

**Solution**
a. Valid because all properties are satisfied.
b. Not valid because the sum of the properties is 7/6 which is greater than 1.
c. Not valid, because the sum of all the probabilities is 1.1 which is greater than 1, i.e., 0 ≤ P(E) ≤ 1 is not satisfied.
d. Not valid, because probabilities of α₁ and α₂ are negative and hence 0 ≤ P(E) ≤ 1 is violated.
e. Not valid, because the sum of all the probabilities, 7/13 is less than 1.

### Exercise 8.20

1. If one card is drawn from a deck, find the probability of getting these results:
   a. A queen
   b. A club
   c. Not a club
   d. A 6 or a spade
   e. A red card and a 7

2. If two dice are rolled one time, find the probability of getting these results:
   a. A sum of 9
   b. A sum of 7 or 11
   c. A sum less than 9
   d. A sum greater than or equal to 10

### 8.7.3 Odds in Favour of and Odds Against an Event

#### Activity 8.10

1. Find the smallest share if you divide the number below by the ratio 2:3
   a. 20
   b. 35
   c. 42

2. Find the largest share if you divide the number below by the ratio 2:3
   a. 20
   b. 35
   c. 42

From Activity 8.10, you can formally define odds in favor of and odds against an event as follows:

**Definition 8.11**: If P and P' are probability of the occurrence and non-occurrence of an event respectively, then the ratio of P:P' is called the odds in favour of the event and the ratio of P':P is called the odds against the event.

**Note**: If the probability of an event occurring is P, then the probability of the event not occurring (P') is 1 - P.

#### Example 1

If a race horse runs 100 races and wins 25 times and loses the other 75 times, what are the probability of winning and the odds of the horse winning?

**Solution**
The probability of winning is 25/100 = 0.25 and the probability of losing is 75/100 = 0.75. The odds in favor of winning is 0.25:0.75 = 1:3 = 0.333.

#### Example 2

The odds against certain events are 6:8. Find the probability of its occurrence.

**Solution**
Let E be the event. Then we are given that n(E') = 6 and n(E) = 8. Thus, n(S) = n(E') + n(E) = 6 + 8 = 14. Thus, P(E) = n(E)/n(S) = 8/14 = 4/7.

#### Example 3

In throwing a die:
a. Find the odds in favor of getting 3 dots?
b. Find odds against getting 3 dots?

**Solution**
Let S be possible outcomes in throwing a die = {1, 2, 3, 4, 5, 6}, n(S) = 6.
Let E be event of getting 3 dots, n(E) = 1.
Let E' be event not getting 3 dots, n(E') = (6 - 1) = 5.

a. Odds in favor = n(E):n(E') = 1:5 = 1/5.
b. The Odds against = n(E'):n(E) = 5:1 = 5.

### Exercise 8.21

Find the odds in favour of and against each event:
a. Rolling a die and getting a number less than 3.
b. Drawing a card and getting a red card.
c. Tossing two coins and getting two tails.

### 8.7.4 The Rules of Addition of Probability

#### Activity 8.11

Consider two events E₁ and E₂, what condition should be applied to the rule: P(E₁ ∪ E₂) = P(E₁) + P(E₂) - P(E₁ ∩ E₂) and P(E₁ ∪ E₂) = P(E₁) + P(E₂)? Discuss and verify using Venn diagram?

From Activity 8.11, you have observed that, if E₁, E₂, ..., Eₙ form a set of exhaustive events of a sample space S, then E₁ ∪ E₂ ∪ ... ∪ Eₙ = S. Moreover, the probability of an event E, i.e., P(E) is given by number of outcomes favoring E / total of outcomes in the sampling space = n(E)/n(S).

Having this concept, we can easily calculate probabilities of two events by making the use of the addition rule stated below.

**Rule 1**: If E₁ and E₂ are any two events, then:
P(E₁ ∪ E₂) = P(E₁) + P(E₂) - P(E₁ ∩ E₂)

**Rule 2**: If two events are mutually exclusive, (i.e., E₁ ∩ E₂ = ∅) then P(E₁ ∩ E₂) = ∅ so that P(E₁ ∪ E₂) = P(E₁) + P(E₂).

Moreover, you can verify this rule using Venn diagram as follows:

[Description: Two Venn diagrams showing mutually exclusive events (no overlap) and non-mutually exclusive events (with overlap). For mutually exclusive events, P(E₁ or E₂) = P(E₁) + P(E₂). For non-mutually exclusive events, P(E₁ or E₂) = P(E₁) + P(E₂) - P(E₁ and E₂).]

#### Example 1

a. Find the probability of getting an odd number or 4 in one roll of a die
b. Find the probability of getting Head or Tail in tossing a coin once
c. A die is rolled once. Find the probability that it is even or it is divisible by 3.

**Solution**
a. S = {1, 2, 3, 4, 5, 6}
Let E₁ be event of getting an odd number = {1, 3, 5}
E₂ be event of getting 4 = {4}
Then E₁ and E₂ are mutually exclusive events.
Thus, P(E₁ ∪ E₂) = P(E₁) + P(E₂) = 3/6 + 1/6 = 4/6 = 2/3

b. Let E₁ = getting Head = {H}
E₂ = getting Tail = {T}
The events are mutually exclusive
Thus, P(E₁ ∪ E₂) = P(E₁) + P(E₂) = 1/2 + 1/2 = 1

c. S = {1, 2, 3, 4, 5, 6}
Let E₁ = getting an even number = {2, 4, 6}
E₂ = getting a number divisible by 3 = {3, 6}
Then E₁ and E₂ are not mutually exclusive, because E₁ ∩ E₂ = {6}
Therefore, P(E₁ ∪ E₂) = P(E₁) + P(E₂) - P(E₁ ∩ E₂) = 3/6 + 2/6 - 1/6 = 4/6 = 2/3

#### Example 2

Two dice are rolled. Find the probability of getting:
a. A sum of 8, 9, or 10
b. Doubles or a sum of 7
c. A sum greater than 9 or a sum of 12

**Solution**
[Description: A table showing all possible outcomes when two dice are rolled, with rows representing die 1 (1-6) and columns representing die 2 (1-6), showing all 36 ordered pairs.]

From the above table:
a. n(S) = 36
Let E₁ = getting a sum of 8 = {(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)}
E₂ = getting a sum of 9 = {(3, 6), (4, 5), (5, 4), (6, 3)}
E₃ = getting a sum of 10 = {(5, 5), (6, 4), (4, 6)}
Then E₁, E₂ and E₃ are mutually exclusive.
Therefore, P(E₁ ∪ E₂ ∪ E₃) = P(E₁) + P(E₂) + P(E₃) = 5/36 + 4/36 + 3/36 = 12/36 = 1/3

b. n(S) = 36
Let E₁ = getting Doubles = {(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6)}
E₂ = getting a sum of 7 = {(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)}
Then E₁ and E₂ are mutually exclusive.
Therefore, P(E₁ ∪ E₂) = P(E₁) + P(E₂) = 6/36 + 6/36 = 12/36 = 1/3

c. Let E₁ = getting a sum greater than 9 = {(4, 6), (5, 5), (5, 6), (6, 4), (6, 5), (6, 6)}
E₂ = getting a sum of 12 = {(6, 6)}
Then E₁ and E₂ are not mutually exclusive.
Therefore, P(E₁ ∪ E₂) = P(E₁) + P(E₂) - P(E₁ ∩ E₂) = 6/36 + 1/36 - 1/36 = 6/36 = 1/6

**Note**: The probability rules can be extended to three or more events.

1. For three mutually exclusive events E₁, E₂, and E₃:
   P(E₁ ∪ E₂ ∪ E₃) = P(E₁) + P(E₂) + P(E₃)

2. For three events that are not mutually exclusive:
   P(E₁ ∪ E₂ ∪ E₃) = P(E₁) + P(E₂) + P(E₃) - P(E₁ ∩ E₂) - P(E₂ ∩ E₃) - P(E₁ ∩ E₃) + P(E₁ ∩ E₂ ∩ E₃)

### Exercise 8.22

1. Two dice are rolled. Find the probability of getting:
   a. a sum of 3, 6, or 11
   b. doubles or a sum of 8
   c. a sum greater than 8 or a sum divisible by 4

2. At a convention there are 7 mathematics instructors, 5 computer science instructors, 3 statistics instructors, and 4 science instructors. If an instructor is selected, then find the probability of getting a science instructor or a math instructor.

3. A single card is drawn at random from an ordinary deck of cards. Find the probability that it is either an ace or a black card.

4. In throwing a die, consider the following events:
   E₁ = the number that shows up is odd
   E₂ = the number that shows up is prime
   E₃ = the number that shows up is less than 4
   a. Determine the event E₁ ∩ E₂
   b. Determine the number of elements in E₁ ∩ E₃
   c. Determine the number of elements in E₁ ∩ E₂ ∩ E₃
   d. Determine P(E₁ ∩ E₃)
   e. Determine P(E₁ ∪ E₂ ∪ E₃)

### 8.7.5 The Rule of Multiplication of Probability

#### Independent and Dependent Events

##### Activity 8.12

1. What knowledge do you have about rules of addition of probability?
2. Consider two events E₁ and E₂. Discuss what condition should be applied to the rule:
   P(E and E₂) = P(E₁ ∩ E₂) = P(E₁)·P(E₂) and
   P(E₁ ∩ E₂) = P(E₁)·P(E₂|E₁), whenever P(E₁) ≠ 0

The multiplication rule can be used to find the probability of two or more events in sequence. It is based on the concepts of independence or dependence of events discussed earlier. Let us take a brief revision of independent and dependent events.

When the occurrence of the first event does not affect the occurrence of the second event in such a way that the probability is not changed, the events are called independent, whereas when the occurrence of the first event affects the occurrence of the second event in such a way that the probability is changed, the events are called dependent.

##### Example 1

A jar contains 4 black and 3 white balls. You draw two balls one after the other with replacement (the second is drawn after the first is replaced). Find the probability that the first ball is black and the second ball is also black.

**Solution**
Let event E₁ be the first ball is black.
Let event E₂ be the second ball is black.
Then, P(E₁) = 4/7 and P(E₂) = 4/7
P(E₁ ∩ E₂) = P(E₁) × P(E₂) = (4/7) × (4/7) = 16/49

##### Example 2

Suppose you repeat the above experiment without replacement (the second ball is drawn without the first ball being replaced)

**Solution**
P(E₁) = P(The first ball is black) = 4/7
If the first ball is black, then P(E₂) = 3/6 (One black ball has been removed)
If the first ball is not black, then P(E₂) = 4/6

##### Example 3

A box contains 3 red balls, 2 blue balls, and 5 white balls. A ball is selected and its colour is noted. Then it is replaced. A second ball is selected and its colour is noted. Find the probability of each of the following:
a. Selecting 2 blue balls
b. Selecting 1 blue ball and then 1 white ball
c. Selecting 1 red ball and then 1 blue ball

**Solution**
a. Let E₁ = Selecting blue in the first draw
E₂ = Selecting blue in the second draw
Since the balls are replaced after each draw, the events are independent
P(E₁ ∩ E₂) = P(E₁) × P(E₂) = (2/10) × (2/10) = 4/100 = 1/25

b. Let E₁ = Selecting blue in the first draw
E₂ = Selecting white in the second draw
Since the balls are replaced after each draw, the events are independent
P(E₁ ∩ E₂) = P(E₁) × P(E₂) = (2/10) × (5/10) = 10/100 = 1/10

c. Let E₁ = Selecting red in the first draw
E₂ = Selecting blue in the second draw
Since the balls are replaced after each draw, the events are independent
P(E₁ ∩ E₂) = P(E₁) × P(E₂) = (3/10) × (2/10) = 6/100 = 3/50

### Exercise 8.23

1. A jar contains 6 red balls, 3 green balls, 5 white balls and 7 yellow balls. Two balls are chosen from the jar, with replacement. What is the probability that both balls chosen are green?

2. A die is rolled and a coin is tossed. Find the probability of getting a prime number on the die and a head in the coin.

#### Conditional Probability

Identifying dependence or independence is most important in using the multiplication rule of probability. When occurrence of one event depends on the occurrence of another event, you say the second event is conditioned by the first event. This leads into what is called conditional probability.

The conditional probability of an event E₂ in relationship to an event E₁ is the probability that event E₂ occurs after event E₁ has already occurred. The notation for conditional probability is P(E₂|E₁). This notation does not mean that E₂ is divided by E₁; rather, it means the probability that event E₂ occurs given that event E₁ has already occurred. If the occurrence or non-occurrence of E₁ does not affect the probability of E₂, or if E₁ and E₂ are independent, then P(E₂|E₁) = P(E₂). This defines multiplication rule of probability. These are:

**Rule 1**: When two events are independent, the probability of both occurring, denoted by P(E and E₂) or P(E₁ ∩ E₂) or P(E₁E₂) is given by:
P(E₁ ∩ E₂) = P(E₁) × P(E₂)

**Rule 2**: When two events are dependent, the probability of both occurring is given by:
P(E₁ ∩ E₂) = P(E₁) × P(E₂|E₁), whenever P(E₁) ≠ 0
= P(E₂) × P(E₁|E₂) whenever P(E₂) ≠ 0

##### Example 4

A bag contains 6 red, 5 blue, and 4 yellow balls. Two balls are drawn, but the first ball is drawn without replacement. Find the following:
a. P(red, then blue)
b. P(blue, then blue)

**Solution**
a. Let E₁ = getting red in the first draw
E₂ = getting blue in the second draw
Since the balls are not replaced, events are dependent
P(E₁ ∩ E₂) = P(E₁) × P(E₂|E₁) = (6/15) × (5/14) = 30/210 = 1/7

b. Let E₁ = getting blue in the first draw
E₂ = getting blue in the second draw
Since the balls are not replaced, events are dependent
P(E₁ ∩ E₂) = P(E₁) × P(E₂|E₁) = (5/15) × (4/14) = 20/210 = 2/21

**Note**:
1. Multiplication rule 1 can be extended to three or more independent events by using the formula:
P(E₁ ∩ E₂ ∩ E₃ ∩ ... ∩ Eₖ) = P(E₁) × P(E₂) × P(E₃) × ... × P(Eₖ)

2. Multiplication rule 2 can be extended to three or more dependent events by using the formula:
P(E₁ ∩ E₂ ∩ E₃ ∩ ... ∩ Eₖ) = P(E₁) × P(E₂|E₁) × P(E₃|E₁ ∩ E₂) × ... × P(Eₖ|E₁ ∩ E₂ ∩ ... ∩ Eₖ₋₁)

##### Example 5

A jar contains 3 red, 5 green, 2 blue and 6 yellow marbles. Three marbles are drawn one after the other. Find the probability of getting a green marble on the first draw, a yellow marble on the second draw and a red marble on the third draw; if
a. each marble is drawn, but then is replaced back before the next draw
b. the marbles are drawn without replacement

**Solution**
Let E₁ = getting green in the first draw,
E₂ = getting yellow in the second draw,
E₃ = getting red in the third draw

a. The marbles are replaced after each draw. The events are independent.
P(E₁ ∩ E₂ ∩ E₃) = P(E₁) × P(E₂) × P(E₃) = (5/16) × (6/16) × (3/16) = 90/4096 = 45/2048

b. The marbles are not replaced after each draw. The events are dependent.
P(E₁ ∩ E₂ ∩ E₃) = P(E₁) × P(E₂|E₁) × P(E₃|(E₁ ∩ E₂)) = (5/16) × (6/15) × (3/14) = 90/3360 = 3/112

### Exercise 8.24

1. If 2 cards are selected from a standard deck of 52 cards without replacement, find these probabilities:
   a. Both are spades
   b. Both are the same suit
   c. Both are kings

2. Three cards are drawn from an ordinary deck and not replaced. Find the probability of these events:
   a. Getting 3 jacks
   b. Getting an ace, a king, and a queen in order
   c. Getting a club, a spade, and a heart in order
   d. Getting 3 clubs

### Sequential Events

In the previous section, you saw how to determine probability of independent or dependent events using multiplication rules of probability. It is also possible to show events that are sequential using tree diagrams and tables, and calculate probabilities from these.

#### Example 6

A fair coin is tossed three times. Find the probability that all outcomes will be heads.

**Solution**
Using the multiplication rule: P(HHH) = P(H) × P(H) × P(H) = 1/2 × 1/2 × 1/2 = 1/8

You can use a tree diagram and/or table to show the possible outcomes:

**Using tree diagram:**
[Description: A tree diagram showing three levels of coin tosses, each branch splitting into H or T, resulting in 8 possible outcomes: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT]

Therefore, the probability that all outcomes are head is 1/8.

### Exercise 8.25

1. A fair die is rolled three times. Find the probability that all outcomes will be 6 dots.

2. If 2 cards are selected from a standard deck of 52 cards without replacement, find these probabilities:
   a. Both are Aces
   b. Both are hearts

## 8.8 Real-life Application of Probability

Probability theory is widely used in the area of studies such as statistics, finance, insurance policy, traffic signals, medical decisions, and weather forecasting. Now you will discuss real-life applications involving probability as follows.

### Example 1

A traffic light at a certain road crossing starts green at 06:30 hours and continues to be green till 06:32 hours and again turns green at 06:36 hours and continues green till 06:38 hours. This cycle is repeated throughout the day. If a person's arrival time at this crossing is random and uniform over the interval 18:20 to 18:35 hours, then find the probability that he has to wait the signal.

**Solution**
In every 6 minutes, the light remains green for 2 minutes and red for 4 minutes. So in the interval, 18:20 hours-18:35 hours; i.e., 15 minutes, the light will remain green for (2/6) × 15 = 5 minutes and red for 10 minutes. Thus, the probability that he has to wait at the signal = 10/15 = 2/3 ≈ 67%.

### Example 2

The source of federal government revenue for a specific year is 50% from individual income taxes, 32% from social insurance payroll taxes, 10% from corporate income taxes, 3% from excise taxes and 5% from other. If a revenue source is selected at random, what is the probability that it comes from individual or corporate income taxes?

**Solution**
P(revenue comes from individual or corporate income taxes) = P(revenue comes from individual) + P(revenue comes from corporate income taxes) = 0.5 + 0.1 = 0.60.

### Example 3

On New Year's Eve, the probability of a person driving while intoxicated is 0.32, the probability of a person having a driving accident is 0.09, and the probability of a person having a driving accident while intoxicated is 0.06. What is the probability of a person driving while intoxicated or having a driving accident?

**Solution**
P(intoxicated or accident) = P(intoxicated) + P(accident) - P(intoxicated and accident) = 0.32 + 0.09 - 0.06 = 0.35

### Exercise 8.26

1. If the probability that a person lives in an industrialized country of the world is 2/5, find the probability that a person does not live in an industrialized country.

2. The top-10 selling computer software titles last year consisted of 3 for doing taxes, 5 antivirus or security programs, and 2 "other." Choose one title at random:
   a. What is the probability that it is not used for doing taxes?
   b. What is the probability that it is used for taxes or is one of the "other" programs?

3. In a group of 40 people, 10 are healthy and every person of the remaining 30 has either high blood pressure, a high level of cholesterol or both.
   a. If 15 have high blood pressure and 25 have high level of cholesterol, how many people have blood pressure and a high level of cholesterol?
   b. If a person is selected randomly from this group, what is the probability that he/she:
      i) has high blood pressure only?
      ii) has high level of cholesterol only?
      iii) has high blood pressure and high level of cholesterol?
      iv) has either high pressure or high level of cholesterol?

## Problem Solving

1. A company screens job applications for illegal drug use at a certain stage in their hiring process. The specific test they use has a false positive rate of 2% and a false negative rate of 1%. Suppose that 5% of all their applicants are actually using illegal drugs and we randomly select an applicant. Given the applicant tests positive, what is the probability that they are actually on drugs?

2. A problem is given to three students D, E, F whose respective chances of solving it are 1/2, 1/3, and 1/4 respectively. What is the probability that the problem is solved?

3. Three bags contain 3 red, 7 black; 8 red, 2 black; and 4 red and 6 black balls respectively. One of the bags is selected at random and a ball is drawn from it. If the ball drawn is red, find the probability of that it is drawn from the third bag.

4. A bag contains 20 marbles of equal size of which 12 are red, x is blue and the rest are white.
   a. If the probability of selecting a blue marble is 1/4, find x
   b. A marble is drawn and then replaced. A second marble is drawn. Find the probability that neither marble is red

## Summary

1. **Addition Principle of counting**: If an operation can be performed in m different ways and another operation can occur in n different ways and the two operations are mutually exclusive, (the performance of one excludes the other) then either of the two can be performed in m + n ways.

2. **Multiplication Principle of counting**: If an event can occur in m different ways and for every such choice another event can occur in n different ways, then both events can occur in the given order in m × n different ways.

3. If n is a natural number, then n factorial, denoted by n! is defined by n! = n × (n - 1) × (n - 2) × ... × 2 × 1 (0! = 1)

4. **Permutations** are the number of arrangements of n objects taking r of them at a time, and denoted by nPr or P(n,r) where nPr = n!/(n-r)! where 0 < r ≤ n.

5. The number of combinations of n things taking r at a time is given by:
   nCr = n!/[(n-r)! × r!]

6. **The Binomial Theorem** (a + b)ⁿ = (n choose 0)aⁿ + (n choose 1)aⁿ⁻¹b + (n choose 2)aⁿ⁻²b² + ... + (n choose r)aⁿ⁻ʳbʳ + ... + (n choose n)bⁿ

7. **Probability of an event** is defined as follows:
   If an experiment results in n equally likely outcomes and m < n is the number of the ways favourable for event E, then P(E) = m/n.

8. **Addition rule of probability**:
   - Rule 1: If E₁ and E₂ are any two events, then P(E₁ ∪ E₂) = P(E₁) + P(E₂) - P(E₁ ∩ E₂)
   - Rule 2: If two events are mutually exclusive; (i.e., E₁ ∩ E₂ = ∅) then P(E₁ ∩ E₂) = ∅ so that P(E₁ ∪ E₂) = P(E₁) + P(E₂)

9. **Multiplication rule of probability**:
   - Rule 1: When two events are independent, the probability of both occurring, denoted by P(E and E₂) or P(E₁ ∩ E₂) or P(E₁E₂) is given by P(E₁ ∩ E₂) = P(E₁)·P(E₂)
   - Rule 2: When two events are dependent, the probability of both occurring is given by:
     P(E₁ ∩ E₂) = P(E₁)·P(E₂|E₁), whenever P(E₁) ≠ 0
     = P(E₂)·P(E₁|E₂) whenever P(E₂) ≠ 0

## Review Exercise

1. A student can choose a computer project from one of three lists. The three lists contain 23, 15 and 19 possible projects, respectively. No project is on more than one list. How many possible projects are there to choose from?

2. Compute each of the following:
   a. 8P₂
   b. 12P₁₀
   c. 8C₂
   d. 12C₁₀

3. A committee of 7 students has to be formed from 9 boys and 5 girls. In how many ways can this be done when the committee contains:
   a. exactly three girls?
   b. at least three girls?
   c. 2 girls and 5 boys?

4. 7 boys and 6 girls are to be seated around a table. Find the number of ways that this can be done in each of the following cases:
   a. there is no restriction
   b. no girls are adjacent
   c. all girls form a single block
   d. a particular girl G is adjacent to two particular B and B₂

5. A bag contains 6 red, 5 blue, and 4 yellow balls. 2 balls are drawn, but the first ball is drawn without replacement. Find the following:
   a. P(blue, then red)
   b. P(red, then red)
   c. P(yellow, then red)

6. In a pack of 52 cards, a card is drawn at random without replacement. Find the probability of drawing a queen followed by a jack.

7. Suppose that a group of 15 students contain eight boys (B) and seven girls (G). If two students are chosen randomly without replacement, find the probability that the two students chosen are both boys using multiplication rule?