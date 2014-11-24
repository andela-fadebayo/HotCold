// Andela Project 3 - Hot or Cold with JavaScript
// Fiyinfoluwa Adebayo
// 21-24th November, 2014

//hot or cold app realized using object literals

var HotCold = {
  //define all variables
  oldDifference: 0,
  submitBtn: document.getElementsByTagName('button')[0],
  newGameBtn: document.getElementsByTagName('button')[1],
  userInputElement: document.getElementsByTagName('input')[0],
  computerGuess: Math.round(Math.random() * 100),
  restart:    function() {
                alert('Game Restarted');
                this.computerGuess = Math.round(Math.random() * 100);
                alert(this.computerGuess); //remove this alert!
              },
  showResult: function(status) {
                var result = document.getElementById('showResult');
                this.result.innerHTML = "<span>" + status + "!</span>";
              },
  newGame:    function() {
                alert(this.computerGuess);
                this.gameApp(this.computerGuess);
              },
  gameApp:    function(guess) {
                var userInput = userInputElement.value;
                //clear user input field
                this.userInputElement.value = '';
                //validate user input
                if(isNaN(this.userInput) || this.userInput > 100 || this.userInput < 0) {
                  this.showResult('Please enter a <strong>valid</strong> input')
                } 
                else {
                    if(this.guess == this.userInput){
                      this.showResult('You guessed it!!! Random Number is ' + this.computerGuess);
                      //ask to play new game
                      var playNewGame = prompt('Play a New Game? Enter Yes/No').toUpperCase();
                      if(this.playNewGame == 'YES') {
                        //reload page and start the game again.
                        this.restart();
                      }
                      else {
                        //display farewell message
                        this.showResult('I Had fun with you... <em>Bye!!!</em>');
                      }
                    }
                    else {
                      //find difference between the user's guess and the computer's guess
                      this.newDifference = Math.abs(this.userInput - this.guess);
                      if(this.newDifference < this.oldDifference) {
                        //if the new difference is smaller, that means the user is getting
                        //closer to the computer's guess. 
                        this.showResult('You are getting <em>hotter</em>');
                      } 
                      else if(this.newDifference > this.oldDifference) {
                      //if the new difference is larger, that means the user is getting
                      //farther away from the computer's guess. 
                      this.showResult('You are getting <em>colder</em>');
                    }
                    else if(this.newDifference == this.oldDifference) {
                      //if the differences are the same, the user is neither hot or cold.
                      this.showResult('You are neither <strong>hot</strong> or <strong>cold</strong>');
                    }
                    else {
                      //An error must have occured if this else block runs.
                      this.showResult('An Error has occurred. Please click <em>New Game</em> to restart');
                    }
                    this.oldDifference = this.newDifference;
                  }
                }
              }
}

//set all the click handler
HotCold.submitBtn.onclick = newGame;
HotCold.newGameBtn.onclick = restart;