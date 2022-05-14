// #region functions - collapse this to line to jump to code.

//function to do things when a player makes a move. IDs are structured as codes to win conditions. ID[0:2]-> verticles, ID[3:5]->horazontals, ID[6:7]->diagonals. Contains '1' in position if it helps that win condition. Sum of 3 means 3 in a row, which = win.
//ID example X chooses 3 squares. ID[6:7] for the divs IDs are top left '10', middle '11, bottom right '10'. ID[6] === 3, which is a win, diagonal.
const playerMove = (location) => {
    let id = location.id.split('').map(function (x) { return Number(x) })
    let title = document.getElementById('title')
    //console.log('in playerMove')
    if (currentTurn === 0 && location.innerText === '') {
        //things for player 1
        location.innerText = 'X'
        tieCheck += id.reduce((x, y) => x + y, 0)
        currentTurn = 1
        title.innerText = `O's turn`
        //digest the event id and add it to player array to check for wins.
        for (let i = 0; i < id.length; i++) {
            X[i] += id[i];
            if (X[i] === 3) {
                winnerFound('X')
                return
            }
        }
        if (tieCheck === 24) {
            winnerFound()
            return
        }
        //console.log('X ' + X)
    } else if (currentTurn === 1 && location.innerText === '') {
        //things for player 2
        location.innerText = 'O'
        currentTurn = 0
        tieCheck += id.reduce((x, y) => x + y, 0)
        title.innerText = `X's turn`
        for (let i = 0; i < id.length; i++) {
            O[i] += id[i];
            if (O[i] === 3) {
                winnerFound('O')
                return
            }
        }
        if (tieCheck === 24) {
            winnerFound()
            return
        }
        //console.log('O ' + O)
    }
    //check for ties
    //console.log('tc current' + tieCheck)

}

//function to see if somebody won
const winnerFound = (winner) => {
    const sb = document.getElementById
    if (winner === 'X' || winner === 'O') {
        console.log(`${winner}'s win!`)
        document.getElementById('title').innerText = `${winner} wins!`
        if(winner === 'X'){
            currentScore[0]++
        }else{
            currentScore[1]++
        }
    } else {
        console.log('Tie')
        document.getElementById('title').innerText = `Booo. Tie.`
        currentScore[2]++
    }
    boardClickOn(false)
    for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].style.background = 'purple'
    }
    updateScoreboard()
}

const updateScoreboard = () =>{
    document.getElementById('sbX').innerText = `Player X: ${currentScore[0]}`
    document.getElementById('sbO').innerText = `Player O: ${currentScore[1]}`
    document.getElementById('sbT').innerText = `Ties: ${currentScore[2]}`
}
//function to reset the gameboard
const clearMoves = () => {
    //console.log('in clearMoves')
    for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].innerText = '';
    }
    X = [0, 0, 0, 0, 0, 0, 0, 0]
    O = [0, 0, 0, 0, 0, 0, 0, 0]
    currentTurn = 0;
    boardClickOn(true)
    for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].style.background = 'white'
    }
    document.getElementById('title').innerText = `Let's play some TTT`
    tieCheck = 0;
}

//toggle board click listening. true = on, false = off.
const boardClickOn = (bool) => {
    //bridge to connect playerMove with syntax of event listener activation
    const playerMoveBridge = () => {
        const target = event.target
        playerMove(target)
    }
    if (bool === true) {
        $('#gameboard').on('click' , playerMoveBridge)
    } else {
        $('#gameboard').off()
        }
    }

// #endregion 
//initialize button(s) and listeners
document.getElementById('resetbtn').addEventListener('click', function () { clearMoves() })
const allSquares = document.getElementsByClassName('square') //global variable for all the game squares.
boardClickOn(true)

//track turns of players and their movements
let currentTurn = 0
let X = [0, 0, 0, 0, 0, 0, 0, 0]
let O = [0, 0, 0, 0, 0, 0, 0, 0]
let tieCheck = 0;
const currentScore = [0,0,0]