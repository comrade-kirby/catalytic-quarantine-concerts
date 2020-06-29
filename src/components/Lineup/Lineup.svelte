<div class='button-container'>
  
    {#each "LINEUP".split("") as letter }
      <h3 class='button-letter'>{letter}</h3>
    {/each}
</div>
  
<style>
  .button-container {
    position: absolute;
    left: 0;
    height: 100%;
    overflow: hidden;
    display: flex;
    transition: right 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6.4px;
    background: rgba(0, 0, 0, 25%);
  }

  .button-letter {
    margin: 10px 30px;
    color: aliceblue;
    font-family: var(--mono-1);
  }
  
  .button-container:hover {
    right: 20px;
  }
</style>