const boxes = document.querySelectorAll(".box");
const playerX = "X";
const playerO = "O";
let choice = playerX;

const gameChoices = Array(boxes.length);
gameChoices.fill(null);

const line = document.getElementsByClassName("strike");
const interface = document.getElementById("interface");
const interfaceText = document.getElementById("interface-text")
const resetButton = document.getElementById("reset")

boxes.forEach((box) => box.addEventListener("click", boxClick));

function boxClick(event) {
    if (interface.classList.contains('show')) {
        return;
    }

    const box = event.target;
    const boxNumber = box.dataset.index;
    if (box.innerText != "") {
        return;
    }
    if (choice === playerX) {
        box.innerText = playerX;
        gameChoices[boxNumber - 1] = playerX;
        choice = playerO;

    }

}
