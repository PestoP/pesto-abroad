<template>
  <component :is="articleComponentName" />
</template>

<script>
import Pangandaran from './articles/indonesia/Pangandaran.vue'

export default {
  components: {Pangandaran},
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
</style>
