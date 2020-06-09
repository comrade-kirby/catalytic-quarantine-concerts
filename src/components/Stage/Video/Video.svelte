<script>
  import { onMount } from 'svelte'

  onMount(() => {
    new Twitch.Embed("twitch-embed", {
      width: 854,
      height: 480,
      channel: "Experimental_Sound_Studio",
      layout: 'video'
    });
  })
</script>

<div class='video'>
  <div id='twitch-embed'></div>
</div>

<style>
  .video {
    display: flex;
    justify-content: center;
    flex: 1;
  }
</style>