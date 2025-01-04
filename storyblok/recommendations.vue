<template>
  <v-row v-editable="blok" class="c-education bg-black py-10">
    <v-col class="pt-12 pb-16 text-white">
      <h1 v-if="blok?.aboveTheFold" class="text-h2 mb-8 text-center">
        {{ blok?.title }}
      </h1>
      <h2 v-else class="text-h2 mb-8 text-center">{{ blok?.title }}</h2>
      <p class="mb-10 text-center">{{ blok?.description }}</p>
      <v-row class="c-education__container" justify="center">
        <v-col cols="12" md="10" xl="8" class="d-flex flex-column ga-8">
          <v-row
            v-for="(recommendation, index) in blok?.recommendations"
            :key="school?.schoolName"
            class="d-flex fill-height px-4"
          >
            <v-col cols="12" sm="auto">
              <NuxtImg
                v-if="recommendation?.image"
                :src="recommendation?.image?.filename"
                provider="storyblok"
                format="webp"
                sizes="xs:150 md:200"
              />
            </v-col>

            <v-col>
              <div
                class="text-body-1 mb-2"
                v-html="richText(recommendation?.details)"
              />
              <p class="text-body-1 text-primary font-weight-bold">
                - {{ recommendation?.individual }} |
                {{ recommendation?.position }} at {{ recommendation?.business }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import RichTextResolver from "storyblok-js-client/richTextResolver";

defineProps({ blok: Object });

const richText = (text) => {
  const resolver = new RichTextResolver();
  let result;
  result = resolver?.render(text);
  return result;
};
</script>

<style lang="scss" scoped></style>
