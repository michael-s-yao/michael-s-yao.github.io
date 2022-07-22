---
permalink: /java/exception-handling/
author_profile: false
title: "Exception Handling"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

When constructing our ```LoginInfo``` application from [last time](/java/login-info/index.html), we inevitably came across things like ```FileNotFoundException``` and ```MalformedURLException```, which we handled by throwing in arbitrary ```try```/```catch``` or ```throws``` statements without any real knowledge of what they do. This was to teach us the skill in Java that you don't need to understand all parts of the code in order to make it work. Nonetheless, these "arbitrary" statements are still very important to understand, and are part of a larger topic in Java called _exception handling_.

> ## What is an exception?

In order to talk about [exception handling](https://www.scaler.com/topics/java/exception-handling-in-java/), we first need to understand what an exception is. To put it simply, an **exception** is essentially a problem or issue that comes up when your Java program is running. This problem isn't something like saying 2+3=4; it's a problem big enough such that if it is left unchecked, it could terminate or pause the entire program. For example, as you can probably tell by the name of these exceptions,

  - ```FileNotFoundException``` is an exception that means that we (or the user) has entered an invalid data file type, a file that cannot be found, or something related to file issues.
  - ```MalformedURLException``` is an exception that means the URL given is not a valid URL.

When both of these exceptions arise, if often means that the program cannot continue. For example, we often need a file name in order to be able to read or write to a file, but if we enter an invalid file name, then the program doesn't know what to do.

This presents a complication: oftentimes, the _user_ of the program is the one that enters a wrong file name, or a malformed URL, or some other issue that causes an exception. This means that our program could be perfectly written, but still fail to execute because of a problem on the user's side. As programmers, we want to prevent this is best we can: this is done through _exception handling_.

> ## Exception Handling

**Exception handling** is simply handling the exceptions that might come up while your Java program is running. There are two main ways of handling exceptions: ```try```/```catch``` statements and ```throws``` clauses.

> ### ```try```/```catch``` Statements

```try```/```catch``` statements in Java often look something like this:

```java
public class Example {
    public static void main(String[] args) {
        try {
            // Try to perform this code
        } catch (Exception e) {
            // If an exception of type Exception comes up, forget
            // the code in the try block and do this code instead.
        }
    }
}
```

The default code that our program will try to execute is in the ```try``` block of the code. If, while executing the ```try``` block code, an exception of type Exception comes up, then the program will stop performing rest of the remaining code in the ```try``` block and instead start executing the ```catch``` block code.

```Exception``` is the most general type of exception that can come up, and will handle all exceptions in the same way in the same ```catch``` statement. However, sometimes we only want to ```catch``` certain exceptions, or we want to handle different exceptions differently, which would require using multiple ```catch``` statements. For example, our code could definitely do something like

```java
public class Example {
    public static void main(String[] args) {
        try {
            // Try to perform this code. This code has the
            // potential to throw a NullPointerException, a
            // a FileNotFoundException, or a MalformedURLException.
        } catch (NullPointerException e) {
            // If an exception of type NullPointerException comes up,
            // forget the code in the try block and do this code instead.
        } catch (FileNotFoundException f) {
            // If an exception of type FileNotFoundException comes up,
            // forget the code in the try block and do this code instead.
        } catch (MalformedURLException u) {
            // If an exception of type MalformedURLException comes up,
            // forget the code in the try block and do this code instead.
        }
    }
}
```

```try```/```catch``` statements can also implement a ```finally``` block, which is code that is always executed after either the ```try``` block code or one of the ```catch``` block codes. It could look something like

```java
public class Example {
    public static void main(String[] args) {
        try {
            // Try to perform this code. This code has the
            // potential to throw a NullPointerException, a
            // a FileNotFoundException, or a MalformedURLException.
        } catch (NullPointerException e) {
            // If an exception of type NullPointerException comes up,
            // forget the code in the try block and do this code instead.
        } catch (FileNotFoundException f) {
            // If an exception of type FileNotFoundException comes up,
            // forget the code in the try block and do this code instead.
        } catch (MalformedURLException u) {
            // If an exception of type MalformedURLException comes up,
            // forget the code in the try block and do this code instead.
        } finally {
            // Do something to wrap up the code.
        }
    }
}
```

> #### What do you do when you catch an exception?

Let's assume that we've encounter an exception, and we're now in the appropriate ```catch``` block of code. What should we even do? Often times, like we said previously, the exception that comes up is often indicative that we can't proceed with the rest of our code outside of the ```try```/```catch``` statements. In order to find out why the exception was thrown, two of the most common things to do are (1) print out the message about the exception, and (2) print out the _stack trace_. We haven't really talked about what a stack trace exactly is yet, but it can basically be though of as printing out information that can help us potentially backtrack to where the exception might have initially originated from. The code to do either of these things is shown here:

```java
public class Example {
    public static void main(String[] args) {
        try {
            // Try to perform this code.
        } catch (Exception e) {
            // (1) Print the message regarding the message.
            System.out.println(e.getMessage());

            // and/or (2) Print out the stack trace.
            e.printStackTrace();
        }
}
```

Of course, you can do more fancy stuff if necessary, but this is the basics of what to do.

> ### ```throws``` Clauses

The benefit of the ```try```/```catch``` statements from above was that you could explicitly tell your program exactly what things should be done in the event that a particular exception was thrown. However, we may not always *need* to do something in response to an exception. All we might need to do is simply tell our program that the exception *may* come up when the code is executed. Furthermore, ```try```/```catch``` statements are often referred to as "computationally expensive," meaning they often take up a lot of your computer's memory and can significantly slow down the speed and efficiency of your program.

Given these limitations, one alternative is to instead include a ```throws``` clause in the Java ```class``` definition. For example, if the ```main()``` method had the potential to throw an ```Exception```, we could do something like this:

```java
public class Example {
    public static void main(String[] args) throws Exception {
        int num = Integer.parseInt(args[0]);

        if (num == 0) { throw new Exception(); }
    }
}
```

Here, we can see that this code has the potential to throw/generate a Java ```Exception``` in the case that the number argument passed into the function is equal to zero. In order to tell the program beforehand that there is a possibility for a Java ```Exception``` to be thrown, we add the ```throws Exception``` clause to the function name.

Of course, you can also alert the program that there could be multiple different types of exceptions that could be thrown. For example, we could modify the code above in the following way:

```java
public class Example {
    public static void main(String[] args) throws Exception, IOException {
        int num = Integer.parseInt(args[0]);

        if (num == 0) { throw new Exception(); }
        else if (num > 0) { throw new IOException(); }
        else { // Do nothing. }
    }
}
```

There are two different types of exceptions that could arise from this program: ```Exception``` and/or ```IOException```, so we need to declare that our function could potential throw either one of them. That's basically it! As we can see, ```throw``` clauses are ostensibly simpler than the ```try```/```catch``` statements from earlier.

> ## Defining Your Own Exceptions

The exceptions that we've encountered might seem abstract, but in reality all exceptions in Java are simply ```class```es: the same that we've been working with in all of Java programming. Therefore, we can easily define new user-defined exceptions to do particular things that we want.

However, there are still some fundamental methods that _all_ exceptions should have in order for us to classify it as an exception. In Java, these methods are:

```public String getMessage()``` | Returns a detailed message about the exception that has occurred.
```public Throwable getCause()``` | Returns the cause of the exception as represented by a Throwable object.
```public String toString()``` | Returns the name of the class concatenated with the results of ```getMessage()```.
```public void printStackTrace()``` | Prints the result of ```toString()``` along with the stack trace to ```System.err``` (the error output stream).
```public StackTraceElement[] getStackTrace()``` | Returns an array containing each element on the stack trace.
```public Throwable fillInStackTrace()``` | Fills the stack trace of this Throwable object with the current stack trace, adding to any previous information in the stack trace.

These methods are fundamental to what an exception is in Java, and so it would be extremely tedious if we would have to implement these _every time_ we wanted to define a new exception. These should instead just be default methods for any class that we call an exception. In order to do this in Java, we use the ```extends Exception``` keyword in the class name declaration. For example, we could define an exception called ```myException``` in the following way:

```java
public class MyException extends Exception {
    private char c; 
	
    public MyException(char c) {
    	this.c = c;
    }
    
    public MyException() {
    	this('a');
    }

    public char getChar() {
        return this.c;
    }
}
```

In this exception, we have constructors and also a character associated with the exception that can be accessed through the ```getChar()``` function. However, although they're not explicitly written, we also have the all of the default methods such as ```getMessage()``` and ```printStackTrace()``` and whatnot for these class too. If for some reason we want to change any one (or more) of the default methods, we could simply just implement it ourselves in our class and ```@Override``` the default method implementation:

```java
public class MyException extends Exception {
    private char c; 
	
    public MyException(char c) {
    	this.c = c;
    }
    
    public MyException() {
    	this('a');
    }

    public char getChar() {
        return this.c;
    }
    
    @Override
    public String toString() {
    	return "This is a different message than the default.";
    }
}
````

That's it! If we wanted to use our newly defined exception in our code, it could look something like this: 

```java
public class Example {
    public static void main(String[] args) {
        try {
            throw new MyException();
        } catch (MyException e) {
            System.err.println(e.getChar());

            e.printStackTrace();
        }
    }
}
```

Running this code would give us the following output on the ```System.err``` stream:

```
a
test.MyException: This is a different message than the default.
	at test.Example.main(Example.java:6)
```

This is as expected given our code implementation from above.

> ## Exercises

> ### Problem 1

Consider the following code sample:

```java
public class Example {
    public static void main(String[] args) {
        int i = Integer.parseInt(args[0]);

        try {
            if (i == 0) {
                throw new NullPointerException();
            }
            else if (i == 1) {
                throw new Exception();
            }

            i += 2;
       	} catch (NullPointerException e) {
            i -= 1;
        } catch (Exception f) {
            i += 4;
        } finally {
            i *= 3;
        }

        System.out.println(i);
    }
}
```

After reading this code, answer the following questions:

  1. Suppose that the number ```0``` is passed into the function, such that ```int i = 0``` at the beginning of the program. What is the value of ```i``` that is printed out at the end of the program?
  2. Suppose that the number ```1``` is passed into the function, such that ```int i = 1``` at the beginning of the program. What is the value of ```i``` that is printed out at the end of the program?
  3. Suppose that the number ```2``` is passed into the function, such that ```int i = 2``` at the beginning of the program. What is the value of ```i``` that is printed out at the end of the program?

> ### Problem 2

_This problem is adapted from [GeeksforGeeks](https://www.geeksforgeeks.org/java-gq/exception-handling-2-gq/)._

What is the expected ```System.out``` output for the following code sample:

```java
class Test extends Exception { }
  
class Main {
   public static void main(String args[]) { 
      try {
         throw new Test();
      }
      catch(Test t) {
         System.out.println("Got the Test Exception");
      }
      finally {
         System.out.println("Inside finally block ");
      }
  }
}
```

> ### Problem 3

_This problem is adapted from [Cornell's CS2110 Course](http://www.cs.cornell.edu/courses/cs2110/2016sp/recitations/recitation03/problemSet/handoutSolution.pdf)._

Consider the following class. Several possible sequences of numbers can be printed by a call ```first(i)```, depending on the value of ```i```. List each sequences of numbers that can be printed by such a call, along with the value of ```i``` that causes that sequence to be printed.

```java
public class B {
    public static void first(int i) {
        try { 
            System.out.println("0"); 
            second(i); 
            System.out.println("1");
        } catch (Exception e) { 
            System.out.println("2");
        }
    }

    public static void second(int i) throws Exception { 
        System.out.println("3");
        try {
            int b = 5 / i; 
            System.out.println("4");
            if (i == 6) throw new Exception(); 
            System.out.println("5");
        } catch (ArithmeticException e) { 
            System.out.println("6");
        }
        System.out.println("7");
    }
}
```

<hr>

<div class="two-container" style="width: 100%">
  <div style="text-align: center;"><a href="/java/login-info/index.html" class="btn btn--info" style="font-size:13pt">Previous Lesson</a></div>
  <div style="text-align: center;"><a href="/java/abstract-data-types/index.html" class="btn btn--info" style="font-size:13pt">Next Lesson</a></div>
</div>
