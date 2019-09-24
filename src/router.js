import Vue from 'vue'
import Router from 'vue-router'
import {Auth} from './plugins/api'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  if (Auth.loggedIn()) return next()
  next({
    path: '/login',
    query: { redirect: to.fullPath }
  })
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue'),
      beforeEnter(to, from, next) {
        if (!Auth.loggedIn()) return next()
        next({
          path: '/main',
          query: { redirect: to.fullPath }
        })
      }
    },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        Auth.logout()
        .then(() =>  { next('/login') })
        .catch(err => { console.log("logout error", err) })
      }
    },
    {
      path: '/main',
      name: 'Home',
      component: () => import('./views/Home.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/my-vote',
      name: 'My Vote',
      component: () => import('./views/MyVote.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/result',
      name: 'Result',
      component: () => import('./views/Result.vue')
    },
  ]
})
