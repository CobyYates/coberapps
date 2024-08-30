<template>
  <v-row :style="rowStyle" class="mx-auto c-filterable-gallery">
    <v-col>
      <v-row>
        <v-col>
          <typography
            v-if="title.length > 0"
            v-bind="title[0]"
            class="c-filterable-gallery__title"
          />
          <typography
            v-if="subtitle.length > 0"
            v-bind="subtitle[0]"
            class="c-filterable-gallery__subtitle"
          />
          <typography
            v-if="description.length > 0"
            v-bind="description[0]"
            class="c-filterable-gallery__description"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-item-group
            @update:modelValue="updateGallery"
            selected-class="bg-primary"
            v-model="tab"
            class="mb-6"
          >
            <div
              class="d-flex flex-wrap justify-center c-filterable-gallery__filter-buttons"
            >
              <v-item
                v-slot="{ isSelected, selectedClass, toggle }"
                v-for="(item, i) in tabs"
                :key="i"
              >
                <v-btn
                  @click="toggle"
                  size="x-large"
                  variant="text"
                  :class="[
                    'd-flex align-center',
                    tab == i ? 'bg-primary' : selectedClass,
                  ]"
                >
                  {{ item }}
                </v-btn>
              </v-item>
            </div>
          </v-item-group>

          <div
            class="c-filterable-gallery__image-container mb-16"
            v-if="images.length > 0"
          >
            <v-img
              v-for="(item, i) in images"
              :key="item.i"
              class="mb-3 c-filterable-gallery__image"
              @click="openDialog(item, i)"
              height="100%"
              :src="item"
              cover
              :alt="item.alt"
            />
          </div>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="60vw">
        <div class="d-flex align-center">
          <v-icon
            icon="mdi-chevron-left"
            size="70"
            color="white"
            @click="previous"
          />
          <v-img :src="image" contain max-height="90vh" :alt="image.alt" />
          <v-icon
            icon="mdi-chevron-right"
            size="70"
            color="white"
            @click="next"
          />
        </div>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      dialog: false,
      image: null,
      index: null,
      count: 0,
    };
  },
  props: {
    filterableGalleryGroups: Array,
    title: Array,
    subtitle: Array,
    description: Array,
    maxWidth: String,
  },
  computed: {
    tabs() {
      let results;
      const groups = this.filterableGalleryGroups;
      if (groups.length > 0) {
        results = groups.map((e) => e.tagTitle);
        results.unshift("All"); // Add the "All" tab
      }
      return results;
    },
    images() {
      const groups = this.filterableGalleryGroups;
      let allImages = groups.map((e) => e.images.map((e) => e.filename));
      let allImagesFlat = [].concat(...allImages);

      const tab = this.tab;
      if (tab === 0) {
        return allImagesFlat; // Show all images for the "All" tab
      } else {
        return groups[tab - 1].images.map((e) => e.filename); // Show filtered images for other tabs
      }
    },
    rowStyle() {
      let result;
      return result;
    },
  },
  methods: {
    styleIndex(i) {
      let result = i / 11;
      return Math.trunc(result);
    },
    updateGallery(index) {
      this.tab = index;
    },
    openDialog(image, i) {
      this.index = i;
      this.dialog = true;
      this.image = image;
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
.c-filterable-gallery {
  &__image {
    cursor: pointer;
    &-container {
      columns: 4;
      @media screen and (max-width: 1280px) {
        columns: 2;
      }
    }
  }
}
</style>
