// const gameBoardElement = document.querySelector('gameBoard');
const boxes = document.querySelectorAll(".square");
// const restartButton = document.querySelector('#restart').addEventListener('click', restart);
let winner = "";
const resultText = document.querySelector(".result");
const resultText2 = document.querySelector(".result2");

//declaring the player and computer and winning combinations
const playerX = "X";
const playerO = "O";
// forces player x to always start
let currentPlayer = "X";

//to populate the x's and o's
for (const box of boxes) {
  box.addEventListener("click", function () {
    //to tell computer that class disable is not longer a choice to click
    //used the class "disable" to determin if a square had been populated or not so if the box does not contain disable, then the player could still populate it
    if (!box.classList.contains("disable")) {
      console.log(currentPlayer);
      // box.classList.add("test");
      disableClick(box);
      console.log(box.classList);
      
      //player choice x or o
      if (currentPlayer === "X") {
        box.innerHTML = "X";
        //adding the player class isn't happening and I don't know why
        //realized I was adding the wrong class to each player
        // box.classList.add("X");
        //Bryce helped me figure this out
        document.getElementById(event.target.id).classList.add("X");
        currentPlayer = "O";
        displayPlayerTurn();
      } else {
        box.innerHTML = "O";
        // box.classList.add("O");
        document.getElementById(event.target.id).classList.add("O");
        currentPlayer = "X";
        displayPlayerTurn();
      }
    }
    checkWin();
  });
  
}

// to disable the boxes so you can't change the player choice
function disableClick(a) {
  a.classList.add("disable");
}

//display message for who's turn it is
function displayPlayerTurn() {
  if (currentPlayer === "X") {
    resultText.innerHTML = `Player ${currentPlayer}'s turn.`;
  } else {
    resultText.innerHTML = `Player ${currentPlayer}'s turn.`;
  }
}

function checkWin() {
  console.log("checkWin ran");
//it shows it's running
  for (i = 0; i < boxes.length; i++) {
    //for win combo 1 - row 1
    if (
      (boxes[0].classList.contains("X") &&
        boxes[1].classList.contains("X") &&
        boxes[2].classList.contains("X")) ||
      (boxes[0].classList.contains("O") &&
        boxes[1].classList.contains("O") &&
        boxes[2].classList.contains("O"))
    ) {
      console.log("found a win");
      if (boxes[0].classList.contains("X")) {
        winner = "X";
        resultText.innerHTML = `Player X is the winner!`;
      } else {
        winner = "O";
        resultText.innerHTML = `Player O is the winner!`;
      }
    }
    //win for combo 2 - row 2
    if (
      (boxes[3].classList.contains("X") &&
        boxes[4].classList.contains("X") &&
        boxes[5].classList.contains("X")) ||
      (boxes[3].classList.contains("O") &&
        boxes[4].classList.contains("O") &&
        boxes[5].classList.contains("O"))
    ) {
      if (boxes[3].classList.contains("X")) {
        winner = "X";
        resultText.innerHTML = `Player X is the winner!`;
      } else {
        winner = "O";
        resultText.innerHTML = `Player O is the winner!`;
      }
    }
    //win for combo 3 - row 3
    if (
      (boxes[6].classList.contains("X") &&
        boxes[7].classList.contains("X") &&
        boxes[8].classList.contains("X")) ||
      (boxes[6].classList.contains("O") &&
        boxes[7].classList.contains("O") &&
        boxes[8].classList.contains("O"))
    ) {
      if (boxes[6].classList.contains("X")) {
        winner = "X";
        resultText.innerHTML = `Player X is the winner!`;
      } else {
        winner = "O";
        resultText.innerHTML = `Player O is the winner!`;
      }
    }
    //win for combo 4 - column 1
    if (
      (boxes[0].classList.contains("X") &&
        boxes[3].classList.contains("X") &&
        boxes[6].classList.contains("X")) ||
      (boxes[0].classList.contains("O") &&
        boxes[3].classList.contains("O") &&
        boxes[6].classList.contains("O"))
    ) {
      if (boxes[0].classList.contains("X")) {
        winner = "X";
        resultText.innerHTML = `Player X is the winner!`;
      } else {
        winner = "O";
        resultText.innerHTML = `Player O is the winner!`;
      }
    }
    //win for combo 5 - column 2
    if (
      (boxes[1].classList.contains("X") &&
        boxes[4].classList.contains("X") &&
        boxes[7].classList.contains("X")) ||
      (boxes[1].classList.contains("O") &&
        boxes[4].classList.contains("O") &&
        boxes[7].classList.contains("O"))
    ) {
      if (boxes[1].classList.contains("X")) {
        winner = "X";
        resultText2.innerHTML = `Player X is the winner!`;
      } else {
        winner = "O";
        resultText2.innerHTML = `Player O is the winner!`;
      }
    }
    //win for combo 6 - column 3
    if (
      (boxes[2].classList.contains("X") &&
        boxes[5].classList.contains("X") &&
        boxes[8].classList.contains("X")) ||
      (boxes[2].classList.contains("O") &&
        boxes[5].classList.contains("O") &&
        boxes[8].classList.contains("O"))
    ) {
      if (boxes[2].classList.contains("X")) {
        winner = "X";
        resultText2.innerHTML = `Player X is the winner!`;
      } else {
        winner = "O";
        resultText2.innerHTML = `Player O is the winner!`;
      }
    }
    //win for combo 7 - diagonal 1
    if (
      (boxes[0].classList.contains("X") &&
        boxes[4].classList.contains("X") &&
        boxes[8].classList.contains("X")) ||
      (boxes[0].classList.contains("O") &&
        boxes[4].classList.contains("O") &&
        boxes[8].classList.contains("O"))
    ) {
      if (boxes[0].classList.contains("X")) {
        winner = "X";
        resultText2.innerHTML = `Player X is the winner!`;
      } else {
        winner = "O";
        resultText2.innerHTML = `Player O is the winner!`;
      }
    }
    //win for combo 8 - diagonal 2
    if (
      (boxes[2].classList.contains("X") &&
        boxes[4].classList.contains("X") &&
        boxes[6].classList.contains("X")) ||
      (boxes[2].classList.contains("O") &&
        boxes[4].classList.contains("O") &&
        boxes[6].classList.contains("O"))
    ) {
      if (boxes[2].classList.contains("X")) {
        winner = "X";
        resultText2.innerHTML = `Player X is the winner!`;
      } else {
        winner = "O";
        resultText2.innerHTML = `Player O is the winner!`;
      }
    }
  }
}

//tie - only will happen when all 9 boxes are clicked. every time a box is clicked, the array/variable = 1
// let boxesClicked = 0;
//  if winner = "" {
//     resultText.innerHTML = `It's a tie.`;
// then tie
