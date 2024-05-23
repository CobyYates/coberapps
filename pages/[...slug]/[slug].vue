<template>
  <div v-if="story && story.content">
    <component
    v-for="section in story.content.sections"
    :key="section.i"
    :is="section.component"
    v-bind="section"
    />
  </div>
</template>

<script>
import getPage from '~/mixin/getPages';
  export default {
    data() {
      return {
        story: null
      }
    },
    mixins: [getPage],
    async beforeMount () {
      let path = this.$route.path.slice(1)
      this.story = await this.getPageBySlug(path);
      // console.log('path', path)
    },
  }
</script>

<style lang="scss" scoped>

</style>