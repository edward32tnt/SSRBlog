const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const datasource = [
  { title: 'i m fucking low', },
  { title: 'i m fucking middle', },
  { title: 'i m fucking high', },
]

app.prepare()
.then(() => {
  const server = new Koa()
  const router = new Router()
  router.get('/api/blogs', async ctx => {
    ctx.body = datasource
    return
  })

  router.get('/p/:id', async ctx => {
    const actualPage = '/post'
    const queryParams = { title: datasource[ctx.params.id].title}
    return await app.render(ctx.req, ctx.res, actualPage, queryParams)
  })

  router.get('*', async ctx => {
    return await handle(ctx.req, ctx.res)
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })
  server.use(router.routes())
  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

})
.catch((ex)=> {
  console.error(ex.stack)
  process.exit(1)
})
