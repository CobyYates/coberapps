<template>
  <v-img
    :src="image.filename"
    cover
    class="gallery-item"
    :height="height"
  >
    <div class="gallery-item__overlay d-flex align-center flex-column justify-center text-center">
      <p class="mb-3 text-white font-weight-bold">{{ title }}</p>
      <v-btn :to="link" size="x-small" rounded="0">{{ buttonText }}</v-btn>
    </div>
  </v-img>
</template>

<script setup>
const { image } = defineProps({
  image: Object,
  title: String,
  buttonText: String,
  link: String,
  height: String
});
</script>

<style lang="scss" scoped>
.gallery-item {
  position: relative;
  &__overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3);
  }
}
</style>
