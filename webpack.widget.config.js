const path = require('path');

module.exports = {
  entry: './widget.js', // Ensure this is the correct path to your entry file
  output: {
    path: path.resolve(__dirname, 'public/widget'),
    filename: 'widget-bundle.js',
    library: 'AboutUsWidget',
    libraryTarget: 'umd',
    publicPath: '/widget/',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
  // Remove externals section
};
