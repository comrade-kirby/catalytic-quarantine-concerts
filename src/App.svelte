<script>
	import router from 'page'
	import Home from './components/Home/Home.svelte'
	import Lineup from './components/Lineup/Lineup.svelte'
	import Schedule from './components/Schedule/Schedule.svelte'
	import Stage from './components/Stage/Stage.svelte'

	let page

	router('/', () => page = Home)
	router('/lineup', () => page = Lineup)
	router('/schedule', () => page = Schedule)
	router('/stage', () => page = Stage)

	router.start()
</script>

<main>
	<div class='app-container'>
		<!-- <nav>
			<a href='/'>Home</a>
			<a href='/schedule'>Schedule</a>
			<a href='/stage'>Stage</a>
		</nav> -->
		<div class='page-container'>
			<svelte:component this={page} />
		</div>
	</div>
	<div class='background-container'>
		<img src='/Trojan-Horse-Ensemble-2.jpg' alt='trojan-horse illustration background'/>
	</div>
</main>


<style>
	:global(body) {
    --sans-serif-2: 'Quicksand', sans-serif;
    --mono-1: 'Share Tech Mono', monospace;
	}

	:global(*) {
		text-shadow: 2px 2px 1px black;
	}
	
	:global(h1) {
		font-size: 7rem;
	}

	:global(h2) {
		font-size: 5rem;
	}

	:global(h3) {
		font-size: 3rem;
	}
	
	:global(h4) {
		font-size: 2.5rem;
		font-family: var(--mono-1);
	}
	
	:global(h5) {
		font-size: 1.25rem;
		font-family: var(--sans-serif-2);
	}
	
	:global(h6) {
		font-size: 1rem;
		font-family: var(--mono-1);
	}

	main {
		position: relative;
		display: flex;
		flex-direction: column;
		flex: 1;
		background-color: aliceblue;
		max-height: 100%;
		color: aliceblue;
	}

	.app-container {
		position: absolute;
		display: flex;
		flex-direction: column;
		top: 0;
		flex: 1;
		width: 100%;
		height: 100%;
		max-height: 100%;
		z-index: 1;
	}

	/* nav {
		position: absolute;
		z-index: 1;
		top: 0;
	} */

	.page-container {
		position: relative;
		display: flex;
		max-height: 100%;
		margin: 20px;
		flex: 1;
	}

	.background-container {
		display: flex;
		margin: 20px;
		justify-content: center;
		max-height: 100%;
		flex: 1;
		opacity: 0.8;
		overflow: hidden;
	}

</style>