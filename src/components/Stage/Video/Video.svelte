<script>  
    import { onMount, tick } from 'svelte'
import { mobile } from '../../../stores'

  let width, height

 onMount( async () => {
    await tick()
    new Twitch.Embed("twitch-embed", {
      width: width - 40,
      height: height - 40,
      chat: true,
      channel: "experimental_sound_studio",
      parent: ["catalyticsound.com"],
      layout: $mobile ? 'video' : null
    });
  })
</script>

<div class='video-container outro-item' >
  <div class='video video-intro'
    bind:clientWidth={width}
    bind:clientHeight={height}>
    <div id='twitch-embed'></div>
  </div>
  <div class='video-info'>
    {#if $mobile}
      <a 
        class='twitch-link video-intro'
        href='https://www.twitch.tv/experimental_sound_studio'
        target="_blank">
        <p>Join the chat on </p>
        <h5 class='underline'>Twitch</h5>
      </a>
    {:else}
      <div class='twitch-rec video-intro'>
        <h5>Trouble joining the chat?</h5>
        <p>Try Firefox, Google Chrome or watch on 
          <a class='underline' href='https://www.twitch.tv/experimental_sound_studio' target="_blank">Twitch.tv</a> 
        </p>
      </div>
    {/if}
    <div class='chat-policy video-intro' class:mobile={$mobile}>
      <h5 class='policy-header'>Chat Policy</h5>
      <p class='policy-content'>
        Thank you so much for joining us today for The Quarantine Concerts! We’re so happy to be experiencing some community, great art, and conversation with you while we’re all mostly stuck at home. While this forum is a much different experience than our normal idea of ‘live concerts’, we still want to uphold an environment of kindness and warmth. It’s amazing to see you all in the “Chat” part of these streamed concerts, but need to let you know that we hold a 100% ZERO TOLERENCE policy for harassment of any kind. This includes “trolling”, heckling, sexism, homophobia, talking down to other attendees, making fun of any part of the performances, or overall being a nuisance that may take away from the experience for others. While we know some ‘gentle jabbing’ is sometimes fun between a few friends, this is not the place to do so. Please take that sort of conversation to a private message or different forum. If you fail to follow this policy, you will be banned from the chat immediately. Thank you for understanding and please never hesitate to reach out with questions about this policy or to report something you feel fails to meet our policy requirements. Have fun!
      </p>
    </div>
  </div>
</div>

<style>
  p {
    line-height: 1.6rem;
  }
  .video-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  
  .video {
    display: flex;
    padding: 20px 20px 0;
    height: 100%;
    width: 100%;
  }

  .video-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    height: 100%;
  }

  .twitch-link {
    flex: 0;
    background-color: aliceblue;
    border-radius: 5px; 
    cursor: pointer;
    padding: 20px;
    margin: 20px 20px 0;
  }

  .twitch-link * {
    color: black;
    text-shadow: none;
  }

  .underline {
    margin-left: 10px;
    color: midnightblue;
  }

  .twitch-rec {
    background-color: aliceblue;
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
  }

  .twitch-rec h5 {
    color: black;
    font-size: 1.25rem;
    text-shadow: none;
  }

  .twitch-rec p {
    color: midnightblue;
    text-shadow: none;
    font-size: 1rem;
  }

  .twitch-rec a {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    text-shadow: none;
  }

  .twitch-link:hover .underline {
    text-decoration: underline;
  }

  .underline:hover {
    text-decoration: underline;
    background-color: transparent;
  }

  .chat-policy {
    display: flex;
    flex-direction: column;
    background-color: midnightblue;
    flex: 1;
    margin: 20px;
    padding: 20px;
    border-radius: 5px; 
    overflow: scroll;
  }

  .policy-content {
    font-size: 1rem;
  }

  @media only screen and (max-width: 1200px) {
    .video-container {
      flex-direction: column;
    }

    .video {
      height: 500px;
    }

    .chat-policy {
      max-height: 300px;
    }
  }

  @media only screen and (max-width: 500px) {
    .video {
      height: 300px;
    }

    .chat-policy {
      max-height: 250px;
    }
  }
</style>