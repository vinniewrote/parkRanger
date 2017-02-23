const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
	entry: ["./index.js"],
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
      // {
      //   test: /\.scss?$/,
      //   loader: 'style!css!sass',
      //   include: path.join(__dirname, 'build', 'sass')
      // }
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
		new ExtractTextPlugin('dist/css/styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
	],
	devServer: {
		inline: true,
		port: 8888
	}
};
