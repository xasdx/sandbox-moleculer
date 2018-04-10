module.exports = broker => broker.createService({
  name: "post",
  actions: {
    async create(ctx) {
      return { id: 1, title: ctx.params.body.title, content: ctx.params.body.content }
    }
  }
})
