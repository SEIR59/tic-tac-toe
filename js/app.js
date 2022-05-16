// const gameBoardElement = document.querySelector('gameBoard');
const boxes = document.querySelectorAll('.square');
// const restartButton = document.querySelector('#restart').addEventListener('click', restart);
const resultText = document.querySelector('.result');

//declaring the player and computer and winning combinations
const playerX = 'X';
const playerO = 'O';
// forces player x to always start
let currentPlayer = 'X';
const winningCombinations = [
    //rows
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //columns
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonals
    [0,4,8],
    [2,4,6],
];
// //create game board into array
let boxesArray = ['', '', '', '', '', '', '', '', '',];

// const playGame = (element, index) =>{
//     element.value = currentPlayer;
//     element.disabled = true;
    //  boxesArray[index] = currentPlayer;
    //  currentPlayer = currentPlayer == 'X' ? 'X' : 'O';
    // resultText.innerHTML = `Player ${currentPlayer}'s Turn`;

// for (let i = 0; i < winningCombinations.length; i++){
//     let turn = winningCombinations[i];
//     let win = boxesArray[turn[0]];
//     let lose = boxesArray[turn[1]];
//     let tie = boxesArray[turn[2]];
// }

// }

//to populate the x's and o's
for (const box of boxes) {
  box.addEventListener("click", function (){
    //to tell computer that class disable is not longer a choice to click
    if (!box.classList.contains("disable")){
        console.log(currentPlayer);
        box.classList.add("test");
        disableClick(box);
        console.log(box.classList);
        
        //player choice x or o
        if (currentPlayer === "X") {
          box.innerHTML = "X";
         currentPlayer = "O";
         displayPlayerTurn();
        } else {
          box.innerHTML = "O";
        currentPlayer = "X";
        displayPlayerTurn();
        }
    }
  })
}

// to disable the boxes so you can't change the player choice
function disableClick(a){
    a.classList.add('disable');
}


//display message for who's turn it is
function displayPlayerTurn(){
    if(currentPlayer === "X"){
        resultText.innerHTML = `Player ${currentPlayer}'s turn.`;
    } else {
        resultText.innerHTML = `Player ${currentPlayer}'s turn.`;
    }
}
    


//display winner
// function displayWinner(){
// if(currentPlayer = "X"){
//     resultText.innerHTML = `Player ${currentPlayer}'s the winner!`;
// } else {
//     resultText.innerHTML = `Player ${currentPlayer}'s the winner!`;
// }
// }
// displayWinner();











