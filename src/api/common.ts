export default {
  async findCount() {
    return new Promise(res => {
      // 模拟API请求返回
      setTimeout(() => {
        res({
          code: 200,
          message: 'ok',
          data: 10000,
        })
      }, 1000)
    })
  },
  async updateCount(count: number) {
    // 模拟API请求返回
    return new Promise(res => {
      setTimeout(() => {
        res({
          code: 200,
          message: 'ok',
          data: count,
        })
      }, 1000)
    })
  },
}
