import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
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
