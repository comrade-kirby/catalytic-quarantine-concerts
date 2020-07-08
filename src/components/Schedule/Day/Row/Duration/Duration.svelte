<script>
  import { onMount } from 'svelte'

  export let open
  export let row

  let duration, hours, fifteens, fives

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
    const numHours = Math.floor(duration / 60)
    const numFifteens = Math.floor((duration % 60) / 15)
    const numFives = (duration % 15) / 5

    hours = numHours ? [...Array(numHours).keys()] : []
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
  <div class='dashes'>
    {#if fives}
      {#each hours as hour}
        <svg viewBox='0 0 4 50' xmlns='http://www.w3.org/2000/svg'>
          <rect width='4' height='50' />
        </svg>
      {/each}
      {#each fifteens as fifteen}
        <svg viewBox='0 0 4 20' xmlns='http://www.w3.org/2000/svg'>
          <rect width='4' height='20' />
        </svg>
      {/each}
      {#each fives as five}
      <svg viewBox='0 0 4 7' xmlns='http://www.w3.org/2000/svg'>
          <rect width='4' height='7' />
        </svg>
      {/each}
    {/if}
  </div>
    <h6 class='number'>{duration}m</h6>
</div>

<style>
  .duration {
    display: flex;
    flex-direction: row;
    align-items: center;
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

  .dashes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  svg {
    width: 4px;
    margin: 2px;
    fill: midnightblue;
  }

  .number {
    text-shadow: none;
    color: steelblue;
    font-size: 10px;
    margin-left: 5px;
  }
</style>