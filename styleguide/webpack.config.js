const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
//const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "labs",
    projectName: "styleguide",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ["vue-loader"],
        },
      ],
    },
    externals: ["vue", "vue-router", /^@vue-mf\/.+/],
    plugins: [new VueLoaderPlugin()],
  });
};
