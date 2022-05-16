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

