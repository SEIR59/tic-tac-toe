
let playerTurn = 1
let gameBoard = ["","","","","","","","",""]

// check back for conditions = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ]



let currentPlayer = () => {
    if (playerTurn === 1) {
        return playerTurn = 2
    }else {
        return playerTurn = 1
    }
}


const clickDisabled = () => {
    document.getElementById('1').disabled = true
    document.getElementById('2').disabled = true
    document.getElementById('3').disabled = true
    document.getElementById('4').disabled = true
    document.getElementById('5').disabled = true
    document.getElementById('6').disabled = true
    document.getElementById('7').disabled = true
    document.getElementById('8').disabled = true
    document.getElementById('9').disabled = true
}

let count = 0
const winConditions = () => {
    if (gameBoard[0] !== '' && gameBoard[1] === gameBoard[0] && gameBoard[2] === gameBoard[1]) {
        winMessage()
        clickDisabled()
    }else if (gameBoard[3] !== '' && gameBoard[4] === gameBoard[3] && gameBoard[5] === gameBoard[4]) {
        winMessage()
        clickDisabled()
    }else if (gameBoard[6] !== '' && gameBoard[7] === gameBoard[6] && gameBoard[8] === gameBoard[7]) {
        winMessage()
        clickDisabled()
    }else if (gameBoard[0] !== '' && gameBoard[3] === gameBoard[0] && gameBoard[6] === gameBoard[3]) {
        winMessage()
        clickDisabled()
    }else if (gameBoard[1] !== '' && gameBoard[4] === gameBoard[1] && gameBoard[7] === gameBoard[4]) {
        winMessage()
        clickDisabled()
    }else if (gameBoard[2] !== '' && gameBoard[5] === gameBoard[2] && gameBoard[8] === gameBoard[5]) {
        winMessage()
        clickDisabled()
    }else if (gameBoard[0] !== '' && gameBoard[4] === gameBoard[0] && gameBoard[8] === gameBoard[4]) {
        winMessage()
        clickDisabled()
    }else if (gameBoard[2] !== '' && gameBoard[4] === gameBoard[2] && gameBoard[6] === gameBoard[4]) {
        winMessage()
        clickDisabled()
    }else if (count === 9) {
       document.getElementById('winMessageText').innerText = 'The game has ended in a tie'
    }
}

winMessage = function () {
    document.getElementById('winMessageText').innerText = `player ${currentPlayer(playerTurn)} is the winner`
}

document.getElementById('whichTurn').innerText = playerTurn

document.getElementById('1').addEventListener('click', () => {
    if (document.getElementById('1-text').innerText == '') {
        if (playerTurn === 1) {
            document.getElementById('1-text').innerText = 'X'
            gameBoard.splice(0,1,'X')
            currentPlayer()
            console.log(gameBoard)
        }else if(playerTurn === 2) {
            document.getElementById('1-text').innerText = 'O'
            gameBoard.splice(0,1,'O')
            currentPlayer()
            console.log(gameBoard)

        }
    }
    
    document.getElementById('1').disabled = true
    count++
    winConditions()
    document.getElementById('whichTurn').innerText = playerTurn
})

document.getElementById('2').addEventListener('click', () => {
    if (document.getElementById('2-text').innerText == '') {
        if (playerTurn === 1) {
            document.getElementById('2-text').innerText = 'X'
            gameBoard.splice(1,1,'X')
            currentPlayer()
            console.log(gameBoard)

        }else if(playerTurn === 2) {
            document.getElementById('2-text').innerText = 'O'
            gameBoard.splice(1,1,'O')
            currentPlayer()
            console.log(gameBoard)

        }
    }
    
    document.getElementById('2').disabled = true
    count++
    winConditions()
    document.getElementById('whichTurn').innerText = playerTurn
})

document.getElementById('3').addEventListener('click', () => {
    if (document.getElementById('3-text').innerText == '') {
        if (playerTurn === 1) {
            document.getElementById('3-text').innerText = 'X'
            gameBoard.splice(2,1,'X')
            currentPlayer()
            console.log(gameBoard)

            
        }else if(playerTurn === 2) {
            document.getElementById('3-text').innerText = 'O'
            gameBoard.splice(2,1,'O')
            currentPlayer()
            console.log(gameBoard)

        }
    }
    
    document.getElementById('3').disabled = true
    count++
    winConditions()
    document.getElementById('whichTurn').innerText = playerTurn
})

document.getElementById('4').addEventListener('click', () => {
    if (document.getElementById('4-text').innerText == '') {
        if (playerTurn === 1) {
            document.getElementById('4-text').innerText = 'X'
            gameBoard.splice(3,1,'X')
            currentPlayer()
            console.log(gameBoard)

            
        }else if(playerTurn === 2) {
            document.getElementById('4-text').innerText = 'O'
            gameBoard.splice(3,1,'O')
            currentPlayer()
            console.log(gameBoard)

        }
    }
    
    document.getElementById('4').disabled = true
    count++
    winConditions()
    document.getElementById('whichTurn').innerText = playerTurn
})

document.getElementById('5').addEventListener('click', () => {
    if (document.getElementById('5-text').innerText == '') {
        if (playerTurn === 1) {
            document.getElementById('5-text').innerText = 'X'
            gameBoard.splice(4,1,'X')
            currentPlayer()
            console.log(gameBoard)

        }else if(playerTurn === 2) {
            document.getElementById('5-text').innerText = 'O'
            gameBoard.splice(4,1,'O')
            currentPlayer()
            console.log(gameBoard)

        }
    }
    
    document.getElementById('5').disabled = true
    count++
    winConditions()
    document.getElementById('whichTurn').innerText = playerTurn
})

document.getElementById('6').addEventListener('click', () => {
    if (document.getElementById('6-text').innerText == '') {
        if (playerTurn === 1) {
            document.getElementById('6-text').innerText = 'X'
            gameBoard.splice(5,1,'X')
            currentPlayer()
            console.log(gameBoard)

            
        }else if(playerTurn === 2) {
            document.getElementById('6-text').innerText = 'O'
            gameBoard.splice(5,1,'O')
            currentPlayer()
            console.log(gameBoard)

        }
    }
    
    document.getElementById('6').disabled = true
    count++
    winConditions()
    document.getElementById('whichTurn').innerText = playerTurn
})
document.getElementById('7').addEventListener('click', () => {
    if (document.getElementById('7-text').innerText == '') {
        if (playerTurn === 1) {
            document.getElementById('7-text').innerText = 'X'
            gameBoard.splice(6,1,'X')
            currentPlayer()
            console.log(gameBoard)

        }else if(playerTurn === 2) {
            document.getElementById('7-text').innerText = 'O'
            gameBoard.splice(6,1,'O')
            currentPlayer()
            console.log(gameBoard)

        }
    }
    
    document.getElementById('7').disabled = true
    count++
    winConditions()
    document.getElementById('whichTurn').innerText = playerTurn
})
document.getElementById('8').addEventListener('click', () => {
    if (document.getElementById('8-text').innerText == '') {
        if (playerTurn === 1) {
            document.getElementById('8-text').innerText = 'X'
            gameBoard.splice(7,1,'X')
            currentPlayer()
            console.log(gameBoard)

            
        }else if(playerTurn === 2) {
            document.getElementById('8-text').innerText = 'O'
            gameBoard.splice(7,1,'O')
            currentPlayer()
            console.log(gameBoard)

        }
    }
    
    document.getElementById('8').disabled = true
    count++
    winConditions()
    document.getElementById('whichTurn').innerText = playerTurn
})
document.getElementById('9').addEventListener('click', () => {
    if (document.getElementById('9-text').innerText == '') {
        if (playerTurn === 1) {
            document.getElementById('9-text').innerText = 'X'
            gameBoard.splice(8,1,'X')
            currentPlayer()
            console.log(gameBoard)

            
        }else if(playerTurn === 2) {
            document.getElementById('9-text').innerText = 'O'
            gameBoard.splice(8,1,'O')
            currentPlayer()
            console.log(gameBoard)

        }
    }
    
    document.getElementById('9').disabled = true
    count++
    winConditions()
    document.getElementById('whichTurn').innerText = playerTurn
})


// win condition function inside variable 
// each button gets one event listener 
//  if (innerText of span id = '')
//  if player turn = player x inner text of id is set to x
//  push text to array in by splice then switch players
// make condition player loop for playerO
// check function for win condition everytime button is clicked
// set button to click disabled
// have a count go up by one each time a button is clicked
// variable that sets click status of each button id

// win condition is function that checks for
//  first box is not empty && second box == first box && 
// thirdbox == second box
// set win message to a function ${playerTurn} disable all buttons after win condition has been met

