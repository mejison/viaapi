import Vue from 'vue'
import VueRouter from 'vue-router'

import { Login } from '@/pages'
import { Public } from '@/layouts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'public-layout',
    component: Public,
    children: [
      {
        path: '',
        name: 'login',
        component: Login,
      }
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
