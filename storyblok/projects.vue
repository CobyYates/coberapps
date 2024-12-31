<template>
  <v-row v-editable="blok" class="c-projects bg-black py-10">
    <v-col class="pt-12 pb-16 text-white">
      <h2 class="text-h2 mb-8 text-center">{{ blok?.title }}</h2>
      <p class="mb-10 text-center">{{ blok?.description }}</p>
      <v-row class="c-projects__container" justify="center">
        <v-col cols="12" md="11" xl="8" class="d-flex flex-wrap justify-center">
          <v-row>
            <v-col
              v-for="(project, index) in blok?.projects"
              :key="project?.company"
              cols="12"
              md="6"
            >
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  class="mx-auto"
                  v-bind="props"
                  color="black"
                  elevation="5"
                  :to="project?.url"
                >
                  <v-img
                    height="auto"
                    :src="project?.assets[0]?.image?.filename"
                    cover
                  >
                    <v-expand-transition>
                      <div
                        v-if="isHovering"
                        class="d-flex transition-fast-in-fast-out bg-black v-card--reveal text-h4 align-center justify-center"
                        style="height: 100%"
                      >
                        <p>{{ project?.company }}</p>
                      </div>
                    </v-expand-transition>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({ blok: Object });

const languages = [
  {
    language: "HTML",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/54b7a89046/html.png?cv=1735231028991",
  },
  {
    language: "CSS",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/511b1d0bd5/css.png?cv=1735231027524",
  },
  {
    language: "JavaScript",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/d995787445/javascript.png?cv=1735231029122",
  },
  {
    language: "Vue",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/ea8aa6b1f0/vue.png?cv=1735231028987",
  },
  {
    language: "Vuetify",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/0308317130/vuetify.png?cv=1735231027690",
  },
  {
    language: "React",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/c5875dd018/react.png/m/82x0?cv=1735231029074",
  },
  {
    language: "Sass",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/103968ca86/sass.png/m/82x0?cv=1735231027606",
  },
  {
    language: "Tailwind",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/7ac8aecd14/tailwind.png/m/82x0?cv=1735231027528",
  },
  {
    language: "PHP",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/cf8f6f8b8b/mysql.png/m/82x0?cv=1735231027576",
  },
  {
    language: "Bootstrap",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/824c415010/bootstrap.png/m/82x0?cv=1735231027632",
  },
  {
    language: "jQuery",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/3f408a9ff1/jquery.png/m/82x0?cv=1735231027498",
  },
  {
    language: "C#",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/fe2bfdb42e/c.png/m/82x0?cv=1735231027451",
  },
  {
    language: "GraphQL",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/2508dceb45/graphql.png/m/82x0?cv=1735231027522",
  },
];

const platforms = [
  {
    platform: "Shopify",
    image:
      "https://a-us.storyblok.com/f/1020159/147x147/f03ec5023d/shopify-logo.png/m/147x0?cv=1735227654510",
  },
  {
    platform: "Contentful",
    image:
      "https://a-us.storyblok.com/f/1020159/147x147/24c6ff9848/contentful-logo.png?cv=1735398224147",
  },
  {
    platform: "Storyblok",
    image:
      "https://a-us.storyblok.com/f/1020159/125x147/62d608315d/storyblok-logo.png/m/0x140?cv=1735227700056",
  },
  {
    platform: "Firebase",
    image:
      "https://a-us.storyblok.com/f/1020159/120x147/b4fcb047a6/firebase-logo.png?cv=1735398269770",
  },
  {
    platform: "Adobe XD",
    image:
      "https://a-us.storyblok.com/f/1020159/151x147/1143a0b096/adobe-xd-logo.png/m/151x0?cv=1735398256971",
  },
  {
    platform: "Adobe Illustrator",
    image:
      "https://a-us.storyblok.com/f/1020159/151x147/c0f588080d/adobe-illustrator-logo.png/m/151x0?cv=1735398257015",
  },
  {
    platform: "WordPress",
    image:
      "https://a-us.storyblok.com/f/1020159/147x147/c52a8ff2e4/wordpress-lgo.png/m/147x0?cv=1735398302212",
  },
  {
    platform: "XAMP",
    image:
      "https://a-us.storyblok.com/f/1020159/146x147/2327da4196/xampp.png/m/0x140?cv=1735398342817",
  },
  {
    platform: "Cloudflare",
    image:
      "https://a-us.storyblok.com/f/1020159/147x147/a50b774700/cloudflare-logo.png/m/147x0?cv=1735398342835",
  },
  {
    platform: "Vercel",
    image:
      "https://a-us.storyblok.com/f/1020159/147x147/1e782de262/vercel-logo.png/m/147x0?cv=1735398342761",
  },
  {
    platform: "Netlify",
    image:
      "https://a-us.storyblok.com/f/1020159/167x147/edeec18a93/nacelle-logo.png/m/167x0?cv=1735398344317",
  },
];
</script>

<style lang="scss" scoped>
.c-projects {
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    width: 100%;
  }
}
</style>
