import { createRouter, createWebHistory} from 'vue-router'
import  type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/home.vue'

const routes :Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
