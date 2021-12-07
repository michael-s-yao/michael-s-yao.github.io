---
permalink: /java/recursion/
author_profile: false
title: "Recursion"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

Today, we'll be learning about **recursion**, which is one of the most difficult yet useful techniques in introductory computer programming.

> ## An Example

Let's imagine that we want to compute the factorial of a number $n$, which is defined to be $n!=n\times(n-1)\times(n-2)\times\cdots\times2\times 1$. One way of doing this using some of the standard techniques that we've learned is through a ```for``` loop:

```java
public int computeFactorial(int n) {
    int result = 1;

    for (int i = 1; i < n; i++) {
        result = result * i;
    }

    return result;
}
```

This is a completely valid way of writing this program. Note that in computing the factorial of $n$, we're essentially doing the same operation (multiplication) over and over again. Indeed, another way of thinking about computing $n!$ is that all we need to do  is multiply $n$ by $(n-1)!$. Now, our problem is reduced to determining what $(n-1)!$ is. But this is essentially the exact same problem: $(n-1)!$ can can be though of as multiplying $(n-1)$ by $(n-2)!$, and our problem is now determining what $(n-2)!$ is. 

This _circular reasoning_ may get you in some trouble in other classes, such as writing proofs in a math course, but in Java and in computer programming in general, this is a very powerful tool. This idea of circular reasoning is the basis of **recursion**.

Recursion describes a class of functions that _calls itself_ in order to complete a task. In our case, given our updated description of how to recursively compute $n!$, recursion might look something like this

```java
public int recursiveComputeFactorial(int n) {
    return n * recursiveComputeFactorial(n - 1);
}
```

Notice how the function ```recursiveComputeFactorial(int n)``` recursively calls itself within its own body in order to determine the value of $n!$. However, when we run this function, Java doesn't compute $n!$, but rather gives us a ```StackOverflowError``` error (feel free to check this yourself [here](https://repl.it/@myaomeow/RecursionBuggy)). 

The ```StackOverflowError``` is essentially a fancy way of telling us that our computer failed to compute the desired result because it essentially ran out of memory, meaning that the program ran on forever and wasn't able to ever finish.

The problem is that we never handled the case where $n=1$. When we get to $n=1$, the function ```recursiveComputeFactorial()``` shouldn't return ```1 * this.recursiveComputeFactorial(0)```; it should simply return ```1```. This is because the factorial computation should end at multiplying the last number of $1$, not continue multiplying $0, -1, -2, \ldots$ and so on and so forth. Therefore, we should update our code in the following way:

```java
public int recursiveComputeFactorial(int n) {
    if (n == 1) { return 1; }

    return n * this.recursiveComputeFactorial(n - 1);
}
```

Of course, there's also the edge case where we're trying to compute $0!=1$, so an input of $n=0$ should also return $1$. We'll account for this by modifying our ```if``` statement to account for this case:

```java
public int recursiveComputeFactorial(int n) {
    if (n <= 1) { return 1; }

    return n * this.recursiveComputeFactorial(n - 1);
}
```

And we're done! This code is an example of a recursive function that computes the factorial of an integer $n$. You're welcome to try it out yourself to confirm that this works here:

<iframe height="600px" width="100%" src="https://repl.it/@myaomeow/FactorialRecursion?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

> ## Thinking Through the Logic

The logic of how a recursive function can often be one of the most confusing things about recursion. When approaching any problem using recursion, my recommendation is to always tackle the problem _backwards_. That is start with the simplest case. For example going, back to the factorial calculation. Let's first start off with the simplest case of $n=1$. $1!=1$, and so in this case we should simply return $1$. This means that ```this.recursiveComputeFactorial(1) = 1```. For the next simplest case of $n=2$, $2!=2\times 1!$, and so in this case we should return ```2 * this.recursiveComputeFactorial(2 - 1)```. This means that ```this.recursiveComputeFactorial(2) = 2 * this.recursiveComputeFactorial(2 - 1)```. For the next case with $n=3$, $3!=3\times 2!$, and so in this case we should return ```3 * this.recursiveComputeFactorial(3 - 1)```, since we determined above that ```this.recursiveComputeFactorial(3 - 1) = 2!```. Once we've considered a couple of these simple cases, we can generalize and see that as long as $n>1$, our function should return ```n * this.recursiveComputeFactorial(n - 1)```. In this way, recursion is most easily tackled by considered the simplest cases and then building our way upwards.

> ## A General Algorithm

Given that we now better understand the logic of how recursion works, we can now generalize to give a template of what almost all recursive functions will look like:

```java
public class RecursiveFunction {
    public int recurse(int arg) {
        /* Handle the base case. */
        if (baseCase) {
            // Do anything you need here, and then return the value 
            // for the base case. Recursive function calls shouldn't
            // be made here.
        }

        /* Handle all other cases. */
        // Do anything you need here, and then return the value
        // for the general case. Recursive function calls should be
        // made here.
    }
}
````

The **base case** is essentially the simplest case that tells us when to stop recursing. When we were evaluating the factorial of integers, the base case that would stop the recursive calls is when we reach $n=1$.

> ## Applications of Recursion

Now, you might be questioning what the actual uses of recursion are. After all, we gave an example for calculating $n!$ [above](/java/recursion/index.html#an-example) that didn't seem as complicated and worked perfectly find. In fact, in most practical applications, recursion is primarily useful when trying to solve a problem iteratively, which, by definition, can often (but not always) be approached with ```for``` and ```while``` loops. So, when would we actually use recursion in actual practical programming?

One situation that may come up is that the ```for``` and ```while``` loops may get incredibly complex, and can become extremely simplified using recursion. Another situation is if there are multiple "branches" of where the code can possibly run. We'll look at some of the most common situations and algorithms where recursion is an extremely powerful tool in the future: typically, recursion doesn't prove its helpfulness until we get into some really complex programming problems. Let's try a couple of practice problems.

> ## Example 1: String Parsing

_This problem is adapted from [CodingBat](https://codingbat.com/prob/p170371)._

**Given a String, compute recursively (no loops) the number of lowercase ```'x'``` characters in the String.**

Like we talked about above, we should first identify the base condition where we know that we should stop recursing. In this problem, when we run out of characters to test being equal to ```'x'```, this tells us that the recursion should stop, since the length of the String is now zero. Since there obviously can't be a character ```'x'``` in a String with length ```0```, we should return ```0``` in the base case. Therefore, our base case is

```java
public int countX(String str) {
    if (str.length() == 0) { return 0; }
}
```

For personal preference, we will try to start from recursing from the end of the list. The idea is to determine whether the last character in the current String we are on is equal to ```'x'```, and then recurse on the same String minus that last character we just tested, which can be found in Java using the [```substring()``` method](https://beginnersbook.com/2013/12/java-string-substring-method-example/). If the last character in the current String is ```'x'```, then we add ```1``` to our count. Otherwise, we don't add anything. Therefore, our complete code would look something like

```java
public int countX(String str) {
    if (str.length() == 0) { return 0; }
    else if (str.charAt(str.length() - 1) == 'x') {
        return 1 + countX(str.substring(0, str.length() - 1));
    }
    else {
        return countX(str.substring(0, str.length() - 1));
    }
}
```

That's it! You can try to test out your code here on [this website](https://codingbat.com/prob/p170371).

> ## Example 2: Nested Parentheses

_This problem is adapted from [CodingBat](https://codingbat.com/prob/p183174)._

**Given a string, return true if it is a nesting of zero or more pairs of parentheses, like ```(())``` or ```((()))```.**

One way to approach this problem is to find the very first instance of a ```(``` character and the very last instance of a ```)``` in the initial String. We can then take the substring in between these two parentheses and recurse on the resulting String. If we can't find both an opening parenthesis or a closing parenthesis, then that means there must be a mismatch in the parenthesis, and we can automatically return false. Otherwise, if we can recurse all the way down to the base case of ```"()"```, then we return true. This can look something like this:

```java
public boolean nestParen(String str) {
    int startIndex = -1;
    int endIndex = -1;

    /* Look for the open and end parentheses. */
    for (int i = 0; i < str.length(); i++) {
        if (str.charAt(str.length() - 1 - i) == '(') { 
            startIndex = str.length() - 1 - i;
        }

        if (str.charAt(i) == ')') {
            endIndex = i;
        }
    }

    /* If a parentheses '(' and ')' are found in the correct order. */
    if ((startIndex >= 0) && (endIndex >= 0) && startIndex < endIndex) {
        /* If the String is exactly "()". (Base Case) */
        if (endIndex - startIndex == 1) {
            return true;
        }
        /* Otherwise, recurse. */
        else {
            return nestParen(str.substring(startIndex + 1, endIndex));
        }
    }
    /* 
     * If parentheses are not found in the correct order, 
     * then just return false.
     */
    else { return false; }
}
```

This essentially covers the main structure, but there are a couple of edge cases that we need to handle. The first is if there are no parentheses in the String at all. Then, since all the (nonexistent) parentheses properly match, we should return ```true```. The second one is if the String has zero length or only has one character. In this case, we should also return ```true``` except if the String is exactly ```"("``` or ```")"```. To cover both of these edge cases, the final code is

```java
public boolean nestParen(String str) {
    int startIndex = -1;
    int endIndex = -1;

    /* Look for the open and end parentheses. */
    for (int i = 0; i < str.length(); i++) {
        if (str.charAt(str.length() - 1 - i) == '(') { 
            startIndex = str.length() - 1 - i;
        }

        if (str.charAt(i) == ')') {
            endIndex = i;
        }
    }

    /* If there are no parenthesis present. */
    if (startIndex == -1 && endIndex == -1) { return true; }
    /* If a parentheses '(' and ')' are found in the correct order. */
    else if ((startIndex >= 0) && (endIndex >= 0) && 
                                        startIndex < endIndex) {
        /* If the String is exactly "()". (Base Case) */
        if (endIndex - startIndex == 1) {
            return true;
        }
        /* Otherwise, recurse. */
        else {
            return nestParen(str.substring(startIndex + 1, endIndex));
        }
    }
    /* 
     * If parentheses are not found in the correct order, 
     * then just return false.
     */
    else { return false; }
}
```

_Note: This program actually has a small problem! It will return ```false``` if the input string is something like ```"()()"```. Can you figure out how to fix it?_

You can try to test out your code here on [this website](https://codingbat.com/prob/p183174).

As a humorous joke, try looking up "recursion" on Google. Even the software engineers at Google have have a pretty good sense of humor! :smile:

> ## Exercises

> ### Problem 1

Write a Java program that computes the $$n$$ Fibonacci number $$F_n$$ recursively. As a reminder, the Fibonacci numbers are described by the equation

$$F_n=F_{n-1}+F_{n-2}, \text{ where }F_0=0 \text{ and }F_1=1$$

Here are the first couple of Fibonacci numbers for reference:

$n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
$F_n$ | 0 | 1 | 1 | 2 | 3 | 5 | 8 | 13 | 21

<iframe height="600px" width="100%" src="https://repl.it/@myaomeow/FibonacciRecursion?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

> ### Problem 2

The _greatest common divisor (GCD)_ of two positive integers $x$ and $y$ is the largest positive integer that divides both $x$ and $y$ evenly. For example, the GCD of 366 and 60 is 6. 

We can calculate the GCD of two numbers using recursion and something called the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm). The idea is that the GCD of two numbers doesn't change if the smaller number is subtracted from the bigger number. For example, suppose we want to find the GCD of 98 and 56:

```
GCD(98, 56) = GCD(98-56, 56) = GCD(42, 56) = GCD(42, 56-42) = GCD(42, 14) = GCD(42-14, 14) = GCD(28, 14) = GCD(28-14, 14) = GCD(14, 14) = GCD(14-14, 14) = GCD(0, 14) = 14
```

Note that once one of the two numbers becomes zero, the GCD is simply the other number, since anything divides zero "evenly." Calculate the GCD of two positive integers recursively:

<iframe height="800px" width="100%" src="https://repl.it/@myaomeow/GCDRecursion?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

> ### Problem 3

_This problem is adapted from CS161 at [Colorado State](https://www.cs.colostate.edu/~cs161/.Spring13/assignments/pa5/)._

  1. Write a method ```addDigits(int x)``` that takes a nonnegative integer and returns the sum of its digits. For example ```addDigits(2946)``` should return ```21```, since ```2+9+4+6=21```. This method should use recursion.
  2. Write a method ```digitalRoot(int x)``` that determines the _digital root_ of ```x```. The digital root of a number is defined as the single digit number that is left after repeatedly summing the digits of a number. For example, the digital root of ```2946``` is ```3```, since ```2+9+4+6=21```, and then ```2+1=3```. 

<iframe height="1000px" width="100%" src="https://repl.it/@myaomeow/DigitalRootRecursion?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<hr>

<div class="two-container" style="width: 100%">
  <div style="text-align: center;"><a href="/java/abstract-data-types/index.html" class="btn btn--info" style="font-size:13pt">Previous Lesson</a></div>
  <div style="text-align: center;"><a href="/java/apcsa-practice-frq/index.html" class="btn btn--info" style="font-size:13pt">Next Lesson</a></div>
</div>
