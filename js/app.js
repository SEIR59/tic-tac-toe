const gameboard = document.getElementById('gameboard');
const gameboard_squares = document.getElementsByClassName('gameboard-square');
const turn_status = document.getElementById('turn-status');
const reset_btn = document.getElementById('reset-btn');
const player1Score = document.getElementById('player1Score');
const player2Score = document.getElementById('player2Score');
const playAgain_btn = document.getElementById('playAgain-btn');

let vsAi = true;
const playerSymbol = 'X';
const aiSymbol = 'O';
let turnCounter = 0;
let currentTurn;
let playerWins = 0;
let aiWins = 0;
let currentSymbol = 'X';
let aiChoice;
let isTie = false;

const square_1 = document.getElementById('square1');
const square_2 = document.getElementById('square2');
const square_3 = document.getElementById('square3');
const square_4 = document.getElementById('square4');
const square_5 = document.getElementById('square5');
const square_6 = document.getElementById('square6');
const square_7 = document.getElementById('square7');
const square_8 = document.getElementById('square8');
const square_9 = document.getElementById('square9');

// add event listeners
function setBoard() {
    for (let i = 0; i < gameboard_squares.length; i++) {
        gameboard_squares[i].addEventListener('click', gameboard_click);
        gameboard_squares[i].innerHTML = '';
        if (!gameboard_squares[i].classList.contains('square-hover')) {
            gameboard_squares[i].classList.add('square-hover');
        }
    }
    if (gameboard.classList.contains('winnerwinner')) {
        gameboard.classList.remove('winnerwinner');
    }
    if (!playAgain_btn.classList.contains('hidden')) {
        playAgain_btn.classList.add('hidden');
    }
    if (player1Score.classList.contains('pointAdded')) {
        player1Score.classList.remove('pointAdded');
    }
    if (player2Score.classList.contains('pointAdded')) {
        player2Score.classList.remove('pointAdded');
    }
    turn_status.innerText = `It's player ${turnCounter % 2 + 1}'s turn!`
}

setBoard();

playAgain_btn.addEventListener('click', gameboard_reset);
reset_btn.addEventListener('click', gameboard_complete_reset);


////*     functions     *////


// on square click
function gameboard_click(e) {
    currentSquare = e.target;
    currentSquare.innerHTML = currentSymbol;
    currentSquare.classList.toggle('square-hover')
    currentSquare.classList.add('player1-choice');
    currentSquare.removeEventListener('click', gameboard_click);

    turnCounter++;
    
    turn_status.innerText =  'It\'\s the Ai\'\s turn!'

    console.log(turnCounter)
    
    for (let i = 0; i < gameboard_squares.length; i++) {
        gameboard_squares[i].removeEventListener('click', gameboard_click);
        if (gameboard_squares[i].classList.contains('square-hover')) {
            gameboard_squares[i].classList.remove('square-hover');
        }
    }
    // check win condition
    let gameOver = checkWinCondition();


    if (gameOver === false) {
        aiTurn();
    }

}

function aiTurn() {
        
    let waitRandom = (Math.floor(Math.random() * 4) + 1) * 1000;
    let spotCheck = 0;
    console.log('Ai is thinking...');
    setTimeout(function(){

        while (true) {
            aiChoice = Math.floor(Math.random() * 9)
            console.log(aiChoice);
            console.log(gameboard_squares[aiChoice]);
            if (gameboard_squares[aiChoice].innerHTML === '') {
                console.log('we made it into here');
                gameboard_squares[aiChoice].innerHTML = currentSymbol;
                gameboard_squares[aiChoice].classList.toggle('square-hover')
                gameboard_squares[aiChoice].classList.add('player2-choice');
                gameboard_squares[aiChoice].removeEventListener('click', gameboard_click);
                
                turnCounter++;
                turn_status.innerText = 'It\'\s player $1\'\s turn!'
                break;
            }
            spotCheck++;
            if (spotCheck > 8) {
                console.log('break check-loop...')
                break;
            }
        }
        if (checkWinCondition() === false) {
            for (let i = 0; i < gameboard_squares.length; i++) {
                if (gameboard_squares[i].innerHTML === '') {
                    gameboard_squares[i].addEventListener('click', gameboard_click);
                    if (!gameboard_squares[i].classList.contains('square-hover')) {
                        gameboard_squares[i].classList.add('square-hover');
                    }
                }
            }
        }





    },waitRandom)
}

function gameboard_complete_reset() {
    vsAi = true;
    turnCounter = 0;
    currentSymbol = 'X';
    playerWins = 0;
    player1Score.innerHTML = 0;
    aiWins = 0;
    player2Score.innerHTML = 0;
    spotCheck = 0;
    setBoard()
}
function gameboard_reset() {
    // reset game but keep scores
    vsAi = true;
    turnCounter = 0;
    currentSymbol = 'X';
    spotCheck = 0;
    setBoard()
 }

 function checkWinCondition() {
    // check if there are three of the same symbol in a row anywhere
    console.log("checking win conditions")
    let winner = false;
    if (square_1.innerHTML === currentSymbol && square_2.innerHTML === currentSymbol && square_3.innerHTML === currentSymbol) {
        winner = true;
        someoneWon(winner, isTie);
        return true;
    } else if (square_4.innerHTML === currentSymbol && square_5.innerHTML === currentSymbol && square_6.innerHTML === currentSymbol) {
        winner = true;
        someoneWon(winner, isTie);
        return true;
    } else if (square_7.innerHTML === currentSymbol && square_8.innerHTML === currentSymbol && square_9.innerHTML === currentSymbol) {
        winner = true;
        someoneWon(winner, isTie);
        return true;
    } else if (square_1.innerHTML === currentSymbol && square_4.innerHTML === currentSymbol && square_7.innerHTML === currentSymbol) {
        winner = true;
        someoneWon(winner, isTie);
        return true;
    } else if (square_2.innerHTML === currentSymbol && square_5.innerHTML === currentSymbol && square_8.innerHTML === currentSymbol) {
        winner = true;
        someoneWon(winner, isTie);
        return true;
    } else if (square_3.innerHTML === currentSymbol && square_6.innerHTML === currentSymbol && square_9.innerHTML === currentSymbol) {
        winner = true;
        someoneWon(winner, isTie);
        return true;
    } else if (square_1.innerHTML === currentSymbol && square_5.innerHTML === currentSymbol && square_9.innerHTML === currentSymbol) {
        winner = true;
        someoneWon(winner, isTie);
        return true;
    } else if (square_3.innerHTML === currentSymbol && square_5.innerHTML === currentSymbol && square_7.innerHTML === currentSymbol) {
        winner = true;
        someoneWon(winner, isTie);
        return true;
    }
    if (turnCounter === 9 && winner === false) {
        console.log('its a tie!');
        isTie = true;
        someoneWon(winner, isTie);
        return true;
    } else {
        if (currentSymbol === 'X') {
            currentSymbol = 'O';
        } else {
            currentSymbol = 'X';
        }
    }
    return false;
}

function someoneWon(winner, tie) {
    // flip board
    gameboard.classList.add('winnerwinner');


    //update score of player that one, remove remaining event listeners.
    if (tie) {
        // change text to tie!
        turn_status.innerHTML = 'It\'\s a tie!';
    } else if (turnCounter % 2 === 0) {
        turn_status.innerHTML = 'The Ai wins!';
        aiWins++;
        player2Score.innerHTML =  aiWins;
        player2Score.classList.add('pointAdded');
    } else {
        turn_status.innerHTML = 'Player 1 wins!';
        playerWins++;
        player1Score.innerHTML = playerWins;
        player1Score.classList.add('pointAdded');
    }
    
    // remove event listeners and change text to winner or tie.
    for (let i = 0; i < gameboard_squares.length; i++) {
        gameboard_squares[i].removeEventListener('click', gameboard_click);
        if (gameboard_squares[i].classList.contains('square-hover')) {
            gameboard_squares[i].classList.remove('square-hover');
        }
    }

    playAgain_btn.classList.remove('hidden');


}
/****     end functions     ****/