<template>
  <v-row class="c-hero">
    <v-col class="c-hero__container" cols="12" sm="12">
      <v-img :src="imageData.image.filename" :alt="imageData.image.alt" class="c-hero__image" cover min-width="100vw"
        :max-height="heroHeight" :height="heroHeight">
        <v-row v-if="textLocation != 'center' && (textBelowOnMobile && !breakpoint.smAndDown)"
          class="c-hero__overlay d-flex my-0" :class="overlayClass" :style="overlayStyle">
          <v-col>
            <typography v-if="title && title.length > 0" v-bind="title[0]" class="c-hero__title" />
            <typography v-if="subtitle && subtitle.length > 0" v-bind="subtitle[0]" class="c-hero__subtitle" />
            <typography v-if="description && description.length > 0" v-bind="description[0]" class="c-hero__description" />
          </v-col>
          <v-col>
            <slot />
          </v-col>
        </v-row>
        <v-row v-else-if="textLocation == 'center' && (textBelowOnMobile && !breakpoint.smAndDown)"
          class="c-hero__overlay d-flex my-0" :class="overlayClass" :style="overlayStyle">
          <v-col>
            <typography v-if="title && title.length > 0" v-bind="title[0]" class="c-hero__title" />
            <typography v-if="subtitle && subtitle.length > 0" v-bind="subtitle[0]" class="c-hero__subtitle" />
            <typography v-if="description && description.length > 0" v-bind="description[0]" class="c-hero__description" />
          </v-col>
        </v-row>
      </v-img>
    </v-col>
    <v-col v-if="breakpoint.smAndDown && textBelowOnMobile" cols="12" class="text-center mx-auto">
      <typography v-if="title && title.length > 0" v-bind="title[0]" :color-reset="true" class="c-hero__title" />
      <typography v-if="subtitle && subtitle.length > 0" v-bind="subtitle[0]" :color-reset="true" class="c-hero__subtitle" />
      <typography v-if="description && description.length > 0" v-bind="description[0]" :color-reset="true" class="c-hero__description" />
    </v-col>
  </v-row>
</template>

<script>
import { useHeightResolver } from "~/composables/heightComposable";
import Breakpoint from "~/mixin/breakpoint";
export default {
  props: {
    image: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
    spacing: {
      type: Array,
      default: () => [],
    },
    height: {
      type: Array,
      default: () => [],
    },
    carouselHeight: {
      type: String,
      default: "",
    },
    overlay: {
      type: Array,
      default: () => [],
    },
    title: {
      type: Array,
      default: () => [],
    },
    subtitle: {
      type: Array,
      default: () => [],
    },
    description: {
      type: Array,
      default: () => [],
    },
    textLocation: {
      type: String,
      default: "justify-center",
    },
    textPosition: {
      type: String,
      default: "align-center",
    },
    textBelowOnMobile: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [Breakpoint],
  computed: {
    imageData() {
      const image = this.image
      if (image[0] && image[0].desktopImage && image[0].desktopImage.filename) {
        return {
          image: image[0].desktopImage,
        };
      } else {
        return {
          image: {
            filename: "",
            alt: "Image Alt Text",
          },
        };
      }
    },
    heroHeight() {
      let result = [];
      const breakpoint = this.breakpoint
      const carouselHeight = this.carouselHeight
      const height = this.height
      const resolvedHeights = useHeightResolver(height);
      if (carouselHeight) {
        result.push(carouselHeight);
      } else {
        const heightVal = resolvedHeights.value;
        let heightArr = heightVal.map((e) => e.screenSize);
        if (heightVal.length < 1) {
          result = "100%";
        }
        heightVal.forEach((e) => {
          if (!e.screenSize && !heightArr.includes(breakpoint)) {
            result = e.height;
          } else if (breakpoint[e.screenSize]) {
            result = e.height;
          } else {
            result = "100%";
          }
        });
      }
      return result;
    },
    overlayClass() {
      let result = [];
      const textLocation = this.textLocation
      const textPosition = this.textPosition
      if (textLocation) {
        if (textLocation == "right") {
          result.push("flex-row-reverse");
        } else if (textLocation == "center") {
          result.push("text-center");
        }
      }
      if (textPosition) {
        result.push(textPosition);
      }
      return result;
    },
    overlayStyle() {
      let result = [];
      const overlay = this.overlay[0]
      let overlayData = overlay || null;
      if (overlayData) {
        const color = overlayData.color;
        const opacity = overlayData.opacity;
        let value = overlayData.gradient
          ? `linear-gradient(${overlayData.gradient}, rgba(${color},0) 0%, rgba(${color},${opacity}) 100%)`
          : `rgba(${color},${opacity})`;
        result.push({ background: value });
      }
      return result;
    },
  },
}
</script>

<style lang="scss" scoped>
.c-hero {

  // width: 100%;
  &__container {
    width: 100%;
  }

  &__image {
    position: relative;
    width: 100%;
  }

  &__overlay {
    position: absolute;
    padding: 20px;
    width: 100%;
    height: 100%;
  }
}
</style>

