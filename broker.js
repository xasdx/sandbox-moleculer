let { ServiceBroker } = require("moleculer")

let broker = new ServiceBroker({
  statistics: true,
  middlewares: [require("./log.middleware")]
})

broker.loadService("./post.service")
broker.loadService("./user.service")

module.exports = broker
