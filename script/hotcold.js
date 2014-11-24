// Andela Project 3 - Hot or Cold with JavaScript
// Fiyinfoluwa Adebayo
// 21-24th November, 2014

//define all variables to be used
var oldDifference = 0; 
var submitBtn = document.getElementsByTagName('button')[0];
var newGameBtn = document.getElementsByTagName('button')[1];
var userInputElement = document.getElementsByTagName('input')[0];
var computerGuess = Math.round(Math.random() * 100);
var resultDiv = document.getElementById('showResult');

//define all the functons to be called
var restart = function() {
    alert('Game Restarted');
    computerGuess = Math.round(Math.random() * 100);
    alert(computerGuess); //remove this alert!
}

var appendChildToDiv = function(string) {
    // var currentDiv = document.getElementsById('container');
    // document.body.insertAfter(newDiv,currentDiv)
    var result = '<span>'+ string + '</span>';
    //add this to the dom element
}
var newGame = function() {
    alert(computerGuess);
    gameApp(computerGuess);
}
var gameApp = function(guess) {
    var userInput = userInputElement.value;
    //clear user input field
    userInputElement.value = '';
    if(isNaN(userInput) || userInput > 100 ) {
        //output on the screen to enter a valid input.
        console.log('please enter a valid input');
    } 
    else {
        if(guess == userInput){
            alert('You guessed it!!!');
                var playNewGame = prompt('Play a New Game? Enter Yes/No').toUpperCase();
                if(playNewGame == 'Yes') {
                    //reload page and start the game again.
                    restart();
                }
                else {
                    alert('Had fun with you... Bye!!!');
                }
        }
        else {
            newDifference = Math.abs(userInput - guess);
            if(newDifference < oldDifference){
                alert('you are getting Hotter');
                appendChildToDiv('you are getting Hotter');
            } 
            else if(newDifference > oldDifference) {
                alert('you are getting Colder');
                appendChildToDiv('you are getting Colder');
            }
            else if(newDifference == oldDifference) {
                alert('you are neither Hot or Cold');
            }
            else{
                alert('An Error occured');
            }
            oldDifference = newDifference;
        }
    }
}

//set all the click handler
 submitBtn.onclick = newGame;
 newGameBtn.onclick = restart;
