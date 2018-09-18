<template>
  <div class='parent-grid'>
    <template v-for="(article, index) in articles">
      <div :key='index'>
        {{article.name}}
      </div>
      <div :key='index'></div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articles: [
        {
          name: 'article 1'
        },
        {
          name: 'article 2'
        },
        {
          name: 'article 3'
        },
        {
          name: 'article 4'
        },
        {
          name: 'article 5'
        },
        {
          name: 'article 6'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  html {
    overflow-y: auto;
  }

.parent-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 100px;
  grid-column-gap: 2em;

  :nth-child(odd) {
    background-color: aqua;
    grid-column: 1 / span 1;
    grid-row: span 3;
  }

  :nth-child(4n-1) {
    background-color: aqua;
    grid-column: 2 / span 1;
    grid-row: span 3;
  }

  :nth-child(2) {
    grid-row: span 2;
  }
}

</style>
