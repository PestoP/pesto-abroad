<template>
  <component :is="articleComponentName" class="article" />
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
</style>
