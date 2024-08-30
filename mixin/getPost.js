export default {
  methods: {
    async getRecentPosts() {
      const storyblokApi = useStoryblokApi();
      const config = useRuntimeConfig();
      let blogPosts = [];
      try {
        // Fetch posts sorted by the custom field "firstPublishedAt"
        const { data } = await storyblokApi.get("cdn/stories/", {
          version: "published",
          starts_with: "posts/",
          per_page: 3,
          sort_by: "content.firstPublishedAt:desc"
        });
        blogPosts = data.stories;
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }

      return blogPosts.map((e) => e);
    },
  },
};
