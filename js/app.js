let playCount = 0
let xWinsCount = 0
let oWinsCount = 0
let xWinsGameOver = false
let yWinsGameOver = false

//assign variables to HTML button inputs
const one = document.getElementById('one')
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

//this array is used to help computer play 'intelligently'
const gameWinningCombos = [
    //horizontals
    [one, two, three],
    [four, five, six],
    [seven, eight, nine],
    //verticals
    [one, four, seven],
    [two, five, eight],
    [three, six, nine],
    //diagonals
    [one, five, nine],
    [three, five, seven]
]



const displayWins = () => {
    let xScoreDisplay = document.getElementById('xScoreNumber')
        xScoreDisplay.innerText = `${xWinsCount}`
    let oScoreDisplay = document.getElementById('oScoreNumber')
        oScoreDisplay.innerText = `${oWinsCount}`
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
    computerChoosesWisely()
    if (computerBtn.value) {
        //this loops through until computer chooses another option that hasn't been chosen yet.
        while (computerBtn.value) {
            computerChoosesWisely()
            continue
        }
    }
    computerBtn.value = "O"
    computerBtn.classList.add('computer')

    playCount++;
    playGame()
    showTurn()

    yWinsGameOver ? player2Wins() : setTimeout(enableButtons, 700)
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
    !xWinsGameOver && playCount <= 7 ? setTimeout(computerChooses, 600) : (xWinsGameOver ? player1Wins() : null)
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


//the following functions decide who wins
let xCounter = 0;
let oCounter = 0;

function playGame() {
    xCounter = 0;
    oCounter = 0;
    for (let i = 0; i <= gameWinningCombos.length - 1; i++) {
        if (gameWinningCombos[i][0].value === 'X' &&
            gameWinningCombos[i][1].value === 'X' &&
            gameWinningCombos[i][2].value === 'X') {
            for (let j = 0; j <= gameWinningCombos[i].length - 1; j++) {
                gameWinningCombos[i][j].className = 'winner'
            }
            return xWinsGameOver = true
        } else
            if (gameWinningCombos[i][0].value === 'O' &&
                gameWinningCombos[i][1].value === 'O' &&
                gameWinningCombos[i][2].value === 'O') {
                for (let j = 0; j <= gameWinningCombos[i].length - 1; j++) {
                    gameWinningCombos[i][j].className = 'winner'
                }
                return yWinsGameOver = true
            }
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


//this function is called when playing computer. it makes the computer try to keep player from winning
function computerChoosesWisely() {
    //loop through whole array
    for (let i = 0; i <= gameWinningCombos.length - 1; i++) {
        //loop through each element of winning combos
        for (let j = 0; j <= gameWinningCombos[i].length - 1; j++) {
            if (gameWinningCombos[i][j].value === 'O') {
                oCounter++
            }
        }
        //if 2/3 of smaller array are "Os", loop through array and make 3rd element an 'O' if it's not an 'X':
        if (oCounter === 2) {
            for (let k = 0; k <= gameWinningCombos[i].length - 1; k++) {
                if (!gameWinningCombos[i][k].value) {
                    //resetting the counter here keeps it from getting over 2 the next time the function is called 
                    //due to the return below breaking out of the function
                    return computerBtn = gameWinningCombos[i][k]
                }
            }
        }
        oCounter = 0
    }
    //if we get to this loop then the computer couldn't win, now it looks to play defense with identical loops for X
    for (let i = 0; i <= gameWinningCombos.length - 1; i++) {
        for (let j = 0; j <= gameWinningCombos[i].length - 1; j++) {
            if (gameWinningCombos[i][j].value === 'X') {
                xCounter++
            }
        }
        if (xCounter === 2) {
            //re-loop through smaller array
            for (let k = 0; k <= gameWinningCombos[i].length - 1; k++) {
                if (!gameWinningCombos[i][k].value) {
                    //resetting the counter here keeps it from getting over 2 the next time the function is called 
                    //due to the return below breaking out of the function
                    return computerBtn = gameWinningCombos[i][k]
                }
            }
        }
        xCounter = 0
    }
    //add this here to prevent endless While loop in event of (O-O-X) for example
    computerChoice = Math.floor(Math.random() * buttonsArr.length)
    return computerBtn = buttonsArr[computerChoice]
}



playLocalBtn.addEventListener('click', () => {
    resetGame()
    playLocally()
})
playComputerBtn.addEventListener('click', () => {
    resetGame()
    playWithComputer()
})


// ******************************************************************************************************
// the following two functions create the falling xs or os when game is over
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
//declaring this here lets me use it to setInterval in a higher up function
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




// ******** TO-DO LIST **********


//have main buttons shimmer
//hover effects


//media query stuff


// change the top text when someone wins to a picture of an x or o or draw

// animations -- flip grid buttons    do some cool hover effects