<template>
  <component :is="articleComponentName" class="article" />
</template>

<script>
import Pangandaran from './articles/indonesia/Pangandaran.vue'
import Amed from './articles/indonesia/Amed.vue'
import Bromo from './articles/indonesia/Bromo.vue'
import Prambanan from './articles/indonesia/Prambanan.vue'
import Ijen from './articles/indonesia/Ijen.vue'
import Munduk from './articles/indonesia/Munduk.vue'
import NusaPenida from './articles/indonesia/NusaPenida.vue'
import Borobudur from './articles/indonesia/Borobudur.vue'
import Yogyakarta from './articles/indonesia/Yogyakarta.vue'
import SouthBali from './articles/indonesia/SouthBali.vue'
import Ubud from './articles/indonesia/Ubud.vue'
import Pemuteran from './articles/indonesia/Pemuteran.vue'

export default {
  components: { Pangandaran, Amed, Bromo, Prambanan, Ijen, Munduk, NusaPenida, Borobudur, Yogyakarta, SouthBali, Ubud, Pemuteran },
  data () {
    return {
      articleComponentName: this.$route.params.articleName.charAt(0).toUpperCase() + this.$route.params.articleName.slice(1)
    }
  },
  watch: {
    '$route.params.articleName' (newArticleName) {
      this.articleComponentName = newArticleName
    }
  }
}
</script>

<style lang="scss">
.article {
  $heightBackgroundImage: 350px;

  header {
    opacity: 0.85;
    background-size: cover;
    position: absolute;
    left: 0;
    width: 100%;
    height: $heightBackgroundImage + 10px;
    margin-top: -10px;

    h2 {
      line-height: 6;
      font-size: 3em;
      text-align: center;
      color: white;
      padding-top: 70px;
    }
  }

  .article-body {
    padding-top: $heightBackgroundImage;

    h3 {
      line-height: 4;
      font-size: 2em;
      font-family: initial;
      color: royalblue;
    }

    a {
      text-decoration: none;
      font-weight: 600;
      color: royalblue;
    }

    p {
      font-size: 1.25em;
      text-align: justify;
      font-family: Georgia, Serif;
      text-justify: inter-word;
    }
  }
}

/** Medium screen **/
@media screen and (min-width: 500px) and (max-width: 950px) {
  .article {
    max-width: 600px;
    .article-body {
      h3 {
        line-height: 3rem;
        text-align: justify;
        margin-bottom: 25px;
        margin-top: 25px;
      }
    }
  }
}

/** Small screen **/
@media screen and (max-width: 500px) {
  .article {
    header > h2 {
      font-size: 2em;
      line-height: 3;
    }

    .article-body {
      h3 {
        font-size: 1.5em;
        font-family: initial;
        line-height: initial;
        margin-top: 25px;
        margin-bottom: 25px;
        }
      p {
        font-size: initial;
      }
    }
  }
}

</style>
