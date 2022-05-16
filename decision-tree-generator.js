
//README - This is a copy of the advancedComputer function in app.js. Sorry it's so messy, first time doing this.

let squares = {}
let ids = ['10010010', '01010000', '00110001', '10001000', '01001011', '00101000', '10000101', '01000100', '00100110']

for (let i = 0; i < ids.length; i++) {
    squares[i + 1] = ids[i].split('').map(x => Number(x))
}
//console.log(squares) works

//change this to change how many variations are created
const allSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const allVariations = []
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

let treeBase = ['', allSquares, [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], 0]

//this forms a tree that branches into all combations+array structure for analysis.
//console.log(nextMove(treeBase)[5])
//console.log('children')
let gameTree = nextMove(treeBase)
//console.log(gameTree)
//console.log('All variations are... Should be a factorial')
//console.log(allVariations)

let myPath = ''

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
    return branch
    //console.log('This is branch')
    //console.log(branch)
}

const pickOptimalNode = (branch) => {
    //console.log(branch)
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


console.log(pickOptimalNode(findGameTreeNode(myPath)))