---
permalink: /physics/mechanical-equilibrium-practice-sol/
author_profile: false
title: "Practice with Mechanical Equilibrium (Solutions)"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

<div class="notice--danger">
<p style="font-size:13pt">The following solutions are for the problems on mechanical equilibrium practice <a href="/physics/mechanical-equilibrium-practice/index.html">here</a>. I encourage you to attempt them by yourself first before looking through the solutions.</p>
</div>

> ## Example 1: Two Masses on an Inclined Plane

<div class="notice--info">
<p style="font-size:13pt"><em>This problem is adapted from Caltech's Ph1a course.</em></p>
<p style="font-size:13pt">Upon an inclined plane of angle $\theta$ is placed a block of mass $m_2$. Upon $m_2$ is placed another block of mass $m_1$. The coefficient of static friction between $m_2$ and the inclined plane is $\mu_{2s}$ and the coefficient of sliding friction is $\mu_{2k}$. Likewise, the coefficient of static friction between $m_1$ and $m_2$ is $\mu_{1s}$ and the coefficient of sliding friction is $\mu_{1k}$. A force $F$ upward and parallel to the plane is applied to $m_2$.</p>
<p style="text-align:center"><img src="/assets/images/mech-practice-1.png" alt="practice-1" height="60%" width="60%"></p>
<ol>
  <li style="font-size:13pt">What is the acceleration of $m_2$ when $m_1$ just starts to slip on it?</li>
  <li style="font-size:13pt">What is the maximum value of $F$ before this slipping takes place?</li>
</ol>
</div>

In any of these mechanical equilibrium problems, remember that the initial step is almost always the same: **draw force diagrams and set $\sum \vec{F}=0$**. Here, we can draw the force diagrams for both masses $m_1$ and $m_2$:

![practice-1-force-diagram](/assets/images/mech-practice-1-fd.png){:height="80%" width="80%"}

This diagram is complicated, so we'll explain all of the forces we need to account for:

  1. Force of gravity. We denote the force of gravity on $m_1$ as $$\vec{F}_{1g}$$ and on $m_2$ as $$\vec{F}_{2g}$$.
  2. The applied force on $m_2$, which we denote as $\vec{F}$.
  3. The normal force on $m_2$ due to the inclined plane, denoted as $$\vec{N}_2$$. We also have the normal force on $m_2$ due to the presence of $m_1$, denoted as $\vec{N}_{12}$.
  4. By Newton's third law, there is also a normal force on $m_1$ from $m_2$, denoted as $$\vec{N}_{21}=-\vec{N}_{12}$$.
  5. The friction force on $m_2$ due to the inclined plane, denoted as $\vec{F}_{2f}$.
  6. The friction force on $m_2$ due to $m_1$, denoted as $\vec{F}_{12f}$. By Newton's third law, there is also a friction force on $m_1$ due to $m_2$, denoted as $$\vec{F}_{21f}=-\vec{F}_{12f}$$.

After accounting for all of the forces, we can write the force balance laws for both of the masses in both the $x$ and $y$ directions:

  1. $$F_{21f}-m_1g\sin\theta=m_1a$$ and $$N_{21}-m_1g\cos\theta=0$$.
  2. $$F_{2f}+F-F_{12f}-m_2g\sin\theta=m_2a$$ and $$N_2-N_{12}-F_{2g}\cos\theta=0$$.

Notice that for two block, we did not set the right hand side of the $\hat{x}$-direction force balance equation equal to zero. This is because as hinted in the problem, we are assuming that both blocks are accelerating up the ramp with magnitude $a$, and we want to find the maximum value of $a$ such that they are both sliding up with this acceleration.

To answer the first question, we'll consider the first pair of equations. The equilibrium condition in the $\hat{y}$ direction gives us

$$N_{21}=m_1g\cos\theta$$

To utilize the second equation, we need to understand what is happening. As the acceleration $a$ increases in magnitude on the right hand side, there must be a corresponding increase in the force of friction $F_{21f}$, since $m_1g\sin\theta$ is a constant and cannot change. However, at a certain point, we reach the maximum force of static friction

$$F_{21f, \text{max}}=\mu_{1s}N_{21}=\mu_{1s}m_1g\cos\theta$$

such that if the acceleration increases beyond this point, the block must begin to slip because we can't provide sufficient static friction to "match" the amount of acceleration. Therefore, the equation that allows us to solve for $a$ is

$$\mu_{1s}m_1g\cos\theta-m_1g\sin\theta=m_1a$$

Dividing both sides by $m_1$ gives

<div class="notice--success">
<p style="font-size:13pt">$$a=g(\mu_{1s}\cos\theta-\sin\theta)$$</p>
</div>

To answer the second part of the question, we can use the equation for the Newton's second law in the $\hat{x}$-direction for the second block that we found above:

$$F_{2f}+F-F_{12f}-m_2g\sin\theta=m_2a$$

Again, thinking about what is happening in this situation, we know from our work in the first part of the problem that there is an upper limit on the value of $a$, and so therefore, there is also an upper limit on the left hand side. Everything on the left hand side is a constant except for $F$. By Newton's 3rd Law, we know that $F_{12f}=\mu_{1s}m_1g\cos\theta$, and $F_{2f}=\mu_{2k}N_2=\mu_{2k}(m_1+m_2)g\cos\theta$. Therefore, solving for $F$ gives

<p style="font-size:12pt">$$F=m_2g(\mu_{1s}\cos\theta-\sin\theta)-\mu_{2k}(m_1+m_2)g\cos\theta+\mu_{1s}m_1g\cos\theta+m_2g\sin\theta$$</p>

After some (pretty intense) algebraic simplification, we arrive at the result

<div class="notice--success">
<p style="font-size:13pt">$$F=(m_1+m_2)g(\mu_{1s}-\mu_{2k})\cos\theta$$</p>
</div>

> ## Example 2: A Hanging Rope

<div class="notice--info">
<p style="font-size:13pt"><em>This problem is adapted from Caltech's Ph1a course.</em></p>
<p style="font-size:13pt">A rope of length $2l$ and uniform density (<em>here: mass per unit length</em>) $\rho$ is hanging over a nail in a wall with a piece of length $l$ on both sides. Friction, the thickness of the nail, and the thickness of the rope are negligible. When one creates a slight length difference between the two sides, a net force will start to act on the rope, and it will slide off the nail, faster and faster.</p>
<ol>
  <li style="font-size:13pt">When the length on one side is $l+x$ (with $0 < x < l$), what is the net force on the rope?</li>
  <li style="font-size:13pt">Find the velocity as a function of $x$. <em>Hint: make use of $\frac{dv}{dt}=\frac{dv}{dx}\frac{dx}{dt}$.</em> What is the velocity when the rope completely comes off the nail?</li>
</ol>
</div>

When both sides of the rope are the same length, then our physical intuition tells us that the rope is in mechanical equilibrium. This is because the gravitational force is equal on both sides of the rope. What happens when the length on one side is $l+x$? The gravitational force on this side is $F_{>}=mg=\rho(l+x)g$. Meanwhile, the gravitational force on the other side is $F_{<}=mg=\rho(l-x)g$. Therefore, the magnitude of the net downwards force on the rope is

<div class="notice--success">
<p style="font-size:13pt">$$F_{\text{net}}=F_{>}-F_{<}=\rho(l+x)g-\rho(l-x)g=2\rho xg$$</p>
</div>

This answer the first question. The mass of the entire rope is $2\rho l$, meaning that the acceleration of the rope due to this force is $a=\frac{dv}{dt}=\frac{xg}{l}$. At this point, we can make the educated guess that $v=\frac{dx}{dt}=x\sqrt{g/l}$, which that $\frac{dv}{dx}=\sqrt{g/l}$. Plugging this into the hint gives us the expected result, allowing us to conclude that the velocity of the rope as a function of $x$ is given by

<div class="notice--success">
<p style="font-size:13pt">$$\vec{v}=-x\sqrt{\frac{g}{l}}\hat{y}$$</p>
</div>

and so the velocity $$\vec{v}_{\max}$$ when the rope completely comes off at $x=l$ is 

<div class="notice--success">
<p style="font-size:13pt">$$\vec{v}_{\text{max}}=-\hat{y}\sqrt{gl}\hat{y}$$</p>
</div>

> ## Example 3: Pulley on an Inclined Plane

<div class="notice--info">
<p style="font-size:13pt">Two blocks of mass $m$ and $M$ are connected via pulley with a configuration shown below:</p>
<p style="text-align:center"><img src="/assets/images/mech-practice-3.png" alt="mech-practice-3" height="60%" width="60%"></p>
<p style="font-size:13pt">The coefficient of static friction is $\mu_s$ between the block and surface. What is the minimum and maximum mass $M$ so that no sliding occurs?</p>
</div>

Again, let's refer back to our problem-solving algorithm from Problem 1. First, let's draw the force diagrams for both of the masses:

<p style="text-align:center"><img src="/assets/images/mech-practice-3-fd.png" alt="mech-practice-3-fd" height="60%" width="60%"></p>

From [last time](/physics/pulleys/index.html), we know that the pulley gives us that equal magnitude of acceleration and also equal force. This means that $T_M=T_m$ and the acceleration magnitudes are the same. We can then write down the mechanical equilibrium force balance laws for mass $M$, given that we have $mg-T_m=mg-T_M=0$ for mass $m$ (we set the net force equal to zero because we want the mass $m$ to be in mechanical equilibrium):

  1. $T_M+F_f-Mg\sin\theta=mg+\mu_sN-Mg\sin\theta=0$
  2. $N-Mg\cos\theta=0$

Again, note that we set the net force in both the $\hat{x}$ and $\hat{y}$ directions equal to zero because mass $M$ should also be in mechanical equilibrium. The second equation tells us that $N=Mg\cos\theta$, and so plugging this into the first equation and using $T_M-mg=0$ gives us

$$mg+\mu_sMg\cos\theta-Mg\sin\theta=0$$

Therefore, we can conclude that

$$M=\frac{m}{\sin\theta-\mu_s\cos\theta}$$

This represents our first bound on $M$. Notice that in this diagram, the force of friction is in the $+\hat{x}$ direction. Intuitively, this occurs when the mass $M$ is so massive that it has the "desire" to slide down the ramp, even with the extra force of being tethered to mass $m$. $M$ could be very light and therefore be pulled upwards by the mass $m$ as well. In this case, the force of friction would run in the opposite direction, giving us the following force diagrams:

<p style="text-align:center"><img src="/assets/images/mech-practice-3-fd-2.png" alt="mech-practice-3-fd-2" height="60%" width="60%"></p>

This changes our $\hat{x}$ equilibrium equation to $T_m-\mu_sN-Mg\sin\theta=0$, and after plugging in $N=Mg\cos\theta$ once more, $M=\frac{m}{\sin\theta+\mu_s\cos\theta}$. Therefore, our range of possible $M$ values before the block begins to slip is

<div class="notice--success">
<p style="font-size:13pt">$$\frac{m}{\sin\theta+\mu_s\cos\theta}< M <\frac{m}{\sin\theta-\mu_s\cos\theta}$$</p>
</div>

> ## Example 4: Pulley on an Inclined Plane (Again)

<div class="notice--info">
<p style="font-size:13pt"><em>This problem is adapted from <a href="https://www.real-world-physics-problems.com/pulley-problems.html">this link</a>.</em></p>
<p style="font-size:13pt">A block of mass $M$ is pulled using a pulley at constant velocity along a surface inclined at angle $\theta$. The coefficient of kinetic friction is $\mu_k$, between block and surface. Determine the pulling force $F$.</p>
<p style="text-align:center"><img src="/assets/images/mech-practice-4.png" alt="practice-4" height="70%" width="70%"></p>
</div>

Because we know that forces are distributed uniformly along a single rope in a pulley setup, the tension in the rope that is holding the mass $M$ up from falling down the inclined plane is equal to the applied force in terms of magnitude. Therefore, we can draw the following force diagram for the mass $M$ moving at constant velocity:

![mech-equ-5-sol.png](/assets/images/mech-equ-5-sol.png){: height="50%" width="50%" .align-center}

This is assuming that the mass is moving _up_ the inclined plane and not down the incline plane. Because the mass is moving at constant velocity, the net force on the mass must be zero. Therefore, the force balance equation in the $\hat{y}$ direction gives us

$$N-Mg\cos\theta=0\longrightarrow N=Mg\cos\theta$$

The force balance equation in the $\hat{x}$ direction gives us

$$F-\mu_kN-Mg\sin\theta=0$$

Plugging in our expression for $N$ from above gives

$$F-\mu_kMg\cos\theta-Mg\sin\theta=0$$

Solving for the magnitude of the pulling force gives

<div class="notice--success">
<p style="font-size:13pt">$$F=Mg(\mu_k\cos\theta+\sin\theta)$$</p>
</div>

> ## Example 5: Two Pulleys

<div class="notice--info">
<p style="font-size:13pt"><em>This problem is adapted from <a href="https://www.real-world-physics-problems.com/pulley-problems.html">this link</a>.</em></p>
<p style="font-size:13pt">A block of mass $m$ is lifted at constant velocity using the two pulleys shown.</p>
<p style="text-align:center"><img src="/assets/images/mech-practice-5.png" alt="practice-5" height="30%" width="30%"></p>
<p style="font-size:13pt">Determine the magnitude of the pulling force $F$. Ignore the mass of the pulleys.</p>
</div>

Constant velocity means that the mass $m$ is not accelerating, which also means that the net force acting on the block is zero. Because there is only a single rope in this pulley system, this means that the pulling force $F$ is constant throughout the length of the pulley. If we consider the force balance equation for Pulley $B$,

$$T+T-mg=0\longrightarrow 2T=mg$$

Simplifying this equation gives us that magnitude of the tension in the rope $T=\frac{1}{2}mg$. Since the pulling force must have the same magnitude as the tension in the rope, we have

<div class="notice--success">
<p style="font-size:13pt">$$F=\frac{mg}{2}$$</p>
</div>
