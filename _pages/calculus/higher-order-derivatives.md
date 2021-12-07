---
permalink: /calculus/higher-order-derivatives/
author_profile: false
title: "Higher Order Derivatives"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

As we've seen in our discussion about [derivatives](/calculus/evaluating-derivatives/index.html), the derivative of a differentiable function is almost always another function. Therefore, you could imagine that we could also take the derivative _of this derivative_ as well. This is called the second derivative. Let's take a look at an example. Define the function 

$$f(x)=2x^3-x^2-9x+9$$

From last time, we learned that we can use the power rule and linearity of the derivative to write

$$f'(x)=\frac{df}{dx}=6x^2-2x-9$$

The second derivative is simply the derivative of the first derivative of $f(x)$:

$$\frac{d}{dx}\left[\frac{df}{dx}\right]=\frac{d^2f}{dx^2}=f''(x)=12x-2$$

In Leibniz notation, the second derivative is denoted as $d^2f/dx^2$, while in the prime notation, it's denoted as $$f"(x)$$. Even higher order derivatives can also be defined. For example, consider the third derivative of $f(x)$:

$$\frac{d}{dx}\left[\frac{d^2f}{dx^2}\right]=\frac{d^3f}{dx^3}=f'''(x)=12$$

Of course, we could keep going. In general, the $n$th derivative is denoted as $d^nf/dx^n$ using Leibniz notation. Using the prime notation, you can imagine that putting $n$ number of primes would get quite cumbersome. Therefore, after the third derivative, we denote the $n$th derivative in prime notation as $f^{(n)}(x)$. As an example, the fourth derivative of $f(x)$ would be denoted as $f^{(4)}(x)=0$ using the example from above. (_Note that the parentheses in the superscript is important! If you don't include the parentheses, others might think you're just taking the fourth power of $f(x)$._)

While we have the capability to take higher order derivatives, typically we are only interested in the first and second derivatives of a function when trying to describe a function graphically. As we've learned [previously](/calculus/intro-to-derivatives/index.html), the first derivative can give us clues into what the shape of the original function looks like. Recall that if $df/dx>0$, then the function $f(x)$ is increasing, and if $df/dx<0$, then the function $f(x)$ is decreasing. Let's see what we can learn about $f(x)$ using the graph of the second derivative. Consider the following example graph of the second derivative of some function $f(x)$: 

![higher-derivatives-1](/assets/images/higher-derivatives-1.png){:height="50%" width="50%"}

In order to figure out what the original function looks like, we first need to know what the first derivative looks like. Because the second derivative is the derivative of the first derivative (read that statement over a couple of times), we can use some of our previous results in graph interpretation. That is, if $d^2f/dx^2>0$, then $df/dx$ is increasing, and if $d^2f/dx^2<0$, then $df/dx$ is decreasing. Therefore, we might have a graph that looks something like

![higher-derivatives-2](/assets/images/higher-derivatives-2.png){:height="50%" width="50%"}

Now that we have the first derivative, we can sketch what the original function may roughly look like. Remember the important points: if $df/dx>0$, then $f$ is increasing, and if $df/dx<0$, then $f$ is decreasing. Because $df/dx$ is piecewise linear (not piecewise constant anymore), we would expect a piecewise parabolic curve for $f(x)$:

![higher-derivatives-3](/assets/images/higher-derivatives-3.png){:height="50%" width="50%"}

As we can see, graphing a function from using the second derivative uses the same techniques that we've seen previously, but we have to do it twice instead of once. Furthermore, from the example above, we can make sure generalizations of what information we can gather about $f(x)$ from the graph of its second derivative:

  1. Note that when $$f"(x)>0$$ from above, $f(x)$ looked like it is "smiling." We call graphs that look like this _concave up_, or simply _concave_.
  2. Note that when $$f"(x)<0$$ from above, $f(x)$ looked like it is "frowning." We call graphs that look like this _concave down_, or simply _convex_.
  3. Note that when $$f"(x)=0$$ from above, $f(x)$ is linear. This means that it is neither concave nor convex.

In general, we can conclude that the sign of $$f"(x)$$ can tell us information about the _concavity_ of $f(x)$. 

> ## Exercises

> ### Problem 1

Determine the fourth derivative of the following two functions:

  1. $h(t)=3t^7-6t^4+8t^3-12t+18$
  2. $4x^{3/5}-\frac{1}{8x^2}-\sqrt{x}$

> ### Problem 2

Consider the function defined by the following infinite series: $f(x)=\sum_{n=0}^{\infty}\frac{x^n}{n!}$.

  1. Write this function out explicitly. That is, what are the first few terms of this series function?
  2. Write down an analytical expression for the first derivative of this function.
  3. Write down an analytical expression for the second derivative of this function.
  3. Write down an analytical expression for the $k$th derivative of this function. What do you notice?

> ### Problem 3

Consider the following graph of the first derivative of some function $f(x)$:

![higher-derivatives-4](/assets/images/higher-derivatives-4.png){:height="50%" width="50%"}

  1. Sketch the shape of $f"(x)$.
  2. Sketch the shape of $f(x)$. Choose an $f(x)$ that is continuous.
