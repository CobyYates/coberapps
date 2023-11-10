<template>
  <div>
    {{ richTextContent }}
    <sb-rich-text :blok="richTextContent" />
  </div>
</template>

<script>
export default {
  props: {
    richTextContent: Object, // Pass the Storyblok Rich Text field data as a prop
  },
}
</script>
