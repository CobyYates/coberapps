<template>
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

const story = await useStoryblok('home', { version: 'draft' })
</script>
<!-- https://blog.logrocket.com/building-dynamic-vuetify-themes/#:~:text=Vuetify%20includes%20a%20useTheme%20method,current. -->
