const squares = document.querySelectorAll(".square");

const O = "O";
const X = "X";

let currentPlayer = O;



const squareClicked = (e) => {
    const id = e.target.id;
  
e.target.innerText = currentPlayer;  
   
  currentPlayer = 
    (currentPlayer === O) ? X : O;
  };

squares.forEach((square) => square.addEventListener("click", squareClicked));


  

