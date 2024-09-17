// mixins/incrementViewCount.js
export default {
    methods: {
      async incrementViewCount(storyId) {
        const storyblokApi = useStoryblokApi();
        const config = useRuntimeConfig();
        const environment = config.public.NUXT_PUBLIC_NODE_ENV;
        console.log('storyId', storyId)
        const STORYBLOK_API_TOKEN = config.public.NUXT_STORYBLOK_API_TOKEN
  
        try {
          // Fetch the current story with viewCount
          const { data } = await storyblokApi.get(`cdn/stories/posts/${storyId}`, {
            version: environment === "production" ? "published" : "draft",
          });
          const currentViewCount = data.story.content.viewCount || 0;
  
          // Increment the viewCount
          const updatedViewCount = currentViewCount + 1;
  
          // Only update if in production or draft mode
        //   if (environment !== "production") {
            // Skip updating the view count in non-production environments
            // console.log('Skipping viewCount update in non-production environment');
            // return updatedViewCount;
        //   }
  
          // Update the viewCount field in Storyblok (you might need Management API here)
          await storyblokApi.put(`spaces/1016922/stories/posts/${storyId}`, {
            story: {
              content: {
                ...data.story.content,
                viewCount: updatedViewCount
              }
            }
          });
  
          return updatedViewCount;
        } catch (error) {
          console.error('Error incrementing view count:', error);
        }
      }
    }
  };
  