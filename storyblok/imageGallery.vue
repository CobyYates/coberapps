<template>
  <v-row :style="rowStyle" class="c-image-gallery mx-auto">
    <v-col>
      <typography v-if="title && title.length > 0" v-bind="title[0]" class="c-section__title" />
      <typography v-if="subtitle && subtitle.length > 0" v-bind="subtitle[0]" class="c-section__subtitle" />
      <typography v-if="description && description.length > 0" v-bind="description[0]" class="c-section__description" />
      <div v-if="images && images.length > 0" class="grid mb-16">
        <gallery-item v-for="(item, i) in images" :key="item.i" v-bind="item" class="hover"
          :style="`--n: ${styleIndex(i)};`" :id="`image${i}`">
        </gallery-item>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => {}
    },
    title: {
      type: Array,
      default: () => {}
    },
    subtitle: {
      type: Array,
      default: () => {}
    },
    description: {
      type: Array,
      default: () => {}
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  computed: {
    rowStyle() {
      let result = [];
      const maxWidth = this.maxWidth
      if (maxWidth) {
        result.push({  width: maxWidth });
      }
      return result;
    },
  },
  methods: {
    styleIndex(i) {
      let result = i / 11;
      return Math.trunc(result);
    }
  },
}
</script>

<style lang="scss" scoped>
.c-image-gallery {
  max-width: 100%;
}
.grid {
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 30vw;
  list-style: none;
}

.grid .hover:nth-child(11n + 9) {
  grid-column: 1 / -1;
  grid-row: span 2;
}

.grid .hover {
  width: 100%;
  height: 100%;
}

.grid .hover {
  object-fit: cover;
  background: #f5f3f4;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
}

@media (min-width: 850px) {
  .grid {
    grid-gap: 24px;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 12vw;
  }

  .grid .hover {
    --row-step: calc(4 * var(--n));
  }

  .grid .hover:nth-child(11n + 1) {
    grid-column: 1;
    grid-row: calc(1 + var(--row-step)) / span 2;
  }

  .grid .hover:nth-child(11n + 2) {
    grid-column: 2 / span 2;
    grid-row: calc(1 + var(--row-step)) / span 2;
  }

  .grid .hover:nth-child(11n + 3) {
    grid-column: 4;
    grid-row: calc(1 + var(--row-step));
  }

  .grid .hover:nth-child(11n + 4) {
    grid-column: 5;
    grid-row: calc(1 + var(--row-step));
  }

  .grid .hover:nth-child(11n + 5) {
    grid-column: 4;
    grid-row: calc(2 + var(--row-step));
  }

  .grid .hover:nth-child(11n + 6) {
    grid-column: 5;
    grid-row: calc(2 + var(--row-step)) / span 2;
  }

  .grid .hover:nth-child(11n + 7) {
    grid-column: 2;
    grid-row: calc(3 + var(--row-step));
  }

  .grid .hover:nth-child(11n + 8) {
    grid-column: 1;
    grid-row: calc(3 + var(--row-step));
  }

  .grid .hover:nth-child(11n + 9) {
    grid-column: 3 / span 2;
    grid-row: calc(3 + var(--row-step)) / span 2;
  }

  .grid .hover:nth-child(11n + 10) {
    grid-column: 1 / span 2;
    grid-row: calc(4 + var(--row-step));
  }

  .grid .hover:nth-child(11n + 11) {
    grid-column: 5;
    grid-row: calc(4 + var(--row-step));
  }
}
</style>
