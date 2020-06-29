<script>

  const lineupDays = [
    {
      day: 'Friday',
      artists: []
    },
    {
      day: 'Saturday',
      artists: []
    },
    {
      day: 'Sunday',
      artists: []
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
  }
</style>