<template>
  <v-row>
    <v-col>
      <flickity-wrapper :options="flickityOptions">
        <div v-for="image in imageValues" :key="image">
          <v-card flat color="transparent" height="200" width="200" class="mx-7">
            <!-- <img :src="image" alt=""> -->
            <v-img :src="image" height="200" :alt="image.alt"/>
          </v-card>
        </div>
      </flickity-wrapper>
    </v-col>
  </v-row>
</template>

<script>
import 'flickity/css/flickity.css'
export default {
  data() {
    return {
      flickityOptions: {
        wrapAround: true,
        autoPlay: true,
        groupCells: 2,
        pageDots: false
      }
    }
  },
  props: {
    showArrows: { type: Boolean, default: false },
    centerActive: { type: Boolean, default: true },
    interval: {
      type: String,
      default: '5000'
    },
    images: {
      type: Array,
      default: () => []
    },
    imagesOnly: {
      type: Array,
      default: () => []
    },
  },
  computed: {
    imageValues() {
      let result = []
      const imagesOnly = this.imagesOnly
      const images = this.images
      if (imagesOnly && imagesOnly.length > 0) {
        result = imagesOnly.map(e => e.filename)
      } else if (images && images.length > 0) {
        result = images.map(e => e.image.filename)
      }
      return result
    }
  },
}
</script>

<style lang="scss" scoped></style>
