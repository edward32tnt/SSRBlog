const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const moment = require('moment')
const _ = require('lodash')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const Header = [
  {body: 'Have a Nice day, I m Edward32tnt'},
  {body: 'Glad to see u, I m Edward32tnt\'s Blog'},
  {body: `Today is ${moment().format('dddd')}, I m Edward32tnt`},
]

const datasource = [
  { title: 'i m fucking low', desc: 'i m fucking low'},
  { title: 'i m fucking middle', desc: 'i m fucking middle'},
  { title: 'i m fucking high', desc: 'i m fucking high'},
]

app.prepare()
.then(() => {
  const server = new Koa()
  const router = new Router()
  router.get('/api/header', async ctx => {
    ctx.body = Header[_.random(0, Header.length-1)]
    return
  })
  router.get('/api/blog/:id', async ctx => {
    console.log('get', datasource[ctx.params.id])
    ctx.body = datasource[ctx.params.id]
    return
  })
  router.get('/api/blogs', async ctx => {
    ctx.body = datasource
    return
  })

  router.get('/p/:id', async ctx => {
    const actualPage = '/post'
    const queryParams = { id: ctx.params.id, title: datasource[ctx.params.id].title}
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
