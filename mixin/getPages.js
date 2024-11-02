export default {
  methods: {
    async getPageBySlug(slug, page, postsPerPage = 9) {
      const storyblokApi = useStoryblokApi();
      const config = useRuntimeConfig();
      const environment = config.public.NUXT_PUBLIC_NODE_ENV;
      let story = null;
      let blogPosts = [];
      let totalPosts = 0;

      try {
        const { data } = await storyblokApi.get("cdn/stories/", {
          version: environment === "production" ? "published" : "draft",
          by_slugs: slug,
        });
        story = data.stories[0];
      } catch (error) {
        console.log("Error fetching page by slug:", error);
      }

      if (story && story.content && story.content.blogPage && page) {
        try {
          // First, get the total number of posts
          const { total } = await storyblokApi.get("cdn/stories/", {
            version: "published",
            starts_with: "posts/",
            per_page: 1,
          });
          totalPosts = total;

          // Then, fetch the posts for the current page
          const { data } = await storyblokApi.get("cdn/stories/", {
            version: "published",
            starts_with: "posts/",
            per_page: postsPerPage,
            page,
            sort_by: "first_published_at:desc",
          });
          blogPosts = data.stories;
        } catch (error) {
          console.error("Error fetching blog posts:", error);
        }
      }

      return {
        story,
        blogPosts: blogPosts || null,
        totalPosts,
      };
    },
  },
};
