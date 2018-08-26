<template>
  <v-toolbar fixed>
    <v-toolbar-title>Pesto Abroad</v-toolbar-title>
    <v-toolbar-items>
      <div class="v-menu">
        <v-btn
          slot="activator"
          color="primary"
          dark
          flat
        >
          Derniers articles
        </v-btn>
          <!-- <v-list>
            <v-list-tile>
              <v-list-tile-title>LoL</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Mdr</v-list-tile-title>
            </v-list-tile>
          </v-list> -->
      </div>
      <div class="v-menu">
        <v-btn
          color="primary"
          dark
        >
          Articles annexes
        </v-btn>
        <!-- <v-list>
          <v-list-tile>
            <v-list-tile-title>LoL</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Mdr</v-list-tile-title>
          </v-list-tile>
        </v-list> -->
      </div>
      <v-breadcrumbs> </v-breadcrumbs>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
