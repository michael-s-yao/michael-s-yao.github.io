---
permalink: /computing-systems/structs-headers/
author_profile: false
title: "```struct```s and ```.h``` Header Files"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

In this module, we will discuss ```struct```s and header ```.h``` files and how they relate to programming in C.

> ## ```struct```s

In C programming, a ```struct``` (which is short for _structure_) is a user-defined data type. A ```struct``` can be thought of as analogous to a ```class``` in Java, but only fields and no ```struct```-specific methods. ```struct```s are often helpful for when we want to instantiate multiple instances of a particular user-defined "class-like" object, similar to object-oriented programming techniques. For example, we can declare the following ```struct``` to represent a node in a [linked list]((/java/lists/index.html#linkedlists)):

```c
struct node_t {
    void *payload;
    struct node_t *next;
    char letter;
};
```

In this particular ```struct```, we can see that it has three fields associated with it:

  1. A ```void *``` pointer, which presumably points to a memory address where the payload of the ```node_t``` is being stored.
  2. A ```node_t *``` pointer to the next ```node_t``` of the linked list.
  3. Some random ```char```.

One important note about ```struct```s is that you _cannot_ initialize ```struct``` members in the ```struct``` definition itself. You can only declare the existence of those fields. If we want to be able to use this particular ```struct``` in a C program, we can do so in the following way:

```c
int main(void) {
    struct node_t node = *(struct node_t *)malloc(sizeof(struct node_t));
    return 0;
}
```

Notice that every time we refer to this particular ```struct```, we have to refer to it as a ```struct node_t```, which can get tedious and make our code less easy to read. In order to avoid this, we can modify our initial ```struct``` definition:

```c
typedef struct node_t {
    void *payload;
    struct node_t *next;
    char letter;
} node_t;
```

The ```typedef``` keyword tells the program that we're trying to define a new type of variable that in this case happens to be a ```struct```. The full, "technically" correct name of the new variable type is ```struct node_t```, but in ```node_t``` name in the last line after the ```}``` end bracket tells the program that we can refer to this new variable type as simple ```node_t``` in our code. Therefore, using this definition instead, creating an instance of this ```struct``` now looks something like this:

```c
int main(void) {
    node_t node = *(node_t *)malloc(sizeof(node_t));
    return 0;
}
```

Much better!

> ## Accessing ```struct``` Fields

Accessing ```struct``` fields differs depending on whether we want to access by value or access by pointers.

> ### Access by Value

Let's assume that we are dealing with an _actual_ ```struct```, meaning that we have a variable that is referring to the entire ```struct``` itself. For example,

```c
int main(void) {
    node_t node = *(node_t *)malloc(sizeof(node_t));
    return 0;
}
```

In this case, we can access the fields of the ```struct``` using the ```.``` operator, which is very similar to the convention used in computer languages like Java and Python:

```c
node_t node = *(node_t *)malloc(sizeof(node_t));
void *p_ptr = node.payload;
node_t *next_ptr = node.next;
char l = node.letter;
```

> ### Access by Pointers

We can also access the fields of a ```struct``` when only given a pointer to the ```struct```. An example of this situation would be

```c
int main(void) {
    node_t *node_ptr = (node_t *)malloc(sizeof(node_t));
    return 0;
}
```

Notice that in this case, we did not dereference the ```node_t *``` pointer on the right hand side, so we now are working with a _pointer_ to the ```node_t``` rather than the actual ```node_t``` itself. In this case, we do _not_ use the ```.``` operator, but rather the ```->``` operator. For example,

```c
node_t *node_ptr = (node_t *)malloc(sizeof(node_t));
void *p_ptr = node_ptr->payload;
node_t *next_ptr = node_ptr->next;
char l = node_ptr->letter;
```

> ## Size of ```struct```s

On 64-bit systems, the size of a ```struct``` is equal to the sum of the sizes of its fields, _rounded **up** to the nearest 8 bytes_. For example, consider the linked list ```node_t``` ```struct``` that we defined above:

```c
typedef struct node_t {
    void *payload;
    struct node_t *next;
    char letter;
} node_t;
```

The size of a pointer on a 64-bit system is 8 bytes, so both the ```void * payload``` pointer and ```struct node_t *next``` pointer contribute 8 bytes each. A ```char``` is only 1 byte, and so the sum of sizes of the individual fields of the ```node_t``` ```struct``` is 8+8+1=17 bytes. Then, we round up to the size to the nearest 8 bytes, which in this case is 24 bytes.

```c
printf("Size of node_t struct is %lu bytes.\n", sizeof(node_t));
```

This code would print out

```bash
$ Size of node_t struct is 24 bytes.
```

<div class="notice--warning">
<p style="font-size:13pt"><strong>Problem 1:</strong> What would be the size of the <code class="language-plaintext highlighter-rouge">node_t</code> <code class="language-plaintext highlighter-rouge">struct</code> if the <code class="language-plaintext highlighter-rouge">void *payload</code> field is removed? What about if only the <code class="language-plaintext highlighter-rouge">struct node_t *next</code> field is removed? What about the <code class="language-plaintext highlighter-rouge">char letter</code> field?</p>
<p style="font-size:13pt;text-align:right"><em>Answer: In all three cases, the size of </em><code class="language-plaintext highlighter-rouge">node_t</code><em> would be 16 bytes.</em></p>
</div> 

> ## Header Files

On a completely separate note unrelated to the idea of ```struct```s is the concept of _header ```.h``` files_, which often contain C function declarations and [macro](https://developerinsider.co/preprocessor-directives-c-programming/) definitions shared between several source files. There are two main types of header files: the files that are user-defined and files that come with the standard C compiler.

```.h``` header files that come with our C compiler are things like ```stdio.h```, ```stdlib.h``` and ```stdint.h```, among others. The purpose of these header files are to provide the standard library implementations of functions such as ```printf()```, ```malloc()```, ```free()```, and others. In order to include these types of header files, we write the following at the top of our C source code file:

```c
#include <header.h>
```

Here, ```header``` can be ```stdio```, ```sodlib```, ```stdint```, or really any header file that is under this class.

```.h``` header files that are user defined serve the purpose of declaring functions that we will need to implement in our main C program. The utility of writing header files is to help organize the structure of large C programs and to make importing common C function structures easy across different platforms. The easiest way to think of header files as  similar to Java ```interface```s, which are described [here](/java/abstract-data-types/index.html).

Suppose that we wrote a header ```.h``` file with the file name ```myHeader.h```. To include this header file in a C program, we would include this macro at the top of the source code:

```c
#include "myHeader.h"
```

The structure of user-defined header files largely follows a similar pattern in most cases:

```c
#ifndef _MYHEADER_
#define _MYHEADER_

// Define any macros here.

// Declare any structs here. You can also implement the struct here too 
// if you'd like.

// Declare any functions here. Do not implement them.
#endif
```

The purpose of the ```#ifndef _MYHEADER_```, ```#define _MYHEADER```, and ```#endif``` macros is so that if the header file is accidentally included twice for whatever reason, the C compiler will not throw an error at us.

It is also good practice to comment and explain any declarations you make in header files so that they are readable. An example of a header file can be found in the ```repl``` below [here](/computing-systems/structs-headers/index.html#example), in the ```deque.h``` file.

> ## Macros

Macros are a feature of C programming that have largely fallen out of favor because of poor readability in many cases. Nonetheless, they can sometimes act as a useful programming tool in certain cases. There is an excellent article that discusses the idea of macros linked [here](https://developerinsider.co/preprocessor-directives-c-programming/) that I strongly encourage you to check out.

> ## Example

To illustrate some of things that we've learned about regarding ```struct```s and header files, let's take a look at the program below, which attempts to implement a [deque](/java/stacks-and-queues/index.html#deque) using a user-defined [linked list](/java/lists/index.html#linkedlists).

<div class="notice--warning">
<p style="font-size:13pt"><strong>Problem 2:</strong> Read through the following <code class="language-plaintext highlighter-rouge">repl</code> and comment the <code class="language-plaintext highlighter-rouge">.c</code> source code to understand the implementation. What is the <code class="language-plaintext highlighter-rouge">main()</code> driver program doing?</p>
</div> 

<iframe height="1000px" width="100%" src="https://repl.it/@myaomeow/Structs?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
