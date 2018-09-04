var regEx = new RegExp('^[a-z]*$');
var inquirer = require("inquirer");
var currentWord = "fuck you"

function Letter() {
    this.character = "string";
    this.guessed = false;
    this.guessedLetters = [];
    this.previousGuess = function () {
        if(!this.guessedLetters.includes(this.character) && regEx.test(this.character)) {
            return this.character
        } else if (this.guessedLetters.includes(this.character)) {
            console.log(previousGuess)
            // return `_`
        } else if (!regEx.test(this.character)) {
            console.log(`not a valid character dummy`)
        };
    }
    this.guess = function() {
     inquirer.prompt([
        {type: "input",
        name: "userInput",
        message: "Guess a letter!"
        }
    ]).then(function(answer) {
        letters.character = answer.userInput;
         if (currentWord.includes(letters.character)) {
            letters.correctGuess = true;
            letters.guessedLetters.push(letters.character);
            console.log(letters)
         } else {letters.correctGuess = false;}
            letters.guessedLetters.push(letters.character);
            console.log(letters)
        });
    }
    this.correctGuess = false;
}
var letters = new Letter();
letters.guess();