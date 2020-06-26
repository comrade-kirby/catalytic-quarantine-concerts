<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  import CatalyticSound from './CatalyticSound/CatalyticSound.svelte'
  import Festival from './Festival/Festival.svelte'
  import Year from './Year/Year.svelte'
  import Date from './Date/Date.svelte'

  let height, rightWidth
  const screenColumns = [...Array(30).keys()]

  onMount(() => {
    const elements = document.querySelectorAll('.screen-column');

    anime({
      targets: elements,
      translateY: height,
      delay: anime.stagger(10, {start: 1000, from: 'last'}),
      easing: 'easeInOutExpo'
    });

    anime({
      targets: '.right-screen',
      translateX: rightWidth,
      delay: 3600,
      easing: 'easeInExpo',
      duration: 800
    })
  })
</script>

<div class='home' bind:clientHeight={height}>
  <div class='home-left'>
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
  <div class='home-right' bind:clientWidth={rightWidth}>
    <button class='right-button'>
      <h2 class='right-button-text'>LINEUP</h2>
    </button>
    <div class='right-screen'></div>
  </div>
</div>


<style>
  .home {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(0, 0, 0, 20%), rgba(0, 0, 0, 0%));
  }

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

  .home-right {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    position: relative;
  }

  .right-screen {
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: aliceblue;
  }

  .right-button {
    margin: 0;
    min-width: 150px;
    border: none;
    border-left: 5px solid aliceblue;
    background: rgba(0, 0, 0, 10%);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s ease-in-out;
  }

  .right-button-text {
    writing-mode: vertical-rl;
    text-orientation: upright;
    color: aliceblue;
    margin: 20px;
    font-family: var(--mono-1);
    transition: color 0.3s ease-in-out;

  }

  .right-button:hover {
    background: aliceblue;
  }

  .right-button:hover .right-button-text {
    color: navy;
  }
</style>