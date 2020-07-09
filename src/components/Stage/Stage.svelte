<script>
  import Video from './Video/Video.svelte'
  import Chat from './Chat/Chat.svelte'
    
</script>

<div class='stage'>
  <!-- <h1>2</h1> -->

  <Video />
  <!-- <Chat /> -->
</div>

<style>
  h1 {
    color: green;
    z-index: 3;
  }
  .stage {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
  }
</style>