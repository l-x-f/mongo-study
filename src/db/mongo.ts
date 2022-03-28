import mongoose, { Schema, model } from 'mongoose'
import chalk from 'chalk'
import config from '../config/index'

const { host, port, dbName, user, password } = config.mongo

const getUrl = (auth = '') => `mongodb://${auth}${host}:${port}`

const prodUrl = getUrl(`${user}:${password}@`)

const url = process.env.NODE_ENV === 'production' ? prodUrl : getUrl()
// 开始连接（ 使用用户名和密码时，需要 `?authSource=admin` ）
mongoose.connect(`${url}/${dbName}`)
// 连接对象
const db = mongoose.connection

db.on('error', err => {
  console.error('mongoose connect error', err)
})

db.once('open', () => {
  // 用以测试数据库连接是否成功
  console.log(chalk.greenBright('mongoose connect success!'))
})

export { Schema, model }

export default mongoose
