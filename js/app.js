let playerOneVal = new Array()
let playerTwoVal = new Array();

const winsArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let winConditon = false

let currentTurn = 'player1';


const gridClass = document.querySelectorAll('.grid-class');
const btn = document.querySelector('.btn');

const currPlay = document.querySelector('#player-turn');


let checkForWinner = (playerArray) => {
    let isWinner = false
    if(playerArray.length < 3) return false;
    for(let i = 0; i < winsArr.length; i++){
        console.log(winsArr[i], "WIN CONDITION")
         isWinner =  winsArr[i].every(playerVal => {
            console.log(winsArr[i].includes(playerVal), "FINAL")
            return playerArray.includes(playerVal)
        })
        if(isWinner) break;
    }
    return isWinner;
}

let moves = 0;

function playGame() {

    for(let i = 0; i < 9; i++){
        gridClass[i].addEventListener('click', (event) => {
            if(currentTurn === 'player1'){
                gridClass[i].innerHTML = "X"
                playerOneVal.push(i);
                gridClass[i].style.pointerEvents = 'none';
                moves++;
                currentTurn = 'player2';
                currPlay.innerHTML = "Player Two's Turn"
                if(moves === 9) {
                    currPlay.innerHTML = "Cat's Game"
                }
            } else if(currentTurn === 'player2'){
                gridClass[i].innerHTML = "O";
                playerTwoVal.push(i);
                gridClass[i].style.pointerEvents = 'none';
                moves++;
                currentTurn = 'player1'
                currPlay.innerHTML = "Player One's Turn"
                if(moves === 9) {
                    currPlay.innerHTML = "Cat's Game"
                }
            }
            const isPlayerOneWinner = checkForWinner(playerOneVal);
            const isPlayerTwoWinner = checkForWinner(playerTwoVal);
            if(isPlayerOneWinner){
                currPlay.innerHTML = "Player One Wins"
            } 
            else if(isPlayerTwoWinner){
                currPlay.innerHTML = "Player Two Wins"
            }
        })  
    }

}


// let clicked = false;

// function reset() {
//     playerOneVal.splice(0, playerOneVal.length);
//     playerTwoVal.splice(0, playerTwoVal.length);
//     currentTurn = 'player1';
//     for(let i = 0; i < 9; i++){
//         btn.addEventListener("click", (event) => {
//             clicked = true;
//             gridClass[i].innerHTML = " ";
//             test[i].style.pointerEvents = 'auto';
//             playGame();
//             currPlay.innerHTML = "Player One Turn";
//         });
//     }
// }

playGame();
// reset();


