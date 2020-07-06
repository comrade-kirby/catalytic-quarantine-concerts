<script>
  import SlideScreen from './SlideScreen/SlideScreen.svelte'
  
  export let initialVisit
</script>

<div class='festival-details-container'>
  {#if initialVisit}
    <SlideScreen delay={4000} initialVisit={initialVisit} />
  {/if}
  <div class='festival-details outro-item festival-info-element'>
    <h3>Performances, discussion, and new work from the Catalytic Sound Co-op.</h3>
    <div class='festival-details-bottom'>
      <div class='donate'>
        <h5>$10/program suggested donation</h5>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="4E7FLHV355X9E" />
          <input class='donate-img' type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img  alt="paypal donate button" src="https://www.paypal.com/en_US/i/scr/pixel.gif" />
        </form>
      </div>
      <p>Music, video, and live performances each day at 1 pm and 7 pm US Central Time. Discussion panel after each afternoon program.</p>
    </div>
  </div>
</div>

<style>
  .festival-details-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .festival-details {
    display: flex;
    flex-direction: column;
    margin: 40px 40px 20px 40px;
    padding: 20px;
    justify-content: center;
    background-color: aliceblue;
    border-radius: 5px;
    max-width: 750px;
  }

  .festival-details-bottom {
    display: flex;
    flex-direction: row;
  }

  .donate {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;
  }

  h3 {
    color: steelblue;
    text-shadow: none;
    text-align: justify;
    letter-spacing: 0.25rem;
    font-family: var(--sans-serif-1);
  }

  p {
    flex: 2;
    padding: 20px 0 0 20px;
    text-shadow: none;
    color: black;
    text-align: justify;
  }

  h5 {
    margin-top: 80px;
    text-shadow: none;
    background-color: midnightblue;
    color: aliceblue;
    text-align: justify;
    font-family: var(--sans-serif-1);
    text-justify: inter-character;
    padding: 20px;
  }

  form {
    border: 2px solid midnightblue;
  }

  .donate-img {
    width: 100%;
    margin: 0;
    border: none;
  }
  @media only screen and (max-width: 1200px) {
		h5 {
      margin-top: 20px;
    }
    
    .festival-details {
      margin: 20px 20px 10px 20px;
    }
  }
</style>