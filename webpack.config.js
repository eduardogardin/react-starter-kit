/**
 * webpack main config 
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'index_bundle.js'
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/ },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/ }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}