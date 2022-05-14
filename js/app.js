const cells = document.querySelectorAll('.cell')
const restart = document.querySelector('.restart-btn')
const nxtUp = document.querySelector('.next-up')

//Allows user to click cell and leave either an x or an o
let letter = 1;
for (const cell of cells){
    cell.addEventListener('click', function(){
        if(letter === 1){
            cell.innerHTML = "X";
            letter = letter - 1;
            console.log(letter)
        } else {
            cell.innerHTML = "O"
            letter = letter + 1
            console.log(letter)
        }
    displayNextUpMessage(letter)
    })
}

//Restart Button
restart.addEventListener('click',function(){
    cells.forEach(function(cell){
        cell.innerHTML = ""
    })
    letter = 1;
    nxtUp.innerHTML = "Next up: X"
})

function displayNextUpMessage(num){
    if(num === 0){
        nxtUp.innerHTML = "Next up: O"
    } else {
        nxtUp.innerHTML = "Next up: X"
    }
}

