<template>
  <v-app style='overflow: hidden;'>
    <v-container fluid grid-list-md text-xs-center>
      <ToolbarMenu />
      <router-view/>
    </v-container>
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
</style>
