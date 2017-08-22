const log4js =require('log4js')
const config = {
  appenders: {
    out: { type: 'stdout', layout: { type: 'json', separator: ',' } }
  },
  categories: {
    default: { appenders: ['out'], level: 'info' }
  }
}
log4js.addLayout('json', config => logEvent => JSON.stringify(logEvent) + config.separator)
log4js.configure(config)
const logger = log4js.getLogger('myInterestsWidget')

logger.info({message: 'log4js test'})
