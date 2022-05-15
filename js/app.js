// Represents a default gameboard
let gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

// Represents the numebr of turns passed
let turn = 1

// Represents all the tiles on the gameboard
const squares = document.querySelectorAll('.square')

// Load game when the start game button is clicked
document.getElementById('start').addEventListener('click', main)

// When the reset button is clicked
document.getElementById('reset').addEventListener("click", main)


// Main game function
function main() {
    // Removes any previous markers on the board
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove('o')
        squares[i].classList.remove('x')
    }
    // Sets the game board back to its default position 
    gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

    // Resets the number of turns 
    turn = 1

    // Adding event listeners to enable click functionality
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", makeTurn, { once: true })
    }

    // Remove any previous turn messages
    removeElementsByClassName('turn-message')
    removeElementsByClassName('win-message')
    removeElementsByClassName('tie-message')

    // Displays who's turn it is
    whosTurn(turn)
}


// Executed when a tile is clicked
function makeTurn(event) {
    if (turn % 2 === 0) {
        // Remove previous turn message
        removeElementsByClassName('turn-message')

        // Updating the gameBoard matrix
        const idName = event.target.id
        gameBoard[idName[0]][idName[1]] = -1

        // Displaying the marker on the web page
        document.getElementById(idName).classList.add('o')

        // Checking if there is a win
        if (isWin(gameBoard) === true) {
            winningMessage(turn)
        }

        // Checking if there is a tie
        else if (isTie(gameBoard) === true){
            tieMessage()
        }

        // Updating the number of turns
        turn += 1

        // Display updated turn message
        whosTurn(turn)
    }
    else {
        // Remove previous turn message
        removeElementsByClassName('turn-message')

        // Updating the gameBoard matrix
        const idName = event.target.id
        gameBoard[idName[0]][idName[1]] = 1

        // Displaying the marker on the web page
        document.getElementById(idName).classList.add('x')

        // Checking if there is a win
        if (isWin(gameBoard) === true) {
            winningMessage(turn)
        }

        // Checking if there is a tie
        else if (isTie(gameBoard) === true){
            tieMessage()
        }

        // Updating the number of turns
        turn += 1

        // Display updated turn message
        whosTurn(turn)
    }
}

// Displays current turn
function whosTurn(turn) {
    let m = document.createElement('div')
    m.classList.add('turn-message')
    if (turn % 2 === 0) {
        m.innerText = "Current Turn: Player 2"
    }
    else {
        m.innerText = "Current Turn: Player 1"
    }
    document.querySelector('section').append(m)
}

// Displays winning message
function winningMessage(turn) {
    let w = document.createElement('div')
    w.classList.add('win-message')
    if (turn % 2 === 0) {
        w.innerText = "Winner: Player 2"
    }
    else {
        w.innerText = "Winner: Player 1"
    }
    document.querySelector('section').append(w)
}

// Displays tie message
function tieMessage() {
    let t = document.createElement('div')
    t.classList.add('tie-message')
    t.innerText = "Result: Tie"
    document.querySelector('section').append(t)
}


// A function to remove elements by class 
function removeElementsByClassName(name) {
    const elements = document.getElementsByClassName(name)
    for (let i = 0; i < elements.length; i++) {
        elements[0].parentNode.removeChild(elements[0])
    }
}

// Stops the game by removing all event listeners
function stopGame() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener("click", makeTurn)
    }
}

// Given a gameboard and the number of passed turns, returns true if there is a winning combination
function isWin(gameBoard) {
    const gameBoardT = transpose(gameBoard)
    for (let i = 0; i < 3; i++) {
        // Checking winning row
        if (Math.abs(sumArray(gameBoard[i])) === 3) {
            stopGame()
            return true;
        }
        // Check winning column
        else if (Math.abs(sumArray(gameBoardT[i])) === 3) {
            stopGame()
            return true;
        }
        // Checking winning diagonal
        else if (Math.abs(gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === 3) {
            stopGame()
            return true;
        }
        else if (Math.abs(gameBoard[0][2] + gameBoard[1][1] + gameBoard[2][0]) === 3) {
            stopGame()
            return true;
        }
    }
    return false;
}

// Given a gameboard and the number of passed turns, returns true if the game results in a tie
function isTie(gameBoard) {
    if ((isWin(gameBoard) === false) && (turn === 9)) {
        return true
    }
    return false
}

// ------------- HELPER FUNCTIONS ---------------

// ArrOfNum -> Num
// Given an array of numbers returns the sum of all the numbers in the array
function sumArray(arrOfNum) {
    let sumTotal = 0
    for (let i = 0; i < arrOfNum.length; i++) {
        sumTotal += arrOfNum[i]
    }
    return sumTotal
}

// Matrix -> Matrix
// Transposes the given matrix
function transpose(gameBoard) {
    const gameBoardT = [[], [], []]
    for (let i = 0; i < 3; i++) {
        for (let j = 2; j >= 0; j--) {
            gameBoardT[i][j] = gameBoard[j][i]
        }
    }
    return gameBoardT
}