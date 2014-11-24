// Andela Project 3 - Hot or Cold with JavaScript
// Fiyinfoluwa Adebayo
// 21-24th November, 2014

//define all variables to be used
var oldDifference = 0; 
var submitBtn = document.getElementsByTagName('button')[0];
var newGameBtn = document.getElementsByTagName('button')[1];
var userInputElement = document.getElementsByTagName('input')[0];
var computerGuess = Math.round(Math.random() * 100);

//define all the functons to be called
//function to restart the game after finish playing
var restart = function() {
    alert('Game Restarted');
    computerGuess = Math.round(Math.random() * 100);
    alert(computerGuess); //remove this alert!
}

//function to display progress status and final result
var showResult = function(status) {
    var result = document.getElementById('showResult');
    result.innerHTML = "<span>" + status + "</span>";
}

//function to reset the game
var newGame = function() {
    alert(computerGuess);
    gameApp(computerGuess);
}

//function to run progress bar
var progress = function (percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
}

//Hot or Cold game application function
var gameApp = function(guess) {
    var userInput = userInputElement.value;
    //clear user input field
    userInputElement.value = '';
    //validate user input
    if(isNaN(userInput) || userInput > 100 || userInput < 0) {
        showResult('Please enter a <strong>valid</strong> input')
    } 
    else {
        if(guess == userInput){
            showResult('You guessed it!!! Random Number is ' + computerGuess);
            //ask to play new game
                var playNewGame = prompt('Play a New Game? Enter Yes/No').toUpperCase();
                if(playNewGame == 'YES') {
                    //reload page and start the game again.
                    restart();
                }
                else {
                    //display farewell message
                    showResult('I Had fun with you... <em>Bye!!!</em>');
                }
        }
        else {
            //find difference between the user's guess and the computer's guess
            newDifference = Math.abs(userInput - guess);
            if (newDifference < oldDifference) {
                //if the new difference is smaller, that means the user is getting
                //closer to the computer's guess. 
                showResult('You are getting <em>hotter!</em>');
            } 
            else if (newDifference > oldDifference) {
                //if the new difference is larger, that means the user is getting
                //farther away from the computer's guess. 
                showResult('You are getting <em>colder!</em>');
            }
            else if (newDifference == oldDifference) {
                //if the differences are the same, the user is neither hot or cold.
                showResult('You are neither <strong>hot</strong> or <strong>cold</strong>!');
            }
            else {
                //An error must have occured if this else block runs.
                showResult('An Error has occurred. Please click <em>New Game</em> to restart.');
            }
            oldDifference = newDifference;
        }
    }
}

//set all the click handler
 submitBtn.onclick = newGame;
 newGameBtn.onclick = restart;