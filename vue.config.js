const webpackExtension = require("./webpack.extension");

module.exports = {
    configureWebpack: webpackExtension,
    css: { extract: false }
};