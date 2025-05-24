gsap.registerPlugin(SplitText) 
let tl = gsap.timeline();
let split = SplitText.create('.oops ', {
  type: 'words, lines',
  wordsClass: 'word++'
});


  const emoji = document.querySelector(".emoji");
  const join = document.querySelector(".join");

  gsap.timeline()
  .from(join, {
  duration: 1.3,
  y: "-100vh",
  rotation: 'random(-30, 30)',
  ease: 'bounce.out',
  amount: 1,
    from: 'random'
})
  .from('.lines', {
    delay: 0.2,
  yPercent: "random([-100, 100])",
  rotation: 'random(-30, 30)',
  ease: 'back.out',
  autoAlpha: 0,
  
  stagger: {
    amount: 1,
    from: 'random',
  }
})
.from(split.lines, {
  y: "-20%",
  autoAlpha: 0,
  
  stagger: {
    amount: 0.5,
    from: 'random',
  }
})
.from(emoji, {
  yPercent: "random([-100, 100])",
  rotation: 'random(-30, 30)',
  ease: 'back.out',
  amount: 1,
    from: 'random'
})
.to((emoji), {
  scaleX: 1.5,
  scaleY: 0.5,
  duration: 0.2,
  ease: "power1.inOut",
  yoyo: true,
  repeat: 1,
})
