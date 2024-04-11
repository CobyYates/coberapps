<template>
  <v-btn
    :color="buttonColor"
    :outlined="outlined"
    :to="url"
    :block="block"
    :size="size"
    :class="buttonClass"
    :prepend-icon="prepend"
    :append-icon="append"
    class="text-white font-weight-bold"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: Array,
      default: null,
    },
    spacing: {
      type: Array,
      default: null,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    dark: {
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
    text: {
      type: String,
      default: "",
    },
    iconLocation: {
      type: String,
      default: "",
    },
    iconValue: {
      type: String,
      default: "",
    },
    append: {
      type: String,
      default: "",
    },
  },
  computed: {
    buttonColor() {
      const color = this.color;
      let result;
      if (color && color.length > 0) {
        result = color[0].themeColor;
      }
      return result;
    },
    prepend() {
      const icon = this.iconValue;
      const iconLocation = this.iconLocation;
      let result;
      if (icon && iconLocation == "left") {
        result = icon;
      }
      return result;
    },
    buttonClass() {
      const result = [];
      const spacing = this.spacing;
      const dark = this.dark;

      const spacingClasses = spacing
        ? spacing.map((s) => `${s.type}${s.location}${s.screenSize}${s.value}`)
        : [];
      result.push(...spacingClasses);

      return result.filter(Boolean);
    },
  },
};
</script>

<style lang="scss" scoped></style>
