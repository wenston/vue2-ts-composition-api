module.exports = {
  publicPath: "",
  // outputDir: "psi",
  // chainWebpack: config => {},
  css: {
    requireModuleExtension: true,
    extract: false,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: "[name]_[local]_[hash:5]"
        }
      }
    }
  },

  // configureWebpack: {
  //   externals: {
  //     vue: "Vue"
  //   }
  // },
  devServer: {
    port: "4200"
  }
}
