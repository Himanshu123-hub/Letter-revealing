let para = document.querySelector("p")
let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let text = para.innerHTML


let iteration = 0

function randomText(){
     let str = text.split("").map((char,index) =>{
      if(index < iteration){
        return char
      }
            return character.split("")[Math.floor(Math.random()*53)]
          }).join("")
         para.innerHTML = str

         iteration += 0.5
}

setInterval(randomText,30)