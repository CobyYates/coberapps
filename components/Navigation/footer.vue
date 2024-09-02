<template>
  <v-row :class="rowClass" class="mt-10">
    <v-col class="d-flex justify-center">
      <component
        v-for="section in row"
        :key="section.i"
        :is="section.component"
        v-bind="section"
      />
      <v-row
        class="c-footer px-3"
        v-if="footerColumns && footerColumns.length > 0"
      >
        <v-col
          v-for="column in footerColumns"
          :key="column.i"
          class="px-3"
          cols="12"
          sm="6"
          :md="columnCount"
        >
          <typography
            v-if="column.title"
            v-bind="column.title[0]"
            class="c-footer__title"
          />
          <div class="c-footer__title-border"></div>
          <div v-for="item in column.listItem" :key="item.i">
            <v-btn
              v-if="item.component == 'cta'"
              :prepend-icon="item.prepend"
              :append-icon="item.append"
              v-bind="item"
              :class="ctaClass"
            />
            <component v-else :is="item.component" v-bind="item" />
          </div>
          <div
            v-if="column && column.socialLinks && column.socialLinks.length > 0"
          >
            <a
              v-for="icon in column.socialLinks"
              :href="icon.url"
              target="_blank"
            >
              <v-icon
                :key="icon.i"
                :icon="icon.value"
                :size="icon.size"
                :color="iconColor(icon.color)"
              />
            </a>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    footerColumns: {
      type: Array,
      default: () => [],
    },
    row: {
      type: Array,
      default: () => [],
    },
    backgroundColor: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    rowClass() {
      let result = [];
      const backgroundColor = this.backgroundColor;
      if (backgroundColor && backgroundColor.length > 0) {
        let val = backgroundColor[0];
        if (val && val.themeColor) {
          result.push(`bg-${val.themeColor}`);
        }
        if (val && val.colorAdjustment) {
          result[0] = result[0].concat(`-${val.colorAdjustment}`);
        }
      }
      return result;
    },
    columnCount() {
      const columns = this.footerColumns;
      let result;
      if (columns && columns.length > 0) {
        result = 12 / columns.length;
      }
      return result;
    },
  },
  methods: {
    iconColor(color) {
      let val = color[0] || null;
      let result;
      if (val && val.themeColor) {
        result = val.themeColor;
      }
      if (val && val.colorAdjustment) {
        result = result.concat(`-${val.colorAdjustment}`);
      }
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
.c-footer {
  max-width: 1200px;
  &__title {
    &-border {
      height: 5px;
      width: 30px;
      background-color: #999;
      margin: 10px 0;
    }
  }
}
</style>
