<template>
  <nav>
    <v-app-bar
      scroll-behavior="fully-hide"
      class="c-navigation"
      elevation="0"
      fully-hide
      height="80"
      hidden
    >
      <ul class="d-flex ga-6 ma-auto">
        <NuxtLink
          v-for="item in navItems"
          :key="item.i"
          :to="item?.link"
          class="text-white text-decoration-none"
        >
          <li class="text-h6">
            {{ item?.text }}
          </li>
        </NuxtLink>
      </ul>
    </v-app-bar>
  </nav>
</template>

<script setup>
// import breakpoint from "~/mixin/breakpoint";

defineProps({ blok: Object });

const navItems = [
  { text: "Projects", link: "/projects" },
  { text: "Resume", link: "/resume" },
  { text: "Recommendations", link: "/recommendations" },
  { text: "Contact", link: "/contact" },
];
</script>

<style lang="scss" scoped>
.c-navigation {
  background-color: rgba(31,31,31,.9)!important;
  li {
    list-style: none;
  }
}
</style>
