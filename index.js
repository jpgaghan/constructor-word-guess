var Wordes = require(`./word.js`);
var inquirer = require(`inquirer`)
var count = 0;
function Game() {
    this.wordArray = ["this", "project", 'was', 'helaciously', 'difficult'];
    this.guessesLeft = 10;
    this.words = this.wordArray[Math.floor(Math.random() *this.wordArray.length)];
    this.promptGuess = function() { if(count<2) {inquirer.prompt([
        {
          type: "input",
          name: "guess",
          message: 'Make your guess!'
        },
    ]).then(function(guess) {
        count+=1
        console.log(count)
        game.guessesLeft-=1
        word.guessChecker(guess);
        console.log(word.toString());
        game.promptGuess();
}) }
}}

var game = new Game();
console.log(game);

var word = new Wordes(game.words);


// this extends only the instance of that object
word.toString = function() {
    var word = "";
    for (var i = 0; i<this.letterArray.length;i++) {
        word += this.letterArray[i].character
    };
    return word;
}


console.log(word.toString());
console.log(count)
game.promptGuess();

// console.log(word.createwordObj(game.words));