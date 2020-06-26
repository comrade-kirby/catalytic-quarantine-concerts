<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  let width

  onMount(() => {
    anime({
      targets: '.right-screen',
      translateX: width,
      delay: 3600,
      easing: 'easeInExpo',
      duration: 800
    })
  })
</script>

<div class='right-screen' bind:clientWidth={width}></div>

<style>
  .right-screen {
    flex: 1;
    background-color: aliceblue;
  }
</style>