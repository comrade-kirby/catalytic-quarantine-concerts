<script>
  import { onMount } from 'svelte'

  import anime from 'animejs/lib/anime.es.js'

  import Row from './Row/Row.svelte'
  import ExpandButton from './ExpandButton/ExpandButton.svelte'
  
  export let dayIndex
  export let delay
  export let day
  export let schedule
  export let bios
  export let yOffset = 500
  
  let height
  let open = false
  let hover = false

  const calcYOffset = (yOffset, height) => {
    return yOffset - (height / 2)
  }
  
  const toggleOpen = () => {
    open = !open
  }

  const findArtistBios = (row, bios) => {
    const artists = row.artists
    if (artists) {
      const artistBios = artists.map(artist => {
        return { name: artist, bio: bios[artist] }
       })
      return artistBios
    }
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
  class='schedule-day-container'
  class:open >
  <div 
    class='schedule-day' 
    bind:clientHeight={height}
    on:mouseenter={() => hover = true }
    on:mouseleave={() => hover = false }
    on:click={toggleOpen}
    style='--y-offset:{calcYOffset(yOffset, height)}px'>
    <ExpandButton 
      hover={hover}
      open={open} />
    <h4 class='day'>{day}</h4>
    {#if schedule && bios}
      <div class='rows' class:open>
        {#each schedule as row, i}
          <Row 
            row={row} 
            open={open}
            dayIndex={dayIndex}
            artistBios={findArtistBios(row, bios)}
            toggleOpen={toggleOpen} />
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .schedule-day-container {
    margin: 20px;
  }

 .schedule-day {
    top: var(--y-offset);
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    border-radius: 5px;
    max-width: 800px;
    padding: 20px;
    margin: auto;
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

  .open {
    margin: 10px;
  }

  .open .schedule-day {
    top: 0;
    max-height: 100%;
  }
  
  .open .rows {
    overflow-y: scroll;
  }
  
  @media only screen and (max-width: 1200px) {
    .schedule-day {
      top: 0;
    }
  }
 
  @media only screen and (max-width: 600px) {
    .schedule-day-container {
      margin: 10px;
    }
    
    .schedule-day {
      margin: 0;
      padding: 10px;
    }
    
    .day {
      margin: 10px;
    }
  }
</style>