# Unit 6: Electronic and Electric Circuit

## Introduction

### Learning outcomes: Students will be able to:

- Calculate the electric field resulting from a point charge.
- Determine the magnitude and direction of the electric force among any point charges.
- Acquire knowledge and understanding in electrostatic phenomenon demonstrate an understanding of the components and functions of electrical circuits that are commonly found at home and in the workplace.
- Construct, analyze, simple electrical circuits, using schematic diagrams, working with electrical tools and components, and examining small everyday electrical devices and appliances.
- Define a capacitor and explain some of its applications in life.
- Apply Kirchhoff's rules to solve circuit problems.

---

## 6.1 Coulomb's Law

### By the end of this section, you will be able to:

- State Coulomb's law.
- Calculate the magnitude and direction of electric force between any two charges.
- Solve problems involving Coulomb's law.
- Explain Coulomb's law using the idea of vectors.
- Explain the meaning of a Coulomb.

### Brainstorming Questions

1. What are the compositions of an atom?
2. What are the two types of charges and what are their origin?
3. How can a body be charged positively and negatively?
4. What does the law of electrostatics say?

### Properties of Electric Charges

**Property I:** There are two types of charges - positive and negative.

**Property II:** Like charges repel each other while unlike charges attract each other.

**Property III:** Electric charge is always conserved, i.e., it cannot be created or destroyed. In any charging process, the number of electrons gained by one object is equal to the number of electrons lost by the other.

**Property IV:** Electric charge is quantized. Charge comes in discrete packets, it means that charge (q) always occurs as some integral multiple of the charge of an electron e. It can be written as: q = ±ne (where n = 1, 2, 3, ...)

$$1e = -1.6 \times 10^{-19} C$$

$$1p = +1.6 \times 10^{-19} C$$

#### Example 6.1

What number of protons needed to make a charge of +1.0 C?

$$n = \frac{q}{e} = \frac{1.0 C}{1.6 \times 10^{-19} C} = 6.25 \times 10^{18} \text{ protons}$$

Similarly, the number of electrons needed to make a charge of -1.0 C is $6.25 \times 10^{18}$ electrons.

#### Exercise 6.1

(a) How many electrons are needed to form a charge of -2.0 nC?
(b) How many electrons must be removed from a neutral object to leave a net charge of +0.50 μC?

### Electrostatic Force

The electrostatic force between two point charges q₁ and q₂ separated by a distance r is given by Coulomb's Law:

$$F = k \frac{q_1 q_2}{r^2} = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2}$$

Where $\varepsilon_0$ is the permittivity of free space: $\varepsilon_0 = 8.85 \times 10^{-12} C^2/N \cdot m^2$

And k is the Coulomb constant: 
$$k = \frac{1}{4\pi\varepsilon_0} = \frac{1}{4\pi \times 8.85 \times 10^{-12}} = 9.0 \times 10^9 N \cdot m^2/C^2$$

#### Example 6.2

Two tiny spherical water drops with identical charges of -1.0 × 10⁻¹⁰ C have a center-to-center separation of 1.0 cm.

a) What is the electrostatic force acting between them?
b) How many excess electrons are on each drop giving it its charge imbalance?

**Solution:**

Given: $q_1 = q_2 = -1.0 \times 10^{-10} C$, $r = 1.0 \text{ cm} = 0.01 \text{ m}$

a) Using Coulomb's Law:
$$F = k \frac{|q_1||q_2|}{r^2} = 9 \times 10^9 \frac{(1.0 \times 10^{-10})^2}{(0.01)^2} = 9 \times 10^{-9} N$$

Since both charges are negative, the force is repulsive.

b) Number of excess electrons:
$$n = \frac{q}{e} = \frac{1.0 \times 10^{-10} C}{1.6 \times 10^{-19} C} = 6.25 \times 10^8$$

This means $6.25 \times 10^8$ electrons give this charge imbalance.

#### Exercise 6.2

1. What are the similarities and differences between Newton's law of universal gravitation and Coulomb's law?
2. Which force is greater between an electron and a proton, the gravitational or the electrostatic? By how much is one larger than the other?

#### Activity 6.2

Take a balloon or plastic comb and rub against your hair. Then take it near a stream of water falling from a tap. Discuss and try to explain what you observe.

#### Activity 6.3

A positively charged light metal ball is suspended between two oppositely charged metal plates on an insulating thread. Describe the motion that the ball undergoes.

### Force on a Charge due to Multiple Electric Charges

When multiple charges act on a test charge, the net force is the vector sum of individual forces (Principle of Superposition):

$$\vec{F}_{net} = \vec{F}_{12} + \vec{F}_{13} + \vec{F}_{14} + ... + \vec{F}_{1n}$$

#### Example 6.3

Three point charges are placed on the x-axis:
- $q_1 = +6 \mu C$ at $x_1 = 5.0$ cm
- $q_2 = -5 \mu C$ at $x_2 = -3.0$ cm
- $q_3 = +2 \mu C$ at the origin $(x = 0)$

What is the magnitude and direction of the total electrostatic force acting on $q_3$?

**Solution:**

First, determine the magnitude of each force using Coulomb's Law:

Force from $q_1$ on $q_3$ (distance = 5 cm):
$$F_{13} = k \frac{q_1 q_3}{r_{13}^2} = 9.0 \times 10^9 \frac{(6 \times 10^{-6})(2 \times 10^{-6})}{(0.05)^2} = 43.2 N$$

Force from $q_2$ on $q_3$ (distance = 3 cm):
$$F_{23} = k \frac{|q_2| q_3}{r_{23}^2} = 9.0 \times 10^9 \frac{(5 \times 10^{-6})(2 \times 10^{-6})}{(0.03)^2} = 100.0 N$$

Since q₁ is positive, it repels q₃ (force to the left): $\vec{F}_{13} = -43.2 N \hat{i}$
Since q₂ is negative, it attracts q₃ (force to the left): $\vec{F}_{23} = -100.0 N \hat{i}$

Net force:
$$\vec{F}_{net} = \vec{F}_{13} + \vec{F}_{23} = -143.2 N \hat{i}$$

The total force on $q_3$ is 143.2 N directed to the left.

#### Exercise 6.3

Referring to Example 6.3, determine the magnitude and direction of the total electrostatic force acting on (a) $q_1$, and (b) $q_2$.

### Review Questions 6.1

1. State Coulomb's law in your own words.
2. Write Coulomb's law mathematically both in scalar and vector form.
3. What is the meaning of a Coulomb?
4. Two charges +3 μC and +12 μC are fixed 1 m apart, with the second one to the right. Find the magnitude and direction of the net force on a -2 μC charge when placed halfway between the two.
5. Two small, identical conducting spheres repel each other with a force of 0.050 N when they are 0.25 m apart. After a conducting wire is connected between the spheres and then removed, they repel each other with a force of 0.060 N. What is the original charge on each sphere?
6. In the picture below, X is a small negatively charged sphere with a mass of 1.0 kg. It is suspended from the roof by an insulating rope which makes an angle of 60 degrees with the roof. Y is a small positively charged sphere which has the same magnitude of charge as X. Y is fixed to the wall by means of an insulating bracket. Assuming the system is in equilibrium, what is the electrostatic force between them?

---

## 6.2 Electric Fields

### By the end of this section, you will be able to:

- Define the terms electric field and electric flux.
- Sketch electric field lines.
- Solve problems involving electric field.
- Map electric field lines pattern using electric lines of force.
- Calculate the magnitude and direction of electric field due to a point charge and two point charges.

### Brainstorming Questions

1. What is a gravitational field?
2. What causes gravitational field?
3. Discuss the concepts and recall the equations of:
   a) Gravitational field lines
   b) Gravitational field strength

### Electric Field lines

An electric field is a region in space where a charge experiences an electrostatic force. The electric field strength E at a point is defined as the force per unit positive charge:

$$\vec{E} = \frac{\vec{F}}{q}$$

For a point charge Q at distance r:
$$E = k \frac{Q}{r^2}$$

#### Properties of Electric Field lines

1. Electric field lines do not cross each other.
2. Electric field lines begin on positive charges and radiate away from them toward negative charges, where they terminate.
3. Electric field lines are always perpendicular to the surface of the charged body.
4. The closer the lines, the stronger the electric field, and the farther apart they are the weaker is the field.
5. Equally spaced electric field lines indicate the field is uniform. The electric field between two parallel plates is a common example of a uniform electric field.

#### Activity 6.4

1. Form a group containing 3 or 4 members. Discuss in your group on the mechanism to investigate the nature of electric field lines between two similar and opposite charges.
2. What would happen when (a) a conductor and (b) an insulator is placed in an electric field?

### The Electric Field strength

The electric field strength (E) is defined as:
$$\vec{E} = \frac{\vec{F}}{q}$$

For a point charge Q at distance r:
$$E = k \frac{Q}{r^2}$$

#### Example 6.4

Calculate the strength and direction of the electric field E due to a point charge of 2.0 nC at a distance of 5.0 mm from the charge.

**Solution:**
$$E = k \frac{Q}{r^2} = 9.0 \times 10^9 \frac{2.0 \times 10^{-9}}{(5.0 \times 10^{-3})^2} = 7.2 \times 10^5 N/C$$

Since the source charge is positive, the field is directed away from it.

#### Exercise 6.4

What electric force would the electric field found in Example 6.4 exert on a point charge of -0.25 μC?

### Electric field for multiple point charges

For multiple point charges, the net electric field is the vector sum:
$$\vec{E}_{net} = \vec{E}_1 + \vec{E}_2 + \vec{E}_3 + ... + \vec{E}_n$$

#### Example 6.5

Two-point charges $q_1 = +5 nC$ and $q_2 = -4 nC$ are separated by a distance of 10 cm. What is the magnitude of the electric field at the midpoint between the charges?

**Solution:**

At the midpoint (P), distance from each charge = 5 cm = 0.05 m.

Field due to $q_1$:
$$E_1 = k \frac{q_1}{r_1^2} = 9 \times 10^9 \frac{5 \times 10^{-9}}{(0.05)^2} = 1.8 \times 10^4 N/C$$

Since $q_1$ is positive, it exerts a repulsive force to the right: $\vec{E}_1 = 1.8 \times 10^4 N/C \hat{i}$

Field due to $q_2$:
$$E_2 = k \frac{|q_2|}{r_2^2} = 9 \times 10^9 \frac{4 \times 10^{-9}}{(0.05)^2} = 1.44 \times 10^4 N/C$$

Since $q_2$ is negative, it exerts an attractive force to the right: $\vec{E}_2 = 1.44 \times 10^4 N/C \hat{i}$

Net field:
$$\vec{E}_{net} = (1.8 \times 10^4 + 1.44 \times 10^4) N/C \hat{i} = 3.24 \times 10^4 N/C \hat{i}$$

#### Exercise 6.5

Repeat Example 6.5 if (a) both $q_1$ and $q_2$ are positively charged, and (b) they are both negatively charged.

### Electric flux

Electric flux $\phi$ through a surface area A in a uniform electric field E is:
$$\phi = EA\cos\theta$$

where $\theta$ is the angle between the electric field and the normal to the surface.

In vector form:
$$\phi = \vec{E} \cdot \vec{A}$$

#### Example 6.6

A 2 cm × 2 cm square lies in the xy-plane in an electric field $\vec{E} = (50\hat{k} + 20\hat{j}) N/C$. Find the electric flux through the square.

**Solution:**

The area vector is perpendicular to the surface (along z-axis):
$$\vec{A} = (2 \text{ cm} \times 2 \text{ cm}) \hat{k} = 4 \text{ cm}^2 \hat{k} = 4 \times 10^{-4} m^2 \hat{k}$$

$$\phi = \vec{E} \cdot \vec{A} = (50\hat{k} + 20\hat{j}) \cdot (4 \times 10^{-4}\hat{k}) = 50 \times 4 \times 10^{-4} = 0.02 N \cdot m^2/C$$

#### Exercise 6.6

Find the electric flux through a surface with sides of 15 cm × 15 cm positioned in a uniform electric field of E = 150 N/C at an angle of 30°.

### Review Questions 6.2

1. Define the following terms:
   a) Electric field
   b) Electric field strength
2. Sketch electric field lines for different charge configurations.
3. Compare and contrast gravitational quantities with their electrical counterparts:
   A) Gravitational field and electric field
4. How field lines indicate the magnitude of the field they represent?
5. What is the net electric field strength at point P in the system shown (with charges 1.0 μC and 3.0 μC)?
6. A particle of charge $2 \times 10^{-8}$ C experiences an upward force of magnitude $4 \times 10^{-6}$ N when placed at a point in an electric field.
   a) What is the electric field at that point?
   b) If a charge $q = -1.0 \times 10^{-8}$ C is placed there, what force would it experience?

---

## 6.3 Electric Potential

### By the end of this section, you will be able to:

- Define electric potential and equipotential surface
- Solve problems involving electric potential
- Explain the meaning of a volt, potential difference, and emf

### Brainstorming Questions

- Discuss the concepts and recall the equations of:
  a) Gravitational potential
  b) Electrical potential energy and electric work
  c) Electric potential and potential difference
  d) Potential difference and electric field

### Electric Potential Energy

The work done in moving a charge q from point A to B in an electric field:
$$W = q(V_B - V_A) = q\left(k\frac{Q}{r_B} - k\frac{Q}{r_A}\right)$$

The electric potential energy between two charges:
$$U = k \frac{qQ}{r}$$

### Electric Potential

Electric potential V at a point is defined as the work done per unit charge in bringing a positive test charge from infinity to that point:

$$V = \frac{W}{q} = k \frac{Q}{r}$$

The SI unit is volt (V), where $1 V = 1 J/C$.

### Electrical Potential Difference

The potential difference between two points A and B:
$$\Delta V = \frac{W}{q}$$

In a uniform electric field:
$$\Delta V = Ed$$

#### Example 6.7

Determine the electric potential produced by a charge of 1 μC at a distance of 1 mm.

**Solution:**
$$V = \frac{kq}{r} = \frac{9 \times 10^9 \times 1 \times 10^{-6}}{1 \times 10^{-3}} = 9 \times 10^6 V$$

#### Example 6.8

Two charged particles are placed on the x-axis:
- $q_1 = +2 \mu C$ at the origin
- $q_2 = -5 \mu C$ at $x = 1.0$ m

Determine the potential at $x = 0.2$ m.

**Solution:**
$$V = k\left(\frac{q_1}{r_1} + \frac{q_2}{r_2}\right) = 9 \times 10^9 \left(\frac{2 \times 10^{-6}}{0.2} + \frac{-5 \times 10^{-6}}{0.8}\right) = 3.75 \times 10^4 V$$

#### Exercise 6.7

Referring to Example 6.8:
a) Determine the potential at $x = 1.5$ m
b) At what point between these two charges is the electric potential zero?

#### Example 6.9

Calculate the change in electrical potential energy in moving a 1 nC charge from 5 cm to 0.1 cm from a charged sphere with a charge of 1 μC.

**Solution:**
$$\Delta U = q\Delta V = kqQ\left(\frac{1}{r_B} - \frac{1}{r_A}\right) = 9 \times 10^9 \times 10^{-9} \times 10^{-6}\left(\frac{1}{0.01} - \frac{1}{0.05}\right) = 7.2 \times 10^{-4} J$$

### Equipotential line or surface

An equipotential surface is a surface where all points have the same electric potential.

**Characteristics of equipotential lines/surfaces:**

1. Two equipotential surfaces never intersect each other.
2. Equipotential lines of a uniform field are parallel; for a point charge they are concentric spheres.
3. Equipotential surfaces are crowded near the charge where the electric field is stronger.
4. No work is required to move a charge along an equipotential line.
5. Equipotential lines are always perpendicular to the electric field lines.

### Review Questions 6.3

1. Define in your own words:
   a) Electric potential
   b) Potential difference
   c) Volt
   d) Equipotential line/surface
2. If the potential is constant in a region, what is the nature of the electric field?
3. What happens to electrical potential energy when:
   a) An electron is released in a uniform electric field?
   b) A proton is released in a uniform electric field?
4. What is the strength of the electric field between two parallel conducting plates separated by 1.0 cm with a potential difference of 1.5 V?
5. Two-point charges are located on a rectangle. Determine potentials at various points.
6. At what point on the line joining two charges is the electric potential zero?
7. What are the signs and magnitudes of a point charge that produces -2.0 V at 1.0 mm?
8. Two point charges 10 pC and -2 pC are separated by 1.0 m. Find the point where potential is zero.

---

## 6.4 Electric Current, Resistance and Ohm's Law

### By the end of this section, you will be able to:

- Define electric current, current density, resistance, conductivity, resistivity and drift velocity.
- Explain the effect on current and potential difference when connecting light bulbs in series and parallel.
- Draw electric circuits with resistors in series and parallel.
- Determine equivalent resistance of resistors in series and parallel.
- Describe potentiometer and Wheatstone bridge principles.
- Convert galvanometer to voltmeter and ammeter.
- State and apply Kirchhoff's laws.
- Solve problems involving resistor networks.

### Brainstorming

- What drives current in a conductor?
- How is electron flow produced through a conductor?
- Set up a simple circuit to measure current and potential difference.

### Electric Current

Electric current (I) is the rate of flow of charge:
$$I = \frac{\Delta q}{\Delta t}$$

The SI unit is ampere (A), where $1 A = 1 C/s$.

#### Activity 6.6

Discuss what is needed to store and distribute water, comparing it with how current is distributed to resistors using a voltage source.

### Electric Current and Current Density

Current density (J) is current per unit area:
$$J = \frac{I}{A}$$

The relationship between current density and electric field:
$$J = \sigma E = \frac{E}{\rho}$$

Where $\sigma$ is conductivity and $\rho$ is resistivity (Ω·m).

### Drift Velocity

Drift velocity ($v_d$) is the average velocity of charge carriers:
$$I = nAev_d$$

Where n is charge carrier density and e is electron charge.

#### Exercise 6.9

1. Calculate the mean drift velocity of electrons in a copper wire of cross-sectional area $5.0 \times 10^{-6}$ m² carrying 1.0 A. There are $8.5 \times 10^{28}$ free electrons/m³ in copper.
2. What are the directions of: electrons, current, current density, electric field, and drift velocity?

#### Activity 6.7

Why does a bulb light instantly when a switch is turned on, even though drift speed is very slow?

### Resistance and Ohm's Law

Resistance (R) opposes current flow. Ohm's Law states:
$$V = IR$$

or
$$R = \frac{V}{I}$$

The unit of resistance is ohm (Ω), where $1 Ω = 1 V/A$.

#### Example 6.11

What is the resistance of an automobile headlight with 2.50 A current when 12.0 V is applied?

**Solution:**
$$R = \frac{V}{I} = \frac{12 V}{2.5 A} = 4.8 Ω$$

### Combination of Resistors

**Resistors in Series:**
- Same current through all resistors
- Equivalent resistance: $R_{eq} = R_1 + R_2 + R_3 + ...$
- Total voltage is sum of individual voltage drops

**Resistors in Parallel:**
- Same voltage across all resistors
- Equivalent resistance: $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + ...$
- For two resistors: $R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$

#### Example 6.12

For the circuit with resistors $R_1 = 5 Ω$, $R_2 = 4 Ω$, $R_3 = 12 Ω$, and $R_4 = 8 Ω$ connected to a 24 V source:

First combine $R_2$ and $R_3$ in parallel:
$$R_{23} = \frac{4 \times 12}{4 + 12} = 3 Ω$$

Total series resistance:
$$R_{eq} = 5 + 3 + 8 = 16 Ω$$

Current from battery:
$$I = \frac{24 V}{16 Ω} = 1.5 A$$

Voltage drops:
- $V_1 = 1.5 A \times 5 Ω = 7.5 V$
- $V_{23} = 1.5 A \times 3 Ω = 4.5 V$
- $V_4 = 1.5 A \times 8 Ω = 12 V$

Currents through parallel branches:
- $I_2 = \frac{4.5 V}{4 Ω} = 1.125 A$
- $I_3 = \frac{4.5 V}{12 Ω} = 0.375 A$

#### Exercise 6.11

1. For a given circuit, identify resistors in series and parallel.
2. Find the equivalent resistance and current through a 5 Ω resistor.

#### Activity 6.10: Virtual Experiment on DC Circuits

**Title:** Verification of the laws of combination of resistance

**Objectives:**
1. Study characteristics of resistances in series
2. Study characteristics of resistances in parallel

**Procedure:** Measure resistances, construct circuits, verify theoretical calculations.

### Measuring Instruments

**Ammeter:** Measures current, connected in series. Ideal ammeter has zero resistance.

**Voltmeter:** Measures potential difference, connected in parallel. Ideal voltmeter has infinite resistance.

#### Exercise 6.12

An ammeter with 0.5 Ω resistance is introduced into a circuit. Determine the effect on current.

#### Exercise 6.13

A voltmeter (6 V range, 50 kΩ resistance) is connected across a 20 kΩ resistor. Determine the effect on measured voltage.

### Conversion of Galvanometer

**To Ammeter:** Connect a low resistance shunt ($R_{sh}$) in parallel:
$$R_{sh} = \left(\frac{I_g}{I - I_g}\right)R_g$$

**To Voltmeter:** Connect a high resistance multiplier ($R_M$) in series:
$$R_M = \frac{V}{I_g} - R_g$$

#### Example 6.14

Convert a galvanometer (full-scale 5 mA, coil resistance 50 Ω) to a 10 A ammeter:
$$R_{sh} = \left(\frac{0.005}{10 - 0.005}\right) \times 50 = 0.025 Ω$$

Convert a galvanometer (40 Ω, 3 mA) to a 0-10 V voltmeter:
$$R_M = \frac{10}{0.003} - 40 = 1960 Ω$$

### The Potential Divider

For two resistors $R_1$ and $R_2$ in series:
$$V_{out} = V_{in} \times \frac{R_2}{R_1 + R_2}$$

### Potentiometer

A potentiometer measures unknown emf by comparing it with a known emf using a uniform resistance wire.

**To measure emf of cell X:**
$$E_X = \frac{AY}{AB} \times E_0$$

where AY is the balancing length for cell X and AB is the total length for driver cell emf $E_0$.

### Wheatstone Bridge

Used to measure unknown resistance. At balance condition:
$$\frac{R_1}{R_2} = \frac{R_3}{R_4}$$

#### Example 6.15

Find the value of R in a Wheatstone bridge for no current in the 50 Ω galvanometer:
Given: $R_1 = 10 Ω$, $R_2 = R$, $R_3 = 20 Ω$, $R_4 = 40 Ω$
$$R = \frac{R_1 R_4}{R_3} = \frac{10 \times 40}{20} = 20 Ω$$

### Comparing Brightness of Bulbs

Brightness depends on power dissipated: $P = I^2R$

**In parallel:** Each bulb gets full voltage, brighter than series connection.
**In series:** Voltage divides, bulbs are dimmer.

#### Example 6.16

Bulbs in parallel glow brighter than identical bulbs in series with the same cell.

#### Example 6.17

In a circuit with bulbs A, B, and C:
- Bulb A (in series) is brightest (gets full current)
- Bulbs B and C (in parallel) share current, equally bright but dimmer than A

#### Exercise 6.15

What happens to brightness if bulb D is added in parallel to B and C?

### Kirchhoff's Rules

**First Rule (Junction Rule):** The algebraic sum of currents at any junction is zero:
$$\sum I = 0$$

**Second Rule (Loop Rule):** The algebraic sum of potential differences around any closed loop is zero:
$$\sum \Delta V = 0$$

#### Example 6.18

Find currents $I_1$, $I_2$, and $I_3$ in a multi-loop circuit.

Using junction rule: $I_1 + I_2 = I_3$
Using loop rules for two independent loops and solving simultaneously yields the currents.

### Review Questions 6.4

1. Define: electric current, current density, resistance, conductivity, resistivity, drift velocity
2. SI units for all electrical quantities
3. What is one ohm?
4. Explain potentiometer working
5. Explain Wheatstone bridge use and working
6. How to convert galvanometer to ammeter and voltmeter
7. State Kirchhoff's laws
8. Battery problems with internal resistance
9. Circuit analysis problems

---

## 6.6 Capacitors and Capacitance

### By the end of this section, you will be able to:

- Define capacitors, capacitance, dielectric
- Explain effect of inserting dielectric
- Solve parallel-plate capacitor problems
- Calculate equivalent capacitance for series and parallel combinations

### Brainstorming

1. What is the function of a capacitor?
2. How is a capacitor charged?
3. Mention devices using capacitors

### Capacitor and Capacitance

A capacitor stores charge and energy consisting of two isolated conductors (plates) with charges +Q and -Q.

Capacitance is defined as:
$$C = \frac{Q}{V}$$

Units: farad (F), where $1 F = 1 C/V$

Practical units: μF, nF, pF

### Parallel-plate Capacitor

For plates of area A separated by distance d:
$$C = \varepsilon_0 \frac{A}{d}$$

With dielectric of constant k:
$$C = k\varepsilon_0 \frac{A}{d}$$

#### Example 6.19

Parallel-plate capacitor with A = 200 cm², d = 2 mm, mica dielectric (k = 6), V = 12 V:
$$C = 6 \times 8.85 \times 10^{-12} \frac{2 \times 10^{-2}}{2 \times 10^{-3}} = 5.31 \times 10^{-10} F$$
$$Q = CV = 5.31 \times 10^{-10} \times 12 = 6.37 \times 10^{-9} C = 6.37 nC$$

### Dielectrics

A dielectric is an insulating material (glass, mica, plastic) inserted between plates.

**Effects on isolated capacitor:**
- Capacitance increases (C = kC₀)
- Potential difference decreases
- Charge remains constant
- Electric field decreases

**Effects on connected capacitor:**
- Capacitance increases
- Potential difference remains constant (connected to source)
- Charge increases (Q = CV)
- Electric field remains constant

**Dielectric strength** is the maximum electric field a dielectric can withstand before breakdown.

#### Example 6.20

When dielectric is inserted in an isolated capacitor:
a) Capacitance increases
b) Potential difference decreases
c) Charge remains the same
d) Electric field decreases

### Combination of Capacitors

**Parallel Combination:**
- Same voltage across all capacitors
- Equivalent capacitance: $C_{eq} = C_1 + C_2 + C_3 + ...$

**Series Combination:**
- Same charge on all capacitors
- Equivalent capacitance: $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} + ...$

#### Exercise 6.19

Identify series, parallel, or neither connection for given capacitor circuits.

#### Exercise 6.20

For a network of capacitors (3 μF, 4 μF, 6 μF connected to 200 V):
a) Find equivalent capacitance
b) Charge on each capacitor
c) Voltage across each capacitor

### Review Questions 6.5

1. Define capacitors, capacitance, dielectric
2. Factors affecting capacitance
3. Effects of inserting dielectric on various quantities
4. Design considerations for large capacitance
5. Circuit analysis problems

---

## 6.7 Electric Circuits in Our Surroundings

### Household Electric Installations

**Activity:** Visit the National Science Museum in Addis Ababa to learn about smart house electrical installations.

### Color Code of Resistors

Resistors use color bands to indicate value and tolerance:
- Band A: First digit
- Band B: Second digit
- Band C: Multiplier
- Band D: Tolerance

**Example:** Green (5), Blue (6), Yellow (10⁴), Silver (±10%):
Value = $56 \times 10^4 Ω = 560 kΩ \pm 10\%$

#### Activity 6.20

Given resistor colors: green, blue, yellow, silver. Value = $56 \times 10^4 Ω = 560 kΩ \pm 10\%$

#### Activity 6.21

Project: Collect used electronic components and read their values using color codes.

---

## Unit Summary

- Electric charges are quantized (multiples of e = 1.6×10⁻¹⁹ C)
- Two types: positive and negative. Like repel, unlike attract
- Coulomb's Law: $F = k\frac{q_1 q_2}{r^2}$
- Electric field: $E = \frac{F}{q} = k\frac{Q}{r^2}$
- Field lines begin on positive, end on negative charges
- Resistors in series: $R_{eq} = R_1 + R_2 + R_3 + ...$
- Resistors in parallel: $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ...$
- Ohm's Law: $V = IR$
- Capacitors store charge and energy: $C = \frac{Q}{V}$
- Capacitors in series: $\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + ...$
- Capacitors in parallel: $C_{eq} = C_1 + C_2 + C_3 + ...$
- Kirchhoff's Rules: Junction and Loop rules

---

## End of Unit Questions

1. If two charges separated by distance d have force F, what is the new force when separation is 2d?
2. What is the source of an electric field?
3. Which cannot be a unit of electric field: V/m, N/C, or N·C?
4. When resistors are in series, which property changes: length, thickness, or resistivity?
5. When resistors are in parallel, which property changes?
6. Calculate force between $-5 \mu C$ and $+2 \mu C$ charges 4 cm apart. Is it attractive or repulsive?
7. Electric field at each charge's location due to the other?
8. Largest and smallest resistances from 36 Ω, 50 Ω, 700 Ω?
9. Resistance of ten 75 Ω resistors in series and parallel?
10. When are bulbs brighter: series or parallel?
11. Why are heating coils made of high resistivity materials?
12. How does resistivity depend on temperature for conductors, semiconductors, superconductors?
13. Difference between emf and terminal voltage?
14. What is internal resistance?
15. How to connect resistors for larger/smaller equivalent resistance?
16. How to connect resistors for larger current?
17. Battery with unknown emf and internal resistance: solve for both given two measurements.
18. Find unknown resistor and potential difference in a circuit.
19. Determine currents through ammeters in a circuit.
20. For given circuit with 1 Ω resistors and known voltages, find all branch currents.
21. To store large energy in capacitor bank: series or parallel? Explain.
22. Find total capacitance in a network of capacitors.