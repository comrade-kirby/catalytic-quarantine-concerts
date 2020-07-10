<script>
  export let headerText
  export let outro
</script>

<div class='header-container outro-item' class:outro>
  {#each headerText.split("") as letter }
    <h3 class='header-letter'>{letter}</h3>
  {/each}
</div>

<style>
  .header-container {
    display: flex;
    height: 100%;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6.4px;
    background-color: aliceblue;
    transition: background-color 1s ease-in-out 0.45s, border-right 1s ease-in-out 0.45s;
  }

  .header-letter {
    margin: 10px 30px;
    color: black;
    text-shadow: none;
    transition: color 1s ease-in-out 0.45s;
  }

  .header-container.outro {
    background-color: rgba(0, 0, 0, 35%);
    border-left: 5px solid aliceblue;
  }

  .header-container.outro .header-letter{
    color: aliceblue;
  }

  @media only screen and (max-width: 1200px) {

    .header-container {
      flex-direction: row;
      height: unset;
      width: 100%;
      position: sticky;
      top: 0;
    }

    .header-letter {
      margin: 15px 10px;
    }

    .header-container.outro {
      border-left: none;
      border-top: 2px solid aliceblue;
    }
  }
</style>