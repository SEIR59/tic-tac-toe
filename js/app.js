let squares = document.querySelectorAll(".square");
let message = document.querySelector(".message");
let button = document.querySelector("button");
let choices = ["", "", "", "", "", "", "", "", ""];

squares = Array.from(squares);

let firstPlayer = "X";
let secondPlayer = "O";

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

function gameRules(square, i) {
  if (square.innerHTML.trim() != "") return;
  square.innerHTML = firstPlayer;
  console.log(firstPlayer);
  choices[i] = firstPlayer;
  firstPlayer = firstPlayer == "X" ? secondPlayer : "X";
  console.log(choices);
  message.innerHTML = `${firstPlayer}'s turn!`;

  for (i = 0; i < winCombo.length; i++) {
    let winner = winCombo[i];
    let a = choices[winner[0]];
    let b = choices[winner[1]];
    let c = choices[winner[2]];

    if (a == "" || b == "" || c == "") {
      continue;
    }
    if (a == b && b == c) {
      message.innerHTML = `Player ${a} won! Confetti is falling from the sky. Champagne is flowing. People are asking you to kiss their newborns on the forehead!`;
    }
  }
}
// THIS GOES THROUGH EACH SQUARE AND ADDS AN EVENTLISTENER AND GIVES AN INDEX
squares.forEach((square, i) => {
  square.addEventListener("click", () => gameRules(square, i));
});

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
