---
permalink: /calculus/derivatives-involving-e/
author_profile: false
title: "Derivatives of Exponential and Logarithmic Functions"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

Today, we're going to be wrapping up our work on introducing all of the different rules in evaluating different types of analytic functions. We've covered how to differentiate [polynomials](/calculus/evaluating-derivatives/index.html), [rational functions](/calculus/evaluating-derivatives/index.html), [implicitly defined functions](/calculus/implicit-differentiation/index.html), and [trigonometric functions](/calculus/trig-function-derivatives/index.html). The last major differentiation technique we need to cover is finding the derivative of exponential and logarithmic functions.

> ## Deriving the Exponential Function Derivative

Consider the exponential function $f(x)=e^x$. If we want to take the derivative of this function, we need to use the definition of the derivative:

$$\frac{df}{dx}=\lim_{h\rightarrow 0}\frac{f(x+h)-f(x)}{h}=\lim_{h\rightarrow 0}\frac{e^{x+h}-e^x}{h}=e^x\lim_{h\rightarrow}\frac{e^h-1}{h}$$

If we directly substitute $h=0$ into the limit argument, then we get $0/0$, which is a nonsensical value. There are ways to determine this limit analytically, but they aren't in our standard repertoire yet. Instead, the only real property we have with exponentials is that the constant $e$ is defined by the equation

$$e=\lim_{n\rightarrow \infty}\left(1+\frac{1}{n}\right)^n$$

I encourage you to check out [this link](https://en.wikipedia.org/wiki/E_(mathematical_constant)#History) if this definition of $e$ doesn't look familiar. Let's define the variable $$h=\frac{1}{n}$$, such that as $n\rightarrow\infty$, $h\rightarrow 0$, and as $h\rightarrow\infty$, $n\rightarrow 0$. Plugging this into the definition of $e$ gives

$$e=\lim_{h\rightarrow 0}\left(1+h\right)^{1/h}\longrightarrow \lim_{h\rightarrow 0}e=\lim_{h\rightarrow 0}\left(1+h\right)^{1/h}$$

We can add a "limit" operator to the left hand side because $e$ is simply a constant with respect to $h$, meaning that $\lim_{h\rightarrow 0}e=e$. Next, let's take both sides to the $h$ power, which still preserves the limit equality:

$$\lim_{h\rightarrow0} e^h=\lim_{h\rightarrow 0}(1+h) \longrightarrow \lim_{h\rightarrow 0}(e^h-1)=\lim_{h\rightarrow 0}h$$

Finally, dividing by $h$ gives

$$\lim_{h\rightarrow 0}\frac{e^h-1}{h}=\lim_{h\rightarrow 0}1=1$$

Therefore, we have shown using the definition of $e$ that the limit $$\lim_{h\rightarrow 0}\frac{e^h-1}{h}=1$$. Plugging this back into our working expression for $df/dx$ from above, we find

$$\frac{df}{dx}=e^x\lim_{h\rightarrow}\frac{e^h-1}{h}=e^x(1)=e^x\longrightarrow \frac{d}{dx}[e^x]=e^x$$

We have proven a remarkable result: the derivative of $e^x$ is simply itself! By extension, we can also conclude that the derivative of any of the higher order derivatives of $e^x$ is also $e^x$.

Of course, we will almost never _only_ find the derivative of $e^x$. We also want to be able to find the derivative of more complex functions like $e^{x^2+2x}$ and $7^x$. For the first case, we can simply use the [chain rule](/calculus/chain-rule/index.html), defining $\eta=x^2+2x$. In other words, we've already seen situations like this before. However, how can easily evaluate things like $7^x$, where the base of the exponent is no longer $e$?

> ## Bases Other Than $e$

Let's focus on the case where $f(x)=7^x$. Note that we can rewrite the number $7$ as $e^{\log_e 7}$, since $\log_e 7$ is defined to be the power we need to raise $e$ to to get 7, and we are raising $e$ exactly to that power. The base of the exponential $7^x$ can therefore be rewritten:

$$f(x)=7^x=\left(e^{\log_e 7}\right)^x=e^{x\log_e 7}$$

We've effectively converted this problem of finding a derivative for a function we're not familiar with (i.e. $7^x$) into a problem of finding a derivative for a function we _are_ familiar with. For convenience, let's denote $\log_e\equiv \ln$. Note that $\ln 7$ is simply a constant, so this easy to differentiate using the chain rule, where $\eta=ax$ with $a=\ln 7$. Therefore, we have

$$\frac{df}{dx}=\frac{d}{dx}\left[7^x\right]=(\ln7)(e^{x\log_e 7})=7^x\ln7$$

More generally, for a function $a^x$ with $a$ constant,

$$\frac{d}{dx}\left[a^x\right]=a^x\ln a$$

> ## Deriving the Logarithmic Function Derivative

Consider the exponential function $f(x)=\ln x$. If we want to take the derivative of this function, we need to use the definition of the derivative:

$$\frac{df}{dx}=\lim_{h\rightarrow 0}\frac{f(x+h)-f(x)}{h}=\lim_{h\rightarrow 0}\frac{\ln(x+h)-\ln x}{h}$$

Using the fact that $\ln a-\ln b=\ln\frac{a}{b}$, we have

$$\frac{d}{dx}\left[\ln x\right]=\lim_{h\rightarrow 0}\frac{\ln\frac{x+h}{x}}{h}=\lim_{h\rightarrow 0}\frac{\ln\left(1+\frac{h}{x}\right)}{h}=\lim_{h\rightarrow 0}\ln\left(1+\frac{h}{x}\right)^{1/h}$$

We used the power rule $a\ln z = \ln z^a$ to make this simplification. Now, let's define the variable $n=x/h$. Since $x$ is treated as a constant with respect to $h$, this means that as $h\rightarrow 0$, $n\rightarrow \infty$. Therefore, we have

$$\frac{d}{dx}[\ln x]=\lim_{n\rightarrow \infty}\ln\left(1+\frac{1}{n}\right)^{n/x}=\frac{1}{x}\lim_{n\rightarrow \infty}\ln\left(1+\frac{1}{n}\right)^n$$

We moved the $1/x$ factor outside of the limit operator since it is independent of $n$. We can move the limit operator into the logarithm function first. However, note that from the definition of $e$, the resulting limit would be exactly equal to $e$. Therefore, we have

$$\frac{d}{dx}[\ln x]=\frac{1}{x}\ln\left[\lim_{n\rightarrow\infty}\left(1+\frac{1}{n}\right)^n\right]=\frac{1}{x}\ln e=\frac{1}{x}\log_e e=\frac{1}{x}$$

Therefore, we have shown that

$$\frac{d}{dx}[\ln x]=\frac{1}{x}$$

To evaluate higher order derivatives of the natural logarithm function, we can simply use the power rule. $\frac{1}{x}=x^{-1}$, and so for example, 

$$\frac{d^2}{dx^2}[\ln x]=\frac{d}{dx}\left[\frac{1}{x}\right]=\frac{d}{dx}[x^{-1}]=-x^{-2}=\frac{-1}{x^2}$$

Again, similar to the case with the exponential function, simply finding the derivative of $\ln x$ alone will not typically come up. We also want to be able to find the derivative of more complex functions. Other than instances of the chain rule, we also need to consider the case of when we have a function such as $f(x)=\log_a x$, where $a$ is some positive constant not equal to $e$.

> ## Bases Other Than $e$ (Part Two)

Consider the function $f(x)=\log_a x$. Recall the [change of base formula](https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs/x2ec2f6f830c9fb89:change-of-base/a/logarithm-change-of-base-rule-intro), which will be used without proof here to rewrite $f(x)$:

$$f(x)=\log_a x=\frac{\log_e x}{\log_e a}=\frac{\ln x}{\ln a}$$

$\ln a$ is simply a constant. Therefore, if we want to take the derivative of this function, then

$$\frac{d}{dx}[\log_a x]=\frac{d}{dx}\left[\frac{\ln x}{\ln a}\right]=\frac{1}{\ln a}\frac{d}{dx}\left[\ln x\right]=\frac{1}{\ln a}\frac{1}{x}=\frac{1}{x\ln a}$$

Therefore, we have shown that for general constant $a>0$, 

$$\frac{d}{dx}[\log_a x]=\frac{1}{x\ln a}$$

> ## Recap

We have proven the following four formulas:

  1. $$\frac{d}{dx}[e^x]=e^x$$
  2. $$\frac{d}{dx}[a^x]=a^x\ln a\text{ for constant }a>0$$
  3. $$\frac{d}{dx}[\ln x]=\frac{1}{x}$$
  4. $$\frac{d}{dx}[\log_a x]=\frac{1}{x\ln a}\text{ for constant }a>0$$

> ## Exercises

> ### Problem 1

Differentiate the following three functions with respect to $x$, and find the equation of their tangent lines at the specified value of $x$:

  1. $$f(x)=\frac{e^x}{\sqrt{x}}$$; $\quad x=1$
  2. $$f(x)=\frac{x^2\sin x}{x^2+1}$$; $\quad x=\pi$
  3. $$f(x)=e^{\sqrt{x+1}}$$; $\quad x=0$

> ### Problem 2

Consider the function $y=x^x$. In this problem, we will be learning how to take the derivative of this function. 

  1. Take the natural logarithm of both sides of the equation $y=x^x$, and then use the power rule for logarithms to rewrite the right hand side. What do you get?
  2. Differentiate both sides with respect to $x$. Remember to use our techniques from [implicit differentiation](/calculus/implicit-differentiation/index.html) (or technically the chain rule) to differentiate the left hand side. What is the resulting equation that you get?
  3. Solve for $dy/dx$.

This problem introduces us to a very powerful technique. Often times, it might be difficult or even impossible to evaluate the derivative of a function as given. In these cases, try taking the logarithm of both sides first, and then use implicit differentiation to find the derivative. 

> ### Problem 3

Find the derivative $\frac{dy}{dx}$ for the curve described by the equation 

$$\exp(xy)-\exp(xy^2)=\sin y$$

_Note: $\exp(z)$ means the same thing as $e^z$._

> ### Problem 4

Find the derivative of the function $f(x)=\exp(\sin(e^x))$. _Hint: This is an example of a nested chain rule instance._
