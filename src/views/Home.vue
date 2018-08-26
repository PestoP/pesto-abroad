<template>
  <v-container fluid>
    <ToolbarMenu />
    <AsianMap />
  </v-container>
</template>

<script>
import AsianMap from './AsianMap.vue'
import ToolbarMenu from './ToolbarMenu.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    AsianMap,
    ToolbarMenu
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
