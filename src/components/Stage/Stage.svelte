<script>
  import { onMount } from 'svelte'
	import page from 'page'

  import Video from './Video/Video.svelte'
  import Chat from './Chat/Chat.svelte'
  import Header from '../Header/Header.svelte'
  import NextPageButton from '../NextPageButton/NextPageButton.svelte'
  import { mobile, lastPage } from '../../stores'
  import stageTransitions from '../../transitions/stage'

  let pageHeight, pageWidth, contentHeight, contentWidth, outro, animateIn

  page.exit('/stage', (ctx, next) => {
    outro = true
    const distance = $mobile ? contentHeight : contentWidth
    const direction = ctx.page.current === '/' ? 'back' : 'forward'
    const transition = stageTransitions.outro(distance, $mobile, direction)
    transition.finished.then(next)
  })

  onMount(() => {
    animateIn = $lastPage == 'home' ? true : false
    stageTransitions.intro(contentWidth, $lastPage)
    lastPage.set('stage')
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
      delay={500}
      parentWidth={pageWidth} 
      parentHeight={pageHeight}
      animateIn={animateIn}
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

  @media only screen and (max-width: 1200px) {
    .stage {
      flex-direction: column;
    }

    .video-container {
      flex-direction: column;
    }
  }
</style>