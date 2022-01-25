import { gsap } from "gsap";

gsap.set("#arrow",{transformOrigin:"center"});

const arrowTL = new gsap.timeline();
arrowTL.from("#arrow",{duration:0.5, rotate: 180});

export const navTL = new gsap.timeline({paused:true});

navTL.add(arrowTL,"burger")