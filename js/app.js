//Creating Variables for each of the players:
const playerX = "X";
const playerY = "O";
let playerXturn = true;

// let currentPlayer = ;
// let gameState
//Creating Variables for each of the elements for insertion.
const squares = document.querySelectorAll(".square");
console.log(squares[2])
const endGameBox = document.getElementById("endGameArea")
const endResults = document.getElementById("results");
const gameReset = document.getElementById("again");

function playerTurn () {
    if (playerXturn === true) {
        playerXturn = false;
        console.log(playerXturn)
    } else if (playerXturn === false) {
        playerXturn = true;
        console.log(playerXturn)
    }
}

function boxClick (e) {
    boxClicked = e.target
    if (playerXturn === true) { 
    boxClicked.innerText = ('x');
    playerTurn()
    } else (
    boxClicked.innerText = ('o'))
    playerTurn()

    console.log("The click is working")
}


// Creating an event listener that listens for the click of each of the boxes within that boxes "array" and executes the boxClick function.
squares.forEach((square) => {
    square.addEventListener('click', boxClick);
})












// // Creating the state of the game in an array and we are nulling the board for resets.
// const gameState = Array(squares.length);
// gameState.fill(null);

// // A quick loop that adds an Event Listener to each of our squares to then run the function squareClick.
// squares.forEach(square=>square.addEventListener("click", squareClick));

// // A function that checks if the endGameArea from our html is visible, stops the game from going further with return;
// function squareClick(event) {
//     if (endGameBox.classList.contains("visible")){
//         return;
//     }
//     const square = event.target;
//     const squareNumber = square.dataset.index;

//     if(square.innerText != "") {
//         return;
//     }
//     if(currentPlayer === player1) {
//         square.innerText = player1;
//         gameState[squareNumber-1] = player1
//         currentPlayer = player2
//     }
// }