import { fadeInText, rotateRobot, barGrow, imageSlideRight, galleryGrow } from "./scrollAnimation.js"


window.addEventListener('load', function(){

    let triggerElements = ["#history-middle", "#history-first", "#skills-content", "#hero-2", "#skynet"];

    let animationElements = ["#history-middle p", "#robot-profile", ".yellow-bar", "#hero-image", ".gallery"];


    for(let i = 0; i < triggerElements.length; i++){

        if( i ===0 ){
            fadeInText(triggerElements[i], animationElements[i]);
        }else if( i ===1 ){
            rotateRobot(triggerElements[i], animationElements[i]);
        }else if( i ===2 ){
            barGrow(triggerElements[i], animationElements[i]);
        }else if( i ===3 ){
            imageSlideRight(triggerElements[i], animationElements[i]);
        }else if( i ===4 ){
            galleryGrow(triggerElements[i], animationElements[i]);
        }
    }
    
});