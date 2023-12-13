<template>
  <v-btn
    color="primary"
    :variant="variant"
    :outlined="outlined"
    to="/"
    :placeholder="placeholder"
    :block="block"
    :size="size"
    :rounded="rounded"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: Array,
      default: () => [],
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    block: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "",
    },
    rounded: {
      type: String,
      default: "default",
    },
    btnText: {
      type: String,
      default: "",
    },
  }
}
</script>

<style lang="scss" scoped></style>
