# Bare-bones blogging with sveltekit

A blog is a set of essays, by date, with an accompanying Atom or RSS feed.[^1]
The best way to write this sort of thing is in Markdown; and the best Markdown
processor is Pandoc.

But for as long as I've been on the Web, it's been weirdly difficult to write a blog in
pandoc-styled Markdown, with all the benefits that come with it. And the sites that people use for blogging,
like Jekyll and Hugo, require you to wade through piles of documentation and configuration to learn
how to use them: and once you do, you have learned an obscure markup format in a language that 
has nothing to do the web.[^2]

This repo extracts out the basic architecture from my [personal site](https://benschmidt.org)
into a truly bare-bones blog that can be easily extended. Svelte-kit is a well-thought
out way to write performant, accessible, standards-oriented web sites that use Javascript as
a templating language, prioritize accessibility and quick build times (unlike, say, Jekyll)
and avoid the bloated abstractions of React. Writing in Svelte components is about as close as you can
get nowadays to actually using the things you'd learn in a web dev class about CSS, HTML, and Javascript.

**You should use a javascript-based build framework for your blog,** because love it or hate it--
who am I kidding, obviously you hate it--it's the language of the web and it makes it easier to do
webby things. People who like Jekyll sometimes like to call it 'battle-tested.' This is bonkers--
it's like if you had to had to choose one country's Olympic team to protect your home and blurted 
out 'Persia!' because you remember how scary they were in the movie *300.*[^3] First off, that was
a long time ago, and there are a lot of Russians on steroids and Americans on marginally less 
detectable PEDs you might want to consider first. Second of all, **they lost the war**. So
did Jekyll, friends. If you've been using it since 2012, by all means keep it going. But for the 
love of God, don't foist it on other people.

The real point here is to be able to do neat things inside the blocks. For some examples, see
the [`pandoc-svelte-components`](https://github.com/bmschmidt/pandoc-svelte-components) library I use
heavily here. But the point here is minimalism that's fast, flexible, and showcases modern web architecture.

## Editing

To make this site your own you'll need to edit a few things:

1. `src/content` is where the blog posts live. Write your own!
2. `routes/[format.xml]/+page.server.ts` defines the RSS feed on top of those posts.
   Lots of frameworks out there would have you template all the information there into a YAML file
   or something. Screw that! Just go edit the code.
3. The basic svelte files at `routes/+layout.svelte` and `routes/[...slug]/+page.svelte` to define how
   the pages should look.
4. `src/app.css` to configure global styles (although note that in svelte you can edit almost all the css
   you might need inside the files themselves.)

## Building

To build the site **you must have a system version of pandoc.** I have some hopes for getting around this,
but for now it's a hard *must*. Once you do:

```sh
git clone https://bmschmidt.github.io/bare-bones-blog/atom.xml
npm i
npm run dev # <- for while you edit--if you haven't used vite,
            # it's worth watching how quickly style/code changes apply.
            # This will give you a link to view.
            # Change the markdown files in src/content.
            
##BUILD##
npm run build # <- to build the static-page version.
## OR ###
npm run deploy # <- builds the static-page version, commits it to a separate branch called gh-pages, and uploads to github.
```

## Full list of files

All the files in this project--more or less--are below. The ones in bold are ones you might have to 
actually edit.

- `/build`: The place your blog ends up. Never edit the files here, because they'll get overwritten!
  But you may want to copy this directory up to a webserever or something.
- **`/src`: Where all the code and writing that creates the blog live.**
  - **`/src/content` A place for **you** to put blog posts, written as files. The**
    **location of a file in this folder hierarchy will determine its url.**
  - *`/src/lib`: A place to put code that's general to the project.*
    - *`/src/lib/all_posts.ts` Ignorable. Holds the code that imports all your files from `src/content`.*
  - **`/src/routes`: A place to define svelte-kit page.**
    - `/src/routes/+layout.svelte`: A file that defines the overall page layout for everything on the blog. The place to experiment
      with, say, adding a sidebar that's always visible.
    - *`/src/routes/+layout.svelte`: A file necessary to force pregeneration.
    - **`/src/routes/+page.svelte`: The code that holds the *front page* for the blog (the index of posts.) Easily edited.**
    - **`/src/routes/[format.xml]/+server.ts`: The code that generates an RSS and Atom feed. You'll have to edit information
      in this file or else the files will appear over rss to be written by Ben Schmidt.
    - **`/src/routes/[..slug]/+page.svelte`: The page that determines the appearance of each blog post.**
      **This is the file to edit if you want to--say--make the posts list their authors.**
    - *`/src/routes/[..slug]/+page.server.ts`: boilerplace that supplies the HTML necessary for the blog posts to build*.
  - `/src/app.css`: The place to put global styles. In general you should have very few of these in svelte--put them in 
    components instead. But things like the global font belong here.
  - `app.html`: Boilerplate so svelte can build the page.
- **/static/**: A place to put files that don't go through svelte you want on your page, like images.
  - `/static/.nojekyll/`
- **`/svelte.config.js`**. Svelte configuration. Mostly boilerplate, but the entry at `paths.base`--currently 'bare-bones-blog'--
  determines the URL prefix that will be used on all posts, and will need to be fixed.
- *`vite.config.ts`: Configuration for [vite](https://vitejs.dev), which is the program that actually*
  *runs all the code. (Svelte uses it to make the build faster than old JS packages like 'webpack.')*
  *Includes the import of the pandoc-tools plugin.*
- *`tsconfig.json`: Typescript settings.*
- *`/package.json`: Stores a list of installed packages.*
- *`/.svelte-kit`: A hidden folder (you may not even see it!) where svelte-kit stores stuff.*
- *node_modules: A folder that gets filled up with code to help build the blog. It's automatically*
  *generated, and if you delete it you just need to run `npm i` again.*
- *`posts_cache`: A folder where BBB writes temporary versions of files. Deletable.*
- *`LICENSE`: Gives you permission to use this. Feel free to delete.*


## Notes

[^1]:
    Yes, there were blogs before there was RSS. And there were eggs before chickens.
    But if you serve me an omelet, I'm going to assume it's made of chicken eggs; if it turns
    out to be made with salmon roe or alligator eggs, there's something wrong with you.

[^2]:
    Something that's always puzzled me is how there *isn't* a dominant one of these things everyone uses
    written in Python, even though there's a whole industry devoted to convincing people to learn
    to code in Python. Like there's django--which I also don't think you should use--and there
    are some things--I want to say Pelican?--but basically nothing.

[^3]:
    I haven't actually seen the movie 300, because... I mean so many reasons. It looks kind of racist, first off.
