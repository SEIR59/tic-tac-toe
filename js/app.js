
/*-----FUNCTION__CHANGING BOX IMAGES & TAKE TURNS-----*/
const photo = document.querySelector('img');
const srcZero = "image/Screen Shot 2022-05-14 at 9.00.12 PM.png";
const srcOne = "image/circle-png.webp";
const srcTwo = "image/527-5271560_png-file-svg-x-vector.png";

let p1 = 1;

function takeTurn_1() {
    if (p1 === 1) {
        document.getElementById("r1").src = srcOne;
        document.getElementById("b1").setAttribute("disabled", "disabled");
        p1 = 0;
        console.log(p1);
    }
    else {
        document.getElementById("r1").src = srcTwo;
        document.getElementById("b1").setAttribute("disabled", "disabled");
        p1 = 1;
    }
};
function takeTurn_2() {
    if (p1 === 1) {
        document.getElementById("r2").src = srcOne;
        document.getElementById("b2").setAttribute("disabled", "disabled");
        p1 = 0;
    }
    else {
        document.getElementById("r2").src = srcTwo;
        document.getElementById("b2").setAttribute("disabled", "disabled");
        p1 = 1;
    }
};
function takeTurn_3() {
    if (p1 === 1) {
        document.getElementById("r3").src = srcOne;
        document.getElementById("b3").setAttribute("disabled", "disabled");
        p1 = 0;
    }
    else {
        document.getElementById("r3").src = srcTwo;
        document.getElementById("b3").setAttribute("disabled", "disabled");
        p1 = 1;
    }
};
function takeTurn_4() {
    if (p1 === 1) {
        document.getElementById("r4").src = srcOne;
        document.getElementById("b4").setAttribute("disabled", "disabled");
        p1 = 0;
    }
    else {
        document.getElementById("r4").src = srcTwo;
        document.getElementById("b4").setAttribute("disabled", "disabled");
        p1 = 1;
    }
};
function takeTurn_5() {
    if (p1 === 1) {
        document.getElementById("r5").src = srcOne;
        document.getElementById("b5").setAttribute("disabled", "disabled");
        p1 = 0;
    }
    else {
        document.getElementById("r5").src = srcTwo;
        document.getElementById("b5").setAttribute("disabled", "disabled");
        p1 = 1;
    }
};
function takeTurn_6() {
    if (p1 === 1) {
        document.getElementById("r6").src = srcOne;
        document.getElementById("b6").setAttribute("disabled", "disabled");
        p1 = 0;
    }
    else {
        document.getElementById("r6").src = srcTwo;
        document.getElementById("b6").setAttribute("disabled", "disabled");
        p1 = 1;
    }
};
function takeTurn_7() {
    if (p1 === 1) {
        document.getElementById("r7").src = srcOne;
        document.getElementById("b7").setAttribute("disabled", "disabled");
        p1 = 0;
    }
    else {
        document.getElementById("r7").src = srcTwo;
        document.getElementById("b7").setAttribute("disabled", "disabled");
        p1 = 1;
    }
};
function takeTurn_8() {
    if (p1 === 1) {
        document.getElementById("r8").src = srcOne;
        document.getElementById("b8").setAttribute("disabled", "disabled");
        p1 = 0;
    }
    else {
        document.getElementById("r8").src = srcTwo;
        document.getElementById("b8").setAttribute("disabled", "disabled");
        p1 = 1;
    }
};
function takeTurn_9() {
    if (p1 === 1) {
        document.getElementById("r9").src = srcOne;
        document.getElementById("b9").setAttribute("disabled", "disabled");
        p1 = 0;
    }
    else {
        document.getElementById("r9").src = srcTwo;
        document.getElementById("b9").setAttribute("disabled", "disabled");
        p1 = 1;
    }
};

/*-----FUNCTION__RESET ALL GRID BUTTONS-----*/

function resetGame(){
    console.log("rrrr");
    p1 = 1;
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
}

function call(){
    console.log("call");
};


// photo.setAttribute("src","srcOne")
// console.log(photo.src);



// const choosing1 = function (e){
// photo.src = srcOne;

// console.log(photo.src);
// };
// const choosing2 = function(e){
//  photo.src = srcTwo;
// };



// document.querySelector('.rectangle').addEventListener('click', placing2);
// document.getElementsByClassName('rectangle').addEventListener('click', placing);


// document.querySelector('#r1').addEventListener('click',()=>{
//     takeTurn_1();
// });
// document.querySelector('#r2').addEventListener('click',()=>{
//     takeTurn_2();
// });



/*-----ADDING EVENT LISTNER TO GRID BUTTON-----*/
document.querySelector('#b1').addEventListener('click', (e) => {
    takeTurn_1();
});
document.querySelector('#b2').addEventListener('click', (e) => {
    takeTurn_2();
});
document.querySelector('#b3').addEventListener('click', (e) => {
    takeTurn_3();
});
document.querySelector('#b4').addEventListener('click', (e) => {
    takeTurn_4();
});
document.querySelector('#b5').addEventListener('click', (e) => {
    takeTurn_5();
});
document.querySelector('#b6').addEventListener('click', (e) => {
    takeTurn_6();
});
document.querySelector('#b7').addEventListener('click', (e) => {
    takeTurn_7();
});
document.querySelector('#b8').addEventListener('click', (e) => {
    takeTurn_8();
});
document.querySelector('#b9').addEventListener('click', (e) => {
    takeTurn_9();
});

/*-----ADDING EVENT LISTNER TO RESET BUTTON-----*/
document.querySelector('.reset').addEventListener('click', () => {
    resetGame();
});