<template>
  <v-container>

  <article class='article'>
    <header>
      <h2>Le titre de l'article</h2>
    </header>
    <section class='article-body'>
      <h3>
        Premier titre de paragraphe ?
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam itaque accusantium esse molestiae et illum at cum voluptatem culpa? Laboriosam modi voluptatum inventore officiis dolores, ullam et veritatis distinctio laborum.
      </p>
      <ImageWithDescription src="pangandaran/indonesian_flag" alt="Indonesian flag floatting in the air" description='Indonesian flag floatting in the air at the beach' />
    </section>
  </article>
</v-container>
</template>

<style lang="scss" scoped>
  header {
    background-image: url('~@/assets/article/pangandaran/article_background.jpg');
  }
</style>
