import { gsap } from "gsap";

const arrowTL = new gsap.timeline();
arrowTL.to("#arrow",{duration:0.25, rotate: 360});

export const burgerTL = new gsap.timeline({paused:true});

burgerTL.add(arrowTL,"burger")