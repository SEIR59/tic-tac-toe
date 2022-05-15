let gameBoard = document.querySelector(".square");

let squareArr = ["", "", "", "", "", "", "", "", ""];
let firstPlayer = "X";
let secondPlayer = "O";
let turn;
// let lastClicked;

// length of turns
// for (i = 0; i <= 9; i++) {}

let playerTurn = [firstPlayer, secondPlayer];
function currentTurn() {
  for (i = 0; i < playerTurn.length; i += 1) {
    return playerTurn[i];
  }
  return result;
}

document.getElementById("box1").addEventListener("click", () => {
  //   let currentPlayer = [firstPlayer, secondPlayer];
  //   for (i = 0; i <= currentPlayer; i++) {
  //     console.log(currentPlayer[i]);
  //   }
  document.getElementById("box1").innerHTML = "X";
});

document.getElementById("box2").addEventListener("click", () => {
  //   let currentPlayer = [firstPlayer, secondPlayer];
  //   for (i = 0; i <= currentPlayer; i++) {
  //     console.log(currentPlayer[i]);
  //   }
  document.getElementById("box2").innerHTML = "O";
});

document.getElementById("box3").addEventListener("click", () => {
  //   let currentPlayer = [firstPlayer, secondPlayer];
  //   for (i = 0; i <= currentPlayer; i++) {
  //     console.log(currentPlayer[i]);
  //   }
  document.getElementById("box3").innerHTML = "X";
});

// Trying to alternate X and O with one event listener
// document.addEventListener("click", () => {
//   document.getElementById("box2").innerHTML = secondPlayer;
// });

const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
