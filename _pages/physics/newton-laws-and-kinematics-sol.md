---
permalink: /physics/newton-laws-and-kinematics-sol/
author_profile: false
title: "Newton's Laws and Kinematic Equations (Solutions)"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

<div class="notice--danger">
<p style="font-size:13pt">The following solutions are for the problems on introduction to physics, Newton's Laws, and kinematic equations linked <a href="/physics/newton-laws-and-kinematics/index.html#exercises">here</a>. I encourage you to attempt them by yourself first before looking through the solutions.</p>
</div>

> ## Problem 1

<div class="notice--info">
<p style="font-size:13pt">A graph of position $x$ versus time for a certain particle moving along the $x$-axis is shown here in green:</p>
<img src="/assets/images/newtons-laws-1.png" alt="newtons-laws-1" height="50%" width="50%" class="align-center">
<p style="font-size:13pt">Find the average velocity in the time intervals between...</p>
<ul>
  <li style="font-size:13pt">0 to 2 sec</li>
  <li style="font-size:13pt">0 to 4 sec</li>
  <li style="font-size:13pt">2 to 4 sec</li>
  <li style="font-size:13pt">4 to 7 sec</li>
  <li style="font-size:13pt">0 to 8 sec</li>
</ul>
</div>

To solve this problem, we use the formula for velocity $v=\frac{x_f-x_i}{t_f-t_i}$:

<div class="notice--success">
<p style="font-size:13pt"><strong>0 to 2 sec:</strong> $\quad \vec{v}_{\text{avg}}=\frac{(10-0)\text{ units}}{(2-0)\text{ sec}}\hat{x}=5\text{ units}\cdot\text{sec}^{-1}\hat{x}$</p>
<p style="font-size:13pt"><strong>0 to 4 sec:</strong> $\quad \vec{v}_{\text{avg}}=\frac{(5-0)\text{ units}}{(4-0)\text{ sec}}\hat{x}=\frac{5}{4}\text{ units}\cdot\text{sec}^{-1}\hat{x}$</p>
<p style="font-size:13pt"><strong>2 to 4 sec:</strong> $\quad \vec{v}_{\text{avg}}=\frac{(5-10)\text{ units}}{(4-2)\text{ sec}}\hat{x}=\frac{5}{2}\text{ units}\cdot\text{sec}^{-1}\left(-\hat{x}\right)$</p>
<p style="font-size:13pt"><strong>4 to 7 sec:</strong> $\quad \vec{v}_{\text{avg}}=\frac{(-5-5)\text{ units}}{(7-4)\text{ sec}}\hat{x}=\frac{10}{3}\text{ units}\cdot\text{sec}^{-1}\left(-\hat{x}\right)$</p>
<p style="font-size:13pt"><strong>0 to 8 sec:</strong> $\quad \vec{v}_{\text{avg}}=\frac{(0-0)\text{ units}}{(8-0)\text{ sec}}\hat{x}=0\text{ units}\cdot\text{sec}^{-1}\hat{x}$</p>
</div>

> ## Problem 2  

<div class="notice--info">
<p style="font-size:13pt">An electron is traveling in the $+\hat{x}$ direction at an initially constant speed of $v=2.10\times 10^7\text{ m}\cdot\text{sec}^{-1}$. The electron enters an electric field at time $t=0$ that deflects the electron by giving it a constant acceleration of $5.30\times 10^{15}\text{ m}\cdot\text{sec}^{-2}$ in the $+\hat{y}$ direction.</p>
<ol>
  <li style="font-size:13pt">How long does it take for the electron to cover a horizontal distance of $6.2\times10^{-2}\text{ m}$?</li>
  <li style="font-size:13pt">What is the vertical displacement of the electron during this time?</li>
</ol>
</div>

This problem is an example of applying kinematic equations to two dimensions. We will break up this problem into two 1-dimensional problems.

In the $\hat{x}$ direction, there is no net acceleration given in the problem, so $a_x=0$. We also have an initial speed $v_{ix}=2.10\times10^7\text{ m}\cdot\text{sec}^{-1}$ given in the problem. Therefore, if we want to know how long $t$ it takes to dover a distance of $6.2\times10^{-2}\text{ m}$ in the $\hat{x}$ direction, then we have

$$\Delta x=v_{ix}t+\frac{1}{2}a_xt^2=v_{ix}t\longrightarrow t=\frac{\Delta x}{v_{ix}}$$

since $a_x$ is zero. Plugging in the parameters of the problem, we find

<div class="notice--success">
<p style="font-size:13pt">$$t=\frac{6.2\times10^{-2}\text{ m}}{2.10\times10^7\text{ m}\cdot\text{sec}^{-1}}\approx 2.95\times10^{-9}\text{ sec}$$</p>
</div>

For the second part of the problem, we are interested in finding the _vertical displacement_ $\Delta y$ in the $\hat{y}$ direction. In the $\hat{y}$ direction, the initial velocity is $v_{iy}=0\text{ m}\cdot\text{sec}^{-1}$, and there is given to be an acceleration in the $+\hat{y}$ direction with magnitude $a_y=5.30\times 10^{15}\text{ m}\cdot\text{sec}^{-2}$. Since the acceleration is also a constant in this direction, we can use this information to calculate the vertical displacement using the appropriate kinematic equation:

$$\Delta y=v_{iy}t+\frac{1}{2}a_yt^2=\frac{1}{2}a_yt^2$$

where we have used the fact that $v_{iy}$ is $0$. Plugging in the values, we have

$$\Delta y=\frac{1}{2}\left(5.30\times10^{15}\frac{\text{m}}{\text{sec}^2}\right)\left(2.95\times10^{-9}\text{ sec}\right)^2$$

Numerically simplifying,

<div class="notice--success">
<p style="font-size:13pt">$$\Delta y=2.31\times10^{-2}\text{ m}$$</p>
</div>

> ## Problem 3

<div class="notice--info">
<p style="font-size:13pt">Consider a one-dimensional system with a position-dependent force $F(x)$ acting on a particle over the entirety of the real number line.</p>
<ol>
  <li style="font-size:13pt">Take $F(x)=e^{-\vert x\vert}$. What is the work required to 'push' the particle from $x=-1$ to $x=1$?</li>
  <li style="font-size:13pt">Take $F(x)=e^{-\vert x\vert}$. What is the work required to 'push' the particle from $x=-\infty$ to $x=\infty$?</li>
  <li style="font-size:13pt">Take $F(x)=xe^{-x}$. What is the total energy stored in the system between $x=0$ and $x=\infty$?</li>
  <li style="font-size:13pt">It is not possible to calculate the total energy of the system described in Part (3) above from $x=-\infty$ to $x=\infty$. Why? <em>Hint: What is the value of $F(x)$ at $x=-\infty$?</em></li>
</ol>
</div>

This problem is meant to serve as a review of calculus and a direct application of the definition of work we learned [earlier](/physics/newton-laws-and-kinematics/index.html#work-and-energy). For the purposes of this problem, we will denote the work required to push the particle from $x=a$ to $x=b$ as $W_{a\rightarrow b}$, and the energy stored in the system between $x=a$ and $x=b$ as $U_{a\rightarrow b}$.

<div class="notice--success">
<p style="font-size:12pt">$$W_{-1\rightarrow 1}=\int_{-1}^1dx F(x)=\int_{-1}^1dx e^{-\vert x\vert}=2\int_0^1dxe^{-x}=-2\left.e^{-x}\right\vert_0^1=2(1-e^{-1})$$</p>
<p style="font-size:12pt">$$W_{-\infty\rightarrow \infty}=\int_{-\infty}^{\infty}dx F(x)=\int_{-\infty}^{\infty}dx e^{-\vert x\vert}=2\int_0^{\infty}dxe^{-x}=-2\left.e^{-x}\right\vert_0^{\infty}=2$$</p>
<p style="font-size:13pt">Since energy $U$ is defined by the equation $$U=\frac{-dF}{dx}$$ we know that $$U_{0\rightarrow \infty}=-\int_0^{\infty}dx\text{ }xe^{-x}$$ This integral can be evaluated using <a href="/calculus/integration-by-parts/index.html">integration by parts</a>.</p>
<p style="font-size:13pt">$$U_{0\rightarrow \infty}=-\int_0^{\infty}dx\text{ }xe^{-x}=\left.xe^{-x}\right\vert_0^{\infty}-\int_0^{\infty}e^{-x}=\left.e^{-x}\right\vert_0^{\infty}=1$$</p>
<p style="font-size:13pt">Finally, as per the hint given in the problem, it is not possible to calculate the total energy of the system from $x=-\infty$, because $F(x\rightarrow \infty)=(-\infty)e^{\infty}=-\infty$. We cannot sum an infinite amount of force to calculate the energy. Because the integral for the energy diverges, we cannot calculate the total energy of the system.</p>
</div>
