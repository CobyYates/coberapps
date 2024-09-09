<template>
  <v-row v-editable="blok" class="c-project mx-auto my-10">
    <v-col>
      <v-row class="mb-10" justify="center">
        <v-col cols="11" md="6">
          <v-carousel
            hide-delimiter-background
            :show-arrows="imageGallerySmall.length > 1"
            :show-delimiters="imageGallerySmall.length > 1"
          >
            <v-carousel-item
              v-for="(item, i) in imageGallerySmall"
              :key="i"
              @click="openDialog(item, i, 'small')"
              :src="item.filename"
              cover
              position="center"
              continuous
              cycle
              :alt="item.alt"
            />
          </v-carousel>
        </v-col>
        <v-col cols="11" md="6">
          <typography
            :text="title"
            add-accent-left
            element="h2"
            font-weight="thin"
          />
          <p v-if="subDescription">{{ subDescription }}</p>
          <v-table>
            <tbody>
              <tr v-for="(item, i) in tableValues" :key="i">
                <td class="py-6">{{ item.name }}</td>
                <td class="py-6">{{ $props[item.value] }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        v-if="imageGalleryLarge && imageGalleryLarge.length > 0"
      >
        <v-col cols="11" md="12">
          <v-carousel
            :height="breakpoint.mdAndUp ? '800' : '400'"
            hide-delimiter-background
            :show-arrows="imageGalleryLarge.length > 1"
            :show-delimiters="imageGalleryLarge.length > 1"
          >
            <v-carousel-item
              v-for="(item, i) in imageGalleryLarge"
              :key="i"
              @click="openDialog(item, i, 'large')"
              :src="item.filename"
              cover
              position="center"
              continuous
              cycle
              :alt="item.alt"
            />
          </v-carousel>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="60vw">
        <v-carousel
          :height="breakpoint.mdAndUp ? '90vh' : '400'"
          hide-delimiter-background
          v-model="index"
          :show-arrows="images.length > 1"
          :show-delimiters="images.length > 1"
        >
          <v-carousel-item
            v-for="(item, i) in images"
            :key="i"
            :src="item.filename"
            contain
            position="center"
            continuous
            cycle
            :alt="item.alt"
          />
        </v-carousel>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import Breakpoint from "~/mixin/breakpoint";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subDescription: {
      type: String,
      default: "",
    },
    projectName: {
      type: String,
      default: "",
    },
    designer: {
      type: String,
      default: "",
    },
    remodelStyle: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    imageGallerySmall: {
      type: Array,
      default: () => [],
    },
    imageGalleryLarge: {
      type: Array,
      default: () => [],
    },
  },
  mixins: [Breakpoint],
  data() {
    return {
      tableValues: [
        {
          name: "Project Name",
          value: "projectName",
        },
        {
          name: "Designer",
          value: "designer",
        },
        {
          name: "Remodel Style",
          value: "remodelStyle",
        },
        {
          name: "Location",
          value: "location",
        },
        {
          name: "Project Description",
          value: "description",
        },
      ],
      tab: 0,
      dialog: false,
      images: null,
      index: null,
      count: 0,
    };
  },
  methods: {
    openDialog(image, i, size) {
      let gallery = this.imageGalleryLarge;
      if (size === "small") {
        gallery = this.imageGallerySmall;
      }
      this.index = i;
      this.dialog = true;
      this.images = gallery;
    },
    previous() {
      if (this.index != 0) {
        this.image = this.images[(this.index -= 1)];
      }
    },
    next() {
      if (this.index != this.images.length - 1) {
        this.image = this.images[(this.index += 1)];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.c-project {
  max-width: 1200px;
}
</style>
