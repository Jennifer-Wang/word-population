const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: './source/js/entry.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map',
	module:{
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', 'stage-2']
				}
			},
			{
				test: /\.s?css$/,
				loader: ['style-loader', 'css-loader', 'sass-loader']
			},
		],

	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + '/source/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)|| JSON.stringify('development')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: process.env.NODE_ENV === 'production'
		})
	],
	devServer: {
		port: 3000,
		historyApiFallback: true,
		hot: true,
		inline: true
	}
};
