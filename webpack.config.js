const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const path = require('path');

module.exports = {
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            "node_modules",
            path.resolve(__dirname, "./src")
        ]
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
			{
				test: /\.ts$/,
				loader: 'tslint-loader',
				enforce: 'pre',
				exclude: /node_modules/,
				options: {
					configFile: 'tslint.json',
                    emitErrors: true
				}
			}
        ]
    },
    plugins: [
        new CheckerPlugin()
    ]
};


