let id = 1
let posts = []

let createPostParamSchema = {
  body: {
    type: "object",
    props: {
      title: { type: "string", min: 3, max: 120 },
      content: { type: "string", min: 3, max: 255 },
      userId: "number"
    }
  }
}

let create = async (ctx) => {
  let post = { id, title: ctx.params.body.title, content: ctx.params.body.content, userId: ctx.params.body.userId }
  posts.push(post)
  id += 1
  return post
}

let find = async (ctx) => posts

let userRemovedHandler = (user) => posts.filter(post => post.userId === user.id)
                                        .map(post => post.deleted = true)

module.exports = {
  name: "post",
  actions: {
    create: {
      params: createPostParamSchema,
      handler: create
    },
    find
  },
  events: { "user.remove": userRemovedHandler }
}
