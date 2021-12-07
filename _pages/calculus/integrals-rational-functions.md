---
permalink: /calculus/integrals-rational-functions/
author_profile: false
title: "Integrals of Rational Functions"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

Today, our sole focus is in evaluating integral expressions where the integrand is some sort of _rational function_. That is, we are interested in evaluating integrals of the form

$$\int dx\text{ }\frac{f(x)}{g(x)}$$

where $f(x), g(x)$ are polynomials. Let's consider one of the most basic rational functions out there first.

> ## Integral of $1/x$

Let's us evaluate the antiderivative

$$\int dx\text{ }\frac{1}{x}$$

Suppose first that $x>0$. We can define the variable $u$ such that $x=e^u$, and so therefore, $u=\ln x$ and also $dx=e^udu$. It is important for us to assume here that $x>0$ because the natural logarithm of a negative number is not defined. Making this substitution into this integral gives

$$\int dx\text{ }\frac{1}{x}=\int du\text{ }\frac{e^u}{e^u}=\int du=u+C=\ln x+C$$

What about in the case where $x<0$? In this case, let's instead define the variable $u$ such that $x=-e^u$, and so therefore, $u=\ln(-x)$ and also $dx=-e^udu$. Notice that from this modified choice in $u$, the logarithm expression $\ln(-x)$ is well-defined because $-x$ is positive when $x<0$. Making this $u$-substitution into this integral gives

$$\int dx\text{ }\frac{1}{x}=\int du\text{ }\frac{-e^u}{-e^u}=\int du=u+C=\ln (-x)+C$$

Combining the results from both the positive and the negative cases, we can write that in general for all intervals involving real $x\neq 0$,

<div class="notice--success">
<p style="font-size:13pt">$$\int dx\text{ }\frac{1}{x}\ln\vert x\vert +C$$</p>
</div>

We have now proven how to evaluate the integral expressions of the form $\int dx\text{ }\frac{1}{x}$.

> ## Getting a Little More Complicated

Of course, this integral result can be combined with all of the integration framework that we have done so far, including techniques such as $u$-substitution and integration by parts. Let's go over a few example problems to illustrate how this works.

> ### Example 1

Suppose that we want to evaluate the integral expression

$$\int dx\text{ }\frac{2x-1}{x^2-x-6}$$

After learning techniques on [$u$-substitution](/calculus/u-substitution/index.html), we might keenly notice that the derivative of the denominator is the function in the numerator. Therefore, we can define $u=x^2-x-6$ and therefore $\frac{du}{dx}=2x-1$, meaning that $du=(2x-1)dx$. Making this substitution gives

$$\int du\text{ }\frac{1}{u}=\log\vert u\vert = \log \vert x^2-x-6\vert+C$$

> ### Example 2

Next, let's evaluate the integral expression

$$\int dx\text{ }\tan x$$

We can rewrite this integrand expression in terms of sine and cosine functions to get $$\int dx\text{ }\frac{\sin x}{\cos x}$$, upon which we notice that the numerator is related to the derivative of the denominator. Therefore, we can define the variable $u=\cos x$ and so $du=-\sin (x)dx$. Making this substitution into the integral gives

$$\int dx\text{ }\tan x=-\int du\text{ }\frac{1}{u}=-\ln\vert u\vert + C=-\ln\vert \cos x\vert +C$$

> ## Partial Fraction Decomposition

Imagine that we _slightly_ modified the integral from the first example above to now be in the form of

$$\int dx\text{ }\frac{2}{x^2-x-6}$$

Now, this problem suddenly became a lot harder. Recall that the technique we used to approach [example 1](/calculus/integrals-rational-functions/index.html#example-1) is to make a $u$-substitution based on the fact that the derivative of the denominator was in the numerator. However, this is no longer the case! We can try some number of attempts at making some $u$-substitutions, but none of them will work in this case. To approach more complicated integrals like this, we need an advanced technique called *partial fraction decomposition*.

> ### Example 3

**Partial Fraction Decomposition** is essentially decomposing a complicated fraction _with a factorable denominator_ into a sum of simpler fractions. For example consider the fraction

$$y=\frac{1}{6}$$

Notice that we can factor the denominator as $2\cdot 3$, and so

$$y=\frac{1}{2\cdot 3}$$

Let's assume that we can rewrite this fraction as a sum of fractions _where the denominators are the factored components of the original denominator_. In other words, we can assume that  

$$y=\frac{1}{2\cdot 3}=\frac{A}{2}+\frac{B}{3}$$

for some constants $A, B$. To solve for these constants, we can multiply both sides of this equation by the original denominator, $6$, to get

$$6y=6\frac{1}{6}=1=3A+2B$$

Therefore, we simply just need to choose a suitable $A$ and $B$ such that $3A+2B=1$. After experimenting with a few values, we can choose $A=1$ and $B=-1$. Therefore, we have decomposed the original fraction into

$$y=\frac{1}{6}=\frac{1}{2}-\frac{1}{3}$$

> ### Example 4

While we are able to perform fraction decomposition on regular "numerical" fractions, this isn't really of much help to us in the context of calculus and integration. So, let's try a harder example and decompose the fraction

$$I=\frac{2}{x^2-x-6}$$

Notice that the denominator can be factored as $x^2-x-6=(x-3)(x+2)$. Therefore, based on the example above, let's try defining an $A$ and $B$ such that

$$I=\frac{2}{x^2-x-6}=\frac{A}{x-3}+\frac{B}{x+2}$$

If we multiply both sides of this equation by the unfactored denominator $x^2-x-6=(x-3)(x+2)$, then

$$2=A(x+2)+B(x-3)=(A+B)x+(2A-3B)$$

There are no $x$ terms on the left hand side, and so the coefficient $A+B=0$ necessarily. Meanwhile, $2=2A-3B$. This gives us a system of equations in order to solve for constants $A$ and $B$. Solving this algebraically gives $B=-2$ and $A=2$, and so

$$I=\frac{2}{x^2-x-6}=\frac{2}{x-3}-\frac{2}{x+2}$$

This completes the fraction decomposition process.

Note that the fraction $I$ was the exact integrand for the motivating example [above](/calculus/integrals-rational-functions/index.html#partial-fraction-decomposition). Therefore, going back to this earlier example and using our result, we have shown that

$$\int dx\text{ }\frac{2}{x^2-x-6}=\int dx\text{ }\frac{2}{x-3}-\int dx\text{ }\frac{2}{x-2}$$

This is good! On the left hand side, we were presented with an integral with no clear way of how to approach it, but through decomposing the problem into a set of easier integrals, on the right hand side, this problem can be tackled now through straightforward $u$-substitution. We can define the variable substitutions $u=x-3$ and $v=x-2$, such that $du=dx$ and $dv=dx$. Therefore,

$$\int dx\text{ }\frac{2}{x^2-x-6}=2\int du\text{ }\frac{1}{u}-2\int dv\text{ }\frac{1}{v}=2(\ln\vert u\vert -\ln\vert v\vert)+C$$

Further simplifying and substituting back the definitions of $u$ and $v$:

$$\int dx\text{ }\frac{2}{x^2-x-6}=2\ln\left\vert\frac{u}{v}\right\vert+C=\ln\left(\frac{x-3}{x-2}\right)^2+C$$

This illustrates how the technique of partial fraction decomposition can be used to evaluate a variety of integral expressions involving rational functions.

> ## Advanced Fraction Decomposition

In this section, we will discussed some of the more nuanced cases of partial fraction decomposition that you should be aware of.

> ### Repeated Roots

Consider the problem of decomposing the following fraction:

$$\frac{1}{(x+2)^2(x-1)}$$

Ordinarily, based on the previous example, we might be inclined to guess that this fraction will be decomposed into a form $$\frac{1}{(x+2)^2(x-1)}=\frac{A}{x+2}+\frac{B}{x-1}$$. However, this is _not_ the case! The issue is that we also need to account for the fact that the $(x+2)$ root is repeated in the denominator:

$$\frac{1}{(x+2)^2(x-1)}=\frac{A}{x+2}+\frac{B}{(x+2)^2}+\frac{C}{x-1}$$

In general, assume that the factor $f(x)$ is repeated $n$ times in the denominator. The fraction decomposition will look like

$$\frac{A_1}{f(x)}+\frac{A_2}{f^2(x)}+\cdots+\frac{A_{n-1}}{f^{n-1}(x)}+\frac{A_n}{f^n(x)}+(\text{any other factors})$$

> ### Higher Power Factors

Consider the problem of decomposing the following fraction:

$$\frac{1}{x^4-1}$$

Through using the difference of squares formula $a^2-b^2=(a+b)(a-b)$, we can decompose this fraction as

$$\frac{1}{x^4-1}=\frac{1}{(x^2+1)(x^2-1)}=\frac{1}{(x^2+1)(x+1)(x-1)}$$

Based on the previous examples, we might be inclined to guess that this fraction will be decomposed into a form $$\frac{1}{(x^2+1)(x+1)(x-1)}=\frac{A}{x^2+1}+\frac{B}{x+1}+\frac{C}{x-1}$$. However, this is _not_ the case! The issue is that we also need to account for the fact that the $x^2+1$ root is a polynomial of order $2$ in the denominator:

$$\frac{1}{x^4-1}=\frac{Ax+B}{x^2+1}+\frac{C}{x+1}+\frac{D}{x-1}$$

In general, assume an unfactorable factor $f(x)$, a polynomial of degree $n$, is in the denominator. The fraction decomposition will look like

$$\frac{A_{n-1}x^{n-1}+A_{n-2}x^{n-2}+\cdots+A_1x+A_0}{f(x)}+(\text{any other factors})$$

> ## Trigonometric Substitutions

As we have seen, partial fraction decomposition is a powerful technique to turn complicated integrals involving rational functions into a sum of simpler integrals. In this section we will learn about another integration technique known as _trig substitution_.

> ### Introduction

As the name likely suggests, **trig substitution** involves substituting an appropriate trigonometric function for a variable of integration in order to make an integral analytically evaluable. The whole premise of this integration technique relies on the fact that

$$\sin^2 x+\cos^2=1, \quad \sec^2x=1+\tan^2x, \quad \tan^2x=\sec^2x-1$$

Each of these trigonometric identities will be useful to us in different situations in evaluating integrals of functions of either $a^2-x^2$, $x^2+a^2$, or $x^2-a^2$, respectively for some constant $a$.

> ### Integrals Involving $a^2-x^2$

In this first case, let's look at integrals that involve the expression $a^2-x^2$ for some constant $a$. For example, consider the example where we want to evaluate the integral $$\int\frac{dx}{\sqrt{a^2-x^2}}$$

In this case, $u$-substitution, integration be parts, or even partial fraction decomposition will not work. However, we can make the variable substitution $x=a\sin\theta$ (and hence $dx=a\cos\theta$), and then use the trigonometric identity that $1-\sin^2\theta=\cos^2\theta$. The integral then transforms into

$$\int\frac{dx}{\sqrt{a^2-x^2}}=\int\frac{a\cos\theta d\theta}{\sqrt{a^2-a^2\sin^2\theta}}=\int\frac{a\cos\theta d\theta}{\sqrt{a^2(1-\sin^2\theta)}}=\int\frac{a\cos\theta d\theta}{a\sqrt{\cos^2\theta}}$$

Further simplifying,

$$\int\frac{dx}{\sqrt{a^2-x^2}}=\int\frac{a\cos\theta d\theta}{a\cos\theta}=\int d\theta=\theta+C$$

Now, we can use that $x=a\sin\theta$, and hence $\theta=\sin^{-1}\left(x/a\right)$, to get

$$\int\frac{dx}{\sqrt{a^2-x^2}}=\sin^{-1}\left(\frac{x}{a}\right)+C$$

Let's consider another common example problem that involves a similar substitution with a variable $\theta$ such that $x=a\sin\theta$:

$$\int dx \sqrt{a^2-x^2}=\int a\cos\theta d\theta\sqrt{a^2-a^2\sin^2\theta}=\int a\cos\theta d\theta\sqrt{a^2(1-\sin^2\theta)}$$

Using the trigonometric identity $\cos\theta=\sqrt{1-\sin^2\theta}$, 

$$\int dx\sqrt{a^2-x^2}=\int a^2\cos^2\theta d\theta=a^2\int\left(\frac{1+\cos(2\theta)}{2}\right)d\theta$$

To rewrite the $\cos^2\theta$ term in the integral, we had to do some clever manipulations involving the [trigonometric power reducing formulas](https://en.wikipedia.org/wiki/List_of_trigonometric_identities#Power-reduction_formulae). Now, this integral can be easily evaluated using the power rule and $u$-substitution with $u=2\theta$ to give

$$\int dx\sqrt{a^2-x^2}=\frac{a^2}{2}\left(\theta+\frac{\sin(2\theta)}{2}\right)+C$$

Using the double-angle formula that $\sin(2\theta)/2=\sin\theta\cos\theta=\frac{x}{a}\sqrt{1-\frac{x^2}{a^2}}$ due to the fact that $\sin\theta=\frac{x}{a}$ by the definition of the variable $\theta$, we have

$$\int dx\sqrt{a^2-x^2}=\frac{a^2}{2}\left(\sin^{-1}\frac{x}{a}+\frac{x}{a}\sqrt{1-\frac{x^2}{a^2}}\right)+C$$

> ### Integrals Involving $x^2+a^2$

The process is very similar to the above, with the caveat that we make the substitution that $x=a\tan\theta$ and rely on the trigonometric identity $\sec^2\theta=1+\tan^2\theta$. To illustrate this, let's go over an example and evaluate the integral expression

$$\int\frac{dx}{a^2+x^2}$$

Making the substitution that

$$x=a\tan\theta, \quad dx=a\sec^2\theta d\theta, \quad \theta=\tan^{-1}\frac{x}{a}$$

we have

$$\int\frac{dx}{a^2+x^2}=\int \frac{a \sec ^{2} \theta d \theta}{a^{2}+a^{2} \tan ^{2} \theta}=\int \frac{a \sec ^{2} \theta d \theta}{a^{2}\left(1+\tan ^{2} \theta\right)}$$

Now, using the cited trigonometric identity,

$$\int\frac{dx}{a^2+x^2}=\int \frac{a \sec ^{2} \theta d \theta}{a^{2} \sec ^{2} \theta}=\int\frac{d\theta}{a}=\frac{\theta}{a}+C=\frac{1}{a}\tan^{-1}\frac{x}{a}+C$$

> ### Integrals Involving $x^2-a^2$

Once again, the process is very similar to the above, with the caveat that we make the substitution that $x=a\sec\theta$ and rely on the trigonometric identity $\tan^2\theta=\sec^2\theta-1$. To illustrate this, let's go over an example and evaluate the integral expression

$$\int \sqrt{x^2-a^2}dx$$

Making the substitution that

$$x=a\sec\theta, \quad dx=a\sec \theta\tan\theta d\theta, \theta=\sec^{-1}\frac{x}{a}$$

we have

$$\int \sqrt{x^2-a^2}dx=\int \sqrt{a^2\sec^2\theta-a^2}\cdot a\sec\theta\tan\theta d\theta$$

Further simplifying,

$$\int \sqrt{x^2-a^2}dx=\int\sqrt{a^2(\sec^2\theta-1)}\cdot a\sec\theta\tan\theta d\theta$$

Using the cited trigonometric identity that $\tan\theta=\sqrt{\sec^2\theta-1}$, we have

$$\int \sqrt{x^2-a^2}dx=\int a^2\sec\theta \tan^2\theta d\theta=a^2\int \sec\theta(\sec^2\theta-1)d\theta$$

Expanding out this integral gives

$$\int\sqrt{x^2-a^2}dx=a^2\int \sec^3\theta d\theta-a^2\int\sec\theta d\theta$$

It turns out that the right hand side of this equation involves two integral expressions that are, in and of themselves, comprise one of the most difficult sets of elementary integrals to evaluate. We will derive the results of these integrals [below](/calculus/integrals-rational-functions/index.html#addendum), but in order to keep our work concise, we will just list the result that

$$\int\sqrt{x^2-a^2}dx=\frac{a^2}{2}\left(\sec\theta\tan\theta-\ln\vert\sec\theta+\tan\theta\vert\right)+C$$

Making the substitution that $\frac{x}{a}=\sec\theta$, and hence $\sqrt{\frac{x^2}{a^2}-a}=\tan\theta$, we have

$$\int\sqrt{x^2-a^2}dx=\frac{1}{2}\left(x \sqrt{x^{2}-a^{2}}-a^{2} \ln \left|\frac{x+\sqrt{x^{2}-a^{2}}}{a}\right|\right)+C$$

after simplifying.

> ## Conclusion

In the above examples, we have shown a variety of advanced integration techniques that can be used to tackle a wide variety of integrals involving rational functions, including the integral of the function $\frac{1}{x}$, partial fraction decomposition, and trigonometric substitution techniques. In particular, here is a good table to summarize the different trig substitutions to keep in mind,

**If the integrand is a function of...** | **..make this substitution!**
$a^2-x^2$ | $x=a\sin\theta$
$x^2+a^2$ | $x=a\tan\theta$
$x^2-a^2$ | $x=a\sec\theta$

> ## Addendum

In this addendum, we will discuss how to derive the results the integral expressions involving $\sec\theta$ and $\sec^3\theta$ from [above](/calculus/integrals-rational-functions/index.html#integrals-involving-x2-a2). While these derivations are fairly difficult, integrals of these types come up quite often in many practical applications, and so it is useful to discuss them in detail here.

> ### Integral of $\sec\theta$

As we will see, the integral result is

$$\int\sec\theta d\theta=\ln \vert \sec\theta + \tan\theta \vert + C=\frac{1}{2}\ln\left\vert \frac{1+\sin\theta}{1-\sin\theta}\right\vert +C$$

Here, we will only prove the first equality. The second result can be derived from various trigonometric identities which we will not focus on here. It turns out that we can derive this result through using the partial fraction decomposition technique from above. First, we can cleverly rewrite the integral expression as

$$\int \sec\theta d\theta=\int\frac{d\theta}{\cos\theta}=\int \frac{\cos\theta d\theta}{\cos^2\theta}$$

Using the trigonometric identity that $\cos^2\theta=1-\sin^2\theta$, we have

$$\int \sec\theta d\theta=\int \frac{\cos\theta d\theta}{1-\sin^2\theta}$$

We can define the variable $u=\sin\theta$ and hence $du=\cos\theta d\theta$. Making this $u$-substitution gives

$$\int\sec\theta d\theta=\frac{du}{1-u^2}$$

At this point, this integral could actually be evaluated using [trig substitution](/calculus/integrals-rational-functions/index.html#integrals-involving-a2-x2) from above, but we can also evaluate it using partial fraction decomposition. Through decomposing the integrand, we can find that

$$\frac{1}{1-u^2}=\frac{1}{(1+u)(1-u)}=\frac{1}{2(1+u)}+\frac{1}{2(1-u)}$$

Therefore,

$$\int\sec\theta d\theta=\frac{1}{2}\int\frac{du}{1+u}+\frac{1}{2}\int\frac{du}{1-u}=\frac{1}{2}\ln\vert \frac{1+u}{1-u}\vert+C$$

Since $u=\sin\theta$, we know that $\frac{1+u}{1-u}=\frac{1+\sin\theta}{1-\sin\theta}$, and so

$$\int\sec\theta d\theta=\frac{1}{2}\ln\left\vert\frac{1+\sin\theta}{1-\sin\theta}\right\vert +C$$

We will leave it as an exercise below[/calculus/integrals-rational-functions/index.html#problem-3) to show that this expression is also equal to $\ln \vert \sec\theta + \tan\theta \vert + C$, but all in all, we have shown that

<div class="notice--success">
<p style="font-size:13pt">$$\int\sec\theta d\theta=\ln \vert \sec\theta + \tan\theta \vert + C=\frac{1}{2}\ln\left\vert \frac{1+\sin\theta}{1-\sin\theta}\right\vert +C$$</p>
</div>

> ### Integral of $\sec^3\theta$

Once we have figured out the integral of $\sec\theta$ from above, evaluating the integral

$$\int \sec^3\theta d\theta$$

is actually pretty easy. The end result that we will show below is that

<div class="notice--success">
<p style="font-size:13pt">$$\int \sec ^{3} x d x=\frac{1}{2}(\sec x \tan x+\ln |\sec x+\tan x|)+C$$</p>
</div>

The approach that we will use is through [integration by parts](/calculus/integration-by-parts/index.html). Let us define $u=\sec x$ and $dv=\sec^2 xdx$, such that $du=\sec x\tan xdx$ and $v=\tan x$. Directly applying the integration by parts formula, we have

$$\int \sec^3 x dx=\int (\sec x)(\sec^x dx)=\sec x\tan x-\int \tan x(\sec x\tan x)dx$$

Further evaluating this integral gives

<p style="font-size:12pt">$$\int \sec^3 x dx=\sec x\tan x-\int \sec x\tan^2 xdx=\sec x\tan x-\int \sec x(\sec^2-1)dx$$</p>

where we have used the trigonometric identity that $\tan^2x-\sec^2-1$. We can split up the integral on the right hand side as

$$\int \sec^3x dx=\sec x\tan x-\int \sec^3x dx +\int \sec xdx$$

Rearranging terms,

$$2\int \sec^3 xdx=\sec x \tan x+\int \sec xdx$$

After dividing both sides of this equation by two and using the result from the above [previous section](/calculus/integrals-rational-functions/index.html#integral-of-sectheta), we can evaluate the integral on the right hand side to get

<div class="notice--success">
<p style="font-size:13pt">$$\int \sec ^{3} x d x=\frac{1}{2}(\sec x \tan x+\ln |\sec x+\tan x|)+C$$</p>
</div>

> ## Exercises

> ### Problem 1

<p style="font-size:13pt">Decompose the following set of fractions:</p>
<ol>
  <li style="font-size:13pt">$$\frac{e^x}{(e^x-1)(e^x+3)}$$</li>
  <li style="font-size:13pt">$$\frac{3x+1}{x^2(x^2+25)}$$</li>
  <li style="font-size:13pt">$$\frac{4x^3+16x+7}{(x^2+4)^2}$$</li>
</ol>

[Solution](/calculus/integrals-rational-functions-sol/index.html#problem-1){: .btn .btn--info}
  
> ### Problem 2

<p style="font-size:13pt">Evaluate the following integral expressions:</p>
<ol>
  <li style="font-size:13pt">$$\int\frac{\cos x}{\sin^3x+\sin x}dx$$</li>
  <li style="font-size:13pt">$$\int\frac{\sec^2 x}{\tan^3x-\tan^2 x}dx$$</li>
  <li style="font-size:13pt">$$\int_3^4\frac{x^3-2x^2-4}{x^3-2x^2}dx$$</li>
</ol>
<p style="font-size:13pt"><em>Hint: Before approaching the last integral, try to carry out <a href="https://www.math.ucla.edu/~noah/teaching/math3b-w19/partial-fractions.pdf">fraction long division</a> first.</em></p>

[Solution](/calculus/integrals-rational-functions-sol/index.html#problem-2){: .btn .btn--info}

> ### Problem 3

<p style="font-size:13pt">From <a href="/calculus/integrals-rational-functions/index.html#integral-of-sectheta">above</a>, we asserted that</p>
<p style="font-size:13pt">$$\int\sec\theta d\theta=\ln \vert \sec\theta + \tan\theta \vert + C=\frac{1}{2}\ln\left\vert \frac{1+\sin\theta}{1-\sin\theta}\right\vert +C$$</p>
<p style="font-size:13pt">We proved that the second expression involving the sine functions was true above. In this problem use the appropriate trigonometric identities and manipulations to show that</p>
<p style="font-size:13pt">$$\frac{1}{2}\ln\left\vert\frac{1+\sin\theta}{1-\sin\theta} \right\vert=\ln\vert \sec\theta+\tan\theta\vert$$</p>
<p style="font-size:13pt">for any $\theta$.</p>

[Solution](/calculus/integrals-rational-functions-sol/index.html#problem-3){: .btn .btn--info}

> ### Problem 4

<p style="font-size:13pt">Evaluate the following integral expressions:</p>
<ol>
  <li style="font-size:13pt">$$\int\frac{x}{\sqrt{x^2+x+1}}dx$$</li>
  <li style="font-size:13pt">$$\int_0^1 x\sqrt{1-x^4}dx$$</li>
  <li style="font-size:13pt">$$\int_2^4\frac{\sqrt{x^2-4}}{x}dx$$</li>
  <li style="font-size:13pt">$$\int \frac{x^6}{\sqrt{1-x^{14}}}dx$$</li>
</ol>

[Solution](/calculus/integrals-rational-functions-sol/index.html#problem-4){: .btn .btn--info}
