<script>
  import { onMount } from 'svelte'

  import anime from 'animejs/lib/anime.es.js'
  
  export let index
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
  on:click={() => open = !open}
  style='--y-offset:{calcYOffset(yOffset, height)}px'>
  <h4 class='day'>{day}</h4>
  <div class='rows' class:open>
    {#each schedule as row, i}
        <div class='row' class:visible={row.type == 'Set' || open}>
          <h6 class='start-time'>{row.start_time}</h6>
          <h6
            class='artist artist{index}' 
            class:lighter={i % 3 == 1}
            class:darker={i % 3 == 2}>
            {row.act}
          </h6>
        </div>
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
    border-radius: 5px;
    margin: 20px;
    max-width: 800px;
  }

  .day {
    margin: 20px;
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

  .row {
    max-width: 0;
    max-height: 0;
    opacity: 0;
    transition: 0s;
  }

  .visible {
    max-width: unset;
    max-height: unset;
    opacity: 1;
    transition: 0.3s ease-in-out;
  }

  .start-time {
    max-width: 0;
    max-height: 0;
    text-shadow: none;
    color: black;
    opacity: 0;
    transform: scale(0);
    transition: 0.1s ease-in-out;
  }

  .artist {
    color: midnightblue;
    text-shadow: none;
    margin: 10px 20px;
    text-align: center;
  }

  .open .row {
    display: flex;
    width: 100%;
  }

  .open .artist {
    text-align: left;
  }

  .open .start-time {
    max-width: unset;
    max-height: unset;
    min-width: 30px;
    margin: 10px 20px;
    opacity: 1;
    transform: scale(1);
    transition: 0.3s ease-in-out;
  }

  .lighter { 
    color: steelblue;
  }

  .darker { 
    color: black;
  }

  @media only screen and (max-width: 1200px) {
    .lineup-day {
      top: 0;
    }
  }
 
  @media only screen and (max-width: 500px) {
    .lineup-day {
      margin: 10px;
    }
    
    .day {
      margin: 10px;
    }

    .artist {
      margin: 5px 10px;
    }
  }
</style>