var word = require(`./word`);

var inquirer = require(`inquirer`)

function game() {
    this.wordArray = ["this", "project", 'was', 'helaciously', 'difficult']
    this.guessesLeft = 10;
    this.word = this.wordArray[Math.floor(Math.random() * this.wordArray.length)]
    this.promptGuess = inquirer.prompt([

        {
          type: "input",
          name: "guess",
          message: 'Make your guess!'
        }
    ]).then(function(guess) {
        this.guessesLeft-=1
}) }