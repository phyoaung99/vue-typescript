import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListView.vue')
  },
  {
    path: '/createuser',
    name: 'createuser',
    component: () => import('../views/CreateUser.vue')
  }
  ,
  {
    path: '/userage',
    name: 'userage',
    component: () => import('../components/UserAge.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
