<template>
  <Head>
    <Title>{{ story.content.title }}</Title>
    <Meta name="description" :content="story.content.description" />
    <!-- Add other meta fields -->
    <Meta
      name="keywords"
      :content="story.content.keywords.join(',')"
      v-if="story.content.keywords"
    />
    <Meta property="og:title" :content="story.content.title" />
    <Meta property="og:description" :content="story.content.description" />
    <Meta property="og:image" :content="story.content.image.filename" />
    <!-- Add more Open Graph meta fields -->
    <Meta name="twitter:card" content="summary" />
    <Meta name="twitter:title" :content="story.content.title" />
    <Meta name="twitter:description" :content="story.content.description" />
    <Meta name="twitter:image" :content="story.content.twitterImage" />
    <!-- Add more Twitter meta fields -->
    <!-- Add more meta fields as needed -->
  </Head>
  <main role="main">
    <component
      v-for="section in story.content.sections"
      :key="section.i"
      :is="section.component"
      v-bind="section"
    />
  </main>
</template>

<script setup lang="ts">
const story = await useStoryblok("home", { version: "draft" });
</script>
<!-- https://blog.logrocket.com/building-dynamic-vuetify-themes/#:~:text=Vuetify%20includes%20a%20useTheme%20method,current. -->
