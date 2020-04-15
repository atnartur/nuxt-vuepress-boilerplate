const {createApp} = require('vuepress');
const VuePressDevProcess = require('@vuepress/core/lib/node/dev');

// Path to the VuePress config file. Fix it if you moved VuePress source directory.
const vuepressConfig = require('../help/.vuepress/config');

/**
 * Starts VuePress dev build in Nuxt dev mode
 */
module.exports = async function vuePressDevBuild() {
    // creating VuePress app
    const vuepress = createApp({
        sourceDir: vuepressConfig.sourceDir,
        theme: vuepressConfig.theme || '@vuepress/theme-default',
        siteConfig: vuepressConfig
    });
    await vuepress.process(); // preparing engine

    // initializing dev process
    this.devProcess = new VuePressDevProcess(vuepress);
    await this.devProcess.process();

    // watching files
    this.devProcess
        .on('fileChanged', async () => {
            console.log(`Vuepress reload`);
            await vuepress.process();
        })
        // start building files with webpack dev server without listening.
        // Nuxt will serve this files via static handler.
        .createServer();
};
