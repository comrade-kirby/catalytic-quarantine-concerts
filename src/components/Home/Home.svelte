<script>
  import FestivalInfo from './FestivalInfo/FestivalInfo.svelte'
  import SlideScreen from './SlideScreen/SlideScreen.svelte'
</script>

<div class='home' >
  <FestivalInfo />
  <SlideScreen />
  <button class='right-button'>
    <h2 class='right-button-text'>LINEUP</h2>
  </button>
</div>

<style>
  .home {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(0, 0, 0, 20%), rgba(0, 0, 0, 0%));
  }

  .right-button {
    position: absolute;
    right: 0;
    margin: 0;
    height: 100%;
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