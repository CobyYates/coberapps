<template>
  <v-row v-editable="blok" class="c-education bg-black py-10">
    <v-col class="pt-12 pb-16 text-white">
      <h2 class="text-h2 mb-8 text-center">{{ blok?.title }}</h2>
      <p class="mb-10 text-center">{{ blok?.description }}</p>
      <v-row class="c-education__container" justify="center">
        <v-col cols="12" md="11" xl="8" class="d-flex flex-column ga-8">
          <div
            v-for="(school, index) in blok?.school"
            :key="school?.schoolName"
          >
            <h2
              :class="`mt-n1 headline font-weight-light d-flex align-baseline mb-4 text-primary text-wrap`"
            >
              <span class="text-h4 font-weight-bold pr-2">
                {{ school?.schoolName }}
              </span>
              |
              <span class="pl-2 font-weight-bold">{{ school?.degree }}</span>
            </h2>
            <div class="d-flex">
              <v-btn
                v-if="school?.link"
                :href="school?.link"
                icon
                size="small"
                variant="outlined"
                class="ml-3"
              >
                <v-icon> mdi-open-in-new </v-icon>
              </v-btn>
              <p
                v-html="richText(school?.description)"
                class="mb-2 font-weight-bold text-body-1"
              />
            </div>
          </div>
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
