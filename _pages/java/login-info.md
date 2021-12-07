---
permalink: /java/login-info/
author_profile: false
title: "Storing User Data"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

> ## Introduction

Let's travel back to the time of the dinosaurs when the Internet was first created. At the time, web browsers like Firefox and Chrome didn't exist, and moreover, people actually had to memorize all of their login information to their user accounts on different websites. If you're like me and have horrible memory, this would prove to be an impossible task. Today, we'll see if we can write a Java program that keeps track of all of our different user accounts.

Your task for today will be to write a Java program that helps you (and me) keep track of all of our different user accounts. In doing so, you'll practice many of the things we've talked about in Java over the past few weeks, including...

  - Arrays and the List Interface
  - ```for```/```while``` loops
  - Conditional statements
  - Abstraction and good programming practice

> ## Getting Set Up

Clone the project repository at [this link](https://www.github.com/myaomeow/login-info). If you're unfamiliar with what a repository is, read a brief description [here](/java/game-of-life/index.html#getting-set-up). Download both of the files in the ```src``` directory, which will serve as our template code for this project.

> ## Starting the Project

All of the code that we need to write for this project should only modify the ```LoginInfo.java``` source file. In other words, don't touch the ```Application.java``` file, which serves to set up the graphical user interface (GUI). In starting any project, the first thing to always do is to go through all of the files and have a sense of what the files are individually doing. Go ahead and do this now.

In the ```LoginInfo.java``` template code, you can see that the functions that we need to write have already been outlined for us. I've attached a snippet of it here:

```java
public class LoginInfo {
    // TODO: Add any relevant fields here.

    public LoginInfo(File f) {
        // TODO: f is a .txt file that will store all the login 
        // information. Do whatever you need to do here.
    }

    /* 
     * This function adds a new login information entry with the argument
     * URL, username, and password.
     */
    public void newLoginEntry(URL url, String username, 
                              String password) {
        // TODO: Feel free to change the return variable type if you
        // want.

        return;
    }

    /* 
     * This function retrieves an existing login entry with the argument
     * URL. The username is optional. If a username is provided, the
     * login information entry should match the argument username (case-
     * insensitive.
     */
    public String[] retrieveLoginInfo(URL url, String username) {
        // TODO: Return type should be a String array of length 2.
        // The 0th argument should be the retrieved username.
        // The 1st argument should be the retrieved password.
        // If no username and password are found, then return the array
        // { "No URL Match.", "No URL Match." }.

        return null;
    }

    /* 
     * This function should update the password for the account
     * associated with the argument URL.
     */
    public String updatePassword(URL url, String newPassword) {
        // TODO: Return "Password successfully updated." If password
        // update was successful and argument URL was found. Otherwise,
        // return "No URL entry found.".

        return null;
    }
}
```

An outline for the code has already been provided. Feel free to add any additional helper methods or even additional Java ```class```es as needed!

> ## Your Task

Your task is to fill in the functions with code that does the required objective of the function written in the comments above each of the respective functions. Feel free to add any additional helper functions or additional Java ```class```es when necessary.

Note that we expect that you will _not_ already know all of the necessary methods that are needed for this assignment! We haven't even introduced the idea of what a Java ```File``` class, Scanner, or a bunch of other things are. This assignment is therefore also an exercise in (1) identifying exactly what you want your code to do, (2) looking up how to do this on Google, and (3) reading documentation and community answers on what to implement in your own code.

> ## Running Your Code

Once you think that your code is working as expected, run your code using the following terminal input while in the ```src``` directly:

```
$ javac *.java
$ java Application
```

A Java application should pop up that looks something like this:

![login-info](/assets/images/login-info.png){:height="70%" width="70%"}

Try uploading a few of your own login information sets for different URLs and see if it works. The best part is that even after you exit from the application, your stored login information should still be present locally and so you can simply retrieve it anytime later by using starting up this application again!

> ## Solutions

An example of the solution code can be found in the ```sol``` directory within the linked repository from above.

<hr>

<div class="two-container" style="width: 100%">
  <div style="text-align: center;"><a href="/java/game-of-life/index.html" class="btn btn--info" style="font-size:13pt">Previous Lesson</a></div>
  <div style="text-align: center;"><a href="/java/exception-handling/index.html" class="btn btn--info" style="font-size:13pt">Next Lesson</a></div>
</div>
