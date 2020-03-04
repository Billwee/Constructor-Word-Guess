var Letter = require('./Letter');

function Word(word) {
  this.arr = [...word];
  this.objArr = [];
  this.str = '';

  this.returnString = function() {
    // this.objArr = [];
    this.str = '';

    if (this.objArr && this.objArr.length) {
      this.objArr.forEach(element => {
        this.str += element.placeholder() + ' ';
        console.log('first');
      });
    } else {
      this.arr.forEach(element => {
        var letter = new Letter(element);
        this.objArr.push(letter);
        this.str += letter.placeholder() + ' ';
        console.log('second');
      });
    }
    // console.log(letter.placeholder());
    console.log(this.str);
    console.log(this.objArr);
  };

  this.guessCall = function(char) {
    this.objArr.forEach(element => {
      element.guess(char);
    });
    console.log(this.str);
    console.log(this.objArr);
  };
}

var adsf = new Word('Gue');

// console.log(adsf.returnString());
adsf.returnString();
adsf.guessCall('u');
adsf.returnString();
// console.log(adsf.guessCall('u'));
