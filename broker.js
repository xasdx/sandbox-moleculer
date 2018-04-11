let { ServiceBroker } = require("moleculer")

let broker = new ServiceBroker({
  statistics: true,
  middlewares: [require("./log.middleware")]
})

require("./post.service")(broker)
require("./user.service")(broker)

module.exports = broker
