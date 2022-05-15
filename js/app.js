let gameBoard = document.querySelector(".square");

let squareArr = ["", "", "", "", "", "", "", "", ""];
let firstPlayer = "X";
let secondPlayer = "O";
let turn = 0;
let lastClicked;

// length of turns
for (i = 0; i <= 9; i++) {}

document.addEventListener("click", () => {
  document.getElementById("box1").innerHTML = firstPlayer;
});

document.addEventListener("click", () => {
  document.getElementById("box2").innerHTML = secondPlayer;
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
