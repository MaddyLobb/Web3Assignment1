import { gsap } from "gsap";

gsap.set("#arrow",{transformOrigin:"center"});

const arrowTL = new gsap.timeline();
arrowTL.from("#arrow",{duration:0.5, rotate: 180});
arrowTL.to("#arrow",{duration:0.25, stroke: "black"});

export const navTL = new gsap.timeline({paused:true});

navTL.add(arrowTL,"burger")