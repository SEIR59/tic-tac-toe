
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


let inputX = "❌";


//conditional that checks if a box has been clicked and using the letter that has not been used 

//for loop that 

// variables for the logic like player 1 etc..

// use divs instead

// check for boolean if cell is empty

// check for winner every round

// create array win conditional or tie etc


function winCheck(){
  let id1 = document.getElementById('first').innerText
  let id2 = document.getElementById('second').innerText
  let id3 = document.getElementById('third').innerText
  let id4 = document.getElementById('fourth').innerText
  let id5 = document.getElementById('fifth').innerText
  let id6 = document.getElementById('sixth').innerText
  let id7 = document.getElementById('seventh').innerText
  let id8 = document.getElementById('eighth').innerText
  let id9 = document.getElementById('ninth').innerText
  
  if((id1 ===  '❌') && (id2 === '❌') && (id3 === '❌')) {
  p.innerHTML = "Player ❌ won";
 idFourth = idFourth.disabled
 idFifth = idFifth.disabled
 idSixth = idSixth.disabled
 idSeventh = idSeventh.disabled
 idEighth = idEighth.disabled
 idNinth = idNinth.disabled
  
 } else if((id4 ===  '❌') && (id5 === '❌') && (id6 === '❌')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ❌ won";
  idFirst = idFirst.disabled
  idSecond = idSecond.disabled 
  idThird = idThird.disabled
  idSeventh = idSeventh.disabled 
  idEighth = idEighth.disabled 
  idNinth = idNinth.disabled 
  
} else if((id7 ===  '❌') && (id8 === '❌') && (id9 === '❌')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ❌ won";
  idFirst = idFirst.disabled
  idSecond = idSecond.disabled 
  idThird = idThird.disabled
  idFourth = idFourth.disabled
  idFifth = idFifth.disabled 
  idSixth = idSixth.disabled
  
} else if((id1 ===  '❌') && (id4 === '❌') && (id7 === '❌')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ❌ won";
  
  idSecond = idSecond.disabled 
  idThird = idThird.disabled
  idFifth = idFifth.disabled 
  idSixth = idSixth.disabled
  idEighth = idEighth.disabled 
  idNinth = idNinth.disabled
  
} else if((id2 ===  '❌') && (id5 === '❌') && (id8 === '❌')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ❌ won";
  idThird = idThird.disabled
  idFourth = idFourth.disabled
  idFifth = idFifth.disabled 
  idSixth = idSixth.disabled
  idSeventh = idSeventh.disabled 
  idNinth = idNinth.disabled
  
} else if((id3 ===  '❌') && (id6 === '❌') && (id9 === '❌')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ❌ won";
  idFirst = idFirst.disabled
  idSecond = idSecond.disabled
  idFourth = idFourth.disabled
  idFifth = idFifth.disabled 
  idSeventh = idSeventh.disabled
  idEighth = idEighth.disabled 
  
  
} else if((id1 ===  '❌') && (id5 === '❌') && (id9 === '❌')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ❌ won";
  idSecond = idSecond.disabled
  idThird = idThird.disabled
  idFourth = idFourth.disabled
  idSixth = idSixth.disabled
  idSeventh = idSeventh.disabled
  idEighth = idEighth.disabled 
  
  
} else if((id3 ===  '❌') && (id5 === '❌') && (id7 === '❌')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ❌ won";
  idFirst = idFirst.disabled
  idSecond = idSecond.disabled
  idFourth = idFourth.disabled
  idSixth = idSixth.disabled
  idSeventh = idSeventh.disabled
  idEighth = idEighth.disabled
  idNinth = idNinth.disabled 
  
  
} else if((id1 ===  '⭕') && (id2 === '⭕') && (id3 === '⭕')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ⭕ won";
  idFourth = idFourth.disabled
  idFifth = idFifth.disabled 
  idSixth = idSixth.disabled
  idSeventh = idSeventh.disabled 
  idEighth = idEighth.disabled 
  idNinth = idNinth.disabled 
  
} else if((id4 ===  '⭕') && (id5 === '⭕') && (id6 === '⭕')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ⭕ won";
  idFirst = idFirst.disabled
  idSecond = idSecond.disabled 
  idThird = idThird.disabled
  idSeventh = idSeventh.disabled 
  idEighth = idEighth.disabled 
  idNinth = idNinth.disabled 
  
} else if((id7 ===  '⭕') && (id8 === '⭕') && (id9 === '⭕')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ⭕ won";
  idFirst = idFirst.disabled
  idSecond = idSecond.disabled 
  idThird = idThird.disabled
  idFourth = idFourth.disabled
  idFifth = idFifth.disabled 
  idSixth = idSixth.disabled
  
} else if((id1 ===  '⭕') && (id4 === '⭕') && (id7 === '⭕')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ⭕ won";
  
  idSecond = idSecond.disabled 
  idThird = idThird.disabled
  idFifth = idFifth.disabled 
  idSixth = idSixth.disabled
  idEighth = idEighth.disabled 
  idNinth = idNinth.disabled
  
} else if((id2 ===  '⭕') && (id5 === '⭕') && (id8 === '⭕')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ⭕ won";
  idThird = idThird.disabled
  idFourth = idFourth.disabled
  idFifth = idFifth.disabled 
  idSixth = idSixth.disabled
  idSeventh = idSeventh.disabled 
  idNinth = idNinth.disabled
  
} else if((id3 ===  '⭕') && (id6 === '⭕') && (id9 === '⭕')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ⭕ won";
  idFirst = idFirst.disabled
  idSecond = idSecond.disabled
  idFourth = idFourth.disabled
  idFifth = idFifth.disabled 
  idSeventh = idSeventh.disabled
  idEighth = idEighth.disabled 
  
  
} else if((id1 ===  '⭕') && (id5 === '⭕') && (id9 === '⭕')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ⭕ won";
  idSecond = idSecond.disabled
  idThird = idThird.disabled
  idFourth = idFourth.disabled
  idSixth = idSixth.disabled
  idSeventh = idSeventh.disabled
  idEighth = idEighth.disabled 
  
  
} else if((id3 ===  '⭕') && (id5 === '⭕') && (id7 === '⭕')) {
  console.log("winnerwinner")
  p.innerHTML = "Player ⭕ won";
  idFirst = idFirst.disabled
  idSecond = idSecond.disabled
  idFourth = idFourth.disabled
  idSixth = idSixth.disabled
  idSeventh = idSeventh.disabled
  idEighth = idEighth.disabled
  idNinth = idNinth.disabled 
  
  
} else if ((id1 === '❌' || id1 === '⭕') && (id2 === '❌'
|| id2 === '⭕') && (id3 === '❌' || id3 === '⭕') &&
(id4 === '❌' || id4 === '⭕') && (id5 === '❌' ||
id5 === '⭕') && (id6 === '❌' || id6 === '⭕') &&
(id7 === '❌' || id7 === '⭕') && (id8 === '❌' ||
id8 === '⭕') && (id9 === '❌' || id9 === '⭕')) {
    p.innerHTML = "Tie game!";
    
}

}


// Created a function to /see if an x or o was in the box the function then disables that cell

function markBox1() {
  if(inputX === "❌") {
    idFirst.innerText = "❌";
    p.innerText = "⭕'s turn";
    inputX = "⭕";
    idFirst.disabled = true;
    
  } else if(inputX === "⭕"){
    idFirst.innerText = "⭕";
    p.innerHTML = "❌'s turn";
    inputX = "❌";
    idFirst.disabled = true;
   } 
}


idFirst.addEventListener('click', markBox1)
idFirst.addEventListener('click', winCheck)


function markBox2() {
  if(inputX === "❌") {
    p.innerText = "⭕'s turn"
    idSecond.innerText = "❌";
    idSecond.disabled = true
    inputX = "⭕";
    
  } else {
    idSecond.innerText = "⭕";
    p.innerText = "❌'s turn"
    inputX = "❌";
    idSecond.disabled = true
  }
}

idSecond.addEventListener('click', markBox2)
idSecond.addEventListener('click', winCheck)




function markBox3() {
  if(inputX === "❌") {
    idThird.innerText = "❌";
    p.innerText = "⭕'s turn"
    inputX = "⭕";
    idThird.disabled = true
  } else if(inputX === "⭕") {
    idThird.innerText = "⭕";
    p.innerText = "❌'s turn"
    inputX = "❌";
    idThird.disabled = true
  }
}

idThird.addEventListener('click', markBox3)
idThird.addEventListener('click', winCheck)



function markBox4() {
  if(inputX === "❌") {
    idFourth.innerText = "❌"
    p.innerText = "⭕'s turn"
    inputX = "⭕"
    idFourth.disabled = true
  } else if(inputX === "⭕"){
    idFourth.innerText = "⭕"
    p.innerText = "❌'s turn"
    inputX = "❌"
    idFourth.disabled = true
  } 
}

idFourth.addEventListener('click', markBox4)
idFourth.addEventListener('click', winCheck)



function markBox5() {
  if(inputX === "❌") {
    idFifth.innerText = "❌"
    p.innerText = "⭕'s turn"
    inputX = "⭕"
    idFifth.disabled = true 
  
  } else {
    idFifth.innerText = "⭕"
    p.innerText = "❌'s turn"
    inputX = "❌"
    idFifth.disabled = true
  }
}

idFifth.addEventListener('click', markBox5)
idFifth.addEventListener('click', winCheck)



function markBox6() {
  if(inputX === "❌") {
    idSixth.innerText = "❌"
    p.innerText = "⭕'s turn"
    inputX = "⭕"
    idSixth.disabled = true

  } else {
    idSixth.innerText = "⭕"
    p.innerText = "❌'s turn"
    inputX = "❌"
    idSixth.disabled = true
  }
}

idSixth.addEventListener('click', markBox6)
idSixth.addEventListener('click', winCheck)



function markBox7() {
  if(inputX === "❌") {
    idSeventh.innerText = "❌"
    p.innerText = "⭕'s turn"
    inputX = "⭕"
    idSeventh.disabled = true
  } else {
    idSeventh.innerText = "⭕"
    p.innerText = "❌'s turn"
    inputX = "❌"
    idSeventh.disabled = true
  }
}

idSeventh.addEventListener('click', markBox7)
idSeventh.addEventListener('click', winCheck)


function markBox8() {
  if(inputX === "❌") {
    idEighth.innerText = "❌"
    p.innerText = "⭕'s turn"
    inputX = "⭕"
    idEighth.disabled = true
  } else {
    idEighth.innerText = "⭕"
    p.innerText = "❌'s turn"
    inputX = "❌"
    idEighth.disabled = true
  }
}

idEighth.addEventListener('click', markBox8)
idEighth.addEventListener('click', winCheck)



function markBox9() {
  if(inputX === "❌") {
    idNinth.innerText = "❌"
    p.innerText = "⭕'s turn"
    inputX = "⭕"
    idNinth.disabled = true
  } else {
    idNinth.innerText = "⭕"
    p.innerText = "❌'s turn"
    inputX = "❌"
    idNinth.disabled = true 
  }
}

idNinth.addEventListener('click', markBox9)
idNinth.addEventListener('click', winCheck)



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

//checking tie

