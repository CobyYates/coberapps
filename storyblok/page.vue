<template>
  <v-container fluid>
    <v-row v-editable="blok">
      <v-col class="pa-0">
        <StoryblokComponent
          v-for="blok in blok.sections"
          :key="blok._uid"
          :blok="blok"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps({ blok: Object });
</script>
