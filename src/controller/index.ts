class Index {
  /**
   * 列表
   * @param ctx
   */
  async home(ctx: CTX) {
    ctx.body = '<h1> server start success <h1>'
  }
}

export default new Index()
