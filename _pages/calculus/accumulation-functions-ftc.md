---
permalink: /calculus/accumulation-functions-ftc/
author_profile: false
title: "Accumulation Functions and the Fundamental Theorems of Calculus"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

In this module, we will discuss the properties of how to represent functions as the integrals of other functions. In the process, we will introduce the two fundamental theorems of calculus.

> ## Definition of an Accumulation Function

An **accumulation function** is simply as a function that is defined in terms of the integral of another function. For example, we might have a function $F(x)$ that is defined to be "the area under the curve $f(x)$ between a fixed endpoint $a$ and another variable endpoint $x$." Based on the definition of integration, we can denote this statement as

$$F(x)=\int_a^x f(x)dx$$

However, look at the definition of this integral. $x$ is both the upper bound of integration, _and_ also the variable of integration. This is incredibly confusing! To clarify things, we want to avoid using the same variables for the bound(s) of integration and the variable of integration. There are often two ways of commonly circumventing this problem. One way is to simply denote the variable of integration using a prime to differentiate between $x$ and $x'$:

$$F(x)=\int_a^x f(x')dx'$$

Note that in this rotation, $x'$ does _not_ stand for the derivative of $x$; it is simply another variable. Another way is to use an entirely different variable altogether. For example, we could use $t$ instead to avoid ambiguity.

$$F(x)=\int_a^x f(t)dt$$

<div class="notice--warning">
<p style="font-size:13pt;text-align:center">When defining accumulation functions, <em>never</em> use the same variable for the integration bound(s) and the variable of integration!</p>
</div>

As an example, let's graph the function $f(t)$ with respect to $t$ and try to visualize $F(x)$ for two different values of $x=x_1, x_2$.

![acc-func-1](/assets/images/acc-func-1.png){:height="85%" width="85%"}

The <span style="color:blue">blue</span> shaded area represents the value of $F(x=x_1)$, and the <span style="color:red">red</span> shaded area represents the value of $F(x=x_2)$.  As we can see from this diagram, as $x$ increases, $F(x)$ _accumulates_ more and more of the area underneath $f(t)$. This is why $F(x)$ is referred to as an _accumulation function_.

> ## Properties of Accumulation Functions

Based on this definition for $F(x)$, we can notice a couple of properties about $F(x)$:

  1. If $x>a$ and $f(t)$ has more of its area _above_ the $x$-axis than below it between $t=a$ and $t=x$, then $F(x)>0$.
  2. If $x>a$ and $f(t)$ has more of its area _below_ the $x$-axis than above it between $t=a$ and $t=x$, then $F(x)<0$.
  3. If $x<a$ and $f(t)$ has more of its area _above_ the $x$-axis than below it between $t=x$ and $t=a$, then $F(x)<0$.
  4. If $x<a$ and $f(t)$ has more of its area _below_ the $x$-axis than above it between $t=x$ and $t=a$, then $F(x)>0$.

Notice that statements 3 and 4 can be derived from the integral property that $$\int_a^b dx\text{ }f(x)=-\int_b^adx\text{ }f(x)$$, as we have discussed [previously](/calculus/evaluating-integrals/index.html#properties-of-integrals-both-indefinite-and-definite). To illustrate these properties about accumulation functions, let's consider an example.

> ## Example of An Accumulation Function

<div class="notice--info">
<p style="font-size:13pt">Consider the following graph of function $f(x')$.</p>
<img src="/assets/images/acc-func-2.png" alt="acc-func-2" style="width:65%;height:65%;" class="align-center">
<p style="font-size:13pt">Define the functions $g(x)=\int_0^xf(x')dx'$ and $h(x)=\int_3^xf(x')dx'$.</p>
<ol>
  <li style="font-size:13pt">What is $g(2)$?</li>
  <li style="font-size:13pt">What is $g(4)$?</li>
  <li style="font-size:13pt">What is $h(4)$?</li>
  <li style="font-size:13pt">What is $h(3)$?</li>
  <li style="font-size:13pt">What is $h(1)$?</li>
</ol>
</div>

By the definition of the function $g(x)$, $g(2)=\int_0^2f(x')dx'$. This includes the area of the right triangle and the area of the square, so

<div class="notice--success">
<p style="font-size:13pt">$$g(2)=\int_0^2f(x')dx'=\frac{1\cdot 1}{2}+(1\cdot 1)=\frac{3}{2}$$</p>
</div>

Similarly, in calculating the value of $g(4)$, we have to include all of the geometric shapes while cognizant of the fact that area under the $x'$-axis is "negative" and therefore subtracted off in terms of integration:

<div class="notice--success">
<p style="font-size:13pt">$$g(4)=\int_0^4f(x')dx'=\frac{1\cdot 1}{2}+(1\cdot 1)+\frac{1\cdot\frac{1}{2}}{2}-\frac{1\cdot\frac{1}{2}}{2}-\frac{1\cdot1}{2}=1$$</p>
</div>

To calculate the value of $h(4)$, we use the definition of the function $h(x)$ given in the problem. Since $h(4)=\int_3^4 f(x')dx'$, this includes the area of the right isosceles triangle underneath the $x$-axis, so

<div class="notice--success">
<p style="font-size:13pt">$$h(4)=\int_3^4f(x')dx'=-\frac{1\cdot 1}{2}=-\frac{1}{2}$$</p>
</div>

Calculating the value of $h(3)$ is simple. Since $\int_a^a f(x)dx=0$ because the bounds of integration are the same,

<div class="notice--success">
<p style="font-size:13pt">$$h(3)=\int_3^3f(x')dx'=0$$</p>
</div>

Finally, to calculate $h(1)$, we will take advantage of the property of integration that $\int_a^b f(x)dx=-\int_b^a f(x)dx$.

<div class="notice--success">
<p style="font-size:12pt">$$h(1)=\int_3^1f(x')dx'=-\int_1^3f(x')dx'=-\left[(1\cdot 1)+\frac{1\cdot \frac{1}{2}}{2}-\frac{1\cdot \frac{1}{2}}{2}\right]=-1$$</p>
</div>

> ## Derivatives of Accumulation Functions

In the above example, consider what was happening locally near $x'=2.5$.

![acc-func-3](/assets/images/acc-func-3.png){:height="65%" width="65%"}

For $x'<2.5$ but very close to $x'=2.5$, the function $g(x)=\int_0^x f(x')$ is still increasing since a little more of the <span style="color:green">green</span>, "positive" area is being added on when we increment $x'$ to $x'+dx'$ for small $dx'$. However, once we exceed $x'=2.5$ all of a sudden the function $g(x)$ is decreasing, since a little more of the <span style="color:red">red</span>, "negative" area is being added on when we increment $x'$ to $x'+dx'$ for small $dx'$. The tells us that at $x'=2.5$ we have accumulated the maximum possible green area, but haven't yet started subtracting off the red area. In other words, **$x=2.5$ is a maximum for the function $g(x)$**. In general, we can deduce that the zeroes of $f(x')$ correspond to the points of extrema for $g(x)$:

<div class="notice--warning">
<ol>
  <li style="font-size:13pt">If $f(x')$ changes from positive to negative at $x'=x_0$, then the function $g(x)=\int_a^x f(x')dx'$ has a local maximum at $x=x_0$.</li>
  <li style="font-size:13pt">If $f(x')$ changes from negative to positive at $x'=x_0$, then the function $g(x)=\int_a^x f(x')dx'$ has a local minimum at $x=x_0$.</li>
</ol>
</div>

This relationship between the function $f(x)$ and the accumulation function $g(x)$ suggests that the derivatives of $f(x)$ is related to $g(x)$, and indeed, this is the case. We can hypothesize this relation:

<div class="notice--success">
<h2 id="the-first-fundamental-theorem-of-calculus" style="font-size:14pt;text-align:center" class><strong>The First Fundamental Theorem of Calculus</strong></h2>
<p style="font-size:13pt">If $g(x)=\int_a^x f(x')dx'$ for some constant $a$, then</p>
<p style="font-size:13pt">$$\frac{d}{dx}[g(x)]=\frac{d}{dx}\left[\int_a^x f(x')dx'\right]=f(x)$$</p>
</div>

It turns out that this result has a special name, and is referred to as the **first fundamental theorem of calculus** (often abbreviated as FTC). It essentially states that the derivative of an integral of a function is simply that same function. Note that this result applies for any value of $a$, so long as it does not depend on $x$.

Using this result, we can also show that

$$\frac{d}{dx}\left[\int_x^af(x')dx\right]=-\frac{d}{dx}\left[\int_a^xf(x')dx\right]=-f(x)$$

In other words, if the variable $x$ is the lower bound of integration instead of the upper bound, then all we have to do is to tack on a negative sign out front of the final result.

Let's look at examples of how to apply the fundamental theorem of calculus:

> ### Example 1

<div class="notice--info">
<p style="font-size:13pt">Consider the accumulation function defined by $j(x)=\int_{-4}^x t^2dt$. What is $\frac{d}{dx}[j(x)]$?</p>
</div>

Using the fundamental theorem of calculus, we can immediately conclude that

$$\frac{d}{dx}[j(x)]=\frac{d}{dx}\left[\int_{-4}^x t^2dt\right]=x^2$$

Of course, you could also evaluate this derivative through explicitly finding an expression for the evaluated integral first. That is,

$$j(x)=\int_{-4}^x t^2dt=\left.\frac{1}{3}t^3\right\vert_{-4}^x=\frac{1}{3}x^3+\frac{64}{3}$$

Using this expression, we can easily take the derivative which gives us the expected result using FTC:

$$\frac{d}{dx}\left[j(x)\right]=\frac{d}{dx}\left[\frac{1}{3}x^3+\frac{64}{3}\right]=x^2$$

A common misconception that many students have is that the derivative of the accumulation function with respect to $t$ or $x'$, as opposed to $x$, is equal to the original function. In other words,

<div class="notice--danger">
<p style="font-size:13pt">$$\frac{d}{dt}\left[\int_{-4}^x t^2dt\right]\neq t^2$$</p>
</div>

This is not true! As we can see from the above example, if we took the derivative

$$\frac{d}{dt}\left[j(x)\right]=\frac{d}{dt}\left[\frac{1}{3}x^3+\frac{64}{3}\right]=0$$

since $x$ is not a function of $t$ in this problem. 

> ### Example 2

<div class="notice--info">
<p style="font-size:13pt">Consider the accumulation function defined by $k(x)=\int_{1}^x \arcsin(\ln x')dx'$. What is $\frac{d}{dx}[k(x)]$?</p>
</div>

Once again, using the first fundamental theorem of calculus, we have

$$\frac{d}{dx}[k(x)]=\frac{d}{dx}\left[\int_{1}^x \arcsin(\ln x')dx'\right]=\arcsin(\ln x)$$

Notice that in this problem, it is not even _possible_ to approach this problem without using FTC. This is because we do not know how to analytically evaluate the antiderivative of the function $\arcsin(\ln x')$.

> ### Example 3

<div class="notice--info">
<p style="font-size:13pt">Consider the accumulation function defined by $m(x)=\int_{-4}^{x^2} t^2dt$. What is $\frac{d}{dx}[m(x)]$?</p>
</div>

Notice that this problem looks very similar to [Example 1](/calculus/accumulation-functions-ftc/index.html#example-1) from above, with the small (yet critical) exception that the upper bound of integration is $x^2$ instead of $x$. Because of this, we cannot directly apply our fundamental theorem of calculus, and so our only option is to explicitly evaluate the integral first before taking the derivative of the function.

$$m(x)=\int_{-4}^{x^2} t^2dt=\left.\frac{1}{3}t^3\right\vert_{-4}^{x^2}=\frac{1}{3}x^6+\frac{64}{3}$$

Now, taking the derivative gives us

$$m(x)=2x^5=(x^2)^2\cdot 2x=(x^2)^2\cdot\frac{d}{dx}\left[x^2\right]$$

We chose to write the result in a suggestive way to make a comparison with the result from Example 1 above. We plugged in $t=x^2$ into the integrand function, just as we plugged in $t=x$ from before, but this time, we also multiplied by a "chain-rule" term: the derivative of $x^2$. In general, a more general form of the fundamental theorem of calculus is that

<div class="notice--success">
<h2 id="generalized-first-fundamental-theorem-of-calculus" style="font-size:14pt;text-align:center" class><strong>Generalized First Fundamental Theorem of Calculus</strong></h2>
<p style="font-size:13pt">If $g(x)=\int_a^{\eta(x)}f(x')dx'$ for some constant $a$, then</p>
<p style="font-size:13pt">$$\frac{d}{dx}[g(x)]=\frac{d}{dx}\left[\int_a^{\eta(x)} f(x')dx'\right]=f(\eta(x))\frac{d}{dx}[\eta(x)]$$</p>
</div>

It turns out that there is _another_ fundamental theorem of calculus, which is cleverly referred to as the **second fundamental theorem of calculus**. Truthfully, we have already discussed this theorem [previously](/calculus/evaluating-integrals/index.html#an-easier-evaluation-method), although we didn't refer to it as the second FTC. Explicitly, the theorem states that 

<div class="notice--success">
<h2 id="the-second-fundamental-theorem-of-calculus" style="font-size:14pt;text-align:center" class><strong>The Second Fundamental Theorem of Calculus</strong></h2>
<p style="font-size:13pt">If $F(x)$ is the <em>antiderivative</em> of $f(x)$ such that $\frac{d}{dx}[F(x)]=f(x)$, then</p>
<p style="font-size:13pt">$$\int_a^b f(x)dx=F(b)-F(a)$$</p>
</div>

In reality, the 2nd FTC is essentially our definition for definite integration, but now, we effectively have a new fancy term for it.

> ## Exercises

> ### Problem 1

Find the derivatives with respect to $x$ of the following three functions $f(x), g(x), h(x)$:

$$f(x)=\int_0^x e^{-t^2}dt, \quad g(x)=\int_0^{x^2} e^{-t^2}dt, \quad h(x)=\int_x^{x^2}e^{-t^2}dt$$

[Solution](/calculus/accumulation-functions-ftc-sol/index.html#problem-1){: .btn .btn--info}

> ### Problem 2

_This problem is adapted from Bloomsburg University._

Suppose $f$ is the function whose graph is given below.

![acc-func-4](/assets/images/acc-func-4.png){:height="70%" width="70%"}

Define the function $g(x)=\int_0^x f(t)dt$.

  1. Find the values of $g(0), g(1), g(2), g(4), g(6)$.
  2. Sketch a rough graph of $g(x)$.

[Solution](/calculus/accumulation-functions-ftc-sol/index.html#problem-2){: .btn .btn--info}

> ### Problem 3

_This problem is adapted from Bloomsburg University._

Consider the _Fresnel function_ defined by $$S(x)=\int_0^x \sin\left(\frac{\pi t^2}{2}\right)dt$$. The figures below show the graphs of $y=f(x)=\sin\left(\frac{\pi x^2}{2}\right)$ (dashed line) and $y=S(x)$ (solid line).

![acc-func-5](/assets/images/acc-func-5.png){:height="100%" width="100%"}

  1. At what values of $x$ does $S$ have local maximum values?
  2. On what intervals is the function concave upward?
  3. Solve the following equation for $x$ correct to at least one decimal place: 

$$\int_0^x \sin\left(\frac{\pi t^2}{2}\right)dt=0.2$$

For this problem, only consider the values of $x>0$.

[Solution](/calculus/accumulation-functions-ftc-sol/index.html#problem-3){: .btn .btn--info}
