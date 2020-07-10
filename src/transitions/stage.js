import anime from 'animejs/lib/anime.es.js'

const transitions = {
  intro: (width, lastPage) => {
    anime({
      targets: '.video',
      opacity: [0, 1],
      duration: 1000,
      delay: 500,
      easing: 'easeInOutExpo',
    })
  },
  outro: (distance, mobile, direction) => {
    const target = direction == 'back' ? '.video-container' : '.video'

    const videoTransition = {
      targets: target,
      opacity: 0,
      delay: anime.stagger(100, {from: 'first'}),
      easing: 'easeInOutExpo',
    }

    const buttonTransition = {
      targets: '.header-container',
      delay: 300,
      easing: 'easeInOutExpo',
    }

    if (mobile) {
      buttonTransition.translateY = distance
    } else {
      buttonTransition.translateX = distance
    }

    anime(videoTransition)
    return anime(buttonTransition)
  }
}

export default transitions