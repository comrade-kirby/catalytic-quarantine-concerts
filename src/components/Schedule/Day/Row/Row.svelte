<script>
  import { onMount } from 'svelte'

  import Duration from './Duration/Duration.svelte'
  import Bio from './Bio/Bio.svelte'

  export let row
  export let open
  export let dayIndex
  export let artistBios
  export let selectedRow
  export let selectRow

  let festivalBreak = false

  const isABreak = (type) => {
    return ['Video', 'Break'].includes(type)
  }

  onMount(() => {
    festivalBreak = isABreak(row.type)
  })
</script>

<div 
  class='row' 
  class:open
  class:visible={row.type == 'Set' || open}>
  <div class='time'>
    <h6 class='start-time'>{row.start_time}</h6>
    <Duration row={row} open={open} />
  </div>
  <div class='artist-and-bios'>
    <h6
      class='artist artist{dayIndex}' 
      class:festivalBreak
      on:click|stopPropagation={ () => selectRow(row) } >
      {row.act}
    </h6> 
    {#if row == selectedRow}
      {#each artistBios as bio}
        <Bio bio={bio} />
      {/each}
    {/if}
  </div>
</div>

<style>
  .row {
    display: flex;
    max-width: 0;
    max-height: 0;
    opacity: 0;
    transform: scaleX(0);
    transition: opacity 0s;
  }

  .visible {
    max-width: unset;
    max-height: unset;
    opacity: 1;
    transform: scaleX(1);
    transition: opacity 0.3s ease-in-out;
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

  .artist-and-bios {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 10px 10px 10px;
  }

  .artist {
    align-self: flex-start;
    color: midnightblue;
    text-shadow: none;
    text-align: center;
  }

  .artist:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .festivalBreak {
    color: black;
    font-size: 1rem;
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