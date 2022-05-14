const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector(".restart-btn");
const nxtUp = document.querySelector(".next-up");
let letter = 1;
let computer = false;
const playComp = document.querySelector(".play-comp");

//Allows user to click cell and leave either an x or an o
function playHuman() {
  for (const cell of cells) {
    cell.addEventListener("click", function () {
      if (letter === 1) {
        cell.innerHTML = "X";
        letter = letter - 1;
        // console.log(letter)
      } else {
        cell.innerHTML = "O";
        letter = letter + 1;
        // console.log(letter)
      }
      displayNextUpMessage(letter);
    });
  }
}
playHuman();

//Update Next Up Element
function displayNextUpMessage(num) {
  if (num === 0) {
    nxtUp.innerHTML = "Next up: O";
  } else {
    nxtUp.innerHTML = "Next up: X";
  }
}

//Set Computer to true/false
playComp.addEventListener("click", function () {
  if (playComp.innerHTML === "Play Computer") {
    computer = true;
    playComp.innerHTML = "Go back to playing humans!";
  }
});


//Restart Btn
restartBtn.addEventListener('click', function(){
    restart();
})

//Restart Function
function restart() {
    cells.forEach(function (cell) {
      cell.innerHTML = "";
    });
    letter = 1;
    nxtUp.innerHTML = "Next up: X";
}

