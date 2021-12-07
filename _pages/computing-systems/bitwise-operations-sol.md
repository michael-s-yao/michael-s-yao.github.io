---
permalink: /computing-systems/bitwise-operations-sol/
author_profile: false
title: "Bitwise Operations (Solutions)"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

_[Back to Bitwise Operations](/computing-systems/bitwise-operations/index.html)_

> ## Problem 1

<div class="notice--info">
<p style="font-size:13pt">Show that <code class="language-plaintext highlighter-rouge">a | b</code>, <code class="language-plaintext highlighter-rouge">a ^ b</code>, <code class="language-plaintext highlighter-rouge">~a</code>, and <code class="language-plaintext highlighter-rouge">~b</code> indeed give the expected results from the code output through performing a similar analysis as we did for analyzing <code class="language-plaintext highlighter-rouge">a & b</code> from above.</p>
</div>

Recall that in this example, we defined ```int8_t a = 0b00001110``` and ```int8_t b = 0b00100101```. We can first calculate the desired expressions using strictly the bitwise operations:

![bitwise-3](/assets/images/computer-systems/bitwise-3.png){:height="90%" width="90%" .align-center}

All that is left is to use the two's complement convention to rewrite each of these binary numbers in base-10:

<p style="font-size:12pt">$$\texttt{a | b}=-2^7(\texttt{0})+2^6(\texttt{0})+2^5(\texttt{1})+2^4(\texttt{0})+2^3(\texttt{1})+2^2(\texttt{1})+2^1(\texttt{1})+2^0(\texttt{1})=47$$</p>

<p style="font-size:12pt">$$\texttt{a ^ b}=-2^7(\texttt{0})+2^6(\texttt{0})+2^5(\texttt{1})+2^4(\texttt{0})+2^3(\texttt{1})+2^2(\texttt{0})+2^1(\texttt{1})+2^0(\texttt{1})=43$$</p>

<p style="font-size:12pt">$$\texttt{~a}=-2^7(\texttt{1})+2^6(\texttt{1})+2^5(\texttt{1})+2^4(\texttt{1})+2^3(\texttt{0})+2^2(\texttt{0})+2^1(\texttt{0})+2^0(\texttt{1})=-15$$</p>

<p style="font-size:12pt">$$\texttt{~a}=-2^7(\texttt{1})+2^6(\texttt{1})+2^5(\texttt{0})+2^4(\texttt{1})+2^3(\texttt{1})+2^2(\texttt{0})+2^1(\texttt{1})+2^0(\texttt{0})=-38$$</p>

If we compare these results with the results from the relevant code sample (shown below again for convenience), we can see that we achieve all of the expected results.

<iframe height="600px" width="100%" src="https://repl.it/@myaomeow/BitwiseOperationsExample?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

> ## Problem 2

<div class="notice--info">
<p style="font-size:13pt">Using a similar analysis and diagram as above, explain the result of the following code:</p>

<div class="language-c highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kt" style="font-size:12pt">int8_t</span> <span class="n" style="font-size:12pt">a</span> <span class="o" style="font-size:12pt">=</span> <span class="mi" style="font-size:12pt">0b10001110</span><span class="p" style="font-size:12pt">;</span>
<span class="kt" style="font-size:12pt">int8_t</span> <span class="n" style="font-size:12pt">b</span> <span class="o" style="font-size:12pt">=</span> <span class="n" style="font-size:12pt">a</span> <span class="o" style="font-size:12pt">&lt;&lt;</span> <span class="mi" style="font-size:12pt">1</span><span class="p" style="font-size:12pt">;</span>

<span class="n" style="font-size:12pt">printf</span><span class="p" style="font-size:12pt">(</span><span class="s" style="font-size:12pt">"a: %d</span><span class="se" style="font-size:12pt">\n</span><span class="s" style="font-size:12pt">"</span><span class="p" style="font-size:12pt">,</span> <span class="n" style="font-size:12pt">a</span><span class="p" style="font-size:12pt">);</span><span class="c1" style="font-size:12pt"> // Prints a: -114</span>
<span class="n" style="font-size:12pt">printf</span><span class="p" style="font-size:12pt">(</span><span class="s" style="font-size:12pt">"b: %d</span><span class="se" style="font-size:12pt">\n</span><span class="s" style="font-size:12pt">"</span><span class="p" style="font-size:12pt">,</span> <span class="n" style="font-size:12pt">b</span><span class="p" style="font-size:12pt">);</span><span class="c1" style="font-size:12pt"> // Prints b: 28</span>
</code></pre></div></div>
</div>

Note that $$2\cdot\texttt{a}=2(\texttt{-114})=\texttt{-228}$$, which is less than the minimum bound for ```int8_t``` signed integers (```-128```). Let's graph this on the number line, producing a similar diagram as in the example preceding this problem. 

![bitwise-9](/assets/images/computer-systems/bitwise-9.png){:height="90%" width="90%" .align-center}

The overflow distance $x_{ov}$ from the right most upper bound is

$$x_{ov}=-129-(-228)=99$$

Therefore, we can conclude that the value of $\texttt{b}$ is

$$\texttt{b}=127-x_{ov}=127-99=28$$

This agrees with the expected output. Let's also confirm that this agrees with our understanding of the left arithmetic shift operation:

$$\texttt{b}=\texttt{a<<1}=\texttt{0b00011100}$$

<p style="font-size:12pt">$$\texttt{b}=-2^7(\texttt{0})+2^6(\texttt{0})+2^5(\texttt{0})+2^4(\texttt{0})+2^3(\texttt{1})+2^2(\texttt{1})+2^1(\texttt{1})+2^0(\texttt{0})=28$$</p>

as expected.

> ## Problem 3

<div class="notice--info">
<p style="font-size:13pt">The following code in <code class="language-plaintext highlighter-rouge">main(void)</code> swaps the values of two <code class="language-plaintext highlighter-rouge">int</code> variables <code class="language-plaintext highlighter-rouge">n1</code> and <code class="language-plaintext highlighter-rouge">n2</code> using <em>only</em> bitwise operations. Explain how this function works.</p>
</div>

<iframe height="700px" width="100%" src="https://repl.it/@myaomeow/SwapNumbersBitwise?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<div class="notice--success">
<p style="font-size:13pt">This problem was adapted from GeeksforGeeks. They have a good explanation of the solution <a href="https://www.geeksforgeeks.org/swap-two-numbers-without-using-temporary-variable/">here</a> (scroll down to method 2). The benefit of this method is that (1) it doesn't run the risk of any overflow, and (2) it doesn't require the use of a temporary third variable.</p>
</div>

> ## Problem 4

<div class="notice--info">
<p style="font-size:13pt">The following method <code class="language-plaintext highlighter-rouge">add(int x, int y)</code> adds two <code class="language-plaintext highlighter-rouge">int</code>s <code class="language-plaintext highlighter-rouge">x</code> and <code class="language-plaintext highlighter-rouge">y</code> using <em>only</em> bitwise operations. Explain how this function works.</p>
</div>

<iframe height="700px" width="100%" src="https://repl.it/@myaomeow/AddNumbersBitwise?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<div class="notice--success">
<p style="font-size:13pt">This problem was adapted from GeeksforGeeks. They have a good explanation of the solution <a href="https://www.geeksforgeeks.org/add-two-numbers-without-using-arithmetic-operators/">here</a>.</p>
</div>
