let playCount = 0
let xWinsCount = 0
let oWinsCount = 0
let xWinsGameOver = false
let yWinsGameOver = false

//assign variables to HTML button inputs
const btnOne = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')

const rulesPopup = document.getElementById('rulesPopup')
const playLocalBtn = document.getElementById('playLocal')
const playComputerBtn = document.getElementById('playComputer')
const endGameText = document.getElementById('endGameText')
const endGameText2 = document.getElementById('endGameText2')
const smallGameBoardPic = document.getElementsByClassName('smallGameBoardPic')

const buttonsArr = [one, two, three, four, five, six, seven, eight, nine]

//this array is used to help computer keep player from winning
const gameWinningCombos = [
    [one, two, three],
    [four, five, six],
    [seven, eight, nine],
    [one, four, seven],
    [two, five, eight],
    [three, six, nine],
    [one, five, nine],
    [three, five, seven]
]
let xCounter = 0;
let oCounter = 0;



const displayWins = () => {
    let xScoreDisplay = document.getElementById('xScore')
    xScoreDisplay.innerText = `Number of games X has won: ${xWinsCount}`
    let oScoreDisplay = document.getElementById('oScore')
    oScoreDisplay.innerText = `Number of games O has won: ${oWinsCount}`
}
displayWins()


const showTurn = () => {
    const playerTurn = document.getElementById('playerTurn')
    playerTurn.innerText = `It is ${playCount % 2 === 0 ? `X's` : `O's`} turn`
}
showTurn()


const enableButtons = () => {
    for (let i = 0; i < buttonsArr.length; i++) {
        buttonsArr[i].disabled = false;
        if (!buttonsArr[i].value) {
            buttonsArr[i].classList.add('hover')
        }
    }
}

const disableBtns = () => {
    for (let i = 0; i < buttonsArr.length; i++) {
        buttonsArr[i].disabled = true;
        buttonsArr[i].classList.remove('hover')
    }
}

//This assigns button event listeners to play locally
//and removes the other event listeners so there aren't both
const playLocally = () => {
    enableButtons()
    for (let i = 0; i < buttonsArr.length; i++) {
        buttonsArr[i].addEventListener("click", changeBtn)
        buttonsArr[i].removeEventListener('click', changeBtnWithComputer)
    }
}
// This assigns event listeners to grid buttons to play with computer
//and removes the other event listeners so there aren't both
const playWithComputer = () => {
    enableButtons()
    for (let i = 0; i < buttonsArr.length; i++) {
        buttonsArr[i].removeEventListener('click', changeBtn)
        buttonsArr[i].addEventListener("click", changeBtnWithComputer)
    }
}

// *** The following function is to play locally

function changeBtn() {
    currentBtn = event.target

    if (currentBtn.value) {
        currentBtn.value == null
    } else
        if (playCount % 2 === 0) {
            currentBtn.value = "X"
            playCount++
        } else {
            currentBtn.value = "O"
            currentBtn.classList.add('computer')
            playCount++
        }
    currentBtn.classList.add('active')
    currentBtn.classList.remove('hover')

    showTurn()
    playGame()

    if (xWinsGameOver) {
        player1Wins()
    }
    if (yWinsGameOver) {
        player2Wins()
    }
}


//*** The following two functions are used to play against computer

const computerChooses = () => {
    computerChoice = Math.floor(Math.random() * buttonsArr.length)
    computerBtn = buttonsArr[computerChoice]
    computerChoosesWisely()
    if (computerBtn.value) {
        //this loops through until computer chooses another option. I can call computerChoosesWisely() here over and over to make the computer smarter
        //not calling choosesWisely makes the computer beatable
        while (computerBtn.value) {
            // computerBtn.value == null
            // computerChoice = Math.floor(Math.random() * buttonsArr.length)
            // computerBtn = buttonsArr[computerChoice]
            computerChoosesWisely()
            continue
        }
    }
    computerBtn.value = "O"
    computerBtn.classList.add('computer')

    playCount++;
    playGame()
    showTurn()

    yWinsGameOver ? player2Wins() : setTimeout(enableButtons, 500)
}

function changeBtnWithComputer() {
    //calling this prevents choosing other buttons before setTimeout calls computer choice. buttons reenabled when computer chooses
    disableBtns()
    currentBtn = event.target

    if (currentBtn.value) {
        enableButtons()
        return null
    }
    currentBtn.value = 'X'

    currentBtn.classList.add('active')
    playCount++
    showTurn()
    playGame()

    // made this condition to make sure computer doesn't still choose after x wins
    //also make sure playCount isn't over 7, otherwise computer still chooses even after board is full
    !xWinsGameOver && playCount <= 7 ? setTimeout(computerChooses, 500) : (xWinsGameOver ? player1Wins() : null)
}



//this will be to change active on and off
const changeClasses = () => {
    endGameText.classList.add('active')
    rulesPopup.classList.add('active')
}


const player1Wins = () => {
    xWinsCount++
    endGameText.innerText = `X WINS`
    playerTurn.innerText = 'X WINS!!'
    // endGameText2.innerText = `Number of games X has won: ${xWinsCount}
    // Number of games O has won: ${oWinsCount}`
    displayWins()
    disableBtns()
    XRain = setInterval(makeRainingXs, 100)
    setTimeout(() => clearInterval(XRain), 4000)
    setTimeout(changeClasses, 4000)
}


const player2Wins = () => {
    oWinsCount++
    endGameText.innerText = `O WINS`
    playerTurn.innerText = 'O WINS!!'
    // endGameText2.innerText = `Number of games X has won: ${xWinsCount}
    // Number of games O has won: ${oWinsCount}`
    displayWins()
    disableBtns()
    ORain = setInterval(makeRainingOs, 100)
    setTimeout(() => clearInterval(ORain), 4000)
    setTimeout(changeClasses, 4000)
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
        return xWinsGameOver = true

    if (((one.value == "O") && (two.value == "O") && (three.value == "O")) ||
        ((four.value == "O") && (five.value == "O") && (six.value == "O")) ||
        ((seven.value == "O") && (eight.value == "O") && (nine.value == "O")) ||
        ((one.value == "O") && (four.value == "O") && (seven.value == "O")) ||
        ((two.value == "O") && (five.value == "O") && (eight.value == "O")) ||
        ((three.value == "O") && (six.value == "O") && (nine.value == "O")) ||
        ((one.value == "O") && (five.value == "O") && (nine.value == "O")) ||
        ((three.value == "O") && (five.value == "O") && (seven.value == "O"))) {
        disableBtns()
        return yWinsGameOver = true
    }

    if (playCount >= 9) {
        endGameText.innerText = `DRAW`
        setTimeout(changeClasses, 1000)
        disableBtns()
    }
}


//this resets the playing board and resets playcount. This is called when pushing button on main
function resetGame() {
    for (let i = 0; i < buttonsArr.length; i++) {
        buttonsArr[i].value = ""
        buttonsArr[i].className = ''
        buttonsArr[i].disabled = false
        xWinsGameOver = false
        yWinsGameOver = false
        rulesPopup.classList.remove('active')
        endGameText.classList.remove('active')
        //display:none for any fallingXs that havent reached bottom yet
        fallingX = document.getElementsByClassName('fallingX')
        for (let i = 0; i < fallingX.length; i++) {
            fallingX[i].classList.add('active')
        }
        playCount = 0;
        showTurn()
    }
}


playLocalBtn.addEventListener('click', () => {
    resetGame()
    playLocally()
})
playComputerBtn.addEventListener('click', () => {
    resetGame()
    playWithComputer()
})






const colorsArr = ['#d5ff61', 'white', '#e6b800']

function makeRainingXs() {
    const fallingX = document.createElement('div')
    fallingX.classList.add('fallingX')
    fallingX.style.left = Math.random() * 100 + 'vw'
    fallingX.style.zIndex = 1
    fallingX.style.animationDuration = Math.random() * 5 + 2 + 's'
    fallingX.style.fontSize = Math.random() * 95 + 35 + 'px'
    fallingX.style.color = colorsArr[Math.floor(Math.random() * colorsArr.length)]
    fallingX.innerText = 'X'
    document.body.appendChild(fallingX)
}
let XRain;


function makeRainingOs() {
    const fallingO = document.createElement('div')
    fallingO.classList.add('fallingX')
    fallingO.style.left = Math.random() * 100 + 'vw'
    fallingO.style.zIndex = 1
    fallingO.style.animationDuration = Math.random() * 5 + 2 + 's'
    fallingO.style.fontSize = Math.random() * 95 + 35 + 'px'
    fallingO.style.color = colorsArr[Math.floor(Math.random() * colorsArr.length)]
    fallingO.innerText = 'O'
    document.body.appendChild(fallingO)
}
let ORain;



// //this function is called when playing computer. it makes the computer try to keep player from winning
// function computerChoosesWisely() {
//     //loop through whole array
//     for (let i = 0; i < gameWinningCombos.length; i++) {
//         //loop through each item of smaller arrays
//         for (let j = 0; j < gameWinningCombos[i].length; j++) {
//             if (gameWinningCombos[i][j].value === 'O') {
//                 oCounter++
//             } else if (gameWinningCombos[i][j].value === 'X') {
//                 xCounter++
//             }
//         }
//         //if 2/3 of smaller array are "Os" (I put this first so that the computer will choose to win before choosing to block X)
//         if (oCounter === 2) {
//             for (let k = 0; k < gameWinningCombos[i].length; k++) {
//                 if (gameWinningCombos[i][k].value !== 'O') {
//                     computerBtn = gameWinningCombos[i][k]
//                 }
//             }
//             return computerBtn
//         } else if (xCounter === 2) {
//             //re-loop through smaller array
//             for (let k = 0; k < gameWinningCombos[i].length; k++) {
//                 if (gameWinningCombos[i][k].value !== 'X') {
//                     computerBtn = gameWinningCombos[i][k]
//                 }
//             }
//             return computerBtn
//         }
//         xCounter = 0
//         oCounter = 0
//     }
// }


//this function is called when playing computer. it makes the computer try to keep player from winning
function computerChoosesWisely() {
    //loop through whole array
    for (let i = 0; i < gameWinningCombos.length; i++) {
        //loop through each item of smaller arrays
        for (let j = 0; j < gameWinningCombos[i].length; j++) {
            if (gameWinningCombos[i][j].value === 'O') {
                oCounter++
            } else if (gameWinningCombos[i][j].value === 'X') {
                xCounter++
            }
        }
        //if 2/3 of smaller array are "Os" (I put this first so that the computer will choose to win before choosing to block X)
        if (oCounter === 2) {
            for (let k = 0; k < gameWinningCombos[i].length; k++) {
                if (!gameWinningCombos[i][k].value){
                    return computerBtn = gameWinningCombos[i][k]
                } else continue
            }
        } else if (xCounter === 2) {
            //re-loop through smaller array
            for (let k = 0; k < gameWinningCombos[i].length; k++) {
                if (!gameWinningCombos[i][k].value){
                    return computerBtn = gameWinningCombos[i][k]
                } else continue
            }
        }
        xCounter = 0
        oCounter = 0
    }
    computerChoice = Math.floor(Math.random() * buttonsArr.length)
    computerBtn = buttonsArr[computerChoice]
}

// ******** TO-DO LIST **********


//have main buttons shimmer
//hover effects


//media query stuff


// change the top text when someone wins to a picture of an x or o or draw

// animations -- flip grid buttons    do some cool hover effects