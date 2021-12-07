---
permalink: /java/binary-search-hint-p2/
author_profile: false
title: "Floored Square Roots Using Binary Search"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

<div class="notice--info">
<p style="font-size: 13pt">Using a binary search algorithm, find $\lfloor \sqrt{n} \rfloor$ for nonnegative integers $n$. The floor function $\lfloor\text{ } \rfloor$ essentially tells you to always round down if $\sqrt{n}$ is a decimal number. You may <em>not</em> use the <code class="language-plaintext highlighter-rouge">java.lang.Math.sqrt()</code> function.</p>
</div>

At first glance, it may not be apparent how to use binary search to approach this problem. After all, there isn't any list or array present in this problem!

The trick is to first notice that the square root of any nonnegative number $n$ must be somewhere between $0$ and $n$. Therefore, we have an implicit list of potential candidates for the square root of $n$ that runs from $0$ to $n$. For example, let's take the case where $n=14$. This is our list of potential answer for $\lfloor \sqrt{14}\rfloor$:

![binary-search-5](/assets/images/binary-search-5.png){:height="100%" width="100%"}

For the binary search algorithm, we can find the midpoint of this search interval (which is $7$ in this case), and then check whether the square of the midpoint is greater than, less than, or equal to $n=14$. In each of these cases, we'll take the following next steps:

  1. **Midpoint Squared is Greater than $n$**: This means that the midpoint is greater than $\sqrt{n}$, and so the midpoint is an overestimate for $\lfloor \sqrt{n}\rfloor$. Therefore, we need to restrict our search in the first half of the interval, between the start of the original array and the midpoint.
  2. **Midpoint Squared is Less than $n$**: This means that the midpoint is less than $\sqrt{n}$, and so the midpoint is an underestimate for $\lfloor \sqrt{n}\rfloor$. Therefore, we need to restrict our search in the second half of the interval, between the midpoint and the end of the original array.
  3. **Midpoint Square is Equal to $n$**: We've stumbled across the very lucky scenario where we have determined the square root of $n$, which is simply the midpoint. So, just return the midpoint.

Our algorithm will involve iteratively using these steps to use binary search to look for the integer floor of the square root. Here is a schematic of what this looks like, again for the case of $n=14$:

![binary-search-6](/assets/images/binary-search-6.png){:height="100%" width="100%"}

Here, the <span style="color:green">green</span> square represents the value that we would return at each step of the iteration. There is a very small subtlety that you will have to account for in each iteration. Namely, notice specifically the particular instances when we actually update the green return square. Do we update it when we look in the first half, look in the second half, or both? (This subtlety is related to the fact that we want to find the _floor_ of the square root of $n$, as opposed to the _ceiling_ of the square root of $n$.)

If you're unfamiliar with floor and ceiling functions, I recommend first glancing over [this link](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions) from Wikipedia. 

Now that we have a better idea of what our algorithm should look like, let's go back to attempting the original problem.

[Click Here to Go Back](/java/binary-search/index.html#problem-2){: .btn .btn--success}
