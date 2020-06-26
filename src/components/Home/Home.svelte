<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  import HomeLeft from './HomeLeft/HomeLeft.svelte'
 

  let rightWidth

  onMount(() => {
    const elements = document.querySelectorAll('.screen-column');

    anime({
      targets: '.right-screen',
      translateX: rightWidth,
      delay: 3600,
      easing: 'easeInExpo',
      duration: 800
    })
  })
</script>

<div class='home' >
  <HomeLeft />
  <div class='home-right' bind:clientWidth={rightWidth}>
    <button class='right-button'>
      <h2 class='right-button-text'>LINEUP</h2>
    </button>
    <div class='right-screen'></div>
  </div>
</div>


<style>
  .home {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(0, 0, 0, 20%), rgba(0, 0, 0, 0%));
  }

  .home-right {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    position: relative;
  }

  .right-screen {
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: aliceblue;
  }

  .right-button {
    margin: 0;
    min-width: 150px;
    border: none;
    border-left: 5px solid aliceblue;
    background: rgba(0, 0, 0, 10%);
    display: flex;
    justify-content: center;
    align-items: center;
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