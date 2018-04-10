module.exports = broker => {
  
  let remove = async (ctx) => {
    let removedUser = { id: 420, name: "paul" }
    broker.emit("user.remove", removedUser)
  }
  
  broker.createService({
    name: "user",
    actions: { remove }
  })
}
