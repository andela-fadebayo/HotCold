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
  newGame: function() {
             HotCold.gameApp(HotCold.computerGuess);
             console.log("computer generated guess is " + HotCold.computerGuess);
          },
  showResult: function(status) {
                var result = document.getElementById('showResult');
                result.innerHTML = "<span>" + status + "</span>";
              },
  restart: function() {
             alert('Game Restarted');
             HotCold.showResult('Game Restarted...<em>goodluck!!!</em>')
             HotCold.computerGuess = Math.round(Math.random() * 100);
           },
  gameApp: function(guess) {
             var userInput = HotCold.userInputElement.value;
             console.log("user input was " + userInput);
             //clear user input field
             HotCold.userInputElement.value = '';
             //validate user input
             if(isNaN(userInput) || userInput > 100 || userInput < 0) {
               HotCold.showResult('Please enter a <strong>valid</strong> input. See instructions above.');
               console.log('Please enter a valid input!!!');
             }
             else {
               if(guess == userInput){
                 HotCold.showResult('You guessed it!!! Random Number is ' + HotCold.computerGuess);
                 //ask to play new game
                 var playNewGame = prompt('Play a New Game? Enter Yes/No').toUpperCase();
                 if(playNewGame == 'YES') {
                   //reload page and start the game again.
                   HotCold.restart();
                 }
                 else {
                    //display farewell message
                    HotCold.showResult('I Had fun with you... <em>Bye!!!</em>');
                 }
               }
               else {
                 //find difference between the user's guess and the computer's guess
                 var newDifference = Math.abs(userInput - guess);
                 console.log('new difference is ' + newDifference);
                 var oldDifference = HotCold.oldDifference;
                 console.log('old difference is ' + oldDifference);
                 if (newDifference < oldDifference) {
                   //if the new difference is smaller, that means the user is getting
                   //closer to the computer's guess. 
                   HotCold.showResult('You are getting <em>hotter!</em>');
                 }
                 else if (newDifference > oldDifference) {
                   //if the new difference is larger, that means the user is getting
                   //farther away from the computer's guess. 
                   HotCold.showResult('You are getting <em>colder!</em>');
                 }
                 else if (newDifference == oldDifference) {
                   //if the differences are the same, the user is neither hot or cold.
                   HotCold.showResult('You are neither <strong>hot</strong> or <strong>cold</strong>!');
                 }
                 else {
                   //An error must have occured if this else block runs.
                   HotCold.showResult('An Error has occurred. Please click <em>New Game</em> to restart.');
                 }
                 HotCold.oldDifference = newDifference;
               }
             }
           }
  
};

//set all the click handler
HotCold.submitBtn.onclick = HotCold.newGame;
HotCold.newGameBtn.onclick = HotCold.restart;