import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".yellow-bar", {transformOrigin:" left center"});

export function scrollone(triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        duration:1,
        alpha:0,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "restart none resume none",
            scrub: true,
            markers: true
        }
    });
}

export function scrolltwo(triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        duration:1,
        alpha: 0,
        x:-500,
        rotation: 360,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "restart none resume none",
            scrub: true,
            markers: true
        },
        stagger:.35
    });
}

export function scrollthree(triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        duration:1,
        scaleX: 0,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "restart none resume none",
            scrub: true,
            markers: true
        },
        stagger:.35
    });
}

export function scrollfour(triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        duration:1,
        x:500,
        alpha:0,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "restart none resume none",
            scrub: true,
            markers: true
        }
    });
}

export function scrollfive(triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        duration:1,
        scaleX:0,
        alpha:0,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "restart none resume none",
            scrub: true,
            markers: true
        }
    });
}