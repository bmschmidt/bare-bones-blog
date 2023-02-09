<script>
	export let data;
	import Document from 'pandoc-svelte-components/Document.svelte';
	const { pages } = data;
	import { page } from '$app/stores';
	const { document, metadata } = pages.filter((d) => d.slug === $page.params.slug)[0];
</script>

<h1>{metadata.title}</h1>
<em>{new Date(metadata.date).toLocaleDateString()}</em>
<Document ast={document} />
