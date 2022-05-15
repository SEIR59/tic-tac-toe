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
 * detect winner
 */

/** Players click string*/
const player1 = [];
const player2 = [];
let temp1 = "";
let temp2 = "";
/** Winning combinations - any better way??*/
const winCodes = ["123", "456", "789", "147", "258", "369", "159", "357"];

const player1_img =
  '<img class="player" src="image/batman.png" width="60px" height="60px">';
const player2_img =
  '<img class="player" src="image/hulk.png" width="60px" height="60px">';

const markerO = '<img src="image/circle.png" width="175px" height="175px">';
const markerX = '<img src="image/x_mark.png" width="175px" height="175px">';
//default: player 1
let switcher = "player1";

const button = document.getElementById("button");

const g1 = document.getElementById("grid-1");
const g2 = document.getElementById("grid-2");
const g3 = document.getElementById("grid-3");
const g4 = document.getElementById("grid-4");
const g5 = document.getElementById("grid-5");
const g6 = document.getElementById("grid-6");
const g7 = document.getElementById("grid-7");
const g8 = document.getElementById("grid-8");
const g9 = document.getElementById("grid-9");

const msg = document.querySelector(".message");
let clickTimes = 0;

const player1_class = document.querySelector(".player1");
const player2_class = document.querySelector(".player2");

/** Display players in each cell */
const displayPlayer = function (grid_item) {
  grid_item.innerHTML += `<p class="display">${switcher}</p>`;
};
/** check result - if ties */
const result = function (playerData) {
  console.log(clickTimes);

  //only consider win when one player clicked at least 3 times
  //exclude if the 9th clicked win
  //TODO
  temp1 = player1.sort().join("");
  console.log(temp1);
  temp2 = player2.sort().join("");
  console.log(temp2);

  // 3457 didn't catch the winCodes
  for (let i = 0; i <= winCodes.length; i++) {
    if (temp1.includes(winCodes[i])) {
      msg.innerText = `Winner is ... ${switcher}`;
      break; // or return... still can clicked and replace winner
    } else if (temp2.includes(winCodes[i])) {
      msg.innerText = `Winner is ... ${switcher}`;
      break;
    }
  }

  if (clickTimes === 9) {
    msg.innerText = "Cat's game!";
  }
};

/** Switch Player 1 or Player 2 */
const switchPlayer = function (grid_item, grid_num) {
  console.log("clicked");
  ++clickTimes;
  //   console.log(clickTimes);
  if (switcher === "player1") {
    if (!grid_item.classList.contains("player2")) {
      grid_item.innerHTML = markerO;
      grid_item.classList.add("player1");
      displayPlayer(grid_item);
      //store the grid number
      player1.push(grid_num);
    }
    //update message
    msg.innerText = "Next: Player2";
    //checking results
    result(player1);

    //switch player
    switcher = "player2";
  } else {
    if (!grid_item.classList.contains("player1")) {
      grid_item.innerHTML = markerX;
      grid_item.classList.add("player2");
      displayPlayer(grid_item);
      player2.push(grid_num);
    }

    //update message
    msg.innerText = "Next: Player1";
    //checking results
    result(player2);

    //switch player
    switcher = "player1";
  }
};

g1.addEventListener("click", function () {
  switchPlayer(g1, 1);
});
g2.addEventListener("click", function () {
  switchPlayer(g2, 2);
});
g3.addEventListener("click", function () {
  switchPlayer(g3, 3);
});
g4.addEventListener("click", function () {
  switchPlayer(g4, 4);
});
g5.addEventListener("click", function () {
  switchPlayer(g5, 5);
});
g6.addEventListener("click", function () {
  switchPlayer(g6, 6);
});
g7.addEventListener("click", function () {
  switchPlayer(g7, 7);
});
g8.addEventListener("click", function () {
  switchPlayer(g8, 8);
});
g9.addEventListener("click", function () {
  switchPlayer(g9, 9);
});

button.addEventListener("click", function () {
  //initialize
  msg.innerText = "Have Fun!";
  clickTimes = 0;

  //remove elements in the grid
});
