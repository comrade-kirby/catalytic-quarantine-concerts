<script>
  import SlideScreen from './SlideScreen/SlideScreen.svelte'
  import MailChimp from './MailChimp/MailChimp.svelte'
  import PayPal from './PayPal/PayPal.svelte'
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
        <PayPal />
      </div>
      <div class='festival-details-bottom-right'>
      <p>
        Performances each day at 1 pm and 7 pm US Central Time. Discussion panels at 3 pm. Presented in collaboration with <a href="https://www.twitch.tv/experimental_sound_studio">ESS Quarantine Concerts</a>.
      </p>
      <MailChimp />
      </div>
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

  .festival-details-bottom-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  a {
    display: inline;
    text-shadow: none;
    text-decoration: underline;
    font-size: 1rem;
    font-family: var(--sans-serif-1);
    font-size: 1.25rem;
		line-height: 2.25rem;
    /* background-color: transparent; */
    padding: 0;
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