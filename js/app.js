let playerOneVal = []
let playerTwoVal = []

const winsArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let winConditon = false

let currentTurn = 'player1';

let state = false;


const gridClass = document.querySelectorAll('.grid-class');
// const btn = document.querySelector('.btn');
const boxes = document.querySelectorAll('#box')

const currPlay = document.querySelector('#player-turn');

let moves = 0;

let winner;


let checkForWinner = (playerArray) => {
    let isWinner = false
    if(playerArray.length < 3) return false;
    for(let i = 0; i < winsArr.length; i++){
        console.log(winsArr[i], "WIN CONDITION")
        //.every checks if playerVal is in winsArr// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
         isWinner =  winsArr[i].every(playerVal => {
            //console.log(winsArr[i].includes(playerVal), "FINAL")
            return playerArray.includes(playerVal)
        })
        if(isWinner) break;
    }
    return isWinner;
}


//console.log(box);

// let endGame = () => {

//     for(let i = 0; i < 9; i++) {
//             box[i].style.pointerEvents = 'none';
//         }
// }

// function checkPlayerWin() {
//     const isPlayerOneWinner = checkForWinner(playerOneVal);
//     const isPlayerTwoWinner = checkForWinner(playerTwoVal);

//     if(isPlayerOneWinner){
//         winner = isPlayerOneWinner;
//         currPlay.textContent = "Player One Wins"
//         endGame();
//     } 
//     else if (isPlayerTwoWinner){
//         winner = isPlayerOneWinner;
//         currPlay.textContent = "Player Two Wins"
//         endGame();
//     }
//     //state = true
// }



function playGame() {
    //if(state) {
    for(let i = 0; i < 9; i++){
        gridClass[i].addEventListener('click', (event) => {
            if(currentTurn === 'player1'){
                gridClass[i].textContent = "X"
                playerOneVal.push(i);
                gridClass[i].style.pointerEvents = 'none';
                moves++;
                currentTurn = 'player2';
                currPlay.textContent = "Player Two's Turn"
                if(moves === 9) {
                    currPlay.textContent = "Cat's Game"
                }
            } else if(currentTurn === 'player2'){
                gridClass[i].textContent = "O";
                playerTwoVal.push(i);
                gridClass[i].style.pointerEvents = 'none';
                moves++;
                currentTurn = 'player1'
                currPlay.textContent = "Player One's Turn"
                if(moves === 9) {
                    currPlay.textContent = "Cat's Game"
                }
            }
                checkPlayerWin();
                endGame();

        }) 
    }
//}
}

function checkPlayerWin() {
    const isPlayerOneWinner = checkForWinner(playerOneVal);
    const isPlayerTwoWinner = checkForWinner(playerTwoVal);

    if(isPlayerOneWinner){
        currPlay.textContent = "Player One Wins"
        state = true;
    } 
    else if (isPlayerTwoWinner){
        currPlay.textContent = "Player Two Wins"
        state = true
    }
}


let endGame = () => {

    for(let i = 0; i < 9; i++) {
        if(state === true)
            gridClass[i].style.pointerEvents = 'none';
        }
}



// let clicked = false;

// clear interval
// stop interval


// function reset() {
//     playerOneVal.splice(0, playerOneVal.length);
//     playerTwoVal.splice(0, playerTwoVal.length);
//     currentTurn = 'player1';
//     for(let i = 0; i < 9; i++){
//         btn.addEventListener("click", (event) => {
//             clicked = true;
//             gridClass[i].innerHTML = " ";
//             gridClass[i].style.pointerEvents = 'auto';
//             playGame();
//             currPlay.innerHTML = "Player One Turn";
//         });
//     }
// }

playGame()
// reset();


