import { createStore } from 'vuex'
import common from './modules/common'
import product from './modules/product'

export default createStore({
  modules: {
    common,
    product,
  },
})
