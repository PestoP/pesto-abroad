<template>
  <div>
    <h1>
      Carte du pays
    </h1>
    <div>
      {{countryName}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['countryName']
}
</script>
