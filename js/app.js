const result = document.querySelector("#result")
const restartButton = document.querySelector("#restartButton")
const boxes = document.querySelectorAll(".box")

const board = () => {
  //Use forEach can call another function
  boxes.forEach((box, i) => {
    let boardBorder = ''
    if (i < 3) {
      boardBorder += 'border-bottom: 3px solid black;'
    }
    if (i % 3 === 0) {
      boardBorder += 'border-right: 3px solid black;'
    }
    if (i > 5) {
      boardBorder += 'border-top: 3px solid black;'
    }
    if ((i === 2) || (i === 5) || (i === 8)) {
      boardBorder += 'border-left: 3px solid black;'
    }
    //Now set the border for the game and click event
    box.style = boardBorder
    box.addEventListener("click", boxClicked)
  })
}

const spaces = []
const tick_o = 'O'
const tick_x = 'X'
let currentPlayer = tick_o;
const boxClicked = (e) => {
  let boxId = e.target.id
  if (!spaces[boxId] && !result.innerText) {
    spaces[boxId] = currentPlayer
    e.target.innerText = currentPlayer

    if (playerWin()) {
      result.innerText = `Player with ${currentPlayer} won. Press Restart for new game.`
    }

    if (boardFilled()) {
      result.innerText = `No win or lose. Press Restart for new game.`
    }

    if (currentPlayer == tick_o) {
      currentPlayer = tick_x
    } else {currentPlayer = tick_o}
  }
}

const playerWin = () => {
  if (
    ((spaces[0] === currentPlayer) && (spaces[1] === currentPlayer) && (spaces[2] === currentPlayer))
    || ((spaces[0] === currentPlayer) && (spaces[4] === currentPlayer) && (spaces[8] === currentPlayer))
    || ((spaces[0] === currentPlayer) && (spaces[3] === currentPlayer) && (spaces[6] === currentPlayer))
    ) {
      return true;
    }
  if (
    ((spaces[4] === currentPlayer) && (spaces[1] === currentPlayer) && (spaces[7] === currentPlayer))
    || ((spaces[4] === currentPlayer) && (spaces[3] === currentPlayer) && (spaces[5] === currentPlayer))
    || ((spaces[4] === currentPlayer) && (spaces[2] === currentPlayer) && (spaces[6] === currentPlayer))
    || ((spaces[4] === currentPlayer) && (spaces[0] === currentPlayer) && (spaces[8] === currentPlayer))
    ) {
      return true;
    }
 if (
    ((spaces[8] === currentPlayer) && (spaces[2] === currentPlayer) && (spaces[5] === currentPlayer))
    || ((spaces[8] === currentPlayer) && (spaces[6] === currentPlayer) && (spaces[7] === currentPlayer))
    ) {
      return true;
    }
  
}

const boardFilled = () => {
  let count = 0;
  spaces.forEach((space, i) => {
    if (spaces[i] !== null) {count++}
  })
  if (count === 9) {
    return true
  }
}

//restart function: (1)delete result text, delete boxes text, i.e. x&o, delete spaces, set to null
const restart = () => {
  result.innerText = ''
  boxes.forEach((box) => {
    box.innerText = '';
  })
  spaces.forEach((space, i) => {
    spaces[i] = null;
  })
}

restartButton.addEventListener("click", restart)
board()