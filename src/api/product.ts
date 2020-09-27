export default {
  async findProductList() {
    return new Promise(res => {
      // 模拟API请求返回
      setTimeout(() => {
        res({
          code: 200,
          message: 'ok',
          data: [1, 2, 3],
        })
      }, 1000)
    })
  },
  async updateProductList(id: number, value: number | string) {
    console.log(id, value)
    // 模拟API请求返回
    return new Promise(res => {
      setTimeout(() => {
        res({
          code: 200,
          message: 'ok',
          data: [1, 2, 3, 4],
        })
      }, 1000)
    })
  },
}
