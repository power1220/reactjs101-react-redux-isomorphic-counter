module.exports = {
  entry: [
    './src/client/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
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
};
