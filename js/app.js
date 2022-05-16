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

////*     functions     *////
// set the boards classes / event listeners to their default.
// ALSO removes / sets a class to allow for an animation every time a point is added to someone.
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




// when a square is clicked, adjust classes approprietly and then tell ai to choose.
function gameboard_click(e) {
    currentSquare = e.target;
    currentSquare.innerHTML = currentSymbol;
    currentSquare.classList.add('player1-choice');
    currentSquare.classList.remove('square-hover')
    currentSquare.removeEventListener('click', gameboard_click);

    turnCounter++;
    
    turn_status.innerText =  'It\'\s the Ai\'\s turn!'

    console.log(turnCounter)
    
    // removing listerners / classes to stop player input on ai turn / win/ lose screen.
    for (let i = 0; i < gameboard_squares.length; i++) {
        gameboard_squares[i].removeEventListener('click', gameboard_click);
        if (gameboard_squares[i].classList.contains('square-hover')) {
            gameboard_squares[i].classList.remove('square-hover');
        }
    }
    // check win condition
    let gameOver = checkWinCondition();

    // if player has not won, allow ai to go.
    if (gameOver === false) {
        aiTurn();
    }

}

// the ai's turn.
function aiTurn() {
    
    // get random interval between 1 and 4 seconds for the ai's response wait time.
    let waitRandom = (Math.floor(Math.random() * 4) + 1) * 1000;
    let spotCheck = 0;
    console.log('Ai is thinking...');
    setTimeout(function(){

        while (true) {
            // this loop allows the ai to make a random selection between 1 - 9 and only changes the square it chooses once it finds an empty one. I'd like to save this so i can go back in the future and add the mini-max algorithm once i learn more aobut it.
            aiChoice = Math.floor(Math.random() * 9)
            console.log(aiChoice);
            console.log(gameboard_squares[aiChoice]);
            if (gameboard_squares[aiChoice].innerHTML === '') {
                console.log('we made it into here');
                // adjust classes and event listners for the ai's choice.
                gameboard_squares[aiChoice].innerHTML = currentSymbol;
                gameboard_squares[aiChoice].classList.remove('square-hover')
                gameboard_squares[aiChoice].classList.add('player2-choice');
                gameboard_squares[aiChoice].removeEventListener('click', gameboard_click);
                
                turnCounter++;
                turn_status.innerText = 'It\'\s player 1\'\s turn!'
                break;
            }
            spotCheck++;
            // if the ai isn't able to find a spot to place then it breaks out of the infinite loop.
            if (spotCheck > 100) {
                console.log('break check-loop...')
                break;
            }
        }
        // check if the ai has won and if not allow the player to make a selection again. (Gives classes / event listeners to empty squared.)
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

// resets gameboard and scored
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
// only resets gameboard and keeps scores.
function gameboard_reset() {
    // reset game but keep scores
    vsAi = true;
    turnCounter = 0;
    currentSymbol = 'X';
    spotCheck = 0;
    setBoard()
 }

 // checks to see if the current player has won, or if their is a tie.
 function checkWinCondition() {
    // check if there are three of the same symbol in a row anywhere
    console.log("checking win conditions")
    let winner = false;
    isTie = false;
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
// runs if someone passed the win condition check.
function someoneWon(winner, tie) {
    // flip board
    gameboard.classList.add('winnerwinner');


    //update score of player that one, remove remaining event listeners.
    if (tie) {
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