let announcement = document.getElementById('announcement');
// Setting the winning combinations indeces of the boxes/cells.
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
// Selection all the boxes element with the class 'box'
let gameBoardBoxes = document.querySelectorAll('.box');

let playerOnesTurn = false;
let resetButton = document.querySelector('#reset-button');

// A click event function that will trigger when each of the boxes were clicked.
const playerClick = event => {
  // Storing to the variable box what box/cell was clicked by the player.
  let box = event.target;
  // A variable that contains who is the currentPlayer
  let currentPlayer = playerOnesTurn ? playerTwo : playerOne;
  // Sets the innerText of the h1 element with the id 'announcement' into which player's turn is.
  announcement.innerText = `Player ${playerOnesTurn ? 'X' : 'O'}'s Turn`;
  // Sets the innerText of a box/cell - either X / O
  box.innerText = currentPlayer;
  // Adding the currentPlayer's value as a class for the box/cell that was clicked by the player.
  box.classList.add(currentPlayer);
  if (evaluateWinner(currentPlayer)) {
    gameOver(false);
    // This line below just basically removes the eventListeners for each box/cell so when one of the players alreayd won, it will not let them continue to fill out the empty box/cell.
    removeEvents(gameBoardBoxes);

  // This line below is checking if all the boxes/cells are already filled by either playerOne (X) or playerTwo (O) but the winning combinations array are not yet matched. It will run the gameIsDraw() function and will return true.
  } else if (gameIsDraw()) {
    // Invoking gameOver function and passing true as an argument which will result the game to be draw/tie!
    gameOver(true);
    // This line below just basically removes the eventListeners for each box/cell so when one of the players alreayd won, it will not let them continue to fill out the empty box/cell.
    removeEvents(gameBoardBoxes);
  } else {
    // Setting the negate value of playersOnesTurn to switch X/O alternately if the game is not over yet.
    playerOnesTurn = !playerOnesTurn;
  }
};

// Sets the eventListener for each of the box/cell in the gameboard.
gameBoardBoxes.forEach((box) => {
  // Removes the class from the box either X / O
  box.classList.remove(playerOne);
  box.classList.remove(playerTwo);
  // Removes the event listener of the box/cell.
  box.removeEventListener('click', playerClick);
  box.addEventListener('click', playerClick, { once: true });
});


// This function is basically just removing the click event of each item of the array of elements being passed as argument.
const removeEvents = (element) => {
  element.forEach((e) => {
    e.removeEventListener('click', playerClick);
  });
}



// A function to evaluate the winner of the game, it's basically checking whether the cells that were filled by either Player X / Player O are one of the winning combination indeces.
const evaluateWinner = currentPlayer =>
// .some function is used to loop through the array of winning combinations and accepts a callback function
// I used .some to basically check if atleast one of the combinations array item were matched by either Player X or Player O.
  winningCombinations.some(combination =>
    // The .every function is basically checking if the indeces of the winning combination item array indeces matches with the indeces of the boxes that were click by either Player X / Player O.
    combination.every(index =>
      // Checking either the index of the gameboard box/cell contains X / O
      gameBoardBoxes[index].classList.contains(currentPlayer)
    )
  );

  // This function will change the innerText of the announcement element to display who is the winner or if the game is a tie!
const gameOver = draw => {
  if (draw) {
    // Sets the innerTest of announcement element into 'It's a tie, Try Again!
    announcement.innerText = `It's a tie, Try Again!`;
    // Sets the color of the announcement element into red
    announcement.style.color = "red";
  } else {
    // Sets the innerTest of announcement element of who won the game, either Player X or Player O
    announcement.innerText = `${playerOnesTurn ? "Player O" : "Player X"} Wins!`;
    // Sets the color of the announcement element into green
    announcement.style.color = "green";
  }
  // It will show the reset button to the user.
  resetButton.classList.remove("hidden");

};

// This function checks if all the boxes/cells were already filled by either playerOne ('X') or playerTwo ('O) but there is still no match on the winning combinations array. This will return true if all the boxex/cells were already filled and no winners were declared yet.
// .contains basically just checking if the element has the class being passed as an argument.
const gameIsDraw = () => [...gameBoardBoxes].every((box) => box.classList.contains(playerOne) || box.classList.contains(playerTwo));

// Adding an event listener to refresh the window when the button resetButton is clicked.
resetButton.addEventListener("click", () => {
  window.location.reload();
})


