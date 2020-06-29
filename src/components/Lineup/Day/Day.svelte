<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  export let index
  export let delay
  export let day
  export let yOffset = 500
  export let artists
  
  let height

  const calcYOffset = (yOffset, height) => {
    return yOffset - (height / 2)
  }
  
  onMount(() => {
    anime({
      targets: `.artist${index}`,
      translateX: [60, 0],
      opacity: [0.5, 1],
      easing: 'easeOutExpo',
      delay: anime.stagger(50, {start: delay, from: 'first'}),
    })
  })
</script>

<div 
  class='lineup-day' 
  bind:clientHeight={height}
  style='--y-offset:{calcYOffset(yOffset, height)}px'>
  <h4 class='day'>{day}</h4>
  <div class='artists'>
    {#each artists as artist, i}
      <h5 
        class='artist artist{index}' 
        class:lighter={i % 3 == 1}
        class:darker={i % 3 == 2}>
        {artist}
      </h5>
    {/each}
  </div>
</div>

<style>
 .lineup-day {
    position: relative;
    top: var(--y-offset);
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    padding: 20px 0px;
    margin: 0 20px;
  }

  .day {
    margin: 0 20px 20px;
    color: black;
    text-shadow: none;
    letter-spacing: 1rem;
  }
  
  .artists {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .artist {
    color: midnightblue;
    text-shadow: none;
    margin: 10px 20px;
    text-align: center;
  }

  .lighter { 
    color: steelblue;
  }

  .darker { 
    color: black;
  }
</style>