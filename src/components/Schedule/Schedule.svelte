<script>
  import router from 'page'
  import Day from './Day/Day.svelte'

  export let params

  let page
</script>

<nav>
  <a href='/schedule/friday'>friday</a>
  <a href='/schedule/saturday'>saturday</a>
  <a href='/schedule/sunday'>sunday</a>
</nav>
<Day day={params.day} />
