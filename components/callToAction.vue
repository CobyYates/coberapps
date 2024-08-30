<template>
  <v-row
    justify="center"
    align="center"
    :style="rowStyle"
    :class="rowClass"
    class="c-call-to-action py-10"
  >
    <v-col class="c-call-to-actions__container">
      <v-row justify="center">
        <v-col cols="10" md="6" class="d-flex align-center">
          <v-avatar v-if="icon" class="mr-10" size="100">
            <v-img :src="icon.filename" />
          </v-avatar>
          <div>
            <typography
              v-if="text && text.length > 0"
              v-bind="text[0]"
              class="c-cta__title"
            />
            <typography
              v-if="description && description.length > 0"
              v-bind="description[0]"
              class="c-cta__title"
            />
          </div>
        </v-col>
        <v-col
          cols="12"
          md="3"
          class="d-flex justify-center md-justify-end align-center"
        >
          {{ ctaColor }}
          <v-btn
            v-if="cta && cta.length > 0"
            :prepend-icon="ctaValue.prepend"
            :append-icon="ctaValue.append"
            v-bind="ctaValue"
            :class="ctaClass"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import colors from "~/mixin/colors";

export default {
  mixins: [colors],
  props: {
    text: {
      type: Array,
      default: () => [],
    },
    description: {
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
    cta: {
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
    icon: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    rowClass() {
      let result = [];
      const spacing = this.spacing;
      const backgroundColor = this.backgroundColor;
      if (spacing && spacing.length > 0) {
        if (spacing && spacing.length > 0) {
          for (let i = 0; i < spacing[0].values.length; i++) {
            let val = spacing[0].values[i];
            result.push(
              `${val.type}${val.location}${val.screenSize}${val.value}`
            );
          }
        }
      }
      if (backgroundColor && backgroundColor.length > 0) {
        result.push(`bg-${this.basicColor(backgroundColor[0])}`);
      } else {
        result.push("bg-primary");
      }
      console.log("color results", result);
      return result;
    },
    rowStyle() {
      const styles = {};
      // const maxWidth = this.maxWidth || null
      // const backgroundImage = this.backgroundImage
      // if (backgroundImage.length > 0) {
      //   styles.backgroundImage = `url(${backgroundImage.filename})`;
      // }
      // if (maxWidth) {
      //   styles.width = maxWidth;
      // }
      return styles;
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
    // ctaColor(){
    //   const ctaValue = this.ctaValue
    //   const color = ctaValue.color && ctaValue.color.length > 0 ? ctaValue.color[0] : null
    //   let result = null
    //   if(color) {
    //     if(color && color.themeColor) {
    //       result = color.themeColor
    //     }
    //     if(color && color.colorAdjustment) {
    //       result = color.themeColor + color.colorAdjustment
    //     }
    //     console.log('testing', color, result)
    //   }
    //   return result
    // },
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
  },
};
</script>

<style lang="scss" scoped>
.c-call-to-action {
  background-size: cover;
  width: 100%;
  &_container {
    max-width: 1200px;
  }
}
</style>
