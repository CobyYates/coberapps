<template>
  <component
    v-if="show"
    :is="element"
    :class="typographyClass"
    :style="typographyStyle"
    class="black"
  >
    <template v-if="!resolvedRichText">{{ text }}</template>
    <div v-else>
      <div
        v-if="resolvedRichText"
        v-html="
          maxWords
            ? `${resolvedRichText.slice(0, maxWords)}...`
            : resolvedRichText
        "
      />
    </div>
    <v-divider
      v-if="addAccent"
      style="width: 100px"
      class="mx-auto my-8"
      color="primary"
      opacity="1"
      thickness="2px"
    />
    <v-divider
      v-if="addAccentLeft"
      style="width: 100px"
      class="my-8"
      color="primary"
      opacity="1"
      thickness="2px"
    />
  </component>
</template>

<script>
import breakpoint from "~/mixin/breakpoint";
import textColor from "~/mixin/colors";
import RichTextResolver from "storyblok-js-client/richTextResolver";

export default {
  mixins: [breakpoint, textColor],
  props: {
    element: {
      type: String,
      default: "p",
    },
    headingStyle: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    richText: {
      type: Object,
      default: () => ({}),
    },
    fontWeight: {
      type: String,
      default: "",
    },
    color: {
      type: Array,
      default: () => [],
    },
    spacing: {
      type: Array,
      default: () => [],
    },
    alignment: {
      type: Array,
      default: () => [],
    },
    hiddenDesktop: {
      type: Boolean,
      default: false,
    },
    hiddenMobile: {
      type: Boolean,
      default: false,
    },
    colorReset: {
      type: Boolean,
      default: false,
    },
    addAccent: {
      type: Boolean,
      default: false,
    },
    addAccentLeft: {
      type: Boolean,
      default: false,
    },
    maxWords: {
      type: Number,
    },
  },
  computed: {
    typographyClass() {
      // console.log('text heading', this.$props)
      const result = [];
      const alignment = this.alignment;
      const headingStyle = this.headingStyle;
      const fontWeight = this.fontWeight;
      const spacing = this.spacing;
      const colorReset = this.colorReset;
      const color = this.color;

      if (alignment) {
        result.push(...alignment);
      }

      if (headingStyle) {
        result.push(headingStyle);
      }

      if (fontWeight) {
        result.push(fontWeight);
      }

      if (color.length > 0 && !colorReset) {
        result.push(this.textColor(color[0]));
      }

      const spacingClasses = spacing
        ? spacing.map((s) => `${s.type}${s.location}${s.screenSize}${s.value}`)
        : [];
      result.push(...spacingClasses);

      return result.filter(Boolean);
    },
    resolvedRichText() {
      const resolver = new RichTextResolver();
      const richText = this.richText;
      let result;
      if (richText && richText.content && richText.content[0].content) {
        result = resolver.render(richText);
      } else {
        result = false;
      }
      return result;
    },
    typographyStyle() {
      let result = [];
      return result;
    },
    show() {
      const hiddenDesktop = this.hiddenDesktop;
      const hiddenMobile = this.hiddenMobile;
      const breakpoint = this.breakpoint;
      if (
        (breakpoint.mdAndUp && hiddenDesktop) ||
        (breakpoint.smAndDown && hiddenMobile)
      ) {
        return false;
      }
      return true;
    },
  },
  mounted() {
    this.removeMarkers();
  },
  updated() {
    this.removeMarkers();
  },
  methods: {
    removeMarkers() {
      this.$nextTick(() => {
        // Existing code for handling <li> elements
        const listItems = this.$el.querySelectorAll("li");
        listItems.forEach((item) => {
          item.style.listStyleType = "none";
          item.classList.add("d-flex");

          const checkMark = document.createElement("span");
          checkMark.textContent = "✔️";
          checkMark.style.marginRight = "8px";

          item.insertBefore(checkMark, item.firstChild);
        });

        // New code to add "mb-10" to all <p> tags
        const paragraphs = this.$el.querySelectorAll("p");
        paragraphs.forEach((p) => {
          p.classList.add("mb-5");
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
a:deep {
  text-decoration: none !important;
}
</style>
