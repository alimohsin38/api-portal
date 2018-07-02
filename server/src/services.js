const keyMasterLogger = require('@abc/logger')
    .getLogger()
    .child({module:'api-portal.key-master-js', level: 'info'})

const keyMaster = new (require('@abc/keymaster-js'))(keyMasterLogger)

const partyLogger = require('@abc/logger')
    .getLogger()
    .child({module:'api-portal.party-service-js', level: 'info'})

const partyService = new (require('@abc/party-service-js'))(partyLogger)

const puftLogger = require('@abc/logger')
    .getLogger()
    .child({module:'api-portal.stay-puft-js', level: 'info'})

const stayPuftService = new (require('@abc/stay-puft-js'))(puftLogger)

const stop = () => {
    keyMaster.stop()
    partyService.stop()
    stayPuftService.stop()
}

module.exports = {keyMaster, partyService, stayPuftService, stop}
