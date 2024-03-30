export default {
  methods: {
    textColor(color) {
      let result = null;
      if (color && color.themeColor != "") {
        result =
          color.colorAdjustment != ""
            ? `text-${color.themeColor}-${color.colorAdjustment}`
            : `text-${color.themeColor}`;
      } else if (color && color.customColor.value != "") {
        result = color.customColor.value;
      }
      return result;
    },
    basicColor(color) {
      let result = null;
      if (color && color.themeColor != "") {
        result =
          color.colorAdjustment != ""
            ? `${color.themeColor}-${color.colorAdjustment}`
            : `${color.themeColor}`;
      } else if (color && color.customColor.value != "") {
        result = color.customColor.value;
      }
      return result;
    },
  },
};
