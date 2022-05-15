
const gameBoardElement = document.querySelector('gameBoard')
const boxes = document.querySelectorAll('.square');
const restartButton = document.querySelector('#restart');
const winningMessageText = document.querySelector('winningMessage')

//declaring the player and computer and winning combinations
const playerX = 'x';
const playerO = 'circle';
const winningCombinations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]
