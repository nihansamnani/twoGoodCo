function locomotiveani(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function navani(){
    gsap.to(".links",{
        transform: "translateY(-200%)",
        opacity: 0,
        scrollTrigger: {
            trigger: ".page1",
            scroller: "#main",
            // markers: true,
            start: "top 0",
            end: "top -5%",
            scrub: true,
            duration: .25
        }
    })
}
function page1ani(){
    gsap.from(".mainheadn p", {
        opacity: .8,
        y: 200,
        stagger: .5,
        // ease: easeIn,
        duration: .5,
        delay: .5
    })
}
function page2ani(){
    // gsap.from(".page2 video", {

    // })
}
function productfollows(){
    document.querySelector("#productbox1").addEventListener("mousemove" ,function(dets){
        // alert()
        gsap.to(".productcircle", {
            opacity: 1,
            display: "inline",
            scale: 1,
            x: dets.x-450,
            y: dets.y-400,
            duration: .25,
            scrub: 5,
            backgroundColor: "rgb(255, 202, 164)",
            border: "1px solid rgb(254, 159, 91)"
        })
    })
    document.querySelector("#productbox1").addEventListener("mouseleave" ,function(dets){
        // alert()
        gsap.to(".productcircle", {
            opacity: 0,
            // display: "inline",
            scale: 0,
            x: dets.x-450,
            y: dets.y-400,
            duration: .25,
            scrub: 5
        })
    })
    document.querySelector("#productbox2").addEventListener("mousemove" ,function(dets){
        // alert()
        gsap.to(".productcircle", {
            opacity: 1,
            display: "inline",
            scale: 1,
            x: dets.x-450,
            y: dets.y-400,
            duration: .25,
            scrub: 5,
            backgroundColor: "rgb(233, 233, 233)",
            border: "1px solid #dadada"
        })
    })
    document.querySelector("#productbox2").addEventListener("mouseleave" ,function(dets){
        // alert()
        gsap.to(".productcircle", {
            opacity: 0,
            // display: "inline",
            scale: 0,
            x: dets.x-450,
            y: dets.y-400,
            duration: .25,
            scrub: 5
        })
    })
    document.querySelector("#productbox4").addEventListener("mousemove" ,function(dets){
        // alert()
        gsap.to(".productcircle", {
            opacity: 1,
            display: "inline",
            scale: 1,
            x: dets.x-450,
            y: dets.y,
            duration: .25,
            scrub: 5,
            backgroundColor: "rgb(255, 202, 164)",
            border: "1px solid rgb(254, 159, 91)"
        })
    })
    document.querySelector("#productbox4").addEventListener("mouseleave" ,function(dets){
        // alert()
        gsap.to(".productcircle", {
            scale: 0,
            opacity: 0,
            // display: "inline",
            x: dets.x-450,
            y: dets.y-400,
            duration: .25,
            scrub: 5
        })
    })
    document.querySelector("#productbox3").addEventListener("mousemove" ,function(dets){
        // alert()
        gsap.to(".productcircle", {
            opacity: 1,
            display: "inline",
            scale: 1,
            x: dets.x-450,
            y: dets.y,
            duration: .25,
            scrub: 5,
            backgroundColor: "rgb(233, 233, 233)",
            border: "1px solid #dadada"
        })
    })
    document.querySelector("#productbox3").addEventListener("mouseleave" ,function(dets){
        // alert()
        gsap.to(".productcircle", {
            scale: 0,
            opacity: 0,
            // display: "inline",
            x: dets.x-450,
            y: dets.y-400,
            duration: .25,
            scrub: 5
        })
    })
}
document.querySelector("video"),addEventListener("mousemove", function(dets){
    gsap.to(".play",{
        display: "block",
        scale: 1
    })
})
locomotiveani()
productfollows();
navani();
page1ani();
page2ani();