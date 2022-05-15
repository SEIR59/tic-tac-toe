const restartBtn = document.getElementsByClassName('button')

//This array selects the 9 boxes and puts them in an array
//The idea behind this is to not have to 
//write the null spaces one by one 
//but make js do it for us//
const box = Array.from(document.getElementsByClassName('box'))
 console.log (box)

 const O_TEXT = "O"
 const X_TEXT = "X"
 let currentPlayer = X_TEXT
 let spaces = Array(9).fill(null)

 console.log(spaces)
