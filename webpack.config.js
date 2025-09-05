const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const isGhPages = env.deploy === 'ghpages';

  const envPath = isProduction ? (isGhPages ? '.env.ghpages' : '.env.cloudfront') : '.env';

  return {
    entry: './src/index.tsx',
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '/dist'),
      clean: true
    },
    devServer: {
      hot: true,
      open: true,
      historyApiFallback: true
    },
    devtool: 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: './public', to: './public' }]
      }),
      new Dotenv({
        path: envPath
      }),
      new Dotenv({
        path: envPath
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/i,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader'
          }
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp)$/i,
          loader: 'file-loader',
          options: {
            name: 'static/[name].[ext]'
          }
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin()]
    }
  };
};
