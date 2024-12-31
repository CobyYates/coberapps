<template>
  <v-row v-editable="blok" class="c-grid bg-black py-10">
    <v-col class="pt-12 pb-16">
      <h2 class="text-h2 mb-8 text-center text-white">{{ blok?.title }}</h2>
      <v-row
        class="c-grid__container fill-height justify-space-between mx-auto"
      >
        <v-col
          v-for="item in blok?.items"
          :key="item.i"
          class="fill-height"
          cols="12"
          md="auto"
        >
          <GridItem :blok="item" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
.c-grid {
  &__container {
    max-width: 1200px;
  }
}
</style>
