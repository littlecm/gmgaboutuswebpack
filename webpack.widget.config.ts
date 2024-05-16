import path from 'path';
import { Configuration } from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: Configuration = {
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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin() as any]
  }
};

export default config;
