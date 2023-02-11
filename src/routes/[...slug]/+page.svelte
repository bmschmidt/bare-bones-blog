<script>
  export let data;
  const { metadata, document } = data;
  import Document from 'pandoc-svelte-components/Document.svelte';
</script>

<h1>{metadata.title}</h1>
<em
  >{new Date(metadata.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })}</em
>

<Document ast={document} />
