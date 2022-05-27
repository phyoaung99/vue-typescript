import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'list',
    component: () => import(/* webpackChunkName: "userlist" */ '../views/ListView.vue')
  },
  {
    path: '/createuser',
    name: 'createuser',
    component: () => import('../views/CreateUser.vue')
  }
  ,
  {
    path: '/calculateAge',
    name: 'calculateAge',
    component: () => import('../components/CalculateAge.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
