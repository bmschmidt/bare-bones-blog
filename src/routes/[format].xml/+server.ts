export const prerender = true;
import full_catalog from '$lib/all_posts';
import { json2html } from 'pandoc-tools';
import { Feed } from 'feed';

async function make_feed() {
	/* 
	Sets up a feed. This is where stuff you might change lives.
	*/
	const feed = new Feed({
		title: 'Blog Title',
		description: 'Posts and updates. Fun with a porpoise.',
		id: 'https://benschmidt.org/',
		link: 'https://benschmidt.org/post',
		// optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
	  language: 'en',
		copyright: 'All rights reserved 2023, Ben Schmidt',
		generator: 'Feed for Node.js',
		feedLinks: {
			atom: 'https://benschmidt.org/atom.xml',
			rss: 'https://benschmidt.org/rss.xml'
		},
		author: {
			name: 'Ben Schmidt',
			email: 'bmschmidt@gmail.com',
			link: 'https://benschmidt.org'
		}
	});

	let post_index = full_catalog.filter((d) => d.metadata?.date);
	post_index.sort((a, b) => b.metadata.date - a.metadata.date);
	// If a markdown file is marked with `draft: true`, it won't show up here!
	post_index = post_index.filter((d) => d.metadata.date);

	for (const post_full of post_index) {
		post_full.html = await json2html(post_full.document);
		const post = post_full.metadata;
		if (!post.title) {
			console.warn(
				`File ${post_full.slug}.md has no title given in metadata block, not syndicating.`
			);
			continue;
		}
		if (post.draft) continue;
		post.url = post_full.url as string;
		feed.addItem({
			title: post.title || 'untitled',
			id: post.url,
			link: post.url,
			description: post_full.description || '',
			content: post_full.html,
			author: [
				{
					name: 'Ben Schmidt',
					email: 'bmschmidt@gmail.com',
					link: 'https://benschmidt.org'
				}
			],
			date: new Date(post.date)
			//			image: post.image
		});
	}

	feed.addCategory('History');
	feed.addCategory('Programming');
	feed.addCategory('Digital Humanities');
	feed.addCategory('Data Analysis');
	feed.addCategory('Data Visualization');
	return feed;
}

/**
 * The GET function defines what happens when someone hits this site.
 * Depending on whether the format is atom or rss, that will change!
 *
 * @param param0
 * @returns
 */
export async function GET({ params }) {
	const format = params.format;
	const feed = await make_feed();
	let feed_format = '';
	if (format === 'atom' || format === 'feed') {
		feed_format = feed.atom1();
	} else if (format == 'rss') {
		feed_format = feed.rss2();
	} else {
		throw new Error('Not found');
	}
	/**
	 * One thing that's really nice about svelte-kit is that it uses JS fundamntals like `Response`.
	 */
	const response = new Response(feed_format, {
		headers: {
			'Content-type': 'text/xml'
		}
	});
	return response;
}
