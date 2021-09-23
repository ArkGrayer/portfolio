document.addEventListener('DOMContentLoaded', () => {

    var TL = gsap.timeline();

    TL
    .to(".screen-load", {

        duration: 1,
        opacity: 0,
        delay: 2.5,
        filter: 'blur(10px)',
        ease: "power4.out",

    })
    .from(".bg-hero", {
        
        duration: 2,
        y: 50,
        delay: 0.5,
        opacity: 0,
        ease: "power2.out", 

    }, "-=0.4")
    .from(".menu-1", {
        
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: "power2.out", 

    }, "-=0.9")
    .from(".menu-2", {
        
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: "power2.out", 

    }, "-=0.9")
    .from(".menu-3", {
        
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: "power2.out", 

    }, "-=0.2")
    .from(".menu-4", {
        
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: "power2.out", 

    }, "-=0.9")
    .from(".menu-5", {
        
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: "power2.out", 

    }, "-=0.9")
    .from(".container-item div", {
        
        duration: 1,
        y: 500,
        opacity: 0,
        stagger: {each: 0.2},
        delay: 0.3,
        ease: "power2.out", 

    }, "-=0.8")
    .from(".container-item img", {
        
        duration: 1,
        y: 500,
        opacity: 0,
        delay: 0.3,
        ease: "power2.out", 

    }, "-=0.8")


    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#section-02 div", {

        duration: 1,
        y: 300,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power2.out", 
        scrollTrigger: {

            trigger: "#section-02",


        }

    });

    gsap.from("#section-03 div", {

        duration: 1,
        y: 300,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power2.out", 
        scrollTrigger: {

            trigger: "#section-03",


        }

    });

    gsap.from("#section-04 div", {

        duration: 1,
        y: 300,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power2.out", 
        scrollTrigger: {

            trigger: "#section-04",


        }

    });

    gsap.from("#section-05 div div", {

        duration: 1,
        y: 200,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power4.out", 
        scrollTrigger: {

            trigger: "#section-05",
            start: "top 80%",
            end: "end 00%",


        }

    });

})