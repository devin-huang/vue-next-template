import product from '../../api/product'

export default {
  namespaced: true,
  state: {
    product_list: [],
  },
  mutations: {
    SET_PRODUCT(state: any, product: number | string) {
      state.product_list = product
    },
  },
  actions: {
    async findProductList({ commit }: { commit: any }, params: string) {
      // try..catch 需要axios返回后把Code 非200 使用throw Error
      try {
        const { code, message, data } = await product.findProductList()
        if (code === 200) {
          commit('SET_PRODUCT', data)
          console.log(message)
        }
      } catch (error) {
        console.error(error)
      }
    },
    async updateProductList({ commit }: { commit: any }, { id, value }) {
      try {
        const { code, message, data } = await product.updateProductList(
          id,
          value,
        )
        if (code === 200) {
          commit('SET_PRODUCT', data)
          console.log(message)
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
}
