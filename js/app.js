//Creating Variables for each of the players:
const playerX = "X";
const playerY = "O";
let playerXturn = true;
let endGameState = false;

// let currentPlayer = ;
// let gameState
//Creating Variables for each of the elements for insertion.
const squares = document.querySelectorAll(".square");
const endGameBox = document.getElementById("endGameArea")
const endResults = document.getElementById("results");
const gameReset = document.getElementById("again");
const playersTurn = document.getElementById("game-status");

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

    //checking the first top row to see if win condition is met.
    if (topLeft.innerText === "X" && topMiddle.innerText === "X" && topRight.innerText === "X") {
        console.log("the x's have won")
        xWon();
    } else if(topLeft.innerText === "O" && topMiddle.innerText === "O" && topRight.innerText === "O") {
        console.log("the o's have won")
        oWon();
    };
    //checking the middle row to see if win condition is met.
    if (middleLeft.innerText === "X" && middleMiddle.innerText === "X" && middleRight.innerText === "X") {
        console.log("the x's have won")
        xWon();
    } else if(middleLeft.innerText === "O" && middleMiddle.innerText === "O" && middleRight.innerText === "O") {
        console.log("the o's have won")
        oWon();
    };
    //checking the bottom row to see if win condition is met.
    if (bottomLeft.innerText === "X" && bottomMiddle.innerText === "X" && bottomRight.innerText === "X") {
        console.log("the x's have won")
        xWon();
    } else if(bottomLeft.innerText === "O" && bottomMiddle.innerText === "O" && bottomRight.innerText === "O") {
        console.log("the o's have won")
        oWon();
    };
    //checking the first column to see if win condition is met.
    if (topLeft.innerText === "X" && middleLeft.innerText === "X" && bottomLeft.innerText === "X") {
        console.log("the x's have won")
        xWon();
    } else if(topLeft.innerText === "O" && middleLeft.innerText === "O" && bottomLeft.innerText === "O") {
        console.log("the o's have won")
        oWon();
    };
    //checking the second column to see if win condition is met.
    if (topMiddle.innerText === "X" && middleMiddle.innerText === "X" && bottomMiddle.innerText === "X") {
        console.log("the x's have won")
        xWon();
    } else if(topMiddle.innerText === "O" && middleMiddle.innerText === "O" && bottomMiddle.innerText === "O") {
        console.log("the o's have won")
        oWon();
    };
    //checking the third column to see if win condition is met.
    if (topRight.innerText === "X" && middleRight.innerText === "X" && bottomRight.innerText === "X") {
        console.log("the x's have won")
        xWon();
    } else if(topRight.innerText === "O" && middleRight.innerText === "O" && bottomRight.innerText === "O") {
        console.log("the o's have won")
        oWon();
    };
    //checking the first diagonal to see if win condition is met.
    if (topLeft.innerText === "X" && middleMiddle.innerText === "X" && bottomRight.innerText === "X") {
        console.log("the x's have won")
        xWon();
    } else if(topLeft.innerText === "O" && middleMiddle.innerText === "O" && bottomRight.innerText === "O") {
        console.log("the o's have won")
        oWon();
    };
    //checking the second diagonal to see if win condition is met.
    if (topRight.innerText === "X" && middleMiddle.innerText === "X" && bottomLeft.innerText === "X") {
        console.log("the x's have won")
        xWon();
    } else if(topRight.innerText === "O" && middleMiddle.innerText === "O" && bottomLeft.innerText === "O") {
        console.log("the o's have won")
        oWon();
    } 
    // If each square of all of squares has either an X or an O, we want it to display a draw.
    else if (
        topLeft.innerText !== "" &&
        topMiddle.innerText !== "" &&
        topRight.innerText !== "" &&
        middleLeft.innerText !== "" &&
        middleMiddle.innerText !== "" &&
        middleRight.innerText !== "" &&
        bottomLeft.innerText !== "" &&
        bottomMiddle.innerText !== "" &&
        bottomRight.innerText !== ""
      ) {
          draw();
    console.log("game is a draw! nobody wins")
      }
}
// gameStatus();

// Creating function that shows player "X" won.
function xWon () {
endGameBox.classList.replace("hidden", "visible");
endResults.innerText = "Player X won the game!"
endGameState = true
playersTurn.innerHTML = "";
console.log(endGameState)
}
// xWon();

// Creating function that shows player "O" won.
function oWon () {
endGameBox.classList.replace("hidden", "visible");
endResults.innerText = "Player O won the game!"
endGameState = true;
playersTurn.innerHTML = "";
console.log(endGameState)
}

function draw () {
    endGameBox.classList.replace("hidden", "visible");
    endResults.innerText = "It is a draw! Neither player won..."
    endGameState = true;
    playersTurn.innerHTML = "";
    console.log(endGameState)
}

// Creating function that the game ended with a draw.



// This is the function that will check which turn it is and place an x in the designated clicked square.
function boxClick (e) {
    let boxClicked = e.target
    if (playerXturn === true && boxClicked.innerText === "" && endGameState === false) { 
        boxClicked.innerText = ('X');
        playerXturn = false;
        playersTurn.innerHTML = "<br>It is now player O's Turn.</br>"
        gameStatus();
        // console.log(playerXturn)
        // playerTurn()
    } else if(playerXturn === false && boxClicked.innerText === "" & endGameState === false) {
        boxClicked.innerText = ('O')
        playerXturn = true;
        playersTurn.innerHTML = "<br>It is now player X's Turn.<br>"
        gameStatus();
        // console.log(playerXturn)
    }
    // playerTurn()
    
    // console.log("The click is working")
}

// console.log(endGameState)
// Creating an event listener that listens for the click of each of the boxes within that boxes "array" and executes the boxClick function.
if (endGameState === false) {
squares.forEach((square) => {
    square.addEventListener('click', boxClick);
})
} else if(endGameState === true) {

}

console.log(endGameState)
