# Bare-bones blogging with sveltekit

A blog is a set of essays, by date, with an accompanying Atom or RSS feed.[^1]
The best way to write this sort of thing is in Markdown; and the best Markdown
processor is Pandoc.

But for as long as I've been on the Web, it's been weirdly difficult to write a blog in
pandoc-styled Markdown, with all the benefits that come with it.

This repo extracts out the basic architecture from my [personal site](https://benschmidt.org)
into a truly bare-bones blog that can be easily extended using svelte-kit. Svelte-kit is a well-thought
out way to write performant, accessible, standards-oriented web sites that use Javascript as
a templating language, prioritize accessibility and quick build times (unlike, say, Jekyll)
and avoid the bloated abstractions of React. Writing in Svelte components is about as close as you can
get nowadays to actually using the things you'd learn in a web dev class about CSS, HTML, and Javascript.

The real point here is to be able to do neat things inside the blocks. For some examples, see
the [`pandoc-svelte-components`](https://github.com/bmschmidt/pandoc-svelte-components) library I use
heavily here. But the point here is minimalism that's fast, flexible, and showcases modern web design practices.

## Editing

To make this site you're own you'll need ot edit a few things:

1. `src/content` is where the blog posts live. Write your own!
2. `routes/[format.xml]/+page.server.ts` defines the RSS feed on top of those posts.
   Lots of frameworks out there would have you template all the information there into a YAML file
   or something. Screw that! Just go edit the code.
3. The basic svelte files at `routes/+layout.svelte` and `routes/[...slug]/+page.svelte` to define how
   the pages should look.
4. `src/app.css` to configure global styles (although note that in svelte you can edit almost all the css
   you might need inside the files themselves.)

## Building

To build the site

```sh
git clone bare-bones-blog
npm i
npm run dev # <- for while you edit--if you haven't used vite, it's worth watching how quickly style/code changes apply.
npm run build # <- to build the static-page version.
```

## Notes

[^1]:
    Yes, there were blogs before there was RSS. And there were eggs before chickens.
    But if you serve me an omelet, I'm going to assume it's made of chicken eggs; if it turns
    out to be made with salmon roe or alligator eggs, there's something wrong with you.
