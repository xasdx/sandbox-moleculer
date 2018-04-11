let { ServiceBroker } = require("moleculer")

let broker = new ServiceBroker({ statistics: true })

require("./post.service")(broker)
require("./user.service")(broker)

module.exports = broker
