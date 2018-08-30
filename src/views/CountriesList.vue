<template>
  <div class="container">
    <h1>
      Liste des pays
    </h1>
    <div>
      <ul class='countries-list'>
        <li v-for="country in countries" :key="country.name" class='country' :class="{ active: country.name === countrySelected }"> {{country.name}}</li>
        <v-divider />
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
    padding-bottom: 6vh;
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
      padding-bottom: 5vh;
      cursor: pointer;
      &:hover {
        @extend .active
      }
    }
  }
}

</style>
