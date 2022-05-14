// Represents the starting game board
const startingBoard = [[0,0,0],[0,0,0],[0,0,0]]
console.log(checkWin(startingBoard))


// Matrix -> Boolean
// Given a gameboard, returns true if there is a winning combination
function checkWin(gameBoard){
    const gameBoardT = transpose(gameBoard)
    for (let i = 0; i < 3; i++) {
        // Checking winning row
        if (Math.abs(sumArray(gameBoard[i])) === 3) {
            return true
        }
        // Check winning column
        else if (Math.abs(sumArray(gameBoardT[i])) === 3) {
            return true
        }
        // Checking winning diagonal
        else if (Math.abs(gameBoard[0][0] + gameBoard[1][1] + gameBoard[2][2]) === 3) {
            return true
        }
        else if (Math.abs(gameBoard[0][2] + gameBoard[1][1] + gameBoard[2][0]) === 3) {
            return true
        }
    }
    return false
}

// ------------- HELPER FUNCTIONS ---------------

// ArrOfNum -> Num
// Given an array of numbers returns the sum of all the numbers in the array
function sumArray(arrOfNum){
    let sumTotal = 0
    for (let i = 0; i < arrOfNum.length; i++){
        sumTotal += arrOfNum[i]
    }
    return sumTotal
}

// Matrix -> Matrix
// Transposes the given matrix
function transpose(gameBoard){
    const gameBoardT = [[],[],[]]
    for (let i = 0; i < 3; i++){
        for (let j = 2; j >= 0; j--) {
            gameBoardT[i][j] = gameBoard[j][i]
        }
    }
    return gameBoardT
}