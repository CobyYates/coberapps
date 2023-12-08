<template>
  <v-app>
    <navigation />
    <template v-for="section in page.sections" :key="section.i">
      <component :is="section.component" v-bind="section" />
  </template>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      story: null
    }
  },
  computed: {
    page() {
      const story = this.story
      let result = {}
      if(story && story.content) {
        result = story.content
      }
      return result
    }
  },
  async mounted() {
    let route = this.$route.path
    let result = route == '/' ? 'home' : route
    try {
      this.story = await useAsyncStoryblok(result, { version: "draft" });
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style lang="scss" scoped></style>