import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
