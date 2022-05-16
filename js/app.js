const board = document.getElementById("board");
let move = 0;
let result = "";
const contentWrapper = document.getElementById("content");
const modalResult = document.getElementById("result-wrapper");
const restart = document.getElementById("restart");

function changeContent(content) {
    contentWrapper.innerHTML = content;
    modalResult.style.display = 'block';
}

board.addEventListener('click', e => {
    if(e.target.className = "tile") {
        let nextPlayer = move % 2 === 0 ? "0" : "X";
        let currentPlayer = move % 2 === 0 ? "X" : "0";
        e.target.innerHTML = currentPlayer;
        move++;
        changeContent(`player ${nextPlayer}'s turn`);
        check();
        if (move === 9 && result === "") {
            changeContent("Tie");
        }
        
    }
})


function check() {
    const tiles = document.getElementsByClassName("tile");
    
    const win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for( i = 0; i < win.length; i++) {
        if( 
            tiles[win[i][0]].innerHTML == "X" && tiles[win[i][1]].innerHTML == "X" && tiles[win[i][2]].innerHTML == "X"
        ) {
            
            result  = "X";
            changeContent(`Win ${result} !`)
            
        } else if (
            tiles[win[i][0]].innerHTML == "0" && tiles[win[i][1]].innerHTML == "0" && tiles[win[i][2]].innerHTML == "0"
        ) {
        
            result = "0";
            changeContent(`Win ${result} !`)        
        }
    }
}

document.querySelector("#restart").addEventListener('click', function(){

