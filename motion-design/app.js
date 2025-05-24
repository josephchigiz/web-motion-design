gsap.registerPlugin(SplitText) 
let tl = gsap.timeline();
let split = SplitText.create('.oops ', {
  type: 'chars',
  charsClass: 'char++'
});

gsap.from(split.chars, {
  // y:'100vh',
  yPercent: "random([-100, 100])",
  rotation: 'random(-30, 30)',
  ease: 'back.out',
  autoAlpha: 0,
  
  stagger: {
    amount: 1,
    from: 'random',
  //   repeat: -1,
  // yoyo: true,
  }
})

gsap.from('.design', {
  duration: 2,
  x: '100vh',
  ease: 'elastic'
})

gsap.to(['.char1', '.char2', '.char3'], {
  delay: 3,
  y: '-100vh',
  stagger: 0.05 
}
)

// gsap.to('.char5', {
//   delay:4,

// })

// document.querySelector(".oops").addEventListener("mouseover", () => {
  const aChar = document.querySelector(".char5");
  const mChar = document.querySelector(".char4");

  gsap.timeline()
    .to(aChar, {
      delay: 3.5,
      scaleX: 1.5,
      scaleY: 0.5,
      duration: 0.2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
    })
    .add(() => {
      aChar.textContent = "o";
    })
    .to(aChar, {
      scaleX: 1,
      scaleY: 1,
      duration: 0.2,
      ease: "power1.out"
    })
    .to('.oops', {
      duration: 1,
      x: '-50%',
      ease: 'elastic'
    })
    .to((mChar), {
      delay: 1,
      scaleX: 1.5,
      scaleY: 0.5,
      duration: 0.2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 1,
    })
    .add(() => {
      mChar.textContent = "M";
      mChar.classList.add('eM');
    })
    .to(mChar, {
      scaleX: 1,
      scaleY: 1,
      duration: 0.2,
      ease: "power1.out"
    })
// });


// gsap.set('.char5', {
//   delay: 3,
//   transformStyle: 'preserve-3d',
//   transfromPerspective: 1000
// })

// tl.to(['#a1', '#n2', '#i3'], {duration: 2, y: '100vh', ease: 'power1.out', delay: 2})
// .to()

// gsap.to;