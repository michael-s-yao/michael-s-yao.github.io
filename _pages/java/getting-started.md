---
permalink: /java/getting-started/
author_profile: false
title: "Getting Started"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

> ## Hello, World!

Welcome to Java! Java is one of the most popular programming languages for both beginners and experts, and can be used in everything from finance and modeling to making both mobile and web-based apps. Today, we'll be learning how to write a simple program to print out ```Hello, World!```.

Let's first start off by opening any text editor (i.e. TextEdit if you're using a Mac), and creating a new file called ```HelloWorld.java```. In the file, we write

```java
public class HelloWorld {
    public static void main(String[] args) {
        
    }
}
```

In Java, all ```.java``` files are composed of a ```class``` which can be thought of as some object that has certain properties (called _fields_) and things that it can do (called _methods_). We will talk about these things later. This class has the name ```HelloWorld```, and this is a ```public```ly accessible class that will be able to be used by other people and other programs in the future. All of the fields and functions that are related to this ```HelloWorld``` class will be encased in ```{}``` brackets. 

Currently, the class has just one function: ```main()```. All functions can have inputs and outputs. For this function, we have only one input called ```args```. Since all we want to do with this program is print out a message, we don't need to worry about what ```args``` is for now. This ```main()``` method is found in **all** Java classes, and is the entry point into the where our code will begin. ```public``` means that this method ```main()``` is always able to be called by other programs, and ```void``` means that the function doesn't return anything: it will just do something (in this case, print out a message) and then terminate. We'll talk about what ```static``` means later.

> All Java classes can implement a method ```public static void main(String[] args)```.

Now that we have the backbone setup, let's print out the message we're interested in:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
The one line of code we added is saying "print the message ```Hello, World!```". Note that lines of code are always terminated by a semicolon ```;``` in Java.

That's it! All that's left is to run the program. Depending on the computer you have, there are a couple of ways to do this. If you have a MacBook, open up the Terminal app and run the following commands within the local folder:

```
$ javac HelloWorld.java    # Compiles the Java program
$ java HelloWorld          # Run the Java program
Hello, World!              # This is our output!
```

Only do this if you are familiar with how to use Terminal. If you're using a Windows computer or using a Mac but are unfamiliar with Terminal, I recommend looking into getting an [Integrated Developer Environment (IDE)](https://en.wikipedia.org/wiki/Integrated_development_environment), such as [Eclipse](https://www.eclipse.org/downloads/packages/), which is free to download. IDEs are essentially software that allow you to edit and run code within the same platform. 

Finally, if none of these options seem like a good fit, I will be integrating [```repl.it```](https://repl.it/~) plugins throughout each of the lesson modules so that you're able to run and modify code in real time. A ```repl.it``` plugin will typically look something like this:

<iframe height="600px" width="100%" src="https://repl.it/@myaomeow/HelloWorld?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

The main white box is where you can write your code. In this case, our ```class``` isn't called ```HelloWorld```, but rather ```Main```. Once we have written our code, we can run it by clicking the green arrow at the top. Any output from your program will show up in dark box after some information starting with ```java -classpath```, which basically is simply indicating that your program is still running. Try running the program above now.

A note of caution: if you choose to write your code in the ```repl.it``` plugins, make sure to save your code to a local text editor like Microsoft Word often. This is because if you accidentally close out of your web browser or refresh the page, then all of your code that you've written will be lost. 

<hr>

<div class="two-container" style="width: 100%">
  <div style="text-align: center;"><a href="/teaching-material/index.html#java" class="btn btn--info" style="font-size:13pt">Back to Main Page</a></div>
  <div style="text-align: center;"><a href="/java/fields-and-methods/index.html" class="btn btn--info" style="font-size:13pt">Next Lesson</a></div>
</div>
