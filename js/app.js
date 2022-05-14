const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector(".restart-btn");
const nxtUp = document.querySelector(".next-up");
let letter = 1;
let computer = false;
const playComp = document.querySelector(".play-comp");

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
    restart();
    //console.log(computer)
    if (playComp.innerHTML === "Play Computer") {
        computer = true;
        playComp.innerHTML = "Go back to playing humans!";
        play(computer);
    } else {
        computer = false;
        playComp.innerHTML = "Play Computer";
        //console.log(playComp.innerHTML)
        //play(computer);
    }
});

function play(a){
    if (a){
        playHuman()
        console.log("we are playing computer")
    } else {
        playHuman()
        console.log("we are playing humans")
        //console.log(letter)
    }
}

//Allows user to click cell and leave either an x or an o
function playHuman() {
  for (const cell of cells) {
    cell.addEventListener("click", function () {
      if (letter === 1) {
        cell.innerHTML = "X";
        letter = letter - 1;
        console.log(letter)
      } else {
        cell.innerHTML = "O";
        letter = letter + 1;
        console.log(letter)
      }
      //console.log(letter)
      displayNextUpMessage(letter);
    });
  }
};

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

