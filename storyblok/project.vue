<template>
  <v-row v-editable="blok" class="c-project bg-black" justify="center">
    <v-col class="text-white" cols="12" md="10">
      <v-row class="c-project__container" justify="center">
        <v-col cols="12">
          <v-row class="mb-5">
            <v-col cols="12" class="mx-auto">
              <NuxtImg
                :src="blok?.assets[0]?.image?.filename"
                provider="storyblok"
                format="webp"
                sizes="xs:100vw sm:100vw md:80vw lg:80vw"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="10"
              md="4"
              :class="$vuetify?.display?.smAndDown ? 'text-center mx-auto' : ''"
            >
              <h1 class="text-h3 mb-3">{{ blok?.company }}</h1>
              <div class="text-body-1" v-html="richText(blok?.description)" />

              <v-btn
                v-if="blok?.url"
                color="primary"
                variant="outlined"
                rounded="xl"
                size="large"
                class="mt-3"
                :to="blok?.url"
              >
                View Website
              </v-btn>
              <v-btn
                v-if="blok?.url"
                color="primary"
                variant="outlined"
                rounded="xl"
                size="43"
                class="mt-3 ml-3"
                icon
                :href="blok?.url"
                target="_blank"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </v-col>
            <v-col
              cols="6"
              md="4"
              :class="$vuetify?.display?.smAndDown ? 'px-6' : ''"
            >
              <h3 class="font-weight-light text-grey">Category</h3>
              <template
                v-for="category in blok?.projectType"
                :key="category?.i"
              >
                <p class="text-body-1 font-weight-bold">
                  {{ category }}
                </p>
              </template>
            </v-col>
            <v-col
              cols="6"
              md="4"
              :class="$vuetify?.display?.smAndDown ? 'px-6' : ''"
            >
              <h3 class="font-weight-light text-grey mb-1">Languages</h3>
              <v-avatar
                size="40"
                v-for="language in blok?.languages"
                :key="language?.i"
                tile
                class="mr-2"
              >
                <v-tooltip :text="language" location="bottom">
                  <template v-slot:activator="{ props }">
                    <NuxtImg
                      :src="
                        languages?.filter((e) => e?.language == language)[0]
                          ?.image
                      "
                      :alt="`${language} logo`"
                      provider="storyblok"
                      format="webp"
                      sizes="40"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </v-avatar>
              <h3 class="font-weight-light text-grey mt-2 mb-1">Platforms</h3>
              <v-avatar
                size="40"
                v-for="platform in blok?.platforms"
                :key="platform?.i"
                tile
                class="mr-2"
              >
                <v-tooltip :text="platform" location="bottom">
                  <template v-slot:activator="{ props }">
                    <NuxtImg
                      :src="
                        platforms?.filter((e) => e?.platform == platform)[0]
                          ?.image
                      "
                      :alt="`${platform} logo`"
                      provider="storyblok"
                      format="webp"
                      sizes="40"
                      v-bind="props"
                    />
                  </template>
                </v-tooltip>
              </v-avatar>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h2 class="text-center text-h4">Project Details</h2>
            </v-col>
          </v-row>
          <v-row v-for="(asset, i) in blok?.assets" :key="i" align="center">
            <v-col cols="12" md="6">
              <NuxtImg
                :src="asset?.image?.filename"
                sizes="xs:100vw md:40vw"
                provider="storyblok"
                format="webp"
              />
            </v-col>
            <v-col
              cols="10"
              sm="8"
              md="6"
              :class="$vuetify?.display?.smAndDown ? 'mx-auto' : ''"
            >
              <h3
                class="text-h5 mb-3 md-text-center"
                :class="$vuetify?.display?.smAndDown ? 'text-center' : ''"
              >
                {{ asset?.title }}
              </h3>
              <div
                class="text-body-1"
                :class="$vuetify?.display?.smAndDown ? 'text-center' : ''"
                v-html="richText(asset?.description)"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import RichTextResolver from "storyblok-js-client/richTextResolver";
defineProps({ blok: Object });

const richText = (text) => {
  const resolver = new RichTextResolver();
  let result;
  result = resolver?.render(text);
  return result;
};

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
    language: "Nuxt",
    image:
      "https://s3.amazonaws.com/a-us.storyblok.com/f/1020159/512x512/5d948fd244/nuxt-logo.svg?cv=1735649207155",
  },
  {
    language: "React",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/c5875dd018/react.png?cv=1735231029074",
  },
  {
    language: "Sass",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/103968ca86/sass.png?cv=1735231027606",
  },
  {
    language: "Tailwind",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/7ac8aecd14/tailwind.png?cv=1735231027528",
  },
  {
    language: "PHP",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/cf8f6f8b8b/mysql.png?cv=1735231027576",
  },
  {
    language: "Bootstrap",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/824c415010/bootstrap.png?cv=1735231027632",
  },
  {
    language: "jQuery",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/3f408a9ff1/jquery.png?cv=1735231027498",
  },
  {
    language: "C#",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/fe2bfdb42e/c.png?cv=1735231027451",
  },
  {
    language: "GraphQL",
    image:
      "https://a-us.storyblok.com/f/1020159/82x82/2508dceb45/graphql.png?cv=1735231027522",
  },
];

const platforms = [
  {
    platform: "Shopify",
    image:
      "https://a-us.storyblok.com/f/1020159/147x147/f03ec5023d/shopify-logo.png?cv=1735227654510",
  },
  {
    platform: "Contentful",
    image:
      "https://a-us.storyblok.com/f/1020159/147x147/24c6ff9848/contentful-logo.png?cv=1735398224147",
  },
  {
    platform: "Storyblok",
    image:
      "https://a-us.storyblok.com/f/1020159/125x147/62d608315d/storyblok-logo.png?cv=1735227700056",
  },
  {
    platform: "Firebase",
    image:
      "https://a-us.storyblok.com/f/1020159/147x147/a9db2dd52e/adobe-xd.png?cv=1736007873812",
  },
  {
    platform: "Adobe XD",
    image:
      "https://a-us.storyblok.com/f/1020159/151x147/1143a0b096/adobe-xd-logo.png?cv=1735398256971",
  },
  {
    platform: "Adobe Illustrator",
    image:
      "https://a-us.storyblok.com/f/1020159/151x147/c0f588080d/adobe-illustrator-logo.png?cv=1735398257015",
  },
  {
    platform: "WordPress",
    image:
      "https://a-us.storyblok.com/f/1020159/147x147/c52a8ff2e4/wordpress-lgo.png?cv=1735398302212",
  },
  {
    platform: "XAMP",
    image:
      "https://a-us.storyblok.com/f/1020159/146x147/2327da4196/xampp.png?cv=1735398342817",
  },
  {
    platform: "Cloudflare",
    image:
      "https://a-us.storyblok.com/f/1020159/147x147/a50b774700/cloudflare-logo.png?cv=1735398342835",
  },
  {
    platform: "Vercel",
    image:
      "https://a-us.storyblok.com/f/1020159/147x147/1e782de262/vercel-logo.png?cv=1735398342761",
  },
  {
    platform: "Netlify",
    image:
      "https://a-us.storyblok.com/f/1020159/167x147/edeec18a93/nacelle-logo.png?cv=1735398344317",
  },
];
</script>

<style lang="scss" scoped>
.c-project {
}
</style>
