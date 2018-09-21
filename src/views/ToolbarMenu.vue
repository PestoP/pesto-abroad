<template>
  <v-toolbar fixed>
    <v-toolbar-items style='margin-left: -24px;'>
      <router-link tag='v-btn' class='v-btn--flat' :to="{ path: '/'}">
        <span style="font-weight:bold; margin-right: 3px;">Pesto </span> Abroad
      </router-link>
    </v-toolbar-items>
    <v-toolbar-items>
      <v-breadcrumbs> </v-breadcrumbs>
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
