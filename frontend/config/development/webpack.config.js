path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    application: './src/index.js',
  },
  output: {
    path: '/Users/ishikawakuniaki/workspace/web/rails_vuetify_demo_v2/app/assets/javascripts/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
