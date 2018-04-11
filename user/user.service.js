let remove = async function (ctx) {
  let removedUser = { id: 420, name: "paul" }
  this.broker.emit("user.remove", removedUser)
}

module.exports = {
  name: "user",
  actions: { remove }
}
