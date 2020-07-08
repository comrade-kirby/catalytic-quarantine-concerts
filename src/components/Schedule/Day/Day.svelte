<script>
  import { onMount } from 'svelte'

  import anime from 'animejs/lib/anime.es.js'

  import Row from './Row/Row.svelte'

  export let dayIndex
  export let delay
  export let day
  export let schedule
  export let yOffset = 500
  
  let height
  let open = false

  const calcYOffset = (yOffset, height) => {
    return yOffset - (height / 2)
  }
  
  onMount(() => {
    anime({
      targets: `.artist${dayIndex}`,
      translateX: [60, 0],
      opacity: [0.5, 1],
      easing: 'easeOutExpo',
      delay: anime.stagger(20, {start: delay, from: 'first'}),
    })
  })
</script>

<div 
  class='schedule-day' 
  bind:clientHeight={height}
  class:open
  on:click={() => open = !open}
  style='--y-offset:{calcYOffset(yOffset, height)}px'>
  <h4 class='day'>{day}</h4>
  <div class='rows' class:open>
    {#each schedule as row, i}
      <Row 
        row={row} 
        open={open}
        index={i} 
        dayIndex={dayIndex} />
    {/each}
  </div>
</div>

<style>
 .schedule-day {
    position: relative;
    top: var(--y-offset);
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    border-radius: 5px;
    max-width: 800px;
    padding: 20px;
    margin: auto;
  }

  .open {
    top: 0;
    max-height: 100%;
    overflow-y: scroll;
  }

  .day {
    margin-bottom: 20px;
    color: black;
    text-shadow: none;
    letter-spacing: 1rem;
  }
  
  .rows {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 1200px) {
    .schedule-day {
      top: 0;
    }
  }
 
  @media only screen and (max-width: 500px) {
    .schedule-day {
      margin: 0;
      padding: 10px;
    }
    
    .day {
      margin: 10px;
    }
  }
</style>