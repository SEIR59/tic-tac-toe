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
let turn = 0;
let board = document.getElementById("board");
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
    topPrompt.innerHTML = "Choose X or O";
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
    topPrompt.innerHTML = `Game on! You are ${p1}`
    bottomPrompt.style.display = "inline";
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
        let currentBox = this.id;
        console.log(currentBox); // Test log ?
        let currentValue = document.getElementById(currentBox).innerHTML;
        console.log(`Current value = ${currentValue}`)
        if (turn === 1) {
            if (currentValue !== p2) {
                console.log("empty!") // Test log;
                document.getElementById(currentBox).innerHTML = p1;
                document.getElementById(currentBox).style.color = "black";
                checkForWin(p1);
                p2Turn();
            }
        }
        else if (turn === 2) {
            if (currentValue !== p1) {
                console.log("empty!") // Test log;
                document.getElementById(currentBox).innerHTML = p2;
                document.getElementById(currentBox).style.color = "black";
                checkForWin(p2);
                p1Turn();
            }
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
    ((seven.innerHTML === p) && (five.innerHTML === p) && (three.innerHTML === p))) 
    {
        console.log("WIN!");
        if (p1 === p) {
            console.log("P1 WINS!");
            p1Wins++;
        }
        else if (p2 === p) {
            console.log("P2 WINS!");
            p2Wins++;
        }
        scoreboard.innerHTML = `P1 ${p1Wins} - ${p2Wins} P2`;
    }
    // ||
    // ((four.innerHTML && five.innerHTML && six.innerHTML) === p) ||
    // ((seven.innerHTML && eight.innerHTML && nine.innerHTML) === p) ||
    // ((one.innerHTML && four.innerHTML && seven.innerHTML) === p) ||
    // ((two.innerHTML && five.innerHTML && eight.innerHTML) === p) ||
    // ((three.innerHTML && six.innerHTML && nine.innerHTML) === p) ||
    // ((one.innerHTML && five.innerHTML && nine.innerHTML) === p) ||
    // ((seven.innerHTML && five.innerHTML && three.innerHTML) === p)) 

}