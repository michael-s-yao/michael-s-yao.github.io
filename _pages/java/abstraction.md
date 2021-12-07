---
permalink: /java/abstraction/
author_profile: false
title: "Abstraction"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

> ## Waking Up in the Morning

Waking up in the morning is something that everyone is familiar with. However, there are a lot of things that go into waking up: drinking a glass of water, brushing your teeth, using the restroom, and taking a shower are some of the things that might make up your morning routine. Each of these individual tasks might have additional components to them as well. As an example, drinking a glass of water involves the actions of (1) getting a glass, (2) filling the glass with water, and (3) holding up the glass to your mouth in order to drink. However, if someone asks you how your morning was, you typically don't go into all of the details of these different tasks. However, based on the "success" of how these different tasks were performed, you might respond with either "It was good." or "It was horrible!"

> ## Abstraction

This simple example of waking up illustrates probably one of the most important concepts in programming with Java and other [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) languages. The idea is in trying to execute some complex task, such as waking up in the morning, we want to break it the task down into smaller pieces that are more manageable for us to approach. In terms of programming, these smaller pieces could be Java ```classes``` or functions.

Abstraction is not just "some idea" to throw around. Good abstraction makes tackling programming problems easy that would otherwise be difficult or even impossible. It makes your code easier to read, and prevents you from repeating code over and over again.

This description of abstraction is very conceptual, so let's see an example of how to implement this in an actual program.

> ## Bit++

_This problem is adapted from [Codeforces](http://codeforces.com/problemset/problem/282/A)._

In the fictional world of Bitland, their most popular programming language is called ```Bit++```. 

```Bit++``` is very peculiar and complicated. It has exactly one variable, called ```x```. There are two operations that we can do with ```x```:

  1. Operation ``++`` increases the value of ```x``` by ```1```.
  1. Operation ``--`` decreases the value of ```x``` by ```1```.

A statement in language ```Bit++``` is a sequence, consisting of exactly one operation, one variable ```x```, and one nonnegative number that represents how much to increase or decrease by. The statement is written without spaces, that is, it can only contain characters `+`, `-`, `x`, and our standard decimal digits. Executing a statement means applying the operation it contains.

A program in ```Bit++``` is a sequence of statements separated by spaces, each of which needs to be executed. Executing a program means executing all the statements it contains.

You're given a program in language ```Bit++```. The initial value of ```x``` is the integer in the first argument given. Execute the program and print out the final value of ```x```. Here are some examples of what this program will look like:

```
$ 2 x++3 --x1              // Input
4                          // Output (2 + 3 - 1 = 4)
$ 8 x++574 ++x4 --x1000    // Input
-414                       // Output (8 + 574 + 4 - 1000 = -414)
```

> ## Abstraction Using Class Structures

Woah, that was a lot of information to take in! In order to even begin to think about how to approach this problem, we need to break it down into smaller, more manageable problems.

The first thing we need to figure out is how to convert a ```String``` sequence command in this ```Bit++``` language into things that we can actually utilize. Based on the information given in the problem, we know that there are essentially four different allowed types of commands:

  1. ```++xn```, where ```n``` is some nonnegative integer.
  2. ```x++n```, where ```n``` is some nonnegative integer.
  3. ```--xn```, where ```n``` is some nonnegative integer.
  4. ```x--n```, where ```n``` is some nonnegative integer.

Commands 1 and 2 should be treated the same, and commands 3 and 4 should be treated the same. When thinking about a command, we care about two things: (1) are we incrementing or decrementing ```x```, and (2) by how much? We can represent these types of commands using a Java ```class``` called ```CodeLine```, which the appropriate fields to reflect these two things that we care about:

```java
public class CodeLine {
    /*
     * op represents whether we increment or decrement. +1 corresponds to
     * the ++ operator, while -1 corresponds to the -- operator.
     * Initialize the value of op as 0.
     */
    private int op = 0;

    /* 
     * val represents the amount to increment or decrement, and must be
     * nonnegative. Initialize the value of val as 0.
     */
    private int val = 0;

    /* Constructor. */
    public CodeLine() {
        // TODO
    }
}
```

Using this ```class``` structure, we can take in a ```String``` command in ```Bit++``` language format and set the ```op``` and ```val``` fields appropriately.

```java
public class CodeLine {
    /*
     * op represents whether we increment or decrement. +1 corresponds to
     * the ++ operator, while -1 corresponds to the -- operator.
     * Initialize the value of op as 0.
     */
    private int op = 0;

    /* 
     * val represents the amount to increment or decrement, and must be
     * nonnegative. Initialize the value of val as 0.
     */
    private int val = 0;

    /*
     * Constructor takes in a command sequence called arg in Bit++ language
     * format and sets the op and val fields appropriately.
     */
    public CodeLine(String arg) {
        // The operator that determines whether we increment or decrement
        // is determined by the first three characters of the command,
        // which is some combination of the characters '+', '-', and 'x'.
        String prefix = arg.substring(0, 3);

        // The number that we increment or decrement by is everything after
        // the first three characters of the command. We will convert this
        // String representation of the number into an integer, and set
        // the field val equal to num.
        this.val = Integer.parseInt(arg.substring(3));
    	
        // Handle case where the command is of the form "++xn" or "x++n".
        // || stands for "or".
    	if (prefix.equals("++x") || prefix.equals("x++")) {
    		this.op = 1;
    	}
    	
        // Handle case where the command is of the form "--xn" or "x--n".
    	else if (prefix.equals("--x") || prefix.equals("x--")) {
    		this.op = -1;
    	}
    	
        // In any other case, the command is not formatted correctly.
        // We will just set the field op equal to 0 in this case. 
        // This means that in the future, if we see this.op == 0, this
        // means that an error occurred.
    	else {
    		this.op = 0;
    	}
    }
}
```

If you haven't seen the ```Integer.parseInt()``` or ```substring()``` functions before, I recommend checking out [this link](https://www.javatpoint.com/java-integer-parseint-method) and [this link](https://beginnersbook.com/2013/12/java-string-substring-method-example/), respectively. Finally, we may be interested in being able to read what the fields ```op``` and ```val``` are in the future, so let's define the appropriate methods ```getOp()``` and ```getVal()``` for this:

```java
public class CodeLine {
    /*
     * op represents whether we increment or decrement. +1 corresponds to
     * the ++ operator, while -1 corresponds to the -- operator.
     * Initialize the value of op as 0.
     */
    private int op = 0;

    /* 
     * val represents the amount to increment or decrement, and must be
     * nonnegative. Initialize the value of val as 0.
     */
    private int val = 0;

    /*
     * Constructor takes in a command sequence called arg in Bit++ language
     * format and sets the op and val fields appropriately.
     */
    public CodeLine(String arg) {
        // The operator that determines whether we increment or decrement
        // is determined by the first three characters of the command,
        // which is some combination of the characters '+', '-', and 'x'.
        String prefix = arg.substring(0, 3);

        // The number that we increment or decrement by is everything after
        // the first three characters of the command. We will convert this
        // String representation of the number into an integer, and set
        // the field val equal to num.
        this.val = Integer.parseInt(arg.substring(3));
    	
        // Handle case where the command is of the form "++xn" or "x++n".
        // || stands for "or".
    	if (prefix.equals("++x") || prefix.equals("x++")) {
    		this.op = 1;
    	}
    	
        // Handle case where the command is of the form "--xn" or "x--n".
    	else if (prefix.equals("--x") || prefix.equals("x--")) {
    		this.op = -1;
    	}
    	
        // In any other case, the command is not formatted correctly.
        // We will just set the field op equal to 0 in this case. 
        // This means that in the future, if we see this.op == 0, this
        // means that an error occurred.
    	else {
    		this.op = 0;
    	}
    }

    /* Returns the value of the field op. */
    public int getOp() {
    	return this.op;
    }
    
    /* Returns the value of the field val. */
    public int getVal() {
    	return this.val;
    }
}
```

This wraps up our defined ```class``` called ```CodeLine```. Using this Java ```class``` that we've defined, we can now process a single command sequence in our ```Bit++``` language. The next thing we want to do is finally be able to execute a sequence of commands to perform a series of computations to compute the desired result.

> ## Abstraction Using Methods

We're now ready to define the main ```class``` for our program, which we'll call ```BitPlusPlus```. Again, we'll use our fields to keep track of the things we care about, which are the final result, the raw ```String``` commands, and the command sequences that we converted into ```class``` instances of ```CodeLine``` that we defined above. To keep track of the command sequences, we'll be using the arrays and lists that we talked about [last time](/java/lists-and-arrays/index.html).

```java
import java.util.ArrayList;

public class BitPlusPlus {
    /* 
     * Keep track of the raw String arguments that were passed into 
     * our program.
     */
    private String[] rawArgs;

    /* Keep track of the result of our calculations. */
    private int result;
	
    /* 
     * Keep track of the command sequences that we generated from the
     * raw String arguments.
     */
    private ArrayList<CodeLine> code;
}
```

We can initialize all of these fields using a constructor by using an array of ```String``` input arguments that we assume are in the form described in the original problem.

```java
import java.util.ArrayList;

public class BitPlusPlus {
    /* 
     * Keep track of the raw String arguments that were passed into 
     * our program.
     */
    private String[] rawArgs;

    /* Keep track of the result of our calculations. */
    private int result;
	
    /* 
     * Keep track of the command sequences that we generated from the
     * raw String arguments.
     */
    private ArrayList<CodeLine> code;

    /* Constructor that initializes all of our different fields. */
    public BitPlusPlus(String[] args) {
        // rawArgs field will be a String array of all of our
        // different command sequences. Because we only want
        // commands, we will not include the first element of args,
        // which is simply the starting value of x.
        this.rawArgs = new String[args.length - 1];
        for (int i = 1; i < args.length; i++) {
            this.rawArgs[i - 1] = args[i]; 
        }

        // Initialize the value of the result field to be first
        // element of args.
        this.result = Integer.parseInt(args[0]);

        // Create a new ArrayList of CodeLines.	
        this.code = new ArrayList<CodeLine>(args.length);
    }
}
```

When we startup our program, there are three things that we want to do:

  1. Create a new program ```class``` instance of ```BitPlusPlus```.
  2. Parse through the given ```String``` input commands and convert them to ```CodeLine```s. To accomplish this, we can define a ```parse()``` method.
  3. Compute the desired result. To accomplish this, we can define a ```compute()``` method.

Assuming we've defined all of these relevant functions, then our ```main()``` program can take care of the rest. The code snippet might look something like

```java
...
    public static void main(String[] args) {
        // Create the new instance of the Bit++ program.
        BitPlusPlus program = new BitPlusPlus(args);

        // If we're able to successfully parse through the input 
        // argument string...
        if (program.parse() == 0) {
            // ...then compute and print out the result.
            System.out.println(program.compute());
        }
        // Otherwise, let the user know that there's an error.
        else { System.out.println("SYNTAX ERROR"); }
    }
...
```

Now, all that remains is to define the ```parse()``` and ```compute()``` functions. Altogether, the ```class``` would look something like this:

```java
import java.util.ArrayList;

public class BitPlusPlus {
    /* 
     * Keep track of the raw String arguments that were passed into 
     * our program.
     */
    private String[] rawArgs;

    /* Keep track of the result of our calculations. */
    private int result;
	
    /* 
     * Keep track of the command sequences that we generated from the
     * raw String arguments.
     */
    private ArrayList<CodeLine> code;

    /* Constructor that initializes all of our different fields. */
    public BitPlusPlus(String[] args) {
        // rawArgs field will be a String array of all of our
        // different command sequences. Because we only want
        // commands, we will not include the first element of args,
        // which is simply the starting value of x.
        this.rawArgs = new String[args.length - 1];
        for (int i = 1; i < args.length; i++) {
            this.rawArgs[i - 1] = args[i]; 
        }

        // Initialize the value of the result field to be first
        // element of args.
        this.result = Integer.parseInt(args[0]);

        // Create a new ArrayList of CodeLines.	
        this.code = new ArrayList<CodeLine>(args.length);
    }

    /* 
     * Parses though the String input commands in the field rawArgs and 
     * converts them to Codeline class instances. This method returns 0
     * if parsing was successful, and returns -1 if parsing was
     * unsuccessful.
     */
    private int parse() {
        // If there's nothing to parse, then return -1.
        if (this.rawArgs == null) { return -1; }
		
        // For each String command in rawArgs, convert it to a CodeLine
        // class instance and add it to the ArrayList field this.code.
        for (int i = 0; i < this.rawArgs.length; i++) {
            this.code.add(new CodeLine(this.rawArgs[i]));

            // If the format was wrong, then indicate that the
            // parsing failed.	
            if (this.code.get(i).getOp() == 0) { return -1; }
        }

        // If we got to this point, then we can return 0 to indicate that
        // this function completed successfully.
        return 0;
    }

    /* Computes and returns the desired result. */
    private int compute() {
        // Iterate over all of the code sequences
        for (int i = 0; i < this.code.size(); i++) {
            // Update the result based on the command sequence.
            this.result += this.code.get(i).getOp() * 
                    this.code.get(i).getVal();
        }

        return this.result;
    }

    public static void main(String[] args) {
        // Create the new instance of the Bit++ program.
        BitPlusPlus program = new BitPlusPlus(args);

        // If we're able to successfully parse through the input 
        // argument string...
        if (program.parse() == 0) {
            // ...then compute and print out the result.
            System.out.println(program.compute());
        }
        // Otherwise, let the user know that there's an error.
        else { System.out.println("SYNTAX ERROR"); }
    }
}
```

Altogether, assuming that our ```BitPlusPlus.java``` and ```CodeLine.java``` source code files are in the same ```src``` Java Project directory, we should have a working ```Bit++``` program! Let's try it out using the examples from above:

```
$ javac *.java                              // Compiles all .java src files
$ java BitPlusPlus 2 x++3 --x1              // Input
4                                           // Output (2+3-1=4)
$ java BitPlusPlus 8 x++574 ++x4 --x1000    // Input
-414                                        // Output (8+574+4-1000=-414)
```

> ## Exercises

### Problem 1

_This problem is adapted from [Codeforces](http://codeforces.com/problemset/problem/59/A)._

Chad is very upset that some people mix uppercase and lowercase letters in one word. That's why he decided to invent an extension for his favorite browser that would change the letters' register in every word so that it either only consisted of lowercase letters or, vice versa, only of uppercase ones. **He wants as little as possible letters to be changed in the original word.** For example, the word "HoUse" must be replaced with "house", and the word "ViP" with "VIP". If a word contains an equal number of uppercase and lowercase letters, you should replace all the letters with lowercase ones. For example, "maTRIx" should be replaced by "matrix". Your task is to use the given method on one given word.

_Hint: In writing this program, you may find yourself trying to list out all of the possible characters from_ ```'a'``` to ```'z'```_. Do not do this! There is a sleeker way of writing this code, and it involves using the fact that ```char```s can be converted to ```int```s and back using an [ASCII conversion table](https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html)._

```java
public class Problem1 {
    // TODO: Define any relevant fields and methods here as needed.

    public static void main(String[] args) {
        Problem1 problem = new Problem1("THIS IS A STRING");
        
        // TODO: Add any relevant code here as needed. Feel free
        // to change THIS IS A STRING above to whatever string
        // you want!
    }
}
```

<hr>

<div class="two-container" style="width: 100%">
  <div style="text-align: center;"><a href="/java/lists/index.html" class="btn btn--info" style="font-size:13pt">Previous Lesson</a></div>
  <div style="text-align: center;"><a href="/java/game-of-life/index.html" class="btn btn--info" style="font-size:13pt">Next Lesson</a></div>
</div>
