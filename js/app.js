let playCount = 0
let xWinsCount = 0
let oWinsCount = 0

const displayWins = () => {
    let xScoreDisplay = document.getElementById('xScore')
        xScoreDisplay.innerText = `Number of games X has won: ${xWinsCount}`
    let oScoreDisplay = document.getElementById('oScore')
        oScoreDisplay.innerText = `Number of games O has won: ${oWinsCount}`
}
displayWins()


const showTurn = () => { 
    const playerTurn = document.getElementById('playerTurn')
    playerTurn.innerText =  `It is ${playCount % 2 === 0 ? `X's` : `O's`} turn`
}
showTurn()

//assign variables to HTML button inputs
const btnOne = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')

const rulesPopup = document.getElementById('rulesPopup')
const playLocalBtn = document.getElementById('playLocal')
const endGameText = document.getElementById('endGameText')
const endGameText2 = document.getElementById('endGameText2')
const smallGameBoardPic = document.getElementsByClassName('smallGameBoardPic')

const buttonsArr = [one, two, three, four, five, six, seven, eight, nine]


for (let i = 0; i < buttonsArr.length; i++) {
    buttonsArr[i].addEventListener("click", changeBtn)
}

function changeBtn() {
    currentBtn = event.target

    if (currentBtn.value){
        currentBtn.value == null
    } else 
    if (playCount % 2 === 0) {
        currentBtn.value = "X"
        playCount++
    } else {
        currentBtn.value = "O"
        playCount++
    }
    currentBtn.classList.add('active')
    playGame()
    showTurn()
}

// function changeBtn() {
//     currentBtn = event.target

//     if (currentBtn.value){
//         currentBtn.value == null
//     } else {
//         currentBtn.value = "X"
//         playCount++
//     } 
//     currentBtn.classList.add('active')
//     playGame()
//     showTurn()

//     computerChoice = Math.floor(Math.random() * buttonsArr.length)
//     computerBtn = buttonsArr[computerChoice]
//     if (computerBtn.value){
//         while (computerBtn.value){
//         computerBtn.value == null
//         computerChoice = Math.floor(Math.random() * buttonsArr.length)
//         computerBtn = buttonsArr[computerChoice]
//         console.log('continue loop')
//         continue
//         }
//     } 
//     computerBtn.value = "O"
//     playCount ++;
//     playGame()
//     showTurn()
// }

    
    
   
   




//this will be to change active on and off
const changeClasses = () => {
    endGameText.classList.add('active')
    rulesPopup.classList.add('active')
    for (let i=0; i<smallGameBoardPic.length; i++){
        
        // need to check this, i'm not using i
        smallGameBoardPic.classList.add('active')
    }
    endGameText.style.color = '#d5ff61'
}

//this disables all buttons before changeClasses() runs
const disableBtns = () => {
    for (let i = 0; i < buttonsArr.length; i++) {
        buttonsArr[i].disabled = true;
    }
}

const player1Wins = () => {
    xWinsCount++
    endGameText.innerText = `X WINS!!`
    playerTurn.innerText = 'X WINS!!'
    displayWins()
    disableBtns()
    XRain = setInterval(makeRainingXs, 100)
    setTimeout(() => clearInterval(XRain), 5000)
    setTimeout(changeClasses, 5000) 
}

const player2Wins = () => {
    oWinsCount++
    endGameText.innerText = `O WINS!!`
    playerTurn.innerText = 'O WINS!!'
    displayWins()
    disableBtns()
    ORain = setInterval(makeRainingOs, 100)
    setTimeout(() => clearInterval(ORain), 5000)
    setTimeout(changeClasses, 5000) 
}


function playGame() {
    if (((one.value == "X") && (two.value == "X") && (three.value == "X")) ||
        ((four.value == "X") && (five.value == "X") && (six.value == "X")) ||
        ((seven.value == "X") && (eight.value == "X") && (nine.value == "X")) ||
        ((one.value == "X") && (four.value == "X") && (seven.value == "X")) ||
        ((two.value == "X") && (five.value == "X") && (eight.value == "X")) ||
        ((three.value == "X") && (six.value == "X") && (nine.value == "X")) ||
        ((one.value == "X") && (five.value == "X") && (nine.value == "X")) ||
        ((three.value == "X") && (five.value == "X") && (seven.value == "X"))) 
        player1Wins()

    if (((one.value == "O") && (two.value == "O") && (three.value == "O")) ||
        ((four.value == "O") && (five.value == "O") && (six.value == "O")) ||
        ((seven.value == "O") && (eight.value == "O") && (nine.value == "O")) ||
        ((one.value == "O") && (four.value == "O") && (seven.value == "O")) ||
        ((two.value == "O") && (five.value == "O") && (eight.value == "O")) ||
        ((three.value == "O") && (six.value == "O") && (nine.value == "O")) ||
        ((one.value == "O") && (five.value == "O") && (nine.value == "O")) ||
        ((three.value == "O") && (five.value == "O") && (seven.value == "O"))) 
        player2Wins()
    
    if (playCount == 9) {
        endGameText.innerText = `DRAW`
        setTimeout(changeClasses, 3000) 
        disableBtns()
    }
}


//this resets the playing board and resets playcount. This is called when pushing button on main
function resetGame() {
    for (let i = 0; i < buttonsArr.length; i++) {
        buttonsArr[i].value = ""
        buttonsArr[i].classList.remove('active')
        buttonsArr[i].disabled = false
        rulesPopup.classList.remove('active')
        endGameText.classList.remove('active')
        //display:none for any fallingXs that havent reached bottom yet
        fallingX = document.getElementsByClassName('fallingX')
        for (let i=0; i<fallingX.length; i++){
            fallingX[i].classList.add('active')
        }
        playCount = 0;
        showTurn()
    }
}


playLocalBtn.addEventListener('click', resetGame)






const colorsArr = ['#242c10', '#d5ff61', 'white']

function makeRainingXs (){
    const fallingX = document.createElement('div')
    fallingX.classList.add('fallingX')
    fallingX.style.left = Math.random() * 100 + 'vw'
    fallingX.style.zIndex = 1    
    fallingX.style.animationDuration = Math.random() * 1 + 4 + 's'
    fallingX.style.fontSize = Math.random() * 34 + 34 + 'px'
    fallingX.style.color = colorsArr[Math.floor(Math.random() * colorsArr.length)]
    fallingX.innerText = 'X WINS!!'
    document.body.appendChild(fallingX)
  }
  let XRain;
  

  function makeRainingOs (){
    const fallingO = document.createElement('div')
    fallingO.classList.add('fallingX')
    fallingO.style.left = Math.random() * 100 + 'vw'
    fallingO.style.zIndex = 1    
    fallingO.style.animationDuration = Math.random() * 1 + 4 + 's'
    fallingO.style.fontSize = Math.random() * 34 + 34 + 'px'
    fallingO.style.color = colorsArr[Math.floor(Math.random() * colorsArr.length)]
    fallingO.innerText = 'O WINS!!'
    document.body.appendChild(fallingO)
  }
  let ORain;
  
  
  
  


// ****** PLAY WITH THE COMPUTER MODE ******



// ******** TO-DO LIST **********


//media query stuff


// change the top text when someone wins to a picture of an x or o or draw

// animations -- flip grid buttons    do some cool hover effects