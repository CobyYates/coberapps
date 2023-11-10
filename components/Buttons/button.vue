<template>
  <v-btn
    color="primary"
    :outlined="outlined"
    :to="url"
    :block="block"
    :size="size"
  >
    {{ btnText }}
  </v-btn>
</template>

<script setup>
const { color, outlined, url, block, size, btnText } = defineProps({
  color: {
    type: String,
    default: null,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    default: "",
  },
  block: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "",
  },
  btnText: {
    type: String,
    default: "",
  },
});

const name = "card";
</script>

<style lang="scss" scoped></style>
