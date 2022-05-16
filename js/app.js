let announcement = document.getElementById('announcement');
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const playerOne = 'X';
const playerTwo = 'O';
let gameBoardBoxes = document.querySelectorAll('.box');
let playerOnesTurn = false;
let resetButton = document.querySelector('#reset-button');

const playerClick = event => {
  let box = event.target;
  let currentPlayer = playerOnesTurn ? playerTwo : playerOne;
  announcement.innerText = `Player ${playerOnesTurn ? 'X' : 'O'}'s Turn`;
  box.innerText = currentPlayer;
  box.classList.add(currentPlayer);
  if (evaluateWinner(currentPlayer)) {
    gameOver(false);
    removeEvents(gameBoardBoxes);

  } else if (gameIsDraw()) {
    gameOver(true);
    removeEvents(gameBoardBoxes);
  } else {
    playerOnesTurn = !playerOnesTurn;
  }
};

gameBoardBoxes.forEach((box) => {
  box.classList.remove(playerOne);
  box.classList.remove(playerTwo);
  box.removeEventListener('click', playerClick);
  box.addEventListener('click', playerClick, { once: true });
});


const removeEvents = (element) => {
  element.forEach((e) => {
    e.removeEventListener('click', playerClick);
  });
}

const evaluateWinner = currentPlayer =>
  winningCombinations.some(combination =>
    combination.every(index =>
      gameBoardBoxes[index].classList.contains(currentPlayer)
    )
  );

const gameOver = draw => {
  if (draw) {
    announcement.innerText = `It's a tie, Try Again!`;
    announcement.style.color = "red";
  } else {
    announcement.innerText = `${playerOnesTurn ? "Player O" : "Player X"} Wins!`;
    announcement.style.color = "green";
  }
  resetButton.classList.remove("hidden");

};

const gameIsDraw = () => [...gameBoardBoxes].every((box) => box.classList.contains(playerOne) || box.classList.contains(playerTwo));

resetButton.addEventListener("click", () => {
  window.location.reload();
})


