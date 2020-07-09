 <script>
  import { onMount } from 'svelte'
	import page from 'page'
  import anime from 'animejs/lib/anime.es.js'

  import scheduleTransitions from '../../transitions/schedule'
  import Header from '../Header/Header.svelte'
  import Day from './Day/Day.svelte'
  import { mobile } from '../../stores'

  let height, width, outro
  let schedules = []
  let bios

  const yOffsets = [0.5, 0.7, 0.35]
  const days = ['Friday', 'Saturday', 'Sunday']

  const parseSchedule = async () => {
    const response = await fetch('schedule.json')
    const json = await response.json()
    return Object.keys(json).map(key => json[key])
  }

  const parseBios = async () => {
    const response = await fetch('bios.json')
    return await response.json()
  }

  page.exit('/schedule', (ctx, next) => {
    outro = true
    const distance = $mobile ? height : width
    const transition = scheduleTransitions.outro(distance, $mobile)
    transition.finished.then(next)
  })

  onMount(async () => {
    schedules = await parseSchedule()
    bios = await parseBios()
    scheduleTransitions.intro(width)
  })
</script>


<div class='schedule'>
  <Header headerText='SCHEDULE' outro={outro} />
  <div class='schedule-content'
    bind:clientHeight={height}
    bind:clientWidth={width}>
    {#each schedules as schedule, i}
      <Day
        index={i}
        delay={200}
        day={days[i]}
        schedule={schedule}
        bios={bios}
        yOffset={yOffsets[i] * height} />
    {/each}
  </div>
</div>

<style>
  .schedule {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
  }

  .schedule-content {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  @media only screen and (max-width: 1200px) {
    .schedule {
      flex-direction: column;
    }

    .schedule-content {
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: scroll;
    }
  }
</style>
