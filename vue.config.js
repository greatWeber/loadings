
'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://greatweber.github.io/loadings/dist/'
    : '/',
  assetsDir: 'static',
  configureWebpack: {
    entry: {
      app: './examples/main.js'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('packages'),
        '@ex': resolve('examples'),
      }
    },
  }
}
