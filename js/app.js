const cells = document.querySelectorAll(".cell");
const cellsarr = Array.from(cells)
let cellsArray =[]
const restartBtn = document.querySelector(".restart-btn");
const nxtUp = document.querySelector(".next-up");
let letter = 1;
let computer = false;
let board = [];
const playHum = document.querySelector(".play-hum");
const playComp = document.querySelector(".play-comp");
// let possiblePicks = [0,1,2,3,4,5,6,7,8]
const score1 = document.querySelector(".scoreX")
const score2 = document.querySelector(".scoreO")
const winnerMsg = document.querySelector(".winner-message")
let s1 = 0;
let s2 = 0
let winner = ""
let winarr =[]


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
playComp.addEventListener("click", function () {
  computer = true;
  playComp.innerHTML = "You are currently playing Computer"
  play(computer);
});

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
    //console.log(cell.classList)
    cell.addEventListener("click", function (e) {
      //console.log(e.target.classList)
      //console.log(`this is the board before move: ${board}`);
      //isMovesLeft();
      if(!cell.classList.contains("picked")){
        if (letter === 1) {
          cell.innerHTML = "X";
          letter = 0;
          //console.log(letter)
          board = [];
          addPickedClass(cell)
          setUser(cell)
          updateBoard();
          console.log(cell.classList)
          console.log(board)
        } else {
          cell.innerHTML = "O";
          letter = 1;
          console.log(letter);
          board = [];
          addPickedClass(cell)
          setComp(cell)
          updateBoard();
          console.log(cell.classList)
          console.log(board)
        }
        cellsArray.push("picked")
        console.log(cellsArray)
        //cells.every(isDraw);
        if(cellsArray.length === 9){
          winnerMsg.innerHTML = "It is a tie!"
        }
      }
      //console.log(letter)
      displayNextUpMessage(letter);
      checkforWin();
      //console.log(winarr[0])
      if(winner){
        winnerMsg.innerHTML = `this winner is ${winner}`
      }
    });
  }
}

function playComputer(){
    //pickedCell = Math.floor(Math.random() * board.length);
    for (const cell of cells){
        cell.addEventListener("click", function(){
            isMovesLeft();
            if(!cell.classList.contains("picked")){
              if(letter === 1){
                  cell.innerHTML = "X";
                  board = [];
                  addPickedClass(cell);
                  setUser(cell)
                  //console.log(board)
                  let compPickCell = 0
                  function randomNumAndSet(){
                    compPickCell = Math.floor(Math.random() * 9)
                    if(!cells[compPickCell].classList.contains("picked")){
                      setComp(cellsarr[compPickCell])
                    } else {
                      randomNumAndSet();
                    }
                  }
                  randomNumAndSet();
                  console.log(compPickCell)
                  addPickedClass(cellsarr[compPickCell])
                  //cellsarr[possiblePicks.splice(Math.floor(Math.random() * possiblePicks.length))].innerHTML = "O"
                  //console.log(cellsarr[compPickCell])
                  for(let i = 0; i<cells.length; i++){
                    if(cells[i].classList.contains("comp")){
                      cells[i].innerHTML = "O"
                      cells[i].classList.add("picked")
                    } else {
                      //console.log("not getting classList")
                    }
                  }
                }
              } 
              updateBoard();
              //console.log(cellsarr)
              checkforWin();
              //console.log(winarr[0])
              if(winner){
                winnerMsg.innerHTML = `this winner is ${winner}`
              }
            })
          }
}
function checkforWin() {
  console.log("checkforWinRan")
  winarr = []
  for (let i = 0; i < cellsarr.length; i++) {
    //check rows
    if ((cells[0].classList.contains("user") && cells[1].classList.contains("user") && cells[2].classList.contains("user")) || (cells[0].classList.contains("comp") && cells[1].classList.contains("comp") && cells[2].classList.contains("comp"))) {
      if (cells[0].classList.contains("user")) {
        gameIsOver();
        winner = "X"
      } else {
        gameIsOver();
        winner = "O"
      }
      //gameIsOver();
    }
    else if ((cells[3].classList.contains("user") && cells[4].classList.contains("user") && cells[5].classList.contains("user")) || (cells[3].classList.contains("comp") && cells[4].classList.contains("comp") && cells[5].classList.contains("comp"))) {
      if (cells[3].classList.contains("user")) {
        gameIsOver();
        winner = "X"
      } else {
        gameIsOver();
        winner = "O"
      }
      //gameIsOver();
    }
    if ((cells[6].classList.contains("user") && cells[7].classList.contains("user") && cells[8].classList.contains("user")) || (cells[6].classList.contains("comp") && cells[7].classList.contains("comp") && cells[8].classList.contains("comp"))) {
      if (cells[6].classList.contains("user")) {
        gameIsOver();
        winner = "X"
      } else {
        gameIsOver();
        winner = "O"
      }
      //gameIsOver();
    }
    //check columns
    else if ((cells[0].classList.contains("user") && cells[3].classList.contains("user") && cells[6].classList.contains("user")) || (cells[0].classList.contains("comp") && cells[3].classList.contains("comp") && cells[6].classList.contains("comp"))) {
      if (cells[0].classList.contains("user")) {
        gameIsOver();
        winner = "X"
      } else {
        gameIsOver();
        winner = "O"
      }
      //gameIsOver();
    }
    else if ((cells[1].classList.contains("user") && cells[4].classList.contains("user") && cells[7].classList.contains("user")) || (cells[1].classList.contains("comp") && cells[4].classList.contains("comp") && cells[7].classList.contains("comp"))) {
      if (celss[1].classList.contains("user")) {
        gameIsOver();
        winner = "X"
      } else {
        gameIsOver();
        winner = "O"
      }
      //gameIsOver();
    }
    else if ((cells[2].classList.contains("user") && cells[5].classList.contains("user") && cells[8].classList.contains("user")) || (cells[2].classList.contains("comp") && cells[5].classList.contains("comp") && cells[8].classList.contains("comp"))) {
      if (cells[2].classList.contains("user")) {
        gameIsOver();
        winner = "X"
      } else {
        gameIsOver();
        winner = "O"
      }
      //gameIsOver();
    }
    //check diagonalls
    else if ((cells[0].classList.contains("user") && cells[4].classList.contains("user") && cells[8].classList.contains("user")) || (cells[0].classList.contains("comp") && cells[4].classList.contains("comp") && cells[8].classList.contains("comp"))) {
      if (cells[0].classList.contains("user")) {
        gameIsOver();
        winner = "X"
      } else {
        gameIsOver();
        winner = "O"
      }
      //gameIsOver();
    }
    else if ((cells[2].classList.contains("user") && cells[4].classList.contains("user") && cells[6].classList.contains("user")) || (cells[2].classList.contains("comp") && cells[4].classList.contains("comp") && cells[6].classList.contains("comp"))) {
      if (cells[2].classList.contains("user")) {
        gameIsOver();
        winner = "X"
      } else {
        gameIsOver();
        winner = "O"
      }
    } else if (!isMovesLeft()){
        gameIsOver()
        winner = "It was a tie!"
    }
    //gameIsOver();
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
  cellsArray = []
  for(const cell of cells){
    cell.classList.remove("picked")
    if(cell.classList.contains("user")){
      cell.classList.remove("user")
    } else if (cell.classList.contains("comp")){
      cell.classList.remove("comp")
    }
  }
  winner = ""
  winarr = []
  winnerMsg.innerHTML = ""
}
//checks for if movesLeft
function isMovesLeft() {
  for (let i = 0; i < board.length; i++) {
    if (board[i].includes("")){
        return true
    } else{
        return false;
    }
  }
}

//what should happen when game is over
function gameIsOver(){
  let gameOver=true;
  if(gameOver){
    for(const cell of cells){
      addPickedClass(cell)
      //console.log(cell.classList)
    }
    //console.log("The game is over")
    winarr.push("the game is overrr. How many times does this print?")
    //console.log(`${winner} was the winner!`)
  }
}

//updates cell to picked class
function addPickedClass(a){
  a.classList.add("picked");
}

//add score
// function addScore(el){
//   if(el === "Score1"){
//     s1 = s1 + 1;
//     el.innerHTML = s1;
//   } else {
//     s2 = s2 + 1;
//     el.innerHTML = s2;
//   }
//   console.log(s1)
//   console.log(s2)
// }

//create and add user class
function setUser(a){
  a.classList.add("user");
}

//create and add computer class
function setComp(a){
  a.classList.add("comp");
}

//check if picked function
function isDraw(arr){
  return arr.classList.contains("picked")
} 

