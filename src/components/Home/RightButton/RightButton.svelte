<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  export let delay
  export let outro

  let width

  onMount(() => {
    const letters = document.querySelectorAll('.button-letter')

    anime({
      targets: '.right-button',
      translateX: [width + 20, 0],
      delay: delay,
      easing: 'easeOutExpo',
    })

    anime({
      targets: letters,
      translateX: [width + 20, 0],
      opacity: [0, 1],
      delay: anime.stagger(50, {start: delay, from: 'center'}),
      easing: 'easeOutExpo'
    })
  })
</script>

<div class='button-container'>
  <button on:click={() => outro(width)}
    class='right-button' 
    bind:clientWidth={width}>
    {#each "LINEUP".split("") as letter }
      <h3 class='button-letter'>{letter}</h3>
    {/each}
  </button> 
</div>
  
<style>
  .button-container {
    position: absolute;
    right: 0;
    height: 100%;
    overflow: hidden;
    display: flex;
    transition: right 0.3s ease-in-out;
  }

  .right-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 0;
    border: none;
    border-left: 5px solid aliceblue;
    background: linear-gradient(90deg, rgba(0, 0, 0, 15%), rgba(0, 0, 0, 0%));
  }

  .button-letter {
    margin: 10px 30px;
    color: aliceblue;
    font-family: var(--mono-1);
  }
  
  .button-container:hover {
    right: 20px;
  }
</style>