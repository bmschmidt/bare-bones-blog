---
date: 2023-02-10
title: Guide to files.
---

An explanation of all the files.

## Relevant

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
