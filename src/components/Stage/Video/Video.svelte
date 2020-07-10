<script>
  import { onMount } from 'svelte'
  
  let width, height

  onMount(() => {
    new Twitch.Embed("twitch-embed", {
      width: width - 40,
      height: height - 40,
      chat: true,
      channel: "experimental_sound_studio",
      // layout: 'video'
    });
  })
</script>

<div class='video outro-item' 
  bind:clientWidth={width}
  bind:clientHeight={height} >
  <div id='twitch-embed'></div>
</div>

<style>
  .video {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    height: 100%;
  }
</style>