
/*-----FUNCTION__CHANGING BOX IMAGES & TAKE TURNS-----*/
const photo = document.querySelector('img');
const srcZero = "image/Screen Shot 2022-05-14 at 9.00.12 PM.png";
const srcOne = "image/circle-png.webp";
const srcTwo = "image/527-5271560_png-file-svg-x-vector.png";

//make a flag variable indicating whose turn it is.
let p1 = 2;
//function chaning grid image and the flag variable
function takeTurn_1(e) {

    if (p1 === 1) {
        document.getElementById("r1").src = srcOne;
        document.getElementById("b1").setAttribute("disabled", "disabled");
        p1 = 0;
        oChoices.push(1);
    }
    else if (p1 === 0) {
        document.getElementById("r1").src = srcTwo;
        document.getElementById("b1").setAttribute("disabled", "disabled");
        p1 = 1;
        xChoices.push(1);
    }
};
function takeTurn_2() {
    if (p1 === 1) {
        document.getElementById("r2").src = srcOne;
        document.getElementById("b2").setAttribute("disabled", "disabled");
        p1 = 0;
        oChoices.push(2);
    }
    else if (p1 === 0) {
        document.getElementById("r2").src = srcTwo;
        document.getElementById("b2").setAttribute("disabled", "disabled");
        p1 = 1;
        xChoices.push(2);
    }
};
function takeTurn_3() {
    if (p1 === 1) {
        document.getElementById("r3").src = srcOne;
        document.getElementById("b3").setAttribute("disabled", "disabled");
        p1 = 0;
        oChoices.push(3);
    }
    else if (p1 === 0) {
        document.getElementById("r3").src = srcTwo;
        document.getElementById("b3").setAttribute("disabled", "disabled");
        p1 = 1;
        xChoices.push(3);
    }
};
function takeTurn_4() {
    if (p1 === 1) {
        document.getElementById("r4").src = srcOne;
        document.getElementById("b4").setAttribute("disabled", "disabled");
        p1 = 0;
        oChoices.push(4);
    }
    else if (p1 === 0) {
        document.getElementById("r4").src = srcTwo;
        document.getElementById("b4").setAttribute("disabled", "disabled");
        p1 = 1;
        xChoices.push(4);
    }
};
function takeTurn_5() {
    if (p1 === 1) {
        document.getElementById("r5").src = srcOne;
        document.getElementById("b5").setAttribute("disabled", "disabled");
        p1 = 0;
        oChoices.push(5);
    }
    else if (p1 === 0) {
        document.getElementById("r5").src = srcTwo;
        document.getElementById("b5").setAttribute("disabled", "disabled");
        p1 = 1;
        xChoices.push(5);
    }
};
function takeTurn_6() {
    if (p1 === 1) {
        document.getElementById("r6").src = srcOne;
        document.getElementById("b6").setAttribute("disabled", "disabled");
        p1 = 0;
        oChoices.push(6);
    }
    else if (p1 === 0) {
        document.getElementById("r6").src = srcTwo;
        document.getElementById("b6").setAttribute("disabled", "disabled");
        p1 = 1;
        xChoices.push(6);
    }
};
function takeTurn_7() {
    if (p1 === 1) {
        document.getElementById("r7").src = srcOne;
        document.getElementById("b7").setAttribute("disabled", "disabled");
        p1 = 0;
        oChoices.push(7);
    }
    else if (p1 === 0) {
        document.getElementById("r7").src = srcTwo;
        document.getElementById("b7").setAttribute("disabled", "disabled");
        p1 = 1;
        xChoices.push(7);
    }
};
function takeTurn_8() {
    if (p1 === 1) {
        document.getElementById("r8").src = srcOne;
        document.getElementById("b8").setAttribute("disabled", "disabled");
        p1 = 0;
        oChoices.push(8);
    }
    else if (p1 === 0) {
        document.getElementById("r8").src = srcTwo;
        document.getElementById("b8").setAttribute("disabled", "disabled");
        p1 = 1;
        xChoices.push(8);
    }
};
function takeTurn_9() {
    if (p1 === 1) {
        document.getElementById("r9").src = srcOne;
        document.getElementById("b9").setAttribute("disabled", "disabled");
        p1 = 0;
        oChoices.push(9);
    }
    else if (p1 === 0) {
        document.getElementById("r9").src = srcTwo;
        document.getElementById("b9").setAttribute("disabled", "disabled");
        p1 = 1;
        xChoices.push(9);
    }
};




/*-----FUNCTION__COMMENTARY-----*/

function saying() {

    const commentary = document.getElementById("turn");

    if (p1 === 1) {
        commentary.innerText = "O player's turn!";
        commentary.style.fontSize = "28px"
    }
    else if (p1 === 0) {
        commentary.innerText = "X player's turn!";
        commentary.style.fontSize = "28px"
    }
    else if (p1 === 3) {
        commentary.innerText = "O player Won!";
        commentary.style.fontSize = "54px"
    }
    else if (p1 === 4){
        commentary.innerText = "X player Won!";
        commentary.style.fontSize = "54px"
    }
    else if (p1 === 5){
        commentary.innerText = "Draw!";
        commentary.style.fontSize = "54px"
    }
    else if (p1 === 6){
        commentary.innerText = "O player won 3 games in a row! O player is the winner.";
        commentary.style.fontSize = "54px"
    }
    else if (p1 === 7){
        commentary.innerText = "X player won 3 games in a row! X player is the winner.";
        commentary.style.fontSize = "54px"
    }
    else if (p1 === 2) {
        commentary.innerText = "O player's turn!";
        commentary.style.fontSize = "28px"
        p1 = 1;
    }
};



/*-----FUNCTION__who won???-----*/
let oChoices = [];
let xChoices = [];
let winChoices = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]


function whoWin() {
    function multiCheck(arr, values) {
        return values.every(value => {
            return arr.includes(value);
        });
    };

    if (multiCheck(xChoices, winChoices[0]) === true) {
        p1 = 4;
        saying();
        xWinCounts +=1;
        final();
    }
    else if (multiCheck(xChoices, winChoices[1]) === true) {
        p1 = 4;
        saying();
        xWinCounts +=1;
        final();
    }
    else if (multiCheck(xChoices, winChoices[2]) === true) {
        p1 = 4;
        saying();
        xWinCounts +=1;
        final();
    }
    else if (multiCheck(xChoices, winChoices[3]) === true) {
        p1 = 4;
        saying();
        xWinCounts +=1;
        final();
    }
    else if (multiCheck(xChoices, winChoices[4]) === true) {
        p1 = 4;
        saying();
        xWinCounts +=1;
        final();
    }
    else if (multiCheck(xChoices, winChoices[5]) === true) {
        p1 = 4;
        saying();
        xWinCounts +=1;
        final();
    }
    else if (multiCheck(xChoices, winChoices[6]) === true) {
        p1 = 4;
        saying();
        xWinCounts +=1;
        final();
    }
    else if (multiCheck(xChoices, winChoices[7]) === true) {
        p1 = 4;
        saying();
        xWinCounts +=1;
        final();
    }
   
   
    //O wining check starts here
    else if (multiCheck(oChoices, winChoices[0]) === true) {
        p1 = 3;
        saying();
        oWinCounts +=1;
        final();
    }
    else if (multiCheck(oChoices, winChoices[1]) === true) {
        p1 = 3;
        saying();
        oWinCounts +=1;
        final();
    }
    else if (multiCheck(oChoices, winChoices[2]) === true) {
        p1 = 3;
        saying();
        oWinCounts +=1;
        final();
    }
    else if (multiCheck(oChoices, winChoices[3]) === true) {
        p1 = 3;
        saying();
        oWinCounts +=1;
        final();
    }
    else if (multiCheck(oChoices, winChoices[4]) === true) {
        p1 = 3;
        saying();
        oWinCounts +=1;
        final();
    }
    else if (multiCheck(oChoices, winChoices[5]) === true) {
        p1 = 3;
        saying();
        oWinCounts +=1;
        final();
    }
    else if (multiCheck(oChoices, winChoices[6]) === true) {
        p1 = 3;
        saying();
        oWinCounts +=1;
        final();
    }
    else if (multiCheck(oChoices, winChoices[7]) === true) {
        p1 = 3;
        saying();
        oWinCounts +=1;
        final();
    }

    //Draw condition
    else if (xChoices.length+oChoices.length === 9 && p1 != 3 && p1 !=4) {
        p1 = 5;
        saying();
    }
 

};

/*-----FUNCTION__Track Player's win-----*/
let oWinCounts = 0
let xWinCounts = 0

function final(){
if (oWinCounts - xWinCounts === 3){
    p1 = 6;
    saying();
}
else if (xWinCounts - oWinCounts === 3){
    p1 = 7;
    saying();
}
}





/*-----FUNCTION__RESET ALL GRID BUTTONS-----*/

function resetGame() {
    console.log("reset");

    p1 = 2;
 
    //going back to the default white image
    document.getElementById("r1").src = srcZero;
    document.getElementById("r2").src = srcZero;
    document.getElementById("r3").src = srcZero;
    document.getElementById("r4").src = srcZero;
    document.getElementById("r5").src = srcZero;
    document.getElementById("r6").src = srcZero;
    document.getElementById("r7").src = srcZero;
    document.getElementById("r8").src = srcZero;
    document.getElementById("r9").src = srcZero;
    //make the buttons enabled again
    document.getElementById("b1").removeAttribute("disabled");
    document.getElementById("b2").removeAttribute("disabled");
    document.getElementById("b3").removeAttribute("disabled");
    document.getElementById("b4").removeAttribute("disabled");
    document.getElementById("b5").removeAttribute("disabled");
    document.getElementById("b6").removeAttribute("disabled");
    document.getElementById("b7").removeAttribute("disabled");
    document.getElementById("b8").removeAttribute("disabled");
    document.getElementById("b9").removeAttribute("disabled");

    console.log(p1);
    oChoices = [];
    xChoices = [];
    saying();
    
  
}



//
/*-----EVENTLISTENER BUTTONS-----*/
//

/*-----ADDING EVENT LISTNER TO GRID BUTTON-----*/
document.querySelector('#b1').addEventListener('click', (e) => {
    takeTurn_1(); saying(); whoWin();
});
document.querySelector('#b2').addEventListener('click', (e) => {
    takeTurn_2(); saying(); whoWin();
});
document.querySelector('#b3').addEventListener('click', (e) => {
    takeTurn_3(); saying(); whoWin();
});
document.querySelector('#b4').addEventListener('click', (e) => {
    takeTurn_4(); saying(); whoWin();
});
document.querySelector('#b5').addEventListener('click', (e) => {
    takeTurn_5(); saying(); whoWin();
});
document.querySelector('#b6').addEventListener('click', (e) => {
    takeTurn_6(); saying(); whoWin();
});
document.querySelector('#b7').addEventListener('click', (e) => {
    takeTurn_7(); saying(); whoWin();
});
document.querySelector('#b8').addEventListener('click', (e) => {
    takeTurn_8(); saying(); whoWin();
});
document.querySelector('#b9').addEventListener('click', (e) => {
    takeTurn_9(); saying(); whoWin();
});

/*-----ADDING EVENT LISTNER TO RESET BUTTON-----*/
document.querySelector('.reset').addEventListener('click', () => {
    resetGame();
});