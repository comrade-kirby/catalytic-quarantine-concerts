<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  import CatalyticSound from './CatalyticSound/CatalyticSound.svelte'
  import Festival from './Festival/Festival.svelte'
  import Year from './Year/Year.svelte'
  import Date from './Date/Date.svelte'

  let height
  const screenColumns = [...Array(34).keys()]

  onMount(() => {
    const elements = document.querySelectorAll('.screen-column');

    anime({
      targets: elements,
      translateY: height,
      delay: anime.stagger(10, {start: 1000, from: 'last'}),
      easing: 'easeInOutExpo'
    });
  })
</script>

<div class='home' bind:clientHeight={height}>
  <div class='home-left'>
    <CatalyticSound />
    <div class='festival2020-container'>
      <Festival />
      <Year />
    </div>
    <Date />
    <div class='screen'>
      {#each screenColumns as column}
        <div class='screen-column'></div>
      {/each}
    </div>
  </div>
  <div class='home-right'></div>
</div>


<style>
  .home {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .home-left {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0, 0, 0, 20%);
  }

  .festival2020-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 20px;
    align-items: flex-end;
  }

  .home-right {
    flex: 1;
    background-color: aliceblue;
  }

  .screen {
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