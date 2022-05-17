const Status = document.querySelector('.alert'),
	gameState = ['', '', '', '', '', '', '', '', ''],
	winingCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	],
	winMessage = () => ` ${currentPlayer} won!`,
	tieMessage = () => `Its a tie!`,
	currentPlayerTurn = () => `${currentPlayer}'s turn...`

let gameActive = true,
	currentPlayer = 'X'

function main() {
	handleStatusDisplay(currentPlayerTurn())
	listeners()
}

function listeners() {
	document.querySelector('.board').addEventListener('click', handleCellClick)
	document
		.querySelector('.playAgain')
		.addEventListener('click', handleRestartGame)
}

function handleStatusDisplay(message) {
	Status.innerHTML = message
}

function handleRestartGame() {
	gameActive = true
	currentPlayer = 'X'
	restartGameState()
	handleStatusDisplay(currentPlayerTurn())
	document.querySelectorAll('.box').forEach((cell) => (cell.innerHTML = ''))
}

function handleCellClick(clickedCellEvent /** Type Event **/) {
	const clickedCell = clickedCellEvent.target
	if (clickedCell.classList.contains('box')) {
		const clickedCellIndex = Array.from(
			clickedCell.parentNode.children
		).indexOf(clickedCell)
		if (gameState[clickedCellIndex] !== '' || !gameActive) {
			return false
		}
		handleCellPlayed(clickedCell, clickedCellIndex)
		handleResultValidation()
	}
}

function handleCellPlayed(clickedCell /** object HTML **/, clickedCellIndex) {
	gameState[clickedCellIndex] = currentPlayer // Adds in the corresponding position the value "X" or "O" in the current game
	clickedCell.innerHTML = currentPlayer // Adds int to the HTML the player value
}

function handleResultValidation() {
	let roundWon = false
	for (let i = 0; i < winingCombos.length; i++) {
		// Iterate each of the possible winning combinations
		const winCondition = winingCombos[i] // Stores the combination exmple:[0, 1, 2]
		let position1 = gameState[winCondition[0]],
			position2 = gameState[winCondition[1]],
			position3 = gameState[winCondition[2]] //Stores the value of the current game state based on winCondition positions.
		if (position1 === '' || position2 === '' || position3 === '') {
			continue // If there is an empty block then no one has won
		}
		if (position1 === position2 && position2 === position3) {
			roundWon = true //If all positions match then that player wins
			break
		}
	}
	if (roundWon) {
		handleStatusDisplay(winMessage())
		gameActive = false
		return
	}
	let roundDraw = !gameState.includes('') //If all boxes are full and the previous statement was false then the game ends in a tie
	if (roundDraw) {
		handleStatusDisplay(tieMessage())
		gameActive = false
		return
	}
	handlePlayerChange()
}

function handlePlayerChange() {
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
	handleStatusDisplay(currentPlayerTurn())
}

function restartGameState() {
	let i = gameState.length
	while (i--) {
		gameState[i] = ''
	}
}

main()