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
      component: Home,
      meta: {
        breadcrumb: [
          {
            name: 'Accueil',
            linkTo: 'home',
            disabled: true
          }
        ]
      }
    },
    {
      path: '/countries',
      name: 'countries',
      component: CountriesView,
      meta: {
        breadcrumb: [
          {
            name: 'Accueil',
            linkTo: 'home',
            disabled: false
          },
          {
            name: 'Liste des pays',
            linkTo: 'countries',
            disabled: true
          }
        ]
      }
    },
    {
      path: '/countries/:countryName',
      name: 'country',
      component: CountryArticles,
      meta: {
        breadcrumb: [
          {
            name: 'Accueil',
            linkTo: 'home',
            disabled: false
          },
          {
            name: 'Liste des pays',
            linkTo: 'countries',
            disabled: false
          },
          {
            name: ':/countryName',
            linkTo: 'country',
            disabled: true
          }
        ]
      }
    }
  ]
})
