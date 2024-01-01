import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pages/Homepage.vue'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
