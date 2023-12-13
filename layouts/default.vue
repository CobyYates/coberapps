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
      if (story && story.content) {
        result = story.content
      }
      return result
    }
  },
  head() {
    let image
    if(this.page & this.page.image && this.page.image.filename) {
      image = this.page.image.filename
    }
    const pageTitle = this.page.title || 'Default Title';
    const pageDescription = this.page.description || 'Default Description';
    const pageImage = image || 'default-image.jpg';

    return {
      title: pageTitle,
      meta: [
        { hid: 'description', name: 'description', content: pageDescription },
        { hid: 'og:title', property: 'og:title', content: pageTitle },
        { hid: 'og:description', property: 'og:description', content: pageDescription },
        { hid: 'og:image', property: 'og:image', content: pageImage },
        { hid: 'og:url', property: 'og:url', content: window.location.href },
      ],
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