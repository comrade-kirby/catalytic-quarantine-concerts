<script>
  // import { onMount } from 'svelte'
  // import anime from 'animejs/lib/anime.es.js'

  import CatalyticSound from './CatalyticSound/CatalyticSound.svelte'
  import Festival from './Festival/Festival.svelte'
  import Year from './Year/Year.svelte'
  import Date from './Date/Date.svelte'
  import CascadeScreen from './CascadeScreen/CascadeScreen.svelte'

  export let delay
  export let initialVisit
</script>

<div class='festival-info' >
    <CatalyticSound delay={delay + 300} />
    <div class='festival2020-container'>
      <Festival delay={delay + 600} initialVisit={initialVisit} />
      <Year delay={delay + 1700} initialVisit={initialVisit} />
    </div>
    <Date delay={delay + 1500} initialVisit={initialVisit} />\
    {#if initialVisit}
      <CascadeScreen delay={delay} />
    {/if}
  </div>


<style>
  .festival-info {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .festival2020-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 20px;
    align-items: flex-end;
  }
</style>