const gridBox1 = document.getElementById('grid-box1');
const gridBox2 = document.getElementById('grid-box2');
const gridBox3 = document.getElementById('grid-box3');
const gridBox4 = document.getElementById('grid-box4');
const gridBox5 = document.getElementById('grid-box5');
const gridBox6 = document.getElementById('grid-box6');
const gridBox7 = document.getElementById('grid-box7');
const gridBox8 = document.getElementById('grid-box8');
const gridBox9 = document.getElementById('grid-box9');

let playerOneVal = new Array()
let playerTwoVal = new Array();

const winsArr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let winConditon = false

let currentTurn = 'player1';


const test = document.querySelectorAll('.test');
const currPlay = document.querySelector('#player-turn');
console.log(currPlay);

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

for(let i = 0; i < 9; i++){
    test[i].addEventListener('click', (event) => {
        console.log(event);
        if(currentTurn === 'player1'){
            test[i].innerHTML = "X"
            playerOneVal.push(i);
            console.log(`Player one val is: ${playerOneVal}`);
            moves ++;
            currentTurn = 'player2';
            currPlay.innerHTML = "Player Two Turn"
            if(moves === 9) {
                currPlay.innerHTML = "Cat's Game"
            }
        } else if(currentTurn === 'player2'){
            test[i].innerHTML = "O";
            playerTwoVal.push(i);
            console.log(`Player two val is: ${playerTwoVal}`);
            moves++;
            currentTurn = 'player1'
            currPlay.innerHTML = "Player One Turn"
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

        // else {
        //     currPlay.innerHTML = "Cat's Game"
        // }

    })
    
    
}
