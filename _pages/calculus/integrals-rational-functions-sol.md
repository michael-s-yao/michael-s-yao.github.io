---
permalink: /calculus/integrals-rational-functions-sol/
author_profile: false
title: "Integrals of Rational Functions (Solutions)"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

<div class="notice--danger">
<p style="font-size:13pt">The following solutions are for the integration practice problems linked <a href="/calculus/integration-by-parts/index.html#exercises">here</a>. I encourage you to attempt them by yourself first before looking through the solutions.</p>
</div>

Original problems statements are highlighted in <span style="color:blue">blue</span>. Final answers are highlighted in <span style="color:green">green</span>.

> ## Problem 1

<div class="notice--info">
<p style="font-size:13pt">Decompose the following set of fractions:</p>
<ol>
  <li style="font-size:13pt">$$\frac{e^x}{(e^x-1)(e^x+3)}$$</li>
  <li style="font-size:13pt">$$\frac{3x+1}{x^2(x^2+25)}$$</li>
  <li style="font-size:13pt">$$\frac{4x^3+16x+7}{(x^2+4)^2}$$</li>
</ol>
</div>

> ### Part 1

In this problem, we can decompose the fraction as

$$\frac{e^x}{(e^x-1)(e^x+3)}=\frac{A}{e^x-1}+\frac{B}{e^x+3}$$

for some constants $A$ and $B$. Multiplying both sides of this equation by the denominator on the left hand side, we have

$$e^x=A(e^x+3)+B(e^x-1)=(A+B)e^x+(3A-B)$$

Therefore, equating coefficients on both sides,

$$A+B=1, \quad 3A-B=0$$

Solving this systems of equations gives $A=1/4$ and $B=3/4$, and so

<div class="notice--success">
<p style="font-size:13pt">$$\frac{e^x}{(e^x-1)(e^x+3)}=\frac{1}{4(e^x-1)}+\frac{3}{4(e^x+3)}$$</p>
</div>

> ### Part 2

In this problem, we can decompose the fraction as

$$\frac{3x+1}{x^2(x^2+25)}=\frac{A}{x}+\frac{B}{x^2}+\frac{Cx+D}{x^2+25}$$

for some constants $A, B, C, D$. Multiplying both sides of this equation by the denominator on the left hand side, we have

$$3x+1=Ax(x^2+25)+B(x^2+25)+(Cx+D)x^2$$

Grouping like terms,

$$3x+1=(A+C)x^3+(B+D)x^2+(25A)x+25B$$

Therefore, equating coefficients on both sides,

$$A+C=B+D=0, \quad 25A=3, \quad 25B=1$$

Solving this systems of equations gives $A=3/25$, $B=1/25$, $C=-3/25$, and $D=-1/25$, and so

<div class="notice--success">
<p style="font-size:13pt">$$\frac{3x+1}{x^2(x^2+25)}=\frac{3}{25x}+\frac{1}{25x^2}-\frac{3x+1}{25(x^2+25)}$$</p>
</div>

> ### Part 3

In this problem, we can decompose the fraction as

$$\frac{4x^3+16x+7}{(x^2+4)^2}=\frac{Ax+B}{x^2+4}+\frac{Cx+D}{(x^2+4)^2}$$

for some constants $A, B, C, D$. Multiplying both sides of this equation by the denominator on the left hand side, we have

$$4x^3+16x+7=(Ax+B)(x^2+4)+(Cx+D)$$

Expanding the right hand side and grouping like terms,

$$4x^3+16x+7=Ax^3+Bx^2+(4A+C)x+(4B+D)$$

Therefore, equating coefficients on both sides,

$$A=4, \quad B=0, \quad 4A+C=16, \quad 4B+D=7$$

Solving this systems of equations gives $A=4$, $B=0$, $C=0$, and $D=7$, and so

<div class="notice--success">
<p style="font-size:13pt">$$\frac{4x^3+16x+7}{(x^2+4)^2}=\frac{4x}{x^2+4}+\frac{7}{(x^2+4)^2}$$</p>
</div>

> ## Problem 2

<div class="notice--info">
<p style="font-size:13pt">Evaluate the following integral expressions:</p>
<ol>
  <li style="font-size:13pt">$$\int\frac{\cos x}{\sin^3x+\sin x}dx$$</li>
  <li style="font-size:13pt">$$\int\frac{\sec^2 x}{\tan^3x-\tan^2 x}dx$$</li>
  <li style="font-size:13pt">$$\int_3^4\frac{x^3-2x^2-4}{x^3-2x^2}dx$$</li>
</ol>
<p style="font-size:13pt"><em>Hint: Before approaching the last integral, try to carry out <a href="https://www.math.ucla.edu/~noah/teaching/math3b-w19/partial-fractions.pdf">fraction long division</a> first.</em></p>
</div>

> ### Part 1

First, we can make the substitution of $u=\sin x$, such that $du=\cos x dx$. This converts our integral into

$$\int\frac{\cos x}{\sin^3x+\sin x}dx=\int \frac{1}{u^3+u}du=\int \frac{1}{u(u^2+1)}du$$

Partial fraction decomposition allows us to separate the integral with respect to $u$ as

$$\int\frac{\cos x}{\sin^3x+\sin x}dx=\int\frac{1}{u}du-\int\frac{u}{1+u^2}du=$$

The first integral on the right hand side can be fairly easily evaluated. In order to evaluate the second integral, we can define the variable $w=u^2$ such that $dw=2u du$ and $\frac{1}{2}dw=u du$. Therefore,

$$\int\frac{\cos x}{\sin^3x+\sin x}dx=\ln\vert u\vert-\frac{1}{2}\int\frac{1}{1+w}dw=\ln\vert u\vert-\frac{1}{2}\ln\vert w+1\vert +C$$

Since $w=u^2=\sin^2x$, we have

<div class="notice--success">
<p style="font-size:13pt">$$\int\frac{\cos x}{\sin^3x+\sin x}dx=\ln\vert \sin x\vert-\frac{1}{2}\ln\vert 1+\sin^2x\vert +C$$</p>
</div>

> ### Part 2

First, we can make the substitution of $u=\tan x$, such that $du=\sec^2 x dx$. This converts our integral into

$$\int\frac{\sec^2 x}{\tan^3x-\tan^2 x}dx=\int \frac{1}{u^3-u^2}du=\int \frac{1}{u^2(u-1)}du$$

Partial fraction decomposition allows us to separate the integral with respect to $u$ as

$$\int\frac{\sec^2 x}{\tan^3x-\tan^2 x}dx=-\int\frac{1}{u}du-\int\frac{1}{u^2}du+\int\frac{1}{u-1}du$$

All of the integrals on the right hand side are integrals that we have seen before, and so

$$\int\frac{\sec^2 x}{\tan^3x-\tan^2 x}dx=-\ln\vert u\vert+\frac{1}{u}+\ln\vert u-1\vert+C$$

Since $u=\tan x$, we have

<div class="notice--success">
<p style="font-size:13pt">$$\int\frac{\sec^2 x}{\tan^3x-\tan^2 x}dx=\cot u+\ln\left\vert\frac{\tan x -1}{\tan x}\right\vert+C$$</p>
</div>

> ### Part 3

Notice that we can rewrite the integrand as

$$\int_3^4\frac{x^3-2x^2-4}{x^3-2x^2}dx=\int_3^4\frac{x^3-2x^2}{x^3-2x^2}dx-\int_3^4\frac{4}{x^3-2x^2}dx$$

Simplifying the integral expressions on the right hand side gives

$$\int_3^4\frac{x^3-2x^2-4}{x^3-2x^2}dx=\int_3^4dx-\int_3^4\frac{4}{x^3-2x^2}dx=1-\int_3^4\frac{4}{x^3-2x^2}dx$$

To evaluate the remaining integral on the right hand side, we can use partial fraction decomposition, which allows us to separate the integral with respect to $x$ as

$$\int_3^4\frac{x^3-2x^2-4}{x^3-2x^2}dx=1+\int_3^4\frac{1}{x}dx+2\int_3^4\frac{1}{x^2}dx-\int_3^4\frac{1}{x-2}dx$$

The right hand side is now composed of integrals that we have seen before, and so it simplifies to

$$\int_3^4\frac{x^3-2x^2-4}{x^3-2x^2}dx=1+\ln\left(\frac{4}{3}\right)-2\left(\frac{1}{4}-\frac{1}{3}\right)-\ln 2+\ln 1$$

Simplifying the right hand side analytically gives

<div class="notice--success">
<p style="font-size:13pt">$$\int_3^4\frac{x^3-2x^2-4}{x^3-2x^2}dx=\frac{7}{6}+\ln\left(\frac{2}{3}\right)$$</p>
</div>

> ## Problem 3

<div class="notice--info">
<p style="font-size:13pt">From <a href="/calculus/integrals-rational-functions/index.html#integral-of-sectheta">above</a>, we asserted that</p>
<p style="font-size:13pt">$$\int\sec\theta d\theta=\ln \vert \sec\theta + \tan\theta \vert + C=\frac{1}{2}\ln\left\vert \frac{1+\sin\theta}{1-\sin\theta}\right\vert +C$$</p>
<p style="font-size:13pt">We proved that the second expression involving the sine functions was true above. In this problem use the appropriate trigonometric identities and manipulations to show that</p>
<p style="font-size:13pt">$$\frac{1}{2}\ln\left\vert\frac{1+\sin\theta}{1-\sin\theta} \right\vert=\ln\vert \sec\theta+\tan\theta\vert$$</p>
<p style="font-size:13pt">for any $\theta$.</p>
</div>

This is more an exercise in trigonometric identities than calculus per say. First, consider the expression 

$$(\sec\theta+\tan\theta)^2=\sec^2\theta+2\tan\theta\sec\theta+\tan^2\theta$$

We can rewrite the right hand side in terms of sine and cosine functions.

$$(\sec\theta+\tan\theta)^2=\frac{1}{\cos^2\theta}+\frac{2\sin\theta}{\cos^2\theta}+\frac{\sin^2\theta}{\cos^2\theta}=\frac{\sin^2\theta+2\sin\theta+1}{\cos^2\theta}$$

We will then factor the numerator and also use the trigonometric identity $\sin^2\theta+\cos^2\theta=1$ to rewrite the denominator:

$$(\sec\theta+\tan\theta)^2=\frac{(1+\sin\theta)^2}{1-\sin^2\theta}=\frac{(1+\sin\theta)^2}{(1+\sin\theta)(1-\sin\theta)}=\frac{1+\sin\theta}{1-\sin\theta}$$

after cancelling out the common factor of $1+\sin\theta$ from both the numerator and the denominator. Therefore, we have shown that

$$\sec\theta+\tan\theta=\sqrt{\frac{1+\sin\theta}{1-\sin\theta}}$$

Taking the absolute value and then the natural logarithm of both sides,

$$\ln\vert \sec\theta+\tan\theta\vert=\ln\left\vert\frac{1+\sin\theta}{1-\sin\theta}\right\vert^{1/2}$$

and finally, we use the logarithmic identity that $\ln a^b=b\ln a$ to get

<div class="notice--success">
<p style="font-size:13pt">$$\ln\vert \sec\theta+\tan\theta\vert=\frac{1}{2}\ln\left\vert\frac{1+\sin\theta}{1-\sin\theta}\right\vert$$</p>
</div>

Of course, there are number of valid ways to prove this identity given, and this is only one way to go about it.

> ## Problem 4

<div class="notice--info">
<p style="font-size:13pt">Evaluate the following integral expressions:</p>
<ol>
  <li style="font-size:13pt">$$\int\frac{x}{\sqrt{x^2+x+1}}dx$$</li>
  <li style="font-size:13pt">$$\int_0^1 x\sqrt{1-x^4}dx$$</li>
  <li style="font-size:13pt">$$\int_2^4\frac{\sqrt{x^2-4}}{x}dx$$</li>
  <li style="font-size:13pt">$$\int \frac{x^6}{\sqrt{1-x^{14}}}dx$$</li>
</ol>
</div>

Although not explicitly stated, all four of these integral expressions rely on clever manipulations using trigonometric substitutions in order to evaluate them. We will demonstrate how to approach trig substitution for each of these problems.

> ### Part 1

For the first integral, it is not immediately apparent how to approach this problem, as we don't see a $x^2-a^2$ or $a^2-x^2$ or $x^2+a^2$ anywhere in the integral. However, notice what happens when we complete the square in the radical in the denominator:

$$\int\frac{x}{\sqrt{x^2+x+1}}dx=\int\frac{x}{\sqrt{\left(x+\frac{1}{2}\right)^2+\frac{3}{4}}}dx=\int\frac{x}{\sqrt{\left(x+\frac{1}{2}\right)^2+\left(\frac{\sqrt{3}}{2}\right)^2}}dx$$

Now, we can make the $u$-substitution that $u=x+\frac{1}{2}$, such that $du=dx$ and $x=u-\frac{1}{2}$. Therefore,

$$\int\frac{x}{\sqrt{x^2+x+1}}dx=\int \frac{u}{\sqrt{u^2+(\sqrt{3}/2)^2}}du-\frac{1}{2}\int\frac{1}{\sqrt{u^2+(\sqrt{3}/2)^2}}du$$

Now, we can more clearly see that we have an expression of the form $u^2+a^2$ in the denominator of both of the integrals on the right hand side. According to what we've learned, this means that we should make the substitution that $u=\frac{\sqrt{3}}{2}\tan\theta$ for some angle $\theta$. This means that

$$\sqrt{u^2+\left(\frac{\sqrt{3}}{2}\right)^2}=\frac{\sqrt{3}}{2}\sqrt{1+\tan^2\theta}=\frac{\sqrt{3}}{2}\sec\theta$$

and

$$du=\frac{\sqrt{3}}{2}\sec^2\theta d\theta$$

Using both of these results, our original integral can be reformulated as

$$\int\frac{x}{\sqrt{x^2+x+1}}dx=\left(\frac{\sqrt{3}}{2}\right)^2\frac{2}{\sqrt{3}}\int \frac{\tan\theta\sec^2\theta}{\sec\theta}d\theta-\frac{1}{2}\frac{2}{\sqrt{3}}\frac{\sqrt{3}}{2}\int\frac{\sec^2\theta}{\sec\theta}d\theta$$

Simplifying the integrals on the right hand side of this equation,

$$\int\frac{x}{\sqrt{x^2+x+1}}dx=\frac{\sqrt{3}}{2}\int \tan\theta\sec\theta d\theta-\frac{1}{2}\int\sec\theta d\theta$$

Recall that $\frac{d}{d\theta}\left[\sec\theta\right]=\tan\theta\sec\theta$. Furthermore, recalled from the [notes](/calculus/integrals-rational-functions/index.html#integral-of-sectheta) that we evaluated the integral of $\sec\theta$. Therefore,

$$\int\frac{x}{\sqrt{x^2+x+1}}dx=\frac{\sqrt{3}}{2}\sec\theta-\frac{1}{2}\ln\vert \sec\theta+\tan\theta\vert + C$$

Based on the definition of $u$ from above, we know that $$\sec\theta=\frac{2}{\sqrt{3}}\sqrt{u^2+\frac{3}{4}}=\frac{2}{\sqrt{3}}\sqrt{x^2+x+1}$$ and $$\tan\theta=\frac{2}{\sqrt{3}}u=\frac{2}{\sqrt{3}}\left(x+\frac{1}{2}\right)$$, and so

<div class="notice--success">
<p style="font-size:11pt">$$\int\frac{x}{\sqrt{x^2+x+1}}dx=\sqrt{x^2+x+1}-\frac{1}{2}\ln\left\vert \frac{2}{\sqrt{3}}\sqrt{x^2+x+1}+\frac{2}{\sqrt{3}}\left(x+\frac{1}{2}\right)\right\vert+C$$</p>
</div>

> ### Part 2

Note that our integral here can be rewritten as

$$\int_0^1 x\sqrt{1-x^4}dx=\frac{1}{2}\int_0^1 \sqrt{1-(x^2)^2}(2x dx)$$

In this highly suggestive form, it is apparent that we can make the $u$-substitution with $u=x^2$, such that $du=2xdx$. Coincidentally, the bounds of integration are unaffected since $u_{\downarrow}=0^2=0=x_{\downarrow}$ and $u_{uparrow}=1^2=1=x_{\uparrow}$. This gives us

$$\int_0^1 x\sqrt{1-x^4}dx=\frac{1}{2}\int_0^1\sqrt{1-u^2} du$$

At this point, we can immediately use the result from [the notes](/calculus/integrals-rational-functions/index.html#integrals-involving-a2-x2) to directly evaluate the integral, taking $a=1$ for this particular problem.

$$\int_0^1x\sqrt{1-x^4}dx=\frac{1}{4}\left(\sin^{-1}u+u\sqrt{1-u^2}\right)_0^1=\frac{1}{4}(\sin^{-1}1-\sin^{-1}0)$$

Simplifying gives

<div class="notice--success">
<p style="font-size:13pt">$$\int_0^1x\sqrt{1-x^4}dx=\frac{1}{4}\left(\frac{\pi}{2}-0\right)=\frac{\pi}{8}$$</p>
</div>

> ### Part 3

Immediately, we see the function $x^2-4=x^2-2^2$ in the numerator of the integrand, and so this suggests that we should make the substitution $x=2\sec\theta$. This means that $dx=2\sec\theta\tan\theta d\theta$, and also

$$\sqrt{x^2-4}=\sqrt{4\sec^2\theta-4}=2\sqrt{\sec^2\theta-1}=2\sqrt{\tan^2\theta}=2\tan\theta$$

Furthermore, we also need to update the bounds of integration. Since $x=2\sec\theta$ by definition, this means that $\theta=\sec^{-1}\left(\frac{x}{2}\right)$. The lower bound of integration becomes $\theta_{\downarrow}=\sec^{-1}\left(\frac{2}{2}\right)=\sec^{-1}1=0$, and the upper bound of integration becomes $\theta_{\uparrow}=\sec^{-1}\left(\frac{4}{2}\right)=\sec^{-1}2=\frac{\pi}{3}$.

Substituting the appropriate expressions into the original integral expression, we have

$$\int_2^4\frac{\sqrt{x^2-4}}{x}dx=\int_0^{\pi/3}\frac{2\tan\theta}{2\sec\theta}(2\sec\theta\tan\theta d\theta)=2\int_0^{\pi/3}\tan^2\theta d\theta$$

To evaluate this integral with respect to $\theta$, note that $\tan^2\theta=\sec^2\theta-1$, and so

$$\int_2^4\frac{\sqrt{x^2-4}}{x}dx=2\left(\int_0^{\pi/3}\sec^2\theta d\theta-\int_0^{\pi/3}d\theta\right)$$

Recall that $\frac{d}{d\theta}\left[\tan\theta\right]=\sec^{2}\theta$, and so

$$\int_2^4\frac{\sqrt{x^2-4}}{x}dx=2\left(\tan\left(\frac{\pi}{3}\right)-\tan(0)-\frac{\pi}{3}+0\right)$$

$$\tan\left(\frac{\pi}{3}\right)=\sqrt{3}$$ and $$\tan(0)=0$$, so

<div class="notice--success">
<p style="font-size:13pt">$$\int_2^4\frac{\sqrt{x^2-4}}{x}dx=2\left(\sqrt{3}-\frac{\pi}{3}\right)=2\sqrt{3}-\frac{2\pi}{3}$$</p>
</div>

> ### Part 4

The first thing that we'll do is define the variable $u=x^7$, such that $du=7x^6 dx$ and so $$\frac{1}{7}du=x^6 dx$$. Therefore, through $u$-substitution, the integral can be rewritten as

$$\int\frac{x^6}{\sqrt{1-x^{14}}}dx=\frac{1}{7}\int\frac{1}{\sqrt{1-u^2}}du$$

Now, notice that the expression in the radical in the denominator is in the form $$1-u^2=1^2-u^2$$, and so this suggests that we should make the trig substitution $u=\sin\theta$, such that $du=\cos\theta d\theta$, $\theta=\sin^{-1}u$, and

$$\sqrt{1-u^2}=\sqrt{1-\sin^2\theta}=\sqrt{\cos^2\theta}=\cos\theta$$

Therefore, our expression can be rewritten as

$$\int\frac{x^6}{\sqrt{1-x^{14}}}dx=\frac{1}{7}\int\frac{1}{\cos\theta}\cos\theta d\theta=\frac{1}{7}\int d\theta=\frac{1}{7}\theta+C$$

Substituting back our definition for $\theta$ in terms of $x$, we have

<div class="notice--success">
<p style="font-size:13pt">$$\int\frac{x^6}{\sqrt{1-x^{14}}}dx=\frac{1}{7}\sin^{-1}(x^7)+C$$</p>
</div>
