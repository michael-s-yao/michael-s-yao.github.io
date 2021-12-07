---
permalink: /java/evil-hangman/
author_profile: false
title: "Evil Hangman (Project)"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

<div class="notice--info">
<p style="font-size:13pt"><strong>Learning Objectives:</strong> By the end of this learning module, you should understand how to...</p>
<ol>
  <li style="font-size:13pt">use the map and set interfaces in an actual, real-life project.</li>
  <li style="font-size:13pt">write a basic AI for the game of hangman.</li>
</ol>
</div>

> ## Introduction

Everyone has played hangman at one point or another during their childhood. The idea is that a player (or perhaps in this case, a computer) chooses a random word from a dictionary and another player (in this case, a user) has to progressively figure out what that random word was through guessing characters before they run out of incorrect guesses.

However, what if the computer wasn't forced to choose their random word from the dictionary at the beginning? Instead the computer coould maintain a list of every word in the English language and then continuously trim it down to try to dodge the player's guesses as much as possible. While this is technically cheating in hangman, we can implement such a computer strategy very cleverly to prevent guesser from finding out that the computer is cheating. It turns out that by making the computer a tad bit smarter (and perhaps more devious), it becomes incredibly difficult to correctly guess the word from the dictionary!

Let's delve into the specifics a bit more carefully. A fundamental component of hangman is that the computer accurately represents a word that was chosen beforehand using the letters that have been guessed. However, if the computer doesn't do this, then it gives the player who chooses the hidden word an enormous advantage. As an example, support that you're trying to guess the word which currently looks like ```do-ble```. There are only two words in the English dictionary that follow this pattern: ```doable``` and ```double```. However, it doesn't matter which one you choose here because the computer will just 'pick' the other option, since they are cheating and haven't actually committed to any word. If this is your last allowed guess, you will certainly lose the game.

In this programming exercise, you will program an "Evil Hangman" computer whose goal is to try to make it as difficult as possible for the player to guess the word correctly through using this described cheating technique.

> ## Example

Suppose that we are playing hangman against the computer and there are only nine words in the entire English dictionary: ```ally```, ```beta```, ```cool```, ```deal```, ```else```, ```flew```, ```good```, ```hope```, and ```ibex```. Suppose the we guess the letter ```e```. The computer will then sort these words of the english dictionary into different classes dependeing on how many letters of ```e``` each of these words contain, and where they are located in the word:

  - ```----```: ```ally```, ```cool```, and ```good```
  - ```-e--```: ```beta``` and ```deal```
  - ```--e-```: ```flew``` and ```ibex```
  - ```e--e```: ```else```
  - ```---e```: ```hope```

The computer wants to keep the class of words as big as possible, and the biggest class of words here is ```---``` with three words in the class. Therefore, the computer will tell us that there was no ```e``` in our word, and our set of possible words has not been reduced down to ```ally```, ```cool```, and ```good```. In order for the game to remain consistent, none of the other six words in the English dictionary can be the "correct" word in this game.

> ## Your Turn

Now that you understand the idea behand the evil hangman, it's your turn to implement it! Navigate to the ```repl``` linked [here](https://repl.it/@myaomeow/EvilHangman), which is also shown below, and follow the following steps.

<iframe height="1000px" width="100%" src="https://repl.it/@myaomeow/EvilHangman?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

> ### Problem 1

Read through the ```InnocentHangman```, ```Hangman```, and ```Main``` Java implementations to try and understand the structure of the program. How does everything work with each other? Assuming the boolean ```EVIL``` is set to ```false``` in ```Main```, try running the program and playing a game of hangman using the "innocent" AI.

> ### Problem 2

Navigate to the ```EvilHangman``` source code and first read through what's already given. First, implement the ```getArchetypes()``` and ```countCinS()``` helper functions.

  - ```getArchetypes()``` takes in a character ```c``` as an input and attempts to construct the equivalence classes as shown in the [Example section](/java/evil-hangman/index.html#example) above. The idea is that it creates a ```Map``` that takes the "archetype" of a class of words as keys, and the Set of words with that archetype as a value. For example, going with our earlier example, ```----``` might be a key in the map and the set ```{ alley, cool, good }``` would be the value in the map. ```-e--``` would be another key in the map and the set ```{ beta, deal }``` would be the associated value. The archetype keys should include not only the character ```c```, but also all of the previous "correctly" guessed characters as well that are in those class of words.
  - ```countCinS()``` takes in a character ```c``` and counts the number of unique times that this character appears in a String ```s```.

> ### Problem 3

Implement the ```getAllWords()```, ```getGuesses()```, ```getKey()```, ```getTurnsRemaining()```, and ```isGameOver()``` methods. If your functions get too long or complex, you're probably doing something wrong.

> ### Problem 4

Finally, implment the ```makeGuess()``` function. This is the crux of this programming project. This function takes in a character ```c``` that represents the character that the player guessed, and the computer will update the fields of the ```EvilHangman.java``` class appropriately. Here are some things that you should think about when writing this function. 

  1. Make sure to choose the archetype/key with the most number of words with that archetype. You can get all of the archetypes and associated sets of words through using the ```getArchetypes()``` function that you wrote in Problem 2 above.
  2. If two archetypes have the same number of words that are associated with them, then pick the archetype that reveals the least number of new characters. 
  3. Make sure to increment the number of turns if the character guessed doesn't show up in the archetype chosen. To check whether the character guessed is in the archetype chosen, check if your original key and updated key are the same.
  4. Add the guessed character to the set of guesses. Simultaneously, make sure that the argument character is a valid guess, meaning that it hasn't been guessed before and that it's also a letter from ```a``` to ```z```.
  5. This function should return the updated archetype/key, or it should return ```null``` if the guess wasn't a valid guess per step 4 above. 

> ### Problem 5

After you've completed Problems 2 through 4, change ```EVIL``` to ```true``` in ```Main.java``` and try to run your code. You'll probably have at least a couple of bugs to work through first, but once you iron those out, try playing with your "evil" hangman AI. Is it more difficult to win than when you were playing against the "innocent" AI?

*Credits: This project description was largely cited from the online document linked [here](http://nifty.stanford.edu/2011/schwarz-evil-hangman/Evil_Hangman.pdf).*

<hr>

<div class="two-container" style="width: 100%">
  <div style="text-align: center;"><a href="/java/maps-and-hashing/index.html" class="btn btn--info" style="font-size:13pt">Previous Lesson</a></div>
  <div style="text-align: center;"><a href="/java/bfs-dfs/index.html" class="btn btn--info" style="font-size:13pt">Next Lesson</a></div>
</div>
