module.exports = {
  devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:3000",
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/style/global.vars.scss";`,
      },
    },
  },
};
