<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  import Festival from './Festival/Festival.svelte'
  import Year from './Year/Year.svelte'

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
  <Festival />
  <Year />
</div>

<style>
  .festival2020-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 20px;
    align-items: flex-end;
  }
</style>