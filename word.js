var Letter = require("./letter.js");
var variable;
function Wordes(word) {
     
    this.letterArray = [];
    for (var i=0; i<word.length; i++) {
       this.letterArray.push(new Letter(word[i]))
    }
   
   this.guessChecker = function(guessedChar){
    variable = guessedChar
    this.letterArray
    .forEach(function(guessedChar) {guessedChar.guessCheck(variable)}) 
   };
};

var ford = new Wordes("fuck")
ford.guessChecker(`u`);
console.log(ford)
module.exports = Wordes;