<script>
  import FestivalInfo from './FestivalInfo/FestivalInfo.svelte'
  import FestivalDetails from './FestivalDetails/FestivalDetails.svelte'
  import RightButton from './RightButton/RightButton.svelte'

  export let initialVisit
  
  let width, height
</script>

<div class='home' bind:clientWidth={width} bind:clientHeight={height}>
  <div class='main'>
    <div class='festival-content'>
      <FestivalInfo delay={1000} initialVisit={initialVisit} />
      <FestivalDetails initialVisit={initialVisit} />
    </div>
    <a class='catalytic-link outro-item festival-info-element' 
    href='https://catalyticsound.com/'
    target="_blank" rel="noopener noreferrer">
      catalytic
      <span class="material-icons">arrow_forward</span>
    </a>  
  </div>
  <RightButton 
    delay={4200}
    initialVisit={initialVisit}
    homeWidth={width} 
    homeHeight={height} />
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