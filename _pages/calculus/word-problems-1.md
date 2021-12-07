---
permalink: /calculus/word-problems-1/
author_profile: false
title: "Putting It All Together: Part One"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

The past few lessons have focused on theoretical applications of derivatives: given an arbitrary function with no physical relevancy, we wanted to find its derivative. From here, we want to focus on using these techniques to solve actual, real-world problems.

> ## Related Rates

Related Rates is probably one of most common types of problems in both Calculus AB and BC. The idea is that we want to relate the rates of change (usually with respect to time) of two variables: call them $x$ and $y$. Every manifestation of these types of problems boils down to the same thing: this is just a chain rule problem in disguise. In other words, we use the fact that

$$\frac{dy}{dt}=\frac{dy}{dx}\frac{dx}{dt}$$

Using this relation, we can find any one of these derivatives given the other two. Let's tackle an example problem.

> ### Example

_This problem was the fourth FRQ of the [2019 AP Calculus AB exam](https://apstudents.collegeboard.org/ap/pdf/ap19-frq-calculus-ab.pdf)._

A cylindrical barrel with a diameter of 2 feet contains collected rainwater, as shown in the figure below:

![related-rates-1](/assets/images/word-problems-11.png){:height="15%" width="15%"}

The water drains out through a valve (not shown) at the bottom of the barrel. The rate of change of the height $h$ of the water in the barrel with respect to time $t$ is modeled by
$\frac{dh}{dt}=-\frac{1}{10}\sqrt{h}$ where $h$ is measured in feet and $t$ is measured in seconds.

**Find the rate of change of the volume of water in the barrel with respect to time when the height of the water is 4 feet. Indicate units of measure.**

The problem is asking us to essentially find $dV/dt$ at a specific height of water $h=4$. Firstly, we need to use the chain rule to relate the two rates:

$$\left.\frac{dV}{dt}\right\vert_{h=4}=\left.\frac{dV}{dh}\right\vert_{h=4}\left.\frac{dh}{dt}\right\vert_{h=4}$$

From geometry, we know that the volume of a cylinder is given by $V=\pi r^2h$. This means that $\frac{dV}{dh}=\pi r^2$. Since the problem gives us that $r=1$ foot, this means that $\frac{dV}{dh}=\pi\text{ ft}^2$ for all values of $h$. Furthermore, using the expression for $dh/dt$ given in the problem, we know that $\left.dh/dt\right\vert_{h=4}=-\sqrt{4}/10=-(1/5)\text{ ft}\cdot\text{sec}^{-1}$. Therefore, plugging these into the equation above, we find

$$\left.\frac{dV}{dt}\right\vert_{h=4\text{ ft}}=\pi\text{ ft}^2\cdot\frac{-1}{5}\text{ ft}\cdot\text{sec}^{-1}=\frac{-\pi}{5}\text{ ft}\cdot\text{sec}^{-1}$$

**When the height of the water is 3 feet, is the rate of change of the height of the water with respect to time increasing or decreasing? Explain your reasoning.**

We have to take care to read this problem carefully. The problem is _not_ asking if the height itself is increasing or decreasing. It's asking if the _rate of change_ of the height is increasing or decreasing. In other words, we are interested in taking the second derivative of $h$ and evaluating it at $h=3\text{ ft}$. Using the given expression for $dh/dt$, we have

$$\frac{d^2h}{dt^2}=\frac{d}{h}\left[-\frac{1}{10}\sqrt{h}\right]=-\frac{1}{20\sqrt{h}}$$

Evaluating this expression at $h=3\text{ ft}$, we find

$$\left.\frac{d^2h}{dt^2}\right\vert_{h=3\text{ ft}}=-\frac{1}{20\sqrt{3}}\text{ ft}\cdot\text{sec}^{-2}$$

Because this rate is negative, we can conclude that the rate of change of the height of the water with respect to time is _decreasing_.

> ## Optimization Problems

In these types of problems, we are always trying to extremize some quantity given some constraints. For example, I might want to maximize my profits in the stock market given a fixed amount of money I have to invest. Or maybe I want to minimize my costs in my business while still making sure I have at least $x$ number of customers. Again, let's take a look at a couple of example problems:

> ### Example 1

**Find two positive numbers whose product is 750 and for which the sum of one and 10 times the other is a minimum.**

Let's denote the two positive numbers as $x$ and $y$. Our quantity $Q(x, y)$ to optimize is $Q(x, y)=x+10y$. Our constraint is that $xy=750$. Once we have identified both the optimization quantity and constraint our goal is always to convert this two-dimensional problem into a one-dimensional problem. Let's solve for $y$ in terms of $x$ using the constraint:

$xy=750\longrightarrow y=\frac{750}{x}$

Plug this into $Q$ to find

$$Q(x)=x+10\left(\frac{750}{x}\right)=x+\frac{7500}{x}$$

The problem asks us to minimize this quantity, meaning that we need to take the first derivative and set it equal to zero:

$$\frac{dQ}{dx}=1-\frac{7500}{x^2}=0\longrightarrow x=\sqrt{7500}=50\sqrt{3}$$

Therefore, we know that when $x=50\sqrt{3}$ the corresponding value of the first derivative of $Q(x)$ tells us that the quantity $Q(x)$ is extremized. But how can we confirm that the $Q(x)$ is _minimized_ (instead of maximized)? To do this, we need to use the second derivative. Recall from our discussion on [higher order derivatives](higher-order-derivatives/index.html) that if the second derivative is positive and the first derivative is zero, then it corresponds to a local minimum. Similarly, if the second derivative is negative and the first derivative is zero, then it corresponds to a local maximum. Let's take the second derivative of $Q(x)$:

$$\frac{d^2Q}{dx^2}=\frac{d}{dx}\left[\frac{dQ}{dx}\right]=\frac{15000}{x^3}$$

Since $x=50\sqrt{3}$ is positive, then this second derivative must also be positive at this particular point. Therefore, this confirms that we minimized $Q(x)$ as opposed to maximizing it. To find $y$, we can use the constraint equation:

$$y=\frac{750}{x}=\frac{750}{50\sqrt{3}}=5\sqrt{3}$$

Therefore, we can conclude that the pair $x=50\sqrt{3}, y=5\sqrt{3}$ minimizes the desired quantity subject to the given constraints.

> ### Example 2

**I want to fence a large rectangular field, and I have 100 feet of fencing material to work with. What are the dimensions of the field in order to maximize its area?**

Let's denote the length of the field as $\ell$ and the width of the field as $w$. Our quantity to optimize is the area of the field $A(\ell, w)=\ell w$. Our constraint is that $2\ell+2w=100 \text{ ft}$, or equivalently, $\ell+w=50\text{ ft}$. In other words, $w=50-\ell$. Plugging this into the area formula gives $A(\ell)=\ell(50-\ell)=50\ell-\ell^2$. Because we want to extremize this quantity, we take its derivative with respect to $\ell$:

$$\frac{dA}{d\ell}=\frac{d}{d\ell}[50\ell-\ell^2]=50-2\ell=0\longrightarrow \ell=25\text{ ft}$$

In order to confirm that we are indeed maximizing this area, we need to also take the second derivative and show that it is negative:

$$\frac{d^2A}{d\ell^2}=\frac{d}{d\ell}\left[\frac{dA}{d\ell}\right]=-2<0$$

This is negative for all values of $\ell$, including for $\ell=25\text {ft}$, which confirms that we have indeed maximize the area. Since $\ell=25\text{ ft}$ and $\ell+w=50\text{ ft}$ from our constraint equation, this means that $w=25\text{ ft}$. Therefore, we can conclude that maximize the area of the field, it should have a length and width both equal to $25\text{ ft}$.

> ## Exercises

> ## Problem 1

_This problem is adapted from a previous AP FRQ problem._

Ship $A$ is traveling due west toward Lighthouse Rock at a speed of 15 km/hr. Ship $B$ is traveling due north away from Lighthouse Rock at a speed of 10 km/hr. Let $x$ be the distance between Ship $A$ and Lighthouse Rock at time $t$, and let $y$ be the distance between Ship $B$ and Lighthouse Rock at time $t$.

  1. Draw a figure of what's happening in this problem. Make sure to label all relevant quantities. 
  2. Find the distance, in kilometers, between Ship $A$ and Ship $B$ when $x=4$ km and $y=3$ km.
  3. Find the rate of change, in km/hr, of the distance between the two ships when $x=4$ km and $y=3$ km.
  4. Let $\theta$ be the angle formed between Ship $B$ to Ship $A$ to Lighthouse Rock. Find the rate of change of $\theta$, in radians per hour, when $x=4$ km and $y=3$ km.

> ## Problem 2

_This problem is adapted from a previous AP FRQ problem._

A container has the shape of an open right circular cone, as shown in the figure below:

![related-rates-2](/assets/images/word-problems-12.png){:height="40%" width="40%"}

The height of the container is 10 cm and the diameter of the opening is 10 cm. Water in the container is evaporating so that its depth $h$ is changing at a constant rate of $-0.3 \text{ cm}\cdot\text{hr}^{-1}$. 

  1. Find the volume $V$ of water in the container when $h=5$ cm. Indicate units of measure.
  2. Find the rate of change of the volume of water in the container, with respect to time, when $h=5$ cm. Indicate units of measure.
  3. Show that the rate of change of the volume of water in the container due to evaporation is directly proportional to the exposed surface area of the water. What is the constant of proportionality?

> ## Problem 3

_This problem is adapted from [Varsity Tutors](https://www.varsitytutors.com/ap_calculus_ab-help/optimization-both-global-and-local-extrema)._

A blue rectangle has its bottom left corner on the origin, and its top right corner is on the graph of the black quarter-ellipse described by the equation

$$y=\sqrt{1-\frac{1}{6}x^2}, \text{ for }0\leq x\leq \sqrt{6}$$

Find the dimensions of the rectangle that maximize the area of the blue rectangle.

![optimization-diagram](/assets/images/word-problems-13.png){:height="70%" width="70%"}
