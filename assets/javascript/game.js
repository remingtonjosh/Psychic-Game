var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuesses = [];


var computerGuess;
var userChoiceText = document.getElementById("userchoice-text");
var guessesLeftText = document.getElementById("guessesLeft-text"); // WE NEED TO ADD THIS 
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");


function gameStart() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess)
    guessesLeft = 9
    userGuesses = []
}



gameStart();
document.onkeyup = function (event) {
    var userGuess = event.key;
    if (userGuess === computerGuess) {
        console.log("correct!")
        wins++
        gameStart();
    } else {
        console.log("wrong")
        userGuesses.push(userGuess);
        guessesLeft--
        console.log(guessesLeft)
        if (guessesLeft === 0) {
            losses++
            gameStart();
        }

    }
    userChoiceText.textContent = "You choose: " + userGuesses;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesLeftText.textContent = "Guesses left: " + guessesLeft; // WE NEED TO ADD THIS 

}