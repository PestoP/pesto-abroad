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
  }
}
</script>

<style lang="scss">
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  margin-bottom: 25px;
}

.article {
  $heightBackgroundImage: 350px;

  h2 {
    line-height: 6;
    font-size: 3em;
    text-align: center;
    color: white;
    padding-top: 70px;

    opacity: 0.85;
    background-image: url('~@/assets/article/pangandaran/barbecue.jpeg');
    background-size: cover;
    position: absolute;
    left: 0;
    width: 100%;
    height: $heightBackgroundImage + 10px;
    margin-top: -10px;
  }

  .article-body {
    padding-top: $heightBackgroundImage;
    h3 {
      line-height: 4;
      font-size: 2em;
      font-family: initial;
    }

    p {
      font-size: 1.25em;
      text-align: justify;
      font-family: Georgia, Serif;
      text-justify: inter-word;
    }
  }
}

/** Small screen **/
@media screen and (max-width: 500px) {
  .article {
    h2 {
      font-size: 2em;
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
