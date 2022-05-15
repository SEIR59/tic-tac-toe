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

const square_1 = document.getElementById('square1');
const square_2 = document.getElementById('square2');
const square_3 = document.getElementById('square3');
const square_4 = document.getElementById('square4');
const square_5 = document.getElementById('square5');
const square_6 = document.getElementById('square6');
const square_7 = document.getElementById('square7');
const square_8 = document.getElementById('square8');
const square_9 = document.getElementById('square9');


function checkWinCondition() {
    // check if there are three of the same symbol in a row anywhere
    console.log("checking win conditions")
    if (square_1.innerHTML === currentSymbol && square_2.innerHTML === currentSymbol && square_3.innerHTML === currentSymbol) {
        alert('Player Won!');
    } else if (square_5.innerHTML === currentSymbol && square_5.innerHTML === currentSymbol && square_6.innerHTML === currentSymbol) {
        alert('Player Won!');
    } else if (square_7.innerHTML === currentSymbol && square_8.innerHTML === currentSymbol && square_9.innerHTML === currentSymbol) {
        alert('Player Won!');
    } else if (square_1.innerHTML === currentSymbol && square_4.innerHTML === currentSymbol && square_7.innerHTML === currentSymbol) {
        alert('Player Won!');
    } else if (square_2.innerHTML === currentSymbol && square_5.innerHTML === currentSymbol && square_8.innerHTML === currentSymbol) {
        alert('Player Won!');
    } else if (square_3.innerHTML === currentSymbol && square_6.innerHTML === currentSymbol && square_9.innerHTML === currentSymbol) {
        alert('Player Won!');
    } else if (square_1.innerHTML === currentSymbol && square_5.innerHTML === currentSymbol && square_9.innerHTML === currentSymbol) {
        alert('Player Won!');
    } else if (square_3.innerHTML === currentSymbol && square_5.innerHTML === currentSymbol && square_7.innerHTML === currentSymbol) {
        alert('Player Won!');
    } 
}

// funciton that removes all event listeners, dsplayes winner and updates score
function someoneWon() {
    //update score of player that one, remove remaining event listeners.
    if (turnCounter % 2 === 0) {
        playerWins++;
    } else {
        aiWins++;
    }
    currentSymbol = 'X';
}
function gameboard_reset() {
    // reset game but keep scores
    turnCounter = 0;
 }

const gameboard_squares = document.getElementsByClassName('gameboard-square');
const turn_status = document.getElementById('turn-status');

function gameboard_click(e) {
    // changes the classes of the div that is clicked,
    // removes the event listener 
    // and sets up for the next players turn.
    console.log('calling gameboard_click')
    currentSquare = e.target;
    currentSquare.innerHTML = currentSymbol;
    currentSquare.classList.toggle('square-hover')
    currentSquare.removeEventListener('click', gameboard_click);
    turnCounter++;
    turn_status.innerText = `It's player ${turnCounter % 2 + 1}'s turn!`
    console.log(turnCounter)
    
    // check win condition
    checkWinCondition();

    if (currentSymbol === 'X') {
        currentSymbol = 'O';
    } else {
        currentSymbol = 'X';
    }

    // if you did not win, allow the compute to check and then check win condition again.
    // computer move -- random for now

    // check win condition


}

for (let i = 0; i < gameboard_squares.length; i++) {
    gameboard_squares[i].addEventListener('click', gameboard_click);
}
