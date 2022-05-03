const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const root = path.resolve(__dirname)
const src = path.resolve(root, 'src')
const dist = path.resolve(root, 'build')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    index: path.resolve(src, 'index.ts'),
  },
  output: {
    filename: '[name].bundle.js',
    path: dist,
  },
  devtool: false,
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue': '@vue/runtime-dom'
    }
  },
  devServer: {
    static: dist,
    historyApiFallback: true,
    hot: true,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(src, 'index.html'), to: path.resolve(dist, 'index.html') },
      ]
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
    ],
  }
}
