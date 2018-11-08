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
