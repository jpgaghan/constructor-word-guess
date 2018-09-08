var word = require(`./word`);

var inquirer = require(`inquirer`)

function Game() {
    this.wordArray = ["this", "project", 'was', 'helaciously', 'difficult']
    this.guessesLeft = 10;
    this.words = this.wordArray[Math.floor(Math.random() * this.wordArray.length)]
//     this.promptGuess = inquirer.prompt([

//         {
//           type: "input",
//           name: "guess",
//           message: 'Make your guess!'
//         },
//     ]).then(function(guess) {
//         this.guessesLeft-=1
// }) 
}

var game = new Game();
console.log(word.createwordObj(game.words));