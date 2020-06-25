const remote = require('./remote')
const config = require('../config')
const { mysqlService } = require('../config')

module.exports = new remote(config.cacheService.host, config.cacheService.port)