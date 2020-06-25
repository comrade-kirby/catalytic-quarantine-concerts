<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  import CatalyticSound from './CatalyticSound/CatalyticSound.svelte'
  import Festival2020 from './Festival2020/Festival2020.svelte'

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
    <Festival2020 />
    <h3 class='dates-month'>July 10-12</h3>
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
 

  .festival {
    font-family: var(--sans-serif-2);
    margin: 0 20px;
    /* opacity: 0; */
  }

  .dates-month {
    /* opacity: 0; */
    font-family: var(--mono-1);
    margin: 0 20px;
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