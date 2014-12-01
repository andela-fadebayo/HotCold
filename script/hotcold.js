// Andela Project 3 - Hot or Cold with JavaScript
// Fiyinfoluwa Adebayo
// 21-24th November, 2014

//Hot or Cold App realized using object literals

var HotCold = {
  //define all variables
  oldDifference: 0,
  userInputProgress: 0,
  submitBtn: document.getElementsByTagName('button')[0],
  newGameBtn: document.getElementsByTagName('button')[1],
  userInputElement: document.getElementsByTagName('input')[0],
  computerGuess: Math.round(Math.random() * 100),
  newGame: function() {
             HotCold.gameApp(HotCold.computerGuess);
             HotCold.progressBar(100, HotCold.userInputProgress, HotCold.computerGuess);
          },
  showResult: function(status) {
                var result = document.getElementById('showResult');
                result.innerHTML = "<span>" + status + "</span>";
              },
  restart: function() {
             alert('Game Restarted');
             HotCold.showResult('Game Restarted...<em>goodluck!!!</em>')
             HotCold.computerGuess = Math.round(Math.random() * 100);
             $("#sliderBar").animate({width: "0%"});
           },
  gameApp: function(guess) {
             var userInput = HotCold.userInputElement.value;
             HotCold.userInputProgress = userInput;
             //clear user input field
             HotCold.userInputElement.value = '';
             //validate user input
             if(isNaN(userInput) || userInput > 100 || userInput < 0 || userInput === "") {
               HotCold.showResult('Please enter a <strong>valid</strong> input. See instructions above.');
             }
             else {
               if(guess == userInput){
                 HotCold.showResult('You guessed it!!! Random Number is ' + HotCold.computerGuess);
                 //ask to play new game
                 var playNewGame = prompt('Play a New Game? Enter Yes/No').toUpperCase();
                 if (playNewGame === "") {
                  alert("Please answer YES or NO");
                  playNewGame = prompt("Play a New Game? Enter Yes/No").toUpperCase();
                 }
                 else if(playNewGame === 'YES') {
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
                 oldDifference = HotCold.oldDifference;
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
           },
  progressBar: function(fullWidth, userInput, computerChoice) {
                 var percent;
                 //function to animate progress based on user inputs
                 if (userInput > 100 || userInput < 0 || userInput === "" || isNaN(userInput)) {
                  percent = 0;
                 }
                 else {
                   percent = Math.abs(100 - (Math.floor(Math.abs(computerChoice - userInput))));
                   // document.getElementById("sliderBar").style.width=percent+'%';
                   $("#sliderBar").animate({width: percent + "%"});
                 }
               }
  
};

//set all the click handler
HotCold.submitBtn.onclick = HotCold.newGame;
HotCold.newGameBtn.onclick = HotCold.restart;