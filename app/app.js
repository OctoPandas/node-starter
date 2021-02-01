const Koa = require('koa')

require('dotenv').config()
const { PORT } = process.env

const app = new Koa()

app.use(async ctx => {
  ctx.body = {
    hello: 'world'
  }
})

app.listen(PORT, () => {
  console.info(`The app is listening at port ${PORT}.`)
})
