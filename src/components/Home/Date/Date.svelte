<script>
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

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
    setTimeout(typeDate, 2200)
  })
</script>

<div class='date'>
  {#if $date}
    <h3 class='dates-month'>{$date}</h3>
  {/if}
  <h3 class='date-placeholder'>{dateText}</h3>
</div>
<style>

  .date {
    position: relative;
  }

  .dates-month {
    position: absolute;
    font-family: var(--mono-1);
    margin: 0 20px;
    z-index: 1;
  }

  .date-placeholder {
    font-family: var(--mono-1);
    color: navy;
    opacity: 0.25;
    margin: 0 20px;
  }
</style>