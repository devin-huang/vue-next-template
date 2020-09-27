<template>
  <section class="vue3-container">
    <h2 class="vue3-title">vuex4.0 modules使用</h2>
    <div class="vue3-content">{{ commonState.count }}</div>
    <div class="vue3-content">{{ productState.product_list }}</div>
    <div>
      <button class="vue3-button" @click="handleFindCound">Find Count</button>
    </div>
    <div>
      <button class="vue3-button" @click="handleSetCound">
        set Count to 12345
      </button>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
// import { useStore } from 'vuex'
import useStoreModule from '../../store/composable'
export default defineComponent({
  name: 'Home',
  setup() {
    // const store = useStore()
    // 单独引用某个模块时可使用解构赋值
    // const {state, actions} = useStoreModule('common')
    const common = useStoreModule('common')
    const product = useStoreModule('product')
    const productState = product.state
    const commonState = common.state

    const handleFindCound = async () => {
      await common.actions.findCount()
      await product.actions.findProductList()
    }
    const handleSetCound = async () => {
      await common.actions.updateCount(123456)
      await product.actions.updateProductList(1, 5)
    }
    return { commonState, productState, handleFindCound, handleSetCound }
  },
})
</script>

<style lang="scss" scoped>
.vue3 {
  &-container {
    padding: 20px;
    background: #f5f5f5;
  }
  &-title {
    color: #535353;
  }
  &-content {
    color: rgb(0, 153, 255);
  }
  &-button {
    border: thin solid #969393;
    border-radius: 20px;
    padding: 5px 10px;
    margin-bottom: 5px;
    cursor: pointer;
    outline: none;
    -moz-focus-inner {
      border-color: transparent;
    }
    &:hover {
      background: rgb(182, 248, 250);
    }
    &:active {
      background: rgb(152, 242, 245);
    }
  }
}
</style>
