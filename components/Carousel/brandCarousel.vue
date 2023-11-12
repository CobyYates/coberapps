<template>
  <v-row>
    <v-col>
      <flickity-wrapper :options="flickityOptions">
        <div v-for="image in images" :key="image">
          <v-card
            flat
            color="transparent"
            height="150"
            width="200"
            :to="image.link"
          >
            <v-img :src="image.image.filename || ''" height="150" contain />
          </v-card>
        </div>
      </flickity-wrapper>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, computed, watch, onBeforeUnmount } from "vue";
const FlickityWrapper = defineAsyncComponent(() =>
  import("~/components/Carousel/flickityWrapper.vue")
);
const { showArrows, centerActive, interval, images } = defineProps({
  showArrows: { type: Boolean, default: false },
  centerActive: Boolean,
  interval: String,
  images: Array,
});

const flickityOptions = ref({
  wrapAround: true,
  autoPlay: true,
  groupCells: 2,
  pageDots: false
});
</script>

<style lang="scss" scoped></style>
