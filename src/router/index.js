import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import(/* webpackChunkName: "about" */ '../views/Service.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/servicecompanies',
    name: 'servicecompanies',
    component: () => import(/* webpackChunkName: "about" */ '../views/Service-companies.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
