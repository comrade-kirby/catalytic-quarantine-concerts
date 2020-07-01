<script>
  import FestivalInfo from './FestivalInfo/FestivalInfo.svelte'
  import FestivalDetails from './FestivalDetails/FestivalDetails.svelte'
  import RightButton from './RightButton/RightButton.svelte'

  export let initialVisit
  
  let width
</script>

<div class='home' bind:clientWidth={width}>
  <div class='festival-content'>
    <FestivalInfo delay={1000} initialVisit={initialVisit} />
    <FestivalDetails initialVisit={initialVisit} />
  </div>
  <RightButton delay={4200} initialVisit={initialVisit} homeWidth={width} />
</div>

<style>
  .home {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(0, 0, 0, 15%), rgba(0, 0, 0, 0%));
  }

  .festival-content {
    display: flex;
    flex: 1;
    flex-direction: row;
  }

  @media (max-width: 1200px) {
    .festival-content {
      flex-direction: column;
    }

    .home {
      flex-direction: column;
    }
  }
</style>