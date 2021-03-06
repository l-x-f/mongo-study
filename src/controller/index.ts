import fs from 'fs'
import path from 'path'
import mime from 'mime-types'
import Formidable from 'formidable'

let fileList: any[] = []
class Index {
  /**
   * 列表
   * @param ctx
   */
  async home(ctx: CTX) {
    const filePath = path.join(__dirname, '../../tests/index.html')
    const file = fs.readFileSync(filePath, 'utf-8')
    ctx.body = file
  }
  /**
   * 下载
   * @param ctx
   */
  async download(ctx: CTX) {
    const filePath = path.join(__dirname, 'user.ts')
    const file = fs.createReadStream(filePath)
    const mimeType = mime.lookup(filePath) as string
    ctx.response.set('content-type', mimeType)
    ctx.response.set('code', '200')
    ctx.response.set('msg', 'success')
    ctx.body = file
  }
  /**
   * 上传
   * @param ctx
   */
  async upload(ctx: CTX) {
    const file = ctx.request.files.file as Formidable.File
    const body = ctx.request.body
    const data = fs.readFileSync(file.filepath)
    fileList.push(data)
    fs.unlinkSync(file.filepath)

    if (body.isLast === 'true') {
      const writeData = Buffer.concat(fileList)
      fs.writeFileSync(
        path.join(__dirname, '../../static/uploads/', +new Date() + '-' + body.filename),
        writeData
      )
      fileList = []
    }
    ctx.body = file.filepath
  }
}

export default new Index()
