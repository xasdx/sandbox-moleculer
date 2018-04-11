let broker = require("./broker")

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

let logBrokerStats = async () => {
  console.log(`List of nodes: ${JSON.stringify(await broker.call("$node.list"))}\n`)
  console.log(`List of services: ${JSON.stringify(await broker.call("$node.services"))}\n`)
  console.log(`List of actions: ${JSON.stringify(await broker.call("$node.actions"))}\n`)
  console.log(`List of events: ${JSON.stringify(await broker.call("$node.events"))}\n`)
  console.log(`Health information: ${JSON.stringify(await broker.call("$node.health"))}\n`)
  console.log(`Statistics: ${JSON.stringify(await broker.call("$node.stats"))}\n`)
}

broker.start().then(async () => {
  
  if (process.env.METRICS_LOG_BROKER_STATS) { logBrokerStats() }
  
  await broker.call("post.create", post)
  await broker.call("post.create", otherPost)
  await broker.call("user.remove", { id: 420 })
  console.log(await broker.call("post.find").filter(post => post.deleted))
})
