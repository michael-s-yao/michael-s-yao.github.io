---
permalink: /computing-systems/x86-assembly-p2/
author_profile: false
title: "x86 Registers and Instructions"
toc: true
toc_label: "Contents"
---


<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

> ## Registers

Last time, we ended by discussing the sixteen general-purpose registers found on most modern Intel-based computers, shown here:

**64-bit register** | **lowest 32 bits** | **lowest 16 bits** | **lowest 8 bytes**
```rax``` | ```eax``` | ```ax``` | ```al```
```rbx``` | ```ebx``` | ```bx``` | ```bl```
```rcx``` | ```ecx``` | ```cx``` | ```cl```s
```rdx``` | ```edx``` | ```dx``` | ```dl```
```rsi``` | ```esi``` | ```si``` | ```sil```
```rdi``` | ```edi``` | ```di``` | ```dil```
```rbp``` | ```ebp``` | ```bp``` | ```bpl```
```rsp``` | ```esp``` | ```sp``` | ```spl```
```r8``` | ```r8d``` | ```r8w``` | ```r8b```
```r9``` | ```r9d``` | ```r9w``` | ```r9b```
```r10``` | ```r10d``` | ```r10w``` | ```r10b```
```r11``` | ```r11d``` | ```r11w``` | ```r11b```
```r12``` | ```r12d``` | ```r12w``` | ```r12b```
```r13``` | ```r13d``` | ```r13w``` | ```r13b```
```r14``` | ```r14d``` | ```r14w``` | ```r14b```
```r15``` | ```r15d``` | ```r15w``` | ```r15b```

Some of the sixteen registers have important functions that we should talk about:

  1. When an assembly function returns, it always returns the value stored in the register ```%rax``` (or a smaller sub-register, depending on what is specified).
  2. When arguments are passed into the function, the first argument is passed into ```%rdi```, the second argument to ```%rsi```, the third argument to ```%rdx```, the fourth argument to ```%rcx```, the fifth argument to ```%r8```, and the sixth argument to ```%r9```.
  3. The ```%rdx``` register is often used to handle overflow problems from multiplication operations, or to overflow before we perform a division operation. (This will almost certainly make no sense right now, but we'll go over what this means below.)
  4. The ```%rsp``` register is typically reserved to store a pointer to the "top" of the stack, and ```%rbp``` register is typically reserved to store a pointer to the "bottom of the stack."
  5. While things are pushed to the top of the stack, in reality in computer memory, the stack grows downwards, and so the value stored in ```%rsp``` is always less than or equal to the value stored in ```%rbp```.

> ### Register Arithmetic

To _dereference_ registers, we use parentheses ```()``` instead of the square brackets ```[]```. For example, if the heap memory location ```0x80000010``` was stored in the register ```%rax```, then ```(%rax)``` would refer to whatever is stored in the primary memory at location ```0x80000010```.

Often times, we are interested in storing a pointer to the beginning of an array at a heap memory location, or pointer to somewhere on the stack in reference to the bottom of the stack. In both cases, we often don't know the "absolute" memory location in these cases of certain objects stored in the memory, but rather their location relative to a reference, such as the pointer to the start of an array or the pointer to the base of a stack stored in ```%rbp```. In order to denote _relative_ memory location, we can use common addressing conventions in AT&T syntax for dealing with point locations stored in registers. The idea is that we can refer to addresses in the heap in the following notation convention:

```
offset(base, index, scale)
```

The ```base``` is the base reference memory location, often stored in some register. ```index``` can be thought of the array index in an array, and ```scale``` is the size of each array element. ```offset``` is the offset from the ```base``` reference location. In this case, this notation references the primary storage location

```
[base + (index * scale) + offset]
```

For example, let's say that the integer ```0x3``` was stored at the memory location ```0x80000010```, and the location ```0x80000000``` to the start of the heap location was stored in the register ```%rcx```. This means that the instruction

```
movq    (%rcx, 2, 8), %rax
```

moves the integer ```0x3``` to the register ```%rax```. This is because ```0x80000000 + (2 * 8) = 0x80000010```. Here are some examples of using parentheses to dereference pointers stored in registers:

  1. ```(%rax)```. This accesses the contents of the memory at the address stored in ```%rax```.
  2. ```(%rbx, %rcx)```. This accesses the contents of the memory at the address stored in ```%rbx + %rcx``` (ie adding the two values stored in these two registers and then treating the sum as a pointer to the primary storage).
  3. ```(%rbx, %rcx, 8)```. This accesses the contents of the memory at the address stored in ```%rbx + (8 * %rcx)```.
  4. ```4(%rbx, %rcx, 8)```. This accesses the contents of the memory at the address stored in ```%rbx + (8 * %rcx) + 4```.

This _offset notation_ can also be used to do basic arithmetic! This can be done using the ```lea``` command, which we'll introduce and talk about in the section below. Basically, the instruction looks like the following:

```
leaq    some calculation, destination
```

For example, suppose that we wanted to calculate ```2 + (5 * 8) - 4```, and then store the result into the register ```%rax```. A succinct way of doing this is to use the instruction

```
leaq    -4(2, 5, 8), %rax
```

The benefit of doing calculations in this way is that (1) it is often more concise, and (2) it performs the calculation without modifying any of the flags in the ALU. _Flags_ are something that we'll discuss in the sections [below](/computing-systems/x86-assembly-p2/index.html#compare-instructions).

> ## Common x86 Assembly Commands

Here are a list of common x86 assembly commands and their uses.

> ### Data Movement Instructions

<table style="width:100%" class="align-center">
  <tr>
    <th style="font-size:13pt;text-align:center">Instruction</th>
    <th style="font-size:13pt;text-align:center">Arguments</th>
    <th style="font-size:13pt;text-align:center">Description</th>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">mov</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src, dst</code></td>
    <td style="font-size:13pt;text-align:left">move <code class="language-plaintext highlighter-rouge">src</code> to <code class="language-plaintext highlighter-rouge">dst</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">push</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src</code></td>
    <td style="font-size:13pt;text-align:left">push <code class="language-plaintext highlighter-rouge">src</code> onto the top of the stack</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">pop</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">dst</code></td>
    <td style="font-size:13pt;text-align:left">pop the top of the stack to <code class="language-plaintext highlighter-rouge">dst</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">cwtl</code></td>
    <td style="font-size:13pt;text-align:center"></td>
    <td style="font-size:13pt;text-align:left">sign-extend word in <code class="language-plaintext highlighter-rouge">%ax</code> to long in <code class="language-plaintext highlighter-rouge">%eax</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">cltq</code></td>
    <td style="font-size:13pt;text-align:center"></td>
    <td style="font-size:13pt;text-align:left">sign-extend long in <code class="language-plaintext highlighter-rouge">%eax</code> to quad in <code class="language-plaintext highlighter-rouge">%rax</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">cqto</code></td>
    <td style="font-size:13pt;text-align:center"></td>
    <td style="font-size:13pt;text-align:left">sign-extend quad in <code class="language-plaintext highlighter-rouge">%rax</code> to 16-byte octoword in <code class="language-plaintext highlighter-rouge">%rdx:%rax</code> (<code class="language-plaintext highlighter-rouge">%rdx</code> holds the most significant bit)</td>
  </tr>
</table>

> ### Unary Operations

<table style="width:100%" class="align-center">
  <tr>
    <th style="font-size:13pt;text-align:center">Instruction</th>
    <th style="font-size:13pt;text-align:center">Arguments</th>
    <th style="font-size:13pt;text-align:center">Description</th>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">inc</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">dst</code></td>
    <td style="font-size:13pt;text-align:left">increment <code class="language-plaintext highlighter-rouge">dst</code> by one</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">dec</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">dst</code></td>
    <td style="font-size:13pt;text-align:left">decrement <code class="language-plaintext highlighter-rouge">dst</code> by one</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">neg</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">dst</code></td>
    <td style="font-size:13pt;text-align:left">replace <code class="language-plaintext highlighter-rouge">dst</code> with its additive inverse</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">not</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">dst</code></td>
    <td style="font-size:13pt;text-align:left">replace <code class="language-plaintext highlighter-rouge">dst</code> with its bitwise complement</td>
  </tr>
</table>

> ### Binary Operations

<table style="width:100%" class="align-center">
  <tr>
    <th style="font-size:13pt;text-align:center">Instruction</th>
    <th style="font-size:13pt;text-align:center">Arguments</th>
    <th style="font-size:13pt;text-align:center">Description</th>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">leaq</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src, dst</code></td>
    <td style="font-size:13pt;text-align:left">load <em>address</em> <code class="language-plaintext highlighter-rouge">src</code> to <code class="language-plaintext highlighter-rouge">dst</code> (<em><strong>not</strong></em> the value stored at <code class="language-plaintext highlighter-rouge">src</code> to <code class="language-plaintext highlighter-rouge">dst</code>)</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">add</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src, dst</code></td>
    <td style="font-size:13pt;text-align:left">add <code class="language-plaintext highlighter-rouge">src</code> to <code class="language-plaintext highlighter-rouge">dst</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">sub</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src, dst</code></td>
    <td style="font-size:13pt;text-align:left">subtract <code class="language-plaintext highlighter-rouge">src</code> <em>from</em> <code class="language-plaintext highlighter-rouge">dst</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">imul</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src, dst</code></td>
    <td style="font-size:13pt;text-align:left">multiply <code class="language-plaintext highlighter-rouge">dst</code> by <code class="language-plaintext highlighter-rouge">src</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">and</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src, dst</code></td>
    <td style="font-size:13pt;text-align:left">bitwise <code class="language-plaintext highlighter-rouge">AND</code> on <code class="language-plaintext highlighter-rouge">dst</code> by <code class="language-plaintext highlighter-rouge">src</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">or</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src, dst</code></td>
    <td style="font-size:13pt;text-align:left">bitwise <code class="language-plaintext highlighter-rouge">OR</code> on <code class="language-plaintext highlighter-rouge">dst</code> by <code class="language-plaintext highlighter-rouge">src</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">xor</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src, dst</code></td>
    <td style="font-size:13pt;text-align:left">bitwise <code class="language-plaintext highlighter-rouge">XOR</code> on <code class="language-plaintext highlighter-rouge">dst</code> by <code class="language-plaintext highlighter-rouge">src</code></td>
  </tr>
</table>

> ### Special Arithmetic Operations

Sometimes for multiplication and division operations, we need to worry about _bit extension_. This is because, for example, multiplication of two 64-bit integers can yield a 128-bit integer, and division of two 64-bit integers can yield an incorrect result if the thing being divided is not converted into a 128-bit integer first. This is perhaps easiest to understand in terms of division by a power of two using left shift and right shift operations. We discussed some of the issues with these operations if not considered carefully [previously](/computing-systems/bitwise-operations/index.html#why-should-i-care).

<table style="width:100%" class="align-center">
  <tr>
    <th style="font-size:13pt;text-align:center">Instruction</th>
    <th style="font-size:13pt;text-align:center">Arguments</th>
    <th style="font-size:13pt;text-align:center">Description</th>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">imulq</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src</code></td>
    <td style="font-size:13pt;text-align:left">signed multiply <code class="language-plaintext highlighter-rouge">%rax</code> by <code class="language-plaintext highlighter-rouge">src</code>, and store result in <code class="language-plaintext highlighter-rouge">%rdx:%rax%</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">mulq</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src</code></td>
    <td style="font-size:13pt;text-align:left">unsigned multiply <code class="language-plaintext highlighter-rouge">%rax</code> by <code class="language-plaintext highlighter-rouge">src</code>, and store result in <code class="language-plaintext highlighter-rouge">%rdx:%rax%</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">idivq</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src</code></td>
    <td style="font-size:13pt;text-align:left">signed divide <code class="language-plaintext highlighter-rouge">%rdx:%rax</code> by <code class="language-plaintext highlighter-rouge">src</code>, and store quotient in <code class="language-plaintext highlighter-rouge">%rax%</code> and remainder in <code class="language-plaintext highlighter-rouge">%rdx%</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">divq</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src</code></td>
    <td style="font-size:13pt;text-align:left">unsigned divide <code class="language-plaintext highlighter-rouge">%rdx:%rax</code> by <code class="language-plaintext highlighter-rouge">src</code>, and store quotient in <code class="language-plaintext highlighter-rouge">%rax%</code> and remainder in <code class="language-plaintext highlighter-rouge">%rdx%</code></td>
  </tr>
</table>

> ### Shifting Operations

<table style="width:100%" class="align-center">
  <tr>
    <th style="font-size:13pt;text-align:center">Instruction</th>
    <th style="font-size:13pt;text-align:center">Arguments</th>
    <th style="font-size:13pt;text-align:center">Description</th>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">sal</code> or <code class="language-plaintext highlighter-rouge">shl</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">k, dst</code></td>
    <td style="font-size:13pt;text-align:left">left shift <code class="language-plaintext highlighter-rouge">dst</code> by <code class="language-plaintext highlighter-rouge">k</code> bits</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">sar</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">k, dst</code></td>
    <td style="font-size:13pt;text-align:left">arithmetic right shift <code class="language-plaintext highlighter-rouge">dst</code> by <code class="language-plaintext highlighter-rouge">k</code> bits</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">shr</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">k, dst</code></td>
    <td style="font-size:13pt;text-align:left">logical right shift <code class="language-plaintext highlighter-rouge">dst</code> by <code class="language-plaintext highlighter-rouge">k</code> bits</td>
  </tr>
</table>

> ### Compare Instructions

<table style="width:100%" class="align-center">
  <tr>
    <th style="font-size:13pt;text-align:center">Instruction</th>
    <th style="font-size:13pt;text-align:center">Arguments</th>
    <th style="font-size:13pt;text-align:center">Description</th>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">cmp</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src1, src2</code></td>
    <td style="font-size:13pt;text-align:left">sets flags according to <code class="language-plaintext highlighter-rouge">src2 - src1</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">test</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">src1, src2</code></td>
    <td style="font-size:13pt;text-align:left">sets flags according to <code class="language-plaintext highlighter-rouge">src2 & src1</code></td>
  </tr>
</table>

At this point, it is also worth noting what the flags are that are stored in the special dedicated ```FLAGS``` register. There are a number of them, but we'll highlight the most important ones here:

<table style="width:100%" class="align-center">
  <tr>
    <th style="font-size:13pt;text-align:center">Flag</th>
    <th style="font-size:13pt;text-align:left">Set to <code class="language-plaintext highlighter-rouge">1</code> when...</th>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center">carry flag <code class="language-plaintext highlighter-rouge">CF</code></td>
    <td style="font-size:13pt;text-align:left">sum exceeds capacity of register, or negative number was obtained in subtracting two unsigned integers</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center">parity flag <code class="language-plaintext highlighter-rouge">PF</code></td>
    <td style="font-size:13pt;text-align:left">parity of result of last operation was even</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center">zero flag <code class="language-plaintext highlighter-rouge">ZF</code></td>
    <td style="font-size:13pt;text-align:left">result of last operation was <code class="language-plaintext highlighter-rouge">0</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center">sign flag <code class="language-plaintext highlighter-rouge">SF</code></td>
    <td style="font-size:13pt;text-align:left">result of last operation was negative</td>
  </tr>
</table>

> ### Logical Control Flow Instructions

Typically, based on a ```cmp``` result, we may want to jump to another set of instructions. This is common in implementing iterations and conditional statements.

<table style="width:100%" class="align-center">
  <tr>
    <th style="font-size:13pt;text-align:center">Instruction</th>
    <th style="font-size:13pt;text-align:center">Description</th>
    <th style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">FLAGS</code> Condition</th>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">jmp</code></td>
    <td style="font-size:13pt;text-align:left">jump to specified <code class="language-plaintext highlighter-rouge">label</code></td>
    <td style="font-size:13pt;text-align:center"></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">je</code> / <code class="language-plaintext highlighter-rouge">jz</code></td>
    <td style="font-size:13pt;text-align:left">jump to specified <code class="language-plaintext highlighter-rouge">label</code> only if equal or zero</td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">ZF</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">jne</code> / <code class="language-plaintext highlighter-rouge">jnz</code></td>
    <td style="font-size:13pt;text-align:left">jump to specified <code class="language-plaintext highlighter-rouge">label</code> only if <em>not</em> equal or not zero</td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">~ZF</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">js</code></td>
    <td style="font-size:13pt;text-align:left">jump to specified <code class="language-plaintext highlighter-rouge">label</code> only if negative</td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">SF</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">jns</code></td>
    <td style="font-size:13pt;text-align:left">jump to specified <code class="language-plaintext highlighter-rouge">label</code> only if <em>not</em> negative</td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">~SF</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">jg</code> / <code class="language-plaintext highlighter-rouge">jnle</code></td>
    <td style="font-size:13pt;text-align:left">jump to specified <code class="language-plaintext highlighter-rouge">label</code> only if greater (signed)</td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">~(SF^OF)&(~ZF)</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">jge</code> / <code class="language-plaintext highlighter-rouge">jnl</code></td>
    <td style="font-size:13pt;text-align:left">jump to specified <code class="language-plaintext highlighter-rouge">label</code> only if greater than or equal (signed)</td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">~(SF^OF)</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">jl</code> / <code class="language-plaintext highlighter-rouge">jnge</code></td>
    <td style="font-size:13pt;text-align:left">jump to specified <code class="language-plaintext highlighter-rouge">label</code> only if less (signed)</td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">SF^OF</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">jle</code> / <code class="language-plaintext highlighter-rouge">jng</code></td>
    <td style="font-size:13pt;text-align:left">jump to specified <code class="language-plaintext highlighter-rouge">label</code> only if less than or equal (signed)</td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">(SF^OF)|ZF</code></td>
  </tr>
</table>

> ### Procedure Call Instructions

<table style="width:100%" class="align-center">
  <tr>
    <th style="font-size:13pt;text-align:center">Instruction</th>
    <th style="font-size:13pt;text-align:center">Arguments</th>
    <th style="font-size:13pt;text-align:center">Description</th>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">call</code></td>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">label</code></td>
    <td style="font-size:13pt;text-align:left">push return address and jump to <code class="language-plaintext highlighter-rouge">label</code></td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">leave</code></td>
    <td style="font-size:13pt;text-align:center"></td>
    <td style="font-size:13pt;text-align:left">set <code class="language-plaintext highlighter-rouge">%rsp</code> to <code class="language-plaintext highlighter-rouge">%rbp</code>, and then pop the top of the stack into <code class="language-plaintext highlighter-rouge">%rbp</code> register</td>
  </tr>
  <tr>
    <td style="font-size:13pt;text-align:center"><code class="language-plaintext highlighter-rouge">ret</code></td>
    <td style="font-size:13pt;text-align:center"></td>
    <td style="font-size:13pt;text-align:left">pop return address from stack and jump there</td>

  </tr>
</table>

> ### Additional Instructions

Once again, we have only grazed the surface of the set of x86 instructions available to us in assembly. While the above represent the most common instructions, you can find the full set in the x86 assembly documentation [here](https://docs.oracle.com/cd/E19253-01/817-5477/817-5477.pdf).

> ## Stack Manipulation

As we mentioned [previously](/computing-systems/x86-assembly-p1/index.html#primary-storage-memory-stacks-and-heaps), the stack is an important component of the primary storage, and can be thought of as growing _downwards_. This means that the "top" where things are immediately pushed and popped is at a lower address in the primary storage than the bottom of the stack. For example, let's say that we pushed the number ```1070```, and then ```972```, and then ```256```, and then ```-7``` onto the stack. The state of the stack after these four ```push``` operations would look something like this:

![stack](/assets/images/computer-systems/stack.png){: height="60%" width="60%" .align-center}

Although the stack is indeed a LIFO data structure, it's perhaps more appropriate to think of it as a "transparent stack." What this means is that you're able to read and write values _anywhere_ in the stack, even if it is not at the top. You just can't change the order of the elements or remove a stack entry found somewhere in the middle of the stack. For example, using the example above, ```-0x8(%rbp)``` would refer to ```1070```. In this particular case, it would also be equivalent to ```0x20(%rsp)```. 

When things are pushed and popped from a given stack frame, it is the ```%rsp``` frame that moves automatically with pushing and popping, as ```%rsp``` always points to the next free memory space on the stack.

In disassembling C code, you might notice that many assembly functions start off with and end with a similar set of commands:

```scss
push   %rbp
mov    %rsp,%rbp
// some instructions
pop    %rbp
```

Let's figure out the purpose of these commands. Recall that even if we're in different functions, _all_ of the function in a given C program share the same stack in the primary memory. However, we don't want the stack data from different functions being jumbled together. This is effectively what these three set of instructions are doing. When we first enter a function, the ```push %rbp``` instruction pushes the address of the previous ```%rbp``` base pointer _onto_ the stack, and the next instruction essentially resets the stack frame. This process looks something like this:

![stack-2](/assets/images/computer-systems/stack-2.png){: height="100%" width="100%" .align-center}

In this way, the previous stack data from any previous functions remains unaffected by any stack operations made by our current function. This process of ```push```ing ```%rbp``` and then ```mov```ing ```%rsp``` to ```%rbp``` is called ***adjusting the stack frame***. To finish up the program, ```pop %rbp``` will restore the old ```%rbp``` with the previous stack data, such that from an outside program function, it effectively looks like the stack wasn't touched by our function after we exit from the function. This functionality is _crucial_ in order for us to be able to call functions within functions.

> ## Moving On...

Now that we understand the basics of assembly language syntax and what are the typical commands and operations available to us, we can now try to actually read some assembly code and actually write our own as well [here](/computing-systems/x86-assembly-p3/index.html).
