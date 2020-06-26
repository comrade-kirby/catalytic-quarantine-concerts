<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  let width


  onMount(() => {
    const elements = document.querySelectorAll('.twenty')
    const containers = document.querySelectorAll('.twenty-container')
    anime({
      targets: elements,
      rotateY: [90, 0],
      delay: anime.stagger(300, {start: 2500, from: 'first'}),
      easing: 'easeInOutQuint',
    })
    anime({
      targets: containers,
      translateX: [width / 4, 0],
      delay: anime.stagger(300, {start: 2500, from: 'first'}),
      easing: 'easeInOutQuint',
    })
  })
</script>

<div class='year' bind:clientWidth={width}>
  <div class='twenty-container'>
    <h3 class='twenty'>20</h3>
  </div>
  <div class='twenty-container'>
    <h3 class='twenty'>20</h3>
  </div>
</div>

<style>
 .year {
    display: flex;
    flex-direction: row;
    margin-bottom: 63px;
 }

 .twenty {
    font-family: var(--mono-1);
 }
</style>