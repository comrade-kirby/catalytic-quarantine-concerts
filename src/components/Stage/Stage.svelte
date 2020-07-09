<script>
  import { onMount } from 'svelte'
	import page from 'page'

  import Video from './Video/Video.svelte'
  import Chat from './Chat/Chat.svelte'
  import Header from '../Header/Header.svelte'
  import NextPageButton from '../NextPageButton/NextPageButton.svelte'
  import { mobile } from '../../stores'
  import stageTransitions from '../../transitions/stage'

  let pageHeight, pageWidth, contentHeight, contentWidth, outro

  page.exit('/stage', (ctx, next) => {
    outro = true
    const distance = $mobile ? contentHeight : contentWidth
    const direction = ctx.page.current === '/' ? 'back' : 'forward'
    const transition = stageTransitions.outro(distance, $mobile, direction)
    transition.finished.then(next)
  })

  onMount(() => {
    stageTransitions.intro(contentWidth)
  })
</script>

<div class='stage'
  bind:clientHeight={pageHeight}
  bind:clientWidth={pageWidth} >
  <Header headerText='STAGE' outro={outro} />
  <div class='video-container'
  bind:clientHeight={contentHeight}
  bind:clientWidth={contentWidth} >
    <Video />
    <NextPageButton 
      delay={4200}
      parentWidth={pageWidth} 
      parentHeight={pageHeight}
      nextPage={'schedule'} />
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
    align-items: center;
  }
</style>