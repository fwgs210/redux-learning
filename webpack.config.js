const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		app: path.resolve(__dirname, 'src')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [{
			test: /\.jsx?/,
			loader: 'babel-loader'
		}]
	},
	devServer: {
    	watchContentBase: true
  	}
};