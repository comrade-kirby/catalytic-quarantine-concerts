<script>
	import router from 'page'
  import anime from 'animejs/lib/anime.es.js'
  
  import FestivalInfo from './FestivalInfo/FestivalInfo.svelte'
  import SlideScreen from './SlideScreen/SlideScreen.svelte'
  import RightButton from './RightButton/RightButton.svelte'

  let width

  export let initialVisit

  const outro = async (buttonWidth) => {
    const outroItems = document.querySelectorAll('.outro-item')
    
    anime({
      targets: outroItems,
      opacity: [1, 0],
      delay: anime.stagger(20, {from: 'first'}),
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
      translateX: -(width - buttonWidth),
      easing: 'easeInOutExpo',
    })

    await slide.finished
    router('/lineup')
  }
</script>

<div class='home' bind:clientWidth={width}>
  <FestivalInfo delay={1000} initialVisit={initialVisit} />
  <SlideScreen delay={4000} initialVisit={initialVisit} />
  <RightButton delay={4200} initialVisit={initialVisit} outro={outro} />
</div>

<style>
  .home {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(0, 0, 0, 15%), rgba(0, 0, 0, 0%));
  }
</style>