console.log("hello");
// list of my variables
const blocks = document.querySelectorAll(".block");
const playerX = 'X';
const player0 = '0';
const newGame = document.getElementById("new-game-btn");

console.log(blocks)
const gameBoard = Array(blocks.length);
gameBoard.fill(null);
//create a function to determine which turn it is and allow that turn to click a square 
//if square is already marked then return 
let turn = playerX

const blockClicked = (event) => {
    
    const id = event.target.index
    console.log(id)
}

function markBoard(event, index){
    
    let block = event.target;
    const blockNumber = block.dataset.index
    console.log(blockNumber)
    if(block.innerText != ""){
        return;
    }
    else if (turn === playerX) {
        block.innerText = playerX;
        gameBoard[blockNumber] = playerX;
        turn = player0;
    }
    else {
        block.innerText = player0;
        gameBoard[blockNumber] = player0;
        turn = playerX;
    }
    winningCombo();
    
}

blocks.forEach((event, index) => {
    event.addEventListener("click", markBoard)
});

// //create an event listener for each square


// //create list of all winning combinations
// //have a function to check for a winning combo on the board after each turn



const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function winningCombo(){

    for (let i = 0; i <= 7; i++){
        const winCombo =winCombinations[i];
        const a = gameBoard[winCombo[0]];
        const b = gameBoard[winCombo[1]];
        const c = gameBoard[winCombo[2]];

        if (a != null && a === b && a === c) {
            setTimeout(() => {
            alert("You Win!!!");
            }, 100)
            
            
        }
        
        
    }
    const draw = gameBoard.every((block) => block != null);
        if (draw) {
            setTimeout(() => {
                alert("Draw");
                }, 100)
        }
}


//create a draw function

// lastly make the reset button erase the board and start over
const startNewGame = () => {
    turn = playerX;
    gameBoard.fill(null);
    blocks.forEach((block) => (block.innerText = ""));
    console.log("Game Reset")
}

newGame.addEventListener("click", startNewGame)


