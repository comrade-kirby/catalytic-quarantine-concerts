<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  onMount(() => {

    anime({
      targets: '.test-anime',
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 800
    });
  })
</script>

<div class='home'>
  <div class='test-anime'>
  </div>
  <h3 class='catalytic-sound'>catalytic sound</h3>
  <h1 class='festival'>Festival 2020</h1>
  <h3 class='dates-month'>July 10-12</h3>
</div>

<style>
  .test-anime {
    position: relative;
    height: 300px;
    width: 400px;
    background-color: red;
  }
  .catalytic-sound {
    margin-bottom: 20px;
  }
  .festival {
    font-family: var(--sans-serif-2);
  }

  .dates-month {
    font-family: var(--mono-1);
  }

  .home {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(90deg, rgba(0, 0, 0, 20%), rgba(0, 0, 0, 5%));
    padding: 20px;
  }
</style>