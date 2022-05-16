var X = document.getElementById('xX');
var Y = document.getElementById('yY');
const x_class='x';
const y_class='y';

function weaponX (){
  let selectedProfile = document.querySelectorAll(".img, .id");
  selectedProfile.forEach(img=>{
    img.addEventListener("click",e=> {
      let target=e.target.dataset.id;
      document.querySelector(`[data-id='${target}']`).classList.add("selected");

       console.log(e.target.dataset.id);
    });
   
  });

 
}


weaponX()

function profileOne(){
 let profileX=document.querySelectorAll('.jam');
 profileX.forEach(jam=>{
   jam.addEventListener('click',helpMe,blockI);
 });
}
profileOne()



function helpMe (){
let pickedX=document.querySelector('.board');
pickedX.classList.add('x');



function profileTwo(){
  let profileY=document.querySelectorAll('.boy');
  profileY.forEach(boy=>{
    boy.addEventListener('click',pleaseHelp);
  });
 }
 profileTwo()
 
 
 
 function pleaseHelp (){
 let pickedY=document.querySelector('.board');
 pickedY.classList.add('y');
 }
 

function button(){
  let startButt=document.querySelectorAll('.start');
  startButt.forEach(butt=>{
    butt.addEventListener('click',startG);
  })
}

button()


function startG(){
  let startGame=document.querySelector('.start-game');
  startGame.classList.add('hide');
}



}


//x blocks//



function blockI(){
  let blockOne=document.querySelectorAll('.board .block ');
  blockOne.forEach(block=>{
    block.addEventListener("click",jamb=> {
      let target=jamb.target.dataset.id;
      document.querySelector(`[data-id='${target}']`).classList.add("x");
    });

  });
 }
 blockI()

//  function blockII(){
//   let blockTwo=document.querySelectorAll('.board .block ');
//   blockTwo.forEach(block=>{
//     block.addEventListener("click",jamb=> {
//       let target=jamb.target.dataset.id;
//       document.querySelector(`[data-id='${target}']`).classList.add("y");
//     });

//   });
//  }
//  blockII()


 
const divs = document.querySelectorAll('.board, div')
const arr = Array.from(divs)
for (const [index,div] of arr.entries()){
  console.log(index,div)
}





// function winOne (){
  
 
//   if 
//     (arr[6].classList.contains('x') && arr[7].classList.contains('x') && arr[8].classList.contains('x') 

//   ||
    
//     arr[9].classList.contains('x') && arr[10].classList.contains('x') && arr[11].classList.contains('x') 
  
//   ||
  
//     arr[12].classList.contains('x') && arr[13].classList.contains('x') && arr[14].classList.contains('x')
    
//   ||
  
//     arr[6].classList.contains('x') && arr[9].classList.contains('x') && arr[12].classList.contains('x')
    
//   ||
  
//     arr[7].classList.contains('x') && arr[10].classList.contains('x') && arr[13].classList.contains('x') 
  
//   ||
  
//     arr[8].classList.contains('x') && arr[11].classList.contains('x') && arr[14].classList.contains('x')
    
//   ||
  
//     arr[6].classList.contains('x') && arr[10].classList.contains('x') && arr[14].classList.contains('x')
    
//   ||
  
//     arr[8].classList.contains('x') && arr[10].classList.contains('x') && arr[12].classList.contains('x'));

//   strikeWin.classList.add('winShow'); 

// winOne()


//   }
