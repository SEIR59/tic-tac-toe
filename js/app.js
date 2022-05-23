// console.log("Hello frontend");
// console.log("Good morning Tanya");
// console.log("great tutoring session");

const PLAYERX = "x";
const PLAYER0 = "o";

const WINNINGPLAYS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const squareElements = document.querySelectorAll("[data-cell]");
const boardElement = document.getElementById("gameBoard");
const winNotificationElement = document.getElementById("winnerNotification");
const restartButton = document.getElementById("restart");
const winNotificationMessage = document.getElementById("winScript");
let isPLAYER0 = false;

startPlay();

restartButton.addEventListener("click", startPlay);

function startPlay() {
  isPLAYER0 = false;
  squareElements.forEach((square) => {
    square.classList.remove(PLAYERX);
    square.classList.remove(PLAYER0);
    square.removeEventListener("click", handleSquareClick);
    square.removeEventListener("click", handleSquareClick, { once: true });
  });
  setgameBoardHoverClass();
  winNotificationElement.classList.remove(`show`);
}

function handleSquareClick(e) {
  const square = e.target;
  const currentClass = isPLAYER0 ? PLAYER0 : PLAYERX;
  placeMark(square, currentClass);
  if (checkWin(currentClass)) {
    gameEnd(false);
  } else if (tieGame()) {
    gameEnd(true);
  } else {
    changeTurn();
    setgameBoardHoverClass();
  }
}

function gameEnd(draw) {
  if (draw) {
    winNotificationMessage.innerText = "Tie Game!";
  } else {
    winNotificationMessage.innerText = `Player w/ ${
      isPLAYER0 ? "O's" : "X's"
    } won!`;
  }
  winNotificationMessage.classList.add(`show`);
}

function tieGame() {
  return [...squareElements].every((square) => {
    return (
      square.classList.contains(PLAYERX) || square.classList.contains(PLAYER0)
    );
  });
}

function placeMark(square, currentClass) {
  square.classList.add(currentClass);
}

function changeTurn() {
  isPLAYER0 = !isPLAYER0;
}

function setgameBoardHoverClass() {
  boardElement.classList.remove(PLAYERX);
  boardElement.classList.remove(PLAYER0);
  if (isPLAYER0) {
    boardElement.classList.add(PLAYER0);
  } else {
    boardElement.classList.add(PLAYERX);
  }
}

function checkWin(currentClass) {
  return WINNINGPLAYS.some((combination) => {
    return combination.every((index) => {
      return squareElements[index].classList.contains(currentClass);
    });
  });
}

//followed along this link with priavte tutor... this is as far as we got still working
// https://www.codebrainer.com/blog/tic-tac-toe-javascript-game
// Tutoring Session https://fiverrzoom.zoom.us/rec/play/osNP6MXhODV-LuJv9rQPaEpL7Ccy4IiFMMe4Zephw-IW2jOSlok0m39T9usH6vs5lhz-3J3jHrmpA4WC.6XMEbVx7lRYJBbN2
