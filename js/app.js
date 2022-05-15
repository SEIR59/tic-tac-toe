const ticTacToeGame = new ticTacToeGame();
ticTacToeGame.start() ;
  
  function TicTacToeGame() {
  const board = new Board() ;
    const humanPlayer = new humanPlayer(board);
    const computerPlayer = new computerPlayer(board);
    let turn = 0;
    
    this.start = function() {
      const config = { childList: true };
      const observer = new MutationObserver(() => takeTurn())
      board.positions.forEach((el) => observer.observe(el, config)) 
      takeTurn();
    }
    
    function takeTurn() {
        if(board.checkForWinner()) {
            return;
        }
    
      if (turn % 2 === 0) {
        human.takeTurn();
      } else {
        computer.takeTurn();
      }
      turn++;
    }
  }

function Board() {
  this.positions = Array.from(document.querySelectorAll('.columns'));
  
  this.checkForWinner = function(){
      let winner = false;
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]

    ];

    const positions = this.positions;

winningCombinations.forEach((winningCombo) => {
const pos0innerText = positions[winningCombo[0]].innerText;
const pos1innerText = positions[winningCombo[1]].innerText;
const pos2innerText = positions[winningCombo[2]].innerText;
const isWinningCombo = pos0innerText !== '' &&
pos0innerText === pos1innerText &&
pos1innerText === pos2innerText;

if  (isWinningCombo) {
winner = true;
winningCombo.forEach((index) => {
    positions [index] .className += ' winner';
})
}
});

return winner;
  }
}

function humanPlayer(board) { 
  
this.takeTurn = function ()  {
  board.positions
    .forEach(el => el.addEventListener('click', handleTurnTaken));
 
}
  
function handleTurnTaken(event) {
event.target.innertext = 'X';
board.positions
.forEach((el) => el.removeEventListener('click', handleTurnTaken));  
  
 }
}

function computerPlayer(board) { 

  this.takeTurn = function ()  {
    const availablePositions = board.positions.filter((p) => p.innertext === '');
   const move = Math.floor(Math.random() * availablePositions.length);
    availablePositions [move] .innertText = 'O';
}

}
const restartButton = document.getElementById("restart");
restartButton.addEventListener("click",() => { 

});