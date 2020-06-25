<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  let height


  onMount(() => {
    const elements = document.querySelectorAll('.twenty')
    const containers = document.querySelectorAll('.twenty-container')
    anime({
      targets: elements,
      rotateX: [90, 0],
      opacity: [0.7, 1],
      delay: anime.stagger(250, {start: 2500, from: 'first'}),
      easing: 'linear',
      duration: 300
    })
    anime({
      targets: containers,
      translateY: [-height / 4, 0],
      delay: anime.stagger(250, {start: 2500, from: 'first'}),
      easing: 'linear',
      duration: 300
    })
  })
</script>

<div class='year' bind:clientHeight={height}>
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
    margin-top: 20px;
    /* transform: rotateY(-45deg); */
 }
</style>