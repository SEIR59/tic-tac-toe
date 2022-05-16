console.log('Hello frontend');
console.log('Hello frontend');
console.log("Good morning Tanya")
console.log('great tutoring session')

const PLAYERX ='x'
const PLAYERO = 'o'

const WINNINGPLAYS = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
]

const boxElements = document.querySelectorAll('[data-cell]')
const boardElement = document.getElementById('gameBoard')
const winNotificationElement = document.getElementById('winnerNotification')
const restartButton = document.getElementById('restart')
const winNotificationMessage = document.getElementById('winScript')
let isPlayerO_Turn = false

startPlay()

restartButton.addEventListener('click', startPlay)

function startPlay() {
    isPlayerO_Turn = false
    boxElements.forEach(square => {
        square.classList.remove(PLAYERX)
        square.classList.remove(PLAYERO)
        square.removeEventListener('click', handleSquareClick)
        square.removeEventListener('click', handleSquareClick, {once: true})
    })
    setgameBoardHoverClass()
    winNotificationElement.classList.remove(`show`)
}

function handleSquareClick(e) {
    const square = e.target
    const currentClass = isPlayerO_Turn ? PLAYERO : PLAYERX
    placeMark(square, currentclass)
    if (checkWin(currentClass)) {
        gameEnd(false)
    } else if (tieGame()) {
        gameEnd(true)
    } else {
        changeTurn()
        setgameBoardHoverClass()
    }
}

function gameEnd(draw) {
    if (draw) {
        winNotificationMessage.innerText = "Tie Game!"
    } else {
        winNotificationMessage.innerText = `Player w/ ${isPlayerO_Turn ? "O's" : "X's"} won!`
    }
    winNotificationMessage.classList.add(`show`)
}

function tieGame() {
    return [...boxElements].every(square => {
        return square.classList.contains(PLAYERX) || square.classList.contains(PLAYERO)
    })
}

function placeMark(square, currentClass) {
    square.classList.add(currentClass)
}

function changeTurn() {
    isPlayerO_Turn = !isPlayerO_Turn
}

function setgameBoardHoverClass() {
    boardElement.classList.remove(PLAYERX)
    boardElement.classList.remove(PLAYERO)
    if (isPlayerO_Turn) {
        boardElement.classList.add(PLAYERO)
    } else {
        boardElement.classList.add(PLAYERX)
    }
}

function checkWin(currentClass) {
    return WINNINGPLAYS.some(combination => {
        return combination.every(index => {
            return boxElements[index].classList.contains(currentClass)
        })
    })
}

//followed along this link with priavte tutor... this is as far as we got still working
// https://www.codebrainer.com/blog/tic-tac-toe-javascript-game