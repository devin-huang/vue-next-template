<template>
  <ul class="menu-container">
    <li class="menu-container--item" v-for="(item, index) in menu" :key="index">
      <router-link :to="item.name">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script>
// import { PropType } from 'vue'
export default {
  name: 'LeftSideNav',
  props: {
    menu: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped>
.menu-container {
  padding: 0;
  margin: 0;
  list-style: none;
  &--item {
    padding: 15px;
    display: flex;
    justify-content: left;
  }
}
</style>
