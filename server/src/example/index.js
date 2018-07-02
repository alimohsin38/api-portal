
// delete me

const Router = require('koa-router')

const router = new Router({prefix: '/example'})
const partyLogger = require('@abc/logger').getLogger()
                        .child({module:'party-service-js', level: 'info'})
const partyService = new (require('@abc/party-service-js'))(partyLogger)

router.get('/', async (ctx) => {
    const {id, accountNumber} = ctx.query
    const params = {id, accountNumber}

    try {
        ctx.time('get examples')
        const response = await partyService.getExamples('access_token', params)
        ctx.timeEnd('get examples')
        ctx.log.debug(response.body)
        ctx.body = response.body
        ctx.type = 'application/json'
        ctx.status = response.statusCode
    } catch (e) {
        ctx.log.error(e)
        ctx.status = 500
    }
})

router.put('/', async (ctx) => {
    try {
        const response = await partyService.updateExample('access_token', ctx.request.body)
        ctx.log.debug(response.body)
        ctx.body = response.body
        ctx.type = 'application/json'
        ctx.status = response.statusCode
    } catch (e) {
        ctx.log.error(e)
        ctx.status = 500
    }
})

router.get('/isOk', async (ctx, next) => {
    try {
        ctx.body = {exampleStuff: 'Kato'}
        ctx.type = 'application/json'
        ctx.status = 200
        await next()
    } catch (e) {
        ctx.log.error(e)
        ctx.status = 500
    }
})

router.post('/:exampleId/:exampleName', async (ctx) => {
    try {
        const response = await partyService.updateLExampleField('access_token', ctx.params.exampleId, ctx.params.exampleName, ctx.request.body)
        ctx.log.debug(`Update example ${ctx.params.exampleName} returned with a status of ${response.statusCode}`)
        ctx.body = response.body
        ctx.type = 'application/json'
        ctx.status = response.statusCode
    } catch (e) {
        ctx.log.error(e)
        ctx.status = 500
    }
})

module.exports = router