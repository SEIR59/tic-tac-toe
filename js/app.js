// Reset the board into a clear state
// Take user input during clicks starting at X
// Alternate the turns between X and O
// When order equals to winning array order go to win screen
// Let win screen show restart button and reset board into clear state

const gameBoard = document.getElementById('game-board')
let grid = document.getElementsByClassName('grid')
grid = Array.from(grid)
let currentPlayer = "X"
let winningOrder = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

const winnerCheck = () => {
    winningOrder.forEach(function(combination) {
        let check = combination.every(idx => grid[idx].innerText.trim() == currentPlayer)
        if (check){
            alert(`Player ${currentPlayer} has won!`)
        }
    }
)}
grid.forEach(function(grid){
    grid.addEventListener('click', function(){
        if(grid.innerText.trim() != "") return
        grid.innerText = currentPlayer
        winnerCheck()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
})