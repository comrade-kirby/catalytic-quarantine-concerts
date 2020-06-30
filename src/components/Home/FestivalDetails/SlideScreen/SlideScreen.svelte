<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  export let delay
  export let initialVisit
  let width

  onMount(() => {
    if (initialVisit) {
      anime({
        targets: '.slide-screen',
        translateX: width,
        delay: delay,
        easing: 'easeOutSine',
        duration: 300
      })
    }
  })
</script>

<div class='slide-screen' bind:clientWidth={width}></div>

<style>
  .slide-screen {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: aliceblue;
  }
</style>