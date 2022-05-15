
let idFirst = document.querySelector("#first");
let idSecond = document.querySelector("#second");
let idThird = document.querySelector("#third");
let idFourth = document.querySelector("#fourth");
let idFifth = document.querySelector("#fifth");
let idSixth = document.querySelector("#sixth");
let idSeventh = document.querySelector("#seventh");
let idEighth = document.querySelector("#eighth");
let idNinth = document.querySelector("#ninth");
let divGrid = document.querySelector(".divGrid")

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
    inputX = "⭕"
  } else {
    idFirst.innerText = "⭕";
    inputX = "❌"
  }
}

idFirst.addEventListener('click', markBox1)


function markBox2() {
  if(inputX === "❌") {
    idSecond.innerText = "❌";
    inputX = "⭕";
  } else {
    idSecond.innerText = "⭕";
    inputX = "❌";
  }
}

idSecond.addEventListener('click', markBox2)



function markBox3() {
  if(inputX === "❌") {
    idThird.innerText = "❌";
    inputX = "⭕";
  } else {
    idThird.innerText = "⭕";
    inputX = "❌";
  }
}

idThird.addEventListener('click', markBox3)



function markBox4() {
  if(inputX === "❌") {
    idFourth.innerText = "❌"
    inputX = "⭕"
  } else {
    idFourth.innerText = "⭕"
    inputX = "❌"
  }
}

idFourth.addEventListener('click', markBox4)



function markBox5() {
  if(inputX === "❌") {
    idFifth.innerText = "❌"
    inputX = "⭕"
  } else {
    idFifth.innerText = "⭕"
    inputX = "❌"
  }
}

idFifth.addEventListener('click', markBox5)



function markBox6() {
  if(inputX === "❌") {
    idSixth.innerText = "❌"
    inputX = "⭕"
  } else {
    idSixth.innerText = "⭕"
    inputX = "❌"
  }
}

idSixth.addEventListener('click', markBox6)



function markBox7() {
  if(inputX === "❌") {
    idSeventh.innerText = "❌"
    inputX = "⭕"
  } else {
    idSeventh.innerText = "⭕"
    inputX = "❌"
  }
}

idSeventh.addEventListener('click', markBox7)



function markBox8() {
  if(inputX === "❌") {
    idEighth.innerText = "❌"
    inputX = "⭕"
  } else {
    idEighth.innerText = "⭕"
    inputX = "❌"
  }
}

idEighth.addEventListener('click', markBox8)



function markBox9() {
  if(inputX === "❌") {
    idNinth.innerText = "❌"
    inputX = "⭕"
  } else {
    idNinth.innerText = "⭕"
    inputX = "❌"
  }
}

idNinth.addEventListener('click', markBox9)







function DisableBox1() {
    if (inputX === 0) {
        document.getElementById("first").value = "❌";
        document.getElementById("first").disabled = true;
        inputX = 1;
    }
    else {
        document.getElementById("first").value = "⭕";
        document.getElementById("first").disabled = true;
        inputX = 0;
    }
}

function DisableBox2() {
  if (inputX === 0) {
      document.getElementById("second").value = "❌";
      document.getElementById("second").disabled = true;
      inputX = 1;
  }
  else {
      document.getElementById("second").value = "⭕";
      document.getElementById("second").disabled = true;
      inputX = 0;
  }
}

function DisableBox3() {
  if (inputX === 0) {
      document.getElementById("third").value = "❌";
      document.getElementById("third").disabled = true;
      inputX = 1;
  }
  else {
      document.getElementById("third").value = "⭕";
      document.getElementById("third").disabled = true;
      inputX = 0;
  }
}

function DisableBox4() {
  if (inputX === 0) {
      document.getElementById("fourth").value = "❌";
      document.getElementById("fourth").disabled = true;
      inputX = 1;
  }
  else {
      document.getElementById("fourth").value = "⭕";
      document.getElementById("fourth").disabled = true;
      inputX = 0;
  }
}

function DisableBox5() {
  if (inputX === 0) {
      document.getElementById("fifth").value = "❌";
      document.getElementById("fifth").disabled = true;
      inputX = 1;
  }
  else {
      document.getElementById("fifth").value = "⭕";
      document.getElementById("fifth").disabled = true;
      inputX = 0;
  }
}

function DisableBox6() {
  if (inputX === 0) {
      document.getElementById("sixth").value = "❌";
      document.getElementById("sixth").disabled = true;
      inputX = 1;
  }
  else {
      document.getElementById("sixth").value = "⭕";
      document.getElementById("sixth").disabled = true;
      inputX = 0;
  }
}

function DisableBox7() {
  if (inputX === 0) {
      document.getElementById("seventh").value = "❌";
      document.getElementById("seventh").disabled = true;
      inputX = 1;
  }
  else {
      document.getElementById("seventh").value = "⭕";
      document.getElementById("seventh").disabled = true;
      inputX = 0;
  }
}

function DisableBox8() {
  if (inputX === 0) {
      document.getElementById("eighth").value = "❌";
      document.getElementById("eighth").disabled = true;
      inputX = 1;
  }
  else {
      document.getElementById("eighth").value = "⭕";
      document.getElementById("eighth").disabled = true;
      inputX = 0;
  }
}

function DisableBox9() {
  if (inputX === 0) {
      document.getElementById("ninth").value = "❌";
      document.getElementById("ninth").disabled = true;
      inputX = 1;
  }
  else {
      document.getElementById("ninth").value = "⭕";
      document.getElementById("ninth").disabled = true;
      inputX = 0;
  }
}

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

