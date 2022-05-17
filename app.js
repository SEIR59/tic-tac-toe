//player turn 
let turn = 1;
let win = 1
let clickCounter = 0;
let winningCombo = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1]

]
function playerAction(elem, row, column) {

  if(elem.innerHTML !="") return;
  if(win != -1) return;
  clickCounter++;

  //winning conditions
winningCombo[row][column] = turn; 
// displayes either player 1 or player 2
  if(turn == 1){
    elem.innerHTML = "x";
    document.getElementById("messagesection").innerHTML = "player 2 turn"; 
    turn = 2;
  }
  else if(turn == 2) {
    elem.innerHTML = "O"
    document.getElementById("messagesection").innerHTML = "player 1 turn";
    turn = 1;
  }
  for(let i =0; i < 3; i++) {

  //this checks the row
  if(winningCombo[i][0] == winnningCombo[i][1] && winnningCombo[i][2]) win = winningCombo[i][0];
  //this checks the column
  if(winningCombo[0][i] == winnningCombo[1][i] && winnningCombo[2][i] ) win = winningCombo[0][i];
  }
  //this checks diagonal
  if(winningCombo[0][0] == winningCombo[1][1] == winningCombo [2][2]) win = winningCombo[1][1];
  if(winningCombo[0][2] == winningCombo[1][1] == winningCombo [2][0]) win = winningCombo[1][1];
//displays winnert message
if ( win != -1) {
  document.getElementById("messaghesection").innerHTML = "player " + win + "has won!";

}
//displays tie messages
  if (clickCounter == 9 && win == -1) {
    document.getElementById("messagesection").innerHTML = " Tie Game!";

  }

}


