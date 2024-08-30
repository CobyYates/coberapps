<template>
  <div>
    <h2 class="text-h5 mb-4">{{ title }}</h2>
    <v-divider
      style="width: 50px"
      class="my-8"
      color="primary"
      opacity="1"
      thickness="2px"
    />
    {{ accordion }}
    <v-expansion-panels
      v-if="accordions && accordions.length > 0"
      v-model="selected"
      mandatory
      class="mb-4"
      flat
    >
      <v-expansion-panel v-for="(accordion, index) in accordions" :key="index">
        <v-expansion-panel-title :class="index == selected ? 'bg-primary' : ''">
          {{ accordion.title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <rich-text v-if="accordion.markdown" :richTextContent="accordion" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <template v-if="images && images.length > 0">
      <div v-for="(image, index) in images" :key="index" class="text-center">
        <img
          :src="image.filename"
          :alt="image.alt"
          width="300px"
          class="mb-4"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    accordions: {
      type: Array,
      default: null,
    },
    images: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      selected: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>
