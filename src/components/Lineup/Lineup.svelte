 <script>
  import { onMount } from 'svelte'
	import page from 'page'
  import anime from 'animejs/lib/anime.es.js'

	import lineupTransitions from '../../transitions/lineup'
  import Day from './Day/Day.svelte'
  import { mobile } from '../../stores'
  
  let height, width, outro
  let schedules = []

  const yOffsets = [0.5, 0.7, 0.35]
  const days = ['Friday', 'Saturday', 'Sunday']

  const parseSchedule = async () => {
    const response = await fetch('schedule.json')
    const json = await response.json()
    schedules = Object.keys(json).map(key => json[key])
    return
  }

  page.exit('/lineup', (ctx, next) => {
    outro = true
    const distance = $mobile ? height : width
    const transition = lineupTransitions.outro(distance, $mobile)
    transition.finished.then(next)
  })
  
  onMount(async () => {
    await parseSchedule()
    lineupTransitions.intro(width)
  })
</script>


<div class='lineup'>
  <div class='header-container' class:outro>
    {#each "LINEUP".split("") as letter }
      <h3 class='button-letter'>{letter}</h3>
    {/each}
  </div>   
  <div class='lineup-content' 
  bind:clientHeight={height}
  bind:clientWidth={width}>
    {#each schedules as schedule, i}
      <div class='lineup-day-container'>
        <Day 
          index={i}
          delay={200}
          day={days[i]} 
          schedule={schedule}
          yOffset={yOffsets[i] * height} />
      </div>
    {/each}
  </div>
</div>
  
<style>
  .lineup {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
  }

  .header-container {
    display: flex;
    height: 100%;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6.4px;
    background-color: aliceblue;
    transition: background-color 1s ease-in-out 0.45s, border-right 1s ease-in-out 0.45s;
  }

  .button-letter {
    margin: 10px 30px;
    color: black;
    text-shadow: none;
    transition: color 1s ease-in-out 0.45s;
  }

  .lineup-content {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .lineup-day-container {
    padding: 20px;
  }

  .header-container.outro {
    background-color: rgba(0, 0, 0, 35%);
    border-left: 5px solid aliceblue;
  }

  .header-container.outro .button-letter{
    color: aliceblue;
  }

  @media only screen and (max-width: 1200px) {
    .lineup {
      flex-direction: column;
      /* overflow: scroll; */
    }

    .header-container {
      flex-direction: row;
      height: unset;
      width: 100%;
      position: sticky;
      top: 0;
    }

    .lineup-content {
      flex-direction: column;
    }

    .button-letter {
      margin: 15px 10px;
    }

    .header-container.outro {
      border-left: none;
      border-top: 2px solid aliceblue;
    }
  }
</style>