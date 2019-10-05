module.exports = {
  publicPath: "/ele/",
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        'target': process.env.NODE_ENV === 'production' ? 'https://api.furan.xyz' : 'http://localhost:5000',
        "changeOrigin": true,
        "pathRewrite": { "^/api": "" }
      }
    }
  }
};
