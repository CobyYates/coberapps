<template>
  <component
    :is="element"
    v-if="show"
    :class="typographyClass"
    :style="typographyStyle"
  >
    {{ text }}
  </component>
</template>

<script setup>
import { computed, ref } from "vue";
import { useDisplay, useTheme } from "vuetify";
import useProjectTheme from "~/composables/theme";

const { currentColor } = useProjectTheme();

const {
  element,
  headingStyle,
  text,
  fontWeight,
  alignment,
  spacing,
  hiddenDesktop,
  hiddenMobile,
  color,
  richText,
  colorReset
} = defineProps({
  element: {
    type: String,
    default: "p",
  },
  headingStyle: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  richText: {
    type: Object,
    default: () => ({}),
  },
  fontWeight: {
    type: String,
    default: "",
  },
  color: {
    type: Array,
    default: () => [],
  },
  spacing: {
    type: Array,
    default: () => [],
  },
  alignment: {
    type: Array,
    default: () => [],
  },
  hiddenDesktop: {
    type: Boolean,
    default: false,
  },
  hiddenMobile: {
    type: Boolean,
    default: false,
  },
  colorReset: {
    type: Boolean,
    default: false,
  },
});

const typographyClass = computed(() => {
  const result = [...alignment, headingStyle, fontWeight];
  const spacingClasses = spacing
    ? spacing.map((s) => `${s.type}${s.location}${s.screenSize}${s.value}`)
    : [];
  result.push(...spacingClasses);
  return result.filter(Boolean);
});

const typographyStyle = computed(() => {
  let result = []
  if(colorReset) {
    return
  } else if (color.length > 0) {
    result.push({color:currentColor(color[0])})
  }
  return result;
});

const { mdAndUp, smAndDown } = useDisplay();
const show = computed(() => {
  if ((mdAndUp && hiddenDesktop) || (smAndDown && hiddenMobile)) {
    return false;
  }
  return true;
});
</script>

<style lang="scss" scoped></style>
