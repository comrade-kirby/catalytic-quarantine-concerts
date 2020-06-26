<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  let height

  const translateContainers = () => {
    const containers = document.querySelectorAll('.twenty-container')

    anime({
      targets: containers,
      translateY: [-height / 4, 0],
      translateX: [-5, 0],
      delay: anime.stagger(250, {start: 2200, from: 'first'}),
      easing: 'easeInQuint',
    })
  }

  const rotateTwenties = () => {
    const twenties = document.querySelectorAll('.twenty')

    anime({
      targets: twenties,
      rotateX: [-100, 0],
      rotateY: [10, 0],
      rotateZ: [-10, 0],
      opacity: [0, 1],
      delay: anime.stagger(250, {start: 2200, from: 'first'}),
      easing: 'easeInQuint',
    })
  }
  
  onMount(() => {
    translateContainers()
    rotateTwenties()
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
    margin-bottom: 63px;
 }

 .twenty {
    font-family: var(--mono-1);
 }
</style>