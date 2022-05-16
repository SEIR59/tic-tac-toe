// this is where i start my js. first i want to try to do something when i click on a box.
const boxes= document.querySelectorAll(".box");
const board = document.querySelector('.board');
const button = document.querySelector('.button');
const winCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]

]

// this code lets the squares change from x to o

let user = 'x'
for (const box of boxes){
    box.addEventListener("click", function(){
        if(user === "X"){
            box.innerHTML = "X";
            user = "O";
        } else {
           box.innerHTML = "O";
           user = "X";
        }
    
    })
}

