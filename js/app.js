console.log('Hello frontend');

// const vsHumanButton = document.getElementById("vsHumanButton");
// const vsCompButton = document.getElementById("vsCompButton");
// const hardModeButton = document.getElementById("hardModeButton");
// const xButton = document.getElementById("xButton");
// const oButton = document.getElementById("oButton");
// const topPrompt = document.getElementById("topPrompt");
// const bottomPrompt = document.getElementById("bottomPrompt");
let p1 = " ";
let p2 = " ";
let p1Wins = 0;
let p2Wins = 0;
let turnsTaken = 0;
let turn = 0;
let gameOver = false;
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");
// let seven = document.getElementById("seven");
// let eight = document.getElementById("eight");
// let nine = document.getElementById("nine");

function nextButtonPhase() {
    vsHumanButton.style.display = "none";
    vsCompButton.style.display = "none";
    hardModeButton.style.display = "none";
    topPrompt.innerHTML = "CHOOSE X OR O";
    xButton.style.display = "inline";
    oButton.style.display = "inline";
}

vsHumanButton.addEventListener("click", (event) => {
    console.log("versus human button was pressed");
    nextButtonPhase();
});

xButton.addEventListener("click", (event) => {
    console.log("x button was pressed");
    p1 = "X";
    p2 = "O";
    gameOn();
});

oButton.addEventListener("click", (event) => {
    console.log("o button was pressed");
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
    turn = 1;
    bottomPrompt.innerHTML = `P1 TURN: ${p1}`;
}

function p2Turn() {
    turn = 2;
    bottomPrompt.innerHTML = `P2 TURN: ${p2}`;
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', function handleClick(event) {
        if ((turnsTaken !== 9) && (gameOver === false)) {
            let currentBox = this.id;
            console.log(currentBox); // Test log ?
            let currentValue = document.getElementById(currentBox).innerHTML;
            console.log(`Current value = ${currentValue}`)
            if (turn === 1) {
                if (currentValue !== p2) {
                    console.log("empty!") // Test log;
                    document.getElementById(currentBox).innerHTML = p1;
                    document.getElementById(currentBox).style.color = "dodgerblue";
                    p2Turn();
                    checkForWin(p1);
                }
            }
            else if (turn === 2) {
                if (currentValue !== p1) {
                    console.log("empty!") // Test log;
                    document.getElementById(currentBox).innerHTML = p2;
                    document.getElementById(currentBox).style.color = "lightcoral";
                    p1Turn();
                    checkForWin(p2);
                }
            }
            turnsTaken++;
        }
    })
});

function checkForWin(p) {
    console.log(`checking p for ${p}`);
    if (((one.innerHTML === p) && (two.innerHTML === p) && (three.innerHTML === p)) ||
        ((four.innerHTML === p) && (five.innerHTML === p) && (six.innerHTML === p)) ||
        ((seven.innerHTML === p) && (eight.innerHTML === p) && (nine.innerHTML === p)) ||
        ((one.innerHTML === p) && (four.innerHTML === p) && (seven.innerHTML === p)) ||
        ((two.innerHTML === p) && (five.innerHTML === p) && (eight.innerHTML === p)) ||
        ((three.innerHTML === p) && (six.innerHTML === p) && (nine.innerHTML === p)) ||
        ((one.innerHTML === p) && (five.innerHTML === p) && (nine.innerHTML === p)) ||
        ((seven.innerHTML === p) && (five.innerHTML === p) && (three.innerHTML === p))) {
        console.log("WIN!");
        if (p1 === p) {
            console.log("P1 WINS!");
            bottomPrompt.innerHTML = "P1 WINS!";
            gameOver = true;
            p1Wins++;
        }
        else if (p2 === p) {
            console.log("P2 WINS!");
            bottomPrompt.innerHTML = "P2 WINS";
            gameOver = true;
            p2Wins++;
        }
        else if (turnsTaken === 8) {
            console.log("IT'S A TIE!");
            bottomPrompt.innerHTML = "IT'S A TIE!";
            gameOver = true;
        }
        scoreboard.innerHTML = `P1 ${p1Wins} - ${p2Wins} P2`;
    }
}

// restartButton.addEventListener('click', (event) => {
//     if (gameOver === true) {
//         restart();
//     }
// });

// function restart() {
restartButton.addEventListener('click', (event) => {
    gameOver = true;
    topPrompt.innerHTML = "CHOOSE MODE:";
    restartButton.style.display = "none";
    vsHumanButton.style.display = "inline";
    vsCompButton.style.display = "inline";
    hardModeButton.style.display = "inline";
    boxes.forEach(box => {
        box.innerHTML = "1";
        box.style.color = "white";
    });
    turnsTaken = 0;
    bottomPrompt.innerHTML = "AWAITING MATCH...";
});