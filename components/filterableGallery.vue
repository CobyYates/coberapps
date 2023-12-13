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
                    i == 0 && tab == 0 ? 'bg-primary' : selectedClass,
                  ]"
                >
                  {{ item }}
                </v-btn>
              </v-item>
            </div>
          </v-item-group>

          <div
            class="c-filterable-gallery__image-container"
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
          <v-img :src="image" contain max-height="90vh" />
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
        // results.unshift("All");
      }
      return results;
    },
    images() {
      const groups = this.filterableGalleryGroups;
      let val = groups.map((e) => e.images.map((e) => e.filename));
      let arrs = val.map((e) => e);
      let result = [];
      arrs.forEach((e) => {
        for (let i = 0; i < e.length; i++) {
          result.push(e[i]);
        }
      });
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
      console.log("testing index", index);
      // let val = index-= 2;
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
