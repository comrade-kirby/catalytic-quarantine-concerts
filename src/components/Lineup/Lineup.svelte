 <script>
  import { onMount } from 'svelte'
	import page from 'page'
  import anime from 'animejs/lib/anime.es.js'

	import lineupTransitions from '../../transitions/lineup'
  import Day from './Day/Day.svelte'
  
  let height, width, outro

  const lineupDays = [
    {
      day: 'FRIDAY',
      yOffset: 0.5,
      artists: ['Terrie Ex / Ab Baars / Ig Henneman', 'Jaap Blonk', 'Ken Vandermark', 'Paal Nilssen-Love / Frode Gjerstad', 'Sylvie Courvoisier', 'Brandon Lopez', 'Nate Wooley / Ikue Mori', 'Fred Lonberg-Holm / Joe McPhee']
    },
    {
      day: 'SATURDAY',
      yOffset: 0.7,
      artists: ['Elisabeth Harnik', 'Icepick (Corsano / Håker Flaten / Wooley)', 'Claire Rousay / Mats Gustafsson', 'Terrie Ex / Andy Moor', 'Tim Daisy & Dave Rempis', 'Luke Stewart', 'McPhee', 'Marker']
    },
    {
      day: 'SUNDAY',
      yOffset: 0.35,
      artists: ['Chris Corsano', 'Susan Alcorn / Macie Stewart / Tim Daisy', 'Ingebrigt Håker Flaten / Håkon Kornstad', 'Mats Gustafsson / Jaap Blonk / Fred Lonberg-Holm', 'Ikue Mori', 'Claire Rousay', 'Ben Hall / Bonnie Jones / Luke Stewart', 'Joe Morris']
    }
  ]

  page.exit('/lineup', (ctx, next) => {
    outro = true
    const transition = lineupTransitions.outro(width)
    transition.finished.then(next)
  })
  
  onMount(() => {
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
    {#each lineupDays as lineupDay, i}
      <div class='lineup-day-container'>
        <Day 
          index={i}
          delay={i*200 + 450}
          day={lineupDay.day} 
          yOffset={lineupDay.yOffset * height}
          artists={lineupDay.artists} />
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
    font-family: var(--mono-1);
    transition: color 1s ease-in-out 0.45s;
  }

  .lineup-content {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    height: 100%;
  }

  .header-container.outro {
    background-color: rgba(0, 0, 0, 35%);
    border-left: 5px solid aliceblue;
  }

  .header-container.outro .button-letter{
    color: aliceblue;
  }

  @media (max-width: 1200px) {
    .lineup {
      flex-direction: column;
    }

    .header-container {
      flex-direction: row;
      height: unset;
      width: 100%;
    }

    .lineup-content {
      flex-direction: column;
    }

    .button-letter {
      margin: 30px 10px;
    }
  }
</style>