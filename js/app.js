let playBoard = document.querySelector(".square");

playBoard.addEventListener("click", () => {
  document.getElementById("box1").innerHTML = "X";
});

playBoard.addEventListener("click", () => {
  document.getElementById("box2").innerHTML = "O";
});
