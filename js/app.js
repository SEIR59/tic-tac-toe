window.addEventListener('DOMConteentLoaded', () => {
    const resetButton = document.querySelector('input');
    const ticTacToeBoxes = Array.from(document.querySelectorAll('.box'))

    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let player1 = "X";
    const player2 = "O";
    
    const player1Score = "Player 1 Won";
    const player2Score = "Player 2 Won";
    const gameCat = "Cat!";

    let gameWinConditions = [
        [0, 1, 2]
        [3, 4, 5]
        [6, 7, 8]
        [0, 4, 8]
        [0, 3, 6]
        [1, 4, 7]
        [2, 5, 8]
        [2, 4, 6]
        
    ]









})
