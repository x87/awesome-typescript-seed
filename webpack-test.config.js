const merge = require('webpack-merge');

const mainConfig = require('./webpack.config');
const testConfig = {
	devtool: 'inline-source-map',
	entry: function () {
		return {};
	},
	output: {},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'istanbul-instrumenter-loader',
				enforce: 'post',
				exclude: /node_modules|\.spec.ts$/
			}
		]
	}
};

module.exports = merge(mainConfig, testConfig);
