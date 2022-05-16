const board = document.getElementById("board");
let move = 0;
let result = "";
const contentWrapper = document.getElementById("content");
const modalResult = document.getElementById("result-wrapper");

const restart = document.getElementById("restart");

board.addEventListener('click', e => {
    if(e.target.className = "tile") {
        move % 2 === 0 ? e.target.innerHTML ="X" : e.target.innerHTML = "0";
        move++;
        check();
        
    }
})
function check() {
    const tiles = document.getElementsByClassName("tile");
    /*const tie = [
        [0, 4, 7],
        [2, 4, 7],
        [1, 3, 6],
        [1, 5, 8],
        [0, 1, 5, 6],
        [6, 8, 5],
        [2,3,4,7]*/
    
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
        prepareResult(result);
        
        
    } else if (
        tiles[win[i][0]].innerHTML == "0" && tiles[win[i][1]].innerHTML == "0" && tiles[win[i][2]].innerHTML == "0"
    ) {
    
        result = "0";
        prepareResult(result);
        
    }
}
/*const tie = [
[1, 6, 0, 1, 2],
[6, 3, 8, 4, 5],
[8, 6, 3,  7, 8],
[4, 0, 3, 4, 6],
[6, 3, 1, 4, 7],
[0, 2,  2, 5, 8],
[5, 8, 0, 4, 8],
[6, 4, 2, 4, 6]
];
for( i = 0; i < win.length; i++) {
    if( 
        tiles[win[i][0]].innerHTML == "X" && tiles[win[i][1]].innerHTML == "X" && tiles[win[i][2]].innerHTML !== "X"
    ) {
        result  = "Tie";
        prepareResult(result);
        
    } else if (
        tiles[win[i][0]].innerHTML == "0" && tiles[win[i][1]].innerHTML == "0" && tiles[win[i][2]].innerHTML !== "0"
    ) {
        result = "Tie";
        prepareResult(result);
    }
}*/


   /* if (tiles[win[i][0]].innerHTML !== "0" && tiles[win[i][1]].innerHTML !== "0" && tiles[win[i][2]].innerHTML !== "0" &&  tiles[win[i][0]].innerHTML !== "X" && tiles[win[i][1]].innerHTML !== "X" && tiles[win[i][2]].innerHTML !== "X") {
        result = "Tie";
        prepareResult(result);
    }*/
        
    }
    





const prepareResult = winner => {
    contentWrapper.innerHTML = `Win ${winner} !`;
    modalResult.style.display = 'block';

    }

    document.querySelector("#restart").addEventListener('click', function(){
        window.location.reload();
        
    });
    
    

/*const closeModal = () => {
    modalResult.style.display = none;
    location.reload()
}*/






