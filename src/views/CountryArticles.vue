<template>
  <div class='parent-grid'>
    <h1 v-if="articles.length === 0" class='no-article'> Pas encore d'articles :)</h1>
    <h1 v-else class='country-title'> {{this.$route.params.countryName.charAt(0).toUpperCase() + this.$route.params.countryName.slice(1)}}</h1>
    <template v-for="(article, index) in articles">
      <router-link tag='div' :to="{name: 'article',  params: { articleName: 'pangandaran'} }" :key='index'>
        <v-card hover style="height: 100%">
          <img
            class='article-image'
            :src='getUrl(article.imageUrl)'
            :alt="article.name"
            aspect-ratio="2.75"
          />
          <v-card-title primary-title class='card-title-text'>
              <h3 class="headline mb-0 card-title">{{article.name}}</h3>
              <div class='card-text'> {{article.description}} </div>
          </v-card-title>
          <v-card-actions class='explore'>
              <v-btn flat color="green">Voir l'article</v-btn>
          </v-card-actions>
        </v-card>
      </router-link>
      <div :key="index + 'emptyDiv'"></div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articles: [
        {
          name: 'Pangandaran',
          imageUrl: 'pangandaran/white-sand-beach',
          linkTo: 'article',
          description: `Entre Jakarta et Yogyakarta, Pangandaran permet un stop très agréable où surf, canyoning et détente sont au rendez-vous...`
        },
        {
          name: 'Prambanan',
          imageUrl: 'prambanan/temple_vue_de_loin',
          linkTo: 'article',
          description: `Un temple qui vaut le détour, bien que très cher par rapport au coût de la vie indonnésienne. Il rappelle un peu Angkor Wat au Cambodge`
        },
        {
          name: 'Borobudur',
          imageUrl: 'borobudur/borobudur_photo_couverture',
          linkTo: 'article',
          description: `Un temple pas comme les autres, il ne ressemble à aucun autre temple que j'ai pu visiter en Asie du sud-est ! Il vaut le détour, cependant peut-être pas pour le lever du soleil...`
        },
        {
          name: 'Yogyakarta',
          imageUrl: 'yogyakarta/yogyakarta_lettre',
          linkTo: 'article',
          description: `Une ville qui n'a pas grand intérêt, si ce n'est son emplacement proche des temples Borobudur et Prambanan`
        },
        {
          name: 'Mont Bromo',
          imageUrl: 'bromo/bromo_de_loin',
          linkTo: 'article',
          description: `Une des plus belles merveilles que j'ai rencontré en Asie du sud-est, un immanquable si vous allez sur l'île de Java !`
        },
        {
          name: 'Mont Kawah Ijen',
          imageUrl: 'ijen/ijen_cratere',
          linkTo: 'article',
          description: `L'ascension n'est pas extraordinaire mais ça en vaut la chandelle, 'Blue fire' puis un lever de soleil sur le lac acide le plus grand du monde...`
        },
        {
          name: 'Pemuteran',
          imageUrl: 'pemuteran/poissons_pemuteran',
          linkTo: 'article',
          description: `Un village qui ressemble à une longue rue au bord de la route principale. Il réserve de la Tranquillité et du snorkeling`
        },
        {
          name: 'Munduk',
          imageUrl: 'munduk/jatiluwih_lettre',
          linkTo: 'article',
          description: `Étape à l'écart de la foule de Bali. Des jolies cascades bien qu'elles soient payantes, mais c'est surtout la porte d'accès à un circuit allant jusqu'au rizières de Jatiluwih...`
        },
        {
          name: 'Ubud',
          imageUrl: 'ubud/ubud_palace_nuit',
          linkTo: 'article',
          description: `La foule y est présente car c'est un endroit stratégique de Bali, beaucoup de beau temples son aux alentours, une très belle campagne. On peut aussi y faire un cours de cuisine Balinaise.`
        },
        {
          name: 'Amed',
          imageUrl: 'amed/peinture_bateau',
          linkTo: 'article',
          description: `Plage, détente, yoga, ambiance reggea... Cet endroit est aussi reconnue pour ses 3 spots extraordinaires de snorkeling !`
        },
        {
          name: 'Nusa Penida',
          imageUrl: 'nusa_penida/kelingking_beach_serviette',
          linkTo: 'article',
          description: `Île encore un peu sauvage tout près de Bali, d'innombrables spots à voir. Un scooter et la liberté est dans vos mains, MA-GNI-FI-QUE !`
        },
        {
          name: 'Le sud de Bali',
          imageUrl: 'sud_bali/mojito_ulluwatu',
          linkTo: 'article',
          description: `Ulluwatu, Jimbaran, Kuta, etc. Un repère de surfeur et de gens qui veulent faire des soirées ou des achats. De temps en temps, ça fait du bien.`
        }
      ]
    }
  },
  methods: {
    getUrl (imageUrl) {
      return require('@/assets/article/' + imageUrl + '.jpeg')
    }
  }
}
</script>

<style lang="scss">
  html {
    overflow-y: auto;
  }

  .article-image {
    height: 200px;
    width: 100%;
  }

  .explore {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .parent-grid {
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 150px;
    grid-column-gap: 2em;

    :nth-child(even) {
      grid-column: 1 / span 1;
      grid-row: span 3;
    }

    :nth-child(4n) {
      grid-column: 2 / span 1;
      grid-row: span 3;
    }

    :nth-child(3) {
      grid-row: span 2;
    }

    .no-article {
      text-align: center;
      grid-column: 1 / span 2;
      grid-row: 3;
    }

    .country-title {
      text-align: center;
      grid-column: 1 / span 2;
      align-self: center;
    }
  }
</style>
