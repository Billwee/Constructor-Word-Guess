var Word = require('./Word');
var inquirer = require('inquirer');

var x = (require('events').EventEmitter.prototype._maxListeners = 20);

var wordsArr = [
  'JURASSIC PARK',
  'THE MATRIX',
  'THE GODFATHER',
  'PULP FICTION',
  'THE GREEN MILE',
  'SPIRITED AWAY',
  'KILL BILL',
  'THE IRISHMAN',
  'THE DARK KNIGHT',
  'SCHINDLERS LIST',
  'FIGHT CLUB',
  'FORREST GUMP',
  'PARASITE'
];

var wordsArrCopy = [
  'JURASSIC PARK',
  'THE MATRIX',
  'THE GODFATHER',
  'PULP FICTION',
  'THE GREEN MILE',
  'SPIRITED AWAY',
  'KILL BILL',
  'THE IRISHMAN',
  'THE DARK KNIGHT',
  'SCHINDLERS LIST',
  'FIGHT CLUB',
  'FORREST GUMP',
  'PARASITE'
];

var word;
var pick;
var guessesLeft = 8;
var alphabet = 'abcdefghilklmnopqrstuvwxyz1234567890';
var winner = 0;

var pickWord = function() {
  let pickNum = Math.floor(Math.random() * wordsArr.length);
  pick = wordsArr[pickNum];
  wordsArr.splice(pickNum, 1);
  word = new Word(pick);
  word.returnString();
};

var game = function() {
  if (guessesLeft === 0) {
    console.log('\n***Sorry you are all out of guesses***\n');
    inquirer
      .prompt([
        {
          type: 'confirm',
          name: 'lose',
          message: 'Would you like to play again?'
        }
      ])
      .then(function(answer) {
        if (answer.lose) {
          wordsArr = wordsArrCopy;
          guessesLeft = 8;
          alphabet = 'abcdefghilklmnopqrstuvwxyz1234567890';
          console.log(
            '\n****Welome to the movie name guessing game!*****\n\nHere is your first movie title to guess!'
          );
          pickWord();
          game();
        } else {
          console.log('\nGame Over\n');
        }
      });
  } else {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'guess',
          message: 'Guess a letter/number!',
          validate: function(input) {
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
          }
        }
      ])
      .then(function(user) {
        //Wont let you guess the same letter twice
        if (alphabet.indexOf(user.guess.toLowerCase()) === -1) {
          console.log(`\nYou've already guessed ${user.guess.toUpperCase()}\n`);
          return game();
        } else {
          alphabet = alphabet.replace(user.guess, '');
        }

        //Wrong guess
        if (word.arr.indexOf(user.guess.toUpperCase()) === -1) {
          guessesLeft--;
          console.log(
            `\nThis movie title doesn not contain "${user.guess.toUpperCase()}"\n\nYou have ${guessesLeft} guesses left!`
          );
        }
        //Checks user guess and returns string of answer
        //Wont run if out of guesses
        if (guessesLeft >= 1) {
          word.guessCall(user.guess.toUpperCase());
          word.returnString();
        }
        //Checks if you've guessed the complete word and resets
        //variables
        if (word.answer === pick) {
          winner++;
          if (winner === wordsArrCopy.length) {
            return console.log(
              "\nYou've guessed all the movies correctly!\n\n***YOU WIN***\n"
            );
          }
          console.log('\nYou guessed correct!\n');
          console.log("\nHere's your next movie to guess!\n");
          guessesLeft = 8;
          alphabet = 'abcdefghilklmnopqrstuvwxyz1234567890';
          pickWord();
          game();
        } else {
          game();
        }
      });
  }
};

console.log(
  '\n****Welome to the movie name guessing game!*****\n\nHere is your first movie title to guess!'
);

pickWord();
game();
