<template>
  <div ref="flickityElement" class="gallery" >
    <slot></slot>
  </div>
</template>

<script setup>
const { options } = defineProps({
  options: {
    type: Object,
    default: () => {}
  }
})
import { ref, onMounted, onBeforeUnmount } from 'vue';

let Flickity;
const flickityElement = ref(null);
let flickityInstance;

// Reactive object to hold Flickity options
const flickityOptions = options

onMounted(() => {
  import('flickity').then((module) => {
    Flickity = module.default;
    // Initialize Flickity with options
    flickityInstance = new Flickity(flickityElement.value, flickityOptions);
  });
});

onBeforeUnmount(() => {
  if (flickityInstance) {
    flickityInstance.destroy();
  }
});
</script>

<style scoped>
/* Your component's styles */
</style>