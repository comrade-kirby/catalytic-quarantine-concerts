<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  export let delay
  export let initialVisit

  let height

  onMount(() => {
    if (initialVisit) {
      anime({
        targets: '.catalytic-sound',
        translateY: [height, 0],
        delay,
        easing: 'easeInOutExpo'
      });
    }
  })
</script>

<div 
  class='catalytic-sound-container outro-item' 
  bind:clientHeight={height}
  style='--height:{height}px'>
  <h4 class='catalytic-sound festival-info-element'>catalytic sound</h4>
</div>

<style>
  .catalytic-sound-container {
    overflow: hidden;
    top: 0;
  }

  .catalytic-sound {
    margin: 0 20px 20px 20px;
    position: relative;
  }
</style>