<template>
  <template v-for="section in story.content.sections" :key="section.i">
    <row v-if="section.component == 'row'" v-bind="section" />
    <basic-hero v-else-if="section.component == 'basicHero'" v-bind="section" />
    <carousel-hero v-else-if="section.component == 'carouselHero'" v-bind="section" />
    <image-gallery v-else-if="section.component == 'imageGallery'" v-bind="section" />
    <brand-carousel v-else-if="section.component == 'brandCarousel'" v-bind="section" />
    <filterable-gallery v-else-if="section.component == 'filterableGallery'" v-bind="section" />
  </template>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from "vue";
const { params } = useRoute();
const story = await useAsyncStoryblok(params.slug, { version: "draft" });
const props = defineProps({});

const row = defineAsyncComponent(() => import("~/components/row.vue"));
const basicHero = defineAsyncComponent(() =>
  import("~/components/basicHero.vue")
);
const carouselHero = defineAsyncComponent(() =>
  import("~/components/carouselHero.vue")
);
const imageGallery = defineAsyncComponent(() =>
  import("~/screens/imageGallery.vue")
);
const brandCarousel = defineAsyncComponent(() =>
  import("~/components/brandCarousel.vue")
);
const filterableGallery = defineAsyncComponent(() =>
  import("~/components/Gallery/filterableGallery.vue")
);

</script>

<style lang="scss" scoped>
.v-container {
  max-width: 100%;
}
</style>

<!-- https://blog.logrocket.com/building-dynamic-vuetify-themes/#:~:text=Vuetify%20includes%20a%20useTheme%20method,current. -->
