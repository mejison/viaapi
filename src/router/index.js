import Vue from 'vue'
import VueRouter from 'vue-router'

import { Login, Forgot, NotFoundPage, ResetPassword, Questions, Tags } from '@/pages'
import { Public, Private } from '@/layouts'

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
      },
      {
        path: 'forgot-password',
        name: 'forgot-password',
        component: Forgot,
      },
      {
        path: 'reset-password',
        name: 'reset-password',
        component: ResetPassword,
      }
    ],
  },
  {
    path: '/app',
    name: 'private-layout',
    component: Private,
    children: [
      {
        path: '',
        name: 'questions',
        component: Questions,
        meta: {
          title: 'TRIVIA QUESTIONS - TURKISH',
        }
      },
      {
        path: 'tags',
        name: 'tags',
        component: Tags,
        meta: {
          title: 'TAGS',
        }
      },
    ],
  },
  {
    path: '*',
    name: '404',
    component: NotFoundPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
