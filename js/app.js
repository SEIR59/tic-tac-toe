
let idFirst = document.getElementById("first");
let idSecond = document.querySelector("#second");
let idThird = document.querySelector("#third");
let idFourth = document.querySelector("#fourth");
let idFifth = document.querySelector("#fifth");
let idSixth = document.querySelector("#sixth");
let idSeventh = document.querySelector("#seventh");
let idEighth = document.querySelector("#eighth");
let idNinth = document.querySelector("#ninth");
let divGrid = document.querySelector(".divGrid")
let p = document.getElementById('p')
const board = [idFirst, idSecond, idThird, idFourth, idFifth, idSixth, idSeventh, idEighth, idNinth]

let playerX = null
let playerO = null
let moveTracker = null

let inputX = "❌";


//conditional that checks if a box has been clicked and using the letter that has not been used 

//for loop that 

// variables for the logic like player 1 etc..

// use divs instead

// check for boolean if cell is empty

// check for winner every round

// create array win conditional or tie etc


// Created a function to /see if an x or o was in the box the function then disables that cell

function markBox1() {
  if(inputX === "❌") {
    idFirst.innerText = "❌";
    p.innerText = "⭕'s turn"
    idFirst = idFirst.disabled
    inputX = "⭕"
    
  } else if(inputX === "⭕"){
    idFirst.innerText = "⭕";
    p.innerText = "❌'s turn"
    idFirst = idFirst.disabled 
    inputX = "❌"
   } 
}

idFirst.addEventListener('click', markBox1)


function markBox2() {
  if(inputX === "❌") {
    idSecond.innerText = "❌";
    p.innerText = "⭕'s turn"
    idSecond = idSecond.disabled
    inputX = "⭕";
    
  } else {
    idSecond.innerText = "⭕";
    p.innerText = "❌'s turn"
    inputX = "❌";
    idSecond = idSecond.disabled 
  }
}

idSecond.addEventListener('click', markBox2)



function markBox3() {
  if(inputX === "❌") {
    idThird.innerText = "❌";
    p.innerText = "⭕'s turn"
    inputX = "⭕";
    idThird = idThird.disabled
  } else {
    idThird.innerText = "⭕";
    p.innerText = "❌'s turn"
    inputX = "❌";
    idThird = idThird.disabled
  }
}

idThird.addEventListener('click', markBox3)



function markBox4() {
  if(inputX === "❌") {
    idFourth.innerText = "❌"
    p.innerText = "⭕'s turn"
    inputX = "⭕"
    idFourth = idFourth.disabled
  } else {
    idFourth.innerText = "⭕"
    p.innerText = "❌'s turn"
    inputX = "❌"
    idFourth = idFourth.disabled
  }
}

idFourth.addEventListener('click', markBox4)



function markBox5() {
  if(inputX === "❌") {
    idFifth.innerText = "❌"
    p.innerText = "⭕'s turn"
    inputX = "⭕"
    idFifth = idFifth.disabled
  } else {
    idFifth.innerText = "⭕"
    p.innerText = "❌'s turn"
    inputX = "❌"
    idFifth = idFifth.disabled
  }
}

idFifth.addEventListener('click', markBox5)



function markBox6() {
  if(inputX === "❌") {
    idSixth.innerText = "❌"
    p.innerText = "⭕'s turn"
    inputX = "⭕"
    idSixth = idSixth.disabled

  } else {
    idSixth.innerText = "⭕"
    p.innerText = "❌'s turn"
    inputX = "❌"
    idSixth = idSixth.disabled
  }
}

idSixth.addEventListener('click', markBox6)



function markBox7() {
  if(inputX === "❌") {
    idSeventh.innerText = "❌"
    p.innerText = "⭕'s turn"
    inputX = "⭕"
    idSeventh = idSeventh.disabled
  } else {
    idSeventh.innerText = "⭕"
    p.innerText = "❌'s turn"
    inputX = "❌"
    idSeventh = idSeventh.disabled
  }
}

idSeventh.addEventListener('click', markBox7)



function markBox8() {
  if(inputX === "❌") {
    idEighth.innerText = "❌"
    p.innerText = "⭕'s turn"
    inputX = "⭕"
    idEighth = idEighth.disabled
  } else {
    idEighth.innerText = "⭕"
    p.innerText = "❌'s turn"
    inputX = "❌"
    idEighth = idEighth.disabled
  }
}

idEighth.addEventListener('click', markBox8)



function markBox9() {
  if(inputX === "❌") {
    idNinth.innerText = "❌"
    p.innerText = "⭕'s turn"
    inputX = "⭕"
    idNinth = idNinth.disabled
  } else {
    idNinth.innerText = "⭕"
    p.innerText = "❌'s turn"
    inputX = "❌"
    idNinth = idNinth.disabled
  }
}

idNinth.addEventListener('click', markBox9)



//took away second function for disabling squares





function reset() {
  location.reload();
  document.getElementById('first').value = '';
  document.getElementById("second").value = '';
  document.getElementById("third").value = '';
  document.getElementById("fourth").value = '';
  document.getElementById("fifth").value = '';
  document.getElementById("sixth").value = '';
  document.getElementById("seventh").value = '';
  document.getElementById("eighth").value = '';
  document.getElementById("ninth").value = '';

}

document.querySelector('#reset-button').addEventListener('click', reset)

console.log('wtf happened')

//working on solution for checking the answers now