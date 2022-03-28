import UserModel from '../model/user'

class User {
  /**
   * 创建
   * @param ctx
   */
  async create(ctx: CTX) {
    await UserModel.create({
      name: '张三',
      email: '1454dad@qq.com',
      age: 18,
      avatar:
        'https://images.ctfassets.net/3ouphkrynjol/3mfb7HH2YowrPxX9C6ik6H/723034bcb4e99349663c4bc8223fb8b6/localizejs.com.png'
    })
    ctx.body = '<h1>hello world!</h1>'
  }

  /**
   * 列表
   * @param ctx
   */
  async list(ctx: CTX) {
    const page = Number(ctx.query.page as string) || 1
    const pageSize = Number(ctx.query.pageSize as string) || 10
    const data = await UserModel.find()
      .where({ name: '张三' })
      .limit(pageSize)
      .skip((page - 1) * pageSize)
    const total = await UserModel.where({ name: '张三' }).count()
    ctx.body = {
      page,
      pageSize,
      total,
      data
    }
  }

  /**
   * 列表
   * @param ctx
   */
  async update(ctx: CTX) {
    const data = await UserModel.findById('62414fc6d41cc980446fe539').update({
      name: '100'
    })
    ctx.body = {
      data
    }
  }

  /**
   * 删除
   * @param ctx
   */
  async delete(ctx: CTX) {
    const data = await UserModel.deleteOne({
      _id: '6241564e9d563583d4e8b868'
    })
    ctx.body = {
      data
    }
  }
  /**
   * 删除多个
   * @param ctx
   */
  async deleteMany(ctx: CTX) {
    const data = await UserModel.deleteMany({
      _id: ['6241564f9d563583d4e8b86a', '6241564e9d563583d4e8b866']
    })
    ctx.body = {
      data
    }
  }
}

export default new User()
