<template>
  <v-row v-editable="blok" class="c-platforms bg-black py-10">
    <v-col class="pt-12 pb-16 text-white">
      <h2 class="text-h2 mb-8 text-center">{{ blok?.title }}</h2>
      <p class="mb-10 text-center">{{ blok?.description }}</p>
      <v-row class="c-platforms__container" justify="center">
        <v-col cols="12" lg="10" xl="8" class="d-flex flex-wrap ga-10 justify-center">
          <v-row>
            <v-col
              v-for="platform in blok?.platform"
              :key="platform?.title"
              cols="4"
              sm="3"
              md="2"
            >
              <div class="d-flex flex-column align-center">
                <NuxtImg
                  :src="platform?.image?.filename"
                  provider="storyblok"
                  max-height="100%"
                  format="webp"
                  class="mb-3"
                  width="100"
                  contain
                />
                <p>{{ platform?.title }}</p>
              </div>
            </v-col>
          </v-row>
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
