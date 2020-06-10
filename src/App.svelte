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
	<nav>
		<a href='/'>Home</a>
		<a href='/schedule'>Schedule</a>
		<a href='/stage'>Stage</a>
	</nav>
	<svelte:component this={page} />
</main>


<style>
	main {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	nav {
		position: sticky;
		top: 0;
	}
</style>