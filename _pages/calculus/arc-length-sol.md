---
permalink: /calculus/arc-length-sol/
author_profile: false
title: "Arc Length (Solutions)"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

<div class="notice--danger">
<p style="font-size:13pt">The following solutions are for the problems on the arc length integral formula <a href="/calculus/arc-length/index.html">here</a>. I encourage you to attempt them by yourself first before looking through the solutions.</p>
</div>

> ## Problem 1

<div class="notice--info">
<p style="font-size:13pt">The function $f(x)=\cosh x$ is called a <em>hyperbolic cosine function</em>, and is defined by the equation</p>
<p style="font-size:13pt">$$f(x)=\cosh x=\frac{e^x+e^{-x}}{2}$$</p>
<p style="font-size:13pt">Given this information, calculate the length of the function $f(x)=\cosh x$ from $x=0$ to $x=1$.</p>
</div>

The derivative of this function $f(x)$ is $\frac{df}{dx}=\frac{e^x-e^{-x}}{2}$, and so using the arc length integral formula, we have

$$D=\int_0^1dx\sqrt{1+\frac{e^{2x}+e^{-2x}}{4}-\frac{1}{2}}=\frac{1}{2}\int_0^1dx\sqrt{e^{2x}+2+e^{-2x}}$$

If we factor out a $e^{-x}$ factor from the radical, we find

$$D=\frac{1}{2}\int_0^1dxe^{-x}\sqrt{e^{4x}+2e^{2x}+1}=\frac{1}{2}\int_0^1dxe^{-x}\sqrt{(e^{2x}+1)^2}$$

Simplifying gives

$$D=\frac{1}{2}\int_0^1dxe^{-x}(e^{2x}+1)=\int_0^1dx\frac{e^x+e^{-x}}{2}$$

Evaluating the integral expression on the right hand side gives

<div class="notice--success">
<p style="font-size:13pt">$$D=\left.\frac{e^x-e^{-x}}{2}\right\vert_0^1=\frac{e}{2}-\frac{1}{2e}\approx 1.407$$</p>
</div>

> ## Problem 2

<div class="notice--info">
<p style="font-size:13pt">Calculate the length of the function $f(x)=\ln(\cos x)$ from $x=0$ to $x=\frac{\pi}{4}$.</p>
</div>

Denote the arc length we're trying to calculate as $D$. Using the arc length integral formula and the face that $\frac{df}{dx}=-\frac{\sin x}{\cos x}=-\tan x$, we have

$$D=\int_0^{\pi/4}dx\sqrt{1+\tan^2x}=\int_0^{\pi/4}dx\sec x$$

Using the result for the integral of $\sec x$ derived earlier [here](/calculus/integrals-rational-functions/index.html#integral-of-sectheta), we have

$$D=\ln\vert\sec\theta+\tan\theta\vert_0^{\pi/4}$$

Evaluating this expression gives

<div class="notice--success">
<p style="font-size:13pt">$$D=\ln(\sqrt{2}+1)-\ln(1+0)=\ln(1+\sqrt{2})\approx0.881$$</p>
</div>

> ## Problem 3

<div class="notice--info">
<p style="font-size:13pt">Calculate the length of the function $f(x)=x^2-\frac{1}{8}\ln x$ from $x=1$ to $x=2$.</p>
</div>

Let's denote the arc length as $D$. Using the arc length integral formula and the fact that $$\frac{df}{dx}=2x-\frac{1}{8x}$$, we have

$$D=\int_1^2dx\sqrt{1+4x^2+\frac{1}{64x^2}-\frac{1}{2}}=\int_1^2dx\sqrt{4x^2-\frac{1}{2}+\frac{1}{64x^2}}$$

Factoring the integrand gives

$$D=\int_1^2\frac{dx}{8x}\sqrt{256x^4-32x^2+1}=\int_1^2\frac{dx}{8x}\sqrt{(16x^2-1)^2}$$

Simplifying gives

$$D=\int_1^2dx\frac{16x^2-1}{8x}=2\int_1^2dx\text{ }x-\frac{1}{8}\int_1^2\frac{1}{x}$$

Evaluating the integral expressions on the right hand side gives

$$D=x^2\vert_1^2-\frac{1}{8}\ln \vert x\vert_1^2=\left(4-1\right)-\frac{1}{8}\left(\ln 2-0\right)$$

Simplifying gives

<div class="notice--success">
<p style="font-size:13pt">$$D=3-\frac{1}{8}\ln2\approx 2.913$$</p>
</div>

> ## Problem 4

<div class="notice--info">
<p style="font-size:13pt"><em>This is a challenge problem.</em></p>
<p style="font-size:13pt">Calculate the length of the function $f(x)=e^x$ from $x=0$ to $x=1$.</p>
</div>

Let's denote the requested length as $D$. Using the arc length integral formula and the fact that $\frac{df}{dx}=e^x$, we have

$$D=\int_0^1dx\text{ }\sqrt{1+e^{2x}}$$

Notice that we can rewrite this integral as

$$D=\int_0^1dx\text{ }e^{x}\sqrt{1+e^{-2x}}$$

This is achieved through factoring out a factor of $e^x$

Let's define the variable $u=1+e^{-2x}$, such that $du=-2e^{-2x}dx$, or equivalently, $dx=\frac{-1}{2}e^{2x}du$. However, notice from the definition of $u$ that $\frac{1}{u-1}=e^{2x}$, and so

$$dx=\frac{-1}{2}\frac{1}{u-1}du$$

Furthermore, the lower bound becomes $u_{\downarrow}=1+e^{-2(0)}=2$, and the upper bound becomes $u_{\uparrow}=1+e^{-2(1)}=1+e^{-2}$. Note also that since $\frac{1}{u-1}=e^{2x}$, this means that $\frac{1}{\sqrt{u-1}}=e^x$. Therefore, combining all of these results and making the $u$-substitution gives

$$D=-\frac{1}{2}\int_2^{1+e^{-2}}\frac{du\sqrt{u}}{(u-1)^{3/2}}$$

Now, we can define the variable $w=\sqrt{u}$ such that $dw=\frac{1}{2\sqrt{u}}du$, and so $du=2\sqrt{u}dw$. However, notice that $\sqrt{u}=w$ by the definition of $w$, and so $du=2wdw$. This means that we can rewrite the integrand expression as

$$\frac{du\sqrt{u}}{(u-1)^{3/2}}=\frac{2w^2dw}{(w^2-1)^{3/2}}$$

Similarly, the bounds of integration become $w_{\downarrow}=\sqrt{2}$ and $w_{\uparrow}=\sqrt{1+e^{-2}}$. Therefore, the integral expression for $D$ following this $w$-substitution becomes

$$D=-\int_{\sqrt{2}}^{\sqrt{1+e^{-2}}}\frac{w^2 dw}{(w^2-1)^{3/2}}$$

We see the expression $w^2-1$ in the denominator of the integrand, and so this hints to us that we might benefit from using an appropriate [trigonometric substitution](/calculus/integrals-rational-functions/index.html#integrals-involving-x2-a2), choosing $w=\sec\theta$ such that $w^2-1=\tan^2\theta$ and $w^2=\sec^2\theta$. Furthermore, $dw=\sec\theta\tan\theta d\theta$, and the bounds of integration become $\theta_{\downarrow}=\sec^{-1}(\sqrt{2})$ and $\theta_{\uparrow}=\sec^{-1}(\sqrt{1+e^{-2}})$. Making this third substitution gives

$$D=-\int_{\sec^{-1}(\sqrt{2})}^{\sec^{-1}(\sqrt{1+e^{-2}})}\frac{\sec^3\theta\tan\theta d\theta}{\tan^3\theta}=-\int_{\sec^{-1}(\sqrt{2})}^{\sec^{-1}(\sqrt{1+e^{-2}})}\frac{d\theta}{\sin^2\theta\cos\theta}$$

From this point, the problem essentially boils down to using the correct trigonometric identities. Note that

$$\frac{1}{\sin^2\theta\cos\theta}=\csc^2\theta\sec\theta=(\cot^2\theta+1)\sec\theta$$

Expanding out the right hand side gives

$$\frac{1}{\sin^2\theta\cos\theta}=\sec\theta+\cot\theta\csc\theta$$

Plugging this back into our integral expression for $D$ gives

$$D=-\int_{\sec^{-1}(\sqrt{2})}^{\sec^{-1}(\sqrt{1+e^{-2}})}d\theta\text{ }\sec\theta-\int_{\sec^{-1}(\sqrt{2})}^{\sec^{-1}(\sqrt{1+e^{-2}})}d\theta\cot\theta\csc\theta$$

We found the integral of $\sec\theta$ [here](/calculus/integrals-rational-functions/index.html#integral-of-sectheta), and since $\frac{d}{dx}[\csc\theta]=-\csc\theta\cot\theta$, we know that the integral of $\csc\theta\cot\theta$ is $-\csc \theta$. Therefore, 

$$D=\left[-\ln\vert \sec\theta+\tan\theta\vert+\csc\theta\right]_{\sec^{-1}(\sqrt{2})}^{\sec^{-1}(\sqrt{1+e^{-2}})}$$

At this point, the easiest way to simplify this numerical value is probably to use a calculator at this point. You should get that the final answer is

<div class="notice--success">
<p style="font-size:13pt">$$D=1-\sqrt{2}+\sqrt{1+e^2}+\sinh^{-1}1-\ln\left(1+\sqrt{1+e^2}\right)\approx 2.004$$</p>
</div>

where $\sinh(x)$ is the [hyperbolic sine function](https://en.wikipedia.org/wiki/Hyperbolic_functions).
