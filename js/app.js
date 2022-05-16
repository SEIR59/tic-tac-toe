const squares = document.querySelectorAll(".square");

const O = "O";
const X = "X";

let currentPlayer = O;
const gameboard = new Array(9).fill(null);

const squareClicked = (e) => {
    const id = e.target.id;
  
if (!gameboard[id]){
  gameboard[id] = currentPlayer;
  e.target.innerText = currentPlayer; 
  
  currentPlayer = currentPlayer === O ? X : O
}
  
  console.log(gameboard)
};

squares.forEach((square) => square.addEventListener("click", squareClicked));



  

