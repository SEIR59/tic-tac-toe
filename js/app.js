const boxes = document.querySelectorAll(".box");
const playerX = "X";
const playerO = "O";
let choice = playerX;

const gameChoices = Array(boxes.length);
gameChoices.fill(null);

const line = document.getElementById("strike");
const interface = document.getElementById("interface");
const interfaceText = document.getElementById("interface-text")
const resetButton = document.getElementById("reset")

resetButton.addEventListener("click", resetGame);

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
    else {
        box.innerText = playerO;
        gameChoices[boxNumber - 1] = playerO;
        choice = playerX;
    }

    checkForWin();
}

function checkForWin() {
    for (const winCondtion of winCondtions) {
        const { lineOf, strikeClass } = winCondtion;
        const boxValue1 = gameChoices[lineOf[0] - 1];
        const boxValue2 = gameChoices[lineOf[1] - 1];
        const boxValue3 = gameChoices[lineOf[2] - 1];

        if(boxValue1 != null && boxValue1 === boxValue2 && boxValue1 === boxValue3) {
            strike.classList.add(strikeClass);
            gameWon(boxValue1);
            return;
        }


    }

    const gameTie = gameChoices.every((box) => box !== null);
    if (gameTie) {
        gameWon(null);
    }
}

function gameWon(winnerText) {
    let text = "Cat!"
    if (winnerText != null) {
        text = `Player ${winnerText} Wins!`
    }
    interface.className = "show";
    interfaceText.innerText = text
}

const winCondtions = [
    { lineOf: [1, 2, 3], strikeClass: "row-1" },
    { lineOf: [4, 5, 6], strikeClass: "row-2" },
    { lineOf: [7, 8, 9], strikeClass: "row-3" },
    { lineOf: [1, 4, 7], strikeClass: "column-1" },
    { lineOf: [2, 5, 8], strikeClass: "column-2" },
    { lineOf: [3, 6, 9], strikeClass: "column-3" },
    { lineOf: [1, 5, 9], strikeClass: "diagonal-1" },
    { lineOf: [3, 5, 7], strikeClass: "diagonal-2" },
    { lineOf: [3, 6, 9], strikeClass: "diagonal-3" },

];

function resetGame () {
    strike.className = "strike";
    interface.className = "hide";
    gameChoices.fill(null);
    boxes.forEach((box => box.innerText = ""))
    turn = playerX

}