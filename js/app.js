const STATUS_DISPLAY = document.querySelector('.game-notification'),
  GAME_STATE = ["", "", "", "", "", "", "", "", ""],
  WINNINGS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ],
  WIN_MESSAGE = () => `The player ${currentPlayer} has won!`,
  DRAW_MESSAGE = () => `The game ended in a tie!`,
  CURRENT_PLAYER_TURN = () => `Player Turn ${currentPlayer}`
// ==================== VARIABLES ==================== //
let gameActive = true,
  currentPlayer = "O"
// ==================== FUNCTIONS ==================== //
function main() {
  handleStatusDisplay(CURRENT_PLAYER_TURN())
  listeners()
}
function listeners() {
  document.querySelector('.game-container').addEventListener('click', handleCellClick)
  document.querySelector('.game-restart').addEventListener('click', handleRestartGame)
}
function handleStatusDisplay(message) {
  STATUS_DISPLAY.innerHTML = message
}
function handleRestartGame() {
  gameActive = true
  currentPlayer = "X"
  restartGameState()
  handleStatusDisplay(CURRENT_PLAYER_TURN())
  document.querySelectorAll('.game-cell').forEach(cell => cell.innerHTML = "")
}
function handleCellClick(clickedCellEvent /** Type Event **/) {
  const clickedCell = clickedCellEvent.target
  if (clickedCell.classList.contains('game-cell')) {
    const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell)
    if (GAME_STATE[clickedCellIndex] !== '' || !gameActive) {
      return false
    }
    handleCellPlayed(clickedCell, clickedCellIndex)
    handleResultValidation()
  }
}
function handleCellPlayed(clickedCell /** object HTML **/, clickedCellIndex) {
  GAME_STATE[clickedCellIndex] = currentPlayer // Adds in the corresponding position the value "X" || "O" in the current game
  clickedCell.innerHTML = currentPlayer // Adds int to the HTML the player value
}
function handleResultValidation() {
  let roundWon = false
  for (let i = 0; i < WINNINGS.length; i++) { // Iterate each of the possible winning combinations
    const winCondition = WINNINGS[i] // Stores the combination exmple:[0, 1, 2]
    let position1 = GAME_STATE[winCondition[0]],
      position2 = GAME_STATE[winCondition[1]],
      position3 = GAME_STATE[winCondition[2]] // Stores the value of the current game state based on winCondition positionss.
    if (position1 === '' || position2 === '' || position3 === '') {
      continue; // If there is any empty value no one has won
    }
    if (position1 === position2 && position2 === position3) {
      roundWon = true // If all positions match then that player has won the game
      break
    }
  }
  if (roundWon) {
    handleStatusDisplay(WIN_MESSAGE())
    gameActive = false
    return
  }
  let roundDraw = !GAME_STATE.includes("") // If all cells have value and the previous statement was false the it is a tie
  if (roundDraw) {
    handleStatusDisplay(DRAW_MESSAGE())
    gameActive = false
    return
  }
  handlePlayerChange()
}
function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X"
  handleStatusDisplay(CURRENT_PLAYER_TURN())
}
function restartGameState() {
  let i = GAME_STATE.length
  while (i--) {
    GAME_STATE[i] = ''
  }
}
main()