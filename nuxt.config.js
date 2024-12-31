import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// Use process.env to access environment variables during build-time in nuxt.config
const OPEN_GRAPH = [
  {
    hid: "og:site_name",
    property: "og:site_name",
    content: "Coby Yates - Portfolio",
  },
  {
    hid: "og:description",
    property: "og:description",
    content: "",
  },
  {
    hid: "og:title",
    property: "og:title",
    content: "Coby Yates - Portfolio",
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
    content: "Coby Yates - Portfolio",
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
    content: "Coby Yates - Portfolio",
  },
];
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify", "class-validator"],
  },
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_NODE_ENV: process.env.NUXT_PUBLIC_NODE_ENV,
      THEME_COLORS_PRIMARY: process.env.NUXT_THEME_COLORS_PRIMARY,
      EMAIL_JS_CONFIRMATION_TEMPLATE_ID:
        process.env.NUXT_EMAIL_JS_CONFIRMATION_TEMPLATE_ID,
      DOMAIN_VERIFY_CODE: process.env.DOMAIN_VERIFY_CODE,
      GTAG_ID: process.env.GTAG_ID,
      GTAG_ID_2: process.env.GTAG_ID_2,
      GTAG_AW_ID: process.env.GTAG_AW_ID,
      NUXT_STORYBLOK_API_TOKEN: process.env.NUXT_STORYBLOK_API_TOKEN,
    },
  },
  ssr: false,
  target: "static",
  app: {
    head: {
      title: "Coby Yates - Portfolio",
      meta: [
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Coby Yates - Portfolio",
        },
        { hid: "og:description", property: "og:description", content: "" },
        {
          hid: "og:title",
          property: "og:title",
          content: "Coby Yates - Portfolio",
        },
        { hid: "og:url", property: "og:url", content: "" },
        { hid: "og:image", property: "og:image", content: "" },
        { property: "og:updated_time", content: new Date().toISOString() },
        { name: "p:domain_verify", content: process.env.DOMAIN_VERIFY_CODE },
        { name: "twitter:title", content: "Coby Yates - Portfolio" },
        { name: "twitter:description", content: "" },
        { name: "twitter:image", content: "" },
        { name: "twitter:image:alt", content: "Coby Yates - Portfolio" },
      ],
      link: [
        { rel: "stylesheet", href: "https://fonts.cdnfonts.com/css/tw-cen-mt" },
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/tw-cen-mt-std",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/tw-cen-mt-condensed",
        },
      ],
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID}`,
          async: true,
        },
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID_2}`,
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GTAG_ID}');
            gtag('config', '${process.env.GTAG_AW_ID}');
          `,
          type: "text/javascript",
          charset: "utf-8",
        },
      ],
      __dangerouslyDisableSanitizers: ["script"],
    },
  },
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
        accessToken: process.env.NUXT_STORYBLOK_API_TOKEN,
        apiOptions: {
          region: "us",
        },
        componenetsDir: '~/storyblok',
        bridge: true,
        useApiClient: true,
        devtools: true,
      },
    ],
  ],
  // components: {
  //   dirs: [
  //     {
  //       path: '~/storyblok',
  //       global: true,
  //     }
  //   ]
  // },
  /*
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-124639262-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-124639262-1');  
gtag('config', 'AW-756669483');
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-140374100-1">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-140374100-1');
</script>

<meta name="p:domain_verify" content="f59b370cf44dbb031acdf38470482d5b"/>
  */
  plugins: [
    // { src: "~/plugins/flickity.js", ssr: false },
    // "~/plugins/composition-api.js",
    // "~/plugins/rich-text-renderer.js",
  ],
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
