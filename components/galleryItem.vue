<template>
  <v-img
    :src="image.filename || ''"
    cover
    class="gallery-item"
    :height="height"
    :aspect-ratio="aspectRatio"
    :alt="image.alt"
  >
    <div
      class="gallery-item__overlay d-flex align-center flex-column justify-center text-center"
    >
      <p class="mb-3 text-white font-weight-bold" v-if="title">{{ title }}</p>
      <v-img
        width="75%"
        max-height="30"
        v-if="titleLogo && titleLogo.filename"
        :src="titleLogo.filename"
      />
      <p class="mb-3 text-white" v-if="subtitle">
        {{ subtitle }}
      </p>
      <v-btn
        v-if="buttonText"
        size="x-small"
        rounded="0"
        height="auto"
        max-width="90%"
        :to="link.cached_url"
      >
        <span class="text-wrap pa-1" v-if="breakpoint.mdAndUp">{{ buttonText }}</span>
        <span class="text-wrap pa-1" v-else>Learn More</span>
      </v-btn>
      <slot />
    </div>
  </v-img>
</template>

<script>
import breakpoint from '~/mixin/breakpoint'
export default {
  mixins: [breakpoint],
  props: {
    image: Object,
    title: String,
    subtitle: String,
    titleLogo: Object,
    buttonText: String,
    link: String,
    height: String,
    aspectRatio: String,
  },
};
</script>

<style lang="scss" scoped>
.gallery-item {
  position: relative;
  &__overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
