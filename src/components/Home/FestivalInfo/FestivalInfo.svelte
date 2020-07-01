<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  import CatalyticSound from './CatalyticSound/CatalyticSound.svelte'
  import Festival from './Festival/Festival.svelte'
  import Year from './Year/Year.svelte'
  import Date from './Date/Date.svelte'
  import CascadeScreen from './CascadeScreen/CascadeScreen.svelte'

  export let delay
  export let initialVisit
  let height

  onMount(() => {
    if (!initialVisit) {
      const elements = document.querySelectorAll('.festival-info-element')

      anime({
        targets: elements,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        delay: anime.stagger(50, {from: 'first'}),
      })
    }
  })
</script>

<div class='festival-info' bind:clientHeight={height}>
  <CatalyticSound delay={delay + 300} initialVisit={initialVisit} />
  <div class='festival2020-container'>
    <Festival delay={delay + 600} initialVisit={initialVisit} />
    <Year delay={delay + 1700} initialVisit={initialVisit} />
  </div>
  <Date delay={delay + 1500} initialVisit={initialVisit} />
  {#if initialVisit && height}
    <CascadeScreen delay={delay} height={height} />
  {/if}
</div>


<style>
  .festival-info {
    position: relative;
    display: flex;
    flex: 1;
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