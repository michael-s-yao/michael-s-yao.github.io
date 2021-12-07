---
permalink: /physics/mechanical-equilibrium-sol/
author_profile: false
title: "Mechanical Equilibrium (Solutions)"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

<div class="notice--danger">
<p style="font-size:13pt">The following solutions are for the mechanical equilibrium practice problems linked <a href="/physics/mechanical-equilibrium/index.html#exercises">here</a>. I encourage you to attempt them by yourself first before looking through the solutions.</p>
</div>

Original problems statements are highlighted in <span style="background-color:#EDF5F8"> blue </span>. Final answers are highlighted in <span style="background-color:#EDF5EC"> green </span>.

> ## Problem 1

<div class="notice--info">
<p style="font-size:13pt">Consider a single mass $m$ hanging by two massless ropes $A$ and $B$.</p>
<p style="text-align:center;"><img src="/assets/images/mech-eq-3.png" alt="mech-eq-3" height="70%" width="70%"></p>
<p style="font-size:13pt">We know that the angle made by rope $A$ from the vertical $\theta_A=\pi/4$, and the angle made by rope $B$ from the vertical $\theta_B=\pi/3$.</p>
<ol>
  <li style="font-size:13pt">Draw the force diagram for mass $m$. You should have three different forces that are all accounted for.</li>
  <li style="font-size:13pt">Write the mechanical equilibrium force condition in the $\hat{x}$ direction.</li>
  <li style="font-size:13pt">Write the mechanical equilibrium force condition in the $\hat{y}$ direction.</li>
  <li style="font-size:13pt">Solve for the magnitude of the tension in both ropes $A$ and $B$ as a function of $m$.</li>
  <li style="font-size:13pt">The maximum tension that both of the ropes can individually handle before breaking is $1000\text{ N}$. How massive of an object $m$ can be held before one (or both) of the ropes break? Assume $g=10\text{ m}\cdot\text{ sec}^{-2}$ if necessary.</li>
</ol>
</div>

> ### Part 1

The three forces that should be accounted for in this setup is the tension $\vec{T}_A$ due to rope $A$, the tension $\vec{T}_B$ due to rope $B$, and the force of gravity acting on mass $m$:

<div class="notice--success">
<p style="text-align:center;"><img src="/assets/images/mech-eq-5.png" alt="mech-eq-5" height="60%" width="60%"></p>
</div>

> ### Part 2

The net force components in the $\hat{x}$ direction must cancel in order for the system to be in mechanical equilibrium. Gravity solely acts in the $-\hat{y}$ direction, so we don't care about it here. Based on the diagram from Part 1, the $\hat{x}$ component of $\vec{T}_A$ is $-T_A\sin(\theta_A)=-T_A\sin(\pi/4)=-T_A/\sqrt{2}$, while the $\hat{x}$ component of $\vec{T}_B$ is $T_B\sin(\theta_B)=T_B\sin(\pi/3)=T_B\sqrt{3}/2$. Therefore, the mechanical equilibrium force condition in the $\hat{x}$ direction is given by

<div class="notice--success">
<p style="font-size:13pt">$$\frac{T_B\sqrt{3}}{2}-\frac{T_A}{\sqrt{2}}=0$$</p>
</div>

> ### Part 3

The net force components in the $\hat{y}$ direction must cancel in order for the system to be in mechanical equilibrium. Gravity solely acts in the $-\hat{y}$ direction with magnitude $mg$. Based on the diagram from Part 1, the $\hat{y}$ component of $\vec{T}_A$ is $T_A\cos(\theta_A)=T_A\cos(\pi/4)=T_A/\sqrt{2}$, while the $\hat{y}$ component of $\vec{T}_B$ is $T_B\cos(\theta_B)=T_B\cos(\pi/3)=T_B/2$. Therefore, the mechanical equilibrium force condition in the $\hat{y}$ direction is given by

<div class="notice--success">
<p style="font-size:13pt">$$\frac{T_A}{\sqrt{2}}+\frac{T_B}{2}-mg=0$$</p>
</div>

> ### Part 4

We have a system of equations using the results from Parts 2 and 3 above to solve for $T_A$ and $T_B$, the magnitude of the tensions in the two respective ropes. Adding the two equations gives

$$\frac{T_B\sqrt{3}}{2}+\frac{T_B}{2}-mg=0\longrightarrow T_B\frac{1+\sqrt{3}}{2}=mg \longrightarrow T_B=\frac{2mg}{1+\sqrt{3}}$$

From the equation in Part 2 above, we know that $$T_A=T_B\sqrt{3}/\sqrt{2}$$, and so collectively, we have

<div class="notice--success">
<p style="font-size:13pt">$$T_A=\frac{mg\sqrt{6}}{1+\sqrt{3}}, \quad T_B=\frac{2mg}{1+\sqrt{3}}$$</p>
</div>

> ### Part 5

Comparing the expressions for $T_A$ and $T_B$ that we found in Part 4, above, we know that $T_A\geq T_B$ always, and so $T_A$ will be the first rope to break. Let's denote the maximum allowed mass as $m_{\text{max}}$. Using the fact that the maximum tension in the rope is $1000\text{ N}$, we have

$$1000\text{ N}=\frac{m_{\text{max}}\left(10\text{ m}\cdot\text{sec}^{-2}\right)\sqrt{6}}{1+\sqrt{3}}$$

Solving for $m_{\text{max}}$ numerically gives

<div class="notice--success">
<p style="font-size:13pt">$$m_{\text{max}}=\frac{100(1+\sqrt{3})}{\sqrt{6}}\text{ kg}\approx 111.5\text{ kg}$$</p>
</div>

> ## Problem 2

<div class="notice--info">
<p style="font-size:13pt">Consider a very strong man trying to push a block up a <em>frictionless</em> incline plane.</p>
<p style="text-align:center;"><img src="/assets/images/mech-eq-4.png" alt="mech-eq-4" height="70%" width="70%"></p>
<p style="font-size:13pt">Answer the following questions:</p>
<ol>
  <li style="font-size:13pt">Draw the force diagram for mass $m$. You should have three different forces that are all accounted for. <em>Take care in choosing your coordinate system.</em></li>
  <li style="font-size:13pt">Write the mechanical equilibrium force condition in the $\hat{x}$ direction.</li>
  <li style="font-size:13pt">Write the mechanical equilibrium force condition in the $\hat{y}$ direction.</li>
  <li style="font-size:13pt">Solve for the normal force and force from the man required to keep the block not moving.</li>
  <li style="font-size:13pt">The man is very strong and can push with a maximum force of $200\text{ N}$. Assuming that $g=10\text{ m}\cdot\text{ sec}^{-2}$ and $m=50\text{ kg}$, what is the maximum angle $\theta$ of the incline plane that can be achieved before the man is crushed?</li>
</ol>
</div>

> ### Part 1

The three forces that should be accounted for in this setup is the applied force $\vec{F}$ by the man, the force of gravity $\vec{F}_g$ with magnitude $mg$ acting on the mass $m$, and the normal force $N$ from the inclined plane to support the mass. Note our choice in the slanted coordinate system.

<div class="notice--success">
<p style="text-align:center;"><img src="/assets/images/mech-eq-6.png" alt="mech-eq-6" height="60%" width="60%"></p>
</div>

> ### Part 2

The net force components in the $\hat{x}$ direction must cancel in order for the system to be in mechanical equilibrium. The normal force solely acts in the $\hat{y}$ direction, so we don't care about it here. Based on the diagram from Part 1, the $\hat{x}$ component of $\vec{F}$ is simply $F$ (since it is _only_ acting in the $\hat{x}$ direction) and the $\hat{x}$ component of the gravitational force is $-mg\sin\theta$. Therefore, the mechanical equilibrium force condition in the $\hat{x}$ direction is given by

<div class="notice--success">
<p style="font-size:13pt">$$F-mg\sin\theta=0$$</p>
</div>

> ### Part 3

The net force components in the $\hat{y}$ direction must cancel in order for the system to be in mechanical equilibrium. The applied force \vec{F} solely acts in the $\hat{x}$ direction, so we don't care about it here. Based on the diagram from Part 1, the $\hat{y}$ component of $N$ is simply $N$ (since it is _only_ acting in the $\hat{y}$ direction), while the $\hat{y}$ component of the gravitational force is $-mg\cos\theta$. Therefore, the mechanical equilibrium force condition in the $\hat{y}$ direction is given by

<div class="notice--success">
<p style="font-size:13pt">$$N-mg\cos\theta=0$$</p>
</div>

> ### Part 4

We have a system of equations using the results from Parts 2 and 3 above to solve for magnitudes of the normal force and the applied force ($N$ and $F$, respectively). Solving each of the equations gives

<div class="notice--success">
<p style="font-size:13pt">$$F=mg\sin\theta, \quad N=mg\cos\theta$$</p>
</div>

> ### Part 5

From Part 4, we know that the force that the man applies is $F=mg\sin\theta$. In order to determine the maximum angle $\theta_{\text{max}}$ before the man is crushed, we can plug in the maximum force that can be applied in addition to the given values of $m$ and $g$ into the equation.

$$200\text{ N}=(50\text{ kg})\cdot(10\text{ m}\cdot\text{sec}^{-2})\cdot\sin\theta_{\text{max}}\longrightarrow \sin\theta_{\text{max}}=\frac{200\text{ N}}{500\text{ N}}=\frac{2}{5}$$

Solving for $\theta_{\text{max}}$ numerically gives

<div class="notice--success">
<p style="font-size:13pt">$$\theta_{\text{max}}=\arcsin\left(\frac{2}{5}\right)\approx0.412\text{ rad}\approx 23.6^{\circ}$$</p>
</div>

> ## Problem 3

<div class="notice--info">
<p style="font-size:13pt">Repeat parts 1 through 4 of Problem 2, but this time, do not work in a slanted coordinate system. Confirm that the magnitude of both the normal force and force required by the man are the same as those you calculated in Problem 2. This validates our ability to work in whatever rotated coordinate system is most convenient to us.</p>
</div>

> ### Part 1

This time, our force diagram still includes the same three forces of applied force, gravity, and normal force, but our coordinate system is now different.

<div class="notice--success">
<p style="text-align:center;"><img src="/assets/images/mech-eq-7.png" alt="mech-eq-7" height="60%" width="60%"></p>
</div>

> ### Part 2

The net force components in the $\hat{x}$ direction must cancel in order for the system to be in mechanical equilibrium. Gravity solely acts in the $-\hat{y}$ direction, so we don't care about it here. Based on the diagram from Part 1, the $\hat{x}$ component of $\vec{N}$ is $-N\sin\theta$, while the $\hat{x}$ component of the applied force $\vec{F}$ is $F\cos\theta$. Therefore, the mechanical equilibrium force condition in the $\hat{x}$ direction is given by

<div class="notice--success">
<p style="font-size:13pt">$$F\cos\theta-N\sin\theta=0$$</p>
</div>

> ### Part 3

The net force components in the $\hat{y}$ direction must cancel in order for the system to be in mechanical equilibrium. Gravity solely acts in the $-\hat{y}$ direction with magnitude $mg$. Based on the diagram from Part 1, the $\hat{y}$ component of $\vec{N}$ is $N\cos\theta$, while the $\hat{y}$ component of the applied force $\vec{F}$ is $F\sin\theta$. Therefore, the mechanical equilibrium force condition in the $\hat{y}$ direction is given by

<div class="notice--success">
<p style="font-size:13pt">$$F\sin\theta+N\cos\theta-mg=0$$</p>
</div>

> ### Part 4

Based on the equation from Part 2, we know that $F\cos\theta=N\sin\theta$, and so $F=N\tan\theta$. Substituting this result into the equation from Part 3 gives

$$(N\tan\theta)\sin\theta+N\cos\theta=mg\longrightarrow N\frac{\sin^2\theta}{\cos\theta}+N\cos\theta=mg$$

Let's multiply both sides of this equation by $\cos\theta$, and use the identity that $\sin^2\theta+\cos^2\theta=1$:

$$N\sin^2\theta+N\cos^2\theta=mg\cos\theta \longrightarrow N=mg\cos\theta$$

We know that $F=N\tan\theta$, and so $F=mg\cos\theta\tan\theta=mg\sin\theta$. Therefore, we can conclude that

<div class="notice--success">
<p style="font-size:13pt">$$F=mg\sin\theta, \quad N=mg\cos\theta$$</p>
</div>

This agrees with the result from [Problem 2](/physics/mechanical-equilibrium-sol/index.html#part-4-1) above, validating our ability to work in whatever rotated coordinate system is most convenient.

> ### Part 5

<div class="notice--success">
<p style="font-size:13pt">There are no new calculations to be done here. The solution is shown in the solution for Problem 2 <a href="/physics/mechanical-equilibrium-sol/index.html#part-5-1">above</a>.</p>
</div> 
