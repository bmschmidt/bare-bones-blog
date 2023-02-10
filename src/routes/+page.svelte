<script>
	import pages from '$lib/all_posts';
  import { base } from '$app/paths';
	function format_date(date) {
		return new Date(date).toLocaleString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<h1>My Blog</h1>

My very own blog!

<h2>Posts</h2>
<ul>
	{#each pages as page}
		<li><a href="{base + `/` + page.slug}">{page.metadata.title}</a> ({format_date(page.metadata.date)})</li>
	{/each}
</ul>
