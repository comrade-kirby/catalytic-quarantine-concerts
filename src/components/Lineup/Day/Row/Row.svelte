<script>
  export let row
  export let open  
  export let index
  export let dayIndex
</script>


<div 
  class='row' 
  class:open
  class:visible={row.type == 'Set' || open}>
  <h6 class='start-time'>{row.start_time}</h6>
  <h6
    class='artist artist{dayIndex}' 
    class:lighter={index % 3 == 1}
    class:darker={index % 3 == 2}>
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

  .start-time {
    max-width: 0;
    max-height: 0;
    text-shadow: none;
    color: black;
    opacity: 0;
    transform: scale(0);
    transition: 0.1s ease-in-out;
  }

  .artist {
    color: midnightblue;
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
  }

  .open .start-time {
    max-width: unset;
    max-height: unset;
    min-width: 40px;
    margin: 10px 20px;
    opacity: 1;
    transform: scale(1);
    transition: 0.3s ease-in-out;
  }

  .lighter { 
    color: steelblue;
  }

  .darker { 
    color: black;
  }
</style>