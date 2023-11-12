<template>
  <v-row :style="rowStyle" class="mx-auto">
    <v-col>
      <typography v-if="title" v-bind="title[0]" class="c-section__title" />
      <typography
        v-if="subtitle"
        v-bind="subtitle[0]"
        class="c-section__subtitle"
      />
      <typography
        v-if="description"
        v-bind="description[0]"
        class="c-section__description"
      />
      {{ typeof imageAspectRatio }}
      <v-row v-if="images.length > 0">
        <v-col cols="12" sm="6" md="4" v-for="item in images" :key="item.i">
          <gallery-item v-bind="item" :aspect-ratio="imageAspectRatio" height="100%" />
        </v-col>
      </v-row>
      <div></div>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";

const { images, title, subtitle, description, maxWidth } =
  defineProps({
    images: Array,
    title: Array,
    subtitle: Array,
    description: Array,
    maxWidth: String,
    imageAspectRatio: String
  });

const rowStyle = computed(() => {
  let result = [];
  if (maxWidth) {
    result.push({ maxWidth: maxWidth });
  }
  return result;
});
</script>

<style lang="scss" scoped></style>
