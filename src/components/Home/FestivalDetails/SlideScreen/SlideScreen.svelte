<script>
  import { onMount, tick } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'
  import { mobile } from '../../../../stores'

  export let delay
  export let initialVisit
  
  let width, height
  
  onMount(async () => {
    if (initialVisit) {
      await tick()

      const transition = {
        targets: '.slide-screen',
        delay: delay,
        easing: 'easeOutSine',
        duration: 300
      }
      
      if ($mobile) {
        transition.translateY = height + 100
      } else {
        transition.translateX = width + 100
      }

      anime(transition)
    }
  })
</script>

<div class='slide-screen'
  bind:clientWidth={width}
  bind:clientHeight={height}>
</div>

<style>
  .slide-screen {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: calc(100% + 130px);
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: aliceblue;
  }

  @media only screen and (max-width: 1200px) {
    .slide-screen {
      height: calc(100% + 120px);
      width: 100%;
    }
  }
</style>