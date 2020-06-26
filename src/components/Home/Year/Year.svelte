<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  export let delay
  let width

  const translateContainers = () => {
    const containers = document.querySelectorAll('.twenty-container')

    anime({
      targets: containers,
      translateX: [width / 4, 0],
      delay: anime.stagger(250, {start: delay, from: 'first'}),
      easing: 'easeInQuint',
    })
  }

  const rotateTwenties = () => {
    const twenties = document.querySelectorAll('.twenty')

    anime({
      targets: twenties,
      rotateY: [-100, 0],
      opacity: [0, 1],
      delay: anime.stagger(250, {start: delay, from: 'first'}),
      easing: 'easeInQuint',
    })
  }
  
  onMount(() => {
    translateContainers()
    rotateTwenties()
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