---
permalink: /java/fields-and-methods/
author_profile: false
title: "Fields and Methods"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

Last time, we built a very simple Java ```class``` called ```HelloWorld``` that did one thing: print out a message ```Hello, World!```:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

> ## Fields

We can add new layers of complexity to this very simple program that will introduce some new concepts in Java. The first is a _field_: some property or attribute about the ```class```. To implement a field, our code might look something like

```java
public class HelloWorld {
    private String message; // This is our field!

    public static void main(String[] args) {
        
    }
}
```

We've taken out the print statement line in the ```main()``` function for convenience. Note that the field is called ```message```, and this time, it is only ```private```: this means that any outside program or person won't be able to read or change the value of this field in this class. Typically, most fields for classes are private. The field ```message``` has a variable type of ```String```, which we introduce in a [later lesson](/java/variables-conditionals-and-loops/index.html).

We want our ```class``` to be able to always have a message ```Hello, World!```. This tells us that we should set the value of the message to ```Hello, World!``` in the _constructor_ of the class. The _constructor_ is a special method of a ```class``` that is only executed once: when the instance of the ```class``` is first created.

```java
public class HelloWorld {
    private String message; // This is our field!

    /* This is our constructor. */
    public HelloWorld() {
        this.message = "Hello, World!";
    }

    public static void main(String[] args) {
        
    }
}
```

> ## Constructors

Note that the constructor has the same name as the class (this will always be the case). It can also take in input arguments between the parentheses, but here there are no input arguments. The constructor is doing one thing: setting the field ```message``` of ```this``` instance of a class, which we refer to as ```this.message```, equal to the ```String``` ```Hello, World!```. This will be done for every instance of this ```HelloWorld``` class.

> ## Methods

Remember that we said previously that the field ```message``` cannot be accessed by other programs right now, due to its ```private``` permissions. However, in some cases, we might want to be able to read the ```String``` in order to print out our message. To do this, we have to define a new _method_ that our ```class``` can do. A _method_ is just a function that the ```class``` can perform:

```java
public class HelloWorld {
    private String message; // This is our field!

    /* This is our constructor. */
    public HelloWorld() {
        this.message = "Hello, World!";
    }

    /* This is a method. */
    public String getMessage() {
        return this.message;
    }

    public static void main(String[] args) {
        
    }
}
```

We've defined a new method called ```getMessage()```. This method has ```public``` permissions, and it will return (output) a ```String```. It will return the ```message``` associated with ```this``` instance of the class that we're working with, which again, we refer to as ```this.message```.

> ## Class Instances

All that's left to do now is print our message ```Hello, World!``` in the main function:

```java
public class HelloWorld {
    private String message;

    public HelloWorld() {
        this.message = "Hello, World!";
    }

    public String getMessage() {
        return this.message;
    }

    public static void main(String[] args) {
        HelloWorld abc = new HelloWorld();

        System.out.println(abc.getMessage());
    }
}
```

What are these two new lines of code in ```main()``` doing? The first line is declaring the existence of a ```new``` instance of our ```class``` called ```HelloWorld```: the same one that we went through all the trouble of defining its fields and methods for above. Declaring new instances of a ```class``` always follows the same format:

```java
NameOfClass variableName = new NameofClass(anyInputArgumentsHere);
```

In constructing this new ```HelloWorld``` instance called ```abc```, the constructor method also set the ```message``` of ```abc``` equal to ```Hello, World!```. Therefore, when the method ```getMessage()``` is called on ```abc```, it will return ```Hello, World!```. The last line therefore tells our program to print the message of ```abc```, which should be ```Hello, World!``` if our program works correctly.

Let's run this program again using MacOS Terminal, just like we did last time.

```
$ javac HelloWorld.java
$ java HelloWorld
Hello, World!
```

This gives us the expected output, so our program works!

Why did we go through all the trouble of defining all these methods and fields? For a simple program that just prints our ```Hello, World!```, defining these features was probably not needed. However, as our Java programs get more and more complicated, we will inevitably use a bunch of different fields and methods. Today was more of an introduction to what these things are.

> ## Comments

One last thing. In some of our above code samples, you may have seen phrases or sentences prefixed with ```//``` or encased by ```/* */``` or ```/** **/```. These things are called _comments_, and are written solely for being able to read and understand the code. The computer and program ignores comments entirely.

<hr>

<div class="two-container" style="width: 100%">
  <div style="text-align: center;"><a href="/java/getting-started/index.html" class="btn btn--info" style="font-size:13pt">Previous Lesson</a></div>
  <div style="text-align: center;"><a href="/java/variables-conditionals-and-loops/index.html" class="btn btn--info" style="font-size:13pt">Next Lesson</a></div>
</div>
