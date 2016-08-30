const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: [
    './src/client/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      include: `${__dirname}/src`,
      exclude: /bundle\.js$/,
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      },
    }],
  },
  devServer: {
    inline: true,
    port: 8008,
  },
  plugins: [HtmlWebpackPluginConfig],
};
