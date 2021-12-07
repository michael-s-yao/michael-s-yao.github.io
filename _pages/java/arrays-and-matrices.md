---
permalink: /java/arrays-and-matrices/
author_profile: false
title: "Arrays and Matrices"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

<div class="notice--info">
<p style="font-size:13pt"><strong>Learning Objectives:</strong> By the end of this learning module, you should understand how to...</p>
<ol>
  <li style="font-size:13pt">manipulate array and matrix elements.</li>
  <li style="font-size:13pt">represent a matrix as an array of arrays.</li>
  <li style="font-size:13pt">incorporate our working knowledge of conditional statements and <code class="language-plaintext highlighter-rouge">for</code>/<code class="language-plaintext highlighter-rouge">while</code> loops into writing functions involving arrays and matrices.</li>
</ol>
</div>

> ## Introduction

Today we'll be learning about a fundamental data structure: arrays. An **array** is simply and ordered collection of items. For example, take a list of errands you might have for the day, which may include

  1. Thaw meat from the freezer.
  2. Go to the bank.
  3. Buy groceries.
  4. Visit friends.
  5. Cook dinner.

The order in which we do this tasks is important. For example, we have to thaw the meat at the beginning of the day in order for it to be cooked for dinner. And you can only visit your friends in the afternoon at the time they invited you to come over. Furthermore, all of these errands are the same "variable type," since they are all errands. One way to represent this array of tasks is to use a Java array.

> ## Arrays

Java arrays are data structures that can hold a _fixed number of elements_ that are all of the same variable type. In other words, an array that starts off with five elements will always have five elements forever. Because of this feature of arrays, we call the size of arrays _immutable_, meaning "not able to be changed." When creating an array, we must know the size of the array beforehand, or we will not be able to create it. This limits which situations may best benefit from arrays. Continuing with the example from above, a Java array of errands can be created using the following code.

```java
String[] myErrands = { "Thaw meat from the freezer", "Go to the bank", 
                    "Buy groceries", "Visit friends", "Cook dinner" };
``` 

Notice that an array of ```String```s is denoted as ```String[]```, just as an array of ```int```s might be denoted as ```int[]``` variable type. This array has the name ```myErrands```. Each errand is called an _array element_, and is separated by a comma in declaring all of the array elements. 

It's important to note that **all types of arrays and lists we will see are 0-indexed!**. This means that our array of errands doesn't start from the first thing to do. It starts with the _zeroth_ thing to do. Although our list of errands have 5 total things to do, the last item is item number four, not five.

Finally the entire list is encased within two ```{}``` brackets, which indicates that it's a list.

In some cases, we might not know when declaring the existence of the array what the value of its elements will be. Here is another way of creating an array (this time of ```int```s):

```java
int[] data; // Declaring the existence of an array of int's
data = new int[10]; // Create a new double array of size 10
```

This new array ```data``` can hold a maximum of 10 doubles. We can also do the declaration and creation steps in a single line:

```java
int[] data = new int[10];
```

This accomplishes the exact same thing. 

To access or retrieve the ```i```th element in our array (remember that arrays are 0-indexed), we use ```data[i]```. You can write to or read each of the elements using this notation:

```java
/* Modify an element in the array. */
data[0] = -2;    // Sets the 0th element in the array to -2.
data[4] = 13;    // Sets the 4th element in the array to 13.
data[10] = 9;    // This gives an error! data has length 10, so
                 // the last index of the array is 9. There is no
                 // 10th element!
data[6] = "Hi!"; // This also returns an error! data was declared to
                 // be an array of integers, so we can't set an 
                 // element equal to a String.

/* Use or access an element in the array. */
System.out.println(data[0] + 2); // Adds 2 to the 0th integer in data
                                 // and prints out the result. This 
                                 // doesn't modify data[0].
for (int i = 0; i < data.length; i++) {
    data[i]++; // Add 1 to each element in the array.
}
```

To get the total number of elements in an array, use the ```.length``` field. For example, ```data.length``` is equal to ```10```. You cannot remove or add elements from arrays. If you want to remove the ```i```th element, you could set it to ```0``` or ```null```. There are also other things you can do with arrays: you can sort them in increasing order, check for equality, and search through the array to find a particular element among many other things. A full list of capabilities can be found [here](https://courses.cs.washington.edu/courses/cse341/98au/java/jdk1.2beta4/docs/api/java/util/Arrays.html).

To recap, here are the important things to keep in mind about arrays:

<div class="notice--success">
<ol>
  <li style="font-size:13pt"> The array variable type is declared as <code class="language-plaintext highlighter-rouge">VariableType[]</code>, where <code class="language-plaintext highlighter-rouge">VariableType</code> is the variable type of the elements of the array.</li>
  <li style="font-size:13pt"> Arrays in Java are 0-indexed! The first element in the array <code class="language-plaintext highlighter-rouge">myArray</code> is <code class="language-plaintext highlighter-rouge">myArray[0]</code>, and the last element in the array is <code class="language-plaintext highlighter-rouge">myArray[myArray.length - 1]</code>.</li>
  <li style="font-size:13pt"> The length <code class="language-plaintext highlighter-rouge">myArray.length</code> of the array <code class="language-plaintext highlighter-rouge">myArray</code> is immutable! This means that it cannot be changed later on in the program.</li>
</ol>
</div>

> ## Matrices

In Java, there isn't really a pre-defined matrix class. Instead, we can represent matrices as an _array of arrays_. For example, consider the following matrix: 

$$ m=\begin{bmatrix} 6 & -2 & 4 \\ 7 & 0 & -1 \end{bmatrix}$$

In Java, we can represent this matrix using the following code:

```java
int[][] m = { { 6, -2, 4},
              { 7, 0, -1}
            };
```

or in other words,

```java
int[][] m = { {6, -2, 4}, {7, 0, -1} };
```

As we can see from this example, a matrix can simply be thought of as an array, but each element of the array is itself an array that contains all of the elements of a single row in the matrix. In this fashion, a matrix is represented as an array of rows of the matrix. Here is another way of declaring the matrix:

```java
/* Create a matrix m with two rows. */
int[][] m = new int[2][2];

/* Set the first row of matrix m. */
m[0][0] = 6;
m[0][1] = -2;
m[0][2] = 4;

/* Set the second row of matrix m. */
m[1][0] = 7;
m[1][1] = 0;
m[1][2] = -1;
```

As we can see, we access the matrix element in the $i$th row and $j$th column using the programming notation $m[i][j]$. We also have to be cognizant that, once again, arrays are 0-indexed. Therefore, the array looks something like

$$ m=\begin{bmatrix} 6 & -2 & 4 \\ 7 & 0 & -1 \end{bmatrix}=\begin{bmatrix}\texttt{m[0][0]} & \texttt{m[0][1]} & \texttt{m[0][2]} \\ \texttt{m[1][0]} & \texttt{m[1][1]} & \texttt{m[1][2]} \end{bmatrix}$$

In many cases, we will have to access all of the elements of the matrix one by one. This can be accomplished using two nested ```for``` loops. The first, outer ```for``` loop will iterate over all of the rows of the matrix, and the second, inner ```for``` loop will iterate over all of the columns of the matrix. For example, the following code allows us to print out the elements of the matrix.

```java        
/* Print out the matrix. */
for (int i = 0; i < m.length; i++) {
    for (int j = 0; j < m[i].length; j++) {
        System.out.print(m[i][j] + " ");
    }
    
    System.out.println();
}
```

When run, this code will print out the following:

```
6 -2
7 0
```

To recap, here are the important things to keep in mind when discussing matrices:

<div class="notice--success">
<ol>
  <li style="font-size:13pt"> The matrix variable type is declared as <code class="language-plaintext highlighter-rouge">VariableType[][]</code>, where <code class="language-plaintext highlighter-rouge">VariableType</code> is the variable type of the elements of the matrix.</li>
  <li style="font-size:13pt"> The element in the <code class="language-plaintext highlighter-rouge">i</code>th row and <code class="language-plaintext highlighter-rouge">j</code>th column is accessed as <code class="language-plaintext highlighter-rouge">m[i][j]</code>.</li>
  <li style="font-size:13pt"> The matrix is stored as an array of arrays. In our case, the list might look something like <code class="language-plaintext highlighter-rouge">{ {6, -2, 4}, {7, 0, -1} }</code>.</li>
</ol>
</div>

> ## Limitations

For both arrays and matrices, one major limitation is that we can't really change the size of the arrays. This presents an issue especially if we don't know how many elements will be in our array when we initialize it. Furthermore, arrays and matrices lack helpful functions such as checking if a particular element is contained in the array, or if the array is empty, among other things. In the next teaching module, we will discuss other data structures that can help us overcome these limitations.

> ## Exercises

### Problem 1

Write a Java program that has two methods that act only on arrays of ```int```s:

  1. Determine if the arithmetic mean of all the elements in the array is itself an element of the array.
  2. Return an ```int[]``` array with capacity that contains all of the elements that appear more than once in the array. The array that is returned should only contain unique elements that were duplicated in the original array.

Write your methods here, and test your code by pressing the green :arrow_forward: button at the top of the plugin. Feel free to write any helpful helper methods as necessary.

<iframe height="900px" width="100%" src="https://repl.it/@myaomeow/IntegerArrayFunctions?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

> ### Problem 2

Write a Java program that can multiply to square $$n\times n$$ matrices together, where $$n$$ is some positive integer. Test your program by pressing the green :arrow_forward: button at the top of the plugin below to evaluate the following two matrix multiplication problems:

  1. $$\begin{bmatrix} 0 & 4\\ 5 & 2 \end{bmatrix}\begin{bmatrix}2 & 5 \\ 3 & 0\end{bmatrix}$$
  2. $$\begin{bmatrix} 0 & 5 & 6 & 1 \\ 3 & 5 & -7 & 2 \\ 4 & 10 & -6 & -1 \\ 1 & 1 & 3 & 1\end{bmatrix}\begin{bmatrix} 0 & 3 & 4 & 1 \\ 5 & 5 & 10 & 1 \\ 6 & -7 & -6 & 3 \\ 1 & 2 & -1 & 1\end{bmatrix}$$

The answers you should get are:

  1. $$\begin{bmatrix}12 & 0 \\ 16 & 25\end{bmatrix}$$
  2. $$\begin{bmatrix}64 & -15 & 13 & 24 \\ -15 & 87 & 102 & -11 \\ 13 & 102 & 153 & -5\\ 24 & -11 & -5 & 12\end{bmatrix}$$

<iframe height="900px" width="100%" src="https://repl.it/@myaomeow/MatrixMultiplication?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

> ### Problem 3

_This problem is adapted from [Codeforces](http://codeforces.com/problemset/problem/894/A)._

"QAQ" is a word to denote an expression of crying. Imagine "Q" as eyes with tears and "A" as a mouth.

Now Adam has given Becky a string consisting of only uppercase English letters of length $n$. There is a great number of "QAQ" in the string. Becky wants to know how many subsequences "QAQ" are in the string Adam has given. Note that the letters "QAQ" don't have to be consecutive, but the order of letters should be exact. Test your program by pressing the green :arrow_forward: button at the top of the plugin below.

**Input:**  The only line contains a string of length $n$ ($3\leq n \leq 20$). It is guaranteed that the string contains uppercase English letters.

**Output:** Print an integer representing the number of subsequences "QAQ" in the string.

**Examples:**

Consider the argument string ```"QAQAQYSYIOIWIN"```. There are four subsequences "QAQ":

  1. **QAQ**AQYSYIOIWIN
  2. **QA**QA**Q**YSYIOIWIN
  3. **Q**AQ**AQ**YSYIOIWIN
  4. QA**QAQ**YSYIOIWIN

Consider the argument string ```"QAQQQZZYNOIWIN"```. There are three subsequences "QAQ":

  1. **QAQ**QQZZYNOIWIN
  2. **QA**Q**Q**QZZYNOIWIN
  3. **QA**QQ**Q**ZZYNOIWIN

<iframe height="900px" width="100%" src="https://repl.it/@myaomeow/QAQ?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

<hr>

<div class="two-container" style="width: 100%">
  <div style="text-align: center;"><a href="/java/variables-conditionals-and-loops/index.html" class="btn btn--info" style="font-size:13pt">Previous Lesson</a></div>
  <div style="text-align: center;"><a href="/java/lists/index.html" class="btn btn--info" style="font-size:13pt">Next Lesson</a></div>
</div>
