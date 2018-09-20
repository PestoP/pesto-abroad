import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CountryArticles from './views/CountryArticles.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/country',
      name: 'country',
      component: CountryArticles
    }
  ]
})
