require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageJson = require('./package.json')

const prodRoot = `/${process.env.APP_ID || packageJson.name}`
const publicPath = process.env.LOCAL ? '/' : prodRoot
const appRoot = process.env.LOCAL ? `${process.env.APP_ROOT}` : prodRoot

module.exports = {
    bail: true,
    entry: ['./web/src'],
    output: {
        path: path.join(__dirname, '/public'),
        publicPath,
        filename: 'apiPortal.js',
        chunkFilename: 'apiPortal.js',
    },
    externals: {
        react: 'React',
        'react-router': 'ReactRouter',
        'redux-form': 'ReduxForm',
        '@abc/fetcher': 'fetcher',
        '@abc/protonpack': 'protonpack',
        '@abc/fedagents': 'fedagents',
        '@abc/quarkicons': 'quarkicons',
    },
    plugins: [
        new HtmlWebpackPlugin({title: packageJson.title, template: './web/src/index.html'}),
        new webpack.DefinePlugin({ENV_APP_ROOT: JSON.stringify(appRoot)}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
    ],
    devtool: '',
}
