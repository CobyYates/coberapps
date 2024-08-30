<template>
  <v-row>
    <v-col cols="auto" class="text-center">
      <p class="text-grey-darken-2 mt-16">{{ dateFormat.month }}</p>
      <p class="text-primary text-h4 font-weight-bold">
        {{ dateFormat.day }}
      </p>
      <p class="text-grey-darken-2 mb-7">{{ dateFormat.year }}</p>
      <div>
        <v-icon color="primary">mdi-eye</v-icon>
        <p class="text-grey-darken-2">{{ views }}</p>
      </div>
    </v-col>
    <v-col>
      <v-img
        v-if="featuredImage && featuredImage.filename"
        height="400"
        cover
        widht="100%"
        :src="featuredImage.filename"
        :alt="featuredImage.alt"
      />
      <div v-if="author" class="d-flex align-baseline my-2">
        <p>By: {{ author }}</p>
      </div>
      <div v-if="category" class="d-flex align-baseline my-2">
        <p class="pr-2">In:</p>
        <v-chip
          v-for="(item, i) in category"
          :key="i"
          color="primary"
          variant="flat"
          class="mr-2"
        >
          {{ item }}
        </v-chip>
      </div>
      <div
        v-if="showTags && tags && tags.length > 0"
        class="d-flex align-baseline my-2"
      >
        <p class="pr-2">Tags:</p>
        <v-chip
          v-for="(item, i) in parsedTags"
          :key="i"
          color="grey-darken-1"
          variant="flat"
          class="mr-2"
        >
          {{ item }}
        </v-chip>
      </div>
      <Typography
        element="h2"
        :text="title"
        addAccentLeft
        headingStyle="text-h4"
        fontWeight="font-weight-bold"
      />
      <Typography v-if="summary && !blogPost" element="p" :text="summary" />
      <Typography
        v-else-if="content"
        element="p"
        :richText="content"
        :max-words="maxWords"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    summary: {
      type: String,
      default: "",
    },
    firstPublishedAt: {
      type: String,
      default: "",
    },
    content: {
      type: Object,
      default: "",
    },
    featuredImage: {
      type: Object,
      default: "",
    },
    category: {
      type: Array,
      default: [],
    },
    tags: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    views: {
      type: Number,
      default: 20,
    },
    blogPost: {
      type: Boolean,
      default: false,
    },
    showTags: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dateFormat() {
      const firstPublishedAt = this.firstPublishedAt;
      const date = new Date(firstPublishedAt.replace(" ", "T"));
      const year = date.getFullYear();
      const month = date.toLocaleString("en-US", { month: "long" });
      const day = date.getDate();
      return { year, month, day };
    },
    parsedTags() {
      let result = [];
      const tags = this.tags;
      result = tags.split(",").map((value) => value.trim());
      return result;
    },
  },
};
</script>

<style lang="scss" scoped></style>
