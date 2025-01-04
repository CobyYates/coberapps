<template>
  <v-row v-editable="blok" class="c-projects bg-black py-10">
    <v-col class="pt-12 pb-16 text-white">
      <h2 class="text-h2 mb-8 text-center">{{ blok?.title }}</h2>
      <p class="mb-10 text-center">{{ blok?.description }}</p>
      <v-row class="c-projects__container" justify="center">
        <v-col class="d-flex justify-center flex-wrap ga-5" cols="12" lg="10">
          <v-card
            v-for="(project, index) in blok?.projects"
            :key="project?.company"
            class="mx-auto"
            v-bind="props"
            color="black"
            elevation="0"
            :to="project?.url"
            width="auto"
            height="auto"
          >
            <NuxtImg
              :src="project?.assets[0]?.image?.filename"
              :alt="project?.assets[0]?.image?.alt"
              provider="storyblok"
              format="webp"
              sizes="xs:100vw sm:100vw md:45vw lg:40vw"
            />
            <v-card-text>
            <h3 class="text-h5">{{ project?.company }}</h3>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped>
.c-projects {
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    width: 100%;
  }
}
</style>
