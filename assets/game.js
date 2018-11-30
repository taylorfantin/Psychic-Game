var computerChoices = ["a", "b", "c" ,"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessSoFar = [];
var guessLeft=9;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeftText = document.getElementById("guessLeft-text");
var guessSoFarText = document.getElementById("guessSoFar-text");


winsText.textContent = wins;
guessLeftText.textContent = guessLeft;
lossesText.textContent = losses;
guessSoFarText.textContent = guessSoFar;

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    console.log("Player guess " + userGuess);
    console.log("Computer letter " + computerGuess);

    var guessIsInAlphabet = computerChoices.indexOf(userGuess) > -1;
    var userHasNotAlreadyGuessed = guessSoFar.indexOf(userGuess) ===-1;
   
    if (guessIsInAlphabet && userHasNotAlreadyGuessed) {
        gameLogic(userGuess, computerGuess);

    }
}
    
function gameLogic(ug, cg) {
    if (ug===cg){
        alert("You are correct!  I was thinking of the letter " + cg+".");
        wins++;
        winsText.textContent = wins;
        guessLeft=9;
        guessLeftText.textContent = guessLeft;
        guessSoFar = [];
        guessSoFarText.textContent = guessSoFar;
        reset();
    }
    else {
        guessLeft--;
        guessLeftText.textContent = guessLeft;
        guessSoFar.push(ug);
        guessSoFarText.textContent = guessSoFar;

        if (guessLeft===0){
            alert("You Lose! The letter was " + cg+".");
            losses++;
            lossesText.textContent = losses; 
            guessLeft=9;
            guessLeftText.textContent = guessLeft;
            guessSoFar = [];
            guessSoFarText.textContent = guessSoFar;
            reset();
        }
    }
}

function reset() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
}
