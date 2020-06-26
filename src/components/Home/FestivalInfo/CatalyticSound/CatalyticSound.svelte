<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  export let delay

  let height

  onMount(() => {
    anime({
      targets: '.catalytic-sound',
      translateY: -height,
      delay,
      easing: 'easeInOutExpo'
    });
  })
</script>

<div 
  class='catalytic-sound-container' 
  bind:clientHeight={height}
  style='--height:{height}px'>
  <h4 class='catalytic-sound'>catalytic sound</h4>
</div>

<style>
  .catalytic-sound-container {
    overflow: hidden;
  }

  .catalytic-sound {
    margin: 0 20px 20px 20px;
    position: relative;
    top: var(--height);
  }
</style>