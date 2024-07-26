// var crsr = document.querySelector('#cursor')
// var blur = document.querySelector('#cursor-blur')

// document.addEventListener("mousemove", function(dets) {
//     crsr.style.left = dets.x+30 + "px"
//     crsr.style.top = dets.y + "px"
//     blur.style.left = dets.x - 140 + "px"
//     blur.style.top = dets.y - 140 + "px"
// })

// var h4all = document.querySelectorAll("#nav h4");
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter", function() {
//         crsr.style.scale = 3
//         crsr.style.backgroundColor = "transparent"
//         crsr.style.border = "0.5px solid #fff"
//     })
//     elem.addEventListener("mouseleave", function() {
//         crsr.style.scale = 1
//         crsr.style.backgroundColor = "#96C21E"
//         crsr.style.border = "0px solid #96C21E"
//     })
// })

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "120px",
    duration: .5,
    scrollTrigger: {
        trigger: "#nav",
        scroller:"body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top 10%",
        end: "top -70%",
        scrub: 2,
    },
});

gsap.from("#about-us img, #about-us-in", {
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 3,
    }
})

gsap.from(".card", { 
    scale: 0.95,
    // opacity: 0,
    duration: 1,
    // stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub:4,
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub:4,
    }
})

gsap.from("#page4 h1", {
    y: 40,
    duration: 2,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 3,
    },
});