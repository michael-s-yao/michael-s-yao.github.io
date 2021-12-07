---
permalink: /calculus/integration-by-parts/
author_profile: false
title: "Integration by Parts"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

Recall the [product rule](/calculus/evaluating-derivatives/index.html) for differentiation, _way_ back to when we were talking about differentiation techniques. That is, let's say that we had two functions $u$ and $v$ that are both functions of $x$. We could evaluate the derivative of their product in the following way:

$$\frac{d}{dx}[uv]=u\frac{dv}{dx}+v\frac{du}{dx}$$

It turns out that this product rule can be reformulated to help us evaluate integral expressions.

> ## Derivation

Let us start with the product rule for differentiation and integrate both sides from $x=a$ to $x=b$:

$$\int_a^b dx\frac{d}{dx}[uv]=\int_a^bdx\text{ }u\frac{dv}{dx}+\int_a^bdx\text{ }v\frac{du}{dx}$$

The left hand side can be evaluated quite simply, as we know that the antiderivative of the derivative of a function $u(x)v(x)$ is simply equal to the original function itself, by the definition of the antiderivative:

$$\int_a^b dx\frac{d}{dx}[uv]=u(b)v(b)-u(a)v(a)=\left.uv\right\vert_{x=a}^{x=b}$$

The rightmost expression in this equation is a concise way of writing the difference between the function $u(x)v(x)$ evaluated at $x=b$ and the function evaluated at $x=a$. Therefore, plugging this result back into our initial working equation, we have

$$\left.uv\right\vert_{x=a}^{x=b}=\int_a^bdx\text{ }u\frac{dv}{dx}+\int_a^bdx\text{ }v\frac{du}{dx}$$

Focusing our attention now on the right hand side, the $dx$ differential elements will "cancel out" with one another to simplify the two integral expressions: 

$$\left.uv\right\vert_{x=a}^{x=b}=\int_a^b udv+\int_a^b vdu$$

We can also move one of the integral expressions to the other side of the equation to give

<div class="notice--info">
<p style="font-size:13pt">$$\int_a^b udv=\left.uv\right\vert_{x=a}^{x=b}-\int_a^b vdu$$</p>
</div>

The formula is known as integration by parts. Of course, we have only considered the case for definite integration, but this method also works for indefinite integration as well with a similar formula:

<div class="notice--info">
<p style="font-size:13pt">$$\int udv=uv-\int vdu$$</p>
</div>

> ## Examples

The formula that we derived above is incredibly abstract, so let's see how we can actually use integration by parts in practice. Integration by parts is useful whenever we come across an integral whose integrand looks like it is the product of one function and the derivative of another function. Let's look exactly what this means.

> ### Problem 1

Consider the indefinite integral expression 

$$\int dx\text{ }x\sin(x)$$

The integrand $x\sin(x)$ of this integral is the product of one function, $x$, and the derivative of another function, $-\cos x$, as we can rewrite this integrand as 

$$x\sin(x)=x\frac{d}{dx}\left[-\cos x\right]$$

Whenever we encounter an integral in this form, it suggests that we may be able to solve it using integration by parts. Continuing with this problem, we can define $u=x$ and $v=-\cos x$, such that $\frac{dv}{dx}=\sin x$ and hence $dv=\sin (x)dx$. Given these function definitions, note that we can rewrite the initial indefinite integral as

$$\int dx\text{ }x\sin (x)=\int udv$$

In other words, this integral is exactly in the form that we need to perform integration by parts. Using the formula from above, in addition to the fact that $\frac{du}{dx}=1$ and so $du=dx$, we have

$$\int dx\text{ }x\sin (x)=uv-\int vdu=-x\cos x-\int (-\cos x)dx=-x\cos x+\int dx\text{ }\cos x$$

The remaining integral on the right hand side is now very easy to evaluate, as we have seen this trigonometric integral [previously](/calculus/evaluating-integrals/index.html#problem-2):

$$\int dx\text{ }x\sin (x)=-x\cos x+\sin x+C$$

This gives us the desired result. 

> ### Problem 1 (Again)

Our choice for defining the functions $u$ and $v$ in the above example may seem a bit arbitrary at first glance. After all, why can't we instead define $u=\sin x$ and $v=\frac{1}{2}x^2$, such that $du=dx\cos x$ and $dv=xdx$? Let's see what would happen if we made these choices in functions instead.

In this case, we can still proceed as normal at first. The original integral can still be written then the integration-by-parts form $$\int dx\text{ }x\sin(x)=\int udv$$. Continuing forward and applying the formula from above, we find that

$$\int dx\text{ }x \sin(x)=uv-\int vdu=\frac{1}{2}x^2\sin x-\frac{1}{2}\int dx\text{ }x^2\cos x$$

Now, we still have the remaining integral on the right hand side to evaluate, but we are in a similar position as before: we still don't know how to solve this integral either! We could try doing integration by parts again to attempt to find a closed-form expression for $\int dx x^2\cos x$, although this will still lead to nowhere: all we will do is to continue to rewrite the integration-by-parts problem into more and more complicated integration-by-parts integrals.

<div class="notice--warning">
<p style="font-size:13pt"><strong>Food for Thought</strong>: Imagine that we were to continue with this approach, and attempt to evaluate the integral expression $$\frac{1}{2}\int dx\text{ } x^2 \cos x$$ where you choose $u=\cos x$. What is your corresponding choice for $v$? What is $du$ and $dv$ in this case as a function of $x$ and $dx$? What is the integral expression that integration by parts gives you?</p>
</div>

This tells us that while integration by parts will always give us a mathematically correct equation, this doesn't necessarily mean that any choice for $u$ and $v$ will give you a _practically useful_ equation. You might have to experiment with different choices for $u$ and $v$ before you figure out a combination that will give you a result that leads to a simpler integral you know how to evaluate.

<div class="notice--success">
<p style="font-size:13pt"><strong>Helpful Tip</strong>: In general, it is usually the case that $u$ should be a polynomial function and $v$ should be either a trigonometric function or an exponential function. This is certainly not always the case, but it is often a good rule of thumb and works about 90% of the time.</p>
</div>

> ### Problem 2

Consider the indefinite integral expression

$$\int x \ln(x) dx$$

The integrand $x\ln(x)$ of this integral is the product of one function $\ln x$, and the derivative of another function, $\frac{1}{2}x^2$, as we can rewrite this integrand as

$$x\ln (x)=\ln(x)\frac{d}{dx}\left[\frac{1}{2}x^2\right]$$

Therefore, we can define $u=\ln x$ and $v=\frac{1}{2}x^2$, such that $\frac{dv}{dx}=x$ and hence $dv=xdx$. Given these function definitions, we can rewrite the initial indefinite integral and perform integration by parts:

$$\int dx\text{ }x\ln(x)=\int udv=uv-\int vdu=\frac{1}{2}x^2\ln(x)-\frac{1}{2}\int x^2\frac{1}{x}dx$$

where we have used the fact that $\frac{du}{dx}=\frac{1}{x}$, meaning that $du=\frac{1}{x}dx$. Simplifying the right hand side and evaluating the remaining integral, we find

$$\int dx\text{ }x\ln(x)=\frac{1}{2}x^2\ln(x)-\frac{1}{2}\int xdx=\frac{1}{2}x^2\ln(x)-\frac{1}{4}x^2+C$$

In this particular example, our choice for $u$ and $v$ is actually pretty straightforward. We cannot choose to set $dv=\ln(x)dx$, because we don't know what the antiderivative of $\ln(x)$ is! Since we aren't able to get an analytical expression for $\ln x$ (yet), this "necessitates" our choice for $u=\ln x$ and $v=\frac{1}{2}x^2$ from above. However, since we're ambitious students, this shouldn't stop us from at least trying to find the antiderivative of $\ln x$. Let's see if integration by parts can be of any help to us in finding this antiderivative.

> ### Problem 3

Consider the indefinite integral expression

$$\int \ln(x) dx$$

Although it may not look like it, the integrand is actually the product of two functions: $\ln(x)$ and $1$. Again, we don't know what the antiderivative of $\ln(x)$ is (this is the whole point of this problem), so this necessitates that we choose $u=\ln(x)$ and $v=x$, such that $du=\frac{1}{x}dx$ and $dv=dx$. Using this defined function quantities, we can rewrite the above integral expression and apply integration by parts to find

$$\int \ln(x) dx=\int u dv=uv-\int vdu=x\ln(x)-\int x\frac{1}{x}dx$$

Simplifying and evaluating the remaining integral on the right hand side, we find that

$$\int \ln(x)dx=x\ln (x)-\int dx=x\ln(x)-x+C$$

This result gives us the antiderivative of the natural logarithm function. This example demonstrates that in some cases, integration by parts may be useful to even if it doesn't seem like we can use it in the first place!

> ## Practice, Practice, Practice!

From the above example problems, it might start to be clear that choosing the "correct" choices for $u$ and $v$ can often be difficult. Similar to $u$-substitution, the only way to become familiar with what are the best choices in different situations is to do a lot of practice problems! There's really no way around it: the more problems you can expose yourself to, the more competent you'll be in identifying the functions $u$ and $v$ quickly, and even in identifying which types of problems should be attempted using integration by parts in the first place!

> ## Exercises

I encourage you to start with problems 1 and 2 and try some of the additional practice problems below first, before attempting problems 3 and 4. Problem 3 is challenging and problem 4 is even more challenging. However, all of the problems below can be solved using integration by parts, $u$-substitution, and/or the basic integration techniques that we have learned this far.

> ### Problem 1

Evaluate the following integral expressions. _Note_: For some of these problems, you may have to perform integration by parts successively multiple times.

  1. $$\int_1^9 \frac{\ln x}{\sqrt{x}}dx$$
  2. $$\int x^2\sin(x)dx$$
  3. $$\int \sin^{-1} (x)dx$$

_Hint_: For Part 3, recall that we have shown [previously](/calculus/inverse-function-derivatives/index.html#derivatives-of-inverse-trigonometric-functions) that 

$$\frac{d}{dx}\left[\sin^{-1}(x)\right]=\frac{1}{\sqrt{1-x^2}}$$

[Solution](/calculus/integration-by-parts-sol/index.html#problem-1){: .btn .btn--info}

> ### Problem 2

Evaluate the following integral expression.

$$\int_0^\pi e^x\cos xdx$$

[Solution](/calculus/integration-by-parts-sol/index.html#problem-2){: .btn .btn--info}

> ### Problem 3

If $n$ is a positive integer, prove that

$$\int_0^1 (\ln x)^ndx=(-1)^n n!$$

[Solution](/calculus/integration-by-parts-sol/index.html#problem-3){: .btn .btn--info}

> ### Problem 4

Show that

$$\int_0^1(1-x^2)^ndx=\frac{2^{2n}(n!)^2}{(2n+1)!}$$

_Hint_: Start by showing that if $I_n$ denotes the integral, then 

$$I_{k+1}=\frac{2k+2}{2k+3}I_k$$

[Solution](/calculus/integration-by-parts-sol/index.html#problem-4){: .btn .btn--info}

> ### Additional Practice

Here are some links to worksheets with additional exercises and solutions for you to practice integration by parts from various external sources. I ***strongly*** encourage you to do as many practice problems as possible to familiarize yourself with a broad range of common integration by parts problems.

  1. [University of Tennessee Mathematics](http://archives.math.utk.edu/visual.calculus/4/int_by_parts.1/index.html)
  2. [Khan Academy](https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new/bc-6-11/e/integration-by-parts)
  3. [UCSB Math 3B](http://web.math.ucsb.edu/~vtkala/2014/Math3B/Math3B-IntegrationByParts-Solutions.pdf)
  4. [Hialeah Senior High School](https://hialeahhigh.org/ourpages/auto/2014/9/11/60964343/Integration%20by%20Parts.pdf)
