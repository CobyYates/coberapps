import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify","class-validator"],
  },
  ssr: true,
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    [
      "@storyblok/nuxt",
      {
        accessToken: "m4Znb31QiZoEyaVja5acMQtt",
        apiOptions: {
          region: "us",
        },
      },
    ],
  ],
  plugins: [
    { src: '~/plugins/flickity.js', ssr: false }
  ],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    optimizeDeps: {
      exclude: ['class-validator']
    }
  },
});
