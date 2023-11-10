// composables/storyblok.js
// import { ref, onMounted } from "vue";
// import Storyblok from "storyblok-js-client";

// const useAsyncStoryblok = (slug, options = {}) => {
//   const story = ref(null);

//   const loadStory = async () => {
//     const response = await Storyblok.get(`cdn/stories/${slug}`, options);
//     story.value = response.data.story;
//   };

//   onMounted(() => {
//     loadStory();
//   });

//   return { story };
// };

// export { useAsyncStoryblok };
