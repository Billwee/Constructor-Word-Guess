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

var word;
var pick;
var guessesLeft = 8;

var pickWord = function() {
  let pickNum = Math.floor(Math.random() * wordsArr.length);
  pick = wordsArr[pickNum];
  wordsArr.splice(pickNum, 1);
  // console.log(pick);
  word = new Word(pick);
  word.returnString();
  console.log(word.arr);
};

var game = function() {
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
      // console.log(word);
      word.guessCall(user.guess.toUpperCase());
      word.returnString();
      console.log(word.answer);
      console.log(pick);
      if (word.answer === pick) {
        console.log('You guessed correct!');
      } else {
        game();
      }
    });
};

pickWord();
game();
