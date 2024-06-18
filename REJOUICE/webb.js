
let tl = gsap.timeline();


//Cursor Animation

let Cursor = document.querySelector('#cursor');
let Hero = document.querySelector(".main-two");


let h2 = document.querySelector(".third-part-2")

console.log(h2);





function h3Animate () {
  gsap.from(".third-part-2 ", {
    y: 200,
    opacity: 0,
    stagger:true,
    scrollTrigger: {
      trigger: ".third-part",
      scollor: "body",
      start: "top 40%",
      end: "bottom 60%",
      scrub: 2,
      // markers: true,
      // yoyo: true,
    }
  })
}
function CursorMove () {
  Hero.addEventListener("mouseenter", (e) => {
    Cursor.innerHTML = "Play Reel"
gsap.to("#cursor", {
  opacity: 1,
  scale: 1,

})
  
Hero.addEventListener("mousemove", (e) => {
  Cursor.innerHTML = "Play Reel"
Cursor.style.zIndex = 99;
gsap.to("#cursor", {
x: e.clientX,
y: e.clientY,
opacity: 1,

})
})

Hero.addEventListener("mouseleave", (e) => {
gsap.to("#cursor", {
opacity: 0,
scale: 0,

})
})})
}
function UpperLowerAnimate () {
  gsap.from(".lower-part h2", {
    y: 800,
  opacity: 0,
  stagger:true,
  scrollTrigger: {
  trigger: ".upper-part",
  scroller: "body",
  start: "top 75%",
  end: "top 40%",
  scrub: 4,
  yoyo: true,
  }
  })
  gsap.from(".upper-part h2", {
    y: 300,
  opacity: 0,
  stagger:true,
  scrollTrigger: {
  trigger: ".down-part",
  scroller: "body",
  start: "top 55%",
  end: "top 55%",
  scrub: 4,
  // markers: true,
  yoyo: true,
  }
  })
}




UpperLowerAnimate();
h3Animate();
CursorMove();

