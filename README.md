# Nuxt + VuePress Boilterplate

[Nuxt](https://nuxtjs.org) is a great framework for developing Vue.js web applications with SSR support. [VuePress](https://vuepress.vuejs.org/) is a powerful tool for static content websites, such as documentation, blogs, etc. This boilerplate uses VuePress for hosting `/help/` URL and Nuxt for others. This boilerplate will be helpful for some cases, for example, when we need to write a powerful SPA or SSR application with separated static generated part.

## Getting started

Replace `<project-name>` with your project name.

```
git clone https://github.com/cosmicjs/nuxtjs-website-boilerplate <project-name>
cd <project-name>
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production and launch server
npm run build
npm run start

# build only vuepress part
npm run vuepress-build
```

The source files for VuePress are located in the `help` folder which will be displayed in the `/help/` URL after build. [Read more about structure of VuePress projects](https://vuepress.vuejs.org/guide/directory-structure.html).

Links between Nuxt and VuePress parts should use `a` tags (not `router-link` or `nuxt-link`). This is because two frameworks are working as separate apps on frontend.

VuePress configuration file is located in `help/.vuepress/config.js`. [Read more about VuePress configuration](https://vuepress.vuejs.org/config/).

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org) and [VuePress docs](https://vuepress.vuejs.org/).

## How it works

1. The boilerplate is based on the Nuxt official boilerplate with a default server.
2. VuePress files and configuration are located in the `help` folder.
3. VuePress compiled files are located in the `static/help` folder.
4. Nuxt is hosting it as [static files](https://nuxtjs.org/guide/assets#static) from the `static` folder.
5. `npm run dev` command that starts Nuxt dev server (`server/index.js`) is extended by VuePress build script (`server/vuepress_helper.js`) which uses webpack-dev-server's [writeToDisk](https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-).
6. Production build is working with `nuxt build` and `vuepress build` which run in a sequence with `npm run build` command.

## Move VuePress files to another folder

1. Rename the `help` folder.
2. Remove the `static/help` folder with old compiled files.
3. Replace the `static/help` line in `.gitignore` file with a new name
4. Fix `dest`, `base` and `sourceDir` keys in VuePress config file `<your new folder name>/.vuepress/config.js`)
5. Fix the path to the VuePress config in `server/index.js` file
6. Rename the folder in `vuepress-build` command in `package.json`

## Other solutions

- [Blogpost about creating markdown pages in Nuxt with frontmatter](https://regenrek.com/posts/create-a-frontmatter-markdown-powered-blog-with-nuxt.js/) (all template pages are created manually)
- [frontmatter-markdown-loader](https://www.npmjs.com/package/frontmatter-markdown-loader) for loading markdown files into project
- [NuxtPress — Markdown static generator with Nuxt](https://nuxt.press/) (currently in beta)
