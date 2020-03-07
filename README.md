# Constructor-Word-Guess

Welcome to my movie-themed constructor word guess game. In this readme, I'll be going over the approach, implementation, and organization of this node.js application.

## Overview

- Once the user executes the index.js file with node.js by typing this in your terminal:

- `node .\index.js`

- The user will be presented with an opening dialog welcoming them to the game and the first movie title to guess.
- Enter one letter or number and press enter to check it against the current movie title displayed.
- If it matches, the letters are revealed and the user asked to guess again. If the guess isn't found, they will lose one of their eight guesses and the same progress made on guessing the movie is displayed.
- Once the movie title is revealed in its entirety the user is congratulated, the next movie title is displayed for guessing, and the eight guesses are restored.
- When the user runs out of guesses the game is over and they're asked if they'd like to play again.
- Once all the movies available are guessed correctly, the user is informed and congratulated. The game is now over.

## Before You Start

Once you copy the files over and open them in your editor you'll need into install a node package called _inquirer_. You can do this by typing `npm install` into your terminal once you're in the games directory.

## Challenges

I had a few obstacles to overcome when writing this:

- ### Input validation for only one letter and/or number.

- I had to use these two conditionals:

```js
var code = input.charCodeAt();
if (input.length != 1) {
  return false;
}
if (
  !(code > 47 && code < 58) &&
  !(code > 64 && code < 91) &&
  !(code > 96 && code < 123)
) {
  return false;
} else {
  return true;
}
```

- ### Preventing the user from guessing the same number or letter more than once.
  - I created a string that included all the letters and numbers. When the user guessed that letter or number it was removed from the string. If the user tried to guess is again it wouldn't be found in the string and prompt the user to enter something else.

```js
var alphabet = 'abcdefghilklmnopqrstuvwxyz1234567890';
if (alphabet.indexOf(user.guess.toLowerCase()) === -1) {
  console.log(`\nYou've already guessed ${user.guess.toUpperCase()}\n`);
  return game();
} else {
  alphabet = alphabet.replace(user.guess, '');
}
```

## Video Demonstration

- You can a video of me demoing the game by [Clicking Here](https://drive.google.com/file/d/1sOCjabtcqIej-2sjNlytfAGNF1kJ8RG8/view)
