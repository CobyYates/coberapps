<template>
  <v-card
    v-editable="blok"
    height="350px"
    width="370px"
    class="pa-5 text-primary"
  >
    <v-avatar size="100" tile class="mb-2">
      <v-icon size="100" color="primary">{{ blok?.icon }}</v-icon>
    </v-avatar>
    <p class="text-body-1 font-weight-bold">{{ blok?.superHeading }}</p>
    <h3 class="text-h4 font-weight-bold mb-4">{{ blok?.title }}</h3>
    <p class="text-body-1">{{ blok?.description }}</p>
  </v-card>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped></style>
