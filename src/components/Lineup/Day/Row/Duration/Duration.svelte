<script>
  import { onMount } from 'svelte'

  export let open
  export let row

  let duration

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

  onMount(() => {
    calcDuration()
  })
</script>

<div 
  class='duration'
  class:open >
  {duration}
</div>

<style>
  .duration {
    transform: scale(0);
    transition: 0s;
  }

  .open {
    transition: 0.3s ease-in-out;
    transform: scale(1);
  }
</style>