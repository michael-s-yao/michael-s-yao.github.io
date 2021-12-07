---
permalink: /java/variables-conditionals-and-loops/
author_profile: false
title: "Variables, Conditionals, and Loops"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

> ## Bytes

A _bit_ is a ``0`` or a ``1``. Bits can be combined to represent numbers in binary representation. For example, the numbers $0$ through 7 can be represented in binary by

Decimal | Binary
$0$ | ``000``
$1$ | ``001``
$2$ | ``010``
$3$ |  ``011``
$4$ | ``100``
$5$ | ``101``
$6$ | ``110``
$7$ | ``111``

In general, if you want to represent the numbers $0$ through $2^n-1$ (or $-2^{n-1}-1$ to $2^{n-1}-1$ if you care about negative numbers too), you need at least $n$ bits. One _byte_ is 8 bits. Therefore, using $z$ bytes of data, we can represent the numbers from $0$ to \\(2^{8z}-1\\) (or $-2^{8z-1}-1$ to $2^{8z-1}-1$ if, again, you care about negative numbers). The range of numbers we can represent depends on the number of bytes we use: more bytes equals more numbers!

> ## Variable Types

There are 8 fundamental variable types (and a bonus important variable type):
  1. ```byte```. This is an integer between $-128$ and $127$ represented by 1 byte.
  2. ```short```. This is an integer between $-32768$ and $32767$ represented by 2 bytes.
  3. ```int```. This is an integer between $-2^{31}$ and $2^{31}-1$ represented by 4 bytes.
  4. ```long```. This is an integer between $-2^{63}$ and $2^{63}-1$ represented by 8 bytes.
  5. ```float```. This is a decimal with precision up to $6$ or $7$ decimal digits. It has a smaller range than ```double``` and is represented by 4 bytes. Use this if you want to minimize how large your program is and don't care about precision.
  6. ```double```. This is a decimal with precision up to $15$ or $16$ decimal digits. It has a larger range than ```float``` and is represented by 8 bytes. Use this if you care about precision and don't care about how large your program is.
  7. ```char```. Basically a letter in the alphabet. We denote a ```char``` by encasing it around 2 ```'``` single quotes. ```char```'s also have numerical values assigned by ASCII convention. You can get the numerical value by *casting* to an integer: ```int castedCharacter = (int)c;```, where $c$ was of type ```char```. 
  8. ```boolean```. You have only two options: ```true``` or ```false```. 1 byte.
  9. ```String```. Technically, ```string```'s are not a fundamental variable type, but they're worth talking about. A ```string``` is treated as an *array* of ```char```'s. We denote a ```String``` by encasing it around 2 ```"```double quotes. To get the ```char``` array of the ```string```, use ```java.lang.String.toCharArray(String s)```.

*Note that all number variable types are signed in Java!* When declaring the existence of a variable, we do ```variableType variableName;```. If we also want to set it equal to something at the same time, we do ```variableType variableName = initialValue;```.

> ## Conditional Statements

Sometimes, I only want to do something with my code when some other thing is true. To check for equality, use the ```==``` operation (use the ```s1.equals(s2)``` method for ```String```'s ```s1``` and ```s2```). To check for inequality, use the ```!=``` operation. $<, \leq, >, \geq$ are represented by ```<, <=, >, >=```, respectively. Here is an example of using conditional statements:

```java
public class Example {
    // Our class doesn't have any fields.

    public Example() {
        // Nothing to construct either.
    }
    
    public void doStuff(int n) {
        if (n == 6) {
            System.out.println("Equals 6.");
        }
        else if (n > 6) {
            System.out.println("Greater than 6.");
        else {
            System.out.println("Less than 6.");
        }
        
        if (n != 6) {
            System.out.println("Also not equal to 6.");
        }
    }
    
    public static void main(String[] args) {
        Example example = new Example();
        example.doStuff(6);
        example.doStuff(7);
        example.doStuff(3);
    }
}
```

We introduced the idea of ```if```, ```else if```, and ```else``` statements. To only do something when multiple conditions are true, use the ```&&``` 'and' operator. To only do something when at least one of a number of conditions are true, use the ```||``` 'or' operator.

> ## Repetitions and Loops

Sometimes, we want to keep doing something a repeated number of times. If we know how many times we want to do something, use a ```for``` loop. If we don't know yet how many times we want to do something use a ```while``` loop. Both types of loops check for equality every iteration. Here is an example of both a ```for``` loop and ```while``` loop that will print the first $n$ positive even numbers:

```java
public class Example {
    // Our class doesn't have any fields.

    public Example() {
        // Nothing to construct either.
    }
    
    public void useForLoop(int n) {
        /*
         * int i = 1 declares the existence of a variable i and sets it 
         * initially equal to 1. The for loop continues to iterate until 
         * i < n + 1 is no longer true. i++ means that we increment i by 1 
         * after every iteration.
         */
        for (int i = 1; i < n + 1; i = i + 1) {
            System.out.println(2 * i);
        }
    }
    
    public void useWhileLoop(int n) {
        /*
         * As long as n > 0 is true,
         * continue looping.
         */
        while (n > 0) {
             System.out.println(2 * n);
             n = n - 1;
         }
    }
    
    public static void main(String[] args) {
        Example example = new Example();
        // What will this for loop print out?
        example.useForLoop(5);
        // What will this while loop print out? How is it different from 
        // what the for loop prints out?
        example.useWhileLoop(5);
    }
}
```

> ## Exercises

### Problem 1

In the comments of the main section in the code snippet in the Repetitions and Loops section above, we asked the following three questions:

  1. What will the ```for``` loop print out?
  2. What will the ```while``` loop print out?
  3. How are the outputs of the ```for``` and ```while``` loops different?

Please answer these three questions.

### Problem 2
_This problem is adapted from [Codeforces](http://codeforces.com/problemset/problem/71/A)._

Sometimes some words like ```"localization"``` or ```"internationalization"``` are so long that writing them many times in one text is quite tiresome. Let's consider a word too long, if its length is strictly more than 10 characters. All too long words should be replaced with a special abbreviation. This abbreviation is made like this: we write down the first and the last letter of a word and between them we write the number of letters between the first and the last letters. For example, ```"localization"``` will be spelt as ```"l10n"```, and ```"internationalization"``` will be spelt as ```"i18n"```. Fill in the following code segments. Before starting, I'd recommend checking out [this link](https://stackoverflow.com/questions/2451650/how-do-i-apply-the-for-each-loop-to-every-character-in-a-string).

```java
public class Problem2 {
    // Our class doesn't have any fields.

    public Problem2() {
        // Nothing to construct either.
    }
    
    public static int numChar(String s) {
        // TODO: Return how many characters are in the input String s. Do
        // not use the .length() method. Try writing this using a for loop.
        return 0;
    }
    
    public static int numInternalChar(String s) {
        // TODO: Return how many characters are in the input String s, aside
        // from the first and the last character. This should be one line
        // of code using the result of numChar(String s) method above.
        return 0;
    }
    
    public static String abbreviate(String s) {
        // TODO: Using the above two methods, rewrite the FILL IN HERE's to 
        // give the requested abbreviation.
        
        // What do we want to do when the number of letters in the string
        // is more than 10?
        if (s.length() > 10) {
            return (Character.toString(s.charAt(0)) + 
                    Integer.toString(FILL IN HERE) + 
                    Character.toString(s.charAt(
                                    s.length() - 1)));
        }
        // What do we want to do if the word is short instead?
        else {
            return FILL IN HERE;
        }
    }
    
    public static void main(String[] args) {
        // Feel free to change THIS IS OUR STRING to whatever string 
        // you like!
        String ourString = "THIS IS OUR STRING";
        System.out.println(abbreviate(ourString));
    }
}
```
Try out your code on your computer and see if it works!

### Problem 3

_This problem is adapted from Caltech's CS11 course._

Let's write a program to represent an $(x, y)$ pair on the Cartesian plane as a Java ```class```. Our goal is to be able to calculate the distance between any two points. For this problem, fill in the following code segments. Before starting, I'd recommend checking out [this link](https://stackoverflow.com/questions/8959782/check-if-multiple-conditions-are-all-false-or-all-true-java).

```java
import java.util.*;
import java.io.*;
import java.lang.Math;

/**
 * A two-dimensional point class.
 **/
public class Point2d {
    /** x coordinate of the point **/
    private double x;

    /** y coordinate of the point **/
    private double y;

    /** Constructor to initialize point to (x, y, z) value **/
    public Point2d(double x, double y) {
        this.x = x;
        this.y = y;
    }

    /** No-argument constructor: defaults to a point at the origin **/
    public Point2d() {
        this(0, 0);
    }

    /** Return the x coordinate of the point **/
    public double getX() {
        // TODO: Fill in what to return here.
    }

    /** Return the y coordinate of the point **/
    public double getY() {
        // TODO: Fill in what to return here.
    }

    /** Set the x coordinate of the point to val**/
    public void setX(double val) {
        // TODO: Fill in what to do here.
    }

    /** Set the y coordinate of the point to val **/
    public void setY(double val) {
        // TODO: Fill in what to do here.
    }

    /** Return if two points are equal. **/
    @Override
    public boolean equals(Point2d otherPoint) {
        // TODO: Check if two points are equal. Remember that two points 
        // are equal if their x coordinates are equal and their y 
        // coordinates are equal.
    }

    /** 
     * Return Euclidean distance between two points with 
     * double-precision
     **/
    public double distanceTo(Point2d otherPoint) {
        // TODO: You need to use the distance formula here. To find the 
        // square root of a number, you might need to look it up online. 
        // A simple Google search
        // "square root number Java" should suffice.

        // Remember to only calculate the distance to another point if
        // the two points are not equal! A good way of checking point
        // equality is using the equals() method you defined above.
    }

    public static void main(String[] args) {
        // Create a point (0, 3) on the xy plane.
        Point2d p1 = new Point2d(0, 3);
        // Create a point (4, 0) on the xy plane.
        Point2d p2 = new Point2d(4, 0);
        // Calculate the distance between the two points. You should expect 
        // to see 5 from the Pythagorean theorem.
        // TODO: Write and print the calculation here.
    }
}
```

<hr>

<div class="two-container" style="width: 100%">
  <div style="text-align: center;"><a href="/java/fields-and-methods/index.html" class="btn btn--info" style="font-size:13pt">Previous Lesson</a></div>
  <div style="text-align: center;"><a href="/java/arrays-and-matrices/index.html" class="btn btn--info" style="font-size:13pt">Next Lesson</a></div>
</div>
