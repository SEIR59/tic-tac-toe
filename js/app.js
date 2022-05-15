/**
 * Program name: Tic Tac Toe Assignment
 * Program date: 2022/05/14
 * Program author: Wendy Yu
 *
 * Requirements:
 * DONE - Every click will alternate between marking an X and O
 * not sure - Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
 * DONE - Display a message to indicate which turn is about to be played.
 * DONE - detect draw condition
 * DONE - detect winner
 *
 * Bonuses:
 * Implement your reset button without refreshing the whole page
 * Track player's wins over time
 * Add a simple AI to support one player vs computer mode. In this case, "simple" just means having the computer pick a random empty square.
 * Make your computer seem more human by adding a short time delay between your turn and the computer's turn.
 *
 */

/****** Elements for Computer Mode ********************************************* */
//Computer mode Button
const computerButton = document.getElementById("computer");
const computerData = [];
let computerWinCount = 0;

/****** Elements for Two Players ********************************************* */

//store player2 data
const player2Data = [];
//default: player 1
let switcher = "player1";
//total click times
let clickTimes = 0;
//players image
// const player1_img =
//   '<img class="player" src="image/batman.png" width="60px" height="60px">';
// const player2_img =
//   '<img class="player" src="image/hulk.png" width="60px" height="60px">';

//two players mode Button
const twoPlayersButton = document.getElementById("twoPlayers");

const player1_class = document.querySelector(".player1");
const player2_class = document.querySelector(".player2");
const player1_wins_count = document.querySelector("#player1_wins_count");

/******** Common Elements ********************************************************** */
const markerO = '<img src="image/circle.png" width="175px" height="175px">';
const markerX = '<img src="image/x_mark.png" width="175px" height="175px">';
const msg = document.querySelector(".message");

const player1Data = [];
const playersTrack = document.querySelector(".track");

//Players Win counts
let player1WinCount = 0;
let secondWinCount = 0;
const second_wins_count = document.querySelector("#second_wins_count");
const player2orComputer = document.querySelector("#player2orComputer");

//new game(initialize) button
const newGameButton = document.querySelector("#newGame");

const gridItem = document.querySelector(".grid-item");

const g1 = document.getElementById("grid-1");
const g2 = document.getElementById("grid-2");
const g3 = document.getElementById("grid-3");
const g4 = document.getElementById("grid-4");
const g5 = document.getElementById("grid-5");
const g6 = document.getElementById("grid-6");
const g7 = document.getElementById("grid-7");
const g8 = document.getElementById("grid-8");
const g9 = document.getElementById("grid-9");

/** Winning combinations - any better way??*/
const winCodes = ["123", "456", "789", "147", "258", "369", "159", "357"];

/****** Functions ********************************************************************* */

/** Display players in each cell */
const displayPlayer = function (grid_item) {
  grid_item.innerHTML += `<p class="display">${switcher}</p>`;
};
/** check result - if ties */
const result = function () {
  //if meet one of eight winCodes
  const isInWinCode = (currentValue) =>
    (switcher === "player1" ? player1Data : player2Data).indexOf(currentValue) >
    -1;

  if (
    winCodes.some((winCode) => {
      return winCode.split("").every(isInWinCode);
    })
  ) {
    switcher === "player1" ? player1WinCount++ : secondWinCount++;
    //update button "Two Players" to "One More"
    twoPlayersButton.textContent = "One More";
    //update message and win counts
    msg.innerText = `${
      switcher === "player1" ? "Player1" : "Player2"
    } Won! Click One More`;
    player1_wins_count.textContent = player1WinCount;
    second_wins_count.textContent = secondWinCount;
  } else if (clickTimes === 9) {
    twoPlayersButton.textContent = "One More";
    msg.innerText = "Cat's game! Click One More";
  }
};

/** Switch Player 1 or Player 2 */
const switchPlayer = function (grid_item, grid_num) {
  console.log("clicked");
  ++clickTimes;

  if (switcher === "player1") {
    if (!grid_item.classList.contains("player2")) {
      grid_item.innerHTML = markerO;
      grid_item.classList.add("player1");
      displayPlayer(grid_item);
      //store the grid number
      player1Data.push(grid_num);
    }
    //update message
    msg.innerText = "Next: Player2";
    //checking results
    result(player1Data);

    //switch player
    switcher = "player2";
  } else {
    if (!grid_item.classList.contains("player1")) {
      grid_item.innerHTML = markerX;
      grid_item.classList.add("player2");
      displayPlayer(grid_item);
      player2Data.push(grid_num);
    }

    //update message
    msg.innerText = "Next: Player1";
    //checking results
    result(player2Data);

    //switch player
    switcher = "player1";
  }
};

g1.addEventListener("click", function () {
  switchPlayer(g1, "1");
});
g2.addEventListener("click", function () {
  switchPlayer(g2, "2");
});
g3.addEventListener("click", function () {
  switchPlayer(g3, "3");
});
g4.addEventListener("click", function () {
  switchPlayer(g4, "4");
});
g5.addEventListener("click", function () {
  switchPlayer(g5, "5");
});
g6.addEventListener("click", function () {
  switchPlayer(g6, "6");
});
g7.addEventListener("click", function () {
  switchPlayer(g7, "7");
});
g8.addEventListener("click", function () {
  switchPlayer(g8, "8");
});
g9.addEventListener("click", function () {
  switchPlayer(g9, "9");
});

/** Remove Grid Content */
const removeGridContent = function () {
  //remove elements in the grid
  //is there a smarter way??
  while (g1.firstChild) {
    g1.removeChild(g1.firstChild);
  }
  while (g2.firstChild) {
    g2.removeChild(g2.firstChild);
  }
  while (g3.firstChild) {
    g3.removeChild(g3.firstChild);
  }
  while (g4.firstChild) {
    g4.removeChild(g4.firstChild);
  }
  while (g5.firstChild) {
    g5.removeChild(g5.firstChild);
  }
  while (g6.firstChild) {
    g6.removeChild(g6.firstChild);
  }
  while (g7.firstChild) {
    g7.removeChild(g7.firstChild);
  }
  while (g8.firstChild) {
    g8.removeChild(g8.firstChild);
  }
  while (g9.firstChild) {
    g9.removeChild(g9.firstChild);
  }

  //remove player class
  //how to DRY??/
  g1.classList.contains("player1") && g1.classList.remove("player1");
  g1.classList.contains("player2") && g1.classList.remove("player2");
  g2.classList.contains("player1") && g2.classList.remove("player1");
  g2.classList.contains("player2") && g2.classList.remove("player2");
  g3.classList.contains("player1") && g3.classList.remove("player1");
  g3.classList.contains("player2") && g3.classList.remove("player2");
  g4.classList.contains("player1") && g4.classList.remove("player1");
  g4.classList.contains("player2") && g4.classList.remove("player2");
  g5.classList.contains("player1") && g5.classList.remove("player1");
  g5.classList.contains("player2") && g5.classList.remove("player2");
  g6.classList.contains("player1") && g6.classList.remove("player1");
  g6.classList.contains("player2") && g6.classList.remove("player2");
  g7.classList.contains("player1") && g7.classList.remove("player1");
  g7.classList.contains("player2") && g7.classList.remove("player2");
  g8.classList.contains("player1") && g8.classList.remove("player1");
  g8.classList.contains("player2") && g8.classList.remove("player2");
  g9.classList.contains("player1") && g9.classList.remove("player1");
  g9.classList.contains("player2") && g9.classList.remove("player2");
};

/*** New Game - clean all the data ******************************************************* */
newGameButton.addEventListener("click", function () {
  msg.innerText = "Please Choose Mode";
  clickTimes = 0;
  player1Data.length = 0;
  player2Data.length = 0;
  computerData.length = 0;
  //clean wins count
  player1_wins_count.textContent = 0;
  second_wins_count.textContent = 0;
  //reset button names
  twoPlayersButton.textContent = "Two Players";
  computerButton.textContent = "Computer";

  //hide wins track
  playersTrack.classList.contains("hide") || playersTrack.classList.add("hide");

  //clean Grid content
  removeGridContent();
});

/** *******************TWO PLAYERS MODE***************************************** */
twoPlayersButton.addEventListener("click", function () {
  //initialize
  console.log("Start Two Players Mode");
  twoPlayersButton.textContent = "Two Players";
  msg.innerText = "Two Players Game Begins!";
  clickTimes = 0;
  player1Data.length = 0;
  player2Data.length = 0;

  //update second player
  player2orComputer.innerText = "Player2";
  //show the players win track
  playersTrack.classList.contains("hide") &&
    playersTrack.classList.remove("hide");

  //clean Grid content
  removeGridContent();
});

/*** Computer MODE************************************************************ */
computerButton.addEventListener("click", () => {
  //initialize
  console.log("Start Computer Mode");
  msg.innerText = "Computer Mode Begins!";
  clickTimes = 0;

  //update second player
  player2orComputer.innerText = "Computer";
  //reveal wins
  playersTrack.classList.contains("hide") &&
    playersTrack.classList.remove("hide");
});
