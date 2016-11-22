var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: "./index.js",
	output: {
		filename: "dist/js/main.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('dist/css/styles.css')
	],
	devServer: {
		inline: true,
		port: 8888
	}
};
