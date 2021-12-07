---
permalink: /computing-systems/introduction/
author_profile: false
title: "Introduction to Computing Systems"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

Welcome to computing systems! Our goal in these set of modules is to break down exactly how computers work _under the hood_. This means that we want to understand what the terms "Hard Drive," "RAM," "caches," "computer memory", and others mean. In order to accomplish this goal, we will be using a programming language called C.

> ## Why Learn C?

Many students initially begin studying computer science because they became interested in the cool things you can do with computers. You can watch Youtube videos, play [League of Legends](https://na.leagueoflegends.com/en-us/), and download [outdated memes](/java/stacks-and-queues/index.html#queues) to share with others. However, if you're interested in improving the Youtube user interface or programming games such as LoL in the future, all of these fundamentally require an understanding of how computers work under the hood. We will see why this is the case.

Perhaps the best way of illustrating the importance of understanding how computers fundamentally work is through an example. Since 2011, [Minecraft](https://www.minecraft.net/en-us/) has been one of the most popular computer video games to there, and is a first-person, creative adventure game. When the game was initially released, it was programmed in Java, one of the most common introductory languages taught in computer science. However, people quickly realized that as a result, Minecraft ran incredibly slowly on older computers, and suffered from poor [render time](https://en.wikipedia.org/wiki/Rendering_(computer_graphics)), which can be thought of as a measure of the speed and efficiency of the code for Minecraft.

To improve the performance of the game, the Minecraft creators rewrote their entire game in C++ instead of Java language, eventually releasing their work as [Windows 10 Edition](https://www.minecraft.net/en-us/store/minecraft-windows10/) of Minecraft in 2015. C++ is another computer programming language that is very closely related to C. As a result of this change, there was a _huge_ boost in performance with regards to the render time:

<iframe width="560" height="315" src="https://www.youtube.com/embed/rJQ9EptEi9I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

_Java Minecraft on left, C++ Minecraft on right. Skip to about 1:06 mark for a good example in the difference in render times._

Coding languages such as [Python](https://www.python.org/) are also written in C! The point is that **_all_ computer programmers should have a working knowledge of how computers work underneath the hood** in order to write secure, fast, and effective code.

> ## Bits and Bytes

Because C deals with giving instructions to your machine code, it is important to have a preliminary understanding of what bits and bytes are. I explain the basic idea [here](/java/variables-conditionals-and-loops/index.html#bytes); although it is in the context of Java, the basic idea is still the same.

> ## Computer Abstraction

If you look up pictures of [hard drives](https://www.google.com/search?q=hard+drive&hl=en&sxsrf=ALeKk017Gd3cFvvkn6scPOJyvzVIl9p1ww:1596677784129&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj02ZKhuIXrAhVJ5awKHZpUBRcQ_AUoAnoECBcQBA&biw=1792&bih=982) on Google, it is clear that these devices that store computer memory are extremely complicated. So, when we're talking about the memory storage unit of a computer, we're going to represent it as a simple array of some finite size. For example, let's assume that a computer has a 12-byte hard drive, meaning that it can store only a total of 12-bytes:

![introduction-1](/assets/images/computer-systems/introduction-1.png)

Each of the little squares can store up to one byte of information. Furthermore, each of the squares also have a **memory address** associated with them, which can be thought of as a house address, allowing us to refer to particular locations in the memory. As an example, ```0x800``` is the first "residential address" in the this array. Its immediate neighbor next to it is ```0x801```. 

In the series of examples below, we will use this model to illustrate some of the typical computer operations that might be happening under the hood.

> ### Example 1: Instantiating an ```int```

Let's say that we were writing a computer program in Java that asked us to create an integer ```x``` that was equal to ```3```:

```java
public static void someFunction() {
   // Create an integer x = 3
   int x = 3;
}
```

Let's think about what your computer is doing under the hood at this line. When this function is executed, your program is having a conversation with your computer that goes somewhat like this:

```
Program: Hi Computer, I'd like to store an integer, 4 bytes large.
Computer: Sure thing, let me check if I have space to store the integer.
```

At this point, your computer will look into its hard drive and see if it has enough space to store an integer. Since the hard drive has 12 bytes available and an integer only takes up 4, we can confirm that we do have enough space!

```
Computer: Good news! I have enough space. Is there a value for the integer?
Program: Yes, I would like to set it equal to 3.
Computer: Ok, let me perform this task.
```

At this point, the computer will find an available space in the memory to store this integer:

![introduction-2](/assets/images/computer-systems/introduction-2.png)

```
Computer: Ok, I have stored the number 3 at the memory address 0x800.
Program: Thank you! That is all I need for now.
```

The program will then store the address ```0x800``` and associate it with the variable ```x```, such that whenever ```x``` needs to be accessed or modified in the future, we will be able to do so. Note that because an integer is 4 bytes large and each square represents a byte, we need 4 of the squares in order to store this single integer.

There are so many things that are going on in just this one line of code! In programming languages like Java and Python that you may already be used to, these operations are taken care of by just a single line of code: ```int x = 3;``` (or ```x = 3``` in Python). However, in C, we have to control and explicitly program each of these operations one by one. For this reason, we refer to C as "closer to machine code," meaning that it talks more directly with the computer hardware: what you see is what you get.

> ### Example 2: Garbage Collection

Another good example of thinking about what happens under the hood is what happens after the program is finished executing. Continuing with the example from above, after we're done with our program, we obviously don't need to continue storing the variable ```x``` or its value of ```3```. Implicitly, after a program finishes or a ```return``` statement is made, the computer has to "clean up the garbage" and clear the memory of all of the remaining variables that are still remaining in storage:

```
Program: I've finished my program! Please get rid of all my local variables.
Computer: Understood, thanks for letting me know.
```

At this point, the computer will look for all of the local variables associated with the program, which in this case is only the integer ```3```. It will then free up this memory space such that it can be used in the future for other programs. 

In languages such as Java and Python, we don't need to even worry about operations like this, but in C, we will explicitly need to tell our computer to clean up the remaining garbage from a program.

> ### Getting a Bigger Picture

We have talked about two things that languages such as Python and Java implicitly do that we have to consciously think about when programming in C:

  1. Checking if an array index is out of bounds.
  2. Confirming that variables are assigned to the right variable type.
  3. Checking uninitialized variable values.
  4. Dereferencing null pointers. (We haven't yet talked about dereferencing or pointers yet, so don't worry about this one if it doesn't make sense.)

The point is that in Python and Java, life was simple. There were a lot of computer operations that were _abstracted away_ such that we didn't need to worry about them. However, in C, this is not the case: we have to tell the computer exactly what to do, and again, _what we see is what we get_.

This may seem like a bunch of unnecessary work, but the benefit is that we have a lot more freedom and independence to control exactly what our computer does, which can lead to faster and more efficient programs if done properly. For example, a group did a comparison between Java and C++ (which is a close relative of C) program performance for a series of common problems in computer programming [here](https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/java.html). You can see that in general, C++ seems to run faster and more efficiently than Java.

> ## Moving Forward

Perhaps the biggest takeaway when dealing with computer systems is that we need to have a good _picture_ of what is happening under the hood. This means drawing schematics and diagrams to clearly illustrate out the logic of what your code is doing. This is especially important because you need to control every aspect of what your computer does, as we have discovered above. I _cannot_ stress enough how important it is of approaching programming problems through sketching ideas out first! Spending an extra hour planning can potentially save you days on debugging code with incorrect logic. 
