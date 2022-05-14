let player = "you";
let totalMove = 0;
let yourMove = [];
let computerMove = [];
let h1 = document.querySelector("h1");

winningCondition = [
  [1, 2, 3],
  [1, 5, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];
let boxes = document.querySelectorAll(".box");
let newGameButton = document.querySelector("button");

boxes.forEach((box) =>
  box.addEventListener("click", (event) => {
    debugger;
    if (!event.target.innerText) {
      if (player === "you") {
        totalMove += 1;
        h1.innerText = " It is Computer's Turn";
        event.target.innerText = "X";
        yourMove.push(Number(event.target.id));
        yourMove.length >= 3 ? checkWinner(yourMove) : (player = "computer");
        setTimeout(function () {
          player = "computer";
        }, 50);
      } else if (player === "computer") {
        totalMove += 1;
        h1.innerText = " It is Your Turn";
        event.target.innerText = "O";
        computerMove.push(Number(event.target.id));
        computerMove.length >= 3 ? checkWinner(computerMove) : (player = "you");
        setTimeout(function () {
          player = "you";
        }, 50);
      }
    }
  })
);

function checkWinner(playerMove) {
  for (let i = 0; i < winningCondition.length; i++) {
    let winning = [];
    for (let j = 0; j < playerMove.length; j++) {
      if (winningCondition[i].includes(playerMove[j])) {
        winning.push(1);
        console.log(winning);
      }
    }
    if (winning[0] === 1 && winning[1] === 1 && winning[2] === 1) {
      newGame();
    } else if (totalMove === 9) {
      h1.style.color = "red";
      h1.innerText = " TIE!!!";
    }
  }
}

function newGame() {
  if (player) {
    setTimeout(function () {
      alert(`${player} Win!! `);
      window.location.reload();
    }, 5);
  }
}

function reset() {
  window.location.reload();
}

newGameButton.addEventListener("click", () => {
  reset();
});
