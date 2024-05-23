export default {
  methods: {
    async getPageBySlug(slug) {
      const storyblokApi = useStoryblokApi();
      const config = useRuntimeConfig();
      let environmnet = config.public.NUXT_PUBLIC_NODE_ENV;
      try {
        const { data } = await storyblokApi.get("cdn/stories/", {
          // version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
          version:
          environmnet === "production"
              ? "published"
              : "draft",
          //   starts_with: 'recipes/',
          by_slugs: slug,
          // by_slugs: '*/' + slug,
          //   resolve_relations: 'category',
          //   is_startpage: false,
        });
        const story = data.stories[0];
        // story.content.category = data.rels.find(({ uuid }) => uuid === story.content.category)
        return story;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
