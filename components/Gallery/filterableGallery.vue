<template>
  <v-row :style="rowStyle" class="mx-auto c-filterable-gallery">
    <v-col>
      <v-row>
        <v-col>
          <typography
            v-if="title"
            v-bind="title[0]"
            class="c-filterable-gallery__title"
          />
          <typography
            v-if="subtitle"
            v-bind="subtitle[0]"
            class="c-filterable-gallery__subtitle"
          />
          <typography
            v-if="description"
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
                  :class="['d-flex align-center', selectedClass]"
                >
                  {{ item }}
                </v-btn>
              </v-item>
            </div>
          </v-item-group>

          <div
            class="c-filterable-gallery__image-container"
            v-if="filterableGalleryGroups.length > 0"
          >
            <v-img
              v-for="(item, i) in images"
              :key="item.i"
              class="mb-3 c-filterable-gallery__image"
              @click="openDialog(item)"
              height="100%"
              :src="item"
              cover
            />
          </div>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="60vw" >
          <v-img :src="image" contain max-height="90vh" />
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
        results.unshift('All')
      }
      return results;
    },
    images() {
      const groups = this.filterableGalleryGroups;
      let val = groups.map((e) => e.images.map((e) => e.filename));
      let result = val.map((e) => e[0]);
      const tab = this.tab;
      if (tab != 0) {
        result = groups[tab].images.map((e) => e.filename);
      }
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
    openDialog(image) {
      this.dialog = true;
      this.image = image;
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
    }
  }
}
</style>
