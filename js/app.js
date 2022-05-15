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
const endTie = "Its a Tie!"

// Creating a variable that will be used as a comparison to check if a player has reached any of the following win conditions represented by the borad itself.

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];
    restartButton.addEventListener("click", boardReset)
});