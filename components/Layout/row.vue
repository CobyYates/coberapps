<template>
  <v-row :class="rowClass" :style="rowStyle" class="c-section mx-auto" justify="center" align="center">
    <v-col
      v-for="item in columns"
      :key="item.i"
      :cols="item.cols"
      :sm="item.sm"
      :md="item.md"
      :lg="item.lg"
      :xl="item.xl"
      class="c-section__column"
    >
      <typography
        v-if="item.title"
        v-bind="item.title[0]"
        class="c-section__title"
      />
      <typography
        v-if="item.subtitle"
        v-bind="item.subtitle[0]"
        class="c-section__subtitle"
      />
      <typography
        v-if="item.description"
        v-bind="item.description[0]"
        class="c-section__description"
      />
      <template v-if="item.sections.length > 0">
        <card v-bind="item.sections[0]" />
      </template>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";
import useProjectTheme from "~/composables/theme";
const { currentColor } = useProjectTheme();

const typography = defineAsyncComponent(() =>
  import("~/components/typography.vue")
);
const card = defineAsyncComponent(() => import("~/components/Cards/card.vue"));

const { columns, backgroundColor, spacing, backgroundImage, maxWidth } =
  defineProps({
    columns: {
      type: Array,
      default: () => [],
    },
    backgroundColor: {
      type: Array,
      default: () => [],
    },
    spacing: {
      type: Array,
      default: () => [],
    },
    backgroundImage: {
      type: Object,
      default: () => {},
    },
    maxWidth: {
      type: String,
      default: null,
    },
  });

const rowClass = computed(() => {
  let result = [];
  let spacingClasses = [];
  if (spacing && spacing[0] && spacing[0].values) {
    spacingClasses = spacing[0].values.map(
      (s) => `${s.type}${s.location}${s.screenSize}${s.value}`
    );
  }
  result.push(...spacingClasses);
  return result;
});

const rowStyle = computed(() => {
  const styles = {};
  if (backgroundColor.length > 0) {
    styles.backgroundColor = currentColor(backgroundColor[0]);
  }
  if (backgroundImage) {
    styles.backgroundImage = `url(${backgroundImage.filename})`;
  }
  if (maxWidth) {
    styles.maxWidth = maxWidth;
  }
  return styles;
});
</script>

<style lang="scss" scoped>
.c-section {
  background-size: cover;
}
</style>
