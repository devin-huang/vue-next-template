<template>
  <div class="vue-container">
    <LeftSideNav class="leftSide-nav" :menu="routes" />
    <section class="view-content">
      <img class="vue3-image" alt="Vue logo" src="./assets/logo.png" />
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LeftSideNav from './components/LeftSideNav/index.vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'App',
  components: {
    LeftSideNav,
  },
  setup() {
    let {
      options: { routes },
    } = useRouter()
    routes = routes.filter(item => item.name)
    return {
      routes,
    }
  },
})
</script>
<style lang="scss" scoped>
.vue-container {
  display: flex;
  height: 100vh;
  .vue3-image {
    width: 85px;
  }
  .leftSide-nav {
    flex-basis: 200px;
  }
  .view-content {
    flex: 1;
    border-left: thin solid slategrey;
    align-items: center;
  }
}
</style>
