let util = require("util")

module.exports = (handler, action) => ctx => {
  if (process.env.MIDDLEWARE_LOG_ENABLED) {
    console.log(`Executing action ${action.name} with params: ${util.inspect(ctx.params)}`)
  }
  return handler(ctx)
}
