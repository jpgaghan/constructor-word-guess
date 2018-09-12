// var regEx = new RegExp('^[a-z]*$');
// regEx.test(this.character);

function Letter(character) {
    this.guessed = false;
    this.wordGenerator = function () {
        if(this.guessed) {
            return this.character
        } else {return ` _`}
    }
    this.character = this.wordGenerator();
    this.guessCheck = function(guess) {
         if (this.character === guess) {
            this.guessed= true;
            console.log(letters)
         } 
    }
}

module.exports=Letter;