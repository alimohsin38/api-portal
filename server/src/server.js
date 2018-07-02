require('dotenv').config()

const port = process.env.PORT || 3001
const isProd = process.env.NODE_ENV === 'production'

const koa = require('koa')
const serve = require('koa-static')
const bodyparser = require('koa-bodyparser')
const conditional = require('koa-conditional-get')
const etag = require('koa-etag')
const koaBunyanLogger = require('koa-bunyan-logger')

const logger = require('@abc/logger').createLogger({name: process.env.APP_ID || require('../../package.json').name}, true)
const stopServices = require('./services').stop

// -------------- Initialize Application & Loggers --------------

const app = new koa()

app.use(koaBunyanLogger(logger))
app.use(koaBunyanLogger.requestIdContext())
app.use(koaBunyanLogger.requestLogger())
app.use(koaBunyanLogger.timeContext())
app.use(conditional())
app.use(etag())

// -------------- Configuration for Production or Development --------------

if (isProd) {
    if (process.env.LOCAL) {
        const cors = require('kcors')
        app.use(cors())
    }
    app.use(serve('public'))
} else {
    const webpackConfig = require('../../webpack.config.js')
    const webpack = require('webpack')
    const compiler = webpack(webpackConfig)
    const webpackMiddleware = require('koa-webpack')

    const historyFallBack = require('koa-connect-history-api-fallback')
    app.use(historyFallBack())

    app.use(webpackMiddleware({
        compiler,
        dev:  {noInfo: process.env.webpackNoInfo || false, publicPath: '/'},
        hot: {log: logger.info.bind(logger), path: '/__webpack_hmr', heartbeat: 10 * 1000},
    }))
}

app.use(bodyparser())

// -------------- Routes --------------

const exampleRouter = require('./example')

app.use(exampleRouter.routes())

app.use(exampleRouter.allowedMethods())

// -------------- Start Server --------------

app.listen(port)

logger.info('----------------------------------------------')
logger.info(`App accessable at: ${process.env.IP_ADDR}:${port}`)
logger.info(`Runtime environment: ${process.env.NODE_ENV}`)
logger.info('----------------------------------------------')
logger.info(' ')

// -------------- Error Handling --------------

process.stdin.resume() // so the program will not close instantly

const exitHandler = function (options, err) {
    stopServices()

    if (err) {
        logger.error(err.stack)
    }
    if (options.exit) {
        process.exit()
    }
}

// do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}))

// catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}))

// catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}))
