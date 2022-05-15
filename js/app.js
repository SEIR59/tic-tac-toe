console.log('Hello frontend');

// 1. add an event listener to each div with .squares class using a for loop, treating it as an array.
    // a. will need to add a reset that will re add event listeners after game is complete or reset is clicked.
    
    // 3. set up variables for both player and ai symbol, 
    //     a. set up score tracker for each,
// make this random?

const playerSymbol = 'X';
const aiSymbol = 'O';
let turnCounter = 0;
let currentTurn;
let playerWins = 0;
let aiWins = 0;
let currentSymbol = 'X';

// create reset function?
function gameboard_reset() {
    turnCounter = 0;
    currentSymbol = 'X';
}


const gameboard_squares = document.getElementsByClassName('gameboard-square');
const turn_status = document.getElementById('turn-status');

function gameboard_click(e) {
    console.log('calling gameboard_click')
    currentSquare = e.target;
    currentSquare.innerHTML = currentSymbol;
    currentSquare.classList.toggle('square-hover')
    currentSquare.removeEventListener('click', gameboard_click);
    turnCounter++;
    turn_status.innerText = `It's player ${turnCounter % 2 + 1}'s turn!`
    console.log(turnCounter)
    
    if (currentSymbol === 'X') {
        currentSymbol = 'O';
    } else {
        currentSymbol = 'X';
    }


}

for (let i = 0; i < gameboard_squares.length; i++) {
    gameboard_squares[i].addEventListener('click', gameboard_click);
}





// for (let i = 0; i < gameboard_squares.length; i++) {
//     gameboard_squares[i].addEventListener('click', function(){
//     }); 
// }


// 2. set while loop to keep track of game while current session is Active?
