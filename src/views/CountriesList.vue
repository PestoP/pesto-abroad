<template>
  <div class="container">
    <h1>
      Liste des pays
    </h1>
    <div>
      <ul class='countries-list'>
        <div v-for="country in countries" :key="country.name" class='country'>
          <v-divider class='divider'> </v-divider>
          <li :class="{ active: country.name === countries.find(country => country.key === countrySelected).name }"> {{country.name}}</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import {countries} from '../constants'

export default {
  props: ['countrySelected'],
  data () {
    return {
      countries: countries
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
    padding-left: 0px;
    list-style-type: none;
    font-size: 1.5em;
    .country {
      padding-bottom: 2.5vh;
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
