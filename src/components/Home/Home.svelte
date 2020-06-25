<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  let height
  const screenColumns = [...Array(49).keys()]

  onMount(() => {
    var elements = document.querySelectorAll('.screen-column');

    anime({
      targets: elements,
      translateY: height,
      delay: anime.stagger(10, {start: 500, from: 'center'}),
      easing: 'easeInOutExpo'
    });
  })
</script>

<div class='home' 
  bind:clientHeight={height}>
  <h3 class='catalytic-sound'>catalytic sound</h3>
  <h1 class='festival'>Festival 2020</h1>
  <h3 class='dates-month'>July 10-12</h3>
</div>
<div class='screen'>
  {#each screenColumns as column}
    <div class='screen-column'></div>
  {/each}
</div>

<style>
  .catalytic-sound {
    margin-bottom: 20px;
  }

  .festival {
    font-family: var(--sans-serif-2);
  }

  .dates-month {
    font-family: var(--mono-1);
  }

  .home {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(90deg, rgba(0, 0, 0, 20%), rgba(0, 0, 0, 5%));
    padding: 20px;
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