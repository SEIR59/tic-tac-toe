const cells = document.querySelectorAll(".cell");
const cellsarr = Array.from(cells)
const restartBtn = document.querySelector(".restart-btn");
const nxtUp = document.querySelector(".next-up");
let letter = 1;
let computer = false;
let board = [];
const playHum = document.querySelector(".play-hum");
const playComp = document.querySelector(".play-comp");
let possiblePicks = [0,1,2,3,4,5,6,7,8]

console.log(cellsarr)

//creates board at start of game
for (let i = 0; i < cells.length; i++) {
  board.push(cells[i].innerHTML);
}
//updates board
function updateBoard() {
  for (let i = 0; i < cells.length; i++) {
    board.push(cells[i].innerHTML);
  }
}

//Update Next Up Element
function displayNextUpMessage(num) {
  if (num === 0) {
    nxtUp.innerHTML = "Next up: O";
  } else {
    nxtUp.innerHTML = "Next up: X";
  }
}

//Start game vs Human
playHum.addEventListener("click", function(){
  play(computer);
  playHum.innerHTML = "You are currently playing another Human"
})

//Set Computer to true and run play computer
// playComp.addEventListener("click", function () {
//   computer = true;
//   playComp.innerHTML = "You are currently playing Computer"
//   play(computer);
// });

function play(a){
    if (a){
        playComputer();
        console.log("we are playing computer")
    } else {
        playHuman()
        console.log("we are playing humans")
        //console.log(letter)
    }
}

//Allows user to click cell and leave either an x or an o
function playHuman() {
  for (const cell of cells) {
    cell.addEventListener("click", function (e) {
      //console.log(e.target.classList)
      //console.log(`this is the board before move: ${board}`);
      isMovesLeft();
      //isMovesLeft();
      if (letter === 1) {
        cell.innerHTML = "X";
        letter = 0;
        //console.log(letter)
        board = [];
        updateBoard();
        checkforWin();
        console.log(board)
      } else {
        cell.innerHTML = "O";
        letter = 1;
        console.log(letter);
        board = [];
        updateBoard();
        checkforWin();
        console.log(board)
      }
      //console.log(letter)
      displayNextUpMessage(letter);
    });
  }
}

function playComputer(){
    //pickedCell = Math.floor(Math.random() * board.length);
    for (const cell of cells){
        cell.addEventListener("click", function(){
            isMovesLeft();
            if(letter === 1){
                cell.innerHTML = "X";
                board = [];
                //updateBoard();
                //console.log(board);
                console.log(possiblePicks.splice(Math.floor(Math.random() * 9)))
                // compPickedCell = Math.floor(Math.random() * 9);
                //console.log(compPickedCell)
                //board[compPickedCell] = "O"
                console.log(board)
                //cellsarr[possiblePicks.splice(Math.floor(Math.random() * possiblePicks.length))].innerHTML = "O"
                updateBoard();
                checkforWin();
            }
        })
    }
  
}

function checkforWin() {
  for (let i = 0; i < board.length; i++) {
    //check rows
    if (board[0] === board[1] && board[0] === board[2]) {
      if (board[0] === "X") {
        console.log("Player X wins!");
      } else if (board[0] === "O") {
        console.log("Player O wins!");
      }
    }
    else if (board[3] === board[4] && board[3] === board[5]) {
      if (board[3] === "X") {
        console.log("Player X wins!");
      } else if (board[3] === "O") {
        console.log("Player O wins!");
      }
    }
    if (board[6] === board[7] && board[6] === board[8]) {
      if (board[6] === "X") {
        console.log("Player X wins!");
      } else if (board[6] === "O") {
        console.log("Player O wins!");
      }
    }
    //check columns
    else if (board[0] === board[3] && board[0] === board[6]) {
      if (board[0] === "X") {
        console.log("Player X wins!");
      } else if (board[0] === "O") {
        console.log("Player O wins!");
      }
    }
    else if (board[1] === board[4] && board[1] === board[7]) {
      if (board[1] === "X") {
        console.log("Player X wins!");
      } else if (board[1] === "O") {
        console.log("Player O wins!");
      }
    }
    else if (board[2] === board[5] && board[2] === board[8]) {
      if (board[2] === "X") {
        console.log("Player X wins!");
      } else if (board[2] === "O") {
        console.log("Player O wins!");
      }
    }
    //check diagonalls
    else if (board[0] === board[4] && board[0] === board[8]) {
      if (board[0] === "X") {
        console.log("Player X wins!");
      } else if (board[0] === "O") {
        console.log("Player O wins!");
      }
    }
    else if (board[2] === board[4] && board[2] === board[6]) {
      if (board[2] === "X") {
        console.log("Player X wins!");
      } else if (board[2] === "O") {
        console.log("Player O wins!");
      }
    } else if(!isMovesLeft()){
        console.log("it was a tie")
    }
  }
}

//Restart Btn
restartBtn.addEventListener("click", function () {
  restart();
});

//Restart Function
function restart() {
  cells.forEach(function (cell) {
    cell.innerHTML = "";
  });
  letter = 1;
  nxtUp.innerHTML = "Next up: X";
  playHum.innerHTML = "Play Human"
  playComp.innerHTML = "Play Computer"
}
//checks for if movesLeft
function isMovesLeft() {
  for (let i = 0; i < board.length; i++) {
    if (board.includes("")){
        return true
    } else{
        return false;
    }
  }
}

