function Letter(character, isGuessed) {
  this.character = '';
  this.isGuessed = false;

  this.placeholder = function() {
    if (isGuessed) {
      return character;
    } else {
      return '_';
    }
  };

  this.guess = function(letter) {
    if (letter === this.character) {
      this.isGuessed = true;
    } else {
      return;
    }
  };
}

module.exports = Letter;
