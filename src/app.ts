// import path from 'path'
import Koa from 'koa'
import Router from 'koa-router'
import chalk from 'chalk'
import Cors from 'koa-cors'
// import staticFiles from 'koa-static'
import koaBody from 'koa-body'
import addRouters from './router'
import './db/mongo'

const app = new Koa()
const router = new Router()

app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 200 * 1024 * 1024,
      // 允许保留后缀名
      keepExtensions: true
    },
    onError: (...data) => {
      console.log(data, 'onError')
    }
  })
)

// app.use(staticFiles(__dirname + '../static'))

//  添加路由
addRouters(router)
app.use(router.routes())
app.use(router.allowedMethods())

// 跨域
app.use(Cors({ origin: '*' }))

// 启动服务监听本地3000端口
app.listen(3000, () => {
  console.log('\nserver running:', chalk.green('http://localhost:3000'))
})
