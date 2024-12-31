<template>
  <Head>
    <Title>{{ story.content.title }}</Title>
    <Meta name="description" :content="story.content.description" />
    <Meta
      name="keywords"
      :content="story.content.keywords.join(',')"
      v-if="story.content.keywords"
    />
    <Meta property="og:title" :content="story.content.title || `Coby Yates Portfolio | ${route?.path?.slice(1)}`" />
    <Meta property="og:description" :content="story.content.description" />
    <Meta property="og:image" :content="story.content.image.filename" />
    <Meta name="twitter:card" content="summary" />
    <Meta name="twitter:title" :content="story.content.title" />
    <Meta name="twitter:description" :content="story.content.description" />
    <Meta name="twitter:image" :content="story.content.twitterImage" />
  </Head>
  <main role="main">
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const path = computed(() => route?.path);

defineProps({ blok: Object });
const config = useRuntimeConfig();

const story = await useAsyncStoryblok(route?.path?.slice(1), { version: "draft" });
</script>
<!-- https://blog.logrocket.com/building-dynamic-vuetify-themes/#:~:text=Vuetify%20includes%20a%20useTheme%20method,current. -->

<!-- STORYBLOK TUTORIAL - https://github.com/storyblok/storyblok-nuxt -->
