import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#97ca65",
            typography: "#000",
            secondary: "rgb(139, 195, 74)",
            accent: "#82B1FF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
            red: "#F44336",
            black: "#000000",
            white: "#FFFFFF",
            transparent: "#FFFFFF00",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
