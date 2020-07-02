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
  outro: (distance, mobile) => {
    const rotateTransition = {
      targets: '.lineup-day-container',
      opacity: 0,
      delay: anime.stagger(100, {from: 'first'}),
      easing: 'easeInOutExpo',
    }
    
    const gradientRotation = mobile ? '180deg' : '90deg'
    const homeTransition = {
      targets: '.lineup',
      background: [
        `linear-gradient(${gradientRotation}, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 0%))`,
        `linear-gradient(${gradientRotation}, rgba(0, 0, 0, 15%), rgba(0, 0, 0, 0%))`
      ],
      delay: 400
    }

    const slideTransition = {
      targets: '.header-container',
      delay: 300,
      easing: 'easeInOutExpo',
    }

    if (mobile) {
      rotateTransition.translateY = 100
      rotateTransition.rotateX = 110
      slideTransition.translateY = distance
    } else {
      rotateTransition.translateX = 100
      rotateTransition.rotateY = 110
      slideTransition.translateX = distance
    }

    anime(rotateTransition)
    anime(homeTransition)
    return anime(slideTransition)
  }
}

export default transitions