<template>
  <v-carousel
    :vertical-delimiters="verticalDelimiters != false ? verticalDelimiters : false"
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
      <basic-hero v-bind="hero" :carouselHeight="height" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import colors from '~/mixin/colors'
export default {
  mixins: [colors],
  props: {
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
  },
  computed: {
    color() {
      let result;
      const delimiterColor = this.delimiterColor
      if (delimiterColor.length > 0) {
        result = this.basicColor(delimiterColor[0]);
      }
      return result;
    }
  },
}
</script>

<style lang="scss" scoped></style>
