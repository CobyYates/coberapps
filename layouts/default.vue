<template>
  <v-app>
    <navigation
      v-if="navActive"
      v-bind="nav.content"
    />
    <!-- <pre v-if="navActive">{{ nav.content }}</pre> -->
    <slot />
    <navigation-footer
      v-if="navActive"
      v-bind="nav.content.footer[0]"
    />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      nav: null
    }
  },
  async beforeMount() {
    const story = await useAsyncStoryblok("globalNavigation", { version: "draft" });
    this.nav = story
  },
  computed: {
    navActive() {
      let result = false
      const nav = this.nav
      if (nav && nav.content) {
        result = true
      }
      return result
    }
  },
  useServerSeoMeta() {
    
  }
}
</script>
<!--
  head() {
    let image
    if (this.page & this.page.image && this.page.image.filename) {
      image = this.page.image.filename
    }
    const pageTitle = this.page.title || 'Appliance By Design';
    const pageDescription = this.page.description || 'Surround Yourself with Luxury Discover top appliance brands and leading manufactures – available today';
    const pageImage = image || 'https://a-us.storyblok.com/f/1017223/444x161/a79b5ee39f/appliancebydesignlogo.png';

    return {
      title: pageTitle,
      meta: [
        { hid: 'title', property: 'title', content: pageTitle },
        { hid: 'og:title', property: 'og:title', content: pageTitle },
        { hid: 'description', propterty: 'description', content: pageDescription },
        { hid: 'og:description', property: 'og:description', content: pageDescription },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Appliance By Design' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:title', name: 'twitter:title', content: pageTitle },
        { hid: 'twitter:image', name: 'twitter:image', content: pageImage },
        { hid: 'twitter:description', name: 'twitter:description', content: pageDescription },
        { hid: 'twitter:label1', name: 'twitter:label1', content: 'Est. reading time' },
        { hid: 'twitter:data1', name: 'twitter:data1', content: '1 minute' },
        { hid: 'article:publisher', property: 'article:publisher', content: 'https://www.facebook.com/elementappliancecompany/' },
        { hid: 'article:modified_time', property: 'article:modified_time', content: Date() },
        { hid: 'og:image', property: 'og:image', content: pageImage },
        { hid: 'og:url', property: 'og:url', content: window.location.href },
      ],
    }
  },
  async fetch({ store, params }) {
    let route = params.slug
    let result = route == '/' ? 'home' : route
    try {
      this.story = await useAsyncStoryblok(result, { version: "draft" });
      console.log('testing fetch')
    } catch (error) {
      console.log(error)
    }
  },
  async mounted() {
    // let date = new Date().valueOf()
    let route = this.$route.path
    let result = route == '/' ? 'home' : route
    console.log('route', this.$route)
    try {
      this.story = await useAsyncStoryblok(result, { version: "draft" });
      console.log('testing fetch')
    } catch (error) {
      console.log(error)
    }

    let slugs = []
    try {
      const result = await fetch(`https://api-us.storyblok.com/v2/cdn/stories?version=draft&token=[token]`)
      const space = await result.json()
      if (space && space.stories) {
        space.stories.map(e => {
          if (e.content.component == 'page') {
            slugs.push({ route: `${e.full_slug}`, payload: e.content })
          }
        })
      }
    } catch (error) {
      console.log(error)
    }
    // console.log('testing pages', slugs)

  },
}
</script>

<style lang="scss" scoped></style> -->