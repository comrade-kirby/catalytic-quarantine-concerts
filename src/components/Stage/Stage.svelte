<script>
  import Video from './Video/Video.svelte'
  import Chat from './Chat/Chat.svelte'
  // export let stage
    
</script>

<div class='stage'>
  <Video />
  <Chat />
</div>

<style>
  .stage {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
  }
</style>