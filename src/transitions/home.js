import anime from 'animejs/lib/anime.es.js'
import page from 'page'

const transitions = {
  outro: async (homeWidth, buttonWidth) => {
    const outroItems = document.querySelectorAll('.outro-item')
    
    anime({
      targets: outroItems,
      opacity: [1, 0],
      delay: anime.stagger(20, {from: 'last'}),
      easing: 'easeInOutExpo',
    })
    
    anime({
      targets: '.home',
      background: [
        'linear-gradient(90deg, rgba(0, 0, 0, 25%), rgba(0, 0, 0, 0%))',
        'linear-gradient(90deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 0%))'
      ]
    })

    const slide = anime({
      targets: '.button-container',
      translateX: -(homeWidth - buttonWidth),
      easing: 'easeInOutExpo',
    })

    await slide.finished
    page('/lineup')
  }
}

export default transitions