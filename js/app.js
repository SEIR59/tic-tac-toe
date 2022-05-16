let cells = document.querySelectorAll(".cell");
let player = document.querySelector(".playersturn");
let button = document.querySelector(".reset");
let final = document.querySelector("#final");
let yoni = document.querySelectorAll(".cell");
let noni = document.querySelectorAll(".cell");
cells = Array.from(cells);
let currentPlayer = "X";
let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkForWinner() {
  winningCombinations.forEach(function (combination) {
    let check = combination.every(
      (idx) => cells[idx].innerText == currentPlayer
    );

    if ((check)) {
      player.innerText = "PLAYER " + currentPlayer + " HAS WON  RESTART TO PLAY AGAIN";
      cell.remove()
      }
      
     
  });
}

cells.forEach(function (cell) {
  cell.addEventListener("click", function yoni() {
    if (cell.innerText !== "") return;
    cell.innerText = currentPlayer;
    player.innerText = currentPlayer == "X" ? "O" + " player turn" : "X" + " palyer turn";
    checkForWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

button.addEventListener("click", (e) => {
  for (let i = 0; i < noni.length; i++) {
    let each = noni[i];
   each.innerText = "";

  }
});
