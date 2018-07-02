const autoprefixer = require('autoprefixer')
const path = require('path')

const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')

const webpackConfig = (process.env.NODE_ENV === 'production') ? prodConfig : devConfig

module.exports = {
    bail: webpackConfig.bail,
    entry: webpackConfig.entry,
    output: webpackConfig.output,
    externals: webpackConfig.externals,
    plugins: webpackConfig.plugins,
    devServer: webpackConfig.devServer,
    devtool: webpackConfig.devtool,
    resolve: {
        root: [
            path.resolve('./web'),
        ],
        alias: {
            app: 'src/app',
            components: 'src/components',
            state: 'src/app/state',
            utils: 'src/utils',
        },
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.styl/,
                loader: 'stylint',
                exclude: /node_modules/,
            },
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css?modules&importLoaders=1&localIdentName=[name]-[local]__[hash:base64:5]!postcss-loader!stylus-loader',
                exclude: /globalStyles/,
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!postcss-loader!stylus-loader',
                include: /globalStyles/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ],
    },
    postcss: [autoprefixer],
}
