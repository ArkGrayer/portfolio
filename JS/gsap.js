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

    }, "-=1.5")
    .from(".menu-1", {
        
        duration: 1,
        y: 200,
        opacity: 0,
        ease: "power2.out", 

    }, "-=0.8")
    .from(".menu-2", {
        
        duration: 1,
        y: 200,
        opacity: 0,
        ease: "power2.out", 

    }, "-=0.6")
    .from(".menu-3", {
        
        duration: 1.3,
        y: 200,
        delay: 0.5,
        opacity: 0,
        ease: "power2.out", 

    }, "-=0.2")
    .from(".menu-4", {
        
        duration: 1,
        y: 200,
        opacity: 0,
        ease: "power2.out", 

    }, "-=1.2")
    .from(".menu-5", {
        
        duration: 1,
        y: 200,
        opacity: 0,
        delay: 0.2,
        ease: "power2.out", 

    }, "-=1.0")
    .from(".container-item div", {
        
        duration: 1,
        y: 600,
        opacity: 0,
        stagger: {each: 0.2},
        delay: 0.5,
        ease: "power2.out", 

    }, "-=0.4")
    .from(".container-item img", {
        
        duration: 1,
        y: 700,
        opacity: 0,
        delay: 0.8,
        ease: "power2.out", 

    }, "-=1.9")
    .from("#section-02 div", {

        duration: 1,
        y: 300,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power2.out", 
        
    })


    gsap.registerPlugin(ScrollTrigger);

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
    
    gsap.registerPlugin(TextPlugin);

    const tl2 = gsap.timeline({

        repeat: -1,
        repeatDelay: 3.5,
        yoyo: true

    });

    //Caret animation to get in touch email
    tl2.fromTo(".sect-anim", 4, {
        "border-right-color": "rgba(45, 199, 237, 1)",
        ease: SteppedEase.config(37),
        width: "0"
      }, {
        "border-right-color": "rgba(255,255,255,0)",
        ease: SteppedEase.config(37),
        width: "18.4em"
      }, 0);

})