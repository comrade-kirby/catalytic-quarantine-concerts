<script>
  import FestivalInfo from './FestivalInfo/FestivalInfo.svelte'
  import SlideScreen from './SlideScreen/SlideScreen.svelte'
  import RightButton from './RightButton/RightButton.svelte'

  export let initialVisit
  
  let width
</script>

<div class='home' bind:clientWidth={width}>
  <FestivalInfo delay={1000} initialVisit={initialVisit} />
  {#if initialVisit}
    <SlideScreen delay={4000} initialVisit={initialVisit} />
  {/if}
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
</style>