<template>
  <v-carousel
    :vertical-delimiters="
      verticalDelimiters != false ? verticalDelimiters : false
    "
    :hide-delimiters="!showDelimeters"
    hide-delimiter-background
    :show-arrows="showArrows"
    :interval="interval.toString()"
    :continuous="continuous"
    :cycle="cycleSlides"
    :color="color"
    touch
    :height="height"
  >
    <v-carousel-item v-for="hero in heros" :key="hero.i" class="d-flex align-center">
      <basic-hero v-bind="hero" :carouselHeight="height"/>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { computed, ref, defineAsyncComponent } from "vue";
import BasicHero from "~/components/Heros/basicHero.vue";
import useProjectTheme from "~/composables/theme";
const { currentColor } = useProjectTheme();

const basicHero = defineAsyncComponent(() => BasicHero);

const {
  heros,
  showDelimeters,
  showArrows,
  cycleSlides,
  verticalDelimiters,
  delimiterColor,
  slideDuration,
  continuous,
  height
} = defineProps({
  heros: {
    type: Array,
    default: () => [],
  },
  showDelimeters: {
    type: Boolean,
    default: false,
  },
  showArrows: {
    type: Boolean,
    default: false,
  },
  cycleSlides: {
    type: Boolean,
    default: false,
  },
  verticalDelimiters: {
    type: [String, Boolean],
    default: false,
  },
  height: {
    type: String,
    default: '',
  },
  delimiterColor: {
    type: Array,
    default: "",
  },
  interval: {
    type: [String, Number],
    default: "10000",
  },
  continuous: {
    type: Boolean,
    default: false,
  },
});

const color = computed(() => {
  let result;
  if (delimiterColor.length > 0) {
    result = currentColor(delimiterColor[0]);
  }
  return result;
});
</script>

<style lang="scss" scoped></style>
