<template>
  <div>
    <v-sheet v-if="topNavigation" :color="backgroundColor">
      <nav class="px-10 py-2">
        <v-row>
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon v-if="navigationDrawer" variant="text" @click.stop="drawer = !drawer" />
          </v-col>
          <v-col class="d-flex justify-center align-center">
            <v-img v-if="topNavigation.logo.filename" :src="topNavigation.logo.filename" max-width="200" />
          </v-col>
          <v-col class="d-flex justify-end align-center">
            <nuxt-link v-for="icon in topNavigation.socialLinks" :key="icon.i" :href="icon.url" target="_blank">
              <v-icon :size="topNavigation.socialIconSize" :color="iconColor(icon.color[0])">{{ icon.value }}</v-icon>
            </nuxt-link>
          </v-col>
        </v-row>
        <div>
        </div>
      </nav>
    </v-sheet>
    <v-sheet v-if="subNavigationBar && showSubNav" :color="backgroundColor"
      class="c-navigation__sub-navigation d-flex justify-center">
      <nav class="d-flex align-center justify-space-between px-10 py-2" :style="subNavStyle">
        <template v-for="navItem in subNavigationBar.navItems" :key="navItem.i">
          <nuxt-link v-if="navItem.externalLink" :href="navItem.url" target="_blank"
            class="c-navigation__sub-navigation__link mx-3" :class="textColor">
            <v-icon class="pr-3" v-if="navItem.icon">{{ navItem.icon }}</v-icon>
            {{ navItem.linkText }}
          </nuxt-link>
          <nuxt-link v-else :to="navItem.url" class="c-navigation__sub-navigation__link mx-3" :class="textColor">
            <v-icon class="pr-3" v-if="navItem.icon">{{ navItem.icon }}</v-icon>
            {{ navItem.linkText }}
          </nuxt-link>
        </template>
      </nav>
    </v-sheet>

    <v-navigation-drawer v-model="drawer" v-if="navigationDrawer" temporary class="c-navigation__drawer">
      <v-list class="c-navigation__drawer-list py-0">
        <v-list-item v-for="item in navigationDrawer.navItems" :key="item.i" :to="item.url" :value="item.linkText"
          class="c-navigation__drawer-list-item">
          <v-list-item-title>
            {{ item.linkText }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import breakpoint from '~/mixin/breakpoint'
export default {
  data() {
    return {
      nav: null,
      drawer: false
    }
  },
  mixins: [breakpoint],
  computed: {
    topNavigation() {
      let result = null
      const nav = this.nav
      if (nav && nav.content && nav.content.topNavigation.length > 0) {
        result = nav.content.topNavigation[0]
      }
      return result
    },
    navigationDrawer() {
      let result = null
      const nav = this.nav
      if (nav && nav.content && nav.content.navigationDrawer.length > 0) {
        result = nav.content.navigationDrawer[0]
      }
      return result
    },
    subNavigationBar() {
      let result = null
      const nav = this.nav
      if (nav && nav.content && nav.content.subNavigationBar.length > 0) {
        result = nav.content.subNavigationBar[0]
      }
      return result
    },
    backgroundColor() {
      let result = 'white'
      const nav = this.nav
      if (nav && nav.content && nav.content.backgroundColor.length > 0) {
        let color = nav.content.backgroundColor[0]
        result = color.themeColor
      }
      return result
    },
    textColor() {
      let result = []
      const nav = this.nav
      const color = nav.content.textColor[0]
      if (color && color.themeColor != "") {
        result.push(color.colorAdjustment != "" ? `text-${color.themeColor}-${color.colorAdjustment}` : `text-${color.themeColor}`)
      } else if (color && color.customColor.value != "") {
        result.push(color.customColor.value)
      }
      return result
    },
    subNavStyle() {
      let result = []
      const nav = this.subNavigationBar
      if (nav.maxWidth) {
        result.push({ width: nav.maxWidth })
      }
      return result
    },
    showSubNav() {
      let result = true
      const nav = this.subNavigationBar
      const breakpoint = this.breakpoint
      if (nav && nav.hideOnMobile && breakpoint.smAndDown) {
        result = false
      } else if (nav && nav.hideOnTablet && breakpoint.md) {
        return false
      }
      return result
    },
  },
  methods: {
    iconColor(color) {
      let result = ""
      if (color && color.themeColor != "") {
        result = color.colorAdjustment != "" ? `${color.themeColor}-${color.colorAdjustment}` : color.themeColor
      } else if (color && color.customColor.value != "") {
        result = color.customColor.value
      }
      return result
    }
  },
  async beforeMount() {
    const story = await useAsyncStoryblok("globalNavigation", { version: "draft" });
    this.nav = story
  },
}
</script>

<style lang="scss" scoped>
.c-navigation {
  &__drawer {
    &-list {
      &-item {
        border-top: solid rgb(196, 196, 196) .25px;
      }
    }
  }

  &__sub-navigation {
    &__link {
      text-decoration: none;
      display: flex;
      align-content: center;
    }
  }
}
</style>