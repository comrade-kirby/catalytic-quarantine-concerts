<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  export let delay

  let width

  onMount(() => {
    anime({
      targets: '.right-screen',
      translateX: width,
      delay: delay,
      easing: 'easeOutSine',
      duration: 300
    })
  })
</script>

<div class='right-screen' bind:clientWidth={width}></div>

<style>
  .right-screen {
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: aliceblue;
  }
</style>