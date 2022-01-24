import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".yellow-bar", {transformOrigin:" left center"});

export function fadeInText(triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        duration:1,
        alpha:0,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "restart none resume none",
            //markers: true,
            scrub: true
        }
    });
}

export function rotateRobot(triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        duration:1,
        alpha: 0,
        rotation: 360,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "restart none resume none",
            //markers: true,
            scrub: true

        },
        stagger:.35
    });
}

export function barGrow(triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        duration:1,
        scaleX: 0,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "restart none resume none",
            //markers: true,
            scrub: true
        },
        stagger:.35
    });
}

export function imageSlideRight(triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        duration:1,
        x:"+=500",
        alpha:0,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "restart none resume none",
            //markers: true,
            scrub: true
        }
    });
}

export function galleryGrow(triggerElement, animationElement){
    const tl = new gsap.timeline();

    tl.from(animationElement,{
        duration:1,
        scaleX:0,
        alpha:0,
        scrollTrigger: {
            trigger: triggerElement,
            toggleActions: "restart none resume none",
            //markers: true,
            scrub: true
        }
    });
}