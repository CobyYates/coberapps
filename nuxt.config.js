import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
// import { fetchStories } from './fetchStories.js'
// import { apiPlugin } from '@storyblok/vue'

const OPEN_GRAPH = [
  {
    hid: "og:site_name",
    property: "og:site_name",
    content: "Appliance by Design",
  },
  {
    hid: "og:description",
    property: "og:description",
    content: "",
  },
  {
    hid: "og:title",
    property: "og:title",
    content: "Appliance by Design",
  },
  {
    hid: "og:url",
    property: "og:url",
    // content: 'http://alvarosaburido.dev',
  },
  {
    hid: "og:image",
    property: "og:image",
    content: "",
  },
  { property: "og:updated_time", content: new Date().toISOString() },
];

const TWITTER = [
  // { name: 'twitter:card', content: 'summary_large_image' },
  // { name: 'twitter:site', content: '@shushiwuut' },
  {
    hid: "twitter:title",
    name: "twitter:title",
    content: "Appliance by Design",
  },
  {
    hid: "twitter:description",
    name: "twitter:description",
    content: "",
  },
  {
    hid: "twitter:image",
    name: "twitter:image",
    content: "",
  },
  {
    hid: "twitter:image:alt",
    name: "twitter:image:alt",
    content: "Appliance By Design",
  },
];

export default defineNuxtConfig({
  build: {
    transpile: ["vuetify", "class-validator"],
  },
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_NODE_ENV: process.env.NUXT_PUBLIC_NODE_ENV,
    },
  },
  // ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? true : false,
  ssr: false,
  target: 'static',
  head: [
    {
      rel: "stylesheet",
      href: "https://fonts.cdnfonts.com/css/tw-cen-mt",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.cdnfonts.com/css/tw-cen-mt-std",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.cdnfonts.com/css/tw-cen-mt-condensed",
    },
  ],
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
        bridge: true,
        useApiClient: true,
        devtools: false,
      },
    ],
  ],
  plugins: [{ src: "~/plugins/flickity.js", ssr: false }],
  // hooks: {
  //   async 'nitro:config'(nitroConfig) {
  //     if (!nitroConfig || nitroConfig.dev) {
  //       return
  //     }
  //     const token = process.env.STORYBLOK_API_TOKEN

  //     let cache_version = 0

  //     // other routes that are not in Storyblok with their slug.
  //     let routes = ['/'] // adds home directly but with / instead of /home
  //     try {
  //       const result = await fetch(`https://api.storyblok.com/v2/cdn/spaces/me?token=m4Znb31QiZoEyaVja5acMQtt`)

  //       if (!result.ok) {
  //         throw new Error('Could not fetch Storyblok data')
  //       }
  //       // timestamp of latest publish
  //       const space = await result.json()
  //       cache_version = space.space.version

  //       // Recursively fetch all routes and set them to the routes array
  //       await fetchStories(routes, cache_version)
  //      // Adds the routes to the prerenderer
  //       nitroConfig.prerender.routes.push(...routes)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   },
  // },
  // generate: {
  //   async routes() {
  //     try {
  //       const result = await fetch(
  //         "https://api-us.storyblok.com/v2/cdn/stories?version=draft&token=m4Znb31QiZoEyaVja5acMQtt"
  //       );
  //       const space = await result.json();

  //       if (space && space.stories) {
  //         const slugs = space.stories
  //           .filter((e) => e.content.component === "page")
  //           .map((e) => ({
  //             route: `/${e.full_slug}`, // Ensure the route starts with '/'
  //             payload: e.content,
  //           }));

  //         console.log('slugs', slugs);
  //         return slugs;
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }

  //     // Return an empty array if something goes wrong or no valid routes are found
  //     return [];
  //   },
  // },
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
      exclude: ["class-validator"],
    },
  },
});
