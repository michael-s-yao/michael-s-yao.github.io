---
permalink: /calculus/integration-practice-1-sol/
author_profile: false
title: "Integration Practice Problems, Part 1 (Solutions)"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

The following solutions are for the integration practice problems linked [here](/calculus/integration-practice-1/index.html). I encourage you to attempt them by yourself first before looking through the solutions.
{: .notice--danger}

Original problems statements are highlighted in blue. Final answers are highlighted in green. Follow-up extension questions are highlighted in orange.

> ## Practice Problem Solutions

> ### Problem 1

<div class="notice--info">
  <p style="font-size:14pt">Which of the following statement(s) are true?</p>
  <p style="font-size:13pt">  1. If $f(x)$ is increasing and concave up on $[a, b]$, then the left Riemann sum for $\int_a^b f(x)dx$ is an underestimate.</p>
  <p style="font-size:13pt">  2. If $f(x)$ is concave up on $[a, b]$, $g(x)$ is concave down on $[a, b]$, $f(a)=g(a)$, $f(b)=g(b)$, and $f(a)<f(b)$, then the left Riemann sum for $\int_a^b f(x)dx$ is less than the corresponding left Riemann sum for $\int_a^b g(x)dx$.</p>
  <p style="font-size:13pt">  3. If $f(x)$ is concave down on $[a, b]$, then the midpoint Riemann sum for $\int_a^b f(x)dx$ is an overestimate.</p>
</div>

We are asked to evaluate the validity of fairly general statements about integral calculus. In problems like this, it is always easiest to consider a well-defined case that you're familiar that satisfies the conditions of the problems, and evaluate whether the statement is true or false.

For statement 1, let's sketch an arbitrary function $f(x)$ that is increasing and concave up. One example could be the function $f(x)=x^2$ with $a=1$ and $b=2$:

![int-practice-sol-1](/assets/images/int-practice-sol-1.png){: height="70%" width="70%" }

As we can see, a left Riemann sum with arbitrarily chosen $n=5$ rectangles does indeed underestimate the area under the curve, as there is a lot of white space under the curve that is unaccounted for by the rectangles. From considering this particular concrete example, we can conclude that statement 1 is _true_.

For statement 2, let's again sketch an concrete set of functions $f(x)$ and $g(x)$ that satisfy the conditions posed in this problem:

![int-practice-sol-2](/assets/images/int-practice-sol-2.png){: height="65%" width="65%" }

Indeed, we can see that for this particular case, the blue rectangles that compose the Riemann sum for $f(x)$ always have an area less than or equal to the corresponding set of green rectangles that compose the Riemann sum for $g(x)$. Therefore, we can conclude from this representative diagram that statement 2 is _true_.

For statement 3, we can sketch a convex function $f(x)$ and the corresponding midpoint Riemann sum with $n=1$ rectangles in order to make our diagram clear:

![int-practice-sol-3](/assets/images/int-practice-sol-3.png){: height="65%" width="65%" }

From this diagram, it is clear that the gray area above the curve $f(x)$ is significantly greater than the small white space unaccounted for by the Riemann sum underneath the curve $f(x)$. From this example, it is clear that the midpoint Riemann sum for the integral $\int_a^b f(x)dx$ is an overestimate, meaning that statement 3 is _true_. 

<div class="notice--success">
<p style="font-size:13pt">Statements 1, 2, and 3 are all true. </p>
</div>

> ### Problem 2

<div class="notice--info">
<p style="font-size:13pt"> For the function whose values are given in the table below, $\int_0^6 f(x) dx$ is approximated by a Riemann Sum using the value at the midpoint of each of three intervals of width $2$. What is the value of the approximation?</p>

<table style="width:100%">
  <tr>
    <td style="font-size:13pt"> $x$ </td>
    <td style="font-size:13pt"> 0 </td>
    <td style="font-size:13pt"> 1 </td>
    <td style="font-size:13pt"> 2 </td>
    <td style="font-size:13pt"> 3 </td>
    <td style="font-size:13pt"> 4 </td>
    <td style="font-size:13pt"> 5 </td>
    <td style="font-size:13pt"> 6 </td>
  </tr>
  <tr>
    <td style="font-size:13pt"> $f(x)$ </td>
    <td style="font-size:13pt"> 0 </td>
    <td style="font-size:13pt"> 0.25 </td>
    <td style="font-size:13pt"> 0.48 </td>
    <td style="font-size:13pt"> 0.68 </td>
    <td style="font-size:13pt"> 0.84 </td>
    <td style="font-size:13pt"> 0.95 </td>
    <td style="font-size:13pt"> 1 </td>
  </tr>
</table>
</div>

Using the midpoint Riemann sum formula from our [previous work](/calculus/introduction-to-integration/index.html#midpoint-riemann-sum), we can approximate the integral expression as

$$\int_0^6 f(x)dx\approx (2-0)f\left(\frac{0+2}{2}\right)+(4-2)f\left(\frac{2+4}{2}\right)+(6-4)f\left(\frac{4+6}{2}\right)$$

Simplifying this expression and using the data given in the table gives us

$$\int_0^6 f(x)dx \approx 2f(1)+2f(3)+2f(5)=2(0.25+0.68+0.95)=3.76$$

Therefore, our solution is

<div class="notice--success">
<p style="font-size:13pt">$$\int_0^6 f(x)dx \approx 3.76\text{ sq. units}$$</p>
</div>

> ### Problem 3

<div class="notice--info">
<p style="font-size:13pt">The table below gives values of a decreasing, differentiable function $f(x)$. Approximate the value of $\int_0^8 f(x)dx$ using a trapezoidal sum with four subintervals indicated by the data in the table.</p>

<table style="width:100%">
  <tr>
    <td style="font-size:13pt"> $x$ </td>
    <td style="font-size:13pt"> 0 </td>
    <td style="font-size:13pt"> 1 </td>
    <td style="font-size:13pt"> 5 </td>
    <td style="font-size:13pt"> 6 </td>
    <td style="font-size:13pt"> 8 </td>
  </tr>
  <tr>
    <td style="font-size:13pt"> $f(x)$ </td>
    <td style="font-size:13pt"> 20 </td>
    <td style="font-size:13pt"> 16 </td>
    <td style="font-size:13pt"> 8 </td>
    <td style="font-size:13pt"> 6 </td>
    <td style="font-size:13pt"> 2 </td>
  </tr>
</table>
</div>

Using the trapezoidal Riemann sum formula from our [previous work](/calculus/introduction-to-integration/index.html#trapezoidal-riemann-sum), we can approximate the integral expression as

$$\int_0^8 f(x)dx\approx \frac{1-0}{2}[f(0)+f(1)]+\frac{5-1}{2}[f(1)+f(5)]+\frac{6-5}{2}[f(5)+f(6)]+\frac{8-6}{2}[f(6)+f(8)]$$

Simplifying this expression and using the data given in the table gives us

$$\int_0^8 f(x)dx\approx \frac{20+16}{2}+2(16+8)+\frac{8+6}{2}+(6+2)$$

Simplifying our approximation gives

<div class="notice--success">
<p style="font-size:13pt">$$\int_0^8 f(x)dx \approx 81\text{ sq. units}$$</p>
</div>

> ### Problem 4

<div class="notice--info">
<p style="font-size:13pt">If $\int_2^8 f(x) dx = -10$ and $\int_2^4 f(x)dx = 6$, what is the value of $\int_8^4 f(x)dx$?</p>
</div>

This problem is simply testing your understanding of [integral properties](/calculus/evaluating-integrals/index.html#properties-of-integrals-both-indefinite-and-definite). Referencing property 2 on the linked page, we can conclude that

$$\int_2^8 f(x) dx=\int_2^4 f(x) dx+\int_4^8 f(x) dx$$

Plugging in the given values gives

$$-10=6+\int_4^8 f(x) dx \longrightarrow \int_4^8 f(x) dx = -16$$

Finally, referencing property 1 on the linked page gives

<div class="notice--success">
<p style="font-size:13pt">$$\int_8^4 f(x) dx=-\int_4^8 f(x) dx = 16$$</p>
</div>

> ### Problem 5

<div class="notice--info">
<p style="font-size:13pt">Evaluate the indefinite integral $$\int (x+3)\sqrt{x-1}dx$$</p>
</div>

This is a problem that requires you to use the $u$-substitution integration technique. If you are unfamiliar with $u$-substitution, I encourage you to first review the relevant material [here](/calculus/u-substitution/index.html).

Set $u=x-1$. If we add $4$ to both sides of this equation, then we find that $x+3=u+4$. We also know from this definition of $u$ that $\frac{du}{dx}=1$, meaning that $du=dx$. Using all of this information together, we can rewrite the integral as

$$\int (x+3)\sqrt{x-1}dx=\int (u+4)\sqrt{u}du=\int u^{3/2} du+4\int u^{1/2} du$$

We have used the linearity property of integration to separate this integral into two simply integrals. Using the [power rule](/calculus/evaluating-integrals/index.html#power-rule-for-integration) for integration, we find

$$\int (x+3)\sqrt{x-1}dx=\frac{2}{5}u^{5/2}+\frac{8}{3}u^{3/2}+C$$

for some constant $C$. Plugging the definition of $u=x-1$ back into the right hand side gives us our solution.

<div class="notice--success">
<p style="font-size:13pt">$$\int (x+3)\sqrt{x-1}dx=\frac{2}{5}(x-1)^{5/2}+\frac{8}{3}(x-1)^{3/2}+C$$</p>
</div>

> ### Problem 6

<div class="notice--info">
<p style="font-size:13pt">Evaluate the indefinite integral $$\int \frac{dx}{e^x+1}$$</p>
</div>

This is a problem that requires you to use the $u$-substitution integration technique. If you are unfamiliar with $u$-substitution, I encourage you to first review the relevant material [here](/calculus/u-substitution/index.html).

Perhaps our first guess might be to define $u=e^x+1$ or $u=e^x$. However, in both of these cases, $\frac{du}{dx}=e^x$, and so $du=e^x dx$. We are missing the $e^x$ factor in the numerator, and so it ostensibly appears as if this integral is not able to be solved.

The trick is to rewrite this integral into a form that we can evaluate. Although it might not be apparent at first, let's multiply both the numerator and denominator by $e^{-x}$. Because this is essentially equivalent to multiplying the fraction by $1$, we are not changing the value of the integral in this process.

$$\int \frac{dx}{e^x+1}=\int \frac{dx}{e^x+1}\frac{e^{-x}}{e^{-x}}=\int \frac{e^{-x}dx}{1+e^{-x}}$$

At this point we are able to set $u=1+e^{-x}$, therefore giving us $\frac{du}{dx}=-e^{-x}$, or $-du=e^{-x}dx$. Substituting all of these into the integral above gives

$$\int \frac{dx}{e^x+1}=-\int \frac{du}{u}$$

We have not discussed how to evaluate this integral yet; the [power rule](/calculus/evaluating-integrals/index.html#power-rule-for-integration) for integration is not applicable here because the power rule doesn't work when $n=-1$. so I am just going to tell you now that $\int\frac{du}{u}=\ln\vert u\vert+C$. We will derive this result later, but as a high-level overview, this is related to the fact that $\frac{d}{dx}[\ln x]=\frac{1}{x}$ from our work on derivatives. Therefore, using this result, we have

$$\int \frac{dx}{e^x+1}=-\ln \vert u\vert +C=-\ln\vert 1+e^{-x}\vert + C$$

after substituting our expression for $u$ in terms of $x$ from above. Now, we note that $e^{-x}>0$ for all $x$, meaning that $1+e^{-x}>0$ always, and so we can get rid of the absolute value signs to give

<div class="notice--success">
<p style="font-size:13pt">$$\int \frac{dx}{e^x+1}=-\ln\left( 1+e^{-x}\right) + C$$</p>
</div>

There is also another way of approaching this problem as well that is worth discussing. Instead of multiplying both the numerator and denominator by $e^{-x}$, we could also make the (rather clever) observation that $1=(e^x+1)-e^x$. Therefore, we can instead rewrite the initial integral as

$$\int \frac{dx}{e^x+1}=\int \frac{(e^x+1)-e^x}{e^x+1}dx=\int \frac{e^x+1}{e^x+1}dx-\frac{e^x}{e^x+1}dx$$

Further simplifying, we have

$$\int \frac{dx}{e^x+1}=\int dx-\int \frac{e^x dx}{e^x+1}$$

To simplify the second integral, we can now use $u$-substitution, defining $u=e^x+1$, and hence $du=e^xdx$. Therefore, we have

$$\int \frac{dx}{e^x+1}=\int dx-\int \frac{du}{u}=x-\ln \vert u\vert+C$$

Substituting back our definition of $u$ gives

$$\int \frac{dx}{e^x+1}=x-\ln(1+e^x)+C$$

<div class="notice--warning">
<p style="font-size:13pt"><strong>Problem:</strong> Show that this result is equal to our initial expression we found for the integral using the first method in this problem.</p>
</div>


> ### Problem 7

<div class="notice--info">
<p style="font-size:13pt">Evaluate the indefinite integral $$\int \frac{\ln(\ln x)}{x\ln x} dx$$</p>
</div>

This is a problem that requires you to use the $u$-substitution integration technique. If you are unfamiliar with $u$-substitution, I encourage you to first review the relevant material [here](/calculus/u-substitution/index.html).

Set $u=\ln x$, such that $\frac{du}{dx}=\frac{1}{x}$ and therefore $du=\frac{1}{x}dx$. Plugging these defined variables into the integral gives

$$\int \frac{\ln(\ln x)}{x\ln x} dx=\int \frac{\ln u}{u} du$$

At this step, we can actually do another substitution by defining $w=\ln u$, such that $\frac{dw}{du}=\frac{1}{u}du$, and hence $dw=\frac{1}{u}du$. Therefore, the indefinite integral can be further rewritten as

$$\int \frac{\ln(\ln x)}{x\ln x} dx=\int \frac{\ln u}{u} du=\int wdw$$

Using the power rule for integration, 

$$\int \frac{\ln(\ln x)}{x\ln x} dx=\frac{1}{2}w^2+C$$

Now, we have to "undo" all of our substitutions. Since $w=\ln u$, we have

$$\int \frac{\ln(\ln x)}{x\ln x} dx=\frac{1}{2}\ln^2 (u)+C$$

Since $u=\ln x$, we have

<div class="notice--success">
<p style="font-size:13pt">$$\int \frac{\ln(\ln x)}{x\ln x} dx=\frac{1}{2}\ln^2 (\ln x)+C$$</p>
</div>

This problem illustrates a variation on the standard $u$-substitution technique. You might have to make _multiple_ substitutions in order to get the integral into an evaluable form. In this particular case, we had to define two different substitutions: $u=\ln x$ and then $w= \ln u$. In general, for most problems on the AP Calculus AB and BC tests, you will not have to make more than two substitutions for a single problem.

> ### Problem 8

<div class="notice--info">
<em style="font-size:13pt">This problem is adapted from the 2016 AP Calculus AB Exam.</em>
</div>

![int-practice-1](/assets/images/int-practice-1.png){:height="85%" width="85%"}

<div class="notice--info">
  <p style="font-size:14pt">The figure above shows the graph of the piecewise-linear function $f$. For $-4\leq x\leq 12$, the function $g$ is defined by $g(x)=\int_2^x f(t)dt$.</p>
  <p style="font-size:13pt">  1. Does $g$ have a relative minimum, a relative maximum, or neither at $x=10$? Justify your answer.</p>
  <p style="font-size:13pt">  2. Does the graph of $g$ have a point of inflection at $x=4$? Justify your answer.</p>
  <p style="font-size:13pt">  3. Find the absolute minimum value and the absolute maximum value of $g$ on the interval $-4\leq x\leq 12$. Justify your answers.</p>
  <p style="font-size:13pt">  4. For $-4\leq x\leq 12$, find all intervals for which $g(x)\leq 0$.</p>
</div>

<div class="notice--success">
<p style="font-size:13pt">The official AP scoring rubric for this problem can be found on page 4 of <a href="https://secure-media.collegeboard.org/digitalServices/pdf/ap/ap16_calculus_ab_sg.pdf">this document</a>. This was <b>Question 3</b> of the 2016 AP Calculus AB FRQs.</p>
</div>
