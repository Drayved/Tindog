import {dogs} from "./data.js"
import {Dog} from "./Dog.js"


let isLiked = false;
const heartBtn = document.querySelector("#heart-btn")
const crossBtn = document.querySelector("#cross-btn")

// display dogs
let dogArray = ["rex", "bella", "teddy", "deku", "odin", "yuki", "bear", ""]

function getNewDog(){
    while(dogArray.length){
        let nextDogData = dogs[dogArray.shift()]
        if(dogArray.length <= 0){
            dogArray = ["rex", "bella", "teddy"]
            nextDogData = dogs[dogArray.shift()]
        }
        return nextDogData ? new Dog(nextDogData): dogArray.length = 0 ? nextDogData = dogs[dogArray.pop()] :
        ""
    }
}
let newDog = getNewDog()

// buttons clicked

function btnClicked(e){
    if (!isLiked){
        newDog.clicked(e)
        render()
        isLiked=true
        newDog=getNewDog()
        e.preventDefault()
    }
    if(newDog){ 
        setTimeout(()=>{
            document.querySelector(".liked").classList.add("hidden")
            document.querySelector(".nope").classList.add("hidden")
            render()    
            isLiked=false;     
       },1000)}   
}

// event listeners

heartBtn.addEventListener("click", btnClicked)
crossBtn.addEventListener("click", btnClicked)

heartBtn.addEventListener("click", function(){
    document.querySelector(".liked").classList.remove('hidden')
})

crossBtn.addEventListener("click", function(){
    document.querySelector(".nope").classList.remove('hidden')
})

// render
function render(){
    document.querySelector('.main-img-container').innerHTML = newDog.getNextDog()
}
render()



