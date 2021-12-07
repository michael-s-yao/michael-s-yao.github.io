---
permalink: /calculus/evaluating-derivatives/
author_profile: false
title: "Techniques to Evaluate Derivatives"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

> ## Basic Techniques

[Last time](/calculus/intro-to-derivatives/index.html), we talked about some of the different properties of derivatives and the limit definition of the derivative. As another example, lets try evaluating the derivative of $f(x)=x^5$. Using the limit definition and also expanding out the binomial term, we have

$$\frac{df}{dx}=\lim_{h\rightarrow 0}\frac{(x+h)^5-x^5}{h}=\lim_{h\rightarrow 0}\frac{5x^4h+10x^3h^2+10x^2h^3+5xh^4+h^5}{h}$$

Simplifying gives

$$\frac{df}{dx}=\lim_{h\rightarrow 0}(5x^4+10x^3h+10x^2h^2+5xh^3+h^4)=5x^4$$

As we can see, this process is doable, but tedious and algebraically hairy. Let's develop a set of rules to make finding derivatives a little easier:

  1. If $f(x)=\text{ constant}$, then $f'(x)=0$.
  2. If $f(x)=mx+b$, then $f'(x)=m$.
  3. **Power Rule**: If $f(x)=x^n$, then $f'(x)=nx^{n-1}$. Note that $n$ does not have to be an integer; it can be any real number!
  4. **Linearity**: If $h(x)=\alpha f(x)\pm \beta g(x)$ for constants $\alpha, \beta$, then $h'(x)=\alpha f'(x)\pm \beta g'(x)$.
  5. **Product Rule**: If $h(x)=f(x)g(x)$, then $h(x)=f'(x)g(x)+g'(x)f(x)$.
  6. **Quotient Rule**: If $h(x)=f(x)/g(x)$, then

$$ h(x)=\frac{f'(x)g(x)-g'(x)f(x)}{[g(x)]^2}$$

These are the basic rules. Of course, there are more advanced techniques possible to evaluate derivatives, but we'll introduce them in the future. Let's try a few examples:

> ### Example 1

Let's evaluate the derivative of $f(x)=(x+1)^2$ using the power rule and linearity. We can expand $f(x)$ as $f(x)=x^2+2x+1$. The derivative of $x^2$ is $2x$, the derivative of $x$ is $1$, and the derivative of $1$ is $0$ using the power rule. Therefore, we have

$$ \frac{d}{dx}[(x+1)^2]=\frac{d}{dx}[x^2]+2\frac{d}{dx}[x]+\frac{d}{dx}[1]=2x+2(1)+0=2x+2$$

> ### Example 2

Let's evaluate the derivative of $f(x)=x^2=x\cdot x$ using the product rule. Here $f(x)=x$ (meaning $f'(x)=1$) and $g(x)=x$ (meaning $g'(x)=1$). Plugging this into the formula from above, we find

$$ \frac{d}{dx}[x^2]=(1)(x)+(1)(x)=2x$$

We can also evaluate this derivative using the power rule, where $n=2$:

$$ \frac{d}{dx}[x^2]=2x^{2-1}=2x$$

Notice how we get the same result using either method of finding the derivative.

> ### Example 3

Let's evaluate the derivative of $f(x)=1/x$ using the quotient rule. Here $f(x)=1$ (meaning $f'(x)=0$) and $g(x)=x$ (meaning $g'(x)=1$). Plugging this into the formula from above, we find

$$ \frac{d}{dx}\left[\frac{1}{x}\right]=\frac{(0)(x)-(1)(1)}{x^2}=\frac{-1}{x^2}=-x^{-2}$$

We can also evaluate this derivative using the power rule, where $n=-1$:

$$ \frac{d}{dx}\left[\frac{1}{x}\right]=\frac{d}{dx}\left[x^{-1}\right]=-1x^{-1-1}=-x^{-2}$$

Notice how we get the same result using either method of finding the derivative.

> ## Exercises

### Problem 1

Evaluate the derivatives of the following functions:
  1. $f(x)=4x^5-5x^4$
  2. $f(x)=\frac{x}{1+x^2}$
  3. $f(x)=\frac{x^2-1}{x}$
  4. $f(x)=(3x^2)\sqrt{x}$
  5. $f(x)=2x-\frac{4}{\sqrt{x}}$
  6. $f(x)=(x^2+3)(x^3+4)$
  7. $f(x)=\frac{\frac{1}{x}+\frac{1}{x^2}}{x-1}$ _Hint: It may be easier to rewrite this function first._

### Problem 2

Assume $f$ and $g$ are differentiable functions such that $f(2)=3$, $f'(2)=-1$, $f'(3)=7$, $g(2)=-5$, and $g'(2)=2$. Find the numerical value of the following expressions:

  1. $(g-f)'(2)$
  2. $(fg)'(2)$
  3. $(\frac{f}{g})'(2)$
  4. $(5f+3g)'(2)$
