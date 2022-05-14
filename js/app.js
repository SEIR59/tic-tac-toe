const cells = document.querySelectorAll('.cell')

//Allows user to click cell and leave either an x or an o
let letter = 1;
for (const cell of cells){
    cell.addEventListener('click', function(e){
        if(letter === 1){
            cell.innerHTML = "X";
            letter = letter - 1;
        } else {
            cell.innerHTML = "O"
            letter = letter + 1
            console.log("add letter")
        }
    })
}
