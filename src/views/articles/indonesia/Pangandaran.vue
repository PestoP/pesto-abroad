<template>
<v-container>

  <article class='article'>
    <header>
      <h2>Le calme de Pangandaran</h2>
    </header>
    <section class='article-body'>
      <h3>
        Comment arriver à pangandaran depuis Jakarta ?
      </h3>
      <p>
        Il faut savoir que Jakarta-Jogja, c’est environ 8h de transport. Si vous passez par pangandaran vous doublez ce temps. Même si j’ai adoré cette destination, je la déconseille pour des gens qui n’ont que 2 semaines pour faire l'Indonésie ! En effet, ils devraient aller directement à <router-link tag='a' :to="{ path: 'Yogyakarta' }">Yogyakarta</router-link>, pour aller aux fameux temples <router-link tag='a' :to="{ path: 'Borobudur' }"> Borobudur</router-link> et <router-link tag='a' :to="{ path: 'Prambanan' }"> Prambanan</router-link> puis partir direction le <router-link tag='a' :to="{ path: 'Bromo' }">mont Bromo</router-link> sans perdre de temps ;)
      </p>
      <p>
        Mes amis et moi avons tout simplement réservé le trajet via <b>Rome2Rio</b>. Il s’est passé en 2 étapes : Jakarta-Bandung en train puis Bandung-Pangandaran en ‘Bus’. Je met des guillemets parce que finalement c’est une voiture 7 places qui est venue nous chercher ! 7h (au moins) de transport avec la conduite indonésienne. Devoir doubler des scooters pendant tout le trajet, <b>40 km/h de moyenne</b>. Le conducteur s’est même arrêté le soir pour manger dans un endroit perdu avant de reprendre pour 3h de route x) Mais une fois arrivé à Pangandaran, on oublie totalement ce trajet et vous allez comprendre pourquoi :)
      </p>
      <h3>
        Le logement à Pangandaran ?
      </h3>
      <p>
        J'avoue que le choix de l'homestay est déterminant sur la qualité du séjour. Sans aucun regret nous avons choisi <b>Mini Tiga Homestay</b> ! Le soir il y a toujours 2, 3 locaux avec une guitare qui mettent l'ambiance. Mais si on veut être tranquille, le premier étage a un super espace commun plus tranquille. Les chambres sont bien, rien à dire sur la propreté. Le petit-déjeuner est super ! Banana pancake !
      </p>
      <h3>
        Que faire à Pangandaran ?
      </h3>
      <p>
        <b>1 jour green canyon / green valley</b> : de la nature, de l'eau, du canyoning. Assez physique mais super !
      </p>
      <p>
        <b>1 jour découverte du surf</b> le matin, barbecue sur la plage avec poisson frais et légumes cuisiné de façon local, l'après-midi massage sur la plage, photo avec des locaux (peu habitué à voir des occidentaux) et baignade :)
        Si vous vous entendez bien avec les locaux qui organisent les activités, ils vous proposeront d'aller boire un verre avec eux le soir au bamboo café.
      </p>
      <ImageWithDescription src="pangandaran/barbecue" alt="Barbecue on the beach after surfing" description='The barbecue fish with local people and other travelers' />
      <p>
        On peut rallonger le séjour pour prendre plus de cours de surf, ou pour d'autres activités que je n'ai pas essayé. Le green canyon / valley et le surf étaient des activités proposées par l'homestay.
      </p>
      <h3>
        Aller vers <router-link tag='a' :to="{ path: 'Yogyakarta' }">Yogyakarta</router-link> (Jogja) ?
      </h3>
      <p>
        On peut faire le trajet entièrement en bus. Ou alors récupérer le train un peu plus au nord en prenant le taxi. Nous avons opté pour un <b>trajet de nuit</b> pour économiser une nuit en même temps (même si la voiture est plus ou moins agréable pour dormir). Le chauffeur nous a déposé à 3h du matin à <router-link tag='a' :to="{ path: 'Borobudur' }"> Borobudur</router-link> pour faire le lever du soleil (<b>450k IDR !!!</b>) et ensuite nous a déposé à nos hôtel à Jogja. Le point positif est la nuit économisée mais le point négatif est le prix du lever du soleil ! Avec beaucoup trop de touristes. Je ne suis pas sûr que ça valait le coup.
      </p>
      <ImageWithDescription src="pangandaran/indonesian_flag" alt="Indonesian flag floatting in the air" description='Indonesian flag floatting in the air at the beach' />
    </section>
  </article>
</v-container>
</template>

<script>
import ImageWithDescription from './../../common/ImageWithDescription.vue'

export default {
  name: 'Pangandaran',
  components: {
    ImageWithDescription
  }
}
</script>

<style lang="scss" scoped>
  header {
    background-image: url('~@/assets/article/pangandaran/article_background.jpg');
  }
</style>
