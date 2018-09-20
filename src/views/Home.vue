<template>
    <v-layout row wrap align-center>
      <v-flex xs12 md4>
        <div class="text-xs-center">
          <v-avatar size="125px">
            <img
              class="img-circle elevation-7 mb-1"
              src="@/assets/avatar.png"
            >
          </v-avatar>
          <div class="headline"><span style="font-weight:bold">Pesto</span> Abroad</div>
          <div class="subheading text-xs-center grey--text pt-1 pb-3">Porter sur le monde un regard sans haine</div>
          <v-layout justify-space-between>
            <router-link v-bind:to="'countries'">
              <a href="javascript:;" class="body-2">Accueil</a>
            </router-link>
            <a href="javascript:;" class="body-2">À propos</a>
            <a href="https://www.instagram.com/florianpesto/" class="body-2" target="_blank">Instagram</a>
            <a href="javascript:;" class="body-2">Dernier article</a>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs12 md5 offset-md2>
        <div v-for="post in posts" :key="post.title">
          <v-card class="my-3" hover>
            <v-card-media
              class="white--text"
              height="170px"
              :src="post.imgUrl"
            >
              <v-container fill-height fluid>
                <v-layout text-xs-left>
                  <v-flex xs12>
                    <span class="headline">{{ post.title }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-text style='text-align: initial;'>
              {{ post.content }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat class="blue--text">Explorer</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      posts: [
        {
          title: 'Articles annexes',
          content: "C'est à cet endroit que je publis à propos de sujets précis (sûrement à propos du voyage). Ça peut être des anecdotes comme des articles sur l'hébergement, l'auto-stop, etc.",
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
        },
        {
          title: 'Liste des pays',
          content: "Petite liste des pays que je vais parcourir, avec les articles liés à ceux-ci. Pour information, il faut que j'ai parcouru le pays pour qu'il y ait des articles dessus x)",
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
        },
        {
          title: 'Mon dernier article',
          content: "C'est un accès direct au tout dernier article écrit :) En ce moment c'est à propos de mon arrivée à Jakarta (première étape de mon périple)",
          imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
