// here i am declaring some things we already know and making connections from html to js 

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

// this is making the button able to reset which i declare later on.
resetButton.addEventListener("click", resetGame);


// this is making the function boxClick able to use on ALL boxes in tic-tac-toe
boxes.forEach((box) => box.addEventListener("click", boxClick));


// this is the function which is used for the box click. if it is empty then player x - x, now it is playerO turn. and vise versa. at the end it will run the function check for win. if no win then exit function and display checkForWin function
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
// this function check all avaliable outcomes of the game and displays gameWon box of text that tells the user who won and allows them to reset the game. 
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
// this references the (interface) in html and reset game button
function gameWon(winnerText) {
    let text = "Cat!"
    if (winnerText != null) {
        text = `Player ${winnerText} Wins!`
    }
    interface.className = "show";
    interfaceText.innerText = text
}
//  these are all the possible outcomes in tic-tac-toe minus cat
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
// this is what the reset button will do. erase the strike element, hide the interface, unshow all the x's and o's. and set the player turn to playerX
function resetGame () {
    strike.className = "strike";
    interface.className = "hide";
    gameChoices.fill(null);
    boxes.forEach((box => box.innerText = ""))
    turn = playerX

}