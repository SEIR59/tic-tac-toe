const squares = document.querySelectorAll(".square");

// const restart = document.getElementById("restart"); //

const WINNING_STRATEGY = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4 , 8],
[2, 4, 6],
];

const O = "O";
const X = "X";

let currentPlayer = O;
const gameboard = new Array(9).fill(null);

const squareClicked = (e) => {
    const id = e.target.id;
  
if (!gameboard[id]) {
  gameboard[id] = currentPlayer;
  e.target.innerText = currentPlayer; 
  if (winner()) endGame();
  if(!gameboard.some((e) => e === null)) endgame("play again");
  
  currentPlayer = currentPlayer === O ? X : O;
}
  
 console.log(gameboard);
};

const endGame = (result) => {
  intro.innerText = result == "play again" ? "Play Again!" : currentPlayer + " is a winner!";
  squares.forEach((square) => square.removeEventListener("click", squareClicked));
  };
//const restartGame = ()=> { //
 // currentPlayer = O; //
 // gameboard.fill(null); //
  // squares.forEach((square) => { //
    // square.innerText =""; //
 // }); //
 
  
  intro.innerText = "Hugs vs Kisses!";

  const winner = () => {

  /* Winning combination
  0, 1, 2
  3, 4, 5
  6, 7, 8
  0, 3, 6
  1, 4, 7
  2, 5, 8
  0, 4 , 8
  2, 4, 6
*/
  
  
  // Top line = [0, 1, 2] x
if (currentPlayer == gameboard[0] && gameboard[0] == gameboard[1] && gameboard[0] == gameboard[2])
    return true;
// Middle line = [3, 4, 5]   
if (currentPlayer == gameboard[3] && gameboard[3] == gameboard[4] && gameboard[3] == gameboard[5])
  return true;
  //Bottom line = [6, 7, 8])
if (currentPlayer == gameboard[6] && gameboard[6] == gameboard[7] && gameboard[6] == gameboard[8])
    return true;
    //Left column = [0, 3, 6]
if (currentPlayer == gameboard[0] && gameboard[0] == gameboard[3] && gameboard[0] == gameboard[6])
  return true;
  // Middle column = [1, 4, 7]
  if (currentPlayer == gameboard[1] && gameboard[1] == gameboard[4] && gameboard[1] == gameboard[7])
      return true;
      //Right column = [2, 5, 8]
      if (currentPlayer == gameboard[2] && gameboard[2] == gameboard[5] && gameboard[2] == gameboard[8])
  return true;
  // Slash diagonal = [0, 4, 8]
if (currentPlayer == gameboard[0] && gameboard[0] == gameboard[4] && gameboard[0] == gameboard[8])
     return true;
      // Backslash diagonal = [2, 4, 6]
if (currentPlayer == gameboard[2] && gameboard[2] == gameboard[4] && gameboard[2] == gameboard[6])
     return true ;
  
  return false;
};
  
  const winner2 = () => {
    return WINNING_STRATEGY.some((combination) => {
      if (
      currentPlayer == gameboard[combination[0]] &&
        gameboard[combination[0]] == gameboard[combination[1]] &&
        gameboard[combination[0]] == gameboard[combination[2]]                          )
     return true;
      
      return false;
    });
  };

squares.forEach((square) => square.addEventListener("click", squareClicked));
// restart.addEventListener("click", restartGame);//
