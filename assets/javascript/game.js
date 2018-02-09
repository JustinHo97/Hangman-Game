

//Enter word
var guessWord = prompt("Player one, enter your word");
guessWord = guessWord.toLowerCase();
var hiddenWord = [];
var splitGuess = guessWord.split("");
var guessCount = 13;
var pastGuess = [];
var wrongList =[];
hideWord();
//Player key and count  check

document.onkeyup = function (event) {

    var Input = event.key;
    Input = Input.toLowerCase();

    if (Input.match(/[a-z]/i) && Input.length === 1) {
    var Pastguess = checkPastGuess(Input, pastGuess);
        if (guessCount === 0) {
            alert("You lose!")
        }
        else if (hiddenWord.toString() === splitGuess.toString()) {
            alert("You win!")
        }

        else if (Pastguess) {
            checkGuess(Input, splitGuess);

        }
    }
    else {
        console.log("Invalid Character");
    }

}
//Functions

//Turns a string into Underscores and leaves spaces alone
function hideWord() {
    console.log(guessWord);
    console.log(splitGuess);
    for (var i = 0; i < splitGuess.length; i++) {
        if (splitGuess[i] === " ") {
            hiddenWord.push(" ")
        }
        else {
            hiddenWord.push("_")
        }
    }
    console.log(hiddenWord);
}
//Compare User guess to the guess word array if true replace blank
function checkGuess(Input, splitGuess) {
    var check = 0;
    for (var i = 0; i < splitGuess.length; i++) {
        if (Input === splitGuess[i]) {
            hiddenWord[i] = Input;
            check++
        }
    }
    if (check === 0) {
        guessCount--
        wrongList.push(Input);
    }
    console.log(hiddenWord);
    console.log(guessCount);
    console.log(wrongList);
}

function checkPastGuess(Input, pastGuess) {
    var guessCheck = 0;
    for (var i = 0; i < pastGuess.length; i++) {
        if (Input === pastGuess[i]) {
            console.log("same guess");
            guessCheck++
        }
    }
    console.log(Input)
    if (guessCheck === 0) {
        pastGuess.push(Input);
        return true;
    }
}
