<template>
  <v-card
    :variant="variant"
    :color="colorValue"
    :style="cardStyle"
    :class="cardClass"
    :height="height"
    :elevation="elevation"
    min-width="100%"
    :rounded="false"
  >
    <v-img
      v-if="image && image.filename"
      :src="image.filename ||''"
      cover
      :aspect-ratio="5 / 4"
    />
    <v-card-title v-if="title.length > 0">
      <typography v-bind="title[0]" class="c-section__title" />
    </v-card-title>
    <v-card-subtitle v-if="subtitle.length > 0">
      <typography v-bind="subtitle[0]" class="c-section__subtitle" />
    </v-card-subtitle>
    <v-card-text v-if="description.length > 0">
      <typography v-bind="description[0]" class="c-section__description" />
    </v-card-text>
    <v-card-text v-if="cta.length > 0" class="pa-0">
      <pre>{{ cta.iconLocation }}</pre>
      <v-btn
        :prepend-icon="ctaValue.prepend"
        :append-icon="ctaValue.append"
        v-bind="ctaValue"
        :class="ctaClass"
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed } from "vue";
import { defineProps } from "vue";
import { ref } from "vue";
import useProjectTheme from "~/composables/theme";
const { currentColor } = useProjectTheme();

import typography from "~/components/typography.vue";

const cardStyle = computed(() => {
  let result = {};
  if (image) {
    result.backgroundImage = image.filename;
  }
  return result;
});

const {
  title,
  subtitle,
  description,
  width,
  height,
  color,
  image,
  sections,
  cta,
  elevation,
  variant,
} = defineProps({
  title: Array,
  subtitle: Array,
  description: Array,
  width: String,
  variant: {
    type: String,
    default: "flat",
  },
  height: {
    type: String,
    default: "500",
  },
  color: Array,
  image: Object,
  sections: Array,
  cta: Array,
  elevation: {
    type: String,
    default: 3,
  },
});

// const colorValue = computed(() => {
//   console.log("testing color", color);
// });

const ctaClass = computed(() => {
  let result = [];
  let spacingClasses = [];
  if (cta[0].spacing && cta[0].spacing[0] && cta[0].spacing[0].values) {
    spacingClasses = cta[0].spacing[0].values.map(
      (s) => `${s.type}${s.location}${s.screenSize}${s.value}`
    );
  }
  result.push(...spacingClasses);
  return result;
});

const ctaValue = computed(() => {
  const val = cta[0];
  let icon = val.iconValue
  let iconLocation = val.iconLocation
  const result = {
    color: currentColor(val.color[0]) || null,
    variant: val.variant,
    text: val.text,
    block: val.block,
    elevation: val.elevation,
    to: val.to,
    size: val.size,
    href: val.href,
    rounded: val.rounded,
    prepend: icon && iconLocation == "left" ? icon : null,
    append: icon && iconLocation == "right" ? icon : null,
    iconValue: val.iconValue
  };
  // if (result) {
  // }
  return result;
});

const cardClass = ref([]); // You can define and use card classes here as needed

// You can add additional logic and computed properties here
</script>

<style lang="scss" scoped>
/* Define your component's styles here */
</style>
