const {configureExternals, configureTsLoader} = require("./webpack.extension");

module.exports = {
    chainWebpack: chain => { configureTsLoader(chain); },
    configureWebpack: config => { configureExternals(config); },
    css: { extract: false },
    parallel: false
};