<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  let width

  onMount(() => {
    anime({
      targets: '.right-button',
      translateX: [width + 20, 0],
      delay: 4500,
      easing: 'easeOutExpo',
    })
  })
</script>

<div class='button-container'>
  <button class='right-button' bind:clientWidth={width}>
    <h2 class='right-button-text'>LINEUP</h2>
  </button>
</div>
  
<style>

  .button-container {
    position: absolute;
    right: 0;
    height: 100%;
    overflow: hidden;
    display: flex;
    min-width: 150px;
  }

  .right-button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 0;
    border: none;
    border-left: 5px solid aliceblue;
    background: rgba(0, 0, 0, 10%);
    transition: background 0.3s ease-in-out;
  }

  .right-button-text {
    writing-mode: vertical-rl;
    text-orientation: upright;
    color: aliceblue;
    margin: 20px;
    font-family: var(--mono-1);
    transition: color 0.3s ease-in-out;

  }

  .right-button:hover {
    background: aliceblue;
  }

  .right-button:hover .right-button-text {
    color: navy;
  }
</style>