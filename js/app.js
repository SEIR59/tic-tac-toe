
//initialize button(s) and listeners
document.getElementById('resetbtn').addEventListener('click', function() {clearMoves()})

const allSquares = document.getElementsByClassName('square')
for(let i = 0; i < allSquares.length;i++){
    allSquares[i].addEventListener('click', ()=>{
        playerMove(event.target)
        console.log('click')
    })
}

//track turns of players and their movements
let currentTurn = 0
let p1 = []
let p2 = []

//function to do things when a player makes a move
const playerMove = (location) =>{
    //console.log('in playerMove')
    if(currentTurn === 0 && location.innerText===''){
        //things for player 1
        currentTurn = 1
        location.innerText = 'X'
    }else if (currentTurn === 1 && location.innerText===''){
        //things for player 2
            location.innerText = 'O' 
            currentTurn = 0  
    }
}

//function to see if somebody won
const checkForWins = () =>{
    //console.log('in checkForWins')
}

//function to reset the gameboard
const clearMoves = () =>{
    //console.log('in clearMoves')
    for(let i = 0; i<allSquares.length;i++){
        allSquares[i].innerText = '';
    }
    p1 = []
    p2 = []
}
