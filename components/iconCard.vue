<template>
  <v-card
    :variant="variant || 'flat'"
    :color="colorValue"
    :style="cardStyle"
    :class="cardClass"
    :height="height"
    :elevation="elevation || '3'"
    min-width="100%"
    :rounded="false"
    class="d-flex"
    :hover="false"
  >
    <v-avatar size="100" v-if="icon && icon.filename">
      <v-img :src="icon.filename" />
    </v-avatar>
    <div>
      <v-card-title v-if="title && title.length > 0">
        <typography v-bind="title[0]" class="c-section__title text-wrap" />
      </v-card-title>
      <v-card-subtitle v-if="subtitle && subtitle.length > 0">
        <typography v-bind="subtitle[0]" class="c-section__subtitle text-wrap" />
      </v-card-subtitle>
      <v-card-text v-if="description && description.length > 0">
        <typography v-bind="description[0]" class="c-section__description text-wrap" />
      </v-card-text>
      <v-card-text>
        <v-btn
          v-if="cta && cta.length > 0"
          :prepend-icon="ctaValue.prepend"
          :append-icon="ctaValue.append"
          v-bind="ctaValue"
          :class="ctaClass"
        />
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
import colors from "~/mixin/colors";

export default {
  mixins: [colors],
  props: {
    title: Array,
    subtitle: Array,
    description: Array,
    width: String,
    textAlignment: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "flat",
    },
    height: {
      type: String,
      default: "500",
    },
    color: Array,
    image: Object,
    icon: Object,
    imageFit: {
      type: String,
      default: null,
    },
    sections: Array,
    cta: {
      type: Array,
      default: () => [],
    },
    elevation: {
      type: String,
      default: "3",
    },
    link: {
      type: String,
      default: null,
    },
    cardLayout: {
      type: String,
      default: null,
    },
    color: {
      type: Array,
      default: null,
    },
  },
  computed: {
    cardStyle() {
      let result = {};
      const image = this.image;
      if (image) {
        result.backgroundImage = image.filename;
      }
      return result;
    },
    cardClass() {
      let result = [];
      const textAlignment = this.textAlignment;
      if (textAlignment) {
        result.push(textAlignment);
      }
      return result;
    },
    ctaClass() {
      let result = [];
      let spacingClasses = [];
      const cta = this.cta;
      if (cta[0].spacing && cta[0].spacing[0] && cta[0].spacing[0].values) {
        spacingClasses = cta[0].spacing[0].values.map(
          (s) => `${s.type}${s.location}${s.screenSize}${s.value}`
        );
      }
      result.push(...spacingClasses);
      return result;
    },
    ctaValue() {
      const val = this.cta[0];
      let icon = val.iconValue;
      let iconLocation = val.iconLocation;
      const result = {
        color: this.basicColor(val.color[0]) || null,
        variant: val.variant || "flat",
        text: val.text,
        block: val.block,
        elevation: val.elevation || "0",
        to: val.to,
        size: val.size,
        href: val.href,
        rounded: val.rounded,
        prepend: icon && iconLocation == "left" ? icon : null,
        append: icon && iconLocation == "right" ? icon : null,
        iconValue: val.iconValue,
      };
      return result;
    },
    colorValue() {
      const color = this.color;
      let result;
      if (color && color.length > 0) {
        result = `bg-${color[0].themeColor}`;
      }
      return result;
    },
    imageStyle() {
      const styles = {};
      const imageFit = this.imageFit;
      if (imageFit) {
        styles.imageFit = `${imageFit}!important`;
      }
      return styles;
    },
  },
};
</script>

<style lang="scss" scoped></style>
