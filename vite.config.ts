import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { pandoc_rollup_plugin } from 'pandoc-tools';

export default defineConfig({
	plugins: [pandoc_rollup_plugin({ cache_loc: 'posts_cache' }), sveltekit()]
});
