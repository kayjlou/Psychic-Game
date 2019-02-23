src = "https://code.jquery.com/jquery-3.3.1.min.js";
integrity = "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=";
crossorigin = "anonymous";

//Array with all the possible computer choices a-z
var computerChoices = "abcdefghijklmnopqrstuvwxyz";

// Variables for wins, losses, guesses left and what has been guessed
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];

//When the user presses a key it triggers this function
document.onkeyup = function(event) {
  //Determines what key was pressed
  var userGuess = event.key;

  //Randomly chooses a choice from the options array for Computer guess
  var randomLetter =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  //Console log computer guess
  console.log(randomLetter);

  //Loop for guesses
  if (
    guesses.indexOf(userGuess) < 0 &&
    computerChoices.indexOf(userGuess) >= 0
  ) {
    // Userguess equals guesses array
    guesses[guesses.length] = userGuess;

    //Guesses left decreases by 1
    guessesLeft--;
  }

  //If user guess is same as comupter then win increase by 1
  if (userGuess === randomLetter) {
    wins++;
    console.log("YAY YOU WON!");
    guesses = [];
    guessesLeft = 9;
  }

  //If guesses left equal zero then record as loss and reset
  if (guessesLeft == 0) {
    losses++;
    console.log("You have lost!");
    guesses = [];
    guessesLeft = 9;
  }

  //  Numbers update when key is pressed

  var html =
    //"<h1>Psychic Game</h1>" +
    "<h3>Guess what letter I'm thinking</h3>" +
    "<p>Wins: " +
    wins +
    "</p>" +
    "<p>Losses: " +
    losses +
    "</p>" +
    "<p>Guesses Left : " +
    guessesLeft +
    "</p>" +
    "<p>Guesses: " +
    guesses +
    "</p>";

  // Set the inner HTML contents of the game div into our html string
  document.querySelector("#game").innerHTML = html;
};
