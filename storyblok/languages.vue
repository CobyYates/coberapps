<template>
  <v-row v-editable="blok" class="c-languages bg-black py-10">
    <v-col class="pt-12 pb-16 text-white">
      <h2 class="text-h2 mb-8 text-center">{{ blok?.title }}</h2>
      <p class="mb-10 text-center">{{ blok?.description }}</p>
      <v-row class="c-languages__container" justify="center">
        <v-col cols="12" lg="10" xl="8" class="d-flex flex-wrap justify-center">
          <v-row class="c-languages__columns">
            <v-col
              v-for="(language, index) in blok?.language"
              :key="language?.title"
              cols="12"
              md="6"
              class="px-10"
            >
              <li class="d-flex align-center">
                <v-tooltip :text="language?.name" location="left">
                  <template v-slot:activator="{ props }">
                    <NuxtImg
                      :src="language?.logo?.filename"
                      alt="Language Logo"
                      provider="storyblok"
                      width="50"
                      format="webp"
                      class="mr-5"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
                <div class="d-flex flex-column w-100">
                  <p v-if="index <= 1" class="text-center font-weight-bold">
                    Years of Experience
                  </p>
                  <div
                    v-if="index <= 1"
                    class="d-flex justify-space-between mb-4"
                    :style="`margin-left: calc(${(52 / weeksSinceJan2018) * 100}%);`"
                  >
                    <p v-for="year in yearsArray" :key="year">{{ year }}</p>
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

defineProps({ blok: Object });

const differenceInWeeks = (endDate, startDate) => {
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  return Math.floor((endDate - startDate) / msPerWeek);
};

const parseISO = (isoString) => new Date(isoString);

const weeksSinceJan2018 = computed(() => {
  const startDate = new Date(2018, 0, 1);
  const now = new Date();
  return differenceInWeeks(now, startDate);
});

const yearsArray = computed(() => {
  const years = Math.floor(weeksSinceJan2018.value / 52);
  return Array.from({ length: years }, (_, i) => i + 1);
});

const calculateWeeks = (language) => {
  const now = new Date();
  let totalWeeks = 0;

  if (language?.fixedExperienceStart && language?.fixedExperienceEnd) {
    const fixedStart = parseISO(language.fixedExperienceStart);
    const fixedEnd = parseISO(language.fixedExperienceEnd);
    totalWeeks += differenceInWeeks(fixedEnd, fixedStart);
  }

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
