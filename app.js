
let myButton = document.querySelector("#myButton")
let myButton1 = document.querySelector("#myButton1")
let colorCode = document.querySelector(".colorCode")


let hexNumber = '0123456789abcdef';
let rgb1 = "#000"
let rgb2 = "#fff";


const hexValueHandler = (() =>{
    let colors = "#"
    for(let i = 0; i < 6; i++){
      colors += hexNumber[Math.floor(Math.random() * 16)]
    }

    return colors;
})

const newHandler = () => {
    rgb1 = hexValueHandler();
    rgb2 = hexValueHandler();
    document.body.style.backgroundImage = ` linear-gradient(to right,${rgb1},${rgb2}`
    colorCode.innerHTML = ` background-image: linear-gradient(to bottom right, ${rgb1}, ${rgb2};`

    myButton.innerHTML = rgb1;
    myButton1.innerHTML = rgb2;
}
const myButtonHandler = (() =>{
   newHandler();
})
   

const myButtonHandler2 = (() =>{
    
   newHandler();
    
})



myButton.addEventListener("click",() =>{
    myButtonHandler();
})


myButton1.addEventListener('click',() =>{
    myButtonHandler2();
})