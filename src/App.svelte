<script>
	import router from 'page'
	import Home from './components/Home/Home.svelte'
	import Schedule from './components/Schedule/Schedule.svelte'
	import Stage from './components/Stage/Stage.svelte'

	let page, stage

	router('/', () => page = Home)
	router('/schedule', () => page = Schedule)
	router('/stage_1', () => {page = Stage; stage = 1})
	router('/stage_2', () => {page = Stage; stage = 2})

	router.start()
</script>

<main>
	<nav>
		<a href="/">Home</a>
		<a href="/schedule">Schedule</a>
		<a href="/stage_1">Stage 1</a>
		<a href="/stage_2">Stage 2</a>
	</nav>
	<svelte:component this={page} stage={stage}/>
</main>


<style>
	main {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>