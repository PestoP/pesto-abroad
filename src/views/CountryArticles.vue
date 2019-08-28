<template>
  <div class='parent-grid'>
    <h1 v-if="articles.length === 0" class='no-article'> Pas encore d'articles :)</h1>
    <h1 v-else class='country-title'> {{this.$route.params.countryName.charAt(0).toUpperCase() + this.$route.params.countryName.slice(1)}}</h1>
    <template v-for="(article, index) in articles">
      <router-link tag='div' :to="{name: 'article',  params: { articleName: article.componentName} }" :key='index'>
        <v-card hover style="height: 100%">
          <img
            class='article-image'
            :src='getUrl(article.imageUrl)'
            :alt="article.name"
            aspect-ratio="2.75"
          />
          <v-card-title primary-title class='card-title-text'>
              <h3 class="mb-0 card-title">{{article.name}}</h3>
              <div class='card-text'> {{article.description}} </div>
          </v-card-title>
          <v-card-actions class='explore'>
              <v-btn flat color="green">Voir l'article</v-btn>
          </v-card-actions>
        </v-card>
      </router-link>
      <div :key="index + 'emptyDiv'"></div>
    </template>
  </div>
</template>

<script>
import indonesia from '../constants/articlesListAsia.js'

export default {
  data () {
    if (this.$route.params.countryName === 'indonesia') {
      return {
        articles: [ ...indonesia ]
      }
    } else {
      return {
        articles: [ ]
      }
    }
  },
  methods: {
    getUrl (imageUrl) {
      return require('@/assets/article/' + imageUrl + '.jpeg')
    }
  }
}
</script>

<style lang="scss">
  html {
    overflow-y: auto;
  }

  .card-title {
    font-size: 2.5em;
    font-weight: 400;
    line-height: 1.75em;
    letter-spacing: normal;
  }

  .card-text {
    font-size: 1.25em;
    font-weight: 400;
    line-height: 1.30em;
    letter-spacing: normal;
  }

  .article-image {
    height: 200px;
    width: 100%;
  }

  .explore {
    position: absolute;
    bottom: 0;
    right: 0;
  }

 .parent-grid {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    display: grid;

    .no-article {
      text-align: center;
    }

    .country-title {
      text-align: center;
      align-self: center;
    }
  }

/** Large screen **/
@media screen and (min-width: 900px) {
  .parent-grid {
    grid-template-columns: 2fr 3fr 3fr 2fr;
    grid-auto-rows: 150px;
    grid-column-gap: 2em;

    :nth-child(even) {
      grid-column: 2 / span 1;
      grid-row: span 3;
    }

    :nth-child(4n) {
      grid-column: 3 / span 1;
      grid-row: span 3;
    }

    :nth-child(2n-1) {
      grid-column: span 2;
    }

    :nth-child(3) {
      grid-row: span 2;
    }

    .no-article {
      text-align: center;
      grid-column: 2 / span 2;
      grid-row: 3;
    }

    .country-title {
      text-align: center;
      grid-column: 2 / span 2;
      align-self: center;
    }
  }
}

/** Medium screen **/
@media screen and (min-width: 500px) and (max-width: 900px) {

  .parent-grid {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 150px;
    grid-column-gap: 2em;

    :nth-child(even) {
      grid-column: 1 / span 1;
      grid-row: span 3;
    }

    :nth-child(4n) {
      grid-column: 2 / span 1;
      grid-row: span 3;
    }

    :nth-child(3) {
      grid-row: span 2;
    }

    .no-article {
      text-align: center;
      grid-column: 1 / span 2;
      grid-row: 3;
    }

    .country-title {
      text-align: center;
      grid-column: 1 / span 2;
      align-self: center;
    }
  }
}

/** Small screen **/
@media screen and (max-width: 500px) {
  .parent-grid {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 150px;
    grid-column-gap: 2em;

    :nth-child(even) {
      grid-row: span 3;
    }

    .no-article {
      text-align: center;
      grid-row: 3;
    }

    .country-title {
      text-align: center;
      align-self: center;
    }
  }
}
</style>
