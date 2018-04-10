module.exports = broker => {
  
  let id = 1
  let posts = []
  
  let create = async (ctx) => {
    let post = { id, title: ctx.params.body.title, content: ctx.params.body.content, userId: ctx.params.body.userId }
    posts.push(post)
    id += 1
    return post
  }
  
  let find = async (ctx) => posts
  
  let userRemovedHandler = (user) => posts.filter(post => post.userId === user.id)
                                          .map(post => post.deleted = true)
  
  broker.createService({
    name: "post",
    actions: { create, find },
    events: { "user.remove": userRemovedHandler }
  })
}
