---
permalink: /calculus/u-substitution/
author_profile: false
title: "$u$-Substitution"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

From [last time](/calculus/evaluating-integrals/index.html), we learned a number of formulas for determining the indefinite integral of a particular group of functions:

  1. $$\int dx\text{ }x^n=\frac{1}{n+1}x^{n+1}+C\text{ for }n\neq 1$$
  2. $$\int dx\text{ }\sin x=-\cos x+C$$
  3. $$\int dx\text{ }\cos x=\sin x+C$$
  4. $$\int dx\text{ }e^x=e^x+C$$

However, the never of indefinite integrals that we can actually evaluate is extremely small using just these rules. We want a way to extend these rules more generally to a larger set of problems. When we were learning about derivatives, we learned that the [chain rule](/calculus/chain-rule/index.html) could extend the common derivative rules to a wider set of differentiation problems. For integration, the analogous technique for integration is what we'll be learning today: $u$-substitution.

> ## The Problem Setup

Imagine the the following integral setup:

$$\int dx\text{ }f(u)\frac{du}{dx}$$

Here, we have a function $f$ that is a function of $u$, multiplied by a particular function $\frac{du}{dx}$ that just so happens to be the derivative of $u$ with respect to $x$. For integrals that are specifically in this form, notice that $dx\frac{du}{dx}$ can simplify to $du$, since we can somewhat think of the $dx$ quantities in the numerator and denominator cancel out with one another. Therefore, this integral can simplify to

$$\int dx\text{ }f(u)\frac{du}{dx}=\int du\text{ }f(u)$$

That's it! This is called the **inverse chain rule**, but is more commonly referred to as **$u$-substitution**. At first glance of this equation, its usefulness is almost certainly not immediately apparent, so let's try out a couple of example problems to illustrate how to actually use the $u$-substitution technique in practice:

> ## Examples of $u$-Substitution

> ### Example 1

**Evaluate the indefinite integral $$\int dx\text{ }(x+2)^9$$.**

Without $u$-substitution, the only way we can really approach this problem is by expanding out the function $(x+2)^9$ using the binomial theorem, and then using the power rule and linearity of integration to evaluate the indefinite integral term by term. This is clearly a somewhat painful process. However, with $u$-substitution, we can choose $u=x+2$, such that $\frac{du}{dx}=1$. As we can see now, the original integral expression is in the form

$$\int dx\text{ }(x+2)^9=\int dx\text{ }f(u)\frac{du}{dx}, \text{ where }\frac{du}{dx}=1\text{, }u=x+2\text{, and }f(u)=u^9$$

Because of this indefinite integral is in the desired form, we can use the $u$-substitution equation: 

$$\int dx\text{ }(x+2)^9=\int du\text{ }u^9$$

Now, the right hand side can be simply evaluated using power rule for integration:

$$\int dx\text{ }(x+2)^9=\frac{1}{10}u^{10}+C=\frac{1}{10}(x+2)^{10}+C$$

> ### Example 2

**Evaluate the indefinite integral $$\int dx\text{ }(2x+5)(x^2+5x)^7$$.**

Unlike the previous example, the choice for what to pick $u$ to be is perhaps not as straightforward. Is $u=2x+5$? Or maybe $u=x^2+5x$? Or perhaps some combination of the two? In actual practice, often the most difficult part of any $u$-substitution problem is simply figuring out what $u$ is. If you pick the most optimal choice for $u$, then the problem can often turn out fairly easy and straightforward. If you pick the wrong choice, you might get absolutely nowhere. Starting out, it may be difficult to identify what is the "optimal choice" for $u$, but as you get more comfortable with this process, this will certainly become more natural.

In picking the best option for $u$, it often helps to see if you can find a factor of $\frac{du}{dx}$ in the expression as well, as the $u$-substitution rule requires this particular factor in order to work. In this case, we can notice that $2x+5$ is the derivative of $x^2+5x$, and so we might (correctly) guess that we should choose $u=x^2+5x$. Therefore, we can rewrite

$$\int dx\text{ }(2x+5)(x^2+5x)^7=\int dx\text{ }f(u)\frac{du}{dx}, \text{ where }\frac{du}{dx}=2x+5\text{, }u=x^2+5x\text{, and }f(u)=u^7$$

Because of this indefinite integral is in the desired form, we can use the $u$-substitution equation: 

$$\int dx\text{ }(2x+5)(x^2+5x)^7=\int du\text{ }u^7$$

Now, the right hand side can be simply evaluated using power rule for integration:

$$\int dx\text{ }(2x+5)(x^2+5x)^7=\frac{1}{8}u^{8}+C=\frac{1}{8}(x^2+5x)^{8}+C$$

> ### Example 3

**Evaluate the indefinite integral $$\int dy\text{ }\sqrt{7y+9}$$.**

Luckily for us in this case, there aren't many options for what to pick $u$ as. You might try a couple options but should ultimately end up seeing that the best option is choosing $u=7y+9$ with $\frac{du}{dy}=7$. However, note that we don't see a factor of $7$ within the integral. 

If we are off by a constant multiple, the best way to solve this is to slightly rewrite the integral in the following way:

$$\int dy\text{ }\sqrt{7y+9}=\frac{1}{7}\int dy\text{ }7\sqrt{7y+9}$$

By simultaneously multiplying and dividing by $7$, we are not changing the value of the integral, but are able to put the integral expression in the desired $u$-substitution form:

$$\int dy\text{ }\sqrt{7y+9}=\frac{1}{7}\int dy\text{ }f(u)\frac{du}{dy}, \text{ where }\frac{du}{dy}=7\text{, }u=7y+9\text{, and }f(u)=\sqrt{u}$$

Because of this indefinite integral is in the desired form, we can use the $u$-substitution equation: 

$$\int dy\text{ }\sqrt{7y+9}=\frac{1}{7}\int du\text{ }u^{1/2}$$

Now, the right hand side can be simply evaluated using power rule for integration:

$$\int dy\text{ }\sqrt{7y+9}=\frac{1}{7}\frac{2}{3}u^{3/2}+C=\frac{2}{21}(7x+9)^{3/2}+C$$

> ### Example 4

**Evaluate the indefinite integral $$\int dt\text{ }\frac{t^3}{(1+t^4)^{1/3}}$$.**

Some trial-and-error guessing of what the best function for $u$ to choose to get this integral into the correct expression for applying $u$-substitution should get you to choose $u=1+t^4$. This is because $\frac{du}{dx}=4t^3$. Although we don't seem to have the correct factor of $4$ currently available, we have the correct functional form of $t^3$ in the numerator. In order to "artificially" introduce the factor of $4$ as well, we can use the same technique of multiplying and dividing by the same value as we did [above](/calculus/u-substitution/index.html#example-3):

$$\int dt\text{ }\frac{t^3}{(1+t^4)^{1/3}}=\frac{1}{4}\int dt\text{ }\frac{1}{(1+t^4)^{1/3}}\cdot(4t^3)$$

By simultaneously multiplying and dividing by $4$, we are not changing the value of the integral, but are able to put the integral expression in the desired $u$-substitution form:

$$\int dt\text{ }\frac{t^3}{(1+t^4)^{1/3}}=\frac{1}{4}\int dt\text{ }f(u)\frac{du}{dt}, \text{ where }\frac{du}{dt}=4t^3\text{, }u=1+t^4\text{, and }f(u)=u^{-1/3}$$

Because of this indefinite integral is in the desired form, we can use the $u$-substitution equation: 

$$\int dt\text{ }\frac{t^3}{(1+t^4)^{1/3}}=\frac{1}{4}\int du\text{ }u^{-1/3}$$

Now, the right hand side can be simply evaluated using power rule for integration:

$$\int dt\text{ }\frac{t^3}{(1+t^4)^{1/3}}=\frac{1}{4}\frac{3}{2}u^{2/3}+C=\frac{3}{8}(1+t^4)^{2/3}+C$$

> ### Example 5

**Evaluate the indefinite integral $$\int dx\text{ }\frac{\sin (\ln x)}{x}$$.**

For this problem, we should set $u=\ln x$ because $\frac{du}{dx}=\frac{1}{x}$. This allows us to write the integral as

$$\int dx\text{ }\frac{\sin (\ln x)}{x}=\int dx\text{ }\sin (u)\frac{du}{dx}, \text{ where }\frac{du}{dx}=\frac{1}{x}\text{, }u=\ln x\text{, and }f(u)=\sin u$$

In this scenario, it might be particularly difficult to determine what the value of $u$ should be because the factor of $\frac{1}{x}$ for the $\frac{du}{dx}$ term doesn't look particularly clear; it just looks like we're dividing by $x$. Nonetheless, after putting the integral into this form, we can evaluate the integral as

$$\int dx\text{ }\frac{\sin (\ln x)}{x}=-\cos u+C=-\cos(\ln x)+C$$

> ## $u$-Substitution for Definite Integration

For the most part, all of the machinery that we've established for $u$-substitution in the case of indefinite integration is largely the same as for evaluating definite integrals. However, one thing that we will need to talk about is how the upper and lower bounds of integration change in response to a substitution of variables. Consider the following example building on the last example from [above](/calculus/u-substitution/index.html#example-5).

**Evaluate the definite integral $$\int_1^e dx\text{ }\frac{\sin(\ln x)}{x}$$.**

Given the results from [above](/calculus/u-substitution/index.html#example-5) indefinite integral exercise, we know that the appropriate $u$-substitution to make is $u=\ln x$. We might be tempted to therefore state that

$$\int_1^e dx\text{ }\frac{\sin(\ln x)}{x}=\int_1^e du\text{ }\sin u$$

However, this equation is not correct! This is because while we have transformed the integral from integral with respect to $x$ into an integral with respect to $u$, the lower and upper bounds of integration are still in terms of $x$. In order to convert them into the appropriate lower and upper bounds of integration with respect to $u$, we need to use the fact that $u=\ln x$. The lower bound of $x=1$ correlates with a transformed lower bound of $u=\ln 1=0$. Similarly, the upper bound of $x=e$ correlates with a transformed upper bounds of $u=\ln e=1$. Therefore, the correct integral expression should be

$$\int_1^e dx\text{ }\frac{\sin(\ln x)}{x}=\int_0^1 du\text{ }\sin u$$

We can now use our standard integration techniques to write

$$\int_1^e dx\text{ }\frac{\sin(\ln x)}{x}=-\cos 1+\cos 0=1-\cos 1$$

In general, as shown through this example problem, the technique of $u$-substitution is exactly the same for indefinite and definite integrals, but for definite integration, we also need to remember to appropriately transform the lower and upper bounds of integration to be in terms of $u$ in order to get the correct result.

> ## Exercises

We've covered a number of examples of how to apply $u$-substitution in real life. On the AP Calculus exam, this integration technique is very often tested, but it is important to realize that in real life with the span of all of the possible integral expressions, only a *very small* percentage of them can actually be evaluated using $u$-substitution. In the  future, we will discuss additional, more advanced techniques to increase our set of analytically evaluable integrals, but until then, $u$-substitution is nonetheless a pretty helpful tool!

Like differentiation, integration problems are simply a question of getting familiar with  common integral setups, and being able to recognize almost instantly what you should choose your value of $u$ to be. In the examples above, it was probably difficult to choose, but it will almost certainly get easier with practice. Because of how important  practice is in mastering $u$-substitution and other integration techniques, this module's associated exercises will be a little different. Below, I've linked a bunch of practice problems from external websites. Doing just a few problems will almost certainly not cut it; you need to be doing at least 30-50 problems over a few weeks to gain mastery! Until you can look at a problem and can *immediately* know in your head how to approach it, I recommend continuing to do exercises.

  1. **[MATH 142 at the University of South Carolina](http://people.math.sc.edu/josephcf/Teaching/TA142/Files/Handouts%20and%20Worksheets/U-Substitution.pdf)**: The first 33 problems are good practice. I think the challenge problems might be far too difficult right now to be approachable, but if you're very interested and feel like you have a good grasp on the material, definitely try them out. The problems are on page 3, some hints are on page 4, and answers to check your work are on page 5 of the document.
  2. **[MATH 229 at Northern Illinois University](http://www.math.niu.edu/~beachy/courses/229/pdf/integral.pdf)**: I'd probably recommend doing a selection of the first 25 problems on the page. The answers to check your work are on the second page of the document.
  3. **[MATH 25 at Swarthmore College](http://www.swarthmore.edu/NatSci/cgrood1/M25%20worksheets/ws2-25.pdf)**: If you've done a selection of problems from the above links, questions 1 through 3 may not be necessary to attempt. I think questions 4 and 5 are good questions to attempt. Unfortunately, no solutions are included in the document itself, so I've included solutions to questions 4 and 5 below for you to check your work.
  4. **[Khan Academy](https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new/ab-6-9/e/u-substitution-defining-u)**: Always a great resource. This is a link to some practice problems on $u$-substitution.
  5. **[Truman College Worksheet](http://www.teaching.martahidegkuti.com/shared/lnotes/6_calculus/integral/substitution/substitutionb.pdf)**: This worksheet is especially nice because a couple of the questions (18 and 19) deal with integral expressions at infinity. Remember when approaching these problems that $\frac{1}{\infty}$ can be thought of as being equal to $0$, exactly the same as the expressions we encountered when thinking about limits at infinity and some special derivatives. The answers are on the second page of this document.

> ### Solutions to Swarthmore College Problems

> #### Problem 4

**Part (a): Evaluate the indefinite integral expression $$\int \frac{\tan x}{\cos x}dx$$.**

In this case, we can first write the function inside the integral expression as $\frac{\tan x}{\cos x}=\frac{\sin x}{\cos^2 x}$ using the definition of the tangent function. Choosing $u=\cos x$ gives us $\frac{du}{dx}=-\sin x$, and so

$$\int \frac{\tan x}{\cos x}dx=\int \frac{-1}{\cos^2 x}\left(-\sin x \text{ }dx\right)=\int \frac{-1}{u^2} du$$

After applying $u$-substitution, we can easily evaluate the integral using the power rule for integration: 

$$\int \frac{\tan x}{\cos x}dx=u^{-1}+C=\frac{1}{\cos x}+C$$

**Part (b): Evaluate the indefinite integral expression $$\int \frac{1}{x\sqrt{\ln x}}dx$$.**

Choosing $u=\ln x$ gives us $\frac{du}{dx}=\frac{1}{x}$, and so

$$\int \frac{1}{x\sqrt{\ln x}}dx=\int \frac{1}{\sqrt{\ln x}}\left(\frac{1}{x}dx\right)=\int \frac{1}{\sqrt{u}} du$$

After applying $u$-substitution, we can easily evaluate the integral using the power rule for integration: 

$$\int \frac{1}{x\sqrt{\ln x}}dx=2\sqrt{u}+C=2\sqrt{\ln x}+C$$

**Part (c): Evaluate the indefinite integral expression $$\int e^{e^x}e^xdx$$.**

Choosing $u=e^x$ gives us $\frac{du}{dx}=e^x$, and so

$$\int e^{e^x}e^xdx=\int e^{e^x}\left(e^xdx\right)=\int e^u du$$

After applying $u$-substitution, we can easily evaluate the integral using the power rule for integration: 

$$\int e^{e^x}e^xdx=e^u+C=e^{e^u}+C$$

> #### Problem 5

**Part (a): Show that $$\int_0^1 f(x)dx=\int_0^1 f(1-x)dx$$.**

Let's start with the integral on the right hand side and then show that it is equal to the integral on the left hand side. Choose $u=1-x$, such that $\frac{du}{dx}=-1$. We also need to adjust the lower and upper bounds of integration: the lower bound $x=0$ transforms to $u=1-0=1$, while the upper bound $x=1$ transforms to $u=1-1=0$.

$$\int_0^1 f(1-x)dx=-\int_0^1 f(1-x)(-dx)=-\int_1^0 f(u)du$$

Use the property of integration shown [here](/calculus/evaluating-integrals/index.html) to reverse the bounds of integration:

$$\int_0^1 f(1-x)dx=\int_0^1 f(u)du$$

Finally, it doesn't matter really what we name our variables, so on the right hand side, let's rename the variable $u$ as $x$ to achieve the desired result:

$$\int_0^1 f(1-x)dx=\int_0^1 f(x)dx$$

**Part (b): Show that $$2 \int_{a}^{b} f(x) f^{\prime}(x) d x=(f(b))^{2}-(f(a))^{2}$$.**

Choosing $u=f(x)$ gives us $\frac{du}{dx}=f'(x)$. As we can see, the integral expression on the left hand side is already beautifully written in $u$-substitution form. So, all we need to do is adjust the bounds of integration. The lower bound $x=a$ transforms to $u=f(a)$, while the upper bound $x=b$ transforms to $u=f(b)$.

$$2 \int_{a}^{b} f(x) f^{\prime}(x) d x=\int_{f(a)}^{f(b)} 2u \text{ }du$$

After applying $u$-substitution, we can easily evaluate the integral using the fact that the antiderivative of $2u$ is $u^2$ (aside from an added constant, of course).

$$2 \int_{a}^{b} f(x) f^{\prime}(x) d x=(f(b))^{2}-(f(a))^{2}$$

This proves the desired result.
