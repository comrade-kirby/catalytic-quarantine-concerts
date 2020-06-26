<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  let width

  onMount(() => {
    anime({
      targets: '.right-screen',
      translateX: width,
      delay: 3700,
      easing: 'cubicBezier(0.50,-0.03,0.75,0.05)',
      duration: 800
    })
  })
</script>

<div class='right-screen' bind:clientWidth={width}>
  <div class='bounce-buffer'></div>
</div>

<style>
  .right-screen {
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: aliceblue;
  }

  .bounce-buffer {
    position: relative;
    right: -50px;
    width: 50px;
    height: 100%;
    background-color: aliceblue;
  }
</style>