import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/category?type=anime'
  },
  {
    path: '/category',
    component: () => import('../views/MainContent.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
