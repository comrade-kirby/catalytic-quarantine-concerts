<script>
  import router from 'page'

  let page
  let times = [...Array(24).keys()]
</script>

<div class='schedule'>
  <div class='day-headers'>
    <h1>Friday</h1>
    <h1>Saturday</h1>
    <h1>Sunday</h1>
  </div>
  <div class='times'>
    {#each times as time}
      <div class='time'>
        <h3>{time}</h3>
      </div>
    {/each}
  </div>
</div>

<style>
  h3 {
    margin: 0;
  }

  .schedule {
    overflow-y: scroll;
  }

  .day-headers {
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    z-index: 1;
    background-color: white;
  }

  .time {
    border-top: 1px solid black;
    height: 100px;
  }
</style>
