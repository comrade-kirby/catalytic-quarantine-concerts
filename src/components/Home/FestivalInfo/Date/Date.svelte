<script>
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

  export let delay
  export let initialVisit

  const dateText = 'July 10-12'
  let textArray = dateText.split('')
  
  const date = writable('')

  const typeDate = () => {
    const dateInterval = setInterval(() => {
      const newDate = $date + textArray.shift()
      date.set(newDate)
      if (textArray.length == 0) { clearInterval(dateInterval) }
    }, 50)
  }

  onMount(() => {
    if (initialVisit) {
      setTimeout(typeDate, delay)
    }
  })
</script>

<div class='date outro-item'>
  {#if $date}
    <h3 class='dates-month'>{$date}</h3>
  {/if}
  <h3 class='date-placeholder festival-info-element'>{dateText}</h3>
</div>
<style>

  .date {
    margin: 0 20px;
    position: relative;
  }

  .dates-month {
    position: absolute;
    font-family: var(--sans-serif-2);
    z-index: 1;
  }

  .date-placeholder {
    font-family: var(--sans-serif-2);
    opacity: 0;
  }
</style>