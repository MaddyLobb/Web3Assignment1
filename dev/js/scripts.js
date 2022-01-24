import { fadeInText, rotateRobot, barGrow, imageSlideRight, galleryGrow } from "./scrollAnimation.js"
import { burgerTL } from "./simplemenu";
import {menuAnimation} from "./mobileMenu.js"
import {scrollPage} from "./pageScroll"
import { displayWindowSize } from "./mobileResizing"

var burgerButton = document.querySelector("#burger");
let canISeeMenu = false;

function openCloseMenu(){
    if(canISeeMenu === false){
        // can't see menu... play timeline of burger into X
        burgerTL.play();
        menuAnimation.play();
        canISeeMenu = true;
    }else{
        // can see menu.. play X back into burger
        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
    }
}

burgerButton.addEventListener("click", openCloseMenu);
let navButtons = document.querySelectorAll(".nav-btns");

for (const button of navButtons){
    button.addEventListener("click", checkScrolling);
    button.addEventListener("click", openCloseMenu);
}

function checkScrolling(e) {
    // check to see which button was clicked
    const indexValue = [].indexOf.call(navButtons, e.target)
    if (indexValue != -1) {
        scrollPage(indexValue);
    }
}

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

window.addEventListener("resize", displayWindowSize);

window.addEventListener('load', displayWindowSize);