<script>
  import { onMount } from 'svelte'
	import page from 'page'

  import Video from './Video/Video.svelte'
  import Chat from './Chat/Chat.svelte'
  import Header from '../Header/Header.svelte'
  import { mobile } from '../../stores'
  import stageTransitions from '../../transitions/stage'

    
  let height, width, outro

  page.exit('/stage', (ctx, next) => {
    outro = true
    const distance = $mobile ? height : width
    const transition = stageTransitions.outro(distance, $mobile)
    transition.finished.then(next)
  })

  onMount(() => {
    stageTransitions.intro(width)
  })
</script>

<div class='stage'>
  <Header headerText='STAGE' outro={outro} />
  <div class='video-container'
    bind:clientHeight={height}
    bind:clientWidth={width} >
    <Video />
    <Chat />
  </div>
</div>

<style>
  .stage {
    display: flex;
    flex-direction: row;
    flex: 1;
  }

  .video-container {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
  }
</style>