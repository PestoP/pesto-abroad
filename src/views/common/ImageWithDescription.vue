<template>
  <div class="image-container">
    <img :src='getUrl()' :alt='this.alt' />
    <div class='image-description'>
      {{this.description}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'alt', 'description'],
  methods: {
    getUrl () {
      let src = this.src
      const widthScreen = window.innerWidth

      if (widthScreen > 500 && widthScreen < 950) {
        src = src + '_medium'
      } else if (widthScreen <= 500) {
        src = src + '_small'
      }

      return require('@/assets/article/' + src + '.jpeg')
    }
  }
}
</script>

<style scoped lang="scss">
.image-container {
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .image-description {
    font-style: italic;
    margin-top: 10px;
  }
}

</style>
