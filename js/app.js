console.log("hello");
// list of my variables
const blocks = document.querySelectorAll(".block");
const playerX = 'X';
const player0 = '0';
const newGame = document.getElementById("new-game-btn");

console.log(blocks)
const gameBoard = Array(blocks.length);

//create a function to determine which turn it is and allow that turn to click a square 
//if square is already marked then return 
let turn = playerX

function markBoard(event){
    
    let block = event.target;
    
    if(block.innerText != ""){
        return;
    }
    else if (turn === playerX) {
        block.innerText = playerX;
        turn = player0;
    }
    else {
        block.innerText = player0;
        turn = playerX;
    }
}

blocks.forEach((event) => {
    event.addEventListener("click", markBoard)
});

//create an event listener for each square


//create list of all winning combinations
//have a function to check for a winning combo on the board after each turn

//create a draw function

// lastly make the reset button erase the board and start over