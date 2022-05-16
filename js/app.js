//Creating Variables for each of the players:
const player1 = "X";
const player2 = "O";
let currentPlayer = player1;

//Creating Variables for each of the elements for insertion.
const squares = document.querySelectorAll(".square");
const endGameBox = document.getElementById("endGameArea")
const endResults = document.getElementById("results");
const gameReset = document.getElementById("again");

// Creating the state of the game in an array and we are nulling the board for resets.
const gameState = Array(squares.length);
gameState.fill(null);

//Creating logic for each players turn.
if (gameBoard === null) {
    currentPlayer = player1
}
console.log(gameState);

// A quick loop that adds an Event Listener to each of our squares to then run the function squareClick.
squares.forEach(square=>square.addEventListener("click", squareClick));

// A function that checks if the endGameArea from our html is visible, stops the game from going further with return;
function squareClick(event) {
    if (endGameBox.classList.contains("visible")){
        return;
    }
}