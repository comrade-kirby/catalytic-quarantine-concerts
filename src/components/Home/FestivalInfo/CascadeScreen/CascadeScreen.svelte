<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'
  
  export let delay

  let height

  const screenColumns = [...Array(30).keys()]

  onMount(() => {
    const elements = document.querySelectorAll('.screen-column');

    anime({
      targets: elements,
      translateY: height,
      delay: anime.stagger(10, {start: delay, from: 'last'}),
      easing: 'easeInOutExpo'
    })
  })
</script>


<div class='screen' bind:clientHeight={height}>
  {#each screenColumns as column}
    <div class='screen-column'></div>
  {/each}
</div>

<style>
.screen {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .screen-column {
    display: flex;
    flex: 1;
    background: aliceblue;
  }
</style>