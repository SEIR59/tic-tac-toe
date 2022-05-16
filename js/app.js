console.log('Hello frontend');
console.log("hello");
// list of important constants 
const squares = document.querySelectorAll('.square');
const playerX = 'X';
const playerO = 'O';
let turn = playerX;

console.log(squares);

const boardSet = Array(squares.length);
boardSet.fill(null);

// list of my elements
const strike = document.getElementById("strike");
const endGame = document.getElementById("end-game");
//const gameWinnerText = document.getElementById("game-winner-text");
const resetGame = document.getElementById("reset-btn");
//console.log(endGame)

squares.forEach((square) => square.addEventListener("click", drawBoard));

//console.log(resetGame)

function setHover(){
    squares.forEach(square=> {
        square.classList.remove("x-hover");
        square.classList.remove("o-hover");
    });
    const hoverClass = `${turn.toLowerCase()}-hover`;
    squares.forEach((square) => {
        if (square.innerText == "") {
            square.classList.add(hoverClass);
        }
    });
}
setHover();

//if the square already contains ablock move on to turn 
function drawBoard(event) {
   // if(gameWinner.classList.contains('visible')){
   //     return;
   // }

    const square = event.target;
    const squareNumber = square.dataset.index;
      //if the bock is not equal to "blank" there must be an x or o already inside  
    if(square.innerText != "") {
        return;
    }
    if(turn === playerX){
        square.innerText = playerX;
        boardSet[squareNumber-1] = playerX;
        turn = playerO;
    }
    else{
        square.innerText = playerO;
        boardSet[squareNumber-1] = playerO;
        turn = playerX;
    }
    setHover();
    checkWinner();
}

const winCombos = [
  { combo: [1, 2, 3]},
  { combo: [4, 5, 6]},
  { combo: [7, 8, 9]},
  { combo: [1, 4, 7]},
  { combo: [2, 5, 8]},
  { combo: [3, 6, 9]},
  { combo: [1, 5, 9]},
  { combo: [3, 5, 7]},
];
console.log(winCombos);

function checkWinner() {
    
 for(const winCombo of winCombos) {
      // check for winner by checking each value of square 1, 2, 3
       const combo = winCombo.combo;
       const squareValue = boardSet[combo[0]-1];
       const squareValue1 = boardSet[combo[1]-1];
       const squareValue2 = boardSet[combo[2]-1];
     // check to see if all the values are the same 
       if(squareValue != null && squareValue === squareValue1 && squareValue === squareValue2){
        alert("YOU WIN!");   
        
           gameOver(squareValue1);
        return;
       }
    }
    const draw = boardSet.every((square) => square != null);
if (draw) {
    gameOver(null);
}
    
}


// originally made for a pop up window that tells you who one 

// function gameOver(winner){
 
//     let text = 'Draw :(';
//     if (winner != null) {
//         text = `Winner is ${winner}!`;
//     }
    
//     gameWinnerText.innerText = text;
// }


const startNewGame = function () {
    turn = playerX;
    setHover();
    boardSet.fill(null);
    squares.forEach((square) => (square.innerText = ""));
    console.log("Game Reset")
}

resetGame.addEventListener("click", startNewGame);