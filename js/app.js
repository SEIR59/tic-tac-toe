
const gameBoardElement = document.querySelector('gameBoard');
const boxes = document.querySelectorAll('.square');
//Re-start button I can't get to work.
// const restartButton = document.querySelector('#restart');
const resultText = document.querySelector('result');

//declaring the player and computer and winning combinations
// const playerX = 'X';
// const playerO = 'O';
// forces player x to always start
let currentPlayer = 'X';
// const winningCombinations = [
//     //rows
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     //columns
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     //diagonals
//     [0,4,8],
//     [2,4,6],
// ];
// //create game board into array
// let boxesArray = ['', '', '', '', '', '', '', '', '',];

//to start the game
//if it's a tie
//to end the game

//to start the game & add the click element to each box

for (const square of boxes) {
   square.addEventListener("click", function(){
       square.innerHTML = currentPlayer;
   })
}








//how to switch turns
// function swapTurns(){
//     playerOTurn = !playerOTurn
// }






