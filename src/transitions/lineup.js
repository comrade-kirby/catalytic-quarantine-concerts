import anime from 'animejs/lib/anime.es.js'

const transitions = {
  intro: (width) => {
    anime({
      targets: '.lineup-day-container',
      translateX: [width, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(150, {from: 'first'}),
      easing: 'easeInOutExpo',
    })
  },
  outro: (width) => {
    anime({
      targets: '.lineup-day-container',
      translateX: 100,
      rotateY: 110,
      opacity: 0,
      delay: anime.stagger(100, {from: 'first'}),
      easing: 'easeInOutExpo',
    })
    
    return anime({
      targets: '.header-container',
      translateX: width,
      delay: 450,
      easing: 'easeInOutExpo',
    })
  }
}

export default transitions