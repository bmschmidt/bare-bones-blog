<script>
  import '/src/app.css';
  import { base } from '$app/paths';
</script>

<div class="header">
  <a href={base || '/'}>My Blog</a>
  <!--Don't remove these links without putting them elsewhere! If there aren't links, the feed won't autogenerate.-->
  <a data-sveltekit-reload href="{base}/atom.xml">Atom feed</a>
  <a data-sveltekit-reload href="{base}/rss.xml">RSS feed</a>
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
