<template>
  <div class="container">
    <router-link tag='div' :to="{ name: 'country', params: { countryName: this.country.key }}">
      <v-card height="740px" hover>
        <img
          :src="getUrl()"
          class='card-country-img'
          :alt="this.country.name"
          aspect-ratio="2.75"
        />
        <v-card-title primary-title class='card-title-text'>
            <h3 class="headline mb-0 card-title">{{this.country.name}}</h3>
            <div class='card-text'>{{this.country.description}}</div>
        </v-card-title>
        <v-card-actions class='explore'>
          <v-btn flat color="brown">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </router-link>
  </div>
</template>

<script>
import { countries } from '../../constants'

export default {
  props: ['countrySelected'],
  data () {
    return {
      countries: countries
    }
  },
  methods: {
    getUrl () {
      const countryKey = countries.find(country => country.key === this.countrySelected).key
      return require('@/assets/' + countryKey + '.jpeg')
    }
  },
  computed: {
    country: function () {
      return countries.find(country => country.key === this.countrySelected)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 45%;
}

.explore {
  position: absolute;
  bottom: 0;
}

.card-country-img {
  height: 200px;
  width: 100%;
}

.card-title-text {
  display: block;

  .card-title {
    padding-bottom: 10px;
  }
}

</style>
