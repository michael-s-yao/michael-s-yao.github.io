---
permalink: /calculus/integration-by-parts-sol/
author_profile: false
title: "Integration by Parts (Solutions to Problems)"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

The following solutions are for the integration practice problems linked [here](/calculus/integration-by-parts/index.html#exercises). I encourage you to attempt them by yourself first before looking through the solutions.
{: .notice--danger}

Original problems statements are highlighted in <span style="color:blue">blue</span>. Final answers are highlighted in <span style="color:green">green</span>.

> ## Problem 1

<div class="notice">
<p style="font-size:13pt">Evaluate the following integral expressions. <em>Note</em>: For some of these problems, you may have to perform integration by parts successively multiple times.</p>
</div>

<div class="notice--info">
<p style="font-size:13pt">1. $\int_1^9 \frac{\ln x}{\sqrt{x}}dx$</p>
</div>

Define $u=\ln x$ and $v=2\sqrt{x}$, such that

$$\frac{du}{dx}=\frac{1}{x} \longrightarrow du=\frac{1}{x}dx, \quad \frac{dv}{dx}=\frac{2}{2\sqrt{x}}=\frac{1}{\sqrt{x}} \longrightarrow dv=\frac{1}{\sqrt{x}}dx$$

Using these function definitions, we can conclude using integration by parts that

$$\int_1^9\frac{\ln x}{\sqrt{x}}dx=\int_1^9 udv=uv\vert_1^9-\int_1^9 vdu=2\ln(x)\sqrt{x}\vert_1^9-\int_1^9\frac{2\sqrt{x}}{x}dx$$

Simplifying the right hand side, we find

$$\int_1^9\frac{\ln x}{\sqrt{x}}dx=6\ln(9)-2\ln(1)-2\int_1^9x^{-1/2}dx=6\ln(9)-2\int_1^9x^{-1/2}dx$$

Using the power rule for integration, we can simplify the remaining integral on the right hand side.

$$\int_1^9\frac{\ln x}{\sqrt{x}}dx=6\ln(9)-4\sqrt{x}\vert_1^9=6\ln(9)-12+4=-8+6\ln9$$

Therefore, we can conclude that

<div class="notice--success">
<p style="font-size:13pt">$$\int_1^9 \frac{\ln x}{\sqrt{x}}dx=-8+6\ln 9$$</p>
</div>

<div class="notice--info">
<p style="font-size:13pt">2. $\int x^2\sin(x)dx$</p>
</div>

Choose $u=x^2$ and $v=-\cos x$, such that

$$\frac{du}{dx}=2x\longrightarrow du=2xdx, \quad \frac{dv}{dx}=\sin x \longrightarrow dv=\sin xdx$$

Using these function definitions, we can conclude using integration by parts that

$$\int x^2\sin(x)dx=\int udv= uv-\int vdu=-x^2\cos x+2\int x\cos xdx$$

As per the hint given in the problem, let's try doing integration by parts one more on the integral on the right hand side, now defining $u=x$ and $v=\sin x$, such that

$$\frac{du}{dx}=1\longrightarrow du=dx, \quad \frac{dv}{dx}=\cos x \longrightarrow dv=\cos x dx$$

Using these function definitions, we can conclude using integration by parts that 

<p style="font-size:11pt">$$\int x^2\sin(x)dx=-x^2\cos x+2(x\sin x-\int \sin x dx)=-x^2\cos x+2x\sin x-2\int \sin x dx$$</p>

Now, we can easily evaluate the remaining integral on the right hand side to give

<div class="notice--success">
<p style="font-size:13pt">$$\int x^2\sin(x)dx=-x^2\cos x+2x\sin x+2\cos x+C$$</p>
</div>

<div class="notice--info">
<p style="font-size:13pt">3. $\int \sin^{-1} (x)dx$</p>
</div>

Using the hint given, we can choose $u=\sin^{-1}(x)$ and $v=x$, such that

$$\frac{du}{dx}=\frac{1}{\sqrt{1-x^2}} \longrightarrow du=\frac{dx}{\sqrt{1-x^2}}, \quad \frac{dv}{dx}=1 \longrightarrow dv=dx$$

Using these function definitions, we can conclude using integration by parts that 

$$\int \sin^{-1} (x)dx=\int udv=uv-\int vdu=x\sin^{-1}(x)-\int \frac{xdx}{\sqrt{1-x^2}}$$

To evaluate the remaining integral on the right hand side, we can use [$u$-substitution](/calculus/u-substitution/index.html). Define $u=1-x^2$ such that $\frac{du}{dx}=-2x$ and hence $-\frac{1}{2}du=xdx$. Making this substitution above, we have

$$\int \sin^{-1} (x)dx=x\sin^{-1}(x)-\int -\frac{1}{2}\frac{du}{\sqrt{u}}=x\sin^{-1}(x)+\frac{1}{2}\int u^{-1/2}du$$

Using the power rule for integration, we have

$$\int \sin^{-1} (x)dx=x\sin^{-1}(x)+\sqrt{u}+C$$

Substituting back our definition for $u=1-x^2$ from above, we have

<div class="notice--success">
<p style="font-size:13pt">$$\int \sin^{-1} (x)dx=x\sin^{-1}(x)+\sqrt{1-x^2}+C$$</p>
</div>

> ## Problem 2

<div class="notice--info">
<p style="font-size:13pt">Evaluate the following integral expression.</p>
<p style="font-size:13pt">$$\int_0^\pi e^x\cos xdx$$</p>
</div>

Let us define $u=e^x$ and $v=\sin x$, such that $du=e^xdx$ and $dv=\cos xdx$. Therefore, we can rewrite the given integral using integration by parts

$$\int_0^\pi e^x\cos xdx=e^x\sin x\vert_0^\pi-\int_0^{\pi} e^x\sin xdx$$

Note that $e^x\sin x\vert_0^\pi=e^{\pi}\sin\pi-e^0\sin 0=0-0=0$, since $\sin 0=\sin \pi=0$. Therefore, the right hand side of this equation simplifies to

$$\int_0^\pi e^x\cos xdx=-\int_0^{\pi} e^x\sin xdx$$

We can do integration by parts again on the integral expression on the right hand side, defining $u=e^x$ and $v=\cos x$ such that $du=e^xdx$ and $dv=-\sin xdx$. Therefore, we can use integration by parts once more to find

$$\int_0^\pi e^x\cos xdx=-\int_0^{\pi} e^x\sin xdx=e^x\cos x\vert_0^\pi-\int_0^{\pi} e^x\cos x dx$$

Note that we can add $\int_0^{\pi} e^x\cos x dx$ to both sides of this equation to find

$$2\int_0^{\pi} e^x\cos x dx=e^x\cos x\vert_0^\pi=e^{\pi}\cos(\pi)-e^0\cos0=-e^\pi-1=-(1+e^{\pi})$$

Dividing both sides by $2$, we find

<div class="notice--success">
<p style="font-size:13pt">$$\int_0^{\pi} e^x\cos x dx=\frac{-(1+e^{\pi})}{2}$$</p>
</div>

Our method of obtaining this solution is interesting to comment on. Notice that in this entire process, we never _technically_ evaluated any integral! All we did was use integral by parts twice to show that $I=(\text{something})-I$, where $I$ is the original integral expression, and then solve for $I$. This is a common trick that can be used in conjunction with integration by parts: rewrite the initial integral as a closed-form function of itself and then solve for the initial integral.

> ## Problem 3

<div class="notice--info">
<p style="font-size:13pt">If $n$ is a positive integer, prove that</p>
<p style="font-size:13pt">$$\int_0^1 (\ln x)^ndx=(-1)^n n!$$</p>
</div>

This problem looks somewhat familiar to the [practice problem](/calculus/integration-by-parts/index.html#problem-3) from earlier on evaluating the integral expression $\int \ln(x) dx$, so we may take inspiration from that problem first in initially choosing our $u$ and $v$ functions. Let's first guess that $u=(\ln x)^n$ and $v=x$, such that

$$\frac{du}{dx}=n(\ln x)^{n-1}\frac{1}{x} \longrightarrow du=\frac{n(\ln x)^{n-1}}{x}dx, \quad \frac{dv}{dx}=1 \longrightarrow dv=dx$$

Using these definitions of $u$ and $v$, we can rewrite the integral and use integration by parts:

$$\int_0^1 (\ln x)^ndx=\int_0^1 udv=\left.uv\right\vert_0^1-\int_0^1 vdu=\left.x(\ln x)^n\right\vert_0^1-\int_0^1dx\frac{n(\ln x)^{n-1}}{x}x$$

Let's break down the right hand side, and first separately consider the first expression $\left.x(\ln x)^n\right\vert_0^1$:

$$\left.x(\ln x)^n\right\vert_0^1=(\ln 1)^n-\lim_{x\rightarrow 0} x(\ln x)^n$$

$\ln 1=0$ and $0^n=0$ for any positive integer $n$. The remaining limit is not as straightforward to quantify, although we can use [L'Hopital's Rule](/calculus/lhopitals-rule/index.html) to rewrite it:

$$\lim_{x\rightarrow 0} x(\ln x)^n=\lim_{x\rightarrow 0} \frac{(\ln x)^n}{\frac{1}{x}}$$

Direct substitution gives the indefinite form $-\infty/\infty$, so we can use L'Hopital's Rule to get

$$\lim_{x\rightarrow 0} x(\ln x)^n=\lim_{x\rightarrow 0}\frac{\frac{n(\ln x)^{n-1}}{x}}{\frac{-1}{x^2}}=-n\lim_{x\rightarrow 0}x(\ln x)^{n-1}$$

Notice that aside from the prefactor of $-n$, this limit looks almost identical to the original limit $\lim_{x\rightarrow 0} x(\ln x)^n$ that we were trying to evaluate, just with the power of $\ln x$ decreased by one. This allows us to guess that perhaps we can used L'Hopital's Rule again, and once more, and so one and so forth:

<p style="font-size:10.5pt">$$\lim_{x\rightarrow 0} x(\ln x)^n=-n\lim_{x\rightarrow 0}x(\ln x)^{n-1}=n(n-1)\lim_{x\rightarrow 0}x(\ln x)^{n-2}=-n(n-1)(n-2)\lim_{x\rightarrow 0}x(\ln x)^{n-3}=\cdots$$</p>

Ultimately, we can begin to see pattern emerge: the signs alternate between negative and positive, and we ultimately accumulate the prefactor $n(n-1)(n-2)\cdots 2\cdot 1=n!$. Therefore, we find

$$\lim_{x\rightarrow 0} x(\ln x)^n=(-1)^nn!\lim_{x\rightarrow 0}x(\ln x)^0=(-1)^nn!\lim_{x\rightarrow 0}x=(-1)^nn!\cdot 0=0$$

since $(\ln x)^0=1$ for any positive $x$. All in all, we have shown that this limit expression is equal to $0$, and so returning to our integration be parts problem, we have shown that

$$\left.x(\ln x)^n\right\vert_0^1=(\ln 1)^n-\lim_{x\rightarrow 0} x(\ln x)^n=0-0=0$$

and so

$$\int_0^1 (\ln x)^ndx=\left.x(\ln x)^n\right\vert_0^1-\int_0^1dx\frac{n(\ln x)^{n-1}}{x}x=-\int_0^1dx\frac{n(\ln x)^{n-1}}{x}x$$

Now, let's simplify the remaining integral expression on the right hand side:

$$\int_0^1 (\ln x)^ndx=-n\int_0^1dx(\ln x)^{n-1}$$

Let us denote the integral expression $I_n=\int_0^1 (\ln x)^ndx$. This equation has effectively shown that $I_n=-nI_{n-1}$. This also means that $I_{n-1}=-(n-1)I_{n-2}$, and $I_{n-2}=-(n-2)I_{n-3}$, and so on and so forth. We can use this recursive definition to find the following:

$$I_n=-nI_{n-1}=(-1)^2n(n-1)I_{n-2}=(-1)^3n(n-1)(n-2)I_{n-3}=\cdots$$

This pattern continues all the way until we reach $n=0$:

$$I_n=-nI_{n-1}=(-1)^nn(n-1)(n-2)\cdots2\cdot1I_0=(-1)^nn!I_0$$

What is $I_0$? Citing our definition for $I_n$, we know that $I_0=\int_0^1 (\ln x)^0 dx$, but since any number to the zero power is $1$, this simplifies to 

$$I_0=\int_0^1 dx=\left. x\right\vert_0^1=1-0=1$$

Therefore, we can conclude that $I_n=(-1)^nn!I_0=(-1)^nn!(1)=(-1)^nn!$, and so

<div class="notice--success">
<p style="font-size:13pt">If $n$ is a positive integer, then</p>
<p style="font-size:13pt">$$\int_0^1 (\ln x)^ndx=(-1)^n n!$$</p>
</div>

> ## Problem 4

<div class="notice--info">
<p style="font-size:13pt">Show that</p>
<p style="font-size:13pt">$$\int_0^1(1-x^2)^ndx=\frac{2^{2n}(n!)^2}{(2n+1)!}$$</p>
<p style="font-size:13pt"><em>Hint</em>: Start by showing that if $I_n$ denotes the integral, then</p>
<p style="font-size:13pt">$$I_{k+1}=\frac{2k+2}{2k+3}I_k$$</p>
</div>

We can try $u=(1-x^2)^n$ and $v=x$, such that

<p style="font-size:10.5pt">$$\frac{du}{dx}=-2xn(1-x^2)^{n-1}\longrightarrow du=-2nx(1-x^2)^{n-1}dx, \quad \frac{dv}{dx}=1\longrightarrow dv=dx$$</p>

This allows us to rewrite the initial integral expression using integration by parts as 

<p style="font-size:10.5pt">$$\int_0^1(1-x^2)^ndx=\int_0^1 udv=\left.uv\right\vert_0^1-\int_0^1 vdu=\left.x(1-x^2)^n\right\vert_0^1-\int_0^1 -2nx^2(1-x^2)^{n-1}dx$$</p>

Let's break down the right hand side, and first separately consider the first expression $\left.x(1-x^2)^n\right\vert_0^1$:

$$\left.x(1-x^2)^n\right\vert_0^1=(1-1^2)^n-0(1-0^2)^n=0-0=0$$

Therefore, we can conclude that

$$\int_0^1(1-x^2)^ndx=-\int_0^1 -2nx^2(1-x^2)^{n-1}dx=2n\int_0^1 x^2(1-x^2)^{n-1}dx$$

This next step is the "trick" to this problem: we're going to subtract the expression $2n\int_0^1 (1-x^2)^{n-1}dx$ from both sides of the equation.

<p style="font-size:10.5pt">$$\int_0^1(1-x^2)^ndx-2n\int_0^1 (1-x^2)^{n-1}dx=-2n\int_0^1 (1-x^2)^{n-1}dx+2n\int_0^1 x^2(1-x^2)^{n-1}dx$$</p>

Note that we can now combine the two integral expressions on the right hand side:

<p style="font-size:10.5pt">$$\int_0^1(1-x^2)^ndx-2n\int_0^1 (1-x^2)^{n-1}dx=-2n\int_0^1 (1-x^2)(1-x^2)^{n-1}dx=-2n\int_0^1 (1-x^2)^{n}dx$$</p>

Rearranging both sides of this equation, we find that

$$(2n+1)\int_0^1(1-x^2)^ndx=2n\int_0^1 (1-x^2)^{n-1}dx$$

In other words,

$$\int_0^1(1-x^2)^ndx =\frac{2n}{2n+1}\int_0^1 (1-x^2)^{n-1}dx$$

Let us reindex this equation by defining a new index $k$ such that $n=k+1$. This gives us

$$\int_0^1(1-x^2)^{k+1}dx =\frac{2(k+1)}{2(k+1)+1}\int_0^1 (1-x^2)^{(k+1)-1}dx$$

Simplifying,

$$\int_0^1(1-x^2)^{k+1}dx =\frac{2k+2}{2k+3}\int_0^1 (1-x^2)^{k}dx$$

If we define the function $I_k=\int_0^1 (1-x^2)^{k}dx$, the original expression for the integral we're trying to evaluate with $n=k$, then

$$I_{k+1} =\frac{2k+2}{2k+3}I_k$$

This gives us the result as expected from the hint. Because this equation is true for general $k$, this means that we also know from this equation that $$I_{k} =\frac{2k}{2k+1}I_{k-1}$$, $$I_{k-1} =\frac{2k-2}{2k-1}I_{k-2}$$, and so on and so forth until we have $I_1=\frac{2}{3}I_0$. This recursive relation allows us to write

<p style="font-size:11pt">$$I_k=\frac{2k}{2k+1}I_{k-1}=\frac{2k}{2k+1}\frac{2k-2}{2k-1}I_{k-2}=\cdots=\frac{2k}{2k+1}\frac{2k-2}{2k-1}\frac{2k-4}{2k-3}\cdots\frac{4}{5}\frac{2}{3}I_0$$</p>

Note that the prefactor can be rewritten by multiplying both the numerator and denominator by $2k(2k-2)(2k-4)\cdots4\cdot2$.

$$I_k=\frac{(2k)^2(2k-2)^2(2k-4)^2\cdots 4^22^2}{(2k+1)(2k)(2k-1)(2k-2)(2k-3)\cdots5\cdot4\cdot3\cdot2}I_0$$

The denominator is now clearly $(2k+1)!$. The numerator requires a bit of additional work. Note that

$$I_k=\frac{\left[2k(2k-2)(2k-4)\cdots 4\cdot2\right]^2}{(2k+1)!}I_0$$

Since every factor in the numerator is even, let's pull out a factor of $2$ from every single factor in the numerator. There are $k$ factors, and so

$$I_k=\frac{\left[2^kk(k-1)(k-2)\cdots 2\cdot1\right]^2}{(2k+1)!}I_0=\frac{\left[2^kk!\right]^2}{(2k+1)!}I_0$$

by the definition of $k!$. Rewriting, we have

$$I_k=\frac{2^{2k}(k!)^2}{(2k+1)!}I_0$$

Now, all we have to do is evaluate $I_0$. Using the definition of $I_k=\int_0^1 (1-x^2)^{k}dx$ from above, this means that

$$I_0=\int_0^1 (1-x^2)^0dx=\int_0^1 dx=1-0=1$$

since anything to the zero power is $1$. Therefore, we can conclude that

$$I_k=\frac{2^{2k}(k!)^2}{(2k+1)!}$$

Renaming the variable from $k\rightarrow n$ gives us the desired result:

<div class="notice--success">
<p style="font-size:13pt">$$\int_0^1(1-x^2)^ndx=\frac{2^{2n}(n!)^2}{(2n+1)!}$$</p>
</div>
