<template>
  <div>
    <h1>vue3 Composition Api 、Router</h1>
    <section ref="sectionDom">
      <label>ref、计算属性</label>
      <input type="number" v-model="inputRef" />
      -- {{ double }} --
      <br />
      <label>深度侦听对象</label>
      <input type="number" v-model="cloudy.size" />
      <label>批量侦听</label>
      <input type="number" v-model="person.name" />
      <input type="number" v-model="person.age" />
    </section>
  </div>
</template>
<script>
import {
  defineComponent,
  watch,
  watchEffect,
  ref,
  reactive,
  readonly,
  computed,
  onMounted,
  onBeforeUnmount,
} from 'vue'
// import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'About',
  props: {
    msg: String,
  },
  setup(props, ctx) {
    /**
     * props 父级传递属性
     * ctx 当前vue实例
     */

    // 生命周期
    onMounted(() => {
      console.log('DOM挂载后触发')
    })
    onBeforeUnmount(() => {
      console.log('组件销毁前触发')
    })

    // 定义变量
    const only = readonly(ref(100))
    const inputRef = ref(0)
    const cloudy = reactive({ size: 0 })
    const person = reactive({ name: 'Devin', age: 0 })

    // 侦听全局
    watchEffect(() => console.log('watchEffect'), {
      flush: 'sync',
      onTrigger() {
        debugger
      },
      onTrack() {
        debugger
      },
    })
    // watch  ref属性、reactive属性
    watch(
      cloudy,
      (count, prevCount) => {
        console.log('侦听function返回值、ref、reactive', count, prevCount)
      },
      { immediate: true, deep: false },
    )

    // watch 批量侦听
    watch(
      () => [person.name, person.age],
      ([name, age], [preA, preB]) => {
        console.log('匹配侦听及新旧值对比', name, age, preA, preB)
      },
    )

    // 计算属性
    const double = computed(() => ++inputRef.value)

    // 获取DOM节点
    const sectionDom = ref(null)

    // Router
    // const router = useRouter()

    return { sectionDom, inputRef, cloudy, person, only, double }
  },
})
</script>
<style lang="scss" scoped>
section {
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  label {
    margin-top: 20px;
    font-size: small;
  }
  input {
    margin: 5px;
    padding: 5px;
    flex-grow: 0;
  }
}
</style>
