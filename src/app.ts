import Koa from 'koa'
import Router from 'koa-router'
import chalk from 'chalk'
import Cors from 'koa-cors'
import addRouters from './router'
import './db/mongo'

const app = new Koa()
const router = new Router()

//  添加路由
addRouters(router)
app.use(router.routes())
app.use(router.allowedMethods({}))

// 跨域
app.use(
  Cors({
    origin: '*'
  })
)

// 启动服务监听本地3000端口
app.listen(3000, () => {
  console.log('\nserver running:', chalk.green('http://localhost:3000'))
})
