---
permalink: /calculus/evaluating-integrals/
author_profile: false
title: "Evaluating Integrals"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

In this lesson, we'll introduce the concept of the antiderivative, discuss the differences between definite and indefinite integrals, and introduce ways to more easily evaluate integral expressions without having to use limit definitions every time. 

> ## From Last Week...

In the [last lesson](/calculus/introduction-to-integration/index.html), the final problem for the exercises at the bottom of the page asked us to evaluate the following two integral expressions using the limit definition of the integral from the same lesson:

  1. $$\int_1^4 dx\text{ }(2x+3)$$
  2. $$\int_0^1 dx\text{ }[6x(x-1)]$$

To start off, we'll show the solutions to each of these:

> ### Solution 1

Using the definition of the integral, we have

$$\int_1^4 dx\text{ }(2x+3)=\lim_{n\rightarrow \infty}\frac{3}{n}\sum_{i=1}^{n} \left[2\left(1+\frac{3i}{n}\right)+3\right]=\lim_{n\rightarrow \infty}\frac{3}{n}\sum_{i=1}^{n} \left[\frac{6i}{n}+5\right]$$

We can split up the summation in the following way:

$$\int_1^4 dx\text{ }(2x+3)=\lim_{n\rightarrow \infty}\frac{18}{n^2}\sum_{i=1}^{n}i+\lim_{n\rightarrow \infty}\frac{15}{n}\sum_{i=1}^{n}1$$

Using our summation laws,

$$\int_1^4 dx\text{ }(2x+3)=\lim_{n\rightarrow \infty}\frac{18}{n^2}\frac{n(n+1)}{2}+\lim_{n\rightarrow \infty}\frac{15}{n}\cdot n$$

Finally, simplifying and taking the appropriate limits at infinity gives

$$\int_1^4 dx\text{ }(2x+3)=\lim_{n\rightarrow \infty}\frac{9(n+1)}{n}+\lim_{n\rightarrow \infty}15=9+15=24$$

Therefore, the area under the curve $f(x)=2x+3$ and above the $x$-axis between $x=1$ and $x=4$ is given by

$$\int_1^4 dx\text{ }(2x+3)=24$$

> ### Solution 2

To make things a bit easier first, let's rewrite the integral expression:

$$\int_0^1 dx\text{ }[6x(x-1)]=\int_0^1 dx\text{ }(6x^2-6x)$$

Using the definition of the integral, we have

$$\int_0^1 dx\text{ }(6x^2-6x)=\lim_{n\rightarrow \infty}\frac{1}{n}\sum_{i=1}^{n} \left[6\left(\frac{i}{n}\right)^2-\frac{6i}{n}\right]=\lim_{n\rightarrow \infty}\frac{1}{n}\sum_{i=1}^{n} \left[\frac{6i^2}{n^2}-\frac{6i}{n}\right]$$

We can split up the summation in the following way:

$$\int_0^1 dx\text{ }[6x(x-1)]=\lim_{n\rightarrow \infty}\frac{6}{n^3}\sum_{i=1}^{n}i^2-\lim_{n\rightarrow \infty}\frac{6}{n^2}\sum_{i=1}^{n}i$$

Using our summation laws,

$$\int_0^1 dx\text{ }[6x(x-1)]=\lim_{n\rightarrow \infty}\frac{6}{n^3}\frac{n(n+1)(2n+1)}{6}-\lim_{n\rightarrow \infty}\frac{6}{n^2}\frac{n(n+1)}{2}$$

Finally, simplifying and taking the appropriate limits at infinity gives

$$\int_0^1 dx\text{ }[6x(x-1)]=\lim_{n\rightarrow \infty}\frac{2n^2+3n+1}{n^2}-\lim_{n\rightarrow \infty}\frac{3(n+1)}{n}=2-3=-1$$

Therefore, the area under the curve $f(x)=6x(x-1)$ and above the $x$-axis between $x=0$ and $x=1$ is given by

$$\int_0^1 dx\text{ }[6x(x-1)]=-1$$

> ## An Easier Evaluation Method

If you haven't picked up on it yet, evaluating integrals using the strict limit definition of an integral is difficult! It involves taking a lot of limits at infinity and requiring us to know our summation formulas, to name a few issues. Furthermore, suppose we wanted to evaluate the following integral expression using the limit definition:

$$\int_0^1 dx\text{ }x^5=\lim_{n\rightarrow \infty}\frac{1}{n}\sum_{i=1}^n\frac{i^5}{n^5}=\lim_{n\rightarrow \infty}\frac{1}{n^6}\sum_{i=1}^n i^5$$

We don't know any sleek analytical formulas to evaluate $$\sum_{i=1}^n i^5$$, so at this point there's not much we can do. The point is that similar to our discussion on derivatives, we want to understand how the derivative works and how it is derived from the limit definition, but in terms of practically evaluating derivatives, we need to find a better alternative.

Let's jump back to our first integral expression we tried to evaluate above: $$\int_1^4 dx\text{ }(2x+3)$$. I'm going to seemingly pull a function out of thin air that I claim will be useful for us in attempting to find an easier evaluation method for this integral. Let's define the function $F(x)=x^2+3x+C$, where $C$ is any constant real number. Again, seemingly out of nowhere, I'm going to ask that we evaluate this function $F(x)$ at the endpoints of the integral at $x=1$ and $x=4$. That is, $F(4)=4^2+3(4)+C=28+C$, and $F(1)=1^2+3(1)+C=4+C$. Now, note that

$$F(4)-F(1)=(28+C)-(4+C)=24$$

This is exactly equal to the value of the integral $$\int_1^4 dx\text{ }(2x+3)$$ we found [above](/calculus/evaluating-integrals/index.html#solution-1) using the limit definition. For now, it really seems like a pure coincidence, especially since this whole time I was pulling functions seemingly out of nowhere. However, one interesting thing to note in this example is that if we take the derivative of $F(x)=x^2+3x+C$, we get

$$\frac{dF}{dx}=\frac{d}{dx}\left[x^2+3x+C\right]=2x+3$$

Note that this is exactly the function $f(x)$ that we are taking the integral of! This might just be a coincidence for now, so let's validate whether this method also works for the other integral expression we discussed above: $$\int_0^1 dx\text{ }(6x^2-6x)$$. A little bit of guess work and trial-and-error can lead us to defining the function $F(x)=2x^3-3x^2+C$ when taking the previous example $F(x)$ function as inspiration. (Don't worry if it's not clear how to get this function $F(x)$ yet. For now, you can assume I'm again just making up a function from scratch if it's easier to understand.) Again, note that

$$\frac{dF}{dx}=\frac{d}{dx}\left[2x^3-3x^2+C\right]=6x^2-6x=6x(x-1)$$

using the power rule for differentiation. This derivative is exactly equal to the function $f(x)=6x(x-1)$ that we are taking the integral of. Furthermore, let's evaluate this function $F(x)$ at our two endpoints of the integral, $x=0$ and $x=1$. 

$$F(0)=2(0)^3-3(0)^2=0, \quad F(1)=2(1)^3-3(1)^2=2-3=-1$$

Therefore,

$$F(1)-F(0)=-1-0=-1$$

Again, this is exactly equal to  the value of the integral $$\int_0^1 dx\text{ }[6x(x-1)]=-1$$ we found [above](/calculus/evaluating-integrals/index.html#solution-2) using the limit definition. At this point, it might start to look like that we've found a general formula. That is, generally,

$$\int_a^b dx\text{ }f(x)=F(b)-F(a), \text{ where }\frac{d}{dx}[F(x)]=f(x)$$

Now, all of a sudden, it seems like we turned a difficult limit problem on the left hand side into a simple problem of evaluating a function at two points and then taking the difference between the two results. This is a much easier approach, _if this general formula we're hypothesizing turns out to be correct_! Let's see if we can gain some intuition behind why this formula might be true in the first place. Consider the following arbitrary function: 

![evaluating-integrals-1](/assets/images/evaluating-integrals-1.png){:height="70%" width="70%"}

Suppose we define that $F(x)$ is the area under the curve $f(x)$ from $x=0$ to some particular value of $x$. What is the added area to the area under the curve when $x$ is incremented by a small amount to $x+h$?. The exact increase/change is $F(x+h)-F(x)$: that is, the total final area minus the total initial area. Another way of _approximating_ the area increase is through the gray rectangle shown in the diagram, which has width of $h$ and height of $f(x)$. Therefore, if we equate this approximation with the exact increase in the area, then we get

$$F(x+h)-F(x)\approx f(x)\cdot h\longrightarrow f(x)\approx \frac{F(x+h)-F(x)}{h}$$

In the limit that $h\rightarrow 0$, the rectangle approximation for the area becomes and _exact_ expression for the area, as we discussed from [last time](/calculus/introduction-to-integration/index.html). Therefore, it follows that

$$f(x)=\lim_{h\rightarrow 0}\frac{F(x+h)-F(x)}{h}=\frac{d}{dx}\left[F(x)\right]$$

by the definition of the derivative from our discussion on derivatives. Now, consider the separate diagram below.

![evaluating-integrals-2](/assets/images/evaluating-integrals-2.png){:height="60%" width="60%"}

We proved above that $F(x)$ can be thought of as the area under the curve $f(x)$ from $x=0$ to some arbitrary value of $x$. Therefore, the area under the curve $f(x)$ between $x=a$ and $x=b$ can be written as $F(b)-F(a)$. Simultaneously, we also defined the area under the curve $f(x)$ between $x=a$ and $x=b$ to be the integral expression $\int_a^b dx\text{ }f(x)$. Therefore, this "sketch" can allow us to more confidently conclude that

$$\int_a^b dx\text{ }f(x)=F(b)-F(a), \text{ where }\frac{d}{dx}[F(x)]=f(x)$$

This formula for determining the value of integrals is ostensibly easier, so long as we can find a formula for $F(x)$. This is often not a trivial task: based on the definition above, $F(x)$ is not the derivative of $f(x)$ (which we already know how to evaluate), but rather what we call the **antiderivative** of $f(x)$. The antiderivative of a particular function is defined to be the separate function such that when you take the derivative of the antiderivative, you get the original particular function back. For example, in our  examples [above](/calculus/evaluating-integrals/index.html#solution-1), we can conclude that the antiderivative of $f(x)=2x+3$ is $F(x)=x^2+3x+C$, and the antiderivative of $f(x)=6x(x-1)$ is $F(x)=2x^3-3x^2+C$ for some constant $C$.

> ## Indefinite vs. Definite Integrals

The antiderivative a function is sometimes also referred to as an **indefinite integral**. We can write the antiderivative of $f(x)$, or the indefinite integral of $f(x)$, as

$$\int dx\text{ }f(x)=F(x)$$

Notice that this looks exactly like the integral expressions to represent areas that we discussed above, except that there are no lower and upper bounds of integration. When there are no bounds of integration, this tells us that we are interested in finding the antiderivative _function_ of $f(x)$, **not** the _numerical_ area under the curve $f(x)$. As we saw above, we can conclude the following indefinite integral results:

$$\int dx\text{ }(2x+3)=x^2+3x+C, \quad \int dx\text{ }[6x(x-1)]=2x^3-3x^2+C$$

In order to distinguish between whether we're looking for a function (antiderivative) or a numerical area value, we refer to the former as an **indefinite** integral and the latter as a **definite integral**. Again, to make the distinction perfectly clear, an indefinite integral is a function and does _not_ have the lower and upper bounds of integration, while a definite integral is a numerical value and _does_ have the lower and upper bounds of integration.

> ## Properties of Integrals (Both Indefinite and Definite)

For indefinite integrals, we have the following property:

$$\int dx\text{ }[\alpha f(x)+\beta g(x)]=\alpha\int dx\text{ }f(x)+\beta\int dx\text{ }g(x)$$

so long as $\alpha$ and $\beta$ are both constants. This tells us that like the process of differentiation, integration is a linear process: the integral of a sum is the sum of integrals. 

For definite integrals, we have the following properties:

  1. $$\int_a^b dx\text{ }[\alpha f(x)+\beta g(x)]=\alpha\int_a^b dx\text{ }f(x)+\beta\int_a^b dx\text{ }g(x)$$. As with indefinite integrals, definite integrals are also linear.
  2. If $a\leq b\leq c$, then $$\int_a^c dx\text{ } f(x)=\int_a^b dx\text{ } f(x)+\int_b^c dx\text{ } f(x)$$. This property essentially tells us that any area region can be subdivided into two small area regions that can be independently evaluated and then summed to give the area of the original region.
  3. $$\int_a^b dx\text{ }f(x)=-\int_b^a dx\text{ }f(x)$$.
  4. $$\int_a^b dx\text{ }f'(x)=f(b)-f(a)$$

Expanding on the last point above, in order to relate derivatives and integrals, we also have the following two rules:

  1. $$\int dx\text{ }\frac{df}{dx}=f(x)$$
  2. $$\frac{d}{dx}\left[\int dx\text{ }f(x)\right]=f(x)$$

In the future, we will discuss how to actually go about proving these two statements. For now, it just suffices to tell us that integration and differentiation can be thought of as "opposites." If you take the derivative of a function and then integrate the result, you get the original function back (up to a constant). Likewise, if you take the integral of a function and then differentiate the result, you also get the original function back.

> ## Power Rule for Integration

As you may have been able to guess from [above](/calculus/evaluating-integrals/index.html#solution-1), there is an easy formula to evaluate the indefinite integral/antiderivative of any polynomial function:

$$\int dx\text{ }x^n=\frac{1}{n+1}x^{n+1}, \text{ for }n\neq 1$$

Note that this formula doesn't hold for one This can be easily verified using the power rule for differentiation and the properties of the integral above:

$$\frac{d}{dx}\left[\int dx\text{ }x^n\right]=x^n$$

Simultaneously, if we differentiate the expression $$\frac{1}{n+1}x^{n+1}$$,

$$\frac{d}{dx}\left[\frac{1}{n+1}x^{n+1}\right]=(n+1)\cdot\frac{1}{n+1}x^{n}=x^n$$

Since these results are the same, this proves the power rule for integration. In the future, we will also discuss various ways to also find the antiderivatives of non-polynomial functions, such as exponentials, trigonometric functions, and others.

> ## Exercises

> ### Problem 1

Find the following indefinite integral expressions. _Don't forget to add on the constant term $+C$ to the antiderivative!_

  1. $$\int (5t^8-2t^4+t+3)dt$$
  2. $$\int (7u^{3/2}+2u^{1/2})du$$
  3. $$\int \left(\frac{4}{3t^2}+\frac{7}{2t}\right)dx$$

> ### Problem 2

When we talked about [derivatives of trigonometric functions](/calculus/trig-function-derivatives/index.html), we showed that $\frac{d}{dx}[\sin x]=\cos x$ and $\frac{d}{dx}[-\cos x]=\sin x$. Furthermore, when we talked about [derivatives of exponential functions](/calculus/derivatives-involving-e/index.html), we also showed that $\frac{d}{dx}[e^x]=e^x$. Using this information, evaluate the following indefinite integrals:

  1. $$\int dx\text{ }\sin x$$
  2. $$\int dx\text{ }\cos x$$
  3. $$\int dx\text{ }e^x$$

You can check your answers [here](/calculus/u-substitution/index.html).

> ### Problem 3

Using the results from Problem 2, evaluate the following indefinite integral expressions.

  1. $$\int (2\sin\theta+3\cos\theta)d\theta$$
  2. $$\int (5e^x-e)dx$$
