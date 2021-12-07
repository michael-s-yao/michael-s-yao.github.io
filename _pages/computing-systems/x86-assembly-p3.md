---
permalink: /computing-systems/x86-assembly-p3/
author_profile: false
title: "Reading and Writing x86 Assembly"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

Now that we have an idea of the basics of what goes into assembly code, let's try actually reading and writing assembly ourselves! For our reference, here's a [link](/computing-systems/x86-assembly-p2/index.html#common-x86-assembly-commands) to the list of common instructions that we talked about last time.

> ## Practice Reading Assembly

As with all programming languages, the best way to familiarize ourselves with assembly code is to read a _bunch_ of assembly code! In this way, we'll be able to more easily identify common assembly function structures and decode what the assembly code is doing.

To go over some practice examples, let's go over the following set of functions, which are currently written in C. We'll discuss each of them one by one. Feel free to follow along using the following code sample.

<iframe height="1200px" width="100%" src="https://repl.it/@myaomeow/AssemblyTest?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

> ### Converting from C Code to Assembly

On Linux systems, assembly code is written in ```.s``` files. This will be important when we eventually begin writing our own assembly code from scratch. If we're starting from a ```.c``` C program file, there are two common ways to convert the C code in assembly code:

  1. After compiling the ```.c``` program using ```gcc``` compiler, run the terminal command ```objdump -d xxxxx```, where ```xxxxx``` is what the name of the original ```.c``` is. In our case, we will run the command ```objdump -d main```. We haven't formally talked about compile C code just yet, so don't worry if you don't know what ```gcc``` is just yet. Effectively, we'll be running the two lines ```gcc main.c``` and then ```objdump -d main``` in terminal. (If you are using the ```repl.it``` plugin from above, pressing the green "Run" button does the same thing as running the ```gcc main.c``` command.)
  2. After compiling the ```.c``` program (using the same method as described above), we can instead use the standard C debugger ```gdb``` to print out the relevant assembly code. The benefit of using this method is that we avoid printing out the C program initialization functions like ```__libc_csu_init```, ```_start```, and ```deregister_tm_clones```, among others, that we have no interest in actually parsing through. To do this, instead of running ```objdump -d main```, we'll run the command ```gdb main``` first to boot up the ```gdb``` debugger, and then run the command ```disassemble xxxxx```, where ```x``` is the name of the function we want to disassemble. For example, if we want to disassemble the function ```simpleInt()``` using this method, we'd run the following set of commands.

```
$ gcc main.c
$ gdb main
$ (gdb) disassemble simpleInt
```

There are other ways of converting from C code to assembly (and also vice versa), but for our discussion right now, this will prove sufficient.

> ### Starting Easy: Returning an Integer

Let's first start by taking a look at the ```simpleInt``` function, which simply returns the integer ```6```. Let's run ```simpleInt``` in the ```main()``` function:

```c
int simpleInt(void) {
    return 6;
}

int main(void) {
    return simpleInt();
}
```

After compiling and disassembling, the relevant segments of assembly code that correspond to this C code are here:

```scss
00000000004004f0 <simpleInt>:
  4004f0:   55                      push   %rbp
  4004f1:   48 89 e5                mov    %rsp,%rbp
  4004f4:   b8 06 00 00 00          mov    $0x6,%eax
  4004f9:   5d                      pop    %rbp
  4004fa:   c3                      retq   
  4004fb:   0f 1f 44 00 00          nopl   0x0(%rax,%rax,1)

0000000000400640 <main>:
  400640:   55                      push   %rbp
  400641:   48 89 e5                mov    %rsp,%rbp
  400644:   48 83 ec 10             sub    $0x10,%rsp
  400648:   c7 45 fc 00 00 00 00    movl   $0x0,-0x4(%rbp)
  40064f:   e8 9c fe ff ff          callq  4004f0 <simpleInt>
  400654:   48 83 c4 10             add    $0x10,%rsp
  400658:   5d                      pop    %rbp
  400659:   c3                      retq   
  40065a:   66 0f 1f 44 00 00       nopw   0x0(%rax,%rax,1)
```

The six-digit numbers before every instruction can be thought of as the "numbering" for each of the instructions and functions to be able to easily reference them. The pairwise hexadecimal numbers are the _machine code_ associated with each instruction, which are the actual bytes that the computer will use to execute the corresponding instruction. Of course, to us as programmers, machine code is just a bunch of illegible bytes. The things that we are most interested in are the commands at the end of each of line.

As we can see in the ```<simpleInt>``` function, the first two pair of instructions involve setting up the stack pointers in the primary memory. The first interesting instruction is ```mov $0x6, %eax```, which moves the hexadecimal number ```$0x6``` into the return 32-bit register ```%eax```. After this single step of our function, we can see that the function restores the state of the stack, and then ```retq``` returns the 64-bit result stored in the register ```%rax```. The command ```nopl``` essentially is just filler machine code and literally tells the computer to "do nothing" at that instruction.

In the the ```<main>``` function, the first four instructions again involve something to do with setting up the stack that we don't particularly care about. After that, the command ```callq <simpleInt>``` calls the function ```<simpleInt>```, whose result we know is stored in ```%rax```. After this instruction, the next two instructions at ```400654``` and ```400658``` restore something about the stack, and then we return from the ```<main>``` function using the ```retq``` command. Pretty straightforward!

<div class="notice--warning">
<p style="font-size:13pt"><strong>Problem 1:</strong> Try doing a similar analysis with the <code class="language-plaintext highlighter-rouge">simpleChar()</code> and <code class="language-plaintext highlighter-rouge">arithmetic()</code> operations functions to understand what they look like in assembly code.</p>
</div>

> ### Local Variables and Function Arguments

By studying the function ```variable()``` in C, which creates a local variable $x$, we can try to understand how local variables are handled in x86 assembly and by our computers.

```c
int variable(void) {
    int x = 6;
    return x;
}

int main(void) {
    return variable();
}
```

Disassembling the above code gives the following x86 assembly code output:

```scss
0000000000400520 <variable>:
  400520:   55                      push   %rbp
  400521:   48 89 e5                mov    %rsp,%rbp
  400524:   c7 45 fc 06 00 00 00    movl   $0x6,-0x4(%rbp)
  40052b:   8b 45 fc                mov    -0x4(%rbp),%eax
  40052e:   5d                      pop    %rbp
  40052f:   c3                      retq   

0000000000400640 <main>:
  400640:   55                      push   %rbp
  400641:   48 89 e5                mov    %rsp,%rbp
  400644:   48 83 ec 10             sub    $0x10,%rsp
  400648:   c7 45 fc 00 00 00 00    movl   $0x0,-0x4(%rbp)
  40064f:   e8 cc fe ff ff          callq  400520 <variable>
  400654:   48 83 c4 10             add    $0x10,%rsp
  400658:   5d                      pop    %rbp
  400659:   c3                      retq   
  40065a:   66 0f 1f 44 00 00       nopw   0x0(%rax,%rax,1)
```

The ```<main>``` code looks more or less the same as the previous example, so let's focus our attention on the ```<variable>``` function. As we can see in the ```movl   $0x6,-0x4(%rbp)``` command, the number ```0x6``` is pushed onto the stack 4 bytes lower than the base stack address stored in the register ```-0x4(%rbp)```. This result agrees with our understanding that local variables are stored on the stack. In this case, the variable ```x``` will now correspond to the integer stored in the stack location ```-0x4(%rbp)```. In the next line, this value of ```x``` is moved from the stack to the return register ```%eax```, and after restoring the stack state, we return the value of ```x``` in the ```retq``` command.

<div class="notice--warning">
<p style="font-size:13pt"><strong>Problem 2:</strong> The function <code class="language-plaintext highlighter-rouge">argument()</code> also involves the use of two local variables: <code class="language-plaintext highlighter-rouge">x</code> and <code class="language-plaintext highlighter-rouge">y</code>. We know that the first argument of a function (which in this case is <code class="language-plaintext highlighter-rouge">x</code>) is stored in the register <code class="language-plaintext highlighter-rouge">%rdi</code>, and the second argument of a function (which in this case is <code class="language-plaintext highlighter-rouge">y</code>) is stored in the register <code class="language-plaintext highlighter-rouge">%rsi</code>. After analyzing the assembly code for <code class="language-plaintext highlighter-rouge">argument()</code>, is this the case?</p>
</div>

> ### Recursion and Iteration

To take a look at how assembly code implements iterative algorithms like ```for``` loops or recursion, we can disassemble the ```recursion()``` and ```forLoop()``` functions, which both sum the positive integers up to the positive integer ```x```. Let's take a look at the ```recursion()``` disassembly first.

```scss
0000000000400550 <recursion>:
  400550:   55                      push   %rbp
  400551:   48 89 e5                mov    %rsp,%rbp
  400554:   48 83 ec 10             sub    $0x10,%rsp
  400558:   89 7d f8                mov    %edi,-0x8(%rbp)
  40055b:   83 7d f8 01             cmpl   $0x1,-0x8(%rbp)
  40055f:   0f 8f 0c 00 00 00       jg     400571 <recursion+0x21>
  400565:   c7 45 fc 01 00 00 00    movl   $0x1,-0x4(%rbp)
  40056c:   e9 1b 00 00 00          jmpq   40058c <recursion+0x3c>
  400571:   8b 45 f8                mov    -0x8(%rbp),%eax
  400574:   8b 4d f8                mov    -0x8(%rbp),%ecx
  400577:   83 e9 01                sub    $0x1,%ecx
  40057a:   89 cf                   mov    %ecx,%edi
  40057c:   89 45 f4                mov    %eax,-0xc(%rbp)
  40057f:   e8 cc ff ff ff          callq  400550 <recursion>
  400584:   8b 4d f4                mov    -0xc(%rbp),%ecx
  400587:   01 c1                   add    %eax,%ecx
  400589:   89 4d fc                mov    %ecx,-0x4(%rbp)
  40058c:   8b 45 fc                mov    -0x4(%rbp),%eax
  40058f:   48 83 c4 10             add    $0x10,%rsp
  400593:   5d                      pop    %rbp
  400594:   c3                      retq   
  400595:   66 2e 0f 1f 84 00 00    nopw   %cs:0x0(%rax,%rax,1)
  40059c:   00 00 00 
  40059f:   90                      nop
```

At first glance, this assembly code looks much more complicated! It might be a bit more difficult to understand this code especially if we didn't know the purpose of this code or the C source code beforehand, but nonetheless, we can still try to decode it piece by piece. Once again, the first three instructions have something to do with the stack, followed by moving the integer argument ```x``` (stored in ```%edi```) onto the stack, as expected. Now, we have something interesting going on between the next four lines! We can break them down one by one:

```scss
cmpl $0x1, -0x8(%rbp)
```

Based on the instruction immediately above, ```-0x8(%rbp)``` refers to the value of ```x``` passed into the function. This instruction compares the number ```1``` to ```x```, and if they are equal, the ```ZF``` flag is set. In the next instruction, which is a jump instruction,

```scss
jg 400571 <recursion+0x21>
```

The function will jump to instruction ```400571``` (the ```mov``` instruction) only if ```1<x```. We can see that this is the base case. The commands at ```400571``` and ```400574``` seem to restore ```x``` into the registers ```%eax``` and ```%ecx```, along with some addition register manipulations. Critically, we see that at instruction ```400577```, the instruction subtracts ```1``` from ```x``` and moves it into the argument register ```%edi```, preparing for the recursive function call at ```40057f```. This is the essence of the recursive call. The value of ```x``` is also stored in the return register ```%eax``` from line ```400571``` to be added to with each recursive call, executed at instruction ```40587```.

Eventually, we'll reach the base case where instruction ```40055b``` will show that ```1 == 1```, such that the jump command at ```40055f``` is _not_ executed and we continue with ```400565``` and ```40056c```:

```scss
movl $0x1,-0x4(%rbp)
jmpq 40058c <recursion+0x3c>
```

This moves the number ```1``` onto the stack, which then jumps to instruction ```40058f``` that moves the same number ```1``` at ```-0x4(%rbp)``` to the return register ```%eax``` at instruction ```40058c``` that we jump to. After that, we return. As we can see, the critical instructions at ```40055b``` through ```40056c```, and also at ```40057f```, are indications that we have a recursive function on our hands. Through walking through the function step by step, we're able to see what the function does and how it works.

What about ```for``` loop iterations? Let's disassemble the ```forLoop()``` function:

```scss
00000000004005a0 <forLoop>:
  4005a0:   55                      push   %rbp
  4005a1:   48 89 e5                mov    %rsp,%rbp
  4005a4:   89 7d fc                mov    %edi,-0x4(%rbp)
  4005a7:   c7 45 f8 00 00 00 00    movl   $0x0,-0x8(%rbp)
  4005ae:   c7 45 f4 00 00 00 00    movl   $0x0,-0xc(%rbp)
  4005b5:   8b 45 f4                mov    -0xc(%rbp),%eax
  4005b8:   3b 45 fc                cmp    -0x4(%rbp),%eax
  4005bb:   0f 8d 17 00 00 00       jge    4005d8 <forLoop+0x38>
  4005c1:   8b 45 f4                mov    -0xc(%rbp),%eax
  4005c4:   03 45 f8                add    -0x8(%rbp),%eax
  4005c7:   89 45 f8                mov    %eax,-0x8(%rbp)
  4005ca:   8b 45 f4                mov    -0xc(%rbp),%eax
  4005cd:   83 c0 01                add    $0x1,%eax
  4005d0:   89 45 f4                mov    %eax,-0xc(%rbp)
  4005d3:   e9 dd ff ff ff          jmpq   4005b5 <forLoop+0x15>
  4005d8:   8b 45 f8                mov    -0x8(%rbp),%eax
  4005db:   5d                      pop    %rbp
  4005dc:   c3                      retq   
  4005dd:   0f 1f 00                nopl   (%rax)
```

According to ```4005a4```, we moved the argument ```x``` onto the stack at the location ```-0x4(%rbp)```, so that at the ```cap``` compare instruction at ```4005b8```, we compare ```x``` to the value stored at ```%eax```, which is ```0``` according to ```4005ae``` at first pass. The incrementing variable stored at ```-0xc(%rbp)``` is incremented in the register ```%eax``` at ```4005cd``` before being moved back to ```-0xc(%rbp)```, and continuing with the loop at the jump instruction at ```4005d3```. From instruction ```4005c4```, we can hypothesize that the result is being stored at ```-0x8(%rbp)```. This function to continues to iterate until the ```cmp``` command at ```4005b8``` returns equality, such that we jump to ```4005d8``` at the instruction ```4005bb```. At this point, we move the result being stored at ```-0x8(%rbp)``` to the return register ```%eax``` and return.

> ### More Complex Examples

Eventually, we will also learn about how to read assembly code dealing with manipulating arrays and objects in C, but this requires us to understand how to manipulate pointers in C and use dynamic memory management functions like ```malloc()``` and ```free()``` in ```stdlib.h```. Since we haven't talked about _any_ of these features yet, we'll hold up on reading more complex assembly code later.

As you can tell especially from the last two examples, reading and dissecting assembly code takes a lot of practice. When we learn more about the ```gdb``` debugging tool, we'll learn about how to "step through" each individual assembly instruction line by line. If you also have 7 bucks to spare and some free time, there's also a cool game based on decoding assembly language called TIS-100 that you can download from [Steam](https://store.steampowered.com/app/370360/TIS100/). 

> ## Writing Assembly Code

Now that we have an idea of what assembly code looks like, we can use our skills to begin directly programming in assembly.

> ## The Basics

First, let's go over the basics of how to compile, execute, and analyze assembly code that we write.

> ### Assembly Code Format

All assembly code for x86 64-bit are written in files with the ```.s``` extension, and largely follows the same basic format:

```scss
.globl main

main:
    # Write code here!

.data
```

The ```main``` section is where we actually write our instructions line by line. If we have any global static variables, we would include it in the ```.data``` section (of course, if there aren't any global static variables, you can just leave the ```.data``` section out. The ```.globl main``` statement at the top allows this ```main``` function to be executed by other programs. It is important that we title this function ```main```.

Of course, you can get more complicated if you'd like, but this is the simplest structure.

> ### Compiling Assembly Using ```gcc```

Compile your ```.s``` file (we'll refer to it as ```test.s```) into an executable file using ```gcc```. Here is the appropriate Linux command:

```
$ gcc test.s -o test
```

In the _very_ off-chance that you want to compile as a 32-bit executable instead of a 64-bit executable, use the bash commands

```
$ as --32 -o test.o test.s
$ ld -o test test.o -m elf_i386
```

This is very rare nowadays and I don't really expect 32-bit executables to come up in most contexts, but if it does, now you know how to compile them.

> ### Running Executable Objects

After compiling, run your executable using the bash command

```
$ ./test
```

Let's say that your executable function had three arguments: ```arg1```, ```arg2```, and ```arg3```. You can run your executable with the the three arguments using the bash command

```
$ ./test arg1 arg2 arg3
```

> ### Printing the Return Value to ```stdout```

There are a number of different ways to accomplish this task, but perhaps the easiest is to run this single-line bash command after running an executable is complete:

```
$ echo $?
```

> ### Using ```syscall```s

At this point, we're going to take a (fairly lengthy) tangent and discuss something called _system calls_.

```syscall``` stands for a _system call_, and is used when a program wants the kernel of a computer to perform some task. The **kernel** can be thought of as the "king" or "brain" computer program that is at the core of a computer's operating system with complete control over everything in the system. It tells other programs when they can run, how much memory and computer resources they get, and whatnot. It can be thought of as the _bridge_ between computer applications/programs and the CPU, memory, and other resources.

Generally, we as programmers don't particularly work with ```syscall```s since they deal with such a secure and important component of the computer. However, in some special cases, ```syscall```s can be used in our programs to make certain "elementary" operations easy.

There are a number of ```syscall```s that are available to programs when interacting with the kernel. We'll list them here, although note that many of these terms/functions will be new and we won't be able to understand what each of them does just yet (many of these will come back to us throughout the course).

<table>
  <tr>
    <th style="font-size:13pt">Type of <code class="language-plaintext highlighter-rouge">syscall</code></th>
    <th style="font-size:13pt">Linux Function</th>
  </tr>
  <tr>
    <td rowspan="3" style="font-size:13pt;text-align:center">Process Control</td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">fork()</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">exit()</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">wait()</code></td>
  </tr>
  <tr>
    <td rowspan="4" style="font-size:13pt;text-align:center">File Management</td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">open()</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">read()</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">write()</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">close()</code></td>
  </tr>
  <tr>
    <td rowspan="3" style="font-size:13pt;text-align:center">Device Management</td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">ioctl()</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">read()</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">write()</code></td>
  </tr>
  <tr>
    <td rowspan="3" style="font-size:13pt;text-align:center">Information Maintanence</td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">getpid()</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">alarm()</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">sleep()</code></td>
  </tr>
  <tr>
    <td rowspan="3" style="font-size:13pt;text-align:center">Communication</td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">pipe()</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">shmget()</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">mmap()</code></td>
  </tr>
</table>

(_This table was taken from [this link](https://www.tutorialspoint.com/different-types-of-system-calls). Official ```syscall``` documentation is linked [here](https://man7.org/linux/man-pages/man2/syscalls.2.html)._) 

Each of these functions has an important use, and can be invoked at the assembly level.

In x86 64-bit assembly, the ```syscall``` calling convention is largely standardized. We move the appropriate arguments to each of the registers, and then invoke the ```syscall``` instruction. Each of the ```syscall``` functions has their own _system call number_ associated with the function. The register designations are

<table>
  <tr>
    <th style="font-size:13pt;text-align:center">Register</th>
    <th style="font-size:13pt;text-align:center">Function for Setting Up <code class="language-plaintext highlighter-rouge">syscall</code>s</th>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">%rax</code></td>
    <td style="font-size:13pt;text-align:center">system call number</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">%rcx</code></td>
    <td style="font-size:13pt;text-align:center">return address (often we don't care about)</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">%r11</code></td>
    <td style="font-size:13pt;text-align:center">saved flags (again, often we don't care about)</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">%rdi</code></td>
    <td style="font-size:13pt;text-align:center">arg0</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">%rsi</code></td>
    <td style="font-size:13pt;text-align:center">arg1</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">%rdx</code></td>
    <td style="font-size:13pt;text-align:center">arg2</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">%r10</code></td>
    <td style="font-size:13pt;text-align:center">arg3</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">%r8</code></td>
    <td style="font-size:13pt;text-align:center">arg4</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">%r9</code></td>
    <td style="font-size:13pt;text-align:center">arg5</td>
  </tr>
</table>

Note that invoking a ```syscall``` will _never_ change the state of the stack (this is useful oftentimes).

> #### Legacy System Interruption

On older systems and in older textbooks, you may see the commands ```int 0x80``` instead. This instruction is the "legacy" version of ```syscall``` on older systems, and runs by triggering a _software interrupt_ that interrupts the kernel's attention on the currently executing program to handle the interrupt instead. Because of the interrupt nature of the ```int 0x80``` command, it is considered to be computationally costly and slower than the more modern ```syscall``` command. It also uses an entirely different calling convention with different system call numberings, so in general it's just a bad idea to mix the two with each other. However, note that because of backwards compatibility of Intel processors, ```int 0x80``` still works on modern computers. We will just choose not to use it.

> ### Printing

Going back to writing assembly code, we can use the ```write()``` ```syscall``` that we discussed above to write to ```stdout``` and basically output things in terminal. For example, let's say that we wanted to print the string ```Hello, World!```. When dealing with strings, it is often most convenient to store it in a static data region (analogous to global variables) in x86. For example,

```scss
.globl main

main:
    movq    $1, %rax       # System call 1 is write()
    movq    $1, %rdi       # File handle 1 is stdout
    mov     $message, %rsi # Address of string to output
    mov     $14, %rdx      # Number of bytes (length of string)
    syscall                # Invoke write() operation

    movq    $60, %rax      # System call 60 is exit()
    movq    $0, %rdi       # Return code 0
    syscall

.data
message:
    .ascii "Hello, World!\n"
```

As you can see from above, we used ```syscall``` to both write to ```stdout``` and also ```exit()``` from the function (which is essentially the same as returning). We created one message that is a string (as indicated by the ```.ascii``` designation), and we can refer to this message in our assembly instruction as ```$message```. **Note that ```%rsi``` needs to store an _address_ to the thing to be printed, not the _actual_ thing being printed!**

Of course, can store more than just strings in the static data region. For example,

```scss
.data
var:
    .byte 7       # Declare a byte at location var with value 7
    .byte 11      # Declare a byte at location var+1 with value 11
x:
    .short 42     # Declare a 2-byte at location x with value 42
y:
    .long 500     # Declare a 4-byte at location y with value 500
z:
    .quad 256     # Declare a 8-byte at location z with value 256
arr:
    .long 1, 2, 3 # Declare 3 4-byte values as an array with values
                  # 1, 2, and 3. 1 is at location arr, 2 is at 
                  # location arr+4 (since a long is 4 bytes), and
                  # 3 is at location arr+8
```

> ## Examples

Now, it's your turn! Try to write assembly code for the following tasks.

> ### ```deadbeef```

<p style="font-size:13pt">Using the <code class="language-plaintext highlighter-rouge">write()</code> <code class="language-plaintext highlighter-rouge">syscall</code>, print the characters <code class="language-plaintext highlighter-rouge">deadbeef\n</code> to <code class="language-plaintext highlighter-rouge">stdout</code> without using any global static variables.</p>

```scss
.globl main

main:
    # Print deadbeef\n to stdout here
```

[Solution](/computing-systems/x86-assembly-p3-sol/index.html#deadbeef){: .btn .btn--info}

> ### Factorials

<p style="font-size:13pt">Write an x86 assembly program to compute the factorial of a number initially stored in <code class="language-plaintext highlighter-rouge">%rdi</code>.</p>

```scss
.globl main

main:
    movq    $5, %rdi    # Argument n (replace 5 with n)
    # Return n!
```

[Solution](/computing-systems/x86-assembly-p3-sol/index.html#factorials){: .btn .btn--info}

> ### Fibonacci Numbers

<p style="font-size:13pt">Write an x86 assembly program to compute the $n$th Fibonacci number, where $n$ is initially stored in <code class="language-plaintext highlighter-rouge">%rdi</code>.</p>

```scss
.globl main

main:
    movq    $9, %rdi    # Argument n (replace 9 with n)
    # Return the nth Fibonacci number
```

[Solution](/computing-systems/x86-assembly-p3-sol/index.html#fibonacci-numbers){: .btn .btn--info}

> ### Greatest Common Divisor

<p style="font-size:13pt">Using <a href="https://en.wikipedia.org/wiki/Euclidean_algorithm">Euclid's Algorithm</a>, calculate the greatest common divisor (GCD) of two numbers $x$ and $y$ initially stored in the registers <code class="language-plaintext highlighter-rouge">%rdi</code> and <code class="language-plaintext highlighter-rouge">%rsi</code>, respectively. Here is an implementation in Java so you can understand the algorithm:</p>

```java
public static int gcd(int x, int y) {
    if (x == 0) { return y; }
    return gcd(y % x, x);
}
```

Here is a template for the assembly implementation:

```scss
.globl main

main:
    movq    $9, %rdi    # Argument x (replace 9 with x)
    movq    $6, %rsi    # Argument y (replace 6 with y)
    # Return the gcd of x and y
```

[Solution](/computing-systems/x86-assembly-p3-sol/index.html#greatest-common-divisor){: .btn .btn--info}

> ## Addendum: Buffer Overflow

The _Dive into Systems_ textbook has a nice example on the real-world applications of being able to write and read assembly code in the context of security and buffer overflows, linked [here](https://diveintosystems.org/singlepage/#_real_world_buffer_overflow). Buffer overflow exploits were commonly cited in the 1980s and early 2000s as presenting serious security issues with a lot of computers and programs. I would highly recommend checking it out if you have the time!
