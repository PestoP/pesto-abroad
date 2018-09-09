<template>
  <div>
    <h1>
      Carte du pays
    </h1>
    <div>
      <v-card>
          <img
            :src="getUrl()"
            class='card-country-img'
            aspect-ratio="2.75"
          />
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{countrySelected}}</h3>
              <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
    </div>
  </div>
</template>

<script>
import {countries} from '../constants'

export default {
  props: ['countrySelected'],
  methods: {
    getUrl () {
      const countryName = countries[this.countrySelected].key
      return require('@/assets/' + countryName + '.jpeg')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-country-img {
  height: 200px;
  width: 100%;
}
</style>
