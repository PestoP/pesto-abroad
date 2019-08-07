<template>
  <img :src="src" :alt="alt" />
</template>

<script>
export default {
  data: function () {
    return {
      unloaded: true,
      src: this.placeholderSrc(this.width, this.height)
    }
  },
  props: ['dataSrc', 'height', 'width', 'alt'],
  methods: {
    loadImage () {
      this.unloaded = false
      this.src = this.dataSrc
    },
    placeholderSrc (w, h) {
      return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`
    }
  }
}
</script>
