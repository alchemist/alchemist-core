const configureTsLoader = chain => {
    chain.module.rules.delete("ts");
    chain.module.rules.delete("tsx");

    chain.module
        .rule('ts')
        .test(/\.tsx?$/)
        .use("ts-loader")
        .loader("ts-loader")
        .options({
            appendTsSuffixTo: ['\\.vue$']
        });
};

const configureExternals = config => {
    if(!config.externals)
    { config.externals = {}; }

    config.externals["@treacherous/core"] = "@treacherous/core";
    config.externals["@treacherous/vue"] = "@treacherous/vue";
    config.externals["@treacherous/decorators"] = "@treacherous/decorators";
    config.externals["uuid"] = "uuid";
    config.externals["interactjs"] = "interactjs";
    config.externals["tslib"] = "tslib";
    config.externals["vue-class-component"] = "vue-class-component";
    config.externals["vue-property-decorator"] = "vue-property-decorator";
    config.externals["vuex"] = "vuex";
    config.externals["vuex-class"] = "vuex-class";
};

module.exports = { configureTsLoader, configureExternals };