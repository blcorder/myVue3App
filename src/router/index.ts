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
        path: '/Menu1',
        name: 'Menu1',
        component: () => import('../views/components/Menu1.vue')
      },
      {
        path: '/Menu2',
        name: 'Menu2',
        component: () => import('../views/components/Menu2.vue')
      },
      {
        path: '/Menu3',
        name: 'Menu3',
        component: () => import('../views/components/Menu3.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
