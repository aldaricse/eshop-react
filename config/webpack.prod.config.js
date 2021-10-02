const webpack = require('webpack'),
	merge = require('webpack-merge'),
	OptimizeCSSAssetsPlugin= require('optimize-css-assets-webpack-plugin'),
	HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

const webpackBaseConfig = require('./webpack.common.config.js');

module.exports = merge(webpackBaseConfig, {
	// devtool: 'cheap-module-eval-source-map',
	devtool: false,
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /(node_modules|vendors).+(?<!css)$/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        },
      }
    },
  },
  plugins:[
    new OptimizeCSSAssetsPlugin({}),
	  // new HtmlBeautifyPlugin({
	  //   config: {
	  //     html: {
	  //       end_with_newline: true,
	  //       indent_size: 2,
	  //       indent_with_tabs: true,
	  //       indent_inner_html: true,
	  //       preserve_newlines: false,
	  //       unformatted: ['p', 'i', 'b', 'span']
	  //     }
	  //   },
	  //   replace: [' type="text/javascript"']
	  // })
  ],
})
