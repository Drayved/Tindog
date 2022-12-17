
import {dogs} from "./data.js"



class Dog{ 
    constructor(data){
        Object.assign(this, data)
    }

    clicked(e){
        if(e.target.id==="like-btn"){
            this.hasBeenLiked=true;
        }else if(e.target.id==="cross-btn"){
            this.hasBeenSwiped=true;
        }
    }
    
    getNextDog(){
        const {name, avatar, age, bio} = this
        return `
        <img class="main-img" src="${avatar}" alt="best pupper">
            <div class="img-text">
                <h2>${name}, ${age}</h2>
                <p>${bio}</p>
            </div>
            `
    }

    btnSelected(){
        const {hasBeenLiked, hasBeenSwiped} = this
        if(hasBeenLiked){
            
        }
    }
}

export {Dog}