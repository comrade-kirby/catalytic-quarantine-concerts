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
        <h2>{time}</h2>
      </div>
    {/each}
  </div>
</div>

<style>
  h2 {
    margin: 10px;
    color: aliceblue;
  }

  .schedule {
    flex: 1;
    width: 100%;
    position: relative;
  }

  .day-headers {
    position: absolute;
    width: 100%;
    top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    z-index: 1;
    background-color: aliceblue;
  }

  .times {
    height: 100%;
    overflow: scroll;
  }
  .time {
    border-top: 1px solid aliceblue;
    height: 100px;
  }
</style>
