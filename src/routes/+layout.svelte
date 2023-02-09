<script>
	import '/src/app.css';
</script>

<div class="header">
	<a href="/">My Blog</a>
	<!--Don't remove these links without putting them elsewhere! If you do, the feed won't autogenerate.-->
	<a href="/atom.xml">Atom feed</a>
	<a href="/rss.xml">RSS feed</a>
</div>
<div class="body">
	<slot />
</div>

<style>
	.body {
		max-width: 40em;
		margin-left: auto;
		margin-right: auto;
	}
	.header {
		max-width: 40em;
		margin-left: auto;
		margin-right: auto;
	}
</style>
