<template>
  <div v-if="page && page.story.content">
    <component
      v-for="section in page.story.content.sections"
      :key="section.i"
      :is="section.component"
      v-bind="section"
    />
  </div>
  <blog-page
    v-if="page && page.story && page.story.content.blogPage && !isBlog"
    :blogPosts="page.blogPosts"
    :totalPosts="page.totalPosts"
    :current-page="currentPage"
    @update-page="updatePage"
  />
  <post-page v-if="isBlog && page && page.story" v-bind="page.story.content" />
</template>

<script>
import getPage from "~/mixin/getPages";
export default {
  data() {
    return {
      page: null,
      currentPage: 1,
    };
  },
  mixins: [getPage],
  async beforeMount() {
    await this.loadPageData();
  },
  watch: {
    "$route.query.page": "loadPageData",
  },
  methods: {
    async loadPageData() {
      let path = this.$route.path.slice(1);
      let slug = this.$route.params.slug
      if(slug == 'news') {
        this.currentPage = parseInt(this.$route.query.page) || 1;
      } else {
        this.currentPage = null
      }
      this.page = await this.getPageBySlug(path, this.currentPage);
    },
    updatePage(page) {
      this.$router.push(`${this.$route.path}?page=${page}`);
    },
  },
  computed: {
    isBlog() {
      const route = this.$route.path.includes('/post');
      return route;
    },
  },
};
</script>

<style lang="scss" scoped></style>
