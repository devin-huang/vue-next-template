<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="add">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(props, vue) {
    const aa = 123
    aa = 456
    console.log(props, vue)
    const count = ref(0)
    const add = () => {
      count.value++
    }
    return {
      count,
      add,
    }
  },
})
</script>
>
