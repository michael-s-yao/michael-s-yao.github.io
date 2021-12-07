---
permalink: /calculus/implicit-differentiation/
author_profile: false
title: "Implicit Differentiation"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

Consider the following function $y=f(x)$ defined by the equation $2x^3-5xy-y^2=3$. Suppose that we want to find the derivative of $y$. How would we go about this? This equation is not in the standard form $y=\text{some function of }x$ that we're used to, and it can't be easily rewritten into this standard form because of the mixed terms like $-5xy$ that are present. At first glance, it seems like this function is not differentiable. 

We call functions defined in this way to be _implicitly defined_. A function is called an  **explicit function** when it's written in the form of $y=\text{some function of }x$. There's no terms dependent on $y$ on the right hand side, and there's no terms dependent on $x$ on the left hand side. On the other hand, a function is called an **implicit function** when there are $x$- and $y$- dependent terms all mixed together. For example, the function $y=f(x)$ defined by the equation $2x^3-5xy-y^2=3$ above is considered to be an _implicit function_. Today, we'll be learning how to differentiate implicit functions.

> ## Introduction

Let's go back to our earlier example. Intuition might tell us to simply take the derivative of both sides of this equation with respect to $x$. Using linearity of the derivative, we have

$$\frac{d}{dx}[2x^3]-\frac{d}{dx}[5xy]-\frac{d}{dx}[y^2]=\frac{d}{dx}[3]=0$$

The first term on the left hand side is pretty easy to evaluate, but how do we differentiate a term that is dependent on $y$, which it itself may be dependent on $x$? The trick is to use the [chain rule](/calculus/chain-rule/index.html). For example, consider the third term on the left hand side. We can use the chain rule to rewrite it:

$$\frac{d}{dx}[y^2]=\frac{dy}{dx}\frac{d}{dy}[y^2]$$

Now, the differentiation variable exactly matches the function variable, and so the derivative is easy to evaluate:

$$\frac{d}{dx}[y^2]=2y\frac{dy}{dx}$$

Similarly, for the second term on the left hand side, we have (using the product rule)

$$\frac{d}{dx}[5xy]=5x\frac{dy}{dx}+5y\frac{dx}{dx}=5x\frac{dy}{dx}+5y$$

Plugging in these results from above, we have

$$6x^2-5x\frac{dy}{dx}-5y-2y\frac{dy}{dx}=(6x^2-5y)-\frac{dy}{dx}(5x+2y)=0$$

Note that since we are trying to solve for the derivative of $y=f(x)$, the $\frac{dy}{dx}$ term is exactly what we are solving for! Rearranging terms gives

$$\frac{dy}{dx}=\frac{6x^2-5y}{5x+2y}$$

This gives us the derivative of $y$. Now, you might be scratching your head and feel like something looks off. Why do we still have terms dependent on $y$ on the right hand side?

In the past, our explicit functions could yield explicitly defined derivatives that were solely a function of $x$. However, this may not be always the case. The derivative of $y$ can indeed depend on the function $y$ itself: this is not a problem! As an example consider the function $y=h(x)=x^n$. The power rule tells us that $h(x)=nx^{n-1}$. Another way of writing this derivative is

$$\frac{dy}{dx}=nx^{n-1}=n\frac{x^n}{x}=\frac{ny}{x}$$

This definition of the derivative is equally valid. Here, the derivative of $y$ is defined as a function of both $y$ and $x$. In this case, we can switch back and forth between our explicit and implicit definitions of $dy/dx$. However, as we saw in the previous problem, this may not always be the case.

> ## Another Example

Consider the function $y=f(x)$ implicitly defined by the equation $x^2+y^2=r^2$, where $r$ is some constant. As you might remember from geometry, this is the equation of a circle with radius $r$ centered at the origin. We might be interested in finding the tangent line to the circle at a point $(r\cos\theta, r\sin\theta)$. Let's try to accomplish this using implicit differentiation:

$$\frac{d}{dx}[x^2]+\frac{d}{dx}[y^2]=\frac{d}{dx}[r^2]=0$$

Again, using the chain rule,

$$2x+\frac{dy}{dx}\frac{d}{dy}[y^2]=2x+2y\frac{dy}{dx}=0 \longrightarrow \frac{dy}{dx}=-\frac{2x}{2y}=-\frac{x}{y}$$

The slope of the tangent line at $(r\cos\theta, r\sin\theta)$ is therefore

$$\left.\frac{dy}{dx}\right\vert_{x=r\cos\theta, y=r\sin\theta}=-\frac{r\cos\theta}{r\sin\theta}=-\cot\theta$$

Therefore, using point-slope form, the equation for the tangent line is 

$$y-r\sin\theta=-\cot\theta(x-r\cos\theta)$$

How might we do this problem without implicit differentiation? Our first move would probably be to solve for $y$, giving $$y=\pm\sqrt{r^2-x^2}$$. For convenience, we will only look at the positive root, although the same reasoning can be applied for the negative root. Using the chain rule (derive this for yourself), we have

$$\frac{dy}{dx}=\frac{-2x}{2\sqrt{r^2-x^2}}=-\frac{x}{\sqrt{r^2-x^2}}$$

Is this the same result as the one we obtained using implicit differentiation? Recall that $$y=\sqrt{r^2-x^2}$$, and so

$$\frac{dy}{dx}=-\frac{x}{\sqrt{r^2-x^2}}=-\frac{x}{y}$$

as expected. This shows us that implicit and explicit differentiation (when possible) gives us the same result. However, with the explicit derivative result, the derivative is "uglier" and more complicated with the radical sign that we have to deal with. This shows that in some cases, it may be preferable to approach a problem using implicit differentiation, even if you can take the explicit derivative!

> ## Exercises

> ### Problem 1

Use implicit differentiation to find the derivative $dy/dx$ of the following functions:

  1. $\tan(x^2y^4)=3x+y^2$
  2. $7y^2+\sin(3x)=12-y^4$
  3. $2y^3+4x^2-y=x^6$
  4. $x^2+y^2=\sin(xy)$

> ### Problem 2

Consider the equation of the circle $x^2+y^2=r^2$ for fixed $r$ that we discussed above. We showed previously that $\frac{dy}{dx}=-\frac{x}{y}=-\cot\theta$ for any point on the circle.

  1. Using the result for the first derivative, find the second derivative $d^2y/dx^2$ in terms of $x$, $y$, and/or $y'$. 
  2. Using the result for the first derivative, can you rewrite your expression for the second derivative in terms of only $x$ and $y$?
  3. Using equality $x^2+y^2=r^2$, can you rewrite your expression for the second derivative in terms of only $r$ and $y$?

> ### Problem 3

_This is a challenge problem._

Suppose there is a function $$f$$ defined by $$f(x+y)=f(x)+f(y)+x^2y+xy^2$$ for all $x$ and $y$, and $$\lim_{x\rightarrow 0}\frac{f(x)}{x}=1$$.

  1. What is $f(0)$?
  2. What is $f'(0)$?
  3. What is $f(x)$?
  4. What is $f'(x)$?
