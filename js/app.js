// #region Functions - collapse this to line to jump to code.

//function to do things when a player makes a move. 
//IDs are structured as codes to win conditions. ID[0:2]-> verticles, ID[3:5]->horazontals, ID[6:7]->diagonals. Contains '1' in position if it helps that win condition. Sum of 3 in an array position means 3 connected, which = win.
//ID example: X chooses top left, middle, and bottom right. ID[6:7] for the divs are top left '10', middle '11, bottom right '10'. After all moves, X[6] === 3, which is a win, diagonal.
const playerMove = (lLocation) => {
    let location = ''
    if (lLocation == undefined) {
        location = ''
    } else {
        location = lLocation
    }
    let title = document.getElementById('title')
    let board = document.getElementById('gameboard')
    let gameOptionExit = 0
    //function to mark a move and respond to that marking.
    const markMove = (spot) => {
       
        let ids = ['10010010', '01010000', '00110001', '10001000', '01001011', '00101000', '10000101', '01000100', '00100110']
        //may need to edit this to establish path
        myPath += (ids.indexOf(spot.id) + 1)
        console.log(myPath)

        let id = spot.id.split('').map(function (x) { return Number(x) })
        if (currentTurn === 0) {
            spot.innerText = 'X'
            tieCheck += 1;
            currentTurn = 1
            title.innerText = `O's turn`
            //digest the event id and add it to player array to check for wins.
            for (let i = 0; i < id.length; i++) {
                X[i] += id[i];
                if (X[i] === 3) {
                    winnerFound('X')
                    gameOptionExit++
                    return
                }
            }
            if (tieCheck === 9) {
                winnerFound('')
                gameOptionExit++
                return
            }
            //remove square from availableSquares list for computers
            for (let i = 0; i < availableSquares.length; i++) {
                if (availableSquares[i] === location.id) {
                    availableSquares.splice(i, 1)
                    break
                }
            }
        } else {
            spot.innerText = 'O'
            tieCheck += 1;
            currentTurn = 0
            title.innerText = `X's turn`
            //digest the event id and add it to player array to check for wins.
            for (let i = 0; i < id.length; i++) {
                O[i] += id[i];
                if (O[i] === 3) {
                    winnerFound('O')
                    gameOptionExit++
                    return
                }
            }
        }
        //remove square from availableSquares list for computers
        for (let i = 0; i < availableSquares.length; i++) {
            if (availableSquares[i] === location.id) {
                availableSquares.splice(i, 1)
                break
            }
        }
    }
    //if a player clicks an available square, do stuff based off game option
    if ( location.innerText === '' || location === '') {
        
        //mark player move
        if (firstPlayer === 0 || (firstPlayer === 1 && currentTurn === 1) ) {
            console.log('text')
            markMove(location)
        }

        //if game option is 0, proceed with standard game flow.

        // gameOption 1 - vs Computer
        if (gameOption === 1 && gameOptionExit === 0) {
            //simple computer move, which removes its move from available squares
            const theMove = () => {
                boardClickOn(true)
                gameOptionClickOn(true)
                document.getElementById('xSlider').classList.remove('clickOff')
                markMove(document.getElementById(simpleComputerMoveID()))
            }
            boardClickOn(false)
            gameOptionClickOn(false)
            document.getElementById('xSlider').classList.add('clickOff')
            setTimeout(theMove, 1000)
            //gameOption 2 - vs algorithm
        } else if (gameOption === 2 && gameOptionExit === 0) {
            const advancedMove = () => {
                boardClickOn(true)
                gameOptionClickOn(true)
                markMove(document.getElementById(advancedComputer(myPath)))
                document.getElementById('xSlider').classList.remove('clickOff')
            }
            boardClickOn(false)
            gameOptionClickOn(false)
            document.getElementById('xSlider').classList.add('clickOff')
            setTimeout(advancedMove, 1000)

        }
    }
}

//function to see if somebody won
const winnerFound = (winner) => {
    document.getElementById('title').innerText = `${winner} wins!`
    //check who won, log a message, and update scores.
    if (winner === 'X') {
        console.log(`${winner}'s win!`)
        if (firstPlayer === 0) {
            currentScore[0]++
        } else {
            currentScore[1]++
        }
    } else if (winner === 'O') {
        console.log(`${winner}'s win!`)
        if (firstPlayer === 0) {
            currentScore[1]++
        } else {
            currentScore[0]++
        }

    } else {
        console.log('Tie')
        document.getElementById('title').innerText = `Booo. Tie.`
        currentScore[2]++
    }

    boardClickOn(false)
    for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].style.background = 'purple'
    }
    updateScoreboard()
    gameOptionClickOn()
}

//function to update the text of the scoreboard with the new score values
const updateScoreboard = () => {
    document.getElementById('sbX').innerText = `Player 1: ${currentScore[0]}`
    if (gameOption === 0) {
        document.getElementById('sbO').innerText = `Player 2: ${currentScore[1]}`
    } else if (gameOption === 1) {
        document.getElementById('sbO').innerText = `Computer: ${currentScore[1]}`
    } else {
        document.getElementById('sbO').innerText = `Algo: ${currentScore[1]}`
    }
    document.getElementById('sbT').innerText = `Ties: ${currentScore[2]}`
}

//function to reset the gameboard
const clearMoves = () => {
    //console.log('in clearMoves')
    for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].innerText = '';
    }
    X = [0, 0, 0, 0, 0, 0, 0, 0]
    O = [0, 0, 0, 0, 0, 0, 0, 0]
    currentTurn = 0;
    myPath = ''
    boardClickOn(true)
    for (let i = 0; i < allSquares.length; i++) {
        allSquares[i].style.background = 'white'
    }
    document.getElementById('title').innerText = `Let's play some TTT`
    tieCheck = 0;
    availableSquares = []
    for (let i = 0; i < allSquares.length; i++) {
        availableSquares.push(allSquares[i].id)
    }
    if (firstPlayer === 1) {
        playerMove()
    }
}

//function to toggle board click listening. true = on, false = off.
const boardClickOn = (bool) => {
    let board = document.getElementById('gameboard')
    if (bool === true) {
        board.classList.remove('clickOff')
    } else {
        board.classList.add('clickOff')
    }
}

//function to shift the clicked slider button right and all others left.
const moveSliderButton = (othertarget) => {
    const target = event.target.id

    //internal functino to move the button
    const toggleDirection = (id) => {
        document.getElementById('xSlider').classList.add('clickOff')
        setTimeout(document.getElementById('xSlider').classList.remove('clickOff'), 1200)
        let ele = document.getElementById(id)
        let style = getComputedStyle(ele).justifyContent
        let btns = document.getElementsByClassName('slider')
        if (style === 'left') {
            for (let i = 0; i < btns.length; i++) {
                btns[i].style.justifyContent = 'left'
            }
            ele.style.justifyContent = 'right'
        }
    }

    // conditions for when to move the button and update game option
    if (document.getElementById('gameOptions').classList.contains('clickOff')) {
        return
    } else {
        if (gameOption !== 0 && (target === 'PvPbtn' || target === 'PvPSlider')) {
            toggleDirection('PvPSlider')
            gameOption = 0
            clearMoves()
            currentScore = [0, 0, 0]
            updateScoreboard()
        } else if (gameOption !== 1 && (target === 'PvCbtn' || target === 'PvCSlider')) {
            toggleDirection('PvCSlider')
            gameOption = 1
            clearMoves()
            currentScore = [0, 0, 0]
            updateScoreboard()
        } else if (gameOption !== 2 && (target === 'PvAbtn' || target === 'PvASlider')) {
            toggleDirection('PvASlider')
            gameOption = 2
            clearMoves()
            currentScore = [0, 0, 0]
            updateScoreboard()
        }
    }
}

//function to run on game startup. Start listeners and input default settings.
const initializeGame = () => {
    const clickOn = () =>{
        document.getElementById('xSlider').classList.remove('clickOff')
    }
    let board = document.getElementById('gameboard')
    updateScoreboard()
    document.getElementById('PvPSlider').style.justifyContent = 'right'
    document.getElementById('resetbtn').addEventListener('click', clearMoves)
    document.getElementById('gameOptions').addEventListener('click', moveSliderButton)
    document.getElementById('xSlider').addEventListener('click', () => {
        if (document.getElementById('xSlider').classList.contains('clickOff')) {
            return
        } else {
            if (document.getElementById('xSlider').classList.contains('right')) {
                document.getElementById('xSlider').classList.remove('right')
                document.getElementById('xSlider').classList.add('clickOff')
                document.getElementById('xSlider').style.justifyContent = 'left'
                firstPlayer = 0
                setTimeout(clickOn, 1200)
            } else {
                document.getElementById('xSlider').classList.add('right')
                document.getElementById('xSlider').classList.add('clickOff')
                document.getElementById('xSlider').style.justifyContent = 'right'
                firstPlayer = 1
                setTimeout(clickOn, 1200)
            }
            clearMoves()
        }
    }
    )
    board.addEventListener('click', () => {
        if (board.classList.contains('clickOff')) {
            return
        } else {
            playerMove(event.target)
        }
    })
for (let i = 0; i < allSquares.length; i++) {
    availableSquares.push(allSquares[i].id)
}
}

//function to pick a random square to mark. Returns move div's ID.
const simpleComputerMoveID = () => {
    return availableSquares.splice(Math.floor(Math.random() * availableSquares.length), 1)
}

//function to delay game option change so that timeouts on computer moves don't mark a fresh board.
const gameOptionClickOn = (bool) => {
    let board = document.getElementById('gameOptions')
    if (bool === false) {
        board.classList.add('clickOff')
    } else {
        board.classList.remove('clickOff')
    }
}

const advancedComputer = (myPath) => {
    //I apologize for how messy the below code is going to be. It's my first time making something like this...
    //The computer is beatable - I haven't added logic to defend against one specific tactic.
    let squares = {}
    let ids = ['10010010', '01010000', '00110001', '10001000', '01001011', '00101000', '10000101', '01000100', '00100110']
    for (let i = 0; i < ids.length; i++) {
        squares[i + 1] = ids[i].split('').map(x => Number(x))
    }
    //console.log(squares)

    //change this to change how many variations are created
    const mySquares = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    //recursive function to generate all positions. Simply makes a path for marking squares 1->9 and provides array structure for analysis. Does include impossible variants.
    const nextMove = (treeNode) => {
        //names for treeNode variables

        let path = treeNode[0].slice()
        let rSq = treeNode[1].slice()
        let xScore = treeNode[2]
        let oScore = treeNode[3]
        let nodeScore = treeNode[4]
        let mySelf = [path, rSq, xScore, oScore, nodeScore]
        //console.log( `I'm the tree node path` )
        //console.log(treeNode[0])
        //console.log(treeNode)

        // Check for wins/losses/ties at the input node
        if (xScore.includes(3)) {
            //console.log( 'Found a win for X', treeNode)
            //console.log(nodeScore)
            mySelf[4] += 1
            return mySelf
        } else if (oScore.includes(3)) {
            //console.log('found a win for O', treeNode)
            //console.log(nodeScore)
            mySelf[4] -= 1
            return mySelf
        } else if (treeNode[1].length === 0) {
            //console.log(`It's a tie` , treeNode)
            //allVariations.push(treeNode[0])
            return mySelf
        }

        //console.log('Passed array length test')



        //generate array of next moves from remaining squares and add scores
        let nextNodes = []
        while (rSq.length > 0) {
            nextNodes.push([path + rSq.shift()])
        }
        //take the list of newly generated pathes and construct nodes
        for (let i = 0; i < nextNodes.length; i++) {
            let tempSq = treeNode[1].slice()
            //console.log('im the temp squares')
            //console.log(tempSq)
            //iterate through each [path] and generate remaining squares for that node.
            let nextSqNum = Number(nextNodes[i][0][nextNodes[i][0].length - 1])
            tempSq.splice(tempSq.indexOf(nextSqNum), 1)
            //push temp squares to the node after path values have been spliced out.
            //new variables for constructing next node
            let nextX = []
            let nextO = []
            let nextNodeScore = 0
            //take previous X and O scores and add new score to them
            let nextScore = squares[nextSqNum]
            //console.log('next score is....')
            //console.log(nextScore)

            if (nextNodes[i][0].length % 2 === 1) {
                //console.log('x turn')
                //console.log(nextScore)
                //console.log(xScore)
                for (let j = 0; j < 8; j++) {
                    nextX.push(nextScore[j] + xScore[j])
                }
                nextO = oScore
            } else {
                //console.log('o turn')
                for (let j = 0; j < 8; j++) {
                    nextO.push(nextScore[j] + oScore[j])
                }
                nextX = xScore

            }
            nextNodes[i].push(tempSq)
            nextNodes[i].push(nextX)
            //console.log('next x score is...')
            //console.log(nextX)
            nextNodes[i].push(nextO)
            //console.log(nextO)
            nextNodes[i].push(nextNodeScore)
            //console.log('This new node is')
            //console.log(nextNodes[i])
        }
        //once all nodes are made, apply same method to newly generated nodes.
        //console.log(nextNodes)
        treeNode.push(nextNodes)
        mySelf.push(nextNodes)
        //console.log('Next nodes are:')
        //console.log(treeNode[5])
        //if children exist (further nodes to explore), apply same method to them.
        if (treeNode[5] !== undefined) {
            for (let k = 0; k < nextNodes.length; k++) {
                //console.log('Starting next function call')
                //console.log(treeNode[5][k])
                //set the node score equal to the sum of all children scores
                //treeNode[4] += 
                let nodeVal = Number(nextMove(treeNode[5][k])[4])
                mySelf[4] += nodeVal
                mySelf[5][k][4] = nodeVal
                //console.log(mySelf[4], path)
            }
            //console.log('Parental Node Score' , nodeScore, path)
        }
        return mySelf
    }

    let treeBase = ['', mySquares, [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], 0]

    //this forms a tree that branches into all combations+array structure for analysis.
    //console.log(nextMove(treeBase)[5])
    //console.log('children')
    let gameTree = nextMove(treeBase)
    //console.log(gameTree)
    //console.log('All variations are... Should be a factorial')
    //console.log(allVariations)

    const findGameTreeNode = (path) => {
        let branch = gameTree[5]
        //console.log('game tree 5' , branch)
        for (let i = 0; i < path.length; i++) {

            for (let j = 0; j < branch.length; j++) {
                //console.log(branch.length, branch[j])
                //console.log(myPath.substring(0,i+1))
                if (branch[j][0] == path.substring(0, i + 1)) {
                    //console.log('Found ya')
                    branch = branch[j][5]
                    break
                }
            }
        }
        if (branch[0].length === 5){
            return 0
        }else{
            return branch
        }
        
        //console.log('This is branch')
        //console.log(branch)
    }

    const pickOptimalNode = (branch) => {
        //console.log(branch)
        
        let remainingSquares = mySquares.slice()
        if (branch === 0){
            for ( let i = 0; i < myPath.length ; i++){
                remainingSquares.splice(remainingSquares.indexOf(myPath[i],1))
            }
            return remainingSquares
        }
        let bestNode = branch[0][0]
        let xKillExists = false
        let xNextKillExists = false
        let xNextKillNode = ''
        let bestNodeScore = branch[0][4]
        let worstNode = branch[0][0]
        let oKillExists = false
        let oNextKillExists = false
        let oNextKillNode = ''
        let worstNodeScore = branch[0][4]
        //1 for O's turn
        //console.log('This branch 00 = ' ,branch[0][0])
        let turn = branch[0][0].length % 2
        //look for best nodes
        for (let i = 0; i < branch.length; i++) {
            //if an x win within 1 move, pick that as bestNode
            console.log(branch[i])
            if (branch[i][2].includes(3)) {
                bestNode = branch[i][0]
                bestNodeScore = 11000
                xKillExists = true
                //if an O win within 1 move, pick that as worstNode
            } else if (branch[i][3].includes(3)) {
                worstNode = branch[i][0]
                worstNodeScore = -11000
                oKillExists = true
                //if no wins within 1 move, evaluate options. pick highest/lowest win combos
            } else {
                //check children for death on next move.
                for (let j = 0; j < branch[i][5].length; j++) {
                    if (branch[i][5][j][2].includes(3)) {
                        xNextKillExists = true
                        xNextKillNode = branch[i][5][j][0]
                    } else if (branch[i][5][j][3].includes(3)) {
                        oNextKillExists = true
                        oNextKillNode = branch[i][5][j][0]
                    }
    
                    if (branch[i][4] > bestNodeScore) {
                        bestNode = branch[i][0]
                        bestNodeScore = branch[i][4]
                    } else if (branch[i][4] < worstNodeScore) {
                        worstNode = branch[i][0]
                        worstNodeScore = branch[i][4]
                    }
                }
            }
        }
            //console.log(branch)
            console.log(bestNode, xKillExists, bestNodeScore)
            console.log(worstNode, oKillExists, worstNodeScore)
            if (turn === 0) {
                if (oKillExists === true) {
                    myPath = worstNode
                    return worstNode[worstNode.length - 1]
                } else if (xKillExists === true) {
                    myPath = bestNode
                    return bestNode[bestNode.length - 1]
                } else if (xNextKillExists === true) {
                    myPath = xNextKillNode
                    return xNextKillNode[xNextKillNode.length - 1]
                } else {
                    myPath = worstNode
                    return worstNode[worstNode.length - 1]
                }
            } else {
                if (xKillExists === true) {
                    myPath = bestNode
                    return bestNode[bestNode.length - 1]
                }else if(oKillExists ===true){
                    myPath = worstNode
                    return worstNode[worstNode.length - 1]
                }else if(oNextKillExists === true){
                    myPath = oNextKillNode
                    return oNextKillNode[oNextKillNode.length-1]
                } else {
                    myPath = bestNode
                    return bestNode[bestNode.length - 1]
                }
            }
        }
    
    //return element id of square (see top of this function squares obj) that is best choice
    return squares[(pickOptimalNode(findGameTreeNode(myPath)))].join('')
}
// #endregion

//#region Variables to track turns of players and their movements
let currentTurn = 0
let X = [0, 0, 0, 0, 0, 0, 0, 0]
let O = [0, 0, 0, 0, 0, 0, 0, 0]
let tieCheck = 0;
let currentScore = [0, 0, 0]
let myPath = ''
let firstPlayer = 0;
//#endregion 

//#region Initialize button(s) and listeners

const allSquares = document.getElementsByClassName('square') //global variable for all the game squares.
let availableSquares = []
let gameOption = 0;
initializeGame()
// #endregion

