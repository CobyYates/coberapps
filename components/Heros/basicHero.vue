<template>
  <v-row class="c-hero">
    <v-col class="c-hero__container" cols="12" sm="12">
      <v-img
        :src="imageData.image.filename"
        :alt="imageData.image.alt"
        class="c-hero__image"
        cover
        min-width="100vw"
        :max-height="heroHeight"
        :height="heroHeight"
      >
        <v-row
          class="c-hero__overlay d-flex my-0"
          :class="overlayClass"
          :style="overlayStyle"
          v-if="textLocation != 'center' && !currentBreakpoint.smAndDown"
        >
          <v-col>
            <typography v-bind="title[0]" class="c-hero__title" />
            <typography v-bind="subtitle[0]" class="c-hero__subtitle" />
            <typography v-bind="description[0]" class="c-hero__description" />
          </v-col>
          <v-col>
            <slot />
          </v-col>
        </v-row>
        <v-row
          class="c-hero__overlay d-flex my-0"
          :class="overlayClass"
          :style="overlayStyle"
          v-else-if="currentBreakpoint.smAndDown || textLocation == 'center' || !textBelowOnMobile"
        >
          <v-col v-if="!textBelowOnMobile">
            <typography v-bind="title[0]" class="c-hero__title" />
            <typography v-bind="subtitle[0]" class="c-hero__subtitle" />
            <typography v-bind="description[0]" class="c-hero__description" />
          </v-col>
        </v-row>
      </v-img>
    </v-col>
    <v-col
      v-if="currentBreakpoint.smAndDown && textBelowOnMobile"
      cols="12"
      class="text-center mx-auto"
    >
      <typography v-bind="title[0]" :color-reset="true" class="c-hero__title" />
      <typography v-bind="subtitle[0]" :color-reset="true" class="c-hero__subtitle" />
      <typography v-bind="description[0]" :color-reset="true" class="c-hero__description" />
    </v-col>
  </v-row>
</template>

<script setup>
import { computed, ref } from "vue";
import { jsx } from "vue/jsx-runtime";
import Typography from "~/components/typography.vue";
import { useHeightResolver } from "~/composables/heightComposable";
import useProjectTheme from "~/composables/theme";

const {
  image,
  title,
  subtitle,
  height,
  carouselHeight,
  textLocation,
  textPosition,
  overlay,
} = defineProps({
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
    default: false
  }
});

const imageData = computed(() => {
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
});

const resolvedHeights = useHeightResolver(height);

const heroHeight = computed(() => {
  let result = [];
  if (carouselHeight) {
    result.push(carouselHeight)
  } else {
    const { currentBreakpoint } = useProjectTheme();
    const heightVal = resolvedHeights.value;
    let heightArr = heightVal.map((e) => e.screenSize);
    if (heightVal.length < 1) {
      result = "100%";
    }
    heightVal.forEach((e) => {
      if (!e.screenSize && !heightArr.includes(currentBreakpoint.value.name)) {
        result = e.height;
      } else if (currentBreakpoint.value[e.screenSize]) {
        result = e.height;
      } else {
        result = "100%";
      }
    });
  }
  return result;
});

const currentBreakpoint = computed(() => {
  const { currentBreakpoint } = useProjectTheme();
  return currentBreakpoint.value;
});

const overlayClass = computed(() => {
  let result = [];
  if (textLocation) {
    if (textLocation == "right") {
      result.push("flex-row-reverse");
    } else if(textLocation == "center") {
      result.push("text-center")
    }
  }
  if (textPosition) {
    result.push(textPosition);
  }
  return result;
});
const overlayStyle = computed(() => {
  let result = [];
  let overlayData = overlay[0] || null;
  if (overlayData) {
    const color = overlayData.color;
    const opacity = overlayData.opacity;
    let value = overlayData.gradient
      ? `linear-gradient(${overlayData.gradient}, rgba(${color},0) 0%, rgba(${color},${opacity}) 100%)`
      : `rgba(${color},${opacity})`;
    result.push({ background: value });
  }
  console.log('testing', result)
  return result;
});
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
