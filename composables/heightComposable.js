import { computed } from "vue";

export function useHeightResolver(data) {
  const resolvedHeights = computed(() => {
    return data.map((item) => {
      const specificHeight = item.specificHeight ? item.specificHeight : null;
      const fixedHeight = item.fixedHeight ? item.fixedHeight : null;
      let result = {};
      result.height = specificHeight || fixedHeight;
      result.screenSize = item.screenSize;
      return result || null;
    });
  });

  return resolvedHeights;
}
