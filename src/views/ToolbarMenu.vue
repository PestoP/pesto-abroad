<template>
  <v-toolbar fixed>
    <v-toolbar-items style='margin-left: -24px;'>
      <router-link tag='v-btn' class='v-btn--flat' :to="{ path: '/'}">
        <span style="font-weight:bold; margin-right: 3px;">Pesto </span> Abroad
      </router-link>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-breadcrumbs divider=">">
        <v-breadcrumbs-item
          v-for="path in breadcrumbList"
          :key="path.name"
          :disabled="path.disabled"
        >
          <router-link tag='span' :to="{name: path.linkTo}">
            {{ path.name }}
          </router-link>
        </v-breadcrumbs-item>
      </v-breadcrumbs>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <router-link tag='v-btn' class='v-btn--flat' :to="'countries'">
        Liste des pays
      </router-link>
      <v-btn flat disabled>Dernier article</v-btn>
      <v-btn flat disabled>Articles Annexes</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      breadcrumbList: this.$route.meta.breadcrumb
    }
  },
  watch: {
    '$route' () {
      let breadcrumb = this.$route.meta.breadcrumb
      // dynamic hack to change :countryName by the real value
      if (this.$route.params.countryName) {
        breadcrumb[breadcrumb.length - 1] = {
          name: this.$route.params.countryName.charAt(0).toUpperCase() + this.$route.params.countryName.slice(1),
          linkTo: 'country',
          disabled: true
        }
      }

      this.breadcrumbList = breadcrumb
    }
  }
}
</script>
