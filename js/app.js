window.addEventListener("DomContentLoaded", () => {

// Grabbing the elements needed from the HTML in variables.
const squares = Array.from(document.querySelectorAll(".square"));
const displayPlayer = document.querySelector(".turn-display")
const gameResults = document.querySelector(".results")
const restartButton = document.querySelector("#again");

//Assigning an array to represent values for my board.
let board = 
["", "", "", 
"", "", "",
"", "", ""];

//Assigning a variable to indicate the player's turn and if the game is on-going.
let playerTurn = "X";
let gameStatus = true;

//Assigning end game if playerX or playerO won or was a tie
const playerXWon = "Player X Won"
const playerOWon = "Player O Won"

    restartButton.addEventListener("click", boardReset)
});