let playCount = 0;
let xWinsCount = 0;
let oWinsCount = 0;

const displayWins = () => {
    let xScoreDisplay = document.getElementById('xScore')
        xScoreDisplay.innerText = `Number of games X has won: ${xWinsCount}`
    let oScoreDisplay = document.getElementById('oScore')
        oScoreDisplay.innerText = `Number of games O has won: ${oWinsCount}`
}
displayWins()

const showTurn = () => { 
    const playerTurn = document.getElementById('playerTurn')
    playerTurn.innerText =  `It is ${playCount % 2 === 0 ? `X's` : `O's`} turn`
}
showTurn();

//assign variables to HTML button inputs
const btnOne = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const rulesPopup = document.getElementById('rulesPopup')
const playLocalBtn = document.getElementById('playLocal')
const endGameText = document.getElementById('endGameText')
const endGameText2 = document.getElementById('endGameText2')

const buttonsArr = [one, two, three, four, five, six, seven, eight, nine];

for (let i = 0; i < buttonsArr.length; i++) {
    buttonsArr[i].addEventListener("click", changeBtn);
}

function changeBtn() {
    currentBtn = event.target

    if (currentBtn.value){
        currentBtn.value == null;
    } else 
    if (playCount % 2 === 0) {
        currentBtn.value = "X";
        playCount++;
    } else {
        currentBtn.value = "O";
        playCount++;
    }
    currentBtn.classList.add('active')
    playGame();
    showTurn();
}



const player1Wins = () => {
    xWinsCount++
    rulesPopup.classList.add('active')
    endGameText.innerText = `X WINS!!`
    endGameText.style.color = '#d5ff61'
    displayWins()
}

const player2Wins = () => {
    oWinsCount++
    rulesPopup.classList.add('active')
    endGameText.innerText = `O WINS!!`
    endGameText.style.color = '#d5ff61'
    displayWins()
}

function resetGame() {
    for (let i = 0; i < buttonsArr.length; i++) {
        buttonsArr[i].value = "";
        buttonsArr[i].classList.remove('active')
        rulesPopup.classList.remove('active')
        playCount = 0;
        showTurn()
    }
}

function playGame() {
    if (((one.value == "X") && (two.value == "X") && (three.value == "X")) ||
        ((four.value == "X") && (five.value == "X") && (six.value == "X")) ||
        ((seven.value == "X") && (eight.value == "X") && (nine.value == "X")) ||
        ((one.value == "X") && (four.value == "X") && (seven.value == "X")) ||
        ((two.value == "X") && (five.value == "X") && (eight.value == "X")) ||
        ((three.value == "X") && (six.value == "X") && (nine.value == "X")) ||
        ((one.value == "X") && (five.value == "X") && (nine.value == "X")) ||
        ((three.value == "X") && (five.value == "X") && (seven.value == "X"))) 
        player1Wins()

    if (((one.value == "O") && (two.value == "O") && (three.value == "O")) ||
        ((four.value == "O") && (five.value == "O") && (six.value == "O")) ||
        ((seven.value == "O") && (eight.value == "O") && (nine.value == "O")) ||
        ((one.value == "O") && (four.value == "O") && (seven.value == "O")) ||
        ((two.value == "O") && (five.value == "O") && (eight.value == "O")) ||
        ((three.value == "O") && (six.value == "O") && (nine.value == "O")) ||
        ((one.value == "O") && (five.value == "O") && (nine.value == "O")) ||
        ((three.value == "O") && (five.value == "O") && (seven.value == "O"))) 
        player2Wins()
    
    if (playCount == 9) {
        rulesPopup.classList.add('active')
        endGameText.innerText = `DRAW`
        endGameText.style.color = '#d5ff61'
    }
}




playLocalBtn.addEventListener('click', resetGame)







// ****** PLAY WITH THE COMPUTER MODE ******


//     function changeBtn() {
//         currentBtn = event.target
    
//         if (currentBtn.value){
//             currentBtn.value == null;
//         } else 
//         if (playCount % 2 === 0) {
//             currentBtn.value = "X";
//             playCount++;
//         } else {
//             ComputerChooses()
//             playCount++
//         }
//         playGame();
//         showTurn();
//     }

//         function ComputerChooses(){
//             let computerChoice = Math.floor(Math.random() * buttonsArr.length)
//             while (playCount % 2 === 1){
//                 currentBtn = buttonsArr[computerChoice]
//                 if
//             }
//         }
// }
// playWithComputer()




// ******** TO-DO LIST **********

//change top div to round image. tic tac toe board to start

//media query stuff


//settimeout() to add and remove class. i want to see the board once the game is complete before the reset screen comes on. 

// change the top text when someone wins to a picture of an x or o or draw

// animations -- flip grid buttons    do some cool hover effects