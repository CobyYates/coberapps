<template>
  <div>
    <v-sheet v-if="topNavigationVal" :color="backgroundColorVal">
      <nav class="px-10 py-2">
        <v-row>
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon v-if="navigationDrawerVal" variant="text" @click.stop="drawer = !drawer" />
          </v-col>
          <v-col class="d-flex justify-center align-center">
            <v-img v-if="topNavigationVal.logo.filename" :src="topNavigationVal.logo.filename" max-width="200" />
          </v-col>
          <v-col class="d-flex justify-end align-center">
            <nuxt-link v-for="icon in topNavigationVal.socialLinks" :key="icon.i" :href="icon.url" target="_blank">
              <v-icon :size="topNavigationVal.socialIconSize" :color="iconColor(icon.color[0])">{{ icon.value }}</v-icon>
            </nuxt-link>
          </v-col>
        </v-row>
        <div>
        </div>
      </nav>
    </v-sheet>
    <v-sheet v-if="subNavigationBarVal && showSubNav" :color="backgroundColorVal"
      class="c-navigation__sub-navigation d-flex justify-center">
      <nav class="d-flex align-center justify-space-between px-10 py-2" :style="subNavStyle">
        <template v-for="navItem in subNavigationBarVal.navItems" :key="navItem.i">
          <nuxt-link v-if="navItem.externalLink" :href="navItem.url" target="_blank"
            class="c-navigation__sub-navigation__link mx-3" :class="navTextColor">
            <v-icon class="pr-3" v-if="navItem.icon">{{ navItem.icon }}</v-icon>
            {{ navItem.linkText }}
          </nuxt-link>
          <nuxt-link v-else :to="navItem.url" class="c-navigation__sub-navigation__link mx-3" :class="navTextColor">
            <v-icon class="pr-3" v-if="navItem.icon">{{ navItem.icon }}</v-icon>
            {{ navItem.linkText }}
          </nuxt-link>
        </template>
      </nav>
    </v-sheet>

    <v-navigation-drawer v-model="drawer" v-if="navigationDrawer" temporary class="c-navigation__drawer">
      <v-list class="c-navigation__drawer-list py-0">
        <v-list-item v-for="item in navigationDrawer[0].navItems" :key="item.i" :to="item.url" :value="item.linkText"
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
      drawer: false
    }
  },
  props: {
    topNavigation: {
      type: Array,
      default: () => []
    },
    navigationDrawer: {
      type: Array,
      default: () => []
    },
    subNavigationBar: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: Array,
      default: () => []
    },
    textColor: {
      type: Array,
      default: () => []
    },
  },
  mixins: [breakpoint],
  computed: {
    topNavigationVal() {
      let result = null
      const topNavigation = this.topNavigation
      if (topNavigation && topNavigation.length > 0) {
        result = topNavigation[0]
      }
      return result
    },
    navigationDrawerVal() {
      let result = null
      const navigationDrawer = this.navigationDrawer
      if (navigationDrawer && navigationDrawer.length > 0) {
        result = navigationDrawer[0]
      }
      return result
    },
    subNavigationBarVal() {
      let result = null
      const subNavigationBar = this.subNavigationBar
      if (subNavigationBar && subNavigationBar.length > 0) {
        result = subNavigationBar[0]
      }
      return result
    },
    backgroundColorVal() {
      let result = 'white'
      const backgroundColor = this.backgroundColor
      if (backgroundColor && backgroundColor.length > 0) {
        let color = backgroundColor[0]
        result = color.themeColor
      }
      return result
    },
    navTextColor() {
      let result = []
      const textColor = this.textColor
      let color
      if(textColor && textColor.length > 0) {
        color = textColor[0]
      }
      if (color && color.themeColor != "") {
        result.push(color.colorAdjustment != "" ? `text-${color.themeColor}-${color.colorAdjustment}` : `text-${color.themeColor}`)
      } else if (color && color.customColor.value != "") {
        result.push(color.customColor.value)
      }
      return result
    },
    subNavStyle() {
      let result = []
      const subNavigationBar = this.subNavigationBar
      if (subNavigationBar.maxWidth) {
        result.push({ width: subNavigationBar.maxWidth })
      }
      return result
    },
    showSubNav() {
      let result = true
      const subNavigationBar = this.subNavigationBar
      const breakpoint = this.breakpoint
      if (subNavigationBar && subNavigationBar.hideOnMobile && breakpoint.smAndDown) {
        result = false
      } else if (subNavigationBar && subNavigationBar.hideOnTablet && breakpoint.md) {
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