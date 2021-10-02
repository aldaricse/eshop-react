const webpack = require('webpack'),
	merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.common.config.js');

module.exports = merge(webpackBaseConfig, {
	devtool: 'source-map'
})
