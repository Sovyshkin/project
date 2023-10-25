import { createRouter, createWebHistory } from 'vue-router'
import AppRegister from '../components/AppRegister.vue'
import AppLogin from '../components/AppLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: AppRegister,
    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin,
    },
  ]
})

export default router
