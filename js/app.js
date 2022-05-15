const restartBtn = document.getElementsByClassName('button')

//This array selects the 9 boxes and puts them in an array
//The idea behind this is to not have to 
//write the null spaces one by one 
//but make js do it for us//
const box = Array.from(document.getElementsByClassName('box'))

let winner = "You've won!"
const O_TEXT = "O"
 const X_TEXT = "X"
 let currentPlayer = X_TEXT
 let spaces = Array(9).fill(null)

 console.log(spaces)

const startGame = () => (
    box.forEach(box => box.addEventListener('click', boxClicked))
)

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        
        if(playerHasWon() !==false){
            playerText = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()
            alert (winner)
            
        }
        
        // Statement to change between X and O. if current player == X_TEXT
        // then change it to 0_text or else change it to X_TEXT 
        // this also overrides the null space to any od the two options
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return[a,b,c]
        }
    
    }
    return false
}

button.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    box.forEach(box => {
        box.innerText = ''
    })

    playerText = 'Tic Tac Toe'

    currentPlayer = X_TEXT
}
startGame()