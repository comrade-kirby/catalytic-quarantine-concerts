<script>

  const lineupDays = [
    {
      day: 'Friday',
      artists: ['Terrie Ex / Ab Baars / Ig Henneman', 'Jaap Blonk', 'Ken Vandermark', 'Paal Nilssen-Love / Frode Gjerstad', 'Sylvie Courvoisier', 'Brandon Lopez', 'Nate Wooley / Ikue Mori', 'Fred Lonberg-Holm / Joe McPhee']
    },
    {
      day: 'Saturday',
      artists: ['Elisabeth Harnik', 'Icepick (Corsano / Håker Flaten / Wooley)', 'Claire Rousay / Mats Gustafsson', 'Terrie Ex / Andy Moor', 'Tim Daisy & Dave Rempis', 'Luke Stewart', 'McPhee', 'Marker']
    },
    {
      day: 'Sunday',
      artists: ['Chris Corsano', 'Susan Alcorn / Macie Stewart / Tim Daisy', 'Ingebrigt Håker Flaten / Håkon Kornstad', 'Mats Gustafsson / Jaap Blonk / Fred Lonberg-Holm', 'Ikue Mori (solo)', 'Claire Rousay', 'Ben Hall / Bonnie Jones / Luke Stewart', 'Joe Morris']
    }
  ]
</script>


<div class='lineup'>
  <div class='header-container'>
    {#each "LINEUP".split("") as letter }
      <h3 class='button-letter'>{letter}</h3>
    {/each}
  </div>
  <div class='lineup-content'>
    {#each lineupDays as lineupDay}
      <div class='lineup-day'>
        <h4>{lineupDay.day}</h4>
        <div class='artists'>
          {#each lineupDay.artists as artist, i}
            <h5 class='artist' class:lighter={i % 2 !== 0}>{artist}</h5>
          {/each}
        </div>
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

  .lineup-day {
    position: relative;
    /* top: 100px; */
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    padding: 20px;
    margin: 0 20px;

  }

  .artists {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .artist {
    color: midnightblue;
    text-shadow: none;
    margin: 10px;
  }

  .lighter { 
    color: steelblue;
  }
</style>