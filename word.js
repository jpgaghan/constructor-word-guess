var jsLetter = require("./letter.js");

function Word(word) {
     
    this.letterArray = [];
    this.createwordObj = function(word) {
        for (i=0; i<word.length; i++) {
           this.letterArray.push(new Letter(word[i])
        )
        this.toString = this.displayWord + letterArray[i].character
        
   }};

   this.guessChecker = function(guessedChar){
    this.letterArray.forEach(this.guessCheck(guessedChar)) 
   };
};

module.exports = Word;