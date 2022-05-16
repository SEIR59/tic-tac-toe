//Creating Variables for each of the players:
const player1 = "X";
const player2 = "O";
let currentPlayer = player1;

//Creating Variables for each of the elements for insertion.
const squares = document.querySelectorAll(".square")
const gameBoard = document.querySelector(".board")

// Creating the state of the game in an array and we are nulling the board for resets.
const gameState = Array(squares.length);
gameState.fill(null);

//Creating logic for each players turn.
if (gameBoard === null) {
    currentPlayer = player1
}
console.log(gameState);
