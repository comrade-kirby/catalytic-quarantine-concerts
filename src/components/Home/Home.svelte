<script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  import FestivalInfo from './FestivalInfo/FestivalInfo.svelte'
  import FestivalDetails from './FestivalDetails/FestivalDetails.svelte'
  import NextPageButton from './NextPageButton/NextPageButton.svelte'

  export let initialVisit
  
  let width, height

  onMount(() => {
    if (initialVisit) {
      anime({
        targets: '.catalytic-link',
        opacity: [0, 1],
        delay: 4500,
        easing: 'easeInOutExpo'
      });
    }
  })
</script>

<div class='home' bind:clientWidth={width} bind:clientHeight={height}>
  <div class='main'>
    <div class='festival-content'>
      <FestivalInfo delay={1000} initialVisit={initialVisit} />
      <FestivalDetails initialVisit={initialVisit} />
    </div>
    <a class='catalytic-link outro-item festival-info-element' 
    href='https://catalyticsound.com/'>
      merch
      <span class="material-icons">arrow_forward</span>
    </a>  
  </div>
  <NextPageButton 
    delay={4200}
    initialVisit={initialVisit}
    homeWidth={width} 
    homeHeight={height}
    nextPage={'schedule'} />
</div>

<style>
  .home {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(0, 0, 0, 15%), rgba(0, 0, 0, 0%));
  }

  .main {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .festival-content {
    display: flex;
    flex: 1;
    flex-direction: row;
  }

  .catalytic-link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 20px;
    top: 20px;
    text-shadow: none;
    border-radius: 5px;
    z-index: 1;
  }

  @media only screen and (max-width: 1200px) {
    .festival-content {
      flex-direction: column;
    }

    .home {
      flex-direction: column;
    }

    .catalytic-link {
      right: 10px;
      top: 10px;
    }
  }
</style>