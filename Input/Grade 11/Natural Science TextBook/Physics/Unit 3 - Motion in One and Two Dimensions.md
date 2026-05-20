# Unit 3: Motion in One and Two Dimensions

## Learning Outcomes

Students will be able to:
- Gain an understanding of the fundamental principles of kinematics in one and two dimensions.
- Develop skills in applying equations of motions to solve practical problems.
- Recognize the effect of air resistance and force of gravity on motion of a body.
- Describe technological advances related to motion; and identify the effects of societal influences on transportation and safety.

---

## 3.1 Uniformly Accelerated Motion in 1D

### By the end of this section, you will be able to:
- Explain a uniformly accelerated motion in 1D.
- Explain the difference between average velocity and instantaneous velocity.
- Solve problems involving average velocity, instantaneous velocity and acceleration.

### Brainstorming

After revising what you have learnt in grades 9 and 10 about motion in a straight line and uniformly accelerated motion, discuss about the following questions in groups:

1. Explain the relationship between:
   - Position and displacement
   - Distance and displacement
   - Distance and speed
   - Displacement and velocity
   - Average velocity and instantaneous velocity
2. When do we say an object is accelerating?

### Acceleration

Acceleration is the rate of change of velocity. It is a vector quantity, with a unit of m/s².

**Key term:** Acceleration is the rate of change of velocity. It is a vector quantity, with a unit of m/s².

### Example 3.1

If the speed of a certain car is increased from rest to 20 m/s in 6 seconds, what is the average acceleration of the car?

**Solution:**

We have:
- v₀ = 0 at t₀ = 0
- v_f = 20 m/s at t_f = 6 s

Average acceleration = (v_f - v₀)/(t_f - t₀) = (20 m/s - 0)/(6 s - 0) = 3.33 m/s²

### Instantaneous acceleration

Instantaneous acceleration is the acceleration at a specific instant in time. It is determined by taking the limit as the time interval approaches zero.

a = lim(Δt→0) Δv/Δt

### Example 3.2

The velocity of a particle that moves along a straight line varies as a function of time with a velocity equation as: v(t) = t² - 2t. Find the acceleration of the particle at t = 2 s.

**Solution:**

To find the acceleration at t = 2 s, we first find the acceleration at any time t:

a(t) = dv/dt = d/dt(t² - 2t) = 2t - 2

At t = 2 s: a(2) = 2(2) - 2 = 2 m/s²

### Motion with Constant Acceleration

For motion with constant acceleration, the average velocity is given by:
v_avg = (v_i + v_f)/2

### Exercise

A Cheetah is the fastest land animal. It could run up to 120 km/h. Starting from rest, a Cheetah can reach a speed of 96.6 km/h in only three seconds. What is its:
(a) average acceleration?
(b) average velocity in these 3 seconds?

### Experiment: Activity

**Objective:** To determine the acceleration of a ball/wooden block/trolley/tin can by rolling or sliding it down a slight inclined plane.

**Apparatus and Materials:**
- Ball/wooden block/trolley/tin can
- Ramp
- Meter stick
- Electronic stopwatch
- Ticker-timer with power supply unit
- Ticker-tape
- Sellotape

**Ramp Construction:** For the ramp you can use any flat, level object such as a board or a cardboard box. It should be at least 1.25 meters long.

### Procedure:
1. Measure distance d along the ramp with arbitrary starting point.
2. Set up the ramp with h = 0.10 m above the table.
3. Starting with the ball/wooden block/trolley at rest, use the stopwatch to measure the time to roll distance d.
4. Take 6 time measurements, record in data table. Cross out the highest and lowest times and determine the average of the remaining four times.
5. Repeat steps 2-4 for distances of 1.8 m, 1.6 m, 1.4 m, 1.2 m, and 1.0 m.
6. Using a cell-phone, record the video of the motion and use it for plotting s vs. t, v vs. t and a vs. t graphs.

### Data Analysis:
Using the formula: a = 2d/t²
1. Draw a graph of distance versus average time squared for your data (d vs. t²)
2. Determine the slope of the best fit line.
3. The value of acceleration is twice the slope.
4. Analyze the data using spreadsheet (Microsoft Excel).
5. Draw distance vs. time, velocity vs. time and acceleration vs. time graphs.

### Review Questions 3.1

1. State the conditions in which an object is said to speed up and slow down.
2. What is the relationship between acceleration and deceleration?
3. A car driver accelerates her car by 1.4 m/s², starting from rest.
   (a) How long does it take her to reach a speed of 2.0 m/s?
   (b) If she then brakes to a stop in 0.8 seconds, what is her deceleration?
4. A particle is in motion and is accelerating. The velocity of the motion as a function of time is given by: v(t) = 20t - 5t² m/s. Find:
   (a) The functional form of the acceleration
   (b) The instantaneous velocity at t = 3 s
   (c) The time at which the instantaneous velocity becomes zero

---

## 3.2 Equations of Uniformly Accelerated Motion in 1D

### By the end of this section, you will be able to:
- Derive and apply the equations of uniformly accelerated motion in 1D.
- Solve various problems of uniformly accelerated motion in 1D.

### Derivation of equations of motion:

Let:
- v_i = initial velocity
- v_f = final velocity
- t = time for the acceleration
- a = acceleration
- s = displacement

**Equation 1:** v_f = v_i + at

**Equation 2:** s = (v_i + v_f)/2 × t

**Equation 3:** s = v_i t + ½ a t²

**Equation 4:** s = v_f t - ½ a t²

**Equation 5:** v_f² = v_i² + 2as

### Table 3.1: Kinematics equations for uniformly accelerated motion

| Equation | Missing quantity |
|----------|------------------|
| v_f = v_i + at | Displacement (s) |
| v_avg = (v_i + v_f)/2 | Displacement (s), acceleration (a), and time (t) |
| s = (v_i + v_f)/2 × t | Acceleration (a) |
| s = v_i t + ½ a t² | Final velocity (v_f) |
| s = v_f t - ½ a t² | Initial velocity (v_i) |
| v_f² = v_i² + 2as | Time (t) |

### Example 3.3

A car accelerates uniformly from rest to a speed of 72 km/h in 8.0 s.
(a) Find the acceleration of the car.
(b) Find the distance the car travels.
(c) If the car brakes to a stop over a distance of 50 m, then find its uniform deceleration.

**Solution:**
- v_i = 0, v_f = 72 km/h = 20 m/s, t = 8.0 s

(a) a = (v_f - v_i)/t = (20 - 0)/8 = 2.5 m/s²

(b) s = v_i t + ½ a t² = 0 + ½(2.5)(8²) = 80 m

(c) a = (v_f² - v_i²)/(2s) = (0 - 20²)/(2 × 50) = -400/100 = -4 m/s²

### Example 3.4

An Ethiopian Airlines Boeing airplane lands on one of the Bole international airport runways with an initial velocity of 40.0 m/s and then decelerates at 1.50 m/s².
(a) What length of runway will it need?
(b) For how long will it move on the runway?

**Solution:**
- v_i = 40 m/s, a = -1.5 m/s², v_f = 0

Stopping distance: s = (v_f² - v_i²)/(2a) = (0 - 40²)/(2 × -1.5) = 533.3 m
Time to stop: t = (v_f - v_i)/a = (0 - 40)/(-1.5) = 26.67 s

### Determining the stopping distance of a vehicle

**What is stopping distance?**
Stopping distance is the total distance required to bring a vehicle to a complete halt. It depends on:
- Speed of the vehicle
- Weight of the vehicle
- Road conditions (slick, icy, snow, dry, wet)
- Vehicle brake conditions
- Braking technology
- Tire conditions

**Braking distance formula:**
Braking distance = v²/(2μg)
where μ is the coefficient of friction between tires and road.

**Stopping distance = Reaction distance + Braking distance**
- Reaction distance = v × t_reaction
- Braking distance = v²/(2μg)

### Activity

1. Discuss in group about the meanings of the traffic signs shown in the figure and the consequences if one misses them.
2. Discuss about the main causes of car accidents in your area, and ways to reduce accidents.

### Review Questions

1. Derive the five kinematic equations.
2. It is found experimentally that, if a street surface is dry, a good driver can safely decelerate an automobile with reasonably good tires at the rate of about 4.57 m/s². So, for a car moving at 60 km/h what should be the minimum distance between two cars so they won't crash during a sudden stop?
3. A driver of a vehicle traveling at 30 m/s on a motorway brakes sharply to a standstill in a distance of 100 m. Calculate the deceleration.
4. A motorist traveling at 18 m/s approaches traffic lights. When he is 30 m from the stop line, they turn red. It takes 0.7 s before he can react by applying the brakes. The car slows down at a rate of 4.6 m/s². How far from the stop line will he come to rest and on which side?
5. The driver of a train traveling at 40 m/s applies brakes as the train enters a station. The train slows down at 2 m/s². The platform is 400 m long. Will the train stop in time?
6. Derive the equation for the distance covered in the nth second.

---

## 3.3 Graphical Representation of Uniformly Accelerated Motion in 1D

### By the end of this section, you will be able to:
- Graphically represent position-time, displacement-time, velocity-time, and acceleration-time graphs of uniformly accelerated motion in 1D.
- Interpret graphs of velocity vs. time, displacement vs. time, and acceleration vs. time.
- Draw graphs from kinematic equations.
- Determine velocity from slope of displacement-time graph and acceleration from slope of velocity-time graph.
- Determine displacement from area under velocity-time graph.

### 3.3.1 Displacement-Time Graphs

**The slope of displacement-time graph:**
Slope = (vertical increase)/(horizontal increase) = (x₂ - x₁)/(t₂ - t₁)

The slope gives the velocity.

**Displacement-time graph for uniform motion:**
- A straight line with constant slope
- Equation: s = vt (constant velocity)

**Displacement-time graph for uniformly accelerated motion:**
- A parabolic curve
- Equation: s = ½ a t² (starting from rest)

**Displacement-time graph for uniformly decelerated motion:**
- A parabola opening downward

### Interpreting displacement-time graphs:
- Flat line (slope = 0): object at rest
- Upward straight line: constant velocity
- Upward curved line: acceleration
- Downward curved line: deceleration

### Example 3.5

Draw the displacement-time graph of a ball thrown directly upwards and caught when it returns.

**Solution:**
- Immediately after leaving hand: velocity is positive and large → steep positive slope
- As ball rises: velocity decreases → slope decreases
- At maximum height: velocity zero → slope zero
- As ball descends: velocity negative → slope negative
- The slope represents constant acceleration due to gravity (-9.8 m/s²)

### Exercise 3.2

For the motion of a ball thrown vertically upward whose displacement-time graph is shown, draw its distance-time graph.

### Velocity-Time Graph

**The slope of velocity-time graph:**
Slope = Δv/Δt

The slope gives the acceleration.

**Key principles:**
- Slope of displacement-time graph gives average velocity
- Slope of velocity-time graph gives acceleration
- Area under velocity-time curve gives displacement

### Example 3.6

Draw the velocity-time graph of a ball thrown directly upwards and caught when it returns.

**Solution:**
The velocity decreases from initial positive value to zero at maximum height, then increases in negative direction as it falls.

### Exercise 3.5

Draw:
(a) Distance vs. time graph
(b) Speed vs. time graph
of a ball thrown vertically upward and returning to the thrower's hand.

### Acceleration-Time Graph

For uniformly accelerated motion, acceleration-time graph is a horizontal line (constant acceleration).

### Example 3.7

A car starts from rest and accelerates at 2.0 m/s² for 5 seconds, then maintains its speed for 4 seconds. It then applies brakes and stops within 2 seconds. Then it moves at constant speed of 15 m/s in opposite direction until it reaches starting point.

**(a)** Determine the position of the car for each interval.
**(b)** Draw displacement vs. time, velocity vs. time, and acceleration vs. time graphs.
**(c)** From velocity-time graph, show that total displacement is zero.

**Solution:**

**Interval 1 (0-5 s):** Acceleration from rest
- v_f = v_i + at = 0 + (2.0)(5) = 10 m/s
- s₁ = ½ a t² = ½ (2)(5²) = 25 m

**Interval 2 (5-9 s):** Constant speed
- s₂ = v × t = 10 × 4 = 40 m
- Position at end: x₂ = 25 + 40 = 65 m

**Interval 3 (9-11 s):** Braking to stop
- a = (0 - 10)/2 = -5.0 m/s²
- s₃ = (v_f² - v_i²)/(2a) = (0 - 100)/(-10) = 10 m
- Position at end: x₃ = 65 + 10 = 75 m

**Interval 4:** Moves back at 15 m/s to starting point
- Time to return: t = Δx/v = (0 - 75)/(-15) = 5 s

**Graphs:** The displacement-time graph shows parabolic, linear, inverted parabolic, and negative slope sections. The velocity-time graph shows triangular and rectangular areas that sum to zero net displacement.

### Activity 3.4: Phet Simulation for Motion Graphs

**Learning Objectives:** Examine velocity-time graphs and compare them to position-time graphs.

**Procedure:** Use the PhET simulation "Moving Man" at https://phet.colorado.edu/en/simulation/legacy/moving-man

---

## 3.4 Vertical Motion

### By the end of this section, you will be able to:
- Describe what vertical motion is.
- Solve various problems of vertical motion.
- Describe the motion of objects in free fall.
- Calculate time, position and velocity of an object under vertical motion.
- Solve problems related to objects thrown vertically upwards, downwards, and freely falling bodies.

### Freely Falling Bodies

When things move vertically either up or down under the force of gravity alone, the resulting motion is called free fall. The acceleration of a freely falling body is constant and is known as acceleration due to gravity, denoted by g (approximately 9.8 m/s² or 10 m/s²).

**Equations of freely falling bodies:**
1. v = u + gt
2. y = ut + ½ gt²
3. v² = u² + 2gy

For upward motion:
- v = u - gt
- y = ut - ½ gt²
- v² = u² - 2gy

**Key term:** Free fall is motion under the influence of gravity alone.

### Example 3.8

Consider a particle projected vertically upwards with initial velocity v₀ = 20 m/s from the top of a 15 m building. How long does it take to reach:
A) Level A (initial point)
B) Level B (5 m above initial point)
C) Level C (5 m below initial point)
D) Level D (building bottom)

**Solution:**
A) At level A (y = 0): 0 = 20t - 5t² → t = 0 or 4 s
B) At level B (y = +5 m): 5 = 20t - 5t² → 5t² - 20t + 5 = 0
C) At level C (y = -5 m): -5 = 20t - 5t² → 5t² - 20t - 5 = 0 → t = 4.24 s (positive root)

### Exercise 3.6

A ball is thrown vertically upwards with velocity 10 m/s from a balcony 15 m above the ground (g = 10 m/s²). Find:
(a) Time to hit the ground
(b) Velocity when it hits the ground

**Solution:**
Using y = ut - ½ gt² with y = -15 m:
-15 = 10t - 5t² → t² - 2t - 3 = 0 → t = 3 s
Final velocity: v = u - gt = 10 - 10(3) = -20 m/s

### Experiment: Measurement of acceleration due to gravity (g)

**Objectives:**
1. Understand free fall and conditions under which it occurs.
2. Determine the value of g.
3. Correlate motion to graphical descriptions.
4. Understand that g is independent of mass.
5. Test hypothesis that acceleration of freely falling object is uniform.

**Apparatus:** Millisecond timer, power supply, metal ball, trapdoor

**Procedure:**
1. Set up apparatus with electromagnet holding steel ball.
2. When switch is turned off, ball falls and timer starts.
3. When ball hits trapdoor, timer stops.
4. Measure distance h and time t.
5. Repeat for different heights.
6. Calculate g using: g = 2h/t²

**Data Analysis:** Plot h vs. t² graph; g = 2 × slope.

### Activity 3.6

Drop two balls of different mass (basketball and tennis ball) from the same height. Which will hit the ground first?

### Terminal Velocity

**Key term:** Terminal velocity is the maximum velocity of a freely falling body where its velocity no longer increases, or the acceleration becomes zero. This occurs when air resistance equals the object's weight.

**Activity:** Assume a raindrop falls from 450 m. If drag force were absent, what would be its velocity on reaching Earth? Discuss the effect on living things.

### Galileo Galilei and the Motion of Objects

**Activity 3.8: Calculating Reaction Time**

Reaction time is the time a person takes to observe, think, and act. You can measure it using a meter ruler.

**Materials:** Two people (dropper and catcher), meter ruler.

**Procedure:** Dropper holds ruler vertically. Catcher holds fingers at zero mark. When dropped, catcher catches it as quickly as possible. Use: t = √(2d/g) where d is distance fallen.

**Reaction Distance = Reaction Time × Speed**

### Activity 3.9: Project Work

Form groups of 4-5 students. Research and compare Aristotle's, Galileo's, and Newton's views of motion.

### Review Questions

1. Describe the motion of freely falling bodies.
2. A ball is thrown vertically upward with velocity 20 m/s from a building 25 m high.
   (a) How high will it rise?
   (b) How long to hit the ground?
3. A ball dropped from 10 m rebounds to 2.5 m. If contact time is 0.01 s, what is average acceleration during contact?
4. A stone thrown vertically downward at 10 m/s into a well. How long to reach water 60 m below?

---

## 3.5 Uniform Circular Motion

### By the end of this section, you will be able to:
- Define uniform circular motion.
- Calculate angular and tangential displacement, velocity, and centripetal acceleration.
- Explain uniform circular motion in horizontal plane.
- Identify the force required for circular motion.

### Brainstorming Questions
1. When do we say an object is accelerating?
2. Can an object accelerate if moving with constant speed?
3. Mention an example where an object accelerates due to change in direction without change in speed.

### Uniform Circular Motion

Uniform circular motion is a circular motion with constant speed but continuously changing direction.

### Angular and Tangential Displacement

- **Angular displacement (θ):** The angle swept by the rotating object, measured in radians.
- **Tangential displacement (s):** Distance covered along the curved path.

**Relationship:** θ = s/r

**Key terms:**
- Angular displacement is the angle swept by the rotating object.
- Tangential displacement is the tangential distance on the circumference.

**Note:** 1 revolution = 2π radians = 360°

### Angular Velocity and Tangential Velocity

**Angular velocity (ω):** Rate of change of angular displacement.
ω = Δθ/Δt (units: rad/s)

**Tangential velocity (v_t):** v_t = s/t = 2πr/T = ωr

**Key term:** Centripetal acceleration is acceleration in circular motion caused by change in direction of velocity, always directed toward the center.

### Example 3.9

If angular velocity of a wheel is 40 rad/s and wheel diameter is 60 cm, determine the tangential velocity.

**Solution:**
- r = 30 cm = 0.3 m
- v_t = ωr = 40 × 0.3 = 12 m/s

### Centripetal Acceleration

a_c = v²/r = ω²r

### Example 3.10

An automobile moves at constant speed 50.4 km/h around a circular track of diameter 40 m.
(a) What is the angular speed?
(b) What is the period?

**Solution:**
- v = 14 m/s, r = 20 m
(a) ω = v/r = 14/20 = 0.7 rad/s
(b) T = 2πr/v = (2π × 20)/14 = 8.97 s

### Exercise 3.7

By how much would centripetal acceleration change if car speed changes from 30 km/h to 90 km/h?

### Centripetal Force

F_c = m × a_c = m v²/r

### Example 3.11

A 100 g ball is whirled in horizontal circle of radius 40 cm. What maximum speed can it travel if rod breaking strength is 50 N?

**Solution:**
- m = 0.1 kg, r = 0.4 m, F = 50 N
- v = √(Fr/m) = √(50 × 0.4/0.1) = 14.14 m/s

### Centripetal Force Applications

### Example 3.12

(a) Calculate centripetal acceleration of point 7.50 cm from axis of centrifuge spinning at 7.5 × 10⁴ rev/min.
(b) Determine ratio to acceleration due to gravity.

**Solution:**
- r = 0.075 m
- ω = 7.5 × 10⁴ rev/min = 7854 rad/s
- v = ωr = 589 m/s
- a_c = v²/r = 4.63 × 10⁶ m/s²
- Ratio a_c/g = 4.72 × 10⁵

### Activity 3.10

Form groups of 3-5 students and discuss:
1. Real-life examples of circular motion.
2. Cases where centripetal acceleration effect could be larger.

### Uniform Circular Motion in Horizontal Plane

### Example 3.13

A string can withstand tension of 25 N. What is greatest speed for 1 kg mass whirled horizontally with string length 1 m?

**Solution:**
- T = 25 N, m = 1 kg, r = 1 m
- v = √(Tr/m) = √(25 × 1/1) = 5 m/s

### Activity 3.11

Discuss causes of cars skidding out of roundabouts and suggest remedies.

### Example 3.14

Find maximum safe speed for car on curve of radius 40 m with μ = 0.7 (g = 10 m/s²).

**Solution:**
- Centripetal force provided by friction: μmg = mv²/r
- v = √(μgr) = √(0.7 × 10 × 40) = 16.73 m/s

### The Conical Pendulum

For a conical pendulum with angle θ:
- T sinθ = mv²/r (horizontal component)
- T cosθ = mg (vertical component)
- tanθ = v²/(rg)

### Motion of Car Round a Banked Road

For a banked road at angle θ:
- N sinθ = mv²/r
- N cosθ = mg
- tanθ = v²/(rg)
- Ideal speed: v = √(rg tanθ)

### Exercise 3.9

Calculate maximum safe speed on banked curve of radius 30 m at 30° (g = 9.8 m/s²).

**Solution:**
- v = √(rg tanθ) = √(30 × 9.8 × tan30°) = √(30 × 9.8 × 0.577) = 13.0 m/s

### Review Questions

1. What is uniform circular motion?
2. Define centripetal acceleration and force.
3. What is direction of centripetal acceleration?
4. How can body accelerate with constant speed?
5. For body on Earth's equator (R = 6400 km), find:
   (a) Tangential velocity
   (b) Angular velocity
   (c) Centripetal acceleration
6. Bicycle wheel radius 40 cm, speed 20 km/h. Find period and angular velocity.
7. Find banking angle for railway track radius 1500 m with max speed 15 m/s. If track width is 1.8 m, find elevation of outer track.

---

## Summary

- **Acceleration** is rate of change of velocity (vector, units m/s²).
- **Average acceleration:** a_avg = (v_f - v_i)/Δt
- **Instantaneous acceleration:** a = lim(Δt→0) Δv/Δt
- **Uniformly accelerated motion:** velocity changes by equal amounts in equal time intervals.

**Equations of motion:**
- v_f = v_i + at
- s = v_i t + ½ a t²
- v_avg = (v_i + v_f)/2
- s = v_f t - ½ a t²
- v_f² = v_i² + 2as
- Braking distance = v²/(2μg)
- Stopping distance = reaction distance + braking distance = vt + v²/(2μg)

**Graphs:**
- Displacement-time graph slope gives velocity.
- Velocity-time graph slope gives acceleration; area gives displacement.
- Acceleration-time graph shows how acceleration varies.

**Free fall:** Motion under gravity alone with constant acceleration g.
- v = u + gt
- y = ut + ½ gt²
- v² = u² + 2gy

**Terminal velocity:** Maximum velocity when air resistance equals weight (zero acceleration).

**Uniform circular motion:** Constant speed but changing direction.
- Angular displacement: θ = s/r
- Angular velocity: ω = Δθ/Δt
- Tangential velocity: v_t = ωr = 2πr/T
- Centripetal acceleration: a_c = v²/r = ω²r
- Centripetal force: F_c = m v²/r

---

## End of Unit Questions

1. Which pair cannot both be constant and non-zero?
   A. Speed and velocity
   B. Magnitude of acceleration and acceleration
   C. Total distance and displacement
   D. Velocity and acceleration

2. Can an object have variable speed but constant velocity? Explain.
3. Can an object have constant speed but variable velocity? Explain.
4. What is motion in one and two dimensions? Give examples.
5. Can displacement be greater than distance? Give reason.
6. Can velocity direction change with constant acceleration? Explain with example.
7. Can a body accelerate without speeding up or slowing down? Give example.
8. A girl walks 1 km North in 15 min, then 200 m Southwest in 160 s. Find her average velocity.
9. A bullet is accelerated at average rate 6.2 × 10⁵ m/s² in 1.05 × 10⁻³ s. What is muzzle velocity?
10. A car accelerates from rest at 2.40 m/s² for 12.0 s entering express road.
    (a) Sketch situation
    (b) List knowns
    (c) Distance traveled
    (d) Final velocity
11. Particle moving at 25 m/s slows uniformly at 2 m/s². In 10 s, find:
    (a) Acceleration
    (b) Final velocity
    (c) Distance
12. At green light, automobile accelerates at 5.0 m/s² while truck passes at constant 10 m/s.
    (a) Where does automobile overtake truck?
    (b) How fast is automobile then?
13. Describe motion in each interval of given velocity-time graph.
14. Car starts from rest, accelerates at 2.5 m/s² for 10 s, maintains speed 5 s, decelerates at 0.5 m/s² to rest. Find total time and distance. Draw position-time and velocity-time graphs.
15. Motorbike specification: "Accelerates to 100 km/h from rest in 4 s."
    (a) Maximum average acceleration?
    (b) Distance traveled?
16. Commercial Bank of Ethiopia headquarters (198 m). If helmet dropped from roof:
    (a) Time to reach ground?
    (b) Minimum initial velocity to throw it back up?
    (c) Can human achieve this?
17. Stone strikes ground at 25 m/s.
    (a) From what height?
    (b) Falling time?
    (c) If thrown down at 10 m/s from same height, speed before impact?
18. Calculate building height if ball takes 4.0 s to reach ground when thrown up at 8.0 m/s from top.
19. Kangaroo jumps vertically 2.5 m high.
    (a) Initial vertical speed?
    (b) Time in air on level ground?
20. Particle in circle radius 0.5 m at constant speed 10 m/s. Find acceleration magnitude.
21. 0.525 kg ball on 1.25 m string swings at 2.00 rev/s, nearly horizontal. Find tension.
22. 0.525 kg ball on 1.25 m string at 30° from vertical. Find centripetal force and ball speed.