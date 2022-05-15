console.log('Hello frontend');

// 1. add an event listener to each div with .squares class using a for loop, treating it as an array.
    // a. will need to add a reset that will re add event listeners after game is complete or reset is clicked.
    
    // 3. set up variables for both player and ai symbol, 
    //     a. set up score tracker for each,
// make this random?

const playerSymbol = 'X';
const aiSymbol = 'O';
let turnCounter = 0;
let  playerWins = 0;
let aiWins = 0;
let currentSymbol = 'X';

// create reset function?
function gameboard_reset() {
    const aiSymbol = 'O';
    let turnCounter = 0;
    let currentSymbol = 'X';
}



const gameboard_squares = document.getElementsByClassName('gameboard-square');
for (let i = 0; i < gameboard_squares.length; i++) {
    gameboard_squares[i].addEventListener('click', function() {
        gameboard_squares[i].innerHTML = currentSymbol;
        turnCounter++
        if (currentSymbol === 'X') {
            currentSymbol = 'O';
        } else {
            currentSymbol = 'X';
        }
    });
}


// 2. set while loop to keep track of game while current session is Active?
