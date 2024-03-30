<template>
  <v-row>
    <v-col>
      <image-gallery v-if="galleryType == 'randomGallery'" v-bind="props"/>
      <three-column-gallery v-if="galleryType == 'threeColumnGrid'" v-bind="props"/>
    </v-col>
  </v-row>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const imageGallery = defineAsyncComponent(() =>
  import("~/components/imageGallery.vue")
);
const threeColumnGallery = defineAsyncComponent(() =>
  import("~/components/threeColumnGallery.vue")
);

const props = defineProps({
  galleryType: String,
  images: Array,
  title: Array,
  subtitle: Array,
  description: Array,
  maxWidth: String,
  imageAspectRatio: String
})
</script>

<style lang="scss" scoped>

</style>