<script>
  import { onMount } from 'svelte'

  export let open
  export let row

  let duration, fifteens, fives

  const getMinutes = (time) => {
    const hrsMnsArray = time.split(':')
    const hrsMinutes = Number(hrsMnsArray[0]) * 60
    const minsMinutes = Number(hrsMnsArray[1]) || 0
    const minutes =  hrsMinutes + minsMinutes

    return minutes
  }

  const calcDuration = () => {
    const startMins = getMinutes(row.start_time)
    const endMins = getMinutes(row.end_time)
    
    duration = endMins - startMins
  }

  const calcDashes = () => {
    const numFifteens = Math.floor(duration / 15)
    const numFives = (duration % 15) / 5

    fifteens = numFifteens ? [...Array(numFifteens).keys()] : []
    fives = numFives ? [...Array(numFives).keys()] : []
  }

  onMount(() => {
    calcDuration()
    calcDashes()
  })
</script>

<div 
  class='duration'
  class:open >
  {#if fives}
    {#each fifteens as fifteen}
      <svg viewBox="0 0 4 20" xmlns="http://www.w3.org/2000/svg">
        <rect width='4' height='20' />
      </svg>
    {/each}
    {#each fives as five}
     <svg viewBox="0 0 4 6" xmlns="http://www.w3.org/2000/svg">
        <rect width='4' height='6' />
      </svg>
    {/each}
  {/if}
</div>

<style>
  .duration {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    opacity: 0;
    transform: translateY(-40px);
    transition: 0s;
    margin-left: 2px;
  }

  .open {
    transition: 0.3s ease-in-out;
    opacity: 1;
    transform: translateY(0px);
  }

  svg {
    width: 4px;
    margin: 2px;
  }
</style>