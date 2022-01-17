import { scrollone, scrolltwo, scrollthree, scrollfour, scrollfive } from "./scrollAnimation.js"


window.addEventListener('load', function(){

    let triggerElements = ["#history-middle", "#history-first", "#skills-content", "#hero-2", "#skynet"];

    let animationElements = ["#history-middle p", "#robot-profile", ".yellow-bar", "#hero-image", ".gallery"];


    // for(let i = 0; i< triggerElements.length; i++){
    //     scrollone(triggerElements[i], animationElements[i]);
    //     scrolltwo(triggerElements[i], animationElements[i]);
    // }

    for(let i = 0; i < triggerElements.length; i++){

        if( i ===1 ){
             scrolltwo(triggerElements[i], animationElements[i]);
        }if( i ===2 ){
            scrollthree(triggerElements[i], animationElements[i]);
        }if( i ===3 ){
            scrollfour(triggerElements[i], animationElements[i]);
        }if( i ===4 ){
            scrollfive(triggerElements[i], animationElements[i]);
        }else{
            scrollone(triggerElements[i], animationElements[i]);
        }
    }
    
});