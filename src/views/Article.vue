<template>
  <component :is="articleComponentName" />
</template>

<script>
import Pangandaran from './articles/indonesia/Pangandaran.vue'

export default {
  components: { Pangandaran },
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
}

.article {

  h2 {
    line-height: 6;
    font-size: 45px;
    text-align: center;
  }

  h3 {
    line-height: 4;
    font-size: 30px;
    font-family: initial;
  }

  p {
    font-size: 20px;
    text-align: justify;
    font-family: Georgia, Serif;
    text-justify: inter-word;
  }
}
</style>
