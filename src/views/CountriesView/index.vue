<template>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1 md2 style="z-index:1;">
          <CountriesList v-on:country-changed='countryChanged' :countrySelected='countryName' />
        </v-flex>
        <v-flex md4 class="hidden-sm-and-down">
          <AsianMap v-on:country-changed='countryChanged' />
        </v-flex>
        <v-flex xs10 offset-xs1 offset-md0 md5 style="z-index:1;">
          <CountryCard justify-center :countrySelected='countryName' />
        </v-flex>
    </v-layout>
</template>

<script>
import AsianMap from './AsianMap.vue'
import CountriesList from './List.vue'
import CountryCard from './Card.vue'
import { countries } from '../../constants'

export default {
  name: 'CountriesView',
  data () {
    return {
      countryName: countries.find(country => country.current).key
    }
  },
  components: {
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
