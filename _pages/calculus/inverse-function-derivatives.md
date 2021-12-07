---
permalink: /calculus/inverse-function-derivatives/
author_profile: false
title: "Derivatives of Inverse Functions"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

This lesson will discuss how to determine the derivative of an inverse function $f^{-1}(x)$ given that we know that the derivative of $f(x)$ is. We will then see how we can apply these ideas to a variety of different applications, including finding the derivatives of inverse trigonometric functions.

> ## Derivativation

Imagine that we know the derivative of some function $f(x)$, and we are interested in computing $f^{-1}(x)$, which is defined to be the _inverse_ of $f(x)$. That is, $f(f^{-1}(x))=f^{-1}(f(x))=x$. Using this definition and the chain rule, we can determine the derivative of $f^{-1}(x)$. Firstly, consider the equation

$$f(f^{-1}(x))=x$$

We can differentiate both sides with respect to $x$. To simplify the left hand side, we will need to use the chain rule, setting our $\eta$ parameter from discussion of the [chain rule](/calculus/chain-rule/index.html) to $\eta=f^{-1}(x)$. This gives us the following:

$$f'(f^{-1}(x))\cdot \frac{d}{dx}\left[f^{-1}(x)\right]=1$$

Solving for the derivative of the inverse function therefore gives us

$$\frac{d}{dx}\left[f^{-1}(x)\right]=\frac{1}{f'(f^{-1}(x))}$$

This is the formula for the derivative of an inverse function given that we know the derivative of $f(x)$. Let's go over a basic example to illustrate how this works. Define $f(x)=x^2$. This is a parabola, and so we know that $f^{-1}(x)=\sqrt{x}$ (you can confirm this using the definition of the inverse function given above). The right hand side gives us

$$\frac{1}{f'(f^{-1}(x))}=\frac{1}{2\sqrt{x}}$$

Here, we obtained this result by differentiating $x^2$ with respect to $x$, and then plugging in the expression $f^{-1}(x)=\sqrt{x}$ for $x$. This result agrees with our expected result for the derivative of the inverse function $f^{-1}(x)=\sqrt{x}$ using the power rule from before.

> ## Derivatives of Inverse Trigonometric Functions

The above example was great, but wasn't extremely helpful since we could already find the derivative of the function $y=\sqrt{x}$ quite easily using the chain rule. In contrast, let's try to find the derivative of the function $f^{-1}(x)=\sin^{-1}(x)$, which is the inverse function of $f(x)=\sin x$. Using the fact that $f'(x)=\cos x$ from our work on [derivatives of trigonometric functions](/calculus/trig-function-derivatives/index.html), we can plug in to the formula from above:

$$\frac{d}{dx}\left[\sin^{-1}(x)\right]=\frac{1}{\cos(\sin^{-1}(x))}$$

Strictly speaking, this is the correct answer and so we're done. However, how can we simplify the expression in the denominator on the right hand side? The easiest way to do this is perhaps by considering a right triangle:

![inv-sine](/assets/images/inv-functions-1.png){:height="50%" width="50%"}

Here, we have constructed a right triangle with leg lengths of $x$ and $\sqrt{1-x^2}$ for some parameter $x$, and with hypotenuse length of $1$. Recall that the definition of the sine of an angle $\theta$ can be given by the length of the **opposite** side divided by the length of the **hypotenuse** in this right triangle. In this case, using this definition gives us $\sin\theta=x/1=x$. Therefore, by the definition of the inverse function, $\theta=\sin^{-1}(x)$. Because the cosine of an angle is defined to be the **adjacent** side length divided by the **hypotenuse** side length, we can conclude that

$$\cos\theta=\cos(\sin^{-1}(x))=\frac{\sqrt{1-x^2}}{1}=\sqrt{1-x^2}$$. 

From this simple, seemingly unrelated geometry can yield a result that can be used in our result for the derivative of the arcsine function from above:

$$\frac{d}{dx}\left[\sin^{-1}(x)\right]=\frac{1}{\sqrt{1-x^2}}$$

In the problems below, you will also prove the following results:

  1. $$\frac{d}{dx}\left[\cos^{-1}(x)\right]=-\frac{1}{\sqrt{1-x^2}}$$
  2. $$\frac{d}{dx}\left[\tan^{-1}(x)\right]=\frac{1}{1+x^2}$$
  3. $$\frac{d}{dx}\left[\cot^{-1}(x)\right]=-\frac{1}{1+x^2}$$
  4. $$\frac{d}{dx}\left[\sec^{-1}(x)\right]=\frac{1}{\vert x\vert \sqrt{x^2-1}}\text{ for }x\neq \pm 1, 0$$
  5. $$\frac{d}{dx}\left[\csc^{-1}(x)\right]=\frac{-1}{\vert x\vert \sqrt{x^2-1}}\text{ for }x\neq \pm 1, 0$$

The proofs for these results are quite similar to the proof for finding the derivative of $\sin^{-1}(x)$ from above. Of course, we can combine any one of these with the chain rule to evaluate the derivatives of more complex functions that involve these derivatives. We will illustrate two of the proofs below:

> ### Example 1 

Let's try to evaluate the derivative $$\frac{d}{dx}\left[\tan^{-1}(x)\right]$$. This corresponds to $f(x)=\tan(x)$, and from our work on [derivatives of trigonometric functions](/calculus/trig-function-derivatives/index.html#the-main-formulas), recall that $\frac{d}{dx}[\tan x]=\sec^2 x$. Therefore, using the formula for the derivative of inverse functions,

$$\frac{d}{dx}\left[\tan^{-1}(x)\right]=\frac{1}{\sec^2(\tan^{-1}(x))}=\cos^2(\tan^{-1}(x))$$

Now, in order to simplify the right hand side, we need to consider a right triangle diagram yet again, but this time, the diagram must feature an angle $\theta$ whose tangent (opposite divided by adjacent) is equal to $x$. Using the Pythagorean theorem, a potential diagram might look like

![inv-tan](/assets/images/inv-functions-2.png){:height="50%" width="50%"}

Clearly, $\tan\theta=x/1=x$, meaning that $\tan^{-1}(x)=\theta$. Taking the cosine of both sides (which is adjacent side length divided by hypotenuse length), we have

$$\cos(\tan^{-1}(x))=\cos\theta=\frac{1}{\sqrt{1+x^2}}$$

Finally, squaring both sides gives

$$\cos^2(\tan^{-1}(x))=\frac{1}{1+x^2}$$

Therefore, we can conclude that

$$\frac{d}{dx}\left[\tan^{-1}(x)\right]=\frac{1}{1+x^2}$$

This gives us the expected result.

> ### Example 2

We can also evaluate the derivative $$\frac{d}{dx}\left[\csc^{-1}(x)\right]$$. This corresponds to $f(x)=\csc(x)$, and again, we showed [previously](/calculus/trig-function-derivatives/index.html#the-main-formulas) that $\frac{d}{dx}[\csc(x)]=-\cot x\csc x$. This means that, using the inverse function formula from above,

$$\frac{d}{dx}\left[\csc^{-1}(x)\right]=\frac{1}{-\cot(\csc^{-1}(x))\csc(\csc^{-1}(x))}=-\frac{\tan(\csc^{-1}(x))}{\vert x\vert}$$

This is because $\csc(\csc^{-1}(x))=\vert x\vert$ from the basic definition of inverse functions. (I encourage you to verify this yourself. More interestingly, why do we need the absolute value signs?) To evaluate the numerator on the right hand side, we again apply a similar technique:

![inv-csc](/assets/images/inv-functions-3.png){:height="50%" width="50%"}

Using this diagram, we have $\csc\theta=(\text{hypotenuse})/(\text{opposite})=x$, meaning that $\csc^{-1}(x)=\theta$. Taking the tangent of both sides,

$$\tan\theta=\tan(\csc^{-1}(x))=\frac{1}{\sqrt{x^2-1}}$$

Therefore, plugging this result into the equation above, we find

$$\frac{d}{dx}\left[\csc^{-1}(x)\right]=-\frac{\tan(\csc^{-1}(x))}{\vert x\vert}=-\frac{1}{\vert x\vert \sqrt{x^2-1}}$$

This gives us the expected result.

> ## Exercises

> ### Problem 1

Derive the remaining three inverse trigonometric function derivatives:

  1. $$\frac{d}{dx}\left[\cos^{-1}(x)\right]$$
  2. $$\frac{d}{dx}\left[\cot^{-1}(x)\right]$$
  3. $$\frac{d}{dx}\left[\sec^{-1}(x)\right]$$

> ### Problem 2

Answer the following three questions:

  1. Let $$f(x)=7x+\sin(2x)$$. Find the tangent line to $$f^{-1}(x)$$ at $(1, 0)$.
  2. Let $$f(x)=10x+\arctan^2(x)$$. Find the tangent line to $f^{-1}(x)$ at $(0, 0)$.
  3. Let $$f(x)=\frac{-e^{-3x}}{x^2+1}$$. Find the tangent line to $f^{-1}(x)$ at $(-1, 0)$. 

_Note:_ In all three of these problems, do _not_ try to derive an explicit form for $f^{-1}(x)$. Instead, use the formula for a derivative at a specific point that directly stems from the general formula we found above. Namely,

$$\left.\frac{df^{-1}}{dx}\right\vert_{x=x_0}=\frac{1}{\left.f'(x)\right\vert_{x=f^{-1}(x_0)}}$$

> ### Problem 3

_This problem is adapted from the 2007 AP Calculus AB Exam._

The functions $f$ and $g$ are differentiable for all real numbers, and $g$ is strictly increasing. The table below gives values of the functions and their first derivatives at selected values of $x$.

$x$ | $f(x)$ | $f'(x)$ | $g(x)$ | $g'(x)$
1 | 6 | 4 | 2 | 5
2 | 9 | 2 | 3 | 1
3 | 10 | -4 | 4 | 2
4 | -1 | 3 | 6 | 7

The function $h$ is given by $h(x)=f(g(x))-6$.

  1. Explain why there must be a value $r$ for $1<r<3$ such that $h(r)=-5$.
  2. Explain why there must be a value $c$ for $1<c<3$ such that $h'(c)=-5$. 
  3. If $g^{-1}$ is the inverse function of $g$, write an equation for the line tangent to the graph of $y=g^{-1}(x)$ at $x=2$. 
