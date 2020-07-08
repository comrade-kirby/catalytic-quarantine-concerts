<script>
  import Duration from './Duration/Duration.svelte'
  
  export let row
  export let open
  export let index
  export let dayIndex
</script>

<div 
  class='row' 
  class:open
  class:visible={row.type == 'Set' || open}>
  <div class='time'>
    <h6 class='start-time'>{row.start_time}</h6>
    <Duration row={row} open={open} />
  </div>
  <h6
    class='artist artist{dayIndex}' >
    {row.act}
  </h6>
  
</div>

<style>
  .row {
    display: flex;
    max-width: 0;
    max-height: 0;
    opacity: 0;
    transition: 0s;
  }

  .visible {
    max-width: unset;
    max-height: unset;
    opacity: 1;
    transition: 0.3s ease-in-out;
  }

  .time {
    max-width: 0;
    max-height: 0;
    display: flex;
    flex-direction: column;
  }

  .start-time {
    max-width: 0;
    max-height: 0;
    text-shadow: none;
    color: black;
    opacity: 0;
    transform: scale(0);
    transition: 0s ease-in-out;
    font-family: var(--cursive);
  }

  .artist {
    /* color: midnightblue; */
    color: steelblue;
    text-shadow: none;
    margin: 10px 20px;
    text-align: center;
  }

  .open {
    width: 100%;
  }

  .open .row {
    display: flex;
    width: 100%;
  }

  .open .artist {
    text-align: left;
    margin: 0 0 10px;
  }

  .open .time {
    max-height: unset;
    max-width: unset;
    margin-right: 20px;
  }

  .open .start-time {
    max-width: unset;
    max-height: unset;
    min-width: 50px;
    opacity: 1;
    transform: scale(1);
    transition: 0.3s ease-in-out;
  }

  @media only screen and (max-width: 600px) {
    .artist {
      margin: 5px 10px;
    }
  }
</style>