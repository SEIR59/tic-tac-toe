/* 
* Apparently the code works without these variables, but leaving in commented in case they're needed
*
// const vsHumanButton = document.getElementById("vsHumanButton");
// const vsCompButton = document.getElementById("vsCompButton");
// const hardModeButton = document.getElementById("hardModeButton");
// const xButton = document.getElementById("xButton");
// const oButton = document.getElementById("oButton");
// const topPrompt = document.getElementById("topPrompt");
// const bottomPrompt = document.getElementById("bottomPrompt");
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");
// let seven = document.getElementById("seven");
// let eight = document.getElementById("eight");
// let nine = document.getElementById("nine"); 
*/

let p1 = " ";
let p2 = " ";
let p1Wins = 0;
let p2Wins = 0;
let turnsTaken = 0;
let turn = 0;
let gameOver = false;
let mode = " ";
const boxes = document.querySelectorAll('.box');

function nextButtonPhase() {
    vsHumanButton.style.display = "none";
    vsCompButton.style.display = "none";
    hardModeButton.style.display = "none";
    topPrompt.innerHTML = "CHOOSE X OR O";
    xButton.style.display = "inline";
    oButton.style.display = "inline";
}

vsHumanButton.addEventListener("click", (event) => {
    mode = "human";
    nextButtonPhase();
});

vsCompButton.addEventListener("click", (event) => {
    mode = "comp";
    nextButtonPhase();
});

xButton.addEventListener("click", (event) => {
    p1 = "X";
    p2 = "O";
    gameOn();
});

oButton.addEventListener("click", (event) => {
    p1 = "O";
    p2 = "X";
    gameOn();
});

function gameOn() {
    xButton.style.display = "none";
    oButton.style.display = "none";
    topPrompt.innerHTML = `GAME ON!`
    bottomPrompt.style.display = "inline";
    restartButton.style.display = "inline";
    gameOver = false;
    p1Turn();
}

function p1Turn() {
    bottomPrompt.innerHTML = `P1 TURN: ${p1}`;
    turn = 1;
}

function p2Turn() {
    bottomPrompt.innerHTML = `P2 TURN: ${p2}`;
    turn = 2;
}

function compTurn() {
    let choices = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    while (turn === 3) {
        let temp = Math.floor(Math.random() * 9);
        let compChoice = choices[temp];
        let currentValue = document.getElementById(compChoice).innerHTML;
        if ((currentValue !== "X") && (currentValue !== "O")) {
            document.getElementById(compChoice).innerHTML = p2;
            document.getElementById(compChoice).style.color = "lightcoral";
            turn = 1;
        }
    }
    if (checkForWin(p2)) {
        return;
    }
    p1Turn();
    turnsTaken++;
}

boxes.forEach(box => {
    box.addEventListener('click', function handleClick(event) {
        if ((turnsTaken !== 9) && (gameOver === false)) {
            let currentBox = this.id;
            let currentValue = document.getElementById(currentBox).innerHTML;
            if (turn === 1) {
                if (currentValue !== (p2 && p1)) {
                    document.getElementById(currentBox).innerHTML = p1;
                    document.getElementById(currentBox).style.color = "dodgerblue";
                    if (checkForWin(p1)) {
                        return;
                    }
                    turnsTaken++;
                    if (mode === "human") {
                        p2Turn();
                    }
                    if (mode === "comp") {
                        turn = 3;
                        bottomPrompt.innerHTML = `P2 TURN: ${p2}`;
                        setTimeout(() => {
                            compTurn();
                        }, 1000);
                    }
                }
            }
            else if (turn === 2) {
                if (currentValue !== p1) {
                    document.getElementById(currentBox).innerHTML = p2;
                    document.getElementById(currentBox).style.color = "lightcoral";
                    if (checkForWin(p2)) {
                        return;
                    }
                    turnsTaken++;
                    p1Turn();
                }
            }
        }
    })
});

function checkForWin(p) {
    if (((one.innerHTML === p) && (two.innerHTML === p) && (three.innerHTML === p)) ||
        ((four.innerHTML === p) && (five.innerHTML === p) && (six.innerHTML === p)) ||
        ((seven.innerHTML === p) && (eight.innerHTML === p) && (nine.innerHTML === p)) ||
        ((one.innerHTML === p) && (four.innerHTML === p) && (seven.innerHTML === p)) ||
        ((two.innerHTML === p) && (five.innerHTML === p) && (eight.innerHTML === p)) ||
        ((three.innerHTML === p) && (six.innerHTML === p) && (nine.innerHTML === p)) ||
        ((one.innerHTML === p) && (five.innerHTML === p) && (nine.innerHTML === p)) ||
        ((seven.innerHTML === p) && (five.innerHTML === p) && (three.innerHTML === p))) {
        if (p1 === p) {
            bottomPrompt.innerHTML = "P1 WINS!";
            gameOver = true;
            p1Wins++;
            scoreboard.innerHTML = `P1 ${p1Wins} - ${p2Wins} P2`;
            return true;
        }
        else if (p2 === p) {
            bottomPrompt.innerHTML = "P2 WINS";
            gameOver = true;
            p2Wins++;
            scoreboard.innerHTML = `P1 ${p1Wins} - ${p2Wins} P2`;
            return true;
        }
        else if (turnsTaken === 8) {
            bottomPrompt.innerHTML = "IT'S A TIE!";
            gameOver = true;
            scoreboard.innerHTML = `P1 ${p1Wins} - ${p2Wins} P2`;
            return true;
        }
    }
}

restartButton.addEventListener('click', (event) => {
    gameOver = true;
    topPrompt.innerHTML = "CHOOSE MODE:";
    restartButton.style.display = "none";
    vsHumanButton.style.display = "inline";
    vsCompButton.style.display = "inline";
    // hardModeButton.style.display = "inline";
    boxes.forEach(box => {
        box.innerHTML = "1";
        box.style.color = "white";
    });
    turnsTaken = 0;
    bottomPrompt.innerHTML = "AWAITING MATCH...";
    mode = " ";
});