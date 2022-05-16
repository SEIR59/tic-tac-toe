// const gameBoardElement = document.querySelector('gameBoard');
const boxes = document.querySelectorAll('.square');
// const restartButton = document.querySelector('#restart').addEventListener('click', restart);
let winner = "";
const resultText = document.querySelector('.result');
const resultText2 = document.querySelector('.result2');

//declaring the player and computer and winning combinations
const playerX = 'X';
const playerO = 'O';
// forces player x to always start
let currentPlayer = 'X';

// const winningCombinations = [
//     //rows
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     //columns
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     //diagonals
//     [0,4,8],
//     [2,4,6],
// ];
// // //create game board into array
// let boxesArray = ['', '', '', '', '', '', '', '', '',];

// // const playGame = (element, index) =>{
// //     element.value = currentPlayer;
// //     element.disabled = true;
//     //  boxesArray[index] = currentPlayer;
//     //  currentPlayer = currentPlayer == 'X' ? 'X' : 'O';
//     // resultText.innerHTML = `Player ${currentPlayer}'s Turn`;

// // for (let i = 0; i < winningCombinations.length; i++){
// //     let turn = winningCombinations[i];
// //     let win = boxesArray[turn[0]];
// //     let lose = boxesArray[turn[1]];
// //     let tie = boxesArray[turn[2]];
// // }

// // }

//to populate the x's and o's
for (const box of boxes) {
  box.addEventListener("click", function (){
    //to tell computer that class disable is not longer a choice to click
    if (!box.classList.contains("disable")){
        console.log(currentPlayer);
        // box.classList.add("test");
        disableClick(box);
        console.log(box.classList);
        checkWin();
        //player choice x or o
        if (currentPlayer === "X") {
          box.innerHTML = "X";
          box.classList.add("playerX");
         currentPlayer = "O";
         displayPlayerTurn();
         
        } else {
          box.innerHTML = "O";
          box.classList.add("playerO");
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
    

function checkWin(){
    console.log("checkWin ran");
    //for win combo 1
  for (i = 0; i < boxes.length; i++){  
    if ((boxes[0].classList.contains("X") && boxes[1].classList.contains("X") && boxes[2].classList.contains("X"))|| (boxes[0].classList.contains("O") && boxes[1].classList.contains("O") && boxes[2].classList.contains("O"))){
        if (boxes[0].classList.contains("X")){
            winner = "X";
            resultText2.innerHTML = `Player X is the winner!`;
        }else {
        winner = "O";
        resultText2.innerHTML = `Player O is the winner!`;
         };
}
}
}


//tie - only will happen when all 9 boxes are clicked. every time a box is clicked, the array/variable = 1
// let boxesClicked = 0;
//  if winner = "" {
//     resultText.innerHTML = `It's a tie.`;
// then tie









