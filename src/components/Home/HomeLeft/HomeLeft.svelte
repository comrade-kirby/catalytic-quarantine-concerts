<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  import CatalyticSound from './CatalyticSound/CatalyticSound.svelte'
  import Festival from './Festival/Festival.svelte'
  import Year from './Year/Year.svelte'
  import Date from './Date/Date.svelte'

  let height
  
  const screenColumns = [...Array(30).keys()]

  onMount(() => {
    const elements = document.querySelectorAll('.screen-column');

    anime({
      targets: elements,
      translateY: height,
      delay: anime.stagger(10, {start: 1000, from: 'last'}),
      easing: 'easeInOutExpo'
    })
  })
</script>

<div class='home-left' bind:clientHeight={height}>
    <CatalyticSound delay={1300} />
    <div class='festival2020-container'>
      <Festival delay={1600} />
      <Year delay={2500} />
    </div>
    <Date delay={2500} />
    <div class='left-screen'>
      {#each screenColumns as column}
        <div class='screen-column'></div>
      {/each}
    </div>
  </div>


<style>
  .home-left {
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

 .left-screen {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .screen-column {
    display: flex;
    flex: 1;
    background: aliceblue;
  }
</style>