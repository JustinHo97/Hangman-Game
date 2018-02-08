var guessWord = "Hello World";
var hiddenWord = [];
var splitGuess = guessWord.split("");
var guessCount = 13;
var userGuess = "o"

hideWord();
checkGuess(userGuess,splitGuess);

//Functions

//Turns a string into Underscores and leaves spaces alone
function hideWord(){
    console.log("---hideWord")
    console.log(guessWord);
    console.log(splitGuess);
    for(var i=0; i < splitGuess.length; i++){
        if(splitGuess[i]=== " "){
            hiddenWord.push(" ")
        }
        else {
            hiddenWord.push ("_")
        }
    }   
    console.log(hiddenWord);
    console.log("---hideWord") 
}
//Compare User guess to the guess word array if true replace blank
function checkGuess(userGuess, splitGuess){
    console.log("--- checkGuess")
    var check = 0;
    for (var i=0; i<splitGuess.length; i++){
        if (userGuess === splitGuess[i]){
            hiddenWord[i] = userGuess;
            check++
        }
    }
    if (check === 0){
        guessCount--
    }
    console.log(hiddenWord);
    console.log("---checkGuess");
}
console.log(guessCount);