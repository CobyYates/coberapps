<template>
  <v-row class="blog_page mx-auto">
    <v-col
      cols="12"
      sm="8"
      md="9"
      class="mt-10 mx-auto"
      :class="breakpoint.mdAndUp ? 'blog_page__blogs' : ''"
    >
      <div class="scrollable-content">
        <nuxt-link
          v-for="post in blogPosts"
          :key="post.id"
          :to="`/posts/${post.slug}`"
          variant="flat"
          elevation="0"
          class="mb-5"
        >
          <post v-bind="post.content" show-read-more />
        </nuxt-link>
        <v-pagination
          v-model="currentPageNumber"
          :length="totalPages"
          :total-visible="7"
          @update:modelValue="changePage"
        />
      </div>
    </v-col>
    <v-col cols="12" sm="4" md="3" class="mt-10 mx-auto blog_page__sidebar">
      <blog-side-bar />
    </v-col>
  </v-row>
</template>

<script>
import breakpoint from "~/mixin/breakpoint";
export default {
  props: {
    blogPosts: {
      type: Array,
      default: () => [],
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPosts: {
      type: Number,
      default: 1,
    },
  },
  mixins: [breakpoint],
  computed: {
    totalPages() {
      return Math.ceil(this.totalPosts / this.postsPerPage);
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.postsPerPage;
      const end = start + this.postsPerPage;
      return this.blogPosts.slice(start, end);
    },
    latestPosts() {
      return this.blogPosts.slice(0, 3);
    },
    currentPageNumber() {
      return this.currentPage;
    },
  },
  methods: {
    changePage(page) {
      this.$emit("update-page", page);
    },
  },
  data() {
    return {
      postsPerPage: 9,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog_page {
  max-width: 1200px;
  display: flex;

  &__blogs {
    display: flex;
    flex-direction: column;
    height: 100vh; /* Adjust the height as needed */
    overflow-y: auto;
    scrollbar-width: none;
  }

  &__sidebar {
    position: sticky;
    top: 0;
  }

  .scrollable-content {
    display: flex;
    flex-direction: column;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
