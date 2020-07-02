import anime from 'animejs/lib/anime.es.js'
import page from 'page'

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
    anime({
      targets: '.home',
      background: [
        `linear-gradient(${gradientRotation}, rgba(0, 0, 0, 15%), rgba(0, 0, 0, 0%))`,
        `linear-gradient(${gradientRotation}, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 0%))`
      ]
    })

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
    await slide.finished
    page('/lineup')
  }
}

export default transitions