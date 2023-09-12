import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/home/',
        redirect: '/dataWatch',
      },
      {
        path: '/dataWatch',
        name: 'dataWatch',
        component: () => import('../views/components/dataWatch.vue')
      },
      {
        path: '/listShow',
        name: 'listShow',
        component: () => import('../views/components/listShow.vue')
      },
      {
        path: '/orderInfo',
        name: 'orderInfo',
        component: () => import('../views/components/orderInfo.vue')
      },
      {
        path: '/tjfx',
        name: 'tjfx',
        component: () => import('../views/components/tjfx.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
