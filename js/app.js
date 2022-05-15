/* 
What do we need:
Initiate the game - done
Starting Board - done
Correct Boards - done
Keep track of moves (game turns) - done
Pushing choice into board -done
Reset the game - done
Can't change full piece - done
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
  let playerDraw = false;
  //Tie detection (Tie once at 9)
  let b = 0;

  function whoWins() {
    if (playerXWin === true) {
      let theWinner = (document.getElementById("win-state").innerHTML =
        "Player X Wins!!!");
        return theWinner;
    }
    else if (playerOWin === true) {
      let theWinner = (document.getElementById("win-state").innerHTML =
        "Player O Wins!!!");
      return theWinner;
    }else if(b === 9){
        document.getElementById('player-turn').innerHTML = " ";
        let theWinner = (document.getElementById("win-state").innerHTML =
        "It's a tie!");
        return theWinner;
    }
  }
  //Select player based on turn
  let i = 0;
  function playerTurn() {
    if (i % 2 === 0 && playerOWin === false && playerXWin === false) {
        document.getElementById("player-turn").innerHTML = "Player X Goes";
        i++;
        console.log(i);
        return players[1];
    } else if(playerOWin === false && playerXWin === false){
        document.getElementById("player-turn").innerHTML = "Player O Goes";
        i--;
        console.log(i);
      return players[0];
    } else {
        document.getElementById("player-turn").innerHTML = " ";
        return " "; 
    }
  }
  //Makes everything reset
  function doReset(){
    board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    playerXWin = false;
    playerOWin = false;
    i = 0;
    b = 0;
    playerDraw = false;
    console.log(board);
    document.getElementById('tile1').innerHTML = " ";
    document.getElementById('tile2').innerHTML = " ";
    document.getElementById('tile3').innerHTML = " ";
    document.getElementById('tile4').innerHTML = " ";
    document.getElementById('tile5').innerHTML = " ";
    document.getElementById('tile6').innerHTML = " ";
    document.getElementById('tile7').innerHTML = " ";
    document.getElementById('tile8').innerHTML = " ";
    document.getElementById('tile9').innerHTML = " ";
    document.getElementById('player-turn').innerHTML = "Player O Goes";
    document.getElementById('win-state').innerHTML = " ";
};
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
      playerTurn();
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
      playerTurn();
      whoWins();
    }
  }
  /*Each box listened to, correct player added to tile, 
  cannot be changed when clicked another time*/
  function whichBox(){
    correctBoard();
    whoWins();
    document.getElementById('tile1').addEventListener('click', e => {
        b++;
        correctBoard();
        whoWins();
        if(board[0] === ' ' && playerOWin === false && playerXWin === false){
            correctBoard();
            whoWins();
            let newArea1 = document.getElementById('tile1').innerHTML = playerTurn();
            board.splice(0, 1, players[i]);
            console.log(board);
            correctBoard();
            whoWins();
            return newArea1;
        }
    }); 
    document.getElementById('tile2').addEventListener('click', e => {
        b++;
        correctBoard();
        whoWins();
        if(board[1] === ' ' && playerOWin === false && playerXWin === false){
            correctBoard();
            let newArea2 = document.getElementById('tile2').innerHTML = playerTurn();
            board.splice(1, 1, players[i]);
            console.log(board);
            correctBoard();
            whoWins();
            return newArea2;
        }
    }); 
    document.getElementById('tile3').addEventListener('click', e => {
        b++;
        correctBoard();
        whoWins();
        if(board[2] === ' ' && playerOWin === false && playerXWin === false){
            correctBoard();
            let newArea3 = document.getElementById('tile3').innerHTML = playerTurn();
            board.splice(2, 1, players[i]);
            console.log(board);
            correctBoard();
            whoWins();
            return newArea3;
        }
    }); 
    document.getElementById('tile4').addEventListener('click', e => {
        b++;
        correctBoard();
        whoWins();
        if(board[3] === ' ' && playerOWin === false && playerXWin === false){
            correctBoard();
            let newArea4 = document.getElementById('tile4').innerHTML = playerTurn();
            board.splice(3, 1, players[i]);
            console.log(board);
            correctBoard();
            whoWins();
            return newArea4;
        }
    }); 
    document.getElementById('tile5').addEventListener('click', e => {
        b++;
        correctBoard();
        whoWins();
        if(board[4] === ' ' && playerOWin === false && playerXWin === false){
            correctBoard();
            let newArea5 = document.getElementById('tile5').innerHTML = playerTurn();
            board.splice(4, 1, players[i]);
            console.log(board);
            correctBoard();
            whoWins();
            return newArea5;
        }
    }); 
    document.getElementById('tile6').addEventListener('click', e => {
        b++;
        correctBoard();
        whoWins();
        if(board[5] === ' ' && playerOWin === false && playerXWin === false){
            correctBoard();
            let newArea6 = document.getElementById('tile6').innerHTML = playerTurn();
            board.splice(5, 1, players[i]);
            console.log(board);
            correctBoard();
            whoWins();
            return newArea6;
        }
    }); 
    document.getElementById('tile7').addEventListener('click', e => {
        b++;
        correctBoard();
        whoWins();
        if(board[6] === ' ' && playerOWin === false && playerXWin === false){
            correctBoard();
            let newArea7 = document.getElementById('tile7').innerHTML = playerTurn();
            board.splice(6, 1, players[i]);
            console.log(board);
            correctBoard();
            whoWins();
            return newArea7;
        }
    }); 
    document.getElementById('tile8').addEventListener('click', e => {
        b++;
        correctBoard();
        whoWins();
        if(board[7] === ' ' && playerOWin === false && playerXWin === false){
            correctBoard();
            let newArea8 = document.getElementById('tile8').innerHTML = playerTurn();
            board.splice(7, 1, players[i]);
            console.log(board);
            correctBoard();
            whoWins();
            return newArea8;
        }
    }); 
    document.getElementById('tile9').addEventListener('click', e => {
        b++;
        correctBoard();
        whoWins();
        if(board[8] === ' ' && playerOWin === false && playerXWin === false){
            correctBoard();
            let newArea9 = document.getElementById('tile9').innerHTML = playerTurn();
            board.splice(8, 1, players[i]);
            correctBoard();
            whoWins();
            return newArea9;
        }
    }); 
    document.getElementById('reset').addEventListener('click', e => {
        doReset(); 
    }); 
  }
  //Initiate whichBox
  whichBox();
}

//Makes the game begin
gameBegins();
