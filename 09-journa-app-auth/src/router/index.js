import { createRouter, createWebHashHistory } from 'vue-router'
import authRouter from '@/modules/auth/router/index'
import daybookRouter from '@/modules/daybook/routes/index'
import HomeView from '../views/HomeView.vue'
import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/daybook',
    beforeEnter: [isAuthenticatedGuard],
    ...daybookRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
