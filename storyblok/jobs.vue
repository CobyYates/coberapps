<template>
  <v-row v-editable="blok" class="c-languages bg-black py-10">
    <v-col class="pt-12 pb-16 text-white">
      <h2 class="text-h2 mb-8 text-center">{{ blok?.title }}</h2>
      <p class="mb-10 text-center">{{ blok?.description }}</p>
      <v-row class="c-languages__container" justify="center">
        <v-col cols="12" md="11" xl="8" class="d-flex flex-wrap">
          <v-timeline align="start" side="end">
            <v-timeline-item
              v-for="(job, i) in blok?.job"
              :key="i"
              size="small"
              :dot-color="job?.dotColor?.value"
              fill-dot
            >
              <template v-slot:opposite>
                <div
                  :class="`pt-1 headline font-weight-bold text-h5 text-primary`"
                >
                  {{ format(parseISO(job?.startDate), "MMM yyyy") }} -
                  {{
                    job?.endDate
                      ? format(parseISO(job?.endDate), "MMM yyyy")
                      : "Current"
                  }}
                </div>
              </template>
              <div>
                <h2
                  :class="`mt-n1 headline font-weight-light d-flex align-baseline mb-4 text-primary text-wrap`"
                >
                  <span class="text-h4 font-weight-bold pr-2">
                    {{ job?.company }}
                  </span>
                  |
                  <span class="pl-2 font-weight-bold">{{ job?.position }}</span>
                </h2>
                <div>
                  <p
                    v-html="richText(job?.description)"
                    class="mb-2 font-weight-bold text-body-1"
                  />
                  <p v-html="richText(job?.jobDetails)" class="text-body-1" />
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import RichTextResolver from "storyblok-js-client/richTextResolver";
import { computed } from "vue";
import { differenceInWeeks, parseISO, format } from "date-fns";

defineProps({ blok: Object });

const richText = (text) => {
  const resolver = new RichTextResolver();
  let result;
  result = resolver?.render(text);
  return result;
};

const weeksSinceJan2018 = computed(() => {
  const startDate = new Date(2018, 0, 1); // January 1, 2018
  const now = new Date();
  return differenceInWeeks(now, startDate);
});

// Function to calculate weeks between two dates
const calculateWeeks = (language) => {
  const now = new Date();
  let totalWeeks = 0;

  // Calculate weeks for fixed experience dates
  if (language?.fixedExperienceStart && language?.fixedExperienceEnd) {
    const fixedStart = parseISO(language.fixedExperienceStart);
    const fixedEnd = parseISO(language.fixedExperienceEnd);
    totalWeeks += differenceInWeeks(fixedEnd, fixedStart);
  }

  // Calculate weeks for optional start and end dates
  if (language?.start) {
    const optionalStart = parseISO(language.start);
    const optionalEnd = language?.end ? parseISO(language.end) : now;
    totalWeeks += differenceInWeeks(optionalEnd, optionalStart);
  }

  return totalWeeks;
};
</script>

<style lang="scss" scoped>
.c-languages {
  &__columns {
    column-count: 3;
  }
}
</style>

<!-- Developing and implementing new features on a Shopify headless project using React, Nuxt, Contentful, Storyblok, Pack Digital, Nacelle, and Cloudflare -->
<!-- - Created Shopify products, collections, pages, and adjusted Shopify scripts for products launches weekly - Used Vercel and Cloudflare to manage deployments for previews and production builds - Migrating and working on client sites written in React and utilizing Pack Digital storefront - Submitted and QA'd code for fixing bugs and new features - Develop reusable React and Vue components for CMS’s such as Pack Digital, Contentful and Storyblok - Oversee client projects, including a BigCommerce e-commerce website project - Collaborating with other developers and designers to ensure a seamless user experience -->
