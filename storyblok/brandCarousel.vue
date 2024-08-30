<template>
  <v-row>
    <v-col>
      <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
        <v-slide-group-item
          v-for="image in imageValues"
          :key="image"
          v-slot="{ isSelected, toggle }"
        >
          <v-card
            flat
            color="transparent"
            height="200"
            width="250"
            class="mx-7"
          >
            <v-img :src="image" height="200" :alt="image.alt" />
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
      <!-- <flickity-wrapper :options="flickityOptions">
        <div v-for="image in imageValues" :key="image">
          <v-card flat color="transparent" height="200" width="200" class="mx-7">
            <v-img :src="image" height="200" :alt="image.alt"/>
          </v-card>
        </div>
      </flickity-wrapper> -->
    </v-col>
  </v-row>
</template>

<script>
import "flickity/css/flickity.css";
export default {
  data() {
    return {
      flickityOption: {
        wrapAround: true,
        autoPlay: true,
        groupCells: 2,
        pageDots: false,
      },
      model: null,
    };
  },
  props: {
    showArrows: { type: Boolean, default: false },
    centerActive: { type: Boolean, default: true },
    interval: {
      type: String,
      default: "5000",
    },
    images: {
      type: Array,
      default: () => [],
    },
    imagesOnly: {
      type: Array,
      default: () => [],
    },
    auto: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imageValues() {
      let result = [];
      const imagesOnly = this.imagesOnly;
      const images = this.images;
      if (imagesOnly && imagesOnly.length > 0) {
        result = imagesOnly.map((e) => e.filename);
      } else if (images && images.length > 0) {
        result = images.map((e) => e.image.filename);
      }
      return result;
    },
    flickityOptions() {
      let result = this.flickityOption;
      const auto = this.auto;
      if (this.showArrows) {
        result.showArrows = true;
      }
      if (this.centerActive) {
        result.centerActive = true;
      }
      if (this.interval) {
        result.autoPlay = parseInt(this.interval);
      }
      if (auto) {
        result.autoPlay = true;
      }
      return result;
    },
  },
};
</script>

<style lang="scss" scoped></style>
