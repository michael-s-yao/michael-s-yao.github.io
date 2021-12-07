---
permalink: /computing-systems/x86-assembly-p3-sol/
author_profile: false
title: "Writing x86 Assembly (Solutions)"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

<div class="notice--danger">
<p style="font-size:13pt">The following solutions are for the problems on writing x86 84-bit assembly programs linked <a href="/computing-systems/x86-assembly-p3/index.html#exercises">here</a>. I encourage you to attempt them by yourself first before looking through the solutions.</p>
</div>

> ## ```deadbeef```

<div class="notice--info">
<p style="font-size:13pt">Using the <code class="language-plaintext highlighter-rouge">write()</code> <code class="language-plaintext highlighter-rouge">syscall</code>, print the characters <code class="language-plaintext highlighter-rouge">deadbeef\n</code> to <code class="language-plaintext highlighter-rouge">stdout</code> without using any global static variables.</p>
</div>

First, to print out ```deadbeef\n```, we need to know its ASCII hexadecimal representation first. This can be determined character by character (assuming _little endian_ convention) in this way:

![little-endian](/assets/images/computer-systems/little-endian.png){: height="90%" width="90%" .align-center}

Now that we know the ASCII representation, we can implement our assembly code:

```scss
.globl main

main:
    movw    $0x0a, %r8w  # Move \n ascii code to %r8
    push    %r8          # Push \n ascii code onto stack
    # Move deadbeef ascii code to %r8
    movq    $0x6665656264616564, %r8
    push    %r8          # Push deadbeef ascii code onto stack
    movq    $0x1, %rax   # System call 1 is write()
    movq    $0x1, %rdi   # File handle 1 is stdout
    movq    %rsp, %rsi   # Argument to write is $0x0a61 on stack
    movq    $9, %rdx     # Number of bytes (length of string)
    syscall              # Invoke write() operation
    pop     %r8          # Restore stack state
    pop     %r8
    retq
```

Notice that we have to split up the 9-byte (9-character) string into two ```push``` instructions, since a 64-bit register can only hold 8 bytes at a time.

> ## Factorials

<div class="notice--info">
<p style="font-size:13pt">Write an x86 assembly program to compute the factorial of a number initially stored in <code class="language-plaintext highlighter-rouge">%rdi</code>.</p>
</div>

```scss
.globl main

main:
    movq    $5, %rdi    # Argument n (replace 5 with n)
    movq    $1, %r8     # Counter variable i
    movq    $1, %rax    # Store result of n! in %rax
loop:
    cmp     %r8, %rdi   # If n is less than the counter i...
    jl      exit        # ...then we are done looping and exit
    imulq   %r8         # Multiply %rax by i
    inc     %r8
    jmp     loop
exit:
    retq
```

> ## Fibonacci Numbers

<div class="notice--info">
<p style="font-size:13pt">Write an x86 assembly program to compute the $n$th Fibonacci number, where $n$ is initially stored in <code class="language-plaintext highlighter-rouge">%rdi</code>.</p>
</div>

```scss
.globl main

main:
    movq    $9, %rdi     # Argument n (replace 9 with n)
    movq    $0, %r8      # Counter variable i
    movq    $0, %rax     # Move 0th Fibonacci number to %rax
    movq    $1, %rbx     # Move 1st Fibonacci number to %rbx
loop:
    cmp     %r8, %rdi    # If n is less than or equal to counter i...
    jle     exit         # ...then we are done looping and exit
    movq    %rbx, %rcx
    addq    %rax, %rcx   # %rcx stores %rax + %rbx
    movq    %rbx, %rax
    movq    %rcx, %rbx
    inc     %r8
    jmp     loop
exit:
    retq
```

> ## Greatest Common Divisor

<div class="notice--info">
<p style="font-size:13pt">Using <a href="https://en.wikipedia.org/wiki/Euclidean_algorithm">Euclid's Algorithm</a>, calculate the greatest common divisor (GCD) of two numbers $x$ and $y$ initially stored in the registers <code class="language-plaintext highlighter-rouge">%rdi</code> and <code class="language-plaintext highlighter-rouge">%rsi</code>, respectively. Here is an implementation in Java so you can understand the algorithm:</p>
</div>

```java
public static int gcd(int x, int y) {
    if (x == 0) { return y; }
    return gcd(y % x, x);
}
```

Solution:

```scss
.globl main

main:
    movq    $9, %rdi     # Argument x (replace 9 with x)
    movq    $6, %rsi     # Argument y (replace 6 with y)
    movq    $0, %r8      # 0 stored in %r8
loop:
    cmp     %r8, %rdi    # If x is 0...
    je      exit         # ...Return y and exit
    movq    %rsi, %rax
    cqto
    idivq   %rdi         # Divide y by x
    movq    %rdi, %rsi   # Set %rsi to x
    movq    %rdx, %rdi   # set %rdi to y % x
    jmp     loop
exit:
    movq    %rsi, %rax
    retq
```
