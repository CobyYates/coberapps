<template>
  <image-gallery v-if="galleryType == 'randomGallery'" v-bind="props"/>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const imageGallery = defineAsyncComponent(() =>
  import("~/components/Gallery/imageGallery.vue")
);

const props = defineProps({
  galleryType: String,
  images: Array,
  title: Array,
  subtitle: Array,
  description: Array,
  maxWidth: String,
})
</script>

<style lang="scss" scoped>

</style>