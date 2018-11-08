<template>
  <div class='parent-grid'>
    <h1 v-if="articles.length === 0" class='no-article'> Pas encore d'articles :)</h1>
    <template v-for="(article, index) in articles">
      <router-link tag='div' :to="{name: 'article',  params: { articleName: 'pangandaran'} }" :key='index'>
        <v-card hover style="height: 100%">
          <img
            class='article-image'
            :src='getUrl(article.imageUrl)'
            :alt="article.name"
            aspect-ratio="2.75"
          />
          <v-card-title primary-title class='card-title-text'>
              <h3 class="headline mb-0 card-title">{{article.name}}</h3>
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
export default {
  data () {
    return {
      articles: [
        {
          name: 'article 1',
          imageUrl: 'malaysia',
          linkTo: 'article',
          description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
        },
        {
          name: 'article 2',
          imageUrl: 'malaysia',
          linkTo: 'article',
          description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
        },
        {
          name: 'article 3',
          imageUrl: 'malaysia',
          linkTo: 'article',
          description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
        },
        {
          name: 'article 4',
          imageUrl: 'malaysia',
          linkTo: 'article',
          description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
        },
        {
          name: 'article 5',
          imageUrl: 'malaysia',
          linkTo: 'article',
          description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
        },
        {
          name: 'article 6',
          imageUrl: 'malaysia',
          linkTo: 'article',
          description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
        }
      ]
    }
  },
  methods: {
    getUrl (imageUrl) {
      return require('@/assets/' + imageUrl + '.jpeg')
    }
  }
}
</script>

<style lang="scss">
  html {
    overflow-y: auto;
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
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 150px;
    grid-column-gap: 2em;

    :nth-child(odd) {
      grid-column: 1 / span 1;
      grid-row: span 3;
    }

    :nth-child(4n-1) {
      grid-column: 2 / span 1;
      grid-row: span 3;
    }

    :nth-child(2) {
      grid-row: span 2;
    }

    .no-article {
      text-align: center;
      grid-column: 1 / span 2;
      grid-row: 3;
    }
  }
</style>
