// A user should be able to click on different squares to make a move. //DONE
// Every click will alternate between marking an X and O //KEEP COUNT OF CLICK TOTAL
// Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
// Display a message to indicate which turn is about to be played. //NEW HEADER FOR WHOSE TURN, CHANGE ON MOVECLICK
// Detect draw conditions (ties/cat's game) // IF MOVETOTAL = 9, TIE
// Detect winner: Stop game and declare the winner if one player ends up getting three in a row. IF MOVETOTAL >=5 CHECK WIN CONDITIONS
// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
console.log("Hi")
let playerOne = "X";
let comp = "O";
const winningCombos = [[1, 2, 3], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9] ]
let currentPlayer = playerOne;
let moveNum = 0;


//Call and declare the elements from HTML and CSS page
let boxes = document.querySelectorAll(".box");
console.log(boxes);
let h2 = document.querySelectorAll(".h2")


function playGame () {
    for (const box of boxes) {
        box.addEventListener("click", function(){
            console.log("isthisworking")
            if ( currentPlayer === playerOne) {
                box.innerHTML = "X";
                currentPlayer = comp;
                h2.innerHTML = "Computer's Move";
                console.log(currentPlayer);
            } else {
                box.innerHTML = "O";
                currentPlayer = playerOne;
                
            }
        })
    }
}
console.log(currentPlayer);
console.log(h2);
playGame(); 

// boxes.forEach((box) => box.addEventListener("click", clickedBox)) {
//     if ( currentPlayer === playerOne) {   
//         console.log(playerOne);
        // moveNum += 1;
        // console.log (moveNum);
        // currentPlayer === comp;
        // console.log(currentPlayer);
        // h2.innerText = "Computer's Move";
    // }
// }




