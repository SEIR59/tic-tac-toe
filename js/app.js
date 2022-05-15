
const gameBoardElement = document.querySelector('gameBoard');
const boxes = document.querySelectorAll('.square');
// const restartButton = document.querySelector('#restart').addEventListener('click', restart);
const resultText = document.querySelector('result');

//declaring the player and computer and winning combinations
const playerX = 'X';
const playerO = 'O';
// forces player x to always start
let currentPlayer = '';
const winningCombinations = [
    //rows
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //columns
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonals
    [0,4,8],
    [2,4,6],
];
// //create game board into array
let boxesArray = ['', '', '', '', '', '', '', '', '',];

// const playGame = (element, index) =>{
//     element.value = currentPlayer;
//     element.disabled = true;
//     boxesArray[index] = currentPlayer;
    // currentPlayer = currentPlayer == 'X' ? 'X' : 'O';
    // resultText.innerHTML = `Player ${currentPlayer}'s Turn`;

// for (let i = 0; i < winningCombinations.length; i++){
//     let turn = winningCombinations[i];
//     let win = boxesArray[turn[0]];
//     let lose = boxesArray[turn[1]];
//     let tie = boxesArray[turn[2]];
// }

// }

//to populate the x's and o's
for (const square of boxes) {
  square.addEventListener("click", function () {
    // currentPlayer = currentPlayer == 'X' ? 'X' : 'O';
    // resultText.innerHTML = `Player ${currentPlayer}'s Turn`;
    square.innerHTML = currentPlayer;
    if (currentPlayer === "X") {
      square.innerHTML = "X";
      currentPlayer = "O";
    } else {
      square.innerHTML = "O";
      currentPlayer = "X";
    }
  });
}









//how to switch turns
// function swapTurns(){
//     playerOTurn = !playerOTurn
// }






