const squares = document.querySelectorAll('.square')
const reset = document.getElementById("reset")
const message = document.getElementById("message")

let player = "X"
let gameLive = true
let board = ["","","","","","","","",""]

//event on click
function playerMove(e) {
   
    const id = e.target.id
    if (!board[id] && gameLive) {
        board[id] = player
        e.target.innerText = player
        if (checkWin()){
            gameOver()
        }
        if (player == "X"){
            player = "O"
        } else if (player == "O"){
            player = "X"
        }
    } else {
        return;
    }
}

//win conditions
function checkWin() {
    if (
        board[0] &&
        board[1] &&
        board[2] &&
        board[3] &&
        board[4] &&
        board[5] &&
        board[6] &&
        board[7] &&
        board[8]
        ) {
        return true
    }
    if (player == board[0] == board[1] && board[0] == board[2]) {
        return true
    } else if (player == board[3] && board[3] == board[4] && board[3] == board[5]) {
        return true
    } else if (player == board[6] && board[6] == board[7] && board[6] == board[8]) {
        return true
    } else if (player == board[0] && board[0] == board[3] && board[0] == board[6]) {
        return true
    } else if (player == board[1] && board[1] == board[4] && board[1] == board[7]) {
        return true
    } else if (player == board[2] && board[2] == board[5] && board[2] == board[8]) {
        return true
    } else if (player == board[0] && board[0] == board[4] && board[0] == board[8]) {
        return true
    } else if (player == board[2] && board[2] == board[4] && board[2] == board[6]) {
        return true
    } else {
        return false
    }
    
}

//reset
function resetGame() {
    for (let i = 0; i < 9; i++){
        board[i] = ""
        squares[i].innerText = ""
    }
    message.innerText = "Make your selection"
    gameLive = true
}

//game over
function gameOver(){
    gameLive = false
    if (
        board[0] &&
        board[1] &&
        board[2] &&
        board[3] &&
        board[4] &&
        board[5] &&
        board[6] &&
        board[7] &&
        board[8]
    ) {
        message.innerText = "It's a tie"
    } else {
        message.innerText = `${player} has won!`
    }
}

reset.addEventListener('click', resetGame)
document.querySelectorAll('.square').forEach(square => square.addEventListener('click',playerMove))
