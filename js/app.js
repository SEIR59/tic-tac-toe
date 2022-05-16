let squares = document.querySelectorAll(".square");
let message = document.querySelector(".message");
let button = document.querySelector("button");
let choices = [];
squares = Array.from(squares);
console.log(squares);

let firstPlayer = "X";
let secondPlayer = "O";

function gameRules() {}
squares.forEach(function (square) {
  square.addEventListener(
    "click",
    function () {
      square.innerHTML = firstPlayer;
      firstPlayer = firstPlayer == "X" ? secondPlayer : "X";
      message.innerHTML = `${firstPlayer}'s turn!`;
    },
    { once: true }
  );
});

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

for (i = 0; i < winCombo.length; i++) {
  let winner = winCombo[i];
  let a = squares[winner[0]];
  let b = squares[winner[1]];
  let c = squares[winner[2]];

  if (a == "" || b == "" || c == "") {
    console.log("Player won!");
  }
  if (a == b && b == c) {
    message.innerHTML = `Player ${a} won!`;
  }
}

// squares.forEach((square, i) => {
//   square.addEventListener("click", () => ticTacToe(square, i));
// });

// button.addEventListener("click", () => {
//   squares.innerHTML = "X";
// });

// Repetitive Code
// document.getElementById("box1").addEventListener("click", () => {
//   //   let currentPlayer = [firstPlayer, secondPlayer];
//   //   for (i = 0; i <= currentPlayer; i++) {
//   //     console.log(currentPlayer[i]);
//   //   }
//   document.getElementById("box1").innerHTML = "X";
// });

// document.getElementById("box2").addEventListener("click", () => {
//   //   let currentPlayer = [firstPlayer, secondPlayer];
//   //   for (i = 0; i <= currentPlayer; i++) {
//   //     console.log(currentPlayer[i]);
//   //   }
//   document.getElementById("box2").innerHTML = "O";
// });

// Trying to alternate X and O with one event listener
// document.addEventListener("click", () => {
//   document.getElementById("box2").innerHTML = secondPlayer;
// });

// length of turns
// for (i = 0; i <= 9; i++) {}

// Tried to alternate between Xs and Os using a for loop
// let playerTurn = [firstPlayer, secondPlayer];
// function currentTurn() {
//   for (i = 0; i < playerTurn.length; i++) {
//     return playerTurn[i];
//   }
//   return result;
// }
// console.log(currentTurn);
