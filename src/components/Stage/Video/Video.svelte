<script>
  import { onMount } from 'svelte'
  
  let width

  onMount(() => {
    new Twitch.Embed("twitch-embed", {
      width: width - 40,
      height: 480,
      chat: true,
      channel: "experimental_sound_studio",
      layout: 'video'
    });
  })
</script>

<div class='video outro-item' bind:clientWidth={width}>
  <div id='twitch-embed'></div>
</div>

<style>
  .video {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
  }
</style>