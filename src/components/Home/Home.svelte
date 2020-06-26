<script>
  import FestivalInfo from './FestivalInfo/FestivalInfo.svelte'
  import SlideScreen from './SlideScreen/SlideScreen.svelte'
  import RightButton from './RightButton/RightButton.svelte'
</script>

<div class='home' >
  <FestivalInfo />
  <SlideScreen />
  <RightButton />
</div>

<style>
  .home {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(0, 0, 0, 20%), rgba(0, 0, 0, 0%));
  }
</style>