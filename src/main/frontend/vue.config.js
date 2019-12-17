module.exports = {
  devServer: {
    proxy: {
      '^/': {
        target: 'http://localhost:8082',
        ws: true,
        changeOrigin: true
      }
    }
  }
}