<script>
	import router from 'page'
	import Home from './components/Home/Home.svelte'
	import Schedule from './components/Schedule/Schedule.svelte'
	import Stage from './components/Stage/Stage.svelte'

	let page

	router('/', () => page = Home)
	router('/schedule', () => page = Schedule)
	router('/stage', () => page = Stage)

	router.start()
</script>

<main>
	<div class='app-container'>
		<nav>
			<a href='/'>Home</a>
			<a href='/schedule'>Schedule</a>
			<a href='/stage'>Stage</a>
		</nav>
		<div class='page-container'>
			<svelte:component this={page} />
		</div>
	</div>
	<img class='background' src='/Trojan-Horse-Ensemble-2.jpg' alt='trojan-horse illustration background'/>
</main>


<style>
	main {
		position: relative;
		display: flex;
		flex-direction: column;
		flex: 1;
		background-color: aliceblue;
	}

	.app-container {
		position: absolute;
		display: flex;
		flex-direction: column;
		top: 0;
		flex: 1;
		width: 100%;
		height: 100%;
		overflow: scroll;
		max-height: 100%;
	}

	nav {
		position: absolute;
		z-index: 1;
		top: 0;
	}

	.page-container {
		display: flex;
		max-height: 100%;
		padding: 20px 20px;
		flex: 1;
	}

	.background {
		display: flex;
		top: 0;
		left: 0;
		flex: 1;
		padding: 20px;
	}
</style>