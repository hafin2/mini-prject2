import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import signin from './views/signin.vue'
import brand from './views/brand.vue'
import product from './views/product.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: signin
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand
    },
    {
      path: '/product',
      name: 'product',
      component: product
    }
  ]
})
