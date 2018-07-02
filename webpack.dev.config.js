const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageJson = require('./package.json')

module.exports = {
    bail: false,
    entry: [
        'webpack-hot-middleware/client',
        './web/src/dev/DevApp.js',
    ],
    output: {
        path: path.join(__dirname,  '/public'),
        publicPath: '/',
        filename: 'apiPortal.js',
        library: 'apiPortal',
        libraryTarget: 'umd',
    },
    plugins: [
        new HtmlWebpackPlugin({title: packageJson.title, template: './web/src/index.html'}),
        new webpack.DefinePlugin({ENV_APP_ROOT: JSON.stringify('')}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    devServer: '',
    devtool: 'source-map',
}
