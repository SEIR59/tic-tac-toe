let squares = document.querySelectorAll(".square");
squares = Array.from(squares);
console.log(squares);

let squareArr = ["", "", "", "", "", "", "", "", ""];
let firstPlayer = "X";
let secondPlayer = "O";

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

squares.forEach(function (square) {
  square.addEventListener(
    "click",
    function () {
      square.innerHTML = firstPlayer;
      firstPlayer = firstPlayer == "X" ? secondPlayer : "X";
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
