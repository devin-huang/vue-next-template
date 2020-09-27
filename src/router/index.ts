import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home/index.vue'
import About from '../components/About/index.vue'
import NoFind from '../components/NoFind/index.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/404', name: 'noFind', component: NoFind },
  { path: '/home', redirect: '/' },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

// 权限控制
router.beforeEach((to, from, next) => {
  if (to.name == 'noFind') {
    console.log('hellow')
    next()
  } else next()
})

export default router
