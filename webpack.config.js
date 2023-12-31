// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
  entry: {
    main: path.resolve(__dirname, 'src/index.ts'),
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      favicon: './src/assets/fav.png',
      chunks: ['main'],
      minify: false,
      inject: 'body',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/img'),
          to: path.resolve(__dirname, 'dist/images')
        },
        {
          from: path.resolve(__dirname, 'src/data/products.json'),
          to: path.resolve(__dirname, 'dist/json')
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|mp3)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    config.plugins.push(new MiniCssExtractPlugin());


  } else {
    config.mode = 'development';
  }
  return config;
};
