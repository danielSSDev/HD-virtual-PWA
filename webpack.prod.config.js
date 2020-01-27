const merge = require('webpack-merge');
const webpackBase = require('./webpack.config');
const CompressionWebPackPlugin = require('compression-webpack-plugin');

module.exports = merge(webpackBase, {});