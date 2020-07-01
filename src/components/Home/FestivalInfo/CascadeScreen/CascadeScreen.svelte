<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'
  
  export let delay
  export let height

  const screenColumns = [...Array(31).keys()]

  onMount( async () => {
    const elements = document.querySelectorAll('.screen-column');

    anime({
      targets: elements,
      translateY: height,
      delay: anime.stagger(10, {start: delay, from: 'last'}),
      easing: 'easeInOutExpo'
    })
  })
</script>


<div class='screen'>
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
    min-height: 100%;
    overflow: hidden;
  }

  .screen-column {
    display: flex;
    flex: 1;
    background: aliceblue;
  }
</style>