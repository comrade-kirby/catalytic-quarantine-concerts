 <script>
  import { onMount } from 'svelte'
  import anime from 'animejs/lib/anime.es.js'

  import Day from './Day/Day.svelte'
  
  let height, width

  const lineupDays = [
    {
      day: 'Friday',
      yOffset: 0.5,
      artists: ['Terrie Ex / Ab Baars / Ig Henneman', 'Jaap Blonk', 'Ken Vandermark', 'Paal Nilssen-Love / Frode Gjerstad', 'Sylvie Courvoisier', 'Brandon Lopez', 'Nate Wooley / Ikue Mori', 'Fred Lonberg-Holm / Joe McPhee']
    },
    {
      day: 'Saturday',
      yOffset: 0.7,
      artists: ['Elisabeth Harnik', 'Icepick (Corsano / Håker Flaten / Wooley)', 'Claire Rousay / Mats Gustafsson', 'Terrie Ex / Andy Moor', 'Tim Daisy & Dave Rempis', 'Luke Stewart', 'McPhee', 'Marker']
    },
    {
      day: 'Sunday',
      yOffset: 0.3,
      artists: ['Chris Corsano', 'Susan Alcorn / Macie Stewart / Tim Daisy', 'Ingebrigt Håker Flaten / Håkon Kornstad', 'Mats Gustafsson / Jaap Blonk / Fred Lonberg-Holm', 'Ikue Mori', 'Claire Rousay', 'Ben Hall / Bonnie Jones / Luke Stewart', 'Joe Morris']
    }
  ]

  onMount(() => {
    anime({
      targets: '.lineup-day-container',
      translateX: [width, 0],
      delay: anime.stagger(200, {from: 'first'}),
      easing: 'easeInOutExpo',
    })
  })
</script>


<div class='lineup'>
  <div class='header-container'>
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
          delay={i*200 + 400}
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
  }

  .header-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6.4px;
    background: rgba(0, 0, 0, 35%);
  }

  .button-letter {
    margin: 10px 30px;
    color: aliceblue;
    font-family: var(--mono-1);
  }

  .lineup-content {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    height: 100%;
  }
</style>