<script>
	import router from 'page'
	import Home from './components/Home/Home.svelte'
	import Schedule from './components/Schedule/Schedule.svelte'
	import Stage from './components/Stage/Stage.svelte'

	let page, params, currentDay

	router('/', () => page = Home)
	router('/schedule/:day', (ctx, next) => {
     params = ctx.params
     next()
		}, () => page = Schedule
	)
	router('/stage_1', () => { page = Stage; params = 1 })
	router('/stage_2', () => { page = Stage; params = 2 })

	router.start()

	const getCurrentDay = () => {
		const today = new Date
		const day = today.getDay()
		if (day == 6) { currentDay = "saturday" }
		if (day == 0) { currentDay = "sunday" }
		currentDay = "friday"
	}

	$: getCurrentDay()
</script>

<main>
	<nav>
		<a href="/">Home</a>
		<a href="/schedule/{currentDay}">Schedule</a>
		<a href="/stage_1">Stage 1</a>
		<a href="/stage_2">Stage 2</a>
	</nav>
	<svelte:component this={page} params={params} />
</main>


<style>
	main {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>