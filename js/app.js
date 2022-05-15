// this is where i start my js. first i want to try to do something when i click on a box.
const boxes= document.querySelectorAll(".box");
const board = document.querySelector('.board');
const button = document.querySelector('.button');

let user = 'x'
for (const box of boxes){
    box.addEventListener("click", function(){
        box.innerHTML = user;
        if ( user === x );
        else( user = o);
        box.innerHTML = o
    }) 
    
}


