let { ServiceBroker } = require("moleculer")

let broker = new ServiceBroker()

require("./post.service")(broker)
require("./user.service")(broker)

broker.start().then(async () => {
  
  let post = {
    body: {
      title: "Daily wisdom",
      content: "I think, therefore I am.",
      userId: 1
    }
  }
  
  let otherPost = {
    body: {
      title: "Another wisdom",
      content: "The only true wisdom is in knowing you know nothing.",
      userId: 420
    }
  }
  
  await broker.call("post.create", post)
  await broker.call("post.create", otherPost)
  await broker.call("user.remove", { id: 420 })
  console.log(await broker.call("post.find").filter(post => post.deleted))
})
