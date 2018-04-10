let { ServiceBroker } = require("moleculer")

let broker = new ServiceBroker()

require("./post.service")(broker)

broker.start().then(async () => {
  let post = await broker.call("post.create", { body: { title: "Daily wisdom", content: "I think, therefore I am." }})
  console.log(`Created post '${post.title}' with id ${post.id}`)
})
