<template>
  <v-row
    :class="rowClass"
    :style="rowStyle"
    class="c-section my-0 mx-auto"
    justify="center"
  >
    <template v-for="item in columns" :key="item.i">
      <v-col
        v-if="item"
        :cols="item.cols"
        :sm="item.sm"
        :md="item.md"
        :lg="item.lg"
        :xl="item.xl"
        class="c-section__column w-100"
        :class="colClass(item)"
        :style="colStyle(item)"
      >
        <typography
          v-if="item.title.length > 0"
          v-bind="item.title[0]"
          class="c-section__title"
        />
        <typography
          v-if="item.subtitle.length > 0"
          v-bind="item.subtitle[0]"
          class="c-section__subtitle"
        />
        <typography
          v-if="item.description.length > 0"
          v-bind="item.description[0]"
          class="c-section__description"
        />
        <div v-if="item && item.sections && item.sections.length > 0">
          <card-with-layout
            v-if="
              item.sections[0].component == 'card' &&
              item.sections[0].cardLayout
            "
            v-bind="item.sections[0]"
          />
          <template v-else-if="item.sections[0].component == 'card'">
            <card
              v-for="(card, i) in item.sections"
              v-bind="item.sections[i]"
            />
          </template>
          <form-element
            v-if="item.sections[0].component == 'formElement'"
            v-bind="item.sections[0]"
          />
          <call-to-action
            v-if="item.sections[0].component == 'callToAction'"
            v-bind="item.sections[0]"
          />
          <template v-if="item.sections[0].component == 'iconCard'">
            <div v-for="(card, i) in item.sections" :key="i">
              <icon-card v-bind="card" />
            </div>
          </template>
          <template v-if="item.sections[0].component == 'markdown'">
            <rich-text :richTextContent="item.sections[0]" />
          </template>
          <template v-if="item.sections[0].component == 'questionSidebar'">
            <question-sidebar v-bind="item.sections[0]" />
          </template>
        </div>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import colors from "~/mixin/colors";

export default {
  mixins: [colors],
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    backgroundColor: {
      type: Array,
      default: () => [],
    },
    spacing: {
      type: Array,
      default: () => [],
    },
    backgroundImage: {
      type: Object,
      default: () => {},
    },
    maxWidth: {
      type: String,
      default: null,
    },
    minWidth: {
      type: String,
      default: null,
    },
  },
  computed: {
    rowClass() {
      let result = [];
      const spacing = this.spacing;
      const backgroundColor = this.backgroundColor;
      if (spacing && spacing.length > 0) {
        if (spacing && spacing.length > 0) {
          for (let i = 0; i < spacing.length; i++) {
            let val = spacing[i].values[0];
            // let auto = val.auto || null
            // if (auto) {
            //   value = 'auto'
            // }
            if (val && val.type)
              result.push(
                `${val.type}${val.location}${val.screenSize}${val.value}`
              );
          }
        }
      }
      if (backgroundColor && backgroundColor.length > 0) {
        result.push(`bg-${this.basicColor(backgroundColor[0])}`);
      }
      return result;
    },
    rowStyle() {
      console.log("columns", this.columns);
      const styles = {};
      // const backgroundColor = this.backgroundColor
      const maxWidth = this.maxWidth || null;
      const minWidth = this.minWidth || null;
      const backgroundImage = this.backgroundImage;
      // if (backgroundColor.length > 0) {
      //   styles.backgroundColor = this.basicColor(backgroundColor[0]);
      // }
      if (backgroundImage) {
        styles.backgroundImage = `url(${backgroundImage.filename})`;
      }
      if (maxWidth) {
        styles.width = maxWidth;
      }
      if (minWidth) {
        styles.width = minWidth;
      }
      if (styles && styles.backgroundImage) return styles;
    },
  },
  methods: {
    colStyle(item) {
      const styles = {};
      if (item && item.backgroundColor.length > 0) {
        styles.backgroundColor = this.basicColor(item.backgroundColor[0]);
      }
      return styles;
    },
    colClass(item) {
      const result = [];
      if (item.spacing.length > 0) {
        item.spacing.forEach((s) => {
          let auto = s.auto || null;
          let value = s.value;
          if (auto) {
            value = "auto";
          }
          result.push(`${s.type}${s.location}${s.screenSize}${value}`);
        });
      }
      if (item && item.backgroundColor && item.backgroundColor.length > 0) {
        result.push("py-0");
      }
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.c-section {
  background-size: cover;
  max-width: 100%;
}
</style>
