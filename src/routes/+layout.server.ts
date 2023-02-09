// All pages on this site should be prerendered.
export const prerender = true;
import all_pages from '$lib/all_posts';
export async function load() {
	return {
		pages: all_pages
	};
}
