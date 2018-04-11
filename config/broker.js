let { ServiceBroker } = require("moleculer")

let broker = new ServiceBroker({
  statistics: true,
  middlewares: [require("../shared/log.middleware")]
})

broker.loadServices("../")

module.exports = broker
