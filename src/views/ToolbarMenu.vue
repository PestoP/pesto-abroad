<template>
  <v-toolbar fixed>
    <v-toolbar-items style='margin-left: -24px;'>
      <router-link tag='v-btn' class='v-btn--flat' :to="{ path: '/'}">
        <span style="font-weight:bold; margin-right: 3px;">Pesto </span> Abroad
      </router-link>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-breadcrumbs divider=">">
        <v-breadcrumbs-item
          v-for="path in this.getBreadcrumb()"
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
      <router-link tag='v-btn' class='v-btn--flat' :to="{ path: '/countries' }">
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
      breadcrumbList: this.getBreadcrumb.bind(this)
    }
  },
  methods: {
    getBreadcrumb () {
      let breadcrumb = this.$route.meta.breadcrumb
      // dynamic hack to change :countryName and :articleName by the real value
      if (this.$route.params.countryName) {
        if (this.$route.params.articleName) {
          breadcrumb[breadcrumb.length - 2] = {
            name: this.$route.params.countryName.charAt(0).toUpperCase() + this.$route.params.countryName.slice(1),
            linkTo: 'country',
            disabled: false
          }
          breadcrumb[breadcrumb.length - 1] = {
            name: this.$route.params.articleName.charAt(0).toUpperCase() + this.$route.params.articleName.slice(1),
            linkTo: 'article',
            disabled: true
          }
        } else {
          breadcrumb[breadcrumb.length - 1] = {
            name: this.$route.params.countryName.charAt(0).toUpperCase() + this.$route.params.countryName.slice(1),
            linkTo: 'country',
            disabled: true
          }
        }
      }
      return breadcrumb
    }
  }
}
</script>
