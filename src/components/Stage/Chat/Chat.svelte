<script>
  let height
</script>

<div class='chat' bind:clientHeight={height}>
  <iframe title="twitch chat" 
    frameborder="100"
    scrolling="true"
    id="Experimental_Sound_Studio"
    src="https://www.twitch.tv/embed/experimental_sound_studio/chat?"
    height={height}>
  </iframe>
</div>

<style>
  .chat {
    height: 100%;
  }
</style>