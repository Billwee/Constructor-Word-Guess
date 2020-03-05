var Words = require('./Word');

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

var pickWord = function() {
  let pick = Math.floor(Math.random() * wordsArr.length);
  console.log(pick);
  wordsArr.splice(pick, 1);
  console.log(wordsArr);
};
