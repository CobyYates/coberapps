<template>
  <div v-if="resolvedRichText" v-html="resolvedRichText" />
</template>

<script>
import RichTextResolver from "storyblok-js-client/richTextResolver";
export default {
  props: {
    richTextContent: Object, // Pass the Storyblok Rich Text field data as a prop
  },
  computed: {
    resolvedRichText() {
      const resolver = new RichTextResolver();
      const richText = this.richTextContent;
      let result;
      if (richText) {
        result = resolver.render(richText.markdown);
      } else {
        result = false;
      }
      return result;
    },
  },
};
</script>
