import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { useRuntimeConfig } from '#app';

export default defineNuxtPlugin((app) => {
  const config = useRuntimeConfig();
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: `#7D449C`,
            typography: "#000",
            secondary: "rgb(139, 195, 74)",
            accent: "#82B1FF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
            red: "#F44336",
            black: "#1F1F1F",
            white: "#FFFFFF",
            transparent: "#FFFFFF00",
            textOverlay: "#FFFFFF",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
