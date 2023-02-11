export const prerender = true;
import pages from '$lib/all_posts';

export function load({params}) {
  let {document, metadata} = pages.filter(d => d.slug === params.slug)[0]
  return {document, metadata}
}