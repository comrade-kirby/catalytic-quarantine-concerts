import anime from 'animejs/lib/anime.es.js'

const transitions = {
  outro: async (home, button, mobile) => {
    const outroItems = document.querySelectorAll('.outro-item')
    
    anime({
      targets: outroItems,
      opacity: [1, 0],
      delay: anime.stagger(20, {from: 'last'}),
      easing: 'easeInOutExpo',
    })
    
    const gradientRotation = mobile ? '180deg' : '90deg'

    const slideTransition = {
      targets: '.button-container',
      easing: 'easeInOutExpo',
    }

    if (mobile) {  
      slideTransition.translateY = -(home - button)
    } else {
      slideTransition.translateX = -(home - button)
    }
    
    const slide = anime(slideTransition)
    return await slide.finished
  }
}

export default transitions