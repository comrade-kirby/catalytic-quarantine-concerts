<script>
  let height
</script>

<div class='chat' bind:clientHeight={height}>
  <iframe
    title='twitch-chat'
    id="chat_embed"
    src="https://www.twitch.tv/embed/experimental_sound_studio/chat?parent=8a5309c2ab5f.ngrok.io"
    height={height - 10}>
  </iframe>
</div>

<style>
  .chat {
    height: 100%;
  }
</style>