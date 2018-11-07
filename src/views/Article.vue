<template>
  <component :is="articleComponentName" />
</template>

<script>
import Sukhotai from './articles/thailand/Sukhotai.vue'

export default {
  components: {Sukhotai},
  data () {
    return {
      articleComponentName: this.$route.params.articleName.charAt(0).toUpperCase() + this.$route.params.articleName.slice(1)
    }
  }
}
</script>
