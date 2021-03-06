function Letter(char, isGuessed) {
  this.character = char;
  this.isGuessed = false;

  this.placeholder = function() {
    if (this.isGuessed) {
      // console.log('true');
      return this.character;
    } else {
      // console.log('false');
      return '_';
    }
  };

  this.guess = function(letter) {
    if (letter === this.character) {
      // console.log('true');
      this.isGuessed = true;
    } else {
      // console.log('false');
      return;
    }
  };
}

//TESTS
// var wdx = new Letter('x');
// placeholder();
// console.log(wdx);

module.exports = Letter;
