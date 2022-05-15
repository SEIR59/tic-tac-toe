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
  //Select player based on turn
  let i = 0;
  function playerTurn() {
    if (i % 2 === 0) {
        i++;
        document.getElementById("player-turn").innerHTML = "Player X Goes";
        console.log(i);
        return players[1];
    } else if (i % 2 !== 0) {
        document.getElementById("player-turn").innerHTML = "Player O Goes";
        i--;
        console.log(i);
      return players[0];
    }
  }
  /*Each box listened to, correct player added to tile, 
  cannot be changed when clicked another time*/
  function whichBox(){
    correctBoard();
    document.getElementById('tile1').addEventListener('click', e => {
        if(board[0] === ' '){
            let newArea1 = document.getElementById('tile1').innerHTML = playerTurn();
            board.splice(0, 1, players[i]);
            console.log(board);
            correctBoard();
            return newArea1;
        }
    }); 
    document.getElementById('tile2').addEventListener('click', e => {
        if(board[1] === ' '){
            let newArea2 = document.getElementById('tile2').innerHTML = playerTurn();
            board.splice(1, 1, players[i]);
            console.log(board);
            correctBoard();
            return newArea2;
        }
    }); 
    document.getElementById('tile3').addEventListener('click', e => {
        if(board[2] === ' '){
            let newArea3 = document.getElementById('tile3').innerHTML = playerTurn();
            board.splice(2, 1, players[i]);
            console.log(board);
            correctBoard();
            return newArea3;
        }
    }); 
    document.getElementById('tile4').addEventListener('click', e => {
        if(board[3] === ' '){
            let newArea4 = document.getElementById('tile4').innerHTML = playerTurn();
            board.splice(3, 1, players[i]);
            console.log(board);
            return newArea4;
        }
    }); 
    document.getElementById('tile5').addEventListener('click', e => {
        if(board[4] === ' '){
            let newArea5 = document.getElementById('tile5').innerHTML = playerTurn();
            board.splice(4, 1, players[i]);
            console.log(board);
            correctBoard();
            return newArea5;
        }
    }); 
    document.getElementById('tile6').addEventListener('click', e => {
        if(board[5] === ' '){
            let newArea6 = document.getElementById('tile6').innerHTML = playerTurn();
            board.splice(5, 1, players[i]);
            console.log(board);
            correctBoard();
            return newArea6;
        }
    }); 
    document.getElementById('tile7').addEventListener('click', e => {
        if(board[6] === ' '){
            let newArea7 = document.getElementById('tile7').innerHTML = playerTurn();
            board.splice(6, 1, players[i]);
            console.log(board);
            correctBoard();
            return newArea7;
        }
    }); 
    document.getElementById('tile8').addEventListener('click', e => {
        if(board[7] === ' '){
            let newArea8 = document.getElementById('tile8').innerHTML = playerTurn();
            board.splice(7, 1, players[i]);
            console.log(board);
            correctBoard();
            return newArea8;
        }
    }); 
    document.getElementById('tile9').addEventListener('click', e => {
        if(board[8] === ' '){
            let newArea9 = document.getElementById('tile9').innerHTML = playerTurn();
            board.splice(8, 1, players[i]);
            correctBoard();
            return newArea9;
        }
    }); 
  }
  //Initiate whichBox
  whichBox();
}

//Makes the game begin
gameBegins();
