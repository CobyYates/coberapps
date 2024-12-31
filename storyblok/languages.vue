<template>
  <v-row v-editable="blok" class="c-languages bg-black py-10">
    <v-col class="pt-12 pb-16 text-white">
      <h2 class="text-h2 mb-8 text-center">{{ blok?.title }}</h2>
      <p class="mb-10 text-center">{{ blok?.description }}</p>
      <v-row class="c-languages__container" justify="center">
        <v-col cols="12" md="11" xl="8" class="d-flex flex-wrap justify-center">
          <v-row class="c-languages__columns">
            <v-col
              v-for="(language, index) in blok?.language"
              :key="language?.title"
              cols="12"
              md="6"
              class="px-10"
            >
              <li class="d-flex align-center">
                <img
                  :src="language?.logo?.filename"
                  alt="Language Logo"
                  width="50"
                  max-height="100%"
                  class="mr-5"
                />
                <div class="d-flex flex-column w-100">
                  <p v-if="index <= 1" class="text-center font-weight-bold">Years of Experience</p>
                  <div
                    v-if="index <= 1"
                    class="d-flex justify-space-between mb-4"
                    :style="`margin-left: calc(${(52 / weeksSinceJan2018) * 100}%);`"
                  >
                    <p v-for="year in weeksSinceJan2018 / 52">{{ year }}</p>
                  </div>
                  <v-progress-linear
                    height="20"
                    :model-value="calculateWeeks(language)"
                    color="primary"
                    :max="weeksSinceJan2018"
                    rounded-bar
                    rounded="xl"
                  >
                    <!-- {{ (calculateWeeks(language) / 4).toFixed() }} -->
                  </v-progress-linear>
                </div>
              </li>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from "vue";
import { differenceInWeeks, parseISO } from "date-fns";

defineProps({ blok: Object });

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
