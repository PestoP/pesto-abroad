<template>
  <v-container fluid grid-list-md text-xs-center>
    <ToolbarMenu />
    <v-layout row wrap class='page-container'>
        <v-flex xs2 style="z-index:1;">
          <CountriesList :countryName='countryName' />
        </v-flex>
        <v-flex xs5>
          <AsianMap v-on:country-changed='countryChanged' />
        </v-flex>
        <v-flex xs5  style="z-index:1;">
          <CountryCard :countryName='countryName' />
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import ToolbarMenu from './ToolbarMenu.vue'
import AsianMap from './AsianMap.vue'
import CountriesList from './CountriesList.vue'
import CountryCard from './CountryCard.vue'

export default {
  name: 'Home',
  data () {
    return {
      countryName: ''
    }
  },
  components: {
    ToolbarMenu,
    AsianMap,
    CountriesList,
    CountryCard
  },
  methods: {
    countryChanged (countryName) {
      this.countryName = countryName
    }
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

.page-container {
  padding-top: 75px;
  padding-bottom: 0;
}
</style>
