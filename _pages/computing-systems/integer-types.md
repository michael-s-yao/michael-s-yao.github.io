---
permalink: /computing-systems/integer-types/
author_profile: false
title: "Integer Types in C"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

As in Java, the most intuitive way of declaring a variable as an ```int``` is to simply write something like ```int x = 0```. However, using ```int``` makes no mention of how many bits and bytes that the ```int``` takes up. As we saw in our discussion on bitwise operations and [integer overflow](/computing-systems/bitwise-operations/index.html#integer-overflow), knowing _exactly_ how many bits a particular variable takes up is actually very important. Therefore, it's typically considered better practice to declare explicitly how many bits an integer takes up. We'll discuss how to do so here.

> ## ```inttypes```

In order to specify the number of bits that an integer takes up, we need to make sure that we include the _header file_ that offers these variable types. This simply involves including ```#include <inttypes.h>``` at the top of our source code.

> ## Unsigned Integers

All unsigned integer variable types follow the same format: ```uintN_t```, where ```N``` can be ```8```, ```16```, ```32```, or ```64``` and represents the exact number of bits that are used to represent the integer. The minimum unsigned integer is always ```0```, since we can only represent nonnegative integers using unsigned integer variable types. The maximum number that can represented by each of these unsigned integer variable types is shown here:

```c
#include <inttypes.h>

uint8_t max8 = 255; // 2^8 - 1
uint16_t max16 = 65535; // 2^16 - 1
uint32_t max32 = 4294967295; // 2^32 - 1
uint64_t max64 = 18446744073709551615; // 2^64 - 1
```

The following code will print out these unsigned integers, and demonstrates the correct format specifiers to be used in order to print out each of these types of variables.

```c
#include <stdio.h>
#include <inttypes.h>

int main(void) {
    uint8_t max8 = 255; // 2^8 - 1
    uint16_t max16 = 65535; // 2^16 - 1
    uint32_t max32 = 4294967295; // 2^32 - 1
    uint64_t max64 = 18446744073709551615; // 2^64 - 1

    printf("max8 is %hhu.\n", max8);
    printf("max16 is %hu.\n", max16);
    printf("max32 is %u.\n", max32);
    printf("max64 is %lu.\n", max64);
}
```

> ## Signed Integers

Similarly, all signed integer variable types follow the same format: ```intN_t```, where ```N``` can be ```8```, ```16```, ```32```, or ```64``` and represents the exact number of bits that are used to represent the integer. The minimum signed integer is always ```-2^(N-1)```, and the maximum number is always ```2^(N-1)-1```. The maximum integer that can represented by each of these signed integer variable types is shown here:

```c
#include <inttypes.h>

int8_t max8 = 127; // 2^7 - 1
int16_t max16 = 32767; // 2^15 - 1
int32_t max32 = 2147483647; // 2^31 - 1
int64_t max64 = 9223372036854775807; // 2^63 - 1
```

The following code will print out these signed integers, and demonstrates the correct format specifiers to be used in order to print out each of these types of variables.

```c
#include <stdio.h>
#include <inttypes.h>

int main(void) {
    int8_t max8 = 127; // 2^7 - 1
    int16_t max16 = 32767; // 2^15 - 1
    int32_t max32 = 2147483647; // 2^31 - 1
    int64_t max64 = 9223372036854775807; // 2^63 - 1

    printf("max8 is %hhd.\n", max8);
    printf("max16 is %hd.\n", max16);
    printf("max32 is %d.\n", max32);
    printf("max64 is %ld.\n", max64);
}
```

> ## Conversion Between Different Bases of Numbers

A number of different examples on converting decimal numbers to binary (base 2), hexadecimal (base 16), and octal (base 8), and vice versa, is shown [here](https://pdfhost.io/v/4RfOsiPiY_BaseRepresentations.pdf).
