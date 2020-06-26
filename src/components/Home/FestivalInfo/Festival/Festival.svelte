<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  export let delay

  onMount(() => {
    const elements = document.querySelectorAll('.letter');

    anime({
      targets: elements,
      translateY: 20,
      opacity: [0, 1],
      delay: anime.stagger(20, {start: delay, from: 'first'}),
      easing: 'easeInOutExpo'
    });
  })
</script>

<div class='festival outro-item'>
  {#each "Festival".split("") as letter }
    <h1 class='letter'>{letter}</h1>
  {/each}
</div>

<style>
  .festival {
    display: flex;
    flex-direction: row;
  }
  
  .letter {
    position: relative;
    top: -20px;
    font-family: var(--sans-serif-2);
    margin-right: 8px;
  }
</style>