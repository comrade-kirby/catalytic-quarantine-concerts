<script>
	import { onMount } from 'svelte'
	import page from 'page'
	import Home from './components/Home/Home.svelte'
	import Schedule from './components/Schedule/Schedule.svelte'
	import Stage from './components/Stage/Stage.svelte'
	import scheduleTransitions from './transitions/schedule'
	import { mobile } from './stores.js'

	let currentPage, initialVisit, width
	
	const mobileBreakPoint = 1200

	const setMobile = (width) => {
		mobile.set(width < mobileBreakPoint)
	}

	page('/', (ctx) => {
		if (ctx.state.visited) {
			initialVisit = false
		} else {
			initialVisit = true
			ctx.state.visited = true
			ctx.save()
		}
		currentPage = Home
	})
	page('/schedule', () => currentPage = Schedule)
	page('/stage', () => currentPage = Stage)

	page.start()

	$: setMobile(width)
</script>

<main bind:clientWidth={width}>
	<div class='app-container'>
		<!-- <nav>
			<a href='/'>Home</a>
			<a href='/Schedule'>Schedule</a>
			<a href='/stage'>Stage</a>
		</nav> -->
		<div class='page-container'>
			<svelte:component this={currentPage} initialVisit={initialVisit} />
		</div>
	</div>
	<div class='background-container'>
		<img src='/Trojan-Horse-Ensemble-2.jpg' alt='trojan-horse illustration background'/>
	</div>
</main>


<style>
	@font-face {
		font-family: 'AlteHaasGroteskRegular';
		src: url('/AlteHaasGroteskRegular.ttf');
		font-weight: 500;
	}

	:global(body) {
    --sans-serif-1: 'AlteHaasGroteskRegular', sans-serif;
    --sans-serif-2: 'Quicksand', sans-serif;
    --cursive: 'DM Mono', monospace;
	}

	:global(*) {
		text-shadow: 2px 2px 1px black;
	}
	
	:global(button:active) {
		border: none;
	}

	:global(h1) {
		font-size: 6rem;
		font-family: var(--sans-serif-2);
	}

	:global(h2) {
		font-size: 5rem;
	}

	:global(h3) {
		font-size: 2rem;
		font-family: var(--cursive);
	}
	
	:global(h4) {
		font-size: 2rem;
		font-family: var(--sans-serif-1);
	}
	
	:global(h5) {
		font-size: 1.5rem;
		line-height: 2rem;
		font-family: var(--sans-serif-1);
	}
	
	:global(h6) {
		font-size: 1.25rem;
		font-family: var(--sans-serif-2);
	}

	:global(p) {
		font-size: 1.25rem;
		line-height: 2.25rem;
		font-family: var(--sans-serif-2);
	}

	:global(a) {
    font-size: 1.5rem;
		letter-spacing: .5rem;
		padding: 20px;
    font-family: var(--cursive);
    text-decoration: none;
		display: flex;
    background-color: aliceblue;
		transition: background-color .3s ease-in-out;
	}

	:global(a:hover) {
		text-decoration: none;
		background-color: white
	}

 	:global(span) {
    text-shadow: none;
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
		overflow: hidden;
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

	@media only screen and (max-width: 1500px) {
		:global(html) {
			font-size: 80%;
		}
	}

	@media only screen and (max-width: 1200px) {

		.page-container {
			margin: 0;
		}

		.background-container {
			margin: 0;
		}
	}

	@media only screen and (max-width: 600px) {
		:global(html) {
			font-size: 60%;
		}

		:global(h3) {
			font-size: 1.5rem;
		}

		:global(a) {
			padding: 10px 20px;
		}
	}
</style>