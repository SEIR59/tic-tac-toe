/* 
What do we need:
Initiate the game - done
Starting Board
Correct Boards
Keep track of moves (game turns)
Pushing choice into board 
Reset the game
Can't change full piece 
*/

//Loads the entire game
function gameBegins(){
    //Sets up storage for board
    let board = [' ',' ',' ',' ',' ',' ',' ',' ',' '];
    //Gives players chars
    let players = ['X', 'O'];
    //Holds state for who won game
    let playerXWin = false;
    let playerOWin = false;

}
function whoWins(){
    if(playerXWin === true){
        let theWinner = document.getElementById('win-state').innerHTML = "Player X Wins!!!";
        return theWinner;
    }
    if(playerOWin === true){
        let theWinner = document.getElementById('win-state').innerHTML = "Player O Wins!!!";
        return theWinner;
    }
}


//Make game begin
gameBegins();