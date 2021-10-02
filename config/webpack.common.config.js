const path = require('path'),
  webpack = require('webpack'),
  HtmlWebPackPugin = require('html-webpack-plugin'),
  HtmlBeautifyPlugin = require('html-beautify-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin');
  WebpackNotifierPlugin = require('webpack-notifier-2'),
  autoprefixer= require('autoprefixer');

const utils = require('./utils');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: ['babel-polyfill', './app.js'],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: 'assets/js/[name].[hash:7].bundle.js',
    chunkFilename: 'assets/js/[name].[hash:7].bundle.js',
  },

  devServer: {
    // port: 3000,
    contentBase: '../dist',
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    // disableHostCheck: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: { presets: ['es2015', 'react'] },
          options: { 
            presets: ['env', 'react', 'stage-0']
          },
        }
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          { loader: 'pug-loader' },
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline'
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '../../assets/images',
              outputPath: 'assets/images'
            }
          },
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '../../assets/fonts',
              outputPath: 'assets/fonts'
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          {
            loader: 'postcss-loader',
            options:{
              autoprefixer:{
                browser: ['> 1%', 'last 2 versions']
              },
              sourceMap: true,
              plugins: ()=> [autoprefixer]
            }
          },
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ]
      },
    ]
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@application': path.resolve(__dirname, '../src/components/application'),
      '@commons': path.resolve(__dirname, '../src/components/commons'),
      '@layout': path.resolve(__dirname, '../src/components/layout'),
      '@containers': path.resolve(__dirname, '../src/containers'),
      '@scripts': path.resolve(__dirname, '../src/scripts'),
      '@modules': path.resolve(__dirname, '../src/scripts/modules'),
      '@actions': path.resolve(__dirname, '../src/redux/actions'),
    },
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ],
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new CleanWebpackPlugin(['dist/**/*.*'],{
      root: __dirname + '/' + '../',
      verbose: true,
      dry: false
    }),

    new CopyWebpackPlugin([
      { from: 'assets/images', to: 'assets/images/' },
      { from: 'assets/fonts', to: 'assets/fonts/' },
      { from: 'assets/data', to: 'assets/data/' },
      { from: 'assets/lib', to: 'assets/lib/' },
      { from: 'assets/storage', to: 'assets/storage/' },
      { from: '_redirects', to: '[name]' },
    ]),

    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash:7].bundle.css',
    }),

    ...utils.pages(),

    new HtmlWebPackPugin({
      filename: 'index.html',
      template: 'views/pages/index.pug',
      inject: true,
      hash: true,
      minify: {
        html5: true,
        removeComments: true,
        collapseWhitespace: false
      }
    }),

    new HtmlBeautifyPlugin({
      config: {
        html: {
          end_with_newline: true,
          indent_size: 2,
          indent_with_tabs: true,
          indent_inner_html: true,
          preserve_newlines: false,
          unformatted: ['p', 'i', 'b', 'span']
        }
      },
      replace: [' type="text/javascript"']
    }),

    new WebpackNotifierPlugin({
      title: 'Sitio La Guia',
      emoji: false,
      onlyOnError: true,
      // alwaysNotify: true
    }),
  ]
}
