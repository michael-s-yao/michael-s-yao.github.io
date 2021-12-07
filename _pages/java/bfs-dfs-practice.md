---
permalink: /java/bfs-dfs-practice/
author_profile: false
title: "BFS and DFS Practice Problems"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
  <style>
    .hide {
      display: none;
      visibility: hidden;
	  opacity: 0;
	  transition: visibility 0s, opacity 0.5s linear;
    }
        
    .solution:hover + .hide {
      display: block;
      visibility: visible;
  	  opacity: 1;
    }

    .hide:hover {
      display: block;
      visibility: visible;
      opacity: 1;
    }
  </style>
</head>

[Last time](/java/bfs-dfs/index.html), we introduced the two major tree searching algorithms, which are **breadth first search (BFS)** and **depth first search (DFS)**. Today, we'll be going over a couple of practice problems to help us solidfy our understanding of these two important algorithms. We'll go through these two exercises step by step.

> ## The Chess Knight Problem

<div class="notice--primary">
<p style="font-size:13pt"><b><em>Given a standard 8x8 chess board, find the minimum number of moves that a knight must take in order to reach a particular destination square from a given source square on the chess board.</em></b></p>
<p style="font-size:13pt"><em>This problem is adapted from <a href="https://www.techiedelight.com/chess-knight-problem-find-shortest-path-source-destination/">Techie Delight</a>.</em></p>
</div>

For this problem, please navigate to the ```repl.it``` repo linked [here](https://repl.it/@myaomeow/ChessKnightProblem#Main.java) and fork the ```repl```.

In the game of chess, the knight is a chess piece that has strict requirements for how it can move. Namely, it must move either (1) two square vertically and one square horizontally, or (2) two squares horizontally and one square vertically. You can read more about the knight on [Wikipedia](https://en.wikipedia.org/wiki/Knight_(chess)). Here is also a helpful diagram from [Techie Delight](https://www.techiedelight.com/chess-knight-problem-find-shortest-path-source-destination/) that illustrates the valid moves for a knight with red X's.

![chess-knight-1](/assets/images/chess-knight-1.png){:height="50%" width="50%" .align-center}

The word '*minimum*' tells us that we should use the BFS algorithm for this problem. To sketch out our approach, we can represent each of the 64 squares of the chess board as vertices in a graph, with edges connecting squares that a knight can directly reach in exactly one move. We'll start at the source square, and then use BFS to explore the board until we arrive at the destination.

The first thing that we need to do is write a Java class that will represent each of the vertices in our graph. In our implementation, these vertices will be ```Knight``` objects, which you will implement in the ```Knight.java``` source code linked [above](https://repl.it/@myaomeow/ChessKnightProblem#Main.java). Our ```Knight``` objects have to keep track of the ```x``` position on the chess board that this node represents, the ```y``` position on the chess board, and the number of steps that the knight has taken so far. Note that ```x``` and ```y``` must both be between ```0``` and ```7``` inclusive because a standard chess board has 8 by 8 squares.

<div class="notice--info">
  <p style="font-size:13pt;"><b>Problem 1:</b> Read through the starter code to make sure that you understand its structure. Implement the constructor, <code class="language-plaintext highlighter-rouge">getX()</code>, <code class="language-plaintext highlighter-rouge">getY()</code>, and <code class="language-plaintext highlighter-rouge">getStepsTaken()</code> functions in <code class="language-plaintext highlighter-rouge">Knight.java</code>. These should be fairly straightforward.</p>
  <div class="solution notice--success" style="margin:auto;text-align:center;">
    <p style="font-size:13pt;"><em>Hover here to see the solution.</em></p>
  </div>
  <div class="hide" style="font-size:13pt;"><div class="language-java highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kd">public</span> <span class="nf">Knight</span><span class="o">(</span><span class="kt">int</span> <span class="n">x</span><span class="o">,</span> <span class="kt">int</span> <span class="n">y</span><span class="o">,</span> <span class="kt">int</span> <span class="n">stepsTaken</span><span class="o">)</span> <span class="o">{</span>
    <span class="k">this</span><span class="o">.</span><span class="na">x</span> <span class="o">=</span> <span class="n">x</span><span class="o">;</span>
    <span class="k">this</span><span class="o">.</span><span class="na">y</span> <span class="o">=</span> <span class="n">y</span><span class="o">;</span>
    <span class="k">this</span><span class="o">.</span><span class="na">stepsTaken</span> <span class="o">=</span> <span class="n">stepsTaken</span><span class="o">;</span>
<span class="o">}</span>

<span class="kd">public</span> <span class="kt">int</span> <span class="nf">getX</span><span class="o">()</span> <span class="o">{</span> <span class="k">return</span> <span class="k">this</span><span class="o">.</span><span class="na">x</span><span class="o">;</span> <span class="o">}</span>
<span class="kd">public</span> <span class="kt">int</span> <span class="nf">getY</span><span class="o">()</span> <span class="o">{</span> <span class="k">return</span> <span class="k">this</span><span class="o">.</span><span class="na">y</span><span class="o">;</span> <span class="o">}</span>
<span class="kd">public</span> <span class="kt">int</span> <span class="nf">getStepsTaken</span><span class="o">()</span> <span class="o">{</span> <span class="k">return</span> <span class="k">this</span><span class="o">.</span><span class="na">stepsTaken</span><span class="o">;</span> <span class="o">}</span>
</code></pre></div></div></div>
</div>

There is one more function that we need to implement in ```Knight.java```: the ```move()``` function. This function is important because it will ultimately help us move from one square to another on the chess board. This function takes in a ```Knight k``` and a "*move number*" ```n``` (described below) and generates a new ```Knight``` node object to represent that chess move to the new square. A couple things to keep in mind as you're writing this function:

  1. As we described above, a knight has either different sets of valid "moves" that it can make on the chess board. For this problem, we have represented these space of possible moves with the ```int[]``` arrays ```movesLR``` and ```movesUD```. For a move to be valid for the knight, the new ```Knight``` must have moved ```movesLR[i]``` steps in the left-right direction and ```movesUD[i]``` in the up-down direction, where ```i``` is any number between ```0``` and ```7``` inclusive. We refer to ```i``` as the "*move number*" from above.
  2. The knight cannot be moved to a coordinate that is not on the actual chess board. This means that in order for a move to be considered valid, both the ```x``` and ```y``` coordinates must stay between ```0``` and ```7``` inclusive. If this is not the case, then you can simply return ```null```.
  3. Recall that ```stepsTaken``` keeps track of how many steps the knight has already taken to arrive at this new square from the source square. Therefore, you must make sure to increment the number of steps taken by ```1``` when generating the new ```Knight``` object.

 <div class="notice--info">
  <p style="font-size:13pt;"><b>Problem 2:</b> Implement the <code class="language-plaintext highlighter-rouge">move()</code> function in <code class="language-plaintext highlighter-rouge">Knight.java</code> now.</p>
  <div class="solution notice--success" style="margin:auto;text-align:center;">
    <p style="font-size:13pt;"><em>Hover here to see the solution.</em></p>
  </div>
  <div class="hide" style="font-size:13pt;"><div class="language-java highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kd">public</span> <span class="kd">static</span> <span class="nc">Knight</span> <span class="nf">move</span><span class="o">(</span><span class="nc">Knight</span> <span class="n">k</span><span class="o">,</span> <span class="kt">int</span> <span class="n">n</span><span class="o">)</span> <span class="o">{</span>
    <span class="cm">/* Ensure that a valid move number was given as an argument. */</span>
    <span class="k">if</span> <span class="o">(</span><span class="n">n</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">||</span> <span class="n">n</span> <span class="o">&gt;</span> <span class="mi">7</span><span class="o">)</span> <span class="o">{</span> <span class="k">return</span> <span class="kc">null</span><span class="o">;</span> <span class="o">}</span>
    <span class="kt">int</span> <span class="n">newX</span> <span class="o">=</span> <span class="n">k</span><span class="o">.</span><span class="na">getX</span><span class="o">()</span> <span class="o">+</span> <span class="nc">Knight</span><span class="o">.</span><span class="na">movesLR</span><span class="o">[</span><span class="n">n</span><span class="o">];</span>
    <span class="kt">int</span> <span class="n">newY</span> <span class="o">=</span> <span class="n">k</span><span class="o">.</span><span class="na">getY</span><span class="o">()</span> <span class="o">+</span> <span class="nc">Knight</span><span class="o">.</span><span class="na">movesUD</span><span class="o">[</span><span class="n">n</span><span class="o">];</span>
    <span class="cm">/* Ensure that a valid move was made. */</span>
    <span class="k">if</span> <span class="o">(</span><span class="n">newX</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">||</span> <span class="n">newX</span> <span class="o">&gt;=</span> <span class="no">BOARD_SIZE</span> <span class="o">||</span> <span class="n">newY</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">||</span> <span class="n">newY</span> <span class="o">&gt;=</span> <span class="no">BOARD_SIZE</span><span class="o">)</span> <span class="o">{</span>
      <span class="k">return</span> <span class="kc">null</span><span class="o">;</span> 
    <span class="o">}</span>
    <span class="nc">Knight</span> <span class="n">newKnight</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Knight</span><span class="o">(</span><span class="n">newX</span><span class="o">,</span> <span class="n">newY</span><span class="o">,</span> <span class="n">k</span><span class="o">.</span><span class="na">getStepsTaken</span><span class="o">()</span> <span class="o">+</span> <span class="mi">1</span><span class="o">);</span>
    <span class="k">return</span> <span class="n">newKnight</span><span class="o">;</span>
 <span class="o">}</span>
</code></pre></div></div></div>
</div>

At this poit, we're now finished with our ```Knight.java``` implementation. Let's turn our attention now to ```Main.java```. When implementing BFS, recall that we don't want to visit the same chess square twice. To ensure this, we have a ```HashSet``` of ```Knight``` objects called ```visited```, which will keep track of ```Knight``` objects that we have already visited. We want the ```seen()``` function in ```Main.java``` to return whether or not the argument ```Knight k``` has already been visited before, through making appropriate usage of the ```visited``` ```set```.

<div class="notice--info">
  <p style="font-size:13pt;"><b>Problem 3:</b> Implement the <code class="language-plaintext highlighter-rouge">seen()</code> method in <code class="language-plaintext highlighter-rouge">Main.java</code> now.</p>
  <div class="solution notice--success" style="margin:auto;text-align:center;">
    <p style="font-size:13pt;"><em>Hover here to see the solution.</em></p>
  </div>
  <div class="hide" style="font-size:13pt;"><div class="language-java highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kd">public</span> <span class="kd">static</span> <span class="kt">boolean</span> <span class="nf">seen</span><span class="o">(</span><span class="nc">Knight</span> <span class="n">k</span><span class="o">)</span> <span class="o">{</span>
    <span class="k">for</span> <span class="o">(</span><span class="nc">Knight</span> <span class="n">piece</span> <span class="o">:</span> <span class="n">visited</span><span class="o">)</span> <span class="o">{</span>
        <span class="k">if</span> <span class="o">(</span><span class="n">piece</span><span class="o">.</span><span class="na">getX</span><span class="o">()</span> <span class="o">==</span> <span class="n">k</span><span class="o">.</span><span class="na">getX</span><span class="o">()</span> <span class="o">&amp;&amp;</span> 
            <span class="n">piece</span><span class="o">.</span><span class="na">getY</span><span class="o">()</span> <span class="o">==</span> <span class="n">k</span><span class="o">.</span><span class="na">getY</span><span class="o">())</span> <span class="o">{</span>
            <span class="k">return</span> <span class="kc">true</span><span class="o">;</span>
        <span class="o">}</span>
    <span class="o">}</span>
    <span class="k">return</span> <span class="kc">false</span><span class="o">;</span>
<span class="o">}</span>
</code></pre></div></div></div>
</div>

Now comes the main part of this exercise: implementing the BFS algorithm in the ```minSteps()``` function. This function takes two arguments: ```src``` source square coordinate and ```dst``` destination square coordinate. Both of these cooredinates are ```int[]``` objects in the form ```{ x-coordinate, y-coordinate }```. This function should return the minimum number of moves the knight needs to take to get from ```src``` to ```dst```. If it isn't possible for the knight to get to ```dst``` using only valid moves, then you should return ```-1```.

<div class="notice--info">
  <p style="font-size:13pt;"><b>Problem 4:</b> Implement the <code class="language-plaintext highlighter-rouge">minSteps()</code> method in <code class="language-plaintext highlighter-rouge">Main.java</code> now.</p>
  <div class="solution notice--success" style="margin:auto;text-align:center;">
    <p style="font-size:13pt;"><em>Hover here to see the solution.</em></p>
  </div>
  <div class="hide" style="font-size:13pt;"><div class="language-java highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kd">public</span> <span class="kd">static</span> <span class="kt">int</span> <span class="nf">minSteps</span><span class="o">(</span><span class="kt">int</span><span class="o">[]</span> <span class="n">src</span><span class="o">,</span> <span class="kt">int</span><span class="o">[]</span> <span class="n">dst</span><span class="o">)</span> <span class="o">{</span>
    <span class="c1">// Queue to keep track of which squares to go to next.</span>
    <span class="nc">Queue</span><span class="o">&lt;</span><span class="nc">Knight</span><span class="o">&gt;</span> <span class="n">q</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">ArrayDeque</span><span class="o">&lt;&gt;();</span>
    <span class="c1">// Generate a node using the src source coordinates, and queue node.</span>
    <span class="nc">Knight</span> <span class="n">srcPiece</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Knight</span><span class="o">(</span><span class="n">src</span><span class="o">[</span><span class="mi">0</span><span class="o">],</span> <span class="n">src</span><span class="o">[</span><span class="mi">1</span><span class="o">],</span> <span class="mi">0</span><span class="o">);</span>
    <span class="n">q</span><span class="o">.</span><span class="na">add</span><span class="o">(</span><span class="n">srcPiece</span><span class="o">);</span>
    <span class="k">while</span><span class="o">(!</span><span class="n">q</span><span class="o">.</span><span class="na">isEmpty</span><span class="o">())</span> <span class="o">{</span>
        <span class="nc">Knight</span> <span class="n">piece</span> <span class="o">=</span> <span class="n">q</span><span class="o">.</span><span class="na">poll</span><span class="o">();</span>
        <span class="c1">// Handle the case of when we reach the destination dst.</span>
        <span class="k">if</span> <span class="o">(</span><span class="n">piece</span><span class="o">.</span><span class="na">getX</span><span class="o">()</span> <span class="o">==</span> <span class="n">dst</span><span class="o">[</span><span class="mi">0</span><span class="o">]</span> <span class="o">&amp;&amp;</span> <span class="n">piece</span><span class="o">.</span><span class="na">getY</span><span class="o">()</span> <span class="o">==</span> <span class="n">dst</span><span class="o">[</span><span class="mi">1</span><span class="o">])</span> <span class="o">{</span>
            <span class="k">return</span> <span class="n">piece</span><span class="o">.</span><span class="na">getStepsTaken</span><span class="o">();</span>
        <span class="o">}</span>
        <span class="c1">// Add this node to our set of visited nodes.</span>
        <span class="n">visited</span><span class="o">.</span><span class="na">add</span><span class="o">(</span><span class="n">piece</span><span class="o">);</span>
        <span class="c1">// Make all possible valid moves and add them to the queue (if</span>
        <span class="c1">// they haven't been visited before).</span>
        <span class="k">for</span> <span class="o">(</span><span class="kt">int</span> <span class="n">i</span> <span class="o">=</span> <span class="mi">0</span><span class="o">;</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="mi">8</span><span class="o">;</span> <span class="n">i</span><span class="o">++)</span> <span class="o">{</span>
            <span class="nc">Knight</span> <span class="n">newPiece</span> <span class="o">=</span> <span class="nc">Knight</span><span class="o">.</span><span class="na">move</span><span class="o">(</span><span class="n">piece</span><span class="o">,</span> <span class="n">i</span><span class="o">);</span>
            <span class="k">if</span> <span class="o">(</span><span class="n">newPiece</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="n">visited</span><span class="o">.</span><span class="na">contains</span><span class="o">(</span><span class="n">newPiece</span><span class="o">))</span> <span class="o">{</span> 
                <span class="n">q</span><span class="o">.</span><span class="na">add</span><span class="o">(</span><span class="n">newPiece</span><span class="o">);</span> 
            <span class="o">}</span>
        <span class="o">}</span>
    <span class="o">}</span>
    <span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="o">;</span>
 <span class="o">}</span>
</code></pre></div></div></div>
</div>

You have now implemented BFS to solve this problem! Try running your code now to make sure that it works. If the program works as expected, you should get the following output:

```
It takes a minimum of 6 moves for the knight to get from (0, 7) to (7, 0).
```

This is just one test: feel free to write your own if you'd like! After you get this working, feel free to try out the extension/challenge problems starting here. ***The first thing that you should do is change the*** ```SHORT_TEST``` ```boolean``` ***in the*** ```main()``` ***function from*** ```true``` ***to*** ```false```***.*** This will ensure that the driver program doesn't just run the simple program tests, but also the extended program tests as well in the rest of the ```main()``` function. 

Last time, we discussed a couple of the practical differences between DFS and BFS algorithms. Namely, while BFS always gives us the shortest, optimal solution, DFS typically gives us a faster solution that requires less time to compute. Let's try to explore this and see if this is the case here. Note that the DFS algorithm will only give us *one* possible route for the knight to get from ```src``` to ```dst```, not necessarily the ```shortest``` possible route.

The first thing for us to do is to actually implement the DFS algorithm:

<div class="notice--info">
  <p style="font-size:13pt;"><b>Challenge 1:</b> Implement the <code class="language-plaintext highlighter-rouge">findPath()</code> method in <code class="language-plaintext highlighter-rouge">Main.java</code> now. This should be very similar to the <code class="language-plaintext highlighter-rouge">minSteps()</code> method that you implemented above, with the exception that this new function should implement the DFS altorithm as opposed to BFS.</p>
  <div class="solution notice--success" style="margin:auto;text-align:center;">
    <p style="font-size:13pt;"><em>Hover here to see the solution.</em></p>
  </div>
  <div class="hide" style="font-size:13pt;"><div class="language-java highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kd">public</span> <span class="kd">static</span> <span class="kt">int</span> <span class="nf">findPath</span><span class="o">(</span><span class="kt">int</span><span class="o">[]</span> <span class="n">src</span><span class="o">,</span> <span class="kt">int</span><span class="o">[]</span> <span class="n">dst</span><span class="o">)</span> <span class="o">{</span>
    <span class="c1">// Stack to keep track of which squares to go to next.</span>
    <span class="nc">Stack</span><span class="o">&lt;</span><span class="nc">Knight</span><span class="o">&gt;</span> <span class="n">s</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Stack</span><span class="o">&lt;&gt;();</span>
    <span class="c1">// Generate a node using the src source coordinates, and push node.</span>
    <span class="nc">Knight</span> <span class="n">srcPiece</span> <span class="o">=</span> <span class="k">new</span> <span class="nc">Knight</span><span class="o">(</span><span class="n">src</span><span class="o">[</span><span class="mi">0</span><span class="o">],</span> <span class="n">src</span><span class="o">[</span><span class="mi">1</span><span class="o">],</span> <span class="mi">0</span><span class="o">);</span>
    <span class="n">s</span><span class="o">.</span><span class="na">push</span><span class="o">(</span><span class="n">srcPiece</span><span class="o">);</span>
    <span class="k">while</span><span class="o">(!</span><span class="n">s</span><span class="o">.</span><span class="na">isEmpty</span><span class="o">())</span> <span class="o">{</span>
        <span class="nc">Knight</span> <span class="n">piece</span> <span class="o">=</span> <span class="n">s</span><span class="o">.</span><span class="na">pop</span><span class="o">();</span>
        <span class="c1">// Handle the case of when we reach the destination dst.</span>
        <span class="k">if</span> <span class="o">(</span><span class="n">piece</span><span class="o">.</span><span class="na">getX</span><span class="o">()</span> <span class="o">==</span> <span class="n">dst</span><span class="o">[</span><span class="mi">0</span><span class="o">]</span> <span class="o">&amp;&amp;</span> <span class="n">piece</span><span class="o">.</span><span class="na">getY</span><span class="o">()</span> <span class="o">==</span> <span class="n">dst</span><span class="o">[</span><span class="mi">1</span><span class="o">])</span> <span class="o">{</span>
            <span class="k">return</span> <span class="n">piece</span><span class="o">.</span><span class="na">getStepsTaken</span><span class="o">();</span>
        <span class="o">}</span>
        <span class="c1">// Add this node to our set of visited nodes.</span>
        <span class="n">visited</span><span class="o">.</span><span class="na">add</span><span class="o">(</span><span class="n">piece</span><span class="o">);</span>
        <span class="c1">// Make all possible valid moves and push them onto the stack (if</span>
        <span class="c1">// they haven't been visited before).</span>
        <span class="k">for</span> <span class="o">(</span><span class="kt">int</span> <span class="n">i</span> <span class="o">=</span> <span class="mi">0</span><span class="o">;</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="mi">8</span><span class="o">;</span> <span class="n">i</span><span class="o">++)</span> <span class="o">{</span>
            <span class="nc">Knight</span> <span class="n">newPiece</span> <span class="o">=</span> <span class="nc">Knight</span><span class="o">.</span><span class="na">move</span><span class="o">(</span><span class="n">piece</span><span class="o">,</span> <span class="n">i</span><span class="o">);</span>
            <span class="k">if</span> <span class="o">(</span><span class="n">newPiece</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="n">seen</span><span class="o">(</span><span class="n">newPiece</span><span class="o">))</span> <span class="o">{</span> 
                <span class="n">s</span><span class="o">.</span><span class="na">push</span><span class="o">(</span><span class="n">newPiece</span><span class="o">);</span> 
            <span class="o">}</span>
        <span class="o">}</span>
    <span class="o">}</span>
    <span class="k">return</span> <span class="o">-</span><span class="mi">1</span><span class="o">;</span>
<span class="o">}</span>
</code></pre></div></div></div>
</div>

After you complete this implementation, try running the driver code once more (again, ensure that ```SHORT_TEST``` is set to ```false``` in the ```main()``` function). Based on your results, answer the following questions:

<div class="notice--info">
  <p style="font-size:13pt;"><b>Challenge 2:</b> Answer the following three questions.</p>
  <ol>
  	<li style="font-size:13pt">Which algorithm - BFS or DFS - gives a lower number of average knight moves made given randomly chosen sources and destinations? Does your answer make sense with your understanding of each of these two algorithms and what they accomplish?</li>
  	<li style="font-size:13pt">Which algorithm - BFS or DFS - is faster?</li>
  	<li style="font-size:13pt">Is your answer to part (2) consistent with what you know about BFS or DFS in general? Why or why not?</li>
  </ol>
  <div class="solution notice--success" style="margin:auto;text-align:center;">
    <p style="font-size:13pt;"><em>Hover here to see the solution.</em></p>
  </div>
  <div class="hide" style="font-size:13pt;"><p style="color:rgb(0, 143, 0);">Based on our solution code averaged over 10000 tests, we determined that the average path length found using DFS is 29 moves for the knight, while the average path length found using BFS is 2 moves. We know that BFS always yields the shortest, optimal solution, so this empirical result makes sense. What may be somewhat interesting is that the BFS algorithm takes less time to run compared to the DFS algorithm on average. For example, in our sample run, the DFS algorithm took about 1000 microseconds, while the BFS algorithm took about 400 microseconds. This may be surprising because theoretically, BFS should take longer to run than DFS. The reason for this descrepancy is that the BFS-derived optimal path is significantly shorter than the DFS-derived path, and so in this particular case, the number of nodes that DFS has to go through on average make the algorithm perform worse than expected compared to BFS.</p></div>
</div>

It might also be useful for us to be able to print out the moves that the knight will take in order to get from the source to the destination. This is a pretty tricky feature to implement and completely optional, so feel free to try it out if you'd like! Otherwise, let's move on to the next problem.

> ## Word Search Solver

<div class="notice--primary">
<p style="font-size:13pt"><b><em>Given a two-dimensional square matrix of characters and a particular word, determine whether the word can be generated by going from character to character within the matrix. No cycles on the path from character to character to generate the word are allowed, and you're free to go up, down, left, right, or diagonal to get to the next character.</em></b></p>
<p style="font-size:13pt"><em>This problem is adapted from <a href="https://www.programcreek.com/2014/06/leetcode-word-search-java/">Program Creek</a>.</em></p>
</div>

Similar to above, navigate to the ```replt.it``` repo linked [here](https://repl.it/@myaomeow/WordSearchSolver#Main.java) and fork the ```repl```.

A word search is a common type of puzzle where we try to look for words in a matrix of characters. For example, consider the following matrix: 

![word-search-dfs-1](/assets/images/word-search-dfs-1.png){: height="20%" width="20%" .align-center}

Following the red sequence of characters spells out the word ```forms```, while following the blue sequence of characters spells out the word ```dean```. There are also other words in this particular matrix, but here are two examples. However, the word ```superstitious``` is definitely not in the matrix.

Similar to the chess knight problem from above, we'l break down this problem into smaller pieces to tackle. The first thing that we need to do is sketch out an approach to this problem. We'll represent the word search matrix as a ```char[][]``` matrix, and keep track of the word we're looking for as the variable ```SEARCH_WORD```. Because we just want to check if the word is contained, and we're not looking for an "optimal" path, this suggests that we should use DFS for this problem.

For the first part of this problem, you will implement a "deep copying" function to make a new copy of an input matrix. It isn't clear yet why we'll need this function, but rest assured we'll use it in the near future.

<div class="notice--info">
  <p style="font-size:13pt;"><b>Problem 5:</b> Read through the starter code to make sure that you understand its structure. Then, implement the function <code class="language-plaintext highlighter-rouge">deepCopy()</code>, which takes in a <code class="language-plaintext highlighter-rouge">boolean[][]</code> matrix and returns another <code class="language-plaintext highlighter-rouge">boolean[][]</code> matrix that has the exact same elements. You can read about what exactly "deep copying" is <a href="https://www.tutorialspoint.com/what-is-deep-copy-explain-with-an-example-in-java">here</a>.</p>
  <div class="solution notice--success" style="margin:auto;text-align:center;">
    <p style="font-size:13pt;"><em>Hover here to see the solution.</em></p>
  </div>
  <div class="hide" style="font-size:13pt;"><div class="language-java highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kd">public</span> <span class="kd">static</span> <span class="kt">boolean</span><span class="o">[][]</span> <span class="nf">deepCopy</span><span class="o">(</span><span class="kt">boolean</span><span class="o">[][]</span> <span class="n">m</span><span class="o">)</span> <span class="o">{</span>
    <span class="c1">// Create a new matrix object.</span>
    <span class="kt">boolean</span><span class="o">[][]</span> <span class="n">newM</span> <span class="o">=</span> <span class="k">new</span> <span class="kt">boolean</span><span class="o">[</span><span class="n">m</span><span class="o">.</span><span class="na">length</span><span class="o">][</span><span class="n">m</span><span class="o">[</span><span class="mi">0</span><span class="o">].</span><span class="na">length</span><span class="o">];</span>
    <span class="c1">// Copy over all of the matrix elements.</span>
    <span class="k">for</span> <span class="o">(</span><span class="kt">int</span> <span class="n">i</span> <span class="o">=</span> <span class="mi">0</span><span class="o">;</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="n">m</span><span class="o">.</span><span class="na">length</span><span class="o">;</span> <span class="n">i</span><span class="o">++)</span> <span class="o">{</span>
        <span class="k">for</span> <span class="o">(</span><span class="kt">int</span> <span class="n">j</span> <span class="o">=</span> <span class="mi">0</span><span class="o">;</span> <span class="n">j</span> <span class="o">&lt;</span> <span class="n">m</span><span class="o">[</span><span class="n">i</span><span class="o">].</span><span class="na">length</span><span class="o">;</span> <span class="n">j</span><span class="o">++)</span> <span class="o">{</span>
            <span class="n">newM</span><span class="o">[</span><span class="n">i</span><span class="o">][</span><span class="n">j</span><span class="o">]</span> <span class="o">=</span> <span class="n">m</span><span class="o">[</span><span class="n">i</span><span class="o">][</span><span class="n">j</span><span class="o">];</span>
        <span class="o">}</span>
    <span class="o">}</span>
    <span class="c1">// Return the new matrix object.</span>
    <span class="k">return</span> <span class="n">newM</span><span class="o">;</span>
<span class="o">}</span>
</code></pre></div></div></div>
</div>

After you've completed this step, it's now time to implement the ***recursive*** DFS search algorithm to look for the word of interest ```SEARCH_WORD``` in the ```char[][]``` matrix. You should complete this in the ```search()``` function in ```Main.java```. But first, a couple of things to keep in mind:

  1. The ```boolean[][]``` input matrix ```visited``` should keep track of whether the particular location in the character matrix has already been visited or not. ```visited``` will change for the different paths that you explore through DFS, and so you will have to make a deep copy of the ```visited``` matrix every time you call the function ```seach()``` recursively (think about why this should be the case). This is where you should be using the ```deepCopy()``` function you wrote in Problem 5 above.
  2. Make sure that as you're searching through the adjacent characters that you don't exceed the bounds of the matrix. All of the characters in the matrix will have row and column indices between ```0``` and ```BOARD_SIZE - 1``` inclusive.
  3. To re-emphasize, we are implementing a *recursive* DFS algorithm. The ```path``` argument keeps track of the current ```String``` that we're "building up" by walking through the matrix, and the ```int```s ```r``` and ```c``` keep track of the current position we're at in the ```char[][]``` matrix.
  4. We stated that there are sets of valid “moves” that we can make going from one character to another in the ```char[][]``` matrix. For this problem, we have represented these space of possible moves with the ```int[]``` arrays ```rowMoves``` and ```colMoves```. For a move to be valid, our row index must have increased by ```rowMoves[i]``` and our column index by ```colMoves[i]```, where ```i``` is any number between ```0``` and ```7``` inclusive.

<div class="notice--info">
  <p style="font-size:13pt;"><b>Problem 6:</b> Implement the DFS search function <code class="language-plaintext highlighter-rouge">search()</code> now.</p>
  <div class="solution notice--success" style="margin:auto;text-align:center;">
    <p style="font-size:13pt;"><em>Hover here to see the solution.</em></p>
  </div>
  <div class="hide" style="font-size:13pt;"><div class="language-java highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kd">public</span> <span class="kd">static</span> <span class="kt">boolean</span> <span class="nf">search</span><span class="o">(</span><span class="nc">String</span> <span class="n">path</span><span class="o">,</span> 
                             <span class="kt">int</span> <span class="n">r</span><span class="o">,</span> 
                             <span class="kt">int</span> <span class="n">c</span><span class="o">,</span> 
                             <span class="kt">boolean</span><span class="o">[][]</span> <span class="n">visited</span><span class="o">)</span>
<span class="o">{</span>
    <span class="c1">// Mark the current node we're at as visited.</span>
    <span class="n">visited</span><span class="o">[</span><span class="n">r</span><span class="o">][</span><span class="n">c</span><span class="o">]</span> <span class="o">=</span> <span class="kc">true</span><span class="o">;</span>
    <span class="c1">// Concatenate the character we're at to the working String.</span>
    <span class="n">path</span> <span class="o">=</span> <span class="n">path</span> <span class="o">+</span> <span class="nc">Character</span><span class="o">.</span><span class="na">toString</span><span class="o">(</span><span class="n">board</span><span class="o">[</span><span class="n">r</span><span class="o">][</span><span class="n">c</span><span class="o">]);</span>
    <span class="c1">// If we find the String we're looking for, then done recursing.</span>
    <span class="k">if</span> <span class="o">(</span><span class="n">path</span><span class="o">.</span><span class="na">equals</span><span class="o">(</span><span class="no">SEARCH_WORD</span><span class="o">))</span> <span class="o">{</span>
        <span class="k">return</span> <span class="kc">true</span><span class="o">;</span>
    <span class="o">}</span>
    <span class="c1">// If we've looked through enough characters and still haven't found</span>
    <span class="c1">// the word, then we're also done recursing. This happens when either</span>
    <span class="c1">// (1) we've looked through more characters than the actual length</span>
    <span class="c1">// of the word, or (2) we've looked through all of the characters in</span>
    <span class="c1">// the char[][] word search board.</span>
    <span class="k">else</span> <span class="nf">if</span> <span class="o">(</span><span class="n">path</span><span class="o">.</span><span class="na">length</span><span class="o">()</span> <span class="o">&gt;=</span> <span class="no">SEARCH_WORD</span><span class="o">.</span><span class="na">length</span><span class="o">()</span> <span class="o">||</span> 
             <span class="n">path</span><span class="o">.</span><span class="na">length</span><span class="o">()</span> <span class="o">&gt;=</span> <span class="no">BOARD_SIZE</span> <span class="o">*</span> <span class="no">BOARD_SIZE</span><span class="o">)</span>
    <span class="o">{</span>
        <span class="k">return</span> <span class="kc">false</span><span class="o">;</span>
    <span class="o">}</span>
    <span class="c1">// Boolean to keep track of whether we found the word yet.</span>
    <span class="kt">boolean</span> <span class="n">valid</span> <span class="o">=</span> <span class="kc">false</span><span class="o">;</span>
    <span class="c1">// Look through all of the valid moves</span>
    <span class="k">for</span> <span class="o">(</span><span class="kt">int</span> <span class="n">i</span> <span class="o">=</span> <span class="mi">0</span><span class="o">;</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="n">rowMoves</span><span class="o">.</span><span class="na">length</span><span class="o">;</span> <span class="n">i</span><span class="o">++)</span> <span class="o">{</span>
        <span class="kt">int</span> <span class="n">newR</span> <span class="o">=</span> <span class="n">r</span> <span class="o">+</span> <span class="n">rowMoves</span><span class="o">[</span><span class="n">i</span><span class="o">];</span>
        <span class="kt">int</span> <span class="n">newC</span> <span class="o">=</span> <span class="n">c</span> <span class="o">+</span> <span class="n">colMoves</span><span class="o">[</span><span class="n">i</span><span class="o">];</span>
        <span class="k">if</span> <span class="o">(</span><span class="n">newR</span> <span class="o">&lt;</span> <span class="no">BOARD_SIZE</span> <span class="o">&amp;&amp;</span> <span class="n">newR</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">&amp;&amp;</span> 
            <span class="n">newC</span> <span class="o">&lt;</span> <span class="no">BOARD_SIZE</span> <span class="o">&amp;&amp;</span> <span class="n">newC</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">&amp;&amp;</span> 
            <span class="o">!</span><span class="n">visited</span><span class="o">[</span><span class="n">newR</span><span class="o">][</span><span class="n">newC</span><span class="o">])</span> 
        <span class="o">{</span>
            <span class="c1">// Return whether any of the valid moves lead to paths</span>
            <span class="c1">// that give the String we're looking for.</span>
            <span class="n">valid</span> <span class="o">=</span> <span class="n">valid</span> <span class="o">||</span> <span class="n">search</span><span class="o">(</span><span class="n">path</span><span class="o">,</span> <span class="n">newR</span><span class="o">,</span> <span class="n">newC</span><span class="o">,</span> <span class="n">deepCopy</span><span class="o">(</span><span class="n">visited</span><span class="o">));</span>
        <span class="o">}</span>
    <span class="o">}</span>
    <span class="k">return</span> <span class="n">valid</span><span class="o">;</span>
<span class="o">}</span>
</code></pre></div></div></div>
</div>

That's it! All that's left is to run our code and see if it works as expected. We have already provided the driver code in the ```main()``` function in ```Main.java```. A sample test word search board and search word is provided. If you run the code, you should expect to see the following result:

```
The word (dean) was found in the word search board.
```

Feel free to try running the code again with other ```char[][]``` boards and/or ```SEARCH_WORDS``` to verify that the program works as expected. Once you have verified that your program works as expected, consider the following two challenge problems (which are completely optional).

  - **Challenge 3:** Can you print out *all* of the English words that are found in the ```char[][]``` matrix? Use the ```dictionary.txt``` list of words as the set of all English words that you should consider.
  - **Challenge 4:** Often times in an actual word search puzzle, one must find words that contain characters only going in "one direcion". This means that all of the characters that make up a word can only go along one vertical line, horizontal line, or diagonal line. Modify your code to conform to this rule.

<hr>

<div class="two-container" style="width: 100%">
  <div style="text-align: center;"><a href="/java/bfs-dfs/index.html" class="btn btn--info" style="font-size:13pt">Previous Lesson</a></div>
  <div style="text-align: center;"><a href="#" class="btn btn--info" style="font-size:13pt">Next Lesson</a></div>
</div>
