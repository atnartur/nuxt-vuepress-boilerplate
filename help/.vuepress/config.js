const nuxtConfig = require('../../nuxt.config');

module.exports = {
    title: 'VuePress',
    description: 'VuePress',
    dest: './static/help/', // folder with compiled files. It should always start with ./static/
    base: '/help/', // base URL of VuePress site
    sourceDir: 'help/', // VuePress source directory
    devServer: {
        // Need for Nuxt + VuePress watchers.
        // VuePress is building their files to `static/help`. Than Nuxt is hosting this directory as static files.
        writeToDisk: true
    }
};
