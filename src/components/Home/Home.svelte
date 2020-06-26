<script>
  import FestivalInfo from './FestivalInfo/FestivalInfo.svelte'
  import SlideScreen from './SlideScreen/SlideScreen.svelte'
  import RightButton from './RightButton/RightButton.svelte'
</script>

<div class='home' >
  <FestivalInfo delay={1000} />
  <SlideScreen delay={4000}/>
  <RightButton delay={4200} />
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