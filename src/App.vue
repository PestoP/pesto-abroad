<template>
  <v-app style='overflow: hidden;'>
    <ToolbarMenu />
    <router-view class='page-container'/>
  </v-app>
</template>

<script>
import ToolbarMenu from './views/ToolbarMenu.vue'

export default {
  name: 'App',
  components: {
    ToolbarMenu
  }
}
</script>

<style>
  html {
    overflow: hidden;
  }

  .page-container {
    padding-top: 75px;
    padding-bottom: 0;
  }
</style>
