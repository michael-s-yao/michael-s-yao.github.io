---
permalink: /calculus/limits-and-continuity/
author_profile: false
title: "Limits and Continuity"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

> ## Limits

Limits ask the question of what happens to a function $f(x)$ as we get arbitrarily close to a value of $x$. They are denoted as $\lim_{x\rightarrow c}f(x)=L$, where $L, c$ are numbers. In typical cases, we can simply plug in $x=c$ into $f(x)$ to get $L$. To prove that $L$ and $\lim_{x\rightarrow c}f(x)$ are equal, we use the **$\delta-\varepsilon$ proof**:

$$\begin{matrix}
\text{If }\lim_{x\rightarrow c}f(x)=L\text{, then for any }\varepsilon>0\text{, there exists}\\
\text{a }\delta>0\text{ such that }|x-c|<\delta\text{ implies }|f(x)-L|<\varepsilon.
\end{matrix}$$

For most functions, the **substitution rule** typically works: we can simply plug in $x=c$ into $f(x)$ to get $L=f(c)$. However, there are three cases where this wouldn't work:

  1. We have a vertical asymptote for a rational function. An example is the function $f(x)=1/x$. The limit doesn't exist in this case.
  2. We have a jump discontinuity that looks like a `step function.' An example is the function $f(x)=0$ for $x\leq 0$ and $f(x)=1$ for $x>0$. The limit doesn't exist in this case.
  3. We have infinite oscillations. An example is the function $f(x)=\sin(1/x)$. The limit doesn't exist in this case. 

In cases 1 and 2 above, the reason why the limit doesn't exist is because the *left and right limits are not equal*. That is, $\lim_{x\rightarrow c^-} f(x)\neq \lim_{x\rightarrow c^+} f(x)$. This brings up another property of limits:

$$
\text{A limit exists if }\lim_{x\rightarrow c^-} f(x)= \lim_{x\rightarrow c^+} f(x)=\lim_{x\rightarrow c} f(x).
$$

Limits satisfy pretty straightforward properties:

$$\begin{matrix}
\lim_{x\rightarrow c}\left[\alpha f(x)+\beta g(x)\right]=\alpha\lim_{x\rightarrow c}f(x)+\beta\lim_{x\rightarrow c}g(x), \\
\lim_{x\rightarrow c}f(x)g(x)=\left[\lim_{x\rightarrow c}f(x)\right]\left[\lim_{x\rightarrow c}g(x)\right]\\
\lim_{x\rightarrow c}\frac{f(x)}{g(x)}=\frac{\lim_{x\rightarrow c}f(x)}{\lim_{x\rightarrow c}g(x)}\text{ as long as }\lim_{x\rightarrow c}g(x)\neq 0
\end{matrix}$$

**Limits at infinity** are really similar to regular limits, and are related to the idea of horizontal asymptotes. All the same rules apply. Here is an example of a typical way to approach evaluating a limit at infinity:

$$\small\lim_{x\rightarrow \pm\infty} \frac{3}{x-2}=\lim_{x\rightarrow \pm\infty}\frac{3}{x-2}\frac{1/x}{1/x}=\lim_{x\rightarrow \pm\infty}\frac{\frac{3}{x}}{1-\frac{2}{x}}=\frac{0}{1-0}=0$$

Multiplying by the special $(1/x)/(1/x)=1$ term is always determined by the highest power of $x$ in the denominator. We should also talk about the *sandwich theorem*, a useful technique to evaluate certain limits. Lets consider an example of trying to find the limit of $\lim_{x\to0}x^2\sin(1/x)$. Note that $-1\leq \sin z\leq 1$ for any $z$, meaning that $-x^2\leq x^2\sin x\leq x^2$ for any $x$. $\lim_{x\to0}-x^2=0$ and $\lim_{x\to0}x^2=0$, meaning that $\lim_{x\to0}-x^2=\lim_{x\to0}x^2=0$. Therefore, we can conclude using the sandwich theorem that $\lim_{x\to0}x^2\sin(1/x)=0$. The sandwich theorem also applies for limits at infinity.

> ## Continuity

There's also the idea of **continuity**. Functions are continuous if you can trace them without ever lifting your pencil. The formal definition of continuity is that a function $f(x)$ is continuous at $x=c$ if

$$\lim_{x\rightarrow c} f(x)=f(c)$$

For example, all polynomial functions are continuous. There are four types of discontinuities:

  1. Removable discontinuity. You can shift the position of a finite set of points to make the function continuous.
  2. Nonremovable discontinuity: infinite. Think vertical asymptotes of a rational function.
  3. Nonremovable discontinuity: jump. Think of a step function (for example, $f(x)=0$ for $x\leq 0$ and $f(x)=1$ for $x>0$).
  4. Nonremovable discontinuity: oscillatory. Think of $\sin(1/x)$ as $x\rightarrow 0$.

To set up future discussions, consider the slope of a secant line between two points $(x_1, f(x_1))$ and $(x_1+h, f(x_1+h))$ for some parameter $h$. The slope $m$ of this secant line is

$$m=\frac{y_2-y_1}{x_2-x_1}=\frac{f(x_1+h)-f(x_1)}{x_1+h-x_1}=\frac{f(x_1+h)-f(x_1)}{h}$$

What happens as $h$ goes to zero? (We'll find out later.)

> ## Exercises

### Problem 1

Evaluate the limit $\lim_{t \rightarrow-3} \frac{6+4 t}{t^{2}+1}$. Evaluate the limit $\lim_{x\rightarrow -\infty}\frac{7x^3+2x+1}{9x^3-4x^2+3x+6}$.

### Problem 2
Consider the function

$$ 
f(x)=\left\{\begin{array}{ll}
7-4 x & x<1 \\
x^{2}+2 & x \geq 1
\end{array}\right.
$$

Answer the following two questions:

  1. Evaluate the limit $\lim_{x\rightarrow -6}f(x)$ (if it exists). Is $f(x)$ continuous at $x=-6$?
  2. Evaluate the limit $\lim_{x\rightarrow 1}f(x)$ (if it exists). Is $f(x)$ continuous at $x=1$?

### Problem 3
Consider the function $f(x)=x^2$.

  1. What is $f(x+h)$ for some parameter $h$? What is $f(x+h)-f(x)$? What is the simplified form of $\frac{f(x+h)-f(x)}{h}$ given this function definition?
  2. Given the simplified form of $\frac{f(x+h)-f(x)}{h}$ you found in Part (1) above, what is $\lim_{h\rightarrow 0}\frac{f(x+h)-f(x)}{h}$?
