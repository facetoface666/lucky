import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/Login'
import Info from './views/Info'
import User from './views/User'
import About from './views/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/user',
        name: 'user',
        component: User
    },
    {
        path: '/info',
        name: 'info',
        component: Info
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
