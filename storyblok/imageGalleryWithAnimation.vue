<template>
  <v-row class="c-image_gallery_with_animation mx-auto">
    <v-col
      v-for="(card, i) in cards"
      :key="card.title"
      cols="12"
      sm="6"
      md="6"
      lg="6"
    >
      <v-hover v-slot="{ isHovering, props }">
        <v-card
          class="card_animation"
          width="100%"
          height="450"
          v-bind="props"
          tile
          elevation="0"
          :to="card.link"
        >
          <v-img :src="cards[i].image.filename" cover min-height="100%">
            <div class="card_animation__square_animation" v-if="!!isHovering" />
            <v-overlay
              :model-value="overlay"
              class="align-center justify-center text-center"
              scrim="#000"
              contained
              :opacity="isHovering ? 0.4 : 0"
            >
              <h2 class="card_animation__title text-white">
                {{ cards[i].title }}
              </h2>
              <p v-if="isHovering" class="card_animation__description text-white mx-auto">
                {{ cards[i].description }}
              </p>
            </v-overlay>
          </v-img>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      overlay: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.c-image_gallery_with_animation {
  max-width: 1200px;
}
.card_animation {
  position: relative;
  img {
    position: relative;
    &__square_animation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: solid 1px white;
    }
  }
  &__description {
      width: 80%;
  }
  &__square_animation {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: solid 1px white;
    margin: 20px;
  }
}
</style>
