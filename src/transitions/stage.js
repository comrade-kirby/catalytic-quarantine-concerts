import anime from 'animejs/lib/anime.es.js'

const transitions = {
  intro: (width) => {
    anime({
      targets: '.video',
      translateX: [width, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(150, {from: 'first'}),
      easing: 'easeInOutExpo',
    })
  },
  outro: (distance, mobile, direction) => {
    const target = direction == 'back' ? '.video-container' : '.video'

    const rotateTransition = {
      targets: target,
      opacity: 0,
      delay: anime.stagger(100, {from: 'first'}),
      easing: 'easeInOutExpo',
    }

    const slideTransition = {
      targets: '.header-container',
      delay: 300,
      easing: 'easeInOutExpo',
    }

    if (mobile) {
      slideTransition.translateY = distance
    } else {
      slideTransition.translateX = distance
    }

    anime(rotateTransition)
    anime(slideTransition)
    return anime(slideTransition)
  }
}

export default transitions