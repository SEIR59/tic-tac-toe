
const gameboard = document.getElementById("board");
const boxes = Array.from(document.getElementsByClassName("box"));
const restartBtn = document.getElementById("button");
const playText = document.getElementById("titletext");
const spaces = [null, null, null, null, null, null, null, null, null];
const Otext = "O";
const Xtext = "X";
let currentPlayer = Otext;

//setting the board into different sections
const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += `border-bottom: 3px solid var(--purple);`;
    }
    if (index % 3 === 0) {
      styleString += `border-right: 3px solid var(--purple);`;
    }
    if (index % 3 === 2) {
      styleString += `border-left: 3px solid var(--purple);`;
    }
    if (index > 5) {
      styleString += `border-top: 3px solid var(--purple);`;
    }
    box.style = styleString;

    box.addEventListener("click", boxClicked);
  });
};
// how winning conditions work
function boxClicked(e) {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (hasPlayerWon(currentPlayer)) {
      playText.innerHTML = `${currentPlayer} wins!!`;
      return;
    }
    currentPlayer = currentPlayer === Otext ? Xtext : Otext;
  }
}


//this is how you win from the top left across and bottom
const hasPlayerWon = (player) => {
  if (spaces[0] === player) {
    if (spaces[1] === player && spaces[2] === player) {
      console.log(`${player} wins up top`);
      return true;
    }
    if (spaces[3] === player && spaces[6] === player) {
      console.log(`${player} wins on the left`);
      return true;
    }
    if (spaces[4] === player && spaces[8] === player) {
      console.log(`${player} wins on the diagonal`);
      return true;
    }
  }
  //from bottom check up and across
  if (spaces[8] === player) {
    if (spaces[2] === player && spaces[5] === player) {
      console.log(`${player} wins on the right`);
      return true;
    }
    if (spaces[7] === player && spaces[6] === player) {
      console.log(`${player} wins on the bottom`);
      return true;
    }
  }
  //from middle check middle vertical and middle horizontal
  if (spaces[4] === player) {
    if (spaces[3] === player && spaces[5] === player) {
      console.log(`${player} wins on the middle horizontal`);
      return true;
    }
    if (spaces[1] === player && spaces[7] === player) {
      console.log(`${player} wins on the middle vertical`);
      return true;
    }
  }
};

//this restarts the game 
restartBtn.addEventListener("click", () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playText.innerHTML = `Let's Play!!`;

  currentPlayer = O_TEXT;
});

drawBoard();


