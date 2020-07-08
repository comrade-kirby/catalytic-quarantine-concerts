<script>
  export let bio
</script>

<div class='bio'>
  <h6 class='name'>{bio.name}</h6>
  {#if bio.bio }
    <p class='description'>{bio.bio}</p>
  {/if}
</div>

<style>
  .bio {
    border: 1px dashed midnightblue;
    width: 100%;
    padding: 10px;
  }

  .name {
    text-shadow: none;
    color: black;
    font-family: var(--cursive);
    font-size: 1.2rem;
  }

  .description {
    text-shadow: none;
    color: black;
    font-size: 1rem;
    white-space: pre-line;
  }
</style>