const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "sass",
      patterns: [path.resolve(__dirname, "./src/theme/common-styles.sass")]
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Beauforia-Vue/'
    : '/'
}
