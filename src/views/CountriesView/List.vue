<template>
  <div class="container">
    <ul class='countries-list'>
      <div v-for="(country, index) in countries" :key="country.name" class='country' @click='goTo(country.key)' @mouseover="$emit('country-changed', country.key)">
        <v-divider v-if='index !== 0' class='divider'> </v-divider>
        <li :class="{ active: country.name === countries.find(country => country.key === countrySelected).name }"> {{country.name}}</li>
      </div>
    </ul>
  </div>
</template>

<script>
import {countries} from '../../constants'

export default {
  props: ['countrySelected'],
  data () {
    return {
      countries: countries
    }
  },
  methods: {
    goTo (country) {
      this.$router.push({name: 'country', params: { countryName: country }})
    }
  }
}
</script>

<style lang="scss" scoped>

.container {
  height: 45%;

  h1 {
    padding-bottom: 5vh;
  }

  .countries-list {
    .active {
      color: green;
      font-weight: bold;
    }
    padding-top: 40px;
    padding-left: 0px;
    list-style-type: none;
    font-size: 1.5em;
    .country {
      padding-bottom: 3vh;
      cursor: pointer;
      &:hover {
        @extend .active
      }
      .divider {
        padding-bottom: inherit;
      }
    }
  }
}

</style>
