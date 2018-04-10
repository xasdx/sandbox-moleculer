let { ServiceBroker } = require("moleculer")

let broker = new ServiceBroker()

broker.createService({
  name: "test",
  actions: {
    test(ctx) { console.log(`hello ${ctx.params.name}`) }
  }
})

broker.start()
      .then(() => broker.call("test.test", { name: "paul" }))
