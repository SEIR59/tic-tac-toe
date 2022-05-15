
const gameBoardElement = document.querySelector('gameBoard')
const boxes = document.querySelectorAll('.square');
const restartButton = document.querySelector('#restart');
const winningMessageText = document.querySelector('winningMessage')

//declaring the player and computer and winning combinations
const playerX = 'x';
const playerO = 'circle';
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
//create game board into array
let cells = ['', '', '', '', '', '', '', '', '',];

//to start the game
//if it's a tie
//to end the game
//how to switch turns



//add the click element to each box
boxes.addEventListner('click', function(){


} )







