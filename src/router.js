import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CountryArticles from './views/CountryArticles.vue'
import CountriesView from './views/CountriesView/index.vue'
import Article from './views/Article.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior () {
    /* WOW, great... Clap Clap, Something is broken with the scroll
       It doesn't go to the top after a big scroll and a clic to another page (in Firefox, didn't try in Chrome or something else)
       Here is a dirty hack but something is wrong with the page's height. Hope an intern will fix that someday :)
    */
    return { x: 0, y: -9999999 }
  },
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
    },
    {
      path: '/countries/:countryName/articles/:articleName',
      name: 'article',
      component: Article,
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
            disabled: false
          },
          {
            name: ':/articleName',
            linkTo: 'article',
            disabled: true
          }
        ]
      }
    }
  ]
})
