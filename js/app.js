/* 
What do we need:
Initiate the game - done
Starting Board - done
Correct Boards - done
Keep track of moves (game turns)
Pushing choice into board 
Reset the game
Can't change full piece 
*/

//Loads the entire game
function gameBegins() {
  //Sets up storage for board
  let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  //Gives players chars
  let players = ["X", "O"];
  //Holds state for who won game
  let playerXWin = false;
  let playerOWin = false;

  function whoWins() {
    if (playerXWin === true) {
      let theWinner = (document.getElementById("win-state").innerHTML =
        "Player X Wins!!!");
      return theWinner;
    }
    if (playerOWin === true) {
      let theWinner = (document.getElementById("win-state").innerHTML =
        "Player O Wins!!!");
      return theWinner;
    }
  }
  function correctBoard() {
    //Vertical check
    if (
      (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
      (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
      (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
      //Horizontal check
      (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
      (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
      (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
      //Diagonal check
      (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
      (board[2] === "X" && board[4] === "X" && board[6] === "X")
    ) {
      playerXWin = true;
      whoWins();
    }
    //Vertical check
    if (
      (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
      (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
      (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
      //Horizontal check
      (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
      (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
      (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
      //Diagonal check
      (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
      (board[2] === "O" && board[4] === "O" && board[6] === "O")
    ) {
      playerOWin = true;
      whoWins();
    }
  }
}

//Makes the game begin
gameBegins();
