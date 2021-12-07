---
permalink: /calculus/lhopitals-rule/
author_profile: false
title: "L'Hopital's Rule"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

First, a preface: I am not doing justice to [Guillaume de L'Hopital](https://en.wikipedia.org/wiki/Guillaume_de_l%27H%C3%B4pital)'s namesake. The "o" character should technically have a [circumflex accent](https://en.wikipedia.org/wiki/Circumflex), but unfortunately I cannot find an easy way to include special characters in this markdown typeset.

L'Hopital's rule is an extremely useful technique that can be used to evaluate derivatives that are otherwise unevaluable. The rule says that if $\lim_{x\rightarrow c}f(x)$ and $\lim_{x\rightarrow c}g(x)$ are both equal to $0$ or both equal to $\pm\infty$, then it follows that

$$ \lim_{x\rightarrow c}\frac{f(x)}{g(x)}=\lim_{x\rightarrow c}\frac{f'(x)}{g'(x)}$$

Of course, this is under the strict assumption that **the limit on the right hand side actually exists**. If it doesn't, then L'Hopital's Rule is of no use to use here.

When direct substitution into a limit expression yields an expression like $\frac{0}{0}$ or $\frac{\pm\infty}{\pm\infty}$, we call expressions like this **indeterminate form**. This means that as the limit stands, we can't determine what the value of the limit is. It may be undefined, or it may have some finite value, but seeing something in indeterminate form tells us that we need to do additional work in order to figure out the actual value of the limit. More often than not, this involves using L'Hopital's Rule.

> ## (Pseudo) Derivation

We can sketch a proof for L'Hopital's rule in the particular case where $f(c)=0$ and $g(c)=0$, which yields the result $$\lim_{x\rightarrow c}\frac{f(x)}{g(x)}=\frac{0}{0}$$, which is an example of of the indeterminate form that we discussed above. However, we can manipulate the limit in the following way:

$$\lim_{x\rightarrow c}\frac{f(x)}{g(x)}=\lim_{x\rightarrow c}\frac{f(x)-0}{g(x)-0}=\lim_{x\rightarrow c}\frac{f(x)-f(c)}{g(x)-g(c)}$$

This is because $f(c)=g(c)=0$ in our case. Next, let's divide both the numerator and denominator by the quantity $x-c$:

$$\lim_{x\rightarrow c}\frac{f(x)}{g(x)}=\frac{\lim_{x\rightarrow c}\frac{f(x)-f(c)}{x-c}}{\lim_{x\rightarrow c}\frac{g(x)-g(c)}{x-c}}$$

From the definition of the derivative, we learned that the numerator is equal to $f'(x)$ evaluated at $x=c$, and the denominator is equal to $g'(x)$ evaluated at $x=c$. In other words, we have

$$\lim_{x\rightarrow c}\frac{f(x)}{g(x)}=\lim_{x\rightarrow c}\frac{f'(x)}{g'(x)}$$

There are some subtle issues with this proof (particularly with the last step), but it's a good illustration with the general principle of what's happening mathematically.

> ## Some Examples 

In this section, we'll see a couple of example uses of L'Hopital's Rule.

> ### Example 1

Let's evaluate the limit $\lim_{w\rightarrow -4}\frac{\sin(\pi w)}{w^2-16}$. Again, we need to first verify that we are justified in using L'Hopital's Rule. Direct substitution yields $\frac{0}{0}$, so we're good. The derivative of the numerator is $\pi\cos(\pi w)$, while the derivative of the denominator is $2w$. Therefore, using L'Hopital's Rule, we can conclude that

$$\lim_{w\rightarrow -4}\frac{\sin(\pi w)}{w^2-16}=\lim_{w\rightarrow -4}\frac{\pi\cos(\pi w)}{2w}=\frac{\pi\cos(-4\pi)}{2(-4)}=\frac{-\pi}{8}$$

> ### Example 2

Let's try to evaluate the limit $\lim_{x\rightarrow -\infty}\frac{x^2}{e^{1-x}}$. The first thing that we should always do is verify that we are justified in using L'Hopital's Rule. From direct substitution, we find that the numerator and denominator would both independently evaluate to $\infty$. This confirms that we can use L'Hopital's Rule. The derivative of the numerator is $2x$, and the derivative of the denominator is $-e^{1-x}$, meaning that we can conclude that

$$\lim_{x\rightarrow -\infty}\frac{x^2}{e^{1-x}}=\lim_{x\rightarrow -\infty}\frac{2x}{-e^{1-x}}$$

However, note that upon direct substitution, we get another indeterminate form $\frac{-\infty}{\infty}$ again! This allows us to use L'Hopital's Rule once more to find

$$\lim_{x\rightarrow -\infty}\frac{x^2}{e^{1-x}}=\lim_{x\rightarrow \infty}\frac{2}{e^{1-x}}$$

Now, when we directly plug in the limit, the numerator stays as a constant while the denominator tends to infinity. Since a constant divided by infinity is equal to zero, we can conclude that

$$\lim_{x\rightarrow -\infty}\frac{x^2}{e^{1-x}}=0$$

This is an example of an instance where we can actually apply L'Hopital's Rule multiple times _in succession_. Of course, every time that you want to use the rule, you must first always justify that you encounter an expression in indeterminate form when using direct substitution.

> ### Example 3

In this example, we'll encounter a situation where it may not even be apparent to use L'Hopital's Rule. Consider the limit $\lim_{z\rightarrow 0^+}[z^2\ln(4z^2)]$. Here, there doesn't even seem to be a fractional expression in the form of $f(x)/g(x)$, and so in order to use L'Hopital's Rule, we need to rewrite the expression into this fractional form ourselves. One way to do this is be rewriting it as 

$$\lim_{z\rightarrow 0^+}[z^2\ln(4z^2)]=\lim_{z\rightarrow 0^+}\frac{\ln(4z^2)}{\frac{1}{z^2}}$$

Now, if we do a direct substitution, we get that the numerator goes to $-\infty$ while the denominator goes to $+\infty$. Therefore, we have an instance of indeterminate form, and so let's apply L'Hopital's Rule. From our work on [derivatives with logarithms](/calculus/derivatives-involving-e/index.html), we know that the derivative of the numerator is $\frac{d}{dz}[\ln(4z^2)]=\frac{2}{z}$ (verify this using the chain rule), and that the derivative of the denominator is $\frac{d}{dz}[\frac{1}{z^2}]=\frac{-2}{z^3}$. Therefore, we can conclude that

$$\lim_{z\rightarrow 0^+}[z^2\ln(4z^2)]=\lim_{z\rightarrow 0^+}\frac{\frac{2}{z}}{\frac{-2}{z^3}}=\lim_{z\rightarrow 0^+}-z^2$$

Here, it is very easy now to directly substitute $z=0$ and find that the limit equals $0$. 

> ## Exercises

> ### Problem 1

In this exercise, we will two different limits.

This problem will teach us how to evaluate a limit by rewriting them into a form that can be simplified using L'Hopital's Rule. Consider the limit $\lim_{x\rightarrow \infty} [e^x+x]^{1/x}$.

  1. Clearly, we don't have a fraction in the limit expression and therefore have no way of using L'Hopital's Rule right now. Define a variable $y$ equal to this limit expression, and write down the resulting equation. Our job now is to solve for the value of $y$. The equation we're working with now is $y=\lim_{x\rightarrow \infty}[e^x+x]^{1/x}$.
  2. Take the natural logarithm of both sides, and using properties of the natural logarithm, simplify the right hand side to "artificially" introduce a fraction on the right hand side.
  3. Use L'Hopital's Rule to solve for $\ln y$. Once you have found a numerical expression, what is the value of $y$?

Next, this problem will show us that not every limit can necessarily benefit from using L'Hopital's Rule, even if it looks like it would. Consider the limit $\lim_{x\rightarrow \infty}\frac{x+\cos x}{x-\cos x}$.

  1. Show that L'Hopital's Rule can be applied here, and the limit meets the necessary conditions to use the rule.
  2. Try to evaluate the limit using L'Hopital's Rule. Explain why it results in a form that isn't necessarily helpful to us.
  3. Try to evaluate the limit without using L'Hopital's Rule.

> ### Problem 2

_This selection of problems was taken from [this link](http://www.math.cmu.edu/~bkell/lhopital.pdf). Please check it out if you'd like more practice._

Evaluate the following limits:

  1. $$\lim_{\theta\rightarrow 0}\frac{2\sin\theta-\sin2\theta}{\sin\theta-\theta\cos\theta}$$
  2. $$\lim_{x\rightarrow e}\frac{1-\ln x}{\frac{x}{e}-1}$$
  3. $$\lim_{x\rightarrow 0}\left(\frac{1}{\sin^2x}-\frac{1}{x^2}\right)$$
  4. $$\lim_{x\rightarrow \infty}\frac{x^{10^{10}}}{e^x}$$
  5. $$\lim_{x\rightarrow 0}\frac{\sin^{-1}x}{x\cos^{-1}x}$$

_Hint: For problem 4, do not try to actually evaluate it by hand. See if you can find a pattern._
