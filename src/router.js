import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CountryArticles from './views/CountryArticles.vue'
import CountriesView from './views/CountriesView/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/country/:countryName',
      name: 'country',
      component: CountryArticles
    },
    {
      path: '/countries',
      name: 'countries',
      component: CountriesView
    }
  ]
})
