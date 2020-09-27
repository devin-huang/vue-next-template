import common from '../../api/common'

export default {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    SET_COUNT(state: any, count: string) {
      state.count = count
    },
  },
  actions: {
    async findCount({ commit }: { commit: any }, params: string) {
      // try..catch 需要axios返回后把Code 非200 使用throw Error
      try {
        const { code, message, data } = await common.findCount()
        if (code === 200) {
          commit('SET_COUNT', data)
          console.log(message)
        }
      } catch (error) {
        console.error(error)
      }
    },
    async updateCount({ commit }: { commit: any }, params: number) {
      try {
        const { code, message, data } = await common.updateCount(params)
        if (code === 200) {
          commit('SET_COUNT', data)
          console.log(message)
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
}
