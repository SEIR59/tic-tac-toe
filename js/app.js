const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector(".restart-btn");
const nxtUp = document.querySelector(".next-up");
let letter = 1;
let computer = false;
let board = []
const playComp = document.querySelector(".play-comp");

//creates board at start of game
for(let i=0; i<cells.length; i++){
    board.push(cells[i].innerHTML)
}
//updates board
function updateBoard(){
    for(let i=0; i<cells.length; i++){
    board.push(cells[i].innerHTML)
    }
}
 

playHuman();

//Update Next Up Element
function displayNextUpMessage(num) {
    if (num === 0) {
        nxtUp.innerHTML = "Next up: O";
    } else {
        nxtUp.innerHTML = "Next up: X";
    }
}

// //Set Computer to true/false
// playComp.addEventListener("click", function () {
//     restart();
//     //console.log(computer)
//     if (playComp.innerHTML === "Play Computer") {
//         computer = true;
//         playComp.innerHTML = "Go back to playing humans!";
//         play(computer);
//     } else {
//         computer = false;
//         playComp.innerHTML = "Play Computer";
//         //console.log(playComp.innerHTML)
//         //play(computer);
//     }
// });

// function play(a){
//     if (a){
//         playHuman()
//         console.log("we are playing computer")
//     } else {
//         playHuman()
//         console.log("we are playing humans")
//         //console.log(letter)
//     }
// }

//Allows user to click cell and leave either an x or an o
function playHuman() {
 
  for (const cell of cells) {
    cell.addEventListener("click", function (e) {
       //console.log(e.target.classList)
    console.log(board)
    checkforWin();
      //isMovesLeft();
      if (letter === 1) {
        cell.innerHTML = "X";
        letter = letter - 1;
        //console.log(letter)
        board = []
        updateBoard()
      } else {
        cell.innerHTML = "O";
        letter = letter + 1;
        //console.log(letter);
        board =[]
        updateBoard();
      }
      //console.log(letter)
      displayNextUpMessage(letter);
    });

  }
};

function checkforWin(){
    for(let i = 0; i < board.length; i++){
        //check rows
        if(board[0] === board[1] && board[0]=== board[2]){
            if(board[0] === "X"){
                console.log("Player X wins!")
            } else if( board[0] === "O") {
                console.log("Player O wins!")
            } 
        }
        if(board[3] === board[4] && board[3] === board[5]){
            if(board[3] === "X"){
                console.log("Player X wins!")
            } else if(board[3] === "O") {
                console.log("Player O wins!")
            }
        }
        if(board[6] === board[7] && board[6] === board[8]){
            if(board[6] === "X"){
                console.log("Player X wins!")
            } else if(board[6] === "O") {
                console.log("Player O wins!")
            }
        }
        //check columns
        if(board[0] === board[3] && board[0] === board[6]){
            if(board[0] === "X"){
                console.log("Player X wins!")
            } else if(board[0] === "O") {
                console.log("Player O wins!")
            }
        }
        if(board[1] === board[4] && board[1] === board[7]){
            if(board[1] === "X"){
                console.log("Player X wins!")
            } else if(board[1] === "O") {
                console.log("Player O wins!")
            }
        }
        if(board[2] === board[5] && board[2] === board[8]){
            if(board[2] === "X"){
                console.log("Player X wins!")
            } else if(board[2] === "O"){
                console.log("Player O wins!")
            }
        }
        //check diagonalls
        if(board[0] === board[4] && board[0] === board[8]){
            if(board[0] === "X"){
                console.log("Player X wins!")
            } else if(board[0] === "O"){
                console.log("Player O wins!")
            }
        }
        if(board[2] === board[4] && board[2] === board[6]){
            if(board[2] === "X"){
                console.log("Player X wins!")
            } else if(board[2] === "O"){
                console.log("Player O wins!")
            }
        }
    }
}

//Restart Btn
restartBtn.addEventListener('click', function(){
    restart();
})

//Restart Function
function restart() {
    cells.forEach(function (cell) {
      cell.innerHTML = "";
    });
    letter = 1;
    nxtUp.innerHTML = "Next up: X";
}

// function isMovesLeft(board)
// {
//     for(let i = 0; i < 3; i++)
//         for(let j = 0; j < 3; j++)
//             if (board[i][j] == ' ')
//                 console.log(true) 
                 
//     console.log(false) 
// }

