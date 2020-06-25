<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  onMount(() => {
    const elements = document.querySelectorAll('.letter');

    anime({
      targets: elements,
      translateY: 20,
      opacity: [0, 1],
      delay: anime.stagger(20, {start: 1600, from: 'first'}),
      easing: 'easeInOutExpo'
    });
  })
</script>

{#each "festival".split("") as letter }
  <h1 class='letter'>{letter}</h1>
{/each}

<style>
  .letter {
    position: relative;
    top: -20px;
    font-family: var(--sans-serif-2);
    margin-right: 8px;
  }
</style>