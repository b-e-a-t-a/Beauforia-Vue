const path = require("path");

module.exports = {
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "@/theme/common-styles.sass";
  //         @import "@/theme/common-colors.sass";

  //       `
  //     }
  //   }
  // }

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "sass",
      patterns: [path.resolve(__dirname, "./src/theme/common-styles.sass")]
    }
  }
  ////webpack config:
  // module: {
  //   rules: [
  //     {
  //       test: /\.sass$/,
  //       use: [
  //         'vue-style-loader',
  //         'css-loader',
  //         {
  //           loader: 'sass-loader',
  //           options: {
  //             indentedSyntax: true,
  //             data: `./src/theme/common-styles.sass`
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // }
};

// module.exports = {
//   css: {
//     modules: true,
//     loaderOptions: {
//       sass: {
//         data: `@import "~@/theme/common-styles.sass";`
//       }
//   },
//   chainWebpack: config => {
//     const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
//     types.forEach(type => addStyleResource(config.module.rule('sass').oneOf(type)))
//   },
// }

// function addStyleResource (rule) {
//   rule.use('style-resource')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [
//         path.resolve(__dirname, './src/theme/common-styles.sass'),
//       ],
//     })
// }