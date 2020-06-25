<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  let height

  const splitString = (string) => {

    return stringArray
  }

  onMount(() => {
    const elements = document.querySelectorAll('.letter');

    anime({
      targets: elements,
      translateY: 20,
      opacity: 1,
      delay: anime.stagger(20, {start: 1600, from: 'first'}),
      easing: 'easeInOutExpo'
    });
  })
</script>

<div class='festival2020-container'>
 {#each "festival".split("") as letter }
  <h1 class='letter'>{letter}</h1>
 {/each}
  <h1>2020</h1>
</div>

<style>
  .festival2020-container {
    display: flex;
    flex-direction: row;
    margin: 0 20px;
  }

  .letter {
    position: relative;
    top: -20px;
    font-family: var(--sans-serif-2);
    opacity: 0;
    margin-right: 8px;
  }
</style>