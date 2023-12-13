import { ref, computed } from "vue";
import vuetify from "vite-plugin-vuetify";
import { useDisplay, useTheme } from "vuetify";

export default function useProjectTheme(data) {
  const breakpoint = useDisplay();
  const theme = useTheme();

  // Computed property to get the current breakpoint
  const currentBreakpoint = computed(() => {
    let result = [];
    for (const val in breakpoint) {
      result[val] = breakpoint[val].value;
    }
    return result;
  });

  const currentColor = (colorObject) => {
    let currentTheme = theme.current.value;
    let result = currentTheme.colors.typography;
    if (colorObject && colorObject.customColor.value) {
      result = colorObject.customColor.value;
    } else if (colorObject && colorObject.themeColor) {
      let adjustment;
      if (colorObject.colorAdjustment) {
        adjustment = colorObject.colorAdjustment;
      }
      let colorValue = adjustment
        ? `${colorObject.themeColor}-${adjustment}```
        : colorObject.themeColor;
      result = currentTheme.colors[colorValue];
    }
    return result;
  };

  return {
    currentBreakpoint,
    currentColor,
  };
}
