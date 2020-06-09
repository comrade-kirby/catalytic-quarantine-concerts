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

<nav>
  <a href="/">Home</a>
  <a href="/schedule">Schedule</a>
</nav>
<svelte:component this={page} stage={stage}/>


<style>
</style>