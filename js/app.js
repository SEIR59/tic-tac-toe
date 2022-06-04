//Creating Variables for each of the players:
const playerX = "X";
const playerY = "O";
let playerXturn = true;

// let currentPlayer = ;
// let gameState
//Creating Variables for each of the elements for insertion.
const squares = document.querySelectorAll(".square");
const endGameBox = document.getElementById("endGameArea")
const endResults = document.getElementById("results");
const gameReset = document.getElementById("again");

//This will be our game status checker to see if there are winning conditions met and if so to then end the game. If not it will be reinvoked after each click.
function gameStatus () {
    const topLeft = squares[0]
    const topMiddle = squares[1]
    const topRight = squares[2]

    
    const middleLeft = squares[3]
    const middleMiddle = squares[4]
    const middleRight = squares[5]

    const bottomLeft = squares[6]
    const bottomMiddle = squares[7]
    const bottomRight = squares[8]

    //checking the basic top row to see if win condition is met.
    if (topLeft.innerText === "X" && topMiddle.innerText === "X" && topRight.innerText === "X") {
        console.log("the x's hav won")
    } return;
}
// gameStatus();


// This is the function that will check which turn it is and place an x in the designated clicked square.
function boxClick (e) {
    let boxClicked = e.target
    if (playerXturn === true && boxClicked.innerText === "") { 
        boxClicked.innerText = ('X');
        playerXturn = false;
        gameStatus();
        console.log(playerXturn)
        // playerTurn()
    } else if(playerXturn === false && boxClicked.innerText === "") {
        boxClicked.innerText = ('O')
        playerXturn = true;
        gameStatus();
        console.log(playerXturn)
    }
    // playerTurn()
    
    // console.log("The click is working")
}


// Creating an event listener that listens for the click of each of the boxes within that boxes "array" and executes the boxClick function.
squares.forEach((square) => {
    square.addEventListener('click', boxClick);
})


// function playerTurn () {
//     if (playerXturn === true) {
//         playerXturn = false;
//         console.log(playerXturn)
//     } else if (playerXturn === false) {
//         playerXturn = true;
//         console.log(playerXturn)
//     }
// }










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