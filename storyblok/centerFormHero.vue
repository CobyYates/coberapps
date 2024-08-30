<template>
  <v-row class="c-hero d-flex flex-column" :class="hasForm ? 'has-form' : ''">
    <v-col class="c-hero__container" cols="12" sm="12">
      <v-img
        :src="imageData.image.filename"
        :alt="imageData.image.alt"
        class="c-hero__image mx-auto d-flex justify-center my-10"
        cover
        :min-width="'100vw'"
        :width="maxWidth || '100vw'"
        max-width="100vw"
        :max-height="heroHeight"
        :height="heroHeight"
      >
        <v-row
          class="c-hero__overlay d-flex my-0"
          :class="overlayClass"
          :style="overlayStyle"
        >
          <v-col
            v-bind="columnLayout"
            class="mx-auto mt-16"
            cols="auto"
          >
            <div class="bg-textOverlay pa-5">
              <typography
                v-if="title && title.length > 0"
                v-bind="title[0]"
                class="c-hero__title"
              />
              <typography
                v-if="subtitle && subtitle.length > 0"
                v-bind="subtitle[0]"
                class="c-hero__subtitle"
              />
              <typography
                v-if="description && description.length > 0"
                v-bind="description[0]"
                class="c-hero__description"
              />
              <v-btn
                v-if="cta && cta.length > 0"
                :cta="cta"
                v-bind="cta[0]"
                :color="cta[0].color[0].themeColor"
                class="mt-3"
              />
            </div>
          </v-col>
        </v-row>
      </v-img>
      <v-row justify="center" class="form-container">
        <v-col cols="12" md="7" lg="5">
          <v-card elevation="3" tile width="100%" class="block">
            <form-element
              v-if="form[0].component == 'formElement'"
              v-bind="form[0]"
              class="pa-5"
            />
          </v-card>
        </v-col>
      </v-row>
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
    form: {
      type: Array,
      default: () => [],
    },
    cta: {
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
    maxWidth: {
      type: String,
      default: null,
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
  },
  mixins: [Breakpoint],
  computed: {
    imageData() {
      console.log("column information", this.column);
      const image = this.image;
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
    hasForm() {
      let result = false;
      let column = this.column;
      if (column && column.length > 0) {
        if (column[0].component == "formElement") {
          result = true;
        }
      }
      return result;
    },
    heroHeight() {
      let result = [];
      const breakpoint = this.breakpoint;
      const carouselHeight = this.carouselHeight;
      const height = this.height;
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
      const textLocation = this.textLocation;
      const textPosition = this.textPosition;
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
      const overlay = this.overlay[0];
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
};
</script>

<style lang="scss" scoped>
.has-form {
  height: 800px;
}
.c-hero {
  position: relative;
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

:deep(.v-responsive__content) {
  display: flex;
  justify-content: center;
}

.bg-textOverlay {
  background-color: rgba(0, 0, 0, 0.75) !important;
}

.mobile_form {
  position: absolute;
  bottom: 100%;
}

.form-container {
  margin-top: -250px;
}
</style>
