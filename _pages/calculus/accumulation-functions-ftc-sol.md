---
permalink: /calculus/accumulation-functions-ftc-sol/
author_profile: false
title: "Accumulations Functions and the Fundamental Theorems of Calculus (Solutions)"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

<div class="notice--danger">
<p style="font-size:13pt">The following solutions are for the problems on moments of inertia and rotational energy linked <a href="/calculus/accumulation-functions-ftc/index.html#exercises">here</a>. I encourage you to attempt them by yourself first before looking through the solutions.</p>
</div>

> ## Problem 1

<div class="notice--info">
<p style="font-size:13pt">Find the derivatives with respect to $x$ of the following three functions $f(x), g(x), h(x)$:</p>
<p style="font-size:13pt">$$f(x)=\int_0^x e^{-t^2}dt, \quad g(x)=\int_0^{x^2} e^{-t^2}dt, \quad h(x)=\int_x^{x^2}e^{-t^2}dt$$</p>
</div>

The derivative of $f(x)$ can be calculated directly using the [first FTC](/calculus/accumulation-functions-ftc/index.html#the-first-fundamental-theorem-of-calculus).

<div class="notice--success">
<p style="font-size:13pt">$$\frac{d}{dx}[f(x)]=\frac{d}{dx}\left[\int_0^x e^{-t^2}dt\right]=e^{-x^2}$$</p>
</div>

The derivative of $g(x)$ can be calculated similar using the [generalized FTC](/calculus/accumulation-functions-ftc/index.html#generalized-first-fundamental-theorem-of-calculus).

<div class="notice--success">
<p style="font-size:13pt">$$\frac{d}{dx}[g(x)]=\frac{d}{dx}\left[\int_0^{x^2} e^{-t^2}dt\right]=e^{-(x^2)^2}\cdot\frac{d}{dx}[x^2]=2xe^{-x^4}$$</p>
</div>

Finally, notice that based on the second [property of integration](/calculus/evaluating-integrals/index.html#properties-of-integrals-both-indefinite-and-definite), we know that

$$\int_0^{x^2} e^{-t^2}dt=\int_0^x e^{-t^2}dt+\int_x^{x^2}e^{-t^2}dt$$

Rearranging this equation gives

$$\int_x^{x^2}e^{-t^2}dt=\int_0^{x^2} e^{-t^2}dt-\int_0^x e^{-t^2}dt$$

and using the function definitions given in the problem,

$$h(x)=g(x)-f(x)\longrightarrow \frac{d}{dx}[h(x)]=\frac{d}{dx}[g(x)]-\frac{d}{dx}[f(x)]$$

Using our earlier results, we have

<div class="notice--success">
<p style="font-size:13pt">$$\frac{d}{dx}[h(x)]=\frac{d}{dx}[g(x)]-\frac{d}{dx}[f(x)]=2xe^{-x^4}-e^{-x^2}$$</p>
</div>

> ## Problem 2

<div class="notice--info">
<p style="font-size:13pt"><em>This problem is adapted from Bloomsburg University.</em></p>
<p style="font-size:13pt">Suppose $f$ is the function whose graph is given below.</p>
</div>

![acc-func-4](/assets/images/acc-func-4.png){:height="70%" width="70%"}

<div class="notice--info">
<p style="font-size:13pt"><em>Define the function $g(x)=\int_0^x f(t)dt$.</em></p>
<ol>
  <li style="font-size:13pt">Find the values of $g(0), g(1), g(2), g(4), g(6)$.</li>
  <li style="font-size:13pt">Sketch a rough graph of $g(x)$.</li>
</ol>
</div>

Taking inspiration from the [example](/calculus/accumulation-functions-ftc/index.html#example-of-an-accumulation-function) on accumulation functions discussed in the teaching module, we have

<div class="notice--success">
<p style="font-size:13pt">$$g(0)=\int_0^0f(t)dt=0$$</p>
<p style="font-size:13pt">$$g(1)=\int_0^1f(t)dt=\frac{1\cdot 2}{2}=1$$</p>
<p style="font-size:13pt">$$g(2)=\int_0^2f(t)dt=\frac{1\cdot 2}{2}+(1\cdot 2)=3$$</p>
<p style="font-size:13pt">$$g(4)=\int_0^4f(t)dt=\frac{1\cdot 2}{2}+(1\cdot 2)+\frac{\pi (2)^2}{4}=3+\pi$$</p>
<p style="font-size:13pt">$$g(6)=\int_0^6f(t)dt=\frac{1\cdot 2}{2}+(1\cdot 2)+\frac{\pi (2)^2}{4}-\frac{\pi (2)^2}{4}=3$$</p>
</div>

A rough sketch of $g(x)$ is shown here below. $f(x)$ is the gray, dashed line and $g(x)$ is the solid, bold line.

<div class="notice--success">
<img src="/assets/images/acc-func-6.png" alt="acc-func-6" style="width:100%;height:100%;" class="align-center">
</div>

> ## Problem 3

<div class="notice--info">
<p style="font-size:13pt"><em>This problem is adapted from Bloomsburg University.</em></p>
<p style="font-size:13pt">Consider the <em>Fresnel function</em> defined by $$S(x)=\int_0^x \sin\left(\frac{\pi t^2}{2}\right)dt$$ The figures below show the graphs of $y=f(x)=\sin\left(\frac{\pi x^2}{2}\right)$ (dashed line) and $y=S(x)$ (solid line).</p>
</div>

![acc-func-5](/assets/images/acc-func-5.png){:height="100%" width="100%"}

<div class="notice--info">
<ol>
  <li style="font-size:13pt">At what values of $x$ does $S$ have local maximum values?</li>
  <li style="font-size:13pt">On what intervals is the function concave upward?</li>
  <li style="font-size:13pt">Solve the following equation for $x$ correct to at least one decimal place:</li>
</ol>
<p style="font-size:13pt">$$\int_0^x \sin\left(\frac{\pi t^2}{2}\right)dt=0.2$$</p>
<p style="font-size:13pt">For this problem, only consider the values of $x>0$.</p>
</div>

Recall from our discussion on the [derivatives of accumulation functions](/calculus/accumulation-functions-ftc/index.html#derivatives-of-accumulation-functions) that the accumulation function $S(x)$ has a maximum when the integrand function $f(x)$ goes from positive to negative. By the nature of the sign function, we know that this happens then

$$\frac{\pi x^2}{2}=(2n-1)\pi, \quad n\in\{1, 2, \ldots\}$$

Solving for $x$, we get

$$x=\sqrt{2(2n-1)}, \quad n\in\{1, 2, \ldots\}$$

Therefore,

<div class="notice--success">
<p style="font-size:13pt;text-align:center">The function $S(x)$ has a maximum at $x=\sqrt{2}, \sqrt{6}, \sqrt{10}, \sqrt{14}, \ldots$</p>
</div>

Meanwhile, recall that the concavity of $S(x)$ is related to the second derivative of $S(x)$. From the [first FTC](/calculus/accumulation-functions-ftc/index.html#the-first-fundamental-theorem-of-calculus), we know that the second derivative of $S(x)$ is equal to the first derivative of $f(x)$. $S(x)$ is therefore concave up when the first derivative of $f(x)$ is _positive_, or in other words, when $f(x)$ is increasing. Therefore, to determine when $S(x)$ is concave up, we look for the intervals when $f(x)$ is increasing.

$$\frac{d}{dx}[f(x)]=\frac{d}{dx}\left[\sin\left(\frac{\pi x^2}{2}\right)\right]=\pi x\cos\left(\frac{\pi x^2}{2}\right)$$

This function is equal to zero when

$$\frac{\pi x^2}{2}=\pi\left(n-\frac{1}{2}\right), \quad n\in\{1, 2, \ldots\}$$

Solving for the special zeroes gives

$$x=\sqrt{2n-1}, \quad n\in\{1, 2, \ldots\}$$

Through inspecting the graph and understanding the nature of the sine function, we know that the $f(x)$ function is increasing when $x$ goes from an even value of $n$ to an odd value of $n$. Therefore, we can conclude that

<div class="notice--success">
<p style="font-size:13pt;text-align:center">The function $S(x)$ is concave up on the intervals $x\in[\sqrt{3}, \sqrt{5}]$, $[\sqrt{7}, \sqrt{9}]$, $\ldots$</p>
</div>

To solve the last part of this problem, the easiest way to approach this would probably be to use a calculator, as we don't know how to explicitly evaluate the integral expression for $f(x)$. However, another way to approach this is to recognize that $0.2$ is fairly small, and so we will likely only have to deal with small values of $t$ in the accumulation integral for $S(x)$. Therefore, we can use the [small-angle approximation](https://en.wikipedia.org/wiki/Small-angle_approximation) $\sin x\approx x$ to approximate the integral:

$$S(x)=\int_0^x \sin\left(\frac{\pi t^2}{2}\right)dt\approx \int_0^x \frac{\pi t^2}{2}dt$$

This approximate integral of a polynomial function is now easy to evaluate:

$$S(x)\approx \left.\frac{\pi}{6}t^3\right\vert_0^x=\frac{\pi x^3}{6}=0.2$$

Solving this equation for $x$ gives

<div class="notice--success">
<p style="font-size:13pt;text-align:center">$$x=\sqrt[3]{\frac{6}{5\pi}}\approx 0.726$$</p>
</div>

For reference, using a calculator to actually solve this problem gives an accurate numerical solution of $x\approx0.738$, so this tells us that our approximation was fairly accurate!
