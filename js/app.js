// const gameBoardElement = document.querySelector('gameBoard');
const boxes = document.querySelectorAll(".square");
// const restartButton = document.querySelector('#restart').addEventListener('click', restart);
let winner = "";
const resultText = document.querySelector(".result");
// const resultText2 = document.querySelector(".result2");

//declaring the player and computer and winning combinations
const playerX = "X";
const playerO = "O";
// forces player x to always start
let currentPlayer = "X";

//------------------------------------------------------------------------------
//to populate the x's and o's
for (const box of boxes) {
  box.addEventListener("click", function () {
    //to tell computer that class disable is no longer a choice to click
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
        // boxesClicked += 1;
        displayPlayerTurn();
      } else {
        box.innerHTML = "O";
        // box.classList.add("O");
        document.getElementById(event.target.id).classList.add("O");
        currentPlayer = "X";
        // boxesClicked += 1;
        displayPlayerTurn();
      }
    }
    //need to run checkWin after each box is clicked to see if the win happened
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

//-----------------------------------------------------------------------------
function checkWin() {
  console.log("checkWin ran");
  let foundWin = 0;
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
        foundWin++;
        resultText.innerHTML = `Player X is the winner!`;
      } else if (boxes[0].classList.contains("O")) {
        winner = "O";
        resultText.innerHTML = `Player O is the winner!`;
        foundWin++;
      }
    }
    //win for combo 2 - row 2
    else if (
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
    else if (
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
    else if (
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
    else if (
      (boxes[1].classList.contains("X") &&
        boxes[4].classList.contains("X") &&
        boxes[7].classList.contains("X")) ||
      (boxes[1].classList.contains("O") &&
        boxes[4].classList.contains("O") &&
        boxes[7].classList.contains("O"))
    ) {
      if (boxes[1].classList.contains("X")) {
        winner = "X";
        resultText.innerHTML = `Player X is the winner!`;
      } else {
        winner = "O";
        resultText.innerHTML = `Player O is the winner!`;
      }
    }
    //win for combo 6 - column 3
   else if (
      (boxes[2].classList.contains("X") &&
        boxes[5].classList.contains("X") &&
        boxes[8].classList.contains("X")) ||
      (boxes[2].classList.contains("O") &&
        boxes[5].classList.contains("O") &&
        boxes[8].classList.contains("O"))
    ) {
      if (boxes[2].classList.contains("X")) {
        winner = "X";
        resultText.innerHTML = `Player X is the winner!`;
      } else {
        winner = "O";
        resultText.innerHTML = `Player O is the winner!`;
      }
    }
    //win for combo 7 - diagonal 1
    else if (
      (boxes[0].classList.contains("X") &&
        boxes[4].classList.contains("X") &&
        boxes[8].classList.contains("X")) ||
      (boxes[0].classList.contains("O") &&
        boxes[4].classList.contains("O") &&
        boxes[8].classList.contains("O"))
    ) {
     if (boxes[0].classList.contains("X")) {
        winner = "X";
        resultText.innerHTML = `Player X is the winner!`;
      } else {
        winner = "O";
        resultText.innerHTML = `Player O is the winner!`;
      }
    }
    //win for combo 8 - diagonal 2
    else if (
      //don't need to write out both for x and o. just check if they are equal to each other.
      (boxes[2].classList.contains("X") &&
        boxes[4].classList.contains("X") &&
        boxes[6].classList.contains("X")) ||
      (boxes[2].classList.contains("O") &&
        boxes[4].classList.contains("O") &&
        boxes[6].classList.contains("O"))
    ) {
      if (boxes[2].classList.contains("X")) {
        winner = "X";
        resultText.innerHTML = `Player X is the winner!`;
      } else {
        winner = "O";
        resultText.innerHTML = `Player O is the winner!`;
      }
    }   
    else if (
    boxes[0].innerHTML !== "" &&
    boxes[1].innerHTML !== "" &&
    boxes[2].innerHTML !== "" &&
    boxes[3].innerHTML !== "" &&
    boxes[4].innerHTML !== "" &&
    boxes[5].innerHTML !== "" &&
    boxes[6].innerHTML !== "" &&
    boxes[7].innerHTML !== "" &&
    boxes[8].innerHTML !== "" ){
      console.log("it's a tie");
      foundWin++
      resultText.innerHTML = `It's a tie. Try again.`;
    }

  if (foundWin === 1) {
    for (const box of boxes) {
      box.classList.add("disable");
      console.log("foundWin");
      //need to remove the eventListener to click the boxes
      box.removeEventListener("click", addMove());
    }
  }
}

// function checkTie(){
//   boxes[0].innerHTML != "";
//   console.log("checkign boxes number")
// }